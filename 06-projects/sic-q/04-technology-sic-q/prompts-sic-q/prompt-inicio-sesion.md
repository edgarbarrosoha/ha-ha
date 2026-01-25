---
type: prompt
project: sic-q
purpose: inicio-sesion-claude
created: 2026-01-21
---

# Prompt: Inicio de Sesión Claude — SIC-Q

> Usar este prompt al inicio de cada sesión de Claude Code en terminal para retomar el contexto del proyecto.

## Prompt

```
Lee el archivo de memoria del proyecto SIC-Q:
00-ha-root/06-projects/sic-q/04-technology-sic-q/claude-terminal-memory/memory-sic-q.md

Basándote en ese archivo:
1. Dame un resumen breve de en qué nos quedamos la última sesión
2. Qué tareas están activas y pendientes
3. Sugiéreme en qué podemos trabajar hoy

Si hay algo urgente o bloqueante, indícalo primero.
```

## Uso

Copiar y pegar el prompt anterior al iniciar una nueva sesión de Claude Code.

## Notas

- La memoria vive en: `04-technology-sic-q/claude-terminal-memory/memory-sic-q.md`
- Actualizar la memoria al final de cada sesión con:
  - Logros de la sesión
  - Decisiones tomadas
  - Estado actual de tareas
  - Próximos pasos
