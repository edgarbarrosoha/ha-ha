



### **Propuesta 1: Consultoría para la Transformación AI-First de la Fábrica de Diseño Instruccional**

**1. Portada ejecutiva**

* **Título completo:** Propuesta de Consultoría Estratégica para la Transformación de la Fábrica de Diseño Instruccional a un Modelo AI-First.
*  Optimización de procesos, escalamiento de la capacidad productiva y aseguramiento de la calidad pedagógica mediante la integración de inteligencia artificial.
*   **Instituciones participantes:**
    *   Universidad Tecmilenio - Vicerrectorado Académico
    *   Horizons Architecture Systems, S.A.P.I. de C.V.
*   **Duración del proyecto:** 6 meses

**2. Resumen ejecutivo**

La Fábrica de Diseño Instruccional de la Universidad Tecmilenio es un activo estratégico fundamental para la entrega de su modelo educativo. Sin embargo, el equipo de profesionales enfrenta el desafío de una demanda creciente que presiona los tiempos de entrega, la actualidad y la consistencia en la calidad de los contenidos instruccionales. Esta situación presenta una oportunidad para una evolución estratégica hacia la eficiencia y la escala.

Este proyecto propone una **consultoría integral para transformar la Fábrica de Diseño Instruccional en un modelo operativo AI-First**. Mediante un rediseño de procesos y la integración de herramientas de IA generativa, se automatizarán tareas repetitivas (creación de borradores, guiones, evaluaciones) y se optimizarán los flujos de revisión y validación.

Desplegaremos esta solución sobre **Microsoft Azure**, estableciendo un modelo de gobernanza que garantice la coherencia pedagógica y la calidad. El resultado será una fábrica más ágil, capaz de producir más contenido de mayor calidad en menos tiempo, liberando al equipo para enfocarse en la innovación pedagógica de alto valor.

*   **Duración total:** 6 meses
*   **Presupuesto estimado:** $2,800,000 MXN + IVA
*   **Resultados principales:** Playbooks de operación AI-First, plataforma de IA integrada al flujo de trabajo, y equipo con nuevas competencias digitales y de IA.

**3. Propósito general**

Potenciar la capacidad de producción de contenido educativo de la Universidad Tecmilenio, transformando su Fábrica de Diseño Instruccional en un referente de eficiencia, calidad e innovación a través de la adopción estratégica de la inteligencia artificial.

**4. Objetivos específicos**

1.  Realizar un diagnóstico exhaustivo de los flujos de trabajo, cuellos de botella y oportunidades de automatización actuales en la fábrica.
2.  Diseñar y documentar un nuevo modelo operativo AI-First, definiendo los roles, procesos y herramientas de IA a implementar.
3.  Desarrollar e integrar una plataforma de herramientas de IA sobre Azure para asistir en la creación, revisión y versionado de contenido instruccional.
4.  Implementar un programa de gestión del cambio y capacitación (upskilling) para los 86 miembros del equipo, asegurando una adopción efectiva y minimizando la resistencia.
5.  Reducir el tiempo del ciclo de producción de un curso estándar en al menos un 30% y establecer métricas de calidad automatizadas.

**5. Alcance y resultados esperados**

| Componente | Descripción | Resultado esperado |
| :--- | :--- | :--- |
| **Diagnóstico y Rediseño de Procesos** | Mapeo de procesos (As-Is), análisis de brechas y diseño del nuevo flujo de trabajo (To-Be) con puntos de inyección de IA. | Documento de diagnóstico y diseño del modelo operativo AI-First. |
| **Plataforma de IA para Contenido** | Integración de servicios de Azure OpenAI para la generación de borradores, resúmenes, y creación de bancos de preguntas, dentro de una interfaz unificada. | Plataforma web interna operativa y conectada a los flujos de trabajo. |
| **Gobernanza de Contenido IA** | Definición de políticas, lineamientos éticos y de calidad, y roles para la validación de contenido generado por IA (Human-in-the-loop). | Manual de gobernanza de IA para la producción de contenido. |
| **Gestión del Cambio y Adopción**| Talleres, sesiones de co-creación, desarrollo de materiales de capacitación y un programa de "IA Champions" dentro del equipo. | Plan de adopción ejecutado, equipo capacitado y métricas de uso positivas. |

**6. Enfoque metodológico**

Utilizaremos el marco de **Arquitectura de Horizontes (HA)** para asegurar una transformación balanceada.

| Dimensión | Aplicación en el proyecto |
| :--- | :--- |
| **Legado** | Asegura que el contenido generado por IA mantenga el tono, estilo y rigor pedagógico que definen a Tecmilenio. |
| **Comunidad**| Centra el proyecto en el equipo de 86 personas, diseñando la solución CON ellos y no PARA ellos, fomentando la adopción y el desarrollo de nuevas habilidades. |
| **Aprendizaje**| Estructura las bases de conocimiento con los mejores cursos de Tecmilenio para que la IA aprenda (fine-tuning) y mejore su calidad de generación. |
| **Tecnología**| Configura una arquitectura en Azure (OpenAI, Logic Apps, AI Search) optimizada para flujos de procesamiento de lenguaje natural a escala. |
| **Contexto** | Garantiza la gestión de la propiedad intelectual del contenido generado y establece políticas claras de autoría y responsabilidad. |
| **Proyectos**| Despliega la transformación de manera incremental, comenzando con un piloto en un equipo para validar el modelo antes del despliegue total. |

**7. Arquitectura técnica sobre Microsoft Azure**

| Elemento / Capa | Descripción / Componentes |
| :--- | :--- |
| **Capa de orquestación** | **Azure Logic Apps / Power Automate:** Para automatizar los flujos de trabajo de creación y revisión, conectando las diferentes etapas y herramientas. |
| **Capa cognitiva y semántica** | **Azure OpenAI Service (GPT-4o):** Núcleo para la generación de texto (temarios, guiones, actividades). Modelos con fine-tuning para el estilo Tecmilenio. |
| **Capa de conocimiento** | **Azure AI Search:** Para indexar el acervo de contenido existente y permitir una búsqueda semántica que sirva de contexto a los modelos generativos ("Retrieval-Augmented Generation"). |
| **Capa de seguridad y gobernanza** | **Azure Entra ID:** Para el control de acceso a la plataforma. **Azure Purview** para el seguimiento de versiones y auditoría de cambios. |
| **Capa de monitoreo y mejora** | **Azure Monitor + Power BI:** Para dashboards que midan la productividad (tiempo por tarea, volumen de producción) y el uso de las herramientas. |

**8. Modelo de gobernanza institucional**

| Nivel           | Responsabilidad                                                                                                                      | Herramientas                |
| :-------------- | :----------------------------------------------------------------------------------------------------------------------------------- | :-------------------------- |
| **Estratégico** | **Comité de Calidad Académica:** Valida los lineamientos pedagógicos y éticos para el contenido generado por IA.                     | SharePoint, Power BI        |
| **Operativo**   | **Líder de la Fábrica Instruccional:** Supervisa la implementación, los KPIs de producción y la adopción de las nuevas herramientas. | Azure DevOps, Power BI      |
| **Técnico**     | **Equipo de Mantenimiento:** Asegura la disponibilidad y el rendimiento de la plataforma de IA.                                      | Azure Monitor, Azure DevOps |

**9. Fases de implementación (Cronograma)**

| Fase | Periodo | Objetivo principal | Entregables clave |
| :--- | :--- | :--- | :--- |
| **Fase 1 - Descubrimiento y Diseño** | Mes 1 | Realizar el diagnóstico y diseñar el nuevo modelo operativo y la arquitectura técnica. | Diagnóstico, Documento de Arquitectura. |
| **Fase 2 - Desarrollo y Piloto** | Mes 2-3 | Desarrollar la plataforma de IA y probarla con un equipo piloto (10-15 personas). | Plataforma V1, Informe de resultados del piloto. |
| **Fase 3 - Despliegue e Iteración** | Mes 4-5 | Desplegar la solución a toda la fábrica en oleadas, realizando ajustes basados en la retroalimentación. | Plataforma en producción, Manuales de usuario. |
| **Fase 4 - Optimización y Transferencia** | Mes 6 | Capacitar a los administradores finales, entregar documentación y optimizar el rendimiento. | Equipo 100% capacitado, Documentación final. |

**Roadmap de Implementación Visual**

| Fase | M1 | M2 | M3 | M4 | M5 | M6 |
| :--- | :-- | :-- | :-- | :-- | :-- | :-- |
| **F1: Descubrimiento y Diseño** | ■■ | | | | | |
| **F2: Desarrollo y Piloto** | | ■■ | ■■ | | | |
| **F3: Despliegue e Iteración**| | | | ■■ | ■■ | |
| **F4: Optimización y Transferencia**| | | | | | ■■ |
| **Hito Crítico** | | **▲** | | **▲** | | **▲** |
*Hitos: ▲ Diseño Aprobado, ▲ Piloto Exitoso, ▲ Despliegue Completo*

**10. Presupuesto, fases y entregables**

*   **Monto total:** $5,800,000 MXN + IVA
*   **Duración:** 6 meses
*   **Distribución estimada:** 60% RRHH, 25% Gestión del Cambio y Capacitación, 15% Infraestructura Azure y Licencias.
*   **Equipo base:** 1x Project Manager, 1x Consultor de Procesos, 2x Arquitecto/Ingeniero de IA, 1x Especialista en Adopción y Capacitación.

***Nota del consultor:** El presupuesto está bien alineado con un proyecto de esta naturaleza en México, que combina consultoría de procesos de alto nivel con desarrollo tecnológico y una componente crítica de gestión del cambio para un equipo grande. La inversión es razonable para el ROI esperado en términos de eficiencia y capacidad aumentada.*

**11. Evaluación de impacto y continuidad**

*   **Evaluación:**
    *   **Operativa:** Medición de KPIs clave: tiempo de producción por curso, número de cursos producidos por trimestre, costo por curso.
    *   **Organizacional:** Encuestas de satisfacción y adopción del equipo; evaluación de nuevas competencias adquiridas.
*   **Continuidad:**
    *   **Hypercare:** 1 mes de soporte intensivo post-lanzamiento.
    *   **SLA de soporte:** Contrato de soporte evolutivo y mantenimiento de la plataforma por 12 meses.
    *   **Roadmap de Innovación:** Plan para incorporar futuras capacidades de IA (ej. personalización de contenido, IA de voz para audio-cursos).

**12. Mapa de riesgos y mitigaciones**

| Riesgo | Tipo | Impacto | Mitigación |
| :--- | :--- | :--- | :--- |
| **Resistencia al cambio del equipo** | Organizacional | Alto | Programa de gestión del cambio desde el día 1, involucrando al equipo en el diseño (co-creación) y comunicando transparentemente los beneficios. |
| **Calidad subóptima del contenido generado** | Técnico | Alto | Implementar flujos "Human-in-the-loop" para toda generación, realizar fine-tuning de los modelos con contenido de alta calidad de Tecmilenio. |
| **Dependencia excesiva de la IA** | Estratégico | Medio | Definir claramente qué tareas son "IA-Asistidas" vs. "IA-Generadas", manteniendo al humano como validador final y estratega pedagógico. |

**13. Entregables**

| Categoría | Entregable | Descripción / Alcance | Formato / Medio de entrega |
| :--- | :--- | :--- | :--- |
| **Consultoría** | Documento de Modelo Operativo AI-First | Detalla los nuevos procesos, roles y flujos de trabajo de la fábrica. | PDF / SharePoint. |
| **Software** | Plataforma de Asistencia de Contenido | Aplicación web interna para el equipo de diseño instruccional. | Ambiente operativo en Azure. |
| **Gobernanza** | Manual de Gobernanza de Contenido IA | Políticas de uso, calidad y ética para el contenido asistido por IA. | PDF / SharePoint. |
| **Capacitación** | Materiales de Formación | Guías, videos tutoriales y manuales para el uso de la nueva plataforma. | PowerPoint, PDF, Videos. |

---

### **Propuesta 2: Sistema de IA para Rutas Personalizadas de Emprendimiento y Empleabilidad**

**1. Portada ejecutiva**

*   **Título completo:** Diseño y Desarrollo de un Sistema de Inteligencia Artificial para la Recomendación de Rutas Académicas y Profesionales Personalizadas.
*   **Subtítulo:** Potenciando el propósito de vida de cada estudiante a través de la analítica de datos y la IA para guiar su camino hacia el emprendimiento o la empleabilidad.
*   **Instituciones participantes:**
    *   Universidad Tecmilenio - Vicerrectorado Académico
    *   Horizons Architecture Systems, S.A.P.I. de C.V.
*   **Duración del proyecto:** 8 meses

**2. Resumen ejecutivo**

La Universidad Tecmilenio se diferencia por su enfoque en el "propósito de vida" y la preparación de sus estudiantes para un futuro exitoso. Para llevar esta visión al siguiente nivel, es necesario pasar de un modelo de orientación general a uno de **hiper-personalización a escala**. Cada estudiante posee un conjunto único de talentos, intereses y metas que, si se analizan correctamente, pueden trazar una ruta óptima hacia el emprendimiento o la empleabilidad de alto impacto.

Este proyecto propone el desarrollo de un **Sistema de Rutas Personalizadas (SRP)**, una plataforma de IA que analizará los datos académicos y extracurriculares del estudiante para generar recomendaciones proactivas. El sistema sugerirá materias optativas, certificaciones, proyectos, mentores y actividades que fortalezcan su perfil, ya sea para crear su propia empresa o para unirse a una organización líder.

Construido sobre **Microsoft Azure** con un fuerte énfasis en la ética y la privacidad de datos, el SRP será una herramienta invaluable para estudiantes y asesores académicos, materializando la promesa de Tecmilenio de ser un verdadero catalizador del propósito y el éxito personal y profesional.

*   **Duración total:** 8 meses
*   **Presupuesto estimado:** $7,200,000 MXN + IVA
*   **Resultados principales:** Prototipo funcional del sistema de recomendación, modelo de datos del estudiante definido, y arquitectura de datos escalable en Azure.

**3. Propósito general**

Maximizar el potencial de cada estudiante de la Universidad Tecmilenio, proporcionando una guía personalizada y basada en datos que ilumine su camino hacia el éxito profesional, ya sea a través del emprendimiento o la empleabilidad.

**4. Objetivos específicos**

1.  Definir y construir un modelo de datos unificado del estudiante ("Student 360 View") que integre información de al menos 3 sistemas (LMS, gestión académica, etc.).
2.  Diseñar y entrenar un motor de recomendación de IA capaz de identificar patrones y generar rutas personalizadas con una precisión validada.
3.  Desarrollar un prototipo de interfaz de usuario (web/móvil) donde el estudiante pueda visualizar su ruta, explorar recomendaciones y seguir su progreso.
4.  Establecer un marco de gobernanza de datos robusto que garantice la privacidad, seguridad y uso ético de la información del estudiante en todo momento.
5.  Validar el prototipo con un grupo piloto de estudiantes y asesores para medir su impacto y recoger feedback para futuras iteraciones.

**5. Alcance y resultados esperados**

| Componente | Descripción | Resultado esperado |
| :--- | :--- | :--- |
| **Arquitectura de Datos** | Diseño e implementación de un Data Lakehouse en Azure para centralizar y procesar los datos del estudiante de diversas fuentes. | Repositorio de datos centralizado y operativo. |
| **Motor de Recomendación de IA** | Desarrollo de algoritmos (ej. filtrado colaborativo, modelos basados en contenido) que forman el núcleo del sistema de recomendación. | Modelo de IA entrenado y desplegado como un servicio de API. |
| **Prototipo de Interfaz (Frontend)** | Diseño de la experiencia de usuario (UX/UI) y desarrollo de una aplicación web para que los estudiantes interactúen con el sistema. | Prototipo funcional y navegable accesible para el piloto. |
| **Gobernanza de Datos y Ética** | Definición de políticas de consentimiento, anonimización y uso de datos, alineadas con la LFPDPPP y los valores de Tecmilenio. | Manual de gobernanza de datos del estudiante. |

**6. Enfoque metodológico**

El proyecto seguirá el marco de **Arquitectura de Horizontes (HA)**.

| Dimensión | Aplicación en el proyecto |
| :--- | :--- |
| **Legado** | Se enfoca en el "propósito de vida", asegurando que las recomendaciones de la IA sean sugerencias para potenciar al estudiante, no directivas que limiten su albedrío. |
| **Comunidad**| Involucra a estudiantes y asesores académicos en el diseño de la interfaz y la validación de las recomendaciones, asegurando que la herramienta sea útil y adoptada. |
| **Aprendizaje** | El sistema está diseñado para aprender y mejorar con cada interacción del estudiante, refinando la calidad de sus recomendaciones a lo largo del tiempo. |
| **Tecnología** | Utiliza servicios avanzados de Azure como Databricks, Azure ML y Cosmos DB para construir una plataforma de datos y IA robusta y escalable. |
| **Contexto** | La privacidad y la ética del estudiante son el pilar central, con un diseño "Privacy-by-Design" desde el inicio del proyecto. |
| **Proyectos**| Se desarrolla como un prototipo funcional (MVP), permitiendo un aprendizaje rápido y una validación de mercado antes de un despliegue a gran escala. |

**7. Arquitectura técnica sobre Microsoft Azure**

| Elemento / Capa | Descripción / Componentes |
| :--- | :--- |
| **Capa de Ingesta y Datos** | **Azure Data Factory:** Para la ingesta de datos desde los sistemas fuente. **Azure Data Lake Storage:** Para el almacenamiento de datos crudos y procesados. |
| **Capa de Procesamiento y ML**| **Azure Databricks / Synapse Analytics:** Para el procesamiento de datos a gran escala y la ingeniería de características. **Azure Machine Learning:** Para entrenar, desplegar y gestionar el ciclo de vida del modelo de recomendación. |
| **Capa de Servicio y Aplicación** | **Azure Cosmos DB:** Para almacenar los perfiles de usuario y las recomendaciones generadas. **Azure Functions / App Service:** Para exponer el motor de IA como una API REST y para alojar el backend de la aplicación web. |
| **Capa de Seguridad y Gobernanza** | **Azure Purview:** Para el mapeo y linaje de datos. **Azure Key Vault** y **Entra ID** para la seguridad. |
| **Capa de Visualización (Frontend)**| **React / Vue.js** alojado en Azure Static Web Apps, consumiendo la API del backend. |

**8. Modelo de gobernanza institucional**

| Nivel | Responsabilidad | Herramientas |
| :--- | :--- | :--- |
| **Estratégico** | **Comité de Ética de Datos:** Define las políticas sobre qué datos se pueden usar y con qué propósito, garantizando la transparencia para el estudiante. | Purview, SharePoint |
| **Operativo** | **Dueño del Producto (Product Owner):** Prioriza las funcionalidades del sistema, gestiona el backlog y representa la voz del estudiante y los asesores. | Azure DevOps |
| **Técnico** | **Equipo de Datos y Analítica:** Es responsable de la calidad de los datos, el rendimiento del modelo y la salud de la infraestructura. | Azure Monitor, Databricks |

**9. Fases de implementación (Cronograma)**

| Fase | Periodo | Objetivo principal | Entregables clave |
| :--- | :--- | :--- | :--- |
| **Fase 1 - Data Discovery y Arquitectura** | Mes 1-2 | Identificar y conectar las fuentes de datos; diseñar la arquitectura de datos y del modelo de IA. | Mapa de datos, Documento de Arquitectura. |
| **Fase 2 - Desarrollo del Backend y Modelo** | Mes 3-5 | Implementar el Data Lakehouse y desarrollar la primera versión del motor de recomendación. | Data Lakehouse operativo, API del modelo V1. |
| **Fase 3 - Desarrollo del Frontend y Piloto**| Mes 6-7 | Construir la interfaz de usuario y lanzar un piloto con un grupo controlado de estudiantes. | Prototipo web funcional, Informe de feedback. |
| **Fase 4 - Refinamiento y Transferencia** | Mes 8 | Iterar sobre el prototipo basado en el feedback, entregar documentación y capacitar al equipo de Tecmilenio. | Prototipo V2, Documentación final. |

**Roadmap de Implementación Visual**

| Fase | M1 | M2 | M3 | M4 | M5 | M6 | M7 | M8 |
| :--- | :-- | :-- | :-- | :-- | :-- | :-- | :-- | :-- |
| **F1: Data Discovery y Arq.** | ■■ | ■■ | | | | | | |
| **F2: Desarrollo Backend/Modelo** | | | ■■ | ■■ | ■■ | | | |
| **F3: Desarrollo Frontend/Piloto** | | | | | | ■■ | ■■ | |
| **F4: Refinamiento y Transferencia**| | | | | | | | ■■ |
| **Hito Crítico** | | **▲** | | | **▲** | | **▲** | |
*Hitos: ▲ Arquitectura Aprobada, ▲ Modelo V1 Desplegado, ▲ Piloto Completado*

**10. Presupuesto, fases y entregables**

*   **Monto total:** $7,200,000 MXN + IVA
*   **Duración:** 8 meses
*   **Distribución estimada:** 70% RRHH (perfiles de datos son costosos), 20% Infraestructura Azure, 10% Gestión.
*   **Equipo base:** 1x Project Manager, 1x Arquitecto de Datos, 2x Ingeniero de Datos/ML, 1x Científico de Datos, 1x Diseñador/Desarrollador UX/UI.

***Nota del consultor:** Este presupuesto es consistente con proyectos de ciencia de datos y desarrollo de producto digital en México. La mayor parte de la inversión se concentra en el talento especializado en datos e IA, que es crucial para el éxito del proyecto. El plazo de 8 meses es realista para abordar la complejidad de la integración de datos y el desarrollo de un modelo de recomendación robusto.*

**11. Evaluación de impacto y continuidad**

*   **Evaluación:**
    *   **Cualitativa:** Encuestas de satisfacción a estudiantes y asesores sobre la utilidad de las recomendaciones.
    *   **Cuantitativa:** Tasa de adopción de las recomendaciones (ej. % de estudiantes que se inscriben en una materia sugerida), y a largo plazo, correlación con métricas de empleabilidad y éxito de emprendimientos.
*   **Continuidad:**
    *   **Mantenimiento Evolutivo:** Plan para la mejora continua del modelo de IA y la adición de nuevas funcionalidades a la plataforma.
    *   **Transferencia de Conocimiento:** Capacitación profunda al equipo de Datos y Analítica de Tecmilenio para que puedan operar y evolucionar el sistema.

**12. Mapa de riesgos y mitigaciones**

| Riesgo | Tipo | Impacto | Mitigación |
| :--- | :--- | :--- | :--- |
| **Calidad/Disponibilidad de Datos** | Técnico | Alto | Fase 1 de "Data Discovery" dedicada a evaluar y limpiar las fuentes de datos. Empezar con las fuentes más confiables y expandir gradualmente. |
| **"Caja Negra" / Sesgos del Modelo** | Ético | Alto | Utilizar técnicas de IA explicable (XAI) para que las recomendaciones sean interpretables. Auditorías de sesgo periódicas en el modelo. |
| **Baja adopción por estudiantes** | Organizacional | Medio | Diseño de UX centrado en el usuario, con la participación activa de estudiantes en el proceso. Campaña de comunicación que resalte los beneficios. |

**13. Entregables**

| Categoría | Entregable | Descripción / Alcance | Formato / Medio de entrega |
| :--- | :--- | :--- | :--- |
| **Datos** | Modelo de Datos "Student 360" | Documentación del modelo canónico de datos del estudiante. | Wiki / SharePoint. |
| **Software** | Prototipo Web del Sistema SRP | Aplicación web funcional para el piloto. | Ambiente operativo en Azure. |
| **IA** | API del Motor de Recomendación | Endpoint RESTful que entrega recomendaciones personalizadas. | Documentación de API (Swagger). |
| **Gobernanza** | Marco de Uso Ético de Datos | Políticas y guías para el manejo de la información del estudiante. | PDF / SharePoint. |

---

### **Propuesta 3: Programa Piloto de Arte, IA y Bienestar Emocional**

**1. Portada ejecutiva**

*   **Título completo:** Diseño e Implementación de un Programa Piloto para la Gestión Emocional a través del Arte y la Inteligencia Artificial Generativa.
*   **Subtítulo:** Una iniciativa innovadora para materializar el Ecosistema de Bienestar y Felicidad en los campus de Tecmilenio, utilizando el arte digital como herramienta de expresión y gestión emocional.
*   **Instituciones participantes:**
    *   Universidad Tecmilenio - Vicerrectorado Académico
    *   Horizons Architecture Systems, S.A.P.I. de C.V.
*   **Duración del proyecto:** 5 meses

**2. Resumen ejecutivo**

El Ecosistema de Bienestar y Felicidad es un pilar fundamental y diferenciador de la Universidad Tecmilenio. Para continuar innovando en este ámbito, es crucial explorar nuevas formas de conectar con los estudiantes y ofrecerles herramientas prácticas para la gestión de sus emociones. El arte ha sido históricamente un vehículo para la expresión, y la inteligencia artificial generativa abre un universo de posibilidades creativas.

Este proyecto propone el diseño y la ejecución de un **programa piloto que combina arte, tecnología y psicología positiva**. A través de una serie de intervenciones artísticas en los campus, los estudiantes utilizarán herramientas de IA generativa (imagen, texto, música) para crear obras que representen y les ayuden a procesar sus emociones. Estas intervenciones serán diseñadas en colaboración con expertos en bienestar.

El proyecto no solo creará una experiencia memorable y de alto impacto para los estudiantes, sino que también posicionará a Tecmilenio a la vanguardia de la aplicación de la IA para el desarrollo humano y el bienestar, generando un caso de estudio único a nivel mundial.

*   **Duración total:** 5 meses
*   **Presupuesto estimado:** $3,500,000 MXN + IVA
*   **Resultados principales:** Manual de intervenciones artísticas con IA, plataforma tecnológica para las activaciones, y ejecución del piloto en al menos dos campus con un reporte de impacto.

**3. Propósito general**

Fomentar el bienestar y la inteligencia emocional de la comunidad estudiantil de Tecmilenio, mediante la creación de un programa innovador que utiliza el arte digital y la IA generativa como herramientas para la expresión, la reflexión y la gestión de las emociones.

**4. Objetivos específicos**

1.  Co-diseñar, con expertos en bienestar de Tecmilenio, una metodología para al menos 3 tipos de intervenciones artísticas que utilicen IA para la gestión emocional.
2.  Desarrollar una plataforma web o una serie de quioscos interactivos que alojen las herramientas de IA generativa seleccionadas, con una interfaz de usuario simple e intuitiva.
3.  Implementar el programa piloto en al menos dos campus de Tecmilenio durante un periodo definido (ej. "Semana del Bienestar").
4.  Medir el impacto cualitativo y cuantitativo del programa a través de encuestas, entrevistas y análisis de las obras creadas (de forma anónima).
5.  Crear un "Playbook" que documente la metodología y los resultados, permitiendo la escalabilidad del programa a otros campus y contextos.

**5. Alcance y resultados esperados**

| Componente | Descripción | Resultado esperado |
| :--- | :--- | :--- |
| **Diseño Metodológico** | Talleres con psicólogos y artistas para diseñar las dinámicas de las intervenciones. Se definirá el "viaje emocional" del participante. | Manual de Intervenciones "Arte-IA-Emoción". |
| **Plataforma Tecnológica** | Desarrollo de una interfaz que integre APIs de modelos de IA generativa (ej. DALL-E 3, Stable Diffusion, Suno AI) de forma sencilla. | Plataforma web/quiosco funcional para las activaciones. |
| **Ejecución del Piloto** | Logística y producción de las intervenciones en los campus seleccionados, incluyendo la facilitación de las sesiones. | Eventos de intervención ejecutados con éxito. |
| **Análisis y Reporte de Impacto** | Recolección y análisis de datos de participación y percepción. Creación de un reporte visual con los hallazgos clave. | Reporte de impacto del piloto y galería digital anónima de obras. |

**6. Enfoque metodológico**

El proyecto se basa en el marco de **Arquitectura de Horizontes (HA)**.

| Dimensión | Aplicación en el proyecto |
| :--- | :--- |
| **Legado** | Se conecta directamente con la misión de "Universidad Positiva", asegurando que la tecnología sea un medio para el florecimiento humano. |
| **Comunidad**| Crea una experiencia compartida y tangible en los campus, fortaleciendo el sentido de pertenencia y abriendo conversaciones sobre salud mental. |
| **Aprendizaje**| Genera insights sobre cómo los jóvenes utilizan la tecnología para la expresión emocional, conocimiento que puede informar futuras iniciativas de bienestar. |
| **Tecnología**| Se enfoca en la curación e integración de las mejores herramientas de IA generativa, priorizando la facilidad de uso y el impacto creativo sobre la complejidad técnica. |
| **Contexto** | Se maneja la sensibilidad de los datos emocionales con un enfoque de anonimato total y consentimiento explícito por parte de los participantes. |
| **Proyectos**| Se enmarca como un piloto o "laboratorio de innovación", diseñado para aprender rápido y generar un caso de éxito visible y comunicable. |

**7. Arquitectura técnica sobre Microsoft Azure**

| Elemento / Capa | Descripción / Componentes |
| :--- | :--- |
| **Capa de Aplicación (Frontend)** | **Aplicación Web Progresiva (PWA)** desarrollada en React/Vue.js y alojada en **Azure Static Web Apps** para fácil acceso desde cualquier dispositivo. |
| **Capa de Servicios (Backend)** | **Azure Functions** como un backend ligero (serverless) que actúa como un proxy seguro para las llamadas a las APIs de IA generativa. |
| **Capa Cognitiva y Creativa** | Integración con **Azure OpenAI Service (DALL-E 3)** para generación de imágenes. <br> Conexión a APIs de terceros para música (ej. Suno) o modelos de código abierto (ej. Stable Diffusion) alojados en **Azure Machine Learning**. |
| **Capa de Almacenamiento** | **Azure Blob Storage:** para almacenar las obras de arte generadas de forma anónima y segura. |
| **Capa de Monitoreo** | **Application Insights:** para monitorear el uso y el rendimiento de la aplicación durante las intervenciones. |

**8. Modelo de gobernanza institucional**

| Nivel | Responsabilidad | Herramientas |
| :--- | :--- | :--- |
| **Estratégico** | **Consejo de Bienestar Tecmilenio:** Valida el enfoque psicológico de las intervenciones y aprueba la metodología. | SharePoint, Teams |
| **Operativo** | **Líder del Proyecto / Coordinador de Campus:** Gestiona la logística, la comunicación y la ejecución de las intervenciones en cada campus. | Trello / Asana |
| **Técnico** | **Equipo de Desarrollo:** Mantiene la plataforma tecnológica y asegura su correcto funcionamiento durante los eventos. | Azure DevOps, GitHub |

**9. Fases de implementación (Cronograma)**

| Fase | Periodo | Objetivo principal | Entregables clave |
| :--- | :--- | :--- | :--- |
| **Fase 1 - Investigación y Diseño** | Mes 1 | Diseñar la metodología de las intervenciones y la arquitectura técnica. | Manual de Intervenciones V1, Diseño de UX. |
| **Fase 2 - Desarrollo Tecnológico** | Mes 2-3 | Construir y probar la plataforma web/quiosco. | Plataforma Beta funcional. |
| **Fase 3 - Ejecución del Piloto** | Mes 4 | Desplegar las intervenciones en los campus seleccionados. | Intervenciones realizadas, datos recolectados. |
| **Fase 4 - Análisis y Documentación** | Mes 5 | Analizar los resultados, crear el reporte de impacto y el playbook final. | Reporte de Impacto, Playbook del Programa. |

**Roadmap de Implementación Visual**

| Fase | M1 | M2 | M3 | M4 | M5 |
| :--- | :-- | :-- | :-- | :-- | :-- |
| **F1: Investigación y Diseño** | ■■ | | | | |
| **F2: Desarrollo Tecnológico**| | ■■ | ■■ | | |
| **F3: Ejecución del Piloto** | | | | ■■ | |
| **F4: Análisis y Documentación**| | | | | ■■ |
| **Hito Crítico** | **▲** | | **▲** | **▲** | |
*Hitos: ▲ Metodología Aprobada, ▲ Plataforma Lista, ▲ Piloto Finalizado*

**10. Presupuesto, fases y entregables**

*   **Monto total:** $3,500,000 MXN + IVA
*   **Duración:** 5 meses
*   **Distribución estimada:** 50% RRHH, 30% Producción y Logística del Piloto, 20% Infraestructura y Licencias de APIs.
*   **Equipo base:** 1x Project Manager / Productor, 1x Diseñador de Experiencias (UX), 1x Desarrollador Full-Stack, 1x Consultor en Bienestar (parcial).

***Nota del consultor:** Este presupuesto es adecuado para un proyecto de innovación tipo piloto de alto impacto. La inversión se equilibra entre el desarrollo tecnológico y la producción de los eventos en campus, que es clave para el éxito. El monto es competitivo y busca generar un caso de estudio con alta visibilidad y potencial de escalamiento a un costo controlado.*

**11. Evaluación de impacto y continuidad**

*   **Evaluación:**
    *   **Participación:** Número de estudiantes que interactúan con las instalaciones.
    *   **Cualitativa:** Entrevistas y grupos focales para entender la percepción y el valor de la experiencia para los estudiantes.
    *   **Bienestar:** Encuestas pre y post intervención para medir cambios en el estado de ánimo o la percepción de herramientas de gestión emocional.
*   **Continuidad:**
    *   **Playbook de Escalabilidad:** El entregable principal es una guía para que Tecmilenio pueda replicar y escalar el programa de forma autónoma.
    *   **Galería Digital Permanente:** Creación de un espacio virtual para exhibir una selección curada y anónima de las obras, extendiendo la vida del proyecto.

**12. Mapa de riesgos y mitigaciones**

| Riesgo | Tipo | Impacto | Mitigación |
| :--- | :--- | :--- | :--- |
| **Baja participación de estudiantes** | Organizacional | Medio | Campaña de comunicación creativa y atractiva en campus. Ubicar las instalaciones en zonas de alto tráfico. |
| **Complejidad técnica de las APIs** | Técnico | Medio | Seleccionar APIs robustas y bien documentadas. Tener un plan de contingencia con herramientas alternativas. |
| **Manejo de temas emocionales sensibles** | Ético | Alto | Las intervenciones no son terapia; deben ser diseñadas como espacios de expresión segura. Facilitadores capacitados presentes y canales de apoyo profesional claramente comunicados. |

**13. Entregables**

| Categoría | Entregable | Descripción / Alcance | Formato / Medio de entrega |
| :--- | :--- | :--- | :--- |
| **Metodología** | Playbook del Programa "Arte-IA" | Guía completa para diseñar y ejecutar las intervenciones. | PDF interactivo / SharePoint. |
| **Software** | Plataforma de Creación Artística | Aplicación web utilizada en los quioscos o dispositivos durante el piloto. | URL de la aplicación en Azure. |
| **Evento** | Reporte de Impacto del Piloto | Análisis de los resultados y recomendaciones para futuras ediciones. | Presentación ejecutiva y reporte en PDF. |
| **Comunicación** | Galería Digital de Obras | Sitio web con una selección curada y anónima de las creaciones de los estudiantes. | Sitio web público o interno. |
## Connections
- [[HA PROJECTS]]
