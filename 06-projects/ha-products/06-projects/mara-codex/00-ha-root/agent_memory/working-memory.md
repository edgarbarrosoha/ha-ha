# HA-Mara-Codex Working Memory

*Last ~20 sessions, most recent first*

---

## Session 3 - 2026-03-07

**Type:** Session close / next-step capture

### Achievements
- Validated the moved app from its new home in `06-projects/ha-products/06-projects/mara-codex/04-technology/mara-app/`
- Confirmed `npm run build` and `cargo check` both pass from the new path
- Saved the immediate post-migration next steps into the Mara-Codex kernel so the project can resume cleanly

### Next Steps Saved
1. Commit `mara-codex` inside `ha-ha`
2. Commit the old-source deletions inside `ha-eb`
3. Keep all future Mara work only in `06-projects/ha-products/06-projects/mara-codex/`

### Open Threads
- Reduce unresolved central tasks in routing
- Decide how TaaS concepts show up in-product versus only in architecture docs
- Add diagnostics export and stronger writeback coverage

---

## Session 2 - 2026-03-07

**Type:** Migration into HA-Products subproject

### Achievements
- Moved the full Mara workstream out of `06-projects/eb/ha-product` and into `06-projects/ha.link/06-projects/ha-products/06-projects/mara-codex`
- Created a proper HA kernel for the subproject: project state, root doc, boot sequence, context, working memory, dimensional anchors, and execution dashboard
- Registered Mara-Codex inside parent `ha-products` state and memory so the implementation track is now explicit
- Kept the implementation runtime under `04-technology/mara-app/` and the spec documents under the dimensions that actually own them

### Open Threads
- Reduce unresolved central tasks in routing
- Decide how TaaS concepts show up in-product versus only in architecture docs
- Add diagnostics export and stronger writeback coverage

---

## Session 1 - 2026-03-07

**Type:** MVP build sprint

### Achievements
- Defined PRD, architecture, UX flow, MVP spec, and epics for Mara
- Built Tauri + React + TypeScript + SQLite scaffold
- Brought the `ha-score.html` aesthetic into the running score-stage UI
- Added linked-workspace scanning, synthetic project extraction, central-task routing, and in-app diagnostics
- Validated the current projection on the real `ha-eb` workspace

### Current Technical Snapshot
- Build passes
- Cargo check passes
- Projection surfaces real project load, signals, and drift
- Main weakness is still unresolved central ambiguity

### Open Threads
- Partial re-index
- Alias curation
- Diagnostics export
- Broader dashboard extraction
