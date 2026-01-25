# Las 6 Dimensiones de HA

## Visión General

Horizons Architecture opera en **6 dimensiones** que funcionan en paralelo (complejidad simultánea) y evolucionan en el tiempo.

```
┌─────────────────────────────────────────────────────┐
│                    HA-RAÍZ                          │
│              (Agente Coordinador)                   │
└─────────────────────┬───────────────────────────────┘
                      │
    ┌─────────────────┼─────────────────┐
    │                 │                 │
┌───┴───┐        ┌────┴────┐       ┌────┴────┐
│LEGADO │        │COMUNIDAD│       │APRENDIZ.│
│  01   │        │   02    │       │   03    │
└───┬───┘        └────┬────┘       └────┬────┘
    │                 │                 │
    │           ┌─────┴─────┐           │
    │           │TECNOLOGÍA │           │
    │           │    04     │           │
    │           └─────┬─────┘           │
    │                 │                 │
┌───┴───┐        ┌────┴────┐       ┌────┴────┐
│CONTEXT│        │PROYECTOS│       │ FRACTAL │
│  05   │        │   06    │       │ (escala)│
└───────┘        └─────────┘       └─────────┘
```

## Las 6 Dimensiones

### [[01-legacy|1. LEGADO]]
**Rol:** Driver estratégico
**Pregunta:** ¿Qué queremos lograr que trascienda?

Es la brújula estratégica: define "qué significa ganar" y en qué horizonte de tiempo. Se formaliza como **función objetivo** (multicriterio, con pesos y restricciones).

**Entradas:** Visión, estrategia, gobernanza, restricciones
**Salidas:** Función de Legado (objetivos, pesos, umbrales)
**Evita:** Proyectos aislados sin norte

---

### [[02-community|2. COMUNIDAD]]
**Rol:** Habilitador social
**Pregunta:** ¿A quién necesitamos y quién se beneficia?

Mapa vivo de personas e instituciones con sus relaciones, incentivos e influencia. Es un **grafo operativo** para coordinar quién decide qué.

**Entradas:** Estructuras formales, stakeholders, proveedores
**Salidas:** Análisis de actores, protocolos de coordinación
**Evita:** Decisiones sin adopción, fricción política

---

### [[03-learning|3. APRENDIZAJE]]
**Rol:** Motor evolutivo
**Pregunta:** ¿Qué necesitamos saber/entrenar?

Capacidades, conocimientos y lecciones. Incluye activos explícitos (manuales, wikis) y tácitos (skills). Retroalimenta métodos y formación.

**Entradas:** Resultados de pilotos, auditorías, prácticas expertas
**Salidas:** Bases de conocimiento, planes de upskilling
**Evita:** Depender de "héroes individuales"

---

### [[04-technology|4. TECNOLOGÍA]]
**Rol:** Infraestructura
**Pregunta:** ¿Qué stack soporta el legado?

Infraestructura y herramientas (datos, integración, IA, simulación) como **sistema socio-técnico**. Aloja bases de datos y orquesta agentes.

**Entradas:** Inventario de sistemas, APIs, políticas de TI
**Salidas:** Blueprint técnico, plan de desarrollo
**Evita:** "Pilas de herramientas" inconexas

---

### [[05-context|5. CONTEXTO]]
**Rol:** Sensibilidad del entorno
**Pregunta:** ¿Qué cambia afuera que nos afecta?

Condiciones externas (mercado, regulación, macroeconomía, geopolítica). Es **escaneo dinámico** con alertas y escenarios.

**Entradas:** Indicadores, leyes, normas, eventos
**Salidas:** Alertas, escenarios, restricciones vigentes
**Evita:** Miopía estratégica

---

### [[06-projects|6. PROYECTOS]]
**Rol:** Ejecución
**Pregunta:** ¿Cómo lo vamos a hacer?

La acción: iniciativas, tareas, recursos, riesgos y entregables. Aquí se prioriza portafolio, se ejecuta, se mide y se cierra el ciclo.

**Entradas:** Función de Legado, capacidades, contexto, tecnología
**Salidas:** Project management, pilotos, indicadores, resultados
**Evita:** Actividad sin impacto

---

## Principios de las Dimensiones

1. **Operan en paralelo** — Complejidad simultánea
2. **Evolucionan en el tiempo** — No son estáticas
3. **Comparten taxonomía fija** — Lenguaje común
4. **Ontología generativa** — Crean sub-agentes cuando surgen nuevas necesidades
5. **Coordinadas por agente raíz** — Coherencia del sistema

## Conexiones

- [[8-pasos-ha]] — Cómo las dimensiones entran en el proceso
- [[arquitectura-fractal]] — Cómo escalan las dimensiones
- [[01-legacy]] — El legado gobierna todo

---

*Documento base de la metodología HA*
