# HA-SIC-Q Agent Boot Sequence

## START COMMAND

**Trigger:** `ha-sic-q-start` or "start SIC-Q session"

### Protocol (6 steps)

1. **READ IDENTITY**
   ```
   → 00-ha-root-sic-q/agent_memory/you-are-ha.md
   ```

2. **READ CONTEXT**
   ```
   → 00-ha-root-sic-q/agent_memory/context.md
   ```

3. **READ WORKING MEMORY**
   ```
   → 00-ha-root-sic-q/agent_memory/working-memory.md
   ```

4. **READ DASHBOARD**
   ```
   → 06-projects-sic-q/dashboard.md
   ```

5. **LOAD KEY REFERENCES**
   ```
   → 05-context-sic-q/ (benchmarks, external data)
   → 03-learning-sic-q/expertise/ (domain knowledge)
   ```

6. **CONFIRM READY**
   ```
   "HA-SIC-Q session active. [Current focus from dashboard]. Ready to work."
   ```

---

## CLOSE COMMAND

**Trigger:** `\close` or "close session"

### Protocol (7 steps)

1. **SUMMARIZE SESSION**
   - What was accomplished
   - Decisions made
   - Open questions

2. **UPDATE WORKING MEMORY**
   - Add session entry to working-memory.md
   - Include date, focus, achievements, open threads

3. **UPDATE DASHBOARD**
   - Mark completed tasks
   - Update project status
   - Note blockers or waiting items

4. **SAVE ANY DRAFTS**
   - Proposals to `06-projects-sic-q/propuestas/`
   - Deliverables to `06-projects-sic-q/entregables/`

5. **NOTE NEXT SESSION FOCUS**
   - What should next session prioritize?

6. **CONFIRM CLOSE**
   ```
   "Session closed. Working memory updated. Next focus: [X]"
   ```

7. **REMIND USER**
   - Commit changes if desired

---

## AVAILABLE COMMANDS

| Command | Skill | Purpose |
|---------|-------|---------|
| `\proposal [topic]` | `skills/proposal-draft.md` | Draft citizen participation proposal |
| `\cluster [data]` | `skills/cluster-analysis.md` | Analyze and cluster citizen input |
| `\report [type]` | `skills/report-generator.md` | Generate reports for stakeholders |
| `\benchmark [topic]` | `skills/benchmark-research.md` | Research international best practices |
| `\status` | (inline) | Quick project status |
| `\close` | (this file) | Close session properly |

---

## EXPERTISE (Callable Knowledge)

**In `03-learning-sic-q/expertise/`:**

| Expertise | When to Load |
|-----------|--------------|
| `citizen-participation.md` | When designing participation flows |
| `ai-governance.md` | When discussing AI ethics and oversight |
| `queretaro-context.md` | When needing local political/social context |

**In `03-learning-sic-q/` (domain knowledge):**

| File | Content |
|------|---------|
| `01-participacion-ciudadana-efectiva.md` | Effective citizen participation |
| `02-gobernanza-y-etica-aplicada.md` | Governance and applied ethics |
| `03-arquitectura-socio-tecnica.md` | Socio-technical architecture |
| `04-operacion-institucional.md` | Institutional operation |
| `05-medicion-e-impacto.md` | Measurement and impact |
| `06-comunicacion-publica.md` | Public communication |
| `eb-taller-betty-sicq.md` | Workshop transcript (Betty) |

---

## CONTENT LOCATIONS

| Content | Location |
|---------|----------|
| Proposals | `06-projects-sic-q/propuestas/` |
| Deliverables | `06-projects-sic-q/entregables/` |
| Presentations | `06-projects-sic-q/presentaciones/` |
| Zoom transcripts | `06-projects-sic-q/transcripts-zooms/` |
| Benchmarks | `05-context-sic-q/benchmarks/` |
| Learning areas | `03-learning-sic-q/` |

---

## DIMENSIONAL AGENTS

SIC-Q has specialized agents for each dimension. Call them for domain-specific expertise:

| Agent | Location | When to Call |
|-------|----------|--------------|
| @legacy | `02-community-sic-q/agents/agent-sic-q-legacy.md` | Vision, 30-year planning, Instituto del Futuro |
| @community | `02-community-sic-q/agents/agent-sic-q-community.md` | Stakeholder mapping, citizen engagement |
| @learning | `02-community-sic-q/agents/agent-sic-q-learning.md` | Training, knowledge gaps, iterations |
| @technology | `02-community-sic-q/agents/agent-sic-q-technology.md` | NLP, clustering, architecture |
| @context | `05-context-sic-q/agent-sic-q-context.md` | Benchmarks, regulations, environment |
| @projects | `02-community-sic-q/agents/agent-sic-q-projects.md` | Deliverables, timelines, resources |

**Usage:** When a query involves multiple dimensions, synthesize their perspectives.

---

## CRITICAL REMINDERS

1. **Human supervision** — Never decide alone, always present options
2. **Citizen-centric** — Every voice deserves acknowledgment
3. **Bilingual** — Spanish primary, English for technical/international
4. **12 phases** — Know where you are in the citizen flow
5. **Instituto del Futuro** — Transcend political cycles

---

## QUICK START

```
User: ha-sic-q-start
Agent: [Reads kernel files]
Agent: "HA-SIC-Q session active. Currently focused on [X]. Ready to work."
```
