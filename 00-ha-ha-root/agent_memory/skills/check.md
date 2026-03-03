# Skill: check

**Command:** `\check`

**Purpose:** Re-read the other machine's intercom file. Multi-machine coordination.

---

## Protocol

### 1. Identify which machine I am
- **Tec-computer** (M2 Max) → I own `intercom/tec-computer.md`, I read `intercom/my-computer.md`
- **My-computer** (M4 Max) → I own `intercom/my-computer.md`, I read `intercom/tec-computer.md`
- If unsure: check MEMORY.md or run `scutil --get ComputerName`

### 2. Read the protocol
```
Read: 00-ha-ha-root/agent_memory/intercom/protocol.md
```
(Only needed first time per session — skip if already read.)

### 3. Read the other machine's file
```
Read: 00-ha-ha-root/agent_memory/intercom/{other-machine}.md
```

### 4. Check for new messages
- Look at the **Inbox** section
- Compare message timestamps against **your own** `Status.Last read other` timestamp
- New = anything after your last read

### 5. Update your own Status
In your OWN file, update:
```
Last read other: {now}
```

### 6. Report to Edgar

```markdown
## Intercom Check | {time}

**Reading:** {other-machine}.md
**New messages:** {count}

{For each new message:}
- **[type]** {one-line summary} → Action: {action}

**File conflict risk:** {files other is editing, or "Clear"}
```

---

## Rules

- **NEVER edit the other machine's file.** Read only.
- After reading, **acknowledge** in your own Inbox if action items were completed.
- Keep the report to Edgar **short** — he just wants to know what's new.
- If you see a `flag` type message, **alert Edgar immediately**.
