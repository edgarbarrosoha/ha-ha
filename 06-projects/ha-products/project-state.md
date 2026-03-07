# Project State: HA-Products
**Boot:** `ha-product-start`

## Meta
- **Vision:** TaaS (motor) + MARA (interface) + LMS + consulting agents
- **Phase:** Architecture + MVP instancing
- **Source:** Oscar Diaz CTO Presentation (Marzo 2026)

## Progress Map

| # | Deliverable | Status | Notes |
|---|------------|--------|-------|
| 1 | Ha-ize project structure | [x] done | 6 dimensions + kernel from PPTX |
| 2 | TaaS architecture definition | [ ] pending | P0 - 6 dimensions as API |
| 3 | MARA scope and design | [>] active | `06-projects/mara-codex/` now exists as the implementation track |
| 4 | Dev-with-AI practices | [ ] pending | P0 - how team works with AI |
| 5 | ha-learning-app scope | [ ] pending | LMS for Leiden |
| 6 | Team formation | [ ] pending | Developer(s) needed |
| 7 | Budget confirmation | [ ] pending | $2.3M-$3M MXN/year |

## Current Front

- **Deliverable:** TaaS architecture + MARA implementation alignment
- **Type:** design + product engineering
- **Context:** MARA now has a live nested subproject at `06-projects/mara-codex/` with an MVP scaffold that reads real markdown workspaces. The next step is to tighten the implementation while mapping it cleanly to TaaS abstractions.
- **Key constraint:** Infrastructure clarity must improve without slowing down the implementation loop.

## Queue

1. ~~Ha-ize project~~ DONE
2. ~~Instantiate MARA subproject~~ DONE
3. TaaS architecture (dimensions as API, V=MxI, interaction matrix) <-- NEXT
4. MARA hardening inside `mara-codex`
5. Dev-with-AI practices
6. ha-learning-app for Leiden
7. Team formation
8. Development start

## Blockers

- [ ] Team - need developer(s) to build
- [ ] Budget - confirmation pending
- [ ] Architecture - TaaS still needs formal spec before scaling implementation

## Products

| Product | Status | Location | Description |
|---------|--------|----------|-------------|
| MARA Codex | [>] Active | `06-projects/mara-codex/` | Interface for humans + AI agents |
| HA Knowledge Graph | [>] Active | `06-projects/ha-knowledge-graph/` | Topological view — vault structure as interactive graph |
| HA Score | [>] Active | `06-projects/ha-score/` | Temporal view — life as orchestral notation |
| TaaS | [ ] Pending | TBD | 6 dimensions as API |

## Session Log

| Date | Units Completed | Notes |
|------|----------------|-------|
| 2026-03-07 | ha-new x2 + MARA | ha-knowledge-graph + ha-score as full HA instances; MARA codex instantiated |
| 2026-03-05 | Ha-ize complete | Restructured around TaaS+MARA from Oscar PPTX |
