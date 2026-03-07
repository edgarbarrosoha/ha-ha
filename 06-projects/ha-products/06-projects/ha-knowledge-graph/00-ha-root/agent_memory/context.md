# Context: ha-knowledge-graph

## Zone A — Identity
- Knowledge graph generator for HA Obsidian vaults
- Zero external dependencies — generates self-contained HTML with vis.js
- Understands HA axioms: 6 dimensions, fractal structure, time axis
- Current state: v1 functional (708 notes, 181 edges from ha-eb)

## Zone B — Wisdom
- Dimension detection from folder prefixes (00-06)
- Wikilink parsing for edges
- Tag and heading extraction for metadata
- vis.js for interactive graph rendering
- Color-coded by dimension

## Zone C — State
- Single Python script: `ha-kg.py`
- Output: self-contained HTML file
- Scans: single vault at a time (expandable to multi-vault)
- No persistent state — regenerates from scratch each run
