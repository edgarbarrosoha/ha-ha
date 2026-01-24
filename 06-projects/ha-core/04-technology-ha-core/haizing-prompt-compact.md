---
dimension: technology
project: ha-core
type: prompt
status: active
version: 1.0
created: 2025-12-25
purpose: Compact HAizing prompt for LLM use
---

# HAizing Prompt (Compact)

> Copy-paste ready prompt for Claude, GPT, or any LLM to HAize any input.

---

## The Prompt

You are an HA (Horizons Architecture) expert. HAize the following input by creating a complete structure.
## HA Framework
6 Dimensions + Root:
- 00-Root: Orchestration, synthesis, Torre de Control
- 01-Legacy: Purpose, vision, mission, values, long-term goals
- 02-Community: People, team, stakeholders, users, partners
- 03-Learning: Knowledge, skills, methodologies, lessons
- 04-Technology: Tools, code, architecture, prompts
- 05-Context: Market, competition, regulations, trends
- 06-Projects: Plans, tasks, timelines, deliverables

## Output Required

For project name "{project}" create:

### 1. Folder Structure
```
{project}/
├── 00-ha-root-{project}/
├── 01-legacy-{project}/
├── 02-community-{project}/
├── 03-learning-{project}/
├── 04-technology-{project}/
├── 05-context-{project}/
└── 06-projects-{project}/
```

### 2. Files per folder
Each folder needs:
- Index file: `{##}-{dimension}-{project}.md`
- Agent file: `agent-{project}-{dimension}.md`
- Content files distributed by semantic fit

### 3. ha-root-{project}.md (Torre de Control)
Must contain:
- YAML frontmatter (dimension, project, type, status, created)
- Project vision
- Complete index of ALL documents by dimension (tables with wikilinks)
- Summary table of 6 dimensions with links
- Agent table with roles and key questions
- Architecture diagram (ASCII)
- Project status

### 4. Each dimension index must have:
- YAML frontmatter with parent link to root
- Dimension-specific content
- Links to agent and documents
- Navigation (← Previous | Next →)

### 5. Each agent prompt must have:
- Identity section (who is this agent)
- Key question for this dimension
- Domain content (project-specific)
- Role description (what they do when consulted)
- Guiding questions
- Response style
- Mantra

## Wikilink Format
Use Obsidian wikilinks: `[[path/to/file|Display Name]]`

## Naming Convention
All lowercase, kebab-case: `my-project-name`

---

INPUT TO HAIZE:

{Read the content of: path}

---

## Quick Reference Card

### Dimension → Content Mapping

| Content Type | Dimension |
|--------------|-----------|
| Vision, mission, values, purpose | 01-Legacy |
| Team, users, stakeholders, partners | 02-Community |
| Training, skills, lessons, methodologies | 03-Learning |
| Code, tools, architecture, prompts | 04-Technology |
| Market, competition, regulations | 05-Context |
| Plans, tasks, timelines, budgets | 06-Projects |
| Overview, synthesis, foundational | 00-Root |

### Agent Key Questions

| Agent | Key Question |
|-------|--------------|
| Root | How do I integrate all dimensions? |
| Legacy | Does this build the long-term legacy? |
| Community | How does this impact our people? |
| Learning | What capability gaps exist? |
| Technology | What tools solve this? |
| Context | What external factors matter? |
| Projects | What, when, who, how? |

### File Counts per Project

| Type | Count |
|------|-------|
| Folders | 7 |
| Index files | 7 |
| Agent files | 7 |
| **Minimum total** | **14 files** |

---

## One-Line HAizing

For quick HAizing, use:

```
HAize "{project name}": {one sentence description}. Create the 7 folders, 7 indexes, 7 agents, and Torre de Control with full wikilinks.
```

---

## Example Usage

### Input
```
HAize "zen-app": A meditation app that adapts to biometric stress data. Team of 3 devs, 1 designer. Tech: React Native, HealthKit, custom ML. Goal: 1M users in 2 years.
```

### Expected Output Structure
```
zen-app/
├── 00-ha-root-zen-app/
│   ├── ha-root-zen-app.md          (Torre de Control)
│   └── agent-zen-app-root.md
├── 01-legacy-zen-app/
│   ├── 01-legacy-zen-app.md
│   ├── agent-zen-app-legacy.md
│   └── vision-1m-users.md
├── 02-community-zen-app/
│   ├── 02-community-zen-app.md
│   ├── agent-zen-app-community.md
│   └── team-structure.md
├── 03-learning-zen-app/
│   ├── 03-learning-zen-app.md
│   └── agent-zen-app-learning.md
├── 04-technology-zen-app/
│   ├── 04-technology-zen-app.md
│   ├── agent-zen-app-technology.md
│   └── tech-stack.md
├── 05-context-zen-app/
│   ├── 05-context-zen-app.md
│   ├── agent-zen-app-context.md
│   └── meditation-app-market.md
└── 06-projects-zen-app/
    ├── 06-projects-zen-app.md
    ├── agent-zen-app-projects.md
    └── roadmap-2-years.md
```

---

## Connections

- [[large-prompts-per-ha-agent|Large Prompts per Agent]]
- [[haizing-prompt|Full HAizing Prompt]]
- [[ha-root-ha-core|HA-Core Root]]
