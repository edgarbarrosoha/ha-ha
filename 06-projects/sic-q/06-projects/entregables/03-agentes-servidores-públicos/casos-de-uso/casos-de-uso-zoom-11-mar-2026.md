# Casos de uso — Llamada 11 marzo 2026

**Participantes:** Edgar Barroso, Edgar Mohar, Toño Rangel, Sergio Ibarra
**Contexto:** Demo de prototipo SIC-Q + definición de casos de uso para el gobernador previo a presentación a Sec. Finanzas (14 mar)

---

## Gobernador

### Análisis legal

| # | Caso de uso | Detalle | Status |
|---|-------------|---------|--------|
| 1 | **Escenarios presupuestales ante Congreso** | "¿Qué pasa si el Congreso no autoriza el presupuesto? ¿Qué alternativas da la ley al poder ejecutivo?" | Probado con éxito. 5 escenarios generados con fundamento legal |
| 2 | **Nombramientos que requieren 2/3 partes** | "¿Qué nombramientos quedan que requieran 2/3 de aprobación en el Congreso en lo que resta de mi periodo?" — magistrados, fiscales, etc. | Requiere cargar fechas y periodos de cada cargo |
| 3 | **Ficha de reforma electoral federal** | "Hazme una ficha de lo más importante de la reforma electoral que presenta Claudia Sheinbaum" | Requiere cargar la iniciativa |

### Análisis electoral

| # | Caso de uso | Detalle | Status |
|---|-------------|---------|--------|
| 4 | **Calendario electoral estatal** | Según la ley electoral de Querétaro: precampañas, registro de candidatos, periodos | Leyes ya cargadas |
| 5 | **Calendario electoral federal** | Mismo formato, posiciones federales | Requiere datos |
| 6 | **Countdown electoral** | "¿Cuántas semanas/días tengo de aquí al día de la elección?" | Leyes cargadas |
| 7 | **Posiciones en disputa** | "¿Cuántas posiciones se juegan en Querétaro? Regidurías, presidentes municipales, gobernador" | Probado parcialmente — aviso de falta de datos curados |
| 8 | **Bloques de paridad por partido** | "¿Cuáles son los bloques de paridad y cómo los debe satisfacer PAN, Morena, cada partido, según la ley y los resultados de 2024?" | Requiere resultados electorales oficiales |
| 9 | **Resultados electorales históricos** | "PAN: cuántos votos, con qué porcentaje ganó en la capital" — cruces de numeralia electoral por distrito, año, partido | Requiere bases del IEEQ (Alfredo Flores) |
| 10 | **Ficha de candidato/diputado** | "Va a venir la diputada del quinto distrito que quiere reelección. Platícame su resultado en 2024 y la historia de ese distrito: tabla de votos, porcentaje, tendencia, comparativo" | Requiere datos electorales |

### Media y comunicación

| # | Caso de uso | Detalle | Status |
|---|-------------|---------|--------|
| 11 | **Análisis de medios por actor político** | "Cuántas notas cubren a Felifer Macías (alcalde) vs. Luis Bernardo Nava. Cuántas son a favor, neutras, en contra. Última semana / hoy / último mes" | Requiere monitoreo de medios conectado |
| 12 | **Boletín de prensa enriquecido** | Del boletín existente, escoger una nota → declaraciones de actores, cobertura por medio, enfoque positivo/negativo/neutro, propuestas automáticas | Monitoreo de noticias ya opera |
| 13 | **Líneas discursivas en tiempo real** | "No tenía preparado un discurso pero me pidieron que hablara" → genera líneas sobre el tema vinculadas con narrativa del gobierno y datos del lugar | Requiere cargar narrativa del gobierno |

### CRM / Fichas de persona (Edgar Mohar)

| # | Caso de uso | Detalle | Status |
|---|-------------|---------|--------|
| 14 | **Ficha de persona con menú de opciones** | Ingresas un nombre → el sistema sugiere: generales, declaraciones en prensa, datos en bases de gobierno (impuestos, programas sociales, procesos judiciales), acuerdos previos de reuniones, historial de solicitudes | Requiere conexión a bases de gobierno |
| 15 | **Resumen para reunión** | "Me voy a reunir con Edgar Barroso. Hazme un resumencito de todo" o "Solo quiero los últimos puntos de la reunión pasada" | Requiere CRM alimentado |
| 16 | **Detección de inconsistencias** | "Viene a pedirnos un apoyo y resulta que debe impuestos sobre nómina y nos está demandando" — cruce automático de bases de datos | Requiere conexión a Finanzas |

### Giras y briefings municipales

| # | Caso de uso | Detalle | Status |
|---|-------------|---------|--------|
| 17 | **Ficha de lugar con menú de opciones** (Mohar) | Ingresas un municipio → opciones: cobertura de servicios, beneficiarios de programas sociales, temas mediáticos locales, actores clave, relaciones políticas, infraestructura | Parcialmente operativo |
| 18 | **Briefing holístico por municipio** (Toño) | "¿Qué hemos hecho en Cadereyta?" → cruza datos de 70 dependencias: inversión total, obras en curso, beneficiarios, clínicas, infraestructura educativa. "Transitar de discursos sectorizados a hablar holísticamente del lugar" | Requiere alimentación de 70 actores clave |
| 19 | **Ficha con formato personalizado** (Mohar) | "¿Quieres la ficha de este lugar con tu formato H-24?" → genera PDF descargable con el formato que ya usa el particular del gobernador | Requiere definir templates |

### Gestión gubernamental

| # | Caso de uso | Detalle | Status |
|---|-------------|---------|--------|
| 20 | **Dashboard para reunión de gabinete** | Indicadores clave por secretaría, últimos acuerdos, compromisos pendientes, programas desfasados | Requiere datos de secretarías |
| 21 | **Proyectos emblema** | Estado de avance de los proyectos principales del gobierno — consultable por Toño, Sergio o el gobernador | Estructura existe en prototipo |

### Menú proactivo (Edgar Mohar)

| # | Caso de uso | Detalle | Status |
|---|-------------|---------|--------|
| 22 | **"¿Qué quieres hacer hoy, gobernador?"** | Menú de 6 categorías con 8-10 opciones cada una. No limitativo — siempre abierto a preguntas libres. Categorías inferidas: (1) reunión con persona clave, (2) análisis legal, (3) análisis electoral, (4) gestión gubernamental, (5) gira/discurso/entrevista, (6) consulta de datos | Concepto — requiere diseño de UX |

---

## Secretario de Planeación (Toño)

| # | Caso de uso | Detalle | Status |
|---|-------------|---------|--------|
| 23 | **Consulta legal desde perspectiva de Planeación** | El caso demostrado (presupuesto) automáticamente contextualizó el impacto para la Secretaría de Planeación | Funcional |

---

## Capacidades transversales demostradas

| # | Capacidad | Detalle |
|---|-----------|---------|
| 24 | **Toggle internet on/off** | Decidir si consulta solo base curada o también internet |
| 25 | **Aviso de procedencia de datos** | El sistema avisa cuando usa datos curados vs. internet — "no está en mi base de conocimiento" |
| 26 | **Prender/apagar bases de conocimiento** | "Solo quiero consultar la Constitución" → apaga las demás fuentes |
| 27 | **Crear fuentes nuevas** | Subir archivo, URL, IP, base de datos, servidor como nueva fuente |
| 28 | **Múltiples modelos de IA** | Claude, GPT, Gemini — seleccionable por el usuario |
| 29 | **Aprendizaje contextual** | El sistema mejora en lo que más le preguntan (no entrenamiento, sino contextualización) |
| 30 | **Perfiles por usuario** | Cada quien su perfil con permisos diferenciados. El particular del gobernador opera con permisos elevados |
| 31 | **Rendereo de gráficas en chat** | No solo datos, también visualizaciones dentro de la conversación |

---

## Datos requeridos para habilitar casos de uso

| Datos | Fuente | Responsable | Status |
|-------|--------|-------------|--------|
| Resultados electorales 2024, 2021, 2018, 2015 | IEEQ / Alfredo Flores | Mohar busca a Alfredo, Toño ya le mandó mensaje | En proceso |
| Narrativa del gobierno | Gobierno de Querétaro / Toño | Pendiente | Por cargar |
| Fechas de nombramientos (magistrados, fiscales, etc.) | Toño | Pendiente | Por cargar |
| Iniciativa de reforma electoral de Sheinbaum | Pública | Edgar Barroso | Por cargar |
| Datos de salud (bases de datos) | Secretaría de Salud QRO | Edgar Barroso | Acceso confirmado 11-12 mar |
| Datos de programas sociales (tarjeta Contigo) | Gobierno QRO | Toño desbloquea (pedían NDA) | Pendiente |
| Información de 70 actores clave del gobierno | Cada secretaría | Requiere guía de alimentación | Concepto |

---

*Fuente: zoom-11.03.2026-transcripción.md*
*Extraído: 12 marzo 2026*
