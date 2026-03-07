# Dashboard: ha-knowledge-graph

## Current
- [x] v1: Single-vault graph generation (708 notes, 181 edges)
- [x] HA dimension color-coding
- [x] Interactive vis.js rendering
- [x] Wikilink edge detection
- [x] HA-ize as standalone product

## Next
- [ ] Multi-vault federation: scan all 5 vaults, show inter-vault edges
- [ ] Edge type classification: wikilink, tag co-occurrence, folder sibling
- [ ] Cluster detection: auto-identify and name functional groups
- [ ] Network metrics: centrality, betweenness, bridges between dimensions
- [ ] Temporal layer: show when connections were created (animate graph growth)
- [ ] TaaS integration: expose graph as API endpoint
- [ ] Offline mode: embed vis.js instead of CDN

## Someday
- [ ] 3D graph rendering (three.js)
- [ ] Diff mode: compare graph topology between two points in time
- [ ] Recommendation engine: "these notes should be connected but aren't"
