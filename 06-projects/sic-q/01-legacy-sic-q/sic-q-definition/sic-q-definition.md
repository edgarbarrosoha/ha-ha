---
dimension: legacy
project: sic-q
type: definition
status: active
parent: "[[01-legacy-sic-q]]"
tags:
  - core-document
  - citizen-participation
  - ai-platform
---

# SIC-Q: Sistema de Inteligencia Colectiva de Querétaro

## Definition

  SIC-Q is an AI-powered Collective Intelligence System designed to transform citizen participation in state-level planning for Querétaro, Mexico. It moves beyond the traditional "suggestion box" model toward a functional platform where artificial intelligence processes, clusters, and synthesizes thousands of citizen voices into actionable intelligence for public policy.

  ---
  Core Purpose

  | Objective                     | Description                                                                                                                           |
  |-------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|
  | Orchestrate collective talent | Like the iPhone's App Store model, create a platform where citizens' ideas follow standardized rules and get processed systematically |
  | Process ideas at scale        | Use AI to analyze submissions that would otherwise require massive bureaucratic effort                                                |
  | Eliminate the "black hole"    | Ensure every expressed idea receives acknowledgment and feedback—no citizen proposal disappears without response                      |
  | Transcend political cycles    | Create an apolitical institution (Instituto del Futuro) that survives administration changes                                          |

  ---
  System Architecture: 12-Phase Citizen Journey

  Phase 1: DISEÑO (Design)

  Integration of key actors from project inception to ensure legitimacy and collective ownership. API definitions and government service connections.

  Phase 2: DESCUBRIMIENTO (Discovery)

  - Digital channels: WhatsApp, social media, website, online advertising
  - Analog channels: Community workshops, talks, in-person surveys, events

  Phase 3: REGISTRO (Registration)

  Two interaction modes:
  - MODO EXPLORA: No account required. Read-only access to idea maps, proposals, and trends
  - MODO PARTICIPA: Verified registration (email, phone, pseudonym, CURP, postal code, INE/Llave MX verification)

  Phase 3B: CONVERSIÓN (Conversion)

  AI-driven invitation to transform explorers into participants. "¿Quieres opinar?" prompt after exploration.

  Phase 4: ORIENTACIÓN (Orientation & Proactive Dialogue)

  AI assistant proactively initiates conversation ("¿Qué opinas del tráfico hoy?"), detects user intent, and guides citizens:
  - PROPONER: Submit new ideas (AI helps articulate via co-design questions)
  - IMPULSAR: Dar "like" a propuestas existentes para mostrar apoyo
  - TRANSFORMAR: Adopt and promote proposals you support
  - CONVERSAR: Two-way dialogue where the system informs citizens about state reality (using RAG)

  Phase 5: PARTICIPACIÓN (Participation)

  Three execution flows:
  | Flow       | Actions                                                                                        |
  |------------|------------------------------------------------------------------------------------------------|
  | Proponer   | AI-guided dialogue → Automatic structuring → Duplicate detection → Publication                 |
  | Impulsar   | Explore idea map → Filter by topic/location → Like para apoyar → Comment (optional)            |
  | Transformar| Select proposal → Get personal tracking link → Share on social/WhatsApp → See adoption metrics |

  Las propuestas con mayor impulso (likes) entran a un proceso de revisión por un comité de la Secretaría de Participación Ciudadana, el Instituto del Futuro o consejos ciudadanos relevantes, según el tema.

  Phase 6: ALMACENAMIENTO (Storage)

  Two databases:
  - Participation Database: All proposals, votes, comments, semantic clusters, user data
  - External Knowledge Base: State planning documents, prior surveys, INEGI data, sociodemographic info, historical reports, QRO2050 Plan

  Phase 7: SENSE-MAKING

  Collective Intelligence Engine processes both databases:
  - Semantic clustering
  - Emergent consensus detection
  - Collective priority identification
  - Temporal trend analysis
  - Similar proposal synthesis

  Phase 8: ANÁLISIS HA (Horizons Architecture Analysis)

  Horizons Architecture (HA) es un marco teórico que integra ciencia de la complejidad, inteligencia híbrida y pensamiento sistémico para equilibrar complejidad operativa de corto plazo con transformación de largo plazo. Se compone de:
  - Taxonomía dimensional fractal, organizada por ejes de Tiempo y Complejidad Simultánea, para estructurar información, tareas y agentes a través de escalas.
  - Ontología agentiva generativa: subagentes de IA dinámicos bajo supervisión humana e interpretativa.
  - Coordinación temporal no lineal: conecta historia, datos en tiempo real y escenarios de futuro.

  Dimensiones de la taxonomía (preservadas en cada escala):
  | Dimensión   | Enfoque                                      |
  |-------------|----------------------------------------------|
  | Legado      | Historical continuity and long-term vision   |
  | Comunidad   | Stakeholder engagement and social impact     |
  | Aprendizaje | Knowledge generation and capacity building   |
  | Tecnología  | Technical feasibility and innovation         |
  | Contexto    | Environmental, regulatory, political factors |
  | Proyectos   | Actionable implementation pathways           |

  Cada propuesta y clúster se evalúa con estas dimensiones para ofrecer una visión sistémica y trazable.

  Phase 9: INFORMES (Reports)

  Structured collective intelligence reports presenting:
  - Findings and citizen priorities
  - Viable proposals
  - Action recommendations for decision-makers

  Phase 10: GOBIERNO (Government)

  Two receiving bodies:
  - Secretaría de Planeación y Participación Ciudadana: Receives reports, manages "Human Handoff" (escalated complex cases), evaluates viability, and generates official responses.
  - Instituto del Futuro: Autonomous body that transcends administrations, ensures system continuity, links collective intelligence to long-term policy

  Phase 11: FEEDBACK (Retroalimentación)

  System notifies citizens about proposal status:
  - En revisión técnica (Under technical review)
  - Aprobada para implementación (Approved for implementation)
  - Requiere más apoyo (Needs more support)
  - No viable con explicación (Not viable—with explanation)

  Phase 12: CICLO VIRTUOSO (Virtuous Cycle)

  Feedback → Trust → More participation → Better collective intelligence → System strengthens with use

  ---
  Technical Stack

  | Component             | Technology                                                                                                           |
  |-----------------------|----------------------------------------------------------------------------------------------------------------------|
  | Text Processing       | Embedding models transform free-text into numeric vectors                                                            |
  | Storage               | Vector databases (Pinecone, Milvus) for semantic similarity                                                          |
  | Clustering            | Semantic grouping (e.g., 500 people discussing "safety" and "streetlights" cluster together despite different words) |
  | Visualization         | Real-time priority heatmaps                                                                                          |
  | Knowledge Integration | RAG (Retrieval Augmented Generation) + Knowledge Graphs                                                              |
  | Multi-format Input    | Text, voice, images, video, PDF                                                                                      |
  | Channels              | Web platform, WhatsApp integration, mobile app                                                                       |

  ---
  Key Differentiators from Traditional Systems

  | Traditional Method                                | SIC-Q + IA                                 |
  |---------------------------------------------------|--------------------------------------------|
  | Ideas go to thematic councils (bureaucracy)       | Ideas processed automatically by AI        |
  | Low participation (20-200 people at forums)       | Scalable to thousands via mobile/WhatsApp  |
  | No feedback to citizens                           | Complete traceability and status updates   |
  | Bound to political cycles                         | Institutionalized via Instituto del Futuro |
  | Siloed by department                              | Cross-cutting semantic analysis            |
  | Manual processing (75,000 days for UK equivalent) | Real-time clustering and synthesis         |

  ---
  Institutional Framework

  Three pillars Antonio Rangel wants to establish:

  1. Herramienta (Tool): The AI platform that orchestrates participation
  2. Documento Legal (Legal Document): Constitutional reform establishing 30-year planning horizons (already passed unanimously)
  3. Validación Social/Política (Social/Political Validation): Multi-party buy-in (Morena, Verde, PRI, PAN) to ensure continuity

  ---
  Success Criteria

  From stakeholder interviews, success means:

  - A high school student can spend an afternoon "playing" with the tool, asking questions and contributing ideas
  - Any expressed idea receives acknowledgment—never falls into a void
  - The system is so easy that participation becomes accessible to working parents who can't attend forums
  - Citizen names are recorded for potential recognition (memorial of participants)
  - The platform serves as both input (collecting ideas) and output (providing strategic information via conversational AI about demographics, economic trends, state priorities)

  ---
  Global Benchmarks Informing SIC-Q

  The project has studied 50+ international implementations including:
  - vTaiwan (Pol.is integration)
  - CitizenLab (Belgium) - Sensemaking AI
  - DIPAS Hamburg (Germany) - Geolocation + clustering
  - Chatico Bogotá (Colombia) - WhatsApp + 3.6M conversations
  - e-Cidadania (Brazil) - AI tagging for legislative Q&A

  ---
  This definition synthesizes all available project documentation into an actionable reference for understanding SIC-Q's vision, architecture, and implementation strategy.
