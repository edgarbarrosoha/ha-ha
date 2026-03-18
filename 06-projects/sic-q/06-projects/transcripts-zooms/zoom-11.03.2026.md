# Hallazgos y acuerdos -- Zoom 11 de marzo de 2026

**Fecha:** 11 de marzo de 2026, 21:00 hrs (hora de Edgar Barroso)
**Participantes:** Edgar Barroso, Edgar Mohar, Antonio Rangel (Tono), Sergio Ibarra
**Contexto:** Reunión preparatoria para la presentación del SIC-Q (Sistema de Inteligencia Colectiva de Querétaro) al Secretario de Finanzas Gustavo Leal, programada para el viernes 14 de marzo a la 1:00 PM.

---

## Hallazgos clave

### 1. Prototipo funcional del SIC-Q ya operativo

- El equipo técnico (Edgar Barroso / HA) construyó un prototipo funcional entre el 10 y 11 de marzo.
- Ya incluye: chat con selección de modelo (Claude, GPT, Gemini), conexión a Internet configurable, base de conocimiento con todas las leyes estatales de Querétaro cargadas, geolocalización de entidades, fichas temáticas comparativas entre municipios.
- Tiene 4 agentes funcionando: investigación, análisis, producción y validación. Un sistema maduro podría tener 20-30 agentes.
- El sistema avisa cuando responde con datos curados internos vs. datos obtenidos de Internet, lo cual genera transparencia y confianza.

### 2. Caso de uso validado en vivo: análisis legal-presupuestal

- Se probó en tiempo real la pregunta del gobernador sobre qué pasa si el Congreso no aprueba el presupuesto.
- El sistema generó 5 escenarios jurídicos detallados (reconducción presupuestal, negociación política, controversia constitucional, aprobación parcial, parálisis institucional), citando artículos constitucionales y leyes aplicables.
- Incluyó recomendaciones operativas específicas para la Secretaría de Planeación.
- Tono calificó la respuesta como "bastante interesante" y válida para el tipo de consultas que hace el gobernador.

### 3. Diferenciador central del SIC-Q: integración holística de información dispersa

- El problema principal del gobierno es la información completamente dispersa en silos, con formatos distintos y calidad variable.
- El valor único del SIC-Q no es ser un chatbot ni un portal de consulta a una sola base de datos, sino la capacidad de agregar información de múltiples fuentes (bases de datos gubernamentales, leyes, medios, datos electorales, programas sociales) y presentarla de forma integrada.
- Tono lo resumió: "Necesitamos transitar de discursos sectorizados a que el gobernador hable de manera holística sobre lo que está haciendo en un lugar."

### 4. Presión competitiva: otros esfuerzos de IA en la administración

- Sergio advirtió que hay otras iniciativas de IA en la administración estatal (ej. bots de atención al público en la CEA), lo que genera presión para posicionar al SIC-Q como algo cualitativamente distinto: un cerebro maestro que conecta datos aislados, no un bot de servicio.

### 5. Casos de uso prioritarios identificados (perspectiva del gobernador)

Los participantes identificaron los siguientes bloques de casos de uso pensados desde las actividades cotidianas del gobernador:

- **Reuniones con actores clave:** Ficha ejecutiva automática al poner un nombre. Cruza bases de datos gubernamentales (programas sociales, impuestos, procesos judiciales), historial de acuerdos previos, declaraciones en medios, perfil general.
- **Análisis legal y constitucional:** Consultas sobre marco normativo, escenarios jurídicos, facultades del Congreso, nombramientos con votación calificada y sus fechas límite.
- **Análisis electoral:** Resultados históricos por distrito, bloques de paridad, calendarios electorales (local y federal), comparativos de desempeño de candidatos, reforma electoral federal.
- **Monitoreo de medios:** Análisis de cobertura por actor político (positiva, neutra, negativa), comparativos entre figuras públicas, tendencias mediáticas por período.
- **Giras y visitas a municipios:** Al ingresar un municipio, desplegar menú con opciones: cobertura de servicios, beneficiarios de programas, temas mediáticos locales, obras en curso, actores clave locales, inversión acumulada.
- **Gestión gubernamental:** Indicadores clave por secretaría, avance de programas, compromisos de gabinete, alertas de desfase.
- **Discursos y narrativa:** Generación de líneas discursivas alineadas con la narrativa del gobierno, alimentada por la información del SIC-Q.

### 6. Modelo de alimentación de datos propuesto

- Tono propuso que las 70 cabezas clave del gobierno alimenten el sistema con información categorizada: geográfica-estadística, histórica e información de la administración actual.
- Cada secretario subiría datos de su ámbito (infraestructura, beneficiarios, obras, indicadores).
- Esto permitiría responder la pregunta típica del gobernador: "Qué hemos hecho en [municipio]?" con una visión transversal.

### 7. Perfiles y permisos diferenciados

- Se planteó que el gobernador tenga su propio perfil, pero que el particular (asistente personal) también tenga acceso con permisos para consultar lo mismo y además subir información.
- Se pueden crear perfiles para los 12 actores más cercanos sin problema técnico.

### 8. Menú de navegación para el usuario

- Tono y Mohar coincidieron en que el sistema debe ofrecer un menú guiado (no limitativo) con las 10 opciones más relevantes según el contexto (municipio, persona, programa), para que el usuario no tenga que imaginar qué preguntar.
- El menú sería una puerta de entrada, pero el chat abierto siempre estaría disponible.

---

## Acuerdos

| # | Acuerdo | Responsable | Plazo |
|---|---------|-------------|-------|
| 1 | Presentación al Secretario de Finanzas (Gustavo Leal). Exponen Edgar Barroso y Tono Rangel. Asisten también Edgar Mohar y Sergio Ibarra. | Edgar Barroso, Tono Rangel | Viernes 14 de marzo, 1:00 PM |
| 2 | Preparar presentación ejecutiva (5-6 slides) basada en el documento largo ya enviado, versión reducida para Gustavo. Se espera saltar rápido al demo del prototipo. | Edgar Barroso | Jueves 13 de marzo (para tener lista antes del viernes) |
| 3 | Edgar Mohar revisa el documento largo y envía comentarios para que Edgar Barroso ajuste la presentación. | Edgar Mohar | Martes 11 de marzo (en la noche, al llegar a destino) / Miércoles 12 |
| 4 | Edgar Mohar envía a Edgar Barroso 2 casos de uso adicionales para evaluar viabilidad técnica e incluir en la demo. | Edgar Mohar | Antes del viernes 14 |
| 5 | Tono Rangel contacta a Alfredo Flores para que comparta bases de datos electorales. Tono ya le envió mensaje con el contacto de Edgar Mohar. | Tono Rangel | Inmediato (ya realizado en la llamada) |
| 6 | Edgar Mohar contacta a Alfredo Flores para pedirle una base de datos electoral completa de al menos un municipio como caso de uso concreto. | Edgar Mohar | Antes del viernes 14 |
| 7 | Subir la narrativa del gobierno al SIC-Q para que los discursos y respuestas se alineen con ella. | Por definir | Sin fecha específica (prioridad identificada) |
| 8 | Resolver el acceso a datos de programas sociales (tarjeta Contigo). Pendiente firma de NDA y clarificación de la relación formal con el equipo de datos. Sergio Ibarra lo hablaría con el Secretario. | Sergio Ibarra | Pendiente de seguimiento |
| 9 | Conexión con bases de datos de Salud: acceso programado para el 11-12 de marzo; otra base de datos con agente conectado para el martes siguiente. | Edgar Barroso / equipo técnico | 11-12 de marzo (en curso) |
| 10 | Iterar sobre el prototipo: seguir metiendo datos, probando casos de uso, agregando y quitando funcionalidades, todo pensado en el gobernador y su staff. | Todos | Continuo |
