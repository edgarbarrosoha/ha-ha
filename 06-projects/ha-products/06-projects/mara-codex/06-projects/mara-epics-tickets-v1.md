# Mara - Epics and Tickets v1

**Status:** Draft v1  
**Date:** 2026-03-07  
**Source:** `mara-mvp-spec-v1.md`

## Epic 1 - App Shell and Workspace Boot

### MARA-1
**Title:** Create desktop app shell with workspace onboarding

Acceptance criteria:

- App opens with branded empty state
- User can trigger `Open workspace`
- Recent workspace list is persisted locally

### MARA-2
**Title:** Add local workspace folder picker

Acceptance criteria:

- User can select a local directory
- Selected path is validated before scan
- No Obsidian-specific API is required

### MARA-3
**Title:** Add workspace error and empty states

Acceptance criteria:

- Invalid path shows clear error
- Empty markdown workspace shows graceful fallback
- App remains usable after scan failure

## Epic 2 - Parsing and Projection

### MARA-4
**Title:** Implement tolerant markdown parser v0

Acceptance criteria:

- Headings, tasks, tags, links, people refs, and dates are extracted
- Malformed markdown does not crash parsing
- Parser works on HA-native and generic markdown workspaces

### MARA-5
**Title:** Infer Root, Vault, and Project nodes from workspace structure

Acceptance criteria:

- Root node always exists
- Dashboard/root heuristics generate project and vault candidates
- Nodes are assigned stable ids

### MARA-6
**Title:** Build projection engine for tasks, sessions, and signals

Acceptance criteria:

- Tasks are normalized by HA checkbox type
- Sessions are extracted from working-memory style files
- Signals can be inferred from waiting, blocker, and escalation patterns

## Epic 3 - SQLite and Persistence

### MARA-7
**Title:** Add SQLite initialization with DDL bootstrap

Acceptance criteria:

- Local database initializes on first boot
- DDL executes successfully through the app database layer
- Schema can be rebuilt without corrupting the markdown workspace

### MARA-8
**Title:** Persist parsed documents and projections to SQLite

Acceptance criteria:

- Documents, nodes, tasks, signals, sessions, and links are stored
- Workspace re-scan updates records idempotently
- Action log table is available for future writes

## Epic 4 - Briefing and Navigation

### MARA-9
**Title:** Build Morning Brief rules engine

Acceptance criteria:

- Brief ranks top tensions
- Brief surfaces stalled/risky threads
- Brief recommends one next move

### MARA-10
**Title:** Implement Root view

Acceptance criteria:

- Root view shows active fronts, waiting items, signals, and drift
- User can choose next scope from root
- View works with live projection data

### MARA-11
**Title:** Implement Vault and Project zoom

Acceptance criteria:

- User can move `Root -> Vault -> Project`
- Project view shows last meaningful move and next step
- Navigation preserves orientation rather than resetting context

## Epic 5 - Safe Actions

### MARA-12
**Title:** Add action composer with preview-first workflow

Acceptance criteria:

- User can trigger summarize/draft/update actions from active scope
- Every action builds a scoped payload
- Result is previewed before commit

### MARA-13
**Title:** Implement writeback engine with bounded targets

Acceptance criteria:

- Writes only affect allowed files/sections
- No arbitrary full-document rewrites occur
- Committed writes are stored in `actions_log`

## Epic 6 - Hardening and Alpha Readiness

### MARA-14
**Title:** Add file watcher and incremental reparse

Acceptance criteria:

- Modified files trigger incremental refresh
- Debounce prevents duplicate work
- UI updates after reparse without full restart

### MARA-15
**Title:** Add local telemetry and diagnostics

Acceptance criteria:

- Scan duration and parse failures are recorded locally
- User can inspect app health basics
- No external telemetry service is required for MVP

### MARA-16
**Title:** Prepare internal alpha package and test script

Acceptance criteria:

- README covers setup and launch
- Known limitations are documented
- Internal user can complete the first-use flow in under 5 minutes

## Suggested Sequencing

### Sprint 1

- MARA-1
- MARA-2
- MARA-4
- MARA-7

### Sprint 2

- MARA-5
- MARA-6
- MARA-8
- MARA-9

### Sprint 3

- MARA-10
- MARA-11
- MARA-12
- MARA-13

### Sprint 4

- MARA-3
- MARA-14
- MARA-15
- MARA-16

## Critical Path

The MVP depends on these tickets landing in order:

1. MARA-2
2. MARA-4
3. MARA-5
4. MARA-7
5. MARA-8
6. MARA-9
7. MARA-11
8. MARA-12
9. MARA-13
