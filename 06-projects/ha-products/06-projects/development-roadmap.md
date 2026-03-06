# Development Roadmap — Mara / SIC-Q

*Marzo 2026*

---

## Contexto

SIC-Q (gobernador + Toño) es el primer deployment. Está financiado. Todo lo que se construya para SIC-Q es el core de Mara B2C. El roadmap se organiza en fases, cada una produce algo funcional.

---

## Fase 0 — Setup (1 semana)

**Objetivo:** Repo listo, infraestructura levantada, deploy automático.

| Tarea | Detalle |
|---|---|
| Repo en GitHub | Monorepo: `/app`, `/packages/score-engine`, `/packages/prompts` |
| Next.js 14 + App Router | Tailwind, shadcn/ui |
| Supabase project | PostgreSQL + Auth + RLS |
| Vercel deploy | CI/CD desde main |
| Redis (Upstash) | Working memory |
| Variables de entorno | Claude API key, Supabase keys, Upstash |

**Entregable:** App vacía desplegada con auth funcional (magic link).

---

## Fase 1 — Score Engine (2-3 semanas)

El score es el producto. Todo lo demás depende de esto.

### 1.1 Score Schema

```sql
CREATE TABLE scores (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE score_dimensions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  score_id UUID REFERENCES scores(id) ON DELETE CASCADE,
  dimension TEXT NOT NULL, -- legacy, community, learning, technology, context, projects
  state JSONB DEFAULT '{}',
  entries JSONB DEFAULT '[]',
  tension_level FLOAT DEFAULT 0,
  last_attended TIMESTAMPTZ,
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(score_id, dimension)
);

CREATE TABLE score_interactions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  score_id UUID REFERENCES scores(id) ON DELETE CASCADE,
  from_dimension TEXT NOT NULL,
  to_dimension TEXT NOT NULL,
  weight FLOAT DEFAULT 0,
  evidence JSONB DEFAULT '[]',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(score_id, from_dimension, to_dimension)
);

CREATE TABLE score_temporal (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  score_id UUID REFERENCES scores(id) ON DELETE CASCADE,
  layer TEXT NOT NULL, -- past, present, future
  entries JSONB DEFAULT '[]',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(score_id, layer)
);

CREATE TABLE score_diagnostics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  score_id UUID REFERENCES scores(id) ON DELETE CASCADE,
  meaning FLOAT DEFAULT 0,
  impact FLOAT DEFAULT 0,
  value FLOAT DEFAULT 0, -- meaning × impact
  alerts JSONB DEFAULT '[]',
  calculated_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE scores ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own_scores" ON scores FOR ALL USING (auth.uid() = user_id);
-- (igual para todas las tablas)
```

### 1.2 Score Engine (TypeScript package)

```
packages/score-engine/
  src/
    types.ts          -- Score, Dimension, InteractionMatrix, Diagnostic
    score.ts          -- createScore(), getScore(), updateScore()
    dimensions.ts     -- getDimension(), updateDimension(), getGaps()
    interactions.ts   -- getMatrix(), updateWeight(), detectPatterns()
    diagnostics.ts    -- calculateMeaning(), calculateImpact(), calculateValue()
    temporal.ts       -- addEntry(), getLayer()
```

Funciones clave:

```typescript
// Detectar qué dimensiones NO se han atendido
function getGaps(score: Score): Dimension[]

// Recalcular M₆ₓ₆ después de cada interacción
function updateMatrix(score: Score, evidence: InteractionEvidence): void

// V = M × I
function calculateValue(score: Score): Diagnostic
```

### 1.3 Tests

Tests unitarios para cada función del score engine. El score engine debe funcionar independientemente del LLM — es lógica pura sobre datos.

**Entregable:** Score engine como package importable, con tests pasando y schema migrado en Supabase.

---

## Fase 2 — Score Reader + Writer (2 semanas)

### 2.1 Score Reader

Toma el input del usuario y ensambla el contexto para el modelo.

```typescript
async function readScore(input: string, score: Score): Promise<ScoreContext> {
  // 1. Clasificar input en dimensiones (LLM call con structured output)
  const classification = await classifyInput(input);

  // 2. Consultar estado actual de esas dimensiones
  const activeState = await getDimensionStates(score, classification.dimensions);

  // 3. Detectar gaps (dimensiones no mencionadas que necesitan atención)
  const gaps = getGaps(score);

  // 4. Leer patrones de interacción relevantes
  const patterns = getRelevantPatterns(score, classification.dimensions);

  // 5. Calcular V = M × I actual
  const diagnostic = calculateValue(score);

  // 6. Ensamblar contexto para el modelo
  return assembleContext({
    input,
    classification,
    activeState,
    gaps,
    patterns,
    diagnostic,
    temporalLayers: score.temporal
  });
}
```

La clasificación dimensional usa structured output de Claude:

```typescript
const classification = await claude.messages.create({
  model: "claude-haiku-4-5-20251001",
  system: "Clasifica el siguiente input del usuario en las dimensiones de HA...",
  messages: [{ role: "user", content: input }],
  // structured output: { dimensions: string[], temporal_layer: string, ... }
});
```

### 2.2 Score Writer

Después de cada respuesta, actualiza el score.

```typescript
async function writeScore(
  score: Score,
  input: string,
  response: string,
  classification: Classification
): Promise<ScoreUpdate> {
  // 1. Actualizar dimensiones mencionadas
  for (const dim of classification.dimensions) {
    await updateDimension(score, dim, { input, response });
  }

  // 2. Actualizar last_attended de dimensiones tocadas
  await markAttended(score, classification.dimensions);

  // 3. Si hay evidencia de interacción entre dimensiones, actualizar M₆ₓ₆
  if (classification.interactions.length > 0) {
    for (const interaction of classification.interactions) {
      await updateWeight(score, interaction.from, interaction.to, interaction.evidence);
    }
  }

  // 4. Agregar a capa temporal correspondiente
  await addTemporalEntry(score, classification.temporal_layer, { input, response });

  // 5. Recalcular V = M × I
  const diagnostic = calculateValue(score);
  await saveDiagnostic(score, diagnostic);

  return { diagnostic, gaps: getGaps(score) };
}
```

**Entregable:** Reader y Writer funcionales. Se puede enviar un texto, recibir un contexto ensamblado, y actualizar el score. Todavía sin interfaz.

---

## Fase 3 — Conversación + Prompts (2 semanas)

### 3.1 Prompts dimensionales

```
packages/prompts/
  root.md             -- Prompt del agente coordinador
  dimensions/
    legacy.md         -- Prompt de Legacy
    community.md      -- Prompt de Community
    learning.md       -- Prompt de Learning
    technology.md     -- Prompt de Technology
    context.md        -- Prompt de Context
    projects.md       -- Prompt de Projects
  sic-q/
    root-gobernador.md   -- Override para gobernador
    root-tono.md         -- Override para Toño
    civic-intelligence.md -- Prompts de inteligencia cívica
```

El prompt del root agent recibe el contexto ensamblado por el Score Reader y responde. Instrucciones clave en el prompt:

- Responde a lo que el usuario dijo
- Señala dimensiones que el usuario no está atendiendo (gaps del score)
- Si V = M × I tiene alertas, mencionarlas
- Si detecta interacción entre dimensiones, nombrarla
- Genera instrucciones de actualización para el Score Writer (structured output)

### 3.2 API endpoint

```typescript
// app/api/chat/route.ts
export async function POST(req: Request) {
  const { message, conversationId } = await req.json();
  const userId = await getAuthUser(req);

  // 1. Obtener score del usuario
  const score = await getScore(userId);

  // 2. Score Reader: ensamblar contexto
  const context = await readScore(message, score);

  // 3. Obtener historial de conversación
  const history = await getHistory(conversationId);

  // 4. LLM call con contexto del score
  const response = await claude.messages.create({
    model: "claude-sonnet-4-6",
    system: buildSystemPrompt(context),
    messages: [...history, { role: "user", content: message }],
  });

  // 5. Score Writer: actualizar score
  const update = await writeScore(score, message, response.content, context.classification);

  // 6. Guardar mensajes
  await saveMessages(conversationId, message, response.content);

  return Response.json({
    content: response.content,
    gaps: update.gaps,
    diagnostic: update.diagnostic
  });
}
```

### 3.3 Chat UI

Interfaz de chat con Vercel AI SDK (streaming). Input de texto. Sin componentes visuales del score todavía — solo la conversación.

### 3.4 Voice

Integrar Whisper o Deepgram para speech-to-text. El input de voz se transcribe y entra al mismo pipeline que el texto.

**Entregable:** Chat funcional donde el usuario habla o escribe, el sistema responde usando el score, y el score se actualiza. Se puede probar con el gobernador.

---

## Fase 4 — Componentes visuales (2 semanas)

### 4.1 Component Library

Componentes que renderizan el estado del score:

| Componente | Datos que consume | Cuándo aparece |
|---|---|---|
| `DimensionMap` | 6 dimensiones + last_attended | Cuando hay gaps visibles |
| `ValueIndicator` | V = M × I + alerts | Cuando meaning o impact se acercan a cero |
| `ActionList` | Projects.next_actions | Cuando la conversación toca Projects |
| `RelationGraph` | Community.graph | Cuando la conversación toca Community |
| `TemporalView` | Temporal layers | Cuando hay tensión entre capas temporales |
| `GapAlert` | Dimensiones desatendidas | Cuando una dimensión lleva N sesiones sin atención |

### 4.2 Generative UI (gradual)

Usar Vercel AI SDK para que el modelo sugiera qué componentes mostrar:

```typescript
const result = await streamUI({
  model: claude,
  system: buildSystemPrompt(context),
  messages: history,
  tools: {
    showDimensionMap: { /* ... */ component: DimensionMap },
    showValueIndicator: { /* ... */ component: ValueIndicator },
    showActionList: { /* ... */ component: ActionList },
    // ...
  }
});
```

El modelo decide cuándo invocar cada componente según la conversación y el score. En esta fase, los componentes tienen diseño fijo. La composición (cuáles aparecen, cuándo) es generativa.

**Entregable:** Chat con componentes visuales que aparecen según el score. Primera versión de generative UI.

---

## Fase 5 — Deploy SIC-Q (1-2 semanas)

| Tarea | Detalle |
|---|---|
| Prompts SIC-Q | Prompts de gobernanza e inteligencia cívica |
| Datos de Querétaro | Conectores a datos de talleres, reportes, actores |
| Seguridad | RLS nivel gobierno, logs de auditoría |
| Diseño SIC-Q | Línea visual para gobernador (componentes con estilo fijo) |
| Testing con Toño | Sesiones de prueba, ajustar prompts |
| Deploy producción | Dominio, SSL, monitoreo |

**Entregable:** SIC-Q en producción. Gobernador y Toño usándolo.

---

## Fase 6 — Mara B2C (post SIC-Q)

Con el core probado en SIC-Q:

| Tarea | Detalle |
|---|---|
| Onboarding dimensional | Flujo que presenta las 6 dimensiones al usuario |
| Interfaz propia | Marca Mara, diseño que evoluciona hacia generative UI/UX |
| Multi-proyecto | Un usuario puede tener múltiples scores |
| Federación | Compartir patrones entre scores sin compartir datos |
| Landing + pricing | Stripe, tiers |

---

## Resumen de fases

| Fase | Duración | Entregable |
|---|---|---|
| 0. Setup | 1 semana | Repo + infra + auth |
| 1. Score Engine | 2-3 semanas | Score como package con tests |
| 2. Reader + Writer | 2 semanas | Context assembly + score updates |
| 3. Conversación | 2 semanas | Chat + voice funcional con score |
| 4. Componentes | 2 semanas | UI con generative components |
| 5. SIC-Q | 1-2 semanas | Primer deployment en producción |
| 6. Mara B2C | continuo | Producto B2C |

**Total hasta SIC-Q en producción: ~10-12 semanas.**

Fases 1-2 son el core. Si el score engine funciona, el resto es interfaz y prompts.

---

## Para empezar mañana

1. Crear el repo (monorepo con `/app` y `/packages/score-engine`)
2. Setup Next.js + Supabase + Vercel
3. Migrar el score schema a Supabase
4. Escribir `types.ts` del score engine — definir las interfaces de Score, Dimension, InteractionMatrix, Diagnostic
5. Implementar `createScore()` y `getScore()`

Eso es Fase 0 + el inicio de Fase 1. Una semana de trabajo.
