# Dashboard: HA-SIC-Q

> Sistema de Inteligencia Colectiva de Querétaro

## Status: Development Phase

**Last updated:** 2026-02-07

---

## Current Focus

| Priority | Task | Status | Owner |
|----------|------|--------|-------|
| 1 | Replanteamiento estratégico SIC-Q (3 etapas) | [x] Complete | Edgar |
| 2 | Desarrollo del replanteamiento (producto E1, IF, feedback) | [x] Complete | Edgar |
| 3 | One-pager para Toño (replanteamiento) | [x] Complete (v1.8) | Edgar |
| 4 | IF: Funciones y atribuciones (Sección 5) | [x] Complete | Edgar |
| 5 | IF: Reencuadre como institución de prospectiva (4 docs) | [x] Complete | Edgar |
| 6 | Arquitectura TaaS + 3 instancias (6 docs) | [x] Complete | Edgar |
| 7 | Propuesta v06 (TaaS + 3 instancias + prospectiva) | [!] Urgent | Edgar |
| 8 | Mapeo datos existentes gobierno (para Etapa 1) | [!] Urgent | Joaquín/Oscar |
| 9 | Co-diseño con 3 grupos académicos | [>] In progress | Edgar |
| 10 | Formalizar Instituto del Futuro en El Consejo A.C. | [ ] Pending | - |
| 11 | Backend architecture document | [ ] Pending | - |
| 12 | Pilot consultation design | [ ] Pending | - |

---

## Arquitectura SIC-Q: Thinking-as-a-Service

> El SIC-Q es un servicio de inteligencia en la nube (**TaaS**) donde **HA es la capa de pensamiento**. De este núcleo se derivan 3 instancias adaptadas a cada usuario. Las instancias 2 y 3 alimentan a la 1; la 1 procesa y genera inteligencia.

| Instancia | Qué es | Para quién | Etapa |
|-----------|--------|------------|-------|
| **1. Agente estratégico** | Agente IA que analiza, cruza datos, genera inteligencia | Secretaría de Planeación (planeación) + IF (prospectiva) | Etapa 1 |
| **2. Herramienta de recopilación** | Instrumento para talleres, consultas, encuestas, consejos, PED 2050 | Gobierno (procesos estructurados) | Etapa 1 |
| **3. Canales ciudadanos** | WhatsApp, redes sociales, plataforma de propuestas | Ciudadanía (experiencias orgánicas) | Etapa 2 |

**Relación de servicio:** El IF le presta servicio a la Secretaría de Planeación a través del SIC-Q. No es dependencia tecnológica — el IF provee inteligencia y herramientas, la Secretaría las usa con autonomía.

| Documento | Actualizado con arquitectura TaaS |
|-----------|-----------------------------------|
| `replanteamiento-estrategico-sic-q.md` | [x] Nueva sección TaaS, diagrama 3 instancias, etapas como instancias |
| `desarrollo-replanteamiento-sic-q.md` | [x] Etapa 1 con 2 instancias, relación servicio, 5 entregables |
| `one-pager-sic-q-replanteamiento.md` | [x] v1.8 — agente Secretaría + agente IF + herramienta recopilación |
| `instituto-del-futuro-design-v01.md` | [x] Función 1 "Operar el SIC-Q (TaaS)" con 3 instancias |
| `estatutos-sugeridos-para-if.md` | [x] Art. 6.II, 6.IV, 46.I |
| `análisis-legal-de-la-estructura-ac-del-if.md` | [x] Objeto convenio + obligaciones |

---

## Instituto del Futuro — Visión actualizada

> El IF es una **institución de prospectiva**, no solo el operador del SIC-Q. El SIC-Q es su instrumento principal, pero el IF va más allá: escenarios, tendencias globales, anticipación de disrupciones. La Secretaría de Planeación planea con lo que hay; el Instituto piensa en lo que viene. No hay overlap — hay complementariedad.

| Documento | Actualizado con visión prospectiva |
|-----------|------------------------------------|
| `instituto-del-futuro-design-v01.md` | [x] Sección 5 reescrita + resumen + diagrama + convenio |
| `perfiles-clave-if.md` | [x] Director Ejecutivo, Director IC, Consejeros |
| `análisis-legal-de-la-estructura-ac-del-if.md` | [x] Objeto del convenio, fin de la AC |
| `estatutos-sugeridos-para-if.md` | [x] Art. 5, 6, 7, 8, 25, 32, 46 |

---

## Citizen Journey (5-Phase Model v04)

| Phase | Name | Status |
|-------|------|--------|
| 1 | Co-diseño | [>] Active |
| 2 | Descubrimiento | [ ] Pending |
| 3 | Participa (Proponer + Apoyar + Platicar) | [ ] Pending |
| 4 | Seguimiento | [ ] Pending |
| 5 | Respuesta | [ ] Pending |
| — | Backend (BD, Motor IC, HA, Agente, Gobierno) | [ ] Pending |

---

## Deliverables

| Deliverable | Location | Status |
|-------------|----------|--------|
| Propuesta v05 | `propuestas/` | [x] Complete |
| Reporte simplificación Citizens Journey | `entregables/` | [x] Complete |
| Citizens Journey v04 | `04-technology/.../citizens-journey/` | [x] Complete |
| Mermaid diagram v04 | `04-technology/.../citizens-journey/` | [x] Complete |
| Replanteamiento estratégico SIC-Q | `propuestas/` | [x] Complete |
| Desarrollo del replanteamiento | `propuestas/` | [x] Complete |
| One-pager para Toño (v1.8) | `propuestas/` | [x] Complete |
| IF: Funciones y atribuciones (Sección 5) | `instituto-del-futuro/` | [x] Complete |
| IF: Visión prospectiva (4 documentos) | `instituto-del-futuro/` | [x] Complete |
| Arquitectura TaaS + 3 instancias (6 docs) | varios | [x] Complete |
| Propuesta v06 | `propuestas/` | [ ] Pending |
| Backend architecture (separado) | `entregables/` | [ ] Pending |
| Pilot presentation | `presentaciones/` | [ ] Pending |

---

## Stakeholders

| Stakeholder | Role | Status |
|-------------|------|--------|
| CEPACI Querétaro | Client | Active |
| Government of Querétaro | Sponsor | Engaged |
| Secretaría de Planeación y PC | Usuario del SIC-Q (planeación) | Service relationship |
| Instituto del Futuro | Institución de prospectiva, operador del SIC-Q (TaaS) | Proposed |

---

## Waiting For

- [<] Validación de one-pager v1.8 con Antonio Rangel
- [<] Government alignment on Instituto del Futuro model
- [<] Technical infrastructure decisions
- [?] Decisión legal: verificación INE vs CURP
- [<] Validación de v04 con stakeholders
- [<] Definición alcance piloto con Antonio Rangel

---

## Agent Tasks

- [x] @simplify citizens journey v03 → v04
- [x] @create simplification report
- [x] @strategic reframing SIC-Q (3 etapas acumulativas)
- [x] @develop reframing (Etapa 1 product, IF integration, feedback map)
- [x] @create one-pager for Toño (v1.0→v1.8, 8 iterations)
- [x] @rewrite IF Section 5 (functions and attributions)
- [x] @propagate prospective vision across 4 IF documents
- [x] @define TaaS architecture + 3 instances across 6 documents
- [>] @research international benchmarks for citizen participation
- [!] @draft propuesta v06 con TaaS + 3 instancias + prospectiva
- [ ] @map existing government data (Etapa 1 scope)
- [ ] @draft backend architecture document
- [ ] @draft pilot consultation flow

---

## Quick Links

| Resource | Path |
|----------|------|
| Proposals | `06-projects-sic-q/propuestas/` |
| Instituto del Futuro | `06-projects-sic-q/instituto-del-futuro/` |
| Deliverables | `06-projects-sic-q/entregables/` |
| Presentations | `06-projects-sic-q/presentaciones/` |
| Benchmarks | `05-context-sic-q/benchmarks/` |
| Zoom transcripts | `06-projects-sic-q/transcripts-zooms/` |

---

*HA Syntax: `[>]` agent task, `[<]` waiting, `[?]` decision needed, `[!]` urgent, `[x]` done*
