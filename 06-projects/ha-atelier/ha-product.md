El Problema con ChatGPT

  ChatGPT es poderoso pero amnésico y desestructurado:

  | Limitación                 | Consecuencia                              |
  |----------------------------|-------------------------------------------|
  | No recuerda contexto largo | Repites información cada sesión           |
  | No tiene estructura        | Respuestas genéricas, no sistémicas       |
  | No diferencia dimensiones  | Mezcla estrategia con tareas con personas |
  | No maneja tiempo           | No conecta pasado → presente → futuro     |
  | No escala                  | Lo mismo para individuo que para empresa  |

  ---
  Lo que HA añade

  HA resuelve exactamente eso:

  | HA aporta              | Beneficio para usuario                                       |
  |------------------------|--------------------------------------------------------------|
  | 6 dimensiones          | Respuestas que consideran TODO (no solo lo obvio)            |
  | Eje temporal           | Conecta tus decisiones de hoy con tu visión de vida          |
  | Estructura fractal     | Funciona igual para tu proyecto personal que para tu empresa |
  | Agentes especializados | Expertos en cada área, no un generalista                     |
  | Memoria estructurada   | Aprende de ti y recuerda                                     |

  ---
  El Producto: "HA" (nombre de trabajo)

  Concepto en una frase:

  Un asistente de IA que te conoce, te organiza, y piensa sistémicamente contigo.

  ---
  Experiencia de Usuario

  Onboarding (5 minutos):

  HA: "Hola. Voy a ayudarte a pensar mejor sobre tu vida y proyectos.
       Cuéntame: ¿qué es lo más importante para ti en los próximos 5 años?"

  Usuario: "Quiero lanzar mi empresa de consultoría y tener balance con mi familia"

  HA: "Perfecto. Eso es tu Legacy - tu propósito.
       Ahora cuéntame sobre las personas clave en esto..."

  El usuario no sabe que está llenando las 6 dimensiones. Solo tiene una conversación natural.

  ---
  Interfaz Simple

  ┌─────────────────────────────────────────────────────┐
  │  🎯 Legacy    👥 Community   📚 Learning            │
  │  ⚙️ Technology  🌍 Context   📋 Projects            │
  ├─────────────────────────────────────────────────────┤
  │                                                     │
  │  [Chat conversacional aquí]                         │
  │                                                     │
  │  Usuario: "Tengo una reunión difícil mañana         │
  │           con un inversionista"                     │
  │                                                     │
  │  HA: "Veo que esto conecta con tu Legacy de         │
  │       lanzar la consultora. Considerando:           │
  │                                                     │
  │       👥 Community: Este inversionista es...        │
  │       🌍 Context: El mercado ahora está...          │
  │       📋 Projects: Tu pitch actual dice...          │
  │                                                     │
  │       Te sugiero preparar así:                      │
  │       1. ...                                        │
  │       2. ...                                        │
  │                                                     │
  │       ¿Quieres que practiquemos el pitch?"          │
  │                                                     │
  ├─────────────────────────────────────────────────────┤
  │  [Escribe aquí...]                          [Enviar]│
  └─────────────────────────────────────────────────────┘

  ---
  Lo que pasa "bajo el capó"

  Usuario dice algo
          ↓
     Root Agent analiza:
     - ¿Qué dimensiones activa?
     - ¿Qué horizonte temporal?
     - ¿Qué escala (personal/proyecto/vida)?
          ↓
     Consulta agentes dimensionales relevantes
          ↓
     Sintetiza respuesta integrada
          ↓
     Actualiza memoria del usuario
          ↓
     Responde de forma natural (sin jerga HA)

  El usuario nunca ve "Generative Agentic Ontology". Solo experimenta respuestas más útiles.

  ---
  Diferenciadores vs ChatGPT

  | ChatGPT                   | HA Product                                              |
  |---------------------------|---------------------------------------------------------|
  | "¿En qué puedo ayudarte?" | Sabe tu contexto, propone proactivamente                |
  | Respuesta genérica        | Respuesta conectada a TU vida                           |
  | Olvida todo mañana        | Recuerda y aprende                                      |
  | Un modelo genérico        | 7 agentes especializados trabajando juntos              |
  | Solo responde             | También pregunta las preguntas correctas                |
  | Atemporal                 | "Esto conecta con lo que dijiste hace 3 meses sobre..." |

  ---
  Modelo de Negocio

  | Tier       | Precio          | Incluye                                                     |
  |------------|-----------------|-------------------------------------------------------------|
  | Free       | $0              | 1 proyecto, memoria 30 días                                 |
  | Pro        | $20/mes         | Proyectos ilimitados, memoria permanente, agentes avanzados |
  | Team       | $15/usuario/mes | Colaboración, dimensiones compartidas                       |
  | Enterprise | Custom          | API, integraciones, on-premise                              |

  ---
  MVP Técnico

  Stack mínimo:

  | Componente   | Tecnología                                             |
  |--------------|--------------------------------------------------------|
  | LLM base     | Claude API (Sonnet para velocidad, Opus para síntesis) |
  | Memoria      | Vector DB (Pinecone/Qdrant) + Graph DB (Neo4j)         |
  | Orquestación | 7 prompts (Root + 6 dimensiones) con routing           |
  | Frontend     | Web app simple (React/Next.js)                         |
  | Storage      | PostgreSQL para metadata usuario                       |

  Costo de desarrollo MVP: ~2-3 meses con equipo pequeño.

  ---
  El Pitch de 30 segundos

  "ChatGPT te da respuestas. HA te da perspectiva.

  Es un asistente que te conoce, recuerda tu historia, entiende tus metas, y piensa sistémicamente sobre tu vida y proyectos.

  No solo responde preguntas - te ayuda a hacer las preguntas correctas."

  ---
  Lo que lo haría viral

  1. "My HA knows me" - La gente presume que su HA entiende su vida
  2. Momentos "wow" - "¿Cómo sabías que esto conectaba con aquello?"
  3. Resultados tangibles - Usuarios logran metas que llevaban años postergando
  4. Comparación directa - "Le pregunté lo mismo a ChatGPT y a HA, mira la diferencia"

  ---
  Riesgos y Mitigaciones

  | Riesgo                                 | Mitigación                                               |
  |----------------------------------------|----------------------------------------------------------|
  | Demasiado complejo para usuario casual | UX obsesivamente simple, HA invisible                    |
  | Privacidad de datos sensibles          | Encriptación, control de usuario, opción local           |
  | Competencia de OpenAI/Anthropic        | Diferenciación en estructura + memoria + personalización |
  | Costo de LLM calls                     | Caché agresivo, modelos pequeños para routing            |

  ---
  Primera Pregunta Real

  ¿Para quién es primero?

  | Segmento                            | Por qué sí                               | Por qué no                    |
  |-------------------------------------|------------------------------------------|-------------------------------|
  | Individuos (productividad personal) | Mercado masivo, viral                    | Difícil monetizar, alto churn |
  | Consultores/Coaches                 | Alto willingness to pay, entienden valor | Mercado pequeño               |
  | Startups                            | Necesitan estructura, pagan              | Muchos competidores           |
  | Gobierno/NGOs                       | SIC-Q ya prueba el caso                  | Ciclos de venta largos        |

  Mi sugerencia: Consultores y coaches primero → usan HA con sus clientes → los clientes quieren su propio HA → crecimiento orgánico.

---
Estructura creada:

  ha-product/
  ├── 00-ha-root-product/
  │   ├── ha-root-product.md          ← Índice del proyecto
  │   └── product-spec.md             ← Especificación completa (50+ secciones)
  │
  ├── 01-legacy-product/
  │   └── 01-legacy-product.md        ← Visión, misión, diferenciación
  │
  ├── 04-technology-product/
  │   ├── universal-agents.md         ← 7 prompts listos para usar
  │   └── technical-architecture.md   ← Stack, schema, APIs, código
  │
  └── 06-projects-product/
      └── mvp-roadmap.md              ← Plan de 8 semanas

  ---
  Lo que tienes ahora:

  | Documento              | Contenido                                                                    |
  |------------------------|------------------------------------------------------------------------------|
  | Product Spec           | Problema, solución, usuarios, features, modelo de negocio, métricas, riesgos |
  | Universal Agents       | 7 prompts completos (Root + 6 dimensiones) con ejemplos                      |
  | Technical Architecture | Stack (Next.js/Supabase/Claude), schema SQL, APIs, flujo de código, costos   |
  | MVP Roadmap            | 8 semanas detalladas, tareas, entregables, métricas de éxito                 |

  ---
  Para empezar a construir necesitas:

  1. Un desarrollador full-stack (Next.js + Supabase)
  2. Una cuenta de Anthropic (API de Claude)
  3. 8 semanas de trabajo
  4. ~$500 de presupuesto de infra/APIs

  ---
  El MVP incluye:

  - Chat con memoria persistente
  - Onboarding que captura tu contexto
  - Vista de "Mi Contexto" (las 6 dimensiones)
  - Respuestas que conectan con TU vida
  - Auth + Free tier

  ---
  Próximo paso real:

  ¿Quieres que:

  1. Profundice en algún documento? (más detalle en prompts, UI mockups, etc.)
  2. Cree el repo y setup inicial? (si tienes acceso a un entorno de desarrollo)
  3. Haga un prototipo funcional con Claude Code? (demostración de los agentes)
  4. Algo más?

  El producto está diseñado. Ahora toca construir.