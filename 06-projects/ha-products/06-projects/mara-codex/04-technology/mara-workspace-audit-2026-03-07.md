# Mara Workspace Audit - 2026-03-07

## Scope

Validation run against `/Users/edgarbarroso/Documents/ha-eb` using the current Mara MVP parser and scanner.

## Runtime

- `npm run tauri dev`: desktop runtime launches successfully
- `npm run build`: passes
- `cargo check`: passes

## Current projection

- Documents scanned: `4213`
- Nodes: `62`
  - Root: `1`
  - Vaults: `6`
  - Projects: `55`
- Tasks: `2656`
  - `todo`: `2115`
  - `done`: `432`
  - `waiting`: `71`
  - `urgent`: `13`
  - `decision_needed`: `15`
  - `agent_action`: `10`
- Signals inferred: `99`
- Sessions inferred: `55`

## Diagnostics snapshot

- Linked workspaces discovered: `4`
  - `al.link`
  - `ha.link`
  - `research.link`
  - `tec.link`
- Synthetic projects created or matched from dashboard tables: `21`
- Synthetic tasks materialized from dashboard rows: `50`
- Central tasks rerouted into concrete projects: `78`
- Signal-bearing tasks rerouted into concrete projects: `12`
- Residual root-level signals: `16`
- Central tasks still unresolved after routing: `1283`

## Strongest surfaced scopes

1. `06-projects/eb/docet`
2. `06-projects/eb/anytype`
3. `06-projects/eb/the_swiss_project`
4. `06-projects/ha.link/06-projects/tec-monterrey/06-projects/narrativa-campus-monterrey`
5. `06-projects/research.link/06-projects/ha-book`
6. `06-projects/ha.link/06-projects/tec-monterrey/00-ha-root/talisis/06-projects/talisis-360`
7. `01-legacy`
8. `06-projects/@synthetic/tec-narrativa-5fc35a39`
9. `06-projects/ha.link/06-projects/docet-agentic`
10. `06-projects/ha.link/06-projects/sic-q`

## Key fixes applied

1. Scanner now follows linked workspaces under `06-projects/*.link`.
2. Parser now recognizes linked workspace dimensions and project paths instead of collapsing them into root.
3. Project promotion now counts descendant markdown files, not only files directly under the project root.
4. Nested `06-projects` subfolders are only promoted when they have a real anchor (`dashboard`, `working-memory`, `context`, or root marker), which reduces false-positive subprojects.
5. Linked workspace aliases like `06-projects/tec.link` are no longer promoted as standalone projects.
6. Portfolio dashboards now materialize synthetic project nodes when a live project exists only in table form.
7. Root and vault tasks are now rerouted into concrete projects using alias matching before signal generation.
8. Diagnostics are now visible inside Mara, so routing gaps and synthetic nodes are inspectable from the app.

## Residual issues

1. `1283` central tasks still do not resolve cleanly to a project, which means alias routing is useful but far from sufficient.
2. `16` signals still remain attached to root after routing because they are too generic or refer to initiatives without a stable alias.
3. Synthetic projects are useful for visibility, but they still lack canonical folders, write targets, and stronger metadata.
4. `01-legacy` still absorbs substantial aggregate load, which suggests cross-cutting personal work needs better decomposition.

## Recommended next iteration

1. Add explicit project curation so unresolved central tasks can be mapped by user-confirmed aliases instead of pure heuristics.
2. Extract synthetic projects from more portfolio sources beyond `06-projects/dashboard.md`, especially linked workspace dashboards.
3. Add a diagnostics export from the app so this audit can be regenerated directly from Mara without a temporary script.
