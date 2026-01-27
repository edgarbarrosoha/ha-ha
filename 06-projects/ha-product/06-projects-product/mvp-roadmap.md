---
dimension: projects
project: ha-product
type: roadmap
status: active
---

# HA Product — MVP Roadmap

## Scope del MVP

### Incluido

- [ ] Chat con memoria persistente
- [ ] Onboarding que captura contexto inicial
- [ ] Vista de "Mi Contexto" (6 dimensiones)
- [ ] 1 proyecto activo
- [ ] Respuestas que conectan con contexto del usuario
- [ ] Auth (email magic link)
- [ ] Free tier funcional

### Excluido del MVP

- Múltiples proyectos
- Colaboración/teams
- Timeline view
- Integraciones externas
- Voz
- Mobile app

---

## Timeline (8 semanas)

### Semana 1-2: Foundation

| Tarea | Owner | Status |
|-------|-------|--------|
| Setup Next.js + Tailwind + shadcn | Dev | |
| Setup Supabase (DB + Auth) | Dev | |
| Crear schema de base de datos | Dev | |
| Diseñar UI básica (Figma) | Design | |
| Auth flow completo | Dev | |

**Entregable:** App desplegada con login funcional

### Semana 3-4: Core Chat

| Tarea | Owner | Status |
|-------|-------|--------|
| Implementar Root Agent prompt | AI | |
| Implementar 6 prompts dimensionales | AI | |
| API endpoint /api/chat | Dev | |
| UI de chat | Dev | |
| Orquestación de agentes | Dev | |
| Guardar conversaciones en DB | Dev | |

**Entregable:** Chat funcional que responde (sin contexto aún)

### Semana 5-6: Context & Memory

| Tarea | Owner | Status |
|-------|-------|--------|
| Diseñar flujo de onboarding | Design | |
| Implementar onboarding (captura inicial) | Dev | |
| Vista de "Mi Contexto" | Dev | |
| Edición de dimensiones | Dev | |
| Inyectar contexto en prompts | Dev | |
| Extraer nuevos contextos de conversaciones | AI | |

**Entregable:** Chat que conoce al usuario y aprende

### Semana 7-8: Polish & Beta

| Tarea | Owner | Status |
|-------|-------|--------|
| Testing interno exhaustivo | All | |
| Refinar prompts basado en testing | AI | |
| Bug fixes | Dev | |
| Landing page | Design | |
| Invitar 50 beta users | Product | |
| Feedback collection | Product | |

**Entregable:** Beta cerrada con usuarios reales

---

## Post-MVP (siguiente sprint)

### v1.1 (2 semanas)

- [ ] Timeline view básico
- [ ] Múltiples proyectos
- [ ] Mejoras de prompts basadas en feedback

### v1.2 (2 semanas)

- [ ] Stripe integration
- [ ] Pro tier
- [ ] Export de datos

### v1.5 (4 semanas)

- [ ] Coach tier
- [ ] Onboarding mejorado
- [ ] Sugerencias proactivas

---

## Métricas de Éxito del MVP

| Métrica | Target |
|---------|--------|
| Beta users activos | 30/50 (60%) |
| Conversaciones promedio por user | >10 |
| "HA me entiende" score | >3.5/5 |
| NPS | >30 |
| Bugs críticos | 0 |

---

## Recursos Necesarios

### Equipo Mínimo

| Rol | Dedicación | Quién |
|-----|------------|-------|
| Full-stack Dev | 100% | TBD |
| AI/Prompt Engineer | 50% | TBD |
| Product/Design | 50% | TBD |

### Presupuesto MVP

| Item | Costo |
|------|-------|
| Infra (8 semanas) | ~$200 |
| API calls (testing) | ~$100 |
| Dominio | $15 |
| Misc | $100 |
| **Total** | ~$415 |

(No incluye salarios)

---

## Riesgos y Mitigaciones

| Riesgo | Prob | Mitigación |
|--------|------|------------|
| Prompts no dan calidad esperada | Alta | Iterar rápido, banco de ejemplos |
| Onboarding muy largo/aburrido | Media | Testing con users, simplificar |
| Costo de API muy alto | Media | Caching, modelos pequeños para routing |
| Users no ven diferencia vs ChatGPT | Alta | Onboarding que demuestre valor inmediato |

---

## Siguiente Paso Inmediato

1. Decidir quién desarrolla
2. Setup del repo
3. Empezar Semana 1

## Connections
- [[ha-root-product]]
