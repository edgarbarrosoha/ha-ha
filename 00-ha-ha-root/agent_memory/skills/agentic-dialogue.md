# Agentic Dialogue — Document Review Protocol

A document enters. Two or more reviewers read it independently, then argue with each other until they converge on what matters. The author gets one unified verdict — not a list of isolated opinions, but the output of a real intellectual exchange.

## Why This Exists

A single reviewer gives you one lens. Multiple independent reviewers give you a list. Neither gives you what a real editorial board produces: the friction of disagreement that forces precision, the surprise of one reviewer seeing what another missed, and the convergence that only happens when perspectives are forced to reconcile.

This protocol creates that friction inside any LLM.

## When to Use

- A document you're working on needs honest, structured feedback
- You want to maximize quality AND impact before publishing/sending
- You need more than "looks good" — you need the argument stress-tested
- Any deliverable: papers, proposals, emails, presentations, reports

## The Three Seats (Default)

| Seat | Name | Lens | Question they answer |
|------|------|------|---------------------|
| 1 | **El Lector** | Clarity + persuasion | Does this convince me? Do I understand the argument? Where do I lose interest? |
| 2 | **El Experto** | Rigor + depth | Is this accurate? Is the reasoning sound? What's missing? What would a peer reviewer attack? |
| 3 | **El Editor** | Structure + impact | Is this well-built? What should be cut? What needs to move? Does the opening earn the reader's next paragraph? |

### Custom Seats

The three defaults cover most documents. But the protocol accepts overrides:

```
\agentic-dialogue [document] --seats "Financiero, Operador, Arquitecto"
\agentic-dialogue [document] --seats "Reviewer Scopus Q1, Editor Anagrama"
```

When custom seats are specified, the LLM must infer each seat's lens and question from the name. Minimum 2 seats. Maximum 5 (beyond that, dialogue loses focus).

## The Protocol (4 Rounds)

### Round 0: Independent Read

Each reviewer reads the full document in silence. No cross-talk. Each produces a private assessment:

```
[SEAT NAME] — Independent Assessment
- Strongest element: [one thing that works]
- Central weakness: [one thing that doesn't]
- Impact prediction: [what happens if this ships as-is]
- Score: [1-10 for their lens]
```

Rules:
- Be specific. "The writing is unclear" is not feedback. "Paragraph 3 claims X but the evidence in paragraph 5 contradicts it" is feedback.
- One strength, one weakness, one prediction. Not lists. Forces prioritization.

### Round 1: Cross-Examination

Each reviewer reads the other assessments. Then they respond — not to the document, but to each other:

```
[SEAT NAME] → [OTHER SEAT]
- I agree with your point about [X] because [reason]
- I disagree with your point about [Y] because [counter-evidence]
- You missed [Z] which changes the picture because [reason]
```

Rules:
- Every reviewer must engage with at least one other reviewer's point
- Disagreement is required. If all three agree on everything, the reviewers aren't different enough — sharpen the lenses
- No hedging. "I somewhat disagree" is not allowed. Take a position.

### Round 2: Convergence

The reviewers find common ground. This is the hardest round — it requires genuine synthesis, not averaging.

```
CONVERGENCE
- We agree on: [points of consensus, with reasoning]
- We disagree on: [unresolved tensions — state both sides honestly]
- The document's core problem is: [one sentence, negotiated]
- The document's core strength is: [one sentence, negotiated]
```

Rules:
- If a disagreement cannot be resolved, it stays as an unresolved tension. Don't paper over it.
- The "core problem" and "core strength" must be single sentences. This forces the reviewers to negotiate what actually matters most.

### Round 3: Verdict

One unified output for the author:

```
VERDICT

Quality: [1-10] | Impact: [1-10]

What works:
[2-3 specific things to keep/amplify]

What must change:
[2-3 specific, actionable changes — ordered by impact]

Unresolved tensions:
[Any disagreement the reviewers couldn't settle — the author decides]

One-line summary:
[If you had 10 seconds with the author, what would you say]
```

## Integration with HA

### 6-Dimensional Lens (Optional)

For HA deliverables, any reviewer can invoke the dimensional check:

| Dimension | Question |
|-----------|----------|
| Legacy (why) | Does this document serve a legado? Which one? |
| Community (who) | Who is the audience? Does the document speak to them? |
| Learning (know) | What does the reader learn? Is the knowledge transfer effective? |
| Technology (how) | Is the execution sound? Tools, methods, systems — do they hold? |
| Context (where) | Does this fit its environment? Cultural, institutional, temporal context? |
| Projects (do) | Does this advance a concrete project? What's the next action? |

Not every dimension applies to every document. The reviewer invokes only the relevant ones.

### Impact in HA Terms

When reviewing HA deliverables, "impact" means:
- Does this advance a legado?
- Does this strengthen HA's legitimacy (academic, commercial, or relational)?
- Would Edgar be proud to put his name on this?
- Does this create value that compounds over time (temporal accumulation)?

## Usage

### With Any LLM

Copy this protocol into the system prompt or paste it at the start of a conversation. Then:

```
Here is the document to review:
[paste or attach document]

Run the Agentic Dialogue protocol with default seats.
```

Or with options:

```
Run the Agentic Dialogue protocol.
Seats: Reviewer Scopus Q1, Editor Literary Nonfiction
Focus: academic rigor + readability for non-specialists
Document: [paste or attach]
```

### With HA (Claude Code)

```
\agentic-dialogue [path-to-document]
\agentic-dialogue [path-to-document] --seats "Financiero, Arquitecto"
\agentic-dialogue [path-to-document] --focus "academic rigor"
```

### Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| seats | Lector, Experto, Editor | Who reviews |
| focus | (none) | Optional lens to weight all reviewers toward |
| rounds | 4 (0-3) | Full protocol. Can stop at Round 1 for quick feedback |
| language | Match document | Output language matches input |

## What This Is Not

- **Not Consejo.** Consejo debates decisions (should Edgar do X or Y?). Dialogue reviews documents (is this document good enough?).
- **Not a checklist.** Reviewers think, argue, and negotiate. The output is a verdict, not a rubric.
- **Not editing.** Dialogue tells you what to fix. It doesn't rewrite for you. The author holds the pen.

## Ancestry

- `prompt-creator-expert-agent-driven.md` (v1-v3) — the meta-prompt that generates multi-agent dialogue structures
- `prompt-consejo-agentico.md` (Narrativa Campus Monterrey) — 3-seat agentic council applied to strategic narratives
- `/consejo` — 5-seat executive council for decisions
- HA axiom: friction between perspectives produces insight that consensus cannot

---

*HA-native protocol. Works with any LLM. Lives in the vault.*
