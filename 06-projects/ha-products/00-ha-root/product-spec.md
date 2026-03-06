---
dimension: root
project: ha-product
type: specification
status: draft
version: 0.1
created: 2025-12-25
---

# HA Product Specification

## 1. Problema

### El usuario actual de ChatGPT experimenta:

| Fricción | Impacto |
|----------|---------|
| **Amnesia** | Repite contexto cada sesión |
| **Respuestas genéricas** | No conectadas a SU vida |
| **Pensamiento lineal** | No considera múltiples dimensiones |
| **Sin temporalidad** | No conecta pasado → presente → futuro |
| **Una sola escala** | Mismo approach para tarea simple y decisión de vida |

### La consecuencia:

> El usuario tiene un asistente poderoso pero que no lo conoce, no lo entiende, y no piensa como un verdadero advisor.

---

## 2. Solución

### HA es un asistente que:

1. **Te conoce** - Memoria persistente organizada por dimensiones
2. **Piensa sistémicamente** - Considera Legacy, Community, Learning, Technology, Context, Projects
3. **Conecta temporalmente** - Pasado (lecciones) → Presente (acción) → Futuro (visión)
4. **Escala contigo** - De tarea a proyecto a vida
5. **Mejora contigo** - Aprende de tu feedback

### La experiencia:

```
Usuario: "Tengo una decisión difícil sobre cambiar de trabajo"

ChatGPT: "Aquí hay 5 factores a considerar: 1. Salario..."
         [Respuesta genérica que aplica a cualquiera]

HA: "Entiendo. Esto conecta con tu Legacy de
     [cita lo que el usuario dijo sobre sus metas].

     Considerando:
     - Tu Community: [menciona personas relevantes que el usuario ha nombrado]
     - Tu Context: [situación actual que HA conoce]
     - Tus Projects actuales: [compromisos existentes]

     Las preguntas que creo deberías hacerte son:
     1. ¿Este cambio te acerca a [meta específica del usuario]?
     2. ¿Cómo afecta a [persona importante mencionada]?
     3. ...

     ¿Quieres explorar alguna de estas?"
```

---

## 3. Usuarios Objetivo

### Segmento Primario: "Profesionales Intencionales"

| Característica | Descripción |
|----------------|-------------|
| **Demografía** | 28-45 años, profesionales, urbanos |
| **Psicografía** | Valoran crecimiento personal, tienen metas claras pero luchan con ejecución |
| **Comportamiento** | Usan apps de productividad, journaling, coaches o terapeutas |
| **Pain point** | "Tengo mil herramientas pero ninguna me entiende" |
| **Willingness to pay** | $15-30/mes por valor real |

### Segmento Secundario: "Consultores y Coaches"

| Característica | Descripción |
|----------------|-------------|
| **Uso** | Usan HA con sus clientes como herramienta de trabajo |
| **Valor** | Estructura sus sesiones, memoria de clientes, seguimiento |
| **Potencial** | Cada coach trae N clientes → crecimiento viral |

### Segmento Futuro: "Equipos y Organizaciones"

| Característica | Descripción |
|----------------|-------------|
| **Uso** | HA compartido para proyectos de equipo |
| **Valor** | Alineación, memoria institucional, coordinación |

---

## 4. Propuesta de Valor

### Para el usuario:

> "Finalmente un asistente que me conoce. No empiezo de cero cada vez."

### Diferenciadores:

| vs ChatGPT | vs Notion AI | vs Personal.ai |
|------------|--------------|----------------|
| Memoria estructurada | Pensamiento sistémico | Agentes especializados |
| No solo Q&A | No solo documentos | Temporal (pasado/presente/futuro) |
| Proactivo | Integrado a tu vida | Framework probado (HA) |

---

## 5. Funcionalidades Core

### MVP (v1.0)

| Feature | Descripción | Prioridad |
|---------|-------------|-----------|
| **Onboarding conversacional** | 5 min para capturar contexto inicial (Legacy, Community básico) | P0 |
| **Chat con memoria** | Conversación que recuerda contexto previo | P0 |
| **Vista de dimensiones** | Ver/editar lo que HA sabe de ti por dimensión | P0 |
| **Conexiones explícitas** | HA menciona cómo conecta respuesta con tu contexto | P0 |
| **Un proyecto** | Manejar un proyecto/meta con las 6 dimensiones | P0 |

### v1.5

| Feature | Descripción | Prioridad |
|---------|-------------|-----------|
| **Múltiples proyectos** | Varios proyectos con contexto separado | P1 |
| **Timeline** | Vista temporal de tu historia con HA | P1 |
| **Sugerencias proactivas** | HA sugiere sin que preguntes | P1 |
| **Exportar** | Bajar tu data en formato estructurado | P1 |

### v2.0

| Feature | Descripción | Prioridad |
|---------|-------------|-----------|
| **Colaboración** | Compartir proyecto con otros | P2 |
| **Integraciones** | Calendar, email, Notion | P2 |
| **API** | Para desarrolladores/coaches | P2 |
| **Voz** | Interacción por voz | P2 |

---

## 6. Arquitectura de Agentes

### Los 7 Agentes Universales

```
                    ┌─────────────────┐
                    │   ROOT AGENT    │
                    │  (Orquestador)  │
                    └────────┬────────┘
                             │
        ┌────────┬───────┬───┴───┬───────┬────────┐
        ▼        ▼       ▼       ▼       ▼        ▼
   ┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐
   │ LEGACY ││COMMUNITY││LEARNING││TECHNOLOGY││CONTEXT ││PROJECTS│
   │ Agent  ││ Agent  ││ Agent  ││  Agent  ││ Agent  ││ Agent  │
   └────────┘└────────┘└────────┘└────────┘└────────┘└────────┘
```

### Flujo de una consulta:

```
Usuario: "¿Debería aceptar esta oferta de trabajo?"
                         │
                         ▼
              ┌─────────────────────┐
              │     ROOT AGENT      │
              │                     │
              │ Analiza:            │
              │ - Dimensiones: ALL  │
              │ - Tiempo: Presente  │
              │   + Futuro          │
              │ - Escala: Vida      │
              └──────────┬──────────┘
                         │
         ┌───────┬───────┼───────┬───────┐
         ▼       ▼       ▼       ▼       ▼
      Legacy  Community Context Projects Learning
         │       │       │       │       │
         ▼       ▼       ▼       ▼       ▼
    "¿Alinea  "¿Cómo   "Mercado "Proyectos "¿Qué
     con tu   afecta a  laboral  actuales   skills
     visión?" familia?" actual"  en riesgo" ganarías?"
         │       │       │       │       │
         └───────┴───────┴───┬───┴───────┘
                             │
                             ▼
              ┌─────────────────────┐
              │   ROOT AGENT        │
              │   Sintetiza en      │
              │   respuesta         │
              │   integrada         │
              └─────────────────────┘
```

---

## 7. Modelo de Datos

### Estructura por Usuario

```yaml
user:
  id: uuid
  created: timestamp

  # Las 6 dimensiones como "buckets" de memoria
  dimensions:
    legacy:
      vision: "texto libre de lo que quiere en la vida"
      values: ["autonomía", "familia", "impacto"]
      goals_5yr: ["lanzar empresa", "casa propia"]
      goals_1yr: ["ahorrar X", "terminar certificación"]

    community:
      people:
        - name: "María"
          relation: "esposa"
          context: "apoya mis proyectos, preocupada por estabilidad"
        - name: "Carlos"
          relation: "socio potencial"
          context: "experto en ventas, interesado en colaborar"
      organizations: [...]

    learning:
      skills_current: ["programación", "diseño"]
      skills_developing: ["ventas", "finanzas"]
      lessons_learned:
        - date: "2025-01"
          lesson: "No empezar proyectos sin validar mercado"

    technology:
      tools_uses: ["Notion", "Figma", "VS Code"]
      preferences: ["prefiere CLI sobre GUI"]

    context:
      current_situation: "empleado pero explorando emprendimiento"
      market_notes: [...]
      constraints: ["visa de trabajo limita opciones"]

    projects:
      - name: "Side project app"
        status: "en pausa"
        blockers: ["tiempo", "claridad de MVP"]
      - name: "Certificación AWS"
        status: "activo"
        progress: "60%"

  # Historial temporal
  timeline:
    - date: "2025-01-15"
      type: "conversation"
      summary: "Exploró opciones de cambio de carrera"
      dimensions_touched: ["legacy", "context", "projects"]
    - date: "2025-02-01"
      type: "decision"
      summary: "Decidió pausar side project"
      rationale: "Foco en certificación primero"
```

---

## 8. UX/UI Principles

### Principios de Diseño

| Principio | Implementación |
|-----------|----------------|
| **HA invisible** | Usuario no necesita saber del framework, solo experimenta el valor |
| **Conversación primero** | El chat es la interfaz principal, todo lo demás es secundario |
| **Transparencia de contexto** | Usuario puede ver/editar lo que HA sabe |
| **Conexiones explícitas** | HA siempre dice POR QUÉ sugiere algo |
| **Control del usuario** | Puede borrar, editar, exportar su data |

### Pantallas Core

1. **Chat** - Interfaz principal de conversación
2. **Mi Contexto** - Vista de las 6 dimensiones con lo que HA sabe
3. **Timeline** - Historia de interacciones y decisiones
4. **Proyecto** - Vista enfocada en un proyecto específico
5. **Settings** - Preferencias, privacidad, export

---

## 9. Modelo de Negocio

### Pricing

| Tier | Precio | Límites | Target |
|------|--------|---------|--------|
| **Free** | $0 | 50 msgs/mes, 1 proyecto, 30 días memoria | Trial |
| **Pro** | $19/mes | Ilimitado, memoria permanente, múltiples proyectos | Individuos |
| **Coach** | $49/mes | Todo Pro + 10 clientes, branding | Consultores |
| **Team** | $15/user/mes | Colaboración, admin, analytics | Equipos |

### Unit Economics (Pro tier)

| Métrica | Valor | Notas |
|---------|-------|-------|
| Precio | $19/mes | |
| Costo LLM | ~$3/mes | Asumiendo ~100 queries, mix Haiku/Sonnet |
| Costo infra | ~$1/mes | DB, storage, compute |
| Gross margin | ~79% | Saludable para SaaS |

### Growth Model

```
Consultores/Coaches (pagan $49)
         │
         │ usan con clientes
         ▼
Clientes experimentan HA
         │
         │ quieren su propio
         ▼
Se suscriben a Pro ($19)
         │
         │ refieren amigos
         ▼
Crecimiento orgánico
```

---

## 10. Métricas de Éxito

### North Star Metric

> **"Weekly Active Users que reportan que HA los entiende"**
> (Medido con micro-survey: "¿HA entendió tu contexto hoy?" 1-5)

### Métricas de Producto

| Categoría | Métrica | Target MVP |
|-----------|---------|------------|
| **Engagement** | WAU/MAU | >40% |
| **Retention** | D7 retention | >50% |
| **Value** | "HA me entiende" score | >4.0/5 |
| **Growth** | Referrals/user | >0.5 |

### Métricas de Negocio

| Métrica | Target Año 1 |
|---------|--------------|
| MRR | $50K |
| Paying users | 2,000 |
| CAC | <$30 |
| LTV | >$200 |

---

## 11. Riesgos y Mitigaciones

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|--------------|---------|------------|
| **OpenAI/Anthropic lanzan similar** | Alta | Alto | Diferenciación en framework HA, comunidad, nicho |
| **Usuarios no ven valor vs ChatGPT** | Media | Alto | Onboarding que demuestre diferencia inmediata |
| **Costo de LLM insostenible** | Media | Medio | Caching agresivo, modelos pequeños para routing |
| **Privacidad/trust** | Media | Alto | Transparencia total, export, opción de borrar |
| **Churn alto** | Alta | Medio | Engagement loops, valor acumulativo con el tiempo |

---

## 12. Roadmap

### Q1 2025: Foundation

- [ ] MVP funcional (chat + memoria + 1 proyecto)
- [ ] 100 beta users (invitados)
- [ ] Iteración basada en feedback

### Q2 2025: Launch

- [ ] Launch público
- [ ] Pricing live
- [ ] Target: 500 paying users

### Q3 2025: Growth

- [ ] Coach tier
- [ ] Múltiples proyectos
- [ ] Target: 1,500 paying users

### Q4 2025: Scale

- [ ] Team features
- [ ] Integraciones básicas
- [ ] Target: 3,000 paying users

---

## 13. Equipo Necesario

### MVP (3 personas)

| Rol | Responsabilidad |
|-----|-----------------|
| **Full-stack dev** | Frontend + backend + infra |
| **AI/Prompt engineer** | Agentes, memoria, calidad de respuestas |
| **Product/Design** | UX, onboarding, growth |

### Post-MVP (+2)

| Rol | Cuándo |
|-----|--------|
| **Growth/Marketing** | Al launch público |
| **Customer Success** | Con primeros 100 paying |

---

## Siguiente Paso

Construir el MVP técnico:
1. Definir los 7 prompts universales
2. Arquitectura de memoria
3. UI mínima (chat + dimensiones)
4. Deploy y beta cerrada


## Connections
- [[ha-root-product]]
