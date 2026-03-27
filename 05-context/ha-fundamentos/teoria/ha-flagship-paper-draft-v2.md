# Horizons Architecture: An Axiomatic Coordination Design for Hybrid Human-AI Systems

> v2 — Expanded from v1 blueprint. Conceptually primary, formally supported.

## Abstract

Contemporary complex endeavors require coordination across multiple functions, actors, and temporal horizons, yet existing frameworks address only fragments of this problem. Systems thinking offers broad interpretive lenses, enterprise architectures provide classification structures, and human-AI collaboration research explains complementarity at the level of tasks or teams. What remains under-specified is a stable coordination architecture that humans and AI systems can share across scales. This paper introduces Horizons Architecture (HA) as an axiomatic coordination design for hybrid human-AI systems. HA is defined by three architectural commitments: a fixed six-dimensional taxonomy for organizing complex endeavors, an explicit temporal layer linking retrospective, present, and prospective interpretation, and a fractal recursive structure through which the same grammar recurs across root systems, projects, subprojects, and participating agents. On this architectural basis, a formal value function captures accumulated coherence over time, and a generative agentic ontology specifies how specialized human and AI actors coordinate against the common structural language through graduated authority. The paper makes three contributions. First, it defines HA as a coordination grammar rather than a software stack, workflow, or domain-specific methodology. Second, it formalizes the distinction between HA's design commitments and the stronger theoretical or empirical claims sometimes attached to them. Third, it articulates a research agenda through which claims about coordination legibility, hybrid governance, and cross-scale transfer can be tested in future instantiations. HA should be understood as a design theory for organizing knowledge, agency, and action across time and scale — not as a completed empirical science.

**Keywords:** coordination architecture; hybrid intelligence; human-AI coordination; design theory; fractal systems; organizational coordination; graduated authority

---

## 1. Introduction

Organizations and multi-stakeholder initiatives increasingly operate under conditions in which knowledge is distributed, action is interdependent, and time cannot be treated as a simple linear schedule. Strategic direction, stakeholder coordination, learning, infrastructure, environmental change, and operational execution interact continuously. At the same time, artificial intelligence is entering these environments not as a single isolated tool but as a growing set of computational capabilities that participate in analysis, recommendation, classification, simulation, and communication. The practical challenge is no longer only how to deploy AI for a task, but how to coordinate human and machine contributions inside an interpretable organizational structure.

Existing traditions address parts of this challenge. Systems thinking helps interpret interdependence. Complexity science explains emergence and non-linearity. Enterprise architectures provide ways to classify organizational elements. Multi-agent systems research studies distributed computational actors. Hybrid intelligence research clarifies how humans and AI may complement each other. Yet these bodies of work do not, by themselves, provide a stable coordination grammar that can be reused across scales while remaining legible to human and machine participants at once. The missing layer is architectural: a shared structure for deciding what kind of thing is being handled, how it relates to long-term direction, where it sits in time, and how it connects to other concurrent domains of action.

This paper presents Horizons Architecture (HA) as one answer to that gap. HA is not introduced as a universal law of organization, nor as an empirically completed theory. It is introduced as an axiomatic design: a deliberately fixed architecture that makes orientation explicit so that complex endeavors can be organized without redesigning the frame in every new case. The claim of the paper is therefore bounded but strong. HA contributes a coordination design for hybrid human-AI systems by combining an invariant dimensional taxonomy, an explicit temporal layer, and fractal recursion into one reusable grammar.

The paper makes three contributions:

**C1.** HA defines a fixed coordination grammar for complex endeavors through six invariant dimensions and an explicit temporal layer.

**C2.** HA specifies how that grammar recurs fractally across scales and, through a generative agentic ontology, how human and AI agents coordinate within it through graduated authority.

**C3.** HA provides a design-theory foundation for hybrid human-AI coordination by separating architectural commitments from empirical claims and by articulating a research agenda for testing.

---

## 2. Positioning the Problem

The problem this paper addresses is not complexity in the abstract. It is the coordination gap that appears when multiple kinds of organizational work must be held together simultaneously while human and AI actors contribute under different capabilities and constraints.

Five intellectual traditions address parts of this gap. None resolves it architecturally.

**Systems thinking** provides interpretive lenses for understanding interdependence and feedback. Meadows [1] identifies leverage points in complex systems that distribute across purpose, feedback, information flows, rules, and system structure — categories that parallel the coordination challenge HA addresses. But systems thinking offers diagnostic frameworks, not coordination grammars. It explains why things are interconnected without specifying a stable structure through which actors — human or computational — can coordinate in practice.

**Complexity science and adaptive systems** explain emergence, non-linearity, and self-organization in systems with many interacting agents [2,3]. Simon's near-decomposable hierarchy [4] describes how complex systems achieve stability through semi-independent subsystems. These insights inform HA's design — particularly the fractal property — but complexity science characterizes phenomena rather than prescribing coordination architectures. It tells us that complex systems exhibit certain properties; it does not specify the structural grammar through which an organization might govern them.

**Enterprise architecture** frameworks such as TOGAF [5], Zachman [6], and ArchiMate [7] provide classification structures for organizational elements. RAMI 4.0 [8] and ISA-95 [9] specify data exchange and interoperability across industrial hierarchy levels. These frameworks organize what exists; they classify elements into layers and viewpoints. What they leave implicit is how information held across layers becomes coordinated action — the processes, strategies, and operational decisions through which organizations produce. Classification is a precondition for coordination, not a substitute for it.

**Multi-agent systems** research addresses how distributed computational actors coordinate tasks, negotiate resources, and resolve conflicts [10]. Holonic manufacturing systems employ self-similar recursive agents for production coordination [11]. LLM-based agent architectures are extending these capabilities toward natural-language reasoning [12]. But multi-agent coordination typically operates within functional boundaries, without specifying a dimensional vocabulary through which agents at different scales and in different functions can interpret the same organizational knowledge.

**Hybrid intelligence** research establishes that human-AI teams outperform either alone when complementary capabilities are structured [13,14]. Dellermann et al. define hybrid intelligence as the integration of human and artificial intelligence toward outcomes neither could achieve alone [13]. Hemmer et al. identify three sources of complementarity — information, capability, and perspective [14]. Gonzalez et al.'s COHUMAIN architecture specifies shared representations as a requirement for collective human-machine intelligence [15]. Kolbjornsrud identifies design principles for intelligent organizations, including graduated autonomy and human direction [16]. These contributions address how humans and AI collaborate within bounded tasks or teams. The question of what structural medium allows that collaboration to operate reliably at organizational scale — where multiple AI systems and multiple human decision-makers must jointly coordinate across functions and planning horizons — remains open.

Two additional traditions inform HA's design without belonging to the five above. Beer's Viable System Model [20] specifies recursive organizational structure maintaining viability through five subsystems — anticipating HA's fractal commitment, but predating AI agents and therefore not addressing how adaptive computational actors integrate into a recursive organizational structure. Ostrom's polycentric governance [21] demonstrates that complex governance succeeds through multiple, overlapping centers of authority with shared rules — informing HA's approach to distributed agents operating within a common structural protocol.

A pattern emerges across these traditions. Each addresses a real aspect of the coordination challenge. None provides a stable, reusable grammar that (a) organizes knowledge across functions, (b) makes temporal positioning explicit, (c) recurs across scales, and (d) remains legible to both human and computational actors. HA proposes that such a grammar requires three properties working together: a fixed dimensional taxonomy, an explicit temporal layer, and fractal recursion. The next section specifies the architecture.

---

## 3. HA as Axiomatic Coordination Design

HA is built on three design commitments. They are best understood as architectural choices declared invariant within the system — not as already proven truths about all complex endeavors. Like the axioms of a mathematical system, they are true by design: assumed as given so that everything else can move within a stable frame. The argument for them is not logical necessity but architectural utility — they are justified by what they enable. In Ashby's terms [22], the fixed dimensional grammar is HA's response to the law of requisite variety: the coordination architecture must match the variety of the system it governs, and six persistent dimensions are HA's claim about what that variety requires.

### 3.1 Fixed Dimensional Taxonomy

The first commitment is that every endeavor is organized through six persistent dimensions: Legacy, Community, Learning, Technology, Context, and Projects. These are not categories for storage. They are coordination questions — each one identifies a distinct kind of organizational work that, if left unaddressed, severs a coordination pathway that the remaining dimensions cannot compensate for.

| Dimension | Coordination Question |
|---|---|
| **Legacy** | What should persist beyond the current cycle? What counts as success? |
| **Community** | Who participates, with what authority, and how are tensions resolved? |
| **Learning** | What must the organization know, and how does it learn? |
| **Technology** | What tools exist, how do they connect, and how are they governed? |
| **Context** | What external conditions constrain or enable action? |
| **Projects** | What are we doing, and is it working? |

The strength of this design choice lies in orientation. A fixed grammar reduces reframing overhead: any idea immediately has a place, any gap is immediately visible. Participants spend energy reasoning within the structure rather than inventing it. The same grammar enables comparability across people, moments, and nested initiatives — a personal project, a team initiative, and a national policy all share the same structural vocabulary, differing only in content.

The argument here is not that six dimensions have been proven necessary and sufficient for every domain. The argument is narrower: HA treats them as invariant so that coordination can proceed within a stable frame. The six-dimensional partition emerged through iterative application across industrial transformation programs, government modernization, university restructuring, and international organizational reform over a period of eight years. Attempts to reduce below six lost descriptive power (merging Community into Legacy collapsed institutional direction and stakeholder relationships). Attempts to expand beyond six produced redundancy (every proposed seventh dimension decomposed into existing ones). Independent traditions suggest similar structures: Meadows' leverage points [1] distribute across purpose, feedback, information flows, rules, and system structure; Watson et al.'s scoping review [17] identifies multidimensional complexity as a property of organizational coordination with categories that parallel HA's vocabulary. The dimensional completeness claim is empirically testable and invites challenge.

### 3.2 Explicit Temporal Layer

The second commitment is that time must be explicit in the coordination architecture. HA treats past, present, and future as a categorical coordination layer linking retrospective interpretation, present awareness, and prospective orientation. This is not a predictive engine or a universal model of non-linear temporality. It is a structural claim that complex endeavors require simultaneous visibility of inherited conditions, current states, and projected directions.

Making time explicit matters because coordination errors often arise from temporal collapse. Organizations confuse current urgency with strategic priority, inherit assumptions without examining their path dependence, or plan for futures without linking them to present capabilities. HA addresses this by insisting that temporal positioning is not implicit metadata but part of the architecture itself. Each dimension operates across three temporal registers: retrospective (what has accumulated), present (what is active), and prospective (what is intended). The six dimensions and the temporal layer together define a coordinate system — Simultaneous Complexity × Time — within which organizational knowledge can be located.

### 3.3 Fractal Recursion

The third commitment is that the architecture recurs across scales. The same coordination grammar applies at the level of root system, domain, project, subproject, and participating actor. Fractal recursion does not mean that every scale contains identical content. It means that each scale is organized through the same structural logic.

This property draws on Mandelbrot's observation that natural systems achieving robust scaling do so through self-similar geometry [18] and Warnecke's application of fractal principles to manufacturing organization [19]. In HA, the fractal property takes a specific form: a cascade of nested nodes — root, domains, projects — each carrying the same six-dimensional state space. A team, a department, an organization, and an inter-organizational federation each instantiate the same taxonomy with level-appropriate content.

The fractal property has a precise consequence: an organization that has learned to coordinate through the six-dimensional structure possesses coordination competence that transfers across scales — because the coordination vocabulary is identical. The content changes. The structure persists. The competence transfers. This property also creates the condition for cross-level coordination: agents operating at different levels communicate through the same dimensional vocabulary, so insights at one level can propagate to others without structural translation.

The stronger claim — that fractal recursion improves coordination outcomes compared to non-fractal alternatives — remains a proposition for later testing. Here it is specified as a structural property of the design.

---

## 4. Formal Backbone: Coherence, Value, and Practitioner Dependence

The three design commitments define the architecture conceptually. This section provides the minimal formal layer that makes the architecture precise enough for computational implementation and theoretical analysis. The formalization serves the architecture — it does not replace it.

### 4.1 Coherence as Alignment

At any point in the cascade, the system has an actual state across the six dimensions and a target state derived from the declared purpose (legados) as interpreted by the practitioner. Coherence measures how closely the two align.

Each node $c$ in the cascade carries its own dimensional state space $\mathcal{D}_c = \prod_{i=1}^{6} S_i^{(c)}$, equipped with a metric $d_c$ of finite diameter $\delta_c$. Let $\sigma_c \in \mathcal{D}_c$ be the actual dimensional state at node $c$, let $L$ be the declared legados governing that node's branch of the cascade, and let $P \in \mathcal{P}$ represent the practitioner's interpretive state. The **local coherence** at node $c$ is:

$$\mathcal{C}_c(\sigma_c, L, P) = 1 - \frac{d_c(\sigma_c, \hat{\sigma}_c(L, P))}{\delta_c}$$

where $\hat{\sigma}_c(L, P) \in \mathcal{D}_c$ is the target state — the dimensional configuration that the declared legados prescribe, as interpreted by practitioner $P$. Coherence is bounded in $[0, 1]$, where 1 represents perfect alignment between what is and what the practitioner understands should be.

Three properties deserve emphasis. First, coherence is **practitioner-dependent**: different practitioners interpret the same legados differently, producing different target states and therefore different coherence values for the same actual state. The practitioner is inside the equation, not outside it. Second, coherence is **multi-dimensional**: it is computed across all six dimensions simultaneously — a system can be highly coherent in Projects and Technology while deeply incoherent in Learning and Legacy. Third, coherence composes **from local to global**. Global coherence is the weighted aggregation of local coherence values across the cascade:

$$\mathcal{C}(\sigma, L, P) = \sum_{c \in C} w_c \cdot \mathcal{C}_c(\sigma_c, L, P), \quad w_c > 0, \quad \sum_{c \in C} w_c = 1$$

This composition property is the formal expression of the fractal design commitment. Because every node carries the same six-dimensional structure (§3.1) and coherence is defined identically at every level, local improvements compose into global improvement *provided the structural grammar is consistent across levels*. If a node used a different dimensional partition, or if coherence were defined by a different logic at different levels, the aggregation would not be meaningful. The local-to-global consistency condition is therefore not merely a convenient mathematical property — it is the formal consequence of the architectural invariance that the fractal commitment guarantees.

### 4.2 Value as Accumulated Coherence

Value in HA is not an instantaneous assessment. It is the temporal integral of coherence:

$$V(t) = \int_0^t \mathcal{C}(\sigma(\tau), L(\tau), P(\tau)) \, d\tau$$

This definition has three consequences. First, value is non-decreasing and Lipschitz with constant 1 — it accumulates, and cannot accumulate faster than time itself allows. Second, the long-run average coherence $\bar{\mathcal{C}}(t) = V(t)/t$ captures the system's sustained alignment, filtering out transient fluctuations. Third, and most importantly, value retains history. Two systems with identical current coherence may have vastly different accumulated value if one maintained alignment over time and the other oscillated. This is why HA insists on the temporal layer: coherence at a single moment is insufficient; what matters for organizational value is coherence sustained over time.

### 4.3 Practitioner Dependence

The coherence function depends on the practitioner through the interpretation map $\hat{\sigma}(L, P)$: different practitioners interpret the same legados differently, producing different target states and therefore different coherence values for the same actual state. This dependence is not a weakness. It is a design feature. HA does not claim to produce identical results for identical inputs. It claims to produce alignment between purpose and state as interpreted by the practitioner.

The architecture also suggests a direction of change. Because coherence defines a landscape over the practitioner's interpretive state, sustained engagement with the coordination grammar creates a gradient that practitioners can follow toward deeper alignment. Under specific regularity assumptions on $g$ and $\hat{\sigma}$ — assumptions that hold for canonical choices but are not guaranteed for all implementations — this gradient ascent is stable and convergent. The formal treatment of practitioner dynamics, including existence, uniqueness, and stability conditions, is developed in the companion formalization and is not claimed here as a generic property of the architecture. What this paper claims is the design commitment: HA places the practitioner inside the value equation, and coherence-driven practice creates the conditions for practitioner evolution over time.

---

## 5. Generative Agentic Ontology and Hybrid Governance

Once the coordination architecture and its formal backbone are in place, a further possibility opens: specialized agents — human and computational — can operate against the same structure. This is where HA transitions from coordination grammar to governed hybrid intelligence.

### 5.1 The Shared Reasoning Space

The six-dimensional structure functions not merely as a classification scheme but as a shared reasoning space. Humans and AI agents operate on the same organizational knowledge in the same structural language, under different authority constraints. The dimensional vocabulary is common; the capabilities and judgment are differentiated. This is the architectural condition that makes hybrid intelligence governable rather than ad hoc.

The comparison that matters is not whether HA replaces multi-agent systems research, but whether it supplies the missing structural layer. Multi-agent frameworks specify agent coordination mechanisms; HA specifies the shared vocabulary within which those mechanisms operate. Hybrid intelligence research identifies conditions for complementarity; HA specifies the architectural medium through which complementarity is enacted at organizational scale.

### 5.2 Three Agent Types

Three agent types correspond to coordination scope:

**Dimensional agents** operate within single dimensions. A Technology agent monitors system health. A Learning agent tracks capability gaps. These agents have narrow scope, deep specialization, and autonomy within human-defined policy boundaries.

**Coordinating agents** operate across dimensional boundaries. A Technology-Projects agent correlates system predictions with operational constraints. A Community-Learning agent connects workforce needs with development opportunities. Coordinating agents propose cross-dimensional actions requiring human approval.

**Strategic agents** synthesize across the full dimensional structure. They identify cross-dimensional patterns invisible from any single-dimension perspective. Strategic agents report integrated assessments; they hold no proposing or execution authority.

### 5.3 Graduated Authority

Agent authority develops through four stages: monitoring (observe and report), alerting (identify conditions requiring attention), proposing (recommend actions with supporting rationale), and executing (carry out routine actions within policy bounds). A critical asymmetry governs the model: **as scope widens, authority narrows**. Dimensional agents may reach executing authority within their single dimension. Coordinating agents may reach proposing authority across dimensions. Strategic agents are capped at alerting — they surface patterns but cannot act.

Upward graduation requires sustained performance evidence. Downward graduation is immediate upon policy violation, distributional shift, or human override — resetting to monitoring regardless of current authority. This distinguishes graduated authority from conventional role-based access control, which assigns static permissions. HA assigns dynamic authority based on demonstrated capability within a dimensional context.

Human judgment is essential not as a decorative final step but as the authority that interprets tradeoffs, arbitrates cross-dimensional conflict, and governs consequential decisions. The strongest claim here is therefore modest but important: HA provides a structural condition for governable hybrid intelligence. It does not prove that any sufficiently instrumented HA system will behave well. It proposes that without a shared architecture, human-AI coordination remains under-specified and difficult to audit.

---

## 6. Theoretical Propositions

If HA is accepted as an axiomatic coordination design, the next intellectual step is not rhetorical expansion but disciplined testing. The architecture implies propositions that future work can evaluate. Each is tied to a specific design commitment.

**P1. Coordination legibility** (from C1, fixed dimensional taxonomy). Organizations that adopt a fixed coordination grammar will identify structural gaps — missing dimensions, misplaced actions, unaddressed coordination questions — more readily than organizations that reinvent their coordination logic per initiative. The claim is that invariance makes gaps visible.

**P2. Reframing overhead** (from C1, fixed dimensional taxonomy). In complex endeavors, a stable grammar reduces the proportion of effort spent on structuring versus reasoning. Participants operating within a fixed dimensional vocabulary converge faster on shared problem representations than participants who must first negotiate the frame.

**P3. Hybrid governance** (from C2, agentic extension with graduated authority). Shared architecture improves the auditability and governability of human-AI coordination. When human and AI actors operate through the same dimensional vocabulary under graduated authority, the conditions for meaningful human oversight are structurally specified rather than left to ad hoc implementation.

**P4. Cross-scale transfer** (from C2, fractal recursion). Methods, representations, and agents developed at one level of a fractal architecture transfer to other levels with lower structural translation loss than in non-fractal alternatives. The claim is that structural invariance across scales reduces the cost of coordination competence transfer.

**P5. Temporal coherence** (from C1, explicit temporal layer; and formal backbone). Organizations that make temporal positioning explicit — distinguishing retrospective, present, and prospective registers — produce more temporally coherent strategies than organizations in which temporal classification is implicit. The coherence integral provides the formal criterion: sustained alignment over time, not instantaneous assessment.

These are not conclusions of this paper. They are the propositions that make HA researchable rather than merely assertive. Each can be tested through comparative studies, bounded instantiations, or controlled experiments.

---

## 7. Limits and Research Agenda

The credibility of this paper depends on its willingness to state limits clearly.

**What HA defines:** A fixed coordination grammar with six dimensions, an explicit temporal layer, and fractal recursion. A formal value function based on accumulated coherence. A governance model for hybrid human-AI coordination through graduated authority.

**What HA proposes:** That this combination of properties addresses the coordination gap that existing traditions leave open. That the architecture is reusable across domains and scales. That it creates the structural conditions for governable hybrid intelligence.

**What HA does not yet prove:** That the six dimensions are universally exhaustive. That fractal recursion improves coordination outcomes in measurable terms. That graduated authority scales reliably beyond the cases documented to date. That the coherence integral correlates with organizational performance in empirical settings.

Following Gregor and Hevner's classification of design-theory contributions [23], HA constitutes a nascent design theory: it articulates principles and demonstrates them through formal specification rather than large-scale empirical testing. The research agenda proceeds in layers. First, conceptual comparison with adjacent traditions — enterprise architecture, socio-technical systems design, hybrid intelligence, polycentric governance — to sharpen HA's positioning and identify where it extends existing work versus where it merely relabels it. Second, bounded domain instantiations that test specific propositions (P1-P5) in settings of sufficient structural complexity. Third, longitudinal studies that evaluate whether sustained use of the coordination grammar improves alignment, governance, and cross-functional coordination over time. Follow-on papers can then treat federated AI architectures, memory systems, and domain-specific applications as separate contributions rather than forcing them into one foundational text.

---

## 8. Conclusion

Horizons Architecture is strongest when presented neither as a universal theory already proven nor as a visionary catch-all for every future system. Its strongest form is architectural. HA proposes that complex hybrid endeavors benefit from a fixed coordination grammar: one that organizes knowledge, action, agency, and temporal orientation within a recursively reusable structure. The formal backbone — coherence as alignment, value as accumulated coherence, practitioner evolution through the coherence gradient — gives the architecture mathematical precision without reducing it to a theorem collection. The generative agentic ontology specifies how human and AI agents coordinate within this structure through graduated authority — with the critical asymmetry that authority narrows as scope widens.

In that sense, HA is best understood as an axiomatic coordination design for hybrid human-AI systems. Its value lies not in replacing domain expertise or empirical validation, but in providing the notation through which such expertise and validation can be coordinated across time and scale. Like a musical staff, the architecture does not determine the composition. It makes complex composition, transfer, and coordination possible across performers and generations. HA proposes an analogous role for complex endeavors involving humans and machines.

---

## References

[1] D. Meadows, *Thinking in Systems: A Primer*. Chelsea Green Publishing, 2008.
[2] J. H. Holland, *Hidden Order: How Adaptation Builds Complexity*. Addison-Wesley, 1995.
[3] M. Mitchell, *Complexity: A Guided Tour*. Oxford University Press, 2009.
[4] H. A. Simon, "The Architecture of Complexity," *Proceedings of the American Philosophical Society*, vol. 106, no. 6, pp. 467–482, 1962.
[5] The Open Group, "TOGAF Standard, Version 9.2," 2018.
[6] J. A. Zachman, "A Framework for Information Systems Architecture," *IBM Systems Journal*, vol. 26, no. 3, pp. 276–292, 1987.
[7] The Open Group, "ArchiMate 3.2 Specification," 2023.
[8] DIN SPEC 91345, "Reference Architecture Model Industrie 4.0 (RAMI4.0)," 2016.
[9] ISA, "ANSI/ISA-95.00.01-2010: Enterprise-Control System Integration Part 1," 2010.
[10] M. Wooldridge, *An Introduction to MultiAgent Systems*, 2nd ed. Wiley, 2009.
[11] P. Leitão and F. Restivo, "ADACOR: A holonic architecture for agile and adaptive manufacturing control," *Computers in Industry*, vol. 57, no. 2, pp. 121–130, 2006.
[12] Z. Xi et al., "The Rise and Potential of Large Language Model Based Agents: A Survey," *Science China Information Sciences*, vol. 68, 121101, 2025.
[13] D. Dellermann et al., "Hybrid Intelligence," *Business & Information Systems Engineering*, vol. 61, pp. 637–643, 2019.
[14] P. Hemmer et al., "Complementarity in Human-AI Collaboration: Concept, Sources, and Evidence," *European Journal of Information Systems*, vol. 34, no. 6, 2025.
[15] C. Gonzalez et al., "COHUMAIN: Building the Socio-Cognitive Architecture of Collective Human-Machine Intelligence," *Topics in Cognitive Science*, vol. 17, no. 2, 2025.
[16] V. Kolbjornsrud, "Designing the Intelligent Organization: Six Principles for Human-AI Collaboration," *California Management Review*, vol. 66, no. 2, pp. 44–64, 2024.
[17] M. K. Watson et al., "Categorizing the Complexity: A Scoping Review of Structures Within Organizations," *Journal of Management*, vol. 51, no. 1, pp. 309–343, 2025.
[18] B. B. Mandelbrot, *The Fractal Geometry of Nature*. W. H. Freeman, 1982.
[19] H.-J. Warnecke, *The Fractal Company: A Revolution in Corporate Culture*. Springer, 1993.
[20] S. Beer, *Brain of the Firm*, 2nd ed. Wiley, 1981.
[21] E. Ostrom, *Governing the Commons: The Evolution of Institutions for Collective Action*. Cambridge University Press, 1990.
[22] W. R. Ashby, *An Introduction to Cybernetics*. Chapman & Hall, 1956.
[23] S. Gregor and A. R. Hevner, "Positioning and Presenting Design Science Research for Maximum Impact," *MIS Quarterly*, vol. 37, no. 2, pp. 337–355, 2013.
