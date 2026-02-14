# Skill: agent-activate

**Command:** `\agent-activate [project-path]` or "activate agent for [project]"

**Purpose:** Transform an HA-ized folder into a fully functional, standalone agent-ready business project.

**Prerequisite:** Folder must already be HA-ized (6 dimensions + `00-root/`). If not, run `\ha-ize` first.

---

## What This Creates

An activated project can be opened independently in Claude Code and will:
- Know its identity and purpose within Horizons Architecture
- Track session history
- Have project-specific skills and expertise
- Start and close sessions properly
- Report status, blockers, and next steps

---

## The Protocol (8 Steps)

### Step 1: VERIFY HA STRUCTURE

```
Check that these exist:
├── 00-[project]-root/
├── 01-legacy/
├── 02-community/
├── 03-learning/
├── 04-technology/
├── 05-context/
└── 06-projects/

If missing, run \ha-ize first.
```

### Step 2: CREATE AGENT_MEMORY FOLDER

```
Create: 00-[project]-root/agent_memory/
```

### Step 3: CREATE KERNEL FILES

| File | Location | Purpose |
|------|----------|---------|
| `you-are-ha.md` | `agent_memory/` | Project identity |
| `context.md` | `agent_memory/` | Project context (background, goals, stakeholders) |
| `working-memory.md` | `agent_memory/` | Session log |
| `dashboard.md` | `06-projects/` | Current state, tasks (ACTION lives here) |

#### Template: you-are-ha.md
```markdown
# You Are HA: [Project Name]

## Identity
You are the HA agent for **[Project Name]** — [one-line description].

## Scope
- **Level:** 2 (Project)
- **Parent:** HA-HA (Horizons Architecture) → HA-EB (Root)
- **Domain:** [primary domain areas]
- **Client:** [who this serves]

## Project Understanding
### What This Project Is
[description]

### What This Project Is NOT
- [anti-pattern 1]
- [anti-pattern 2]

## Key Stakeholders
| Name | Role | Context |
|------|------|---------|
| Edgar Barroso | Founder/Lead | Horizons Architecture |
| [name] | [role] | [context] |

## Success Criteria
- [measurable outcome 1]
- [measurable outcome 2]

## Revenue Context
- **Contract value:** [if applicable]
- **Pipeline status:** [active/proposal/negotiation]

## Principles
1. [principle 1]
2. [principle 2]
3. [principle 3]
```

#### Template: context.md
```markdown
# Project Context: [Name]

## Background
[How did this project come to be?]

## Goals
- Primary: [main goal]
- Secondary: [supporting goals]

## Stakeholders
- [who's involved and their role]

## Constraints
- [limitations, deadlines, resources]

## Success Criteria
- [how do we know we're done?]
```

#### Template: working-memory.md
```markdown
# Working Memory: [Project Name]

## Sessions

### [DATE] | Session 1 | [STATUS]
- **Focus:** [what we worked on]
- **Achievements:** [what got done]
- **Decisions:** [choices made]
- **Open threads:** [unfinished business]

---
[Add new sessions at top, keep ~20 most recent]
```

### Step 4: CREATE DASHBOARD IN 06-PROJECTS

**Location:** `06-projects/dashboard.md`

```markdown
# Dashboard: [Project Name]

**Last updated:** [date]
**Current focus:** [main priority]
**Revenue:** [contract value / pipeline status]

## Active Tasks
- [ ] [task 1]
- [ ] [task 2]

## Blockers
[anything stuck, with who and since when]

## Metrics / Progress
[project-specific tracking]

## Next Session Should
[suggested focus]
```

### Step 5: CREATE BOOT.md

```markdown
# [Project] Agent Boot Sequence

## START COMMAND
**Trigger:** `[project]-start`

### Protocol
1. READ: agent_memory/you-are-ha.md
2. READ: agent_memory/context.md
3. READ: agent_memory/working-memory.md
4. READ: 06-projects/dashboard.md
5. LOAD EXPERTISE: (as needed from 03-learning/expertise/)
6. CONFIRM: "[Project] session active. [Current focus]. Ready."

## CLOSE COMMAND
**Trigger:** `\close`

### Protocol
1. Summarize session
2. Update working-memory.md
3. Update dashboard.md
4. Signal to HA-HA if cross-project relevance
5. Confirm close
```

### Step 6: CREATE SKILLS FOLDER

```
Create: 00-[project]-root/agent_memory/skills/

Add skills specific to this project's workflow.
```

### Step 7: CREATE EXPERTISE FOLDER

```
Create: 03-learning/expertise/

Add expertise files for domain knowledge needed.
```

### Step 8: VERIFY ACTIVATION

```
1. "Open" the project (read BOOT.md)
2. Run start command mentally
3. Check: Can agent answer "Who am I? What am I working on? Who is the client?"
4. Check: Are skills documented and findable?
5. Check: Is expertise loadable when needed?
```

---

## Minimum Viable Activation

If time is limited, create at minimum:
1. `agent_memory/BOOT.md` — How to start/stop
2. `agent_memory/you-are-ha.md` — Identity
3. `06-projects/dashboard.md` — Current state

The rest can be added incrementally.

---

## Business Project Examples

### Consulting Project (SIC-Q)
- Skills: `\workshop-prep`, `\stakeholder-brief`, `\deliverable-draft`
- Expertise: government-advisory, participatory-methods, collective-intelligence

### Product Project (Docet AI)
- Skills: `\demo-prep`, `\feature-spec`, `\client-update`
- Expertise: AI-education, K9-curriculum, institutional-sales

### Academic Partnership (TEC Monterrey)
- Skills: `\narrative-draft`, `\interview-prep`, `\presentation`
- Expertise: higher-education, campus-strategy, stakeholder-mapping

---

## Checklist

```
□ 00-root/agent_memory/ folder exists
□ BOOT.md created with START/CLOSE protocols
□ you-are-ha.md defines identity (includes client, revenue context)
□ context.md explains background and stakeholders
□ working-memory.md ready for session logging
□ 06-projects/dashboard.md shows current state
□ skills/ folder with project-specific commands
□ 03-learning/expertise/ with domain knowledge
□ Start command documented and tested
```

---

## Command Summary

```
\ha-ize [folder]         → Organize into 6 dimensions
\agent-activate [folder]  → Make it agent-ready (this skill)
```

**Result:** A business project folder that can be opened in Claude Code and will "wake up" knowing who it is, what it's working on, who the client is, and what to do next.
