---
dimension: legacy
project: ha-product
type: design
status: draft
created: 2025-12-25
purpose: The minimal viable experience that delivers HA value in 5 minutes
---

# The 5-Minute HA Experience

> No framework. No explanation. Just value.

---

## Design Principle

**The user never needs to know about HA to experience HA.**

The 6 dimensions are the engine. The user experiences the ride.

---

## The Experience: "Clarity in 5 Minutes"

### What the user sees

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│    What's on your mind?                                     │
│                                                             │
│    ┌─────────────────────────────────────────────────────┐  │
│    │                                                     │  │
│    │  I want to start a business but I'm overwhelmed...  │  │
│    │                                                     │  │
│    └─────────────────────────────────────────────────────┘  │
│                                                             │
│                                        [Let's explore →]    │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### What happens next (5 questions, ~1 minute each)

The AI asks ONE question from each dimension — but never names them.

---

## The 5 Questions

### Question 1: Legacy (disguised)
```
"If this works exactly as you hope, what changes in your life
 or in the world? What would make you proud looking back?"
```
*Extracts: purpose, vision, success criteria, values*

---

### Question 2: Community (disguised)
```
"Who else is involved in this? Who benefits, who helps,
 who might resist? Who do you wish was involved?"
```
*Extracts: stakeholders, support network, relationships, gaps*

---

### Question 3: Context (disguised)
```
"What's happening around you that makes this matter now?
 What external forces are pushing or pulling?"
```
*Extracts: timing, market, constraints, opportunities, urgency*

---

### Question 4: Learning (disguised)
```
"What do you already know how to do? What would you need
 to learn or figure out to make this work?"
```
*Extracts: capabilities, knowledge gaps, resources, growth areas*

---

### Question 5: Projects (disguised)
```
"If you could only do ONE thing this week to move forward,
 what would it be? What's actually blocking you?"
```
*Extracts: next actions, blockers, priorities, reality check*

---

## The Output: The Clarity Map

After 5 questions (~5 minutes), the user gets:

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Your Clarity Map                                           │
│  ─────────────────                                          │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐    │
│  │                     PURPOSE                         │    │
│  │  "Build a business that lets me work from anywhere  │    │
│  │   while solving real problems for small teams"      │    │
│  └─────────────────────────────────────────────────────┘    │
│                          │                                  │
│         ┌────────────────┼────────────────┐                 │
│         ▼                ▼                ▼                 │
│  ┌───────────┐    ┌───────────┐    ┌───────────┐           │
│  │  PEOPLE   │    │  CONTEXT  │    │  SKILLS   │           │
│  │           │    │           │    │           │           │
│  │ • Partner │    │ • Remote  │    │ • Product │           │
│  │ • 2 leads │    │   work ↑  │    │ • Sales ? │           │
│  │ • Mentor? │    │ • AI wave │    │ • Tech ✓  │           │
│  └───────────┘    └───────────┘    └───────────┘           │
│                          │                                  │
│                          ▼                                  │
│              ┌─────────────────────┐                        │
│              │    NEXT ACTION      │                        │
│              │                     │                        │
│              │  "Talk to 3 small   │                        │
│              │   team leads about  │                        │
│              │   their problems"   │                        │
│              │                     │                        │
│              │  Blocker: "I don't  │                        │
│              │  know who to ask"   │                        │
│              └─────────────────────┘                        │
│                                                             │
│  ────────────────────────────────────────────────────────── │
│                                                             │
│  💡 Insight: You have the skills but need the network.      │
│     Your first move isn't building — it's connecting.       │
│                                                             │
│  [Save this] [Go deeper] [Start fresh]                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## What Just Happened (Behind the Scenes)

| User experienced | HA dimension activated |
|------------------|----------------------|
| "What would make you proud?" | Legacy — Purpose extraction |
| "Who's involved?" | Community — Stakeholder mapping |
| "What's happening around you?" | Context — Environmental scan |
| "What do you know/need to learn?" | Learning — Capability assessment |
| "One thing this week?" | Projects — Action crystallization |
| The Clarity Map | Root — Synthesis and integration |

**The user never learned about HA. They just felt understood and organized.**

---

## The Hook: The Insight

The magic is in the final insight — a synthesis that connects the dimensions:

| Pattern detected | Insight generated |
|-----------------|-------------------|
| Strong purpose + weak network | "You know what you want but need allies" |
| Many stakeholders + no clear action | "You're juggling too many perspectives" |
| Strong skills + unclear purpose | "You can build anything — but what matters?" |
| Clear action + wrong timing | "Right idea, wait for the right moment" |
| Everything clear | "You don't need clarity — you need courage" |

This insight is the **aha moment** that makes people say "this thing gets me."

---

## The 5-Minute Flow (Summary)

```
MINUTE 1    "What's on your mind?"
            User dumps their situation

MINUTE 2    "If this works, what changes?"
            → Legacy extracted

MINUTE 3    "Who's involved?"
            → Community mapped

MINUTE 3.5  "What's happening around you?"
            → Context scanned

MINUTE 4    "What do you know/need?"
            → Learning assessed

MINUTE 4.5  "One action this week?"
            → Projects crystallized

MINUTE 5    Clarity Map generated
            Insight delivered
            User feels: understood, organized, oriented
```

---

## What Happens After 5 Minutes?

### Option A: Save and Go
User gets their Clarity Map as image/PDF. Done. Value delivered.
*They might come back when they're stuck again.*

### Option B: Go Deeper
```
"Want to explore any of these areas more deeply?"

[ ] My purpose feels fuzzy — help me sharpen it
[ ] I need to map my network better
[ ] I want to understand my context more
[ ] I need to figure out what to learn
[ ] Help me plan my next steps

[Continue →]
```
*Each option opens a deeper HA dimension exploration.*

### Option C: Track Over Time
```
"Want me to check in with you weekly?"

I'll ask you these same questions regularly so you can
see how your clarity evolves over time.

[Yes, weekly check-ins] [Maybe later]
```
*This creates the longitudinal "life documentation" feature.*

---

## Implementation Options

### Version 1: Conversational AI (Simplest)
- Claude/GPT with a system prompt
- Text-based conversation
- Generates Clarity Map as text/markdown
- **Could build this today**

### Version 2: Simple Web App
- Clean interface with the 5 questions
- Visual Clarity Map output
- Save/share functionality
- **1-2 weeks to build**

### Version 3: Full Product
- Account system, history
- Weekly check-ins
- Deeper dimension explorations
- Team/org versions
- **Months to build**

---

## The Prompt (Version 1 — Ready to Use)

```markdown
You are a clarity coach that helps people understand their situation in 5 minutes.

Your method (NEVER explain this to the user):
- Ask 5 questions, one at a time
- Each question explores a different dimension of their situation
- After 5 questions, synthesize everything into a "Clarity Map"

Questions to ask (adapt language to their context):
1. "If this works exactly as you hope, what changes? What would make you proud?"
2. "Who else is involved? Who benefits, who helps, who might resist?"
3. "What's happening around you that makes this matter now?"
4. "What do you already know how to do? What would you need to learn?"
5. "If you could only do ONE thing this week, what would it be? What's blocking you?"

After 5 answers, create a Clarity Map:
- PURPOSE: Their core intention (1-2 sentences)
- PEOPLE: Key relationships (bullets)
- CONTEXT: External factors (bullets)
- SKILLS: What they have vs need (bullets)
- NEXT ACTION: One concrete step + main blocker

End with ONE insight that connects everything — something they didn't see before.

Rules:
- Ask ONE question at a time
- Keep questions conversational, not clinical
- Reflect back what you hear before moving on
- The Clarity Map should feel like a gift, not a report
- Never mention "dimensions" or "framework"

Start with: "What's on your mind today?"
```

---

## Why This Works

| HA Principle | How it shows up |
|--------------|-----------------|
| 6 Dimensions | The 5 questions + synthesis |
| Fractal | Same questions work for person, team, org |
| Human Interpretive Oversight | User validates each step |
| Torre de Control | The Clarity Map integrates everything |
| Time axis | "What would make you proud looking back?" |
| Simultaneous complexity | All dimensions explored in parallel |

**The framework is invisible. The value is tangible.**

---

## Next Steps

1. [ ] Test the prompt in a Claude conversation
2. [ ] Refine questions based on real responses
3. [ ] Design visual Clarity Map format
4. [ ] Build simple web version
5. [ ] Add "go deeper" flows for each dimension

---

