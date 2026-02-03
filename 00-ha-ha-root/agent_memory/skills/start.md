# Skill: start

**Command:** `\start`, `\iniciar`, or `ha-eb-start`

**Purpose:** Initialize an HA-EB session with full context loading and status report.

---

## When to Use

- Beginning of any work session with Edgar
- When Edgar types `\start`, `\iniciar`, or runs `ha-eb-start`
- After a long break to re-sync context

---

## The Protocol (6 Steps)

### Step 1: LOAD IDENTITY
```
Read: agent_memory/you-are-ha.md
Purpose: Refresh HA identity and purpose
```

### Step 2: LOAD MEMORY (3 Layers)
```
Layer 3 (Consolidated): Read agent_memory/context.md
  - Zone A: Identity (immutable)
  - Zone B: Wisdom (decisions, patterns, corrections)
  - Zone C: State (last session, active threads)

Layer 2 (Working): Read agent_memory/working-memory.md
  - Last ~20 sessions with detail
  - Enables temporal questions ("what did we do last week?")

Layer 1 (Ephemeral): Will be populated by calendar/mail
```

### Step 3: LOAD REFERENCES
```
Read: agent_memory/style-guide.md (communication style)
Read: agent_memory/ha-syntax.md (task syntax reference)
Read: 06-projects/__to-do/dashboard.md (current tasks)
```

### Step 4: CHECK INBOX
```
Read: agent_memory/inbox.md
Look for: Unprocessed signals from domain HAs
Flag: Any items needing attention
```

### Step 5: CONNECT SERVICES
```
Run: ha-calendar week (or ha-calendar today)
Run: ha-mail unread
Purpose: Get real-time external context
```

### Step 6: SCAN FOR AGENT TASKS
```
In dashboard.md, look for: [>] tasks (agent to-do)
These are tasks delegated to HA for execution
```

---

## Output Format

After loading, report to Edgar:

```markdown
# HA-EB Session [N] | [DATE]

[Greeting based on time of day]

---

## Estado del Sistema

**Última sesión:** [date] — [brief description]

**Hilos activos:**
- [thread 1]
- [thread 2]
- ...

---

## Calendario — Hoy y Semana

**HOY ([day]):**
| Hora | Evento |
|------|--------|
| [time] | [event] |
| ... | ... |

**PRÓXIMOS DÍAS:**
- **[day]** → [events]
- ...

---

## Correo

[Summary of unread emails, flagging important ones]

---

## Inbox (Señales sin procesar)

| Fecha | Señal | Relevancia |
|-------|-------|------------|
| [date] | [signal] | [who] |

*(or "No hay señales pendientes")*

---

## Waiting For

- [<] #person → thing
- ...

---

## Tareas Detectadas [>]

[List any [>] tasks found in dashboard, or "No hay tareas [>] pendientes"]

---

## Prioridades Sugeridas para Hoy

1. [priority 1]
2. [priority 2]
3. [priority 3]

---

¿En qué trabajamos primero?
```

---

## Error Handling

| Issue | Action |
|-------|--------|
| File not found | Report which file is missing, continue with others |
| Calendar script fails | Note "Calendar not accessible", continue |
| Mail script fails | Note "Mail not accessible", continue |
| Empty inbox | Report "No signals pending" |
| No [>] tasks | Report "No agent tasks pending" |

---

## Text Mode (No File Access)

If running on ChatGPT/Claude web without file tools:

```
Request Edgar to paste:
1. agent_memory/you-are-ha.md
2. agent_memory/context.md
3. agent_memory/working-memory.md
4. dashboard.md

Then produce the same status report format.
```
