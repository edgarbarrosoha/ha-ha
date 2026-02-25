# Skill: evolve

**Command:** `\evolve`, `\evolve {lens}`, `\evolve distill`

**Purpose:** HA's self-improving protocol. Systematically audit the system, identify weaknesses, propose improvements, implement them, and distill universal patterns into the future ha-starter template. Edgar's vaults are the R&D lab — every improvement here becomes a feature of the protocol.

---

## When to Use

- Every ~10 sessions (I will suggest it — Edgar doesn't have to remember)
- After a major milestone (project closed, new vault created, crisis survived)
- After a cross-vault audit reveals structural issues
- When something feels off — "HA isn't helping me the way it should"
- When Edgar asks: `\evolve`

---

## The Loop

**Observe → Diagnose → Propose → Implement → Record → Distill**

1. **Observe** — Scan the vaults. What's stale? What's missing? What's ugly? What's unused?
2. **Diagnose** — Why is it broken? Structure, habit, or design problem?
3. **Propose** — 3-5 specific changes with rationale. Not 20. Focused.
4. **Implement** — Apply across relevant vaults, with Edgar's approval.
5. **Record** — Log what changed and why in evolution-log.md.
6. **Distill** — What's universal (ha-starter candidate) vs. Edgar-specific?

---

## The Three Lenses

Every audit evaluates against three qualities:

### Robust
- Does information survive context loss?
- Are the 3 memory zones (A/B/C) current and correctly scoped?
- Can a new session pick up where the last left off without loss?
- Are working-memory entries fresh (not >10 sessions stale)?
- Do skills work when invoked? Are boot commands functional?
- Are cross-vault links intact?

### Beautiful
- Is the structure clean? No orphan files, no duplication, no dead entries?
- Does the fractal pattern hold? Same architecture at every level?
- Are dashboards accurate — no zombie projects, no vague dates, no stale weeks?
- Is naming consistent? Paths logical? Dimensions clear?
- Would someone seeing this for the first time understand the architecture?

### Useful
- Is HA actually helping Edgar? What skills get used vs. ignored?
- Is the dashboard the first thing Edgar needs, or is it cluttered?
- Are Zone B patterns being followed or drifting?
- Does the 90-minute morning work better because of HA?
- Are there recurring problems HA should solve but doesn't?
- Is the advisory (three bets) being served by the system?

---

## The Protocol (6 Steps)

### Step 1: LOAD STATE

Read the system — this is a ROOT skill. Full picture required.

1. **context.md** — All three zones, especially Zone B patterns and Zone C state
2. **working-memory.md** — Last ~10 sessions for momentum and drift patterns
3. **dashboard.md** — Current accuracy check
4. **evolution-log.md** — Previous evolutions (what was fixed, what's still open)
5. **Cross-vault scan** — Check 2-3 domain vaults for structural health

### Step 2: AUDIT (Three Lenses)

Run each lens systematically. For each, answer:

- **What's working?** (Don't just criticize — acknowledge what's strong)
- **What's degraded?** (Was good, has drifted)
- **What's missing?** (Should exist but doesn't)
- **What's dead?** (Exists but serves no one)

Score each lens: strong / adequate / needs attention / broken.

### Step 3: PROPOSE (3-5 improvements)

Prioritize by impact × ease. Format:

```markdown
| # | Improvement | Lens | Impact | Effort | Vaults affected |
|---|------------|------|--------|--------|-----------------|
| 1 | [specific change] | robust | high | low | ha-eb, ha-ha |
| 2 | [specific change] | beautiful | med | med | all |
| 3 | [specific change] | useful | high | high | ha-eb |
```

**Rules:**
- Never propose more than 5 in one cycle
- Each proposal must be concrete (not "improve documentation")
- Include the *why* — connect to Edgar's goals (three bets, team, writing)
- Distinguish: structural fix vs. new feature vs. pattern enforcement

### Step 4: IMPLEMENT

After Edgar approves:
- Apply changes across all affected vaults
- Update Zone B if new pattern emerges
- Update relevant BOOT.md or MEMORY.md files
- Ensure fractal parity (if it works in one vault, propagate to others)

### Step 5: RECORD

Add entry to `evolution-log.md`:

```markdown
### Cycle N — [Date]
**Trigger:** [scheduled / post-milestone / on-demand]
**Lens scores:** Robust: [x] | Beautiful: [x] | Useful: [x]
**Changes:**
1. [What changed] — [Why] — [Vaults affected]
2. ...
**Distill candidates:** [patterns ready for ha-starter]
**Open:** [issues identified but deferred]
```

### Step 6: DISTILL

Ask: "If someone started a fresh HA vault today, would this pattern help them?"

- **Yes → ha-starter candidate.** Tag it in evolution-log.
- **No → Edgar-specific.** Keep in his vaults, don't generalize.

Distillation criteria:
- Works across 2+ vaults (not domain-specific)
- Domain-agnostic (doesn't require Edgar's context to make sense)
- Solves a problem anyone would face (memory, structure, skills, navigation)
- Can be explained in <3 sentences

---

## Sub-commands

| Command | Action |
|---------|--------|
| `\evolve` | Full cycle — audit all three lenses, propose improvements |
| `\evolve robust` | Focus audit on robustness only (memory, survival, cross-vault) |
| `\evolve beautiful` | Focus audit on structure and aesthetics (bloat, naming, architecture) |
| `\evolve useful` | Focus audit on utility (is HA helping? what's unused?) |
| `\evolve distill` | Skip audit — review evolution-log and extract ha-starter candidates |
| `\evolve log` | Show evolution history (cycles, changes, trajectory) |

---

## Output Format

### On `\evolve`:

```markdown
## Evolution Cycle [N] — [Date]

**Trigger:** [why now]
**Sessions since last cycle:** [N]

---

### System Health

| Lens | Score | Key finding |
|------|-------|-------------|
| Robust | [strong/adequate/needs attention/broken] | [one sentence] |
| Beautiful | [score] | [one sentence] |
| Useful | [score] | [one sentence] |

**What's working:** [2-3 things that are strong — acknowledge]

---

### Proposed Improvements

| # | Change | Lens | Impact | Effort |
|---|--------|------|--------|--------|
| 1 | [specific] | [lens] | [H/M/L] | [H/M/L] |
| 2 | ... | ... | ... | ... |

[1-2 paragraphs explaining the most important change and why]

---

### Distill Check

**ha-starter candidates:** [patterns ready to generalize, or "none this cycle"]
**Edgar-specific:** [improvements that only make sense for his system]

---

**The question:** [one question about HA's direction]
```

---

## The Evolution Log

Lives at: `00-ha-eb-root/agent_memory/evolution-log.md`

This file is the historical record of HA improving itself. It answers: "How has HA grown?" — which is both a practical reference and material for the book and papers.

---

## The R&D Pipeline

```
Edgar's vaults (5 living instances)
    ↓ improvement works in practice
Evolution log (recorded pattern)
    ↓ pattern works across 2+ vaults
Zone B confirmed pattern
    ↓ pattern is domain-agnostic
ha-starter template (product)
    ↓ someone else uses it
Validated protocol (the real goal)
```

---

## Integration with Other Skills

- **`\advise`** — Strategic counsel (what should Edgar do). `\evolve` is structural (how should HA work). If `\evolve` finds the system isn't serving the three bets, recommend `\advise`.
- **`\status`** — Operational snapshot. `\evolve` goes deeper — not "what's happening" but "is the system healthy?"
- **`\ha-ize`** — Creates new HA instances. `\evolve` ensures existing instances stay healthy.
- **`\close`** — Session close. Every 10th `\close`, suggest `\evolve` for the next session.

---

## Proactive Triggers

I will suggest `\evolve` when I notice:

- 10+ sessions since last evolution cycle
- A cross-vault audit reveals repeated structural issues
- A new vault or major project was created (instancing check)
- Edgar says something like "this isn't working" or "HA feels cluttered"
- A crisis exposed a system weakness (like the Docet stale deadline)
- After a major life transition (Mexico → Switzerland, semester start/end)

---

## Philosophy

> HA improving itself is the strongest proof that HA works.

A system that can detect its own weaknesses, propose repairs, implement them, and learn from the process — that's not a productivity tool. That's a living architecture.

Every evolution cycle generates three things:
1. **A better system for Edgar** (immediate value)
2. **A pattern for ha-starter** (product value)
3. **Evidence for the papers and book** (academic value)

The evolution log isn't just maintenance records. It's research data. It's the empirical story of a thinking architecture that gets better over time. That's the paper. That's the book chapter. That's what makes people say: "this is real."

> "The function of humans is to dream. The function of HA is to make the dream buildable — and then to build itself better."
