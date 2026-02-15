# Skill: advance

**Command:** `\advance {project}`, `\advance status`

**Purpose:** Daily progress protocol for business projects. Same philosophy as `\write` for research — even 10 minutes moves a project forward. Never lose your place, never start from zero.

---

## When to Use

- Daily business sessions (even 10 minutes)
- When Edgar types `\advance sic-q`, `\advance docet`, etc.
- When resuming a project after days or weeks away
- `\advance status` for portfolio overview

---

## Projects

| Code | Project | State File | Phase |
|------|---------|------------|-------|
| `sic-q` | SIC-Q (Querétaro) | `06-projects/sic-q/project-state.md` | Active |
| `docet` | Docet-Agentic | `06-projects/docet-agentic/project-state.md` | Blocked |
| `tec` | TEC Monterrey | `06-projects/tec-monterrey/project-state.md` | Waiting |
| `beyond` | Tec Beyond | `06-projects/tec-monterrey/06-projects/tec-beyond/project-state.md` | Active |
| `learn` | Learning Products | `06-projects/learning-products/project-state.md` | Active |
| `core` | HA-Core | `06-projects/ha-core/project-state.md` | Design |
| `product` | HA-Product | `06-projects/ha-product/project-state.md` | Design |
| `upu` | UPU | `06-projects/upu/project-state.md` | Active |

---

## The Protocol (6 Steps)

### Step 0: STRATEGIC REVIEW (First session or when blocked)

**Before advancing, the COO reviews the landscape.**

Triggered when:
- First `\advance` session for a project
- A blocker is marked in project-state or context
- Edgar away from project >7 days
- Previous session ended with unresolved decisions

Protocol:
1. Read full project state (context, working-memory, project-state, dashboard)
2. Identify blockers — external (waiting for) or internal (decisions needed)
3. Assess: can we advance despite blockers? What's the highest-value unit?
4. Present Edgar with concrete options + framed trade-offs
5. Record decisions in project-state.md and context.md

Once direction confirmed, proceed to Step 1.

---

### Step 1: LOAD

Read `project-state.md` for the requested project.

Also read:
- Project dashboard (if exists)
- Relevant deliverable files (current front)
- `style-guide.md` if communication deliverable
- Project-specific context (if agent-activated project)

### Step 2: ORIENT

Present current position:

```
-- **[Project] — [Phase]**
**Deliverable:** [current deliverable name]
**Unit:** [what we're working on] | [M] of [total deliverables]
**Last session:** [date] — [what was completed]
**Blockers:** [any external dependencies]
```

### Step 3: PRODUCE

Unlike `\write` (which distills paragraphs), `\advance` produces the next actionable unit:

| Deliverable Type | Unit | What You Produce |
|-----------------|------|------------------|
| **Proposal/Document** | Section | Draft section ready for review |
| **Presentation** | Slide outline | Key message + structure per slide |
| **Email/Communication** | Full draft | Draft in Edgar's voice (style-guide.md) |
| **Canvas/Framework** | Design | Structure + content for framework element |
| **Architecture** | Component | Technical specification or diagram |
| **Analysis** | Insight | Structured analysis with recommendation |
| **Meeting prep** | Brief | Agenda + key points + desired outcomes |

**Quality passes (for documents and communications):**
```
Pass 1: CONTENT       — Get the substance right (facts, logic, structure)
Pass 2: STRATEGY      — Does this advance the business objective?
Pass 3: VOICE         — Edgar's style (style-guide.md) for external comms
                        COO precision for internal docs
Pass 4: ANTI-GRANDILOCUENCIA — No superiority claims, no overselling,
                               let quality speak. Humble where appropriate.
                               (COR: 2026-01-31, 2026-02-02)
```

Always include: context (why this unit matters now), produced content, what comes next.

### Step 4: FEEDBACK LOOP

| Edgar says | Action |
|-----------|--------|
| `ok` / `va` / `sí` | Approve, advance |
| Feedback text | Incorporate, present revision |
| `skip` | Mark for later, advance |
| `send` | Prepare final version for sending/delivery |
| `map` | Show full project deliverables map |
| `switch {project}` | Save state, switch to another project |
| `ya` / `enough` / `\close` | Close session → Step 6 |

Repeat Steps 3-4 until done.

### Step 5: SAVE STATE

Update `project-state.md`:
- Mark completed deliverables/units
- Advance current position
- Update blockers and waiting-for items
- Update session log

### Step 6: CLOSE

```markdown
-- **Sesión de avance cerrada**
- **Entregables completados:** [N]
- **Progreso:** [deliverable] → [new position]
- **Blockers:** [any remaining]
- **Next:** [what's next]
```

Update `dashboard.md` if status changed.

---

## Sub-commands

| Command | Action |
|---------|--------|
| `\advance sic-q` | Start/continue SIC-Q |
| `\advance docet` | Start/continue Docet-Agentic |
| `\advance tec` | Start/continue TEC Monterrey |
| `\advance beyond` | Start/continue Tec Beyond |
| `\advance learn` | Start/continue Learning Products |
| `\advance core` | Start/continue HA-Core |
| `\advance product` | Start/continue HA-Product |
| `\advance upu` | Start/continue UPU |
| `\advance status` | Portfolio overview (all projects) |
| `\advance {project} map` | Deliverables map with progress |

---

## Text Mode (No File Access)

1. Ask Edgar to paste `project-state.md`
2. Present next unit
3. Generate updated state for Edgar to paste back

---

## Philosophy

> Like `\write` for business: the next step is always ready.
> You never ask "where was I?" The system remembers.
> Even one deliverable unit per day moves the project forward.
> Blocked projects can still advance — prep, design, anticipate.
> The goal is not speed — it's momentum.
