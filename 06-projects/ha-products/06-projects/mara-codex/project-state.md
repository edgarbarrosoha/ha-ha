# Project State: Mara-Codex
**Boot:** `ha-mara-codex-start` | **Daily:** `\advance mara-codex`

## Meta
- **Product:** MARA implementation subproject inside HA-Products
- **Parent:** `ha-products`
- **Phase:** Active - migration landed, MVP hardening next
- **Current runtime:** Tauri + React + TypeScript + SQLite
- **Key constraint:** local-first, markdown-native, no Obsidian dependency

## Progress Map

| # | Deliverable | Status | Notes |
|---|------------|--------|-------|
| 1 | Ha-ize project structure | [x] complete | Nested under `ha-products/06-projects/mara-codex/` |
| 2 | PRD + architecture + UX | [x] complete | v1 docs moved into dimensional structure |
| 3 | MVP technical spec | [x] complete | parser, SQLite, writeback bounds |
| 4 | Desktop scaffold | [x] complete | Tauri runtime + web build validated from new path |
| 5 | Score-stage visual system | [x] complete | grounded in `ha-score.html` aesthetic |
| 6 | Synthetic projects + routing + diagnostics | [x] complete | validated on `ha-eb` real workspace |
| 7 | Parent project integration | [x] complete | registered in `ha-products` memory and state |
| 8 | Cross-vault migration | [x] complete | live project now runs from `ha-products/06-projects/mara-codex/` |
| 9 | Repository cleanup | [>] active | commit target repo changes, then source repo deletions |
| 10 | MVP hardening | [ ] pending | routing precision, partial re-index, stronger tests |
| 11 | TaaS alignment | [ ] pending | map Mara projection explicitly to TaaS abstractions |
| 12 | Dogfooding loop | [ ] pending | daily use on real work, capture friction |

## Current Front

- **Deliverable:** repository cleanup after migration
- **Type:** engineering operations
- **Context:** The project has been moved into `ha-products/06-projects/mara-codex/` and validated from the new path. The immediate next step is to leave both repos clean, then continue product hardening only from the new location.
- **Key constraint:** Do not keep advancing Mara from the old `ha-eb` path.

## Queue

1. Commit `mara-codex` inside `ha-ha`
2. Commit the old-source deletions inside `ha-eb`
3. Continue all future Mara work only in `06-projects/ha-products/06-projects/mara-codex/`
4. Improve alias curation and central-task routing
5. Add linked-dashboard extraction beyond the root portfolio dashboard
6. Harden writeback and show clearer diffs
7. Map projection concepts to TaaS concepts explicitly
8. Run dogfooding loop on real daily operations

## Blockers

- [ ] Repos not yet clean after the cross-vault move
- [ ] `1283` central tasks still do not resolve cleanly to a project
- [ ] No partial re-index yet; full rescans are still the default path
- [ ] No diagnostics export from UI yet
- [ ] Writeback remains intentionally narrow and needs stronger coverage

## Session Log

| Date | Units Completed | Notes |
|------|----------------|-------|
| 2026-03-07 | Session closed | Migration validated, next repo-cleanup steps saved into the project kernel |
| 2026-03-07 | Subproject instantiated | Moved work into `ha-products/06-projects/mara-codex`, created HA kernel, integrated with parent project |
| 2026-03-07 | MVP scaffold advanced | Score-stage UI, parser routing, diagnostics, real workspace audit |
