# Project State: Mara-Codex
**Boot:** `ha-mara-codex-start` | **Daily:** `\advance mara-codex`

## Meta
- **Product:** MARA implementation subproject inside HA-Products
- **Parent:** `ha-products`
- **Phase:** Active - MVP hardening + dogfooding
- **Current runtime:** Tauri + React + TypeScript + SQLite
- **Key constraint:** local-first, markdown-native, no Obsidian dependency

## Progress Map

| # | Deliverable | Status | Notes |
|---|------------|--------|-------|
| 1 | Ha-ize project structure | [x] complete | Nested under `ha-products/06-projects/mara-codex/` |
| 2 | PRD + architecture + UX | [x] complete | v1 docs moved into dimensional structure |
| 3 | MVP technical spec | [x] complete | parser, SQLite, writeback bounds |
| 4 | Desktop scaffold | [x] complete | Tauri runtime + web build validated |
| 5 | Score-stage visual system | [x] complete | grounded in `ha-score.html` aesthetic |
| 6 | Synthetic projects + routing + diagnostics | [x] complete | validated on `ha-eb` real workspace |
| 7 | Parent project integration | [x] complete | registered in `ha-products` memory and state |
| 8 | MVP hardening | [>] active | routing precision, partial re-index, stronger tests |
| 9 | TaaS alignment | [ ] pending | map Mara projection explicitly to TaaS abstractions |
| 10 | Dogfooding loop | [ ] pending | daily use on real work, capture friction |

## Current Front

- **Deliverable:** MVP hardening + dogfooding loop
- **Type:** product + engineering
- **Context:** The core scaffold exists and already reads real HA markdown workspaces. The next step is to make the projection more trustworthy, reduce unresolved central load, and align Mara's local projection model with the broader TaaS architecture.
- **Key constraint:** Do not regress the local-first, preview-first, editor-agnostic stance while expanding capability.

## Queue

1. Improve alias curation and central-task routing
2. Add linked-dashboard extraction beyond the root portfolio dashboard
3. Harden writeback and show clearer diffs
4. Map projection concepts to TaaS concepts explicitly
5. Run dogfooding loop on real daily operations

## Blockers

- [ ] `1283` central tasks still do not resolve cleanly to a project
- [ ] No partial re-index yet; full rescans are still the default path
- [ ] No diagnostics export from UI yet
- [ ] Writeback remains intentionally narrow and needs stronger coverage

## Session Log

| Date | Units Completed | Notes |
|------|----------------|-------|
| 2026-03-07 | Subproject instantiated | Moved work into `ha-products/06-projects/mara-codex`, created HA kernel, integrated with parent project |
| 2026-03-07 | MVP scaffold advanced | Score-stage UI, parser routing, diagnostics, real workspace audit |
