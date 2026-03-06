# HA-Products Session Memory

---

## ZONE A: Identity (Immutable)

### Project Scope
- **Level:** 2 (Project)
- **Scope:** HA's technology products — TaaS (motor) + MARA (interface) + LMS + consulting agents
- **Role:** Product architecture + development
- **Parent:** HA-HA (Domain)
- **Grandparent:** HA-EB (Root)

### Product Architecture
- **TaaS:** 6 dimensions as API, V=M×I computarizable, interaction matrix, 3-level memory
- **MARA:** First interface to TaaS — for humans AND AI agents
- **ha-learning-app:** LMS for Leiden and course delivery
- **Dev-with-AI:** Practices for augmented development
- **Consulting agents:** Client-specific instances (SIC-Q, Docet, etc.)

### Permanent Resources
- **TaaS+MARA core:** `04-technology/taas-mara-core.md`
- **Technology structure:** `04-technology/estructura-technology.md`
- **P0 assignments:** `06-projects/asignacion-proyectos.md`
- **Frontier context:** `05-context/frontera-tecnologica-2026.md`
- **Team & budget:** `02-community/equipo-y-metodologia.md`
- **Conceptual challenge:** `03-learning/desafio-conceptual.md`
- **Legacy files:** `01-legacy/` (vision, 5-min experience)
- **Previous MARA spec:** `00-ha-root/product-spec.md` (pre-TaaS vision)

---

## ZONE B: Wisdom (Evolving)

### Decisions
- [2026-03] DEC: Shift from "HA Personal Assistant" to TaaS+MARA+LMS+consulting architecture | WHY: Oscar's CTO presentation defined the full product vision. TaaS is the motor, MARA is the interface. Old B2C spec becomes one implementation | STATUS: active
- [2026-03] DEC: TaaS + Dev-with-AI + MARA = P0 | WHY: Infrastructure first. Without motor and practices, everything is ad-hoc | STATUS: active
- [2025] DEC: Framework must be invisible to users | WHY: Users want perspective, not methodology | STATUS: active (applies to MARA specifically)
- [2025] DEC: Claude as primary LLM | WHY: Best reasoning for dimensional thinking | STATUS: active

### Patterns
- PAT:two-product-types | Consulting (rapid, client-specific) vs Products (deep, general). Consulting consumes TaaS, generates patterns, finances development
- PAT:data-knowledge-split | Data is private/removable/forgettable. Knowledge perdures/shares/grows. Intention anchors both
- PAT:memory-pipeline | Working Memory → Project Memory → Organizational Memory (anonimizado)
- PAT:interaction-matrix | 6×5=30 cross-dimensional interactions with contradiction detection

### Key Intelligence
- Oscar's PPTX (Mar 2026) is the canonical source for product vision
- Budget Year 1: $2.3M MXN base, up to $3M expanded
- Scientific validation: 6 cognitive models support HA architecture
- The frontier (context engineering, spec-driven dev) validates HA's approach

---

## ZONE C: State (Dynamic)

### Last Session
- **Date:** 2026-03-05
- **Type:** Ha-ize with Oscar's presentation
- **Achievements:** Project restructured around TaaS+MARA vision. 6 content files created from PPTX. Kernel files updated.

### Active Threads
- [!] TaaS architecture definition (P0)
- [!] MARA scope and design (P0)
- [!] Dev-with-AI practices (P0)
- [ ] ha-learning-app for Leiden
- [ ] Team formation for development

### Waiting For
- [<] Developer(s) — team formation is the bottleneck
- [?] Budget confirmation for full product development
- [?] MARA — what should it do that we're not considering? (slide 15)

### Next Session Priorities
1. Define TaaS API architecture (dimensions as endpoints)
2. Define MARA scope (human + AI agent interface)
3. Reconcile old product-spec.md with new TaaS vision

### Recent Sessions

| Date | Session | Focus | Key Achievement |
|------|---------|-------|-----------------|
| 2026-03-05 | 2 | Ha-ize with Oscar PPTX | Full restructure: TaaS+MARA vision, 6 content files, kernel update |
| 2026-02-15 | 1 | HA instancing | Agent memory created, original B2C product vision preserved |

---

*Zone sizes: A=~15 lines, B=~18 lines, C=~18 lines — within limits*
