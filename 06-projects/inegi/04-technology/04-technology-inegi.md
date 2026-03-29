# 04-Technology: INEGI

## Stack probable

El proyecto requiere procesar informacion normativa y operativa de la Politica de Desarrollo Social. Con base en los entregables y el patron SIC-Q:

### Procesamiento de documentos
- **NLP/LLM pipeline** — Extraccion, clasificacion y sintesis de documentos normativos (leyes, reglamentos, lineamientos, reglas de operacion)
- **Document parsing** — PDF, DOCX, HTML de fuentes gubernamentales
- **Embeddings + vector store** — Para busqueda semantica sobre el corpus de documentos de politica social

### Sistematizacion de informacion
- **ETL pipelines** — Ingestar datos de multiples fuentes (INEGI propio, CONEVAL legacy, registros administrativos, presupuesto)
- **Data normalization** — Estandarizar formatos heterogeneos de diferentes ordenes de gobierno
- **Taxonomia de la PDS** — Clasificacion automatizada de programas, acciones, proyectos segun el esquema del MEPS

### Analisis
- **Mapeo de coherencia** — Cruzar objetivos de politica con programas e instrumentos (criterio OECD-DAC de coherencia)
- **Analisis de redes** — Relaciones entre actores, programas e instrumentos (enfoque sistemas complejos)
- **Generacion de insumos** — Outputs estructurados que alimenten los analisis de la Direccion de Desarrollo Conceptual y Normativo

### Infraestructura
- **Cloud:** Por definir — depende de requisitos de seguridad del INEGI (gobierno federal puede requerir infraestructura nacional)
- **APIs de datos publicos:** Conexion a fuentes oficiales de informacion
- **Entorno colaborativo:** El esquema de co-creacion requiere que el equipo INEGI pueda interactuar con las herramientas durante el desarrollo

## Transferible de SIC-Q

| Componente SIC-Q | Aplicacion INEGI |
|-------------------|------------------|
| Clustering semantico de propuestas | Clasificacion de documentos normativos |
| Pipeline de procesamiento de texto | ETL de documentos de politica social |
| Reportes automatizados | Generacion de insumos para analisis |
| Agentes de IA para consulta | Interfaz para investigadores de la DGAEIPDS |

## Consideraciones de seguridad

- Gobierno federal tiene requisitos de proteccion de datos mas estrictos
- Informacion presupuestal y de programas sociales puede ser sensible
- Verificar si hay restricciones sobre uso de APIs de LLM comerciales (OpenAI, Anthropic) vs modelos on-premise
- Auditoria de seguridad antes de despliegue (alineado con META 4 de HA 2026)
