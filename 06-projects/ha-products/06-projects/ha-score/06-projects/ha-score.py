#!/usr/bin/env python3
"""
ha-score: The HA Life Score — orchestral notation of complexity.

Proportional time axis: every markdown note placed at its creation timestamp.
Files created close together cluster like chords. Gaps show as silence.

Usage: python3 ha-score.py [--output path]
"""

import bisect, hashlib, json, re, subprocess, sys
from collections import defaultdict
from datetime import datetime, timezone, timedelta
from pathlib import Path

HOME = Path.home()
VAULTS = {
    "eb": HOME/"Documents"/"ha-eb", "ha": HOME/"Documents"/"ha-ha",
    "tec": HOME/"Documents"/"ha-tec", "res": HOME/"Documents"/"ha-research",
    "al": HOME/"Documents"/"ha-al",
}
VAULT_NAMES = {"eb":"HA-EB","ha":"HA-HA","tec":"HA-TEC","res":"HA-RES","al":"HA-AL"}
DIM = {"01":"Legacy","02":"Community","03":"Learning","04":"Technology","05":"Context","06":"Projects"}
DIM_ORDER = ["01","02","03","04","05","06"]
SKIP = [r'/\.', r'node_modules', r'copilot-custom', r'/anytype/', r'cursos_ieca/', r'\.trash', r'\.obsidian']

MOVEMENTS = [
    (1,"Genesis","The system learns to exist","2025-12-30","2026-01-31"),
    (2,"The Framework","Thinking becomes a service","2026-02-01","2026-02-08"),
    (3,"Mexico","Three weeks of constant output","2026-02-09","2026-02-22"),
    (4,"The Homecoming","Return, recovery, and production","2026-02-23","2026-03-02"),
    (5,"Federation","Every voice finds its place","2026-03-03","2026-03-07"),
]

REFLECTIONS = [
    ("2026-01-29","In 10 days: from first boot to federated protocol. Genesis is always fast. Sustaining is the test."),
    ("2026-02-08","The framework exists. TaaS is named. A protocol without papers is a religion without scripture."),
    ("2026-02-13","Ernesto's words cut because they're true. Abstraction without translation is academic invisibility."),
    ("2026-02-22","The quietest week produces the clearest vision. Breakthroughs happen in the space between sprints."),
    ("2026-02-23","Three weeks in Mexico. Constant output. The system runs. The human must stop."),
    ("2026-03-02","Feb 28 - Mar 2: the loudest passage. When Edgar writes, he writes in concentrated bursts."),
    ("2026-03-06","Learning silent for 17 days. Papers are the academic armor. Without them, HA stays 'brilliant but crazy.'"),
    ("2026-03-07","Tech 40%. Projects 30%. Legacy 12%. Community 8%. Learning 6%. Context 4%. The balance IS the diagnosis."),
]

LABELS = {
    'agent_memory':'System Memory','skills':'HA Skills','claude-code-skills':'Claude Skills',
    'intercom':'Intercom Protocol','archive':'Session Archive',
    'my_templates':'Templates & Formats','ha-fundamentos':'HA Fundamentals',
    'eb_personal':'Personal Life','cvs-bios':'CVs & Bios',
    'the_swiss_project':'Swiss Naturalization','docet':'Docet School',
    'eb-atelier':'Atelier & Music','eb_prompts':'Prompt Library',
    'esbac-ai':'ESBAC AI Agent','talisis':'Talisis Advisory',
    'health':'Health & Exercise','playlist_music':'Music Collection',
    'books':'Reading Library','agents':'AI Agent Roster',
    'viajes':'Travel Planning','done':'Completed Projects',
    'templater':'Obsidian Templates','ha-jiii':'JIII Academic Paper',
    'ha-wellcome':'Wellcome Trust Study','ha-tablebook':'HA Tablebook',
    'sic-q':'SIC-Q ($16M Project)','tec-beyond':'Tec Beyond Platform',
    'clases-2026':'Ethics & AI Course','stakeholders':'Stakeholder Maps',
    'equipo':'HA Team','estrategia':'Strategic Planning',
    'narrativas':'Narratives & Pitches','legacies':'Legacy Documents',
    'google-drive-mcp':'Google Drive MCP','community':'Community Hub',
    'people':'People & Contacts','leads':'Business Leads',
    'resources':'Resources & References','ha-core':'HA Core Business',
    'to-do':'Task Board','writing-lab':'Writing Lab',
    'b1-practice':'German B1 Practice','pitches':'Pitch Decks',
    'talleres':'Workshop Materials','thesis':'Thesis Supervision',
    'ha-al':'Casa Antena','metas':'Goals & Milestones',
    'knowledge':'Knowledge Base','prompts':'AI Prompts',
    'transcripts-zooms':'Meeting Transcripts','conferencia':'Conference',
    'invoices':'Invoices & Finance','proposals':'Proposals',
    'context':'Context & Decisions','dashboard':'Dashboard',
    'score':'Score & Notation','finanzas':'Financial Curriculum',
    'modelo-educativo-docet':'Educational Model','videos_2025':'Video Scripts',
    'docet-reciente':'Docet Recent Work','academia':'Academic Programs',
    'docet-book':'Docet Book','fundador':'Founder Documents',
    'diferenciacion':'HA Differentiation','metodologia':'HA Methodology',
    'teoria':'HA Theory','vision':'HA Vision',
    'presentation':'Presentations','gsas-board-meeting':'GSAS Board Meeting',
    'markdown':'Markdown Notes',
}


# ── DATETIME PARSING ──

def parse_iso_ts(dt_str):
    """Parse ISO 8601 datetime to unix timestamp."""
    if not dt_str:
        return 0.0
    m = re.match(r'(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})([+-]\d{2}:\d{2})?', dt_str)
    if m:
        y, mo, d, h, mi, s = (int(x) for x in m.groups()[:6])
        tz_str = m.group(7)
        dt = datetime(y, mo, d, h, mi, s)
        if tz_str:
            sign = 1 if tz_str[0] == '+' else -1
            tz_h, tz_m = int(tz_str[1:3]), int(tz_str[4:6])
            dt = dt.replace(tzinfo=timezone(timedelta(hours=sign * tz_h, minutes=sign * tz_m)))
        else:
            dt = dt.replace(tzinfo=timezone.utc)
        return dt.timestamp()
    m = re.match(r'(\d{4})-(\d{2})-(\d{2})$', dt_str)
    if m:
        y, mo, d = (int(x) for x in m.groups())
        return datetime(y, mo, d, 12, 0, 0, tzinfo=timezone.utc).timestamp()
    return 0.0


def extract_date(dt_str):
    """Extract YYYY-MM-DD from datetime string."""
    return dt_str[:10] if dt_str and len(dt_str) >= 10 else dt_str


# ── HELPERS ──

def infer_dimension(path):
    p = path.lower()
    for prefix, dim in [('/01-legacy/','01'),('01-legacy/','01'),('/02-community/','02'),
        ('02-community/','02'),('/03-learning/','03'),('03-learning/','03'),
        ('/04-technology/','04'),('04-technology/','04'),('/05-context/','05'),
        ('05-context/','05'),('/06-projects/','06'),('06-projects/','06')]:
        if prefix in p or p.startswith(prefix.lstrip('/')):
            return dim
    if 'agent_memory' in p or '.claude/' in p: return "04"
    if '/skills/' in p: return "03"
    if '/people/' in p or '/equipo/' in p: return "02"
    if '/clases' in p or '/thesis' in p: return "03"
    if '/fundamentos/' in p: return "05"
    return "06"


def extract_project(path):
    parts = list(Path(path).parts)[:-1]
    cleaned = []
    for part in parts:
        if re.match(r'^\d{2}-', part): continue
        if part.lower() in ('eb','ha','tec','res','al','ha-al'): continue
        cleaned.append(part)
    return cleaned[0] if cleaned else 'root'


def label_project(key):
    if key in LABELS: return LABELS[key]
    name = key.replace('-',' ').replace('_',' ').strip()
    return ' '.join(w.capitalize() for w in name.split()) or key


def clean_title(path):
    name = Path(path).stem
    name = re.sub(r'^\d{4}[-_]\d{2}[-_]\d{2}[-_T]?', '', name)  # strip dates
    name = re.sub(r'^\d+[-_.\s]*', '', name)  # strip numbered prefixes
    name = name.replace('-',' ').replace('_',' ').strip()
    if not name:
        return Path(path).stem[:30]
    # Title case, but preserve known acronyms
    ACRONYMS = {'ha','ai','sic','taas','mcp','upu','jiii','pdf','svg','api','llm',
                'b2c','b2b','ux','ui','crm','tec','qro','gto','pan','nft'}
    words = []
    for w in name.split():
        if w.lower() in ACRONYMS:
            words.append(w.upper())
        else:
            words.append(w.capitalize())
    return ' '.join(words)[:42]


def describe_path(path):
    """Extract the deepest meaningful folder context from a path."""
    parts = list(Path(path).parts)[:-1]  # exclude filename
    meaningful = []
    for part in parts:
        if re.match(r'^\d{2}-', part): continue
        if part.lower() in ('eb','ha','tec','res','al','ha-al','documents'): continue
        meaningful.append(part)
    if meaningful:
        return label_project(meaningful[-1])
    return None


def should_skip(p):
    return any(re.search(pat, p) for pat in SKIP)


# ── DATA COLLECTION ──

def collect_git(vp, tag):
    files = []
    try:
        r = subprocess.run(
            ['git','log','--diff-filter=A','--name-only','--format=DATETIME:%aI','--','*.md'],
            capture_output=True, text=True, cwd=vp, timeout=30)
        dt = None
        for line in r.stdout.splitlines():
            if line.startswith('DATETIME:'):
                dt = line[9:]
            elif line.endswith('.md') and dt and not should_skip(line):
                files.append((dt, tag, line))
    except: pass
    return files


def collect_birth(vp, tag):
    files = []
    try:
        for md in vp.rglob('*.md'):
            rel = str(md.relative_to(vp))
            if should_skip(rel): continue
            r = subprocess.run(
                ['stat', '-f', '%SB', '-t', '%Y-%m-%dT%H:%M:%S', str(md)],
                capture_output=True, text=True, timeout=5)
            if r.returncode == 0:
                files.append((r.stdout.strip(), tag, rel))
    except: pass
    return files


def collect_all():
    out = []
    for tag, vp in VAULTS.items():
        if not vp.exists(): continue
        if (vp / '.git').exists():
            out.extend(collect_git(vp, tag))
        else:
            out.extend(collect_birth(vp, tag))
    return sorted(out, key=lambda x: parse_iso_ts(x[0]))


# ── AGGREGATION ──

def aggregate(files):
    """Group by (datetime, vault, dim, project) → event nodes."""
    groups = defaultdict(list)
    for dt_str, vault, path in files:
        dim = infer_dimension(path)
        proj = extract_project(path)
        groups[(dt_str, vault, dim, proj)].append(path)

    events = []
    for (dt_str, vault, dim, proj), paths in groups.items():
        lbl = label_project(proj)
        count = len(paths)
        names = [clean_title(p) for p in sorted(paths)]
        # Build meaningful description: what was created, not folder names
        if count == 1:
            ctx = describe_path(paths[0])
            if ctx and ctx != lbl and lbl != 'Root':
                title = f"{lbl} / {names[0]}"
            elif lbl != 'Root':
                title = f"{lbl}: {names[0]}"
            else:
                title = names[0]
        elif count <= 3:
            if lbl != 'Root':
                title = f"{lbl}: {', '.join(names)}"
            else:
                title = ", ".join(names)
        elif count <= 8:
            title = f"{lbl}: {names[0]}, {names[1]} +{count-2}"
        else:
            # Large batches: describe the activity
            dim_name = DIM.get(dim, '')
            title = f"{lbl} ({count} notes created)"
        if len(title) > 58: title = title[:55] + "..."
        events.append({
            "datetime": dt_str,
            "date": extract_date(dt_str),
            "vault": vault,
            "dim": dim,
            "count": count,
            "title": title,
            "files": [clean_title(p) for p in sorted(paths)[:8]],
            "total": count,
        })

    events.sort(key=lambda e: (parse_iso_ts(e['datetime']), DIM_ORDER.index(e['dim']), e['vault']))
    return events


# ── LAYOUT ──

REFLECT_H = 160
HEADER_H = 80
MIN_LANE_H = 600
NODE_SLOT_H = 90
LANE_GAP = 100
MARGIN_L = 260
MARGIN_T = 30
MIN_EVENT_GAP = 300      # min px between adjacent timestamps — elastic time
BASE_PX_PER_HOUR = 18    # proportional rate for sparse periods
CLUSTER_PX = 60          # events within this px cluster vertically (chords)
CLUSTER_SPREAD = 700     # max px horizontal spread for a cluster


def event_scatter(event, salt=''):
    """Deterministic pseudo-random float [0,1) from event identity. Chaotic but stable."""
    seed = f"{event['vault']}:{event['dim']}:{event['title']}:{event.get('datetime','')}:{salt}"
    h = int(hashlib.md5(seed.encode()).hexdigest()[:8], 16)
    return (h % 10000) / 10000.0


def layout(events):
    # ── Timestamps ──
    ts_map = {}
    for i, e in enumerate(events):
        ts_map[i] = parse_iso_ts(e['datetime'])

    all_ts = sorted(set(ts_map.values()))
    if not all_ts:
        return {"events":[],"positions":{},"connections":[],"barlines":[],"dates":[],
                "movements":[],"reflections":[],"dimY":{},"dimTop":{},"laneH":{},
                "dimOrder":DIM_ORDER,"dimNames":DIM,"canvasW":800,"canvasH":600,
                "marginL":MARGIN_L,"marginT":MARGIN_T,"reflectH":REFLECT_H,
                "headerH":HEADER_H,"vaultNames":VAULT_NAMES}

    ts_min, ts_max = all_ts[0], all_ts[-1]

    # ── Elastic time: proportional spacing with minimum gap guarantee ──
    # Dense passages expand (like a measure with many notes).
    # Sparse passages keep proportional gaps (silence is visible).
    sorted_unique = sorted(set(ts_map.values()))
    ts_x_map = {sorted_unique[0]: MARGIN_L + 40}
    for i in range(1, len(sorted_unique)):
        delta_hours = (sorted_unique[i] - sorted_unique[i - 1]) / 3600
        prop_gap = delta_hours * BASE_PX_PER_HOUR
        ts_x_map[sorted_unique[i]] = ts_x_map[sorted_unique[i - 1]] + max(prop_gap, MIN_EVENT_GAP)

    content_w = ts_x_map[sorted_unique[-1]] - ts_x_map[sorted_unique[0]]

    def ts_to_x(ts):
        """Elastic time lookup with interpolation for arbitrary timestamps."""
        if ts in ts_x_map:
            return ts_x_map[ts]
        idx = bisect.bisect_left(sorted_unique, ts)
        if idx == 0:
            return ts_x_map[sorted_unique[0]]
        if idx >= len(sorted_unique):
            return ts_x_map[sorted_unique[-1]]
        prev, nxt = sorted_unique[idx - 1], sorted_unique[idx]
        frac = (ts - prev) / (nxt - prev) if nxt != prev else 0
        return ts_x_map[prev] + frac * (ts_x_map[nxt] - ts_x_map[prev])

    # ── Group by dimension, detect clusters ──
    events_by_dim = defaultdict(list)
    for i in range(len(events)):
        events_by_dim[events[i]['dim']].append(i)

    clusters_by_dim = {}
    for dim in DIM_ORDER:
        indices = sorted(events_by_dim.get(dim, []), key=lambda i: ts_map[i])
        clusters = []
        current = []
        for idx in indices:
            x = ts_to_x(ts_map[idx])
            if current:
                last_x = ts_to_x(ts_map[current[-1]])
                if x - last_x < CLUSTER_PX:
                    current.append(idx)
                else:
                    clusters.append(current)
                    current = [idx]
            else:
                current = [idx]
        if current:
            clusters.append(current)
        clusters_by_dim[dim] = clusters

    # ── Adaptive lane heights ──
    lane_h = {}
    for dim in DIM_ORDER:
        max_cluster = max((len(c) for c in clusters_by_dim.get(dim, [[]])), default=1)
        lane_h[dim] = max(MIN_LANE_H, max_cluster * NODE_SLOT_H + 40)

    # ── Y positions ──
    y_cursor = MARGIN_T + REFLECT_H + HEADER_H + 10
    dim_y = {}
    dim_top = {}
    for dim in DIM_ORDER:
        dim_top[dim] = y_cursor
        dim_y[dim] = y_cursor + lane_h[dim] / 2
        y_cursor += lane_h[dim] + LANE_GAP
    canvas_h = y_cursor + 80

    # ── Position events: chaotic scatter + collision avoidance ──
    # Y = hash-based scatter (organic feel), then nudge apart if overlapping
    # X = elastic time + small hash spread within clusters
    LABEL_W = 320   # approximate horizontal footprint of a label
    LABEL_H = 52    # minimum vertical gap between events

    positions = {}
    for dim in DIM_ORDER:
        top = dim_top[dim]
        h = lane_h[dim]
        pad = 50
        y_min = top + pad
        y_max = top + h - pad

        # First: compute initial hash-based positions
        dim_events = []
        for cluster in clusters_by_dim[dim]:
            n = len(cluster)
            for idx in cluster:
                e = events[idx]
                base_x = ts_to_x(ts_map[idx])
                hy = event_scatter(e, 'y')
                ey = y_min + hy * (y_max - y_min)
                if n > 1:
                    hx = event_scatter(e, 'x')
                    spread = min(n * 120, CLUSTER_SPREAD)
                    ex = base_x + hx * spread
                else:
                    ex = base_x
                dim_events.append((idx, ex, ey))

        # Sort by X for greedy placement
        dim_events.sort(key=lambda t: t[1])

        # Second: collision avoidance — nudge Y if labels would overlap
        placed = []  # (x, y, right_edge)
        for idx, ex, ey in dim_events:
            right = ex + LABEL_W
            for attempt in range(40):
                conflict = False
                for px, py, pr in placed:
                    if ex < pr and px < right and abs(ey - py) < LABEL_H:
                        conflict = True
                        break
                if not conflict:
                    break
                ey += LABEL_H
                if ey > y_max:
                    ey = y_min + ((ey - y_min) % (y_max - y_min))
            positions[idx] = {"x": ex, "y": ey}
            placed.append((ex, ey, right))

    canvas_w = content_w + MARGIN_L + 100 + CLUSTER_SPREAD

    # ── Movement regions ──
    movement_regions = []
    for mid, mt, ms, mstart, mend in MOVEMENTS:
        start_ts = parse_iso_ts(mstart + 'T00:00:00')
        end_ts = parse_iso_ts(mend + 'T23:59:59')
        if end_ts < ts_min or start_ts > ts_max:
            continue
        x1 = ts_to_x(max(start_ts, ts_min))
        x2 = ts_to_x(min(end_ts, ts_max))
        movement_regions.append({
            "id": mid, "title": mt, "subtitle": ms,
            "dates": f"{mstart[5:]} – {mend[5:]}",
            "x1": x1 - 15, "x2": x2 + 15,
        })

    # ── Connections with narrative labels ──
    def narrate_gap(hours):
        """Stage directions — the rhythm of the work."""
        if hours < 1:    return ""
        if hours < 3:    return "minutes later"
        if hours < 8:    return "hours later"
        if hours < 16:   return "resumes"
        if hours < 30:   return "next day"
        days = hours / 24
        if days < 3:     return f"returns after {int(days)} days"
        if days < 8:     return f"{int(days)} days pass"
        if days < 15:    return "a week of silence"
        if days < 30:
            w = int(days / 7)
            return f"{w} weeks pass"
        return f"{int(days)} days of silence"

    connections = []

    # Vault chains: each event → next in same vault (crosses dimensions)
    last_vault = {}
    for i, e in enumerate(events):
        if i not in positions:
            continue
        key = e['vault']
        if key in last_vault:
            pi = last_vault[key]
            delta_h = (ts_map.get(i, 0) - ts_map.get(pi, 0)) / 3600
            connections.append({
                "from": pi, "to": i, "type": "vault",
                "label": narrate_gap(delta_h),
                "hours": round(max(delta_h, 0), 1),
            })
        last_vault[key] = i

    # Dimension chains: each event → next in same dimension (crosses vaults)
    last_dim = {}
    for i, e in enumerate(events):
        if i not in positions:
            continue
        key = e['dim']
        if key in last_dim:
            pi = last_dim[key]
            delta_h = (ts_map.get(i, 0) - ts_map.get(pi, 0)) / 3600
            connections.append({
                "from": pi, "to": i, "type": "dimension",
                "label": "",
                "hours": round(max(delta_h, 0), 1),
            })
        last_dim[key] = i

    # ── Barlines: same timestamp, 2+ dimensions ──
    ts_dims = defaultdict(set)
    for i, e in enumerate(events):
        if i in positions:
            ts_dims[ts_map[i]].add(e['dim'])

    barlines = []
    for t, dims in ts_dims.items():
        if len(dims) >= 2:
            active = sorted(dims, key=lambda d: DIM_ORDER.index(d))
            barlines.append({
                "x": ts_to_x(t),
                "y1": dim_top[active[0]] + 10,
                "y2": dim_top[active[-1]] + lane_h[active[-1]] - 10,
                "n": len(dims),
            })

    # ── Reflections ──
    ref_data = []
    for rdate, rtext in REFLECTIONS:
        rts = parse_iso_ts(rdate + 'T12:00:00')
        if ts_min <= rts <= ts_max:
            rx = ts_to_x(rts)
        else:
            rx = None
            for t in all_ts:
                if t >= rts:
                    rx = ts_to_x(t)
                    break
        if rx:
            ref_data.append({"x": rx, "text": rtext})

    # ── Date markers: one per day, positioned at midpoint of that day's activity ──
    date_events_ts = defaultdict(list)
    for i, e in enumerate(events):
        if i in ts_map:
            date_events_ts[e['date']].append(ts_map[i])

    date_markers = []
    for d in sorted(date_events_ts):
        ts_list = date_events_ts[d]
        mid_ts = (min(ts_list) + max(ts_list)) / 2
        dt = datetime.strptime(d, "%Y-%m-%d")
        date_markers.append({
            "x": ts_to_x(mid_ts),
            "label": dt.strftime("%b %d"),
            "full": d,
        })

    return {
        "events": events, "positions": positions,
        "connections": connections, "barlines": barlines,
        "dates": date_markers, "movements": movement_regions,
        "reflections": ref_data, "dimY": dim_y, "dimTop": dim_top,
        "laneH": lane_h, "dimOrder": DIM_ORDER, "dimNames": DIM,
        "canvasW": canvas_w, "canvasH": canvas_h,
        "marginL": MARGIN_L, "marginT": MARGIN_T,
        "reflectH": REFLECT_H, "headerH": HEADER_H,
        "vaultNames": VAULT_NAMES,
    }


# ── HTML ──

HTML = r"""<!DOCTYPE html>
<html lang="en"><head><meta charset="utf-8">
<title>HA Life Score</title>
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{background:#fff;overflow:hidden;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;height:100vh;width:100vw;cursor:grab}
body.dragging{cursor:grabbing}
#canvas{position:absolute;top:0;left:0;width:100%;height:100%}
#tip{position:fixed;background:#fff;border:1px solid #ddd;padding:16px 20px;font-size:13px;line-height:1.6;max-width:450px;pointer-events:none;display:none;z-index:100;box-shadow:0 4px 16px rgba(0,0,0,.08)}
.tp-t{font-weight:bold;font-size:15px;color:#111;margin-bottom:4px}
.tp-m{font-size:10px;color:#aaa;text-transform:uppercase;letter-spacing:1px;margin-bottom:6px}
.tp-f{color:#555;font-size:12px;line-height:1.5}
#hdr{position:fixed;top:14px;left:18px;z-index:50;pointer-events:none}
#hdr h1{font-family:Georgia,serif;font-size:20px;font-weight:bold;color:#000}
#hdr .s{font-size:9px;color:#bbb;margin-top:2px}
#hdr .st{font-size:8px;color:#ccc;margin-top:1px}
#ctrl{position:fixed;bottom:18px;right:18px;display:flex;gap:5px;z-index:50}
#ctrl button{width:34px;height:34px;border:1px solid #ddd;background:#fff;font-size:15px;cursor:pointer;border-radius:4px;color:#888;display:flex;align-items:center;justify-content:center}
#ctrl button:hover{border-color:#999;color:#333}
.eb{width:auto!important;padding:0 12px;font-size:10px;font-family:inherit}
</style></head><body>
<div id="hdr"><h1>HA Life Score</h1>
<div class="s">Scroll to zoom · Drag to pan · Hover for files · Click for connections</div>
<div class="st" id="stats"></div></div>
<svg id="canvas"><defs>
<marker id="arr" viewBox="0 0 10 6" refX="9" refY="3" markerWidth="6" markerHeight="4" orient="auto-start-reverse">
<path d="M0 0L10 3L0 6z" fill="#bbb"/></marker>
</defs><g id="world"></g></svg>
<div id="tip"><div class="tp-t"></div><div class="tp-m"></div><div class="tp-f"></div></div>
<div id="ctrl">
<button onclick="zi()">+</button><button onclick="zo()">−</button>
<button onclick="fit()">⊡</button><button class="eb" onclick="exp()">SVG</button>
</div>
<script>
const D=%%DATA%%;
const svg=document.getElementById('canvas'),W=document.getElementById('world'),
      tip=document.getElementById('tip');
let sc=1,tx=0,ty=0,dr=false,sx,sy,sel=null;

const tf=D.events.reduce((s,e)=>s+e.count,0);
const udates=[...new Set(D.events.map(e=>e.date))];
document.getElementById('stats').textContent=
  `${tf} files · ${D.events.length} nodes · ${[...new Set(D.events.map(e=>e.vault))].length} vaults · ${udates.length} days · ${D.movements.length} movements · proportional time`;

function at(){W.setAttribute('transform',`translate(${tx},${ty}) scale(${sc})`)}
function fit(){const vw=innerWidth,vh=innerHeight;sc=Math.min(vw/D.canvasW,vh/D.canvasH)*.88;tx=(vw-D.canvasW*sc)/2;ty=(vh-D.canvasH*sc)/2;at()}
function zi(){sc=Math.min(5,sc*1.3);at()}
function zo(){sc=Math.max(.005,sc*.7);at()}
function exp(){
  const c=svg.cloneNode(true);c.setAttribute('xmlns','http://www.w3.org/2000/svg');
  c.setAttribute('viewBox',`0 0 ${D.canvasW} ${D.canvasH}`);
  c.setAttribute('width',D.canvasW);c.setAttribute('height',D.canvasH);
  c.querySelector('#world').setAttribute('transform','translate(0,0) scale(1)');
  const b=new Blob([new XMLSerializer().serializeToString(c)],{type:'image/svg+xml'});
  const u=URL.createObjectURL(b);const a=document.createElement('a');
  a.href=u;a.download='ha-life-score.svg';a.click();URL.revokeObjectURL(u);
}

svg.addEventListener('wheel',e=>{e.preventDefault();const f=e.deltaY>0?.9:1.1;
  const ns=Math.max(.005,Math.min(5,sc*f));const r=svg.getBoundingClientRect();
  const mx=e.clientX-r.left,my=e.clientY-r.top;
  tx=mx-(mx-tx)*(ns/sc);ty=my-(my-ty)*(ns/sc);sc=ns;at()});
svg.addEventListener('mousedown',e=>{if(e.target.closest('#ctrl'))return;
  dr=true;sx=e.clientX-tx;sy=e.clientY-ty;document.body.classList.add('dragging')});
addEventListener('mousemove',e=>{if(!dr)return;tx=e.clientX-sx;ty=e.clientY-sy;at()});
addEventListener('mouseup',()=>{dr=false;document.body.classList.remove('dragging')});

function el(t,a){const e=document.createElementNS('http://www.w3.org/2000/svg',t);
  for(const[k,v]of Object.entries(a))e.setAttribute(k,v);return e}
function tx2(p,x,y,t,o={}){const e=el('text',{x,y,'font-size':o.s||10,
  'font-family':o.f||"'Helvetica Neue',Helvetica,sans-serif",fill:o.c||'#888',
  'text-anchor':o.a||'start','font-weight':o.w||'normal',
  'font-style':o.st||'normal','dominant-baseline':'middle'});
  e.textContent=t;p.appendChild(e);return e}

const vs={eb:'#000',ha:'#444',tec:'#666',res:'#888',al:'#aaa'};
function rom(n){return['','I','II','III','IV','V'][n]||n}

function drawMovements(){
  const sy=D.marginT+D.reflectH;
  const ey=D.canvasH-50;
  D.movements.forEach((m,i)=>{
    if(i%2===0) W.appendChild(el('rect',{x:m.x1,y:sy,width:m.x2-m.x1,height:ey-sy,fill:'#fafafa',rx:2}));
    tx2(W,m.x1+18,sy+28,`${rom(m.id)}. ${m.title}`,{s:26,c:'#222',w:'bold',f:'Georgia,serif'});
    tx2(W,m.x1+18,sy+56,`${m.subtitle}  ·  ${m.dates}`,{s:14,c:'#bbb'});
    if(i>0){
      const bx=m.x1-15;
      W.appendChild(el('line',{x1:bx,y1:sy,x2:bx,y2:ey,stroke:'#ddd','stroke-width':.8,'stroke-dasharray':'10,6'}));
    }
  });
}

function drawReflections(){
  if(!D.reflections.length)return;
  const ry=D.marginT+10;
  tx2(W,D.marginL-10,ry+14,'Reflections',{s:12,c:'#bbb',a:'end',st:'italic',f:'Georgia,serif'});
  D.reflections.forEach(r=>{
    const words=r.text.split(' ');const lines=[];let line='';
    words.forEach(w=>{if((line+' '+w).length>44){lines.push(line);line=w}else{line=line?line+' '+w:w}});
    if(line)lines.push(line);
    const bw=320,bh=lines.length*16+16;
    W.appendChild(el('rect',{x:r.x-6,y:ry,width:bw,height:bh,rx:3,fill:'#fff',stroke:'#eee','stroke-width':.5}));
    lines.forEach((l,i)=>tx2(W,r.x,ry+14+i*16,l,{s:10,c:'#999',st:'italic'}));
  });
}

function drawLanes(){
  const lx1=D.marginL-10, lx2=D.canvasW-30;
  D.dimOrder.forEach(dim=>{
    const cy=D.dimY[dim], top=D.dimTop[dim], h=D.laneH[dim];
    W.appendChild(el('line',{x1:lx1,y1:top,x2:lx2,y2:top,stroke:'#ddd','stroke-width':.8}));
    W.appendChild(el('line',{x1:lx1,y1:top+h,x2:lx2,y2:top+h,stroke:'#ddd','stroke-width':.8}));
    W.appendChild(el('line',{x1:lx1,y1:cy,x2:lx2,y2:cy,stroke:'#f0f0f0','stroke-width':.4}));
    tx2(W,30,cy-16,D.dimNames[dim],{s:24,c:'#222',w:'bold',f:'Georgia,serif'});
    tx2(W,30,cy+18,dim,{s:14,c:'#ccc'});
  });

  const botY=Math.max(...D.dimOrder.map(d=>D.dimTop[d]+D.laneH[d]))+30;
  let lm='';
  D.dates.forEach(d=>{
    const m=d.label.split(' ')[0],day=d.label.split(' ')[1];
    tx2(W,d.x,botY+14,day,{s:14,c:'#bbb',a:'middle'});
    if(m!==lm){tx2(W,d.x,botY+36,m,{s:16,c:'#999',a:'middle',w:'bold'});lm=m}
  });
}

function drawBarlines(){
  D.barlines.forEach(b=>{
    const op=Math.min(.12+b.n*.07,.55);
    const sw=.8+b.n*.3;
    W.appendChild(el('line',{x1:b.x,y1:b.y1,x2:b.x,y2:b.y2,
      stroke:'#000','stroke-width':sw,opacity:op,'stroke-dasharray':'8,5'}));
  });
}

function drawConnections(){
  D.connections.forEach(c=>{
    const f=D.positions[c.from],t=D.positions[c.to];
    if(!f||!t)return;
    const h=c.hours||0;
    const isV=c.type==='vault';
    // Vault chains: thin visible threads. Dimension chains: lighter web.
    const sw=isV?Math.min(1.2+Math.log1p(h)*0.25,3):Math.min(0.6+Math.log1p(h)*0.12,1.5);
    const op=isV?Math.min(0.3+Math.log1p(h)*0.06,0.55):Math.min(0.12+Math.log1p(h)*0.03,0.25);
    const col=isV?(h>72?'#555':h>24?'#777':h>6?'#999':'#bbb'):'#ccc';
    const dy=Math.abs(f.y-t.y);
    const dx=Math.abs(f.x-t.x);
    // Curve control: gentle arc, more lift for cross-dimension connections
    const lift=Math.min(dy*0.15+dx*0.003,60);
    const cpY=Math.min(f.y,t.y)-12-lift;
    const path=`M ${f.x} ${f.y} Q ${(f.x+t.x)/2} ${cpY} ${t.x} ${t.y}`;
    W.appendChild(el('path',{d:path,stroke:col,'stroke-width':sw,fill:'none',
      opacity:op,class:'conn','data-from':c.from,'data-to':c.to,'data-type':c.type||''}));
    if(c.label&&isV){
      const mx=(f.x+t.x)/2;
      const my=0.25*f.y+0.5*cpY+0.25*t.y;
      const lbl=tx2(W,mx,my-8,c.label,{s:12,c:'#aaa',st:'italic',a:'middle',f:'Georgia,serif'});
      lbl.setAttribute('class','conn-lbl');
      lbl.setAttribute('data-from',c.from);
      lbl.setAttribute('data-to',c.to);
    }
  });
}

function drawEvents(){
  D.events.forEach((e,i)=>{
    const pos=D.positions[i];if(!pos)return;
    const r=Math.min(10+Math.sqrt(e.count)*4,34);
    const g=el('g',{class:'ev','data-id':i,style:'cursor:pointer'});
    const fill=vs[e.vault]||'#888';

    if(e.count>10){
      g.appendChild(el('circle',{cx:pos.x,cy:pos.y,r,fill,opacity:.85}));
    } else if(e.count>3){
      g.appendChild(el('circle',{cx:pos.x,cy:pos.y,r,fill:'#fff',stroke:fill,'stroke-width':2.5}));
    } else {
      g.appendChild(el('circle',{cx:pos.x,cy:pos.y,r:Math.max(r,10),fill,opacity:.5}));
    }

    tx2(g,pos.x+r+12,pos.y-10,e.title,{s:e.count>8?22:17,c:e.count>5?'#111':'#444',w:e.count>8?'bold':'normal'});
    const vt=(D.vaultNames[e.vault]||e.vault)+(e.count>1?' · '+e.count+' files':'');
    tx2(g,pos.x+r+12,pos.y+12,vt,{s:13,c:'#aaa'});

    g.addEventListener('mouseenter',ev=>{
      tip.style.display='block';
      tip.querySelector('.tp-t').textContent=e.title;
      const dt=new Date(e.datetime);
      const ds=dt.toLocaleDateString('en',{month:'short',day:'numeric'});
      const ts=dt.toLocaleTimeString('en',{hour:'2-digit',minute:'2-digit',hour12:false});
      tip.querySelector('.tp-m').textContent=
        `${ds} ${ts} · ${D.dimNames[e.dim]} · ${D.vaultNames[e.vault]} · ${e.count} file${e.count>1?'s':''}`;
      tip.querySelector('.tp-f').innerHTML=e.files.map(f=>'· '+f).join('<br>')+(e.total>8?`<br><i>...+${e.total-8} more</i>`:'');
      tip.style.left=(ev.clientX+14)+'px';tip.style.top=(ev.clientY-8)+'px';
    });
    g.addEventListener('mouseleave',()=>{tip.style.display='none';if(sel!==i)unhl()});
    g.addEventListener('mousemove',ev=>{tip.style.left=(ev.clientX+14)+'px';tip.style.top=(ev.clientY-8)+'px'});
    g.addEventListener('click',ev=>{ev.stopPropagation();if(sel===i){sel=null;unhl();return}sel=i;hl(i)});

    W.appendChild(g);
  });
}

function hl(id){
  document.querySelectorAll('.ev').forEach(g=>{g.style.opacity=.06});
  document.querySelectorAll('.conn,.conn-lbl').forEach(e=>{e.style.opacity=.03});
  const cn=new Set([id]);
  D.connections.forEach(c=>{
    if(c.from===id||c.to===id){
      cn.add(c.from);cn.add(c.to);
      document.querySelectorAll(`.conn[data-from="${c.from}"][data-to="${c.to}"]`).forEach(e=>{e.style.opacity=1;e.style.stroke='#111';e.style.strokeWidth='6'});
      document.querySelectorAll(`.conn-lbl[data-from="${c.from}"][data-to="${c.to}"]`).forEach(e=>{e.style.opacity=1;e.style.fill='#222'});
    }
  });
  cn.forEach(i=>{const e=document.querySelector(`.ev[data-id="${i}"]`);if(e)e.style.opacity=1});
}
function unhl(){
  document.querySelectorAll('.ev,.conn,.conn-lbl').forEach(e=>{
    e.style.opacity='';e.style.stroke='';e.style.strokeWidth='';e.style.fill='';
  });
}
svg.addEventListener('click',()=>{sel=null;unhl()});

drawMovements();
drawLanes();
drawReflections();
drawBarlines();
drawEvents();
drawConnections();
fit();
</script></body></html>"""


def main():
    print("Scanning vaults...")
    files = collect_all()
    print(f"  {len(files)} files from {len(set(f[1] for f in files))} vaults")

    print("Aggregating...")
    events = aggregate(files)
    print(f"  {len(events)} nodes")

    print("Laying out score...")
    data = layout(events)
    print(f"  {len(data['movements'])} movements, {len(data['barlines'])} barlines, {len(data['reflections'])} reflections")
    print(f"  Canvas: {data['canvasW']}x{data['canvasH']}px")

    html = HTML.replace('%%DATA%%', json.dumps(data))
    out = sys.argv[1] if len(sys.argv) > 1 else str(Path(__file__).parent / "output" / "ha-score.html")
    Path(out).parent.mkdir(parents=True, exist_ok=True)
    Path(out).write_text(html, encoding='utf-8')

    tf = sum(e['count'] for e in events)
    dates = len(set(e['date'] for e in events))
    print(f"\nHA Life Score")
    print(f"  {tf} files -> {len(events)} nodes across {dates} days")
    print(f"  Saved: {out}")
    print(f"  Open:  file://{Path(out).resolve()}")

if __name__ == '__main__':
    main()
