# HA-Mara-Codex Session Memory

---

## ZONE A: Identity (Immutable)

### Project Scope
- **Level:** 3 (Subproject)
- **Scope:** Working implementation of MARA inside HA-Products
- **Role:** Product engineering + dogfooding
- **Parent:** HA-Products
- **Grandparent:** HA-EB

### Product Constraints
- **Local-first:** Workspace data stays local
- **Canonical substrate:** local markdown workspace
- **UI stance:** editorial, navigable, fractal
- **Write policy:** preview-first, bounded writes only
- **Dependency stance:** no Obsidian requirement for MVP

### Permanent Resources
- `project-state.md`
- `00-ha-root/ha-root-mara-codex.md`
- `01-legacy/mara-prd-v1.md`
- `01-legacy/mara-ux-flow-v1.md`
- `04-technology/mara-architecture-v1.md`
- `04-technology/mara-mvp-spec-v1.md`
- `04-technology/mara-workspace-audit-2026-03-07.md`
- `04-technology/mara-app/`
- `06-projects/dashboard.md`
- `06-projects/mara-epics-tickets-v1.md`

---

## ZONE B: Wisdom (Evolving)

### Decisions
- [2026-03-07] DEC: MARA implementation lives as nested project `ha-products/06-projects/mara-codex` | WHY: MARA is a P0 interface inside HA-Products and needs a persistent implementation track | STATUS: active
- [2026-03-07] DEC: MVP stays markdown-native and editor-agnostic | WHY: Obsidian dependency weakens adoption and architecture clarity | STATUS: active
- [2026-03-07] DEC: Projection before generation | WHY: Mara's value comes from a stable workspace projection, not only chat responses | STATUS: active
- [2026-03-07] DEC: Preview-first writeback only | WHY: Trust is product-critical when touching user workspace files | STATUS: active
- [2026-03-07] DEC: `ha-score.html` is the strongest visual reference for the cockpit | WHY: It already captures the editorial score-space that Mara should evoke | STATUS: active
- [2026-03-07] DEC: after migration, Mara work continues only from `ha-products/06-projects/mara-codex` | WHY: split execution across old and new paths would create drift immediately | STATUS: active

### Patterns
- PAT:fractal-zoom | Root -> vault -> project must stay legible at all times
- PAT:workspace-projection | Parse markdown workspace into nodes, tasks, signals, sessions, diagnostics
- PAT:synthetic-visibility | If a live initiative exists only in dashboards, surface it as synthetic rather than hiding it
- PAT:central-load-routing | Root and vault ambiguity should be routed into projects whenever there is enough alias evidence
- PAT:bounded-writeback | Show diff/preview first, commit second
- PAT:single-live-path | Once a project migrates, all further implementation should happen only in the destination path

### Key Intelligence
- Real workspace validation currently yields `21` synthetic projects, `78` rerouted tasks, and `1283` unresolved central tasks
- The MVP already compiles and runs from the new path; the immediate operational risk is repo drift, not runtime breakage
- `ha-eb` is still the primary dogfooding workspace, but `mara-codex` in `ha-ha` is now the only implementation home

---

## ZONE C: State (Dynamic)

### Last Session
- **Date:** 2026-03-07
- **Type:** Session close after migration
- **Achievements:** Validated `npm run build` and `cargo check` from the new `mara-codex` path and saved the post-migration next steps into the project kernel.

### Active Threads
- [>] Commit `mara-codex` inside `ha-ha`
- [>] Commit the old-source deletions inside `ha-eb`
- [!] Keep all future Mara work only in `mara-codex`
- [!] Alias curation and routing precision
- [ ] Diagnostics export from app

### Waiting For
- [?] Stronger mapping from unresolved central tasks to canonical project aliases
- [?] Decision on how explicit the TaaS layer should appear inside the MVP

### Next Session Priorities
1. Commit target-repo changes in `ha-ha`
2. Commit old-source deletions in `ha-eb`
3. Resume product work only from `06-projects/ha-products/06-projects/mara-codex/`
4. Reduce unresolved central task load
