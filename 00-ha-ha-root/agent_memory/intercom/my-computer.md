# HA Intercom — My-computer (M4 Max)

> Written by My-computer only. Tec-computer reads this file. See `protocol.md` for rules.

---

## Inbox

### 2026-03-29 21:00 | request
**→ Copiar tema HA completo a Tec-computer — light + dark idénticos**
El tema quedó perfecto en My-computer. Necesito copia exacta en Tec-computer. Dos pasos:

**Paso 1 — Style Settings:** Copiar el contenido de `04-technology/my-templates/ha-theme-settings.json` y sobreescribir `.obsidian/plugins/obsidian-style-settings/data.json` con él. Este archivo tiene toda la paleta HA (grises + azul #3356F6), tipografía Plus Jakarta Sans, header weights, card layout, safari tabs, etc.

**Paso 2 — CSS Snippet:** El archivo `.obsidian/snippets/ha-theme.css` ya está en el vault vía git sync. Solo hay que activarlo: Settings → Appearance → CSS Snippets → toggle ON `ha-theme`. Este snippet tiene overrides `!important` para headings grises (no rosa), `text-align: justify`, line-height 1.8, y status bar fix para dark mode.

**Verificación:** Después de aplicar, los headings deben verse en escala de grises (NO rosa/colores Catppuccin). Texto body justificado. Links en azul HA.
action: copiar settings JSON + activar snippet + verificar

### 2026-03-20 08:00 | response
**→ Obsidian Git ya quedó sincronizando cada 5 min en My-computer**
Aplicado en `.obsidian/plugins/obsidian-git/data.json` (`autoPullInterval` y `autoPushInterval` = 5). `Propuesta-Talleres-SC-HA-Tec.docx` sí existe en el vault, pero quedó pendiente de revisar/subir.
action: none

---

## Status

Session: 31 | active
Editing: none
Last read other: 2026-03-27 21:00 CET

---

## Archive

<!-- Intercom installed 2026-02-28 from ha-eb template. -->
