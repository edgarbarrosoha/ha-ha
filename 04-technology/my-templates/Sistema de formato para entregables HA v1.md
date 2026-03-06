# Horizons Architecture — Sistema de formato para entregables

> Prompt para que modelos de IA (especialmente Claude) produzcan documentos con el estilo visual y estructural de Horizons Architecture (HA).

---

## Regla cero: Beautiful Efficiency

Cada decisión de formato sigue el principio estético central de HA: **eficiencia y belleza son inseparables.** Si un elemento se puede eliminar sin perder significado, elimínalo. Si un documento es funcional pero feo, viola la marca tanto como uno bonito pero vacío. El resultado debe sentirse como "un annual report de consultoría premium — pero hecho por misfits brillantes que creen que la eficiencia ES belleza."

---

## 1. Idioma y caracteres especiales

**Regla no negociable.** Cuando el documento esté en español, TODO el texto — incluyendo el generado programáticamente — debe renderizar correctamente:

**Acentos y caracteres:** á, é, í, ó, ú, ñ, ü, ¿…?, ¡…! — jamás transliterar ni eliminar acentos. "Querétaro" nunca es "Queretaro". "Diseño" nunca es "Diseno".

**Tipografía especial:** Usar comillas tipográficas ("…", «…»), guiones largos (— para incisos, – para rangos numéricos como "enero–mayo"), y puntos suspensivos (…) como carácter único.

**Formatos locales:**

- Moneda: `$4,800,000.00 MXN` (coma para miles, punto para decimales, siempre especificar divisa)
- Fechas: `DD/MM/YYYY` o "13 de noviembre de 2025" — nunca MM/DD/YYYY en contexto español

**En código (docx-js, pptxgenjs):** Pasar strings UTF-8 directamente. JavaScript maneja caracteres acentuados sin problema: `new TextRun("Diagnóstico técnico")`. En XML: usar entidades `&#x201C;`, `&#x2019;`, etc.

---

## 2. Tipografía

### Fonts

|Rol|Font|Fallback|
|---|---|---|
|**Primaria** (títulos, cuerpo, labels)|Plus Jakarta Sans|Inter, DM Sans, Helvetica Neue, Arial, sans-serif|
|**Secundaria** (metadata, números, datos)|Roboto Mono|Space Mono, JetBrains Mono, Consolas, monospace|

### Pesos permitidos

- **Plus Jakarta Sans Regular (400):** Títulos, subtítulos, cuerpo de texto, taglines.
- **Plus Jakarta Sans Medium (500):** Subtítulos de sección internos (subsecciones dentro de una sección). Nombres de dimensión.
- **Plus Jakarta Sans SemiBold (600):** Headers de tabla. Etiquetas de conceptos clave inline (ej. "**Reconocimiento, no venta.** El correo debe sentirse como…"). Métricas destacadas.
- **Roboto Mono Regular (400):** TODO lo que sea fecha, número, fuente, URL, email, versión, número de página, número de sección, anotación técnica, metadata.

**Prohibido:** Bold (700+) en texto corrido. Italic en cualquier contexto. Pesos Light/Thin. Subrayado para énfasis (solo para hipervínculos).

**PROHIBIDO: Letter-spacing / tracking / character spacing.** No agregar espacio entre letras a ningún elemento del documento. Cero. Ni en títulos, ni en subtítulos, ni en cuerpo, ni en metadata, ni en headers de tabla, ni en running headers. En docx-js esto significa: NUNCA usar `<w:spacing w:val="..."/>` dentro de `<w:rPr>`. En CSS: NUNCA usar `letter-spacing`. Las fonts Plus Jakarta Sans y Roboto Mono ya están diseñadas con el spacing óptico correcto — agregar tracking las deforma.

### Mayúsculas y minúsculas

**REGLA FUNDAMENTAL: Sentence case en (casi) todo.** Los títulos de sección, subtítulos, headers de tabla, labels de notas, todo va en sentence case: primera letra mayúscula, el resto minúscula. Esto aplica a todos los niveles de la jerarquía tipográfica.

Ejemplo correcto:

```
01
Estrategia general de contacto         ← sentence case ✓

Principios de comunicación             ← sentence case ✓

Segmento | Descripción                 ← headers de tabla, sentence case ✓

Nota sobre la urgencia temporal        ← sentence case ✓
```

Ejemplo incorrecto:

```
01
ESTRATEGIA GENERAL DE CONTACTO         ← NO ✗

PRINCIPIOS DE COMUNICACIÓN              ← NO ✗

SEGMENTO | DESCRIPCIÓN                  ← NO ✗

NOTA SOBRE LA URGENCIA TEMPORAL         ← NO ✗
```

**Las únicas excepciones que van en UPPERCASE** (y son pocas):

- La etiqueta del tipo de documento en la portada: PROPUESTA, INFORME, PLANTILLAS DE CONTACTO
- Labels de metadata en portada: DESTINATARIO, ELABORADA POR, FECHA
- El running header: 2026 HORIZONS ARCHITECTURE
- Acrónimos: HA, MXN, IVA

Todo lo demás — títulos, subtítulos, headers de tabla, labels de notas, nombres de dimensiones, taglines — va en sentence case. Si algo parece que "debería" ir en mayúsculas pero no está en la lista de arriba, va en sentence case.

### Jerarquía tipográfica — Documentos (Word/PDF)

|Nivel|Font|Tamaño|Espaciado|
|---|---|---|---|
|**Etiqueta de tipo de documento**|Plus Jakarta Sans Regular|28–36 pt|Standalone en portada. UPPERCASE.|
|**Título descriptivo**|Plus Jakarta Sans Regular|22–30 pt|Debajo de la etiqueta, con línea conectora.|
|**Número de sección**|Roboto Mono Regular|12–14 pt|En su propia línea arriba del título.|
|**H1 — Título de sección**|Plus Jakarta Sans Regular|18–22 pt|Inmediatamente debajo del número.|
|**H2 — Subtítulo**|Plus Jakarta Sans Medium|13–15 pt|Espacio antes: 24 pt, después: 8 pt.|
|**H3 — Sub-subtítulo**|Plus Jakarta Sans Medium|11–12 pt|Espacio antes: 18 pt, después: 6 pt.|
|**Cuerpo**|Plus Jakarta Sans Regular|10–11 pt|Line height: 1.4–1.5 (mínimo 1.15). Espacio después: 6–8 pt.|
|**Etiqueta de concepto inline**|Plus Jakarta Sans SemiBold|Mismo que cuerpo|Seguida de punto y texto Regular. Ej: "**Texto plano, como correo real.** Sin diseño gráfico…"|
|**Caption / Nota al pie**|Roboto Mono Regular|8–9 pt|Line height ≥ 1.15.|
|**Running header**|Roboto Mono Regular|7–8 pt|Ver §4.|
|**Número de página**|Roboto Mono Regular|8 pt|Centrado al pie.|

Salvo la etiqueta de tipo de documento en portada, todos estos niveles van en sentence case.

### Jerarquía — Presentaciones

|Nivel|Font|Tamaño|
|---|---|---|
|**Título de slide**|Plus Jakarta Sans Regular|32–44 pt|
|**Subtítulo**|Plus Jakarta Sans Regular|18–24 pt|
|**Cuerpo**|Plus Jakarta Sans Regular|14–18 pt|
|**Etiquetas de datos / Ejes**|Roboto Mono Regular|10–14 pt|
|**Source / Footer**|Roboto Mono Regular|8–10 pt|
|**Métrica clave**|Roboto Mono Regular|48–72 pt|
|**Dimensiones**|Plus Jakarta Sans Medium|12–16 pt|

Todo en sentence case. La etiqueta del tipo de slide (PROPUESTA, INFORME) puede ir en uppercase.

### Jerarquía — Web / Digital

|Nivel|Font|Tamaño|
|---|---|---|
|**H1**|Plus Jakarta Sans 400|2.5–3.5 rem|
|**H2**|Plus Jakarta Sans 400|1.5–2 rem|
|**H3**|Plus Jakarta Sans 500|1.125–1.25 rem|
|**Body**|Plus Jakarta Sans 400|0.875–1 rem|
|**Mono**|Roboto Mono 400|0.75–0.875 rem|
|**Métrica grande**|Roboto Mono 400|3–4.5 rem|

Sin letter-spacing en ningún nivel. Las fonts manejan su propio spacing óptico.

---

## 3. Colores

### Paleta (5 colores, sin excepciones)

|Nombre|HEX|Uso|
|---|---|---|
|**HA Blue**|`#3356F6`|Acento: highlights, CTAs, bloques pequeños de info, headers de tabla especiales. Nunca dominante.|
|**Offset Black**|`#231F20`|Oscuro primario para fondos y texto. Preferir sobre negro puro.|
|**Black**|`#000000`|Oscuro secundario, bordes finos.|
|**Offwhite**|`#F1F2F2`|Claro primario para fondos, headers de tabla default. Preferir sobre blanco puro.|
|**White**|`#FFFFFF`|Claro secundario, fondo de páginas de contenido.|

### Esquemas

**Esquema A — Claro (default para cuerpo de documentos):** Fondo blanco, texto Offset Black, acentos en HA Blue, headers de tabla en Offwhite.

**Esquema B — Oscuro (portadas premium, cierres, slides de impacto):** Fondo Offset Black, texto White/Offwhite, acento HA Blue. Portadas claras son válidas para audiencias institucionales/gobierno; oscuras para clientes corporativos/tech.

**Esquema C — Acento azul (máximo un bloque por página):** Fondo HA Blue, texto White. Solo para: header de tabla de framework, callout clave, CTA. Nunca para áreas grandes de contenido.

### Reglas de color

- **Alto contraste obligatorio.** WCAG AA mínimo.
- **Cero gradientes, sombras, glow, efectos de opacidad.**
- **Cero colores fuera de la paleta.** Series de gráficas: tints del azul (`#3356F6`, `#6680F8`, `#99AAFA`, `#CCD5FD`) y del oscuro (`#231F20`, `#585556`, `#8E8C8D`, `#C4C3C3`).
- **Azul nunca dominante:** ≤ 15% de superficie de cualquier página.

---

## 4. Layout y composición

### Reglas absolutas

1. **TODO alineado a la izquierda.** Sin texto centrado, sin elementos centrados. Excepción: números de página pueden ir centrados al pie.
2. **Sin texto justificado.** Alineación izquierda con borde derecho irregular.
3. **Interlineado ≥ 1.15 en todo.** Cuerpo: 1.4–1.5. Captions, celdas de tabla, callouts: mínimo 1.15. El texto nunca debe sentirse apretado.
4. **Whitespace generoso.** Márgenes y padding son estructurales, no desperdicio.
5. **Jerarquía de información: arriba→abajo, izquierda→derecha.**
6. **Fotos en los bordes.** Sangrado hasta los límites. Nunca centradas flotando.

### Running header (todas las páginas después de portada)

```
2026  HORIZONS ARCHITECTURE                    HORIZONSARCHITECTURE.AI
```

Roboto Mono, 7–8 pt. Izquierda: `[AÑO] HORIZONS ARCHITECTURE`. Derecha: `HORIZONSARCHITECTURE.AI`. Este es el único texto recurrente que va en uppercase — es un marcador de sistema, no contenido de lectura.

### Números de página

Roboto Mono Regular, 8 pt. Centrados al pie. La portada puede mostrar el número o no.

**Dos formatos válidos:**

- **Simples** (1, 2, 3… 12, 13): para documentos operativos, playbooks, guías internas.
- **Zero-padded** (02, 03… 010, 011): para propuestas formales y reportes ejecutivos.

Elegir un formato y mantenerlo consistente dentro del documento.

### Portada (propuestas y documentos formales)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│  [Logo HA — ícono + wordmark "HORIZONS ARCHITECTURE"]    │
│  (arriba-izquierda, pequeño)                             │
│                                                          │
│                                                          │
│  PLANTILLAS DE CONTACTO                                  │
│  (Plus Jakarta Sans Regular, 28–36pt, uppercase)         │
│                                                          │
│            ╭──                                           │
│            │   Primera ola de correos para                │
│            │   candidatos de la Maestría...              │
│            │   (22–30pt, Plus Jakarta Sans Regular)      │
│                                                          │
│                                                          │
│         DESTINATARIO      Escuela de Gobierno y...       │
│                            (Roboto Mono Regular)         │
│                                                          │
│         ELABORADA POR     Horizons Architecture Systems  │
│                            (Roboto Mono Regular)         │
│                                                          │
│  horizonsarchitecture.ai   FECHA: 17/02/2026             │
│  (Roboto Mono)                                           │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

- La **línea conectora** (arco curvo del tipo de documento al título descriptivo) es un elemento gráfico característico de HA. Presente en propuestas formales; puede omitirse en documentos operativos o internos.
- Solo la etiqueta de tipo de documento (PLANTILLAS DE CONTACTO) y los labels de metadata (DESTINATARIO, ELABORADA POR, FECHA) van en uppercase. Los valores de metadata van en sentence case normal.
- DESTINATARIO puede ser una persona o una entidad institucional.
- Portada en Esquema A (fondo claro) para audiencias institucionales. Esquema B (fondo oscuro) para clientes corporativos.

### Página de cuerpo

```
┌──────────────────────────────────────────────────────────┐
│  2026  HORIZONS ARCHITECTURE         HORIZONSARCHITECTURE.AI │
│                                                          │
│  01                                                      │
│  Estrategia general de contacto                          │
│                                                          │
│  Cuerpo de texto. Plus Jakarta Sans Regular, 10–11pt.    │
│                                                          │
│  Principios de comunicación                              │
│  (subtítulo, Plus Jakarta Sans Medium, 13–15pt)          │
│                                                          │
│  **Concepto clave.** Descripción que sigue al concepto   │
│  en peso Regular.                                        │
│                                                          │
│  Segmento | Descripción                                  │
│  (headers de tabla en sentence case, SemiBold)           │
│                                                          │
│                           2                              │
└──────────────────────────────────────────────────────────┘
```

Nótese: todo en sentence case. El running header es el único elemento que va en uppercase (por ser un marcador de sistema, no contenido de lectura).

### Numeración de secciones

Números **zero-padded en Roboto Mono** en su propia línea, arriba del título en Plus Jakarta Sans:

```
01                          ← Roboto Mono Regular, 12–14pt
Estrategia general          ← Plus Jakarta Sans Regular, 18–22pt

[cuerpo]

02
Plantilla A — Legisladores federales

[cuerpo]
```

Sub-items numerados dentro de secciones (objetivos, responsabilidades) usan el mismo formato zero-padded pero inline:

```
01 Restablecer el vínculo con las participantes.
   Descripción debajo, indentada para alinearse con el texto.

02 Diagnosticar el estado de cada empresa.
   Descripción…
```

---

## 5. Tablas

### Estilo A — Header Offwhite (default)

|Elemento|Estilo|
|---|---|
|Header row bg|Offwhite `#F1F2F2`|
|Header text|Plus Jakarta Sans SemiBold 600, Offset Black, sentence case|
|Filas de cuerpo|Fondo blanco, Plus Jakarta Sans Regular 400|
|Filas alternadas|Opcional: `#F9F9FA` para tablas de 6+ filas|
|Bordes|Horizontales, 1px `#D9D9D9`. Sin bordes verticales ni exteriores.|
|Números|Roboto Mono, alineados a la derecha|
|Padding|8–12 px vertical, 12–16 px horizontal|
|Line height|≥ 1.15|

### Estilo B — Header azul (framework/metodología)

Mismo que Estilo A pero header row con fondo HA Blue `#3356F6` y texto White. Máximo uno por sección principal.

### Tablas de costos

- Montos: Roboto Mono Regular, alineados a la derecha
- Formato: `$X,XXX,XXX.XX` — siempre con centavos
- Especificar "MXN" y "(IVA incluido)" o "+ IVA"
- Fila de total: fondo Offwhite, label en SemiBold

### Tablas anchas (6+ columnas)

Reducir cuerpo a 9pt. Usar abreviaturas en columnas estrechas. Considerar orientación landscape.

---

## 6. Componentes recurrentes

### Etiqueta de concepto inline

Para principios, reglas o definiciones dentro del cuerpo de texto:

```
**Reconocimiento, no venta.** El correo debe sentirse como un reconocimiento
profesional al candidato.
```

Etiqueta en Plus Jakarta Sans SemiBold (600), seguida de punto, texto en Regular. Este patrón es frecuente en documentos de HA para listar principios sin usar bullets.

### Bloque de insight clave

Para conclusiones, tesis o statements críticos dentro de una sección:

- Borde izquierdo: 3px HA Blue `#3356F6`
- Fondo: `#F8F9FE`
- Texto: Plus Jakarta Sans Regular, Offset Black
- Padding: 12–16px
- Máximo uno por sección principal

### Bloque de nota

Para disclaimers, supuestos o aclaraciones que no interrumpen la narrativa:

- "Nota:" o "Nota sobre [tema]" en Plus Jakarta Sans SemiBold como subtítulo
- Cuerpo en Regular, mismo tamaño que texto base
- Opcionalmente en caja gris claro: fondo `#F7F7F7`, borde 1px `#E5E5E5`
- Sin azul — las notas son informativas, no enfáticas

### Display de dimensiones

Cuando las 6 dimensiones de HA aparecen en un documento:

**Opción tabla:** Header azul (Esquema C), columnas "Dimensión" y "Aplicación en el proyecto". Nombres en sentence case español (Legado, Comunidad, Aprendizaje, Tecnología, Contexto, Proyectos).

**Opción lista vertical:** Ícono + nombre (Medium 500) + párrafo descriptivo (Regular 400) por cada dimensión.

### Bloque de caso de uso / ejemplo

```
⟶ Estudiante: «¿Cuáles son las 5 carreras con mayor demanda proyectada
   en Querétaro para 2030?»
```

Flecha `⟶`, rol en SemiBold, contenido en guillemets « ». Indentación colgante para multi-línea.

### Tabla de variables (para templates)

```
{NOMBRE}         Nombre de pila del candidato (ej. «Carolina»)
{TITULO_CARGO}   «Senadora», «Diputado Federal», etc.
```

Variable en Roboto Mono, descripción en Plus Jakarta Sans Regular. Dos columnas simples, alineadas.

### Tabla descriptiva de dos columnas

Para tablas de tipo clave→valor donde la columna izquierda es un label corto y la derecha una descripción (ej. "Mecánica de envío", parámetros de configuración):

|Columna izquierda|Columna derecha|
|---|---|
|Label corto (SemiBold o Regular)|Descripción más larga (Regular)|

Sin header row. Bordes horizontales ligeros. Mismo estilo que tablas regulares pero más compacta.

### Timeline / Roadmap

Tabla con meses como columnas (Roboto Mono en headers), fases como filas, y bloques de color HA Blue (█) para indicar duración. Columna final de entregables en sentence case.

### Sección de cierre

**Estilo A — Cierre formal (propuestas y reportes ejecutivos):**

1. Párrafo de agradecimiento (cálido, no formulaico)
2. "Atentamente," (línea standalone)
3. Bloque de firma: Nombre (SemiBold o Medium), título (Regular), "Horizons Architecture Systems", email en Roboto Mono (opcional)
4. Si hay firma manuscrita: entre "Atentamente," y el nombre impreso

**Estilo B — Colofón (documentos operativos, playbooks, guías):**

```
Documento preparado por Horizons Architecture para [Cliente].
[Mes] [Año] — horizonsarchitecture.ai
```

Plus Jakarta Sans Regular para la primera línea. Roboto Mono para la segunda. Sin firma individual — el crédito es institucional.

---

## 7. Líneas y elementos gráficos

- **Arco conector en portada:** Línea curva fina (1px) que conecta la etiqueta del tipo de documento con el título descriptivo. Elemento gráfico característico de HA. Opcional en documentos internos.
- **Divisores de sección:** Regla horizontal 1px, `#F1F2F2` en fondos claros.
- **Conectores de diagrama:** 1px, segmentos rectos con esquinas en L o arcos simples. Offset Black en claro; White en oscuro.
- **Bullets:** `●` (círculo sólido) para items principales. `○` u `—` para sub-items. En docx-js: usar `LevelFormat.BULLET` (NUNCA unicode pegado como texto).
- **Prohibido:** Florituras decorativas, líneas onduladas, bordes punteados como ornamento.

---

## 8. Gráficas y visualización de datos

- Títulos: Plus Jakarta Sans Regular, sentence case, arriba del chart, alineados a la izquierda.
- Ejes y labels: Roboto Mono Regular, 8–10 pt.
- Grid lines: 1px, `#F1F2F2`, solo horizontales preferentemente.
- Serie primaria: HA Blue `#3356F6`, luego tints.
- Source: Roboto Mono 7–8 pt, debajo del chart.
- Cero charts 3D, cero sombras en barras. Plano, limpio, preciso.

---

## 9. Implementación

### CSS

```css
@import url('<https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600&family=Roboto+Mono:wght@400&display=swap>');

:root {
  --ha-blue: #3356F6;
  --ha-offset-black: #231F20;
  --ha-black: #000000;
  --ha-offwhite: #F1F2F2;
  --ha-white: #FFFFFF;
  --ha-blue-light: #F8F9FE;
  --ha-gray: #D9D9D9;
  --font-primary: 'Plus Jakarta Sans', 'Inter', 'Helvetica Neue', Arial, sans-serif;
  --font-mono: 'Roboto Mono', 'Space Mono', 'JetBrains Mono', Consolas, monospace;
  --line-height-tight: 1.15;
  --line-height-normal: 1.4;
  --line-height-relaxed: 1.5;
}
body {
  font-family: var(--font-primary);
  font-weight: 400;
  color: var(--ha-offset-black);
  background-color: var(--ha-white);
  line-height: var(--line-height-relaxed); /* mínimo 1.15 para CUALQUIER elemento */
  text-align: left;
}
/* NO letter-spacing en ningún elemento. Las fonts manejan su propio spacing. */
h1, h2 { font-weight: 400; }
h3 { font-weight: 500; }
.mono, .metadata, .source, .date, .page-number {
  font-family: var(--font-mono); font-weight: 400;
  font-size: 0.8125rem; line-height: var(--line-height-tight);
}
th {
  font-family: var(--font-primary); font-weight: 600;
  font-size: 0.8125rem; background-color: var(--ha-offwhite);
  text-align: left; padding: 0.625rem 1rem;
}
td {
  font-size: 0.875rem; padding: 0.625rem 1rem;
  border-bottom: 1px solid var(--ha-offwhite);
  line-height: var(--line-height-tight);
}
td.numeric { font-family: var(--font-mono); text-align: right; }
```

### Tailwind

```jsx
colors: {
  'ha-blue': '#3356F6', 'ha-offset-black': '#231F20', 'ha-black': '#000000',
  'ha-offwhite': '#F1F2F2', 'ha-white': '#FFFFFF', 'ha-blue-light': '#F8F9FE', 'ha-gray': '#D9D9D9',
},
fontFamily: {
  sans: ['"Plus Jakarta Sans"', 'Inter', '"Helvetica Neue"', 'Arial', 'sans-serif'],
  mono: ['"Roboto Mono"', '"Space Mono"', '"JetBrains Mono"', 'Consolas', 'monospace'],
},
```

### docx-js

```jsx
const HA = { primary: "Plus Jakarta Sans", mono: "Roboto Mono" };

// CRÍTICO: Pasar strings UTF-8 directamente.
//   new TextRun("Diagnóstico técnico de la organización")  ← CORRECTO
//   new TextRun("Diagnostico tecnico de la organizacion")  ← INCORRECTO
// NUNCA eliminar acentos ni reemplazar ñ con n.

const styles = {
  default: { document: { run: { font: HA.primary, size: 22, color: "231F20" } } },
  // Interlineado mínimo 1.15 (276 twips). Body default 1.4 (336 twips).
  paragraphStyles: [
    { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { font: HA.primary, size: 40, color: "231F20" }, // 20pt, sentence case
      paragraph: { spacing: { before: 720, after: 240, line: 276 }, outlineLevel: 0 } },
    { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { font: HA.primary, size: 28, color: "231F20" }, // 14pt, Medium weight, sentence case
      paragraph: { spacing: { before: 480, after: 160, line: 276 }, outlineLevel: 1 } },
    { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { font: HA.primary, size: 24, color: "231F20" }, // 12pt
      paragraph: { spacing: { before: 360, after: 120, line: 276 }, outlineLevel: 2 } },
  ]
};

// Número de sección: Roboto Mono, párrafo separado ARRIBA del heading
// new Paragraph({ children: [new TextRun({ text: "01", font: HA.mono, size: 26, color: "231F20" })] })
// new Paragraph({ heading: HeadingLevel.HEADING_1, children: [new TextRun("Resumen ejecutivo")] })

// Running header: tab stops para left/right
// Izquierda: "2026  HORIZONS ARCHITECTURE" (Roboto Mono, 7pt)
// Derecha: "HORIZONSARCHITECTURE.AI" (Roboto Mono, 7pt)

// Metadata de portada:
// new TextRun({ text: "DESTINATARIO:", font: HA.mono, size: 16, color: "231F20" })
// Valores también en HA.mono
```

---

## 10. Checklist de entrega

**Idioma:**

- [ ] Acentos correctos en todo el documento (á, é, í, ó, ú, ñ, ü)
- [ ] ¿…? y ¡…! con signos de apertura
- [ ] Comillas tipográficas, guiones largos (—, –), puntos suspensivos (…)
- [ ] Moneda: `$X,XXX,XXX.XX MXN`
- [ ] Fechas: DD/MM/YYYY o escrita completa

**Tipografía:**

- [ ] Plus Jakarta Sans: única sans-serif
- [ ] Roboto Mono: TODA fecha, número, fuente, metadata, URL, email, paginación, número de sección
- [ ] Sin bold (700+) en cuerpo. Sin italic.
- [ ] SemiBold (600) solo para: headers de tabla y etiquetas de concepto inline
- [ ] CERO letter-spacing / tracking / character spacing en todo el documento
- [ ] Sentence case en títulos, subtítulos, headers de tabla, labels de notas
- [ ] UPPERCASE solo en: etiqueta de tipo de documento (portada), labels de metadata (portada), running header, acrónimos

**Layout:**

- [ ] Todo alineado a la izquierda (números de página pueden ir centrados)
- [ ] Sin texto justificado
- [ ] Interlineado ≥ 1.15 en todo
- [ ] Whitespace generoso

**Color:**

- [ ] Solo los 5 colores de paleta + tints aprobados
- [ ] Alto contraste
- [ ] Azul ≤ 15% de superficie
- [ ] Cero gradientes, sombras, glow

**Estructura:**

- [ ] Portada: logo, etiqueta de tipo (UPPERCASE), título descriptivo (sentence case), metadata (DESTINATARIO/ELABORADA POR), footer
- [ ] Running header en todas las páginas de cuerpo
- [ ] Tablas: solo bordes horizontales, padding generoso
- [ ] Cierre apropiado al tipo de documento (firma formal para propuestas, colofón para operativos)

**Contenido:**

- [ ] Voz activa, directo, sustantivo
- [ ] Sin jerga corporativa ("leverage", "synergize", "stakeholder alignment")
- [ ] Sin clichés de startup ("disrupt", "10x")
- [ ] Español nativo, no traducido
- [ ] Dimensiones como sustantivos propios: Legado, Comunidad, Aprendizaje, Tecnología, Contexto, Proyectos
- [ ] "Augmentación" no "automatización"; "inteligencia híbrida" no "AI-powered"

---

## 11. Notas para Claude

### Prioridades (en orden)

1. **Cero letter-spacing.** Antes de todo: verificar que no haya `<w:spacing w:val="..."/>` en ningún `<w:rPr>`, ni `letter-spacing` en ningún CSS. Este es el error más frecuente y más visible. Las fonts ya tienen el spacing correcto.
2. **Integridad del texto en español.** ¿Están todos los acentos? ¿La ñ? ¿Los signos de apertura?
3. **Sentence case.** ¿Los títulos de sección, subtítulos, y headers de tabla están en sentence case? Si algo está en UPPERCASE y no es la etiqueta de portada, el running header, o un acrónimo: está mal.
4. **Mono para todo dato.** Cualquier elemento numérico, temporal, referencial o indexical va en Roboto Mono.
5. **Alineación izquierda.** Overridear cualquier centrado por default.
6. **Espacio sobre densidad.** Cuando el contenido no cabe, usar salto de página en lugar de reducir espaciado.
7. **Consistencia interna.** Si tomas una decisión de formato en la sección 01, repítela en todas las secciones.

### Errores frecuentes de Claude

- **Agregar letter-spacing / tracking a los textos.** Este es el error #1. En un test real, Claude generó 55 instancias de character spacing incluyendo 3pt en body text y 10pt en labels. El resultado es texto ilegiblemente espaciado. NUNCA usar `<w:spacing w:val="..."/>` en `<w:rPr>` ni `letter-spacing` en CSS.
- **Poner títulos y subtítulos en UPPERCASE.** En el mismo test, "Estrategia general de contacto" salió como "ESTRATEGIA GENERAL DE CONTACTO" y todos los subtítulos igual. Solo la etiqueta del tipo de documento en portada va en uppercase.
- **Poner headers de tabla en UPPERCASE.** "Segmento" salió como "SEGMENTO". Los headers de tabla van en sentence case con SemiBold.
- Generar "Seccion 1" en lugar de "01" (Roboto Mono) + "Estrategia general de contacto" (Plus Jakarta Sans)
- Usar bold para énfasis en cuerpo (prohibido — usar bloque de insight o etiqueta de concepto inline)
- Centrar títulos (siempre alinear a la izquierda)
- Usar comillas rectas `"..."` en lugar de tipográficas `"…"` o `«…»`
- Olvidar el running header en páginas de cuerpo
- Usar colores fuera de la paleta de 5 colores
- Hacer el azul dominante (es acento — ≤ 15%)
- Eliminar acentos en strings generados programáticamente

### Test rápido

Pregúntate: "¿Esto parece que vino de un Bloomberg terminal diseñado por un estudio suizo para un misfit brillante?" Si sí, vas bien. Si parece un slide deck corporativo genérico o un pitch de startup, revisa las reglas.

---

_Basado en la guía de identidad de marca de HA (Anagrama, 2023). Validado contra entregables reales: Propuesta Comunidad eNOVADORAS (Tec), Propuesta Xignux Multiagente, Propuesta SIC-Q Querétaro, Plantillas de Contacto MLP (Escuela de Gobierno). Horizons Architecture._