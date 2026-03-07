# Mara - MVP Technical Spec v1

**Status:** Draft v1  
**Date:** 2026-03-07  
**Scope:** MVP implementation spec without Obsidian dependency

## 1. Goal

Define a buildable MVP for Mara that:

- works on a local markdown workspace,
- does not require Obsidian to be installed,
- preserves HA's fractal model,
- produces a usable `Morning Brief -> Zoom -> Action` loop,
- can be built in 6 weeks by a small product/engineering team.

## 2. MVP Definition

### What the MVP must do

1. Let a user point Mara to a local markdown workspace folder.
2. Parse the workspace into a derived local model.
3. Show a useful `Morning Brief`.
4. Support `Root -> Vault -> Project` zoom.
5. Surface drift, waiting items, and signals.
6. Let the user execute a small set of safe actions.
7. Write back to markdown in deterministic, bounded ways.

### What the MVP must not require

- Obsidian
- Obsidian plugins
- Obsidian APIs
- cloud sync
- multi-user collaboration
- full email/calendar automation

### What counts as success

Within 5 minutes of connecting a workspace, a user should be able to:

- understand what matters,
- identify one stalled or risky thread,
- open the most relevant project,
- take one bounded action.

## 3. Product Form

### Delivery format

Desktop app, local-first.

### Recommended stack

- `Tauri`
- `React`
- `TypeScript`
- `SQLite`

### Why

- direct file access to local workspaces,
- no browser sandbox problems,
- local DB for projections and fast queries,
- clear path to ship without any editor dependency.

## 4. Core Assumptions

1. Markdown is the canonical human-readable memory layer.
2. Workspace structures will be messy, incomplete, and partially HA-shaped.
3. The parser must be tolerant and heuristic-driven.
4. The app can maintain a local derived DB that is rebuildable at any time.
5. User trust depends on safe write boundaries and visible action logs.

## 5. MVP User Flow

```text
Open app
  ->
Select local workspace folder
  ->
Initial scan + parse + projection build
  ->
Morning Brief
  ->
User selects recommended node
  ->
Root / Vault / Project view
  ->
Bounded action
  ->
Preview writeback
  ->
Commit to markdown
```

## 6. System Modules

The MVP should be implemented as nine modules.

### 6.1 App Shell

Responsibilities:

- desktop window lifecycle,
- workspace selection,
- local settings,
- onboarding state,
- error surfaces.

Outputs:

- app boot,
- recent workspace list,
- health indicators.

### 6.2 Workspace Adapter

Responsibilities:

- open and validate a local folder,
- walk files recursively,
- ignore excluded directories,
- provide normalized file events to the parser.

Rules:

- works on any folder,
- does not assume `.obsidian`,
- can optionally detect editor metadata if present.

### 6.3 File Watcher

Responsibilities:

- detect created, modified, deleted markdown files,
- debounce rapid updates,
- trigger incremental reparse,
- mark stale projections for rebuild.

### 6.4 Markdown Parser

Responsibilities:

- parse documents,
- classify likely HA structures,
- extract tasks, links, signals, sessions, headings, dates, people references,
- normalize content into projection payloads.

### 6.5 Projection Engine

Responsibilities:

- convert parsed documents into:
  - nodes,
  - tasks,
  - signals,
  - sessions,
  - people,
  - links,
  - state scores.

### 6.6 SQLite Store

Responsibilities:

- persist projections,
- support read models for UI,
- support rebuilds,
- log writes and agent actions.

### 6.7 Briefing and Rules Engine

Responsibilities:

- generate Morning Brief,
- detect stalled projects,
- detect waiting overload,
- score urgency and drift,
- rank recommended next move.

### 6.8 Writeback Engine

Responsibilities:

- preview changes,
- write only to approved targets,
- append or update only known sections,
- avoid destructive rewrites.

### 6.9 Agent Runtime Adapter

Responsibilities:

- construct scoped prompts,
- send bounded requests to provider,
- return results to UI,
- never write silently.

For MVP, this can be simple and provider-agnostic.

## 7. Workspace Contract

The MVP should support two workspace modes.

### 7.1 Mode A - HA-native workspace

A folder that already resembles HA:

```text
workspace/
├── 00-*-root/
├── 01-legacy/
├── 02-community/
├── 03-learning/
├── 04-technology/
├── 05-context/
└── 06-projects/
```

### 7.2 Mode B - Markdown-first generic workspace

A folder of markdown files that may not yet follow HA perfectly.

In this mode, Mara should still provide:

- document scan,
- task extraction,
- link graph,
- basic brief,
- project candidates,
- limited zoom.

This matters because the MVP must prove the product, not force full HA adoption upfront.

## 8. Node Detection Rules

The parser should infer conceptual nodes from the file system.

### 8.1 Root node heuristics

Create a `Root` node if any of these exist:

- directory matching `00-*-root`,
- file named `BOOT.md`,
- file named `context.md` near top-level system folders,
- file named `working-memory.md`.

### 8.2 Vault node heuristics

Create a `Vault` node when:

- a top-level directory resembles a stable domain cluster,
- or a folder contains recurring thematic project files with a dashboard/context pair,
- or the structure includes HA dimension folders below a domain-level root.

Note:

`Vault` here is a conceptual HA level, not an Obsidian concept.

### 8.3 Project node heuristics

Create a `Project` node when:

- a folder contains `dashboard.md`,
- or a folder contains `_agent_memory`,
- or a folder has dense markdown activity + repeated project-specific names,
- or user explicitly promotes a folder to project status.

## 9. Parser Spec

### 9.1 Supported file types

- `.md` only for MVP

Later:

- PDF metadata
- email summaries
- calendar event projections
- docx imports

### 9.2 Ignored directories

- `.git`
- `.obsidian`
- `node_modules`
- `__pycache__`
- hidden system folders

`.obsidian` should be ignored by default in MVP because it is editor metadata, not product runtime dependency.

### 9.3 Extraction targets

For each markdown file, extract:

- path
- title
- headings
- wikilinks
- tags
- checkbox tasks
- people mentions
- explicit dates
- frontmatter keys
- file timestamps
- approximate node association

### 9.4 Task extraction

Support these patterns:

- `- [ ]`
- `- [x]`
- `- [>]`
- `- [<]`
- `- [?]`
- `- [!]`

Normalize to:

- `todo`
- `done`
- `agent_action`
- `waiting`
- `decision_needed`
- `urgent`

### 9.5 Signal extraction

Signals can come from:

- explicit signal files later,
- inbox sections,
- lines with escalation patterns,
- waiting items promoted by rules,
- agent outputs marked as important.

For MVP, a signal can be inferred if a line includes:

- blocker language,
- escalation markers,
- waiting over threshold,
- drift over threshold,
- explicit signal keyword.

### 9.6 Session extraction

Session records should be extracted from:

- `working-memory.md`
- context sections like `Last Session`
- session archive patterns

Minimum extracted fields:

- date
- focus
- decisions
- open threads
- next step

### 9.7 Link extraction

Extract:

- wikilinks
- relative markdown links
- inferred project-name references for soft edges

### 9.8 People extraction

Extract from:

- `#name`
- known people files
- waiting-for lines
- community notes

### 9.9 Date extraction

Extract and normalize:

- ISO dates
- `DD/MM`
- month-name dates where possible

Used for:

- drift detection,
- waiting aging,
- session ordering,
- timeline strip.

## 10. Projection Rules

The projection engine should compute the following first-order outputs.

### 10.1 Node health

Derived from:

- recency,
- open tasks,
- waiting items,
- unresolved signals,
- number of recent meaningful sessions.

### 10.2 Drift score

A node drifts when:

- no meaningful update for N days,
- open urgent items exist,
- recent sessions disagree with dashboard state,
- active waiting items are aging.

### 10.3 Recommended next move

Rule-based in MVP.

Ranking factors:

- urgency,
- drift,
- strategic priority tags if present,
- number of blocked dependents,
- whether the user can act now.

### 10.4 Dimensional balance

For HA-native workspaces, compute visible weight by:

- number of active items per dimension,
- recency of updates,
- open blockers,
- distribution of current project activity.

## 11. SQLite Schema

The schema should be explicit, simple, and rebuildable.

```sql
CREATE TABLE workspaces (
  id TEXT PRIMARY KEY,
  root_path TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE documents (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  path TEXT NOT NULL,
  title TEXT,
  file_type TEXT NOT NULL DEFAULT 'markdown',
  sha256 TEXT,
  modified_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  frontmatter_json TEXT,
  headings_json TEXT,
  tags_json TEXT,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  UNIQUE (workspace_id, path)
);

CREATE TABLE nodes (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  name TEXT NOT NULL,
  level TEXT NOT NULL, -- root | vault | project
  path TEXT,
  parent_id TEXT,
  source TEXT NOT NULL, -- inferred | explicit | imported
  status TEXT NOT NULL DEFAULT 'active',
  health_score REAL,
  drift_score REAL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (parent_id) REFERENCES nodes(id)
);

CREATE TABLE node_documents (
  node_id TEXT NOT NULL,
  document_id TEXT NOT NULL,
  role TEXT NOT NULL, -- context | dashboard | working_memory | support
  PRIMARY KEY (node_id, document_id),
  FOREIGN KEY (node_id) REFERENCES nodes(id),
  FOREIGN KEY (document_id) REFERENCES documents(id)
);

CREATE TABLE tasks (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  node_id TEXT,
  document_id TEXT NOT NULL,
  line_number INTEGER,
  raw_text TEXT NOT NULL,
  normalized_text TEXT NOT NULL,
  task_type TEXT NOT NULL, -- todo | done | agent_action | waiting | decision_needed | urgent
  status TEXT NOT NULL,
  due_at TEXT,
  person_ref TEXT,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (node_id) REFERENCES nodes(id),
  FOREIGN KEY (document_id) REFERENCES documents(id)
);

CREATE TABLE signals (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  source_node_id TEXT,
  target_node_id TEXT,
  signal_type TEXT NOT NULL, -- alert | decision | waiting | insight | escalation
  priority INTEGER NOT NULL DEFAULT 0,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  source_document_id TEXT,
  created_at TEXT NOT NULL,
  resolved_at TEXT,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (source_node_id) REFERENCES nodes(id),
  FOREIGN KEY (target_node_id) REFERENCES nodes(id),
  FOREIGN KEY (source_document_id) REFERENCES documents(id)
);

CREATE TABLE sessions (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  node_id TEXT,
  document_id TEXT NOT NULL,
  session_date TEXT,
  focus TEXT,
  achievements TEXT,
  decisions TEXT,
  open_threads TEXT,
  next_step TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (node_id) REFERENCES nodes(id),
  FOREIGN KEY (document_id) REFERENCES documents(id)
);

CREATE TABLE people (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  handle TEXT,
  display_name TEXT,
  source_document_id TEXT,
  metadata_json TEXT,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (source_document_id) REFERENCES documents(id)
);

CREATE TABLE links (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  from_document_id TEXT NOT NULL,
  to_document_id TEXT,
  raw_target TEXT NOT NULL,
  link_type TEXT NOT NULL, -- wikilink | markdown | inferred
  is_resolved INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (from_document_id) REFERENCES documents(id),
  FOREIGN KEY (to_document_id) REFERENCES documents(id)
);

CREATE TABLE actions_log (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  node_id TEXT,
  action_type TEXT NOT NULL,
  target_document_id TEXT,
  preview_json TEXT,
  committed INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (node_id) REFERENCES nodes(id),
  FOREIGN KEY (target_document_id) REFERENCES documents(id)
);
```

### 11.1 Recommended indexes

```sql
CREATE INDEX idx_documents_workspace_path ON documents(workspace_id, path);
CREATE INDEX idx_nodes_workspace_level ON nodes(workspace_id, level);
CREATE INDEX idx_tasks_workspace_status ON tasks(workspace_id, status);
CREATE INDEX idx_tasks_node_type ON tasks(node_id, task_type);
CREATE INDEX idx_signals_target_status ON signals(target_node_id, status);
CREATE INDEX idx_sessions_node_date ON sessions(node_id, session_date DESC);
CREATE INDEX idx_links_from_doc ON links(from_document_id);
```

## 12. Writeback Contract

The MVP must follow strict write rules.

### Allowed writes

1. Update a known task line status.
2. Append a new signal to an app-owned section or signal file.
3. Append a structured action summary to a known log section.
4. Update specific dashboard sections if anchor headings exist.
5. Append checkpoint/session summaries to app-owned blocks.

### Forbidden writes

- rewrite whole documents unnecessarily,
- rewrite theoretical or archival documents,
- edit arbitrary prose without explicit user request,
- mutate files outside the active workspace root.

### UX requirement

Every write must support:

- preview,
- confirm,
- rollback from git or local snapshot later.

For MVP, preview + confirm is mandatory. Rollback can be manual if needed.

## 13. Agent Runtime Contract

For each agent action, the runtime should build a scoped request with:

- active node id,
- node level,
- relevant document excerpts,
- last decision,
- open threads,
- allowed output type,
- write target if any.

### MVP allowed agent actions

- summarize
- draft
- update structured block
- propose next step
- convert blocker into signal

### MVP forbidden agent actions

- unbounded repo-wide edits,
- multi-file writes without preview,
- automatic cross-node escalation without user confirmation.

## 14. UI Surfaces for MVP

### Required

1. Workspace picker
2. Morning Brief
3. Root view
4. Vault view
5. Project view
6. Signals Inbox
7. Action preview modal

### Optional if time permits

- graph view,
- dimension radar,
- timeline strip,
- recent actions panel.

If tradeoffs appear, ship usability before graph wow-factor.

## 15. Telemetry and Debugging

Even local-first MVP needs internal metrics.

Track locally:

- scan duration,
- parse failures,
- number of nodes inferred,
- number of tasks extracted,
- number of signals generated,
- write previews opened,
- writes committed,
- most-used screens.

This can remain local JSON or SQLite in MVP.

## 16. Week-by-Week Backlog

### Week 1 - App skeleton and workspace boot

Deliverables:

- Tauri app booting
- workspace folder picker
- recent workspace persistence
- directory walk
- ignore rules
- empty state and error state

Acceptance criteria:

- user can open app and select a folder
- app lists markdown files found
- no Obsidian dependency exists anywhere in runtime

### Week 2 - Parser and schema

Deliverables:

- SQLite DB initialized
- documents table populated
- task extraction
- link extraction
- node inference v1
- sessions extraction v1

Acceptance criteria:

- app can scan Edgar's workspace and build projections
- at least 90% of `dashboard.md` task lines are correctly classified
- parser does not crash on malformed markdown

### Week 3 - Morning Brief and Root view

Deliverables:

- briefing engine v1
- drift score v1
- waiting detection
- root-level UI
- recommended next move

Acceptance criteria:

- user sees a brief with top 3 tensions
- user can click from brief into root context
- at least one stalled node is surfaced correctly

### Week 4 - Vault and Project zoom

Deliverables:

- vault view
- project workspace
- resume-context module
- last decision / next move extraction
- signal inbox v1

Acceptance criteria:

- user can move Root -> Vault -> Project
- project screen shows last meaningful move and next move
- signal inbox shows open signals ranked by priority

### Week 5 - Safe actions and writeback

Deliverables:

- action composer
- preview modal
- writeback engine
- actions log table
- first agent action types: summarize, draft, update block

Acceptance criteria:

- user can preview and confirm an update
- markdown writes stay inside approved targets
- committed actions are logged locally

### Week 6 - Hardening and design-partner readiness

Deliverables:

- onboarding polish
- performance fixes
- parser edge-case handling
- local telemetry
- packaging for internal alpha
- short test script for design partners

Acceptance criteria:

- scan + brief completes reliably on Edgar's workspace
- no critical writeback bug remains open
- design partner can reach first useful insight in under 5 minutes

## 17. Definition of Done for MVP

The MVP is done when all of the following are true:

1. A user can connect a local markdown workspace without Obsidian.
2. Mara can infer enough structure to generate a useful Morning Brief.
3. Root -> Vault -> Project navigation works.
4. At least one bounded agent action works with preview and confirm.
5. The system writes back safely to markdown.
6. Edgar can use it on his own data and say, "this is already useful."

## 18. Recommendation

Build the MVP as a **workspace-native HA interpreter**.

That keeps the product honest:

- no editor lock-in,
- no fake platform complexity,
- no dependence on Obsidian,
- direct proof that HA can live as its own product layer.
