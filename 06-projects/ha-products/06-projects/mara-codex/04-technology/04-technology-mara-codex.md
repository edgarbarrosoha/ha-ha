# 04 Technology - Mara Codex

## Runtime

- App path: `04-technology/mara-app/`
- Stack: Tauri + React + TypeScript + SQLite
- Parser: markdown workspace -> nodes, tasks, signals, sessions, diagnostics
- Writeback: bounded previews for known targets only

## Technology Documents

- `mara-architecture-v1.md`
- `mara-mvp-spec-v1.md`
- `mara-workspace-audit-2026-03-07.md`

## Current Engineering Priorities

1. Improve routing precision and alias curation
2. Add partial re-index
3. Expand diagnostics export
4. Harden writeback diffing and safety
5. Map the projection layer to TaaS concepts explicitly

## Commands

```bash
cd 04-technology/mara-app
npm run build
npm run tauri dev
cd src-tauri && cargo check
```
