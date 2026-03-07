# Mara - UX Flow v1

**Status:** Draft v1  
**Date:** 2026-03-07  
**Flow:** Morning Brief -> Zoom -> Action

## 1. UX Thesis

Mara should feel like entering a **calm control room**, not a busy dashboard and not a chatbot blank page.

The user should experience three things immediately:

1. orientation,
2. focus,
3. agency.

The signature interaction is not typing. The signature interaction is **fractal zoom**.

## 2. Design Principles

1. **Same shape, different resolution**  
   Root, Vault, and Project should feel related, not like separate products.

2. **What matters first**  
   Urgency, drift, and waiting should be visible before everything else.

3. **Context before generation**  
   The UI should load relevant memory before inviting AI action.

4. **Cool, but disciplined**  
   The interface can be striking, but every visual choice must reinforce orientation.

5. **Action is always one move away**  
   Every insight should lead to a next move.

## 3. Core Flow

```text
Open Mara
   ->
Morning Brief
   ->
Choose where tension lives
   ->
Zoom to Vault or Project
   ->
Review last decision + current blockers + next move
   ->
Take action
   ->
Save signal or update state
```

## 4. Screen 1: Morning Brief

### Goal

Tell the user what matters across the whole system in under 90 seconds.

### Layout

```text
┌──────────────────────────────────────────────────────────────┐
│ MARA                                  Sat 07 Mar | 07:42 AM │
├──────────────────────────────────────────────────────────────┤
│ Good morning, Edgar.                                        │
│ 3 things need attention today.                              │
│                                                              │
│ 1. JIII is stalled and needs a section 5 decision.          │
│ 2. Mara still has no owner/scope decision.                  │
│ 3. SIC-Q awaits response, but pilot design is in your hands.│
├──────────────────────────────────────────────────────────────┤
│ Signals      Drift      Waiting      Today      Six Dims     │
│   4           2           7           3            radar      │
├──────────────────────────────────────────────────────────────┤
│ Recommended next move: Resume JIII project specialist.      │
│ [Open JIII]   [View Root]   [Review Signals]                │
└──────────────────────────────────────────────────────────────┘
```

### Content blocks

- opening synthesis,
- what changed since last session,
- critical blockers,
- recommended next move,
- dimensional balance snapshot,
- signal count.

### Interaction

The user should be able to:

- accept the recommended next move,
- choose another node,
- open signals first,
- postpone and stay at root.

## 5. Screen 2: Root Cockpit

### Goal

Show the shape of the user's whole system.

### Core sections

1. `Active fronts`
2. `Signals`
3. `Projects at risk of drift`
4. `Waiting on others`
5. `Six-dimension balance`
6. `Timeline strip`

### Layout concept

```text
┌──────────────┬───────────────────────────────────┬──────────────┐
│ Scope        │ Main field                        │ Action rail  │
│ Root         │                                   │              │
│              │ Active Fronts                     │ Agent        │
│ Legacy       │ - SIC-Q                           │ Actions      │
│ Community    │ - JIII                            │              │
│ Learning     │ - Mara                            │ Draft        │
│ Technology   │ - Book                            │ Update       │
│ Context      │                                   │ Signal       │
│ Projects     │ Signals + Drift + Waiting         │ Plan         │
│              │                                   │              │
│              │ Fractal map / graph / radar       │              │
└──────────────┴───────────────────────────────────┴──────────────┘
```

### Key interaction

Clicking any active front animates into the next level of zoom instead of navigating to a completely different page.

## 6. Screen 3: Vault View

### Goal

Show a domain as a manageable operating field.

Example:

- Research
- Business
- Teaching
- Swiss Project

### What changes from Root

- narrower scope,
- richer project list,
- clearer dependencies,
- specialized signals,
- domain-specific dimension emphasis.

### Example: Research Vault

The user should instantly see:

- JIII,
- CIS,
- HA Tablebook,
- current writing momentum,
- next deadline,
- open reviewers/editors/partners,
- research-specific blockers.

## 7. Screen 4: Project Workspace

### Goal

Help the user resume a project with specialist precision.

### Top module

`Where we left off`

This module should always answer:

- last meaningful session,
- last approved decision,
- open thread,
- next move,
- things to ignore while in this mode.

### Example structure

```text
Project: JIII
Status: Stalled 17 days

Last meaningful move:
Section 2.5 concluded the review and opened the gap for HA's contribution.

Decision pending:
Choose Section 5 compression path: A / B / C

Next concrete move:
Select path B and draft compressed version.

Ignore for now:
SIC-Q, Docet, email, office strategy.
```

### Supporting panels

- key files,
- prior outputs,
- linked people,
- recent signals,
- safe actions.

## 8. Screen 5: Signals Inbox

### Goal

Prevent operational blindness.

### Inbox categories

- `Alert`
- `Decision`
- `Waiting`
- `Insight`
- `Escalation`

### Interaction

Each signal must support:

- view source context,
- snooze,
- resolve,
- escalate,
- convert into action.

This is where Mara feels more like a control system than a note app.

## 9. Screen 6: Action Composer

### Goal

Turn clarity into bounded action.

### Action types

- Draft
- Summarize
- Update
- Create signal
- Plan next step
- Mark waiting
- Capture decision

### UX rule

The system should never ask the user to start from a blank prompt if context is already known.

Instead, the composer should preload:

- active node,
- relevant files,
- last decision,
- intended output,
- write target.

## 10. Signature Interaction: Fractal Zoom

This is the most important UX move in the entire product.

### Desired feeling

The user should feel:

- "I am going deeper into the same system,"
- not "I am opening another tool."

### Animation idea

Root appears as a constellation / field.
Selecting a vault tightens the map.
Selecting a project brings one cluster into focus.

The frame remains stable:

- same left rail,
- same six dimensions,
- same action rail,
- same temporal orientation.

Only the resolution changes.

## 11. First-Time User Flow

### Step 1

Connect or point Mara to a local markdown workspace folder.

If the user already uses Obsidian, Mara can read the same folder. If not, nothing changes.

### Step 2

Mara parses the structure and says:

> "I found 4 active fronts, 12 waiting items, 3 stalled projects, and a strong concentration in Projects over Legacy and Learning."

### Step 3

The user sees the six dimensions populated automatically.

### Step 4

Mara recommends a first deep-dive.

### Step 5

The user opens one project and experiences the resume-context magic.

This is the 5-minute aha moment.

## 12. Example End-to-End Flow

### Case: Edgar opens Mara on Monday morning

1. Mara shows Morning Brief.
2. It flags JIII, Mara, and SIC-Q.
3. Edgar clicks `Open JIII`.
4. The interface zooms into Research, then JIII.
5. Mara shows the last decision and the exact next move.
6. Edgar clicks `Draft next paragraph`.
7. The agent generates within scope.
8. Edgar approves.
9. Mara writes to the right target and offers:
   - update dashboard,
   - create root-level signal,
   - schedule next move.

This is not chat-first. It is context-first, then action.

## 13. Visual Direction

### Look and feel

- intelligent, architectural, grounded,
- less "AI assistant,"
- more "navigation instrument."

### Ownable visual motifs

- six-dimensional radial map,
- signal pulses,
- temporal horizon strip,
- constellation-to-focus zoom,
- calm but high-contrast information hierarchy.

### Avoid

- generic kanban clone,
- white blank chatbot interface,
- crowded BI dashboard,
- gamified productivity toy aesthetic.

## 14. UX Risks

1. Too much information on the first screen.
2. Fractal navigation becoming confusing instead of clarifying.
3. Overusing graph visuals without helping action.
4. Letting the action composer become a disguised blank chat.

## 15. Recommendation

If only one interaction is perfected in v1, it should be this:

> Morning Brief -> recommended focus -> project resume -> bounded action.

That loop is where Mara becomes useful, cool, and unmistakably HA.
