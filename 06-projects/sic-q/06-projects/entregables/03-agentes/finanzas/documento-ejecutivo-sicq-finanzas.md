# SIC-Q: Sistema de Inteligencia Colectiva de Querétaro
## Documento ejecutivo para Secretaría de Finanzas

**Fecha:** Marzo 2026
**Preparado por:** Secretaría de Planeación y Participación Ciudadana + Horizons Architecture
**Para:** Secretario de Finanzas Gustavo Arturo Leal Maya + Jefe de Gabinete

---

## Qué es el SIC-Q

El SIC-Q es un sistema de inteligencia colectiva para el Gobierno del Estado de Querétaro. Integra progresivamente datos oficiales, voces ciudadanas, marcos legales y contexto operativo, de modo que los funcionarios tomen decisiones informadas sin depender de cadenas manuales de solicitud de información entre secretarías.

Funciona como un servicio en la nube que se despliega en versiones personalizadas para cada usuario o institución: el Gobernador, el Secretario de Planeación, el Director de Planeación, y eventualmente cualquier secretaría. Cada versión tiene un nivel de acceso diferenciado según el rol del usuario y protección de información sensible.

En términos prácticos, lo que hoy requiere coordinar varias dependencias para obtener un dato o cruzar fuentes, el sistema lo resuelve automáticamente dentro del perímetro de acceso de cada funcionario.

---

## El problema que mitiga

El gobierno ha hecho un trabajo importante en generar información: cada secretaría produce datos operativos, los 23 consejos temáticos documentan acuerdos, y los ejercicios de participación ciudadana han recogido miles de propuestas. El siguiente paso es integrar esa información para que pueda ser procesada al momento de decidir.

1. **Integración entre secretarías.** Cada dependencia tiene sus propios sistemas y formatos. Cruzar información de salud con educación, o de participación ciudadana con indicadores del PED, hoy requiere coordinación manual que toma días o semanas. El SIC-Q automatiza esos cruces.

2. **Retorno de la inversión en participación.** Se han realizado talleres, consultas y consejos con miles de ciudadanos. Esos insumos son valiosos, y el paso natural es conectarlos con la toma de decisiones operativa para que la participación tenga impacto concreto.

3. **Procesamiento para la actualización del Plan QRO 2050.** La actualización requiere integrar insumos de 18 municipios, votaciones ciudadanas, consultas sectoriales y datos de indicadores. Con procesamiento automatizado, el equipo de planeación puede dedicar más tiempo al análisis estratégico y menos a la consolidación manual.

El SIC-Q aborda estos tres retos con una sola infraestructura. Es compatible con la agenda de Querétaro Digital que ya impulsa la Secretaría de Finanzas, y opera como una capa de inteligencia sobre los sistemas existentes.

---

## Beneficio para todas las secretarías — incluyendo Finanzas

El SIC-Q es una iniciativa de la Secretaría de Planeación y Participación Ciudadana. **El alcance de esta propuesta se limita a 3 usuarios: el Secretario de Planeación, el Gobernador y el Director de Planeación.** Sin embargo, la arquitectura está diseñada para que, a futuro, cualquier secretaría pueda tener su propia versión del sistema con acceso a la información relevante para su operación.

El sistema es una herramienta de razonamiento que cruza múltiples fuentes, detecta patrones y genera inferencias útiles para la toma de decisiones. A medida que se incorporen más secretarías, cada una podrá beneficiarse de esa capacidad aplicada a sus propios datos y contexto.

En el caso de Finanzas, esto significaría a futuro contar con insumos como:

1. **Mejor criterio para priorización presupuestal.** El sistema cruza indicadores operativos, compromisos institucionales y señales ciudadanas, lo que permite evaluar con más elementos dónde conviene asignar recursos.

2. **Seguimiento y evaluación más ágil.** Al integrar datos de múltiples secretarías, facilita detectar retrasos en programas, indicadores sin actualizar o discrepancias entre lo reportado y lo observado en territorio.

3. **Complemento a la agenda de gobierno digital.** El SIC-Q opera sobre infraestructura en la nube y es compatible con la estrategia de Querétaro Digital. Representa una capa de inteligencia sobre los datos que el gobierno ya genera, sin duplicar sistemas.

4. **Implementación por etapas.** Arranca con 3 usuarios, 3 temas y permisos diferenciados por rol. Cada etapa entrega productos medibles antes de ampliar alcance.

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

## Los 3 frentes operativos

El proyecto tiene 3 frentes que generan valor inmediato, cada uno con un usuario específico:

### Frente 1 — Agente para el Secretario de Planeación (Antonio Rangel)

El valor del sistema está en cruzar fuentes que hoy viven separadas. Ejemplos de consultas que actualmente requieren coordinar múltiples dependencias y que el sistema resuelve en segundos:

| Caso de uso | Qué cruza |
|-------------|-----------|
| "Ficha para mi reunión con el Secretario de Salud" | Acuerdos pendientes de reuniones anteriores + indicadores de desabasto + quejas ciudadanas por zona + artículos de la Ley de Salud del Estado que aplican |
| "¿Qué dice la ciudadanía sobre educación vs. lo que reporta la Secretaría?" | Propuestas de talleres y consultas ciudadanas + datos oficiales de matrícula y abandono escolar + indicadores del PED |
| "La CEA reporta que no hay incidentes de agua en zona norte, pero en talleres los ciudadanos mencionaron fugas recurrentes" | Datos oficiales de la CEA + señales ciudadanas de talleres + cobertura de prensa local |
| "¿Qué fundamento legal tengo para convocar una consulta sobre el tema de agua?" | Ley de Participación Ciudadana + reglamentos vigentes + antecedentes de consultas previas en el estado |

### Frente 2 — Ejemplos de casos ejecutivo para el Gobernador

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

**Los 3 frentes usan la misma infraestructura.** Son 3 versiones del mismo sistema, cada una con permisos diferenciados y protección de información sensible. El Gobernador accede a datos clasificados que el Secretario no ve; Sergio accede a minutas de gabinete que no son públicas. Cada usuario opera dentro de su perímetro de acceso.

### Crecimiento progresivo

El sistema no busca cruzar toda la información del estado desde el día uno. Empieza con un conjunto acotado de fuentes y crece conforme se valida:

| Fase | Fuentes de datos | Resultado |
|------|-----------------|-----------|
| **Arranque** | 3 temas (salud, educación, agua) + leyes del estado + voz ciudadana de talleres + datos públicos | Demo funcional con consultas, fichas y cruces legales |
| **Primer trimestre** | + datos de secretarías involucradas + prensa + PED | Productos operativos para los 3 frentes |
| **Segundo trimestre** | + más secretarías + comparativos + CRM | Escalamiento a más usuarios |
| **Escala completa** | + todas las secretarías + canales ciudadanos | Sistema completo |

**El valor se demuestra desde el arranque.** Cada fuente nueva hace el sistema más útil — pero funciona desde el primer día con lo que ya hay.

---

## Tecnología

| Componente | Descripción |
|-----------|-------------|
| **Arquitectura** | Thinking-as-a-Service (TaaS) — servicio de inteligencia en la nube |
| **Agentes de IA** | Modelos de lenguaje conectados a bases de conocimiento del estado |
| **Bases de conocimiento** | Datos curados: INEGI, CONAPO, PED, Plan QRO 2050, leyes estatales, voz ciudadana, prensa |
| **Interfaz** | Phone-first para ejecutivos, desktop para planeación, lenguaje natural |
| **Seguridad** | Permisos por rol — cada usuario ve solo lo que le corresponde |
| **Propiedad** | Infraestructura del Gobierno del Estado. HA opera como proveedor de servicio |

A diferencia del software tradicional, donde el valor está en el código y las interfaces — que se deprecian con el tiempo —, el activo principal del SIC-Q es la base de conocimiento: los datos curados, los marcos legales estructurados, la voz ciudadana procesada. Ese acervo se acumula y se enriquece con cada interacción. Los modelos de inteligencia artificial que lo procesan se actualizan conforme avanza la tecnología, y las interfaces de usuario se pueden rediseñar sin perder lo construido. La inversión no queda atada a una versión de software que envejece; queda en el conocimiento estructurado del estado, que es transferible y reutilizable.

---

## Dimensión presupuestal

### Inversión total del proyecto

| Fase | Periodo | Inversión | Entregables principales |
|------|---------|-----------|------------------------|
| **Fase 1** | Marzo – Junio 2026 | **$6M + IVA** | 3 agentes de inteligencia operando, bases de conocimiento curadas, arquitectura técnica base |
| **Fase 2** | Julio – Octubre 2026 | **$4M + IVA** | Métodos avanzados de IA para Plan QRO 2050, dashboard, agentes públicos, ampliación de bases de conocimiento |
| **Fase 3** | Noviembre 2026 – Febrero 2027 | **$6M + IVA** | Plataforma de participación ciudadana, integración de canales, escalamiento de infraestructura |
| **Total** | **12 meses** | **$16M + IVA** | |
| Cloud (aparte) | Anual | $600K – $5M | Según escala de usuarios |

Cada fase entrega productos medibles antes de avanzar a la siguiente.

---

### Fase 1 — Agentes de inteligencia · $6M + IVA (marzo – junio 2026)

| Entregable | Descripción |
|------------|-------------|
| **Agente para el Secretario de Planeación** | Herramienta de inteligencia colectiva: reportes automáticos, fichas por municipio, cruces de indicadores, resúmenes de prensa |
| **Caso ejecutivo para el Gobernador** | Demostración estratégica con datos reales, accesible desde dispositivo móvil |
| **Herramienta de planeación (Plan QRO 2050)** | Procesamiento de insumos ciudadanos y municipales para la actualización del Plan. Control de cambios con trazabilidad |
| **Bases de conocimiento curadas** | Integración de fuentes prioritarias: salud, educación, agua, leyes, voz ciudadana, datos públicos |
| **Arquitectura técnica base** | Infraestructura cloud, seguridad, permisos por rol |

### Fase 2 — Métodos avanzados de IA para el Plan QRO 2050 · $4M + IVA (julio – octubre 2026)

| Entregable | Descripción |
|------------|-------------|
| **Procesamiento avanzado de IA** | Detección de temas emergentes, priorización automatizada de proyectos icónicos, análisis de convergencias y divergencias entre fuentes |
| **Fichas municipales automatizadas** | Diagnóstico + propuestas ciudadanas + indicadores + marco legal para cada una de las 18 mesas municipales |
| **Dashboard de inteligencia colectiva** | Visualización de indicadores para la Secretaría y el CONSEQRO |
| **Sistema de Agentes de IA públicos** | Agentes conversacionales conectados a bases de datos oficiales del estado |
| **Ampliación de bases de conocimiento** | Incorporación de datos de más secretarías, comparativos, CRM de relaciones de gobierno |

### Fase 3 — Plataforma de participación ciudadana · $6M + IVA (noviembre 2026 – febrero 2027)

| Entregable | Descripción |
|------------|-------------|
| **Plataforma de Orquestación Ciudadana** | Sistema web y móvil de participación para ~50,000 usuarios con múltiples canales (web, móvil, WhatsApp), procesamiento con IA, reportes de inteligencia colectiva y seguimiento al ciudadano |
| **Integración completa de canales** | WhatsApp, redes, plataforma de propuestas ciudadanas |
| **Escalamiento de infraestructura** | Ampliación de capacidad cloud para operación a escala |

### Infraestructura cloud (costo operativo anual, aparte)

| Escala | Usuarios | Costo anual |
|--------|----------|-------------|
| Piloto (Fases 1–2) | ~500 (gobierno, consejos, equipo cercano) | $600K |
| Operación estándar (Fase 3) | ~5,000–10,000 (gobierno + ciudadanos activos) | $1.5M |
| Escala completa | ~50,000 (todos los canales ciudadanos abiertos) | $5M |

---

## Timeline

| Fase | Periodo | Entregable principal |
|------|---------|---------------------|
| **Fase 1** | Marzo – Junio 2026 | 3 agentes de inteligencia operando con datos reales |
| **Fase 2** | Julio – Octubre 2026 | Métodos avanzados de IA integrados para la actualización del Plan QRO 2050 |
| **Fase 3** | Noviembre 2026 – Febrero 2027 | Plataforma de participación ciudadana y entregables originales en operación |

Cada fase entrega productos funcionales antes de avanzar a la siguiente. Los resultados son acumulativos: lo construido en cada fase sigue operando mientras se desarrolla la siguiente.

---

## Visión de largo plazo

El SIC-Q está concebido como **infraestructura institucional** diseñada para crecer con el estado:

1. **Hoy:** Herramienta de inteligencia para 3 usuarios clave del gobierno
2. **Este año:** Versiones personalizadas para cada secretaría
3. **2027:** Canales ciudadanos abiertos — WhatsApp, redes, plataforma de propuestas
4. **Permanencia:** El Instituto del Futuro (AC con respaldo constitucional) opera como custodio del sistema, independiente del ciclo político

El sistema está diseñado para trascender administraciones. La estructura legal del Instituto del Futuro — una AC con convenio marco de 30 años, validación multipartidista y gobernanza ciudadana — asegura continuidad independientemente del ciclo político.

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
| **Coordinación intersecretarial** | Solicitudes de información, reportes trimestrales, compromisos con fecha límite |
| **Prensa estatal y nacional** | Monitoreo diario para contexto y alertas |

El sistema arranca con estas fuentes y crece conforme se incorporan datos de más secretarías. No requiere acceso directo a los sistemas de otras dependencias: integra lo que cada una entrega a Planeación como parte de sus obligaciones de reporte.

---

## El pedido

La Secretaría de Planeación y Participación Ciudadana solicita el fondeo del SIC-Q como infraestructura operativa del Gobierno del Estado. La implementación está diseñada por etapas:

1. **Arranque inmediato** con los 3 frentes ya definidos (agente del Secretario, caso Gobernador, herramienta de planeación), 3 temas de demostración y un grupo acotado de usuarios.
2. **Escalamiento condicionado a resultados.** Cada etapa entrega productos medibles antes de ampliar alcance.

La Secretaría ya validó el concepto con más de 30 entregables en etapa de prototipo. El CONSEQRO lo evaluó con demos en vivo. Los 3 frentes están listos para operar y entregar resultados en 4 meses.
