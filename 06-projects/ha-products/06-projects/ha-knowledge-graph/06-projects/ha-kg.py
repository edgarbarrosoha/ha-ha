#!/usr/bin/env python3
"""
ha-knowledge-graph: Knowledge graph generator for HA Obsidian vaults.

Follows HA axioms:
  - 6 dimensions always present (Legacy, Community, Learning, Technology, Context, Projects)
  - Structure is fractal (same pattern at any scale)
  - Time is explicit (recency visible)
  - Simultaneous complexity (cross-dimensional links highlighted)

Zero external dependencies. Generates self-contained HTML with vis.js.

Usage:
    python3 ha-kg.py [vault_path] [--output path] [--title name]
    python3 ha-kg.py                                          # current dir
    python3 ha-kg.py /Users/edgarbarroso/Documents/ha-eb      # specific vault
    python3 ha-kg.py --output graph.html                      # custom output
"""

import os
import re
import sys
import json
import html
from pathlib import Path
from collections import defaultdict
from datetime import datetime

# ── HA Axiom: 6 Dimensions ──────────────────────────────────────────────

DIMENSIONS = {
    "00": {"name": "Root",       "color": "#8B8B8B", "desc": "Coordination & orchestration"},
    "01": {"name": "Legacy",     "color": "#C0392B", "desc": "Purpose & long-term objectives"},
    "02": {"name": "Community",  "color": "#2980B9", "desc": "People, teams & stakeholders"},
    "03": {"name": "Learning",   "color": "#27AE60", "desc": "Knowledge & capability building"},
    "04": {"name": "Technology", "color": "#8E44AD", "desc": "Tools & infrastructure"},
    "05": {"name": "Context",    "color": "#F39C12", "desc": "Environment & external conditions"},
    "06": {"name": "Projects",   "color": "#16A085", "desc": "Execution & deliverables"},
}

DIM_UNKNOWN = {"name": "Other", "color": "#555555", "desc": "Unclassified"}

# ── Parsing ──────────────────────────────────────────────────────────────

WIKILINK_RE = re.compile(r'\[\[([^\]|#]+)(?:#[^\]|]*)?\s*(?:\|[^\]]+)?\]\]')
TAG_RE = re.compile(r'(?:^|\s)#([a-zA-Z][\w/-]*)', re.MULTILINE)
HEADING_RE = re.compile(r'^(#{1,6})\s+(.+)$', re.MULTILINE)
YAML_RE = re.compile(r'^---\s*\n(.*?)\n---', re.DOTALL)

SKIP_DIRS = {'.obsidian', '.git', '.trash', 'node_modules', '__pycache__', '.gitnexus'}


def detect_dimension(rel_path: str) -> str:
    """Classify a file into one of the 6 HA dimensions by its folder prefix."""
    parts = Path(rel_path).parts
    if parts:
        prefix = parts[0][:2]
        if prefix in DIMENSIONS:
            return prefix
    return "00"


def parse_note(filepath: Path, vault_root: Path) -> dict:
    """Extract structure from a single markdown note."""
    try:
        content = filepath.read_text(encoding='utf-8', errors='replace')
    except Exception:
        return None

    rel = str(filepath.relative_to(vault_root))
    name = filepath.stem
    dim = detect_dimension(rel)
    stat = filepath.stat()

    # Extract wikilinks (target note names)
    raw_links = WIKILINK_RE.findall(content)
    links = []
    for link in raw_links:
        # Handle folder/note paths — take the last component
        target = link.strip().split('/')[-1] if '/' in link else link.strip()
        if target:
            links.append(target)

    # Extract tags
    tags = TAG_RE.findall(content)

    # Extract headings
    headings = [(len(m.group(1)), m.group(2).strip()) for m in HEADING_RE.finditer(content)]

    # Extract YAML frontmatter keys (lightweight — just key names)
    yaml_keys = []
    yaml_match = YAML_RE.match(content)
    if yaml_match:
        for line in yaml_match.group(1).split('\n'):
            if ':' in line:
                yaml_keys.append(line.split(':')[0].strip())

    return {
        "name": name,
        "path": rel,
        "dimension": dim,
        "links": links,
        "tags": tags[:20],  # cap for performance
        "headings": headings[:10],
        "yaml_keys": yaml_keys,
        "size": len(content),
        "modified": stat.st_mtime,
        "depth": len(Path(rel).parts) - 1,  # folder depth
    }


def scan_vault(vault_path: str) -> dict:
    """Walk the vault and parse all markdown files."""
    root = Path(vault_path).resolve()
    notes = {}

    for md in root.rglob('*.md'):
        # Skip hidden/excluded directories
        rel_parts = md.relative_to(root).parts
        if any(p in SKIP_DIRS or p.startswith('.') for p in rel_parts):
            continue
        # Don't follow symlinks into other vaults (stay fractal-local)
        if md.is_symlink():
            continue

        note = parse_note(md, root)
        if note:
            # Handle duplicate names: keep the one with more content
            if note["name"] in notes:
                if note["size"] > notes[note["name"]]["size"]:
                    notes[note["name"]] = note
            else:
                notes[note["name"]] = note

    return notes


# ── Graph Construction ───────────────────────────────────────────────────

def build_graph(notes: dict) -> dict:
    """Build nodes and edges from parsed notes."""
    nodes = []
    edges = []
    edge_set = set()
    note_names = set(notes.keys())

    # Track stats
    dim_counts = defaultdict(int)
    cross_dim_edges = 0
    same_dim_edges = 0
    phantom_count = 0

    # Find time range for normalization
    if notes:
        times = [n["modified"] for n in notes.values()]
        time_min, time_max = min(times), max(times)
        time_range = time_max - time_min if time_max > time_min else 1
    else:
        time_min, time_range = 0, 1

    # Build nodes
    for name, data in notes.items():
        link_count = len(data["links"])
        dim = data["dimension"]
        dim_info = DIMENSIONS.get(dim, DIM_UNKNOWN)
        dim_counts[dim] += 1

        # Recency: 0.0 (oldest) to 1.0 (newest)
        recency = (data["modified"] - time_min) / time_range

        nodes.append({
            "id": name,
            "label": name,
            "dimension": dim,
            "dimensionName": dim_info["name"],
            "color": dim_info["color"],
            "path": data["path"],
            "tags": data["tags"],
            "size": data["size"],
            "linkCount": link_count,
            "depth": data["depth"],
            "recency": round(recency, 3),
            "modified": datetime.fromtimestamp(data["modified"]).strftime("%Y-%m-%d"),
        })

    # Build edges
    for name, data in notes.items():
        src_dim = data["dimension"]
        for target in data["links"]:
            if target == name:
                continue  # skip self-links
            edge_key = (name, target)
            if edge_key in edge_set:
                continue
            edge_set.add(edge_key)

            is_phantom = target not in note_names
            if is_phantom:
                phantom_count += 1

            tgt_dim = notes[target]["dimension"] if target in note_names else "?"
            is_cross = src_dim != tgt_dim and tgt_dim != "?"

            if is_cross:
                cross_dim_edges += 1
            else:
                same_dim_edges += 1

            edges.append({
                "from": name,
                "to": target,
                "crossDimension": is_cross,
                "phantom": is_phantom,
            })

    # Dimension balance (for radar chart)
    dim_balance = {}
    for dim_id, dim_info in DIMENSIONS.items():
        if dim_id == "00":
            continue
        dim_balance[dim_info["name"]] = dim_counts.get(dim_id, 0)

    max_dim = max(dim_balance.values()) if dim_balance else 1

    stats = {
        "totalNotes": len(notes),
        "totalEdges": len(edges),
        "crossDimensionEdges": cross_dim_edges,
        "sameDimensionEdges": same_dim_edges,
        "phantomLinks": phantom_count,
        "orphans": sum(1 for n in notes if not notes[n]["links"] and
                       not any(e["to"] == n for e in edges)),
        "dimensionCounts": {DIMENSIONS.get(k, DIM_UNKNOWN)["name"]: v
                           for k, v in dim_counts.items()},
        "dimensionBalance": {k: round(v / max_dim, 2) for k, v in dim_balance.items()},
    }

    # Top hubs
    degree = defaultdict(int)
    for e in edges:
        degree[e["from"]] += 1
        degree[e["to"]] += 1
    hubs = sorted(degree.items(), key=lambda x: x[1], reverse=True)[:15]
    stats["topHubs"] = [{"name": h[0], "connections": h[1],
                         "dimension": DIMENSIONS.get(
                             notes[h[0]]["dimension"] if h[0] in notes else "00",
                             DIM_UNKNOWN)["name"]}
                        for h in hubs]

    return {"nodes": nodes, "edges": edges, "stats": stats}


# ── HTML Generation ──────────────────────────────────────────────────────

HTML_TEMPLATE = r"""<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{{TITLE}} — HA Knowledge Graph</title>
<script src="https://unpkg.com/vis-network@9.1.9/standalone/umd/vis-network.min.js"></script>
<style>
  :root {
    --bg: #0f0f1a;
    --surface: #1a1a2e;
    --surface2: #222240;
    --text: #e0e0e0;
    --text-dim: #8888aa;
    --accent: #16A085;
    --border: #333355;
  }
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    font-family: 'SF Mono', 'Fira Code', 'Consolas', monospace;
    background: var(--bg);
    color: var(--text);
    height: 100vh;
    overflow: hidden;
    display: flex;
  }

  /* ── Sidebar ── */
  #sidebar {
    width: 320px;
    min-width: 320px;
    background: var(--surface);
    border-right: 1px solid var(--border);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    z-index: 10;
  }
  #sidebar h1 {
    font-size: 14px;
    padding: 16px;
    border-bottom: 1px solid var(--border);
    color: var(--accent);
    letter-spacing: 2px;
    text-transform: uppercase;
  }
  #sidebar h1 span { color: var(--text-dim); font-weight: normal; }

  .section {
    padding: 12px 16px;
    border-bottom: 1px solid var(--border);
  }
  .section-title {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--text-dim);
    margin-bottom: 8px;
  }

  /* Search */
  #search {
    width: 100%;
    background: var(--surface2);
    border: 1px solid var(--border);
    color: var(--text);
    padding: 8px 12px;
    border-radius: 4px;
    font-family: inherit;
    font-size: 12px;
    outline: none;
  }
  #search:focus { border-color: var(--accent); }
  #search::placeholder { color: var(--text-dim); }

  /* Dimension legend */
  .dim-row {
    display: flex;
    align-items: center;
    padding: 4px 0;
    cursor: pointer;
    opacity: 1;
    transition: opacity 0.2s;
  }
  .dim-row.dimmed { opacity: 0.25; }
  .dim-dot {
    width: 10px; height: 10px;
    border-radius: 50%;
    margin-right: 8px;
    flex-shrink: 0;
  }
  .dim-name { font-size: 12px; flex: 1; }
  .dim-count {
    font-size: 11px;
    color: var(--text-dim);
    min-width: 30px;
    text-align: right;
  }

  /* Stats */
  .stat-row {
    display: flex;
    justify-content: space-between;
    padding: 3px 0;
    font-size: 12px;
  }
  .stat-label { color: var(--text-dim); }
  .stat-value { color: var(--text); font-weight: bold; }
  .stat-value.highlight { color: var(--accent); }

  /* Hubs */
  .hub-item {
    font-size: 11px;
    padding: 3px 0;
    display: flex;
    justify-content: space-between;
  }
  .hub-name { color: var(--text); cursor: pointer; }
  .hub-name:hover { color: var(--accent); }
  .hub-deg { color: var(--text-dim); }

  /* Radar chart */
  #radar-container {
    display: flex;
    justify-content: center;
    padding: 8px 0;
  }

  /* Detail panel */
  #detail {
    padding: 12px 16px;
    display: none;
  }
  #detail.active { display: block; }
  #detail-name {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 6px;
    color: var(--accent);
  }
  #detail-info { font-size: 11px; line-height: 1.6; }
  #detail-info .label { color: var(--text-dim); }
  #detail-tags { margin-top: 6px; }
  #detail-tags span {
    display: inline-block;
    background: var(--surface2);
    border: 1px solid var(--border);
    padding: 2px 6px;
    border-radius: 3px;
    font-size: 10px;
    margin: 2px;
    color: var(--text-dim);
  }

  /* Mode toggles */
  .toggle-row {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  }
  .toggle-btn {
    font-family: inherit;
    font-size: 10px;
    padding: 4px 10px;
    border-radius: 3px;
    border: 1px solid var(--border);
    background: var(--surface2);
    color: var(--text-dim);
    cursor: pointer;
    transition: all 0.2s;
  }
  .toggle-btn.active {
    border-color: var(--accent);
    color: var(--accent);
    background: rgba(22, 160, 133, 0.1);
  }

  /* ── Graph ── */
  #graph-container {
    flex: 1;
    position: relative;
  }
  #network { width: 100%; height: 100%; }

  /* Axis labels */
  .axis-label {
    position: absolute;
    font-size: 10px;
    color: var(--text-dim);
    letter-spacing: 1px;
    text-transform: uppercase;
    pointer-events: none;
    opacity: 0.4;
  }
  #axis-x { bottom: 20px; left: 50%; transform: translateX(-50%); }
  #axis-y { top: 50%; left: 20px; transform: rotate(-90deg) translateX(-50%); transform-origin: left; }

  /* Footer */
  #footer {
    position: absolute;
    bottom: 8px;
    right: 16px;
    font-size: 9px;
    color: var(--text-dim);
    opacity: 0.5;
  }
</style>
</head>
<body>

<div id="sidebar">
  <h1>HA <span>Knowledge Graph</span></h1>

  <div class="section">
    <input type="text" id="search" placeholder="Search notes...">
  </div>

  <div class="section">
    <div class="section-title">6 Dimensions</div>
    <div id="dim-legend"></div>
  </div>

  <div class="section">
    <div class="section-title">View</div>
    <div class="toggle-row">
      <button class="toggle-btn active" data-mode="all">All</button>
      <button class="toggle-btn" data-mode="cross">Cross-Dimension</button>
      <button class="toggle-btn" data-mode="orphans">Orphans</button>
      <button class="toggle-btn" data-mode="recency">Recency</button>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Simultaneous Complexity</div>
    <div id="radar-container">
      <canvas id="radar" width="200" height="200"></canvas>
    </div>
  </div>

  <div class="section">
    <div class="section-title">Stats</div>
    <div id="stats"></div>
  </div>

  <div class="section">
    <div class="section-title">Top Hubs</div>
    <div id="hubs"></div>
  </div>

  <div id="detail" class="section">
    <div class="section-title">Selected Note</div>
    <div id="detail-name"></div>
    <div id="detail-info"></div>
    <div id="detail-tags"></div>
  </div>
</div>

<div id="graph-container">
  <div id="network"></div>
  <div class="axis-label" id="axis-x">simultaneous complexity &rarr;</div>
  <div class="axis-label" id="axis-y">&uarr; time</div>
  <div id="footer">HA Knowledge Graph &mdash; Horizons Architecture</div>
</div>

<script>
// ── Data (injected by Python) ──
const GRAPH_DATA = {{GRAPH_DATA}};
const DIMENSIONS = {{DIMENSIONS}};

// ── State ──
let network = null;
let allNodes = new vis.DataSet();
let allEdges = new vis.DataSet();
let activeDims = new Set(Object.keys(DIMENSIONS));
let currentMode = 'all';

// ── Build vis.js datasets ──
function initGraph() {
  const nodes = GRAPH_DATA.nodes.map(n => {
    const degree = GRAPH_DATA.edges.filter(e => e.from === n.id || e.to === n.id).length;
    return {
      id: n.id,
      label: n.label,
      color: {
        background: n.color,
        border: n.color,
        highlight: { background: '#ffffff', border: n.color },
        hover: { background: lighten(n.color, 30), border: n.color },
      },
      size: Math.max(6, Math.min(40, 6 + degree * 2.5)),
      font: {
        color: '#cccccc',
        size: Math.max(8, Math.min(16, 8 + degree)),
        face: 'SF Mono, Fira Code, Consolas, monospace',
        strokeWidth: 2,
        strokeColor: '#0f0f1a',
      },
      borderWidth: 1,
      shape: 'dot',
      // custom data
      _dim: n.dimension,
      _dimName: n.dimensionName,
      _path: n.path,
      _tags: n.tags,
      _size: n.size,
      _linkCount: n.linkCount,
      _recency: n.recency,
      _modified: n.modified,
      _degree: degree,
    };
  });

  const edges = GRAPH_DATA.edges.map((e, i) => ({
    id: 'e' + i,
    from: e.from,
    to: e.to,
    color: {
      color: e.crossDimension ? 'rgba(22, 160, 133, 0.35)' : 'rgba(255,255,255,0.08)',
      highlight: '#ffffff',
      hover: e.crossDimension ? 'rgba(22, 160, 133, 0.7)' : 'rgba(255,255,255,0.25)',
    },
    width: e.crossDimension ? 1.5 : 0.5,
    smooth: { type: 'continuous' },
    arrows: { to: { enabled: true, scaleFactor: 0.3 } },
    _crossDim: e.crossDimension,
    _phantom: e.phantom,
  }));

  allNodes.add(nodes);
  allEdges.add(edges);

  const container = document.getElementById('network');
  network = new vis.Network(container, { nodes: allNodes, edges: allEdges }, {
    physics: {
      solver: 'forceAtlas2Based',
      forceAtlas2Based: {
        gravitationalConstant: -40,
        centralGravity: 0.005,
        springLength: 120,
        springConstant: 0.06,
        damping: 0.4,
      },
      maxVelocity: 40,
      stabilization: { iterations: 200, fit: true },
    },
    interaction: {
      hover: true,
      tooltipDelay: 100,
      navigationButtons: false,
      keyboard: { enabled: true },
    },
    nodes: { chosen: true },
    edges: { chosen: true },
  });

  // Click handler
  network.on('click', function(params) {
    if (params.nodes.length > 0) {
      showDetail(params.nodes[0]);
    } else {
      hideDetail();
    }
  });

  // Double-click to focus
  network.on('doubleClick', function(params) {
    if (params.nodes.length > 0) {
      network.focus(params.nodes[0], { scale: 1.5, animation: true });
    }
  });
}

// ── Sidebar: Dimensions ──
function buildLegend() {
  const container = document.getElementById('dim-legend');
  const counts = GRAPH_DATA.stats.dimensionCounts;
  let html = '';
  for (const [id, dim] of Object.entries(DIMENSIONS)) {
    const count = counts[dim.name] || 0;
    html += `<div class="dim-row" data-dim="${id}">
      <div class="dim-dot" style="background:${dim.color}"></div>
      <span class="dim-name">${dim.name}</span>
      <span class="dim-count">${count}</span>
    </div>`;
  }
  container.innerHTML = html;

  // Toggle dimensions
  container.querySelectorAll('.dim-row').forEach(row => {
    row.addEventListener('click', () => {
      const dim = row.dataset.dim;
      if (activeDims.has(dim)) {
        activeDims.delete(dim);
        row.classList.add('dimmed');
      } else {
        activeDims.add(dim);
        row.classList.remove('dimmed');
      }
      applyFilters();
    });
  });
}

// ── Sidebar: Stats ──
function buildStats() {
  const s = GRAPH_DATA.stats;
  const container = document.getElementById('stats');
  const rows = [
    ['Notes', s.totalNotes],
    ['Connections', s.totalEdges],
    ['Cross-dimension', s.crossDimensionEdges, true],
    ['Same-dimension', s.sameDimensionEdges],
    ['Phantom links', s.phantomLinks],
    ['Orphans', s.orphans],
  ];
  container.innerHTML = rows.map(r =>
    `<div class="stat-row">
      <span class="stat-label">${r[0]}</span>
      <span class="stat-value ${r[2] ? 'highlight' : ''}">${r[1]}</span>
    </div>`
  ).join('');
}

// ── Sidebar: Hubs ──
function buildHubs() {
  const container = document.getElementById('hubs');
  container.innerHTML = GRAPH_DATA.stats.topHubs.map(h =>
    `<div class="hub-item">
      <span class="hub-name" data-node="${h.name}">${h.name}</span>
      <span class="hub-deg">${h.connections}</span>
    </div>`
  ).join('');

  container.querySelectorAll('.hub-name').forEach(el => {
    el.addEventListener('click', () => {
      const nodeId = el.dataset.node;
      network.selectNodes([nodeId]);
      network.focus(nodeId, { scale: 1.2, animation: true });
      showDetail(nodeId);
    });
  });
}

// ── Radar Chart (pure canvas, no deps) ──
function drawRadar() {
  const canvas = document.getElementById('radar');
  const ctx = canvas.getContext('2d');
  const balance = GRAPH_DATA.stats.dimensionBalance;
  const dims = Object.keys(balance);
  const vals = Object.values(balance);
  const n = dims.length;
  if (n === 0) return;

  const cx = 100, cy = 100, r = 75;
  ctx.clearRect(0, 0, 200, 200);

  // Grid circles
  for (let ring = 0.25; ring <= 1; ring += 0.25) {
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 0.5;
    for (let i = 0; i <= n; i++) {
      const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
      const x = cx + r * ring * Math.cos(angle);
      const y = cy + r * ring * Math.sin(angle);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.stroke();
  }

  // Grid lines
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + r * Math.cos(angle), cy + r * Math.sin(angle));
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.stroke();
  }

  // Data polygon
  ctx.beginPath();
  for (let i = 0; i <= n; i++) {
    const idx = i % n;
    const angle = (Math.PI * 2 * idx / n) - Math.PI / 2;
    const v = vals[idx] || 0;
    const x = cx + r * v * Math.cos(angle);
    const y = cy + r * v * Math.sin(angle);
    i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.fillStyle = 'rgba(22, 160, 133, 0.15)';
  ctx.fill();
  ctx.strokeStyle = 'rgba(22, 160, 133, 0.6)';
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Dots + labels
  for (let i = 0; i < n; i++) {
    const angle = (Math.PI * 2 * i / n) - Math.PI / 2;
    const v = vals[i] || 0;

    // Data dot
    const dx = cx + r * v * Math.cos(angle);
    const dy = cy + r * v * Math.sin(angle);
    ctx.beginPath();
    ctx.arc(dx, dy, 3, 0, Math.PI * 2);
    ctx.fillStyle = '#16A085';
    ctx.fill();

    // Label
    const lx = cx + (r + 14) * Math.cos(angle);
    const ly = cy + (r + 14) * Math.sin(angle);
    ctx.font = '9px monospace';
    ctx.fillStyle = '#8888aa';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    // Abbreviate dimension names
    const abbr = dims[i].substring(0, 3).toUpperCase();
    ctx.fillText(abbr, lx, ly);
  }
}

// ── Search ──
function initSearch() {
  const input = document.getElementById('search');
  input.addEventListener('input', () => {
    const q = input.value.toLowerCase().trim();
    if (!q) {
      applyFilters();
      return;
    }
    allNodes.forEach(node => {
      const match = node.id.toLowerCase().includes(q) ||
                    (node._tags && node._tags.some(t => t.toLowerCase().includes(q))) ||
                    (node._path && node._path.toLowerCase().includes(q));
      allNodes.update({ id: node.id, hidden: !match });
    });
  });
}

// ── View modes ──
function initModes() {
  document.querySelectorAll('.toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentMode = btn.dataset.mode;
      applyFilters();
    });
  });
}

function applyFilters() {
  allNodes.forEach(node => {
    let visible = activeDims.has(node._dim);
    let opacity = 1;

    if (currentMode === 'orphans') {
      visible = visible && node._degree === 0;
    } else if (currentMode === 'recency') {
      opacity = 0.15 + node._recency * 0.85;
    }

    allNodes.update({
      id: node.id,
      hidden: !visible,
      opacity: opacity,
      font: Object.assign({}, node.font, {
        color: currentMode === 'recency'
          ? `rgba(204,204,204,${0.2 + node._recency * 0.8})`
          : '#cccccc',
      }),
    });
  });

  allEdges.forEach(edge => {
    let visible = true;
    if (currentMode === 'cross') {
      visible = edge._crossDim;
    }
    allEdges.update({ id: edge.id, hidden: !visible });
  });
}

// ── Detail panel ──
function showDetail(nodeId) {
  const node = allNodes.get(nodeId);
  if (!node) return;

  document.getElementById('detail-name').textContent = node.id;
  document.getElementById('detail-name').style.color = node.color.background;
  document.getElementById('detail-info').innerHTML = `
    <span class="label">Dimension:</span> ${node._dimName}<br>
    <span class="label">Path:</span> ${node._path}<br>
    <span class="label">Connections:</span> ${node._degree}<br>
    <span class="label">Size:</span> ${node._size.toLocaleString()} chars<br>
    <span class="label">Modified:</span> ${node._modified}<br>
    <span class="label">Recency:</span> ${Math.round(node._recency * 100)}%
  `;

  const tagsEl = document.getElementById('detail-tags');
  if (node._tags && node._tags.length > 0) {
    tagsEl.innerHTML = node._tags.map(t => `<span>#${t}</span>`).join('');
  } else {
    tagsEl.innerHTML = '<span style="color:var(--text-dim);font-size:10px">no tags</span>';
  }

  document.getElementById('detail').classList.add('active');
}

function hideDetail() {
  document.getElementById('detail').classList.remove('active');
}

// ── Utility ──
function lighten(hex, pct) {
  const num = parseInt(hex.slice(1), 16);
  const r = Math.min(255, (num >> 16) + pct);
  const g = Math.min(255, ((num >> 8) & 0x00FF) + pct);
  const b = Math.min(255, (num & 0x0000FF) + pct);
  return `rgb(${r},${g},${b})`;
}

// ── Init ──
document.addEventListener('DOMContentLoaded', () => {
  initGraph();
  buildLegend();
  buildStats();
  buildHubs();
  drawRadar();
  initSearch();
  initModes();
});
</script>
</body>
</html>"""


def generate(vault_path: str, output_path: str = None, title: str = None):
    """Main pipeline: scan → build → render."""
    vault = Path(vault_path).resolve()

    if not title:
        title = vault.name.upper()

    print(f"Scanning vault: {vault}")
    notes = scan_vault(str(vault))
    print(f"  Found {len(notes)} notes")

    print("Building graph...")
    graph = build_graph(notes)
    print(f"  {graph['stats']['totalEdges']} edges "
          f"({graph['stats']['crossDimensionEdges']} cross-dimension)")

    # Render HTML
    html_out = HTML_TEMPLATE.replace('{{GRAPH_DATA}}', json.dumps(graph))
    html_out = html_out.replace('{{DIMENSIONS}}', json.dumps(DIMENSIONS))
    html_out = html_out.replace('{{TITLE}}', html.escape(title))

    if not output_path:
        output_path = str(Path(__file__).parent / "output" / "ha-knowledge-graph.html")

    Path(output_path).parent.mkdir(parents=True, exist_ok=True)
    Path(output_path).write_text(html_out, encoding='utf-8')
    print(f"\nGraph saved to: {output_path}")

    # Print stats
    s = graph['stats']
    print(f"\n{'='*50}")
    print(f"  HA KNOWLEDGE GRAPH")
    print(f"{'='*50}")
    print(f"  Notes:            {s['totalNotes']}")
    print(f"  Connections:      {s['totalEdges']}")
    print(f"  Cross-dimension:  {s['crossDimensionEdges']}")
    print(f"  Phantom links:    {s['phantomLinks']}")
    print(f"  Orphans:          {s['orphans']}")
    print(f"\n  Dimensions:")
    for name, count in sorted(s['dimensionCounts'].items()):
        bar = '#' * min(40, count)
        print(f"    {name:12s} {count:4d}  {bar}")
    print(f"\n  Top Hubs:")
    for h in s['topHubs'][:10]:
        print(f"    {h['name']:30s} {h['connections']:3d}  ({h['dimension']})")
    print(f"{'='*50}")

    return output_path


if __name__ == '__main__':
    import argparse
    parser = argparse.ArgumentParser(description='HA Knowledge Graph Generator')
    parser.add_argument('vault', nargs='?', default='.', help='Path to Obsidian vault')
    parser.add_argument('--output', '-o', help='Output HTML file path')
    parser.add_argument('--title', '-t', help='Graph title')
    args = parser.parse_args()

    out = generate(args.vault, args.output, args.title)
    print(f"\nOpen in browser: file://{out}")
