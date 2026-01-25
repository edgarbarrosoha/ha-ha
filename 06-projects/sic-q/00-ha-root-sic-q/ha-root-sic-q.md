---
dimension: root
project: sic-q
status: active
created: 2024-12-01
updated: 2025-12-25
---

# HA Root — SIC-Q

> **Sistema de Inteligencia Colectiva de Querétaro**
> Plataforma de participación ciudadana con IA para el Estado de Querétaro, México.

## Dimensiones

| # | Dimensión | Descripción |
|---|-----------|-------------|
| 01 | [[01-legacy-sic-q\|Legacy]] | Propósito, visión a 30 años, Instituto del Futuro |
| 02 | [[02-community-sic-q\|Community]] | Stakeholders, gobierno, ciudadanía |
| 03 | [[03-learning-sic-q\|Learning]] | Áreas de conocimiento y capacidades |
| 04 | [[04-technology-sic-q\|Technology]] | Arquitectura técnica, agentes, prompts |
| 05 | [[05-context-sic-q\|Context]] | Benchmarks, entorno externo, fuentes |
| 06 | [[06-projects-sic-q\|Projects]] | Propuestas, transcripciones, entregables |

## Ejes HA

- **Eje de Tiempo**: Pasado (lecciones aprendidas) → Presente (operación actual) → Futuro (visión 2050)
- **Eje de Complejidad Simultánea**: Las 6 dimensiones operando en paralelo

---

## Sistema de Agentes IA

> Ontología agentiva generativa para SIC-Q: agentes especializados bajo supervisión humana interpretativa.

| Agente | Dimensión | Función | Prompt |
|--------|-----------|---------|--------|
| **Root** | Orquestador | Coordina dimensiones, sintetiza respuestas | [[agent-sic-q-root]] |
| Legacy | 01 | Custodio del propósito y visión 30 años | [[agent-sic-q-legacy]] |
| Community | 02 | Mapeo de stakeholders y dinámicas sociales | [[agent-sic-q-community]] |
| Learning | 03 | Brechas de conocimiento, mejora continua | [[agent-sic-q-learning]] |
| Technology | 04 | Arquitectura técnica, IA, gobernanza | [[agent-sic-q-technology]] |
| Context | 05 | Entorno externo, benchmarks, regulación | [[agent-sic-q-context]] |
| Projects | 06 | Ejecución, recursos, entregables | [[agent-sic-q-projects]] |

### Uso de los Agentes

1. **Consulta específica** → Usar agente dimensional directamente
2. **Consulta compleja** → Root Agent coordina y sintetiza
3. **Supervisión humana** → Siempre presenta opciones, nunca decide solo
