# Skill: proposal-docx

Convert a Markdown proposal into a professionally formatted .docx using the HA visual system.

## Trigger

`\proposal-docx {path-to-markdown}` or `\proposal-docx` (will ask for path)

## What it produces

A `.docx` file matching the HA proposal format (same as Xignux reference):
- **Cover page**: HA logo, "PROPUESTA", title, subtitle, DESTINATARIO/ELABORADA POR metadata, footer with website + date
- **Numbered sections**: `01`–`NN` in Roboto Mono blue (#3356F6) + titles in Plus Jakarta Sans SemiBold 13pt
- **Tables**: Blue header row (#3356F6, white text), alternating gray rows (#F5F5F5)
- **Bullets**: Small `•` (8pt) with Plus Jakarta Sans body text
- **Body text**: Plus Jakarta Sans 10pt, line spacing 1.15, color #1A1A1A
- **Closing**: Signature block with name, title (Roboto Mono), company, email

## Protocol

### Step 1: Parse the Markdown

Read the markdown file. Extract:
- **Title**: First `# ` heading → cover title
- **Subtitle**: First bold line or second line under title → cover subtitle
- **Metadata**: Look for `Fecha:`, `Para:`, `Preparado por:` → cover fields
- **Sections**: Each `## ` heading becomes a numbered section (01, 02, ...)
- **Sub-sections**: Each `### ` heading becomes a sub-heading (Plus Jakarta Sans Medium 12pt)
- **Tables**: Markdown tables → blue-header tables
- **Bullets**: `- ` lines → small bullet points
- **Bold**: `**text**` → bold runs within paragraphs

### Step 2: Set up build environment

```bash
mkdir -p /tmp/ha-proposal-docx
cd /tmp/ha-proposal-docx
npm list docx 2>/dev/null || (npm init -y && npm install docx)
```

### Step 3: Generate the build script

Create `/tmp/ha-proposal-docx/build.js` using the HA docx template. The script MUST:

1. **Use these exact fonts and sizes** (in half-points):
   - Default/body: `Plus Jakarta Sans`, size 20 (10pt)
   - Heading 1 (section titles): `Plus Jakarta Sans SemiBold`, size 26 (13pt), bold, spacing after 400
   - Heading 2 (section numbers): `Roboto Mono Medium`, size 18 (9pt), color #3356F6
   - Heading 3 (sub-headings): `Plus Jakarta Sans Medium`, size 24 (12pt), spacing before 320, after 80
   - Table text: size 18 (9pt)
   - Cover metadata: size 16 (8pt)

2. **Use these colors**:
   - HA_BLUE: `3356F6`
   - HA_BLACK: `1A1A1A`
   - HA_GRAY: `4A4A4A`
   - HA_LIGHT_GRAY: `F5F5F5`
   - WHITE: `FFFFFF`

3. **Custom bullet numbering** (critical — default bullets are too large):
   ```js
   numbering: {
     config: [{
       reference: "ha-bullets",
       levels: [{
         level: 0,
         format: LevelFormat.BULLET,
         text: "\u2022",
         alignment: AlignmentType.LEFT,
         style: {
           run: { font: "Plus Jakarta Sans", size: 16, color: "1A1A1A" },
           paragraph: { indent: { left: convertInchesToTwip(0.5), hanging: convertInchesToTwip(0.25) } },
         },
       }],
     }],
   }
   ```
   All bullet paragraphs use `numbering: { reference: "ha-bullets", level: 0 }` — NOT `bullet: { level: 0 }`.

4. **Logo**: Read from `04-technology/my-templates/ha-logo-dark.png` (1253×1138px → display ~155×141px)

5. **Cover page structure** (all on page 1, page break after):
   - Empty lines → Logo → "PROPUESTA" (16pt, blue) → Title (18pt) → Subtitle (11pt, gray) → spacing → DESTINATARIO block → ELABORADA POR block → footer line (website + date)

6. **Section heading helper**: Each `##` becomes two paragraphs — the number (`01`) in Roboto Mono blue, then the title in Plus Jakarta Sans SemiBold.

7. **Table types**:
   - Data tables (3+ columns): Blue header row, alternating shaded body rows
   - Key-value tables (2 columns, no header labels): No-border, alternating gray, bold keys
   - Workshop info tables (Dimensiones HA / Duración / Formato): No-border key-value style

8. **Bold parsing**: Split text on `**...**` markers, create separate TextRun objects with `bold: true`.

9. **Closing block**: "Atentamente," → EDGAR BARROSO (bold) → FOUNDER & CEO (Roboto Mono 8pt gray) → Horizons Architecture Systems → email (Roboto Mono 8pt blue)

10. **Document defaults**:
    ```js
    styles: { default: { document: {
      run: { font: "Plus Jakarta Sans", size: 20, color: "1A1A1A" },
      paragraph: { spacing: { after: 240, before: 240, line: 276 } },
    }}}
    ```
    Page: Letter (8.5"×11"), margins: 1" all sides.

### Step 4: Build and fix fonts

```bash
cd /tmp/ha-proposal-docx && node build.js
python3 fix_fonts.py "{output_path}"
```

The `fix_fonts.py` script injects font declarations into the docx's `fontTable.xml` (docx-js generates it empty). Must declare: Plus Jakarta Sans, Plus Jakarta Sans SemiBold, Plus Jakarta Sans Medium, Roboto Mono Medium.

### Step 5: Report

Tell Edgar:
- Output path
- Number of sections, tables, bullet lists generated
- Ask to open and verify

## Mapping Rules: Markdown → Docx

| Markdown | Docx element |
|----------|-------------|
| `# Title` | Cover page title |
| `**Subtitle**` or line 2 | Cover page subtitle |
| `**Fecha:** ...` | Cover metadata |
| `**Para:** ...` | DESTINATARIO block |
| `**Preparado por:** ...` | ELABORADA POR block |
| `---` | Ignored (section breaks implied by ##) |
| `## Section Name` | Section number (auto-increment) + Section title |
| `### Sub-section` | Sub-heading (Plus Jakarta Sans Medium 12pt) |
| `\| col \| col \|` | Table (blue header if 3+ cols, key-value if 2 cols) |
| `- item` | Bullet point (small •) |
| `**bold text**` | Bold run within paragraph |
| `1. item` | Numbered step (Roboto Mono number + text) |
| Plain paragraph | Body text (Plus Jakarta Sans 10pt) |

## Notes

- Output file goes next to the source markdown, same name with `.docx` extension
- If the markdown has a closing section with "Contacto:" or "Atentamente", generate the signature block
- The build script is disposable (`/tmp/`) — the skill regenerates it each time
- Font fix is mandatory — always run `fix_fonts.py` after `Packer.toBuffer()`
