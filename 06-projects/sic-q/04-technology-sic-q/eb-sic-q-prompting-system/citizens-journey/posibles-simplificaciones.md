# Análisis First Principles: SIC-Q Citizens Journey

> Análisis realizado con el Algoritmo de 5 Pasos (inspirado en la filosofía de diseño de Elon Musk en Starbase)

---

## STEP 1: Make Requirements Less Dumb

### Requerimientos Identificados y Cuestionados

| Requerimiento | ¿Física o Persona? | Veredicto |
|---------------|-------------------|-----------|
| **FASE 1: Co-diseño con 4 actividades paralelas** (talleres + IA + encuesta + factibilidad) | Persona/Departamento | **SOSPECHOSO** - ¿Por qué 4 métodos? ¿Quién dijo que necesitas todos? |
| **Registro con CURP + INE/Llave MX** | Persona (Jurídico presumiblemente) | **SOSPECHOSO** - ¿Es ley o paranoia institucional? Esto mata la adopción |
| **"Modo Explora" + "Modo Participa"** como flujos separados | Diseño UX | **SOSPECHOSO** - Fricción artificial. ¿Por qué no participar desde el primer segundo? |
| **11 fases en total** | Arquitectura actual | **SOSPECHOSO** - ¿Quién definió que necesitas 11 fases? |
| **4 tipos de participación** (Proponer/Impulsar/Transformar/Conversar) | Diseño | **CUESTIONABLE** - ¿"Transformar" es diferente a "Impulsar"? Huele a distinción artificial |
| **Consejos Ciudadanos Temáticos × 5** | Estructura gubernamental | **SOSPECHOSO** - ¿Realmente necesitas 5 consejos separados o es burocracia heredada? |
| **Instituto del Futuro como órgano autónomo** | Estructura política | **FÍSICO** (político) - Es garantía de continuidad transexenal. Justificado |
| **Sensemaking con HA (Horizons Architecture)** | Framework elegido | **SOSPECHOSO** - ¿Por qué HA específicamente? ¿Es el único modelo? |

### Preguntas Incómodas

- ¿Quién decidió que la verificación INE es obligatoria? ¿Hay una ley que lo exija o es "por seguridad"?
- ¿Por qué necesitas "Modo Explora" si puedes dejar que cualquiera vote y solo verificar identidad para propuestas con tracción?

---

## STEP 2: Delete the Part or Process

### Candidatos a ELIMINACIÓN

#### 1. FASE 3B "Invitación" → **ELIMINAR**
Es un paso artificial. Si el ciudadano ya está explorando, el CTA debe estar omnipresente, no ser una "fase".

#### 2. Distinción entre "Impulsar" y "Transformar" → **FUSIONAR**
Ambos son "apoyar una propuesta". La diferencia es intensidad (like vs. compartir). Debería ser un espectro, no dos journeys separados.

#### 3. FASE 1 con 4 actividades paralelas → **REDUCIR A 2**
- **Conservar:** Talleres presenciales + Conversaciones IA
- **Eliminar:** Encuesta separada (redundante con IA) + Mesas de factibilidad (integrar en talleres)

#### 4. 11 Fases del sistema → **REDUCIR A 6-7**
Propuesta: Diseño → Descubrimiento → Registro/Participación (fusionadas) → Almacenamiento → Inteligencia → Gobierno → Retroalimentación

#### 5. 5 Consejos Ciudadanos Temáticos → **CUESTIONAR**
¿Por qué no un solo consejo rotativo o comités ad-hoc según demanda? La estructura fija es overhead.

#### 6. Verificación INE obligatoria para participar → **POSTERGAR**
Permitir participación ligera sin verificación. Solo exigir INE cuando una propuesta cruza el umbral de relevancia (ej: 500 apoyos).

---

## STEP 3: Simplify or Optimize

### Simplificaciones para Procesos Sobrevivientes

| Proceso | Simplificación |
|---------|----------------|
| **Registro** | Eliminar CURP inicial. Solo pedir: teléfono + código postal. Verificación progresiva según nivel de participación |
| **4 tipos de participación → 2** | "PROPONER" (crear) y "APOYAR" (votar/compartir/adoptar como espectro de intensidad) + "CONVERSAR" como modo transversal, no un journey separado |
| **Flujo de Proponer** | Eliminar "verificación de duplicados" como paso bloqueante. Mostrar similares en paralelo sin detener el flujo |
| **Bases de conocimiento (2)** | Fusionar en una sola BD con diferentes vistas, no dos sistemas separados |
| **Sensemaking** | Simplificar la descripción: "Clustering + Priorización + Síntesis". La taxonomía fractal suena compleja sin necesidad |

---

## STEP 4: Accelerate Cycle Time

### Puntos de Fricción y Soluciones

| Fricción | Solución |
|----------|----------|
| **Modo Explora → Modo Participa** requiere registro completo | Permitir "participación anónima temporal" que se puede vincular después |
| **Propuesta → Revisión → Respuesta** pasa por 3 instancias de gobierno | Crear fast-track: propuestas con >1000 apoyos en <7 días van directo a Secretaría |
| **Talleres de co-diseño de 3 hrs** | Reducir a 90 min con metodología ágil. Más iteraciones cortas > menos sesiones largas |
| **"Notificación al ciudadano" al final del ciclo** | Notificación en tiempo real con cada cambio de estado, no solo al final |
| **Instituto del Futuro ↔ Secretaría ↔ Consejos** triángulo de coordinación | Definir un único punto de decisión con consulta a los otros, no consenso tripartito |

---

## STEP 5: Automate

### Automatizaciones (Solo para el Proceso Simplificado)

| Automatización | Descripción |
|----------------|-------------|
| **Detección de duplicados** | IA identifica propuestas similares y sugiere fusión automática (con aprobación del ciudadano) |
| **Clasificación temática** | IA auto-etiqueta propuestas sin intervención humana |
| **Escalamiento por umbral** | Propuesta cruza 500 apoyos → automáticamente pasa a cola de revisión técnica |
| **Respuestas automáticas** | Para propuestas que coinciden con proyectos ya planeados: "Tu propuesta coincide con [proyecto X] del Plan 2030. ¿Quieres sumarte?" |
| **Agente SIC-Q Institucional** | Ya está bien diseñado. Es el punto correcto para automatizar análisis |

---

## VEREDICTO FINAL

### Diagnóstico

El diseño tiene buenas intenciones pero sufre de **sobre-ingeniería burocrática**. Hay demasiadas fases, demasiados tipos de participación, y demasiada verificación de identidad upfront.

### Rediseño Propuesto

```
ANTES: 11 fases, 4 journeys, verificación INE obligatoria
DESPUÉS: 6 fases, 2 journeys (+conversación transversal), verificación progresiva

FASE 1: Co-diseño (2 actividades, no 4)
FASE 2: Descubrimiento
FASE 3: Participación (registro ligero + proponer/apoyar unificados)
FASE 4: Inteligencia (BD única + sensemaking)
FASE 5: Gobierno (fast-track definido)
FASE 6: Retroalimentación → Ciclo
```

### Lo que se debe CONSERVAR intacto

- El Instituto del Futuro como garantía transexenal
- El Agente SIC-Q como interfaz conversacional
- El concepto de "ciclo virtuoso"

### Lo que se debe ELIMINAR sin piedad

- Fase 3B "Invitación" (absurda)
- Distinción Impulsar/Transformar (fusionar)
- CURP en registro inicial
- Mesas de factibilidad como actividad separada

---

*Documento generado: 2026-01-20*

## Connections
- [[04-technology-sic-q]]
