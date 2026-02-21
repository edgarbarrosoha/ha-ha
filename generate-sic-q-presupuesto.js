const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel,
  BorderStyle, WidthType, ShadingType, SectionType,
  PageNumber, LevelFormat, LineRuleType,
} = require("docx");

// ═══════════════════════════════════════════════
// HA BRAND CONSTANTS
// ═══════════════════════════════════════════════

const HA_BLUE = "3356F6";
const HA_DARK = "231F20";
const HA_GRAY = "666666";
const HA_WHITE = "FFFFFF";

const SANS = "Plus Jakarta Sans";
const SANS_MEDIUM = "Plus Jakarta Sans Medium";
const SANS_SEMIBOLD = "Plus Jakarta Sans SemiBold";
const MONO = "Roboto Mono";

const PAGE_LETTER = { width: 12240, height: 15840 };
const MARGIN_ONE_INCH = { top: 1440, right: 1440, bottom: 1440, left: 1440, header: 720, footer: 720 };
const CONTENT_WIDTH = 9360;

const noBorder = { style: BorderStyle.NONE, size: 0, color: HA_WHITE };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };

// ═══════════════════════════════════════════════
// HELPERS
// ═══════════════════════════════════════════════

function bodyText(text, opts = {}) {
  return new TextRun({ text, font: SANS, size: 21, color: HA_DARK, ...opts });
}

function bodyBold(text, opts = {}) {
  return new TextRun({ text, font: SANS_SEMIBOLD, size: 21, color: HA_DARK, ...opts });
}

function monoText(text, opts = {}) {
  return new TextRun({ text, font: MONO, size: 16, color: HA_GRAY, ...opts });
}

function monoAmount(text, opts = {}) {
  return new TextRun({ text, font: MONO, size: 21, color: HA_DARK, ...opts });
}

function sectionNumber(num) {
  return new Paragraph({
    spacing: { before: 0, after: 80 },
    keepNext: true,
    children: [new TextRun({ text: String(num).padStart(2, "0"), font: MONO, size: 16, color: HA_GRAY })],
  });
}

function sectionDivider() {
  return new Paragraph({
    spacing: { before: 960, after: 480 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC", space: 8 } },
    children: [],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 0, after: 360, line: 276 },
    keepNext: true,
    children: [new TextRun({ text, font: SANS_MEDIUM, size: 40, color: HA_BLUE })],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 600, after: 240, line: 300 },
    keepNext: true,
    children: [new TextRun({ text, font: SANS_SEMIBOLD, size: 28, color: HA_DARK })],
  });
}

function bodyParagraph(runs) {
  return new Paragraph({
    spacing: { before: 0, after: 160, line: 276 },
    children: Array.isArray(runs) ? runs : [runs],
  });
}

function bulletItem(runs, level = 0, isLast = false) {
  return new Paragraph({
    numbering: { reference: "ha-bullets", level },
    spacing: { before: 0, after: isLast ? 240 : 120, line: 276 },
    children: Array.isArray(runs) ? runs : [runs],
  });
}

function makeRunningHeader(year) {
  return new Header({
    children: [
      new Table({
        rows: [
          new TableRow({
            children: [
              new TableCell({
                borders: noBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [new Paragraph({
                  spacing: { before: 0, after: 0 },
                  children: [new TextRun({ text: `${year} HORIZONS ARCHITECTURE`, font: MONO, size: 16, color: HA_GRAY })],
                })],
              }),
              new TableCell({
                borders: noBorders,
                width: { size: 4680, type: WidthType.DXA },
                children: [new Paragraph({
                  alignment: AlignmentType.RIGHT,
                  spacing: { before: 0, after: 0 },
                  children: [new TextRun({ text: "HORIZONSARCHITECTURE.AI", font: MONO, size: 16, color: HA_GRAY })],
                })],
              }),
            ],
          }),
        ],
        width: { size: CONTENT_WIDTH, type: WidthType.DXA },
        borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideH: noBorder, insideV: noBorder },
      }),
    ],
  });
}

function makeFooter() {
  return new Footer({
    children: [new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ children: [PageNumber.CURRENT], font: MONO, size: 16, color: HA_GRAY })],
    })],
  });
}

// ═══════════════════════════════════════════════
// DOCUMENT
// ═══════════════════════════════════════════════

const runningHeader = makeRunningHeader(2026);
const pageFooter = makeFooter();

const doc = new Document({
  styles: {
    default: {
      document: {
        run: { font: SANS, size: 21, color: HA_DARK },
        paragraph: { spacing: { line: 276, after: 160 } },
      },
    },
    paragraphStyles: [
      {
        id: "Heading1", name: "Heading 1",
        basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: SANS_MEDIUM, size: 40, color: HA_BLUE },
        paragraph: { spacing: { before: 720, after: 360, line: 360 }, outlineLevel: 0 },
      },
      {
        id: "Heading2", name: "Heading 2",
        basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: SANS_SEMIBOLD, size: 28, color: HA_DARK },
        paragraph: { spacing: { before: 600, after: 240, line: 300 }, outlineLevel: 1 },
      },
      {
        id: "Heading3", name: "Heading 3",
        basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { font: SANS_SEMIBOLD, size: 26, color: HA_DARK },
        paragraph: { spacing: { before: 360, after: 160, line: 300 }, outlineLevel: 2 },
      },
    ],
  },
  numbering: {
    config: [
      {
        reference: "ha-bullets",
        levels: [
          { level: 0, format: LevelFormat.BULLET, text: "\u25CF", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
          { level: 1, format: LevelFormat.BULLET, text: "\u25CB", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
          { level: 2, format: LevelFormat.BULLET, text: "\u25A0", alignment: AlignmentType.LEFT,
            style: { paragraph: { indent: { left: 2160, hanging: 360 } } } },
        ],
      },
    ],
  },
  sections: [
    // ═══════════════════════════════════════════════
    // SECTION 1: PORTADA (GENERAL type)
    // ═══════════════════════════════════════════════
    {
      properties: {
        page: { size: PAGE_LETTER, margin: MARGIN_ONE_INCH },
      },
      children: [
        // Logo / brand
        new Paragraph({
          spacing: { before: 0, after: 3600 },
          children: [new TextRun({ text: "HORIZONS ARCHITECTURE", font: MONO, size: 16, bold: true, color: HA_DARK })],
        }),

        // Etiqueta del tipo
        new Paragraph({
          spacing: { before: 0, after: 200 },
          children: [new TextRun({ text: "FICHA PRESUPUESTAL", font: SANS_MEDIUM, size: 28, color: HA_DARK })],
        }),

        // Titulo con borde izquierdo azul
        new Paragraph({
          spacing: { before: 200, after: 480, line: 360, lineRule: LineRuleType.AT_LEAST },
          border: { left: { style: BorderStyle.SINGLE, size: 6, color: HA_BLUE, space: 12 } },
          children: [new TextRun({
            text: "SIC-Q \u2014 Dimensi\u00f3n presupuestal 2026",
            font: SANS_MEDIUM, size: 56, color: HA_DARK,
          })],
        }),

        // Subtitulo
        new Paragraph({
          spacing: { before: 0, after: 360 },
          children: [new TextRun({
            text: "Aproximaci\u00f3n presupuestal para el Sistema de Inteligencia Colectiva de Quer\u00e9taro",
            font: SANS, size: 24, color: HA_GRAY,
          })],
        }),

        // Fecha
        new Paragraph({
          spacing: { before: 0, after: 80 },
          children: [new TextRun({ text: "FEBRERO 2026", font: MONO, size: 18, color: HA_GRAY })],
        }),

        // Cliente
        new Paragraph({
          spacing: { before: 0, after: 0 },
          children: [new TextRun({ text: "Antonio Rangel / Gobierno de Quer\u00e9taro", font: MONO, size: 18, color: HA_GRAY })],
        }),
      ],
    },

    // ═══════════════════════════════════════════════
    // SECTION 2: BODY
    // ═══════════════════════════════════════════════
    {
      properties: {
        type: SectionType.NEXT_PAGE,
        page: { size: PAGE_LETTER, margin: MARGIN_ONE_INCH },
        headers: { default: runningHeader },
        footers: { default: pageFooter },
      },
      children: [
        // ── Intro personal ──
        bodyParagraph(bodyText("To\u00f1o,")),
        bodyParagraph(bodyText("N\u00fameros gruesos para tu reuni\u00f3n. Una aproximaci\u00f3n a lo que necesitaremos para el a\u00f1o.")),

        // ── Resumen ejecutivo de cifras ──
        new Paragraph({
          spacing: { before: 240, after: 80, line: 276 },
          children: [
            bodyBold("Pagado: "),
            monoAmount("$3.7M"),
            bodyText(" (30+ entregables en etapa de prototipo)"),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 80, line: 276 },
          children: [
            bodyBold("Pendiente contrato original: "),
            monoAmount("~$8.6M + IVA"),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 80, line: 276 },
          children: [
            bodyBold("3 productos nuevos: "),
            monoAmount("$6M + IVA"),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 80, line: 276 },
          children: [
            bodyBold("Proyecto completo (todo lo del contrato m\u00e1s los 3 proyectos nuevos): "),
            monoAmount("$16M + IVA"),
            bodyText(" | Con buffer: "),
            monoAmount("$18M + IVA"),
          ],
        }),
        new Paragraph({
          spacing: { before: 0, after: 160, line: 276 },
          children: [
            bodyBold("Cloud (anual, aparte): "),
            monoAmount("$600K"),
            bodyText(" a "),
            monoAmount("$5M"),
            bodyText(" seg\u00fan escala"),
          ],
        }),

        // ══════════════════════════════════════
        // 01 — Lo que ya entregamos
        // ══════════════════════════════════════
        sectionDivider(),
        sectionNumber(1),
        h1("Lo que ya entregamos (etapa de prototipo)"),

        bodyParagraph([
          bodyText("Con los "),
          monoAmount("$3.7M"),
          bodyText(" pagados hemos entregado m\u00e1s de 30 productos: prototipo navegable del SIC-Q, primer agente de IA funcional, presentaci\u00f3n para el gobernador (que se har\u00e1 en mayo), demo de agentes, visor de mapas, app de capacitaci\u00f3n para moderadores, 2 talleres de codise\u00f1o (74 participantes, 778 ideas, 248 actores), sesi\u00f3n CONSEQRO (13 consejeros, 4 demos en vivo), 5 reportes, procesamiento con IA en tiempo real, todos los materiales de ejecuci\u00f3n, replanteamiento estrat\u00e9gico, Citizens Journey v.03 y v.04, dise\u00f1o de proceso en 12 fases, simulador de costos, c\u00f3digo de \u00e9tica, benchmarks internacionales, y documentos base de conocimientos. Todo documentado en Notion y en las plataformas de HA."),
        ]),

        // ══════════════════════════════════════
        // 02 — Lo que estaba y lo que sigue
        // ══════════════════════════════════════
        sectionDivider(),
        sectionNumber(2),
        h1("Lo que estaba y lo que sigue: $16M + IVA"),

        h2("Del contrato original (~$8.6M + IVA pendientes)"),

        bulletItem([
          bodyBold("Plataforma de Orquestaci\u00f3n Ciudadana"),
          bodyText(" \u2014 sistema web y m\u00f3vil de participaci\u00f3n para ~50,000 usuarios con m\u00faltiples canales (web, m\u00f3vil, WhatsApp), procesamiento IA en tiempo real, reportes de inteligencia colectiva y seguimiento al ciudadano. El componente m\u00e1s ambicioso del proyecto."),
        ]),
        bulletItem([
          bodyBold("Sistema de Agentes de IA p\u00fablicos"),
          bodyText(" \u2014 agentes conversacionales conectados a bases de datos oficiales."),
        ]),
        bulletItem([
          bodyBold("Arquitectura t\u00e9cnica y de datos"),
          bodyText(" \u2014 infraestructura cloud, seguridad, integraci\u00f3n institucional."),
        ]),
        bulletItem([
          bodyBold("Dashboard de inteligencia colectiva"),
          bodyText(" \u2014 visualizaci\u00f3n para la Secretar\u00eda y el CONSEQRO."),
        ], 0, true),

        h2("3 productos nuevos ($6M + IVA)"),

        bodyParagraph(bodyText("Surgieron de los talleres, el CONSEQRO y lo que definimos el 19 de febrero:")),

        bulletItem([
          bodyBold("Agente To\u00f1o"),
          bodyText(" \u2014 tu herramienta de inteligencia ejecutiva: reportes autom\u00e1ticos, fichas por municipio, indicadores, res\u00famenes de prensa."),
        ]),
        bulletItem([
          bodyBold("Caso ejecutivo para el Gobernador"),
          bodyText(" \u2014 demostraci\u00f3n estrat\u00e9gica con datos reales del valor del SIC."),
        ]),
        bulletItem([
          bodyBold("Procesamiento de IA del Plan QRO 2050"),
          bodyText(" \u2014 toda la informaci\u00f3n existente procesada para la actualizaci\u00f3n del Plan. Herramienta de planeaci\u00f3n para Sergio."),
        ], 0, true),

        bodyParagraph(bodyText("Estos 3 productos no estaban incluidos en el contrato original. Surgieron del avance del proyecto \u2014 no es un incremento arbitrario, es lo que se necesita para generar impacto este a\u00f1o.")),

        // ══════════════════════════════════════
        // 03 — Timeline
        // ══════════════════════════════════════
        sectionDivider(),
        sectionNumber(3),
        h1("Timeline estimado"),

        bulletItem([
          bodyBold("Primeros 4 meses"),
          bodyText(" \u2014 los 3 frentes operando: tu agente, el caso gobernador, y la herramienta de planeaci\u00f3n generando resultados."),
        ]),
        bulletItem([
          bodyBold("Meses 4\u20138"),
          bodyText(" \u2014 arquitectura t\u00e9cnica, agentes p\u00fablicos y dashboard en desarrollo."),
        ]),
        bulletItem([
          bodyBold("Meses 6\u201312"),
          bodyText(" \u2014 plataforma ciudadana: dise\u00f1o, desarrollo y lanzamiento para ~50,000 usuarios."),
        ], 0, true),

        bodyParagraph(bodyText("Los 3 frentes dan resultados r\u00e1pido. La plataforma ciudadana es la que toma m\u00e1s tiempo.")),

        // ══════════════════════════════════════
        // 04 — Cloud
        // ══════════════════════════════════════
        sectionDivider(),
        sectionNumber(4),
        h1("Infraestructura cloud (costo operativo anual)"),

        bodyParagraph(bodyText("Aparte del desarrollo, el sistema necesita infraestructura de nube para operar un a\u00f1o. Dependiendo de la escala:")),

        bulletItem([
          monoAmount("$600K/a\u00f1o"),
          bodyText(" \u2014 piloto (~500 usuarios: gobierno, consejos, equipo cercano)"),
        ]),
        bulletItem([
          monoAmount("$1.5M/a\u00f1o"),
          bodyText(" \u2014 operaci\u00f3n est\u00e1ndar (~5,000\u201310,000 usuarios: gobierno + ciudadanos activos)"),
        ]),
        bulletItem([
          monoAmount("$5M/a\u00f1o"),
          bodyText(" \u2014 escala completa (~50,000 usuarios: todos los canales ciudadanos abiertos)"),
        ], 0, true),

        // Buffer
        new Paragraph({
          spacing: { before: 240, after: 160, line: 276 },
          children: [
            bodyBold("Buffer: +$2M + IVA. "),
            bodyText("Como esto no es una propuesta formal ni contractual sino la dimensi\u00f3n que me pediste, incluyo un margen de "),
            monoAmount("$2M"),
            bodyText(" para cubrir la diferencia entre estos n\u00fameros gruesos y lo que resulte al aterrizar los detalles. Total con buffer: "),
            bodyBold("$18M + IVA."),
          ],
        }),

        // ══════════════════════════════════════
        // 05 — Si hay que ajustar
        // ══════════════════════════════════════
        sectionDivider(),
        sectionNumber(5),
        h1("Si hay que ajustar"),

        new Paragraph({
          spacing: { before: 0, after: 160, line: 276 },
          children: [
            monoAmount("$13M + IVA"),
            bodyText(" \u2014 Agente To\u00f1o, caso ejecutivo para el gobernador, procesamiento de IA del Plan QRO 2050, agentes p\u00fablicos, arquitectura t\u00e9cnica y dashboard. Lo \u00fanico que queda fuera es la Plataforma de Orquestaci\u00f3n Ciudadana \u2014 el componente de mayor inversi\u00f3n y mayor tiempo."),
          ],
        }),

        new Paragraph({
          spacing: { before: 0, after: 240, line: 276 },
          children: [
            monoAmount("$10M + IVA"),
            bodyText(" \u2014 Agente To\u00f1o, caso ejecutivo para el gobernador, procesamiento de IA del Plan QRO 2050, y arquitectura b\u00e1sica. La plataforma ciudadana, los agentes p\u00fablicos y el dashboard no entran en este presupuesto."),
          ],
        }),

        bodyParagraph(bodyText("En cualquier escenario, los 3 frentes van \u2014 t\u00fa con tu agente, el caso ejecutivo para el gobernador, y Sergio con la herramienta de planeaci\u00f3n. Lo que se recorta es la plataforma ciudadana: lo que m\u00e1s recursos requiere, pero que puede esperar mientras los 3 frentes ya generan valor.")),

        // ══════════════════════════════════════
        // CIERRE
        // ══════════════════════════════════════
        sectionDivider(),

        new Paragraph({
          spacing: { before: 240, after: 160, line: 276 },
          children: [bodyText("\u00bfC\u00f3mo la ves? Todo lo podemos platicar.")],
        }),
        new Paragraph({
          spacing: { before: 0, after: 480, line: 276 },
          children: [bodyText("Un abrazo.")],
        }),

        // Colofon
        new Paragraph({
          spacing: { before: 480, after: 80, line: 276 },
          children: [bodyText("Documento preparado por Horizons Architecture para el Gobierno de Quer\u00e9taro.")],
        }),
        new Paragraph({
          spacing: { before: 0, after: 0, line: 276 },
          children: [new TextRun({ text: "Febrero 2026 \u2014 horizonsarchitecture.ai", font: MONO, size: 18, color: HA_GRAY })],
        }),
      ],
    },
  ],
});

// ═══════════════════════════════════════════════
// GENERATE
// ═══════════════════════════════════════════════

const outputPath = "06-projects/sic-q/06-projects/propuestas/SIC-Q-Dimension-Presupuestal-2026.docx";

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`Generated: ${outputPath}`);
}).catch((err) => {
  console.error("Error generating docx:", err);
});
