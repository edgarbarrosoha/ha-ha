# 04-Technology

> Infraestructura y herramientas (datos, integración, IA, simulación) como sistema socio-técnico.

## Agente de Dimensión

- [[agent-ha-technology|Agent HA Technology]] — Arquitecto de la implementación

## Rol en HA

Define qué servicios y tools usar, cómo integrarlos, con qué protocolos y costos. Aloja bases de datos, bases de conocimiento y orquesta agentes.

## Preguntas Clave

- ¿Qué stack soporta el [[01-legacy|Legado]]?
- ¿Cómo garantizamos interoperabilidad?
- ¿Cómo aseguramos ética y seguridad?
- ¿Qué automatizar vs. mantener humano?

## Contenido de esta Dimensión

### 📂 `stack/` — Qué usamos
- [[stack-ha]] — El stack tecnológico de HA

### 📂 `agentes/` — Los agentes HA
- [[agentes-ha]] — Definición de agentes por dimensión
- `prompts/` — Biblioteca de prompts
  - [[haize-prompt]] — Prompt para "HAizar"
  - [[ha-structure-obsidian]] — Estructura en Obsidian

### 📂 `integraciones/` — Cómo se conecta
- [[integraciones]] — APIs y servicios conectados

### 📂 `herramientas/` — Tools específicos
- [[c.r.e.a.t.i.v.o.]] — Prompt para narrativas persuasivas

## Conexiones con otras Dimensiones

| Dimensión | Relación |
|-----------|----------|
| [[01-legacy]] | ¿Qué tecnología necesitamos para el legado? |
| [[02-community]] | ¿Qué herramientas usa la comunidad? |
| [[03-learning]] | ¿Cómo documentamos y compartimos conocimiento? |
| [[05-context]] | ¿Qué tendencias tecnológicas monitorear? |
| [[06-projects]] | ¿Qué tecnología desplegamos por proyecto? |

## Entradas y Salidas

**Entradas:**
- Inventario de sistemas actuales
- APIs disponibles
- Investigación de nuevas tecnologías
- Políticas de TI de clientes

**Salidas:**
- Blueprint técnico
- Plan de desarrollo y adopción
- Gobierno técnico
- Agentes operativos
- Documentación de integraciones

## Principios Tecnológicos

1. **Humano en el loop** — La IA asiste, no reemplaza
2. **Privacidad por diseño** — Datos del cliente en su infraestructura
3. **Modularidad** — Componentes intercambiables
4. **Trazabilidad** — Todo queda registrado
5. **Simplicidad** — Un chat afuera, complejidad adentro

## Evita
- "Pilas de herramientas" inconexas
- Deuda técnica acumulada
- Dependencia de un solo proveedor
- Complejidad innecesaria para el usuario

---

*Líder de dimensión: Oscar*
