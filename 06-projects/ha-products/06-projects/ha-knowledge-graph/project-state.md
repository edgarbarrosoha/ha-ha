# Project State: ha-knowledge-graph
**Boot:** `ha-kg-start`

## Meta
- **Vision:** Make the topological structure of any HA vault visible and interactive
- **Phase:** v1 complete — single vault functional
- **Sibling:** ha-score (temporal view; this is the topological view)

## Progress Map

| # | Deliverable | Status | Notes |
|---|------------|--------|-------|
| 1 | Single-vault graph generation | [x] done | 708 notes, 181 edges (ha-eb) |
| 2 | HA dimension color-coding | [x] done | 6 colors + root gray |
| 3 | Interactive vis.js rendering | [x] done | Drag, zoom, filter |
| 4 | HA-ize as product | [x] done | Full 6-dim structure |
| 5 | Multi-vault federation | [ ] pending | Scan all 5 vaults, inter-vault edges |
| 6 | Edge type classification | [ ] pending | Wikilink vs tag vs folder sibling |
| 7 | Network metrics | [ ] pending | Centrality, betweenness, bridges |
| 8 | Cluster detection | [ ] pending | Auto-identify functional groups |
| 9 | TaaS API integration | [ ] pending | Expose graph as endpoint |

## Current Front

- **Deliverable:** Multi-vault federation
- **Type:** feature
- **Context:** Currently scans one vault. Next: scan all 5 vaults, detect cross-vault references, show inter-vault edges. This is prerequisite for TaaS integration.

## Queue

1. ~~Single-vault generation~~ DONE
2. ~~HA-ize as product~~ DONE
3. Multi-vault federation <-- NEXT
4. Edge type classification
5. Network metrics + cluster detection
6. TaaS API integration
7. Temporal layer (animate graph growth)

## Session Log

| Date | Units Completed | Notes |
|------|----------------|-------|
| 2026-01-27 | v1 complete | 708 notes, 181 edges from ha-eb |
| 2026-03-07 | HA-ize complete | Full 6-dimension project structure |
