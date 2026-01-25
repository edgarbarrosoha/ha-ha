---
type: prompt
project: ha-startup
purpose: inicio-sesion-claude
created: 2026-01-21
---

# Prompt: Inicio de Sesión Claude — HA Startup

> Usar este prompt al inicio de cada sesión de Claude Code en terminal para retomar el contexto del startup HA.

## Prompt

```
Lee el archivo de memoria del proyecto HA Startup:
00-ha-root/04-technology/claude-terminal-memory/memory-ha.md

Basándote en ese archivo:
1. Dame un resumen breve de en qué nos quedamos la última sesión
2. Qué tareas están activas y pendientes
3. Sugiéreme en qué podemos trabajar hoy

Si hay algo urgente o bloqueante, indícalo primero.
```

## Uso

Copiar y pegar el prompt anterior al iniciar una nueva sesión de Claude Code.

## Notas

- La memoria vive en: `04-technology/claude-terminal-memory/memory-ha.md`
- Actualizar la memoria al final de cada sesión con:
  - Logros de la sesión
  - Decisiones tomadas
  - Estado de tareas
  - Próximos pasos

## Memorias de Proyectos

Cada proyecto HA-enabled tiene su propia memoria:

| Proyecto | Memoria |
|----------|---------|
| SIC-Q | `06-projects/sic-q/04-technology-sic-q/claude-terminal-memory/memory-sic-q.md` |
| NCM | `06-projects/tec-monterrey/narrativa-campus-monterrey/04-technology-ncm/claude-terminal-memory/memory-ncm.md` |
