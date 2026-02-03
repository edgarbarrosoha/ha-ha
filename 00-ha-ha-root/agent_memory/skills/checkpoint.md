# Skill: checkpoint

**Command:** `\checkpoint`

**Purpose:** Save intermediate session state without fully closing the session. A "mini-close" for long sessions or before risky operations.

---

## When to Use

- Long session (2+ hours) - save progress periodically
- Before attempting something that might fail
- Switching focus within the same session
- Edgar says "guarda el progreso" or "checkpoint"
- Natural break point (lunch, meeting, etc.)

---

## The Protocol (4 Steps)

### Step 1: CAPTURE PROGRESS
```
Summarize what's been done SO FAR in this session:
- Tasks completed
- Decisions made
- Files modified
- Current state of work in progress
```

### Step 2: UPDATE WORKING-MEMORY (Append)
```
Add checkpoint note to current session entry:

### [DATE] | Session [N] | [Focus]
- **Focus:** [topic]
- **Achievements:** [what's done]
- **Decisions:** [decisions]
- **Open threads:** [in progress]
- **Next:** [immediate next steps]

**[TIME] CHECKPOINT:**
- Progress: [what's been accomplished]
- Current task: [what we're working on]
- Next: [immediate next step]
```

### Step 3: SAVE CRITICAL FILES
```
If any important changes were made:
- Ensure dashboard.md reflects current state
- Note any files that were modified
- Flag anything that needs manual save (if text mode)
```

### Step 4: CONFIRM
```
Brief confirmation to Edgar:
- What was saved
- Current state
- Ready to continue
```

---

## Output Format

```markdown
## ✓ Checkpoint Guardado | [TIME]

**Progreso hasta ahora:**
- [accomplishment 1]
- [accomplishment 2]

**Estado actual:**
- Trabajando en: [current task]
- Archivos modificados: [list]

**Próximo paso:** [immediate next]

---

Checkpoint guardado en working-memory.md. Continuamos.
```

---

## Difference from \close

| `\checkpoint` | `\close` |
|---------------|----------|
| Mid-session save | End of session |
| Append to current entry | Create new entry |
| Quick (4 steps) | Full (9 steps) |
| No Zone B updates | Updates Zone B if significant |
| No score.md | Updates score.md if milestone |
| No inbox signals | Sends cross-domain signals |
| Continue working | Session ends |

---

## When NOT to Use

- If session is ending → use `\close` instead
- If just checking status → use `\status` instead
- If nothing significant has happened → skip it

---

## Auto-Checkpoint Suggestion

HA may suggest a checkpoint when:
- Session has been going for 2+ hours
- Multiple complex tasks completed
- Before a risky file operation
- Edgar mentions taking a break
