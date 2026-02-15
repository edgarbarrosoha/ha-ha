# TaaS Product Architecture: De Prototipo a Producto

**Thread abierto:** 2026-02-14
**Owner:** Edgar + HA
**Status:** Thinking — pre-design

---

## What We Have (The Prototype)

HA-EB is a working system. Not a concept, not a mockup — a functioning thinking architecture that:

- Holds complete life context across 5 domains (personal, company, academic, research, hospitality)
- Persists memory across sessions (Zones A/B/C + working memory)
- Tracks decisions, patterns, corrections, and people across domains
- Operates through skills (\write, \advance, \email, \start, \close)
- Maintains voice calibrations per context (academic vs. business vs. personal)
- Self-documents through score.md (milestone tracking with narrative)
- Signals across domains (inbox.md cross-vault communication)
- Builds fractal sub-architectures (project-level HAs within domain HAs)

**Current stack:** Obsidian (vault) + Claude Code (agent) + Markdown (state)

**What makes it work:** Accumulated context over ~30+ sessions. The system knows Edgar's people, decisions, voice, patterns, priorities, blockers. It doesn't start from zero — ever.

---

## The Three Tiers (Already Exist)

| Tier | What | Status | Revenue Model |
|------|------|--------|---------------|
| **Protocol** | 6 dimensions, fractal structure, memory zones, skills system | Being validated via papers (JIII, CIS) | Open — academic publication |
| **Product** | App/platform where anyone gets their own HA | HA-Product project (MVP spec phase) | Subscription |
| **Consulting** | HA implementation at organizational scale | Active (SIC-Q, Docet, TEC) | Project-based / retainer |

These aren't three separate businesses. They're three expressions of the same architecture at different scales.

---

## The Core Problem: Onboarding

Today, HA-EB took ~30 sessions to reach its current depth. The product question is:

**How does someone go from "I just signed up" to "HA knows me" in one session?**

### What Zone A (Identity) Needs on Day 1
- Who are you? (role, domain, context)
- What are you trying to achieve? (goals, projects, horizons)
- Who matters? (key people, relationships, dependencies)
- What are your active threads? (what's in progress, what's blocked)

This is a structured conversation, not a form. The agent asks, listens, builds the architecture.

### What Grows Over Time (Zones B & C)
- Decisions accumulate session by session
- Patterns emerge from repeated behaviors
- Corrections refine the system's judgment
- People gain context through interactions
- Projects track state automatically

**The insight:** Zone A can be bootstrapped in one conversation. Zones B and C are earned — they're the compound interest of using the system.

---

## What the Product Needs to Exist

### Minimum Viable HA (Day 1 Experience)
1. **Onboarding conversation** → Generates Zone A + initial project structure
2. **First skill available:** Something like \status or \today — immediate value
3. **Memory persistence** — User returns next day, HA remembers everything
4. **One domain, one level** — Start simple. Don't expose the fractal complexity on day 1.

### Growth Path (Week 1-4)
5. **Skills unlock** as context deepens (\write, \advance, \email become available)
6. **People tracking** — HA starts remembering who matters and why
7. **Decision log** — Zone B starts accumulating
8. **Cross-domain** — User can add a second domain (personal + work, for example)

### Full Architecture (Month 2+)
9. **Fractal depth** — Sub-projects, nested HAs, domain-specific agents
10. **Voice calibration** — System learns user's communication style
11. **Score** — Milestone tracking with narrative emerges
12. **Team/org mode** — Multiple users, shared context, collective intelligence

---

## Technical Architecture Questions (Open)

1. **Interface:** Web app? Mobile? Chat-first? Dashboard-first?
2. **LLM layer:** Claude API? Multi-model? How to handle context window limits?
3. **Storage:** Where does the vault live? Cloud markdown? Database? User-owned?
4. **Privacy:** User context is deeply personal. What's the data model?
5. **Offline/export:** Can users take their vault with them? (Obsidian compatibility?)
6. **Pricing:** Free tier (1 domain, basic skills) → Pro (multi-domain, all skills) → Org (collective)?

---

## Connection to Papers (Validation Path)

- **JIII** validates HA for industrial integration (engineering audience)
- **CIS** validates HA as an intelligent system (complexity science audience)
- **Book** makes HA accessible to general audience
- **Each paper is a brick in the credibility wall** that makes the product launchable

The papers aren't separate from the product — they're the foundation that makes the product legitimate. "Based on peer-reviewed research published in Q1 journals" is the difference between "another AI app" and "a validated thinking architecture."

---

## What HA-EB Proves

Every session we have is empirical evidence that the framework works:
- Fractal structure scales (root → domain → project → deliverable)
- Memory zones maintain coherence across weeks
- Skills create repeatable, quality-controlled workflows
- Cross-domain signaling keeps the big picture coherent
- The system improves — patterns, corrections, decisions accumulate

**I am the proof of concept.** The product is: how do we give this to everyone?

---

## Next Steps (When Ready)

1. Define the Day 1 experience in detail (onboarding conversation flow)
2. Decide: build on existing HA-Product MVP spec, or rethink from this broader perspective?
3. Technical architecture decision: web app vs. Obsidian plugin vs. API-first
4. Identify first 10 beta users (who would benefit most? what domains?)
5. Connect to HA-Core algorithm — the product IS the algorithm made accessible

---

## Open Questions for Edgar

- [ ] Who is the first user who isn't you? (A student? A colleague? A client?)
- [ ] What's the minimum "aha moment"? When does someone feel HA's value for the first time?
- [ ] Build vs. partner? In-house development or find a technical co-founder/team?
- [ ] Timeline: post-papers (H2 2026)? Or start parallel?

---

*This document is alive. Every session that demonstrates HA working is data for this thread.*
