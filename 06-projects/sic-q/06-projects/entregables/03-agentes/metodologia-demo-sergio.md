# Metodología: Demo para Sergio Ibarra — Agente SIC-Q

**Versión:** 1.0 | **Fecha:** Marzo 2026
**Facilitadores:** Edgar Barroso, Edgar Mohar
**Usuario:** Sergio Luis Ibarra González — Director de Planeación y Proyectos Estratégicos

---

## Objetivo

Demostrar a Sergio Ibarra el valor del agente SIC-Q como herramienta para la **actualización del Plan Querétaro 2050**: procesar insumos ciudadanos, generar control de cambios con trazabilidad, y cruzar opiniones con las 7 dimensiones prospectivas y los proyectos icónicos.

Salir de la demo con:
- Validación de qué casos de uso le son útiles para el proceso de planeación
- Priorización de productos enfocados en la actualización del Plan
- Acuerdo sobre qué fuentes de información cargar primero

---

## Contexto del proceso de Sergio

El Plan Querétaro 2050 tiene una estructura establecida:

| Componente | Descripción | Estado actual |
|------------|-------------|---------------|
| **7 dimensiones prospectivas** | El alma del plan — estructura principal | Se mantienen, se actualizan |
| **Diagnóstico** | Datos por dimensión | Paty actualizando — entrega mayo |
| **Escenarios** | Prospectiva por dimensión | Pendiente de actualización — requiere sesión con gabinete |
| **Retos** | Derivados de visión de largo plazo | Se revisan con insumos nuevos |
| **Estrategias** | Donde entran las opiniones ciudadanas | Se actualizan con control de cambios |
| **Proyectos icónicos** | Los que salen al final (ej: hospitales) | Se priorizan con votación ciudadana |

### Fuentes de información en proceso

| Fuente | Estado | Plazo |
|--------|--------|-------|
| Google Forms — universidades (chavos) | En curso, parcial | Junio |
| Chatbot de participación — Consejo | Joaquín construyendo | Post Semana Santa |
| Encuesta 300–400 líderes empresariales | Pendiente | Por definir |
| Mesas municipales | Próxima semana | Marzo–abril |
| Minutas de reuniones con líderes | Drive en construcción | En curso |
| Giras con Daniel | Sergio invitó a Daniel — próximas 3 semanas | Marzo–abril |

### Lo que Sergio quiere del SIC ("carta a Santa Claus")

> "Que con toda esa información, el cerebro hiciera algo parecido a lo del plan de Guanajuato."

Específicamente:
1. Alimentar todas las fuentes al SIC (mesas, chatbot, encuestas, minutas)
2. Generar **control de cambios** sobre el Plan QRO 2050: así era antes → así debería cambiar → por qué → quién lo dijo → dónde se dijo
3. **Trazabilidad** de cada cambio al origen ciudadano
4. Que Sergio y su equipo solo tengan que "palomear" los cambios sugeridos
5. Memoria histórica del proceso de actualización

---

## Marco conceptual: Casos de uso → Productos

(Framework propuesto por Edgar Mohar, adaptado al rol de Planeación. Sergio comparte los 5 casos de uso base de Toño y el Gobernador, y agrega un sexto: **control de cambios**, específico para la actualización del Plan.)

### Alcance progresivo

El sistema de Sergio **no arranca con todas las fuentes cargadas** — crece conforme llegan los insumos del proceso de actualización:

| Fase | Fuentes disponibles | Qué puede hacer el sistema |
|------|---------------------|---------------------------|
| **Arranque (demo)** | Plan QRO 2050 actual + leyes del estado + voz ciudadana de talleres | Consultas sobre el Plan, cruce con marco legal, fichas básicas para mesas |
| **Post Semana Santa** | + Google Forms universidades + primeras mesas municipales | Control de cambios parcial, priorización inicial de proyectos icónicos |
| **Junio** | + chatbot del Consejo + encuesta empresarial + más mesas municipales | Control de cambios completo, detección de temas emergentes, tablero de insumos |
| **Segundo semestre** | + diagnóstico de Paty + minutas de gabinete + escenarios actualizados | Sistema completo para la actualización del Plan |

**El valor se demuestra desde el arranque con los datos disponibles.** Cada fuente que se agrega enriquece el control de cambios y la priorización — pero el sistema funciona desde el primer día con lo que ya hay.

### Casos de uso

| # | Caso de uso | Descripción | Ejemplo con leyes de QRO |
|---|-------------|-------------|--------------------------|
| 1 | **Consulta de datos** | Consultar el estado actual del Plan, indicadores por dimensión, avance de estrategias, comparativos con otros estados | "¿Cómo va el indicador de inversión extranjera directa según nuestro modelo propio vs. lo que reporta Economía federal?" (Sergio tiene modelo in-house porque INEGI sesga datos hacia CDMX por registro de corporativos) |
| 2 | **Fichas informativas** | Fichas de contexto para mesas municipales, giras, reuniones con gabinete, sesiones de escenarios | "Ficha para mesa municipal de El Marqués: diagnóstico actualizado de las 7 dimensiones para ese municipio + qué han dicho los ciudadanos del municipio en el chatbot + obligaciones del Art. 15 de la Ley Orgánica Municipal (Plan de Desarrollo Urbano)" |
| 3 | **Síntesis informativa** | Cruce de todas las fuentes de insumo: qué dice la gente en universidades + qué dicen los empresarios + qué salió en las mesas + qué dice el diagnóstico actual | "De los 7 proyectos icónicos, ¿cuál tiene más respaldo ciudadano? Fuentes: Google Forms (universidades), mesas municipales, chatbot del Consejo. Resultado: hospitales siguen siendo #1." |
| 4 | **Consulta jurídica / normativa** | Cruce con marco legal que rige el proceso de planeación | "¿Qué dice la Ley de Planeación del Estado sobre la periodicidad de actualización del Plan? ¿Cuándo es el plazo legal? ¿Qué actores deben participar según la ley?" |
| 5 | **Control de cambios** | El producto estrella para Sergio: documento base del Plan → insumos ciudadanos → propuesta de modificación sección por sección con trazabilidad | "Sección 3.2 (Movilidad): el texto actual dice X. 45 ciudadanos en mesas municipales y 120 respuestas del chatbot sugieren Y. Propuesta de cambio: Z. Fundamento: Art. 8 Ley de Participación Ciudadana (diálogo ciudadano)." |
| 6 | **Productos innovadores** | Cosas que hoy no existen: votación automática, priorización automática de proyectos icónicos, detección de temas emergentes | "Nuevo tema detectado: 35% de participantes en universidades mencionan economía circular como prioridad. No existe en la versión actual del Plan. Sugerencia: agregar como estrategia en dimensión de innovación." |

### Productos para Sergio (primera propuesta)

| Producto | Descripción | Ejemplo con marco legal | Caso de uso |
|----------|-------------|------------------------|-------------|
| **Control de cambios del Plan** | Documento que muestra: texto original → cambio propuesto → fuente → justificación. Como git diff pero para política pública | "Estrategia 4.1 (agua): texto actual habla de ampliación de cobertura. 180 propuestas ciudadanas piden priorizar renovación de infraestructura vieja. La Ley de Agua Potable, Art. 5, establece obligación de servicio continuo. Propuesta: modificar estrategia para incluir renovación de cañerías en colonias con infraestructura >40 años." | Control de cambios |
| **Tablero de insumos** | Estado de todas las fuentes: cuántas respuestas del chatbot, cuántas del Google Forms, minutas procesadas, mesas realizadas | "Google Forms: 847 respuestas de 12 universidades. Chatbot: aún no activo. Mesas municipales: 3 de 18 realizadas. Ley de Participación Ciudadana: Art. 3, principio de inclusión — recomendación: faltan municipios rurales." | Consulta de datos |
| **Ficha de mesa municipal** | Contexto antes de cada mesa: diagnóstico del municipio, qué han dicho sus ciudadanos, temas prioritarios, marco legal municipal | "Mesa Corregidora: crecimiento poblacional 12%. Proyectos icónicos que le aplican: hospital regional, movilidad. Código Urbano: Plan de Desarrollo Urbano Municipal actualizado en 2024. Ley Orgánica Municipal: obligación de consulta ciudadana (Art. 22)." | Fichas informativas |
| **Priorización de proyectos icónicos** | Ranking actualizado automáticamente con todas las fuentes de votación | "Ranking actual: 1. Hospitales (38%), 2. Movilidad/túneles (22%), 3. Innovación/economía circular (18%). Fuentes: 847 respuestas universitarias + 3 mesas municipales. Ley de Planeación: Art. 12, los proyectos estratégicos deben alinearse con la visión de largo plazo." | Síntesis informativa |
| **Detección de temas emergentes** | Temas nuevos que no estaban en la versión actual del Plan pero que están surgiendo | "Tema emergente: túneles urbanos tipo Guadalajara — mencionado en 2 mesas y por Sergio en sesión del 9 mar. No existe en Plan actual. Precedente: propuesta de Paco Falca hace 30 años. Código Urbano: competencia estatal en infraestructura de transporte masivo." | Productos innovadores |
| **Memoria histórica** | Registro completo de cómo el Plan fue evolucionando con cada ronda de insumos | "Versión 1 (2024) → Versión 2 (actualización 2026): 47 cambios propuestos, 32 aceptados, 15 en revisión. Principales influencias: mesas municipales (40%), encuesta empresarial (25%), chatbot (20%), escenarios (15%)." | Control de cambios |
| **Comparativo inter-estatal** | QRO vs. otros estados en indicadores de planeación (con datos limpios, no los de INEGI sesgados) | "IED real en QRO (modelo in-house de Sergio): $X comprometidos al quinto informe. vs. dato federal (sesgado por registro de corporativos en CDMX). Ley de Planeación: el plan debe basarse en información verificada (Art. 7)." | Consulta de datos |

---

## Los 3 temas para la demo

Acordados entre Sergio y Toño. Sergio propuso salud y agua/CEA; Toño propuso educación. Para Sergio, los 3 temas se ven desde la óptica de planeación — cómo se reflejan en el Plan QRO 2050 y cómo la ciudadanía quiere que cambien.

| Tema | Ángulo de planeación | Marco legal |
|------|---------------------|-------------|
| **Salud** | Proyectos icónicos: hospitales = #1 en votación ciudadana. ¿Qué dice el diagnóstico actual vs. lo que pide la gente? | Ley de Salud del Estado de QRO + Ley de Planeación (alineación PED con Plan 2050) |
| **Educación** | Dimensión prospectiva de capital humano. Insumos de universidades (Google Forms). ¿Qué estrategias del Plan deben actualizarse? | Ley de Educación del Estado de QRO + Ley de Participación Ciudadana (mecanismos de consulta) |
| **Agua / CEA** | Tema emergente desde talleres ciudadanos. Infraestructura vieja, fugas, abasto. ¿El Plan lo contempla suficiente? | Ley de Agua Potable del Estado de QRO + Código Urbano (infraestructura) |

---

## Diseño de interfaz (concepto para Sergio)

- **Desktop + phone** — Sergio trabaja con documentos largos (el Plan), necesita pantalla grande para control de cambios
- **Vista de control de cambios** — estilo git diff: texto original a la izquierda, propuesta a la derecha, fuente abajo
- **Bases de conocimiento toggleables** — prender/apagar: solo universidades, solo mesas municipales, solo chatbot, solo empresarios, todo junto
- **Filtro por dimensión** — ver insumos agrupados por las 7 dimensiones prospectivas
- **Permisos** — Sergio tiene acceso a modelo propio de inversión, datos de Paty, minutas de gabinete. Información que no es pública ni accesible para otros usuarios del SIC

---

## Estructura de la sesión con Sergio

**Duración:** 30–40 minutos
**Formato:** Demostración en vivo + validación

### 1. Encuadre (3 min)

> "Sergio, te vamos a mostrar cómo el SIC puede ayudarte en la actualización del Plan QRO 2050. Arrancamos con lo que ya tenemos cargado — el Plan actual, las leyes del estado, y las voces de los talleres ciudadanos. Vamos a usar 3 temas concretos — salud, educación y agua — para mostrarte qué tipo de cosas puede hacer hoy. Conforme vayan entrando más fuentes — el chatbot, las mesas municipales, la encuesta empresarial — el sistema se enriquece y el control de cambios se hace más completo."

### 2. Demo por casos de uso (20 min)

**a) Consulta de datos:**
- "¿Cuántas respuestas del Google Forms tenemos de universidades? ¿Qué dimensión prospectiva tiene más menciones?"
- "¿Cómo va la inversión real según nuestro modelo vs. lo que reporta Economía federal?"
- "¿Qué dice la Ley de Planeación sobre el plazo para presentar la actualización del Plan?"

**b) Fichas informativas:**
- "Hazme una ficha para la mesa municipal de Corregidora de la próxima semana" → genera: diagnóstico del municipio, propuestas ciudadanas, marco legal (Ley Orgánica Municipal Art. 22), temas pendientes
- "Ficha de contexto: dimensión de salud — diagnóstico actual + lo que ha dicho la gente"

**c) Síntesis informativa:**
- "De los 7 proyectos icónicos, ¿cuál tiene más respaldo ciudadano? Cruza todas las fuentes."
- "¿Qué dice la ciudadanía sobre movilidad? Cruza con Código Urbano y estrategia actual del Plan."

**d) Control de cambios (producto estrella):**
- Mostrar en vivo: tomar una sección del Plan → alimentar con insumos de una mesa municipal → generar propuesta de cambio con trazabilidad
- "Sección 3.2: el texto actual dice X. 45 participantes en la mesa de El Marqués sugieren Y. Propuesta: cambiar a Z. Fundamento legal: Art. 8 Ley de Participación Ciudadana."
- Sergio solo tiene que palomear o rechazar cada cambio

**e) Consulta jurídica:**
- "¿La Ley de Participación Ciudadana permite que el chatbot del Consejo sea un mecanismo formal de consulta?"
- "¿Qué artículo de la Ley de Planeación regula la participación del gabinete en la actualización de escenarios?"

**f) Producto innovador:**
- "Tema emergente detectado: economía circular — mencionado por 35% de universitarios pero no existe como estrategia en el Plan actual. Sugerencia de dónde incluirlo y con qué fundamento."

### 3. Validación (10 min)

Tres preguntas:

1. **¿Cuáles de estos casos de uso te servirían para el proceso de actualización?** (ordenar de más a menos útil)
2. **¿El control de cambios tal como lo viste te serviría? ¿Qué le ajustarías?**
3. **¿Qué fuentes de información cargamos primero?** (el Plan actual, minutas, Google Forms, diagnóstico de Paty)

### 4. Cierre (2 min)

> "Con esto configuramos tu versión del SIC enfocada en la actualización del Plan. Cuando tengas el chatbot activo y las mesas municipales avanzando, alimentamos todo y te generamos el control de cambios completo."

---

## Diferencias clave vs. Toño y Gobernador

| Aspecto | Toño | Gobernador | Sergio |
|---------|------|------------|--------|
| Foco principal | Operación diaria, consejos, PED | Inteligencia colectiva, giras, alertas | Actualización Plan QRO 2050 |
| Producto estrella | Monitor de consejos | Briefing matutino, ficha de gira | Control de cambios con trazabilidad |
| Horizonte temporal | Día a día, semanal | Día a día, coyuntural | Mediano-largo plazo (prospectiva) |
| Fuentes prioritarias | Consejos, voz ciudadana, PED | Todo: prensa, datos, leyes, inversión | Mesas, chatbot, encuestas, diagnóstico |
| Interfaz | Desktop + phone | Phone-first | Desktop primario (documentos largos) |
| Marco legal clave | Ley de Participación Ciudadana, Ley de Planeación | Todas (gobernanza general) | Ley de Planeación, Ley de Participación Ciudadana |

---

## Leyes del Estado de Querétaro relevantes para Sergio

Toño pidió explícitamente cargar las leyes al agente. Para Sergio, el marco legal fundamenta que los insumos ciudadanos son válidos para modificar el Plan y establece los plazos y actores obligados.

| Ley | Relevancia para Planeación |
|-----|---------------------------|
| Ley de Planeación del Estado de QRO | Marco rector: periodicidad de actualización, actores obligados, coordinación con municipios, evaluación, participación del gabinete |
| Ley de Participación Ciudadana del Estado de QRO | Mecanismos formales de consulta: consejos, observatorios, presupuesto participativo, diálogo ciudadano — fundamenta que los insumos ciudadanos son válidos para modificar el Plan |
| Ley Orgánica Municipal del Estado de QRO | Obligaciones de los municipios en planeación: planes de desarrollo urbano, consulta ciudadana, coordinación con estado |
| Código Urbano del Estado de QRO | Infraestructura, zonificación, reservas territoriales — las mesas municipales tocan estos temas |
| Ley de Agua Potable, Alcantarillado y Saneamiento del Estado de QRO | Tema emergente ciudadano, competencias de la CEA, Programa Hídrico Estatal |
| Ley de Salud del Estado de QRO | Proyectos icónicos: hospitales = prioridad #1 ciudadana |
| Ley de Educación del Estado de QRO | Dimensión de capital humano, insumos universitarios |
| Ley de Transparencia y Acceso a la Información Pública del Estado de QRO | El control de cambios genera transparencia sobre cómo se modificó el Plan y por qué |
| Ley de Gobierno Digital del Estado de QRO | Soporte legal para herramientas digitales de participación (chatbot, plataformas) |
| Constitución Política del Estado Libre y Soberano de Querétaro | Facultades del Ejecutivo en planeación, participación ciudadana como derecho |

Fuente: [Legislatura de Querétaro — Leyes](http://legislaturaqueretaro.gob.mx/leyes/)

---

## Siguiente paso

| Acción | Responsable | Fecha |
|--------|-------------|-------|
| Reunión de preparación (con Toño) | HA + Toño + Sergio + Edgar Mohar | 11 mar, 2:00 PM |
| Joaquín sube minutas de mesas al Drive | Joaquín | Esta semana |
| Sergio envía nota metodológica del proceso de actualización | Sergio / Joaquín | Esta semana |
| Presentación a Finanzas (Gustavo Arturo Leal Maya) | Toño + HA | Jueves 13 o viernes 14 mar |
| Cargar versión actual del Plan QRO 2050 a base de conocimiento | HA (equipo técnico) | En cuanto se reciba |
| Cargar leyes de QRO al agente | HA (equipo técnico) | En paralelo |
| Chatbot de participación ciudadana activo | Joaquín / Consejo | Post Semana Santa (~abril) |
| Demo a Sergio | Edgar Barroso + Edgar Mohar | Post-demo Toño |
| Primer control de cambios piloto (con datos de mesas disponibles) | HA | Junio (cuando haya suficientes fuentes) |
