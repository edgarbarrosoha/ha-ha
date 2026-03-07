# Mara App

Application runtime for `mara-codex`, the MARA subproject inside `ha-products`.

Local-first desktop scaffold for `Mara`, the HA fractal cockpit.

## Current status

This scaffold includes:

- Tauri + React + TypeScript app structure
- SQLite bootstrap layer
- markdown workspace parser v0 hardened on Edgar's vault
- Tauri backend command for scanning local markdown workspaces
- MVP-oriented UI for `Morning Brief -> Zoom -> Action`
- editorial `Score View` inspired by `ha-score.html`
- synthetic project extraction from portfolio dashboards
- task/signal routing from central root or vault scopes into matching projects
- in-app diagnostics for linked workspaces, synthetic nodes, and routing gaps
- bounded writeback preview/commit for `06-projects/dashboard.md`
- bounded writeback preview/commit for `00-ha-eb-root/agent_memory/working-memory.md`
- native workspace watch with fingerprint fallback for auto-refresh
- local `actions_log` tracking for writeback previews and commits

## Important

This app is **not** dependent on Obsidian.

It reads a local markdown workspace folder. If a user happens to use Obsidian on the same folder, Mara can still work with it, but Obsidian is not required for the MVP.

## Prerequisites

- Node.js 20+
- npm 10+
- Rust + Cargo

## Install

```bash
npm install
```

## Run in web mode

```bash
npm run dev
```

Note:

Web mode is useful for UI work, but folder-picking and workspace scanning are designed for the Tauri runtime.

## Run in desktop mode

```bash
npm run tauri dev
```

## Build

```bash
npm run build
npm run tauri build
```

## Project structure

```text
mara-app/
├── src/
│   ├── db/ddl.sql
│   ├── lib/
│   │   ├── bridge.ts
│   │   ├── parser.ts
│   │   ├── sql.ts
│   │   ├── demo.ts
│   │   ├── types.ts
│   │   └── db/sqlite.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── styles.css
└── src-tauri/
    ├── src/main.rs
    ├── Cargo.toml
    └── tauri.conf.json
```

## Current limitations

- SQLite persistence layer is scaffolded but not production-hardened
- Parser heuristics are now usable on Edgar's vault, but still rule-based and shallow
- Signals are inferred heuristically in v0
- Synthetic project extraction is dashboard-table driven and still heuristic
- Signal routing is alias-based and may miss ambiguous central tasks
- Writeback is intentionally limited to app-managed blocks inside known targets
- Native watch may fall back to fingerprint polling depending on runtime permissions/path
- Project promotion is better than pure dashboard/root heuristics, but still rule-based

## Recommended next implementation steps

1. Add partial re-index so file changes do not require full rescans.
2. Promote more projects from dashboard tables and explicit user curation.
3. Add richer action types on top of the existing preview-first writeback engine.
