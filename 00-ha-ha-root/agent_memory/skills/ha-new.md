# Skill: ha-new

**Command:** `\ha-new`

**Purpose:** Create a new HA project from a verbal description. Takes a name, a vision, and whatever context Edgar provides, and generates a complete 6-dimension HA structure — populated, not empty.

---

## When to Use

- When Edgar describes a new project, course, initiative, or venture
- When starting something from scratch (not reorganizing existing files)
- When Edgar says "quiero hacer X" and X doesn't exist yet in any vault

**Not this skill:**
- `\ha-ize` → Reorganize EXISTING files into HA structure
- `\agent-activate` → Add agent infrastructure to an existing HA folder

---

## The Protocol (5 Steps)

### Step 1: LISTEN

Parse Edgar's description for:

| Element | Question | Required? |
|---------|----------|-----------|
| **Name** | What is it called? | Yes |
| **Legacy** | What's the lasting impact? What does Edgar want this to become? | Yes |
| **Domain** | Which vault? (ha-eb, ha-ha, ha-tec, ha-research, ha-al) | Yes |
| **Type** | Course, project, business, research, event? | Yes |
| **People** | Who's involved? Students, clients, collaborators? | If mentioned |
| **Constraints** | Deadlines, budget, institutional requirements? | If mentioned |
| **Inspiration** | References, models, aspirations? | If mentioned |

If something critical is missing (name, legacy, domain), ask before proceeding.

### Step 2: STRUCTURE

Create the 6-dimension folder tree **with agent memory** (every HA is an instance):

```
{project-name}/
├── 00-ha-root/
│   ├── legacy.md                    ← The "why" — vision, purpose, aspiration
│   └── agent_memory/
│       ├── you-are-ha.md            ← Identity: level, scope, role, parent, creator
│       ├── context.md               ← Zones A/B/C: identity, wisdom, state
│       ├── working-memory.md        ← Last ~20 sessions
│       └── BOOT.md                  ← Session protocol for this project HA
├── 01-legacy/
│   └── 01-legacy-{name}.md
├── 02-community/
│   └── 02-community-{name}.md
├── 03-learning/
│   └── 03-learning-{name}.md
├── 04-technology/
│   └── 04-technology-{name}.md
├── 05-context/
│   └── 05-context-{name}.md
├── 06-projects/
│   └── dashboard.md
└── project-state.md                 ← Ready for \prepare / \advance / \write
```

**Critical:** The agent_memory makes this a real HA instance, not just a folder. It can boot, remember, and evolve.

### Step 2.5: DEEP INFERENCE (The HA Difference)

**This is what makes \ha-new different from a template generator.** Before writing a single file, mine the full context:

#### A. Cross-Vault Scan
Search ALL vaults for related content. A new course in ha-tec might connect to:
- Research papers in ha-research (theoretical foundation)
- Business projects in ha-ha (real-world cases)
- Personal context in ha-eb (Edgar's background, people, patterns)
- Existing courses in ha-tec (pedagogical patterns, reusable materials)

**Read, don't guess.** If a related project exists, open it. Extract what's transferable.

#### B. Internal Expertise
Edgar is a composer (PhD Harvard), systems thinker (HA creator), ethics professor, company founder, government consultant. Every new project connects to his full trajectory. Make those connections explicit — they're the unique angle no one else has.

#### C. Literature & Research
For academic projects: search for foundational literature. Not a placeholder list — real authors, real works, real arguments. Identify:
- The seminal works (what MUST be in any serious treatment)
- The surprising connections (what others wouldn't include but Edgar would)
- The gaps (what hasn't been written yet — that's Edgar's contribution)

For business projects: search for comparable cases, market data, competitive landscape.

#### D. Pattern Transfer
Look at existing successful projects in the same vault. How are they structured? What worked? A new course should learn from the existing Ética course. A new business project should inherit patterns from SIC-Q or Docet.

**Output of Step 2.5:** A mental model of the project that's richer than what Edgar described, because it incorporates everything the system knows.

---

### Step 3: POPULATE

**Generate content that surprises Edgar with its depth.** He should read the files and think "I didn't say that, but it's exactly right."

**`legacy.md`** — The most important file. Write Edgar's vision in his voice. This is the "why" that anchors everything. Include:
- The aspiration (what this becomes at its best)
- The gap it fills (why this doesn't exist yet, or why existing approaches fail)
- The unique angle (what Edgar brings that no one else can)
- **Connections Edgar didn't mention** but that the system inferred from cross-vault context

**`02-community`** — Who matters? Not generic stakeholders — specific people from Edgar's network (cross-reference 02-community across vaults). Who should be involved that Edgar hasn't thought of yet?

**`03-learning`** — Real literature, real frameworks, real expertise map. Include:
- **Foundational references** with specific works and why they matter
- **What Edgar already has** in other vaults that transfers here
- **What's missing** and how to acquire it
- **Surprising interdisciplinary connections** (this is HA's superpower)

**`05-context`** — Research the actual landscape. Comparable projects, institutional constraints, competitive positioning. Not placeholder text.

**`dashboard.md`** — First deliverables. What needs to happen first? Structure as to-dos with HA syntax.

**`project-state.md`** — Ready for the appropriate daily protocol:
- In ha-tec → compatible with `\prepare`
- In ha-ha → compatible with `\advance`
- In ha-research → compatible with `\write`

**The test:** If the populated files could have been generated by any AI with just the project name, the inference was too shallow. If they could ONLY have been generated by a system that knows Edgar's full context — that's HA.

### Step 4: PRESENT

Show Edgar the complete structure:

```
-- **HA Created: {Name}**
**Location:** {path}
**Legacy:** {one-line vision}
**Files:** {count} files across 6 dimensions
**Ready for:** \prepare / \advance / \write

Structure:
├── 00-ha-root/legacy.md ← {summary}
├── 02-community/ ← {summary}
├── 03-learning/ ← {summary}
├── 05-context/ ← {summary}
├── 06-projects/dashboard.md ← {first deliverables}
└── project-state.md ← {current front}
```

### Step 5: ITERATE

Edgar reviews. He may:
- Approve (`ok`, `va`) → Done
- Add context → Incorporate, update files
- Change direction → Restructure
- Ask for more depth in a dimension → Expand that file

---

## Principles

1. **Legacy first.** The vision file is the seed. Everything grows from it.
2. **Populated, not empty.** Every file has real content, not "TBD." First drafts are better than blanks.
3. **Voice matters.** Legacy.md should sound like Edgar at his most aspirational. Dashboard should be practical.
4. **Domain-aware.** A course HA (ha-tec) has different needs than a business project (ha-ha) or a paper (ha-research).
5. **Ready to work.** After `\ha-new`, Edgar should be able to immediately run `\prepare`, `\advance`, or `\write` on the project.

---

## Text Mode (No File Access)

1. Parse description
2. Generate all files as markdown code blocks
3. Tell Edgar where to save each file

---

## Examples

```
\ha-new
"Quiero hacer una clase sobre criterio en la era de la IA.
 Escuela de Gobierno. Quiero que sea el equivalente de Justice de Harvard."
→ Creates full HA in ha-tec/06-projects/criterio/
→ Ready for \prepare criterio
```

```
\ha-new
"Nuevo proyecto con Banco Interamericano de Desarrollo.
 Workshop de pensamiento sistémico para policy makers."
→ Creates full HA in ha-ha/06-projects/bid-workshop/
→ Ready for \advance bid
```
