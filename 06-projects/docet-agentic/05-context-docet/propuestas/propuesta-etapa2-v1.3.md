# Propuesta de Implementación — DOCET‑AI

## Etapa 2: Sistema en Producción (Fases 2.1–2.3)

**Cliente:** Docet (Escuela K–9; ~1,000 estudiantes)

**Proveedor:** HA Architecture Systems

**Fecha:** Enero 2026

**Versión:** v1.3

**Estatus:** Propuesta

**Vigencia:** 30 días naturales

**Nota de contexto:** La Etapa 1 (prototipo/demostración) se encuentra en desarrollo. La presente propuesta describe un enfoque y condiciones para evolucionar a producción durante la Etapa 2, considerando que los aprendizajes y entregables de la Etapa 1 servirán como insumos base. El alcance final y el cronograma se confirman durante el proceso de descubrimiento.

> **Aviso sobre estimaciones:** Todos los montos en este documento son **rangos referenciales** basados en proyectos similares y condiciones actuales de mercado. Los valores finales se determinarán durante la fase de descubrimiento, considerando: (1) requerimientos específicos de Docet, (2) complejidad real de integraciones y datos, y (3) precios vigentes de los proveedores de modelos de IA al momento de contratación. Los costos de consumo de IA son particularmente variables debido a la rápida evolución del mercado.

---

## Índice

1. Resumen ejecutivo
2. Objetivos y criterios de éxito
   - 2.1 Objetivos
   - 2.2 Criterios de éxito cuantificables
3. Alcance por fases
4. Entregables de la Fase 2.1
5. Arquitectura propuesta (alto nivel)
6. Seguridad, privacidad y uso responsable de IA
   - 6.1 Controles mínimos recomendados
   - 6.2 Uso responsable
   - 6.3 Cumplimiento normativo mexicano
7. Metodología y gobernanza
8. Operación del servicio y soporte
   - 8.1 Objetivos de operación
   - 8.2 Severidades y tiempos de respuesta
   - 8.3 Acuerdos de Nivel de Servicio (SLAs)
9. Estimación de costos de operación por fase
   - 9.1 Metodología de estimación
   - 9.2 Justificación de rangos de costos
10. Modelos comerciales disponibles
    - 10.0 Justificación de rangos de inversión
    - 10.1 Escenario 1 — Desarrollo a la medida
    - 10.2 Escenario 2 — Licenciamiento SaaS
    - 10.3 Escenario 3 — Partnership comercial
11. Comparativo — Año 1 (Fase 2.1)
    - 11.1 Análisis comparativo por criterio
12. Supuestos, dependencias y exclusiones
13. Riesgos principales y mitigación
14. Próximos pasos
    - 14.1 Calendario tentativo
    - 14.2 Información requerida para iniciar
    - 14.3 Acciones inmediatas
15. Términos comerciales propuestos (referencial)

---

## 1. Resumen ejecutivo

Docet está desarrollando un prototipo/demostración (Etapa 1). La Etapa 2 tiene como objetivo habilitar un **sistema de producción**, con operación controlada, controles de seguridad y privacidad, escalabilidad por fases y mecanismos de gobierno para datos sensibles (incluyendo información de menores).

Se propone una estrategia escalonada:

- **Fase 2.1 (Directivos):** puesta en producción del sistema estratégico (agentes dimensionales, KPIs y seguimiento).
- **Fase 2.2 (Maestros/Admin):** expansión a operación académica y administrativa.
- **Fase 2.3 (Estudiantes):** expansión masiva con tutores personalizados y salvaguardas reforzadas.

### 1.1 Recomendación de enfoque

Como punto de partida, se sugiere iniciar la Fase 2.1 bajo un esquema **SaaS / servicio administrado**, con el fin de reducir riesgo operativo y facilitar la mejora continua. En caso de que Docet busque comercializar la plataforma, se contempla una ruta contractual hacia un modelo de **partnership** (Sección 10).

---

## 2. Objetivos y criterios de éxito

### 2.1 Objetivos

- Desplegar un sistema en producción con gobierno de datos y operación controlada.
- Habilitar la Fase 2.1 para directivos con agentes y tableros ejecutivos.
- Establecer una base técnica reutilizable para escalar a fases 2.2 y 2.3.
- Implementar mecanismos de control para consumo y costos variables.

### 2.2 Criterios de éxito cuantificables (Fase 2.1)

|Indicador|Meta|Método de medición|
|---|---|---|
|Adopción de usuarios directivos|≥80% de usuarios activos semanales|Telemetría de sesiones únicas|
|Tiempo de respuesta del sistema|≤5 segundos (p95) para consultas estándar|Monitoreo de latencia en observabilidad|
|Disponibilidad del servicio|≥99.5% mensual|Uptime calculado sobre ventana de servicio|
|Precisión de KPIs consultados|100% trazabilidad a fuente de datos|Auditoría de consultas vs. datos origen|
|Satisfacción de usuario|≥4.0/5.0 en encuesta trimestral|NPS o encuesta de satisfacción|
|Incidentes críticos (S1)|≤1 por trimestre|Registro de incidentes|
|Desviación de costos de operación|≤15% sobre presupuesto mensual|Reporte de consumo vs. presupuesto|

---

## 3. Alcance por fases

### 3.1 Fase 2.1 — Directivos

**Capacidades previstas:**

- Agentes dimensionales para análisis estratégico y operativo (incluye KPIs, diagnóstico, seguimiento y analítica predictiva cuando corresponda).
- Tableros ejecutivos con indicadores acordados y consultas en lenguaje natural.
- Seguimiento de acuerdos (responsables, fechas, estatus y evidencia).
- Integración con fuentes de datos prioritarias (definidas en descubrimiento).

### 3.2 Fase 2.2 — Maestros/Admin

**Usuarios estimados:** +50–80 (≈95 total)

**Capacidades previstas:**

- Planeación didáctica, reportes pedagógicos y seguimiento individual.
- Flujos administrativos por rol.
- Permisos más granulares y mayor volumen de datos sensibles.

### 3.3 Fase 2.3 — Estudiantes

**Usuarios estimados:** +1,000 (≈1,095 total)

**Capacidades previstas:**

- Tutores por materia, asistentes de estudio y preparación de evaluaciones.
- Salvaguardas para menores y controles parentales (según política institucional).
- Optimización de costos por escala y políticas de uso.

**Alcance económico detallado:** La inversión de implementación se detalla para la **Fase 2.1**. Las fases 2.2 y 2.3 se cotizan con precisión tras estabilizar 2.1, debido a su dependencia de procesos, políticas y patrones reales de adopción/consumo.

---

## 4. Entregables de la Fase 2.1

### 4.1 Entregables técnicos

- Ambientes (desarrollo, pruebas y producción) y configuración base de despliegue.
- Integración de datos prioritarios y modelo mínimo viable.
- Orquestación de agentes con políticas y controles (guardrails) adecuados al uso previsto.
- Observabilidad: métricas de uso, latencia, costos, bitácoras y alertas.
- Seguridad: RBAC, auditoría, cifrado, respaldos y control de acceso.

### 4.2 Entregables funcionales

- Tableros ejecutivos de KPIs acordados.
- Flujos guiados para casos de uso prioritarios.
- Reportes operativos esenciales y exportación controlada (según permisos).

### 4.3 Entregables de adopción

- Capacitación al equipo directivo (sesiones y materiales).
- Guía de operación y buenas prácticas.
- Estabilización post Go‑Live con iteraciones acordadas.

### 4.4 Criterios de aceptación

- KPIs consultables con trazabilidad a su fuente.
- Permisos por rol verificados mediante pruebas de usuario.
- Auditoría disponible para consultas y revisiones.
- Respaldos y procedimiento de restauración validados en entorno controlado.

---

## 5. Arquitectura propuesta

### 5.1 Principios

- Seguridad por diseño y mínimo privilegio.
- Trazabilidad en indicadores críticos.
- Escalabilidad por fases (modularidad de agentes, roles e integraciones).
- Control de costos (presupuestos, alertas y límites por rol).

### 5.2 Componentes lógicos

- **Capa de experiencia:** interfaz web y flujos por rol.
- **Orquestación de agentes:** coordinación, políticas y controles.
- **Conocimiento (RAG):** búsqueda de documentación institucional con permisos.
- **Capa de datos:** conectores, normalización y almacenamiento gobernado.
- **Observabilidad:** métricas, logs, costos, alertas e incidentes.

---

## 6. Seguridad, privacidad y uso responsable de IA

La implementación se diseña tomando como referencia prácticas y marcos ampliamente utilizados, considerando fuentes como ISO/IEC 27001, NIST CSF y OWASP.

### 6.1 Controles mínimos recomendados

- Gestión de identidades y accesos (IAM/RBAC) y, cuando aplique, MFA.
- Auditoría de acceso, consultas y acciones críticas.
- Cifrado en tránsito y en reposo.
- Retención y eliminación conforme a políticas acordadas.
- Segregación por ambientes y control de cambios.
- Respaldos automáticos y pruebas de restauración.
- Salvaguardas para menores y lineamientos de uso.

### 6.2 Uso responsable

- Controles para reducir respuestas no sustentadas (guardrails y trazabilidad donde aplique).
- Escalamiento humano para decisiones sensibles, según criterio institucional.
- Capacitación y lineamientos de uso para usuarios finales.

### 6.3 Cumplimiento normativo mexicano

El sistema se diseña considerando el marco regulatorio aplicable en México para protección de datos personales, con énfasis en datos de menores de edad:

**Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)**
- Aviso de privacidad específico para el tratamiento de datos en el sistema.
- Mecanismos para ejercicio de derechos ARCO (Acceso, Rectificación, Cancelación, Oposición).
- Consentimiento expreso de padres/tutores para tratamiento de datos de menores.
- Registro de bases de datos ante el INAI cuando corresponda.

**Consideraciones específicas para menores (Fase 2.3)**
- Consentimiento parental verificable antes de activación de cuenta de estudiante.
- Datos mínimos necesarios (principio de minimización).
- Restricción de perfilado automatizado sin supervisión humana.
- Controles parentales configurables por la institución.
- Retención limitada y eliminación programada de datos de menores egresados.

**NOM-151-SCFI-2016 (Conservación de mensajes de datos)**
- Integridad y autenticidad de registros de auditoría.
- Sellado de tiempo en operaciones críticas cuando se requiera valor probatorio.

**Responsabilidades compartidas**
- **Docet (Responsable):** Define políticas de privacidad, obtiene consentimientos, atiende solicitudes ARCO.
- **HA (Encargado):** Implementa controles técnicos, procesa datos conforme a instrucciones, reporta incidentes.
- Contrato de encargado de tratamiento de datos a firmarse previo al Go-Live.

---

## 7. Metodología y gobernanza

### 7.1 Fases de trabajo (referencial)

1. Descubrimiento (KPIs, roles, fuentes, casos críticos).
2. Base técnica (ambientes, seguridad, observabilidad).
3. Integración de datos (conectores y normalización).
4. Agentes y UX (configuración, tableros, pruebas).
5. Go‑Live y estabilización.

### 7.2 Roles sugeridos

- Sponsor ejecutivo (Docet).
- Product owner (Docet).
- Líder técnico (HA).
- Data owners (Docet).

---

## 8. Operación del servicio y soporte

### 8.1 Objetivos de operación

- Continuidad, monitoreo y respuesta a incidentes.
- Mejora continua (calidad, prompts, rendimiento).
- Reporte mensual de consumo y recomendaciones de optimización.

### 8.2 Severidades y tiempos de respuesta

|Severidad|Inicio de respuesta|Tiempo de resolución objetivo|Ejemplo|
|---|---|---|---|
|S1 Crítica|≤1 hora|≤4 horas|Caída total, exposición de datos, incidente de seguridad|
|S2 Alta|≤4 horas|≤12 horas|Función clave degradada, agente principal no responde|
|S3 Media|≤1 día hábil|≤3 días hábiles|Errores parciales, lentitud significativa|
|S4 Baja|≤3 días hábiles|Planificado en sprint|Mejoras menores, ajustes de configuración|

### 8.3 Acuerdos de Nivel de Servicio (SLAs)

|Métrica|Compromiso|Ventana de medición|Penalización por incumplimiento|
|---|---|---|---|
|Disponibilidad (uptime)|≥99.5%|Mensual (L-V 7:00–21:00)|Crédito del 10% de licencia mensual por cada 0.5% debajo del objetivo|
|Tiempo de respuesta (p95)|≤5 segundos|Mensual|Revisión de optimización sin costo adicional|
|Respaldos exitosos|100%|Semanal|Notificación inmediata y respaldo manual dentro de 24h|
|Tiempo de recuperación (RTO)|≤4 horas|Por incidente S1|Extensión de soporte sin costo|
|Punto de recuperación (RPO)|≤24 horas|Por incidente S1|N/A (objetivo técnico)|

**Notas:**
- La ventana de servicio estándar es lunes a viernes de 7:00 a 21:00 hrs (hora centro de México). Soporte fuera de horario disponible para incidentes S1.
- Los SLAs aplican a partir del mes 2 posterior al Go-Live (periodo de estabilización).
- Mantenimientos programados se notifican con ≥72 horas de anticipación y no computan contra disponibilidad.

---

## 9. Estimación de costos de operación por fase

Los montos siguientes corresponden a una **estimación de operación mensual** (nube + consumo de IA) por fase. No incluyen licencias o servicios profesionales de HA ni impuestos.

|Fase|Usuarios aprox.|Costo mensual estimado|
|---|---|---|
|2.1 Directivos|15|$28,700 – $31,775 MXN/mes|
|2.2 Maestros/Admin (total)|95|$43,050 – $49,200 MXN/mes|
|2.3 Estudiantes (total)|1,095|$174,250 – $198,850 MXN/mes|

### 9.1 Metodología de estimación

Los costos de operación se calculan con base en los siguientes componentes:

|Componente|Descripción|% del costo estimado|
|---|---|---|
|Consumo de IA (tokens)|Llamadas a modelos de lenguaje (entrada + salida)|55–65%|
|Infraestructura cloud|Cómputo, almacenamiento, bases de datos, red|25–30%|
|Servicios auxiliares|Búsqueda vectorial, observabilidad, respaldos|10–15%|

**Supuestos de uso por fase:**

|Fase|Consultas/usuario/día|Tokens promedio/consulta|Días activos/mes|
|---|---|---|---|
|2.1 Directivos|8–12|2,500–3,500|22|
|2.2 Maestros/Admin|5–8|1,800–2,500|22|
|2.3 Estudiantes|3–6|1,200–1,800|18|

### 9.2 Justificación de rangos de costos (±10-15%)

Los rangos reflejan variables que se confirman durante el descubrimiento y operación inicial:

|Factor|Impacto en costo|Ejemplo|
|---|---|---|
|Longitud de conversaciones|Alto|Consultas simples (1 turno) vs. análisis complejos (5+ turnos)|
|Modelo de IA seleccionado|Alto|GPT-4o vs. GPT-4o-mini vs. Claude representa diferencias de 3-10x|
|Frecuencia de uso real|Medio|Adopción del 60% vs. 90% de usuarios activos|
|Volumen de datos en RAG|Medio|100 documentos vs. 500 documentos indexados|
|Políticas de caché|Bajo-Medio|Cacheo agresivo puede reducir 15-25% de llamadas a IA|

**Compromiso:** Una vez estabilizada la Fase 2.1 (mes 2-3), HA entregará proyección ajustada con ±5% de precisión basada en patrones reales.

**Recomendación operativa:** presupuestos tope, alertas al 80% de consumo, límites por rol y optimización continua para mantener costos previsibles.

---

## 10. Modelos comerciales disponibles

### 10.0 Justificación de rangos de inversión (±30-40%)

Los rangos en las inversiones de implementación reflejan variables de alcance que se definen durante el descubrimiento:

|Factor de variación|Rango bajo|Rango alto|Impacto estimado|
|---|---|---|---|
|**Número de integraciones**|2-3 fuentes de datos con APIs estándar|5+ fuentes incluyendo sistemas legacy sin API|+$400K–800K|
|**Complejidad de agentes**|4-5 agentes con flujos lineales|8+ agentes con orquestación compleja y dependencias|+$300K–600K|
|**Personalización de UX**|Tableros estándar con branding básico|Diseño personalizado, flujos específicos por rol|+$200K–400K|
|**Calidad de datos origen**|Datos estructurados y limpios|Normalización extensiva, limpieza, mapeo manual|+$150K–350K|
|**Requisitos de seguridad**|Controles estándar (RBAC, cifrado)|Auditoría avanzada, MFA, certificaciones adicionales|+$100K–250K|

**Proceso de precisión:**
1. **Propuesta inicial:** Rangos amplios (presente documento)
2. **Post-descubrimiento:** Cotización con ±15% de precisión (semana 2-3)
3. **Post-diseño técnico:** Presupuesto cerrado con alcance fijo (semana 4-5)

### 10.1 Escenario 1 — Desarrollo a la medida (cesión de IP)

**Descripción:** Desarrollo y transferencia de código fuente y documentación a Docet. Docet asume responsabilidad de operación, mantenimiento y evolución.

**Inversión única estimada:** $4,200,000 – $6,000,000 MXN + IVA

**Desglose estimado:**

|Componente|Rango|
|---|---|
|Descubrimiento y diseño|$350K–500K|
|Desarrollo core (agentes, RAG, orquestación)|$1,800K–2,600K|
|Integraciones de datos|$600K–1,000K|
|UX/UI y tableros|$450K–700K|
|Seguridad y observabilidad|$400K–600K|
|Pruebas, documentación y transferencia|$600K–600K|

**Operación mensual:** según fase (Sección 9) — gestionada por Docet

**Soporte opcional:** $45,000–75,000 MXN/mes (incluye actualizaciones de seguridad, optimización y soporte técnico)

**Ideal para:** Organizaciones con equipo técnico interno que buscan control total y posibilidad de comercialización independiente.

### 10.2 Escenario 2 — Licenciamiento SaaS (servicio administrado)

**Descripción:** HA opera, mantiene y actualiza el sistema como servicio. Docet se enfoca en la adopción y uso, sin preocuparse por infraestructura.

**Adecuación inicial (Fase 2.1):** $2,100,000 – $3,000,000 MXN + IVA

**Desglose estimado:**

|Componente|Rango|
|---|---|
|Descubrimiento y diseño|$300K–400K|
|Configuración y personalización|$800K–1,200K|
|Integraciones de datos|$500K–800K|
|Capacitación y Go-Live|$300K–400K|
|Reserva de contingencia|$200K–200K|

**Licencia mensual:** $45,000 – $70,000 MXN + IVA
- Incluye: soporte, actualizaciones, mejoras continuas, monitoreo 24/7
- El rango depende del nivel de soporte (estándar vs. premium) y SLAs requeridos

**Operación mensual:** según fase (pass-through transparente)

**Ideal para:** Organizaciones que priorizan velocidad de implementación y operación sin fricciones.

### 10.3 Escenario 3 — Partnership comercial

**Descripción:** Docet obtiene derechos comerciales (marca blanca) para ofrecer la solución a otras instituciones educativas. HA mantiene y evoluciona la tecnología.

**Inversión única:** $2,500,000 – $3,600,000 MXN + IVA
- Incluye licencia de marca blanca y personalización para reventa

**Licencia mensual partner:** $38,000 – $55,000 MXN + IVA
- Tarifa preferencial por compromiso de volumen y exclusividad sectorial

**Modelo de revenue share:**

|Concepto|Docet|HA|Notas|
|---|---|---|---|
|Implementación a terceros|70%|30%|Docet lidera comercial; HA ejecuta técnico|
|Licencias recurrentes|75%|25%|Sobre facturación neta a clientes finales|
|Servicios profesionales|80%|20%|Capacitación, consultoría, personalizaciones|

**Términos del partnership:**
- Exclusividad: Sector educativo K-12 en México (negociable)
- Vigencia mínima: 24 meses
- Objetivos de volumen: ≥3 clientes nuevos en año 1 para mantener exclusividad
- Gobernanza: Comité trimestral para roadmap y prioridades

**Ideal para:** Docet como plataforma de crecimiento y diferenciación competitiva en el sector educativo.

---

## 11. Comparativo — Año 1 (Fase 2.1)

Los totales siguientes son **referenciales** y no incluyen IVA. En los modelos con licencia, el monto mensual integra licencia/soporte (si aplica) más la operación estimada de la Fase 2.1.

|Modelo|Único (MXN)|Mensual (MXN)|Total Año 1 (MXN)|
|---|---|---|---|
|Esc. 1 (sin soporte)|4,200,000–6,000,000|28,700–31,775|4,544,400–6,381,300|
|Esc. 1 (con soporte)|4,200,000–6,000,000|73,700–106,775|5,084,400–7,281,300|
|Esc. 2 (SaaS)|2,100,000–3,000,000|73,700–101,775|2,984,400–4,221,300|
|Esc. 3 (Partnership)|2,500,000–3,600,000|66,700–86,775|3,300,400–4,641,300|

### 11.1 Análisis comparativo por criterio

|Criterio|Esc. 1 (Cesión IP)|Esc. 2 (SaaS)|Esc. 3 (Partnership)|
|---|---|---|---|
|Inversión inicial|Alta|Media|Media-Alta|
|Costo total Año 1|Alto|Bajo-Medio|Medio|
|Control sobre tecnología|Total|Bajo|Medio|
|Dependencia de HA|Baja (post-entrega)|Alta|Media|
|Velocidad de implementación|Media|Alta|Media|
|Capacidad de comercializar|Sí (libre)|No|Sí (con revenue share)|
|Riesgo operativo para Docet|Alto|Bajo|Medio|
|Escalabilidad a fases 2.2/2.3|Requiere equipo interno|Incluida en servicio|Incluida con ajuste de términos|

**Recomendación:** Para minimizar riesgo en la primera implementación de IA en producción, sugerimos **Escenario 2 (SaaS)** con opción de migrar a **Escenario 3 (Partnership)** una vez validado el modelo con usuarios reales.

---

## 12. Supuestos, dependencias y exclusiones

### 12.1 Supuestos

- Acceso a fuentes de datos prioritarias con responsables asignados.
- Definición de KPIs y reportes prioritarios durante el descubrimiento.
- Políticas de roles, permisos y retención acordadas.

### 12.2 Dependencias

- Disponibilidad de APIs o mecanismos de exportación desde sistemas actuales.
- Participación de usuarios clave en pruebas de aceptación.

### 12.3 Exclusiones

- Servicios legales o normativos especializados (se coordinan con asesoría de Docet).
- Hardware/dispositivos o licencias de terceros no especificadas.
- Desarrollo de contenido curricular, salvo plantillas o flujos acordados.

---

## 13. Riesgos principales y mitigación

| Riesgo                                      | Probabilidad | Impacto | Estrategia de mitigación                                                                                                    | Responsable            |
| ------------------------------------------- | ------------ | ------- | --------------------------------------------------------------------------------------------------------------------------- | ---------------------- |
| Calidad y dispersión de datos               | Alta         | Alto    | Normalización mínima viable; priorización de fuentes de verdad; validación temprana en descubrimiento                       | HA + Data Owners |
| Costos de operación exceden presupuesto     | Media        | Medio   | Presupuestos tope, alertas al 80%, límites por rol, optimización mensual, modelos de menor costo para tareas simples        | HA               |
| Baja adopción por usuarios                  | Media        | Alto    | Capacitación hands-on, casos de uso prioritarios de alto valor, acompañamiento post Go-Live, métricas de adopción semanales | Docet + HA       |
| Privacidad de menores comprometida          | Baja         | Crítico | RBAC estricto, auditoría completa, cifrado, pruebas de penetración, consentimiento parental, revisión legal                 | HA + Legal Docet |
| Dependencia de proveedores de IA            | Media        | Medio   | Diseño agnóstico de proveedor, abstracción de APIs, pruebas con modelos alternativos, versionado                            | HA               |
| Retrasos por disponibilidad de stakeholders | Media        | Medio   | Calendario acordado desde kick-off, sesiones grabadas, decisiones asíncronas documentadas                                   | Docet (Sponsor)        |
| Cambios de alcance no controlados           | Media        | Alto    | Proceso formal de change request, impacto documentado antes de aprobar, reserva de contingencia                             | Ambos                  |

---

## 14. Próximos pasos

### 14.1 Calendario tentativo para inicio de Fase 2.1

|Semana|Actividad|Participantes|Entregable|
|---|---|---|---|
|S0|Revisión de propuesta y aclaraciones|Docet (Dirección) + HA|Preguntas resueltas, ajustes si aplica|
|S1|Selección de modelo comercial y negociación|Docet (Dirección) + HA|Carta de intención o acuerdo preliminar|
|S2|Firma de contrato y NDA|Legal ambas partes|Contratos firmados|
|S2|Pago inicial (50%)|Administración Docet|Factura pagada|
|S3|Kick-off y descubrimiento|Equipo completo|Plan de proyecto, accesos, calendario|
|S3-S5|Descubrimiento detallado|Product Owner, Data Owners, HA|Documento de alcance cerrado, KPIs definidos|
|S6|Cotización final (±15%)|HA|Presupuesto ajustado post-descubrimiento|

### 14.2 Información requerida para iniciar

Para agilizar el arranque, solicitamos a Docet preparar:

- [ ] Organigrama del equipo directivo (usuarios Fase 2.1)
- [ ] Lista de sistemas actuales con datos relevantes (SIS, LMS, ERP, hojas de cálculo)
- [ ] KPIs actuales que se reportan manualmente (ejemplos de reportes)
- [ ] Políticas de privacidad y consentimiento vigentes
- [ ] Contacto del responsable de TI y del Data Owner principal
- [ ] Disponibilidad de agenda para sesiones de descubrimiento (mínimo 6 horas/semana durante S3-S5)

### 14.3 Acciones inmediatas

1. **Docet:** Revisar propuesta y enviar preguntas/comentarios (≤5 días hábiles)
2. **HA:** Agendar sesión de aclaración de dudas (≤3 días hábiles post-recepción)
3. **Ambos:** Definir modelo comercial preferido para preparar contrato
4. **Docet:** Confirmar sponsor ejecutivo y product owner asignados

### 14.4 Contacto

Para dudas o siguiente paso, contactar a:

- **HA Architecture Systems**
- Nombre: [Por definir]
- Email: [Por definir]
- Teléfono: [Por definir]

---

## 15. Términos comerciales propuestos (referencial)

- **Pago de implementación:** 50% a la firma, 30% a la entrega de base, 20% a Go‑Live.
- **SaaS/Partnership:** facturación mensual por adelantado; mínimo sugerido 12 meses.
- **Operación nube/IA:** se recomienda facturación directa por el proveedor cloud para transparencia; HA apoya en configuración y optimización.