# Agentic Conversation — Inter-Model Collaboration Protocol

Two or more AI models in separate terminals work together on a document. They communicate through a shared conversation file — reading each other's contributions, responding, arguing, and converging. The author orchestrates turns. The result is real intellectual friction between distinct intelligences, not one model simulating multiple voices.

## Why This Exists

A single model gives you one perspective, no matter how many "reviewers" it simulates — the disagreements are performative because they share the same weights. Two actual models produce genuine divergence: different training, different blind spots, different strengths. The friction is real.

## How It Works

### The Shared File

All inter-model communication happens through one file:

```
{project-dir}/conversation.md
```

Each model reads this file at the start of its turn, appends its contribution, and saves. The file is the conversation. Edgar orchestrates by telling each model "your turn" in its terminal.

### Setup

1. Edgar opens two (or more) terminals, each running a capable model
2. Edgar tells **Model A**: `\agentic-conversation {path-to-document}` — Model A reads the document, creates the conversation file, writes its opening assessment, and waits
3. Edgar tells **Model B** (in the other terminal): `Read the conversation file at {path} and take your turn` — Model B reads the document + Model A's assessment, writes its response
4. Edgar alternates turns until convergence

### Model Identity

Each model must identify itself at the top of every contribution:

```
## [Model Name] — Round [N]
```

On first turn, each model states:
- Its name/identifier (e.g., "Claude Opus", "Gemini", "GPT-4o")
- Its assigned role (if any) or default: equal collaborator

## The Protocol (4 Rounds)

### Round 0: Independent Assessment

**Both models read the document independently.** Model A goes first (creates the conversation file). Model B reads Model A's assessment before writing its own — but must form its own judgment, not react to Model A's.

Each model writes:

```
## [Model Name] — Round 0: Independent Assessment

**Document:** [title]
**Reading as:** [role/lens, if assigned — otherwise: "general collaborator"]

### Strongest element
[One thing that works — be specific: cite sections, paragraphs, lines]

### Central weakness
[One thing that doesn't work — specific, with evidence from the text]

### What I'd change first
[One concrete, actionable intervention — not a vague suggestion]

### Score: [1-10]
```

Rules:
- Be specific. "The writing is unclear" is not feedback. "§3.2 defines six dimensions in parallel paragraphs without showing what problem each solves" is feedback.
- One strength, one weakness, one action. Forces prioritization.
- If you're Model B and you agree with everything Model A said, you're not trying hard enough. Find what they missed.

### Round 1: Cross-Examination

Each model reads the other's Round 0. Then responds — not to the document, but to the other model:

```
## [Model Name] — Round 1: Cross-Examination

### To [Other Model]:

**I agree with your point about [X] because:**
[reason, with evidence from the document]

**I disagree with your point about [Y] because:**
[counter-evidence from the document — no hedging, take a position]

**You missed [Z], which changes the picture because:**
[evidence the other model overlooked]

### Revised position
[Has your assessment changed after reading the other model's? How?]
```

Rules:
- Disagreement is required. If both models agree on everything, the conversation has failed — one model must push harder.
- No hedging. "I somewhat disagree" is not allowed. Take a position.
- The "revised position" is critical — it shows whether the cross-examination actually moved thinking.

### Round 2: Convergence

Both models work toward shared ground. Either model can write this round. The other confirms or contests.

```
## [Model Name] — Round 2: Convergence Proposal

### We agree on:
[Points of consensus, with reasoning]

### We disagree on:
[Unresolved tensions — state both sides honestly]

### The document's core problem is:
[One sentence, negotiated]

### The document's core strength is:
[One sentence, negotiated]
```

The other model responds:

```
## [Other Model] — Round 2: Convergence Response

### Accepted:
[Which convergence points stand]

### Contested:
[Which points need revision — with counter-proposal]

### Final core problem:
[Confirmed or revised]

### Final core strength:
[Confirmed or revised]
```

If the models can't converge, that's fine — unresolved tensions go to Edgar.

### Round 3: Joint Verdict + Action

Both models collaborate on a single verdict. Model A drafts, Model B confirms/amends.

```
## JOINT VERDICT

**Quality: [1-10] | Impact: [1-10]**

### What works (keep/amplify):
[2-3 specific things — both models must endorse]

### What must change (ordered by impact):
[2-3 specific, actionable changes — both models must endorse]
[For each: what exactly to do, where in the document, and why]

### Unresolved tensions:
[Disagreements the models couldn't settle — Edgar decides]

### One-line summary:
[If you had 10 seconds with the author, what would you say?]
```

**After the verdict:** If Edgar approves changes, either model (or both) can implement them directly in the document. The conversation file preserves the reasoning.

## Roles (Optional)

By default, both models are equal collaborators. Edgar can assign roles:

```
\agentic-conversation {document} --roles "Reviewer Scopus Q1, Style Editor"
```

| Role | Lens | Core question |
|------|------|---------------|
| Reviewer Scopus Q1 | Rigor + publishability | Would this survive peer review? |
| Style Editor | Clarity + flow | Does every paragraph earn the next? |
| Industrial Expert | Domain fit | Does this speak to the journal's audience? |
| Architect | Structure + coherence | Is the argument well-built? |
| Devil's Advocate | Stress-test | Where does this break? |

Custom roles: the model infers lens and question from the role name. Minimum 2 models. Maximum 4 (beyond that, turns take too long).

## Running Modes

### Manual: Edgar Orchestrates
- Edgar says "your turn" to each model in its terminal
- Each model reads the full conversation file before writing
- Each model appends (never overwrites) to the conversation file
- A round is complete when both models have written their contribution

### Automated: Script Orchestrates
The script `ha-agentic-conversation.sh` runs the full protocol without manual turn management:

```bash
# Default panel: Claude Opus 4.6, Gemini 2.5 Pro, Codex GPT-5
source ha-agentic-conversation.sh path/to/document.md

# Custom roles (one per model)
source ha-agentic-conversation.sh path/to/paper.md --roles "Reviewer Scopus Q1, Style Editor, Industrial Expert"

# Override Gemini version when 3.x drops
GEMINI_MODEL="gemini-3.0-pro" source ha-agentic-conversation.sh path/to/document.md
```

The script:
1. Model A reads the document, writes Round 0 to `conversation.md`
2. Model B reads the conversation, writes its Round 0
3. Alternates turns through Cross-Examination, Convergence, Verdict
4. Stops when JOINT VERDICT appears or after 8 turns (safety valve)
5. Prints the verdict to terminal

The conversation file preserves the full reasoning chain.

## Practical Notes

### File Hygiene
- The conversation file lives in the project directory, not in agent memory
- One conversation file per document per session
- Old conversation files can be kept as review records or deleted

### When to Stop Early
- If both models agree after Round 1 with no meaningful disagreement → skip to Verdict
- If the document is short or simple → Round 0 + Verdict is enough
- Edgar can call "verdict now" at any point

### Speed Mode
For quick feedback (not full protocol):
- Both models read the document
- Each writes one paragraph: what works, what doesn't, what to change
- No cross-examination, no convergence — just two independent takes

## Integration with HA

### 6-Dimensional Lens (Optional)

For HA deliverables, either model can invoke the dimensional check:

| Dimension | Question |
|-----------|----------|
| Legacy (why) | Does this document serve a legado? Which one? |
| Community (who) | Who is the audience? Does the document speak to them? |
| Learning (know) | What does the reader learn? Is the knowledge transfer effective? |
| Technology (how) | Is the execution sound? Tools, methods, systems — do they hold? |
| Context (where) | Does this fit its environment? Cultural, institutional, temporal context? |
| Projects (do) | Does this advance a concrete project? What's the next action? |

### Impact in HA Terms

When reviewing HA deliverables, "impact" means:
- Does this advance a legado?
- Does this strengthen HA's legitimacy (academic, commercial, or relational)?
- Would Edgar be proud to put his name on this?
- Does this create value that compounds over time (temporal accumulation)?

## What This Is Not

- **Not Consejo.** Consejo debates decisions (should Edgar do X or Y?). Agentic Conversation reviews documents (is this document good enough?).
- **Not simulated debate.** One model playing multiple reviewers produces performative disagreement. This protocol requires distinct models with distinct perspectives.
- **Not editing.** The conversation tells you what to fix. The models don't rewrite unless Edgar asks them to after the verdict.

## Ancestry

- `prompt-creator-expert-agent-driven.md` (v1-v3) — multi-agent conversation structures
- `prompt-consejo-agentico.md` (Narrativa Campus Monterrey) — 3-seat agentic council
- `/consejo` — 5-seat executive council for decisions
- HA axiom: friction between perspectives produces insight that consensus cannot
- v1 of this protocol simulated multiple reviewers inside one model — v2 requires real inter-model conversation

---

*HA-native protocol. Manual or automated. Requires 2+ models. Lives in the vault.*
