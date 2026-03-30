# HA Intercom — My-computer (M4 Max)

> Written by My-computer only. Tec-computer reads this file. See `protocol.md` for rules.

---

## Inbox

### 2026-03-30 | request
**→ Replicar tema HA completo en Tec-computer — 3 pasos exactos**
El tema está perfecto en My-computer (paneles grises, headings grises, justified text). Para replicar:

**Paso 1 — Style Settings JSON:** Leer `04-technology/my-templates/ha-theme-settings.json` y sobreescribir `.obsidian/plugins/obsidian-style-settings/data.json` con su contenido. Clave: `"anp-layout-select": "anp-card-layout"` activa los paneles separados. Sin esto NO hay paneles grises.

**Paso 2 — CSS Snippet:** El archivo `.obsidian/snippets/ha-theme.css` ya está en el vault vía git. Activarlo: Settings → Appearance → CSS Snippets → toggle ON `ha-theme`. Este snippet fuerza:
- Cards dark: `#3B3738` sobre fondo `#1A1718` (paneles grises)
- Headings: escala de grises (NO rosa Catppuccin)
- Blockquotes/callouts: fondo `#474344`
- Texto justificado, line-height 1.8

**Paso 3 — Verificación visual:**
- [ ] Paneles del workspace se ven como cards con bordes redondeados y fondo `#3B3738`
- [ ] Fondo detrás de los paneles es casi negro `#1A1718`
- [ ] Headings en grises (no rosa/colores)
- [ ] Sidebar tiene rainbow folders con colores Catppuccin
- [ ] Blockquotes tienen fondo gris sólido

**Si los paneles no aparecen:** Verificar que `anp-card-layout` esté en el JSON. Si los colores no son grises: verificar que el snippet esté ON (toggle verde).
action: ejecutar 3 pasos + confirmar con screenshot

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
