# Plataforma Tec Beyond
## Especificación Técnica

**Para:** Equipo de TI del Tec de Monterrey / Oscar Díaz (Horizons Architecture)
**De:** Edgar Barroso — Horizons Architecture
**Fecha:** Marzo 2026
**Versión:** 1.0

> Este documento es el complemento técnico de la propuesta para liderazgo. Describe la arquitectura, los agentes, el modelo de datos, la seguridad y el plan de despliegue de la plataforma Tec Beyond.

---

## Resumen ejecutivo técnico

Plataforma de comunidad inteligente para ~300 integrantes (piloto León), escalable a 3,000+ a nivel nacional. Opera en dos canales (WhatsApp + web). Cuatro agentes de IA procesan datos anonimizados para facilitar conexiones, personalizar contenido, detectar candidaturas y generar inteligencia para el Consejo. Toda la infraestructura corre sobre Azure del Tec. HA opera la capa de agentes; los datos son propiedad 100% del Tec.

---

## Arquitectura general

```
┌──────────────────────────────────────────────────────────────┐
│                    INFRAESTRUCTURA TEC (Azure)                │
│                                                              │
│  ┌─────────────┐  ┌─────────────┐  ┌──────────────────────┐ │
│  │  PostgreSQL  │  │  Vector DB  │  │  Blob Storage        │ │
│  │             │  │  (Pinecone/ │  │                      │ │
│  │  Perfiles    │  │   pgvector) │  │  Documentos          │ │
│  │  Membresías  │  │             │  │  Reportes            │ │
│  │  Conexiones  │  │  Embeddings │  │  Exportaciones       │ │
│  │  Eventos     │  │  Relaciones │  │  Backups             │ │
│  │  Auditoría   │  │  semánticas │  │                      │ │
│  └──────┬──────┘  └──────┬──────┘  └──────────────────────┘ │
│         │                │                                   │
│         └───────┬────────┘                                   │
│                 │                                            │
│          ┌──────┴──────┐                                     │
│          │   API REST  │  ← Autenticación OAuth 2.0 / JWT   │
│          │   Gateway   │  ← Rate limiting                    │
│          └──────┬──────┘  ← Logging completo                │
│                 │                                            │
└─────────────────┼────────────────────────────────────────────┘
                  │
          ┌───────┴────────┐
          │  CAPA AGENTES  │  ← Operada por HA
          │                │
          │  ┌──────────┐  │
          │  │ Conexión  │  │  Matching semántico + double opt-in
          │  ├──────────┤  │
          │  │Contenidos│  │  RAG + personalización por perfil
          │  ├──────────┤  │
          │  │  Scout   │  │  Análisis de redes + scoring
          │  ├──────────┤  │
          │  │ Insights │  │  Clustering + reportes agregados
          │  └──────────┘  │
          │                │
          │  NO almacena   │
          │  datos de      │
          │  integrantes   │
          └───────┬────────┘
                  │
    ┌─────────────┼──────────────┐
    │             │              │
    ▼             ▼              ▼
┌────────┐  ┌─────────┐  ┌───────────┐
│Web App │  │WhatsApp │  │Dashboard  │
│(React) │  │Bot API  │  │Consejo    │
│        │  │         │  │(Metabase/ │
│Integr. │  │Integr.  │  │ custom)   │
│Admin   │  │         │  │           │
└────────┘  └─────────┘  └───────────┘
```

**Principio clave:** La capa de agentes no almacena datos personales. Procesa información anonimizada en tiempo de ejecución y devuelve resultados a la infraestructura del Tec.

---

## Capa de agentes — Detalle

### Agente Conexión

Detecta complementariedad entre integrantes basándose en conocimiento, contexto y trayectoria — no en potencial de negocio directo.

| Aspecto | Especificación |
|---|---|
| **Input** | Embeddings de perfiles (conocimiento, experiencia, intereses), historial de interacciones, reglas de la comunidad |
| **Proceso** | Similarity semántica (cosine distance sobre embeddings) + reglas configurables por el Consejo (e.g., priorizar cross-sede, priorizar misma generación, excluir competencia directa) |
| **Output** | Par sugerido con score de afinidad (0-100) y explicación en lenguaje natural: *"Comparten experiencia en manufactura del Bajío y perspectivas complementarias sobre talento"* |
| **Activación** | Double opt-in: cada parte recibe notificación anónima por WhatsApp. Solo si ambas aceptan se revela la identidad y se facilita la introducción |
| **Anonimización** | El LLM recibe descripciones de capacidades y necesidades sin nombres, emails ni datos de contacto |
| **Frecuencia** | Evaluación continua. Nuevas sugerencias se generan al actualizar perfiles o al ingresar integrantes |

### Agente Contenidos

Personaliza la información que recibe cada integrante según su perfil, industria, etapa profesional e interacciones previas.

| Aspecto | Especificación |
|---|---|
| **Input** | Perfil de integrante + catálogo de contenidos (artículos, casos, recursos, grabaciones) + historial de consumo |
| **Proceso** | RAG (Retrieval Augmented Generation): embedding del perfil → búsqueda de contenido relevante → ranking personalizado |
| **Output** | Lista priorizada de contenidos con justificación: *"Dado tu sector y tu interés en nearshoring, este análisis es relevante"* |
| **Diferenciación** | Una persona con 3 años de experiencia recibe material distinto de quien lleva 15 |
| **Aprendizaje** | El agente mejora con cada interacción: qué se abrió, qué se ignoró, qué se compartió |

### Agente Scout

Identifica personas candidatas para futuras generaciones a partir de las redes de integrantes actuales.

| Aspecto | Especificación |
|---|---|
| **Input** | Redes públicas de integrantes (LinkedIn), criterios de admisión definidos por el Consejo |
| **Proceso** | Análisis de red (graph analysis) + matching semántico con perfil Tec Beyond |
| **Output** | Lista de candidaturas con contexto: *"En la red de [Integrante X] hay alguien con perfil afín — 85% de afinidad"* |
| **Gobernanza** | El Consejo decide a quién invitar. El agente nunca contacta directamente |
| **Fuentes** | Solo datos públicos. No scraping de datos privados |

### Agente Insights

Genera inteligencia estratégica para el Consejo a partir de datos agregados y anonimizados.

| Aspecto | Especificación |
|---|---|
| **Input** | Datos agregados de toda la red: perfiles, interacciones, contenido consumido, conexiones formadas |
| **Proceso** | Clustering, análisis de tendencias, detección de patrones, NLP sobre interacciones |
| **Output** | Reportes periódicos: *"47 integrantes mencionaron nearshoring este trimestre"*, *"La sede Chihuahua tiene 30% menos participación — considerar acercamiento"* |
| **Frecuencia** | Reportes mensuales automáticos + alertas en tiempo real para anomalías |
| **Privacidad** | Trabaja exclusivamente con datos agregados. Nunca genera reportes sobre una persona individual |

---

## Stack tecnológico

| Capa | Tecnología | Justificación |
|---|---|---|
| **Backend** | Node.js / Python (FastAPI) | Ecosistema maduro, compatible con Azure |
| **Base de datos relacional** | PostgreSQL (Azure Database) | Estándar del Tec, robusto, escalable |
| **Base de conocimiento vectorial** | pgvector o Pinecone | Búsqueda semántica para conexiones y contenido |
| **LLM** | Claude (Anthropic) / GPT-4o (OpenAI) | Procesamiento de lenguaje natural para agentes |
| **Orquestación de agentes** | Horizons Architecture framework | Coordinación multi-agente con reglas de negocio |
| **Frontend web** | React + Tailwind CSS | Responsive, rendimiento, accesibilidad |
| **WhatsApp** | WhatsApp Business API (via Twilio/360dialog) | Canal principal de la comunidad |
| **Dashboard** | Metabase o custom (React + Chart.js) | Visualización de insights para Consejo |
| **Autenticación** | OAuth 2.0 + JWT | SSO compatible con ecosistema Tec (Azure AD) |
| **Infraestructura** | Microsoft Azure | Alineado con infraestructura existente del Tec |
| **CI/CD** | GitHub Actions → Azure App Service | Despliegue automatizado |
| **Monitoreo** | Azure Monitor + Application Insights | Observabilidad y alertas |

---

## Modelo de datos (entidades principales)

```
INTEGRANTE
├── id, nombre, email, teléfono
├── empresa, cargo, sector, ubicación
├── sede_id, generación, año_ingreso
├── conocimiento_experiencia (texto libre → embedding)
├── que_quiere_aprender (texto libre → embedding)
├── preferencias_privacidad (granular: visible / solo sistema / privado)
├── canal_preferido (whatsapp / web / ambos)
├── estado (activo / inactivo / pendiente)
└── fecha_registro, última_actividad

LEGADO_INDIVIDUAL
├── id, integrante_id
├── metas_personales (texto libre)
├── contribuciones [] (conexiones formadas, conocimiento compartido, mentorías)
├── trayectoria [] (hitos registrados a lo largo del tiempo)
└── fecha_creación, última_actualización

LEGADO_GENERACIONAL
├── id, generación, año_inicio
├── integrantes_count, sedes []
├── temas_clave [] (detectados por Insights)
├── conexiones_formadas_count
├── resumen_narrativo (generado por agente, revisado por Consejo)
└── última_actualización

SEDE
├── id, nombre, campus, ciudad
├── admin_id
├── fecha_inicio
└── estado (activa / en preparación)

CONEXION
├── id, integrante_a_id, integrante_b_id
├── score_afinidad (0-100)
├── base_conexion (texto: por qué se sugiere — conocimiento, contexto, complementariedad)
├── estado_a (pendiente / aceptado / rechazado)
├── estado_b (pendiente / aceptado / rechazado)
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
├── detectado_via_integrante_id
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
└── detalle (JSON)
```

---

## Integraciones

| Sistema | Tipo | Qué se intercambia | Dirección |
|---|---|---|---|
| **Azure AD (Tec)** | SSO | Autenticación de cuentas institucionales | Tec → Plataforma |
| **WhatsApp Business API** | Mensajería | Notificaciones, respuestas, flujos conversacionales | Bidireccional |
| **LinkedIn** (opcional) | Enriquecimiento | Datos públicos de perfil profesional | LinkedIn → Plataforma |
| **Anthropic / OpenAI API** | LLM | Procesamiento de lenguaje para agentes | Plataforma → API |
| **SMTP / SendGrid** | Email | Notificaciones, reportes, invitaciones | Plataforma → Integrante |
| **Azure Blob Storage** | Archivos | Documentos, reportes exportados, backups | Interno |

---

## Seguridad y privacidad

> "Mucha gente no respondió la encuesta cuando leyó los avisos de privacidad del Tec. Tiene una vulnerabilidad reconocida en la comunidad." — Rodrigo, Consejo de representantes

**Principio de diseño:** Cada integrante controla su información. Decide qué comparte, con quién, y puede retirarlo en cualquier momento. Los agentes de IA trabajan con datos anonimizados — nunca ven nombres, emails ni datos de contacto.

| Capa | Medida | Estándar |
|---|---|---|
| Datos en reposo | AES-256 | Azure Storage Service Encryption |
| Datos en tránsito | TLS 1.3 | HTTPS obligatorio |
| Anonimización para IA | Datos procesados sin PII antes de enviar a LLM | Política interna verificable |
| Autenticación admin | MFA (Multi-Factor Authentication) | Azure AD + Authenticator |
| API | JWT con rotación de tokens | Expiración configurable |
| Acceso a datos | RBAC (Role-Based Access Control) | 6 roles definidos (ver abajo) |
| Logs | Registro inmutable de toda operación | Azure Monitor + tabla interna |
| Backups | Automático diario, retención 30 días | Azure Backup |
| Pruebas de seguridad | Pentest antes de lanzamiento | Proveedor externo |
| Transparencia | Cada integrante puede ver y exportar toda su información en cualquier momento | Panel de privacidad en perfil |

### Roles y permisos

| Rol | Datos de integrantes | Conexiones | Insights | Config | Auditoría |
|---|---|---|---|---|---|
| **Super Admin** | Todos | Todas | Todos | Sí | Sí |
| **Admin Consejo** | Agregados | Aprobar | Todos | Reglas | Sí |
| **Admin Sede** | Solo su sede | Solo su sede | Solo su sede | No | Solo su sede |
| **Operación HA** | No | No | No | Técnica | Técnica |
| **Integrante** | Solo propio | Propias | No | Su perfil | No |
| **Auditoría** | Lectura | Lectura | Lectura | No | Sí |

---

## Residencia y propiedad de datos

| Componente | Ubicación | Propiedad | Si termina el contrato |
|---|---|---|---|
| Datos de integrantes | Azure Tec | Tec Beyond 100% | Se revoca acceso a HA; datos intactos |
| Base vectorial (embeddings) | Azure Tec | Tec Beyond 100% | Se entrega documentación para migración |
| Insights y reportes | Azure Tec | Tec Beyond 100% | Quedan en infraestructura Tec |
| Código de plataforma | Repositorio HA | Horizons Architecture | Licencia se termina |
| Algoritmos de agentes | Repositorio HA | Horizons Architecture | HA retira su código; resultados quedan |
| Reglas de comunidad | Documentadas en plataforma | Consejo León | Exportables en formato estándar |

**Compromiso de portabilidad:** Si Tec Beyond migra a otro proveedor, HA entrega todos los datos en formato estándar (CSV/JSON), documentación técnica de la base vectorial, y un periodo de transición acordado en contrato.

---

## Escalabilidad

### Piloto (León)

| Recurso | Dimensionamiento |
|---|---|
| Conexiones simultáneas | ~50-100 |
| Integrantes totales | ~300 |
| Embeddings | ~300 perfiles + contenido |
| Almacenamiento | < 10 GB |
| Costo mensual estimado Azure | ~$200-400 USD |
| Costo LLM mensual estimado | ~$100-300 USD (depende de volumen) |

### Expansión (3-5 sedes)

| Recurso | Dimensionamiento |
|---|---|
| Conexiones simultáneas | ~200-500 |
| Integrantes totales | ~1,500 |
| Costo marginal por sede nueva | ~20-30% del costo del piloto |

La arquitectura es horizontal: agregar una sede es crear un nuevo nodo con su administración, no redesplegar el sistema. La base de conocimiento es compartida — cada nueva persona enriquece las conexiones de toda la red.

---

## Fases de desarrollo

| Fase | Duración | Entregables |
|---|---|---|
| **Descubrimiento** | 2-3 semanas | Diseño detallado, modelo de datos final, cotización cerrada |
| **MVP** | 8-10 semanas | Perfiles, legado personal, conexiones básicas, WhatsApp bot, dashboard Consejo |
| **Agentes v1** | 4-6 semanas | Conexiones + Contenidos operando con base de conocimiento real |
| **Agentes v2** | 4-6 semanas | Scout + Insights operando |
| **Estabilización** | 2-4 semanas | Testing, pentest, ajustes de performance, onboarding |
| **Lanzamiento piloto** | — | ~300 integrantes de León participando |

Total estimado: **5-8 meses** desde aprobación hasta lanzamiento del piloto.

### Post-lanzamiento: plataforma viva

- **Actualizaciones mensuales** de algoritmos de conexión y contenido basadas en patrones reales de uso
- **Reportes trimestrales** al Consejo con insights y recomendaciones de evolución
- **Nuevas funcionalidades** según las necesidades que emerjan de la comunidad
- **Expansión a nuevas sedes** como nodos adicionales

---

## Preguntas frecuentes para TI

**¿Se necesita infraestructura nueva en el Tec?**
No. Todo corre sobre Azure, que el Tec ya tiene. Se crea un resource group dedicado para Tec Beyond.

**¿Los agentes de IA corren dentro de Azure?**
Los agentes se despliegan en Azure App Service dentro del tenant del Tec. Las llamadas a LLMs (Claude/GPT-4o) salen a APIs externas, pero los datos que se envían son procesados y anonimizados — nunca se envía un perfil completo a un LLM externo.

**¿Qué pasa con la latencia de WhatsApp?**
El bot responde en < 5 segundos para interacciones simples (aceptar conexión, confirmar evento). Para respuestas que requieren procesamiento de agentes, < 15 segundos.

**¿Cómo se actualiza la base vectorial?**
Los embeddings se regeneran cuando alguien actualiza su perfil. El sistema también re-indexa periódicamente (semanal) para incorporar datos de interacciones recientes.

**¿Qué datos se envían a las APIs de LLM?**
Solo contexto procesado y anonimizado. Ejemplo: para generar una conexión, el agente envía al LLM las descripciones de capacidades y necesidades sin nombres, emails ni datos de contacto. El LLM nunca ve datos personales identificables.

**¿Se puede integrar con sistemas existentes del Tec (CRM, ERP)?**
Sí, vía API REST. La fase de descubrimiento mapea qué integraciones específicas se necesitan.

---

**Horizons Architecture**
Edgar Barroso
edgar@horizonsarchitecture.ai

Marzo 2026
