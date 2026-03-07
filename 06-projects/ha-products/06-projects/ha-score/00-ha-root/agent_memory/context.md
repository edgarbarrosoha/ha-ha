# Context: ha-score

## Zone A — Identity
- Data-driven orchestral notation of the entire HA ecosystem
- Scans 5 vaults (ha-eb, ha-ha, ha-tec, ha-research, ha-al)
- Files are notes, dimensions are sections, dates are measures, movements are narrative arcs
- The materialization of pentagram.md — HA's musical notation theory made computational

## Zone B — Wisdom
- ha-eb uses git log (--diff-filter=A) for file creation dates
- Other 4 vaults use macOS stat birthtime
- Two-tier aggregation: dense dates (>25 groups) summarize by vault+dim; lighter dates show per-project detail
- Adaptive lane heights: each dimension grows to fit its densest date
- 170+ LABELS dictionary maps folder names to human-readable descriptions
- 5 narrative movements with date ranges (Genesis through Federation)
- 8 reflections displayed at top of score
- Cross-dimension barlines on dates where 2+ dimensions are active
- Interactive SVG: pan/zoom + SVG export

## Zone C — State
- v1 functional: 4577 files scanned, 257 nodes, 7810x1783 canvas
- Layout approved by Edgar ("the layout is the right one")
- Known issue: descriptions still too short/senseless — main open problem
- Single Python script: `ha-score.py`
- Output: self-contained interactive HTML
