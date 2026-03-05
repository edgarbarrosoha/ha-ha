---
dimension: projects
project: sic-q
type: deliverable
status: draft
date: 2026-03-04
parent: "[[06-projects-sic-q]]"
frente: caso-gobernador
---

# Base de Conocimiento: Agente del Gobernador

---

## 1. Qué es esto

No es un chatbot. No es un buscador. Es un asistente de inteligencia ejecutiva personal — diseñado para vivir en el teléfono del gobernador, disponible 24/7, siempre actualizado.

El gobierno de Querétaro ya genera enormes cantidades de información: reportes de secretarías, indicadores de servicios, datos demográficos, capas georreferenciadas, propuestas ciudadanas, análisis económicos. El problema no es la falta de datos — es que están dispersos, en formatos distintos, en tiempos distintos, y llegan filtrados por múltiples capas antes de alcanzar al tomador de decisiones.

El agente procesa lo que ya existe. Integra, cruza, sintetiza y presenta — para que el gobernador tenga la mejor información posible en el momento que la necesita.

---

## 2. Qué información tendría accesible

El agente se alimenta de siete categorías de datos. Ninguna requiere crear información nueva — todo existe hoy en algún lugar del gobierno estatal.

### 2.1 Visión y planeación

**Qué es:** Plan Querétaro 2050, planes sectoriales, metas de gobierno, compromisos adquiridos, acuerdos de los 23 consejos temáticos.

**Para qué sirve:** Que cada decisión se contraste automáticamente contra la visión de largo plazo y los compromisos ya adquiridos.

> *"¿Este proyecto de movilidad está alineado con lo que prometimos en el Plan 2050?"*

### 2.2 Territorio e infraestructura

**Qué es:** Más de 200 capas georreferenciadas — uso de suelo, atlas de riesgos, infraestructura existente, desarrollos aprobados, zonas de crecimiento.

**Para qué sirve:** Tomar decisiones de inversión sabiendo exactamente qué hay y qué falta en cada punto del territorio.

> *"¿Dónde hay escuelas pero no hay transporte público? ¿Dónde hay crecimiento urbano sin drenaje?"*

### 2.3 Población y demografía

**Qué es:** Proyecciones demográficas (INEGI, CONAPO), patrones de migración, envejecimiento poblacional, distribución etaria por municipio.

**Para qué sirve:** Anticipar demanda de servicios a 10, 20 y 30 años — antes de que la presión llegue.

> *"¿Cuántos adultos mayores habrá en 2040 y dónde vivirán? ¿Estamos preparados?"*

### 2.4 Servicios públicos

**Qué es:** Indicadores operativos de salud (abasto de medicamentos, tiempos de espera), educación (matrícula, abandono escolar), seguridad, agua, movilidad.

**Para qué sirve:** Monitorear la calidad de los servicios que el gobierno entrega, detectar deterioro antes de que escale.

> *"¿Cómo va el abasto de medicamentos esta semana? ¿Hay hospitales con desabasto crítico?"*

### 2.5 Economía e inversión

**Qué es:** Inversión extranjera directa, flujos de nearshoring, datos de empleo, oferta y demanda de talento, exportaciones por sector.

**Para qué sirve:** Responder con datos a inversionistas, anticipar necesidades de talento, medir el impacto real de la estrategia económica.

> *"Amazon abre un data center. ¿Cuántos ingenieros necesitará? ¿Qué universidades pueden preparar ese talento?"*

### 2.6 Voz ciudadana

**Qué es:** Propuestas ciudadanas procesadas, quejas recurrentes por zona, resultados de encuestas, señales de talleres participativos y consejos temáticos.

**Para qué sirve:** Saber qué pide la gente, dónde lo pide, y qué se ha hecho al respecto — sin leer miles de documentos individuales.

> *"¿Cuáles son las tres demandas más frecuentes de los ciudadanos este mes? ¿En qué zonas se concentran?"*

### 2.7 Contexto diario

**Qué es:** Resumen de prensa estatal y nacional, agenda del día, alertas de indicadores, coyuntura política relevante.

**Para qué sirve:** Llegar informado a cada reunión y a cada decisión, sin depender de que alguien le cuente.

> *"¿Qué salió hoy en prensa sobre Querétaro? ¿Hay algo que requiera respuesta?"*

---

## 3. De dónde vienen los datos — Fuentes específicas

Las siete categorías anteriores se alimentan de fuentes concretas que ya existen. Aquí se detallan las bases de datos federales (INEGI y otros organismos) y los datos que cada secretaría estatal aporta al sistema.

### 3.1 Bases de datos federales

#### INEGI

| Base de datos | Qué contiene | Qué habilita para el agente |
|---|---|---|
| **Censo de Población y Vivienda 2020** | 2.37 millones de habitantes: distribución por municipio, edad, género, nivel educativo, ocupación, vivienda | Perfil demográfico completo por zona — base para toda proyección |
| **Panorama Sociodemográfico de Querétaro** | Análisis de estructura poblacional, migración, urbanización, envejecimiento, juventud | Tendencias demográficas que impactan planeación de servicios |
| **Encuesta Nacional de Ocupación y Empleo (ENOE)** | Empleo, desempleo, informalidad, sectores económicos, ingreso por zona | Cruzar demanda de talento con oferta real — alertar brechas |
| **Directorio Estadístico Nacional de Unidades Económicas (DENUE)** | Ubicación y giro de todos los negocios registrados en el estado | Mapa económico territorial: qué actividad hay dónde |
| **Encuesta Nacional de Ingresos y Gastos de los Hogares (ENIGH)** | Ingreso, gasto, desigualdad por decil y zona | Identificar zonas de vulnerabilidad económica |
| **Encuesta Intercensal / Encuesta Nacional de la Dinámica Demográfica (ENADID)** | Fecundidad, mortalidad, migración interna e internacional | Proyectar crecimiento y composición poblacional futura |
| **Marco Geoestadístico Nacional** | Límites municipales, AGEB, manzanas, localidades — geometría oficial del territorio | Capa base para todo análisis territorial |
| **Banco de Indicadores INEGI** | Series de tiempo de 40+ variables socioeconómicas | Tendencias históricas para detectar cambios y anomalías |

#### CONAPO

| Base de datos | Qué habilita |
|---|---|
| **Proyecciones de población por municipio (2020-2070)** | Anticipar demanda de servicios a 10, 20 y 30 años |
| **Índices de marginación por localidad** | Priorizar inversión en zonas más rezagadas |
| **Indicadores de migración interna** | Entender flujos de población entre municipios y hacia el estado |

#### CONEVAL

| Base de datos | Qué habilita |
|---|---|
| **Medición multidimensional de pobreza por municipio** | Focalizar programas sociales con precisión territorial |
| **Índice de rezago social por AGEB** | Identificar colonias con mayor carencia — granularidad alta |
| **Evaluaciones de programas sociales** | Saber qué funciona y qué no antes de invertir más |

#### Secretaría de Economía / DataMéxico

| Base de datos | Qué habilita |
|---|---|
| **Inversión Extranjera Directa por sector y país de origen** | Preparar fichas para reuniones con inversionistas con datos exactos |
| **Exportaciones por producto y destino** | Medir competitividad sectorial y detectar oportunidades |
| **Flujos de remesas por municipio** | Entender la economía familiar en zonas dependientes de remesas |

#### Otras fuentes federales

| Fuente | Datos clave |
|---|---|
| **CONAGUA** | Niveles de presas, concesiones de agua, disponibilidad por acuífero |
| **Secretariado Ejecutivo del SNSP** | Incidencia delictiva por municipio y tipo de delito — series mensuales |
| **SEP / Sistema Nacional de Información Educativa** | Matrícula, abandono escolar, infraestructura escolar por plantel |
| **Secretaría de Salud / SINAIS** | Morbilidad, mortalidad, infraestructura hospitalaria, personal médico |
| **SEMARNAT / SINAICA** | Calidad del aire, monitoreo ambiental en tiempo real |
| **SCT / IMT** | Aforos vehiculares, infraestructura carretera, flujos logísticos |

### 3.2 Datos de secretarías y dependencias estatales

Cada secretaría del gobierno de Querétaro genera datos operativos que hoy viven en silos. El agente los integra.

#### Secretaría de Planeación y Participación Ciudadana

| Dato | Para qué sirve al agente |
|---|---|
| Plan Estatal de Desarrollo 2021-2027 (65 retos, 6 ejes) | Contrastar cualquier decisión contra compromisos formales |
| Programas sectoriales vigentes | Saber qué se planeó para cada sector y cómo va |
| Actas de los 23 consejos temáticos | Memoria de lo que la sociedad civil organizada ha propuesto |
| Indicadores de seguimiento del PED | Medir avance real contra metas — alertar si hay desviación |
| Datos de participación ciudadana (consultas, talleres, peticiones) | Alimentar la categoría "voz ciudadana" con datos procesados |

#### Secretaría de Finanzas

| Dato | Para qué sirve al agente |
|---|---|
| Presupuesto estatal por programa y secretaría | Saber cuánto se asignó, cuánto se ha ejercido, cuánto queda |
| Infraestructura tecnológica del gobierno | Mapear qué sistemas existen y cómo conectarse a ellos |
| Catálogo de trámites (470+ procedimientos estatales) | Entender la operación real del gobierno hacia el ciudadano |

#### Secretaría de Salud

| Dato | Para qué sirve al agente |
|---|---|
| Abasto de medicamentos por hospital y centro de salud | Alertar desabasto antes de que sea crisis pública |
| Tiempos de espera y capacidad hospitalaria | Identificar saturación y redistribuir demanda |
| Morbilidad y mortalidad por municipio y causa | Priorizar intervenciones de salud pública por zona |
| Infraestructura médica (ubicación, capacidad, especialidades) | Responder "¿dónde construir el próximo hospital?" con datos |

#### Secretaría de Educación

| Dato | Para qué sirve al agente |
|---|---|
| Matrícula por nivel, municipio y plantel | Detectar escuelas saturadas o con matrícula en caída |
| Indicadores de abandono escolar | Alertar zonas con deserción alta — intervenir temprano |
| Oferta educativa vs. demanda del mercado laboral | Alinear carreras con lo que la economía necesita |
| Infraestructura escolar (estado físico, conectividad) | Priorizar inversión en mantenimiento y equipamiento |

#### Secretaría de Seguridad Ciudadana

| Dato | Para qué sirve al agente |
|---|---|
| Incidencia delictiva por zona y tipo (actualización frecuente) | Monitoreo en tiempo real — alertas por picos anómalos |
| Percepción de inseguridad por municipio | Contrastar datos duros con cómo se siente la gente |
| Tiempos de respuesta de servicios de emergencia | Medir eficiencia operativa y detectar zonas desatendidas |

#### Comisión Estatal de Aguas (CEAA)

| Dato | Para qué sirve al agente |
|---|---|
| Niveles de presas y acuíferos | Alerta temprana de crisis hídrica |
| Consumo de agua por zona y temporada | Proyectar demanda y planificar restricciones |
| Red de distribución y puntos de fuga | Priorizar inversión en infraestructura hidráulica |

#### Secretaría de Desarrollo Urbano y Obras Públicas

| Dato | Para qué sirve al agente |
|---|---|
| 200+ capas georreferenciadas (uso de suelo, riesgos, infraestructura) | Base territorial para todo análisis espacial |
| Atlas de riesgo estatal y municipales | Prevención de desastres y planeación de contingencias |
| Desarrollos habitacionales aprobados y en proceso | Anticipar demanda futura de servicios por zona |
| Obras públicas en ejecución y programadas | Saber qué se está construyendo y dónde |

#### Secretaría de Desarrollo Sustentable

| Dato | Para qué sirve al agente |
|---|---|
| Calidad del aire (estaciones de monitoreo) | Alertar contingencias ambientales |
| Manejo de residuos por municipio | Detectar municipios con problemas de capacidad |
| Zonas naturales protegidas y restricciones de uso | Evitar conflictos en planeación territorial |

#### Secretaría de Desarrollo Social

| Dato | Para qué sirve al agente |
|---|---|
| Padrón de beneficiarios de programas sociales (agregado, no individual) | Medir cobertura y detectar zonas sin atención |
| Catálogo de programas sociales (SIPROS) | Saber qué apoyos existen para cada perfil de necesidad |
| Indicadores de bienestar por municipio | Complementar datos de CONEVAL con información estatal |

#### Secretaría de Movilidad

| Dato | Para qué sirve al agente |
|---|---|
| Rutas de transporte público y cobertura | Identificar zonas sin servicio de movilidad |
| Aforos vehiculares y cuellos de botella | Priorizar inversión vial con datos de flujo real |
| Integración con sistema Qrobús | Datos de uso, demanda por ruta, horarios pico |

### 3.3 Datos del ecosistema estatal

| Fuente | Datos clave | Para qué sirve |
|---|---|---|
| **Datos Abiertos Querétaro** (portal oficial) | Datasets públicos del gobierno estatal | Acceso estructurado a información ya liberada |
| **El Consejo QRO / Plan QRO 2050** | Visión a 30 años, ejes estratégicos, indicadores de futuro | Anclar cada decisión en la visión de largo plazo |
| **18 Planes Municipales de Desarrollo** | Prioridades y compromisos de cada ayuntamiento | Coordinar acciones estatales con agendas municipales |
| **Programa Querétaro Digital 2022-2027** | 4 ejes, 15 proyectos transversales de gobierno digital | Entender la infraestructura digital disponible |
| **Cámaras empresariales** (CANACINTRA, COPARMEX, CANACO) | Datos de actividad económica, demanda de talento, inversión | Complementar datos oficiales con perspectiva del sector privado |
| **Instituciones académicas** (universidades, centros de investigación) | Egresados por carrera, líneas de investigación, capacidad instalada | Responder preguntas de talento y formación |

---

## 4. Lo esencial — Lo que el gobernador necesitaría desde el día uno

Cuatro productos mínimos que generan valor inmediato.

### Briefing matutino

Cada mañana, el agente entrega un resumen ejecutivo: qué pasó ayer, qué viene hoy en la agenda, qué indicadores requieren atención, qué salió en prensa. No hay que pedirlo — llega solo.

### Fichas ejecutivas

Antes de cada reunión, el agente prepara una ficha de contexto en una página: quién participa, qué se ha decidido antes sobre el tema, datos relevantes, puntos pendientes. El gobernador llega preparado sin requerir que un equipo compile información durante horas.

### Preguntas directas

"¿Cómo vamos en seguridad?" — y el agente responde con datos actualizados, comparativas contra el mismo periodo del año anterior, y tendencia. Sin opiniones, sin filtros intermedios, sin esperar a que alguien elabore un reporte.

### Alertas

Cuando un indicador cruza un umbral crítico — desabasto de medicamentos, pico de inseguridad en una zona, nivel de presas por debajo del mínimo — el agente notifica de inmediato. No espera a que alguien lo reporte en la siguiente reunión.

---

## 5. Lo increíble — Lo que transformaría la gobernanza

Cuando el agente lleva meses operando y las bases de conocimiento están maduras, se habilitan capacidades que hoy no existen en ningún gobierno estatal de México.

### Simulación "¿Qué pasa si...?"

El gobernador pregunta: *"Si aprobamos este desarrollo habitacional en el sur, ¿qué impacto tendría en agua, transporte y escuelas?"* — y el agente modela escenarios cruzando datos de infraestructura, proyecciones demográficas y capacidad instalada. La decisión se toma con datos, no con intuición.

### Detección anticipada

El agente nota que las quejas por agua en tres municipios aumentaron 40% en dos semanas, correlaciona con datos de nivel de presas y consumo estacional, y alerta: *"Hay probabilidad alta de crisis hídrica en zona X dentro de 6 semanas."* El gobierno actúa antes de que el problema escale.

### Análisis territorial inteligente

*"¿Dónde debería construir el próximo hospital?"* — el agente cruza cinco variables (densidad poblacional actual, crecimiento proyectado, distancia a hospitales existentes, incidencia de enfermedades crónicas, accesibilidad vial) y presenta las tres mejores ubicaciones con justificación.

### Memoria institucional

El agente sabe qué se prometió en cada gira, qué se decidió en cada reunión de gabinete, qué compromisos están pendientes. Nada se pierde entre administraciones ni entre reuniones. *"¿Qué le prometimos a Corregidora en la gira de octubre?"* — respuesta inmediata.

### Voz ciudadana procesada

No son 10,000 quejas en una hoja de cálculo. Es un resumen claro: *"Las principales demandas ciudadanas este trimestre son movilidad (32%), seguridad (28%) y agua (19%). La zona con mayor concentración de quejas es el sur poniente. De las 50 propuestas más respaldadas, 12 ya tienen acciones en curso."*

---

## 6. Escenarios — Un día con el agente

### Escenario mañana: El briefing que cambia la agenda

Son las 7:00 AM. El gobernador abre el agente en su teléfono.

El briefing matutino muestra lo habitual — resumen de prensa, agenda del día, indicadores. Pero hoy hay una alerta marcada en rojo: el nivel de la presa El Batán bajó al 38% de capacidad, 12 puntos por debajo del mismo periodo del año pasado. El agente ya cruzó los datos con las proyecciones de consumo y el calendario de lluvias.

*"Con el consumo actual y la proyección climática para las próximas 8 semanas, es probable que se necesiten restricciones parciales en la zona metropolitana antes de abril. Las colonias más vulnerables son estas cinco."*

El gobernador convoca una reunión con CEAA antes del mediodía. Llega con los datos. La decisión de activar un plan preventivo se toma esa mañana — semanas antes de que el problema sea visible para la prensa.

### Escenario reunión: Preparado sin pedir nada

A las 11:00 AM tiene reunión con una delegación de una empresa automotriz alemana que evalúa abrir planta en Querétaro. El gobernador no pidió ficha — el agente la generó automáticamente al detectar la reunión en la agenda.

La ficha muestra: IED acumulada del sector automotriz ($4,200 M en 10 años), disponibilidad de talento en ingeniería mecánica y automatización (egresados por año, brecha estimada), parques industriales con espacio disponible, y un dato clave: *"Querétaro es el #1 per cápita en inversión extranjera en México — US$1,055 M en 2024."*

El gobernador entra a la reunión con datos que normalmente habrían requerido tres días de coordinación entre secretarías.

### Escenario crisis: Coordinación en tiempo real

Sismo de 5.8 grados a las 3:00 PM. El agente se activa automáticamente.

En los primeros 15 minutos cruza datos del atlas de riesgo con las zonas de mayor densidad y vulnerabilidad estructural. Identifica los 10 edificios públicos en la zona de mayor intensidad sísmica. Genera un mapa con las rutas de evacuación óptimas y los hospitales con capacidad disponible.

*"Protocolo sugerido: verificar estado de 3 escuelas en zona epicentro, activar albergues en los puntos A, B y C, coordinar con Protección Civil verificación de puentes en Anillo Vial."*

El gobernador tiene un panorama operativo completo antes de que termine la primera llamada con su gabinete.

### Escenario estratégico: La pregunta que nadie podía responder

Viernes por la noche. El gobernador piensa en la reunión de gabinete del lunes donde se decidirá la ubicación del próximo hospital regional.

Abre el agente: *"¿Dónde tiene más sentido construir el próximo hospital?"*

El agente responde en segundos, cruzando cinco capas de información:

1. **Demografía:** La zona sur-oriente tendrá 50,000 nuevos habitantes en 5 años por desarrollos ya aprobados.
2. **Infraestructura:** El hospital más cercano está a 45 minutos en hora pico.
3. **Salud:** La incidencia de enfermedades crónicas en esa zona está 20% por encima del promedio estatal.
4. **Ciudadanía:** 800 propuestas ciudadanas mencionan acceso a salud en esa zona en los últimos 12 meses.
5. **Viabilidad:** Hay 3 terrenos de propiedad estatal disponibles, dos con acceso a vialidades principales.

*"Recomendación: zona sur-oriente, terreno B — combina mayor demanda proyectada, menor cobertura actual y viabilidad de terreno."*

El lunes, el gobernador presenta la propuesta con datos. No con intuición.

---

## 7. Gobernanza y confianza

El agente opera exclusivamente con datos institucionales, estadísticos y públicos. No accede a datos personales de ciudadanos, no rastrea individuos, no realiza vigilancia. La ética no es una limitante del sistema — es lo que lo hace viable y sostenible políticamente.

El agente no decide. Organiza, cruza, sintetiza y presenta para que el gobernador decida mejor — con más información, más rápido, y con mayor trazabilidad de cada dato que sustenta una decisión.

La gobernanza del sistema se rige por protocolos claros de acceso, uso y auditoría, alineados con el marco legal del Instituto del Futuro y las normas de transparencia del estado.
