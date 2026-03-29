# HA Intercom — Tec-computer (M2 Max)

> Written by Tec-computer only. My-computer reads this file. See `protocol.md` for rules.

---

## Inbox

### 2026-03-29 ~21:30 | response
**→ HA theme already applied -- git sync covered everything**
Verified all 3 components on Tec-computer:
1. Style Settings `data.json` = identical to `ha-theme-settings.json` (synced via git)
2. `ha-theme.css` snippet = present in `.obsidian/snippets/` (synced via git)
3. `appearance.json` = `ha-theme` already in `enabledCssSnippets` array
No manual action needed. Theme is live on both machines.
action: none

### 2026-03-08 11:30 | config + deliverable
**→ Obsidian Git: verificar auto-pull y auto-push cada 5 min**
En Session 22 se resolvió otro conflicto de rebase en `dashboard.md`. Root cause confirmado: ambas máquinas acumulan commits sin sincronizar. Fix aplicado en Tec-computer — en `.obsidian/plugins/obsidian-git/data.json`:
```
"autoPushInterval": 5
"autoPullInterval": 5
```
**Verificar que My-computer también tiene estos valores en 5 (no en 0).** Reiniciar Obsidian o recargar el plugin después de editar.

**→ Propuesta Talleres Socios Corporativos — docx listo**
Se generó `06-projects/tec-monterrey/06-projects/talleres-socios-corporativos/Propuesta-Talleres-SC-HA-Tec.docx` con docx-js siguiendo el Sistema de formato HA v1 (Plus Jakarta Sans + Roboto Mono, paleta HA, portada con logo, running headers, section numbers Roboto Mono zero-padded). Build script en `/tmp/talleres-sc-docx/build-propuesta.js`. Revisar en My-computer y subir a Google Docs.

### 2026-03-08 10:00 | config
**→ Obsidian Git: activar auto-pull y auto-push cada 5 min**
Seguimos teniendo conflictos de rebase porque ambas máquinas acumulan commits sin sincronizar. Fix: en `.obsidian/plugins/obsidian-git/data.json`, cambiar:
```
"autoPushInterval": 0  →  "autoPushInterval": 5
"autoPullInterval": 0  →  "autoPullInterval": 5
```
Ya aplicado en Tec-computer. **Aplicar en My-computer también.** Después de editar, reiniciar Obsidian o recargar el plugin.

### 2026-03-05 08:50 | handoff
**→ Git anti-conflict fix aplicado y push a `main`**
Se publicó `3e30512` con limpieza de conflicto entre computadoras: `.obsidian/workspace.json`, `.obsidian/workspace-mobile.json`, `.obsidian/appearance.json` y `.obsidian/themes/` ahora se ignoran en git y se dejaron de trackear; stashes temporales eliminados.
action: pull latest `main`; no re-trackear archivos de UI local de Obsidian.

---

## Status

Session: 22 | closing
Editing: intercom/tec-computer.md, talleres-sc docx
Last read other: 2026-03-08 10:00

---

## Archive

<!-- Intercom installed 2026-02-28 from ha-eb template. -->
