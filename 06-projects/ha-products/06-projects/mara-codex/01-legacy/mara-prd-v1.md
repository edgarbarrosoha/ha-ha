# Mara - PRD v1

**Status:** Draft v1  
**Date:** 2026-03-07  
**Owner:** TBD  
**Project:** ha-product (Mara)

## 1. Product Thesis

Mara is the first productized interface of Horizons Architecture at individual scale.

It is not "another AI chat" and not a generic productivity app. Mara is a **local-first fractal cockpit** that helps a person navigate a complex life or work system through:

- a stable 6-dimensional structure,
- persistent memory across levels of zoom,
- AI agents that operate inside a shared ontology,
- signals that surface what matters without forcing the user to read everything.

The product goal of v1 is simple:

> Give a user a 5-minute "aha moment" in which complexity becomes legible, actionable, and calmer.

## 2. Problem

Today, users with many simultaneous threads face four recurring problems:

1. Their context is fragmented across notes, tasks, meetings, projects, and conversations.
2. Generic LLMs reset too often and do not preserve structural orientation.
3. Important blockers remain invisible because they live in another project, domain, or time horizon.
4. Existing tools help manage tasks, but not navigate complexity.

Inside HA, this same pain already appears in practice:

- cross-vault blockers become invisible at root level,
- dashboards drift after a few days without review,
- humans need a faster way to move from life-level overview to project-level deep work,
- HA still depends too much on Edgar explaining the system for others to "get it."

## 3. Opportunity

Mara can become the B2C and later SMB entry point for HA by turning the theory into a daily-use interface.

Instead of selling "a framework," Mara gives users a working environment where HA is felt through use:

- morning brief,
- fractal zoom,
- dimensional map,
- project memory,
- signals bubbling upward,
- agent actions with clear boundaries.

This is the product that can demonstrate that HA works at individual scale the way SIC-Q demonstrates it at civic scale.

## 4. Target User

### Primary user

A founder, operator, knowledge worker, academic, or consultant who:

- handles 10-30 active threads,
- moves between strategic and tactical work constantly,
- uses notes/docs heavily,
- already feels that ordinary task managers flatten reality too much,
- wants help thinking and deciding, not just checking boxes.

### Early design-partner profile

- solo founder or founder-operator,
- professor/researcher with multiple projects,
- advisor/consultant managing parallel clients,
- senior leader in a small or medium organization.

### Not the v1 user

- mass-market consumers looking for habit tracking only,
- teams needing a full PM suite,
- users unwilling to maintain any structured knowledge base.

## 5. Core Job To Be Done

> "When I open Mara in the morning, I want to understand what matters across my whole system, where the real tension is, and what I should do next without rebuilding context from scratch."

Secondary jobs:

- Resume a project after days or weeks without friction.
- Detect hidden blockers and dependencies across areas.
- Coordinate with AI without surrendering control.
- Preserve memory so progress compounds over time.

## 6. Product Principles

1. **Fractal by design**  
   Same shape at Root, Vault, and Project level.

2. **Local-first**  
   User data stays local by default. Sync and sharing are explicit.

3. **Markdown-native, editor-agnostic**  
   Mara reads and writes to the user's existing markdown workspace. Obsidian compatibility is useful, but Obsidian is not required for the MVP.

4. **Orientation before action**  
   The first job is to make reality legible.

5. **Agentic, not autonomous by default**  
   Mara proposes and executes only within clear boundaries.

6. **HA-native, not feature-native**  
   Every screen should reinforce the six dimensions and time awareness.

## 7. v1 Scope

### 7.1 Must-have features

#### A. Morning Brief

A 60-90 second startup summary that answers:

- What matters today?
- What changed since last session?
- What is blocked?
- What is waiting on others?
- What project is most at risk of drift?

#### B. Root Cockpit

A life/work overview with:

- current priorities,
- active projects,
- blockers,
- waiting-fors,
- recent signals,
- dimensional balance snapshot.

#### C. Fractal Zoom

Three navigation levels:

1. `Root` - life / whole system
2. `Vault` - domain / business area
3. `Project` - deep specialist context

The user should be able to move between these without losing orientation.

#### D. Signals Inbox

A dedicated place where projects and domains bubble up:

- alerts,
- decisions,
- insights,
- stalled threads,
- requests for escalation.

#### E. Resume Context

For any project, Mara should answer:

- Where did we leave off?
- What was the last meaningful decision?
- What is the next concrete move?
- What must be ignored while in this mode?

#### F. Action Layer

Simple actions from within context:

- draft,
- summarize,
- update,
- plan,
- capture signal,
- mark waiting,
- create next step.

### 7.2 Nice-to-have, not v1

- full collaborative multi-user experience,
- mobile app,
- automated email sending from within Mara,
- deep calendar planning workflows,
- external marketplace of HA agents,
- live whiteboard or full graph editing.

## 8. User Experience Promise

By the end of the first session, the user should feel:

- "This sees the shape of my life/work."
- "I do not need to explain everything every time."
- "This helps me decide where to focus."
- "This is more useful than a chatbot and less rigid than a PM tool."

## 9. v1 User Stories

1. As a founder, I want a morning overview across all active areas so I know where my attention actually belongs.
2. As a researcher, I want to resume a stalled paper and immediately see the last decision, open thread, and next move.
3. As an operator, I want blockers from one domain to surface at root level before they become strategic blind spots.
4. As a heavy notes user, I want Mara to work with my markdown system instead of forcing migration.
5. As a human working with AI, I want the agent to act within explicit boundaries and leave an audit trail.

## 10. Inputs and Data Sources

### Required in v1

- markdown notes in an HA-compatible workspace structure,
- `dashboard.md`,
- `context.md`,
- `working-memory.md`,
- agent files and expertise files where available.

### Optional in v1

- calendar integration,
- email integration,
- Google Drive or external documents via MCP,
- graph projection from existing vault links.
- optional Obsidian-specific metadata or plugin affordances, if present.

## 11. Key Screens

1. `Morning Brief`
2. `Root Cockpit`
3. `Vault Overview`
4. `Project Workspace`
5. `Signals Inbox`
6. `Action Composer`

## 12. Success Metrics

### Product metrics

- Time to first useful overview: under 5 minutes
- Weekly retained usage among design partners: 3+ sessions/week
- Number of resumed stalled projects per week
- Number of surfaced blockers previously invisible at root level
- Number of actions executed from within context instead of from blank chat

### Qualitative signals

- "I trust this to orient me"
- "It reduced my mental load"
- "It helps me choose"
- "I understand HA through using it"

## 13. Risks

1. **Overbuilding**  
   Trying to ship platform, team product, and personal product at once.

2. **Too much abstraction**  
   If users need to read theory first, the product fails its transmission job.

3. **Write-conflicts with the vault**  
   Mara must not damage the user's source files.

4. **AI overreach**  
   If the product acts too much without explicit boundaries, trust collapses.

5. **Category confusion**  
   If it feels like a note app or a chatbot clone, HA's differentiation disappears.

## 14. Non-goals

Mara v1 is not:

- a replacement for Obsidian,
- requiring Obsidian to be installed,
- a general-purpose task manager,
- a full CRM,
- a Slack alternative,
- a no-code workflow builder,
- a fully autonomous AI chief of staff.

## 15. Release Strategy

### Phase 0: Internal alpha

Use Edgar's own vault as the proving ground.

Goal:

- validate Morning Brief,
- validate Root -> Vault -> Project flow,
- validate signal bubbling,
- validate safe markdown read/write contract.

### Phase 1: 3-5 design partners

Profiles:

- founder,
- academic/researcher,
- operator/consultant.

Goal:

- test whether the 5-minute aha moment transfers beyond Edgar.

### Phase 2: Paid pilot

Sell Mara as:

- personal complexity cockpit,
- founder operating system,
- HA-native planning layer for small teams.

## 16. Open Questions

1. Should v1 be positioned as `personal` first or `SME founder` first?
2. What exact boundary separates Mara from future team-level HA product?
3. Who owns product day-to-day?
4. Does Anagrama define visual language now or after interaction model is validated?
5. What pricing creates commitment without slowing early adoption?

## 17. Recommendation

Ship the smallest possible version that proves one thing:

> Mara can make a complex life legible in five minutes.

If that works, everything else compounds: retention, referral, team version, practitioners, and eventually the HA platform layer.
