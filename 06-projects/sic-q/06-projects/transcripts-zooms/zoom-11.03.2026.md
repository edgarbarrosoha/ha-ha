# Hallazgos y acuerdos -- Zoom 11 de marzo de 2026

**Fecha:** 11 de marzo de 2026, 21:00 hrs (hora de Edgar Barroso)
**Participantes:** Edgar Barroso, Edgar Mohar, Antonio Rangel (Tono), Sergio Ibarra
**Contexto:** Reunion preparatoria para la presentacion del SIC-Q (Sistema de Inteligencia Colectiva de Queretaro) al Secretario de Finanzas Gustavo Leal, programada para el viernes 14 de marzo a la 1:00 PM.

---

## Hallazgos clave

### 1. Prototipo funcional del SIC-Q ya operativo

- El equipo tecnico (Edgar Barroso / HA) construyo un prototipo funcional entre el 10 y 11 de marzo.
- Ya incluye: chat con seleccion de modelo (Claude, GPT, Gemini), conexion a Internet configurable, base de conocimiento con todas las leyes estatales de Queretaro cargadas, geolocalizacion de entidades, fichas tematicas comparativas entre municipios.
- Tiene 4 agentes funcionando: investigacion, analisis, produccion y validacion. Un sistema maduro podria tener 20-30 agentes.
- El sistema avisa cuando responde con datos curados internos vs. datos obtenidos de Internet, lo cual genera transparencia y confianza.

### 2. Caso de uso validado en vivo: analisis legal-presupuestal

- Se probo en tiempo real la pregunta del gobernador sobre que pasa si el Congreso no aprueba el presupuesto.
- El sistema genero 5 escenarios juridicos detallados (reconduccion presupuestal, negociacion politica, controversia constitucional, aprobacion parcial, paralisis institucional), citando articulos constitucionales y leyes aplicables.
- Incluyo recomendaciones operativas especificas para la Secretaria de Planeacion.
- Tono califico la respuesta como "bastante interesante" y valida para el tipo de consultas que hace el gobernador.

### 3. Diferenciador central del SIC-Q: integracion holistica de informacion dispersa

- El problema principal del gobierno es la informacion completamente dispersa en silos, con formatos distintos y calidad variable.
- El valor unico del SIC-Q no es ser un chatbot ni un portal de consulta a una sola base de datos, sino la capacidad de agregar informacion de multiples fuentes (bases de datos gubernamentales, leyes, medios, datos electorales, programas sociales) y presentarla de forma integrada.
- Tono lo resumio: "Necesitamos transitar de discursos sectorizados a que el gobernador hable de manera holistica sobre lo que esta haciendo en un lugar."

### 4. Presion competitiva: otros esfuerzos de IA en la administracion

- Sergio advirtio que hay otras iniciativas de IA en la administracion estatal (ej. bots de atencion al publico en la CEA), lo que genera presion para posicionar al SIC-Q como algo cualitativamente distinto: un cerebro maestro que conecta datos aislados, no un bot de servicio.

### 5. Casos de uso prioritarios identificados (perspectiva del gobernador)

Los participantes identificaron los siguientes bloques de casos de uso pensados desde las actividades cotidianas del gobernador:

- **Reuniones con actores clave:** Ficha ejecutiva automatica al poner un nombre. Cruza bases de datos gubernamentales (programas sociales, impuestos, procesos judiciales), historial de acuerdos previos, declaraciones en medios, perfil general.
- **Analisis legal y constitucional:** Consultas sobre marco normativo, escenarios juridicos, facultades del Congreso, nombramientos con votacion calificada y sus fechas limite.
- **Analisis electoral:** Resultados historicos por distrito, bloques de paridad, calendarios electorales (local y federal), comparativos de desempeno de candidatos, reforma electoral federal.
- **Monitoreo de medios:** Analisis de cobertura por actor politico (positiva, neutra, negativa), comparativos entre figuras publicas, tendencias mediaticas por periodo.
- **Giras y visitas a municipios:** Al ingresar un municipio, desplegar menu con opciones: cobertura de servicios, beneficiarios de programas, temas mediaticos locales, obras en curso, actores clave locales, inversion acumulada.
- **Gestion gubernamental:** Indicadores clave por secretaria, avance de programas, compromisos de gabinete, alertas de desfase.
- **Discursos y narrativa:** Generacion de lineas discursivas alineadas con la narrativa del gobierno, alimentada por la informacion del SIC-Q.

### 6. Modelo de alimentacion de datos propuesto

- Tono propuso que las 70 cabezas clave del gobierno alimenten el sistema con informacion categorizada: geografica-estadistica, historica e informacion de la administracion actual.
- Cada secretario subiria datos de su ambito (infraestructura, beneficiarios, obras, indicadores).
- Esto permitiria responder la pregunta tipica del gobernador: "Que hemos hecho en [municipio]?" con una vision transversal.

### 7. Perfiles y permisos diferenciados

- Se planteo que el gobernador tenga su propio perfil, pero que el particular (asistente personal) tambien tenga acceso con permisos para consultar lo mismo y ademas subir informacion.
- Se pueden crear perfiles para los 12 actores mas cercanos sin problema tecnico.

### 8. Menu de navegacion para el usuario

- Tono y Mohar coincidieron en que el sistema debe ofrecer un menu guiado (no limitativo) con las 10 opciones mas relevantes segun el contexto (municipio, persona, programa), para que el usuario no tenga que imaginar que preguntar.
- El menu seria una puerta de entrada, pero el chat abierto siempre estaria disponible.

---

## Acuerdos

| # | Acuerdo | Responsable | Plazo |
|---|---------|-------------|-------|
| 1 | Presentacion al Secretario de Finanzas (Gustavo Leal). Exponen Edgar Barroso y Tono Rangel. Asisten tambien Edgar Mohar y Sergio Ibarra. | Edgar Barroso, Tono Rangel | Viernes 14 de marzo, 1:00 PM |
| 2 | Preparar presentacion ejecutiva (5-6 slides) basada en el documento largo ya enviado, version reducida para Gustavo. Se espera saltar rapido al demo del prototipo. | Edgar Barroso | Jueves 13 de marzo (para tener lista antes del viernes) |
| 3 | Edgar Mohar revisa el documento largo y envia comentarios para que Edgar Barroso ajuste la presentacion. | Edgar Mohar | Martes 11 de marzo (en la noche, al llegar a destino) / Miercoles 12 |
| 4 | Edgar Mohar envia a Edgar Barroso 2 casos de uso adicionales para evaluar viabilidad tecnica e incluir en la demo. | Edgar Mohar | Antes del viernes 14 |
| 5 | Tono Rangel contacta a Alfredo Flores para que comparta bases de datos electorales. Tono ya le envio mensaje con el contacto de Edgar Mohar. | Tono Rangel | Inmediato (ya realizado en la llamada) |
| 6 | Edgar Mohar contacta a Alfredo Flores para pedirle una base de datos electoral completa de al menos un municipio como caso de uso concreto. | Edgar Mohar | Antes del viernes 14 |
| 7 | Subir la narrativa del gobierno al SIC-Q para que los discursos y respuestas se alineen con ella. | Por definir | Sin fecha especifica (prioridad identificada) |
| 8 | Resolver el acceso a datos de programas sociales (tarjeta Contigo). Pendiente firma de NDA y clarificacion de la relacion formal con el equipo de datos. Sergio Ibarra lo hablaria con el Secretario. | Sergio Ibarra | Pendiente de seguimiento |
| 9 | Conexion con bases de datos de Salud: acceso programado para el 11-12 de marzo; otra base de datos con agente conectado para el martes siguiente. | Edgar Barroso / equipo tecnico | 11-12 de marzo (en curso) |
| 10 | Iterar sobre el prototipo: seguir metiendo datos, probando casos de uso, agregando y quitando funcionalidades, todo pensado en el gobernador y su staff. | Todos | Continuo |
