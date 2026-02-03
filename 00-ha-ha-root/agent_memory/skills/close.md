# Skill: close

**Command:** `\close`, `\cerrar`

**Purpose:** Properly end an HA-EB session, saving all memory and state updates.

---

## When to Use

- End of any work session
- When Edgar types `\close` or `\cerrar`
- Before switching to a different context/project

---

## The Protocol (9 Steps)

### Step 1: CAPTURE
```
Summarize the session:
- Date and session number
- Type/focus of session
- Key achievements
- Decisions made
- Learnings/insights
```

### Step 2: UPDATE ZONE C (context.md)
```
Replace "Last Session" section:
- Date: [today]
- Type: [focus area]
- Achievements: [bullet list]

Update "Active Threads":
- Add new threads started
- Mark completed threads as [x]

Update "Waiting For":
- Add new items with [<] syntax
- Note any responses received

Update "Next Session Priorities":
- Based on what emerged today

Update "Recent Sessions" table:
- Add today's session
- Keep only last 5 entries
```

### Step 3: UPDATE WORKING-MEMORY
```
Add new entry at TOP of working-memory.md:

### [DATE] | Session [N] | [Focus]
- **Focus:** [main topic]
- **Achievements:** [what was done]
- **Decisions:** [any decisions made]
- **Open threads:** [unfinished items]
- **Next:** [priorities for next session]

If > 20 sessions:
- Archive oldest to archive/sessions/Q[n]-[year].md
```

### Step 4: UPDATE ZONE B (if significant)
```
Only for significant learnings. Add to context.md Zone B:

Decisions:
[DATE] DEC: {what} | WHY: {reason} | STATUS: active

Patterns:
PAT:{name} | {trigger} → {action} | REF: {source}

Corrections:
[DATE] COR: {mistake} | LESSON: {learning}

Key People (if new):
#{name}: {context for this domain}
```

### Step 5: ARCHIVE CHECK
```
If context.md Zone C > 100 lines:
- Compress oldest sessions
- Move to archive/sessions/Q[n]-[year].md
```

### Step 6: CROSS-DOMAIN SIGNALS
```
If learning applies beyond HA-EB scope:
Add to inbox.md:

- [DATE] [HA-EB] [TYPE]: Message | RELEVANCE: {who should know}

Types: INSIGHT, DECISION, RESOURCE, ALERT
```

### Step 7: SCORE (if milestone)
```
ALWAYS check if any of these occurred:
- A new project/capability began (>)
- A significant achievement was completed (^)
- A breakthrough or insight occurred (!)
- A major milestone was reached (*)
- A significant decision was made (?)

If yes, add to score.md:

[DATE]  [DIM][MARK]  description

Dimensions: L(Legacy), C(Community), R(Learning), T(Technology), X(Context), P(Projects)
Marks: >(begin), ^(achieve), v(setback), ~(process), .(pause), !(breakthrough), ?(decision), *(milestone)

Examples:
- 30 Jan  T*  \agent-activate skill created
- 30 Jan  P*  Agent-activated 5 projects
- 30 Jan  L!  HA as Federated AI framework articulated

ALSO update the narrative section if the event represents a shift in HA's evolution.
```

### Step 8: DASHBOARD UPDATE
```
Update 06-projects/dashboard.md:
- Mark completed tasks as [x]
- Update project statuses
- Adjust priorities if needed
```

### Step 9: CONFIRM
```
Report to Edgar:
- What was saved
- Where it was saved
- Next session priorities
```

---

## Output Format

```markdown
## Sesión Cerrada

### Guardado:

| Archivo | Actualización |
|---------|---------------|
| `context.md` Zone C | Last session, threads, priorities |
| `working-memory.md` | Session [N] entry added |
| `context.md` Zone B | [if applicable] |
| `score.md` | [if milestone] |
| `inbox.md` | [if cross-domain signal] |
| `dashboard.md` | [tasks marked, status updated] |

### Resumen de Sesión [N]:
- **Foco:** [topic]
- **Logros:** [achievements]
- **Decisiones:** [decisions]

### Próxima Sesión:
1. [priority 1]
2. [priority 2]
3. [priority 3]

---

Hasta pronto, Edgar. 🏔️
```

---

## Text Mode (No File Access)

Generate a "Close Package" with exact markdown to paste:

```
=== PASTE INTO working-memory.md (top of Sessions) ===
### [DATE] | Session [N] | [Focus]
- **Focus:** ...
- **Achievements:** ...
- **Decisions:** ...
- **Open threads:** ...
- **Next:** ...

=== PASTE INTO context.md Zone C ===
### Last Session
- **Date:** ...
- **Type:** ...
- **Achievements:** ...

### Active Threads
- ...

### Waiting For
- ...

### Next Session Priorities
1. ...

=== PASTE INTO context.md Zone B (if needed) ===
[decision/pattern/correction entries]

=== PASTE INTO dashboard.md ===
[updated tasks and priorities]

=== PASTE INTO score.md (if milestone) ===
[score entry]
```
