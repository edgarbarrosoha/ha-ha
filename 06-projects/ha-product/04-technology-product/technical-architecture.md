---
dimension: technology
project: ha-product
type: architecture
status: draft
version: 0.1
---

# HA Technical Architecture

## Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                         FRONTEND                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐              │
│  │    Chat     │  │  Dimensions │  │   Timeline  │              │
│  │  Interface  │  │    View     │  │    View     │              │
│  └──────┬──────┘  └──────┬──────┘  └──────┬──────┘              │
└─────────┼────────────────┼────────────────┼─────────────────────┘
          │                │                │
          └────────────────┼────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                          API LAYER                               │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    /api/chat                             │    │
│  │                    /api/context                          │    │
│  │                    /api/timeline                         │    │
│  └─────────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                    ORCHESTRATION LAYER                           │
│                                                                  │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │                    ROOT AGENT                            │    │
│  │  - Analyzes incoming message                             │    │
│  │  - Routes to dimensional agents                          │    │
│  │  - Synthesizes response                                  │    │
│  └───────────────────────┬─────────────────────────────────┘    │
│                          │                                       │
│    ┌──────────┬──────────┼──────────┬──────────┬──────────┐     │
│    ▼          ▼          ▼          ▼          ▼          ▼     │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│ │LEGACY│ │COMMUN│ │LEARN │ │ TECH │ │CONTXT│ │PROJCT│          │
│ │Agent │ │Agent │ │Agent │ │Agent │ │Agent │ │Agent │          │
│ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘ └──────┘          │
└─────────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                      DATA LAYER                                  │
│                                                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │   PostgreSQL    │  │   Vector DB     │  │    Redis        │  │
│  │                 │  │   (Qdrant)      │  │                 │  │
│  │  - Users        │  │                 │  │  - Sessions     │  │
│  │  - Dimensions   │  │  - Embeddings   │  │  - Cache        │  │
│  │  - Timeline     │  │  - Similarity   │  │  - Rate limits  │  │
│  │  - Billing      │  │    search       │  │                 │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────────┐
│                     EXTERNAL SERVICES                            │
│                                                                  │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │  Anthropic API  │  │     Stripe      │  │   Resend        │  │
│  │  (Claude)       │  │   (Billing)     │  │   (Email)       │  │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Stack Tecnológico

### MVP Stack

| Layer | Technology | Justificación |
|-------|------------|---------------|
| **Frontend** | Next.js 14 (App Router) | SSR, API routes, React |
| **Styling** | Tailwind + shadcn/ui | Rápido, bonito, accesible |
| **Backend** | Next.js API Routes | Simplicidad, mismo deploy |
| **Database** | PostgreSQL (Supabase) | Relacional, auth incluido, realtime |
| **Vector DB** | Qdrant (cloud) | Embeddings para semantic search |
| **Cache** | Redis (Upstash) | Serverless, bajo costo |
| **LLM** | Anthropic Claude | Mejor razonamiento, más confiable |
| **Auth** | Supabase Auth | Simple, integrado |
| **Payments** | Stripe | Estándar |
| **Hosting** | Vercel | Deploy simple, edge functions |
| **Email** | Resend | Simple, buen DX |

### Costos Estimados (MVP, 1000 users)

| Servicio | Costo/mes |
|----------|-----------|
| Vercel Pro | $20 |
| Supabase Pro | $25 |
| Qdrant Cloud | $25 |
| Upstash Redis | $10 |
| Anthropic API | ~$500 (variable) |
| Stripe | 2.9% + fees |
| Resend | $20 |
| **Total** | ~$600/mes + API |

---

## Schema de Base de Datos

```sql
-- Users
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  subscription_tier TEXT DEFAULT 'free', -- free, pro, coach, team
  subscription_status TEXT DEFAULT 'active'
);

-- Dimensions (el contexto del usuario organizado)
CREATE TABLE dimensions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  dimension TEXT NOT NULL, -- legacy, community, learning, technology, context, projects
  content JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, dimension)
);

-- Example content for 'legacy' dimension:
-- {
--   "vision": "Quiero construir una empresa que...",
--   "values": ["autonomía", "impacto", "familia"],
--   "goals_5yr": ["Lanzar startup", "Casa propia"],
--   "goals_1yr": ["Ahorrar $X", "Terminar certificación"]
-- }

-- Conversations
CREATE TABLE conversations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  title TEXT, -- auto-generated summary
  project_id UUID REFERENCES projects(id) -- optional, if tied to a project
);

-- Messages
CREATE TABLE messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  conversation_id UUID REFERENCES conversations(id) ON DELETE CASCADE,
  role TEXT NOT NULL, -- user, assistant
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  dimensions_used TEXT[], -- ['legacy', 'community']
  metadata JSONB DEFAULT '{}'
);

-- Projects (proyectos del usuario)
CREATE TABLE projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  description TEXT,
  status TEXT DEFAULT 'active', -- active, paused, completed, archived
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  dimensions JSONB DEFAULT '{}' -- project-specific dimension content
);

-- Timeline events
CREATE TABLE timeline_events (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  event_type TEXT NOT NULL, -- conversation, decision, milestone, update
  title TEXT NOT NULL,
  summary TEXT,
  dimensions_touched TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW(),
  metadata JSONB DEFAULT '{}'
);

-- Indexes
CREATE INDEX idx_dimensions_user ON dimensions(user_id);
CREATE INDEX idx_messages_conversation ON messages(conversation_id);
CREATE INDEX idx_projects_user ON projects(user_id);
CREATE INDEX idx_timeline_user ON timeline_events(user_id, created_at DESC);
```

---

## API Endpoints

### Chat

```typescript
// POST /api/chat
interface ChatRequest {
  message: string;
  conversation_id?: string; // optional, creates new if not provided
  project_id?: string; // optional, scopes to project
}

interface ChatResponse {
  message: string;
  conversation_id: string;
  dimensions_used: string[];
  context_updates?: Record<string, any>; // if HA learned something new
}
```

### Context (Dimensions)

```typescript
// GET /api/context
// Returns all dimensions for user

// GET /api/context/:dimension
// Returns specific dimension

// PATCH /api/context/:dimension
interface UpdateDimensionRequest {
  content: Record<string, any>; // partial update
}
```

### Projects

```typescript
// GET /api/projects
// POST /api/projects
// GET /api/projects/:id
// PATCH /api/projects/:id
// DELETE /api/projects/:id
```

### Timeline

```typescript
// GET /api/timeline
interface TimelineParams {
  limit?: number;
  offset?: number;
  type?: string; // filter by event type
}
```

---

## Flujo de Chat (Detallado)

```typescript
async function handleChat(userId: string, message: string, conversationId?: string) {
  // 1. Get user context
  const userContext = await getUserContext(userId);

  // 2. Get conversation history (last N messages)
  const history = conversationId
    ? await getConversationHistory(conversationId, 10)
    : [];

  // 3. Build root agent prompt with context
  const rootPrompt = buildRootPrompt(userContext, history);

  // 4. First LLM call: Root agent analysis
  const analysis = await claude.chat({
    model: 'claude-3-5-haiku-20241022', // fast model for routing
    system: rootPrompt,
    messages: [{ role: 'user', content: message }],
    response_format: { type: 'json' } // structured output
  });

  // analysis = { dimensions: ['legacy', 'projects'], temporal: 'present', ... }

  // 5. For each relevant dimension, get dimensional insight
  const insights: Record<string, string> = {};

  for (const dim of analysis.dimensions) {
    const dimPrompt = buildDimensionalPrompt(dim, userContext[dim]);

    const insight = await claude.chat({
      model: 'claude-3-5-haiku-20241022',
      system: dimPrompt,
      messages: [{ role: 'user', content: `Analyze: ${message}` }]
    });

    insights[dim] = insight;
  }

  // 6. Final LLM call: Synthesis (use Sonnet for quality)
  const synthesisPrompt = buildSynthesisPrompt(userContext, insights);

  const response = await claude.chat({
    model: 'claude-sonnet-4-20250514',
    system: synthesisPrompt,
    messages: [...history, { role: 'user', content: message }]
  });

  // 7. Check if HA learned new context
  const contextUpdates = extractContextUpdates(response);

  if (contextUpdates) {
    await updateUserContext(userId, contextUpdates);
  }

  // 8. Save to database
  const convoId = conversationId || await createConversation(userId);
  await saveMessage(convoId, 'user', message);
  await saveMessage(convoId, 'assistant', response.content, analysis.dimensions);

  // 9. Create timeline event if significant
  if (analysis.significant) {
    await createTimelineEvent(userId, {
      type: 'conversation',
      title: summarize(message),
      dimensions: analysis.dimensions
    });
  }

  return {
    message: response.content,
    conversation_id: convoId,
    dimensions_used: analysis.dimensions,
    context_updates: contextUpdates
  };
}
```

---

## Optimizaciones de Costo

### 1. Model Selection por Tarea

| Tarea | Modelo | Costo/1K tokens |
|-------|--------|-----------------|
| Routing/Analysis | Haiku | $0.00025 |
| Dimensional insights | Haiku | $0.00025 |
| Final synthesis | Sonnet | $0.003 |
| Simple queries | Haiku only | $0.00025 |

### 2. Caching

```typescript
// Cache frequent context lookups
const userContext = await redis.get(`context:${userId}`)
  || await fetchAndCacheContext(userId);

// Cache common responses
const cacheKey = hash(message + relevantContext);
const cached = await redis.get(`response:${cacheKey}`);
if (cached) return cached;
```

### 3. Batching

Para timeline events y context updates, batch writes cada 5 segundos en lugar de cada mensaje.

---

## Seguridad y Privacidad

### Datos Sensibles

- Encriptar `dimensions.content` at rest (Supabase encryption)
- No loguear contenido de mensajes en production
- User puede exportar y borrar todos sus datos

### Auth Flow

```
1. Email magic link (Supabase Auth)
2. JWT en cookie httpOnly
3. API routes verifican JWT
4. Row Level Security en Supabase
```

### RLS Policies

```sql
-- Users can only see their own data
CREATE POLICY "Users see own data" ON dimensions
  FOR ALL USING (auth.uid() = user_id);

CREATE POLICY "Users see own conversations" ON conversations
  FOR ALL USING (auth.uid() = user_id);

-- etc for all tables
```

---

## Folder Structure (Next.js)

```
ha-app/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── chat/
│   │   │   └── [conversationId]/
│   │   ├── context/
│   │   │   └── [dimension]/
│   │   ├── projects/
│   │   │   └── [projectId]/
│   │   └── timeline/
│   ├── api/
│   │   ├── chat/
│   │   ├── context/
│   │   ├── projects/
│   │   └── timeline/
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── chat/
│   ├── context/
│   ├── projects/
│   └── ui/
├── lib/
│   ├── agents/
│   │   ├── root.ts
│   │   ├── legacy.ts
│   │   ├── community.ts
│   │   └── ...
│   ├── db/
│   ├── llm/
│   └── utils/
├── prompts/
│   ├── root.md
│   ├── legacy.md
│   └── ...
└── types/
```

---

## MVP Scope

### Semana 1-2: Foundation
- [ ] Setup proyecto Next.js + Supabase
- [ ] Auth flow
- [ ] Database schema
- [ ] Basic UI layout

### Semana 3-4: Core Chat
- [ ] Root agent prompt
- [ ] 6 dimensional prompts
- [ ] Chat API endpoint
- [ ] Chat UI

### Semana 5-6: Context
- [ ] Onboarding flow (captura inicial de dimensiones)
- [ ] Context view (ver/editar dimensiones)
- [ ] Context update from conversations

### Semana 7-8: Polish
- [ ] Timeline view
- [ ] Projects (basic)
- [ ] Testing con beta users
- [ ] Bug fixes

### Launch
- [ ] Pricing + Stripe
- [ ] Landing page
- [ ] Invite first 100 users

## Connections
- [[ha-root-product]]
