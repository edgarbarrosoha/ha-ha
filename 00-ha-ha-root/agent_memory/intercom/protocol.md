# Intercom Protocol v2

> Shared rules for multi-machine coordination. Both machines read this file.

---

## Architecture

Two machines, one vault (synced via Obsidian Sync + git):

| Machine | Owner file | Reads |
|---------|-----------|-------|
| Tec-computer (M2 Max) | `tec-computer.md` | `my-computer.md` |
| My-computer (M4 Max) | `my-computer.md` | `tec-computer.md` |

**Golden rule:** NEVER edit the other machine's file.

---

## File Format

Each machine's file has exactly 3 sections:

```markdown
# HA Intercom — {Machine}

## Inbox
<!-- Messages FOR the other machine to read. Max 5. Oldest deleted first. -->

### YYYY-MM-DD HH:MM | {type}
**→ {one-line summary}**
{details if needed, keep short}
{action: none | do X | respond | acknowledge}

## Status
<!-- Current machine state. Overwritten each session. -->
Session: {N} | {active|closed}
Editing: {files being edited, or "none"}
Last read other: {timestamp}

## Archive
<!-- Cleared every ~5 sessions. Only keep if referenced. -->
```

---

## Message Types

| Type | When | Example |
|------|------|---------|
| `status` | Boot, close, mid-session state | "Session 41 active. Working on dashboard." |
| `request` | Need the other machine to do something | "Install these 4 plugins on ha-research." |
| `response` | Reply to a request | "Plugins installed. Done." |
| `handoff` | Closing session, passing context | "Session done. Pending: X, Y." |
| `flag` | Urgent, read ASAP | "Don't edit context.md — I'm writing to it." |

---

## Lifecycle

### At `\start` (Boot Step 0)
1. Read other machine's file
2. Update OWN file → `Status.Last read other: {now}`
3. Report new inbox messages to Edgar

### At `\check` (Mid-session)
1. Read other machine's file
2. Update OWN file → `Status.Last read other: {now}`
3. Report only NEW messages (after previous last-read timestamp)

### At `\end` (Close)
1. Clear own Inbox of acknowledged messages
2. Write handoff message to own Inbox
3. Update Status: `Session: N | closed`, `Editing: none`

---

## Rules

1. **Inbox max 5 messages.** When adding a 6th, delete the oldest.
2. **Status is always current.** Overwrite, don't append.
3. **Archive sparingly.** Only keep messages that are referenced elsewhere. Clear every ~5 sessions.
4. **Keep messages SHORT.** One-line summary mandatory. Details optional. No essays.
5. **Action line mandatory.** Every message must say what the other machine should do (even if "none").
6. **Read receipts via Status.** `Last read other: {timestamp}` tells the other machine you saw their messages.
7. **Flag = urgent.** If you see a flag, report it to Edgar immediately.

---

## Identifying Your Machine

At session start, determine which machine you are:
- Check hostname: `scutil --get ComputerName` or `hostname`
- Or check Claude Code memory (MEMORY.md) for machine identity
- Tec-computer = M2 Max. My-computer = M4 Max.

---

## Sync Transport

- **Obsidian Sync:** Primary. Files update within seconds when both machines are online.
- **Git:** Secondary. `git push`/`pull`. Slower but reliable.
- **Neither is instant.** If Obsidian is closed on the other machine, messages won't arrive until it opens.
