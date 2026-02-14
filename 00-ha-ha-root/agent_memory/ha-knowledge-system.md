# HA-HA Knowledge System

## Overview

The HA-HA Knowledge System provides structured capabilities for business operations. It consists of two complementary components:

1. **Skills** — Executable commands and protocols
2. **Expertise** — Callable domain knowledge

Both work together to make HA-HA effective as COO of Horizons Architecture.

---

## Skills (Executable Commands)

**Location:** `agent_memory/skills/`

**What they are:** Step-by-step protocols invoked with `\command` syntax.

**Current Skills:**

| Skill | Command | Purpose |
|-------|---------|---------|
| `start` | `\start` | Initialize session with full context |
| `close` | `\close` | End session, save all memory (8 steps) |
| `status` | `\status` | Mid-session situation report |
| `email` | `\email [person] [topic]` | Draft email following style-guide |
| `checkpoint` | `\checkpoint` | Save intermediate state |
| `weekly-review` | `\weekly` | Review past week, plan next |
| `ha-ize` | `\ha-ize [path]` | Convert folder to HA structure |
| `agent-activate` | `\agent-activate [path]` | Make project folder agent-ready |
| `version` | `\version` | Version control with YAML metadata |

---

## Expertise (Callable Knowledge)

**Location:** `03-learning/expertise/`

**What they are:** Domain knowledge that HA-HA loads to inform thinking.

**Business-Relevant Expertise Areas:**

| Expertise | Domain | When to Load |
|-----------|--------|--------------|
| Consulting methodology | Client engagements | Scoping, proposals, delivery |
| AI education systems | Docet product | Design, architecture, deployment |
| Government advisory | SIC-Q, public policy | Stakeholder mapping, institutional design |
| Workshop facilitation | Learning products | Curriculum design, delivery |
| Strategic communication | Client/partner comms | Proposals, presentations, pitches |

---

## How They Work Together

```
USER REQUEST
"Write a proposal for the Tec Beyond platform"
                    │
                    ▼
HA-HA PROCESSING
  1. DETECT: Proposal + Tec Beyond context
  2. LOAD SKILL: skills/email.md (communication protocol)
  3. LOAD EXPERTISE: consulting methodology + AI education
  4. LOAD CONTEXT: Tec Beyond project files, stakeholder map
  5. APPLY: Combine skill + expertise + context
                    │
                    ▼
HA-HA RESPONSE
  Professional proposal informed by domain expertise,
  following Edgar's communication style (style-guide.md)
```

---

## The Fractal Principle

HA-HA sits at Level 1 (Domain). Sub-projects inherit from HA-HA and can have their own specialized skills and expertise.

### Search Order

```
1. Current project's skills/expertise (if in project context)
2. HA-HA domain skills/expertise (this level)
3. HA-EB root skills/expertise (parent)
```

### Specialization by Level

| Level | Example | Skills Focus | Expertise Focus |
|-------|---------|--------------|-----------------|
| **Root (L0)** | HA-EB | Coordination, life orchestration | General frameworks |
| **Domain (L1)** | HA-HA | Business operations, client mgmt | Business domain knowledge |
| **Project (L2)** | SIC-Q, Docet | Project-specific workflows | Project-specialized knowledge |

---

## Creating New Skills

Skills go in `agent_memory/skills/` and should include:

```markdown
# Skill: [name]

**Command:** `\command` or trigger phrase
**Purpose:** What this skill accomplishes

---

## When to Use
[Trigger conditions]

## The Protocol
[Numbered steps]

## Output Format
[Expected output structure]

## Error Handling
[What to do when things go wrong]
```

---

## Creating New Expertise

Expertise goes in `03-learning/expertise/` and should include:

```markdown
---
type: expertise
expertise: [name]
owner: [person]
dimension: [which HA dimension]
status: active
---

# Expertise: [Name]

## Description
[What this expertise enables]

## When to Use
[Trigger conditions]

## Framework
[The actual knowledge/framework to apply]

## Resources
[Related materials]
```

---

## Key Principles

1. **Skills are Verbs, Expertise is Nouns** — Skills execute, Expertise informs
2. **Both are Callable** — Skills via `\command`, Expertise via domain detection
3. **Both are Fractal** — Each HA level has its own appropriate set
4. **They Complement Each Other** — A task often needs both
5. **They Accumulate** — New additions don't affect other levels

---

## Quick Reference

| Question | Skills | Expertise |
|----------|--------|-----------|
| What is it? | Executable protocol | Domain knowledge |
| Where? | `agent_memory/skills/` | `03-learning/expertise/` |
| Triggered by? | `\command` | Domain detection |
| What it does? | Executes steps | Informs thinking |
| Output? | Action completed | Better understanding |
| Analogy? | Playbook | Business intelligence |

---

*Last updated: 2026-02-14*
