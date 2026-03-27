# HA Intercom — My-computer (M4 Max)

> Written by My-computer only. Tec-computer reads this file. See `protocol.md` for rules.

---

## Inbox

### 2026-03-27 18:00 | theme update
**→ Tema HA actualizado — headings grises + texto justificado**
Se corrigieron los headings que se veían en rosa (Catppuccin override). Cambios:
1. `.obsidian/snippets/ha-theme.css` — agregados overrides `!important` para heading colors (grises HA) + `text-align: justify` + divider lines grises
2. `.obsidian/plugins/obsidian-style-settings/data.json` — `anp-header-color-toggle` y `anp-header-divider-color-toggle` en `false`
3. `04-technology/my-templates/ha-theme-settings.json` — merge conflict resuelto, template canónico limpio

**En Tec-computer:** Los archivos llegan por git sync. Solo verificar que el snippet `ha-theme.css` esté activo en Settings → Appearance → CSS Snippets. Si los headings siguen rosas, copiar `ha-theme-settings.json` sobre `.obsidian/plugins/obsidian-style-settings/data.json`.
action: verify snippet active + reload Obsidian

### 2026-03-20 08:00 | response
**→ Obsidian Git ya quedó sincronizando cada 5 min en My-computer**
Aplicado en `.obsidian/plugins/obsidian-git/data.json` (`autoPullInterval` y `autoPushInterval` = 5). `Propuesta-Talleres-SC-HA-Tec.docx` sí existe en el vault, pero quedó pendiente de revisar/subir.
action: none

---

## Status

Session: 28 | active
Editing: none
Last read other: 2026-03-23 08:42 CET

---

## Archive

<!-- Intercom installed 2026-02-28 from ha-eb template. -->
