# HA-NCM Agent Boot Sequence

## START COMMAND

**Trigger:** `ha-ncm-start` or "start NCM session"

### Protocol (6 steps)

1. **READ IDENTITY**
   ```
   → 00-ha-root-ncm/agent_memory/you-are-ha.md
   ```

2. **READ CONTEXT**
   ```
   → 00-ha-root-ncm/agent_memory/context.md
   ```

3. **READ WORKING MEMORY**
   ```
   → 00-ha-root-ncm/agent_memory/working-memory.md
   ```

4. **READ DASHBOARD**
   ```
   → 06-projects-ncm/dashboard.md
   ```

5. **LOAD KEY REFERENCES**
   ```
   → 01-legacy-ncm/narrativas/ (current narrative versions)
   → 01-legacy-ncm/hallazgos/ (interview findings)
   → 03-learning-ncm/expertise/ (narrative methodology)
   ```

6. **CONFIRM READY**
   ```
   "HA-NCM session active. [Current focus from dashboard]. Ready to work."
   ```

---

## CLOSE COMMAND

**Trigger:** `\close` or "close session"

### Protocol (7 steps)

1. **SUMMARIZE SESSION**
   - What was accomplished
   - Narrative changes made
   - Decisions made

2. **UPDATE WORKING MEMORY**
   - Add session entry to working-memory.md
   - Include date, focus, achievements, open threads

3. **UPDATE DASHBOARD**
   - Mark completed tasks
   - Update narrative version status
   - Note feedback received

4. **SAVE ANY DRAFTS**
   - Narratives to `01-legacy-ncm/narrativas/`
   - Presentations to `06-projects-ncm/presentación/`
   - Hallazgos to `01-legacy-ncm/hallazgos/`

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
| `\narrative [section]` | `skills/narrative-revision.md` | Revise narrative section |
| `\synthesize [source]` | `skills/interview-synthesis.md` | Synthesize interview insights |
| `\hallazgo [person]` | `skills/hallazgo-extraction.md` | Extract findings from interview |
| `\present [audience]` | `skills/presentation-draft.md` | Draft presentation for audience |
| `\status` | (inline) | Quick project status |
| `\close` | (this file) | Close session properly |

---

## EXPERTISE (Callable Knowledge)

**In `03-learning-ncm/expertise/`:**

| Expertise | When to Load |
|-----------|--------------|
| `narrative-strategy.md` | When structuring or revising narrative |
| `tec-institutional-voice.md` | When matching Tec's communication style |

**In `03-learning-ncm/filosofía-narrativa/`:**

| File | Content |
|------|---------|
| `Pace Layers framework.md` | Stewart Brand's pace layering |
| `social-cognitive-theory-bandura.md` | Bandura's theory for behavior change |
| `value-proposition-presence-senge.md` | Senge's presence and value |

---

## CONTENT LOCATIONS

| Content | Location |
|---------|----------|
| Current narrative | `01-legacy-ncm/narrativas/ncm-2030-narrative.md` |
| One-pager | `01-legacy-ncm/narrativas/ncm-2030-one-pager.md` |
| Previous versions | `01-legacy-ncm/narrativas/versiones-anteriores/` |
| Interview findings | `01-legacy-ncm/hallazgos/` |
| Interview transcripts | `02-community-ncm/entrevistas/` |
| Dimensional agents | `02-community-ncm/agentes/` |
| Prompts | `04-technology-ncm/prompts/` |
| Knowledge base | `05-context-ncm/kdb_cynthia/` |
| Presentations | `06-projects-ncm/presentación/` |
| Meeting notes | `06-projects-ncm/reuniones/` |

---

## DIMENSIONAL AGENTS

NCM has specialized agents for each dimension. Call them for domain-specific expertise:

| Agent | Location | When to Call |
|-------|----------|--------------|
| @orchestrator | `02-community-ncm/agentes/agent-ncm-orchestrator.md` | Overall narrative coordination |
| @legacy | `02-community-ncm/agentes/agent-ncm-legacy.md` | Vision 2030, Don Eugenio |
| @community | `02-community-ncm/agentes/agent-ncm-community.md` | Stakeholder resonance |
| @learning | `02-community-ncm/agentes/agent-ncm-learning.md` | Methodology evolution |
| @technology | `02-community-ncm/agentes/agent-ncm-technology.md` | Prompt effectiveness |
| @context | `02-community-ncm/agentes/agent-ncm-context.md` | Plan 2030 alignment |
| @projects | `02-community-ncm/agentes/agent-ncm-projects.md` | Deliverable execution |

---

## INTERVIEW INVENTORY

| Category | Count | Location |
|----------|-------|----------|
| Leadership | 6 | `02-community-ncm/entrevistas/liderazgo-transcripciones/` |
| Directors | 13 | `02-community-ncm/entrevistas/directivos/` |
| Students | 7 | `02-community-ncm/entrevistas/estudiantes/` |
| **Total** | **26** | |

---

## CRITICAL REMINDERS

1. **Don Eugenio as compass** — "Education can do everything"
2. **Concrete over abstract** — Data and examples, not just vision
3. **Three bets** — Distrito, Posgrados, Selectividad
4. **Systemic collaboration** — Nodes + connections = impact
5. **Spanish primary** — This is for Tec de Monterrey

---

## PROJECT STATUS

| Phase | Status |
|-------|--------|
| Leadership interviews | [x] Complete |
| Director workshops | [x] Complete |
| Narrative v1 | [x] Delivered |
| Juan Pablo feedback | [<] Waiting |
| Final version | [ ] Pending |

---

## QUICK START

```
User: ha-ncm-start
Agent: [Reads kernel files]
Agent: "HA-NCM session active. Waiting for Juan Pablo feedback. Ready to work."
```
