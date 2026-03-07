# Context: ha-knowledge-graph

## Landscape
- **Obsidian Graph View** — Built-in but dimension-unaware, no HA axiom support
- **Logseq** — Similar graph view, same limitations
- **Neo4j / Knowledge graphs** — Enterprise-grade but requires infrastructure, not self-contained
- **Roam Research** — Graph-first but proprietary, no export

## Positioning
HA Knowledge Graph is unique because:
1. It understands the 6-dimension ontology natively
2. Zero infrastructure — one script, one output HTML, done
3. HA-aware: dimension classification, cross-dimensional edges highlighted
4. Self-contained output (no server, no database)

## Constraints
- macOS-first (stat birthtime for file dates)
- Obsidian markdown format assumed (wikilinks, YAML frontmatter)
- vis.js CDN dependency for offline-less rendering

## Market
- HA adopters (primary)
- Obsidian power users wanting dimension-aware graphs
- Consulting deliverable: "knowledge topology audit"
