# Mara — Product Vision for Oscar

*Marzo 2026*

---

## La premisa

Los modelos de lenguaje pueden hacer casi todo lo que vamos a describir aquí. Pueden analizar complejidad, recordar contexto entre sesiones, generar interfaces, coordinar agentes, y razonar sobre múltiples variables simultáneamente. Y cada seis meses se vuelven más capaces.

Eso nos beneficia directamente.

Construimos un sistema de pensamiento que corre sobre cualquier modelo — y que mejora cada vez que el modelo mejora. Lo que construimos es la estructura, los datos, y la práctica. Eso lo ponemos nosotros.

HA es nuestra apuesta. Hemos pasado años probándola en gobiernos, universidades, corporativos, organismos internacionales. Creemos que funciona. Este documento describe cómo la convertimos en un producto B2C que cualquier persona pueda usar.

---

## Qué es HA en tres párrafos

Horizons Architecture es un sistema de pensamiento y notación de complejidad. Propone que todo proyecto complejo — personal o colectivo, de una persona o de una federación — opera sobre seis dimensiones: Legacy (para qué), Community (con quién), Learning (qué se sabe y qué no), Technology (con qué herramientas), Context (qué fuerzas externas operan), y Projects (qué se puede hacer ahora).

Estas seis dimensiones no se eligieron por conveniencia. Se descubrieron empíricamente: años de práctica mostraron que ninguna puede eliminarse sin perder capacidad descriptiva, y ninguna se absorbe en otra sin distorsión. Son axiomáticas — fijas, irreducibles, y suficientes.

HA opera en tres niveles: como estructura de información (los datos del usuario se organizan en 6D × 3 capas temporales), como estructura agéntica (un agente coordinador + seis agentes dimensionales + agentes generativos bajo demanda), y como práctica (la persona desarrolla un hábito de atención que transforma cómo piensa y decide).

---

## Qué es Mara

Mara es un thinking environment para personas y máquinas — un espacio para pensar, estructurado en las seis dimensiones de HA, que se forma desde la conversación. Lo que importa son las personas. Las máquinas sostienen el espacio para que las personas piensen mejor.

Todos los productos de IA están orientados a output: respuestas, contenido, código, imágenes. Mara está orientada al proceso — la calidad del pensamiento de quien la usa.

Un environment moldea el comportamiento sin que lo notes. Una cocina bien diseñada te hace cocinar mejor. Un estudio bien diseñado te hace crear mejor. Mara tiene la forma de HA: seis dimensiones × tres capas temporales. Quien piensa dentro de ese espacio, piensa de forma más completa — porque el espacio tiene esa forma.

La interfaz se construye desde la conversación (generative UI/UX, gradual). La persona habla o escribe. El environment toma forma alrededor de lo que dijo: componentes visuales, mapas dimensionales, indicadores de valor, listas de acción. A medida que la tecnología de generative UI madura (Vercel AI SDK, React Server Components, structured output), Mara se acerca a un environment donde cada elemento visual es generado por el estado del score y el flujo de la conversación.

### Qué se siente usar Mara

**Usuario:** "Estoy pensando en dejar mi trabajo para emprender."

Un modelo puede dar una buena respuesta a eso. Puede incluso señalar lo que falta, si se lo pides.

Mara hace algo distinto: mantiene un estado persistente (el score) que acumula las seis dimensiones de la persona a lo largo del tiempo. Cuando el usuario dice esa frase, el score ya tiene semanas de historia. El environment sabe que esta persona habla de Projects constantemente y nunca ha tocado Community. Sabe que la última vez que mencionó Legacy fue hace un mes. Sabe que hay un patrón: cada vez que se bloquea en decisiones, hay algo sin resolver en sus relaciones.

La respuesta sale de ese estado acumulado. La pregunta que le devuelve viene del score, no de una instrucción genérica de "busca lo que falta."

La diferencia con pedirle a un modelo "qué me falta": el modelo te da una respuesta y se acabó. Mara es un lugar donde regresas. Donde tu pensamiento tiene forma, tiene historia, tiene dimensiones que se han atendido y dimensiones que se han ignorado durante semanas.

### El score

El score es el estado persistente del thinking environment. Guarda un diagnóstico dimensional: qué se ha atendido, qué se ha descuidado, cómo interactúan las dimensiones entre sí para esta persona.

Incluye una matriz de interacción (M₆ₓ₆) que registra cómo cada dimensión afecta a las otras para este usuario. Con el tiempo, el sistema aprende patrones: "Cada vez que esta persona se siente bloqueada en Projects, hay una tensión no resuelta en Community." El environment surfacea eso proactivamente.

### V = M × I

Valor = Meaning × Impact.

- Meaning viene de Legacy × Community (para qué y con quién).
- Impact viene de Technology × Projects (con qué y qué se hace).

Si cualquiera de los dos es cero, el valor es cero. No promedia — multiplica.

Esto funciona como diagnóstico dentro del score. Si la persona tiene claro su propósito y sus relaciones pero no ha actuado: "Tienes claridad sobre por qué importa y para quién. No has movido nada." Si está ejecutando sin propósito: "Estás haciendo cosas. No has dicho para qué."

### Qué sobrevive al modelo

Si migramos de Claude a otro modelo, el score se preserva íntegro — es una estructura de datos nuestra. El thinking environment persiste independientemente del modelo que lo alimente. Cada modelo que lea el score produce una lectura del mismo estado acumulado.

---

## Arquitectura técnica — qué construye Oscar

### El Score

```
SCORE (por usuario)
  |
  |-- Dimensions[6]
  |     legacy:    { state, entries[], tension_level }
  |     community: { graph(nodes, edges), missing_voices[] }
  |     learning:  { known[], gaps[], capabilities[] }
  |     technology:{ tools[], constraints[], frontier[] }
  |     context:   { forces[], signals[], scenarios[] }
  |     projects:  { active[], blocked[], next_actions[] }
  |
  |-- Interaction Matrix M₆ₓ₆
  |     weights[i][j] = influence of dim_i on dim_j
  |     learned_patterns[] = recurring interactions for this user
  |
  |-- Temporal Layers
  |     past:    what persists — decisions made, agreements, accumulated knowledge
  |     present: what's active — current tensions, decisions in motion
  |     future:  what presses — commitments, deadlines, emerging scenarios
  |
  |-- Value Diagnostic
        meaning = f(legacy, community)
        impact  = f(technology, projects)
        value   = meaning × impact
        alerts[] = where value approaches zero
```

Storage: PostgreSQL + JSONB en Supabase. El score es relacional y dimensional — JSONB le da flexibilidad para evolucionar sin migraciones.

### Los cinco módulos

**1. Score Reader**
Toma el input del usuario (texto o voz transcrita). Clasifica en dimensiones. Consulta el score actual. Identifica gaps. Calcula interacciones. Ensambla el contexto que va al modelo.

Esto es context engineering: el valor no está en el modelo, está en qué información le das antes de que responda. El Score Reader es nuestro context engine.

**2. Score Writer**
Después de cada respuesta del modelo, actualiza el score. Recalcula M₆ₓ₆. Actualiza V = M × I. Detecta si alguna dimensión necesita atención.

**3. LLM Layer (model-agnostic)**
El modelo recibe el contexto ensamblado por el Score Reader y devuelve: respuesta conversacional + instrucciones de actualización del score + componentes visuales sugeridos. Hoy es Claude. Mañana puede ser otro. La abstracción es una interfaz entre nuestro score engine y el modelo.

**4. Conversation Interface**
Chat + voice. La persona habla o escribe. Componentes estándar. El score engine hace el trabajo, la interfaz de captura lo presenta.

**5. Component Library**
Componentes visuales que renderizan insights del score:
- Mapa de atención dimensional (qué se ha atendido, qué no)
- Indicador de valor (V = M × I)
- Lista de acciones (desde Projects)
- Grafo de relaciones (desde Community)
- Timeline (capas temporales)
- Alertas de gap

Estos componentes se invocan según el estado del score y la conversación. El sistema decide cuándo mostrar qué.

### Arquitectura agéntica

```
Usuario
  |
  v
HA-Root (agente coordinador)
  |-- Mantiene identidad y coherencia del score
  |-- Decide qué dimensiones activar ante cada input
  |-- Sintetiza lo que reportan los agentes dimensionales
  |
  |-- Agent: Legacy      → monitorea alineación con propósito
  |-- Agent: Community   → rastrea relaciones, detecta voces ausentes
  |-- Agent: Learning    → identifica gaps de conocimiento
  |-- Agent: Technology  → evalúa herramientas y recursos
  |-- Agent: Context     → escanea señales externas
  |-- Agent: Projects    → traduce en acciones concretas
  |
  |-- Agentes generativos (bajo demanda)
        Learning detecta un gap → genera agente de investigación
        Context detecta cambio regulatorio → genera agente de análisis
        (Temporal, especializado, se disuelve cuando cumple)
```

En la primera versión (SIC-Q y Mara v1), los "agentes dimensionales" no necesitan ser procesos separados. Pueden ser prompts especializados que el Score Reader invoca según el contexto. La arquitectura multi-agente es el horizonte — el primer paso es que el score engine funcione con un solo modelo orquestado por buenos prompts.

---

## SIC-Q como primer deployment

SIC-Q (Sistema de Inteligencia Colectiva de Querétaro) es el primer deployment de este motor. Financiado por el gobierno del estado. Dos usuarios: el gobernador y Antonio Rangel.

Lo que comparten SIC-Q y Mara B2C:

| Componente | SIC-Q | Mara B2C |
|---|---|---|
| Score engine | Mismo | Mismo |
| Score Reader/Writer | Mismo core, prompts de gobernanza | Mismo core, prompts personales |
| Voice + Chat | Mismo | Mismo |
| Auth + seguridad | Row-level, nivel gobierno | Row-level, nivel consumidor |
| Component Library | Diseño fijo, profesional | Evoluciona hacia composición libre |

Lo específico de SIC-Q: conectores a datos de Querétaro, prompts de inteligencia cívica, seguridad de nivel gobierno.

Lo específico de Mara B2C: interfaz libre, onboarding dimensional, federación entre scores.

**Cada línea de código cuenta dos veces.** El score engine, el reader, el writer, la component library — todo lo que se construye para SIC-Q es el core de Mara.

---

## Separación datos / conocimiento

Principio de diseño:

- Los **datos** son privados, removibles, olvidables. Son del usuario.
- El **conocimiento** generado es abstracto, anónimo, compartible. Es del sistema.

Tres niveles de memoria:

**Working Memory** — estado de la sesión actual. Volátil. Redis/Upstash.

**Score Memory** — el score del usuario. Persistente. Patrones acumulados entre sesiones. Ejemplo: "el tema de financiamiento ha aparecido en 7 sesiones, siempre conectado con tensión en Community."

**Network Knowledge** — patrones validados, sin datos identificables, compartibles entre usuarios. Ejemplo: "cuando un usuario pregunta repetidamente sobre un tema sin tomar acción, generalmente indica que hay una tensión no resuelta en otra dimensión." Este patrón funciona para cualquier usuario.

Cuando un usuario borra sus datos, los datos desaparecen. El conocimiento permanece — anónimo, sin traza. La persona es soberana sobre su información. El sistema preserva lo que aprendió.

---

## Stack técnico

| Capa | Tecnología | Por qué |
|---|---|---|
| Frontend | Next.js 14, Tailwind, shadcn/ui | Mobile-first, componentes probados |
| Score storage | PostgreSQL + JSONB (Supabase) | Flexible, relacional, sin vendor lock |
| Embeddings | pgvector (Supabase) | Búsqueda semántica dentro del score |
| Session state | Redis (Upstash) | Working memory, rápido |
| Voice | Whisper / Deepgram | Speech-to-text |
| LLM | Claude API (abstraído) | Model-agnostic por diseño |
| Auth | Supabase Auth | Row-level security |
| Generative UI | Vercel AI SDK | Streaming + structured output |

Costo de infraestructura estimado para SIC-Q (2 usuarios): ~$285/mes.

---

## Orden de construcción

```
1. Score schema       ← definir la estructura de datos en PostgreSQL + JSONB
2. Score Reader       ← clasificación dimensional, detección de gaps, context assembly
3. Score Writer       ← actualización del score, recálculo de M₆ₓ₆ y V = M × I
4. LLM integration    ← prompts dimensionales, model-agnostic interface
5. Chat + Voice       ← interfaz conversacional (componentes estándar)
6. Component Library  ← componentes visuales que renderizan el score
7. Deploy SIC-Q       ← primer deployment real
8. Mara B2C           ← mismo core, interfaz propia, onboarding, federación
```

Los pasos 1-3 son el core. Si el score engine funciona bien, todo lo demás es interfaz.

---

## El riesgo

El riesgo es de adopción.

La mayoría de los productos de consumo piden al usuario que consuma: scroll, click, recibe. Mara pide al usuario que piense. Que se detenga. Que atienda dimensiones que preferiría ignorar. La persona tiene que querer practicar.

La apuesta: hay suficientes personas que valoran la reflexión estructurada como para sostener un producto B2C. La evidencia que tenemos es empírica — años de aplicar HA y ver que quien practica transforma cómo piensa y decide. El producto hace esa práctica escalable.

---

## Por qué construir esto

Los modelos van a seguir mejorando. Van a poder hacer más. Van a tener más memoria, más herramientas, más capacidad de razonamiento.

Nada de eso cambia lo que nosotros ponemos: una estructura de pensamiento probada, un estado persistente que es nuestro (no del proveedor), y una práctica que transforma a quien la ejerce. Cada modelo que mejora hace nuestro score engine más capaz — porque lee el mismo estado acumulado.

Construimos sobre los modelos. HA le da dirección, estructura, y acumulación. Mara es la interfaz donde eso se vuelve accesible para cualquier persona.

---

*V = M × I*
