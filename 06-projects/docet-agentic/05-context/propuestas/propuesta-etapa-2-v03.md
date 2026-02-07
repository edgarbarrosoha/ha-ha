# Propuesta de Implementación — DOCET‑AI

## Etapa 2: Sistema en Producción (Fases 2.1–2.3)

**Cliente:** Docet (Escuela K–9; ~1,000 estudiantes)

**Proveedor:** Horizons Architecture Systems

**Fecha:** Enero 2026

**Versión:** v1.3

**Estatus:** Propuesta

**Vigencia:** 30 días naturales

**Nota de contexto:** La Etapa 1 (prototipo/demostración) se encuentra en desarrollo. La presente propuesta describe un enfoque y condiciones para evolucionar a producción durante la Etapa 2, considerando que los aprendizajes y entregables de la Etapa 1 servirán como insumos base. El alcance final y el cronograma se confirman durante el proceso de descubrimiento.

---

## Índice

1. Resumen ejecutivo
2. Objetivos y criterios de éxito
3. Alcance por fases
4. Entregables de la Fase 2.1
5. Arquitectura propuesta (alto nivel)
6. Seguridad, privacidad y uso responsable de IA
7. Metodología y gobernanza
8. Operación del servicio y soporte
9. Estimación de costos de operación por fase (referencial)
10. Modelos comerciales disponibles
11. Comparativo — Año 1 (Fase 2.1)
12. Supuestos, dependencias y exclusiones
13. Riesgos principales y mitigación
14. Próximos pasos
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

### 8.2 Severidades (referencial)

|Severidad|Inicio de respuesta|Ejemplo|
|---|---|---|
|S1 Crítica|1–4 horas|Caída, riesgo de exposición, incidente de seguridad|
|S2 Alta|4–12 horas|Función clave degradada|
|S3 Media|1–3 días hábiles|Errores parciales / ajustes|
|S4 Baja|Planificado|Backlog y mejoras|

---

## 9. Estimación de costos de operación por fase

Los montos siguientes corresponden a una **estimación de operación mensual** (nube + consumo de IA) por fase. No incluyen licencias o servicios profesionales de Horizons ni impuestos. Los valores pueden variar según patrones reales de uso, longitud de conversaciones y políticas de consumo.

|Fase|Usuarios aprox.|Costo mensual estimado|
|---|---|---|
|2.1 Directivos|15|$28,700 – $31,775 MXN/mes|
|2.2 Maestros/Admin (total)|95|$43,050 – $49,200 MXN/mes|
|2.3 Estudiantes (total)|1,095|$174,250 – $198,850 MXN/mes|

**Recomendación operativa:** presupuestos tope, alertas, límites por rol y optimización continua para mantener costos previsibles.

---

## 10. Modelos comerciales disponibles

### 10.1 Escenario 1 — Desarrollo a la medida (cesión de IP)

**Descripción:** desarrollo y transferencia de código fuente y documentación a Docet.

**Inversión única estimada:** $4,200,000 – $6,000,000 MXN + IVA

**Operación mensual:** según fase (Sección 9)

**Soporte:** opcional

### 10.2 Escenario 2 — Licenciamiento SaaS (servicio administrado)

**Descripción:** Horizons opera, mantiene y actualiza el sistema como servicio.

**Adecuación inicial (Fase 2.1):** $2,100,000 – $3,000,000 MXN + IVA

**Licencia mensual:** $45,000 – $70,000 MXN + IVA

**Operación mensual:** según fase

### 10.3 Escenario 3 — Partnership comercial

**Descripción:** Docet obtiene derechos comerciales (marca blanca) conforme a contrato; Horizons mantiene la tecnología.

**Inversión única:** $2,500,000 – $3,600,000 MXN + IVA

**Licencia mensual partner:** $38,000 – $55,000 MXN + IVA

**Revenue share (referencial):** 75% Docet / 25% Horizons (por definir)

---

## 11. Comparativo — Año 1 (Fase 2.1)

Los totales siguientes son **referenciales** y no incluyen IVA. En los modelos con licencia, el monto mensual integra licencia/soporte (si aplica) más la operación estimada de la Fase 2.1.

|Modelo|Único (MXN)|Mensual (MXN)|Total Año 1 (MXN)|
|---|---|---|---|
|Esc. 1 (sin soporte)|4,200,000–6,000,000|28,700–31,775|4,544,400–6,381,300|
|Esc. 1 (con soporte)|4,200,000–6,000,000|73,700–106,775|5,084,400–7,281,300|
|Esc. 2 (SaaS)|2,100,000–3,000,000|73,700–101,775|2,984,400–4,221,300|
|Esc. 3 (Partnership)|2,500,000–3,600,000|66,700–86,775|3,300,400–4,641,300|

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

- **Calidad y dispersión de datos:** normalización mínima viable y priorización de fuentes de verdad.
- **Costo por uso:** presupuestos, alertas, límites por rol y optimización continua.
- **Adopción:** capacitación, casos prioritarios y acompañamiento post Go‑Live.
- **Privacidad de menores:** RBAC, auditoría, salvaguardas y lineamientos de uso.
- **Dependencia de proveedores:** diseño modular, versionado y pruebas en staging.

---

## 15. Términos comerciales propuestos (referencial)

- **Pago de implementación:** 50% a la firma, 30% a la entrega de base, 20% a Go‑Live.
- **SaaS/Partnership:** facturación mensual por adelantado; mínimo sugerido 12 meses.
- **Operación nube/IA:** se recomienda facturación directa por el proveedor cloud para transparencia; Horizons apoya en configuración y optimización.