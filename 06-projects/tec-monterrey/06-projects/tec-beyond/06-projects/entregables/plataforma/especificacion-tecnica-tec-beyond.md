# Plataforma Tec Beyond — Especificación Técnica

**Para:** Equipo de TI del Tec de Monterrey
**De:** Edgar Barroso — Horizons Architecture
**Fecha:** Marzo 2026
**Versión:** 2.0

> Este documento describe la arquitectura, el sistema de agentes, el modelo de datos y los principios de seguridad de la plataforma Tec Beyond. Complementa la descripción de la aplicación dirigida a liderazgo.

---

## Resumen ejecutivo técnico

Es un sistema de IA de comunidad inteligente donde cada integrante tiene un **portal personal con un sistema de agentes de IA**. El sistema se organiza en un agente raíz y seis agentes dimensionales (legado, comunidad, aprendizaje, capacidades, contexto, proyectos) que construyen una comprensión integral de cada persona y de la comunidad en su conjunto. Opera en dos canales (WhatsApp + web). Piloto con ~300 integrantes en León, escalable a 3,000+ a nivel nacional. Infraestructura en la nube. Los datos son propiedad 100% del Tec; Horizons Architecture opera la capa de inteligencia.

---

## Arquitectura general

La plataforma se organiza en tres capas independientes que se comunican a través de APIs:

```
+-----------------------------------------------------------+
|               INFRAESTRUCTURA EN LA NUBE                  |
|              (Propiedad del Tec)                          |
|                                                           |
|  +----------------+  +--------------+  +---------------+ |
|  | Base de datos  |  | Base de      |  | Almacenamiento| |
|  | relacional     |  | conocimiento |  | de archivos   | |
|  |                |  | vectorial    |  |               | |
|  | Perfiles       |  |              |  | Documentos    | |
|  | Legados        |  | Embeddings   |  | Reportes      | |
|  | Conexiones     |  | de perfiles  |  | Backups       | |
|  | Eventos        |  | y contenido  |  |               | |
|  | Auditoria      |  |              |  |               | |
|  +-------+--------+  +------+-------+  +---------------+ |
|          |                  |                             |
|          +--------+---------+                             |
|                   |                                       |
|          +--------+----------+                            |
|          |   API Gateway     |  <- Autenticacion          |
|          |                   |  <- Control de acceso      |
|          |                   |  <- Registro de operaciones|
|          +--------+----------+                            |
|                   |                                       |
+-------------------+---------------------------------------+
                    |
          +---------+-----------+
          |   CAPA DE AGENTES   |  <- Operada por HA
          |                     |
          |  +---------------+  |
          |  | Agente Raiz   |  |  Orquestador principal
          |  +-------+-------+  |
          |          |          |
          |  +-------+-------+  |
          |  | 6 Agentes     |  |
          |  | Dimensionales |  |
          |  |               |  |
          |  | Legado        |  |
          |  | Comunidad     |  |
          |  | Aprendizaje   |  |
          |  | Capacidades   |  |
          |  | Contexto      |  |
          |  | Proyectos     |  |
          |  +---------------+  |
          |                     |
          |  NO almacena datos  |
          |  de integrantes     |
          +---------+-----------+
                    |
      +-------------+-------------+
      |             |             |
      v             v             v
+---------+   +----------+   +-----------+
| Portal  |   | WhatsApp |   | Dashboard |
| Web     |   | Bot      |   | Consejo   |
|         |   |          |   |           |
|Integrante|   | Canal    |   |Inteligencia|
| Admin   |   | principal|   | colectiva |
+---------+   +----------+   +-----------+
```

La capa de agentes no almacena datos personales. Procesa información anonimizada en tiempo de ejecución y devuelve resultados a la infraestructura del Tec.

---

## Sistema de agentes — Arquitectura

La plataforma utiliza un sistema multi-agente organizado bajo la metodología de Horizons Architecture. Cada integrante tiene una instancia del sistema que lo acompaña a lo largo de su participación en la comunidad.

### Agente raíz

El agente raíz es el orquestador del sistema. Es la interfaz conversacional con la que interactúa cada integrante — por WhatsApp o por la aplicación web. Cuando un integrante envía un mensaje, el agente raíz interpreta la intención, decide cuál o cuáles de los seis agentes dimensionales deben intervenir, les delega el procesamiento y sintetiza sus respuestas en una conversación coherente. Desde la perspectiva del usuario, interactúa con un solo interlocutor; internamente, hay siete agentes colaborando.

El agente raíz mantiene un modelo de cada integrante que se construye progresivamente. Cada conversación actualiza este modelo: si alguien menciona que está explorando nearshoring, eso alimenta su perfil en las dimensiones de contexto, capacidades y proyectos. Este modelo es lo que permite la personalización — el sistema acumula comprensión a lo largo del tiempo en lugar de tratar cada interacción como independiente.

| Aspecto | Especificación |
|---|---|
| **Función** | Interlocutor principal. Recibe conversaciones, delega a agentes dimensionales, integra respuestas en una conversación coherente |
| **Input** | Mensajes por WhatsApp o web, historial de interacciones, perfil integral del integrante (seis dimensiones) |
| **Output** | Respuestas conversacionales, sugerencias personalizadas, notificaciones, actualizaciones de perfil |
| **Memoria** | Mantiene contexto de conversación y un mapa integral del integrante a través de las seis dimensiones. Recuerda conversaciones anteriores y las incorpora al perfil |
| **Privacidad** | Cuando consulta modelos de lenguaje externos, envía datos procesados y anonimizados. Los datos identificables permanecen en la infraestructura del Tec |

### Agente legado

El legado es el concepto central de la plataforma. Cada integrante de Tec Beyond tiene algo que quiere aportar a la comunidad — pero la mayoría no llega con eso articulado. El agente de legado ayuda a definirlo a través de conversación: hace preguntas, detecta patrones en lo que cada persona dice y hace dentro de la plataforma, y construye una definición que evoluciona con el tiempo.

Técnicamente, el legado funciona como el vector principal de personalización. Determina qué contenido se prioriza en el feed, qué conexiones se sugieren y qué oportunidades se presentan. Un integrante cuyo legado se orienta hacia "acceso a capital en el Bajío" ve una experiencia distinta de alguien cuyo legado es "formación de talento en manufactura".

| Aspecto | Especificación |
|---|---|
| **Input** | Conversaciones con el integrante, interacciones con contenido, conexiones formadas, proyectos activos |
| **Proceso** | Análisis conversacional para extraer intenciones, valores y aspiraciones. Síntesis progresiva del legado personal que evoluciona con cada interacción |
| **Output** | Definición de legado (mapa vivo que cambia con el tiempo), registro de contribuciones, historial de evolución del legado |
| **Activación** | Proactivo: propone reflexiones periódicas (*"He notado que últimamente hablas mucho de talento. ¿Quieres que exploremos eso como parte de tu legado?"*). Reactivo: incorpora señales de las otras cinco dimensiones |
| **Impacto** | El legado determina qué contenido se muestra, qué conexiones se sugieren y qué oportunidades se presentan. Es la brújula del sistema |

### Agente comunidad

El agente de comunidad opera sobre embeddings multidimensionales: toma los vectores de las seis dimensiones de dos integrantes y calcula complementariedad semántica. A diferencia de un directorio que conecta por industria o ubicación, el sistema puede identificar que dos personas en la misma industria pero con legados distintos tienen más valor de conexión que dos personas con perfiles similares.

El sistema utiliza un mecanismo de double opt-in: cuando el agente detecta una conexión de alto valor, envía a cada parte una descripción anonimizada del otro perfil. Solo si ambas aceptan se revela la identidad y se facilita la introducción por WhatsApp.

Las reglas de matching son configurables por el Consejo: pueden priorizar conexiones cross-sede, favorecer integrantes de la misma generación, excluir competencia directa, o ponderar dimensiones específicas según las prioridades de cada momento.

| Aspecto | Especificación |
|---|---|
| **Input** | Embeddings de perfiles integrales (legado + conocimiento + capacidades + contexto), historial de interacciones, reglas definidas por el Consejo |
| **Proceso** | Similitud semántica sobre embeddings multidimensionales + reglas configurables (priorizar cross-sede, priorizar misma generación, excluir competencia directa, entre otras) |
| **Output** | Par sugerido con score de afinidad (0-100) y explicación en lenguaje natural: *"Comparten experiencia en manufactura del Bajío y perspectivas complementarias sobre talento"* |
| **Activación** | Double opt-in: cada parte recibe notificación anónima por WhatsApp. Solo si ambas aceptan se revela la identidad y se facilita la introducción |
| **Privacidad** | Los modelos de lenguaje reciben descripciones de capacidades y necesidades sin nombres, correos ni datos de contacto |
| **Frecuencia** | Evaluación continua. Nuevas sugerencias se generan al actualizar perfiles o al ingresar integrantes |

### Agente aprendizaje

El agente de aprendizaje cumple una doble función. Por un lado, identifica qué conocimiento tiene cada integrante y lo hace disponible para la comunidad — no como un repositorio pasivo, sino como recomendaciones activas: si alguien comparte un caso de éxito en logística, el agente lo distribuye a los integrantes cuyo perfil sugiere que les sería útil. Por otro lado, detecta brechas de conocimiento y personaliza rutas de aprendizaje.

La personalización opera con RAG (Retrieval Augmented Generation): el embedding del perfil integral del integrante se usa para buscar y rankear contenido relevante. A diferencia de un sistema de recomendación basado solo en historial de consumo, el ranking incorpora las seis dimensiones: legado, contexto de industria, capacidades existentes y proyectos activos.

| Aspecto | Especificación |
|---|---|
| **Input** | Perfil integral, historial de contenido consumido, conocimiento inferido de conversaciones, interacciones con otros integrantes |
| **Proceso** | RAG (Retrieval Augmented Generation): embedding del perfil → búsqueda de contenido relevante → ranking personalizado por legado e intereses. Detección de brechas de conocimiento por análisis de contexto |
| **Output** | Contenido priorizado con justificación, sugerencias de mentoría dentro de la comunidad, rutas de aprendizaje personalizadas, distribución de conocimiento compartido a integrantes relevantes |
| **Diferenciación** | Adapta profundidad y tipo de contenido según experiencia, industria y legado. Una persona con 3 años de experiencia recibe material distinto de quien lleva 15 |
| **Aprendizaje del agente** | Mejora con cada interacción: qué se abrió, qué se ignoró, qué se compartió, qué generó una conexión |

### Agente capacidades

Mientras el agente de comunidad conecta personas por conocimiento y experiencia, el agente de capacidades opera sobre recursos concretos: infraestructura física, redes de distribución, herramientas, presencia geográfica. Si un integrante en Chihuahua necesita distribución en el Bajío y otro tiene presencia logística en esa región, el agente detecta la complementariedad y propone la conexión. Técnicamente, opera con matching entre declaraciones de recursos y necesidades detectadas en conversaciones y proyectos activos.

| Aspecto | Especificación |
|---|---|
| **Input** | Declaraciones de recursos, herramientas, infraestructura, redes de distribución, presencia geográfica |
| **Proceso** | Matching de capacidades con necesidades de otros integrantes y proyectos activos en la comunidad |
| **Output** | Oportunidades de colaboración basadas en recursos complementarios: *"Tu empresa tiene presencia logística en el Bajío y hay un integrante en Chihuahua buscando distribución en esa región"* |
| **Diferencia con Comunidad** | El agente de comunidad conecta por conocimiento y experiencia. El agente de capacidades conecta por recursos e infraestructura |

### Agente contexto

El agente de contexto funciona como un filtro de información externa. Monitorea fuentes de noticias, tendencias de industria, cambios regulatorios y actividad dentro de la comunidad, y filtra lo que es relevante para cada integrante según su perfil integral. Un integrante en manufactura ve información sobre nearshoring y regulación laboral; uno en fintech ve regulación financiera y adopción digital. El feed se actualiza diariamente y el agente aprende qué tipo de contenido cada persona abre, ignora o comparte.

| Aspecto | Especificación |
|---|---|
| **Input** | Legado del integrante, industria, región, fuentes de información externa, actividad de la comunidad |
| **Proceso** | Filtrado y ranking de información externa por relevancia al perfil integral. Cruce con actividad de la comunidad |
| **Output** | Feed personalizado: tendencias de industria, cambios regulatorios, oportunidades de mercado, temas emergentes dentro de la comunidad |
| **Diferenciación** | Un integrante de manufactura ve nearshoring y regulación laboral. Uno de fintech ve regulación financiera y adopción digital. No ven lo mismo |
| **Frecuencia** | Continuo. El feed se actualiza diariamente |

### Agente proyectos

El agente de proyectos registra las iniciativas activas de cada integrante y detecta oportunidades de colaboración entre proyectos de distintos integrantes. Cuando alguien declara un proyecto o menciona un reto en conversación, el agente cruza esa información con los perfiles de la comunidad para identificar quién tiene conocimiento, capacidades o proyectos complementarios. Esto permite que la comunidad funcione como una red operativa — no solo como un directorio de contactos.

| Aspecto | Especificación |
|---|---|
| **Input** | Proyectos declarados, retos actuales, oportunidades buscadas, capacidades y conocimiento de otros integrantes |
| **Proceso** | Matching de proyectos con conocimiento, capacidades y proyectos complementarios en la red |
| **Output** | Oportunidades de colaboración, conexiones proyecto-proyecto, sugerencias de recursos internos de la comunidad |

### Inteligencia colectiva (para el Consejo)

Los seis agentes dimensionales generan, de manera agregada y anonimizada, inteligencia estratégica para el Consejo de Tec Beyond. El sistema detecta patrones que no serían visibles con encuestas o reportes manuales: qué temas emergen en conversaciones, qué sedes tienen menos participación, qué tipo de conexiones se aceptan y cuáles se rechazan. Los reportes nunca incluyen información de personas individuales — todo es agregado por sede, generación, sector o tema.

| Aspecto | Especificación |
|---|---|
| **Input** | Datos agregados de toda la red: perfiles, interacciones, contenido consumido, conexiones formadas, legados definidos |
| **Proceso** | Clustering, análisis de tendencias, detección de patrones, síntesis narrativa |
| **Output** | Reportes periódicos: *"47 integrantes mencionaron nearshoring este trimestre"*, *"La sede Chihuahua tiene 30% menos participación"*. Pipeline de candidaturas. Legado generacional (qué construyó cada generación) |
| **Privacidad** | Exclusivamente datos agregados. Nunca genera reportes sobre una persona individual |
| **Frecuencia** | Reportes mensuales automáticos + alertas en tiempo real para anomalías |

---

## Infraestructura en la nube

La plataforma se despliega en infraestructura en la nube, aprovechando servicios administrados para minimizar la carga operativa. La arquitectura es agnóstica al proveedor — puede desplegarse en cualquier plataforma de nube que ofrezca los servicios equivalentes.

### Capas de infraestructura

| Capa | Función | Características requeridas |
|---|---|---|
| **Base de datos relacional** | Almacena perfiles, legados, conexiones, eventos, auditoría | Administrada, con respaldos automáticos, replicación, cifrado en reposo |
| **Base de conocimiento vectorial** | Almacena embeddings de perfiles (6 dimensiones por integrante) y contenido para búsqueda semántica | Puede ser extensión de la base relacional o servicio dedicado |
| **Almacenamiento de archivos** | Documentos, reportes generados, respaldos | Cifrado en reposo, acceso controlado, retención configurable |
| **API Gateway** | Punto de entrada para todas las interacciones | Autenticación, control de acceso, limitación de tráfico, registro de operaciones |
| **Servicios de cómputo** | Ejecución del backend y los agentes | Contenedores administrados con escalamiento automático |
| **Servicio de mensajería** | Integración con WhatsApp Business API | A través de proveedor certificado de WhatsApp |
| **Modelos de lenguaje** | Procesamiento de lenguaje natural para los agentes | APIs externas de modelos de última generación |

### Principios de infraestructura

- **Servicios administrados:** No se requiere administración directa de servidores. La infraestructura se gestiona a través de servicios en la nube.
- **Separación de capas:** Los datos (propiedad del Tec), la lógica de agentes (operada por HA) y las interfaces (web, WhatsApp, dashboards) son capas independientes que se comunican exclusivamente por API.
- **Escalamiento horizontal:** Agregar una sede nueva es crear un nodo adicional, no redesplegar el sistema. Cada nueva persona enriquece la base de conocimiento de toda la red.
- **Respaldos automáticos:** Diarios, con retención configurable.
- **Ambientes separados:** Desarrollo, pruebas y producción en ambientes aislados.

---

## Modelo de datos (entidades principales)

El modelo de datos tiene tres conceptos centrales que lo diferencian de una base de datos de CRM o directorio convencional:

1. **Legado como entidad independiente.** El legado no es un campo de texto dentro del perfil — es una entidad con historial de versiones, contribuciones asociadas y su propio embedding. Esto permite rastrear cómo evoluciona la definición de legado de cada integrante a lo largo del tiempo y usarla como vector principal de personalización.

2. **Perfil dimensional.** Cada integrante tiene seis registros en la tabla PERFIL_DIMENSIONAL, uno por dimensión. Cada registro contiene texto libre (lo que el agente ha aprendido del integrante en esa dimensión) y un embedding. Esto permite hacer búsquedas semánticas por dimensión: encontrar a todos los integrantes con capacidades complementarias en logística, o todos los que comparten interés en un tema de aprendizaje específico.

3. **Conexiones con estado y contexto.** Las conexiones entre integrantes no son simples relaciones bidireccionales. Tienen un score de afinidad calculado por los agentes, una explicación en lenguaje natural de por qué se sugirió la conexión, y un flujo de estados (pendiente → aceptado → facilitado) que permite medir la efectividad del matching.

```
INTEGRANTE
+-- id, nombre, email, teléfono
+-- empresa, cargo, sector, ubicación
+-- sede_id, generación, año_ingreso
+-- preferencias_privacidad (granular: visible / solo sistema / privado)
+-- canal_preferido (whatsapp / web / ambos)
+-- estado (activo / inactivo / pendiente)
+-- fecha_registro, última_actividad

LEGADO
+-- id, integrante_id
+-- definición_actual (texto — evoluciona con el tiempo)
+-- historial_versiones [] (cómo ha cambiado el legado)
+-- contribuciones [] (conexiones formadas, conocimiento compartido,
|   mentorías realizadas, proyectos colaborativos)
+-- embedding (para matching y curación de contenido)
+-- fecha_creación, última_actualización

PERFIL_DIMENSIONAL
+-- id, integrante_id, dimensión (1-6)
+-- contenido (texto libre -> embedding)
|   Dim 1 (Legado): aspiraciones, propósito, impacto deseado
|   Dim 2 (Comunidad): relaciones, redes, contactos
|   Dim 3 (Aprendizaje): conocimiento, expertise, necesidades
|   Dim 4 (Capacidades): herramientas, recursos, infraestructura
|   Dim 5 (Contexto): industria, región, tendencias relevantes
|   Dim 6 (Proyectos): iniciativas activas, retos, oportunidades
+-- embedding
+-- última_actualización

CONEXION
+-- id, integrante_a_id, integrante_b_id
+-- score_afinidad (0-100)
+-- base_conexion (explicación en lenguaje natural)
+-- dimensiones_compartidas [] (en qué dimensiones hay complementariedad)
+-- estado_a, estado_b (pendiente / aceptado / rechazado)
+-- estado_final (facilitado / cancelado / archivado)
+-- facilitado_por (admin_id)
+-- fechas (creado, respondido_a, respondido_b, facilitado)

CONTENIDO
+-- id, título, tipo (artículo / caso / recurso / video)
+-- dimensiones_relevantes [], sectores [], nivel_experiencia
+-- embedding (para matching con perfiles)
+-- fecha_publicación, fuente

LEGADO_GENERACIONAL
+-- id, generación, año_inicio
+-- integrantes_count, sedes []
+-- temas_clave [] (detectados por agentes)
+-- conexiones_formadas_count
+-- resumen_narrativo (generado por agente, revisado por Consejo)
+-- última_actualización

SEDE
+-- id, nombre, campus, ciudad
+-- admin_id, fecha_inicio, estado

EVENTO
+-- id, nombre, tipo (presencial / virtual), sede_id
+-- fecha, lugar, capacidad
+-- asistentes [] (integrante_id + confirmación)

CANDIDATURA
+-- id, perfil_estimado, sector
+-- detectado_via_integrante_id
+-- score_afinidad (0-100)
+-- estado (detectado / revisado / invitado / descartado)
+-- decidido_por (consejo), fecha_decisión

LOG_AUDITORIA
+-- id, persona_id, acción, recurso
+-- timestamp, resultado, detalle
```

---

## Seguridad y privacidad

> "Mucha gente no respondió la encuesta cuando leyó los avisos de privacidad del Tec. Tiene una vulnerabilidad reconocida en la comunidad." — Rodrigo, Consejo de representantes

**Principio de diseño:** Cada integrante controla su información. Decide qué comparte, con quién, y puede retirarlo en cualquier momento. Los agentes de IA trabajan con datos anonimizados — nunca ven nombres, correos electrónicos ni datos de contacto.

| Capa | Medida |
|---|---|
| **Datos en reposo** | Cifrado AES-256 |
| **Datos en tránsito** | TLS 1.3 (HTTPS obligatorio) |
| **Anonimización para IA** | Los datos se procesan eliminando información de identificación personal antes de enviarlos a modelos de lenguaje externos |
| **Autenticación** | Single Sign-On compatible con la infraestructura del Tec + autenticación multifactor para administradores |
| **Control de acceso API** | Tokens con rotación y expiración configurable |
| **Control de acceso por rol** | 6 roles con permisos granulares (ver tabla) |
| **Registro de operaciones** | Registro inmutable de toda operación |
| **Respaldos** | Automáticos diarios, retención configurable |
| **Pruebas de seguridad** | Prueba de penetración antes del lanzamiento |
| **Transparencia** | Cada integrante puede ver y exportar toda su información en cualquier momento |

### Roles y permisos

| Rol | Datos de integrantes | Conexiones | Inteligencia | Configuración | Auditoría |
|---|---|---|---|---|---|
| **Super Admin** | Todos | Todas | Toda | Sí | Sí |
| **Admin Consejo** | Agregados | Aprobar | Toda | Reglas | Sí |
| **Admin Sede** | Solo su sede | Solo su sede | Solo su sede | No | Solo su sede |
| **Operación HA** | No | No | No | Técnica | Técnica |
| **Integrante** | Solo propio | Propias | No | Su perfil | No |
| **Auditoría** | Lectura | Lectura | Lectura | No | Sí |

---

## Residencia y propiedad de datos

Los datos de integrantes y la inteligencia generada son propiedad del Tec al 100%. Horizons Architecture opera la capa de agentes y conserva la propiedad del código y los algoritmos. Si el contrato termina, HA retira su código; los datos, reportes y resultados permanecen en la infraestructura del Tec.

| Componente | Ubicación | Propiedad | Si termina el contrato |
|---|---|---|---|
| Datos de integrantes | Nube del Tec | Tec Beyond 100% | Se revoca acceso a HA; datos intactos |
| Base vectorial (embeddings) | Nube del Tec | Tec Beyond 100% | Se entrega documentación para migración |
| Inteligencia y reportes | Nube del Tec | Tec Beyond 100% | Quedan en infraestructura del Tec |
| Código de plataforma | Repositorio HA | Horizons Architecture | Licencia se termina |
| Algoritmos de agentes | Repositorio HA | Horizons Architecture | HA retira su código; resultados quedan |
| Reglas de comunidad | En la plataforma | Consejo | Exportables en formato estándar |

**Portabilidad:** Si Tec Beyond migra a otro proveedor, HA entrega todos los datos en formato estándar (CSV/JSON), documentación técnica de la base vectorial, y un periodo de transición acordado en contrato.

---

## Escalabilidad

### Piloto (León)

| Recurso | Dimensionamiento |
|---|---|
| Integrantes totales | ~300 |
| Conexiones simultáneas | ~50-100 |
| Embeddings | ~300 perfiles x 6 dimensiones + contenido |
| Almacenamiento | < 10 GB |

### Expansión (3-5 sedes)

| Recurso | Dimensionamiento |
|---|---|
| Integrantes totales | ~1,500 |
| Conexiones simultáneas | ~200-500 |
| Costo marginal por sede nueva | ~20-30% del costo del piloto |

La arquitectura es horizontal: agregar una sede es crear un nuevo nodo con su administración, no redesplegar el sistema. Cada nueva persona enriquece la base de conocimiento de toda la red.

---

## Integraciones

La plataforma se integra con sistemas existentes del Tec a través de APIs estándar. La integración más crítica para el lanzamiento es la autenticación institucional (SSO), que permite a los integrantes acceder con sus credenciales del Tec sin crear cuentas nuevas. WhatsApp Business API es el canal principal de interacción — la mayoría de los integrantes interactuarán con el sistema por WhatsApp, no por la web. Las integraciones con sistemas internos del Tec (CRM, ERP) se definen en la fase de descubrimiento según las necesidades reales identificadas.

| Sistema | Función | Dirección |
|---|---|---|
| **Autenticación institucional del Tec** | Single Sign-On para cuentas del Tec | Tec → Plataforma |
| **WhatsApp Business API** | Canal principal de interacción con integrantes | Bidireccional |
| **APIs de modelos de lenguaje** | Procesamiento de lenguaje natural para los agentes | Plataforma → API |
| **Correo electrónico** | Notificaciones, reportes, invitaciones | Plataforma → Integrante |
| **LinkedIn** (opcional) | Enriquecimiento de perfil profesional con datos públicos | LinkedIn → Plataforma |
| **Sistemas del Tec** (CRM, ERP) | Según necesidades identificadas en fase de descubrimiento | Bidireccional |

---

## Fases de desarrollo

El desarrollo sigue un modelo incremental. La fase de descubrimiento produce el diseño detallado y la cotización cerrada. El MVP entrega las funcionalidades centrales (portal personal, agente raíz por WhatsApp, legado y conexiones). Las fases de agentes v1 y v2 agregan los seis agentes dimensionales con datos reales y la capa de inteligencia colectiva. La estabilización incluye pruebas de seguridad y ajustes de rendimiento antes del lanzamiento.

| Fase | Duración | Entregables |
|---|---|---|
| **Descubrimiento** | 2-3 semanas | Diseño detallado, modelo de datos final, cotización cerrada |
| **MVP** | 8-10 semanas | Portal personal, agente raíz por WhatsApp, legado, conexiones, feed, dashboard Consejo |
| **Agentes v1** | 4-6 semanas | Seis agentes dimensionales operando con datos reales |
| **Agentes v2** | 4-6 semanas | Inteligencia colectiva, pipeline de candidaturas, legado generacional |
| **Estabilización** | 2-4 semanas | Pruebas de seguridad, ajustes de rendimiento, onboarding |
| **Lanzamiento piloto** | — | ~300 integrantes de León participando |

Total estimado: **5-8 meses** desde aprobación.

### Post-lanzamiento: plataforma viva

- Actualizaciones mensuales de algoritmos basadas en patrones reales de uso
- Reportes trimestrales al Consejo con inteligencia y recomendaciones
- Nuevas funcionalidades según necesidades emergentes de la comunidad
- Expansión a nuevas sedes como nodos adicionales

---

## Preguntas frecuentes para TI

**¿Se necesita infraestructura nueva?**
No. La plataforma se despliega sobre servicios en la nube que el Tec ya tiene contratados. Se crea un ambiente dedicado para Tec Beyond.

**¿Los agentes de IA corren dentro de la infraestructura del Tec?**
Los agentes se despliegan dentro de la infraestructura del Tec. Las llamadas a modelos de lenguaje salen a APIs externas, pero los datos que se envían son procesados y anonimizados — nunca se envía un perfil completo a una API externa.

**¿Qué datos se envían a las APIs de modelos de lenguaje?**
Solo contexto procesado y anonimizado. Para generar una conexión, el agente envía descripciones de capacidades y necesidades sin nombres, correos electrónicos ni datos de contacto. El modelo de lenguaje nunca ve datos de identificación personal.

**¿Cómo se manejan los embeddings?**
Los embeddings se generan y almacenan en la infraestructura del Tec. Se regeneran cuando alguien actualiza su perfil y se re-indexan periódicamente para incorporar datos de interacciones recientes. Cada integrante tiene embeddings por cada una de las seis dimensiones.

**¿Se puede integrar con sistemas existentes del Tec?**
Sí. La plataforma expone y consume APIs estándar. La fase de descubrimiento mapea qué integraciones específicas se necesitan.

**¿Qué pasa con la latencia de WhatsApp?**
Interacciones simples (aceptar conexión, confirmar evento): respuesta en menos de 5 segundos. Respuestas que requieren procesamiento de agentes: menos de 15 segundos.

**¿El sistema es dependiente de un proveedor de nube específico?**
No. La arquitectura utiliza servicios estándar de nube (base de datos relacional, almacenamiento de archivos, contenedores, APIs) que están disponibles en cualquier proveedor. Se recomienda desplegar en la infraestructura que el Tec ya tiene contratada.

---

**Horizons Architecture**
Edgar Barroso
edgar@horizonsarchitecture.ai

Marzo 2026
