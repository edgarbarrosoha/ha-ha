# HA Syntax v0.1
## A Markdown Extension for Agentic Workflows

HA Syntax extends standard Markdown to enable human-AI collaboration within Obsidian. It provides a simple, memorable syntax for delegating tasks to AI agents while maintaining human control.

---

## Task States (Checkbox Variants)

| Syntax  | State           | Description                     | Action Required                       |
| :------ | :-------------- | :------------------------------ | :------------------------------------ |
| `- [ ]` | **Human To-Do** | Standard task for Edgar.        | User executes.                        |
| `- [>]` | **Agent To-Do** | Task delegated to the AI Agent. | **Agent executes automatically.**     |
| `- [<]` | **Waiting For** | Pending external response.      | Agent checks status during `\status`. |
| `- [?]` | **Decision**    | Agent needs human input.        | User must resolve before proceeding.  |
| `- [!]` | **Urgent**      | High priority item.             | Agent flags this first in summaries.  |
| `- [x]` | **Done**        | Completed task.                 | None.                                 |

---

## Action Verbs (`@verb`)

Use these keywords to trigger specific agent behaviors.

### Communication
- **`@draft`**: Write a text/email but do not send.
- **`@send`**: (Requires confirmation) Send message via available bridge.
- **`@email`**: Alias for `@draft email`.
- **`@whatsapp`**: Draft a WhatsApp message.

### Information
- **`@summarize`**: Process a file or link and extract key points.
- **`@research`**: Search the web or vault for information.
- **`@read`**: Ingest a file context.

### Management
- **`@schedule`**: Propose a calendar event.
- **`@update`**: Modify a specific section of a file (e.g., `dashboard.md`).
- **`@create`**: Generate a new file.

---

## Targeting (`#tag` and `@link`)

- **People**: Use `#name` (e.g., `#oscar`, `#ricardo`, `#toño`). The agent looks up context in `context.md`.
- **Files**: Use wiki-links `[[File Name]]` or paths `@path/to/file`.
- **Projects**: Use `#project-tag` (e.g., `#docet`, `#sic-q`).

---

## Examples

**1. Delegating an Email:**
```markdown
- [>] @draft email to #oscar regarding [[UPU Project]] updates. Ask for the financial report.
```

**2. summarizing a Document:**
```markdown
- [>] @summarize @06-projects/eb/docet/finanzas/program-k9.md and extract the "Unit Economics" section.
```

**3. Scheduling:**
```markdown
- [>] @schedule meeting with #mariana for "Next Tuesday at 10am" regarding Casa Antena.
```

**4. Waiting for Reply:**
```markdown
- [<] #xignux regarding the proposal sent on 2026-01-20.
```

---

## Agent Protocol
When the agent sees `[>]`:
1. It parses the line.
2. It executes the tool or generates the text.
3. It appends the result to the `## Agent Outputs` section of the dashboard or the specific file.
4. It marks the task as `[x]`.