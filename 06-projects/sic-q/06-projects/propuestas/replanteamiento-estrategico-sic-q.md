---
dimension: projects
project: sic-q
type: strategic-reframing
status: active
date: 2026-02-07
parent: "[[06-projects-sic-q]]"
---

# Replanteamiento Estratégico del SIC-Q

> El SIC no es una plataforma de participación ciudadana. Es un Sistema de Inteligencia Colectiva.

## El problema de encuadre

El SIC se ha planteado erróneamente como una **plataforma de participación ciudadana**. Esto es un error de enfoque por varias razones:

- Las plataformas de participación ciudadana casi nunca funcionan — si no es que nunca
- No existe una cultura de participación ciudadana establecida
- Los ciudadanos no tienen por qué participar si no quieren — si alguien tiene una vida normal, ¿por qué habría de meterse al SIC?

## Lo que el SIC realmente es

El SIC es un **Sistema de Inteligencia Colectiva**: un sistema multicanal capaz de recopilar, procesar y generar inteligencia a partir de información ciudadana a través de múltiples herramientas e interfaces. Por ejemplo, podrías usar el SIC para recopilar información de un taller participativo, pero el SIC no *es* ese taller.

La diferencia es fundamental: el SIC no depende de que los ciudadanos vengan a él — el SIC **va hacia donde ya está la información**.

## Arquitectura: Thinking-as-a-Service

El SIC-Q es un servicio de inteligencia en la nube — un **Thinking-as-a-Service (TaaS)** — donde HA (Horizons Architecture) es la capa de pensamiento. El TaaS se conecta a bases de datos, crea bases de conocimiento, orquesta agentes de IA, y genera inteligencia procesada.

De este núcleo se derivan **tres instancias** del SIC-Q, cada una adaptada a un usuario y una función distinta:

| Instancia | Qué es | Para quién | Dirección |
|-----------|--------|------------|-----------|
| **Agente estratégico** | Agente de IA que analiza, cruza datos y genera inteligencia | Secretaría de Planeación (planeación) + Instituto del Futuro (prospectiva) | Output: inteligencia hacia arriba |
| **Herramienta de recopilación** | Instrumento para talleres, consultas, encuestas, consejos ciudadanos, PED 2050 | Gobierno (procesos estructurados de planeación) | Input: datos estructurados hacia el cerebro |
| **Canales ciudadanos** | WhatsApp, redes sociales, plataforma de propuestas | Ciudadanía (experiencias orgánicas) | Input: datos no estructurados hacia el cerebro |

Las instancias 2 y 3 alimentan a la instancia 1. La 1 procesa y genera inteligencia. Todo corre sobre el mismo TaaS.

**Relación de servicio:** El Instituto del Futuro le presta servicio a la Secretaría de Planeación a través del SIC-Q. No es dependencia tecnológica — es una relación de servicio donde el Instituto provee inteligencia y herramientas, y la Secretaría las usa con autonomía para planear y ejecutar.

## Dos usuarios, un sistema

| Usuario | Representado por | Rol |
|---------|-----------------|-----|
| **Gobierno** | Secretaría de Planeación y Participación Ciudadana + Instituto del Futuro | Consumidor de inteligencia (Secretaría para planeación, IF para prospectiva) + usuario de herramientas de recopilación |
| **Ciudadanía** | Todos los ciudadanos (primera fase: los que ya participan — consejos de participación, Dirección de Participación Ciudadana) | Fuente de información y beneficiario de servicios |

## Las tres etapas

### Etapa 1 — Agente estratégico + herramienta de recopilación

**Instancias activas:** 1 (agente estratégico) + 2 (herramienta de recopilación)

**El agente estratégico** nace procesando la información que el gobierno ya tiene y sirve a dos usuarios:
- **Secretaría de Planeación:** agente de IA especializado en planeación — cruza datos, genera análisis, produce reportes para la toma de decisiones
- **Instituto del Futuro:** agente de IA especializado en prospectiva — explora escenarios, analiza tendencias, anticipa disrupciones

**La herramienta de recopilación** se activa para los procesos de planeación del gobierno:
- Talleres participativos, consultas ciudadanas, encuestas
- Consejos ciudadanos y procesos del PED 2050
- El SIC-Q captura, estructura y procesa toda la información que se genera en estos procesos

**Resultado:** Un primer *win* para el gobierno — el SIC genera valor desde el día uno sin depender de que nadie nuevo participe.

### Etapa 2 — Canales de escucha ciudadana

**Instancia activa:** 3 (canales ciudadanos) — se suma a las dos anteriores

Con el cerebro ya funcionando, se abren canales para escuchar cómo la gente vive los temas que al gobierno le importa entender:

- **Canales:** WhatsApp, redes sociales, nueva plataforma de participación de propuestas
- **Lo que la gente comparte:** experiencias, situaciones, quejas, oportunidades, propuestas
- **Valor bidireccional:** Los ciudadanos también obtienen valor — becas, información, canalización, seguimiento

Los canales son sensores. Todo alimenta el mismo cerebro de la Etapa 1, que se vuelve más inteligente con el tiempo.

### Etapa futura — Conexión con servicios de gobierno

Fuera del alcance actual. El horizonte natural es conectar directamente con trámites y servicios de gobierno a través del SIC.

## Resumen visual

```
                    ┌─────────────────────────────────────┐
                    │     TaaS: HA (Thinking-as-a-Service) │
                    │     Orquestación, KB, Agentes IA     │
                    └──────────────┬──────────────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
              ▼                    ▼                    ▼
     ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐
     │  INSTANCIA 1    │  │  INSTANCIA 2    │  │  INSTANCIA 3    │
     │  Agente         │  │  Herramienta    │  │  Canales         │
     │  estratégico    │  │  de recopilación│  │  ciudadanos      │
     │                 │  │                 │  │                 │
     │  → Secretaría   │  │  → Talleres     │  │  → WhatsApp     │
     │    (planeación) │  │  → Consultas    │  │  → Redes        │
     │  → IF           │  │  → Consejos     │  │  → Plataforma   │
     │    (prospectiva)│  │  → PED 2050     │  │    propuestas   │
     │                 │  │                 │  │                 │
     │  ETAPA 1        │  │  ETAPA 1        │  │  ETAPA 2        │
     └─────────────────┘  └─────────────────┘  └─────────────────┘
              ▲                    │                    │
              │                    │                    │
              └────────────────────┴────────────────────┘
                    Las instancias 2 y 3 alimentan a la 1
```

## Implicaciones para el proyecto

1. **La propuesta v06 debe reflejar este reencuadre** — el SIC no se presenta como plataforma de participación
2. **El SIC-Q es TaaS** — HA es la capa de pensamiento, el SIC-Q se despliega en instancias adaptadas a cada usuario
3. **El IF le presta servicio a la Secretaría** — relación de servicio, no dependencia tecnológica
4. **El Citizens Journey v04 se mantiene** como diseño de la Instancia 3 (canales ciudadanos)
5. **La Etapa 1 activa dos instancias** — agente estratégico + herramienta de recopilación
6. **El Instituto del Futuro** opera como custodio del SIC a través de todas las etapas

## Connections

- [[propuesta-v05]]
- [[reporte-simplificacion-citizens-journey]]
- [[citizens-journey-v04]]
