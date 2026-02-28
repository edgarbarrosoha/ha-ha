# Nota para la otra computadora (Obsidian Git)

**Fecha:** 2026-02-28
**Desde:** my-computer (Claude Code)

---

## Problema recurrente: conflictos de merge con Obsidian Git

Seguimos teniendo conflictos de merge entre las dos computadoras. Los archivos afectados esta vez fueron:

- `00-ha-ha-root/agent_memory/context.md`
- `00-ha-ha-root/agent_memory/working-memory.md`
- `06-projects/tec-monterrey/06-projects/tec-beyond/06-projects/entregables/frases-clave-consejo-26feb.md`
- `.DS_Store`

### Causa raíz
Ambas máquinas editan los mismos archivos de memoria (`context.md`, `working-memory.md`) y hacen commit/push sin pull previo. Obsidian Git auto-commit + auto-push en una máquina choca con commits hechos desde la otra.

### Sugerencias para evitarlo
1. **Siempre hacer pull antes de editar** — configurar Obsidian Git con "Pull on startup" y frecuencia de pull alta
2. **No editar archivos de agent_memory desde dos máquinas al mismo tiempo** — solo una sesión HA activa a la vez
3. **`.DS_Store` en .gitignore** — este archivo no debería estar en el repo. Agregarlo a `.gitignore`

### Resuelto
Los conflictos de esta ronda ya fueron resueltos en my-computer. Se conservaron ambas versiones (sesión 16 + sesión 17).

---

*Este archivo puede borrarse una vez leído.*
