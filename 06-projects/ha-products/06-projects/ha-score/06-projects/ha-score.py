#!/usr/bin/env python3
"""
ha-score: The HA Life Score — orchestral notation of complexity.

Nodes within dimension lanes (like v5's distribution).
Movements, reflections, barlines, descriptive labels (like v6's narrative).
Adaptive lane heights so every node is readable regardless of density.

Usage: python3 ha-score.py [--output path]
"""

import json, re, subprocess, sys
from collections import defaultdict, Counter
from datetime import datetime
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
    name = re.sub(r'^\d+[-_.\s]*', '', name)
    name = name.replace('-',' ').replace('_',' ').strip().title()
    return name[:38] if name else Path(path).stem[:25]


def should_skip(p):
    return any(re.search(pat, p) for pat in SKIP)


def get_movement(date):
    for mid,_,_,s,e in MOVEMENTS:
        if s <= date <= e: return mid
    return 1


# ── DATA COLLECTION ──

def collect_git(vp, tag):
    files = []
    try:
        r = subprocess.run(['git','log','--diff-filter=A','--name-only','--format=DATE:%as','--','*.md'],
            capture_output=True, text=True, cwd=vp, timeout=30)
        d = None
        for line in r.stdout.splitlines():
            if line.startswith('DATE:'): d = line[5:]
            elif line.endswith('.md') and d and not should_skip(line):
                files.append((d, tag, line))
    except: pass
    return files

def collect_birth(vp, tag):
    files = []
    try:
        for md in vp.rglob('*.md'):
            rel = str(md.relative_to(vp))
            if should_skip(rel): continue
            r = subprocess.run(['stat','-f','%SB','-t','%Y-%m-%d',str(md)],
                capture_output=True, text=True, timeout=5)
            if r.returncode == 0:
                files.append((r.stdout.strip(), tag, rel))
    except: pass
    return files

def collect_all():
    out = []
    for tag, vp in VAULTS.items():
        if not vp.exists(): continue
        if (vp/'.git').exists(): out.extend(collect_git(vp, tag))
        else: out.extend(collect_birth(vp, tag))
    return sorted(out)


# ── AGGREGATION ──

def aggregate(files):
    """Smart two-tier aggregation:
    - Dates with <=25 raw groups: per-project detail
    - Dates with >25 raw groups: per-(vault, dim) summary
    """
    # First pass: group by (date, vault, dim, project)
    fine = defaultdict(list)
    for date, vault, path in files:
        dim = infer_dimension(path)
        proj = extract_project(path)
        fine[(date, vault, dim, proj)].append(path)

    # Count groups per date
    groups_per_date = Counter()
    for (date, vault, dim, proj) in fine:
        groups_per_date[date] += 1

    events = []
    # For dense dates: aggregate to (date, vault, dim)
    coarse = defaultdict(list)  # (date, vault, dim) → [(project, paths)]

    for (date, vault, dim, proj), paths in sorted(fine.items()):
        if groups_per_date[date] > 25:
            coarse[(date, vault, dim)].append((proj, paths))
        else:
            # Detailed node
            lbl = label_project(proj)
            count = len(paths)
            if count == 1:
                title = clean_title(paths[0])
            else:
                title = f"{lbl} ({count})"
            events.append({
                "date": date, "vault": vault, "dim": dim,
                "count": count, "title": title,
                "files": [clean_title(p) for p in sorted(paths)[:8]],
                "total": count,
            })

    # Build coarse events
    for (date, vault, dim), proj_list in sorted(coarse.items()):
        proj_list.sort(key=lambda x: -len(x[1]))
        total = sum(len(p) for _, p in proj_list)
        all_paths = []
        for _, p in proj_list:
            all_paths.extend(p)
        # Title: top 3 project names
        top_names = [label_project(proj) for proj, _ in proj_list[:3]]
        title = ', '.join(top_names)
        if len(proj_list) > 3:
            title += f" +{len(proj_list)-3} more"
        title += f" ({total})"
        if len(title) > 55:
            title = title[:52] + '...'
        events.append({
            "date": date, "vault": vault, "dim": dim,
            "count": total, "title": title,
            "files": [clean_title(p) for p in sorted(all_paths)[:8]],
            "total": total,
        })

    events.sort(key=lambda e: (e['date'], DIM_ORDER.index(e['dim']), e['vault']))
    return events


# ── LAYOUT ──

REFLECT_H = 110
HEADER_H = 55
MIN_LANE_H = 200
NODE_SLOT_H = 28      # min vertical space per node
LANE_GAP = 30
MARGIN_L = 170
MARGIN_T = 20
DAY_MIN_W = 200
MOV_GAP = 70


def layout(events):
    # ── Adaptive lane heights ──
    cell_count = defaultdict(int)  # (date, dim) → count
    for e in events:
        cell_count[(e['date'], e['dim'])] += 1

    max_per_dim = defaultdict(int)
    for (date, dim), cnt in cell_count.items():
        max_per_dim[dim] = max(max_per_dim[dim], cnt)

    lane_h = {}
    for dim in DIM_ORDER:
        lane_h[dim] = max(MIN_LANE_H, max_per_dim.get(dim, 1) * NODE_SLOT_H + 40)

    # ── Y positions (dim centers) ──
    y_cursor = MARGIN_T + REFLECT_H + HEADER_H + 10
    dim_y = {}
    dim_top = {}
    for dim in DIM_ORDER:
        dim_top[dim] = y_cursor
        dim_y[dim] = y_cursor + lane_h[dim] / 2
        y_cursor += lane_h[dim] + LANE_GAP

    canvas_h = y_cursor + 80

    # ── X positions (dates within movements) ──
    all_dates = sorted(set(e['date'] for e in events))
    by_mov = defaultdict(list)
    for d in all_dates:
        by_mov[get_movement(d)].append(d)

    date_x = {}
    movement_regions = []
    x = MARGIN_L + 30

    for mid, mt, ms, mstart, mend in MOVEMENTS:
        mov_dates = sorted(by_mov.get(mid, []))
        if not mov_dates: continue
        mx1 = x
        for d in mov_dates:
            date_x[d] = x
            x += DAY_MIN_W
        mx2 = x
        movement_regions.append({
            "id": mid, "title": mt, "subtitle": ms,
            "dates": f"{mstart[5:]} – {mend[5:]}",
            "x1": mx1 - 15, "x2": mx2 + 15,
        })
        x += MOV_GAP

    canvas_w = x + 60

    # ── Position events: spread vertically within lane ──
    positions = {}
    slot_count = defaultdict(int)
    slot_total = defaultdict(int)
    for e in events:
        slot_total[(e['date'], e['dim'])] += 1

    for i, e in enumerate(events):
        key = (e['date'], e['dim'])
        slot = slot_count[key]
        total = slot_total[key]
        slot_count[key] += 1

        ex = date_x.get(e['date'])
        if ex is None: continue
        ex += 14

        cy = dim_y[e['dim']]
        h = lane_h[e['dim']]
        usable = h * 0.85
        if total == 1:
            ey = cy
        else:
            ey = cy - usable/2 + slot * (usable / max(total-1, 1))

        positions[i] = {"x": ex, "y": ey}

    # ── Connections ──
    connections = []
    last = {}
    for i, e in enumerate(events):
        key = (e['vault'], e['dim'])
        if key in last:
            pi = last[key]
            if events[pi]['date'] != e['date']:
                connections.append({"from": pi, "to": i, "type": "temporal"})
        last[key] = i

    # ── Barlines ──
    date_dims = defaultdict(set)
    for i, e in enumerate(events):
        if i in positions:
            date_dims[e['date']].add(e['dim'])

    barlines = []
    for date, dims in date_dims.items():
        if len(dims) >= 2 and date in date_x:
            active_dims = sorted(dims, key=lambda d: DIM_ORDER.index(d))
            top_dim = active_dims[0]
            bot_dim = active_dims[-1]
            barlines.append({
                "x": date_x[date] + 4,
                "y1": dim_top[top_dim] + 10,
                "y2": dim_top[bot_dim] + lane_h[bot_dim] - 10,
                "n": len(dims),
            })

    # ── Reflections ──
    ref_data = []
    for rdate, rtext in REFLECTIONS:
        rx = date_x.get(rdate)
        if not rx:
            for d in sorted(date_x):
                if d >= rdate: rx = date_x[d]; break
        if rx:
            ref_data.append({"x": rx, "text": rtext})

    # ── Date markers ──
    date_markers = []
    for d in sorted(date_x):
        dt = datetime.strptime(d, "%Y-%m-%d")
        date_markers.append({"x": date_x[d], "label": dt.strftime("%b %d"), "full": d})

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
#tip{position:fixed;background:#fff;border:1px solid #ddd;padding:12px 16px;font-size:11px;line-height:1.6;max-width:400px;pointer-events:none;display:none;z-index:100;box-shadow:0 4px 16px rgba(0,0,0,.08)}
.tp-t{font-weight:bold;font-size:12px;color:#111;margin-bottom:2px}
.tp-m{font-size:8px;color:#aaa;text-transform:uppercase;letter-spacing:1px;margin-bottom:5px}
.tp-f{color:#555;font-size:10px;line-height:1.5}
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
document.getElementById('stats').textContent=
  `${tf} files · ${D.events.length} nodes · ${[...new Set(D.events.map(e=>e.vault))].length} vaults · ${[...new Set(D.events.map(e=>e.date))].length} days · ${D.movements.length} movements`;

function at(){W.setAttribute('transform',`translate(${tx},${ty}) scale(${sc})`)}
function fit(){const vw=innerWidth,vh=innerHeight;sc=Math.min(vw/D.canvasW,vh/D.canvasH)*.88;tx=(vw-D.canvasW*sc)/2;ty=(vh-D.canvasH*sc)/2;at()}
function zi(){sc=Math.min(5,sc*1.3);at()}
function zo(){sc=Math.max(.015,sc*.7);at()}
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
  const ns=Math.max(.015,Math.min(5,sc*f));const r=svg.getBoundingClientRect();
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

// ═══ 1. MOVEMENTS ═══
function drawMovements(){
  const sy=D.marginT+D.reflectH;
  const ey=D.canvasH-50;
  D.movements.forEach((m,i)=>{
    if(i%2===0) W.appendChild(el('rect',{x:m.x1,y:sy,width:m.x2-m.x1,height:ey-sy,fill:'#fafafa',rx:2}));
    tx2(W,m.x1+10,sy+16,`${rom(m.id)}. ${m.title}`,{s:14,c:'#222',w:'bold',f:'Georgia,serif'});
    tx2(W,m.x1+10,sy+34,`${m.subtitle}  ·  ${m.dates}`,{s:9,c:'#bbb'});
    if(i>0){
      const bx=m.x1-35;
      W.appendChild(el('line',{x1:bx,y1:sy,x2:bx,y2:ey,stroke:'#ddd','stroke-width':.6,'stroke-dasharray':'8,5'}));
    }
  });
}

// ═══ 2. REFLECTIONS ═══
function drawReflections(){
  if(!D.reflections.length)return;
  const ry=D.marginT+8;
  tx2(W,D.marginL-10,ry+10,'Reflections',{s:9,c:'#bbb',a:'end',st:'italic',f:'Georgia,serif'});
  D.reflections.forEach(r=>{
    const words=r.text.split(' ');const lines=[];let line='';
    words.forEach(w=>{if((line+' '+w).length>48){lines.push(line);line=w}else{line=line?line+' '+w:w}});
    if(line)lines.push(line);
    const bw=260,bh=lines.length*12+12;
    W.appendChild(el('rect',{x:r.x-5,y:ry,width:bw,height:bh,rx:2,fill:'#fff',stroke:'#eee','stroke-width':.5}));
    lines.forEach((l,i)=>tx2(W,r.x,ry+12+i*12,l,{s:7.5,c:'#999',st:'italic'}));
  });
}

// ═══ 3. DIMENSION LANES ═══
function drawLanes(){
  const lx1=D.marginL-10, lx2=D.canvasW-30;
  D.dimOrder.forEach(dim=>{
    const cy=D.dimY[dim], top=D.dimTop[dim], h=D.laneH[dim];
    // Lane background border
    W.appendChild(el('line',{x1:lx1,y1:top,x2:lx2,y2:top,stroke:'#eee','stroke-width':.5}));
    W.appendChild(el('line',{x1:lx1,y1:top+h,x2:lx2,y2:top+h,stroke:'#eee','stroke-width':.5}));
    // Center line
    W.appendChild(el('line',{x1:lx1,y1:cy,x2:lx2,y2:cy,stroke:'#f5f5f5','stroke-width':.3}));
    // Label
    tx2(W,28,cy-8,D.dimNames[dim],{s:13,c:'#222',w:'bold',f:'Georgia,serif'});
    tx2(W,28,cy+10,dim,{s:8,c:'#ccc'});
  });

  // Date axis
  const botY=Math.max(...D.dimOrder.map(d=>D.dimTop[d]+D.laneH[d]))+20;
  let lm='';
  D.dates.forEach(d=>{
    const m=d.label.split(' ')[0],day=d.label.split(' ')[1];
    tx2(W,d.x,botY+10,day,{s:7.5,c:'#ccc',a:'middle'});
    if(m!==lm){tx2(W,d.x,botY+24,m,{s:9,c:'#aaa',a:'middle',w:'bold'});lm=m}
  });
}

// ═══ 4. BARLINES ═══
function drawBarlines(){
  D.barlines.forEach(b=>{
    const op=Math.min(.1+b.n*.06,.5);
    const sw=.5+b.n*.2;
    W.appendChild(el('line',{x1:b.x,y1:b.y1,x2:b.x,y2:b.y2,
      stroke:'#000','stroke-width':sw,opacity:op,'stroke-dasharray':'5,4'}));
  });
}

// ═══ 5. CONNECTIONS ═══
function drawConnections(){
  D.connections.forEach(c=>{
    const f=D.positions[c.from],t=D.positions[c.to];
    if(!f||!t)return;
    const cpY=Math.min(f.y,t.y)-8-Math.min(Math.abs(t.x-f.x)*.006,12);
    const path=`M ${f.x} ${f.y} Q ${(f.x+t.x)/2} ${cpY} ${t.x} ${t.y}`;
    W.appendChild(el('path',{d:path,stroke:'#e0e0e0','stroke-width':.5,fill:'none',
      class:'conn','data-from':c.from,'data-to':c.to}));
  });
}

// ═══ 6. EVENTS ═══
function drawEvents(){
  D.events.forEach((e,i)=>{
    const pos=D.positions[i];if(!pos)return;
    const r=Math.min(2+Math.sqrt(e.count)*1.5,9);
    const g=el('g',{class:'ev','data-id':i,style:'cursor:pointer'});
    const fill=vs[e.vault]||'#888';

    if(e.count>10){
      g.appendChild(el('circle',{cx:pos.x,cy:pos.y,r,fill,opacity:.85}));
    } else if(e.count>3){
      g.appendChild(el('circle',{cx:pos.x,cy:pos.y,r,fill:'#fff',stroke:fill,'stroke-width':1.2}));
    } else {
      g.appendChild(el('circle',{cx:pos.x,cy:pos.y,r:Math.max(r,2.5),fill,opacity:.45}));
    }

    // Label to the right
    tx2(g,pos.x+r+6,pos.y-4,e.title,{s:e.count>8?8.5:7.5,c:e.count>5?'#333':'#666',w:e.count>8?'bold':'normal'});
    // Vault tag
    const vt=(D.vaultNames[e.vault]||e.vault)+(e.count>1?' · '+e.count+' files':'');
    tx2(g,pos.x+r+6,pos.y+8,vt,{s:6,c:'#bbb'});

    // Tooltip
    g.addEventListener('mouseenter',ev=>{
      tip.style.display='block';
      tip.querySelector('.tp-t').textContent=e.title;
      const dt=new Date(e.date+'T12:00:00');
      tip.querySelector('.tp-m').textContent=
        `${dt.toLocaleDateString('en',{month:'short',day:'numeric'})} · ${D.dimNames[e.dim]} · ${D.vaultNames[e.vault]} · ${e.count} file${e.count>1?'s':''}`;
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
  document.querySelectorAll('.conn').forEach(e=>{e.style.opacity=.02});
  const cn=new Set([id]);
  D.connections.forEach(c=>{
    if(c.from===id||c.to===id){
      cn.add(c.from);cn.add(c.to);
      document.querySelectorAll(`.conn[data-from="${c.from}"][data-to="${c.to}"]`).forEach(e=>{e.style.opacity=1;e.setAttribute('stroke','#333')});
    }
  });
  cn.forEach(i=>{const e=document.querySelector(`.ev[data-id="${i}"]`);if(e)e.style.opacity=1});
}
function unhl(){
  document.querySelectorAll('.ev,.conn').forEach(e=>{e.style.opacity='';
    if(e.tagName==='path'&&e.classList.contains('conn'))e.setAttribute('stroke','#e0e0e0')});
}
svg.addEventListener('click',()=>{sel=null;unhl()});

// ═══ INIT ═══
drawMovements();
drawLanes();
drawReflections();
drawBarlines();
drawConnections();
drawEvents();
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
    out = sys.argv[1] if len(sys.argv) > 1 else str(Path(__file__).parent/"output"/"ha-score.html")
    Path(out).parent.mkdir(parents=True, exist_ok=True)
    Path(out).write_text(html, encoding='utf-8')

    tf = sum(e['count'] for e in events)
    print(f"\nHA Life Score")
    print(f"  {tf} files -> {len(events)} nodes")
    print(f"  Saved: {out}")
    print(f"  Open:  file://{Path(out).resolve()}")

if __name__ == '__main__':
    main()
