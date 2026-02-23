# Anexo 4: Business case — Framework

**Para:** Jorge Blando, Víctor Gutiérrez, Mario Orozco
**De:** Edgar Barroso — Horizons Architecture
**Fecha:** Febrero 2026

---

## Propósito

Este documento no es un business plan cerrado. Es el **marco** que define qué variables necesitamos para construir el plan financiero juntos.

El objetivo: que Jorge Blando, Mario y Edgar tengan claro qué información se necesita recopilar, qué supuestos se deben validar, y cómo se construye paso a paso el modelo de negocio de la plataforma.

Los números finales se llenarán en conjunto durante las sesiones de trabajo.

---

## 1. Estructura de costos

### Inversión inicial (Fase Piloto — León)

| Concepto | Descripción | Variables a definir |
|----------|-------------|---------------------|
| **Diseño y descubrimiento** | Sesiones de trabajo para definir alcance exacto, flujos, integraciones | Horas, participantes, duración |
| **Desarrollo de plataforma** | Construcción del sistema: base de conocimiento, 4 agentes, frontend, dashboard | Alcance de MVP, integraciones necesarias |
| **Migración de datos** | Transferencia de datos existentes (registros, perfiles, historial) al nuevo sistema | Volumen de datos, formato actual, limpieza necesaria |
| **Configuración Azure** | Setup de infraestructura en servidores del Tec | Especificaciones del Tec, compliance requirements |
| **Testing y ajuste** | Pruebas con grupo piloto, iteraciones | Tamaño del grupo piloto, número de ciclos |
| **Capacitación** | Entrenamiento para admins de sede y equipo operativo | Número de personas, formato |

### Operación mensual

| Concepto | Descripción | Variables a definir |
|----------|-------------|---------------------|
| **Infraestructura cloud** | Servidores, almacenamiento, red (Azure) | Número de usuarios activos, volumen de datos |
| **Consumo de IA** | Uso de modelos de lenguaje (Claude/GPT-4) por los agentes | Frecuencia de uso, complejidad de queries |
| **Soporte técnico** | Mantenimiento, actualizaciones, resolución de incidentes | SLA requerido, horario de soporte |
| **Monitoreo y operación** | Supervisión de agentes, calidad de matches, reportes | Nivel de servicio acordado |

### Costo por sede adicional

| Concepto | Descripción | Variables a definir |
|----------|-------------|---------------------|
| **Configuración de instancia** | Replicar la estructura fractal para la nueva sede | Customización necesaria |
| **Migración de datos locales** | Datos de miembros de la nueva sede | Volumen, formato |
| **Capacitación local** | Entrenamiento del admin de sede | Presencial vs. remoto |
| **Operación incremental** | Costo adicional de infraestructura y consumo de IA | Número de miembros nuevos |

**Principio de escalabilidad:** El costo de cada sede adicional es una fracción del piloto, porque la plataforma, los agentes y los aprendizajes ya existen. Solo se configura el contexto local.

---

## 2. Modelo de ingresos

### Fuentes de ingreso identificadas

| Fuente | Fase de activación | Tipo | Descripción |
|--------|-------------------|------|-------------|
| **Inversión institucional** | Piloto | Fijo | El Tec invierte como infraestructura para su programa |
| **Membresía básica** | Transición | Recurrente | Acceso a la comunidad, perfil, contenido personalizado |
| **Membresía premium local** | Transición | Recurrente | + matching de negocios dentro de la sede |
| **Membresía premium nacional** | Madurez | Recurrente | + matching entre todas las sedes del país |
| **Experiencias premium** | Todas | Por evento | Reunión de Generaciones, viajes, paneles especializados |
| **Capacitación especializada** | Madurez | Por curso | Cursos generados por Agente Contenidos según demanda |
| **Licencia por sede** | Expansión | Fijo + variable | Cada campus nuevo activa su instancia |
| **Detección de candidatos** | Madurez | Por pipeline | Valor del Agente Scout para alimentar nuevas generaciones |

### Variables clave para el modelo de ingresos

| Variable | Qué necesitamos saber | Fuente de la información |
|----------|----------------------|--------------------------|
| **Número de miembros activos por sede** | Base de usuarios que pagaría membresía | Registros actuales de Tec Beyond |
| **Disposición a pagar** | Rango de precio aceptable por membresía anual | Encuesta o validación con miembros clave |
| **Tasa de adopción esperada** | % de miembros que se suscribirían (conservador/base/optimista) | Benchmark de programas similares |
| **Tasa de renovación** | % de miembros que renuevan año tras año | Meta: 90% (validar con experiencia del programa) |
| **Número de sedes proyectadas por año** | Velocidad de expansión | Plan estratégico Tec Beyond + decisión del Consejo |
| **Ingresos por eventos** | Cuánto genera hoy la Reunión de Generaciones y eventos similares | Datos históricos |

---

## 3. Escenarios financieros

### Estructura del modelo

El business case se construye en tres escenarios para cada fase:

| Escenario | Supuesto de adopción | Supuesto de precio | Velocidad de expansión |
|-----------|---------------------|--------------------|-----------------------|
| **Conservador** | 40% de miembros se suscriben | Rango bajo | 1 sede nueva cada 18 meses |
| **Base** | 60% de miembros se suscriben | Rango medio | 1 sede nueva cada 12 meses |
| **Optimista** | 80% de miembros se suscriben | Rango alto | 2 sedes nuevas cada 12 meses |

### Fase 1: Piloto León (Meses 1-8)

```
INGRESOS:    Inversión institucional (Tec)
             ───────────────────────────────
             = Monto a definir en descubrimiento

COSTOS:      Desarrollo + Setup + Operación 8 meses
             ───────────────────────────────
             = Monto a definir en descubrimiento

RESULTADO:   Inversión neta (sin retorno directo esperado)
             El valor está en demostrar que funciona.
```

**Métricas de éxito del piloto (no financieras):**

| Métrica | Meta | Por qué importa |
|---------|------|------------------|
| Miembros activos mensuales | 70% | Demuestra que la gente usa la plataforma |
| Matches facilitados | 50+ en 6 meses | Demuestra valor concreto de negocio |
| NPS | >40 | Demuestra satisfacción |
| Tasa de renovación | 90% | Demuestra que el valor se sostiene |

### Fase 2: Transición (Meses 9-20)

```
INGRESOS:    Inversión institucional (reducida)
           + Membresías (primeros pagadores)
           + Eventos premium
             ───────────────────────────────
             Variables: tasa de adopción, precio por nivel, número de eventos

COSTOS:      Operación León
           + Setup de 1-2 sedes nuevas
             ───────────────────────────────
             Variables: costo marginal por sede

RESULTADO:   Reducción progresiva de subsidio institucional
```

### Fase 3: Madurez (Año 2+)

```
INGRESOS:    Membresías (base principal)
           + Licencias por sede
           + Capacitación premium
           + Detección de candidatos
           + Eventos
             ───────────────────────────────
             Variables: número total de miembros, número de sedes, mix de niveles

COSTOS:      Operación multi-sede
           + Expansión incremental
             ───────────────────────────────
             Variables: costo variable por miembro, costo fijo por sede

RESULTADO:   Autosustentabilidad operativa
             La plataforma se paga sola.
```

---

## 4. Break-even: cuándo se paga sola

### Lógica del break-even

```
PUNTO DE EQUILIBRIO = cuando membresías + otras fuentes ≥ costos de operación

Variables críticas:
├── Número de miembros pagadores
├── Precio promedio de membresía
├── Costo de operación por miembro
└── Número de sedes activas
```

### Aproximación (a llenar con datos reales)

| Variable | A definir | Fuente |
|----------|-----------|--------|
| Costo operativo mensual por sede | $_____ | Cotización post-descubrimiento |
| Precio membresía básica anual | $_____ | Validación con miembros/Consejo |
| Precio membresía premium anual | $_____ | Validación con miembros/Consejo |
| Miembros por sede | ~300 (León actual) | Datos Tec Beyond |
| Tasa de conversión a pagadores | ___% | Benchmark + piloto |

**Fórmula simplificada:**

```
Break-even mensual = Costo operativo / (Miembros × Tasa conversión × Precio promedio / 12)
```

---

## 5. Valor no financiero (ROI intangible)

No todo el retorno es monetario. Estos valores justifican la inversión institucional más allá de las finanzas:

### Para el Tec

| Valor | Impacto |
|-------|---------|
| **Diferenciación** | Primer programa de educación ejecutiva en México con plataforma de inteligencia colectiva con IA |
| **Retención** | La comunidad activa fortalece el vínculo con el Tec a largo plazo |
| **Datos** | Inteligencia sobre las necesidades reales de los empresarios → mejora de programas |
| **Modelo replicable** | Si funciona en Beyond, puede aplicarse a alumni, a posgrados, a ejecutivos |
| **Posicionamiento AI** | El Tec como líder en aplicación de IA para comunidades educativas |

### Para los empresarios

| Valor | Impacto |
|-------|---------|
| **Oportunidades de negocio** | Conexiones que generan ingresos reales |
| **Capacitación relevante** | Aprender exactamente lo que su negocio necesita |
| **Red activa** | Una comunidad que trabaja para ellos incluso cuando no están |
| **Visibilidad** | Ser parte de la red empresarial más sofisticada del país |

### Para Educación Continua (Jorge Blando)

| Valor | Impacto |
|-------|---------|
| **Demanda informada** | El Agente Contenidos identifica qué necesitan aprender los empresarios → alimenta la oferta de cursos de EC |
| **Pipeline de learners** | Los 8,000 miembros proyectados a 10 años son potenciales estudiantes de programas de EC |
| **Modelo de acompañamiento** | Tec Beyond como ejemplo de "acompañamiento a lo largo de la vida" aplicado a comunidad empresarial |
| **Datos de lifelong learning** | Patrones de aprendizaje de empresarios a lo largo de años — insumo para diseño de programas |

---

## 6. Análisis de sensibilidad: qué pasa si...

| Escenario | Impacto | Mitigación |
|-----------|---------|------------|
| **Adopción menor a lo esperado** (solo 30% se suscribe) | Break-even se aleja; el subsidio institucional se extiende | Piloto gratuito demuestra valor primero; membresía se introduce gradualmente |
| **Adopción mayor a lo esperada** (80%+) | Demanda supera capacidad operativa | Arquitectura fractal permite escalar infraestructura sin rediseño |
| **Una sede no funciona** | Pérdida acotada al costo marginal de esa sede | Go/no-go criteria antes de cada expansión (ver Anexo 4) |
| **Cambio de proveedor tecnológico** | Costo de migración | Diseño de portabilidad desde día 1 (ver Anexo 2) |
| **Cambios regulatorios en datos** | Ajustes de compliance | Diseño compatible con GDPR desde el inicio |

---

## 7. Información que necesitamos recopilar

Para completar el business case con números reales, estas son las preguntas que debemos resolver:

### Del Consejo / Mario

- [ ] ¿Cuántos miembros activos hay realmente en León? (¿350? ¿más? ¿menos?)
- [ ] ¿Cuánto pagan actualmente los miembros por el programa?
- [ ] ¿Hay disposición a pagar una membresía adicional post-programa?
- [ ] ¿Cuánto genera actualmente la Reunión de Generaciones en ingresos?
- [ ] ¿Cuántas sedes quieren abrir en los próximos 3 años?
- [ ] ¿Hay presupuesto institucional pre-aprobado para iniciativas tecnológicas?

### Del Tec / Jorge Blando

- [ ] ¿Cuáles son los costos estándar de infraestructura Azure para proyectos institucionales?
- [ ] ¿Hay presupuestos de innovación o transformación digital que apliquen?
- [ ] ¿Qué porcentaje de inversión en programas de EC se asigna típicamente a tecnología?
- [ ] ¿Hay modelos de cost-sharing entre campus para plataformas compartidas?

### De HA / Edgar

- [ ] Cotización detallada del desarrollo del piloto (post-descubrimiento)
- [ ] Costo operativo mensual estimado por número de usuarios
- [ ] Costo marginal por sede adicional
- [ ] Pricing de licencia de la plataforma

---

## 8. Próximos pasos para el business plan

| Paso | Responsable | Entregable |
|------|-------------|------------|
| **1. Validar supuestos de demanda** | Mario + Consejo | Datos de miembros, disposición a pagar |
| **2. Cotización técnica** | HA (post-descubrimiento) | Costos de desarrollo, operación, expansión |
| **3. Definir pricing de membresía** | Jorge + Mario + HA | Niveles de precio validados |
| **4. Construir modelo financiero** | HA + Jorge | Proyecciones a 3 y 5 años, 3 escenarios |
| **5. Presentar al Comité de IA** | Mario | Business case completo para decisión de inversión |

---

## 9. Resumen para Jorge Blando

| Pregunta | Respuesta |
|----------|-----------|
| ¿Ya tenemos el business plan? | No — tenemos el framework. Los números se construyen juntos. |
| ¿Cuánto cuesta? | Se define en sesión de descubrimiento. La estructura: inversión inicial + operación mensual + costo marginal por sede. |
| ¿Cuándo se paga sola? | Cuando membresías + otras fuentes ≥ costos de operación. Meta: durante Fase 2 (transición). |
| ¿Qué necesitamos de tu parte? | Datos de costos Azure, modelos de cost-sharing del Tec, benchmarks de pricing en EC. |
| ¿Cuál es el riesgo financiero? | Acotado: el piloto es la inversión mayor. Cada sede cuesta una fracción. Si no funciona, los datos quedan y la inversión se limita al piloto. |
| ¿Hay ROI no financiero? | Sí: diferenciación, retención, datos para EC, posicionamiento AI del Tec, pipeline de learners para Educación Continua. |

---

**Horizons Architecture Systems**
Edgar Barroso
edgar@horizonsarchitecture.ai

Febrero 2026
