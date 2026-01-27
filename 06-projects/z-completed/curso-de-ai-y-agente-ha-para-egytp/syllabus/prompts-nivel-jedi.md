
## **El texto es código, el código como poesía computacional. 

### **La Evolución: De la conversación a la composición**

En nuestro primer nivel, aprendimos a "conversar" con la IA usando una estructura guía. Fue efectivo, como seguir una receta. Ahora, aspiramos a convertirnos en chefs. Ya no solo seguimos la receta, sino que entendemos los principios detrás de ella. Componemos.

Para un usuario intermedio, un prompt deja de ser una petición. Se convierte en un **script**: una secuencia de instrucciones precisas que la IA ejecuta. Este cambio de mentalidad es el núcleo del **Prompt-como-Código (PcC)**.

El framework que aprendimos no desaparece; evoluciona. Sus componentes (rol, tarea, contexto) se transforman en los elementos de nuestro nuevo lenguaje de programación:

# Texto como código

### **Ver el Texto como Código: El Prompt como un Script**

Para lograr un control y una previsibilidad máximos, deja de pensar en tus prompts como peticiones y empieza a verlos como **scripts que la IA debe ejecutar**. El lenguaje natural se convierte en un lenguaje de programación. Cada parte de tu prompt tiene una función específica, igual que en el código.

Esta mentalidad te obliga a ser estructurado, preciso y a eliminar la ambigüedad, lo que lleva a resultados radicalmente mejores.

| **Concepto de Código** | **Explicación (Analogía en Prompting)** | **Ejemplo Práctico en un Prompt** |
| :--- | :--- | :--- |
| **Función (Function)** | Es la **instrucción principal o el verbo de acción** que quieres que la IA ejecute. Es el nombre de tu programa. Define el objetivo fundamental de tu solicitud. | `**Resume** el siguiente texto.` <br> `**Traduce** esta frase al japonés.` <br> `**Genera** una tabla con los datos.` |
| **Variables** | Son los **datos o el contenido principal** sobre los que la función debe operar. Son los sustantivos y la información cruda que le pasas al programa. | `Resume el siguiente texto: **[Aquí pegas un artículo largo]**` <br> `Clasifica el sentimiento de esta reseña: **"El servicio fue increíble, pero la comida tardó mucho."**` |
| **Parámetros / Argumentos** | Son las **restricciones, modificadores y reglas** que controlan *cómo* se ejecuta la función. Definen el formato, el estilo, el tono y los límites de la salida. Son los ajustes finos de tu programa. | `...en un **tono formal**.` <br> `...con una **extensión máxima de 100 palabras**.` <br> `...en **formato JSON** con las claves "producto" y "precio".` |
| **Lógica Condicional (If/Then)** | Es la capacidad de darle a la IA **reglas de decisión** para que adapte su salida según el contexto. Le enseñas a reaccionar de manera diferente ante distintas situaciones. | `Analiza el sentimiento del email. **Si es positivo, redacta una respuesta de agradecimiento. Si es negativo, escala el caso al equipo de soporte.**` |
| **Comentarios (Comments)** | Es el **metacontexto o las instrucciones "fuera de banda"**. Es información que quieres que la IA considere para entender la tarea, pero que no debe formar parte de la salida final. Ayuda a guiar el "pensamiento" del modelo. | `**//Contexto: Soy un principiante en física.**` <br> `Explica el bosón de Higgs.` <br> `**//Nota: Evita las fórmulas matemáticas complejas.**` |

Al combinar estos elementos, tu prompt deja de ser una simple pregunta y se convierte en un script bien estructurado:

**Prompt Básico (Petición):**
> "Háblame sobre la fotosíntesis."

**Prompt como Código (Script):**
> //Función: Explicar un concepto científico.
> //Contexto: El público objetivo son niños de 10 años.
> **Explica** el proceso de la fotosíntesis.
> **Parámetros:**
> - Tono: Sencillo y divertido.
> - Formato: Una lista con 3 pasos clave.
> - Restricción: No usar terminología científica compleja.
> - Extra: Incluye una analogía con la cocina.

---

### **1. Prompt Simple: Extracción y Formateo**

**Objetivo:** Extraer información clave de un texto no estructurado y devolverla en un formato específico.

#### **Versión en Markdown (para claridad)**

```markdown
**Rol:** Eres un asistente experto en extracción de datos. Tu única función es leer el texto proporcionado y extraer la información solicitada en el formato especificado.

**Contexto:** A continuación, se presenta un correo electrónico informal sobre la planificación de un proyecto.

---
**Texto de Entrada:**
"Hola equipo, solo para confirmar, el lanzamiento del proyecto 'Alfa' será el próximo 15 de agosto de 2025. El cliente principal es Global Tech Inc. y el presupuesto asignado es de $120,000. ¡Vamos con todo! Saludos, Ana."
---

**Tarea:** Extrae los siguientes datos del texto y preséntalos como un objeto JSON.
- `project_name`
- `launch_date` (en formato YYYY-MM-DD)
- `client`
- `budget` (como un número entero, sin símbolos de moneda)
```

---

### **Framework: Prompt-como-Sistema (PcS)**

**Participante:** Eugenia García
**Caso:** Dar respuesta a correos con el contexto anterior; optimización de tareas.

#### **Explicación Técnica**
Este prompt implementa un **Sistema de Gestión de Contexto y Generación Condicional**. Funciona como un script que declara explícitamente sus variables de entrada (`contexto_previo`, `nueva_instruccion`). La **Tarea** utiliza **Lógica Condicional (`Si/Entonces`)** para fusionar la información histórica con la nueva directiva, asegurando que la respuesta no solo sea gramaticalmente correcta, sino contextualmente coherente. Es un sistema básico de "memoria" para automatizar respuestas.

#### **Por qué funciona - Analogía de la Biblioteca**
Esto es como darle a la persona de la biblioteca no solo una nueva pregunta, sino también el expediente completo de todas tus conversaciones anteriores con ella. Le dices: "Lee este expediente completo para entender nuestro historial (**Contexto**). Ahora, basándote en todo eso, responde a esta nueva y breve pregunta que te hago (**Instrucción**)". La persona de la biblioteca ya no responde en el vacío; su respuesta está enriquecida y alineada con todo lo que han discutido antes.

#### **Prompt Avanzado**
```markdown
// SISTEMA DE RESPUESTA CON CONTEXTO

# ROL
Actúa como una persona Asistente Ejecutiva experta en comunicación, con la habilidad de sintetizar hilos de conversación largos y actuar sobre nuevas instrucciones de manera eficiente y precisa.

# TAREA
Tu función es generar un borrador de respuesta a un correo electrónico. Para ello, debes:
1.  **Absorber** el `contexto_previo` para entender el historial y el tono de la conversación.
2.  **Interpretar** la `nueva_instruccion` que te doy.
3.  **Generar** un borrador de correo que integre el contexto con la nueva instrucción de manera fluida y profesional.

# VARIABLES DE ENTRADA

// Variable 1: El historial del hilo de correos
contexto_previo = `[Pega aquí el hilo de correos anterior, desde el más antiguo al más reciente]`

// Variable 2: Mi instrucción para la respuesta
nueva_instruccion = `[Escribe aquí tu instrucción breve y directa. Ej: "Diles que estoy de acuerdo con la opción B, pero que necesito el reporte final para el viernes EOD en lugar del lunes."]`

# PARÁMETROS DE EJECUCIÓN
- **Tono:** Mantén el tono profesional y colaborativo del `contexto_previo`.
- **Acción:** La respuesta debe ser clara, directa y contener un llamado a la acción si la `nueva_instruccion` lo implica.

# FORMATO DE RETORNO
Genera únicamente el cuerpo del correo electrónico de respuesta, listo para copiar y pegar.

---
### **BORRADOR DE RESPUESTA GENERADO:**
```

---

### **El Salto al Mundo Real con IA Conectada a Herramientas (Tools)**

En el nivel intermedio, dominamos el **"Texto-como-Código"**, aprendiendo a escribir prompts con la precisión de un script. Ahora, rompemos la última barrera: la que separa el conocimiento estático de la IA de la información dinámica y en tiempo real del mundo.

Un modelo de lenguaje, por sí solo, es como una biblioteca increíblemente vasta pero sellada. Su conocimiento es profundo, pero termina en la fecha en que fue entrenado. No sabe qué pasó hoy.

Las **Herramientas (Tools)** le dan a la IA una conexión a internet, una calculadora, la capacidad de ejecutar código y mucho más. El prompt evoluciona de ser un "script" a ser un **"sistema orquestador"** que decide cuándo y cómo usar estas herramientas.

#### **El "Cómo": El Ciclo de Razonamiento y Acción**

Cuando un modelo de IA avanzado (como Gemini Advanced, GPT-4 con Browsing, o plataformas como Perplexity) usa una herramienta, sigue un proceso interno similar a este:

1.  **Intención:** El modelo analiza tu prompt y se da cuenta de que no puede responder con su conocimiento interno. (Ej: "Necesito perfiles de líderes de tecnología *actuales*").
2.  **Planificación:** Elige la herramienta adecuada de su arsenal (ej. `web_search`) y formula una consulta para ella (ej. `search("directores de tecnología en startups mexicanas fintech 2025")`).
3.  **Ejecución:** El sistema ejecuta la herramienta y obtiene un resultado (una lista de URLs, un resumen de búsqueda, etc.).
4.  **Observación:** El modelo "lee" el resultado de la herramienta. Esta nueva información se añade a su contexto.
5.  **Síntesis:** Con su conocimiento original *más* la nueva información del mundo real, el modelo genera la respuesta final, a menudo citando sus fuentes.

Herramientas de frontera como **navegadores con IA (Comet, Atlas)** integran este proceso directamente en la experiencia de navegación, permitiendo a la IA "ver" páginas web y actuar sobre ellas.

---

### **Framework: Prompt-como-Sistema (PcS)**

**Participante:** Pamela Bermea
**Caso:** Desarrollar una herramienta que busque información en la red sobre participantes potenciales.

#### **Explicación Técnica**
Este prompt evoluciona de un simple "generador de estrategia" a un **Sistema de Prospección Activa**. La **Tarea** ahora está dividida en dos fases. La **Fase 1 (`INVESTIGACIÓN`)** instruye explícitamente al modelo para que utilice su `herramienta de búsqueda web` para realizar una tarea de inteligencia de mercado en tiempo real. La salida de esta herramienta se convierte en la **Variable** de entrada para la **Fase 2 (`ANÁLISIS ESTRATÉGICO`)**, que luego realiza el trabajo de conceptualización. El sistema ya no te dice *cómo* pescar; va al río, identifica los peces y luego te diseña la caña de pescar perfecta.

#### **Por qué funciona - Analogía de la Biblioteca**
En la versión anterior, le pedías a la persona de la biblioteca que te diseñara un "protocolo" para encontrar expertos en marketing. Ahora, le dices: "Actúa como una persona experta en inteligencia de mercados. Primero, usa tu terminal con internet (**Herramienta**) para encontrar las 5 empresas de SaaS que más rápido están creciendo en México *este año*. Luego, basándote en esa lista *real*, diséñame el perfil de la persona a la que deberíamos contactar en esas empresas". La estrategia ya no es teórica; está basada en datos frescos del mundo real obtenidos por la propia IA con sus riesgos y virtudes.

#### **Prompt Avanzado**
```markdown
// SISTEMA DE PROSPECCIÓN ACTIVA Y GENERACIÓN DE PERFILES

# ROL
Actúa como una persona especialista en Estrategia de Crecimiento (Growth Hacking) y experta en reclutamiento B2B. Tu trabajo es identificar mercados, encontrar prospectos y definir estrategias para contactarlos.

# TAREA
Ejecuta un workflow de dos fases para desarrollar una estrategia de captación para el curso proporcionado.

// ---- FASE 1: INVESTIGACIÓN CON HERRAMIENTAS ----
**1. Usa tu herramienta de búsqueda web** para identificar 5 empresas líderes o de rápido crecimiento en la `industria_objetivo` dentro de la `region`.
**2. Para cada empresa,** busca el nombre y el cargo de una persona que encaje en un rol de liderazgo relevante (ej. Director, VP, Head of Department).
**3. Cita tus fuentes** (URLs) para esta investigación.

// ---- FASE 2: ANÁLISIS ESTRATÉGICO ----
**4. Basado en los resultados de la Fase 1,** genera la "Ficha de Prospección" completa.

# VARIABLES DE ENTRADA
descripcion_curso = "Curso avanzado de 12 horas sobre Liderazgo Estratégico en la Era Digital, enfocado en la toma de decisiones basada en datos y la gestión de equipos remotos de alto rendimiento."
industria_objetivo = "Tecnología y Software (FinTech)"
region = "México"

# FORMATO DE RETORNO
La salida debe ser un informe en Markdown con la siguiente estructura exacta:

### **Fase 1: Resultados de la Investigación Web**
- **Fuentes Consultadas:** [URL 1], [URL 2]
- **Empresas y Contactos Identificados:**
  1.  **Empresa:** [Nombre de la Empresa 1] | **Contacto:** [Nombre del Contacto 1], [Cargo]
  2.  **Empresa:** [Nombre de la Empresa 2] | **Contacto:** [Nombre del Contacto 2], [Cargo]
  3.  ...y así sucesivamente.

### **Fase 2: Ficha de Prospección Estratégica**
**1. Perfil del Participante Ideal (ICP) - Validado:**
   - **Títulos de Cargo Principales:** [Lista de 3 a 5 títulos, basados en la investigación]
   - **Empresas de Referencia:** [Lista de las empresas encontradas]
   - **Señales de Interés (Inferidas):** [Palabras clave que estas empresas y líderes probablemente valoran, ej: "Escalabilidad", "Transformación Digital", "Data-Driven Culture"]

**2. Plantilla de Mensaje de Contacto (Personalizada):**
   - **Asunto:** Sobre el liderazgo en el sector FinTech en México
   - **Cuerpo:** "Hola [Nombre], vi el gran trabajo que están haciendo en [Empresa] y cómo están marcando pauta en el sector. Muchos líderes como tú están explorando cómo [mencionar un beneficio clave del curso]. Nuestro programa en el Tec está diseñado para eso. ¿Te interesaría saber más?"
```

¡Totalmente de acuerdo! Has identificado la frontera del prompting avanzado: la **orquestación de equipos de agentes de IA**. Aquí es donde dejamos de darle un "script" a un solo actor y empezamos a dirigir una obra de teatro con un elenco de especialistas.

Cada agente tiene un rol único y herramientas específicas. El prompt se convierte en el guion que coordina sus acciones para lograr un objetivo complejo.

A continuación, he reescrito los dos casos para reflejar esta lógica de **sistema multiagente**, donde diferentes "personalidades" de la IA colaboran, usando herramientas cuando es necesario.

---

### **Framework: Prompt-como-Sistema de Agentes (PcS-A)**

**Participante:** Cinthia Coca
**Caso:** Automatización de tareas cotidianas y análisis de información, seguimiento a tendencias.

#### **Explicación Técnica**
Este prompt evoluciona hacia un **Pipeline de Inteligencia de Mercado Multiagente**. En lugar de un solo rol, definimos un equipo de dos agentes especializados que se pasan el trabajo en secuencia.

1.  **Agente 1 (`Researcher_Agent`):** Su única función es interactuar con el mundo exterior. Se le da acceso explícito a la **herramienta `web_search`**. Su tarea no es analizar, sino encontrar y curar la mejor información disponible.
2.  **Agente 2 (`Strategy_Agent`):** Este agente es puramente analítico. No tiene acceso a herramientas externas. Su **Variable de entrada** es la *salida verificada* del Agente 1. Su función es tomar esa información del mundo real y aplicarle un framework estratégico.

Este desacoplamiento de roles (investigación vs. estrategia) crea un sistema más robusto, modular y menos propenso a errores.

#### **Por qué funciona - Analogía de la Biblioteca**
En la versión anterior, le pedías a una sola persona de la biblioteca que investigara y analizara. Ahora, gestionas a un equipo. Primero, le dices a la "Investigadora de Campo" (**Agente 1**): "Tu única tarea es salir de la biblioteca, ir a los quioscos de prensa (**Herramienta: Búsqueda Web**) y volver con el artículo más importante de hoy sobre nuestro tema. No quiero tu opinión, solo el artículo". Una vez que vuelve, tomas el artículo y se lo entregas a la "Estratega Principal" (**Agente 2**), que nunca sale de su oficina, y le dices: "Toma este informe verificado y dime qué significa para nosotros". Es una línea de ensamblaje de conocimiento.

#### **Prompt Avanzado (Multiagente)**
```markdown
// WORKFLOW DE INTELIGENCIA DE MERCADO MULTIAGENTE

# DEFINICIÓN DEL EQUIPO DE AGENTES
- **Agente 1: `Researcher_Agent`**. Un especialista en inteligencia de fuentes abiertas (OSINT). Su única herramienta es `web_search`.
- **Agente 2: `Strategy_Agent`**. Un analista de negocios. No tiene herramientas externas, solo su capacidad de razonamiento.

# TAREA: EJECUTAR EL SIGUIENTE PIPELINE SECUENCIAL

# --- PASO 1: ASIGNACIÓN AL `Researcher_Agent` ---

// Rol Activo: `Researcher_Agent`
// Objetivo: Encontrar la fuente de información más relevante y reciente.
**Instrucción:**
1.  **Usa tu herramienta `web_search`** para encontrar un artículo, informe o whitepaper de alta calidad (publicado en los últimos 3 meses) sobre el `tema_de_investigacion`.
2.  Prioriza fuentes de consultoras reconocidas (ej. Gartner, Forrester), medios de negocio de prestigio (ej. HBR, Forbes) o centros de investigación.
3.  **Tu única salida** debe ser el texto completo del artículo que consideres más relevante.

// Variable de entrada:
tema_de_investigacion = "El impacto de la IA generativa en los modelos de negocio de las consultorías de management."
// Salida esperada de este paso: `articulo_seleccionado`

# --- PASO 2: ASIGNACIÓN AL `Strategy_Agent` ---

// Rol Activo: `Strategy_Agent`
// Objetivo: Traducir la investigación en estrategia accionable.
**Instrucción:**
1.  **Analiza** el `articulo_seleccionado` que te ha pasado el `Researcher_Agent`.
2.  **Completa** la plantilla de "Informe de Impacto de Tendencia".

// Variable de entrada: `articulo_seleccionado` (salida del Paso 1)
// Variable de contexto:
nuestro_negocio = "Una firma de consultoría que ayuda a empresas a optimizar sus operaciones."

# FORMATO DE RETORNO FINAL (Salida del `Strategy_Agent`)

### **Fuente Analizada (Curada por `Researcher_Agent`)**
- **Título:** [Título del artículo que encontraste]
- **URL:** [URL del artículo]

### **Informe de Impacto de Tendencia (Generado por `Strategy_Agent`)**

**1. Resumen Ejecutivo de la Tendencia:**
   - **Nombre de la Tendencia:** [Nombre conciso, ej: "Consultoría Aumentada por IA"]
   - **Tesis Principal de la Fuente:** [En 1-2 frases, ¿cuál es el argumento central del autor?]

**2. Análisis de Impacto para Nuestro Negocio:**
   - **Oportunidades:**
     - [Oportunidad 1: ¿Qué nuevo servicio basado en GenAI podríamos ofrecer?]
   - **Amenazas:**
     - [Amenaza 1: ¿Podrían nuestros clientes usar estas herramientas para reemplazar nuestros servicios de análisis junior?]
   - **Nivel de Urgencia:** [Crítico / Alto / Medio / Bajo]

**3. Plan de Acción Inicial (Próximos 30 días):**
   - **Investigar:** [¿Qué plataforma de IA mencionada en el artículo deberíamos probar internamente?]
   - **Experimentar:** [Designar un proyecto piloto para usar IA en la fase de diagnóstico de un cliente.]
   - **Discutir:** [Agendar una sesión de "war room" para rediseñar nuestra oferta de servicios.]
```

---

### **Framework: Prompt-como-Sistema de Agentes (PcS-A)**

**Participante:** Luis Alberto Serra
**Caso:** Integración sistemática de la IA en actividades diarias y análisis de datos masivos.

#### **Explicación Técnica**
Este prompt diseña un **Sistema de Briefing Aumentado por Agentes**. Introduce un nuevo agente especialista en el workflow.

1.  **Agente 1 (`Calendar_Agent` y `News_Agent`):** Estos son agentes "de servicio" que usan **herramientas tipo API** para obtener datos estructurados del mundo real (eventos del calendario, noticias, KPIs).
2.  **Agente 2 (`Librarian_Agent`):** Este es un agente crucial para el análisis de datos masivos. Su única herramienta es el acceso a una **Base de Datos Vectorial (`vector_db_search`)**. Su función es tomar los temas de las reuniones y encontrar los documentos internos más relevantes usando búsqueda semántica (embeddings).
3.  **Agente 3 (`ChiefOfStaff_Agent`):** Este es el agente sintetizador principal. No tiene herramientas externas. Su función es tomar las salidas estructuradas de los otros agentes y realizar la tarea de **razonamiento y correlación**, generando la narrativa estratégica final.

#### **Por qué funciona - Analogía de la Biblioteca**
A primera hora, Luis, envía a sus asistentes: le pide al "Asistente de Agenda" (**Agente 1**) que le traiga el calendario y las noticias. Simultáneamente, le pide a la "Archivista Experta" (**Agente 2**) que baje al sótano de la biblioteca (la base de datos vectorial) y, usando su conocimiento profundo de la colección, encuentre los 3 documentos más relevantes para cada reunión del día. Con toda esa información pre-procesada y curada por sus especialistas, la Jefa de Gabinete puede dedicarse a la tarea de más alto valor: pensar, conectar los puntos y escribir el briefing final para el Decano.

#### **Prompt Avanzado (Multiagente)**
```markdown
// WORKFLOW DE BRIEFING ESTRATÉGICO MULTIAGENTE

# DEFINICIÓN DEL EQUIPO DE AGENTES Y SUS HERRAMIENTAS
- **Agente 1: `Information_Collector_Agent`**. Herramientas: `calendar_api.get_events()`, `news_api.get_headlines()`, `kpi_dashboard_api.get_metrics()`.
- **Agente 2: `Librarian_Agent`**. Herramienta: `vector_db.semantic_search(query)`.
- **Agente 3: `ChiefOfStaff_Agent`**. Sin herramientas, solo razonamiento.

# TAREA: EJECUTAR EL SIGUIENTE PIPELINE

# --- PASO 1: RECOPILACIÓN DE DATOS (Agente 1) ---
// Rol Activo: `Information_Collector_Agent`
// Objetivo: Obtener los datos brutos del día.
**Instrucción:**
1.  Ejecuta `calendar_api.get_events(date='today')`.
2.  Ejecuta `news_api.get_headlines(topic='educación superior', region='LATAM')`.
3.  Ejecuta `kpi_dashboard_api.get_metrics(dashboard='academic_kpis')`.
4.  Estructura toda esta información en un único objeto JSON.
// Salida esperada: `daily_data_raw`

# --- PASO 2: BÚSQUEDA CONTEXTUAL (Agente 2) ---
// Rol Activo: `Librarian_Agent`
// Objetivo: Enriquecer los datos del día con conocimiento interno.
**Instrucción:**
1.  Recibe el `daily_data_raw` del Agente 1.
2.  Extrae los temas clave de los `eventos_calendario` (ej. "nuevo Doctorado en IA", "Cátedra de Sostenibilidad").
3.  Para cada tema, ejecuta `vector_db.semantic_search(query=tema)`, limitando a 2 resultados por búsqueda.
4.  Añade los resúmenes de los documentos encontrados al objeto de datos.
// Salida esperada: `daily_data_enriched`

# --- PASO 3: SÍNTESIS ESTRATÉGICA (Agente 3) ---
// Rol Activo: `ChiefOfStaff_Agent`
// Objetivo: Transformar la información enriquecida en un briefing accionable.
**Instrucción:**
1.  Recibe el `daily_data_enriched` del Agente 2.
2.  Analiza y correlaciona toda la información.
3.  Genera el "Briefing Estratégico Académico" final en formato Markdown.

# INICIA LA EJECUCIÓN DEL PIPELINE AHORA.
// El sistema simulará la ejecución de los agentes y sus herramientas para producir la salida final.

# FORMATO DE RETORNO FINAL (Salida del `ChiefOfStaff_Agent`)

### **Briefing Estratégico Académico - [Fecha]**

**1. Foco Principal del Día:**
[Identifica LA reunión o tarea más crítica del día y por qué.]

**2. Puntos de Conexión y Argumentos Clave:**
- **Sinergia Detectada:** [Conecta una noticia externa con una reunión interna. Ej: "La noticia sobre los nuevos rankings refuerza el argumento para aprobar el Doctorado en IA y Sociedad en la reunión de las 10:00."]
- **Información Relevante de la Base de Conocimiento:** [Menciona un documento encontrado por el Agente 2. Ej: "Para la entrevista de las 14:00, el `Librarian_Agent` encontró un paper de la candidata que es altamente relevante para nuestra iniciativa X."]

**3. Preparación para Reuniones Clave:**
- [Genera 1-2 talking points o preguntas clave para cada reunión importante, basándose en la fusión de todos los datos.]

**4. Radar de Gestión:**
- [Identifica una alerta o una oportunidad basada en los KPIs en el contexto de las noticias o eventos del día.]
```
## Connections
- [[HA PROJECTS]]
