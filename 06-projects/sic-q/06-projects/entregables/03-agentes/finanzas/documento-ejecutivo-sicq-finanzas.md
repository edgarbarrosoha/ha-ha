# SIC-Q: Sistema de Inteligencia Colectiva de Querétaro
## Documento ejecutivo para Secretaría de Finanzas

**Fecha:** Marzo 2026
**Preparado por:** Secretaría de Planeación y Participación Ciudadana + Horizons Architecture
**Para:** Secretario de Finanzas Gustavo Arturo Leal Maya + Jefe de Gabinete

---

## Qué es el SIC-Q

El SIC-Q es un sistema de inteligencia colectiva para el Gobierno del Estado de Querétaro. Integra progresivamente datos oficiales, voces ciudadanas, marcos legales y contexto operativo, de modo que los funcionarios tomen decisiones informadas sin depender de cadenas manuales de solicitud de información entre secretarías.

Funciona como un servicio en la nube que se despliega en versiones personalizadas para cada usuario o institución: el Gobernador, el Secretario de Planeación, el Director de Planeación, y eventualmente cualquier secretaría. Cada versión tiene un nivel de acceso diferenciado según el rol del usuario y protección de información sensible.

En términos prácticos, lo que hoy requiere coordinar varias dependencias para obtener un dato o cruzar fuentes, el sistema lo facilita dentro del perímetro de acceso de cada funcionario.

---

## El problema que mitiga

El gobierno ha hecho un trabajo importante en generar información: cada secretaría produce datos operativos, los 23 consejos temáticos documentan acuerdos, y los ejercicios de participación ciudadana han recogido miles de propuestas. El siguiente paso es integrar esa información para que pueda ser procesada al momento de decidir.

1. **Integración entre secretarías.** Cada dependencia tiene sus propios sistemas y formatos. Cruzar información de salud con educación, o de participación ciudadana con indicadores del PED, hoy requiere coordinación manual que toma días o semanas. El SIC-Q automatiza esos cruces.

2. **Retorno de la inversión en participación.** Se han realizado talleres, consultas y consejos con miles de ciudadanos. Esos insumos son valiosos, y el paso natural es conectarlos con la toma de decisiones operativa para que la participación tenga impacto concreto.

3. **Procesamiento para la actualización del Plan QRO 2050.** La actualización requiere integrar insumos de 18 municipios, votaciones ciudadanas, consultas sectoriales y datos de indicadores. Con procesamiento automatizado, el equipo de planeación puede dedicar más tiempo al análisis estratégico y menos a la consolidación manual.

El SIC-Q aborda estos tres retos con una sola infraestructura. Es compatible con la agenda de Querétaro Digital que ya impulsa la Secretaría de Finanzas, y opera como una capa de inteligencia sobre los sistemas existentes.

---

## Valor para la Secretaría de Finanzas

El SIC-Q es una iniciativa de la Secretaría de Planeación y Participación Ciudadana. La arquitectura de la Fase 1 deja habilitada una primera versión para la Secretaría de Finanzas, sin aumentar el monto total del programa, enfocada en priorización presupuestal, seguimiento y evaluación.

El sistema es una herramienta de razonamiento que cruza múltiples fuentes, detecta patrones y genera inferencias útiles para la toma de decisiones. Desde la Fase 1, la Secretaría de Finanzas podría contar con:

1. **Una vista inicial de inteligencia.** Acceso a cruces de indicadores presupuestales, avance de programas por secretaría, señales ciudadanas y marco legal — habilitada por la misma infraestructura que se construye para los 3 frentes principales.

2. **Mejor criterio para priorización presupuestal.** El sistema cruza indicadores operativos, compromisos institucionales y señales ciudadanas, lo que permite evaluar con más elementos dónde conviene asignar recursos.

3. **Complemento a la agenda de gobierno digital.** El SIC-Q opera sobre infraestructura en la nube y es compatible con la estrategia de Querétaro Digital. Representa una capa de inteligencia sobre los datos que el gobierno ya genera, sin duplicar sistemas.

4. **Implementación por etapas con entregables medibles.** Arranca con 3 frentes principales, 3 temas y permisos diferenciados por rol. Cada fase entrega productos concretos antes de ampliar alcance.

En la práctica, la primera versión para la Secretaría de Finanzas no implica construir un sistema paralelo. Es una capa de consulta y síntesis sobre información presupuestal y de seguimiento que el gobierno ya produce o que ya reporta a Planeación. El valor inicial no está en sustituir los procesos formales de control financiero, sino en ordenar mejor la conversación ejecutiva entre presupuesto, avance, indicadores y señales del territorio.

---

## Los prototipos que ya se construyeron como prueba de concepto

El equipo ha entregado más de 30 productos en la etapa de prototipo:

| Entregable                        | Descripción                                                                                                           |
| --------------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| **Prototipo navegable del SIC-Q** | Primera versión funcional de una plataforma de participación ciudadana y de integración de información en tiempo real |
| **Primer agente de IA funcional** | Sistema que responde preguntas con datos reales del estado                                                            |
| **Demo de agentes**               | Demostración funcional con datos del estado                                                                           |
| **Visor de mapas**                | Visualización geográfica de datos del estado                                                                          |
| **2 talleres de codiseño**        | 74 participantes, 778 ideas procesadas, 248 actores mapeados                                                          |
| **Sesión CONSEQRO**               | 13 consejeros, 4 demos en vivo del sistema                                                                            |
| **5 reportes de inteligencia**    | Procesamiento automatizado de talleres                                                                                |
| **Simulador de costos**           | Herramienta para proyectar inversión según escala                                                                     |
| **Código de ética**               | Marco para el uso responsable de IA en gobierno                                                                       |
| **Benchmarks internacionales**    | Análisis de sistemas similares en otros países                                                                        |
| **Bases de conocimiento**         | Datos curados del estado: INEGI, CONAPO, PED, leyes, voz ciudadana                                                    |

Todo documentado y entregado en las plataformas de HA.

### Hallazgo clave de los talleres

En los talleres de codiseño, **11 de 12 mesas de trabajo pidieron espontáneamente exactamente lo que el SIC-Q propone** — sin que se les mencionara el proyecto. La demanda ciudadana y gubernamental está validada.

---

## Frentes operativos y vista inicial para la Secretaría de Finanzas

El proyecto tiene 3 frentes que generan valor inmediato, cada uno con un usuario específico, más una vista inicial para la Secretaría de Finanzas habilitada por la misma arquitectura:

### Frente 1 — Agente para el Secretario de Planeación (Antonio Rangel)

El valor del sistema está en cruzar fuentes que hoy viven separadas. Ejemplos de consultas que actualmente requieren coordinar múltiples dependencias:

| Caso de uso | Qué cruza |
|-------------|-----------|
| "Ficha para mi reunión con el Secretario de Salud" | Acuerdos pendientes de reuniones anteriores + indicadores de desabasto + quejas ciudadanas por zona + artículos de la Ley de Salud del Estado que aplican |
| "¿Qué dice la ciudadanía sobre educación vs. lo que reporta la Secretaría?" | Propuestas de talleres y consultas ciudadanas + datos oficiales de matrícula y abandono escolar + indicadores del PED |
| "La CEA reporta que no hay incidentes de agua en zona norte, pero en talleres los ciudadanos mencionaron fugas recurrentes" | Datos oficiales de la CEA + señales ciudadanas de talleres + cobertura de prensa local |
| "¿Qué fundamento legal tengo para convocar una consulta sobre el tema de agua?" | Ley de Participación Ciudadana + reglamentos vigentes + antecedentes de consultas previas en el estado |

### Frente 2 — Caso ejecutivo para el Gobernador

El sistema integra en un solo punto información que hoy se solicita a múltiples dependencias por separado:

| Producto | Qué cruza |
|----------|-----------|
| Ficha de gira municipal | Indicadores del municipio + propuestas ciudadanas de esa zona + compromisos pendientes + marco legal relevante + antecedentes de visitas anteriores |
| Ficha de persona | Historial de reuniones + temas tratados + acuerdos pendientes + contexto institucional — un CRM de relaciones de gobierno |
| Monitor PED con señales cruzadas | Estado de los 65 retos + indicadores operativos por secretaría + señales ciudadanas que confirman o contradicen el avance reportado |
| Preparación de decisiones | Ante una decisión presupuestal o de política, el sistema presenta: datos duros, marco legal, qué dice la ciudadanía, qué compromisos previos existen y qué han hecho otros estados |

### Frente 3 — Herramienta de planeación (Sergio Ibarra)

Procesamiento automatizado para la actualización del Plan Querétaro 2050. Lo que hoy se hace manualmente con decenas de documentos, el sistema lo integra con trazabilidad:

| Producto | Qué cruza |
|----------|-----------|
| Control de cambios al Plan | Texto original del Plan → insumos de talleres, consultas y mesas municipales → propuesta de modificación párrafo por párrafo, con registro de quién lo propuso y dónde |
| Priorización de proyectos icónicos | Todas las fuentes de votación ciudadana (talleres, Google Forms en universidades, encuestas a líderes empresariales, mesas municipales) consolidadas en un solo ranking |
| Detección de temas emergentes | "35% de universitarios mencionan economía circular — el Plan actual no lo contempla." Patrones que aparecen en los datos pero que nadie ha reportado formalmente |
| Fichas de mesa municipal | Antes de cada mesa: diagnóstico del municipio + propuestas ciudadanas de esa zona + indicadores relevantes + marco legal — todo generado automáticamente |

### Vista inicial para la Secretaría de Finanzas

La arquitectura de Fase 1 permite habilitar una primera versión para la Secretaría de Finanzas sin aumentar el monto total del programa. Esta vista opera con información que la Secretaría de Planeación ya recibe como parte de sus procesos de seguimiento — avance reportado por dependencia, indicadores del PED, calendarios de reporte — y con cortes o extractos que la Secretaría de Finanzas determine compartir. No requiere conexiones directas a sistemas internos de otras secretarías en el arranque. Ejemplos de consultas que estarían disponibles:

| Caso de uso | Qué cruza |
|-------------|-----------|
| "¿Qué programas tienen retraso en el ejercicio del gasto este trimestre?" | Avance presupuestal por dependencia + indicadores del PED + compromisos con fecha límite |
| "Comparativo de asignación presupuestal vs. prioridades ciudadanas en salud" | Presupuesto asignado a salud + propuestas ciudadanas de talleres + indicadores de desabasto y cobertura |
| "¿Qué secretarías tienen indicadores del PED sin actualizar?" | Calendario de reporte + estado de actualización por secretaría + alertas de vencimiento |

Productos operativos esperados en esta vista inicial:

1. **Ficha ejecutiva por secretaría.** Un corte breve con avance reportado, indicadores relevantes, alertas y compromisos pendientes.
2. **Consulta comparativa por tema.** Cruce simple entre asignación, avance e indicadores en temas prioritarios como salud, educación y agua.
3. **Alertas de seguimiento.** Señales sobre retrasos de captura, indicadores no actualizados o desalineación entre avance reportado y presión ciudadana.

**Los 3 frentes y la vista inicial para la Secretaría de Finanzas usan la misma infraestructura.** Son versiones del mismo sistema, cada una con permisos diferenciados. Cada usuario opera dentro de su perímetro de acceso — el sistema respeta los niveles de confidencialidad que defina el gobierno.

### Crecimiento progresivo

El sistema no busca cruzar toda la información del estado desde el día uno. Empieza con un conjunto acotado de fuentes y crece conforme se valida:

| Fase | Fuentes de datos | Resultado |
|------|-----------------|-----------|
| **Arranque** | 3 temas (salud, educación, agua) + leyes del estado + voz ciudadana de talleres + datos públicos + reportes de avance y seguimiento que Planeación ya recibe | Demo funcional con consultas, fichas, cruces legales y vista inicial para la Secretaría de Finanzas |
| **Primer trimestre** | + datos de secretarías involucradas + prensa + PED | Productos operativos para los 3 frentes |
| **Segundo trimestre** | + más secretarías + comparativos + CRM | Escalamiento a más usuarios |
| **Escala completa** | + todas las secretarías + canales ciudadanos | Sistema completo |

**El valor se demuestra desde el arranque.** Cada fuente nueva hace el sistema más útil — pero funciona desde el primer día con lo que ya hay.

---

## Tecnología

| Componente                | Descripción                                                                              |
| ------------------------- | ---------------------------------------------------------------------------------------- |
| **Arquitectura**          | Servicios de inteligencia artificial en la nube                                          |
| **Agentes de IA**         | Modelos de lenguaje conectados a bases de conocimiento del estado                        |
| **Bases de conocimiento** | Datos curados: INEGI, CONAPO, PED, Plan QRO 2050, leyes estatales, voz ciudadana, prensa |
| **Interfaz**              | Phone-first para ejecutivos, desktop para planeación, lenguaje natural                   |
| **Seguridad**             | Permisos por rol — cada usuario ve solo lo que le corresponde                            |
| **Propiedad**             | Infraestructura del Gobierno del Estado. HA opera como proveedor de servicio             |

A diferencia del software tradicional, donde el valor está en el código y las interfaces — que se deprecian con el tiempo —, el activo principal del SIC-Q es la base de conocimiento: los datos curados, los marcos legales estructurados, la voz ciudadana procesada. Ese acervo se acumula y se enriquece con cada interacción. Los modelos de inteligencia artificial que lo procesan se actualizan conforme avanza la tecnología, y las interfaces de usuario se pueden rediseñar sin perder lo construido. La inversión no queda atada a una versión de software que envejece; queda en el conocimiento estructurado del estado, que es transferible y reutilizable.

---

## Dimensión presupuestal

### Inversión total del proyecto

| Fase | Periodo | Inversión | Entregables principales |
|------|---------|-----------|------------------------|
| **Fase 1** | Marzo – Junio 2026 | **$6M + IVA** | 3 agentes de inteligencia operando + vista inicial para la Secretaría de Finanzas, bases de conocimiento curadas, arquitectura técnica base |
| **Fase 2** | Julio – Octubre 2026 | **$4M + IVA** | Métodos avanzados de IA para Plan QRO 2050, dashboard, agentes públicos, ampliación de bases de conocimiento |
| **Fase 3** | Noviembre 2026 – Febrero 2027 | **$6M + IVA** | Plataforma de participación ciudadana, integración de canales, escalamiento de infraestructura |
| **Total** | **12 meses** | **$16M + IVA** | |
| Cloud (aparte) | Anual | $600K – $5M | Según escala de usuarios |

Cada fase entrega productos medibles antes de avanzar a la siguiente. La Secretaría de Planeación y Participación Ciudadana, como líder del proyecto, acredita el cumplimiento de cada hito antes de solicitar la liberación de la fase siguiente.

**Lectura presupuestal:** el monto corresponde a desarrollo, curación de conocimiento, arquitectura, pruebas, despliegue y acompañamiento de implementación por fase. La infraestructura cloud de operación se presupuesta aparte.

### Qué valida cada fase

| Fase | Qué debe quedar validado | Pregunta que responde |
|------|---------------------------|-----------------------|
| **Fase 1** | 3 agentes de inteligencia operando con datos reales + vista inicial para la Secretaría de Finanzas + esquema de permisos y fuentes documentado | ¿La infraestructura ya genera valor ejecutivo y de planeación con alcance acotado? |
| **Fase 2** | Métodos avanzados de IA para el Plan QRO 2050 + dashboard + ampliación de fuentes + agentes públicos | ¿El sistema ya escala de consultas ejecutivas a inteligencia institucional más amplia? |
| **Fase 3** | Plataforma ciudadana + integración multicanal + capacidad cloud ampliada | ¿La infraestructura ya está lista para abrir interacción ciudadana a escala? |

---

*Los desgloses por fase que se presentan a continuación son asignación referencial para fines de planeación; no constituyen partición contable ni contractual del monto.*

### Fase 1 — Agentes de inteligencia · $6M + IVA (marzo – junio 2026)

| Entregable | Descripción |
|------------|-------------|
| **Agente para el Secretario de Planeación** | Herramienta de inteligencia colectiva: reportes automáticos, fichas por municipio, cruces de indicadores, resúmenes de prensa |
| **Caso ejecutivo para el Gobernador** | Demostración estratégica con datos reales, accesible desde dispositivo móvil |
| **Herramienta de planeación (Plan QRO 2050)** | Procesamiento de insumos ciudadanos y municipales para la actualización del Plan. Control de cambios con trazabilidad |
| **Vista inicial para la Secretaría de Finanzas** | Acceso a cruces de indicadores presupuestales, avance de programas y seguimiento al PED — habilitada por la misma arquitectura, sin aumentar el monto total del programa |
| **Bases de conocimiento curadas** | Integración de fuentes prioritarias: salud, educación, agua, leyes, voz ciudadana, datos públicos |
| **Arquitectura técnica base** | Infraestructura cloud, seguridad, permisos por rol |

**Desglose referencial del monto de Fase 1:**

| Rubro                                                                                                                            | Monto estimado |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------- |
| Desarrollo de agentes de IA (Secretario de Planeación, Gobernador, Plan QRO 2050 + vista inicial para la Secretaría de Finanzas) | $3.0M          |
| Curación e integración de bases de conocimiento prioritarias                                                                     | $1.0M          |
| Arquitectura técnica base, seguridad y permisos por rol                                                                          | $1.4M          |
| Pruebas, afinación, despliegue inicial y acompañamiento                                                                          | $0.6M          |

**Primer hito de validación (junio 2026):**

1. El Secretario de Planeación puede consultar y generar fichas con datos reales sobre salud, educación y agua.
2. El caso ejecutivo para el Gobernador puede mostrar briefings y fichas con trazabilidad de fuentes.
3. Planeación puede operar un primer control de cambios del Plan QRO 2050 con insumos ciudadanos.
4. La Secretaría de Finanzas cuenta con una vista inicial para cruces de avance, seguimiento e indicadores sobre la misma infraestructura.

### Fase 2 — Métodos avanzados de IA para el Plan QRO 2050 · $4M + IVA (julio – octubre 2026)

| Entregable | Descripción |
|------------|-------------|
| **Procesamiento avanzado de IA** | Detección de temas emergentes, priorización automatizada de proyectos icónicos, análisis de convergencias y divergencias entre fuentes |
| **Fichas municipales automatizadas** | Diagnóstico + propuestas ciudadanas + indicadores + marco legal para cada una de las 18 mesas municipales |
| **Dashboard de inteligencia colectiva** | Visualización de indicadores para la Secretaría y el CONSEQRO |
| **Sistema de Agentes de IA públicos** | Agentes conversacionales conectados a bases de datos oficiales del estado |
| **Ampliación de bases de conocimiento** | Incorporación de datos de más secretarías, comparativos, CRM de relaciones de gobierno |

**Desglose referencial del monto de Fase 2:**

| Rubro | Monto estimado |
|-------|----------------|
| Métodos avanzados de IA para análisis y control de cambios del Plan QRO 2050 | $1.6M |
| Dashboard de inteligencia colectiva y agentes públicos | $1.2M |
| Ampliación de fuentes, comparativos y estructuras de conocimiento | $0.8M |
| Pruebas, afinación y despliegue de la fase | $0.4M |

### Fase 3 — Plataforma de participación ciudadana · $6M + IVA (noviembre 2026 – febrero 2027)

| Entregable | Descripción |
|------------|-------------|
| **Plataforma de Orquestación Ciudadana** | Sistema web y móvil de participación para ~50,000 usuarios con múltiples canales (web, móvil, WhatsApp), procesamiento con IA, reportes de inteligencia colectiva y seguimiento al ciudadano |
| **Integración completa de canales** | WhatsApp, redes, plataforma de propuestas ciudadanas |
| **Escalamiento de infraestructura** | Ampliación de capacidad cloud para operación a escala |

**Desglose referencial del monto de Fase 3:**

| Rubro | Monto estimado |
|-------|----------------|
| Desarrollo de plataforma ciudadana web y móvil | $3.6M |
| Integración multicanal (WhatsApp, redes, flujos de participación) | $1.2M |
| Escalamiento técnico, seguridad y preparación operativa | $0.8M |
| Pruebas, lanzamiento y estabilización inicial | $0.4M |

### Infraestructura cloud (costo operativo anual, aparte)

| Escala | Usuarios | Costo anual |
|--------|----------|-------------|
| Piloto (Fases 1–2) | ~500 (gobierno, consejos, equipo cercano) | $600K |
| Operación estándar (Fase 3) | ~5,000–10,000 (gobierno + ciudadanos activos) | $1.5M |
| Escala completa | ~50,000 (todos los canales ciudadanos abiertos) | $5M |

**Nota:** estos montos de cloud son de operación anual y escalan según número de usuarios, volumen de consultas, almacenamiento y disponibilidad requerida. No forman parte del monto de desarrollo de $16M + IVA.

---

## Timeline

| Fase | Periodo | Entregable principal |
|------|---------|---------------------|
| **Fase 1** | Marzo – Junio 2026 | 3 agentes de inteligencia operando + vista inicial para la Secretaría de Finanzas |
| **Fase 2** | Julio – Octubre 2026 | Métodos avanzados de IA integrados para la actualización del Plan QRO 2050 |
| **Fase 3** | Noviembre 2026 – Febrero 2027 | Plataforma de participación ciudadana y entregables originales en operación |

Cada fase entrega productos funcionales antes de avanzar a la siguiente. Los resultados son acumulativos: lo construido en cada fase sigue operando mientras se desarrolla la siguiente.

---

## Visión de largo plazo

El SIC-Q está concebido como **infraestructura institucional** diseñada para crecer con el estado:

1. **2026:** Herramienta de inteligencia para 3 frentes operativos + vista inicial para la Secretaría de Finanzas
2. **2026–2027:** Versiones personalizadas para más secretarías
3. **2027:** Canales ciudadanos abiertos — WhatsApp, redes, plataforma de propuestas

La arquitectura permite escalar sin rediseñar. El gobierno mantiene la propiedad de la infraestructura y los datos.

---

## Fuentes de datos: con qué arranca el sistema

El SIC-Q se alimenta de información que el gobierno ya genera y de bases de datos federales de acceso público. No se requiere crear información nueva. El trabajo del sistema es integrar, cruzar y sintetizar lo que hoy está disperso.

### Temas prioritarios de arranque

| Tema | Fuentes estatales | Fuentes federales |
|------|-------------------|-------------------|
| **Salud** | Abasto de medicamentos, recetas surtidas y no surtidas, cobertura de vacunación, tiempos de espera, personal médico por habitante, infraestructura hospitalaria | Secretaría de Salud federal (morbilidad, mortalidad), INEGI (indicadores sociodemográficos) |
| **Educación** | Matrícula, abandono escolar, evaluaciones (PLANEA/MEJOREDU), eficiencia terminal, becas, educación especial | SEP (infraestructura escolar), INEGI (ENOE — empleo y demanda de talento) |
| **Agua (CEA)** | Niveles de presas, calidad del agua, red de distribución, cobertura de drenaje, plantas de tratamiento, concesiones industriales | CONAGUA (disponibilidad por acuífero, concesiones) |

### Fuentes transversales

| Fuente | Datos clave |
|--------|-------------|
| **Plan Estatal de Desarrollo** | 65 retos, 6 ejes, indicadores de seguimiento, programas sectoriales |
| **Plan QRO 2050** | Ejes estratégicos, indicadores de futuro, acuerdos del Consejo QRO 2050 |
| **23 consejos temáticos** | Actas, acuerdos y estado de cumplimiento |
| **Participación ciudadana** | 778 ideas procesadas de talleres, 248 actores mapeados, propuestas, quejas, consultas |
| **Leyes y reglamentos del estado** | Marco jurídico vigente, periódico oficial |
| **INEGI** | Censo 2020, empleo (ENOE), unidades económicas (DENUE), indicadores socioeconómicos |
| **CONAPO** | Proyecciones de población 2020-2070, índices de marginación |
| **Secretaría de Finanzas / Planeación** | Información presupuestal agregada, avances reportados por dependencia, calendarios de reporte, compromisos con fecha límite |
| **Coordinación intersecretarial** | Solicitudes de información, reportes trimestrales, compromisos con fecha límite |
| **Prensa estatal y nacional** | Monitoreo diario para contexto y alertas |

El sistema arranca con estas fuentes y crece conforme se incorporan datos de más secretarías. Integra información que cada dependencia entrega a Planeación como parte de sus obligaciones de reporte, y puede incorporar cortes o extractos que la Secretaría de Finanzas determine compartir para su vista inicial, sin requerir conexiones directas a sistemas internos de otras secretarías en el arranque.

---

## Proveedor

Horizons Architecture (HA) es una empresa especializada en ciencias de la complejidad, ciencia de datos e inteligencia artificial. Nació como spinoff del Laboratorio de Emprendimiento y Transformación (LET) de la Escuela de Gobierno y Transformación Pública del Tecnológico de Monterrey. Tiene experiencia en proyectos de gobierno, innovación pública, y planeación estratégica a nivel nacional e internacional.

En el contexto de este proyecto, HA opera como proveedor de servicios: diseña, desarrolla, implementa y acompaña la operación del sistema durante el periodo contratado.

Para mayor información: horizonsarchitecture.ai

---

## Propiedad y control

| Componente | Propiedad |
|------------|-----------|
| **Infraestructura cloud** | Gobierno del Estado (cuentas a nombre del gobierno) |
| **Bases de conocimiento** | Gobierno del Estado (datos curados, marcos legales, voz ciudadana) |
| **Código fuente** | Entregable al gobierno al cierre de cada fase |
| **Datos sensibles** | Bajo control del gobierno, con acceso regulado por permisos de rol |

Al término del contrato, el gobierno cuenta con la infraestructura, el código y las bases de conocimiento para operar o migrar el sistema de forma independiente.

---

## Riesgos y mitigación

| Riesgo | Mitigación |
|--------|-----------|
| **Calidad o disponibilidad de datos** | El sistema arranca con fuentes públicas y datos que Planeación ya recibe. No depende de integración directa con sistemas de otras secretarías en la primera fase |
| **Adopción por parte de los usuarios** | Fase 1 se enfoca en 3 frentes operativos y una vista inicial para la Secretaría de Finanzas, con productos diseñados para la operación diaria de cada usuario. Se valida uso real antes de escalar |
| **Dependencia de un solo proveedor** | Código y bases de conocimiento se entregan al gobierno por fase. La arquitectura usa servicios de nube estándar, sin componentes propietarios que impidan migración |
| **Seguridad de información sensible** | Permisos diferenciados por rol, auditoría de accesos, infraestructura en cuentas del gobierno. No se almacenan datos personales innecesarios |
| **Sobrecosto o retraso** | Ejecución por fases con liberación conforme a hitos. La Secretaría de Planeación acredita el cumplimiento de cada fase antes de solicitar la siguiente |

---

## La solicitud

La Secretaría de Planeación y Participación Ciudadana solicita la autorización del programa completo del SIC-Q por **$16M + IVA**, con ejecución por fases y liberación de recursos conforme a hitos de entrega.

| | |
|---|---|
| **Inversión total** | $16M + IVA |
| **Ejecución** | 3 fases, 12 meses (marzo 2026 – febrero 2027) |
| **Liberación** | Por fase, acreditada por la Secretaría de Planeación conforme a entregables verificables |
| **Primer hito** | Junio 2026: 3 agentes de inteligencia operando + vista inicial para la Secretaría de Finanzas |
| **Beneficio para la Secretaría de Finanzas** | Acceso desde Fase 1 a cruces de indicadores presupuestales, seguimiento al PED y evaluación por secretaría |

El concepto ya fue validado en etapa de prototipo, 2 talleres ciudadanos (74 participantes, 778 ideas) y 4 demos en vivo ante el CONSEQRO. La Fase 1 está lista para arrancar.
