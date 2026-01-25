---
dimension: technology
project: docet-agentic
type: index
status: active
parent: "[[ha-root-docet|HA Root DOCET]]"
---

# Technology — SIA-DOCET

> Orquestador de herramientas. Automatiza la burocracia digital para liberar tiempo cognitivo.

## Stack Tecnológico

### Principios de Arquitectura

| Principio | Implementación |
|-----------|----------------|
| **Privacidad y Soberanía** | Datos permanecen exclusivamente en DOCET |
| **Azure/Copilot** | Modelos LLM de Azure OpenAI para datos sensibles |
| **Arquitectura Fractal** | Cada directivo con su propio sistema de 6+1 agentes |
| **Interoperabilidad** | DOCET Nexus conecta todos los sistemas personales |

### Componentes del Sistema

```
┌─────────────────────────────────────────────────┐
│              DOCET NEXUS (Capa de Coordinación)  │
├─────────────────────────────────────────────────┤
│                                                  │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐      │
│  │HA-Presi. │  │  HA-DG   │  │HA-Finanz.│ ...  │
│  │(6 agents)│  │(6 agents)│  │(6 agents)│      │
│  └──────────┘  └──────────┘  └──────────┘      │
│                                                  │
├─────────────────────────────────────────────────┤
│           Azure OpenAI (Copilot Backend)         │
├─────────────────────────────────────────────────┤
│              Bases de Datos DOCET                │
└─────────────────────────────────────────────────┘
```

---

## Arquitectura Multi-Agente

### Un Chat, Múltiples Inteligencias

Para el usuario, la experiencia es simple:
- Conversa con **un solo chat** (su HA Raíz)
- Puede invocar agentes explícitamente:
  - *"Habla con tu agente de Contexto y dime si hay algún riesgo regulatorio"*
  - *"Pídele al agente de Proyectos que arme un plan en 4 semanas"*

### Los 7 Agentes por Sistema Personal

| # | Agente | Función |
|---|--------|---------|
| 0 | **HA Raíz** | Orquestador, síntesis, interfaz principal |
| 1 | **Legacy** | Propósito y visión de largo plazo |
| 2 | **Community** | Relaciones y capital social |
| 3 | **Learning** | Brechas de capacidad y aprendizaje |
| 4 | **Technology** | Herramientas y automatización |
| 5 | **Context** | Radar externo, entorno |
| 6 | **Projects** | Ejecución y accountability |

---

## Automatización de Burocracia

### Flujos a Automatizar

| Proceso Manual | Automatización SIA-DOCET |
|----------------|--------------------------|
| Consolidación de reportes | Dashboard en tiempo real |
| Cruces manuales entre departamentos | DOCET Nexus automático |
| Seguimiento de tareas | Agente Projects con recordatorios |
| Análisis de satisfacción | Sentiment Analysis continuo |

---

## Preguntas del Agente Technology

- ¿Hay una herramienta existente que resuelve esto?
- ¿Qué automatización liberaría tiempo cognitivo?
- ¿Cómo conectamos esto con el DOCET Nexus?
- ¿Es compatible con los estándares de privacidad DOCET?

---

## Contenido de Technology

- [[agent-docet-technology|Agente Technology DOCET]]

---

## Navegación

← [[03-learning-docet|Learning]] | [[05-context-docet|Context]] →
