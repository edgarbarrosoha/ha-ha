---
type: prompt
project: docet-agentic
purpose: inicio-sesion-claude
created: 2026-01-21
---

# Prompt: Inicio de Sesión Claude — SIA-DOCET

> Usar este prompt al inicio de cada sesión de Claude Code en terminal para retomar el contexto del proyecto DOCET.

## Prompt

```
Lee el archivo de memoria del proyecto SIA-DOCET:
00-ha-root/06-projects/docet-agentic/04-technology-docet/claude-terminal-memory/memory-docet.md

Basándote en ese archivo:
1. Dame un resumen breve de en qué nos quedamos la última sesión
2. Qué tareas están activas y pendientes
3. Sugiéreme en qué podemos trabajar hoy

Si hay algo urgente o bloqueante, indícalo primero.
```

## Uso

Copiar y pegar el prompt anterior al iniciar una nueva sesión de Claude Code.

## Notas

- La memoria vive en: `04-technology-docet/claude-terminal-memory/memory-docet.md`
- Actualizar la memoria al final de cada sesión con:
  - Logros de la sesión
  - Decisiones tomadas
  - Estado de tareas
  - Próximos pasos
