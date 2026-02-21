# Dashboard: HA-SIC-Q

> Sistema de Inteligencia Colectiva de Querétaro

## Status: Post-talleres — Transición a operación

**Last updated:** 2026-02-20

---

## Hitos recientes

| Fecha | Hito |
|-------|------|
| 16-17 feb | 2 talleres co-diseño completados: 74 participantes, 778 ideas, 248 actores mapeados |
| 19 feb | Presentación al CONSEQRO: 4 demos en vivo, retroalimentación de ~13 consejeros |
| 19 feb | Reunión estratégica con Antonio Rangel — definición de 3 frentes operativos |
| 19-20 feb | 5 reportes completados (2 ejecutivos, 1 combinado, 1 técnico, 1 sesión CONSEQRO) |

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
| 7 | Talleres co-diseño (2 talleres, 74 participantes) | [x] Complete | Edgar + equipo |
| 8 | Reportes talleres (ejecutivos + técnico) | [x] Complete | Edgar |
| 9 | Reunión estratégica con Toño — 3 frentes | [x] Complete | Edgar |
| 9b | Presentación al CONSEQRO — 4 demos, retroalimentación consejeros | [x] Complete | Edgar + Toño |
| 10 | Propuesta v06 (actualizar con 3 frentes + datos talleres + CONSEQRO) | [!] Urgent | Edgar |
| 11 | Diseño piloto operativo con Toño | [!] Urgent | Edgar |
| 12 | Identificar datasets iniciales disponibles | [>] Next | Joaquín/Oscar |
| 13 | Estrategia de acercamiento al Secretario de Finanzas | [ ] Pending | Edgar |
| 14 | Narrativa para presentación al gobernador | [ ] Pending | Edgar |
| 15 | Formalizar Instituto del Futuro en El Consejo A.C. | [ ] Pending | - |
| 16 | Backend architecture document | [ ] Pending | - |

---

## Arquitectura SIC-Q: 3 Frentes Operativos (post-reunión Toño, 19 feb)

> El SIC-Q pasa de arquitectura conceptual (3 instancias TaaS) a estructura operativa (3 frentes). La base TaaS se mantiene, pero la implementación es incremental y orientada a productos concretos.

| Frente | Qué es | Para quién | Prioridad |
|--------|--------|------------|-----------|
| **1. Piloto operativo con Toño** | Validación real: reportes ejecutivos, indicadores, fichas municipio, resúmenes prensa | Antonio Rangel (usuario directo) | Inmediata |
| **2. Caso estratégico para el gobernador** | Demostración de valor con productos automatizados concretos | Gobernador | Post-piloto |
| **3. Herramienta de planeación con Sergio** | Integración con procesos de planeación existentes | Secretaría de Planeación | Paralelo |

**Enfoque incremental:** No comenzar con participación ciudadana como eje central. Foco en inteligencia ejecutiva automatizada. Productos > chatbot.

**Decisión clave:** Integración directa a fuentes de datos institucionales (no exportaciones estáticas).

**Aliado estratégico:** Secretario de Finanzas — controla infraestructura tecnológica y acceso a datos.

### Arquitectura TaaS (referencia)

> La base conceptual TaaS se mantiene. Los 3 frentes operativos son la ruta de implementación.

| Instancia TaaS | Mapeo a frente operativo |
|----------------|-------------------------|
| 1. Agente estratégico | → Frente 1 (piloto Toño) + Frente 2 (caso gobernador) |
| 2. Herramienta de recopilación | → Frente 3 (planeación con Sergio) |
| 3. Canales ciudadanos | → Fase posterior (deprioritizado) |

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

## Talleres Co-Diseño — Resultados (16-17 feb 2026)

| Métrica | Taller 1 | Taller 2 | Total |
|---------|----------|----------|-------|
| Participantes | 36 | 38 | 74 |
| Ideas capturadas | 347 | 431 | 778 |
| Actores mapeados | 177 | 248 | 248+ |
| Patrones transversales | 7 | 5 | 12 |

**Señales fractales (las 3 más profundas — aparecen en las 4 escalas):**
1. Desigualdad / inclusión (12/12 mesas)
2. Conectividad intersectorial (12/12 mesas)
3. Decisiones basadas en datos (11/12 mesas) — validación directa del SIC-Q

**Hallazgo clave:** El SIC-Q fue validado espontáneamente sin ser preguntado. 11/12 mesas pidieron exactamente lo que el SIC-Q propone.

**Caso de uso recomendado para primer piloto:** Agua (urgencia ciudadana creciente, datos disponibles, actores identificables).

**Reportes:**

| Reporte | Audiencia | Ubicación |
|---------|-----------|-----------|
| Ejecutivo Taller 1 | Participantes | `entregables/talleres-febrero-2026/reporte-ejecutivo-taller-1.md` |
| Ejecutivo Taller 2 | Participantes | `entregables/talleres-febrero-2026/reporte-ejecutivo-taller-2.md` |
| Ejecutivo Combinado | Participantes ambos talleres | `entregables/talleres-febrero-2026/reporte-ejecutivo-combinado.md` |
| Técnico completo | Agente SIC-Q / CONSEQRO | `entregables/talleres-febrero-2026/reporte-talleres-sic-q.md` |
| Sesión CONSEQRO | Interno / CONSEQRO | `entregables/talleres-febrero-2026/reporte-sesion-conseqro.md` |

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
| Talleres co-diseño (materiales) | `entregables/talleres-febrero-2026/` | [x] Complete |
| Reportes talleres (4 documentos) | `entregables/talleres-febrero-2026/` | [x] Complete |
| Minuta reunión Toño 19 feb | `transcripts-zooms/zoom-19.02.2026.md` | [x] Complete |
| Reporte sesión CONSEQRO (19 feb) | `entregables/talleres-febrero-2026/reporte-sesion-conseqro.md` | [x] Complete |
| Propuesta v06 (3 frentes + datos talleres + CONSEQRO) | `propuestas/` | [ ] Pending |
| Diseño piloto Toño | `entregables/` | [ ] Pending |
| Narrativa para gobernador | `presentaciones/` | [ ] Pending |
| Backend architecture | `entregables/` | [ ] Pending |

---

## Stakeholders

| Stakeholder | Role | Status |
|-------------|------|--------|
| CEPACI Querétaro | Client | Active |
| Government of Querétaro | Sponsor | Engaged |
| Secretaría de Planeación y PC | Usuario del SIC-Q (planeación) | Service relationship |
| Instituto del Futuro | Institución de prospectiva, operador del SIC-Q (TaaS) | Proposed |
| CONSEQRO (Consejo Querétaro 2050) | Consejo ciudadano — retroalimentación, legitimidad, portador propuesto | Engaged (sesión 19 feb) |

---

## Waiting For

- [x] ~~Validación de one-pager v1.8 con Antonio Rangel~~ → Reunión realizada 19 feb
- [x] ~~Definición alcance piloto con Antonio Rangel~~ → 3 frentes definidos
- [<] Definición específica del alcance del piloto con Toño (datasets, productos, frecuencia)
- [<] Estrategia acercamiento Secretario de Finanzas (infraestructura + datos)
- [<] Government alignment on Instituto del Futuro model
- [?] Decisión legal: verificación INE vs CURP
- [<] Technical infrastructure decisions (integración directa vs. exportaciones)

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
- [x] @process talleres co-diseño (reportes ejecutivos + técnico)
- [x] @capture minuta reunión Toño 19 feb
- [x] @create reporte sesión CONSEQRO (presentación + retroalimentación consejeros)
- [!] @draft propuesta v06 con 3 frentes operativos + datos talleres + feedback CONSEQRO
- [!] @design piloto operativo Toño (alcance, datos, productos, métricas)
- [>] @research international benchmarks for citizen participation
- [ ] @prepare narrativa gobernador con validación espontánea talleres
- [ ] @map existing government data (datasets iniciales)
- [ ] @draft backend architecture document

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
