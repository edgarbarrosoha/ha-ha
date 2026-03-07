# Mara - Architecture v1

**Status:** Draft v1  
**Date:** 2026-03-07  
**Scope:** Product architecture on top of the current HA markdown workspace system

## 1. Architectural Thesis

Mara should not replace the existing HA system.

It should sit **on top of it** as a local-first product layer that:

- reads the existing fractal structure,
- projects it into a usable interface,
- writes back only to safe, explicit locations,
- preserves the markdown workspace as source of truth.

This is the right move because the current vault already contains:

- memory layers,
- dashboards,
- skills,
- agent roles,
- signaling logic,
- graph structure,
- real operational data.

So the architecture should **productize the system**, not rebuild it.

## 2. Design Constraints

1. Markdown remains canonical for human-readable memory.
2. The MVP must not require Obsidian to be installed.
3. The app must work with partial HA adoption, not only perfect workspaces.
4. All AI layers should be provider-agnostic.
5. The app must degrade gracefully if calendar, email, or MCP are unavailable.
6. User trust depends on deterministic writes and a clear audit trail.

## 3. Recommended Product Form

### v1 container

**Desktop app, local-first**

Recommended stack:

- `Tauri`
- `React`
- `TypeScript`
- `SQLite`

Why this shape:

- strong local file access,
- fast startup,
- lower resource use than Electron,
- good path to cross-platform later,
- fits a product whose core differentiator is local knowledge and explicit sovereignty.

Web can come later, but not as the first architecture.

### What the MVP is not

- not an Obsidian plugin,
- not dependent on Obsidian APIs,
- not dependent on Obsidian being open in the background.

Obsidian should be treated as an optional companion editor, not as runtime infrastructure.

## 4. High-Level System

```text
                ┌─────────────────────────────┐
                │        Mara Desktop         │
                │     UI + Local Actions      │
                └──────────────┬──────────────┘
                               │
                ┌──────────────▼──────────────┐
                │       Application Core      │
                │  Briefing / Signals / Zoom  │
                └──────────────┬──────────────┘
                               │
        ┌──────────────────────┼──────────────────────┐
        │                      │                      │
┌───────▼────────┐   ┌─────────▼─────────┐   ┌───────▼────────┐
│Workspace Adapter│   │  Derived Index    │   │ Agent Runtime  │
│ Markdown I/O    │   │ SQLite Projections│   │ Provider Layer │
└───────┬────────┘   └─────────┬─────────┘   └───────┬────────┘
        │                      │                     │
┌───────▼──────────────────────▼─────────────────────▼──────────┐
│                         HA Source Layer                        │
│ markdown files / dashboards / memory / agents / skills / MCP  │
└────────────────────────────────────────────────────────────────┘
```

## 5. Source Layer

Throughout this document:

- `Vault` refers to the HA conceptual level between Root and Project.
- `Workspace` refers to the local folder of markdown files that Mara reads.

These are not the same thing, and the MVP should depend on the second, not the first.

### 5.1 Canonical files for v1

Mara v1 should read these first:

- `00-ha-eb-root/agent_memory/context.md`
- `00-ha-eb-root/agent_memory/working-memory.md`
- `06-projects/dashboard.md`
- equivalent files in other HA nodes when present
- `02-community/agents/*.md`
- `03-learning/expertise/*.md`

### 5.2 Optional external sources

- calendar via existing shell bridge,
- email via existing shell bridge,
- Google Drive and other MCP sources,
- generated graph outputs or direct markdown link analysis.

### 5.3 Optional editor integrations

Later, Mara can add adapters for:

- Obsidian metadata,
- Obsidian URI deep links,
- editor-specific frontmatter conventions.

These should remain optional enrichments, not architectural dependencies.

## 6. Derived Index Layer

The workspace should not be queried raw for every UI interaction.

Mara should maintain a local derived index in SQLite with projections such as:

- `nodes`
- `tasks`
- `signals`
- `sessions`
- `projects`
- `people`
- `artifacts`
- `events`
- `links`
- `dimensions`

This index is disposable and rebuildable. It is not the source of truth.

### 6.1 Why projections matter

They enable:

- fast morning brief generation,
- stalled-project detection,
- cross-vault blocker detection,
- graph queries,
- dimensional balance metrics,
- exact scoping for Root/Vault/Project views.

## 7. Domain Model

### 7.1 Core entities

#### `Node`

Represents a fractal unit:

- Root
- Vault
- Project

Fields:

- `id`
- `name`
- `level`
- `path`
- `parent_id`
- `status`

#### `DimensionState`

Represents the current state of one of the six dimensions inside a node.

Fields:

- `node_id`
- `dimension`
- `activity_score`
- `staleness_score`
- `open_threads`
- `signals_count`

#### `Task`

Fields:

- `id`
- `node_id`
- `source_file`
- `checkbox_type`
- `text`
- `status`
- `owner`
- `due_hint`
- `created_at`
- `updated_at`

#### `Signal`

Fields:

- `id`
- `source_node_id`
- `target_node_id`
- `signal_type`
- `priority`
- `message`
- `created_at`
- `resolved_at`

#### `Session`

Fields:

- `id`
- `node_id`
- `date`
- `focus`
- `achievements`
- `decisions`
- `open_threads`
- `next_step`

#### `Artifact`

A meaningful output:

- proposal,
- paper draft,
- presentation,
- deliverable,
- decision memo.

#### `Person`

Stakeholders extracted from waiting-fors, community files, or explicit metadata.

## 8. Parsing Strategy

### 8.1 v1 approach

Use a tolerant parser, not a strict one.

Mara should support:

- standard markdown headings,
- checklist items,
- waiting markers,
- explicit HA syntax when present,
- sparse metadata when not present.

This is important because the workspace is rich but not fully normalized.

### 8.2 File watchers

The app should watch relevant directories and rebuild projections incrementally when files change.

### 8.3 Write contract

Mara should write only to:

- known dashboard blocks,
- known memory sections,
- explicitly app-owned metadata blocks,
- explicit signal files or signal sections.

It should never freely rewrite an entire knowledge file.

## 9. Application Core

The application core should expose five services.

### 9.1 Briefing Engine

Inputs:

- tasks,
- recent sessions,
- signals,
- calendar,
- staleness rules.

Outputs:

- Morning Brief,
- Midday Re-sync,
- End-of-day reflection prompts.

### 9.2 Signal Router

Handles bubbling logic:

- Project -> Vault
- Vault -> Root

Functions:

- create signal,
- escalate signal,
- resolve signal,
- suppress noise,
- rank by urgency and strategic relevance.

### 9.3 Fractal Navigator

Responsible for preserving orientation while moving through:

- Root,
- Vault,
- Project.

It should keep the same global frame while narrowing scope.

### 9.4 Staleness and Drift Detector

Rules that detect:

- projects with no meaningful update in `n` days,
- waiting-fors with no follow-up,
- tasks that remain urgent too long,
- divergence between dashboard and recent sessions,
- hidden cross-node blockers.

### 9.5 Agent Orchestrator

Runs agentic tasks with explicit scope:

- `root agent`
- `vault agent`
- `project specialist`

The orchestrator should always know:

- current node,
- allowed files,
- active user intent,
- write permissions,
- preferred model/provider.

## 10. Agent Runtime

### 10.1 Requirement

LLM provider must be abstracted.

Possible providers:

- OpenAI
- Anthropic
- local models
- future federated/internal models

### 10.2 Runtime contract

Every agent invocation should receive:

- active node summary,
- relevant files only,
- recent decisions,
- open threads,
- boundaries,
- permitted actions.

### 10.3 Guardrails

- no autonomous write without explicit action type,
- no silent cross-node write,
- all agent actions logged,
- every suggested update previewable before commit.

## 11. UI Layer

The UI should consume projections, not raw files.

### Core views

- Morning Brief
- Root Cockpit
- Vault View
- Project View
- Signals Inbox
- Action Composer

### UI state model

Every screen should maintain:

- `scope`
- `timeframe`
- `dimension emphasis`
- `pending actions`
- `signals`

## 12. Relationship to Existing HA Components

### 12.1 `agent_memory`

Mara uses it as the human-readable memory substrate.

### 12.2 `skills`

Mara can expose skills as structured actions in the UI:

- `/write`
- `/advance`
- `/prepare`
- `/status`
- `/advise`

### 12.3 `agents`

The current dimension agents become formal scopes in the app.

### 12.4 `ha-kg.py`

The existing knowledge graph logic can seed Mara's graph projection:

- dimension detection,
- link extraction,
- recency,
- cross-dimensional edges.

Mara should reuse that logic conceptually, and possibly directly at first.

## 13. Data Sovereignty and Security

This architecture should preserve one of HA's strongest differentiators: sovereignty.

### Defaults

- files remain local,
- derived DB remains local,
- AI calls are explicit,
- sync is opt-in,
- sharing is opt-in.

### Optional later

- encrypted sync,
- team federation,
- organization-level nodes,
- selective data federation by pattern rather than raw content.

## 14. Suggested Milestones

### M0 - Parser and Index

- Read core HA files
- Build SQLite projections
- Generate Root/Vault/Project model

### M1 - Read-only Cockpit

- Morning Brief
- Root Cockpit
- Vault and Project drill-down
- Signals Inbox

### M2 - Safe Writes

- Update dashboard blocks
- Create signals
- Mark tasks
- Append session summaries

### M3 - Agentic Workflows

- Resume project specialist
- Draft/update actions
- Guided close/checkpoint flows

### M4 - Multi-node Federation

- Multiple vaults
- Shared protocols
- selective team views

## 15. Recommendation

Architect Mara as a **projection layer over HA memory**, not as a replacement system.

That gives you:

- fast time to product,
- continuity with your current practice,
- proof of HA through use,
- a cleaner path toward the future platform layer,
- freedom to ship the MVP without any Obsidian dependency.
