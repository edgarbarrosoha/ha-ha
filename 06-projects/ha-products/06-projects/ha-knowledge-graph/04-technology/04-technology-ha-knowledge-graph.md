# Technology: ha-knowledge-graph

## Architecture

```
ha-kg.py (Python, zero deps)
    |
    v
Vault scan --> Parse .md files --> Extract:
    - Wikilinks [[target]]  --> edges
    - Tags #tag             --> metadata
    - Headings              --> structure
    - Folder prefix         --> dimension (00-06)
    |
    v
Generate self-contained HTML
    - vis.js (CDN) for graph rendering
    - Color-coded by HA dimension
    - Interactive: drag, zoom, filter
    - Hover: note metadata
```

## Files
- `ha-kg.py` — Generator script (~300 lines)
- `ha-knowledge-graph.html` — Latest output (708 nodes, 181 edges)

## Run
```bash
python3 ha-kg.py [vault_path] [--output path] [--title name]
python3 ha-kg.py                                    # current dir
python3 ha-kg.py ~/Documents/ha-eb                  # specific vault
python3 ha-kg.py --output graph.html --title "HA-EB" # custom output
```

## Dependencies
- Python 3.8+ (stdlib only)
- vis.js loaded from CDN at runtime
