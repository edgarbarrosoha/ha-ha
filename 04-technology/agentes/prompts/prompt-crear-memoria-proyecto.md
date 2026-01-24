---
type: prompt
project: ha-startup
purpose: crear-memoria-claude
created: 2026-01-21
---

# Prompt: Crear Sistema de Memoria para Proyectos

> Usar este prompt para crear memorias de Claude consistentes en cualquier proyecto HA.

## Prompt

```
Crea un sistema de memoria para el proyecto en: [RUTA_DEL_PROYECTO]

Sigue este patrón:

1. **Explorar la estructura** del proyecto para entender:
   - Si tiene arquitectura HA (dimensiones 00-06)
   - El archivo ha-root o índice principal
   - La carpeta 04-technology existente

2. **Crear la estructura**:
   - Carpeta: `04-technology-[sufijo]/claude-terminal-memory/`
   - Archivo: `memory-[sufijo].md`
   - Prompt: `04-technology-[sufijo]/prompts/prompt-inicio-sesion.md`

3. **El archivo de memoria debe incluir**:
   - Frontmatter con type, project, created, updated
   - Estado actual (última sesión, trabajando en)
   - Contexto del proyecto (visión, concepto central)
   - Estado del proyecto (fases, bloqueantes)
   - Sección "En lo que estamos trabajando" (activo/pendiente)
   - Próximos pasos sugeridos
   - Historial de sesiones

4. **El prompt de inicio debe ser**:
Lee el archivo de memoria del proyecto [NOMBRE]:
[RUTA]/04-technology-[sufijo]/claude-terminal-memory/memory-[sufijo].md

Basándote en ese archivo:
1. Dame un resumen breve de en qué nos quedamos la última sesión
2. Qué tareas están activas y pendientes
3. Sugiéreme en qué podemos trabajar hoy

Si hay algo urgente o bloqueante, indícalo primero.

Lee primero el ha-root del proyecto para capturar el contexto correcto.
```

---

## Plantilla de Memoria

```markdown
---
type: claude-memory
project: [nombre-proyecto]
client: [cliente si aplica]
created: [fecha]
updated: [fecha]
---

# Memoria de Sesiones Claude — [Nombre Proyecto]

> Archivo de memoria persistente para sesiones de Claude Code en terminal.

## Estado Actual

**Última sesión**: [fecha]
**Trabajando en**: [descripción breve]

## Contexto del Proyecto

**[Nombre]** — [descripción de una línea]

### Visión
[Visión del proyecto]

### Concepto Central
[Concepto o idea principal]

### Estado del Proyecto

| Fase | Status |
|------|--------|
| [Fase 1] | [status] |
| [Fase 2] | [status] |

## En lo que estamos trabajando

### Activo
- [ ] [tarea actual]

### Pendiente
- [tareas pendientes]

## Próximos pasos sugeridos
1. [paso 1]
2. [paso 2]

---

## Historial de Sesiones

### [fecha]
- **Logros**: [qué se logró]
- **Decisiones**: [decisiones tomadas]
- **Notas**: [notas adicionales]

---

*Este archivo debe actualizarse al final de cada sesión.*
```

---

## Plantilla de Prompt de Inicio

```markdown
---
type: prompt
project: [nombre-proyecto]
purpose: inicio-sesion-claude
created: [fecha]
---

# Prompt: Inicio de Sesión Claude — [Nombre Proyecto]

> Usar este prompt al inicio de cada sesión de Claude Code en terminal.

## Prompt

Lee el archivo de memoria del proyecto [NOMBRE]:
[RUTA]/04-technology-[sufijo]/claude-terminal-memory/memory-[sufijo].md

Basándote en ese archivo:
1. Dame un resumen breve de en qué nos quedamos la última sesión
2. Qué tareas están activas y pendientes
3. Sugiéreme en qué podemos trabajar hoy

Si hay algo urgente o bloqueante, indícalo primero.

## Uso

Copiar y pegar el prompt anterior al iniciar una nueva sesión de Claude Code.

## Notas

- La memoria vive en: `04-technology-[sufijo]/claude-terminal-memory/memory-[sufijo].md`
- Actualizar la memoria al final de cada sesión
```

---

## Memorias Existentes

| Proyecto | Ubicación |
|----------|-----------|
| HA Startup | `00-ha-root/04-technology/claude-terminal-memory/memory-ha.md` |
| SIC-Q | `06-projects/sic-q/04-technology-sic-q/claude-terminal-memory/memory-sic-q.md` |
| NCM | `06-projects/tec-monterrey/narrativa-campus-monterrey/04-technology-ncm/claude-terminal-memory/memory-ncm.md` |
| DOCET | `06-projects/docet-agentic/04-technology-docet/claude-terminal-memory/memory-docet.md` |
