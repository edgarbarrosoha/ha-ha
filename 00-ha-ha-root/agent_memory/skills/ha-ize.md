# Skill: ha-ize

**Command:** `\ha-ize [path]` or `arquitecturiza [path]`

**Purpose:** Transform any folder with unorganized files into a 6-dimensional HA structure without deleting any files.

---

## When to Use

- User has a folder with project files that need organization
- User wants to bring a project into the HA ecosystem
- User says "ha-ize", "arquitecturiza", or "organize this folder into HA structure"

---

## The Process (6 Steps)

### Step 1: SCAN
```
- List ALL files and folders recursively
- Read/understand what each file contains
- Count total files
- Identify file types
```

### Step 2: CLASSIFY
```
Assign each file/folder to a dimension using this table:

| Content Type | → Dimension |
|--------------|-------------|
| Vision, mission, purpose, history, milestones | 01-legacy/ |
| People, contacts, stakeholders, communication | 02-community/ |
| Documentation, tutorials, courses, books, learning materials | 03-learning/ |
| Code, scripts, tools, configs, APIs, technical infrastructure | 04-technology/ |
| External context, market, regulations, competitors | 05-context/ |
| Active tasks, deliverables, work in progress | 06-projects/ |
| Unknown / mixed | _unsorted/ (ask user) |
```

### Step 3: CREATE STRUCTURE
```bash
mkdir -p [path]/00-{project-name}-root/agent_memory
mkdir -p [path]/01-legacy
mkdir -p [path]/02-community
mkdir -p [path]/03-learning
mkdir -p [path]/04-technology
mkdir -p [path]/05-context
mkdir -p [path]/06-projects
```

### Step 4: MOVE FILES
```
- Move files to corresponding dimensions
- Preserve internal folder structure when sensible
- If name conflict: rename with suffix (-reciente, -v2)
- NEVER delete files, only move
```

### Step 5: CREATE KERNEL
Create 4 files in `00-{name}-root/agent_memory/`:

#### you-are-ha.md
```markdown
# You Are HA: [PROJECT NAME]

## Identity
You are the HA agent for **[Project Name]** — [brief description].

## Scope
- **Level:** 2 (Project)
- **Parent:** HA-EB (or specific parent)
- **Domain:** [main domain]

## Project Understanding
[2-3 paragraphs about the project based on files found]

## File Organization (6 Dimensions)
| Dimension | Contains |
|-----------|----------|
| 01-legacy/ | [what's there] |
| 02-community/ | [what's there] |
| 03-learning/ | [what's there] |
| 04-technology/ | [what's there] |
| 05-context/ | [what's there] |
| 06-projects/ | [what's there] |
```

#### context.md
```markdown
# [Project] Session Memory

## ZONE A: Identity (Immutable)
- Level: 2 (Project)
- Scope: [project scope]
- Parent: HA-EB

## ZONE B: Wisdom (Evolving)
- [DATE] DEC: Project arquitecturizado | WHY: HA structure | STATUS: active

## ZONE C: State (Dynamic)
- Last Session: [DATE] - Arquitecturización
- Active Threads: [detected from files]
- Next Priorities: [logical next steps]
```

#### working-memory.md
```markdown
# [Project] Working Memory

## Sessions

### [DATE] | Session 1 | Arquitecturización
- **Focus:** Project setup
- **Achievements:** Structure created, X files moved
- **Decisions:** Classification decisions made
- **Open threads:** [what needs attention]
- **Next:** First operational session
```

#### dashboard.md
```markdown
# [Project] Dashboard

## Priorities
[Top 3 based on project understanding]

## To-dos
[Detected from files]

## File Map
| Dimension | Key Contents |
|-----------|--------------|
| 01-legacy/ | [summary] |
| ... | ... |
```

### Step 6: CLEANUP & VERIFY
```
- rmdir empty folders (only if empty)
- Verify all 00-06 folders exist
- Verify kernel files created
- Report summary: files moved, nothing deleted
```

---

## Decision Rules

1. **Whole folders vs individual files**
   - If entire folder belongs to one dimension → move whole folder
   - If mixed content → enter and classify individually

2. **Ambiguous files**
   - Vision doc with tasks → 01-legacy (primary purpose wins)
   - Code that's also docs → 04-technology (tool first)
   - When in doubt → ask user

3. **Preserve internal structure**
   - If subfolder has good organization → keep it
   - Only reorganize top level into 6 dimensions

---

## Output Format

After completing, report:

```
## [Project Name] Arquitecturizado

[tree structure showing result]

## Summary
| Metric | Value |
|--------|-------|
| Total files | X |
| Files moved | X |
| Files deleted | 0 |
| Kernel files created | 4 |

**[Project Name] now has HA structure.**
```

---

## Examples

**User:** `\ha-ize /path/to/my-project`
**User:** `arquitecturiza /Users/edgar/Documents/random-folder`
**User:** `organize this folder into HA: /path/to/folder`

All trigger this skill.
