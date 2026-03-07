# Technology: ha-score

## Architecture

```
ha-score.py (Python)
    |
    v
Data Collection:
    ha-eb  --> git log --diff-filter=A (creation dates)
    ha-ha  --> stat -f '%SB' (macOS birthtime)
    ha-tec --> stat -f '%SB'
    ha-res --> stat -f '%SB'
    ha-al  --> stat -f '%SB'
    |
    v
Processing:
    - Dimension inference (folder prefix 01-06)
    - Project extraction (first meaningful folder)
    - Label mapping (170+ LABELS dictionary)
    - Two-tier aggregation (dense dates: vault+dim; light dates: per-project)
    |
    v
Layout:
    - Adaptive lane heights: max(200, max_nodes * 28 + 40) per dimension
    - 5 movement headers with date ranges
    - 8 reflections at top
    - Cross-dimension barlines (dates with 2+ dim active)
    |
    v
Output:
    - Self-contained HTML with inline SVG
    - JS: pan/zoom (wheel + drag)
    - JS: SVG export (Blob + XMLSerializer)
```

## Files
- `ha-score.py` — Generator script (~500 lines)
- `ha-score.html` — Latest output (257 nodes, 7810x1783 canvas)

## Run
```bash
python3 ha-score.py [--output path]
# Default output: ../output/ha-score.html (relative to script)
```

## Data Pipeline
| Vault | Files Found | Method |
|-------|------------|--------|
| ha-eb | ~2000 | git log |
| ha-ha | ~1000 | stat |
| ha-tec | ~800 | stat |
| ha-research | ~400 | stat |
| ha-al | ~377 | stat |
| **Total** | **~4577** | **-> 257 nodes** |
