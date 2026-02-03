# Skill: status

**Command:** `\status`

**Purpose:** Provide a comprehensive situation report (sitrep) at any point during a session.

---

## When to Use

- Edgar asks "¿cómo vamos?" or "status"
- Mid-session check on overall state
- Before making decisions that need context
- When returning after a break within the same session

---

## The Protocol (5 Components)

### Component 1: TEMPORAL CONTEXT
```
From working-memory.md:
- Current session number and focus
- What we've done so far today
- Open threads from this session
```

### Component 2: CALENDAR SNAPSHOT
```
Run: ha-calendar today (or ha-calendar week)
Show:
- Remaining events today
- Upcoming events this week
- Any conflicts or tight schedules
```

### Component 3: TASK STATE
```
From dashboard.md:
- [>] Agent tasks pending
- [!] Urgent items
- [?] Decisions needed
- [<] Waiting for responses
- [ ] Human tasks (top 5)
```

### Component 4: ACTIVE THREADS
```
From context.md Zone C:
- Current active threads
- Their status (progressing, blocked, waiting)
```

### Component 5: QUICK WINS
```
Identify:
- Tasks that can be completed quickly
- Items that are close to done
- Low-hanging fruit
```

---

## Output Format

```markdown
# Status Report | [TIME]

## Esta Sesión (Session [N])
- **Foco:** [current focus]
- **Avance:** [what's been done]
- **Tiempo en sesión:** [approximate]

---

## Calendario Restante

**Hoy:**
| Hora | Evento | En |
|------|--------|----|
| [time] | [event] | [time until] |

**Esta semana:**
- [upcoming events]

---

## Estado de Tareas

### [>] Pendientes de Agente
- [task 1]
- [task 2]

### [!] Urgentes
- [urgent items or "Ninguno"]

### [?] Decisiones Pendientes
- [decisions or "Ninguna"]

### [<] Esperando Respuesta
- #person → thing
- ...

### [ ] Próximas Tareas Humanas
1. [task]
2. [task]
3. [task]

---

## Hilos Activos

| Hilo | Estado |
|------|--------|
| [thread] | [progressing/blocked/waiting] |

---

## Quick Wins (< 15 min)
- [quick task 1]
- [quick task 2]

---

¿Qué quieres atacar?
```

---

## Difference from \start

| `\start` | `\status` |
|----------|-----------|
| Beginning of session | Mid-session |
| Loads all files fresh | Uses already-loaded context |
| Full calendar week | Focus on today/immediate |
| Reads inbox | Doesn't re-read inbox |
| Session initialization | Progress check |
