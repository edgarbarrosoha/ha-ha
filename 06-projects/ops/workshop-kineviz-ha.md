# Workshop: Graphs, Dimensions, and the Architecture of Thinking
**HA × Kineviz | 60 min | Online**

---

## Logistics

| | |
|---|---|
| **Date** | TBD (week of March 12, 2026) |
| **Participants** | Kineviz team (Sony Green, Weidong Yang, Wei, + team) |
| **Format** | Online, 60 minutes |
| **Facilitator** | Edgar Barroso |
| **Tools** | GraphXR (shared screen, participants can co-navigate), slides (minimal), shared doc for Part 4 |

---

## Learning objectives

By the end of this workshop, participants will be able to:

1. Describe how a 6-dimension structure was used to coordinate 22,000+ people in a state government program
2. Identify the multiple instantiations of the same structure (data structure, knowledge graph, consulting methodology, agentic federation, teaching tool, discipline, etc.)
3. Explore a real government dataset in GraphXR organized by the HA ontology
4. Assess where HA's dimensional structure could apply to Kineviz's own work and products

---

## Materials

| Material | Format | Status |
|----------|--------|--------|
| Guanajuato dataset for GraphXR | CSV/JSON (nodes: participants, proposals, projects, axes, municipalities; edges: participant→proposal, proposal→axis, participant→municipality) | [ ] To build |
| HA fractal structure visual | GraphXR project or static diagram | [ ] To build |
| Instantiation table (1 slide) | Screen share | [ ] Ready (in this doc) |
| Shared doc for Part 4 | Google Doc or Miro | [ ] To create |
| HA one-pager | PDF, shared after workshop | [ ] To prepare |

---

## Workshop flow

### Part 1: Opening
**[0:00–0:05] 5 min**

| | |
|---|---|
| **Format** | Facilitator introduction |
| **Facilitator** | Edgar introduces himself as a composer. Acknowledges shared background: Weidong (dancer/physicist), Sony (sculptor), Edgar (composer). Everyone arrived at graphs from art. |
| **Key message** | The industry spends enormous energy training AI. Almost nobody is working on training humans for a world where AI is already here. Prompting, automation, workflow — that's the current answer. Life is much more than that. HA is a different approach: a notation system that trains the human side of the human-AI partnership. |
| **Transition** | *"Let me show you what that looks like. In 2024, we were asked to help design the government program for the state of Guanajuato in Mexico — a plan that would shape how 6 million people are governed for 6 years. 22,000 people participated. I'm going to show you the result in GraphXR."* |

---

### Part 2: The case — Programa de Gobierno de Guanajuato (GraphXR demo)
**[0:05–0:25] 20 min**

| | |
|---|---|
| **Format** | Live GraphXR exploration + narration |
| **Facilitator** | Opens GraphXR with Guanajuato dataset. Tells the story through the graph. |
| **Participants** | Watch, ask questions, point out graph properties. They're the experts on the tool. |

**Story arc (told through the graph):**

**1. The problem** (2 min, before opening GraphXR)

A new governor takes office in Guanajuato, Mexico — first woman governor in the state's history. She needs a government program: a plan that defines what the state will do for the next 6 years across every area — security, education, health, economy, environment, social equity.

The coordination problem: how do you design a coherent plan that covers everything a government does, reflects what 6 million citizens actually need, and can be executed by dozens of agencies that don't share a language?

The traditional approach: a small team writes a document, validates it with experts, publishes it. Guanajuato did something different: 22,000+ people participated in shaping the program through expert working groups, citizen assemblies in 34 municipalities, sector meetings, digital platforms, and community visits.

8,612 proposals came in. 520 specific projects were identified. 230+ experts contributed. The question became: how do you read 8,612 proposals and turn them into a coherent structure?

**2. Open the graph** (3 min)

Show the full Guanajuato graph. Name the node types:
- Proposals (8,612)
- Projects (520)
- Participants (sample from 22,000+)
- Municipalities (34+)
- Strategic axes (6)
- Institutions / agencies

Name the edge types:
- Participant → submitted → Proposal
- Proposal → classified in → Axis
- Proposal → became → Project
- Participant → from → Municipality
- Institution → responsible for → Project

**3. Filter by axis** (5 min)

The program produced 6 strategic axes. Walk through each one, filtering the graph:

| Axis | Filter action | What the graph shows |
|------|--------------|---------------------|
| Tranquilidad (Security) | Highlight all proposals and projects in this axis | Density of proposals around security, crime prevention, mental health. Which municipalities contributed most. Which institutions are responsible. |
| Igualdad (Equality) | Filter nodes connected to this axis | Proposals about women's rights, Indigenous communities, disability, LGBTQ+. Cross-connections to education and economy. |
| Confianza (Trust) | Filter | Anti-corruption, transparency, digital government. Show how these proposals connect to actors across multiple municipalities. |
| Educación, Cultura y Deporte | Filter | Education proposals linked to cultural institutions. Soft skills, sports, integral development. |
| Prosperidad (Prosperity) | Filter | Economic development, tourism, innovation. Which municipalities are industrial, which are agricultural. Different needs, same axis. |
| Armonía (Harmony) | Filter | Sustainable development, water security, urban planning. Environmental proposals with cross-axis connections to prosperity and education. |

**4. Show clusters, gaps, cross-connections** (5 min)
- Proposals from different municipalities landing in the same axis — people who never met each other producing connected ideas
- Municipalities with high participation vs. underrepresented ones — structural gaps visible as sparse regions in the graph
- Cross-axis connections: a proposal classified under Education that depends on infrastructure from Prosperity and actors from Equality. The graph shows the interdependency that a document can't.
- Proposals that became projects (520 out of 8,612) — show the funnel. What was selected, what was left out, and why.

**5. Layer by participation channel** (3 min)
Filter by how proposals arrived: expert groups, citizen assemblies, digital platform, community visits. Show how different channels produced different kinds of proposals, connected to different axes and regions.

**Discussion prompt** (2 min):
*"You're the graph experts. What do you see in this data that I'm not seeing?"*

**Key point to close:**
This program was delivered. It governs Guanajuato right now. 22,000 people contributed to a coherent structure because they all worked inside the same dimensional framework. The structure held the scale. And every element — every proposal, every actor, every project — is a node in the graph you're looking at.

---

### Part 3: What HA is — same structure, many instantiations
**[0:25–0:40] 15 min**

| | |
|---|---|
| **Format** | Presentation (schematic) + discussion |
| **Facilitator** | Explains the architecture, walks through the instantiation table. |
| **Participants** | Listen, then respond to discussion prompt. |

**The notation analogy.** Musical staff: 5 fixed lines. All Western music written on them, from Bach to Björk. Lines don't change. What you write on them changes. HA: 6 fixed dimensions, 2 axes (simultaneous complexity × non-linear time). Fractal — zoom into any node, same 6 dimensions inside. Self-similar at every depth.

**The 6 dimensions:**

| Dimension | Question |
|-----------|----------|
| Legacy | What do we want to outlast us? |
| Community | Who participates and who cares? |
| Learning | What do we need to learn? |
| Technology | What infrastructure holds it up? |
| Context | What external forces shape it? |
| Projects | How do we operate? |

In Guanajuato, the 6 strategic axes of the program were the content. The 6 HA dimensions were the methodology used to produce it — the structure that allowed 22,000 people, 230 experts, and AI agents to coordinate across 34 municipalities and produce 520 projects.

**The same structure, instantiated differently:**

| HA as... | What it means | Example |
|----------|---------------|---------|
| Thinking environment | Individual navigates 6 dimensions to read their own complexity | Founder mapping a decision across 6 dimensions instead of collapsing into the 1-2 that feel most urgent |
| Data structure | 6 node categories, weighted directed edges, queryable | "Show me everything in Learning connected to this actor in Community" — what you just saw in GraphXR |
| Knowledge graph | Fixed ontology makes graphs from different domains structurally comparable | Guanajuato's government graph and a university campus graph share the same schema |
| Consulting methodology | Map 6 dimensions with stakeholders before activating any technology | Guanajuato: first question was Legacy — "What should this state become?" Incompatible answers surfaced. The real work began there |
| Teaching tool | Students apply 6 dimensions to their own research, ventures, decisions | Tec de Monterrey: student maps thesis — Community shapes Learning shapes Technology |
| Workshop methodology | 6 questions as shared protocol for groups. Each question opens a dimension, generates data | Guanajuato: 22,000 people, same structure, coherent program emerged from massive input |
| Agentic federation | Each dimension held by an AI agent. Organizations run own instances. Patterns shared, data sovereign | Legacy agent tracks purpose drift. Community agent maps missing voices. Each node sovereign |
| System thinking framework | 2 axes + 6 dimensions = coordinate space for any endeavor | Past, present, future — all active in every decision |
| Discipline | Works in the hands of strangers, in contexts creators never anticipated | Practitioners apply 6 dimensions without guidance to unforeseen domains |

**Discussion prompt** (3 min):
*"Which of these instantiations is closest to what you do at Kineviz? Which one surprised you?"*

---

### Part 4: What this means for Kineviz
**[0:40–0:57] 17 min**

| | |
|---|---|
| **Format** | Collaborative discussion. Shared doc open for notes. |
| **Facilitator** | Frames the question, then guides conversation. |
| **Participants** | React, propose, challenge. |

**Frame** (2 min):

GraphXR makes graphs visible. Interpretation — deciding what the graph means, which relationships matter, which are noise — happens unstructured inside the user's head. HA provides a reading protocol for graphs:

| Dimension | What it tells the user about a graph |
|-----------|--------------------------------------|
| Legacy | Why a cluster matters |
| Community | Who's missing from a network |
| Learning | What knowledge gaps the graph reveals |
| Technology | What infrastructure the graph depends on |
| Context | Which edges are about to break |
| Projects | What to do next |

The AI industry is converging on agents and data. The missing layer between them is structure — what tells agents what to attend to and tells humans what the data means. That layer is notation. That layer is abstraction. Musical notation outlived every instrument that ever played it. The abstraction layer will outlast the compute.

**Open discussion** (15 min):

Guiding questions (pick 2-3 based on energy):

1. *"Could the 6-dimension ontology work as a schema layer inside GraphXR? What would that look like technically?"*
2. *"You just saw 8,612 proposals visualized as a graph. If a GraphXR user could filter any dataset by these 6 dimensions — would that change how they work?"*
3. *"What does a graph of thinking look like? Can navigating a complex system be an aesthetic experience?"* (Art of Graph connection)
4. *"HA federates sovereign graphs — each node keeps its own data, shares only patterns. Is that a use case GraphXR could serve?"*
5. *"If you could build a tool that trains people to think in 6 dimensions by navigating graphs — what would you build?"*

Capture ideas in shared doc as they emerge.

---

### Close
**[0:57–1:00] 3 min**

| | |
|---|---|
| **Facilitator** | Thank them for the GraphXR licenses. Share the HA one-pager. |
| **Key line** | *"This is the beginning of a conversation, not the end of a presentation."* |
| **Next steps** | If interest: deeper technical session, joint experiment with Guanajuato data, or keep talking. |

---

## Workshop output

By the end, participants have:
- Seen a real government dataset (22,000+ participants, 8,612 proposals) explored through HA's structure in their own tool
- A table of 9 instantiations showing how one structure becomes many things
- A shared doc with ideas for HA × GraphXR possibilities
- An HA one-pager for reference

---

## Preparation checklist

- [ ] **Build Guanajuato dataset for GraphXR.** Nodes: proposals (sample from 8,612), projects (520), participants (representative sample), municipalities (34+), axes (6), institutions. Edges: participant→proposal, proposal→axis, proposal→project, participant→municipality, institution→project. Properties: participation channel, axis, municipality, status (proposal vs project). Format: CSV or JSON for GraphXR import.
- [ ] **Test GraphXR demo flow.** Open graph → full view → filter by axis → show clusters → show gaps → filter by participation channel. Practice transitions. Target 15 min for the demo.
- [ ] **HA fractal structure visual.** 6-node graph with zoom into one node showing same 6 nodes inside.
- [ ] **Instantiation table slide.** One slide, the 9-row table.
- [ ] **Shared doc for Part 4.** Google Doc or Miro with the 5 guiding questions pre-loaded.
- [ ] **HA one-pager.** PDF to share after the workshop.
- [ ] **Calendar invite.** 60 min, include GraphXR project link if sharing access.

## Tone

- Peer to peer
- Example first, theory after
- Neutral — let the structure and the data speak
- The GraphXR demo is the center of the workshop — they see their own tool used in a new way
- No selling. Intellectual exchange.
- Let their questions and graph expertise shape the conversation
