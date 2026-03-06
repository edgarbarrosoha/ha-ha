import {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  WidthType, AlignmentType, BorderStyle, ShadingType, HeadingLevel,
  Header, Footer, SectionType, ImageRun, PageBreak, TableOfContents,
  LineRuleType, LevelFormat,
} from "docx";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ── BRAND CONSTANTS ──
const HA_BLUE = "3356F6";
const HA_DARK = "231F20";
const BLACK = "000000";
const OFFWHITE = "F1F2F2";
const WHITE = "FFFFFF";
const GREY = "666666";
const LIGHT_GREY = "CCCCCC";

const SANS_MED = "Plus Jakarta Sans Medium";
const SANS_SEMI = "Plus Jakarta Sans SemiBold";
const SANS_REG = "Plus Jakarta Sans";
const MONO = "Roboto Mono";

const PAGE_LETTER = { width: 12240, height: 15840 };
const MARGIN_1IN = { top: 1440, right: 1440, bottom: 1440, left: 1440, header: 720, footer: 720 };
const CONTENT_W = 9360;

const noBorder = { style: BorderStyle.NONE, size: 0, color: WHITE };
const noBorders = { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder };
const hBordersOnly = {
  top: { style: BorderStyle.SINGLE, size: 1, color: LIGHT_GREY },
  bottom: { style: BorderStyle.SINGLE, size: 1, color: LIGHT_GREY },
  left: noBorder, right: noBorder,
};

// ── LOGO ──
const logoBuffer = fs.readFileSync(path.join(__dirname, "logo.png"));

// ── HELPERS ──
function mono(text, size = 16, color = GREY) {
  return new TextRun({ text, font: MONO, size, color });
}
function sans(text, size = 21, color = HA_DARK, font = SANS_REG) {
  return new TextRun({ text, font, size, color });
}
function semiB(text, size = 21, color = HA_DARK) {
  return sans(text, size, color, SANS_SEMI);
}
function med(text, size = 40, color = HA_DARK) {
  return sans(text, size, color, SANS_MED);
}

function bodyP(texts, opts = {}) {
  const children = typeof texts === "string" ? [sans(texts)] : texts;
  return new Paragraph({ spacing: { before: 0, after: 160, line: 276 }, ...opts, children });
}

function bulletP(text, level = 0, isLast = false) {
  return new Paragraph({
    spacing: { before: 0, after: isLast ? 240 : 120, line: 276 },
    bullet: { level },
    children: [sans(text)],
  });
}

function sectionSep() {
  return new Paragraph({
    spacing: { before: 960, after: 480 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 1, color: LIGHT_GREY, space: 8 } },
    children: [],
  });
}

function sectionNum(n) {
  return new Paragraph({
    spacing: { before: 0, after: 80 }, keepNext: true,
    children: [mono(String(n).padStart(2, "0"), 18, GREY)],
  });
}

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 0, after: 360, line: 276 }, keepNext: true,
    border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: HA_BLUE, space: 8 } },
    children: [med(text, 40, HA_BLUE)],
  });
}

function h2(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 600, after: 240, line: 300 }, keepNext: true,
    children: [semiB(text, 28, HA_DARK)],
  });
}

function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 360, after: 160, line: 300 }, keepNext: true,
    children: [semiB(text, 24, HA_DARK)],
  });
}

function quoteBlock(text, author = "") {
  const children = [
    new Paragraph({ spacing: { before: 0, after: author ? 80 : 0, line: 276 }, children: [sans(text, 21, HA_DARK)] }),
  ];
  if (author) children.push(new Paragraph({ spacing: { before: 0, after: 0, line: 276 }, children: [mono(author, 16, GREY)] }));
  return new Table({
    rows: [new TableRow({ children: [new TableCell({
      borders: { top: noBorder, bottom: noBorder, right: noBorder, left: { style: BorderStyle.SINGLE, size: 6, color: HA_BLUE } },
      shading: { fill: OFFWHITE, type: ShadingType.CLEAR },
      margins: { top: 160, bottom: 160, left: 240, right: 240 },
      width: { size: CONTENT_W, type: WidthType.DXA }, children,
    })] })],
    width: { size: CONTENT_W, type: WidthType.DXA },
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideH: noBorder, insideV: noBorder },
  });
}

function insightBlock(text) { return quoteBlock(text); }

function dataTable(headers, rows, colWidths) {
  const totalW = colWidths.reduce((a, b) => a + b, 0);
  const headerRow = new TableRow({
    children: headers.map((h, i) => new TableCell({
      borders: hBordersOnly, width: { size: colWidths[i], type: WidthType.DXA },
      shading: { fill: HA_BLUE, type: ShadingType.CLEAR },
      margins: { top: 100, bottom: 100, left: 140, right: 140 },
      children: [new Paragraph({ spacing: { before: 0, after: 0, line: 264 }, children: [semiB(h, 20, WHITE)] })],
    })),
  });
  const dataRows = rows.map(row => new TableRow({
    children: row.map((cell, i) => new TableCell({
      borders: hBordersOnly, width: { size: colWidths[i], type: WidthType.DXA },
      margins: { top: 100, bottom: 100, left: 140, right: 140 },
      children: [new Paragraph({ spacing: { before: 0, after: 0, line: 264 }, children: [sans(cell, 20, HA_DARK)] })],
    })),
  }));
  return new Table({ rows: [headerRow, ...dataRows], width: { size: totalW, type: WidthType.DXA } });
}

function codeBlock(text) {
  return new Table({
    rows: [new TableRow({ children: [new TableCell({
      borders: noBorders, shading: { fill: OFFWHITE, type: ShadingType.CLEAR },
      margins: { top: 140, bottom: 140, left: 200, right: 200 },
      width: { size: CONTENT_W, type: WidthType.DXA },
      children: text.split("\n").map(line => new Paragraph({ spacing: { before: 0, after: 0, line: 240 }, children: [mono(line, 15, HA_DARK)] })),
    })] })],
    width: { size: CONTENT_W, type: WidthType.DXA },
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideH: noBorder, insideV: noBorder },
  });
}

function spacer(twips = 200) {
  return new Paragraph({ spacing: { before: twips, after: 0 }, children: [] });
}

// ── RUNNING HEADER & FOOTER ──
const runningHeader = new Header({
  children: [new Table({
    rows: [new TableRow({ children: [
      new TableCell({ borders: noBorders, width: { size: 50, type: WidthType.PERCENTAGE },
        children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [mono("2026 HORIZONS ARCHITECTURE", 16, GREY)] })] }),
      new TableCell({ borders: noBorders, width: { size: 50, type: WidthType.PERCENTAGE },
        children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0 }, children: [mono("HORIZONSARCHITECTURE.AI", 16, GREY)] })] }),
    ] })],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideH: noBorder, insideV: noBorder },
  })],
});

const pageFooter = new Footer({
  children: [new Table({
    rows: [new TableRow({ children: [
      new TableCell({ borders: noBorders, width: { size: 50, type: WidthType.PERCENTAGE },
        children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [mono("PLATAFORMA TEC BEYOND", 14, GREY)] })] }),
      new TableCell({ borders: noBorders, width: { size: 50, type: WidthType.PERCENTAGE },
        children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0 }, children: [mono("MARZO 2026", 14, GREY)] })] }),
    ] })],
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideH: noBorder, insideV: noBorder },
  })],
});

// ── COVER PAGE ──
// Logo placeholder — will be inserted by python-docx post-process
const coverChildren = [
  new Paragraph({
    spacing: { before: 0, after: 0 },
    children: [mono("{{LOGO_PLACEHOLDER}}", 2, WHITE)],  // invisible marker
  }),
  spacer(1800),
  new Paragraph({ spacing: { before: 0, after: 200 }, children: [mono("ENTREGABLE", 18, GREY)] }),
  new Paragraph({
    spacing: { before: 0, after: 480, line: 360, lineRule: LineRuleType.AT_LEAST },
    border: { bottom: { style: BorderStyle.SINGLE, size: 3, color: HA_BLUE, space: 12 } },
    children: [med("Plataforma Tec Beyond: descripción de aplicación y especificación técnica", 40, BLACK)],
  }),
  spacer(400),
  new Table({
    rows: [
      new TableRow({ children: [
        new TableCell({ borders: noBorders, width: { size: 2800, type: WidthType.DXA }, shading: { fill: OFFWHITE, type: ShadingType.CLEAR }, margins: { top: 120, bottom: 120, left: 180, right: 100 },
          children: [new Paragraph({ children: [mono("PREPARADO PARA:", 16, GREY)] })] }),
        new TableCell({ borders: noBorders, shading: { fill: OFFWHITE, type: ShadingType.CLEAR }, margins: { top: 120, bottom: 120, left: 100, right: 180 },
          children: [new Paragraph({ children: [mono("JORGE BLANDO", 16, HA_DARK)] })] }),
      ] }),
      new TableRow({ children: [
        new TableCell({ borders: noBorders, width: { size: 2800, type: WidthType.DXA }, shading: { fill: OFFWHITE, type: ShadingType.CLEAR }, margins: { top: 0, bottom: 120, left: 180, right: 100 },
          children: [new Paragraph({ children: [mono("PREPARADO POR:", 16, GREY)] })] }),
        new TableCell({ borders: noBorders, shading: { fill: OFFWHITE, type: ShadingType.CLEAR }, margins: { top: 0, bottom: 120, left: 100, right: 180 },
          children: [
            new Paragraph({ children: [mono("EDGAR BARROSO", 16, HA_DARK)] }),
            new Paragraph({ children: [mono("HORIZONS ARCHITECTURE", 16, HA_DARK)] }),
          ] }),
      ] }),
    ],
    width: { size: CONTENT_W, type: WidthType.DXA },
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideH: noBorder, insideV: noBorder },
  }),
  spacer(2000),
  new Table({
    rows: [new TableRow({ children: [
      new TableCell({ borders: noBorders, width: { size: 3120, type: WidthType.DXA },
        children: [new Paragraph({ spacing: { before: 0, after: 0 }, children: [mono("HORIZONSARCHITECTURE.AI", 16, GREY)] })] }),
      new TableCell({ borders: noBorders, width: { size: 3120, type: WidthType.DXA },
        children: [new Paragraph({ alignment: AlignmentType.CENTER, spacing: { before: 0, after: 0 }, children: [mono("FECHA: MARZO 2026", 16, GREY)] })] }),
      new TableCell({ borders: noBorders, width: { size: 3120, type: WidthType.DXA },
        children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 0, after: 0 }, children: [mono("VERSIÓN: 1.0", 16, GREY)] })] }),
    ] })],
    width: { size: CONTENT_W, type: WidthType.DXA },
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideH: noBorder, insideV: noBorder },
  }),
];

// ── BODY ──
const body = [];

// 01
body.push(sectionNum("01"));
body.push(h1("Qué es"));
body.push(bodyP("Un espacio digital donde la comunidad Tec Beyond comparte conocimiento, se conecta por afinidad genuina y construye legado colectivo — no una red comercial, no un directorio, no un canal de ventas."));
body.push(spacer(120));
body.push(quoteBlock(
  "\"Nosotros venimos a esta comunidad no para vender los productos.\"\n\"El conocimiento compartido genera más conocimiento.\"",
  "— Consejo de representantes, 26 de febrero 2026"
));
body.push(spacer(200));
body.push(bodyP("La plataforma tiene dos principios de diseño:"));
body.push(bulletP("La tecnología va a la persona usuaria, no al revés. El canal principal es WhatsApp — donde la comunidad ya vive. La aplicación web existe para quien quiera profundizar, pero ninguna interacción esencial requiere abrir una plataforma nueva."));
body.push(bulletP("Las ventas son consecuencia, nunca causa. Todo lo que el sistema sugiere, muestra o conecta está orientado a aprendizaje, perspectiva y complementariedad — no a transacciones.", 0, true));

// 02
body.push(sectionSep());
body.push(sectionNum("02"));
body.push(h1("Principios del consejo reflejados en la plataforma"));
body.push(bodyP("Estos principios, expresados por el consejo de representantes, son los criterios de diseño contra los que se evalúa cada funcionalidad:"));
body.push(spacer(120));
body.push(dataTable(
  ["Principio", "Implicación en la plataforma"],
  [
    ["Compartir, no vender", "No hay catálogos, no hay vitrinas de productos. Los perfiles describen conocimiento, experiencia y lo que cada quien busca aprender"],
    ["Valor desde el primer momento", "Al entrar, cada integrante ya encuentra contenido relevante, contexto de su red y conexiones sugeridas — sin esperas, sin promesas a futuro"],
    ["Anti-comercial", "No hay espacios publicitarios, no hay rankings de actividad comercial. Si alguien usa la plataforma para vender, el sistema lo detecta y el Consejo interviene"],
    ["Privacidad como confianza", "La información de cada integrante es suya. Cada persona decide qué comparte, con quién, y puede retirarlo. Los datos que alimentan a los agentes están anonimizados"],
    ["Sin encuestas, sin fricción", "La plataforma aprende de las interacciones naturales — no pide que se llenen formularios ni se respondan encuestas"],
    ["Aprendizaje para toda la vida", "No es solo networking empresarial. Es contexto: qué está pasando geopolíticamente, qué tendencias importan para el futuro de sus familias y comunidades"],
    ["Plataforma viva", "Los algoritmos evolucionan, las necesidades se mueven. La plataforma se actualiza continuamente — no es un producto que se entrega una vez"],
    ["Legado", "Lo que se comparte aquí cambia la vida de otros. La plataforma captura y preserva el conocimiento de la comunidad a través de generaciones"],
  ],
  [2800, 6560]
));

// 03
body.push(sectionSep());
body.push(sectionNum("03"));
body.push(h1("Qué ve cada persona"));

body.push(h2("Integrante"));
body.push(bodyP("Al entrar por primera vez, cada integrante encuentra valor inmediato — como entrar a una sala donde ya hay algo esperando."));

body.push(h3("Inicio — La sala"));
body.push(bulletP("Contexto relevante desde el primer momento: qué está moviendo a la comunidad esta semana, qué temas conversan integrantes con perfiles similares, qué contenido se publicó recientemente en sus áreas de interés"));
body.push(bulletP("Conexiones sugeridas con explicación de por qué: \"Comparten experiencia en manufactura del Bajío y perspectivas complementarias sobre talento\""));
body.push(bulletP("Sin métricas de actividad visibles, sin gamificación, sin presión para \"participar más\"", 0, true));

body.push(h3("Mi perfil"));
body.push(bulletP("Contexto profesional: empresa, sector, trayectoria, áreas de experiencia"));
body.push(bulletP("Lo que sabe y puede compartir: conocimiento, perspectiva, red de contactos, mentoría"));
body.push(bulletP("Lo que quiere aprender o explorar: tendencias, mercados, capacidades, conexiones con otros contextos"));
body.push(bulletP("Control total de privacidad: cada integrante decide qué es visible para la red, qué es visible solo para el sistema (anonimizado), y qué no comparte"));
body.push(bulletP("Historial en Tec Beyond: generación, sede, participaciones", 0, true));

body.push(h3("Conexiones"));
body.push(bulletP("Sugerencias del agente basadas en complementariedad de conocimiento y contexto — no en potencial de negocio"));
body.push(bulletP("Cada sugerencia explica la razón: \"Dos personas que lideran empresas familiares en transición generacional y podrían compartir perspectivas\""));
body.push(bulletP("Double opt-in: ninguna parte ve quién es la otra hasta que ambas aceptan"));
body.push(bulletP("Se rechaza sin consecuencias — la otra persona nunca se entera"));
body.push(bulletP("Historial de conexiones anteriores", 0, true));

body.push(h3("Contenido y contexto"));
body.push(bulletP("Artículos, análisis, casos y recursos seleccionados según su perfil e intereses — no genéricos"));
body.push(bulletP("Contenido diferenciado: una persona con 3 años de experiencia recibe material distinto de quien lleva 15"));
body.push(bulletP("Contexto vivo: qué está pasando en el entorno de negocios de su región, qué temas emergen en la comunidad"));
body.push(bulletP("Acceso a materiales de sesiones pasadas de Tec Beyond", 0, true));

body.push(h3("Directorio"));
body.push(bulletP("Búsqueda de integrantes por sede, generación, industria, área de conocimiento"));
body.push(bulletP("Cada integrante configura su nivel de visibilidad", 0, true));

body.push(h3("Eventos"));
body.push(bulletP("Calendario de encuentros de la comunidad (presenciales y virtuales)"));
body.push(bulletP("Registro directo"));
body.push(bulletP("Historial de participación", 0, true));

body.push(h3("Vía WhatsApp — canal principal"));
body.push(bulletP("Todas las interacciones esenciales funcionan por WhatsApp: recibir sugerencias de conexión, aceptar o rechazar, recibir contenido relevante, confirmar asistencia a eventos"));
body.push(bulletP("La persona responde directamente en su conversación — sin descargar apps, sin crear cuentas nuevas, sin aprender una interfaz"));
body.push(bulletP("La aplicación web complementa para quien quiera explorar a fondo, pero no es requisito", 0, true));

body.push(h2("Administración de sede"));
body.push(h3("Dashboard local"));
body.push(bulletP("Salud de su comunidad: integrantes con actividad, tendencias de participación, temas emergentes"));
body.push(bulletP("Conexiones facilitadas en su sede este periodo"));
body.push(bulletP("Eventos locales y asistencia"));
body.push(bulletP("Alertas de integrantes que se desconectan (para acercamiento personal, no automatizado)", 0, true));

body.push(h3("Gestión de integrantes"));
body.push(bulletP("Altas y bajas"));
body.push(bulletP("Seguimiento de onboarding (sin presionar — el sistema detecta si alguien necesita ayuda para empezar)", 0, true));
body.push(spacer(80));
body.push(insightBlock("Solo ve datos de su sede. No tiene acceso a integrantes de otras sedes ni a datos del Consejo."));

body.push(h2("El Consejo"));
body.push(h3("Dashboard estratégico"));
body.push(bulletP("Visión de la red completa: integrantes por sede, generación, sector, áreas de conocimiento"));
body.push(bulletP("Salud de la comunidad: participación, conexiones realizadas, retención"));
body.push(bulletP("Tendencias detectadas: \"47 integrantes mencionaron nearshoring este trimestre\""));
body.push(bulletP("Lo que la comunidad quiere aprender: temas emergentes, preguntas frecuentes, vacíos de conocimiento", 0, true));

body.push(h3("Insights del agente"));
body.push(bulletP("Patrones en la red: sectores emergentes, oportunidades de conexión cross-sede, áreas donde la comunidad necesita más diversidad"));
body.push(bulletP("Reportes periódicos generados automáticamente — sin requerir encuestas"));
body.push(bulletP("Alertas: \"La sede Chihuahua tiene 30% menos participación que el promedio\"", 0, true));

body.push(h3("Pipeline de candidaturas"));
body.push(bulletP("Personas candidatas sugeridas por el Agente Scout a partir de las redes de integrantes actuales"));
body.push(bulletP("Perfil estimado de cada persona candidata (trayectoria, sector, afinidad con la comunidad)"));
body.push(bulletP("El Consejo decide a quién invitar — el agente solo sugiere, nunca contacta", 0, true));

body.push(h3("Gobernanza"));
body.push(bulletP("Reglas de la comunidad: criterios de admisión, políticas de conexión, niveles de membresía"));
body.push(bulletP("Registro de decisiones y acuerdos"));
body.push(bulletP("Auditoría: quién accedió a qué, cuándo, con qué resultado", 0, true));

body.push(h3("Legado de la comunidad"));
body.push(bulletP("Conocimiento acumulado a lo largo de las generaciones: qué temas se han discutido, qué conexiones se han formado, qué impacto ha tenido la red"));
body.push(bulletP("Memoria institucional que trasciende a quienes integran la red — lo que alguien de generación 1 compartió está disponible como contexto para generación 10", 0, true));

// 04
body.push(sectionSep());
body.push(sectionNum("04"));
body.push(h1("Flujos principales"));

body.push(h3("Flujo 1: Primer contacto — valor visible"));
body.push(codeBlock(
`La persona recibe invitación por WhatsApp (canal natural)
    │
Responde en WhatsApp: acepta, completa perfil básico conversando con el bot
    │
Bot: contexto profesional, qué sabe/puede compartir, qué quiere aprender
    │
Configura privacidad: qué es visible, qué es solo para el sistema (anonimizado)
    │
De inmediato recibe: un contenido relevante + su primera sugerencia de conexión
    │
Si quiere profundizar → accede a la aplicación web. Si no, todo funciona por WhatsApp.`));

body.push(h3("Flujo 2: Conexión entre integrantes"));
body.push(codeBlock(
`Agente detecta complementariedad de conocimiento entre dos integrantes
    │
A cada persona (por WhatsApp): "Hay alguien en la comunidad que comparte
tu interés en [tema]. Tienen perspectivas complementarias. ¿Te gustaría conocerle?"
    │
    ├── Ambas partes aceptan → Se facilita la introducción
    ├── Una parte rechaza → No pasa nada. La otra persona nunca se entera.
    └── Nadie responde → Se archiva. Se puede sugerir de nuevo más adelante.`));

body.push(h3("Flujo 3: Detección de personas candidatas para la comunidad"));
body.push(codeBlock(
`Agente Scout analiza patrones en la red de integrantes actuales
    │
Identifica perfil con afinidad a la comunidad (trayectoria, valores, sector)
    │
Presenta al Consejo: "En la red de [Integrante X] hay alguien con perfil afín"
    │
Consejo decide si lo invita para la siguiente generación`));

body.push(h3("Flujo 4: Inteligencia de la comunidad (sin encuestas)"));
body.push(codeBlock(
`Los agentes analizan datos agregados y anonimizados de toda la red
    │
Detectan patrón: "El 60% de integrantes de gen. 7-9 quieren aprender
sobre IA aplicada a manufactura"
    │
Generan reporte para Consejo: "Considerar evento especializado en IA+manufactura"
    │
Consejo decide si actúa — la comunidad nunca fue interrumpida con una encuesta`));

// 05
body.push(sectionSep());
body.push(sectionNum("05"));
body.push(h1("Métricas de éxito del piloto (León)"));
body.push(spacer(120));
body.push(dataTable(
  ["Indicador", "Meta", "Cómo se mide"],
  [
    ["Perfiles completos", "80% de integrantes", "Campos esenciales completados (vía WhatsApp o web)"],
    ["Integrantes que encuentran valor", "70% interactúa al menos 1 vez/mes", "Interacción por WhatsApp o web — sin exigir login"],
    ["Conexiones facilitadas", "50+ en 6 meses", "Conexiones aceptadas por ambas partes"],
    ["Percepción de valor", "NPS > 40", "Conversación breve del bot (no encuesta formal)"],
    ["Continuidad", "90% permanece al año", "Participación activa sostenida"],
  ],
  [2600, 3000, 3760]
));

// 06
body.push(sectionSep());
body.push(sectionNum("06"));
body.push(h1("Arquitectura general"));
body.push(bodyP("El sistema se organiza en tres capas: infraestructura del Tec (Azure), capa de agentes operada por HA, y las interfaces de usuario."));
body.push(spacer(120));
body.push(codeBlock(
`INFRAESTRUCTURA TEC (Azure)
┌──────────────────────────────────────────────────────────┐
│  PostgreSQL      Vector DB        Blob Storage            │
│  Perfiles        (Pinecone/       Documentos              │
│  Membresías      pgvector)        Reportes                │
│  Conexiones      Embeddings       Backups                 │
│  Eventos         Relaciones                               │
│  Auditoría       semánticas                               │
└──────────────────────────────────────────────────────────┘
                        │
                  API REST Gateway
                  OAuth 2.0 / JWT
                        │
┌──────────────────────────────────────────────────────────┐
│              CAPA AGENTES (operada por HA)                │
│   Conexión   │  Contenidos  │  Scout  │  Insights         │
│  NO almacena datos de integrantes                         │
└──────────────────────────────────────────────────────────┘
         │              │              │
    Web App        WhatsApp Bot    Dashboard Consejo
    (React)        (Twilio/360)    (Metabase/custom)`));

// 07
body.push(sectionSep());
body.push(sectionNum("07"));
body.push(h1("Stack tecnológico"));
body.push(spacer(120));
body.push(dataTable(
  ["Capa", "Tecnología", "Justificación"],
  [
    ["Backend", "Node.js / Python (FastAPI)", "Ecosistema maduro, compatible con Azure"],
    ["Base de datos relacional", "PostgreSQL (Azure Database)", "Estándar del Tec, robusto, escalable"],
    ["Base de conocimiento vectorial", "pgvector o Pinecone", "Búsqueda semántica para matching y contenido"],
    ["LLM", "Claude (Anthropic) / GPT-5.2 (OpenAI)", "Procesamiento de lenguaje natural para agentes"],
    ["Orquestación de agentes", "Horizons Architecture framework", "Coordinación multi-agente con reglas de negocio"],
    ["Frontend web", "React + Tailwind CSS", "Responsive, rendimiento, accesibilidad"],
    ["WhatsApp", "WhatsApp Business API (Twilio/360dialog)", "Canal preferido de la comunidad"],
    ["Dashboard", "Metabase o custom (React + Chart.js)", "Visualización de insights para Consejo"],
    ["Autenticación", "OAuth 2.0 + JWT", "SSO compatible con ecosistema Tec (Azure AD)"],
    ["Infraestructura", "Microsoft Azure", "Alineado con infraestructura existente del Tec"],
    ["CI/CD", "GitHub Actions → Azure App Service", "Despliegue automatizado"],
    ["Monitoreo", "Azure Monitor + Application Insights", "Observabilidad y alertas"],
  ],
  [2400, 3200, 3760]
));

// 08
body.push(sectionSep());
body.push(sectionNum("08"));
body.push(h1("Modelo de datos (entidades principales)"));
body.push(spacer(120));
body.push(codeBlock(
`INTEGRANTE
├── id, nombre, email, teléfono
├── empresa, cargo, sector, ubicación
├── sede_id, generación, año_ingreso
├── conocimiento_experiencia (texto libre → embedding)
├── que_quiere_aprender (texto libre → embedding)
├── preferencias_privacidad (granular: visible / solo sistema / privado)
├── canal_preferido (whatsapp / web / ambos)
├── estado (activo / inactivo / pendiente)
└── fecha_registro, última_actividad

SEDE
├── id, nombre, campus, ciudad
├── admin_id
├── fecha_inicio
└── estado (activa / en preparación)

CONEXIÓN
├── id, integrante_a_id, integrante_b_id
├── score_afinidad (0-100)
├── base_conexión (texto: por qué se sugiere)
├── estado_a, estado_b (pendiente / aceptado / rechazado)
├── estado_final (facilitado / cancelado / archivado)
├── facilitado_por (admin_id)
└── fechas (creado, respondido_a, respondido_b, facilitado)

CONTENIDO
├── id, título, tipo (artículo / caso / recurso / video)
├── sectores_relevantes [], nivel_experiencia
├── embedding (para matching con perfiles)
└── fecha_publicación, fuente

CANDIDATURA_SCOUT
├── id, nombre_estimado, empresa, sector
├── detectado_vía_integrante_id
├── score_afinidad (0-100)
├── estado (detectado / revisado / invitado / descartado)
└── decidido_por (consejo), fecha_decisión

EVENTO
├── id, nombre, tipo (presencial / virtual), sede_id
├── fecha, lugar, capacidad
└── asistentes [] (integrante_id + confirmación)

LOG_AUDITORÍA
├── id, persona_id, acción, recurso
├── timestamp, ip, resultado
└── detalle (JSON)`));

// 09
body.push(sectionSep());
body.push(sectionNum("09"));
body.push(h1("Integraciones"));
body.push(spacer(120));
body.push(dataTable(
  ["Sistema", "Tipo", "Qué se intercambia", "Dirección"],
  [
    ["Azure AD (Tec)", "SSO", "Autenticación de cuentas institucionales", "Tec → Plataforma"],
    ["WhatsApp Business API", "Mensajería", "Notificaciones, respuestas, flujos conversacionales", "Bidireccional"],
    ["LinkedIn (opcional)", "Enriquecimiento", "Datos públicos de perfil profesional", "LinkedIn → Plataforma"],
    ["Anthropic / OpenAI API", "LLM", "Procesamiento de lenguaje para agentes", "Plataforma → API"],
    ["SMTP / SendGrid", "Email", "Notificaciones, reportes, invitaciones", "Plataforma → Integrante"],
    ["Azure Blob Storage", "Archivos", "Documentos, reportes exportados, backups", "Interno"],
  ],
  [2200, 1800, 3200, 2160]
));

// 10
body.push(sectionSep());
body.push(sectionNum("10"));
body.push(h1("Seguridad y confianza"));
body.push(spacer(80));
body.push(quoteBlock(
  "\"Mucha gente no respondió la encuesta cuando leyó los avisos de privacidad del Tec. Tiene una vulnerabilidad reconocida en la comunidad.\"",
  "— Rodrigo, Consejo de representantes"
));
body.push(spacer(200));
body.push(bodyP("La comunidad ya expresó desconfianza hacia el manejo de datos del Tec. La plataforma debe ganarse esa confianza con hechos, no con avisos legales."));
body.push(spacer(80));
body.push(insightBlock("Principio: Cada integrante controla su información. Decide qué comparte, con quién, y puede retirarlo en cualquier momento. Los agentes de IA trabajan con datos anonimizados — nunca ven nombres, emails ni datos de contacto."));
body.push(spacer(200));
body.push(dataTable(
  ["Capa", "Medida", "Estándar"],
  [
    ["Datos en reposo", "AES-256", "Azure Storage Service Encryption"],
    ["Datos en tránsito", "TLS 1.3", "HTTPS obligatorio"],
    ["Anonimización para IA", "Datos procesados sin PII antes de enviar a LLM", "Política interna verificable"],
    ["Autenticación admin", "MFA (Multi-Factor Authentication)", "Azure AD + Authenticator"],
    ["API", "JWT con rotación de tokens", "Expiración configurable"],
    ["Acceso a datos", "RBAC (Role-Based Access Control)", "6 roles definidos"],
    ["Logs", "Registro inmutable de toda operación", "Azure Monitor + tabla interna"],
    ["Backups", "Automático diario, retención 30 días", "Azure Backup"],
    ["Pruebas de seguridad", "Pentest antes de lanzamiento", "Proveedor externo"],
    ["Transparencia", "Cada integrante puede ver y exportar toda su información", "Panel de privacidad en perfil"],
  ],
  [2200, 3800, 3360]
));

body.push(h2("Roles y permisos"));
body.push(spacer(120));
body.push(dataTable(
  ["Rol", "Datos integrantes", "Conexiones", "Insights", "Config", "Auditoría"],
  [
    ["Super Admin", "Todos", "Todas", "Todos", "Sí", "Sí"],
    ["Admin Consejo", "Agregados", "Aprobar", "Todos", "Reglas", "Sí"],
    ["Admin Sede", "Solo su sede", "Solo su sede", "Solo su sede", "No", "Solo su sede"],
    ["Operación HA", "No", "No", "No", "Técnica", "Técnica"],
    ["Integrante", "Solo propio", "Propias", "No", "Su perfil", "No"],
    ["Auditoría", "Lectura", "Lectura", "Lectura", "No", "Sí"],
  ],
  [1700, 1600, 1400, 1300, 1100, 2260]
));

// 11
body.push(sectionSep());
body.push(sectionNum("11"));
body.push(h1("Residencia y propiedad de datos"));
body.push(spacer(120));
body.push(dataTable(
  ["Componente", "Ubicación", "Propiedad", "Si termina el contrato"],
  [
    ["Datos de integrantes", "Azure Tec", "Tec Beyond 100%", "Se revoca acceso a HA; datos intactos"],
    ["Base vectorial (embeddings)", "Azure Tec", "Tec Beyond 100%", "Se entrega documentación para migración"],
    ["Insights y reportes", "Azure Tec", "Tec Beyond 100%", "Quedan en infraestructura Tec"],
    ["Código de plataforma", "Repositorio HA", "Horizons Architecture", "Licencia se termina"],
    ["Algoritmos de agentes", "Repositorio HA", "Horizons Architecture", "HA retira su código; resultados quedan"],
    ["Reglas de comunidad", "Documentadas en plataforma", "Consejo León", "Exportables en formato estándar"],
  ],
  [2200, 2000, 2200, 2960]
));
body.push(spacer(200));
body.push(insightBlock("Compromiso de portabilidad: Si Tec Beyond migra a otro proveedor, HA entrega todos los datos en formato estándar (CSV/JSON), documentación técnica de la base vectorial, y un periodo de transición acordado en contrato."));

// 12
body.push(sectionSep());
body.push(sectionNum("12"));
body.push(h1("Escalabilidad"));

body.push(h3("Piloto (León)"));
body.push(dataTable(
  ["Recurso", "Dimensionamiento"],
  [
    ["Conexiones simultáneas", "~50-100"],
    ["Integrantes totales", "~300"],
    ["Embeddings", "~300 perfiles + contenido"],
    ["Almacenamiento", "< 10 GB"],
    ["Costo mensual estimado Azure", "~$200-400 USD"],
    ["Costo LLM mensual estimado", "~$100-300 USD (depende de volumen)"],
  ],
  [4000, 5360]
));

body.push(h3("Expansión (3-5 sedes)"));
body.push(dataTable(
  ["Recurso", "Dimensionamiento"],
  [
    ["Conexiones simultáneas", "~200-500"],
    ["Integrantes totales", "~1,500"],
    ["Costo marginal por sede nueva", "~20-30% del costo del piloto"],
  ],
  [4000, 5360]
));
body.push(spacer(120));
body.push(bodyP("La arquitectura es horizontal: agregar una sede es crear un nuevo nodo con su admin, no redesplegar el sistema. La base de conocimiento es compartida — cada nueva persona enriquece las conexiones de toda la red."));

// 13
body.push(sectionSep());
body.push(sectionNum("13"));
body.push(h1("Fases de desarrollo"));
body.push(spacer(80));
body.push(quoteBlock(
  "\"Queremos que no nos deje el Tec con una plataforma una vez. Yo quiero quedarme con alguien que piensa generar.\"",
  "— Mario Orozco"
));
body.push(spacer(200));
body.push(dataTable(
  ["Fase", "Duración", "Entregables"],
  [
    ["Descubrimiento", "2-3 semanas", "Diseño detallado, modelo de datos final, cotización cerrada"],
    ["MVP", "8-10 semanas", "Perfiles, conexiones básicas, WhatsApp bot, dashboard Consejo"],
    ["Agentes v1", "4-6 semanas", "Conexiones + Contenidos operando con base de conocimiento real"],
    ["Agentes v2", "4-6 semanas", "Scout + Insights operando"],
    ["Estabilización", "2-4 semanas", "Testing, pentest, ajustes de performance, onboarding"],
    ["Lanzamiento piloto", "—", "~300 integrantes de León participando"],
  ],
  [2400, 2000, 4960]
));
body.push(spacer(120));
body.push(insightBlock("Total estimado: 5-8 meses desde aprobación hasta lanzamiento del piloto."));

body.push(h3("Después del lanzamiento: plataforma viva"));
body.push(bodyP("La plataforma no se \"entrega\" — se opera y evoluciona continuamente:"));
body.push(bulletP("Actualizaciones mensuales de algoritmos de conexión y contenido basadas en patrones reales de uso"));
body.push(bulletP("Reportes trimestrales al Consejo con insights y recomendaciones de evolución"));
body.push(bulletP("Nuevas funcionalidades según las necesidades que emerjan de la comunidad"));
body.push(bulletP("Expansión a nuevas sedes como nodos adicionales — cada sede nueva enriquece la red completa", 0, true));

// 14
body.push(sectionSep());
body.push(sectionNum("14"));
body.push(h1("Preguntas frecuentes para TI"));

body.push(h3("¿Se necesita infraestructura nueva en el Tec?"));
body.push(bodyP("No. Todo corre sobre Azure, que el Tec ya tiene. Se crea un resource group dedicado para Tec Beyond."));

body.push(h3("¿Los agentes de IA corren dentro de Azure?"));
body.push(bodyP("Los agentes se despliegan en Azure App Service dentro del tenant del Tec. Las llamadas a LLMs (Claude/GPT) salen a APIs externas, pero los datos que se envían son procesados y anonimizados — nunca se envía un perfil completo a un LLM externo."));

body.push(h3("¿Qué pasa con la latencia de WhatsApp?"));
body.push(bodyP("El bot responde en < 5 segundos para interacciones simples (aceptar conexión, confirmar evento). Para respuestas que requieren procesamiento de agentes, < 15 segundos."));

body.push(h3("¿Cómo se actualiza la base vectorial?"));
body.push(bodyP("Los embeddings se regeneran cuando alguien actualiza su perfil. El sistema también re-indexa periódicamente (semanal) para incorporar datos de interacciones recientes."));

body.push(h3("¿Qué datos se envían a las APIs de LLM?"));
body.push(bodyP("Solo contexto procesado y anonimizado. Para generar una conexión, el agente envía al LLM las descripciones de capacidades y necesidades sin nombres, emails ni datos de contacto. El LLM nunca ve datos personales identificables."));

body.push(h3("¿Se puede integrar con sistemas existentes del Tec (CRM, ERP)?"));
body.push(bodyP("Sí, vía API REST. La fase de descubrimiento mapea qué integraciones específicas se necesitan."));

// Colophon
body.push(spacer(600));
body.push(new Paragraph({
  spacing: { before: 0, after: 0 },
  border: { top: { style: BorderStyle.SINGLE, size: 1, color: LIGHT_GREY, space: 12 } },
  children: [],
}));
body.push(spacer(200));
body.push(bodyP([sans("Documento preparado por Horizons Architecture para Tec Beyond.", 21, HA_DARK)]));
body.push(new Paragraph({
  spacing: { before: 0, after: 0 },
  children: [mono("Marzo 2026 — horizonsarchitecture.ai", 16, GREY)],
}));

// ── DOCUMENT ──
const doc = new Document({
  numbering: {
    config: [{
      reference: "ha-bullets",
      levels: [
        { level: 0, format: LevelFormat.BULLET, text: "\u25CF", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 720, hanging: 360 } } } },
        { level: 1, format: LevelFormat.BULLET, text: "\u25CB", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 1440, hanging: 360 } } } },
        { level: 2, format: LevelFormat.BULLET, text: "\u25A0", alignment: AlignmentType.LEFT, style: { paragraph: { indent: { left: 2160, hanging: 360 } } } },
      ],
    }],
  },
  sections: [
    {
      properties: {
        page: { size: PAGE_LETTER, margin: MARGIN_1IN },
      },
      children: coverChildren,
    },
    {
      properties: {
        type: SectionType.NEXT_PAGE,
        page: { size: PAGE_LETTER, margin: MARGIN_1IN },
        headers: { default: runningHeader },
        footers: { default: pageFooter },
      },
      children: [
        new Paragraph({ spacing: { after: 600 }, children: [med("Contenidos", 40, HA_BLUE)] }),
        new TableOfContents("Contenidos", { hyperlink: true, headingStyleRange: "1-3" }),
        new Paragraph({ children: [new PageBreak()] }),
        ...body,
      ],
    },
  ],
});

const outPath = path.join(__dirname, "..", "Plataforma-Tec-Beyond-Descripcion-v1.docx");
const buffer = await Packer.toBuffer(doc);
fs.writeFileSync(outPath, buffer);
console.log("Generated:", outPath);
