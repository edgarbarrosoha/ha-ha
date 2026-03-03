---
name: advance
description: Daily business project progress. One deliverable at a time. Usage with project code (sic-q, docet, core, upu, beyond, learn, product, talisis) or status for overview.
disable-model-invocation: true
argument-hint: [project]
---

# Advance — HA-HA Business Execution

Daily execution for HA-HA business projects. Usage: `/advance $ARGUMENTS`

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
| `talisis` | Talisis 360 | `06-projects/talisis/project-state.md` | Waiting |

## The Protocol (6 Steps)

### Step 0: STRATEGIC REVIEW
Auto-triggered: first session, blocked project, >7 days away, unresolved decisions.
Read full state → identify blockers → assess highest-value unit → present options → record decisions.

### Step 1: LOAD
Read `project-state.md` for requested project. Also read agent_memory if activated.

### Step 2: ORIENT
Present: project, phase, deliverable, unit, position, last session, blockers.

### Step 3: PRODUCE
Next actionable unit. Types: document section, presentation, email/communication, canvas/framework, architecture, analysis, meeting prep.

4 quality passes:
1. **CONTENT** — substance, facts, logic
2. **STRATEGY** — does this advance the business objective?
3. **VOICE** — Edgar's style for external, COO precision for internal
4. **ANTI-GRANDILOCUENCIA** — no overselling, let quality speak

### Step 4: FEEDBACK LOOP
`ok`→approve | feedback→revise | `skip`→next | `send`→final version | `map`→deliverables | `switch {project}`→change project | `ya`→close

### Step 5: SAVE STATE
Update project-state.md: completed deliverables, advance position, update blockers.

### Step 6: CLOSE
Report: deliverables completed, progress, blockers, next step. Update dashboard.

## Sub-commands
`/advance status` — portfolio overview
`/advance {project} map` — deliverables map with progress
`/advance {project} blockers` — show blockers and dependencies

## Supporting Reference
For full protocol, see `00-ha-ha-root/agent_memory/skills/advance.md`
