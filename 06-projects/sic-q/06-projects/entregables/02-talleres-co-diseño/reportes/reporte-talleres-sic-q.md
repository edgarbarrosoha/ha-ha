# Reporte Técnico: Análisis Dimensional de los Talleres de Co-Diseño SIC-Q

> Marco analítico: Horizons Architecture (HA)
> Datos: Taller 1 (16 febrero 2026) + Taller 2 (17 febrero 2026)
> Sede: Club de Industriales de Querétaro
> Documento para: Agente SIC-Q (base de conocimientos para interacción con el Consejo Querétaro para la Planeación Estratégica A.C.)

---

## PARTE I — MARCO Y DATOS

### 1.1 Propósito de este documento

Este documento es la base de conocimientos que alimenta al agente SIC-Q para comunicar los resultados de los talleres de co-diseño al CONSEQRO. No es un resumen ejecutivo ni una presentación narrativa. Es un repositorio técnico, estructurado para que el agente pueda:

- Responder preguntas específicas sobre los resultados ("¿qué dijeron sobre agua?", "¿quiénes fueron los actores más mencionados?")
- Citar datos con trazabilidad (Taller X, Mesa Y, Dimensión Z)
- Distinguir entre datos directos (lo que los participantes dijeron) y análisis inferencial (lo que los datos sugieren cuando se cruzan)
- No inventar nada — si el dato no está aquí, el agente no lo afirma

### 1.2 Horizons Architecture como marco analítico

Horizons Architecture (HA) es un framework teórico que organiza la complejidad de cualquier iniciativa a través de 6 dimensiones interdependientes. Cada dimensión es una lente para observar la misma realidad desde un ángulo distinto.

**Las 6 dimensiones HA:**

| Dimensión | Pregunta que responde | Naturaleza |
|-----------|----------------------|------------|
| **Legado** | ¿Qué queremos que trascienda? | Lo que permanece más allá de ciclos electorales o institucionales |
| **Comunidad** | ¿Quiénes participan y cómo se coordinan? | La red de actores, sus relaciones y su capacidad de acción colectiva |
| **Aprendizaje** | ¿Qué sabemos y qué necesitamos aprender? | El conocimiento acumulado, las brechas formativas, la capacidad de adaptación |
| **Tecnología** | ¿Qué herramientas lo hacen posible? | Infraestructura digital, modelos de IA, plataformas, datos, conectividad |
| **Contexto** | ¿Qué condiciones externas nos afectan? | El entorno político, económico, social, ambiental y regulatorio |
| **Proyectos** | ¿Cómo lo ejecutamos concretamente? | Iniciativas específicas, plazos, recursos, implementación |

**Qué se trabajó en los talleres y qué no:**

Los talleres fueron diseñados para trabajar explícitamente **3 de las 6 dimensiones**: Legado, Comunidad y Contexto. Las dimensiones de Aprendizaje, Tecnología y Proyectos **no fueron abordadas directamente** — no hubo preguntas, actividades ni mesas dedicadas a ellas.

Sin embargo, HA opera bajo un principio de **fractalidad**: cada dimensión contiene ecos de las demás. Cuando un participante habla de "necesitamos mejor internet en la Sierra" dentro de la dimensión Contexto, está emitiendo una señal que pertenece a Tecnología. Cuando alguien dice "deberíamos aprender de lo que hizo Bogotá", eso es una señal de Aprendizaje. Estas señales implícitas se analizan en la Parte IV de este reporte.

**Tres principios analíticos de HA usados en este reporte:**

1. **Fractalidad**: Los mismos patrones pueden aparecer a diferentes escalas — lo que dice un individuo, lo que converge una mesa, lo que emerge en un taller, y lo que se confirma entre los dos talleres. Un tema que se repite en las 4 escalas es una señal fractal: profunda y estructural.

2. **Interacción dimensional**: Las dimensiones no son independientes. Lo que se aspira en Legado puede estar habilitado o bloqueado por lo que se describe en Contexto, y puede tener o no respaldo en la red de Comunidad. Cruzar dimensiones revela alineaciones y contradicciones.

3. **Temporalidad no lineal**: Los datos capturan tres tiempos — pasado (aprendizajes y lecciones en Contexto), presente (fortalezas, retos y red de actores), futuro (aspiraciones en Legado). HA sostiene que estos tiempos no son secuenciales: se retroalimentan. Un futuro aspirado puede ignorar una lección del pasado; un reto presente puede contradecir una aspiración futura.

### 1.3 Diseño de los talleres

**Origen del diseño:** Los talleres forman parte del Proceso de Diseño Participativo del SIC-Q, una metodología de 4 actividades y 6 semanas diseñada por Edgar Barroso (Horizons Architecture) en colaboración con la Secretaría de Planeación y Participación Ciudadana del Estado de Querétaro. Los talleres son la Actividad 1 del proceso.

**Estructura de ambos talleres:**

| Elemento | Detalle |
|----------|---------|
| Duración | 3.5 horas (16:00 - 19:30) |
| Mesas | 6 mesas de trabajo |
| Dimensiones trabajadas | 3 (Legado, Comunidad, Contexto) |
| Facilitación | 1 moderador por mesa + equipo IA para captura en tiempo real |
| Captura | Manuscrito en rotafolios y formatos individuales → foto → digitalización → vectorización semántica → clustering → análisis IA |
| Cierre | Demostración en vivo del agente SIC-Q sintetizando las voces del taller |

**Diferencias entre talleres:**

| Aspecto | Taller 1 (16 feb) | Taller 2 (17 feb) |
|---------|-------------------|-------------------|
| Versión | Ciudadanía | Ciudadanía |
| Énfasis de tiempo | Comunidad (30 min) | Comunidad (30 min) |
| Participantes | Ciudadanía diversa: academia, empresarios, sociedad civil, jóvenes, zonas rurales | Ciudadanía diversa: composición similar |

**Flujo de trabajo por dimensión:**

**Legado (25 min):**
- Fase individual (5 min): cada participante completó por escrito frases como "En 10 años Querétaro podría...", "Lo primero que me gustaría ver...", "Lo que más me preocupa...", "Nos recordarán porque..."
- Fase colectiva (10 min): deliberación en mesa sobre 4 preguntas: "Un Querétaro más próspero", "Un Querétaro donde nos encontremos", "Un Querétaro que cuida lo que tiene", "Por qué nos van a recordar"
- Síntesis (10 min): agrupación en rotafolio

**Comunidad (30 min):**
- Individual (5 min): cada persona escribió en post-its los actores que deberían participar en el SIC-Q (uno por tarjeta)
- Colocación (5 min): todos pusieron tarjetas en el rotafolio
- Agrupación (10 min): colectivamente agruparon en clusters
- Marcaje de ausencias (5 min): marcador rojo para clusters que "no existen" pero deberían
- Discusión (5 min): "¿Qué haría que [cluster X] realmente lo use?"

**Contexto (20 min):**
- División en subgrupos simultáneos para 3 preguntas: "Lo que hemos aprendido en el camino", "Lo que nos favorece", "Retos que enfrentamos"

**Procesamiento técnico:**
- Las fotos de rotafolios y formatos individuales fueron digitalizadas en tiempo real por el equipo técnico
- Los textos fueron convertidos en vectores numéricos mediante modelos de embeddings
- Se calculó proximidad semántica (distancia coseno y distancia euclidiana) para identificar clusters temáticos
- El sistema de IA generó reportes agregados por dimensión en aproximadamente 20 minutos
- El agente SIC-Q presentó una síntesis en vivo al final de cada taller

### 1.4 Inventario de datos

**Asistentes por taller y mesa:**

| Mesa | Taller 1 (16 feb) | Taller 2 (17 feb) |
|------|-------------------|-------------------|
| Mesa 1 | 7 | 6 |
| Mesa 2 | 7 | 7 |
| Mesa 3 | 5 | 6 |
| Mesa 4 | 5 | 7 |
| Mesa 5 | 7 | 6 |
| Mesa 6 | 5 | 6 |
| **Total** | **36** | **38** |

Fuente: Listas de asistencia verificadas (`Attendance List Feb 16 Verified.md`, `Attendance List Feb 17 Verified.md`)

**Datos de captura y procesamiento:**

| Métrica | Taller 1 | Taller 2 | Total |
|---------|----------|----------|-------|
| Asistentes | 36 | 38 | 74 |
| Participaciones capturadas | 347 | 431 | 778 |
| Actores mapeados (Comunidad) | [no consolidado] | 248 | — |
| Conexiones mapeadas (Comunidad) | [no consolidado] | 136 | — |
| Insights transversales generados | 7 | 5 | 12 |

Fuente de participaciones, actores y conexiones: Prompts del agente de voz de cada taller (`agente/prompt-contexto.md`), que consolidaron los datos procesados en tiempo real por el equipo IA.

**Nota sobre datos de Comunidad del Taller 1:** El conteo de actores y conexiones del T1 no fue consolidado numéricamente en un solo archivo, como sí se hizo para el T2. Los datos existen distribuidos en las 6 transcripciones de mesa de Comunidad del T1 pero no fueron agregados.

**Corpus documental por taller:**

| Tipo de archivo | Por taller | Total |
|-----------------|-----------|-------|
| Transcripciones por mesa (6 mesas × 3 dimensiones) | 18 | 36 |
| Análisis sintéticos por dimensión | 3 | 6 |
| Insights transversales | 1 | 2 |
| Transcripción completa del taller | 1 | 2 |
| Fotos de rotafolios/post-its | Múltiples | Múltiples |

**Archivos fuente:**

| Archivo | Ruta |
|---------|------|
| Análisis Contexto T1 | `02-community/talleres/primer-taller-de-la-fundación-del-sic-q/contexto/analisis-contexto.md` |
| Análisis Legado T1 | `02-community/talleres/primer-taller-de-la-fundación-del-sic-q/legado/analisis-legado.md` |
| Análisis Comunidad T1 | `02-community/talleres/primer-taller-de-la-fundación-del-sic-q/comunidad/analisis-comunidad.md` |
| Insights T1 | `02-community/talleres/primer-taller-de-la-fundación-del-sic-q/insights.md` |
| Transcripción completa T1 | `02-community/talleres/primer-taller-de-la-fundación-del-sic-q/Taller Lunes 16 Transcription.md` |
| Análisis Contexto T2 | `02-community/talleres/segundo-taller-de-la-fundación-del-sic-q/contexto/analisis-contexto.md` |
| Análisis Legado T2 | `02-community/talleres/segundo-taller-de-la-fundación-del-sic-q/legado/analisis-legado.md` |
| Análisis Comunidad T2 | `02-community/talleres/segundo-taller-de-la-fundación-del-sic-q/comunidad/analisis-comunidad.md` |
| Insights T2 | `02-community/talleres/segundo-taller-de-la-fundación-del-sic-q/insights.md` |
| Transcripción completa T2 | `02-community/talleres/segundo-taller-de-la-fundación-del-sic-q/Taller 17.02 Transcription.md` |
| Diseño metodológico | `06-projects/entregables/talleres-febrero-2026/talleres-3-dimensiones.md` |
| Metodología general | `02-community/talleres/metodología-proceso-codiseño-sic-q-ha-v.02.md` |

Transcripciones por mesa: 36 archivos ubicados en `{taller}/contexto/mesa-{1-6}/transcripciones.md`, `{taller}/legado/individual/mesa-{1-6}/transcripciones.md`, `{taller}/legado/colectivo/mesa-{1-6}/transcripciones.md`, `{taller}/comunidad/mesa-{1-6}/transcripciones.md`

### 1.5 Composición de las mesas

Las mesas no fueron asignadas aleatoriamente por perfil profesional — los participantes se sentaron libremente. La composición resultante de cada mesa explica en gran medida qué tipo de respuestas produjo. Esta tabla permite al agente interpretar los resultados con contexto: saber QUIÉN dijo algo es tan importante como saber QUÉ dijo.

**Caveat:** Las listas de asistencia fueron manuscritas y muchos nombres/instituciones son parcialmente ilegibles. Lo que sigue es la mejor reconstrucción posible a partir de los datos verificables.

Fuente: `Attendance List Feb 16 Verified.md`, `Attendance List Feb 17 Verified.md`

#### Taller 1 (16 de febrero)

| Mesa | Personas | Perfiles identificados | Composición dominante | Qué explica de sus resultados |
|------|----------|----------------------|----------------------|-------------------------------|
| M1 | 7 | Dirección de Participación Ciudadana (×2), Alcaldía, Consejo Ciudadano, Consejo de Seguridad | **Gobierno municipal + consejos ciudadanos** | La presencia del Consejo de Seguridad explica "LA SEGURIDAD ES INDISPENSABLE — frágil y vulnerable" (Contexto). La perspectiva de participación ciudadana explica la visión de quíntuple hélice y la demanda de "brújula moral" — personas acostumbradas a escuchar a la ciudadanía. |
| M2 | 7 | Cámara de Comercio Qro., empresaria, Comité de Fundaciones, despacho de abogados | **IP + sector legal + filantropía** | Producen "perderíamos competitividad", "fuga de talentos", "sistema de justicia que eliminara la corrupción." La perspectiva empresarial y legal domina — hablan de ahorro de recursos, inversión, y eliminación de corrupción con lenguaje de despacho. |
| M3 | 5 | SPPC (Sec. de Planeación y Participación Ciudadana), consultoría (Práctica), CIVICA, Partido MORENA | **Planeación gubernamental + sociedad civil + partido político** | Mesa más rica en Comunidad T1 (39 actores). La SPPC explica la visión sistémica y "Legislaciones publicadas pero NO aplicadas" — voz de alguien que ve el problema desde adentro de la planeación. MORENA explica la perspectiva de desigualdad. Única mesa con un partido político en T1. |
| M4 | 5 | Fomento al Empleo y Desarrollo Económico, FONACOT, Desarrollo Económico (gob.), CANACO | **Gobierno económico + cámaras empresariales** | Producen "anticiparnos, detectar problemáticas a tiempo" y la demanda más directa de datos. Mesa con fuerte orientación a empleo e inversión — "involucramiento equitativo para proyecto de alcance estatal (ej. aeronáutico)." |
| M5 | 7 | Tec de Monterrey (×2), Consejo de Participación Ciudadana, Cívica (×2) | **Academia privada + sociedad civil organizada** | Producen la mayor granularidad en sector financiero (Fintech, inversionistas, sistemas financieros). La perspectiva Tec de Monterrey explica el vocabulario de "ESTRATEGIA PLANEACIÓN EJECUCIÓN E IMPACTO EFICACIA Y EFICIENCIA" — lenguaje de escuela de negocios. |
| M6 | 5 | Gobierno estatal (correo @queretaro.gob.mx), organizaciones sociales, fundaciones, centro de desarrollo | **Sector social + gobierno estatal** | Menor producción individual de T1 (16 participaciones). Producen la preocupación por infancias/juventudes y salud mental. Perfil más orientado a lo social que a lo institucional. |

#### Taller 2 (17 de febrero)

| Mesa | Personas | Perfiles identificados | Composición dominante | Qué explica de sus resultados |
|------|----------|----------------------|----------------------|-------------------------------|
| M1 | 6 | SEDESU, Instituto (ilegible), Atención a Pueblos Indígenas, ciudadanos (×3) | **Gobierno + pueblos indígenas + ciudadanía base** | La presencia de Atención a Pueblos Indígenas explica "Igualdad de oportunidades para los pueblos Indígena del Estado de Querétaro." Los ciudadanos sin afiliación institucional aportan perspectiva de base. |
| M2 | 7 | CONCYTEQ (Dr. Enrique Rabell García, Director General), UAQ, Gobierno/Educación (COEPES), SEDEULT, Instituto de Pueblos y Comunidades Indígenas | **Academia de alto nivel + gobierno de ciencia y educación** | **Mesa más rica de ambos talleres: 49 actores.** El Director del CONCYTEQ explica los organismos internacionales (ONU, UNESCO, FMI, BID, embajadas) y la cadena educativa completa (CONAFE hasta ANUIES). Visión cosmopolita e institucional. |
| M3 | 6 | Coord. de Inclusión Social para PcD (Martha Llamas Macías, titular estatal), DIF Estatal (vinculación OSC), Una Mirada por el Mundo I.A.P., PARE (×2), universidad/educación | **Sector social + inclusión + discapacidad** | Producen "Cuidar SIEMPRE la parte humana", "deshumanización y falta de valores." La titular estatal de PcD explica el enfoque en grupos vulnerables. La IAP y el DIF aportan la perspectiva de atención directa a poblaciones. |
| M4 | 7 | Tec de Monterrey (@tec.mx), Anima (fundación), SIPCE/Municipio de Querétaro (×2), Kolbe | **Gobierno municipal + academia + tercer sector** | Producen "INCLUIR MEJOR A TODA LA POBLACIÓN", sistemas de prevención en salud, y "va a haber una falta de sentido humano." La combinación municipal + Tec genera lenguaje de política pública con enfoque de innovación. |
| M5 | 6 | Consejo Adulto Mayor, consultoría (Marquina Alta), fundación Vive, universidad, UAQ-STEUAQ (sindicato) | **Consultoría + academia + sociedad civil + sindicato** | Producen "no queremos ser el nuevo Celaya", "Mi peor pesadilla es que haya ya sido afortunada de ver el mejor momento de Querétaro", y "Que el SIC-Q genere una sociedad civil consciente, pensante y exigente." La voz sindical (única en ambos talleres) y el Consejo de Adulto Mayor generan la perspectiva más crítica y emocionalmente intensa. |
| M6 | 6 | SEDESOQ (Sec. Desarrollo Social), SDUOP (Sec. Desarrollo Urbano y Obras Públicas), SEDESU/SEDESOQ, CADARSO (ilegible), SEDESTY (ilegible) | **Gobierno estatal operativo: desarrollo social, urbano, obras públicas, sustentabilidad** | **La anomalía explicada.** Producen ejidos, CEA, SCT, plantas potabilizadoras, captación de lluvia, "IA Colectiva", incentivos fiscales, LGTB+, personas violentadas. Son los únicos que nombran actores operativos y proponen proyectos de infraestructura porque su trabajo diario es ejecutar obra pública y programas sociales. |

#### Patrones de composición

**Lo que la composición revela:**

1. **La composición predice el resultado.** Las mesas con IP hablan de competitividad y corrupción. Las mesas con academia hablan de actores internacionales y cadenas educativas. Las mesas con sector social hablan de humanismo y grupos vulnerables. Las mesas con gobierno operativo hablan de infraestructura y actores concretos.

2. **Solo una mesa tenía operadores de obra pública (T2-M6).** Esto explica por qué es la única mesa que piensa en "quién construye" y no solo en "quién decide." Las otras 11 mesas tenían perspectivas de planeación, análisis, representación o incidencia — no de ejecución física.

3. **T2 tuvo más servidores públicos que T1.** Esto contribuye a la mayor granularidad de T2: cuando un servidor público de SEDESU nombra actores, nombra secretarías específicas con las que interactúa diariamente. Cuando un ciudadano nombra actores, tiende a categorías genéricas ("Gobierno", "Universidades").

4. **No hay participantes de empresas tecnológicas, telecomunicaciones, sector construcción, ni banca en ninguna mesa de ningún taller.** Esto explica estructuralmente por qué estos actores están ausentes del mapeo de Comunidad (ver 5.2.1): no los nombran porque no están en la sala.

5. **Los perfiles más críticos coinciden con las voces más emocionales.** T2-M5 (sindicato + Consejo de Adulto Mayor + consultoría) produce las citas más crudas de ambos talleres. T2-M3 (PcD + DIF + IAP) produce la demanda más fuerte de humanismo.

**Implicación para futuros talleres:** La composición de las mesas no debe dejarse al azar. Si se quiere que el SIC-Q capture perspectivas operativas, debe haber al menos un operador de gobierno (obra pública, desarrollo social, servicios) por mesa. Si se quiere capturar perspectivas de base, debe haber ciudadanos sin afiliación institucional. La diversidad de perspectivas en la mesa determina la diversidad de los datos producidos.

---

## PARTE II — RESULTADOS POR DIMENSIÓN

> Esta parte presenta los datos tal como fueron recabados. Sin cruce entre dimensiones, sin interpretación. Lo que los participantes dijeron, organizado por dimensión y por taller.

---

### 2.1 Dimensión: Legado

**Qué se preguntó:** ¿Qué queremos que trascienda? Se trabajó en dos fases: individual (cada participante respondió por escrito a 4 frases detonadoras) y colectiva (cada mesa deliberó sobre 4 preguntas y llegó a acuerdos).

**Frases detonadoras (fase individual):** "En 10 años Querétaro podría...", "Lo primero que me gustaría ver...", "Lo que más me preocupa...", "Nos recordarán porque..."

**Preguntas de deliberación (fase colectiva):** "Un Querétaro más próspero", "Un Querétaro donde nos encontremos", "Un Querétaro que cuida lo que tiene", "¿Por qué nos van a recordar?"

---

#### 2.1.1 Taller 1 — Legado

**Participaciones individuales por mesa:**

| Mesa | Participaciones |
|------|----------------|
| Mesa 1 | 24 |
| Mesa 2 | 24 |
| Mesa 3 | 20 |
| Mesa 4 | 20 |
| Mesa 5 | 24 |
| Mesa 6 | 16 |
| **Total** | **128** |

Fuente: Transcripciones individuales por mesa (`primer-taller/legado/individual/mesa-{1-6}/transcripciones.md`)

**Clusters temáticos identificados en T1 Legado (individual + colectivo):**

**Cluster L1: Toma de decisiones basada en datos** (Mesas 1, 2, 3, 4, 5)
Los participantes aspiran a un Querétaro donde las decisiones de política pública se basen en información verificable y actualizada. Este fue el cluster más robusto de Legado.
- "Datos duros que ayudarán a tomar mejores decisiones" (T1, Mesa 4, individual)
- "Tener estadística válida para la toma de decisiones" (T1, Mesa 2, individual)
- "Sistema que permita visualizar para qué sirve la información" (T1, Mesa 5, individual)
- Colectivo Mesa 4: "Anticiparnos, detectar problemáticas a tiempo"
- Colectivo Mesa 5: "ESTRATEGIA PLANEACIÓN EJECUCIÓN E IMPACTO EFICACIA Y EFICIENCIA"

**Cluster L2: Desigualdad, inclusión y grupos vulnerables** (Mesas 1, 2, 3, 4, 5, 6 — todas)
Presente en todas las mesas. No se trata de un tema periférico sino de la preocupación más transversal del taller.
- "Seguir atorados en una sociedad tan desigual." (T1, Mesa 3, individual)
- "Que participen aquellos que han sido históricamente excluidos de lo público. Personas con discapacidad; indígenas, afro mexicanos" (T1, Mesa 3, individual)
- "Las desigualdades étnicas, la explotación de estos grupos" (T1, Mesa 2, individual)
- "genera oportunidades equitativas para las diferentes realidades del estado (metropolitano, Sierra, Semidesierto)" (T1, Mesa 1, individual)
- Colectivo Mesa 2: "Comunicación asertiva; tejer puentes"
- Colectivo Mesa 4: "Alianzas cooperativas; reducir desigualdad"

**Cluster L3: Conectividad intersectorial** (Mesas 1, 2, 3, 4, 5, 6 — todas)
La aspiración de conectar gobierno, IP, academia, sociedad civil y ciudadanía aparece en todas las mesas, con niveles de sofisticación variable.
- "Triple hélice separada - Cuádruple hélice en conformación - Quíntuple hélice (ideal)" (T1, Mesa 1, individual)
- "Los Municipios y el estado deberían hablar entre ellos" (T1, Mesa 4, individual)
- "Academia, Sector público, Sector Privado, Comunidades (Que existen) una comunicación y coordinación y colaboración constante" (T1, Mesa 4, individual)
- Colectivo Mesa 1: "Agilizar procesos administrativos; transparencia gasto público"
- Colectivo Mesa 6: "Diagnosticar problemas públicos; democratizar oportunidades mercado (PyMes)"

**Cluster L4: Transparencia y anticorrupción** (Mesas 1, 2, 5)
- "Gasto público 100% auditable y cero impunidad." (T1, Mesa 1, individual)
- "Tener un sistema de justicia que eliminara la corrupción" (T1, Mesa 2, individual)
- Colectivo Mesa 1: "Transparencia en el gasto público y la asignación presupuestal"
- Colectivo Mesa 5: "FALTA DE ÉTICA EN LAS DECISIONES" (preocupación)

**Cluster L5: Continuidad transexenal** (Mesas 4, 5, 6)
- "Que es transexenal. Que se vaya continuando a lo trabajado." (T1, Mesa 4, individual)
- "Fuimos pioneros e impulsores de este proyecto independientemente del partido político en curso." (T1, Mesa 4, individual)
- "Fue / es útil la herramienta. Tanto, que sobrevive a ciclos de gobierno y se replica en otros estados" (T1, Mesa 6, individual)
- Colectivo Mesa 2: "Blindaje de programas → Continuidad"

**Cluster L6: Rezago y pérdida de competitividad (miedos)** (Mesas 2, 3, 4, 5, 6)
- "Que nos quedemos estancados cuando otros estados y países sigan avanzando. Nuestras futuras generaciones buscarán irse a otros lugares que impulsen esto." (T1, Mesa 4, individual)
- "Perderíamos competitividad" (T1, Mesa 2, individual)
- "EN GENERAL PIENSO QUE LO QUE NO AVANZA NO SOLO SE ESTANCA SINO QUE RETROCEDE." (T1, Mesa 6, individual)
- "Dejamos ir la oportunidad de ser competitivos y visionarios" (T1, Mesa 5, individual)

**Cluster L7: Ética, valores y humanismo** (Mesas 1, 5, 6)
- "Pérdida de saberes, culturas, prácticas, etc. pensar que las soluciones solo están en la inversión tecnológica, y este debe ser un puente más que una barrera" (T1, Mesa 1, individual)
- "Filósofos, teólogos e ingenieros para diseñar una brújula moral." (T1, Mesa 1, individual)
- "El manejo de los datos. El quiénes y para qué/con qué intención se usa la información recabada en el futuro preocupa. Garantizar el uso ético de la info/data es vital para la aceptación de los ciudadanos. Son nuevos pactos sociales" (T1, Mesa 6, individual)

**Fase colectiva T1 — Acuerdos por mesa:**

| Mesa | Más próspero | Donde nos encontremos | Cuida lo que tiene | Nos recordarán por |
|------|-------------|----------------------|-------------------|-------------------|
| 1 | Agilizar procesos administrativos; transparencia gasto público | Participación ciudadana; centros investigación + IP; nuevas generaciones | Seguridad: contexto real día a día colonias; tendencias turismo | Trazabilidad políticas públicas; certeza jurídica; vigilancia sociedad-gobierno |
| 2 | Acelerar desarrollo; reducir desigualdad; ahorro recursos; educación | Comunicación asertiva; tejer puentes | Delincuencia; corrupción; salud; fuga de talentos | Blindaje programas; continuidad; círculo virtuoso |
| 3 | Crecimiento sostenido; empleos; economía local; políticas públicas eficientes | Detección sectores y necesidades reales; indicadores desarrollo | Planeación urbana sostenible; prevenir sistemas seguridad | Diagnósticos correctos; reducción desigualdades; desarrollo sostenible |
| 4 | Anticiparnos; detectar problemáticas a tiempo | Alianzas cooperativas; reducir desigualdad | Densidad poblacional; desarrollo servicios; prevenir riesgos | Primer sistema acceso información todos niveles |
| 5 | Estrategia; planeación; eficacia; enfoque 100% población | Estado de derecho; objetivos comunes; economía local; vinculación generaciones | Perdemos oportunidades; eficiencia; representatividad; ética | Pioneros; impacto positivo; trabajar en conjunto; estado donde vale la pena vivir |
| 6 | Diagnosticar problemas públicos; democratizar oportunidades mercado (PyMes) | Agilizar canales comunicación; visibilizar necesidades sociales no atendidas | Prevención/detección recursos; fallas procesos sociales/mercado/industriales | Empleo jóvenes; información fidedigna; referente tecnológico innovación ciudadana |

Fuente: `primer-taller/legado/colectivo/mesa-{1-6}/transcripciones.md`

---

#### 2.1.2 Taller 2 — Legado

**Participaciones individuales por mesa:**

| Mesa | Participaciones |
|------|----------------|
| Mesa 1 | 22 |
| Mesa 2 | 28 |
| Mesa 3 | 20 |
| Mesa 4 | 24 |
| Mesa 5 | 24 |
| Mesa 6 | 23 |
| **Total** | **141** |

Fuente: Transcripciones individuales por mesa (`segundo-taller/legado/individual/mesa-{1-6}/transcripciones.md`)

**Clusters temáticos identificados en T2 Legado (individual + colectivo):**

T2 hereda todos los clusters de T1 pero introduce matices y temas nuevos:

**Cluster L1 (datos/decisiones) — se mantiene fuerte:**
- "Tener información se traduce en poder. Poder tomar las mejores decisiones." (T2, Mesa 2, individual)
- "Hoy no vemos eso porque las bases de datos no se hablan o los sistemas tienen una baja interconexión." (T2, Mesa 2, individual)
- "podremos saber de qué tamaño es el sapo, para saber de qué tamaño es la pedrada..." (T2, Mesa 3, individual)
- Colectivo Mesa 5: "Anticipar la toma de decisiones con base a pronósticos/estadística"
- Colectivo Mesa 6: "Contar con información en tiempo real. Reducir riesgos contando con información fidedigna"

**Cluster L2 (desigualdad/inclusión) — se intensifica:**
- "INCLUIR MEJOR A TODA LA POBLACIÓN AL VIVIR AQUÍ. REDUCIR LA POBREZA Y LA DESIGUALDAD." (T2, Mesa 4, individual)
- "Igualdad de oportunidades para los pueblos Indígena del Estado de Querétaro" (T2, Mesa 1, individual)
- "La ciudadanía común que no tiene hoy acceso a medios u oportunidades para expresar su pensar y su sentir. Poblaciones marginadas por diversos factores" (T2, Mesa 2, individual)
- "Convivencia y entendimiento entre ricos y pobres. Reconexión del tejido social en las comunidades." (T2, Mesa 5, individual)
- "EVIDENCIAR QUE SON MÁS LAS SIMILITUDES QUE LAS DIFERENCIAS ENTRE TODOS LOS SECTORES" (T2, Mesa 4, individual)

**Cluster L3 (conectividad intersectorial) — se sofistica:**
- "Se hablarían todos los sectores: Industrial y agrario, Urbano y rural, Comercio y consumidores" (T2, Mesa 1, individual)
- "LA CUÁDRUPLE HÉLICE GENUINAMENTE CONECTADA, CON VISIÓN COMPARTIDA" (T2, Mesa 4, individual)
- Colectivo Mesa 6: "Permitir que todos los sectores hablen y entiendan el mismo idioma."
- Colectivo Mesa 1: "Mejorar la conexión entre el ciudadano y el gobierno reduciendo el tiempo de los procesos compartiendo el conocimiento de cada sector."

**Cluster L6 (rezago/competitividad) — se mantiene fuerte:**
- "Seguiremos dejando ir oportunidades de mucho valor, dejaremos de crecer a un nivel más dinámico y estaremos perdiendo tiempo que es el recurso más valioso." (T2, Mesa 2, individual)
- "El rezago tecnológico con otros lugares. Información 'desperdiciada' no articulada. No hay generación de 'IA Colectiva'!" (T2, Mesa 6, individual)
- "La poca seguridad que nos queda. Las oportunidades de desarrollo, no queremos ser el nuevo 'Celaya'" (T2, Mesa 5, individual)

**Temas NUEVOS en T2 (no presentes en T1):**

**Agua y recursos naturales como preocupación central** (Mesas 1, 3, 5, 6):
- "El agua." (T2, Mesa 6, individual — respuesta completa a "lo que más me preocupa")
- "Utilizar de mejor manera el agua, a través de sistemas eficientes de reutilización... Sistemas o algo de captación de agua de lluvia." (T2, Mesa 6, individual)
- "los recursos naturales - los valores - Poder vivir juntos. La extinción de la vida humana" (T2, Mesa 3, individual)

**Salud mental y deshumanización** (Mesas 3, 4):
- "Me preocupa que al resolver todo en 10 años va a haber una falta de sentido humano; entonces tenemos que encontrar una manera de estar listos para cuando la salud mental se deteriore." (T2, Mesa 4, individual)
- "Cuidar SIEMPRE la parte humana. Educar la inteligencia emocional por encima de la artificial." (T2, Mesa 3, individual)
- "La falta de valores y la deshumanización de las generaciones" (T2, Mesa 3, individual)

**Referencia explícita al SIC-Q como legado:**
- "Que el SIC-Q genere una sociedad civil consciente, pensante y exigente que influya en la inercia del sistema para que no muera." (T2, Mesa 5, colectivo)
- "Sentar las bases para la construcción de un Sistema Inteligente, incluyente. Haber 'picado piedra' y lograr coordinar todos los sectores para reunir la información. Dictar las directrices para ordenar este 'cerebro'." (T2, Mesa 6, individual)

**Fase colectiva T2 — Acuerdos por mesa:**

| Mesa | Más próspero | Donde nos encontremos | Cuida lo que tiene | Nos recordarán por |
|------|-------------|----------------------|-------------------|-------------------|
| 1 | Mejorar conexión ciudadano-gobierno; compartir conocimiento sectorial | Agilizar integración sectores; compartir experiencias; resolver necesidades ciudadano | Seguridad; medio ambiente; salud; paz y justicia | Sistema robusto de información dinámico, duradero, confiable y transparente |
| 2 | Voz y escucha ciudadanía; disminuir brecha urbano-conurbano; eficientar recursos | Reducir tiempos atención; anticipar riesgos ambientales; atención personalizada en tiempo real | Dependencia tecnológica; desabastos medicamento; inseguridad; movilidad | Mejorar calidad de vida; bases futuro sostenible; planes a largo plazo |
| 3 | Diagnóstico; acciones preventivas; grupos vulnerables; seguridad-salud-educación | Mayor empatía; combatir desigualdad; mejor comunicación ciudadanos-gobierno | Recursos naturales; deshumanización; crecimiento demográfico; movilidad; valores; educación | Amor al país; coordinación sistémica; anticipar para prevenir; instituciones sólidas; continuidad |
| 4 | Sistemas prevención salud; externalidades políticas públicas; disminuir brechas | Mejora tejido social; disminución desigualdad; entender necesidades gente | Detectar puntos vulnerables seguridad; prevenir escasez recursos; distribución equitativa | Atender necesidades población; verdadera comunidad en armonía con justicia y equidad |
| 5 | Anticipar decisiones con base en pronósticos/estadística | Mayor representación grupos poblacionales; enriquecer datos | Riesgos; seguridad; transparencia; grupos vulnerables; educación; recursos naturales; movilidad; salud | Sociedad civil consciente, pensante y exigente que influya en inercia del sistema |
| 6 | Vincular sector público-privado-ciudadanía; información tiempo real; transparencia | Conocer necesidades básicas; escucha activa; todos sectores hablen mismo idioma | Prevenir pérdida tiempo; escasez recursos naturales; crecimiento desordenado | Políticas públicas humanizadas; política largo plazo; coordinación todos sectores |

Fuente: `segundo-taller/legado/colectivo/mesa-{1-6}/transcripciones.md`

---

#### 2.1.3 Tabla comparativa T1 vs T2 — Legado

**Clusters que aparecen en AMBOS talleres:**

| Cluster | Presencia T1 | Presencia T2 | Observación |
|---------|-------------|-------------|-------------|
| Toma de decisiones basada en datos | 5/6 mesas | 6/6 mesas | Se universaliza en T2 |
| Desigualdad / inclusión / grupos vulnerables | 6/6 mesas | 6/6 mesas | Universal en ambos. T2 más concreto |
| Conectividad intersectorial | 6/6 mesas | 6/6 mesas | T2 evoluciona de "triple hélice" a "cuádruple hélice genuinamente conectada" |
| Transparencia / anticorrupción | 3/6 mesas | 4/6 mesas | Crece ligeramente |
| Continuidad transexenal | 3/6 mesas | 3/6 mesas | Se mantiene estable |
| Rezago / competitividad (miedos) | 5/6 mesas | 5/6 mesas | T2 introduce "Celaya" como referente negativo |
| Ética / valores / humanismo | 3/6 mesas | 3/6 mesas | T2 añade salud mental y deshumanización |

**Temas que aparecen SOLO en T2 o se INTENSIFICAN significativamente:**

| Tema | T1 | T2 | Significado |
|------|----|----|-------------|
| Agua / recursos naturales | Mención tangencial (M3, M5) | Preocupación central (M1, M3, M5, M6) | Se amplifica notablemente |
| Salud mental / deshumanización | Ausente | Mesas 3, 4 | Tema nuevo — tensión entre IA y humanismo |
| Referencia directa al SIC-Q | Tangencial | Explícita (M5, M6) | T2 ya nombra al SIC-Q como legado aspiracional |
| Salud pública | Mesas 2, 6 | Mesas 2, 4, 5, 6 | Se duplica |

**Diferencia clave individual vs. colectivo:** Las respuestas individuales son específicas, emocionales y diversas ("Mi peor pesadilla es que haya ya sido afortunada de ver el mejor momento de Querétaro... porque significaría que de aquí viene el declive" — T2, Mesa 5). Las respuestas colectivas condensan y filtran hacia lenguaje institucional y de política pública. Temas como "brújula moral", comparaciones con "Celaya", y afirmaciones pesimistas/nihilistas aparecen en lo individual pero se filtran en lo colectivo.

---

### 2.2 Dimensión: Comunidad

**Qué se preguntó:** ¿Quiénes deberían participar en el SIC-Q? Cada participante escribió actores en post-its individuales. Se agruparon colectivamente en clusters y se marcaron con rojo los actores que "no existen pero deberían."

---

#### 2.2.1 Taller 1 — Comunidad

**Actores identificados por mesa:**

| Mesa | Actores | Observación |
|------|---------|-------------|
| Mesa 1 | 20 | Mix equilibrado gobierno-academia-IP-población |
| Mesa 2 | 29 | Fuerte presencia de sectores de servicios (AGUA, SALUD, EDUCACIÓN, TRANSPORTE, SEGURIDAD, ENERGÍA) |
| Mesa 3 | 39 | Mesa más rica. Mezcla actores con aspiraciones/acciones (ej. "Primer estado sin brecha salarial de género") |
| Mesa 4 | 21 | Fuerte sub-cluster de discapacidad (3 entradas sobre PcD) |
| Mesa 5 | 35 | Alta granularidad en sector financiero (Fintech, inversionistas, sistemas financieros) |
| Mesa 6 | 33 | Mayor presencia de secretarías de gobierno específicas |
| **Total** | **177** | |

Fuente: `primer-taller/comunidad/mesa-{1-6}/transcripciones.md`

**Tipología de actores T1:**

| Categoría | Mesas donde aparece | Ejemplos representativos |
|-----------|-------------------|------------------------|
| Gobierno / Secretarías | 6/6 | Poder ejecutivo, secretarías sectoriales, municipios, fiscalía |
| Población / Grupos vulnerables | 6/6 | Personas con discapacidad, jóvenes, adultos mayores, pueblos indígenas, mujeres, infancias, afrodescendientes |
| IP / Sector privado / Cámaras | 5/6 | Cámaras empresariales, emprendedores, empresarios, industria |
| Academia / Investigación | 5/6 | Universidades, centros investigación, investigadores |
| OSC / Sociedad civil | 3/6 | ONG's, asociaciones civiles, sociedad civil organizada |
| Salud | 3/6 | Sector Salud, acceso al sistema de salud |
| Sindicatos / Trabajo | 1/6 | Sindicatos |

**Nota metodológica:** Las mesas 3 y 5 de T1 mezclaron actores con necesidades/aspiraciones en las mismas tarjetas (ej. "Calcular rutas accesibles", "mayor innovación"). Esto refleja que los participantes no siempre distinguían entre "quién debería participar" y "qué debería lograrse."

---

#### 2.2.2 Taller 2 — Comunidad

**Actores identificados por mesa:**

| Mesa | Actores | Observación |
|------|---------|-------------|
| Mesa 1 | 32 | Mapeo exhaustivo de secretarías de gobierno + servicios de emergencia (bomberos, Cruz Roja, Protec. Civil) |
| Mesa 2 | 49 | **Mesa más rica de ambos talleres.** Únicos en listar extensivamente organismos internacionales (ONU, UNESCO, OMS, FMI, BID) y toda la cadena educativa (CONAFE/preescolar hasta ANUIES) |
| Mesa 3 | 43 | Fuerte presencia del sector justicia (Tribunal, Defensoría DDHH, Fiscalía, barras de abogados) |
| Mesa 4 | 43 | Sub-cluster de salud único: Doctores, Nutrólogos, Psicólogos, Comité Ético. Entradas compuestas (42 y 43) empaquetan 15+ secretarías en 2 notas |
| Mesa 5 | 34 | Actores únicos: líderes religiosos, líderes morales, queretanos fuera de Querétaro |
| Mesa 6 | 47 | Actores únicos: ejidos, influencers, protectores de animales, artistas, personas violentadas, LGTB+, partidos políticos |
| **Total** | **248** | |

Fuente: `segundo-taller/comunidad/mesa-{1-6}/transcripciones.md`. Total de 248 actores y 136 conexiones reportadas en el prompt del agente T2 (`agente/prompt-contexto.md`).

**Tipología de actores T2:**

| Categoría | Mesas donde aparece | Diferencia vs T1 |
|-----------|-------------------|-----------------|
| Gobierno / Secretarías | 6/6 | T2 nombra secretarías específicas (SEDESU, SEJUVE, SDUOP, etc.) donde T1 usaba categorías genéricas |
| Población / Grupos vulnerables | 6/6 | T2 añade: personas violentadas, LGTB+, migrantes, ejidos |
| IP / Sector privado / Cámaras | 6/6 | T2 nombra cámaras específicas (Canaco, Coparmex, Canirac, Canacintra) |
| Academia / Investigación | 6/6 | T2 nombra instituciones específicas (UAQ, UTEQ, ITEQ) y la cadena educativa completa |
| OSC / Sociedad civil | 6/6 | Más presente que en T1 (solo 3/6 mesas) |
| Organismos internacionales | 4/6 | **Nuevo en T2:** ONU, UNESCO, OMS, FMI, BID, embajadas, agregadurías comerciales |
| Religión / Iglesia | 4/6 | **Nuevo en T2:** iglesias, líderes religiosos, asociaciones religiosas |
| Sindicatos / Trabajo | 3/6 | Se triplica vs T1 |

**Actores hub — más mencionados entre ambos talleres:**

| Actor / tipo de actor | Mesas donde aparece (de 12 posibles) |
|----------------------|--------------------------------------|
| Universidades / Academia | 10 |
| Cámaras empresariales | 9 |
| Personas con Discapacidad | 8 |
| Sector Salud | 8 |
| Investigadores / Centros de Investigación | 8 |
| Jóvenes / Juventud | 7 |
| Adultos Mayores / 3ra edad | 6 |
| Pueblos Indígenas / Comunidades Originarias | 6 |
| Municipios / Gobiernos Municipales | 6 |
| Seguridad | 6 |
| Mujeres / Madres | 5 |
| OSC / ONG's | 5 |
| Ciudadanos / Ciudadanía | 4 |
| Fiscalía | 4 |

**Nota sobre marcaje de ausencias:** Los archivos de transcripción no codifican el color de las tarjetas (rojo = "ausente pero necesario"). Esta información existe en las fotografías de los rotafolios pero no fue digitalizada en los archivos de texto.

**Nota sobre conexiones:** Los archivos de transcripción contienen listas planas de actores, sin datos de relación/conexión entre ellos. Los 136 conexiones reportados para T2 fueron generados por el sistema de IA durante el procesamiento de clustering, no escritos directamente por los participantes.

---

#### 2.2.3 Tabla comparativa T1 vs T2 — Comunidad

| Aspecto | Taller 1 | Taller 2 |
|---------|----------|----------|
| Total actores | 177 | 248 (+40%) |
| Granularidad | Categorías genéricas ("Universidades") | Instituciones específicas ("UAQ", "UTEQ", "Canaco", "Coparmex") |
| Organismos internacionales | Ausentes | Presentes en 4/6 mesas (ONU, UNESCO, OMS, FMI, BID) |
| Religión/Iglesia | Ausente | 4/6 mesas |
| Sector justicia | 2/6 mesas | 4/6 mesas (más detallado: Tribunal, Defensoría, Fiscalía, barras de abogados) |
| Cadena educativa completa | No | Sí (CONAFE/preescolar hasta ANUIES, pasando por CBTIS, CONALEP, CECyTEQ) |
| Actores únicos de T2 | — | Ejidos, influencers, protectores de animales, artistas, LGTB+, personas violentadas, partidos políticos, queretanos fuera de Querétaro |
| Mesa más rica | Mesa 3 (39) | Mesa 2 (49) |
| Confusión actor/aspiración | Alta (M3, M5) | Baja — más disciplinados en nombrar actores |

**Dato clave:** T2 fue significativamente más granular que T1. Los participantes de T2 nombraron instituciones específicas donde T1 tendía a categorías genéricas. Esto puede reflejar composición del grupo (más servidores públicos en T2, según listas de asistencia) o un efecto de aprendizaje del diseño del taller.

---

### 2.3 Dimensión: Contexto

**Qué se preguntó:** ¿Qué condiciones externas nos afectan? Se dividió en 3 sub-preguntas trabajadas simultáneamente por subgrupos: "Lo que hemos aprendido en el camino" (lecciones), "Lo que nos favorece" (fortalezas), "Retos que enfrentamos" (desafíos).

---

#### 2.3.1 Taller 1 — Contexto

Fuente: `primer-taller/contexto/mesa-{1-6}/transcripciones.md` (6 archivos, 3 participaciones cada uno)

**Lo que hemos aprendido en el camino (lecciones):**

| Mesa | Qué aprendimos | Qué funcionó | Qué no repetir |
|------|---------------|-------------|----------------|
| 1 | Escuchar a la gente es importante; acercarse proactivamente | — | Imponer decisiones unilateralmente; permitir que la vox populi se explote políticamente |
| 2 | Crecimiento vs. Servicios (Agua, Luz, Transporte) | — | — |
| 3 | Escuchar a sectores de la ciudadanía; confianza ciudadana-gobierno | Atracción de inversión; mejoras transporte; seguridad lograda pese al resto del país; participación | Legislaciones publicadas pero NO aplicadas; crecimiento que sobrepasó la planeación; desigualdad marcada; ocultar datos de seguridad |
| 4 | Involucramiento equitativo para proyecto de alcance estatal (ej. aeronáutico) | Respetar proyectos a lo largo de gobiernos | No politizar |
| 5 | Mayor participación en planeación; juntos somos más fuertes | Visión de largo plazo; continuidad en estrategias | Malas prácticas de los 70's |
| 6 | Crecimiento desordenado; apuesta al desarrollo tecnológico | — | — |

**Lo que nos favorece (fortalezas):**

| Fortaleza | Mesas que la mencionan |
|-----------|----------------------|
| Seguridad | M1, M2, M4, M6 (4/6) |
| Ubicación geográfica | M2, M4, M6 (3/6) |
| Atractivo para inversión / crecimiento económico | M2, M3, M4, M6 (4/6) |
| Acceso a casos de éxito internacionales | M1 |
| Colaboración público-privada / Triple hélice | M3, M5 |
| Empresarios sólidos y comprometidos | M4 |
| Diálogo entre cámaras y clusters | M5 |
| Amor a Querétaro | M5 |
| No desastres naturales | M6 |
| Mayor acceso a empleos | M6 |

**Retos que enfrentamos:**

| Reto | Mesas que lo mencionan | Cita representativa |
|------|----------------------|---------------------|
| Participación ciudadana efectiva | M1, M3, M5 | "hacer efectiva con políticas públicas la participación ciudadana" (M3) |
| Educación y capacitación tecnológica | M1, M4 | "Apatía y piso de partida muy disparejo en el entendimiento de la tecnología y posibilidades." (M1) |
| No politizar | M4 | "No politizar" / "Evitar ideologías" (M4) |
| Brecha tecnológica | M5 | "Brecha tecnológica en todo el estado." (M5) |
| Protección legal de datos y herramientas | M3 | "Legislación estricta que en rango constitucional local para proteger la herramienta, datos y transparencia" (M3) |
| Comunicación gobierno-ciudadanía | M6 | "Mejorar comunicación gobierno-ciudadanía" (M6) |
| Salud mental | M6 | "Inversión en salud mental" (M6) |
| Servicios para infancias y juventudes | M6 | "Educación, salud, infraestructura, deporte para servicios dirigidos a infancias y juventudes" (M6) |
| Orden / Conectividad / Continuidad | M2 | "ORDEN. PARTICIPACIÓN / MEJORA. CONECTIVIDAD. Continuidad Ciudadana" (M2) |

---

#### 2.3.2 Taller 2 — Contexto

Fuente: `segundo-taller/contexto/mesa-{1-6}/transcripciones.md` (6 archivos, 3 participaciones cada uno)

**Lo que hemos aprendido en el camino (lecciones):**

| Mesa | Qué aprendimos / funcionó | Qué no repetir |
|------|--------------------------|----------------|
| 1 | Innovar; mayor participación queretanos; reforzar valores familiares combate inseguridad y corrupción | Falta de comunicación por sistema deficiente |
| 2 | Sinergia sector productivo-educativo; apertura participación; confianza para invertir; crecimiento tecnológico; legalidad | Falta de transparencia en situaciones críticas |
| 3 | Construir comunidad; guiarnos por ideales | Excluir a ciertos sectores de la población (vulnerables) |
| 4 | Planear crecimiento y desarrollo; políticas públicas de desarrollo; sismo del 85 dio vuelta positiva al estado | Subvalorar el uso de datos; subvalorar la coordinación gobierno-ciudadanía |
| 5 | Querétaro es y ha sido innovador; la población participa y exige; las políticas públicas sí funcionan; funciona la inclusión social | Encasillarnos; no considerar diferentes puntos de vista |
| 6 | Tener valor — influir en el país; ser referente nacional; ser pioneros en sector aeronáutico | Anteponer temas políticos ante necesidades de las personas |

**Lo que nos favorece (fortalezas):**

| Fortaleza | Mesas que la mencionan |
|-----------|----------------------|
| Seguridad | M1, M2, M3, M4, M6 (5/6) |
| Ubicación geográfica | M4, M5, M6 (3/6) |
| Continuidad de gobierno / instituciones | M2, M3, M4, M6 (4/6) |
| Crecimiento económico / empleo | M1, M2, M4, M6 (4/6) |
| Educación de calidad / instituciones educativas | M1, M2, M4, M6 (4/6) |
| Sociedad civil organizada / comunidades que trabajan por bien común | M2, M3 |
| Innovación tecnológica | M6 |
| Triple hélice | M6 |
| Certeza jurídica | M3 |
| Vocación en empleos de alto valor agregado | M5 |
| Somos "aspiracionistas" / inconformistas | M5 |
| Recursos naturales existentes | M6 |
| Industria fortalecida | M6 |
| Riqueza cultural | M1 |

**Retos que enfrentamos:**

| Reto | Mesas que lo mencionan | Cita representativa |
|------|----------------------|---------------------|
| Comunicación intersectorial/interregional | M1, M4 | "Comunicación intersectorial. Comunicación interregional. Falta de acceso a la información." (M1) |
| Cambios de gobierno / resistencia al cambio | M1 | "Cambios de Gobierno. Resistencia al cambio." (M1) |
| Priorizar bien común | M2 | "Priorizar el bien común por encima del bien individual" (M2) |
| Continuidad a largo plazo | M2, M3 | "Garantizar su continuidad" (M2) / "Continuidad en programas exitosos" (M3) |
| Crecimiento poblacional / migración | M3, M6 | "Crecimiento y migración de la población a nuestro estado" (M3) |
| Gobierno federal asistencialista | M3 | "Gobierno Federal asistencialista" (M3) |
| Deshumanización y falta de valores | M3 | "Deshumanización y falta de valores universales" (M3) |
| Enfoque multidisciplinario | M4 | "Tener un enfoque multidisciplinario" (M4) |
| Internet en la Sierra y comunidades alejadas | M4 | "Mejorar la red de internet — + Zona de la sierra — + Comunidades alejadas" (M4) |
| Recurso hídrico y energía | M4 | "Recurso hídrico y energía" (M4) |
| Movilidad | M4 | "Movilidad" (M4) |
| Resolver problemas reales / accesible a toda la población | M5 | "PARA QUE ESTO FUNCIONE DEBE DE RESOLVER PROBLEMAS REALES. Tiene que ser accesible a TODA la población. Tiene que volverse indispensable, y que la ciudadanía lo exija." (M5) |
| Informar a todos los sectores | M6 | "Informar a todos los sectores de la población para que participen y no se sientan ajenos." (M6) |
| Eficientar y transparentar uso de recursos | M6 | (M6) |

---

#### 2.3.3 Tabla comparativa T1 vs T2 — Contexto

**Temas transversales que aparecen en ambos talleres (patrón inter-mesa):**

| Tema | Mesas T1 | Mesas T2 | Total (de 12) |
|------|----------|----------|---------------|
| Seguridad (como fortaleza y como reto a mantener) | M1, M2, M3, M4, M6 | M1, M2, M3, M4, M6 | 10/12 |
| Participación ciudadana (deseo vs. dificultad) | M1, M3, M5, M6 | M1, M2, M4, M5, M6 | 9/12 |
| Ubicación geográfica (fortaleza) | M2, M4, M6 | M4, M5, M6 | 6/12 |
| Crecimiento desordenado vs. planeación | M2, M3, M6 | M3, M4, M6 | 6/12 |
| Continuidad transexenal | M4, M5 | M2, M3, M4, M6 | 6/12 |
| Transparencia / datos / rendición de cuentas | M1, M3 | M2, M4, M6 | 5/12 |
| No politizar | M1, M4 | M2, M6 | 4/12 |
| Brecha tecnológica / conectividad | M1, M5 | M4, M5 | 4/12 |
| Triple hélice / colaboración público-privada | M3, M5 | M2, M6 | 4/12 |
| Inversión y crecimiento económico | M2, M3, M4, M6 | M1, M2, M4, M6 | 8/12 |
| Educación | M4 | M1, M2, M4, M6 | 5/12 |
| Comunicación gobierno-ciudadanía | M1, M6 | M1, M4 | 4/12 |

**Diferencias T1 vs T2 en Contexto:**

| Aspecto | T1 | T2 |
|---------|----|----|
| Tono general de "fortalezas" | Más conciso y genérico ("Ubicación. Seguridad. Inversión.") | Más descriptivo y orgulloso ("Somos aspiracionistas", "Querétaro es y ha sido innovador") |
| Nivel de detalle en "retos" | Abstracto ("Orden", "Conectividad") | Concreto ("Mejorar la red de internet — Zona de la sierra", "Recurso hídrico y energía") |
| Mención de agua/recursos naturales como reto | Tangencial (M2: "Crecimiento vs. Servicios — Agua") | Explícita (M4: "Recurso hídrico y energía") |
| Referencia a gobierno federal | Ausente | Presente (M3: "Gobierno Federal asistencialista") |
| Referencia directa al SIC-Q | Ausente | Presente (M5: "Para que esto funcione debe de resolver problemas reales") |
| Deshumanización / valores | Ausente | Presente (M3: "Deshumanización y falta de valores universales") |

---

### 2.4 Insights transversales

Los insights transversales fueron generados automáticamente por el sistema de IA al procesar las participaciones de cada taller. Se presentan aquí sin edición, tal como fueron producidos.

#### Taller 1 — 7 insights

| # | Tipo | Dimensión | Mesas | Contenido |
|---|------|-----------|-------|-----------|
| 1 | Emerging theme | Legado | 1, 2, 5, 6 | Emergen preocupaciones sobre el uso ético de los datos recabados y la necesidad de establecer regulaciones claras para proteger la privacidad y los derechos ciudadanos en un contexto de creciente digitalización. |
| 2 | Tension | Contexto | 1, 3, 4, 5, 6 | Se identifican tensiones entre la necesidad de una mayor participación ciudadana y la burocracia existente, lo que limita la efectividad en la interacción entre gobierno y ciudadanía. |
| 3 | Consensus | Comunidad | 1, 2, 3, 4, 5, 6 | Hay un consenso en la necesidad de mejorar la colaboración entre los diferentes sectores (público, privado y sociedad civil) para abordar problemáticas comunes y generar desarrollo sostenible. |
| 4 | Cross table pattern | — | 1, 2, 3, 4, 5, 6 | Se observan menciones repetidas a la importancia de la inclusión de personas con discapacidad y otros grupos vulnerables en todas las mesas, resaltando la necesidad de crear políticas y espacios que aseguren su participación y bienestar. |
| 5 | Dimension summary | Legado | 1, 2, 3, 4, 5, 6 | Se enfatiza la necesidad de continuidad en políticas públicas y un sistema de gobernanza que permita a la ciudadanía participar activamente, garantizando la transparencia y rendición de cuentas como pilares fundamentales. |
| 6 | Dimension summary | Contexto | 1, 2, 3, 4, 5, 6 | Las voces resaltan la necesidad de una mayor transparencia, participación ciudadana activa y una administración pública eficiente que priorice las demandas de la población emergente en áreas como educación, salud y seguridad. |
| 7 | Dimension summary | Comunidad | 1, 2, 3, 4, 5, 6 | Se destaca la importancia de la inclusión y participación de diversos sectores de la sociedad en la toma de decisiones, con un énfasis particular en la atención a grupos vulnerables como personas con discapacidad y comunidades originarias. |

Fuente: `primer-taller/insights.md`

#### Taller 2 — 5 insights

| # | Tipo | Dimensión | Mesas | Contenido |
|---|------|-----------|-------|-----------|
| 1 | Emerging theme | Comunidad | 4, 5, 6 | La importancia de involucrar a grupos vulnerables y fomentar su voz en la toma de decisiones aparece como un tema emergente que no había sido destacado previamente. |
| 2 | Tension | Legado | 4, 5, 6 | Existen divergencias sobre cómo abordar la desigualdad social, entre quienes abogan por soluciones inmediatas y aquellos que sugieren enfoques a largo plazo. |
| 3 | Consensus | Legado | 1, 2, 3 | Hay un acuerdo general sobre la necesidad de construir un sistema de información robusto que permita a la ciudadanía participar activamente en la toma de decisiones y mejorar su calidad de vida. |
| 4 | Cross table pattern | Contexto | 1, 2, 3, 4, 5 | Varias mesas mencionan la necesidad de un enfoque multidisciplinario y una mejor planificación urbana para mejorar la calidad de vida en Querétaro. |
| 5 | Consensus | Comunidad | 1, 2, 3, 4, 5, 6 | Las mesas coinciden en la importancia de fortalecer la comunicación y la colaboración entre sectores para abordar problemáticas sociales. |

Fuente: `segundo-taller/insights.md`

**Observación sobre los insights:** Los insights son generados por IA y reflejan patrones detectados algorítmicamente. No sustituyen el análisis humano. En particular, T2 produjo menos insights (5 vs 7) pero con un insight de tipo "tension" (inmediatismo vs. largo plazo) que no apareció en T1.

---

## PARTE III — ANÁLISIS CRUZADO INTER-TALLER

> Primer nivel de análisis: ¿qué pasa cuando cruzamos T1 con T2? Los talleres tuvieron participantes diferentes pero la misma metodología. Los temas que aparecen en ambos son los más robustos porque emergen independientemente del grupo humano en la sala.

---

### 3.1 Convergencias

**Criterio:** Un tema es convergente cuando aparece en ambos talleres, en múltiples mesas, y preferentemente en más de una dimensión. A mayor convergencia, mayor profundidad estructural.

#### Convergencia 1: Desigualdad, inclusión y grupos vulnerables
- **Robustez:** 12/12 mesas en Legado (ambos talleres, todas las mesas). Presente también en Comunidad (Personas con Discapacidad aparece en 8/12 mesas como actor hub) y en Contexto (brecha urbano-rural mencionada en ambos).
- **Dimensiones:** Legado + Comunidad + Contexto (las 3 trabajadas)
- **Esto es el tema más profundo de los talleres.** No depende del grupo, no depende de la dimensión, no depende de la escala.
- **Cita T1:** "Que participen aquellos que han sido históricamente excluidos de lo público. Personas con discapacidad; indígenas, afro mexicanos" (T1, Mesa 3, Legado individual)
- **Cita T2:** "EVIDENCIAR QUE SON MÁS LAS SIMILITUDES QUE LAS DIFERENCIAS ENTRE TODOS LOS SECTORES" (T2, Mesa 4, Legado individual)
- **En Comunidad:** Personas con Discapacidad fue el grupo poblacional más mapeado (8/12 mesas). Pueblos Indígenas en 6/12. Jóvenes en 7/12. Adultos Mayores en 6/12.
- **En Contexto:** T1-M3: "Crecimiento con una desigualdad muy marcada." T2-M3: "Excluir a ciertos sectores de la población (vulnerables)" como lección de lo que NO repetir.

#### Convergencia 2: Conectividad intersectorial (gobierno-IP-academia-sociedad civil)
- **Robustez:** 12/12 mesas en Legado. Consenso en ambos insights de Comunidad (T1 insight 3, T2 insight 5). Presente en Contexto como "triple hélice" (T1-M5, T2-M6).
- **Dimensiones:** Legado + Comunidad + Contexto (las 3 trabajadas)
- **La aspiración de que "todos los sectores se hablen" es universal.** La diferencia está en el nivel de articulación: T1 habla de "triple hélice" como concepto; T2 ya habla de "cuádruple hélice genuinamente conectada" y de que "todos los sectores hablen y entiendan el mismo idioma."
- **Cita T1:** "Triple hélice separada - Cuádruple hélice en conformación - Quíntuple hélice (ideal)" (T1, Mesa 1, Legado individual)
- **Cita T2:** "Permitir que todos los sectores hablen y entiendan el mismo idioma." (T2, Mesa 6, Legado colectivo)

#### Convergencia 3: Toma de decisiones basada en datos
- **Robustez:** 11/12 mesas en Legado. Consenso en T2 insight 3 ("sistema de información robusto"). Presente en Contexto como "subvalorar el uso de datos" (T2-M4).
- **Dimensiones:** Legado + Contexto
- **Este es el cluster que más directamente valida la razón de ser del SIC-Q.** No fue inducido por las preguntas — emergió espontáneamente.
- **Cita T1:** "Datos duros que ayudarán a tomar mejores decisiones" (T1, Mesa 4, Legado individual)
- **Cita T2:** "Hoy no vemos eso porque las bases de datos no se hablan o los sistemas tienen una baja interconexión." (T2, Mesa 2, Legado individual)

#### Convergencia 4: Seguridad como activo frágil
- **Robustez:** 10/12 mesas en Contexto (fortaleza + reto a mantener). 8/12 mesas en Comunidad (Seguridad como actor/sector). Presente en Legado como preocupación.
- **Dimensiones:** Contexto + Comunidad + Legado
- **Querétaro percibe su seguridad como un activo diferenciador frente a otros estados, pero también como algo frágil que puede perderse.** No es complacencia — es alerta.
- **Cita T1:** "LA SEGURIDAD ES INDISPENSABLE — Tiene repercusiones positivas en todo lo demás pero es frágil y vulnerable." (T1, Mesa 1, Contexto)
- **Cita T2:** "no queremos ser el nuevo 'Celaya'" (T2, Mesa 5, Legado individual)

#### Convergencia 5: Continuidad transexenal
- **Robustez:** 6/12 mesas en Legado. 7/12 mesas en Contexto. Presente como reto explícito en T2.
- **Dimensiones:** Legado + Contexto
- **La aspiración de que las políticas públicas sobrevivan a los ciclos electorales es una constante.** El SIC-Q es visto como un mecanismo para lograrlo.
- **Cita T1:** "Fuimos pioneros e impulsores de este proyecto independientemente del partido político en curso." (T1, Mesa 4, Legado individual)
- **Cita T2:** "Política pública a largo plazo para evitar discontinuidad administrativa." (T2, Mesa 6, Legado colectivo)

#### Convergencia 6: Transparencia, datos y rendición de cuentas
- **Robustez:** 7/12 mesas en Legado. 5/12 mesas en Contexto. T1 insight 1 (uso ético de datos).
- **Dimensiones:** Legado + Contexto
- **Hay una doble demanda:** los participantes quieren un sistema de información robusto (Convergencia 3) PERO también quieren garantías de que esos datos se usen éticamente y que el gasto público sea auditable.
- **Cita T1:** "Garantizar el uso ético de la info/data es vital para la aceptación de los ciudadanos. Son nuevos pactos sociales" (T1, Mesa 6, Legado individual)
- **Cita T2:** "Transparentar la administración de recursos en aplicación de políticas públicas." (T2, Mesa 6, Legado colectivo)

#### Convergencia 7: Participación ciudadana (deseo vs. dificultad)
- **Robustez:** 9/12 mesas en Contexto. T1 insight 2 (tensión participación vs. burocracia). T2 insight 4 (planificación multidisciplinaria).
- **Dimensiones:** Contexto + Legado
- **La participación ciudadana aparece simultáneamente como aspiración Y como reto.** Todos la quieren; nadie sabe cómo hacerla efectiva a escala.
- **Cita T1:** "hacer efectiva con políticas públicas la participación ciudadana" (T1, Mesa 3, Contexto)
- **Cita T2:** "PARA QUE ESTO FUNCIONE DEBE DE RESOLVER PROBLEMAS REALES. Tiene que ser accesible a TODA la población. Tiene que volverse indispensable, y que la ciudadanía lo exija." (T2, Mesa 5, Contexto)

**Tabla resumen de convergencias:**

| # | Tema convergente | Mesas (de 12) | Dimensiones | Señal más fuerte |
|---|-----------------|---------------|-------------|-----------------|
| 1 | Desigualdad / inclusión | 12/12 | L + Co + Cx | La más profunda: universal en escala, dimensión y taller |
| 2 | Conectividad intersectorial | 12/12 | L + Co + Cx | De "triple hélice" a "mismo idioma" |
| 3 | Decisiones basadas en datos | 11/12 | L + Cx | Validación directa del SIC-Q |
| 4 | Seguridad como activo frágil | 10/12 | Cx + Co + L | "Frágil y vulnerable" — no complacencia |
| 5 | Continuidad transexenal | 7/12 | L + Cx | SIC-Q como mecanismo de blindaje |
| 6 | Transparencia / rendición de cuentas | 7/12 | L + Cx | Doble demanda: datos + ética |
| 7 | Participación ciudadana | 9/12 | Cx + L | Aspiración universal, ejecución difícil |

(L = Legado, Co = Comunidad, Cx = Contexto)

---

### 3.2 Divergencias

**Criterio:** Temas que aparecen en un taller pero NO en el otro, o que cambian significativamente de carácter. Las divergencias son analíticamente importantes porque sugieren qué voz falta cuando cierto grupo no está en la sala.

#### Divergencia 1: Gobierno Federal asistencialista
- **Presente en:** T2 (Mesa 3, Contexto)
- **Ausente en:** T1
- **Cita:** "Gobierno Federal asistencialista" (T2, Mesa 3, Contexto — como reto)
- **Significado:** Solo T2 nombra al gobierno federal como un factor de contexto negativo. Esto puede reflejar composición del grupo (más servidores públicos estatales en T2 que perciben la tensión estado-federación) o un tema que simplemente no surgió en T1.

#### Divergencia 2: Organismos internacionales como actores del SIC-Q
- **Presente en:** T2 (4/6 mesas en Comunidad: ONU, UNESCO, OMS, FMI, BID, embajadas)
- **Ausente en:** T1 (ninguna mesa los mencionó)
- **Significado:** T2 tiene una visión más cosmopolita del ecosistema de actores. La presencia del Director del CONCYTEQ (Enrique Rabell García) en T2-M2, que fue la mesa con 49 actores y la más internacionalizada, puede haber influido.

#### Divergencia 3: Religión e iglesia como actores
- **Presente en:** T2 (4/6 mesas en Comunidad)
- **Ausente en:** T1
- **Significado:** T2 incorpora líderes religiosos, iglesias y asociaciones religiosas como actores relevantes. T1 no los mencionó. Esto amplía la definición de "comunidad" más allá de lo institucional/secular.

#### Divergencia 4: Referencia a "Celaya" como anti-modelo
- **Presente en:** T2 (Mesa 5, Legado individual)
- **Ausente en:** T1
- **Cita:** "no queremos ser el nuevo 'Celaya'" (T2, Mesa 5)
- **Significado:** T2 nombra un referente negativo concreto (Celaya = inseguridad, deterioro). T1 habla de miedos genéricos ("estancamiento", "rezago"). La diferencia sugiere mayor urgencia o mayor disposición a nombrar riesgos reales.

#### Divergencia 5: Ejidos, influencers, LGTB+, personas violentadas
- **Presente en:** T2 (Mesa 6, Comunidad)
- **Ausente en:** T1
- **Significado:** T2-M6 introdujo actores que ninguna otra mesa de ningún taller mencionó. Estos actores representan una capa de la sociedad queretana que el marco convencional (gobierno-IP-academia-OSC) no captura. Su aparición en una sola mesa los hace señales débiles pero estructuralmente significativas: alguien en esa mesa tenía una perspectiva que el resto del ejercicio no contempló.

#### Divergencia 6: "Brújula moral" — filósofos y teólogos
- **Presente en:** T1 (Mesa 1, Legado individual)
- **Ausente en:** T2
- **Cita:** "Filósofos, teólogos e ingenieros para diseñar una brújula moral." (T1, Mesa 1)
- **Significado:** T1 tiene una voz humanista/filosófica que no aparece en T2. T2 aborda la preocupación ética desde el ángulo de "deshumanización" y "salud mental", pero no desde la filosofía moral. Son dos formas de nombrar la misma preocupación con vocabularios distintos.

---

### 3.3 Intensificaciones

**Criterio:** Temas que aparecen en T1 pero se AMPLIFICAN en T2 (o viceversa). Esto revela qué temas ganaron fuerza de un día al otro.

| Tema | T1 (presencia) | T2 (presencia) | Dirección | Evidencia |
|------|---------------|----------------|-----------|-----------|
| Agua / recursos naturales | Tangencial (2 mesas en Legado; M2 Contexto: "Crecimiento vs. Servicios — Agua") | Central (4 mesas en Legado; M4 Contexto: "Recurso hídrico y energía") | **Se amplifica T1→T2** | En T2, "El agua." es la respuesta COMPLETA de un participante a "lo que más me preocupa" (M6). En T1 era parte de una lista. |
| Salud pública | 2/6 mesas en Legado T1 | 4/6 mesas en Legado T2 + sub-cluster de salud en Comunidad T2-M4 (Doctores, Nutrólogos, Psicólogos, Comité Ético) | **Se duplica T1→T2** | T2 añade nivel de detalle: no solo "salud" sino profesionales específicos y sistemas de prevención |
| Granularidad de actores | 177 actores, categorías genéricas | 248 actores (+40%), instituciones específicas | **Se amplifica T1→T2** | T1: "Universidades" → T2: "UAQ", "UTEQ", "ITEQ", "BACHILLERES/CBTIS/CECyTEQ/CONALEP" |
| OSC / Sociedad civil en Comunidad | 3/6 mesas | 6/6 mesas | **Se universaliza T1→T2** | De presencia parcial a presencia total |
| Salud mental / deshumanización | Ausente | 2 mesas (Legado M3, M4) | **Tema nuevo en T2** | "Me preocupa que al resolver todo en 10 años va a haber una falta de sentido humano" (T2-M4) |
| Referencia directa al SIC-Q | Tangencial | Explícita (Legado M5 colectivo, M6 individual; Contexto M5) | **Se explicita T1→T2** | De hablar del sistema en abstracto a nombrarlo: "Que el SIC-Q genere una sociedad civil consciente, pensante y exigente" |
| Lenguaje de "hélices" | "Triple hélice" (genérico) | "Cuádruple hélice genuinamente conectada" (específico) | **Se sofistica T1→T2** | El vocabulario evoluciona de un día al otro |

**Temas que se DILUYEN de T1 a T2:**

| Tema | T1 | T2 | Observación |
|------|----|----|-------------|
| Anticorrupción explícita | "Gasto público 100% auditable y cero impunidad" (M1); "sistema de justicia que eliminara la corrupción" (M2) | Presente pero menos visceral; se transforma en "transparentar" y "rendición de cuentas" | El lenguaje pasa de denuncia a gestión |
| Fuga de talentos | Mencionada en T1-M2 colectivo ("fuga de talentos") | Ausente en T2 | Desaparece como tema |

---

### 3.4 Evolución de la red de actores

**Cambio cuantitativo:**

| Métrica | T1 | T2 | Cambio |
|---------|----|----|--------|
| Total de actores mapeados | 177 | 248 | +40% |
| Promedio por mesa | 29.5 | 41.3 | +40% |
| Mesa más rica | M3 (39) | M2 (49) | +26% |
| Mesa más pobre | M1 (20) | M1 (32) | +60% |

**Cambio cualitativo — nuevas categorías de actores en T2:**

| Categoría nueva | Mesas T2 | Significado |
|----------------|----------|-------------|
| Organismos internacionales | 4/6 | Visión global del ecosistema |
| Religión / Iglesia | 4/6 | Expansión de la definición de "comunidad" |
| Sector justicia detallado | 4/6 | De "Fiscalía" genérica a Tribunal + Defensoría DDHH + barras de abogados |
| Cadena educativa completa | 1/6 (M2) | CONAFE/preescolar hasta ANUIES — visión sistémica de la educación |
| Servicios de emergencia | 1/6 (M1) | Bomberos, Cruz Roja, Protec. Civil — actores operativos, no solo institucionales |
| Actores no convencionales | 1/6 (M6) | Ejidos, influencers, artistas, protectores animales, LGTB+, personas violentadas |

**Estabilidad de hubs:** Los actores más mencionados son consistentes entre talleres: Universidades/Academia, Cámaras empresariales, Personas con Discapacidad, Sector Salud, e Investigadores aparecen como hubs en ambos. Esto indica que hay un consenso estable sobre quiénes son los nodos centrales del ecosistema queretano.

**Brecha persistente:** A pesar de la expansión de T2, hay actores que aparecen como aspiración en Legado pero NO como nodos en Comunidad:
- Comunidades rurales / Sierra / Semidesierto: mencionadas como aspiración en Legado ("genera oportunidades equitativas para las diferentes realidades del estado — metropolitano, Sierra, Semidesierto" T1-M1) pero escasamente representadas en los grafos de Comunidad.
- Infancias y primera infancia: mencionadas como preocupación en Legado y Contexto, pero con presencia limitada como actores en Comunidad (2-3 mesas).

---

## PARTE IV — ANÁLISIS DIMENSIONAL HA

> Segundo nivel de análisis: usar las 6 dimensiones de Horizons Architecture como lente. Aquí se cruzan las dimensiones trabajadas entre sí y se infieren las 3 dimensiones ausentes a partir de las señales contenidas en los datos.

---

### 4.1 Interacciones entre dimensiones trabajadas

Las 3 dimensiones trabajadas (Legado, Comunidad, Contexto) no son compartimentos estancos. Lo que se aspira en una puede estar habilitado o bloqueado por lo que se describe en otra. Cruzarlas revela alineaciones y contradicciones.

---

#### 4.1.1 Legado ↔ Contexto

**Pregunta de cruce:** ¿Las aspiraciones de futuro (Legado) están habilitadas o bloqueadas por la realidad presente (Contexto)?

**Alineaciones (el Contexto habilita el Legado):**

| Aspiración (Legado) | Condición favorable (Contexto) | Evaluación |
|---------------------|-------------------------------|------------|
| Toma de decisiones basada en datos | Querétaro tiene instituciones educativas de prestigio (T2-Cx-M4), centros de investigación, CONCYTEQ | **Habilitada** — existe la infraestructura académica |
| Conectividad intersectorial | Triple hélice existente (T1-Cx-M5, T2-Cx-M6); "Colaboración real entre sector público y privado" (T1-Cx-M3) | **Parcialmente habilitada** — existe el hábito pero no la escala |
| Continuidad transexenal | "Gobierno con continuidad" (T2-Cx-M6); "Instituciones que funcionan y tienen continuidad" (T2-Cx-M2) | **Habilitada** — Querétaro tiene tradición de continuidad institucional |
| Seguridad como base del desarrollo | Seguridad reconocida como fortaleza en 10/12 mesas de Contexto | **Habilitada pero frágil** — "es frágil y vulnerable" (T1-Cx-M1) |

**Contradicciones (el Contexto bloquea el Legado):**

| Aspiración (Legado) | Bloqueo identificado (Contexto) | Contradicción |
|---------------------|-------------------------------|---------------|
| Inclusión de TODOS los sectores | "Brecha tecnológica en todo el estado" (T1-Cx-M5); "Mejorar la red de internet — Zona de la sierra — Comunidades alejadas" (T2-Cx-M4) | **Contradicción estructural:** se aspira a incluir a comunidades rurales/indígenas, pero el Contexto revela que no tienen conectividad básica |
| Participación ciudadana efectiva | "Tensiones entre participación ciudadana y burocracia existente" (T1, insight 2); "Apatía y piso de partida muy disparejo en el entendimiento de la tecnología" (T1-Cx-M1) | **Contradicción operativa:** la participación se quiere pero el Contexto muestra barreras reales (burocracia, apatía, brecha digital) |
| Decisiones basadas en datos | "Seguir ocultando datos en materia de seguridad. Lo que no se señala, no se resuelve." (T1-Cx-M3) | **Contradicción cultural:** se aspira a transparencia de datos pero el Contexto revela que hay prácticas de ocultamiento vigentes |
| Transparencia total | "No politizar" aparece como reto recurrente (T1-Cx-M4, T2-Cx-M6) | **Contradicción política:** la transparencia requiere despolitización, pero el Contexto muestra que la politización es un riesgo activo |
| Reducción de desigualdad | "Crecimiento que sobrepasó la planeación estratégica" (T1-Cx-M3); "Crecimiento con una desigualdad muy marcada" (T1-Cx-M3) | **Contradicción del modelo:** el mismo crecimiento económico que se celebra como fortaleza ha generado la desigualdad que se quiere resolver |

**Contradicción más profunda (Legado ↔ Contexto):** Los participantes aspiran a un sistema de datos robusto (Legado) y simultáneamente temen el uso ético de esos mismos datos (T1, insight 1: "preocupaciones sobre el uso ético de los datos recabados"). Quieren el poder de los datos PERO con garantías que aún no existen en el marco legal de Querétaro. Esto no es incoherencia — es una tensión productiva que el SIC-Q debe resolver por diseño.

---

#### 4.1.2 Legado ↔ Comunidad

**Pregunta de cruce:** ¿Las aspiraciones de futuro (Legado) tienen respaldo en la red de actores (Comunidad)? ¿Quién sostiene cada aspiración?

**Aspiraciones CON respaldo en la red:**

| Aspiración (Legado) | Actores mapeados (Comunidad) | Respaldo |
|---------------------|----------------------------|----------|
| Conectividad intersectorial | Universidades (10/12 mesas), Cámaras empresariales (9/12), Gobierno/Secretarías (12/12) | **Fuerte** — los 3 pilares de la triple hélice están bien representados |
| Toma de decisiones basada en datos | Investigadores/Centros de Investigación (8/12), CONCYTEQ, INEGI (T2-M2, T2-M4) | **Moderado** — hay actores de generación de datos pero no de gestión/distribución |
| Salud pública como prioridad | Sector Salud (8/12), Hospitales, DIF (T2 agrega Doctores, Nutrólogos, Psicólogos, Comité Ético) | **Creciente** — T2 amplió significativamente el sub-cluster de salud |

**Aspiraciones SIN respaldo suficiente en la red:**

| Aspiración (Legado) | Actores esperados | Presencia en Comunidad | Brecha |
|---------------------|-------------------|----------------------|--------|
| Inclusión de pueblos indígenas | Organizaciones indígenas, líderes comunitarios de la Sierra, representantes del Semidesierto | 6/12 mesas mencionan "Pueblos Indígenas" como categoría, pero sin nombrar organizaciones específicas | **Brecha crítica:** se mencionan como grupo a incluir pero no como actores con agencia propia |
| Reducción de brecha urbano-rural | Actores rurales, productores agrícolas, ejidos | Ejidos solo en T2-M6 (1 mesa). "Ganaderos y Agricultura" en T2-M5. "Agricultores y ganaderos" en T1-M5. | **Brecha significativa:** 3 menciones en 12 mesas para un estado con territorio predominantemente rural |
| Inclusión de infancias | Organizaciones de infancia, redes de primera infancia, sistemas de protección | "Infancias" / "Niños" en 3-4 mesas como población, no como actores organizados | **Brecha:** se preocupan por las infancias pero no mapean quién las representa |
| Participación ciudadana masiva | Plataformas ciudadanas, medios comunitarios, organizaciones barriales | "Asociaciones de colonias" solo en T2-M2. "Mayorías de Barrios" solo en T2-M5. | **Brecha:** la participación ciudadana es la convergencia #7 pero los actores que la operan son los menos mapeados |
| Igualdad de género | Organizaciones de mujeres, S. de la Mujer, redes feministas | "Mujeres/Madres" en 5/12 mesas. S. de la Mujer solo en T2-M3. | **Brecha moderada:** presente pero subrepresentada para un tema que cruza todas las dimensiones |

**Hallazgo clave (Legado ↔ Comunidad):** Hay una asimetría sistemática entre lo que se aspira y quién lo sostiene. Las aspiraciones más mencionadas (inclusión, participación) son las que tienen MENOS actores operativos mapeados. Las aspiraciones mejor respaldadas (conectividad intersectorial, datos) son las que ya tienen infraestructura institucional.

---

#### 4.1.3 Comunidad ↔ Contexto

**Pregunta de cruce:** ¿La estructura de la red de actores (Comunidad) corresponde con las fortalezas y retos identificados (Contexto)?

**Correspondencias (hay actores donde hay retos):**

| Reto (Contexto) | Actor hub (Comunidad) | Correspondencia |
|-----------------|----------------------|----------------|
| Educación y capacitación | Universidades/Academia (10/12 mesas) | **Alta** — el actor más mapeado corresponde a uno de los retos más mencionados |
| Seguridad | Seguridad como sector (6/12 mesas) | **Moderada** — presente pero no dominante |
| Crecimiento económico | Cámaras empresariales (9/12) | **Alta** — segundo actor más mapeado |

**Desconexiones (hay retos sin actores):**

| Reto (Contexto) | Actores esperados | Presencia en Comunidad | Desconexión |
|-----------------|-------------------|----------------------|-------------|
| Brecha tecnológica / conectividad (4/12 mesas en Contexto) | Empresas de telecomunicaciones, proveedores de internet, sector TIC | **Ausentes** — ninguna mesa mapeó operadores de telecomunicaciones o empresas tecnológicas como actores | **Desconexión crítica:** se identifica la brecha digital como reto pero no se mapea a quién la resuelve |
| Recurso hídrico / agua (creciente en T2) | CEA (Comisión Estatal de Aguas), operadores de agua, organizaciones ambientales | CEA solo en T2-M6 (1 mesa). "Grupos Ecológicos" solo en T2-M6. | **Desconexión fuerte:** el agua es preocupación central en Legado T2 pero casi invisible en la red de actores |
| Movilidad / transporte | Sector Transporte (T2-M1), TRANSPORTE PÚBLICO (T1-M4) | 2-3 mesas | **Desconexión moderada** |
| Crecimiento poblacional / migración | INEGI, institutos de planeación, organizaciones de atención a migrantes | INEGI en 2 mesas (T2-M2, T2-M4). Migrantes solo en T2-M5. | **Desconexión moderada** |

**Hallazgo clave (Comunidad ↔ Contexto):** La red de actores está sesgada hacia los sectores institucionales consolidados (gobierno, academia, IP) y subrepresenta a los actores operativos de los retos más críticos (agua, conectividad, ruralidad). Esto sugiere que la red refleja "quién ya está en la sala" más que "quién necesita estar."

---

### 4.2 Inferencia de las 3 dimensiones no abordadas

> **Aclaración metodológica:** Las dimensiones de Aprendizaje, Tecnología y Proyectos **no fueron abordadas directamente** en los talleres — no hubo preguntas, actividades ni mesas dedicadas a ellas. Lo que sigue son **lecturas inferenciales**: señales que los datos emiten cuando se los mira a través de una dimensión que no se preguntó explícitamente. No son hallazgos directos sino hipótesis informadas por los datos.

---

#### 4.2.1 Dimensión inferida: Aprendizaje

**Pregunta HA:** ¿Qué necesita aprender Querétaro para lograr el Legado que aspira?

**Señales detectadas en los datos:**

| Señal | Fuente | Dimensión de origen | Inferencia para Aprendizaje |
|-------|--------|--------------------|-----------------------------|
| "Apatía y piso de partida muy disparejo en el entendimiento de la tecnología y posibilidades" | T1, Mesa 1, Contexto | Contexto | **Brecha de alfabetización tecnológica:** la población no tiene las competencias para participar en un sistema digital. Se necesita formación masiva, no solo acceso. |
| "Acceso a la educación y capacitación necesaria para que todo lo entendamos" | T1, Mesa 4, Contexto | Contexto | **Demanda explícita de capacitación:** no solo tecnológica sino conceptual — "para que TODO lo entendamos." |
| "Acceso a casos de éxito de políticas públicas en cualquier parte del mundo, que ya han resuelto los mismos problemas" | T1, Mesa 1, Contexto | Contexto | **Aprendizaje por benchmarking:** existe la conciencia de que otros ya resolvieron estos problemas. Falta el mecanismo de transferencia. |
| "Monitoreo / Evaluación / y / Aprendizaje" | T1, Mesa 3, Comunidad | Comunidad | **Aprendizaje institucional:** alguien nombró explícitamente el ciclo de M&E como actor necesario. |
| "Legislaciones creadas y publicadas pero NO aplicadas" | T1, Mesa 3, Contexto | Contexto | **Falla de aprendizaje organizacional:** se legisla sin implementar. Hay una brecha entre saber y hacer. |
| "Cuidar SIEMPRE la parte humana. Educar la inteligencia emocional por encima de la artificial." | T2, Mesa 3, Legado | Legado | **Aprendizaje emocional/ético:** no solo competencias técnicas sino capacidad de convivencia. |
| Universidades como actor hub (10/12 mesas) | Ambos talleres, Comunidad | Comunidad | **Actores de aprendizaje bien mapeados:** la academia está presente, pero no está claro qué papel jugaría en la formación ciudadana masiva vs. la investigación. |

**Síntesis inferencial — Aprendizaje:** Los datos revelan al menos 3 tipos de aprendizaje necesarios: (1) alfabetización tecnológica masiva para cerrar la brecha digital, (2) formación ciudadana para participar efectivamente en el SIC-Q, y (3) aprendizaje institucional para que el gobierno pase de legislar a implementar. El tercer tipo es el menos visible pero potencialmente el más importante: la Mesa 3 de T1 identifica que Querétaro ya tiene leyes que no aplica — el problema no es de conocimiento sino de ejecución.

---

#### 4.2.2 Dimensión inferida: Tecnología

**Pregunta HA:** ¿Qué infraestructura tecnológica está implícita en las aspiraciones de los participantes?

**Señales detectadas en los datos:**

| Señal | Fuente | Inferencia para Tecnología |
|-------|--------|---------------------------|
| "Hoy no vemos eso porque las bases de datos no se hablan o los sistemas tienen una baja interconexión." | T2, Mesa 2, Legado | **Interoperabilidad:** el problema tecnológico central no es falta de datos sino falta de conexión entre sistemas existentes. |
| "Implementaría herramientas de IA para la detección de zonas que pudieran ser 'complejas' (inseguridad, velocidad de vehículos en calles, prevención de accidentes, iluminación, detección de residuos)" | T2, Mesa 6, Legado | **IA aplicada a gobierno:** hay una visión concreta de cómo la IA puede operar en la gestión urbana. |
| "Tendríamos Información actualizada en tiempo R." | T2, Mesa 6, Legado | **Datos en tiempo real:** la aspiración implica infraestructura de sensores, APIs, dashboards — no solo bases de datos estáticas. |
| "Brecha tecnológica en todo el estado." | T1, Mesa 5, Contexto | **Infraestructura de conectividad:** antes de cualquier sistema de IA, se necesita internet funcional en todo el territorio. |
| "Mejorar la red de internet — + Zona de la sierra — + Comunidades alejadas" | T2, Mesa 4, Contexto | **Desigualdad de acceso:** la infraestructura tecnológica está concentrada en la zona metropolitana. |
| "No hay generación de 'IA Colectiva'!" | T2, Mesa 6, Legado | **Concepto emergente:** un participante ya nombra el concepto de inteligencia artificial colectiva — exactamente lo que el SIC-Q propone. |
| "Garantizar el uso ético de la info/data es vital para la aceptación de los ciudadanos. Son nuevos pactos sociales" | T1, Mesa 6, Legado | **Gobernanza de datos:** la tecnología necesita un marco de gobernanza ética, no solo técnico. |
| "Dependencia tecnológica" | T2, Mesa 2, Legado colectivo | **Riesgo:** la Mesa 2 de T2 identifica la dependencia tecnológica como algo que preocupa, no solo como algo que se aspira. |
| Secretaría de Tecnología como actor (T2-M1) | T2, Comunidad | **Institucionalización:** al menos una mesa mapeó una secretaría de tecnología como actor del ecosistema. |
| Ausencia total de empresas tecnológicas en Comunidad | Ambos talleres | **Punto ciego:** nadie nombró a empresas de telecomunicaciones, proveedores de software, data centers, o startups tecnológicas como actores del SIC-Q. |

**Síntesis inferencial — Tecnología:** La tensión tecnológica central es: los participantes aspiran a un sistema de información en tiempo real, con IA, interoperabilidad de datos y acceso universal — pero el Contexto revela que hay brecha digital territorial, los sistemas actuales no se comunican, y no se ha mapeado a los actores tecnológicos que lo harían posible. Además, existe una tensión no trivial entre deseo de sistema robusto y miedo a dependencia/uso ético de datos. El SIC-Q vive exactamente en esta tensión.

---

#### 4.2.3 Dimensión inferida: Proyectos

**Pregunta HA:** ¿Qué iniciativas concretas emergen espontáneamente de los datos sin haber sido solicitadas?

**Señales detectadas en los datos:**

Los participantes, sin que se les preguntara por proyectos específicos, mencionaron acciones concretas que constituyen un catálogo implícito de proyectos:

| Proyecto implícito | Fuente | Tipo |
|-------------------|--------|------|
| Construir plantas potabilizadoras y tratadoras de agua | T2, Mesa 6, Legado individual | Infraestructura |
| Sistemas de captación de agua de lluvia | T2, Mesa 6, Legado individual | Infraestructura |
| Sistema de movilidad con uso limitado de vehículos de motor | T2, Mesa 6, Legado individual | Movilidad |
| Incentivos fiscales al sector productivo que aporte a favor de NNA (escuelas, parques, bibliotecas) | T2, Mesa 6, Legado individual | Política fiscal |
| Herramientas de IA para detección de zonas complejas (inseguridad, velocidad, iluminación, residuos) | T2, Mesa 6, Legado individual | Tecnología/IA |
| Conectar a la posible víctima con el sistema de seguridad — conexión inmediata para prevenir el delito | T2, Mesa 2, Legado individual | Seguridad/Tecnología |
| Legislación constitucional local para proteger la herramienta, datos y transparencia | T1, Mesa 3, Contexto | Legislación |
| Sistema donde el ciudadano consulte en qué se invirtieron sus impuestos — 0 corrupción | T2, Mesa 5, Legado individual | Transparencia/Tecnología |
| Primer estado sin brecha salarial de género | T1, Mesa 3, Comunidad | Política laboral |
| Calcular rutas accesibles, transporte público incluyente | T1, Mesa 3, Comunidad | Movilidad/Inclusión |
| Espacios de recreación para empresas con activación física | T2, Mesa 6, Legado individual | Bienestar laboral |

**Diferencia entre proyectos aspiracionales (Legado) vs. pragmáticos (Contexto):**

| Tipo | Origen | Carácter | Ejemplo |
|------|--------|----------|---------|
| Aspiracional | Legado (individual) | Visionario, a veces utópico, orientado al largo plazo | "Primer estado sin brecha salarial de género" |
| Pragmático | Contexto (retos) | Orientado a resolver problemas inmediatos | "Mejorar la red de internet en la Zona de la sierra" |
| Híbrido | Legado (colectivo) | Filtrado por deliberación grupal, más realista | "Anticipar la toma de decisiones con base a pronósticos/estadística" |

**¿Los grafos de Comunidad muestran actores capaces de ejecutar estos proyectos?**

| Proyecto implícito | Actores necesarios | ¿Mapeados en Comunidad? |
|-------------------|-------------------|------------------------|
| Plantas de agua | CEA, SEDESU, constructoras | CEA en 1 mesa (T2-M6). SEDESU en 2-3 mesas. Constructoras ausentes. |
| IA para zonas complejas | Empresas de tecnología, startups, centros de investigación en IA | Centros de investigación en 8 mesas, pero empresas tech ausentes |
| Conexión víctima-seguridad | Fiscalía, Seguridad, telecomunicaciones | Fiscalía en 4 mesas, Seguridad en 6, telecomunicaciones ausentes |
| Legislación de protección de datos | Legislatura, Tribunal, barras de abogados | Legislatura en 1 mesa (T2-M3). Tribunal en 2. Barras de abogados en 1. |
| Internet en la Sierra | Telecomunicaciones, SCT, gobierno federal | SCT en 1 mesa (T2-M6). Telecomunicaciones ausentes. Gob. federal en 2 mesas. |

**Síntesis inferencial — Proyectos:** Los participantes espontáneamente propusieron proyectos concretos que van desde infraestructura hídrica hasta IA aplicada a seguridad. La mayoría de estos proyectos implícitos requieren actores que NO están bien representados en los grafos de Comunidad (telecomunicaciones, empresas tecnológicas, sector construcción, SCT). Esto sugiere una brecha de ejecución: las ideas existen, pero la red para implementarlas no está articulada.

---

### 4.3 Análisis fractal: patrones que se repiten a diferentes escalas

HA sostiene que los patrones más profundos son los que aparecen a múltiples escalas de observación. Se identificaron 4 escalas en los datos:

1. **Individual** — lo que una persona escribe sola (Legado individual)
2. **Mesa** — lo que un grupo de 5-7 personas acuerda (Legado colectivo, Contexto, Comunidad)
3. **Taller** — lo que emerge como patrón entre las 6 mesas (insights transversales)
4. **Inter-taller** — lo que se confirma entre T1 y T2 (convergencias de Parte III)

**Temas que aparecen en las 4 escalas (señales fractales):**

| Tema | Individual | Mesa | Taller (insights) | Inter-taller |
|------|-----------|------|-------------------|-------------|
| **Desigualdad / inclusión** | "Seguir atorados en una sociedad tan desigual" (T1-M3) | Acuerdo colectivo en todas las mesas | T1 insight 4 (PcD en todas las mesas); T2 insight 1 (grupos vulnerables) | Convergencia #1 (12/12 mesas) |
| **Conectividad intersectorial** | "Triple hélice separada" (T1-M1) | "Permitir que todos los sectores hablen el mismo idioma" (T2-M6 colectivo) | T1 insight 3 (consenso colaboración); T2 insight 5 (colaboración) | Convergencia #2 (12/12 mesas) |
| **Decisiones basadas en datos** | "Datos duros que ayudarán a tomar mejores decisiones" (T1-M4) | "Anticipar la toma de decisiones con base a pronósticos/estadística" (T2-M5 colectivo) | T2 insight 3 (sistema de información robusto) | Convergencia #3 (11/12 mesas) |

**Estos 3 temas son las señales fractales más profundas de los talleres.** No dependen de quién los dice, ni de cuántos los dicen, ni de a qué escala se miran. Son estructurales.

**Temas que aparecen en 3 escalas pero NO en las 4:**

| Tema | Escala faltante | Significado |
|------|---------------|-------------|
| Seguridad como activo frágil | No aparece como insight transversal generado por IA | La IA no lo detectó como patrón porque es una FORTALEZA mencionada en Contexto, no una demanda. Pero a nivel individual, mesa e inter-taller es omnipresente. |
| Continuidad transexenal | No es universal a nivel individual (no todos lo mencionan) | Es un tema más institucional que personal — aparece cuando se piensa como colectivo, no como individuo. |
| Transparencia / ética de datos | No aparece consistentemente a nivel de mesa colectiva (se filtra) | Se menciona individualmente y en insights, pero la deliberación grupal lo diluye — posiblemente porque es más fácil acordar sobre "lo que queremos" que sobre "lo que nos preocupa." |

---

### 4.4 Temporalidad no lineal

HA sostiene que pasado, presente y futuro no son secuenciales sino que se retroalimentan. Los datos capturan 3 temporalidades:

- **Pasado:** "Lo que hemos aprendido en el camino" (Contexto — lecciones)
- **Presente:** "Lo que nos favorece / Retos" (Contexto — fortalezas y desafíos), Red de actores (Comunidad)
- **Futuro:** "En 10 años Querétaro podría..." (Legado — aspiraciones)

**¿Dónde los aprendizajes del pasado informan las aspiraciones del futuro?**

| Aprendizaje del pasado (Contexto) | Aspiración del futuro (Legado) | Relación |
|----------------------------------|-------------------------------|----------|
| "Visión de largo plazo; continuidad en estrategias" funcionó (T1-Cx-M5) | "Política pública a largo plazo para evitar discontinuidad administrativa" (T2-L-M6 colectivo) | **Coherencia:** la lección del pasado alimenta directamente la aspiración del futuro |
| "Atracción de inversión y crecimiento económico" funcionó (T1-Cx-M3) | Querétaro como líder, competitivo, referente tecnológico (múltiples mesas) | **Coherencia:** se quiere escalar lo que ya funcionó |
| "Escuchar a la gente es importante" (T1-Cx-M1) | "Voz y escucha a la ciudadanía" (T2-L-M2 colectivo) | **Coherencia:** la lección se convierte en aspiración |
| "Sismo del 85 dio vuelta positiva al estado" (T2-Cx-M4) | Capacidad de resiliencia como activo | **Coherencia implícita:** la adversidad histórica generó identidad |

**¿Dónde el futuro deseado IGNORA las lecciones del pasado?**

| Aspiración del futuro (Legado) | Lección del pasado ignorada (Contexto) | Punto ciego temporal |
|-------------------------------|---------------------------------------|---------------------|
| Inclusión total, participación masiva | "Apatía y piso de partida muy disparejo" (T1-Cx-M1); "Legislaciones creadas y publicadas pero NO aplicadas" (T1-Cx-M3) | **Se aspira a inclusión masiva sin reconocer que las herramientas previas no se implementaron.** El pasado muestra que el problema no es de diseño sino de ejecución — pero las aspiraciones se enfocan en diseñar mejor, no en ejecutar mejor. |
| Sistema de datos interconectado en tiempo real | "Seguir ocultando datos en materia de seguridad" (T1-Cx-M3) | **Se aspira a transparencia de datos sin abordar la cultura de ocultamiento.** La tecnología puede ser transparente pero la práctica institucional puede no serlo. |
| Cuádruple hélice "genuinamente conectada" | "Crecimiento con una desigualdad muy marcada" (T1-Cx-M3) | **Se aspira a conectar sectores que el crecimiento desigual ha separado.** La hélice se quiere conectar sin reconocer plenamente que fue el propio modelo de crecimiento el que creó la fragmentación. |

**¿Dónde el presente bloquea el futuro sin que se reconozca?**

| Condición presente (Contexto/Comunidad) | Aspiración futura que bloquea | Reconocimiento |
|----------------------------------------|------------------------------|---------------|
| Ausencia de actores tecnológicos en la red de Comunidad | Aspiración de sistema digital de última generación | **No reconocido:** nadie señaló que los actores tech no están mapeados |
| Ausencia de actores rurales/indígenas con agencia | Aspiración de inclusión total | **Parcialmente reconocido:** se mencionan como grupos a incluir pero no como actores con voz propia en el presente |
| Brecha digital territorial | Aspiración de acceso universal al SIC-Q | **Reconocido en Contexto pero no vinculado explícitamente con el SIC-Q** — la conexión la hace este análisis, no los participantes |

**Hallazgo temporal más importante:** Los talleres fueron más fuertes en articular FUTURO (Legado) y PRESENTE (Contexto fortalezas) que en procesar PASADO (Contexto lecciones). Las lecciones del pasado son más breves, menos detalladas y más genéricas que las aspiraciones futuras. Esto sugiere un sesgo temporal: es más fácil imaginar lo que se quiere que analizar lo que se aprendió. El SIC-Q debería compensar este sesgo integrando mecanismos de memoria institucional — no solo datos en tiempo real sino registros de lo que se intentó y no funcionó.

---

## PARTE V — HALLAZGOS

> Tercer nivel de análisis: lo que emerge cuando se dejan de describir datos y se empieza a leer entre líneas. Esta parte sintetiza las Partes II, III y IV para identificar tensiones estructurales, puntos ciegos y patrones no obvios. Cada hallazgo tiene trazabilidad a los datos de origen.

---

### 5.1 Tensiones estructurales

Las tensiones no son errores ni incoherencias — son fuerzas en oposición que revelan la complejidad real. Se distinguen tensiones explícitas (nombradas por los participantes) de tensiones implícitas (que emergen solo del cruce de datos).

---

#### 5.1.1 Tensiones explícitas

Los participantes nombraron directamente estas tensiones:

| # | Tensión | Fuente | Dimensión | Naturaleza |
|---|---------|--------|-----------|------------|
| TE1 | Participación ciudadana vs. burocracia | T1, insight 2 (Mesas 1, 3, 4, 5, 6) | Contexto | La ciudadanía quiere participar pero la estructura administrativa lo dificulta. No es falta de voluntad sino incompatibilidad de tiempos y procesos. |
| TE2 | Soluciones inmediatas vs. largo plazo | T2, insight 2 (Mesas 4, 5, 6) | Legado | Divergencia entre quienes quieren resultados ya y quienes proponen construcción gradual. Refleja diferencia de urgencia vital — no todos pueden esperar 10 años. |
| TE3 | Crecimiento económico vs. desigualdad | T1, Mesa 3, Contexto: "Crecimiento con una desigualdad muy marcada"; T2, Mesa 4, Legado: "REDUCIR LA POBREZA Y LA DESIGUALDAD" | Contexto + Legado | El modelo económico que hizo exitoso a Querétaro es el mismo que generó la brecha que ahora se quiere cerrar. |
| TE4 | Datos como poder vs. datos como riesgo | T1, insight 1 (uso ético de datos) + T2, insight 3 (sistema de información robusto) + T2, Mesa 2, Legado colectivo: "Dependencia tecnológica" | Legado | Los participantes demandan un sistema de datos robusto Y temen que esos mismos datos se usen mal. No es incoherencia — es un "nuevo pacto social" que aún no existe (T1, Mesa 6). |
| TE5 | IA como herramienta vs. deshumanización | T2, Mesa 3, Legado: "Cuidar SIEMPRE la parte humana. Educar la inteligencia emocional por encima de la artificial." + T2, Mesa 4: "va a haber una falta de sentido humano" | Legado | T2 introduce una tensión que T1 no tenía: el miedo a que la solución (tecnología/IA) erosione lo que se quiere proteger (humanismo, tejido social). |

---

#### 5.1.2 Tensiones implícitas

Estas tensiones no fueron nombradas por los participantes. Emergen del cruce de datos entre dimensiones y talleres.

**TI1: La asimetría aspiración-soporte**

- **Qué es:** Las aspiraciones más mencionadas en Legado (inclusión, participación ciudadana) son las que tienen MENOS actores operativos mapeados en Comunidad. Las aspiraciones mejor respaldadas (conectividad intersectorial, datos) son las que YA tienen infraestructura institucional.
- **Evidencia:**
  - Inclusión de pueblos indígenas: mencionada en 12/12 mesas en Legado, pero solo 6/12 mencionan "Pueblos Indígenas" como categoría genérica en Comunidad — sin nombrar una sola organización indígena específica.
  - Participación ciudadana: convergencia #7 (9/12 mesas), pero "Asociaciones de colonias" solo en T2-M2 y "Mayorías de Barrios" solo en T2-M5.
  - Conectividad intersectorial: convergencia #2, con Universidades en 10/12 mesas y Cámaras en 9/12.
- **Fuente:** Cruce 4.1.2 (Legado ↔ Comunidad), tablas de actores hub (2.2)
- **Implicación:** Lo que más se desea es lo que menos se sabe cómo operacionalizar. El discurso inclusivo supera con creces la infraestructura de inclusión.

**TI2: La paradoja de la seguridad**

- **Qué es:** Querétaro reconoce su seguridad como su activo más valioso (10/12 mesas en Contexto) pero la menciona simultáneamente como fragilidad. No es complacencia — es lo que en teoría de sistemas se llama "dependencia de trayectoria": la identidad del estado depende de algo que podría perderse, y la pérdida sería catastrófica no solo material sino identitariamente.
- **Evidencia:**
  - "LA SEGURIDAD ES INDISPENSABLE — Tiene repercusiones positivas en todo lo demás pero es frágil y vulnerable." (T1, Mesa 1, Contexto)
  - "no queremos ser el nuevo 'Celaya'" (T2, Mesa 5, Legado)
  - "La poca seguridad que nos queda" (T2, Mesa 5, Legado)
  - Seguridad aparece en 3 escalas fractales (individual, mesa, inter-taller) pero NO como insight generado por IA — la máquina no lo detectó porque lo clasifica como "fortaleza", no como "tensión" (ver 4.3).
- **Fuente:** Convergencia #4 (3.1), análisis fractal (4.3)
- **Implicación:** La seguridad funciona como condición habilitante de TODO lo demás. Si se pierde, las demás aspiraciones colapsan. Pero los talleres no mapearon actores de prevención de inseguridad — solo "Seguridad" como sector genérico (6/12 mesas) y "Fiscalía" (4/12).

**TI3: La brecha de ejecución**

- **Qué es:** Los talleres son más fuertes en articular QUÉ quieren (Legado) que en identificar QUIÉN lo haría (Comunidad) o CÓMO se operaría (Proyectos implícitos). Hay una desproporción entre la riqueza del diagnóstico aspiracional y la pobreza del mapeo de capacidades de ejecución.
- **Evidencia:**
  - 11 proyectos implícitos catalogados en 4.2.3. De ellos, solo 2 tienen actores bien mapeados (infraestructura educativa, sistema de salud). Los otros 9 requieren actores que están ausentes o subrepresentados.
  - "Legislaciones creadas y publicadas pero NO aplicadas" (T1, Mesa 3, Contexto) — el pasado ya muestra que el problema no es de diseño sino de ejecución.
  - La red de actores está sesgada hacia sectores institucionales consolidados; los actores operativos de los retos más críticos (agua, conectividad, ruralidad) están subrepresentados (ver 4.1.3).
- **Fuente:** Cruce 4.2.3 (Proyectos), cruce 4.1.3 (Comunidad ↔ Contexto), temporalidad 4.4
- **Implicación:** Querétaro sabe lo que quiere pero el ejercicio de mapeo revela que no ha identificado quién lo puede ejecutar. El SIC-Q puede cerrar esta brecha si conecta aspiraciones con actores operativos — no solo con actores institucionales.

**TI4: El sesgo metropolitano**

- **Qué es:** Los talleres se realizaron en el Club de Industriales de Querétaro (zona metropolitana), con participantes mayoritariamente de contextos urbanos. Las aspiraciones incluyen al territorio completo del estado ("genera oportunidades equitativas para las diferentes realidades del estado — metropolitano, Sierra, Semidesierto" T1-M1) pero la red de actores y los retos identificados reflejan una perspectiva predominantemente metropolitana.
- **Evidencia:**
  - Actores rurales: ejidos solo en T2-M6 (1 mesa), agricultores/ganaderos en 2-3 mesas de 12.
  - Internet en la Sierra: mencionado como reto (T2-Cx-M4) pero no hay un solo actor rural, comunitario, indígena con nombre propio en todo el corpus.
  - Los retos de movilidad, planificación urbana y crecimiento poblacional se formulan desde la experiencia metropolitana.
- **Fuente:** Datos de Comunidad (2.2), retos de Contexto (2.3), divergencia 5 (3.2)
- **Implicación:** Las voces rurales, serranas y del semidesierto están representadas por proxy (alguien urbano que piensa en ellas), no por presencia directa. Futuros talleres del SIC-Q deben garantizar representación territorial, no solo temática.

**TI5: El filtro colectivo**

- **Qué es:** La fase individual de Legado produce respuestas emocionales, específicas, a veces pesimistas o extremas. La fase colectiva de la misma mesa filtra estas voces hacia un consenso más institucional y moderado. Esto no es solo un efecto metodológico — revela qué tipo de voces se pierden cuando se delibera.
- **Evidencia:**
  - Individual: "Mi peor pesadilla es que haya ya sido afortunada de ver el mejor momento de Querétaro... porque significaría que de aquí viene el declive" (T2, Mesa 5). "La extinción de la vida humana" (T2, Mesa 3). "Brújula moral" (T1, Mesa 1). Estas voces NO aparecen en los colectivos de sus mesas.
  - Análisis fractal (4.3): "Transparencia/ética de datos" aparece a nivel individual y en insights, pero la deliberación grupal lo diluye — "posiblemente porque es más fácil acordar sobre 'lo que queremos' que sobre 'lo que nos preocupa.'"
  - Tabla comparativa 2.1.3: "Las respuestas individuales son específicas, emocionales y diversas. Las respuestas colectivas condensan y filtran hacia lenguaje institucional y de política pública."
- **Fuente:** Comparativa individual vs. colectivo (2.1.3), análisis fractal (4.3)
- **Implicación:** El SIC-Q debe capturar AMBAS capas — el individuo sin editar y el colectivo deliberado. Si solo se usa el dato colectivo, se pierde la voz disruptiva, la preocupación impopular, el miedo que nadie quiere verbalizar en grupo.

**TI6: El modelo de crecimiento como causa y solución**

- **Qué es:** Los participantes celebran el crecimiento económico de Querétaro como fortaleza (inversión, empleo, seguridad) y simultáneamente identifican sus consecuencias como los principales retos (desigualdad, crecimiento desordenado, brecha urbano-rural, presión hídrica). Se aspira a resolver con más crecimiento los problemas que el crecimiento generó.
- **Evidencia:**
  - Fortaleza: "Atracción de inversión y crecimiento económico" (T1-Cx-M3, T2-Cx-M4, 8/12 mesas)
  - Reto: "Crecimiento que sobrepasó la planeación estratégica" (T1-Cx-M3)
  - Reto: "Crecimiento con una desigualdad muy marcada" (T1-Cx-M3)
  - Temporalidad (4.4): "Se aspira a conectar sectores que el crecimiento desigual ha separado. La hélice se quiere conectar sin reconocer plenamente que fue el propio modelo de crecimiento el que creó la fragmentación."
- **Fuente:** Contexto T1 y T2 (2.3), temporalidad no lineal (4.4)
- **Implicación:** Mientras no se nombre explícitamente que el modelo económico tiene externalidades, las soluciones seguirán siendo cosméticas. El SIC-Q puede visibilizar esta retroalimentación.

---

### 5.2 Puntos ciegos

Lo que NO se dijo. Lo que está ausente del corpus a pesar de ser relevante para el futuro de Querétaro.

---

#### 5.2.1 Actores ausentes de los grafos de Comunidad

Estos actores deberían estar presentes dado el contexto de Querétaro y las aspiraciones expresadas en Legado, pero NO fueron mapeados o fueron mencionados de forma marginal:

| Actor ausente | Relevancia | Mesas donde se esperaría | Mesas donde aparece |
|--------------|------------|-------------------------|-------------------|
| Empresas de telecomunicaciones / proveedores de internet | Brecha digital es reto en 4/12 mesas. Sistema digital es aspiración en 11/12. | Todas | 0/12 |
| Empresas tecnológicas / startups / sector TIC | IA y datos son convergencia #3. Tecnología es dimensión inferida. | Al menos 6/12 | 0/12 |
| Operadores de agua / sector hídrico (más allá de CEA) | Agua es preocupación central en T2. CEA es actor clave. | Al menos 4/12 | CEA en 1/12 (T2-M6) |
| Sector construcción / infraestructura | Proyectos implícitos incluyen plantas potabilizadoras, movilidad, infraestructura urbana | Al menos 3/12 | 0/12 |
| Medios de comunicación | Transparencia y rendición de cuentas son convergencia #6. Los medios son el canal. | Al menos 4/12 | "Medios de comunicación" en 2-3/12. Sin nombrar medios específicos. |
| Organizaciones indígenas con nombre propio | Pueblos Indígenas mencionados en 6/12 como categoría | Al menos 3/12 | 0/12 — solo la categoría genérica |
| Organizaciones de infancia y primera infancia | Infancias mencionadas como preocupación en Legado y Contexto | Al menos 3/12 | "Infancias" como población en 3-4/12, como actor organizado en 0/12 |
| Partidos políticos (como actores del sistema, no como ideología) | "No politizar" es reto recurrente. La política es el contexto. | Al menos 2/12 | Solo T2-M6 (1/12) |
| SCT / Secretaría de Infraestructura federal | Internet en la Sierra, movilidad, infraestructura | Al menos 2/12 | SCT en 1/12 (T2-M6) |
| Banca / sector financiero (más allá de T1-M5) | Proyectos de infraestructura requieren financiamiento | Al menos 3/12 | T1-M5 (Fintech, inversionistas). 1/12 con detalle. |

**Patrón de la ausencia:** Los actores ausentes son predominantemente del sector privado operativo (telecom, tech, construcción, banca) y del sector social no institucionalizado (organizaciones indígenas con nombre, organizaciones de infancia). Los actores presentes son predominantemente institucionales (gobierno, academia, cámaras). Esto sugiere que los participantes mapean el ecosistema desde la perspectiva de quién tiene poder institucional, no de quién tiene capacidad de ejecución operativa.

---

#### 5.2.2 Temas ausentes o subrepresentados

Temas relevantes para el futuro de Querétaro que NO aparecen o están significativamente subrepresentados en los talleres:

| Tema ausente | Relevancia para Querétaro | Presencia en talleres | Significado de la ausencia |
|-------------|--------------------------|----------------------|---------------------------|
| Cambio climático como concepto explícito | Querétaro enfrenta estrés hídrico, islas de calor urbanas, eventos climáticos extremos | Se menciona "recursos naturales" y "agua" pero NUNCA se usa el término "cambio climático" o "crisis climática" | La preocupación ambiental se fragmenta en síntomas (agua, recursos) sin nombrar la causa sistémica. |
| Automatización y desplazamiento laboral | Querétaro es polo industrial con fuerte presencia automotriz y aeroespacial — sectores altamente automatizables | Se aspira a IA y tecnología pero NO se menciona el riesgo de pérdida de empleos por automatización | Punto ciego significativo: se celebra la tecnología como solución sin considerar sus efectos en el mercado laboral industrial. |
| Vivienda | Querétaro ha experimentado crecimiento inmobiliario acelerado con efectos en costos de vivienda y expansión urbana | Una mención tangencial: "crecimiento desordenado" (T1-Cx-M6, T2-Cx-M3) | El crecimiento urbano se nombra como "desordenado" pero no se conecta con acceso a vivienda. |
| Salario y poder adquisitivo | La desigualdad se menciona como tema central pero casi nunca en términos económicos concretos | "Primer estado sin brecha salarial de género" (T1-M3-Comunidad) — una sola mención | La desigualdad se aborda en términos de inclusión y participación, no de ingreso. Esto puede reflejar el perfil de los participantes (no son quienes sufren la brecha salarial). |
| Corrupción como sistema (más allá de transparencia) | Querétaro ha tenido casos de desvío de recursos y opacidad | T1 usa lenguaje fuerte: "cero impunidad", "eliminara la corrupción". T2 lo suaviza: "transparentar", "rendición de cuentas". | La anticorrupción pierde fuerza de T1 a T2 (dilución 3.3). El tema se institucionaliza — pasa de denuncia ciudadana a lenguaje de gestión pública. |
| Cultura y patrimonio | Querétaro es Patrimonio de la Humanidad con identidad cultural fuerte | "Riqueza cultural" (T2-Cx-M1), "Pérdida de saberes, culturas, prácticas" (T1-M1-Legado) — 2 menciones | La dimensión cultural del futuro de Querétaro está prácticamente ausente. El discurso está dominado por datos, tecnología y gobernanza. |
| Migración (inmigración a Querétaro) | Querétaro es uno de los estados con mayor migración interna. "Crecimiento y migración de la población" (T2-Cx-M3) | "Crecimiento poblacional / migración" en 2/12 mesas de Contexto. "Migrantes" como actor solo en T2-M5. | Un fenómeno que transforma la demografía del estado aparece en la periferia del diagnóstico. |

**Patrón de la ausencia temática:** Los temas ausentes comparten una característica: son sistémicos, lentos, y difíciles de resolver con intervenciones puntuales. Los talleres favorecieron temas que pueden formularse como problemas solubles (datos, conectividad, inclusión) sobre temas que son condiciones estructurales (cambio climático, automatización, modelo económico). Esto no es un defecto de los participantes — es un sesgo inherente a ejercicios prospectivos de 3.5 horas que privilegian lo aspiracional.

---

#### 5.2.3 Dimensiones subrepresentadas

De las 3 dimensiones HA ausentes del diseño de los talleres (Aprendizaje, Tecnología, Proyectos), ¿cuál tuvo menos señales implícitas en los datos?

| Dimensión inferida | Señales detectadas (4.2) | Señales por escala | Evaluación |
|-------------------|-------------------------|-------------------|------------|
| **Aprendizaje** | 7 señales directas | Individual: 3. Mesa: 2. Taller: 1. Inter-taller: 1. | **Moderadamente presente** — hay menciones de capacitación, educación, benchmarking. Pero se limita a "necesitamos aprender" sin detallar QUÉ ni CÓMO. |
| **Tecnología** | 10 señales directas | Individual: 5. Mesa: 2. Taller: 2. Inter-taller: 1. | **La más presente de las ausentes** — los participantes hablan de IA, interoperabilidad, datos en tiempo real, brecha digital. Pero no mapean actores tecnológicos. |
| **Proyectos** | 11 proyectos implícitos catalogados | Individual: 8. Mesa: 2. Taller: 0. Inter-taller: 1. | **Presente en cantidad pero ausente en estructura** — se mencionan acciones concretas pero sin plazos, recursos, responsables ni indicadores. |

**La dimensión más débilmente representada es Aprendizaje.** No porque tenga menos menciones, sino porque las menciones que tiene son las más genéricas. Cuando los participantes hablan de tecnología, dan detalles ("IA para detección de zonas complejas", "bases de datos que no se hablan"). Cuando hablan de proyectos, nombran intervenciones concretas ("plantas potabilizadoras", "incentivos fiscales"). Pero cuando hablan de aprendizaje, se quedan en "capacitación", "educación", "acceso al conocimiento" — sin especificar qué competencias, para quién, con qué método.

**Significado:** Querétaro sabe qué quiere lograr (Legado), sabe quién está en la mesa (Comunidad), reconoce sus fortalezas y retos (Contexto), tiene ideas de proyectos (Proyectos inferidos), e imagina la tecnología necesaria (Tecnología inferida). Pero NO ha articulado qué necesita aprender como sociedad para llegar ahí. La dimensión de Aprendizaje es el eslabón más débil de la cadena.

---

### 5.3 Hallazgos no obvios

Estos hallazgos no son:
- "La gente quiere más participación" (obvio — lo dicen explícitamente)
- "Hay preocupación por el agua" (obvio — lo mencionan directamente)
- "Se necesita colaboración intersectorial" (obvio — es consenso en los insights)

Son patrones que solo emergen del cruce dimensional, contradicciones productivas, señales débiles que son estructuralmente significativas, y asimetrías entre el discurso y los datos.

---

#### Hallazgo 1: El SIC-Q ya fue validado sin haber sido preguntado

**Qué es:** En ningún momento se les preguntó a los participantes si Querétaro necesita un sistema de inteligencia colectiva. Sin embargo, la convergencia #3 (decisiones basadas en datos, 11/12 mesas) describe EXACTAMENTE lo que el SIC-Q propone: un sistema que conecte datos de múltiples fuentes para informar decisiones públicas.

**Evidencia:**
- "Datos duros que ayudarán a tomar mejores decisiones" (T1-M4-Legado)
- "Hoy no vemos eso porque las bases de datos no se hablan" (T2-M2-Legado)
- "No hay generación de 'IA Colectiva'!" (T2-M6-Legado) — alguien nombró el concepto exacto
- "Tendríamos Información actualizada en tiempo R." (T2-M6-Legado)
- "Que el SIC-Q genere una sociedad civil consciente, pensante y exigente" (T2-M5-Legado colectivo)

**Por qué no es obvio:** El SIC-Q podría ser un proyecto que los diseñadores quieren pero la ciudadanía no necesita. Los datos muestran lo contrario: la demanda existía ANTES de que se propusiera la solución. Esto es raro en procesos participativos — normalmente la solución se presenta y luego se busca validación.

**Trazabilidad:** Convergencia #3 (3.1), cluster L1 (2.1), dimensión inferida Tecnología (4.2.2)

---

#### Hallazgo 2: Los participantes mapearon quién tiene poder, no quién puede ejecutar

**Qué es:** La red de Comunidad está dominada por actores institucionales (gobierno, academia, cámaras) que son nodos de poder y legitimidad. Pero los actores necesarios para ejecutar las aspiraciones de Legado son operativos (telecomunicaciones, sector hídrico, construcción, organizaciones de base comunitaria) y están casi completamente ausentes.

**Evidencia:**
- Universidades: 10/12 mesas. Telecomunicaciones: 0/12.
- Cámaras empresariales: 9/12. Empresas tecnológicas: 0/12.
- Gobierno secretarías: 12/12. CEA (agua): 1/12.
- PcD como grupo: 8/12. Organizaciones de PcD con nombre: 0/12.

**Por qué no es obvio:** Se esperaría que un mapeo de "¿quiénes deberían participar?" incluya tanto a los que deciden como a los que hacen. Pero los participantes — la mayoría de contextos institucionales — mapean desde su propia lógica: quién tiene voz legítima en una mesa de planeación. Los actores operativos (quién pone la fibra óptica, quién construye la planta de agua, quién conecta internet en la Sierra) no entran en esa lógica.

**Implicación para el SIC-Q:** Si el SIC-Q solo conecta a los actores que los talleres mapearon, reproducirá la estructura de poder actual. Debe incorporar activamente a los actores de ejecución.

**Trazabilidad:** Comunidad T1 y T2 (2.2), cruce Legado ↔ Comunidad (4.1.2), cruce Comunidad ↔ Contexto (4.1.3), actores ausentes (5.2.1)

---

#### Hallazgo 3: Las voces disruptivas se pierden en la deliberación

**Qué es:** La fase individual de Legado captura voces que la fase colectiva elimina. Las preocupaciones más intensas, las visiones más radicales, y los miedos más profundos existen en los datos individuales pero no sobreviven al filtro grupal.

**Evidencia:**
- "Mi peor pesadilla es que haya ya sido afortunada de ver el mejor momento de Querétaro... porque significaría que de aquí viene el declive" (T2-M5-individual) → No aparece en colectivo M5.
- "La extinción de la vida humana" (T2-M3-individual) → El colectivo M3 habla de "deshumanización" pero sin la carga existencial.
- "Filósofos, teólogos e ingenieros para diseñar una brújula moral" (T1-M1-individual) → El colectivo M1 habla de "transparencia" y "trazabilidad" — lenguaje de gestión, no de filosofía moral.
- "Pérdida de saberes, culturas, prácticas" (T1-M1-individual) → No aparece en el colectivo.
- Transparencia/ética de datos: presente a nivel individual e insights, pero se diluye en deliberación colectiva (ver 4.3).

**Por qué no es obvio:** Se asume que la deliberación colectiva mejora las ideas individuales al filtrar ruido. Pero los datos muestran que también filtra señales: las preocupaciones éticas, existenciales y culturales se pierden porque el grupo prioriza lo accionable sobre lo profundo.

**Implicación para el SIC-Q:** El sistema debe preservar la capa individual como dato bruto, no solo el colectivo. Las voces "extremas" pueden ser las más anticipatorias.

**Trazabilidad:** Comparativa individual vs. colectivo (2.1.3), análisis fractal (4.3), tensión implícita TI5

---

#### Hallazgo 4: El pasado funciona como lección abstracta, no como dato operativo

**Qué es:** La dimensión temporal "pasado" (lo que aprendimos en el camino) produce respuestas más breves, más genéricas y menos accionables que la dimensión "futuro" (Legado). Los participantes son más elocuentes imaginando lo que quieren que analizando lo que aprendieron.

**Evidencia:**
- Las lecciones del pasado (Contexto) ocupan un promedio de 3-5 ítems por mesa, con frecuente uso de categorías vagas: "Crecimiento vs. Servicios" (T1-Cx-M2), "Innovar" (T2-Cx-M1), "Planear crecimiento" (T2-Cx-M4).
- Las aspiraciones futuras (Legado individual) ocupan un promedio de 20-28 participaciones por mesa, con alto nivel de detalle y emoción.
- Hay 4 coherencias pasado→futuro documentadas (4.4), pero 3 desconexiones donde el futuro ignora las lecciones del pasado.
- La desconexión más reveladora: "Legislaciones creadas y publicadas pero NO aplicadas" (T1-Cx-M3) — la lección es que el problema no es de diseño sino de ejecución. Pero las aspiraciones de Legado proponen MÁS diseño (más datos, más sistemas, más conexiones) en lugar de mecanismos de ejecución.

**Por qué no es obvio:** En procesos participativos, se asume que el futuro se construye sobre los aprendizajes del pasado. Los datos muestran que la relación es más débil de lo esperado: el pasado se reconoce en abstracto pero no se integra operativamente en la visión de futuro.

**Implicación para el SIC-Q:** El sistema necesita un módulo de "memoria institucional" — no solo datos en tiempo real sino registros de qué se intentó, qué no funcionó y por qué. Sin este módulo, el SIC-Q puede repetir el ciclo de "legislar sin implementar."

**Trazabilidad:** Temporalidad no lineal (4.4), Contexto T1 y T2 (2.3)

---

#### Hallazgo 5: La Mesa 6 de T2 es una anomalía estructuralmente significativa

**Qué es:** T2-M6 se comporta de manera distinta a todas las demás mesas en los dos talleres. Introduce actores, conceptos y niveles de especificidad que no aparecen en ningún otro grupo.

**Evidencia:**
- **Comunidad:** Únicos en nombrar ejidos, influencers, protectores de animales, artistas, personas violentadas, LGTB+, partidos políticos (47 actores — segunda mesa más rica de ambos talleres).
- **Legado:** "No hay generación de 'IA Colectiva'!" — el único participante que nombra el concepto exacto del SIC-Q. "Información actualizada en tiempo R." — la única mención de tiempo real. Proyectos de infraestructura hídrica extremadamente concretos (plantas potabilizadoras, captación de agua de lluvia, sistema de movilidad). "Incentivos fiscales al sector productivo que aporte a favor de NNA (escuelas, parques, bibliotecas)" — propuesta de política fiscal específica.
- **Contexto:** SCT y CEA aparecen SOLO en esta mesa (ver 5.2.1).
- **Legado colectivo:** "Permitir que todos los sectores hablen y entiendan el mismo idioma" — una de las formulaciones más articuladas de la conectividad intersectorial. "Política pública a largo plazo para evitar discontinuidad administrativa" — la formulación más precisa de continuidad transexenal.

**Por qué no es obvio:** Una sola mesa en un taller de 12 podría considerarse ruido estadístico. Pero T2-M6 consistentemente produce las respuestas más concretas, operativas y diversas en las 3 dimensiones. Esto sugiere que la composición de ESA mesa específica (6 personas) incluía perfiles con visión sistémica y experiencia operativa que no estaban representados en las otras 11 mesas.

**Implicación para el SIC-Q:** Lo que T2-M6 produce es lo que los talleres deberían producir cuando hay diversidad de perspectivas y experiencia operativa en la mesa. Futuros talleres deben garantizar que cada mesa tenga al menos 1-2 perfiles con esta perspectiva.

**Trazabilidad:** Comunidad T2 (2.2.2), Legado T2 (2.1.2), Contexto T2 (2.3.2), divergencia 5 (3.2), proyectos inferidos (4.2.3)

---

#### Hallazgo 6: La inclusión como discurso sin infraestructura

**Qué es:** La desigualdad/inclusión es la señal fractal más profunda de los talleres (12/12 mesas, las 3 dimensiones, ambos talleres, todas las escalas). Pero cuando se cruza el discurso de inclusión con los datos de Comunidad, se revela que no existe una infraestructura de inclusión mapeada. Los grupos que se quieren incluir no están representados como actores con agencia propia.

**Evidencia:**
- Pueblos Indígenas: mencionados en 6/12 mesas como CATEGORÍA. Ninguna organización indígena específica nombrada. Ningún líder comunitario de la Sierra nombrado.
- Personas con Discapacidad: 8/12 mesas como categoría. Ninguna organización de PcD nombrada.
- Infancias: 3-4 mesas como población. Ninguna red de primera infancia nombrada.
- Comunidades rurales: "genera oportunidades equitativas para... metropolitano, Sierra, Semidesierto" (T1-M1). Ejidos solo en T2-M6. Ninguna comunidad rural nombrada.
- LGTB+: solo en T2-M6.
- Personas violentadas: solo en T2-M6.
- Mujeres: 5/12 mesas como categoría. Secretaría de la Mujer solo en T2-M3.

**Por qué no es obvio:** El discurso de inclusión es omnipresente y sincero. Nadie en los talleres cuestionó la necesidad de incluir a estos grupos. Pero la contradicción no está en la voluntad sino en la estructura: se quiere incluir a quienes no están en la sala, no están en la red, y no tienen mecanismos para llegar. La inclusión se formula como invitación ("deberían participar") en lugar de como redistribución de poder ("ellos deberían decidir").

**Implicación para el SIC-Q:** El SIC-Q no puede resolver la inclusión por agregación (agregar más datos de más grupos). Necesita mecanismos de participación que lleguen a donde están estos grupos — no esperar a que vengan al Club de Industriales.

**Trazabilidad:** Señal fractal #1 (4.3), convergencia #1 (3.1), cruce Legado ↔ Comunidad (4.1.2), tensión implícita TI1

---

#### Hallazgo 7: El agua como señal anticipatoria

**Qué es:** El agua es el único tema que se intensifica DRAMÁTICAMENTE de T1 a T2 (de tangencial a central), que cruza todas las dimensiones, y que tiene las formulaciones más emocionalmente cargadas. Pero no tiene actores ni proyectos mapeados para abordarlo.

**Evidencia:**
- T1: mención en contexto de crecimiento vs. servicios (T1-Cx-M2). No es tema central.
- T2: "El agua." como respuesta COMPLETA a "lo que más me preocupa" (T2-M6-Legado). "Construir plantas potabilizadoras y tratadoras de agua" (T2-M6-Legado). "Sistemas o algo de captación de agua de lluvia" (T2-M6-Legado). "Recurso hídrico y energía" (T2-Cx-M4). "Escasez recursos naturales" (T2-M6-Legado colectivo).
- Actores: CEA solo en 1/12 mesas. Ningún otro actor del sector hídrico mapeado.
- Proyectos: 2 proyectos implícitos de infraestructura hídrica (4.2.3), ambos de T2-M6.

**Por qué no es obvio:** Muchos temas aparecen en los talleres. Lo que hace al agua diferente es la combinación de: (1) intensificación dramática T1→T2, (2) formulación emocional excepcional ("El agua." como respuesta completa), (3) concentración de respuestas operativas en una sola mesa (T2-M6), y (4) ausencia casi total de actores y proyectos articulados. Esto sugiere un tema en transición: de preocupación latente a urgencia emergente, sin que el ecosistema de actores haya respondido.

**Implicación para el SIC-Q:** El agua puede ser el primer "caso de uso" del SIC-Q — un tema donde la ciudadanía ya tiene urgencia, hay datos disponibles (CEA, CONAGUA), y la red de actores necesita articularse.

**Trazabilidad:** Intensificación T1→T2 (3.3), proyectos inferidos (4.2.3), actores ausentes (5.2.1), cruce Comunidad ↔ Contexto (4.1.3)

---

#### Hallazgo 8: La evolución T1→T2 como micro-modelo de aprendizaje colectivo

**Qué es:** Los dos talleres usaron la misma metodología con grupos diferentes, separados por 24 horas. Las diferencias entre T1 y T2 no son aleatorias — siguen un patrón: T2 es más granular, más operativo, más específico, y más sofisticado conceptualmente. Esto puede ser efecto de la composición de los grupos, pero también puede reflejar que el equipo de facilitación/captura se refinó de un día al otro.

**Evidencia:**
- Actores: T1 → 177 (categorías genéricas). T2 → 248 (instituciones específicas). +40%.
- Lenguaje: T1 → "Triple hélice". T2 → "Cuádruple hélice genuinamente conectada."
- Anticorrupción: T1 → "Cero impunidad" (denuncia). T2 → "Transparentar" (gestión).
- Temas nuevos en T2: agua como urgencia, salud mental, referencia directa al SIC-Q, organismos internacionales.
- OSC en Comunidad: T1 → 3/6 mesas. T2 → 6/6 mesas.

**Por qué no es obvio:** La diferencia T1→T2 podría descartarse como "grupos diferentes, resultados diferentes." Pero la dirección consistente de la diferencia (siempre hacia mayor granularidad, especificidad y sofisticación) sugiere algo más: cuando un ejercicio participativo se repite, ALGO se acumula — sea en los facilitadores, en el equipo de captura, o en la expectativa creada entre los participantes que escucharon del primer taller.

**Implicación para el SIC-Q:** El SIC-Q debería diseñar iteraciones. No un taller, sino ciclos de talleres donde cada iteración se alimente de la anterior. Los datos muestran que la calidad de las participaciones mejora con la repetición.

**Trazabilidad:** Todas las tablas comparativas T1 vs T2 (2.1.3, 2.2.3, 2.3.3), intensificaciones (3.3), evolución de la red (3.4)

---

**Tabla resumen de hallazgos no obvios:**

| # | Hallazgo | Tipo | Fuente principal |
|---|----------|------|-----------------|
| 1 | El SIC-Q fue validado sin ser preguntado | Validación espontánea | Convergencia #3, cluster L1 |
| 2 | Se mapeó quién tiene poder, no quién ejecuta | Asimetría estructural | Comunidad (2.2), cruces 4.1 |
| 3 | Las voces disruptivas se pierden en deliberación | Sesgo metodológico | Individual vs. colectivo (2.1.3) |
| 4 | El pasado es abstracto, el futuro es detallado | Sesgo temporal | Temporalidad (4.4) |
| 5 | T2-M6 es anomalía significativa | Señal débil estructural | Transcripciones T2-M6 |
| 6 | Inclusión como discurso sin infraestructura | Contradicción productiva | Señal fractal #1, cruces 4.1 |
| 7 | El agua como señal anticipatoria | Tema emergente | Intensificación (3.3) |
| 8 | T1→T2 como micro-modelo de aprendizaje | Patrón de diseño | Comparativas T1 vs T2 |

---

## PARTE VI — IMPLICACIONES

> Esta parte traduce los hallazgos en consecuencias concretas: qué le dicen estos datos al SIC-Q como sistema, qué le dicen al CONSEQRO como actor, y qué preguntas quedan abiertas.

---

### 6.1 Implicaciones para el SIC-Q como sistema

Los datos de los talleres no solo validan la necesidad del SIC-Q (Hallazgo 1) — también revelan riesgos de diseño que el sistema debe anticipar.

---

#### 6.1.1 Prioridades de diseño que emergen de los datos

| Prioridad | Fuente en los datos | Qué implica para el diseño del SIC-Q |
|-----------|--------------------|-----------------------------------------|
| **Preservar la capa individual** | Hallazgo 3: voces disruptivas se pierden en deliberación. TI5: el filtro colectivo. | El SIC-Q debe capturar y almacenar las participaciones individuales como datos brutos, no solo los colectivos consensuados. Las señales débiles y las voces "extremas" pueden ser las más anticipatorias. El sistema debe permitir consultar ambas capas por separado. |
| **Conectar actores de ejecución, no solo de poder** | Hallazgo 2: se mapeó quién tiene poder, no quién ejecuta. Actores ausentes (5.2.1). | El mapeo de Comunidad mostró que los actores operativos (telecomunicaciones, sector hídrico, construcción, organizaciones de base) están ausentes. El SIC-Q debe incorporar activamente a los actores que HACEN, no solo a los que DECIDEN. Un sistema que solo conecta al ecosistema institucional reproducirá la estructura de poder existente. |
| **Integrar memoria institucional** | Hallazgo 4: el pasado es abstracto, el futuro es detallado. Temporalidad (4.4). | Los participantes son más elocuentes imaginando futuro que procesando pasado. El SIC-Q necesita un módulo de "qué se intentó, qué no funcionó y por qué" — para evitar el ciclo "legislar sin implementar" (T1-Cx-M3). No solo datos en tiempo real sino registros de experiencias previas. |
| **Garantizar acceso territorial** | TI4: sesgo metropolitano. Brecha digital en 4/12 mesas. Internet en la Sierra (T2-Cx-M4). | Si el SIC-Q es digital, excluye automáticamente a las comunidades rurales, serranas y del semidesierto que no tienen conectividad. El sistema necesita interfaces múltiples: digital para zonas conectadas, presencial/comunitario para zonas sin conectividad. |
| **Resolver la tensión datos-ética por diseño** | TE4: datos como poder vs. riesgo. T1-M6: "nuevos pactos sociales". | Los participantes demandan datos Y temen su mal uso. El SIC-Q no puede resolver esto con una política de privacidad — necesita gobernanza de datos como pilar arquitectónico: quién accede, quién audita, qué se anonimiza, cómo se previene el uso político de la información. |
| **Diseñar iteraciones, no eventos únicos** | Hallazgo 8: T1→T2 como micro-modelo de aprendizaje. | La calidad de las participaciones mejoró de T1 a T2. El SIC-Q debe operar como sistema iterativo: ciclos de talleres donde cada iteración se alimente de la anterior, no eventos aislados. |

---

#### 6.1.2 Riesgos que el SIC-Q debe mitigar

| Riesgo | Evidencia | Mitigación sugerida |
|--------|-----------|---------------------|
| **Reproducir el sesgo institucional** | Comunidad mapeada desde la perspectiva de quién tiene poder (Hallazgo 2). 12/12 mesas incluyen gobierno y academia; 0/12 incluyen telecomunicaciones o empresas tech. | Diversificar activamente los perfiles en futuras consultas. No depender solo de auto-selección. |
| **Convertirse en herramienta del establishment** | Los participantes son mayoritariamente de contextos institucionales urbanos. La "participación ciudadana" demandada puede no incluir a quienes más la necesitan. | Diseñar mecanismos de participación que lleguen a poblaciones marginadas — no esperar a que vengan. |
| **Ignorar la brecha de ejecución** | TI3: 11 proyectos implícitos pero la red para implementarlos no está articulada. "Legislaciones NO aplicadas" (T1-Cx-M3). | El SIC-Q no solo debe informar decisiones sino rastrear implementación. Incorporar un ciclo de monitoreo. |
| **Caer en el sesgo del futuro** | Hallazgo 4: el futuro es detallado, el pasado es abstracto. | Incorporar preguntas de retrospectiva en futuras consultas: "¿qué ya se intentó?", "¿por qué no funcionó?" |
| **Depender de conectividad que no existe** | Brecha digital territorial (T1-Cx-M5, T2-Cx-M4). Internet en la Sierra es reto explícito. | Diseñar el sistema para operar con y sin internet. Modelos de captura offline/comunitario. |
| **Ser politizado o capturado** | "No politizar" como reto en 4/12 mesas de Contexto. "Anteponer temas políticos ante necesidades" (T2-Cx-M6). | Gobernanza independiente. Transparencia total del algoritmo. Datos auditables. |

---

#### 6.1.3 Caso de uso recomendado: el agua como primer piloto

El Hallazgo 7 identifica al agua como señal anticipatoria: urgencia ciudadana creciente (T1→T2), formulaciones emocionales excepcionales, proyectos concretos propuestos (plantas potabilizadoras, captación de lluvia), pero red de actores casi vacía (CEA en 1/12 mesas).

**Por qué el agua funciona como primer caso de uso del SIC-Q:**

| Criterio | Evaluación |
|----------|------------|
| Urgencia ciudadana | Alta — se intensificó dramáticamente de T1 a T2 |
| Datos existentes | CEA, CONAGUA, datos de precipitación, consumo per cápita — disponibles |
| Actores identificables | CEA, SEDESU, municipios, ejidos, industria — existen aunque no fueron mapeados |
| Conexión con CONSEQRO | CMIC (construcción) y sector industrial son miembros del Consejo — interés directo |
| Transversalidad | Cruza Legado (aspiración), Contexto (reto), Comunidad (actores), Tecnología (monitoreo), Proyectos (infraestructura) |
| Tangibilidad | Los proyectos implícitos son concretos y medibles (plantas, captación, eficiencia) |

---

### 6.2 Implicaciones para el CONSEQRO

Los datos le dicen al Consejo algo que confirma lo que ya sabe, algo que probablemente no ha visto, y algo que puede aprovechar.

---

#### 6.2.1 Lo que los datos confirman (y el CONSEQRO ya sabe)

| Lo que el CONSEQRO ya sabe | Lo que los talleres confirman con datos |
|---------------------------|----------------------------------------|
| Querétaro necesita planeación a largo plazo | Continuidad transexenal es convergencia #5 (7/12 mesas). "Política pública a largo plazo para evitar discontinuidad administrativa" (T2-M6-Legado colectivo). |
| La competitividad es diferenciador del estado | Rezago/competitividad es cluster L6, presente en 10/12 mesas. "no queremos ser el nuevo 'Celaya'" (T2-M5). |
| La colaboración público-privada funciona | Conectividad intersectorial es convergencia #2 (12/12 mesas). Triple hélice reconocida como fortaleza en ambos talleres. |
| Los datos deben informar decisiones | Convergencia #3 (11/12 mesas). "Datos duros que ayudarán a tomar mejores decisiones" (T1-M4). Validación directa del Plan Qro 2050 y del SIC-Q. |
| La seguridad es el activo más valioso | 10/12 mesas en Contexto. "Frágil y vulnerable" (T1-Cx-M1). |

---

#### 6.2.2 Lo que los datos revelan (y el CONSEQRO posiblemente no ha visto)

**Punto ciego 1: La red del Consejo es parte del problema de representatividad.**

Los talleres mapearon actores desde una perspectiva institucional — gobierno, academia, cámaras empresariales. Esta es exactamente la perspectiva del CONSEQRO. Pero las aspiraciones más profundas de los talleres (inclusión de pueblos indígenas, reducción de brecha urbano-rural, participación de comunidades marginadas) requieren actores que NO están en la órbita del Consejo: organizaciones de base comunitaria, ejidos, líderes indígenas, redes de primera infancia.

- **Dato:** Pueblos Indígenas mencionados en 6/12 mesas como categoría. Ninguna organización indígena específica nombrada. Ejidos solo en T2-M6.
- **Implicación:** Si el CONSEQRO opera el SIC-Q solo con su red actual, el sistema será de élite para la élite. La "participación ciudadana" será de 180 consejeros más sus contactos, no de los 2.3 millones de queretanos.

**Punto ciego 2: El modelo económico que el CONSEQRO celebra tiene externalidades que los ciudadanos identifican.**

El Consejo narra el crecimiento de Querétaro como éxito (IED per cápita, hub aeroespacial, data centers). Los talleres narran el mismo crecimiento como fuente de desigualdad.

- **Dato:** "Crecimiento con una desigualdad muy marcada" (T1-Cx-M3). "Crecimiento que sobrepasó la planeación estratégica" (T1-Cx-M3). TI6: el modelo de crecimiento como causa y solución.
- **Implicación:** El Plan Qro 2050 debe integrar explícitamente las externalidades del crecimiento, no solo sus beneficios. De lo contrario, la ciudadanía percibirá una desconexión entre el discurso del Consejo y su realidad.

**Punto ciego 3: Los actores que el CONSEQRO conoce no son los que ejecutan lo que la ciudadanía pide.**

Las cámaras empresariales están en 9/12 mesas. Pero las telecomunicaciones (necesarias para cerrar la brecha digital), el sector hídrico (necesario para la urgencia del agua), y las organizaciones de base (necesarias para la inclusión) están ausentes.

- **Dato:** 0/12 mesas mencionan empresas de telecomunicaciones. 0/12 mencionan empresas tecnológicas. CEA en 1/12.
- **Implicación:** El CONSEQRO debería ampliar su red de alianzas estratégicas hacia actores operativos, no solo institucionales. La CMIC (construcción) ya es miembro del Consejo — el puente hacia infraestructura hídrica y de conectividad ya existe organizativamente.

**Punto ciego 4: La cultura y el patrimonio están ausentes del diagnóstico ciudadano.**

Querétaro es Patrimonio de la Humanidad. El CONSEQRO tiene ejes culturales en el Plan 2050. Pero los talleres produjeron solo 2 menciones tangenciales sobre cultura y patrimonio en 778 participaciones.

- **Dato:** "Riqueza cultural" (T2-Cx-M1). "Pérdida de saberes, culturas, prácticas" (T1-M1-Legado). 2 menciones en 778 participaciones.
- **Implicación:** O la ciudadanía no percibe la cultura como prioridad frente a agua, seguridad y desigualdad, o el diseño del taller no facilitó esa dimensión. Futuros ejercicios deberían explorar si esto es un punto ciego ciudadano o un efecto del instrumento.

---

#### 6.2.3 Lo que el CONSEQRO puede aprovechar

| Oportunidad | Base en los datos | Acción sugerida |
|------------|-------------------|-----------------|
| **El SIC-Q tiene validación ciudadana espontánea** | Hallazgo 1: la demanda de un sistema de datos existía antes de que se propusiera la solución. 11/12 mesas lo piden sin que se les pregunte. | Usar este dato en la comunicación del SIC-Q al Consejo: "no lo estamos inventando, la ciudadanía ya lo pidió." |
| **La seguridad como narrativa unificadora** | Convergencia #4: 10/12 mesas. Es fortaleza Y preocupación. | Posicionar al SIC-Q como herramienta para MONITOREAR y ANTICIPAR riesgos de seguridad — esto habla directamente al interés del CONSEQRO en "certidumbre para la inversión." |
| **T2-M6 como modelo de participación efectiva** | Hallazgo 5: una mesa con diversidad de perfiles produce resultados excepcionales. | Diseñar futuras mesas del SIC-Q con composición deliberada: al menos 1-2 perfiles con experiencia operativa por mesa. La diversidad no es decorativa — produce mejores datos. |
| **El agua como primer piloto tangible** | Hallazgo 7 + 6.1.3. Urgencia + datos disponibles + actores identificables + conexión con CMIC. | Proponer al CONSEQRO un piloto del SIC-Q centrado en recurso hídrico. Es concreto, medible, y relevante para todos los sectores que el Consejo representa. |
| **La iteración como ventaja competitiva** | Hallazgo 8: la calidad mejoró de T1 a T2. | Proponer ciclos de talleres, no eventos únicos. Cada iteración produce mejores datos. Esto resuena con la mentalidad del CONSEQRO de "mejora continua" empresarial. |

---

### 6.3 Preguntas abiertas

Los datos plantean preguntas que no pueden responderse con la información de estos dos talleres. Son agenda para futuras iteraciones del SIC-Q.

---

#### 6.3.1 Preguntas sobre representatividad

| Pregunta | Por qué importa | Dato que la genera |
|----------|-----------------|-------------------|
| ¿Qué dirían los participantes si los talleres se hicieran en la Sierra Gorda, en Amealco, en el Semidesierto? | Las voces rurales están representadas por proxy (alguien urbano que piensa en ellas). La perspectiva directa podría cambiar radicalmente las prioridades. | TI4: sesgo metropolitano. Actores rurales prácticamente ausentes de Comunidad. |
| ¿Qué dirían los jóvenes menores de 25 años? | Jóvenes aparecen en 7/12 mesas como actor SOBRE el que se habla, pero no como participantes directos en un ejercicio diseñado para adultos de 30-65 años. | Listas de asistencia: perfil predominantemente adulto. Jóvenes como actor hub pero no como voz propia. |
| ¿Las personas con discapacidad estuvieron en los talleres? | PcD es el grupo poblacional más mencionado (8/12 mesas) pero no hay evidencia de que participaran directamente. | Comunidad (2.2): PcD como categoría mapeada, no como participante. |
| ¿Qué pasa cuando se incluyen actores del sector tecnológico? | 0/12 mesas mapearon empresas tech, pero Querétaro tiene un ecosistema TIC creciente (data centers, startups). | Actores ausentes (5.2.1). |

---

#### 6.3.2 Preguntas sobre la relación entre talleres y Plan Qro 2050

| Pregunta | Por qué importa |
|----------|-----------------|
| ¿Cuántos de los 7 ejes del Plan Qro 2050 están representados en los datos de los talleres? ¿Cuáles no? | Permitiría evaluar si la voz ciudadana de los talleres es consistente con las 400,000 participaciones del Plan — o si revela prioridades diferentes. |
| ¿Los actores mapeados en Comunidad corresponden con los actores del ecosistema CONSEQRO? | Si hay alta coincidencia, el SIC-Q está validando la red existente. Si hay divergencia, está revelando actores que el Consejo no tiene en su radar. |
| ¿El tono de los talleres (urgencia, miedo, aspiración) coincide con el tono del Plan 2050? | El Plan es un documento institucional. Los talleres capturan emociones crudas. Comparar ambos revelaría si hay disonancia entre el discurso oficial y el sentir ciudadano. |

---

#### 6.3.3 Preguntas sobre el SIC-Q como sistema

| Pregunta | Por qué importa |
|----------|-----------------|
| ¿Cómo captura el SIC-Q las voces individuales sin que se pierdan en el filtro colectivo? | Hallazgo 3 muestra que la deliberación grupal elimina las voces más disruptivas. El diseño del sistema debe resolver esto. |
| ¿Qué mecanismo de gobernanza de datos satisface la doble demanda (sistema robusto + uso ético)? | TE4: la ciudadanía quiere datos Y teme su mal uso. No es un problema técnico sino de diseño institucional. |
| ¿Cómo opera el SIC-Q en zonas sin conectividad? | La brecha digital territorial (4/12 mesas) es real. Un sistema solo digital es un sistema excluyente. |
| ¿Qué pasaría si el SIC-Q procesa no solo participaciones nuevas sino los datos históricos del Plan Qro 2050? | 400,000 participaciones ya existen. Cruzarlas con las 778 de los talleres podría revelar consistencias y divergencias a escala. |
| ¿Cómo evita el SIC-Q ser capturado políticamente entre cambios de gobierno? | "No politizar" es reto en 4/12 mesas. La continuidad transexenal es aspiración pero la politización es riesgo real. |

---

#### 6.3.4 Preguntas sobre las dimensiones ausentes

| Pregunta | Dimensión HA | Por qué importa |
|----------|-------------|-----------------|
| ¿Qué competencias específicas necesita desarrollar la ciudadanía queretana para participar efectivamente en el SIC-Q? | Aprendizaje | Es la dimensión más débilmente representada (5.2.3). "Capacitación" y "educación" se mencionan en abstracto — falta el QUÉ y el CÓMO. |
| ¿Cuál es la infraestructura tecnológica real de Querétaro vs. la aspirada? | Tecnología | Los talleres aspiran a IA en tiempo real pero el Contexto revela brecha digital. ¿Cuál es la línea base real? |
| ¿Cuáles de los 11 proyectos implícitos (4.2.3) son viables con la red de actores existente? | Proyectos | Los proyectos emergieron espontáneamente pero ninguno tiene evaluación de factibilidad. |

---

### Nota final para el agente

Este documento contiene 778 participaciones procesadas, 12 insights transversales, 7 convergencias, 6 divergencias, 11 tensiones estructurales, 10 actores ausentes, 7 temas ausentes, 8 hallazgos no obvios, y 14 preguntas abiertas.

**Reglas para el agente al responder preguntas del CONSEQRO:**

1. **Trazabilidad siempre.** Cada afirmación debe citar fuente: Taller X, Mesa Y, Dimensión Z. Si no tiene fuente en este documento, no la afirmes.
2. **Distinguir niveles de análisis.** Parte II = datos directos (lo que dijeron). Partes III-IV = análisis cruzado (lo que se observa al cruzar). Parte V = hallazgos inferenciales (lo que emerge de leer entre líneas). Parte VI = implicaciones (lo que los datos sugieren hacer). Cada nivel tiene distinto grado de certeza.
3. **Distinguir dimensiones trabajadas de inferidas.** Legado, Comunidad y Contexto fueron trabajadas directamente. Aprendizaje, Tecnología y Proyectos son inferencias. Siempre aclarar esta diferencia.
4. **No suavizar tensiones.** Las tensiones (5.1) no son problemas a resolver — son la complejidad real. Presentarlas como tales.
5. **No inventar.** Si un consejero pregunta algo que los datos no cubren, decir "los datos de los talleres no abordan directamente esa pregunta" y referir a las preguntas abiertas (6.3).
6. **Usar el perfil del CONSEQRO.** Los consejeros procesan información de forma ejecutiva: datos primero, contexto después, implicación práctica al final. Responder en ese orden.
7. **Las ausencias son datos.** Lo que NO se dijo es tan informativo como lo que sí se dijo. Los puntos ciegos (5.2) y los actores ausentes (5.2.1) son hallazgos, no vacíos.

---

*Documento generado: 18 de febrero de 2026*
*Fuente: 36 transcripciones de mesa + 6 análisis dimensionales + 2 archivos de insights + 2 listas de asistencia + 2 transcripciones completas de talleres*
*Marco analítico: Horizons Architecture (HA)*
*Talleres: Proceso de Diseño Participativo del SIC-Q, Actividad 1*
