# Propuesta de orquestación de inteligencia artificial para investigación jurídica de mercado

*   **Título del Proyecto:** Despliegue de agentes de IA y análisis de información para el estudio "Estado y Futuro de la Práctica Legal en México 2026".
*   **Institución Solicitante:** Escuela de Ciencias Sociales y Gobierno, Tecnológico de Monterrey.
*   **Socio Tecnológico:** Horizons Architecture S.A.P.I. de C.V.
*   **Duración del Proyecto:** 6 meses (Alineado al cronograma Lemontech).
*   **Fecha de elaboración:** 9 de enero de 2026.

---

**2. Resumen ejecutivo**

La Escuela de Ciencias Sociales y Gobierno lidera el estudio "Estado y futuro de la práctica legal en México 2026", el cual requiere procesar información cualitativa y cuantitativa. El desafío reside en la dificultad logística de realizar y analizar decenas de entrevistas y registros de despachos con el equipo de investigación humano en el tiempo estipulado, buscando preservar el anonimato y la consistencia.

**Arquitectura de Horizontes (AH)** propone el despliegue de una arquitectura de IA como soporte operativo del equipo de investigación. La propuesta contempla el despliegue de entrevistadores sintéticos para el levantamiento de campo y motores de razonamiento para la síntesis de hallazgos, bajo el marco metodológico de **"Arquitectura de Horizontes"**.

En este modelo de colaboración, **AH provee la capacidad de procesamiento y generación**, mientras que el **Tecnológico de Monterrey conserva la autoridad de validación**, facilitando que los hallazgos generados por la IA sean revisados por especialistas en derecho antes de su publicación.

*   **Duración total:** 24 semanas.
*   **Presupuesto estimado:** $580,000 MXN + IVA.
*   **Resultados:** Sistema de agentes desplegado, hasta 50 entrevistas procesadas, base de conocimientos estructurada y asistencia en redacción del White Paper.

---

**3. Propósito general**

Proveer al equipo de investigación del Tec de Monterrey de una infraestructura de Inteligencia Artificial para la recolección y análisis de datos, permitiendo generar inteligencia de mercado anonimizada para Lemontech.

---

**4. Objetivos específicos**

1.  **Escalar el levantamiento cualitativo:** Diseñar agentes de IA conversacionales para conducir o asistir en las entrevistas semi-estructuradas, promoviendo la consistencia metodológica.
2.  **Procesamiento de datos no estructurados:** Implementar un pipeline de ingestión de datos (RAG) para analizar transcripciones y documentos e identificar posibles patrones sobre modelos de negocio y cultura operativa.
---

**5. Alcance y resultados esperados**

| Componente                 | Descripción                                                  | Resultado Esperado                                                            |
| :------------------------- | :----------------------------------------------------------- | :---------------------------------------------------------------------------- |
| **Agentes de entrevista**  | Agente conversacional con protocolos de entrevista cargados. | Realización autónoma o asistida de entrevistas preliminares y de seguimiento. |
| **Motor de Análisis**      | Sistema que cruza datos cuantitativos con cualitativos.      | Reportes de hallazgos, detección de clústeres.                                |
| **Soporte al White Paper** | Agentes redactores alineados al estilo del Tec de Monterrey. | Generación de borradores de capítulos, resúmenes y anexos.                    |

---

**6. Enfoque metodológico y tecnológico**

El enfoque metodológico de la investigación será determinado íntegramente por el profesorado y equipo de especialistas del Tecnológico de Monterrey. Arquitectura de Horizontes actuará como facilitador técnico, empleando su tecnología propietaria para realizar los análisis de inteligencia artificial y procesamientos requeridos por el estudio.

---

**7. Arquitectura técnica en la nube**

Se propone una arquitectura desplegada en la nube que cumpla con los estándares de cumplimiento normativo y seguridad institucional.

| Capa                | Función                                             |
| :------------------ | :-------------------------------------------------- |
| **Cognitiva**       | Motor de razonamiento para entrevistas y síntesis.  |
| **Conocimiento**    | Almacenamiento para recuperación de contexto (RAG). |
| **Voz/Interacción** | Transcripción (Speech-to-Text) y síntesis de voz.   |

---

**8. Modelo de gobernanza institucional**

Se establece una separación de responsabilidades:

| Nivel            | Rol                          | Responsable                    | Responsabilidad                                       |
| :--------------- | :--------------------------- | :----------------------------- | :---------------------------------------------------- |
| **Estratégico**  | Dirección de Investigación   | **Tec de Monterrey**           | Definición de objetivos y aprobación final.           |
| **Validación**   | Validación Legal (Validator) | **Tec de Monterrey**           | **Revisión obligatoria** del output de la IA.         |
| **Técnico**      | Arquitectura de IA           | **Arquitectura de Horizontes** | Diseño de prompts y mantenimiento de infraestructura. |
| **AI Operativa** | Agente de IA                 | **Arquitectura de Horizontes** | Ejecución de tareas repetitivas y pre-procesamiento.  |

---

**9. Fases de implementación (Cronograma)**

El cronograma se alinea con las fases del proyecto general, detallando las actividades de HA:

|                                   |           |           |           |           |           |           |
| --------------------------------- | --------- | --------- | --------- | --------- | --------- | --------- |
| **Fase / Entregable HA**          | **Mes 1** | **Mes 2** | **Mes 3** | **Mes 4** | **Mes 5** | **Mes 6** |
| **1. Despliegue Infraestructura** | ██        |           |           |           |           |           |
| **2. Ingestión y Mapeo**          | ██        | ██        |           |           |           |           |
| **3. Operación Agentes (Campo)**  |           | ██        | ██        | ██        |           |           |
| **4. Generación Insights**        |           |           | ██        | ██        | ██        |           |
| **5. Generación Borradores**      |           |           | ██        | ██        | ██        | ██        |

*   **Fase 1:** Configuración de servicios en la nube y agentes base.
*   **Fase 2:** Procesamiento de bases de datos públicas para el mapeo cuantitativo.
*   **Fase 3:** Despliegue de agentes para entrevistas (simultáneo al trabajo humano).
*   **Fase 4:** Análisis de patrones sobre la data recolectada.
*   **Fase 5:** Asistencia en la redacción final.

---

**10. Presupuesto**

El presupuesto contempla el equipo de Arquitectura de Horizontes y costos de infraestructura.

**Inversión Total Estimada:**

**Desglose:**

| Concepto                          | % del Presupuesto | Monto (MXN)  | Detalles                                                   |
| :-------------------------------- | :---------------- | :----------- | :--------------------------------------------------------- |
| **Ingeniería de IA y Desarrollo** | 70%               | $406,000     | Arquitectura, ingeniería de datos e ingeniería de prompts. |
| **Gestión y Consultoría**         | 20%               | $116,000     | Dirección de proyecto y alineación.                        |
| **Infraestructura Cloud**         | 10%               | $58,000      | Consumo estimado de cómputo.                               |
| **Subtotal**                      |                   | **$580,000** | **Antes de impuestos**                                     |
| **IVA (16%)**                     |                   | **$92,800**  | Impuesto al Valor Agregado.                                |
| **Total**                         |                   | **$672,800** | **Monto final con IVA**                                    |

**Nota:** El presupuesto cubre 6 meses de operación especializada y consumo de recursos de IA.

---

**13. Entregables**

Como socios tecnológicos, entregaremos los insumos y la infraestructura necesaria para que el equipo de investigación del Tec de Monterrey genere los productos finales:

| Entregable de Soporte (AI First)                             | Descripción del Aporte Tecnológico                                                                                                      |
| :----------------------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------------------------- |
| **1. Pre-procesamiento del Reporte Ejecutivo (White Paper)** | Generación de borradores estructurados, síntesis de evidencia y validación preliminar de hipótesis mediante IA para el documento final. |
| **2. Insumos para Inteligencia de Mercado**                  | Procesamiento de datos cuantitativos y cualitativos para proponer segmentaciones de mercado ("Océano Azul" vs. "Océano Rojo").          |
| **3. Anexos Técnicos para Producto**                         | Generación automatizada basada en datos de "User Personas" y listado de fricciones operativas detectadas en las transcripciones.        |
| **4. Base de Datos del Mapeo**                               | Entrega de un reporte estructurado del panorama nacional de despachos.                                                                  |
| **5. Sistematización de Entrevistas**                        | Transcripciones completas, resúmenes semánticos y extracción automática de *highlights* de la información recolectada.                  |
| **6. Material para Presentación Ejecutiva**                  | Visualizaciones de datos y síntesis de puntos clave para apoyar la presentación de hallazgos.                                           |

---

Agradecemos la oportunidad de participar en este proceso de innovación aplicada a la investigación jurídica y quedamos a disposición para cualquier aclaración técnica o metodológica sobre esta propuesta.

Atentamente,

**Arquitectura de Horizontes**
*Navegar la complejidad, expandir posibilidades*

## Connections
- [[HA PROJECTS]]
