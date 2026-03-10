# Metodología: Demo para Toño — Agente SIC-Q

**Versión:** 2.0 | **Fecha:** Marzo 2026
**Facilitadores:** Edgar Barroso, Edgar Mohar

---

## Objetivo

Demostrar a Antonio Rangel (y después al Gobernador) el valor del agente SIC-Q a través de **casos de uso concretos** y **productos tangibles**, usando 3 temas estratégicos como vehículo: salud, educación y agua/CEA.

Salir de la demo con:
- Validación de qué casos de uso le son útiles
- Priorización de productos
- Retroalimentación para ajustar la interfaz y las bases de conocimiento

---

## Marco conceptual: Casos de uso → Productos

(Framework propuesto por Edgar Mohar)

El agente no es un chatbot ni un buscador. Es un sistema de inteligencia colectiva diseñado para vivir en el teléfono del usuario. Su valor se estructura en dos niveles:

1. **Casos de uso** — para qué lo usa el funcionario
2. **Productos** — qué le entrega el sistema en cada caso

### Casos de uso

| # | Caso de uso | Descripción | Ejemplo con leyes de QRO |
|---|-------------|-------------|--------------------------|
| 1 | **Consulta de datos** | Chatear con el sistema para consultar un dato específico, confirmar información, indagar sobre una idea. Como conversar con ChatGPT pero con datos de la base de conocimiento del estado | "¿Qué dice la Ley de Planeación sobre la frecuencia de evaluación del PED? ¿Qué secretarías están atrasadas?" |
| 2 | **Fichas informativas** | Pedirle al sistema un producto concreto: ficha para una gira, ficha de una persona (tipo CRM — "recuérdame quién es este cuate, qué temas traigo con él"), ficha de contexto para una reunión. Puede tener 5+ subproductos | "Ficha para reunión del Consejo de Salud: acuerdos pendientes + Art. 12 Ley de Salud (obligaciones del Comité) + datos de desabasto" |
| 3 | **Síntesis informativa** | Resúmenes ejecutivos que cruzan múltiples fuentes: prensa + datos duros + voz ciudadana + compromisos pendientes sobre un tema | "Síntesis agua: quejas ciudadanas + estado de infraestructura CEA + obligaciones del Art. 5 Ley de Agua Potable (servicio continuo)" |
| 4 | **Consulta jurídica / normativa** | Cruce de propuestas o decisiones con marco legal vigente, planes sectoriales, PED | "¿La Ley de Participación Ciudadana permite presupuesto participativo en temas de educación? ¿Qué mecanismos aplican?" |
| 5 | **Productos innovadores** | Cosas que hoy no existen porque no existía la herramienta — no es mejorar un producto actual, sino crear uno nuevo para un caso de uso que hoy no se da | "Alerta: 4 observatorios ciudadanos no han reportado — la Ley de Participación Ciudadana requiere informe semestral. Faltan 3 semanas." |

**Nota:** Los 5 casos de uso base son los mismos para Toño y el Gobernador, con variantes menores. Sergio comparte los mismos 5 y agrega un sexto: **control de cambios** (específico para la actualización del Plan QRO 2050). Los productos sí tienen variantes más sensibles según el rol.

### Alcance progresivo de las bases de conocimiento

El sistema **no arranca cruzando todos los datos del estado**. Empieza con un conjunto acotado de fuentes y crece conforme se valida y se incorporan nuevas bases de conocimiento.

| Fase | Datos disponibles | Qué puede hacer el sistema |
|------|-------------------|---------------------------|
| **Arranque (demo)** | 3 temas (salud, educación, agua) + leyes del estado + voz ciudadana de talleres | Consultas, fichas y síntesis sobre los 3 temas. Cruce con marco legal. |
| **Primer trimestre** | + datos de INEGI, CONAPO, PED + prensa + bases de secretarías involucradas | Síntesis más completas, fichas de gira con datos duros, alertas de disonancia |
| **Segundo trimestre** | + bases de conocimiento por secretaría + comparativos inter-estatales + CRM | Monitor de consejos, tablero PED, fichas de persona, briefing matutino completo |
| **Escala** | + todas las secretarías + canales ciudadanos activos | Sistema completo con todos los casos de uso operando a profundidad |

**El valor se demuestra desde el arranque con los 3 temas.** Cada fuente que se agrega hace el sistema más útil — pero no necesita tenerlo todo para empezar a funcionar.

### Productos posibles (primera propuesta — para validación con Toño)

| Producto | Descripción | Ejemplo con marco legal | Caso de uso |
|----------|-------------|------------------------|-------------|
| Briefing diario | Resumen matutino: agenda + compromisos que vencen + alertas del día | "Hoy Consejo de Participación. Art. 24 Ley de Participación Ciudadana: quórum mínimo 60%. Última sesión: 65% asistencia, 3 ausentes." | Síntesis informativa |
| Ficha de gira | Contexto del lugar, datos clave del municipio, pendientes, actores | "San Juan del Río: 180 propuestas ciudadanas (agua 34%). Ley Orgánica Municipal: municipio obligado a Plan de Desarrollo Urbano — vence en 4 meses." | Fichas informativas |
| Ficha de persona (CRM) | Quién es, historial de interacciones, temas pendientes, relaciones | "Dir. CEA: última reunión 15 feb, tema: fugas en Olvera. Pendiente: plan de contingencia (Art. 23 Ley de Agua Potable, plazo 48 hrs)." | Fichas informativas |
| Monitor de consejos | Acuerdos pendientes, asistencia, datos nuevos antes de cada sesión | "Consejo de Salud: acuerdo de ampliación salud mental zona sur — 4 meses sin avance. Art. 12 Ley de Salud: Comité debe reportar trimestralmente." | Síntesis informativa |
| Tablero de avance PED | Estado de los 65 retos, desviaciones, alertas por secretaría | "Eje 3: 12/20 indicadores en verde. Desarrollo Urbano: 4 indicadores sin reporte (Art. 45 Ley de Planeación: obligación trimestral)." | Consulta de datos |
| Síntesis de participación ciudadana | Demandas clasificadas por tema, zona, frecuencia | "Agua: 300% aumento quejas en Corregidora. Ley de Participación Ciudadana prevé mecanismo de diálogo ciudadano (Art. 8) — no se ha activado." | Síntesis informativa |
| Alerta de disonancia | Brecha entre narrativa oficial y percepción ciudadana detectada automáticamente | "Prensa: programa vivienda avanza. Ciudadanía: 62% insatisfecha. Ley de Transparencia: datos de avance deben ser públicos." | Productos innovadores |

---

## Los 3 temas para la demo

Acordados entre Sergio y Toño. Sergio propuso salud y agua/CEA; Toño propuso educación. Suficiente información de carácter estratégico para medir el pulso del estado.

| Tema | Propuesto por | Marco legal relevante | Fuente de datos | Responsable datos |
|------|--------------|----------------------|----------------|-------------------|
| **Salud** | Sergio (Toño aceptó) | Ley de Salud del Estado de QRO, Plan Querétaro 2050 (eje bienestar) | Reunión con Javier (datos de salud) — 10 mar | HA + Javier |
| **Educación** | Toño | Ley de Educación del Estado de QRO, PED indicadores educativos | Reunión pendiente con Secretaría de Educación | Daniel / HA |
| **Agua / CEA** | Sergio | Ley de Agua Potable, Alcantarillado y Saneamiento del Estado de QRO, Código Urbano | Tema urgente ciudadano (fugas, infraestructura vieja, abasto) | Sergio / HA |

Para cada tema, la demo muestra: consulta de dato → ficha informativa → síntesis → cruce con marco legal → un producto innovador.

**Nota importante:** La demo arranca con los datos disponibles hoy — leyes del estado, voz ciudadana de los talleres, datos públicos (INEGI, CONAPO). No pretende cruzar toda la información del estado desde el día uno. Conforme se incorporen datos de cada secretaría, el sistema se enriquece y genera cruces más profundos.

---

## Diseño de interfaz (concepto)

Basado en la propuesta de Edgar Mohar:

- **Desktop + phone** — Toño opera desde ambos: escritorio para seguimiento de consejos y PED, teléfono para consultas rápidas y fichas antes de reuniones
- **Menú de entrada** — al abrir: "¿Qué quieres hoy? Una ficha, una síntesis, una consulta..." o escribir directo al chat
- **Bases de conocimiento toggleables** — prender/apagar repositorios de conocimiento para concentrarse en un tema específico (ej: solo salud, solo agua, solo legal)
- **Permisos por rol** — versiones independientes del mismo sistema: SIC-Gobernador, SIC-Toño, SIC-Sergio. Cada uno con acceso diferenciado a información según su nivel

---

## Estructura de la sesión con Toño

**Duración:** 30–40 minutos
**Formato:** Demostración en vivo + validación

### 1. Encuadre (3 min)

> "Toño, te vamos a mostrar cómo funciona el sistema con 3 temas concretos: salud, educación y agua. Arrancamos con estos porque ya tenemos datos suficientes — leyes cargadas, voz ciudadana de los talleres, datos de INEGI. Conforme se incorporen más fuentes y más secretarías, el sistema va creciendo. Para cada tema vas a ver qué tipo de cosas puede hacer por ti. Al final, nos dices qué te sirve, qué no, y qué te falta."

### 2. Demo por casos de uso (20 min)

Para cada uno de los 3 temas, mostrar en vivo:

**a) Consulta de datos** — preguntarle algo concreto al agente
- Salud: "¿Qué hospitales tienen desabasto de medicamentos esta semana?"
- Educación: "¿Cuál es la tasa de deserción en preparatoria en los últimos 3 años?"
- Agua: "¿Cuántas fugas mayores se han reportado en el último mes por municipio?"

**b) Fichas informativas** — pedirle un producto concreto
- "Hazme una ficha para mi reunión con el secretario de salud mañana" → incluye acuerdos del Consejo + obligaciones del Art. 12 Ley de Salud
- "Ficha de contexto: CEA — situación actual del agua en zona metropolitana" → incluye obligaciones de la Ley de Agua Potable

**c) Síntesis informativa** — cruce de fuentes
- "¿Qué dice la ciudadanía sobre educación vs. lo que reporta la secretaría?" → cruza datos INEGI + voz ciudadana + prensa + PED + Ley de Educación
- "Dame el estado del agua cruzado con marco legal" → quejas ciudadanas + datos CEA + Art. 5 Ley de Agua Potable (obligación de servicio continuo)

**d) Consulta jurídica** — cruce con leyes del estado
- "¿Qué mecanismos de la Ley de Participación Ciudadana puedo activar para el tema de agua?"
- "¿Los observatorios ciudadanos han cumplido con su informe semestral?"

**e) Producto innovador** — algo que hoy no existe
- Alerta automática: "La ciudadanía reporta problemas de agua en 3 colonias donde la CEA dice que no hay incidentes. Art. 23 Ley de Agua Potable: plazo de 48 hrs para plan de contingencia — no se ha emitido."

### 3. Validación (10 min)

Tres preguntas:

1. **¿Cuáles de estos casos de uso te servirían en tu día a día?** (ordenar de más a menos útil)
2. **¿Qué productos te llevarías mañana si pudiera?**
3. **¿Hay algo que necesites que no vimos?**

### 4. Cierre (2 min)

> "Con esto ajustamos el sistema para tu perfil. La siguiente vez que lo veas, ya está configurado con tus prioridades."

---

## Preparación para presentación a Finanzas

Toño necesita presentar al Secretario de Finanzas (Gustavo León) y al Jefe de Gabinete. Reunión jueves o viernes de esta semana (Toño confirma fecha exacta). Edgar Mohar sugiere empujar al viernes para incluir lámina de casos de uso.

**Reunión de preparación:** miércoles 11 mar, 2:00 PM (HA + Toño + Sergio + Edgar Mohar)

La presentación debe incluir:

1. **Qué es el SIC** — no es un chatbot, es un sistema de inteligencia colectiva para servidores públicos
2. **Relatoría del proyecto** — desde la decisión de arrancar, benchmark, talleres, tecnología
3. **Lámina de casos de uso** — para quién sirve y para qué (Gobernador, Toño, Sergio, secretarios)
4. **Demo en vivo** — set de 10 preguntas preparadas (no preguntas abiertas), mostrando consulta + ficha + síntesis sobre los 3 temas
5. **Desglose de presupuesto** — lo que se ha invertido y lo que se necesita para este año
6. **Visión: SIC como plataforma** — versiones para cada funcionario, como "el Zip para servidores públicos"
7. **Inteligencia colectiva** — demostrar cómo se procesan los ejercicios de participación ciudadana

---

## Siguiente paso

| Acción | Responsable | Fecha |
|--------|-------------|-------|
| Definir productos para cada caso de uso | Edgar Barroso | 9 mar (hoy) |
| Reunión datos de salud con Javier | HA + Javier | 10 mar |
| Reunión de preparación | HA + Toño + Sergio + Edgar Mohar | 11 mar, 2:00 PM |
| Presentación a Finanzas (Gustavo León) | Toño + HA | Jueves 13 o viernes 14 mar (Toño confirma) |
| Demo a Toño | Edgar Barroso + Edgar Mohar | Post-presentación Finanzas |

---

## Leyes del Estado de Querétaro incluidas en la base de conocimiento

Toño pidió explícitamente cargar las leyes de Querétaro al agente: "que tenga el cerebrito las leyes... qué dice la ley, qué dice la ley respecto a los tiempos... todas las más posibles, partiendo de las más relevantes." También reglamentos y periódico oficial.

| Ley | Relevancia para el rol de Toño |
|-----|-------------------------------|
| Ley de Planeación del Estado de QRO | Seguimiento del PED, obligaciones de reporte trimestral, coordinación con municipios |
| Ley de Participación Ciudadana del Estado de QRO | Mecanismos que Toño coordina: consejos, observatorios, presupuesto participativo, diálogo ciudadano |
| Ley de Salud del Estado de QRO | Comité de Planeación en Salud, indicadores de cobertura, coordinación Estado-Municipio |
| Ley de Educación del Estado de QRO | Indicadores educativos, programas de intervención, deserción |
| Ley de Agua Potable, Alcantarillado y Saneamiento del Estado de QRO | Obligaciones de la CEA, planes de contingencia, derecho humano al agua |
| Código Urbano del Estado de QRO | Planes de desarrollo urbano municipal, infraestructura, zonificación |
| Ley Orgánica del Poder Ejecutivo del Estado de QRO | Estructura de secretarías, competencias, coordinación |
| Ley Orgánica Municipal del Estado de QRO | Competencias municipales, obligaciones de planeación |
| Ley de Transparencia y Acceso a la Información Pública del Estado de QRO | Obligaciones de publicación de datos de avance |
| Ley de Gobierno Digital del Estado de QRO | Interoperabilidad de sistemas gubernamentales |

Fuente: [Legislatura de Querétaro — Leyes](http://legislaturaqueretaro.gob.mx/leyes/)
