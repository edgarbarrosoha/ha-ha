# Anexo 5: Modelo de escalabilidad

**Para:** Jorge Blando, Víctor Gutiérrez, Mario Orozco
**De:** Edgar Barroso — Horizons Architecture
**Fecha:** Febrero 2026

---

## Propósito

Este documento responde a las preguntas operativas de la escalabilidad: **cómo crece Tec Beyond de León a una red nacional, cuánto cuesta cada paso, qué debe comprobarse antes de expandir, y cómo se gobierna a medida que crece.**

---

## 1. El principio: fractal, no lineal

Tec Beyond no necesita reinventar la plataforma para cada sede nueva. La arquitectura es **fractal**: el mismo patrón se replica a diferentes escalas.

```
                    ┌──────────────────────────────────┐
                    │      PLATAFORMA TEC BEYOND       │
                    │  (se construye UNA VEZ en León)  │
                    │                                  │
                    │  • Base de conocimiento          │
                    │  • 4 agentes de IA               │
                    │  • Sistema de gobernanza         │
                    │  • Dashboard de insights         │
                    │  • Motor de matching             │
                    └──────────┬───────────────────────┘
                               │
              Se REPLICA como instancia fractal
                               │
            ┌──────────────────┼──────────────────┐
            │                  │                  │
            ▼                  ▼                  ▼
     ┌─────────────┐   ┌─────────────┐   ┌─────────────┐
     │    LEÓN     │   │  CHIHUAHUA  │   │  MORELIA    │
     │  (piloto)   │   │  (sede 2)   │   │  (sede 3)   │
     │             │   │             │   │             │
     │ + Comunidad │   │ + Comunidad │   │ + Comunidad │
     │   local     │   │   local     │   │   local     │
     │ + Contexto  │   │ + Contexto  │   │ + Contexto  │
     │   regional  │   │   regional  │   │   regional  │
     │ + Admin     │   │ + Admin     │   │ + Admin     │
     │   propio    │   │   propio    │   │   propio    │
     └─────────────┘   └─────────────┘   └─────────────┘
```

**Lo que se hereda:** Plataforma, agentes, reglas, aprendizajes, red de matches nacionales.
**Lo que es nuevo:** Los miembros locales, el contexto regional, el admin de sede.

---

## 2. La ruta de expansión: fase por fase

### Vista general

| Fase | Periodo | Sedes | Miembros est. | Conexiones posibles | Hito clave |
|------|---------|-------|---------------|---------------------|------------|
| **Piloto** | Feb-Nov 2026 | León | ~300 | 44,850 | Demostrar que funciona |
| **Expansión 1** | 2027 | + Chihuahua, Aguascalientes | ~900 | 404,550 | Replicar en 2 sedes |
| **Expansión 2** | 2028 | + Morelia, Guadalajara | ~1,500 | 1,124,250 | Red inter-regional |
| **Red Nacional** | 2029+ | + Laguna, Querétaro, CDMX | ~3,000+ | 4,498,500 | Efecto de red completo |
| **Visión 10 años** | 2035 | 8-10 sedes | ~8,000 | 31,996,000 | Referente LatAm |

### El efecto multiplicador visual

```
Miembros        Conexiones posibles          Valor relativo
───────         ────────────────────          ──────────────
   300          44,850                        1x
                ████

   900          404,550                       9x
                ████████████████████████████████████

 1,500          1,124,250                     25x
                █████████████████████████████████████████████████████████████████████████████████████

 3,000          4,498,500                     100x
                ████████████████████████████████████████████████████████████████████████████████████
                ████████████████████████████████████████████████████████████████████████████████████
                ████████████████████████████████████████████████████████████████████████████████████
                █████████████████████████████████████

 8,000          ~32,000,000                   712x
```

Cada sede que se suma no solo agrega miembros — **multiplica** el valor para todos los existentes.

---

## 3. Detalle por fase

### Fase Piloto: León (Feb-Nov 2026)

**Objetivo:** Demostrar que la plataforma genera valor real para los miembros y el Consejo.

| Etapa | Duración | Actividad | Resultado |
|-------|----------|-----------|-----------|
| Alineación | Feb-Mar | Presentación al Consejo, aprobación Comité IA | Go/no-go |
| Descubrimiento | 2-3 semanas | Sesiones de trabajo para definir alcance, integraciones, prioridades | Diseño detallado + cotización |
| Construcción | 3-4 meses | Desarrollo de plataforma, agentes, base de conocimiento | MVP funcionando |
| Prueba | 1-2 meses | Grupo piloto (~50 miembros) usa la plataforma | Ajustes basados en uso real |
| Lanzamiento | Mes 6-8 | Todos los miembros de León acceden | Comunidad activa |

**Fecha clave:** 27 de abril — Reunión de Generaciones en León. Ventana natural para presentar la visión a toda la comunidad. Puede usarse como momento de presentación o de lanzamiento parcial, según el avance.

**Métricas de éxito (go/no-go para Expansión 1):**

| Métrica | Meta | Mide |
|---------|------|------|
| Miembros activos mensuales | ≥70% | ¿La gente usa la plataforma? |
| Matches facilitados | ≥50 en 6 meses | ¿Se generan conexiones de valor? |
| NPS | >40 | ¿Los miembros están satisfechos? |
| Tasa de renovación/permanencia | ≥90% | ¿El valor se sostiene en el tiempo? |
| Reportes útiles para el Consejo | ≥3 | ¿Los insights son accionables? |

### Fase Expansión 1: +Chihuahua, +Aguascalientes (2027)

**Prerequisitos (Go/no-go del piloto):**
- [ ] Métricas de León cumplen metas
- [ ] Modelo de membresía validado
- [ ] Admin local identificado en cada sede
- [ ] Presupuesto de expansión aprobado

**Qué se hereda de León:**

| Componente | Se reutiliza | Costo marginal |
|------------|-------------|----------------|
| Plataforma completa | 100% | $0 |
| 4 agentes de IA (entrenados) | 100% | $0 |
| Reglas de gobernanza | 100% | $0 |
| Aprendizajes de operación | 100% | $0 |
| Dashboard e insights | 100% | $0 |

**Qué es nuevo en cada sede:**

| Componente | Esfuerzo | Costo |
|------------|----------|-------|
| Configuración de instancia | Bajo | Fracción del piloto |
| Migración de datos locales | Medio | Depende del volumen |
| Capacitación del admin | Bajo | 1-2 sesiones |
| Contexto regional (industrias, retos) | Medio | Sesión de descubrimiento local |
| Incremento de infraestructura | Bajo | Proporcional a miembros |

**Estimación de costo marginal:** Cada sede adicional cuesta aproximadamente un **20-25% del costo del piloto**. La plataforma ya existe — solo se configura para el contexto local.

**Lo nuevo en esta fase:** Matching entre sedes. Por primera vez, un empresario de León puede encontrar un match en Chihuahua. Esto es lo que desbloquea el efecto de red.

### Fase Expansión 2: +Morelia, +Guadalajara (2028)

**Lo que cambia con 4-5 sedes:**
- El Agente Insights genera reportes **comparativos** entre regiones
- Los patrones de una sede informan a las demás (ej: "en Chihuahua funcionó X, Morelia debería probarlo")
- Se activa el **Agente Scout inter-sede** — candidatos identificados en una ciudad, reclutados para otra
- Las membresías premium nacionales cobran sentido (la red es lo suficientemente grande)

### Fase Red Nacional: +Laguna, +Querétaro, +CDMX (2029+)

**Lo que cambia con 6+ sedes:**
- **Economías de escala** — el costo por miembro baja significativamente
- **Efecto de red completo** — cada nuevo miembro beneficia a miles, no solo a su sede
- **Valor de los datos** — la base de conocimiento tiene suficiente masa crítica para detectar tendencias nacionales
- **Modelo exportable** — la plataforma puede licenciarse a otros programas del Tec, o incluso a otras instituciones

---

## 4. Economía de la escalabilidad

### Costos fijos vs. variables

```
                    COSTOS FIJOS                    COSTOS VARIABLES
                    (se pagan una vez)              (crecen con miembros/sedes)
                    ──────────────────              ───────────────────────────
                    • Desarrollo plataforma         • Infraestructura cloud
                    • Diseño de agentes             • Consumo de IA
                    • Arquitectura base             • Soporte por sede
                    • Sistema de gobernanza         • Admin local

                    ─────────────────────────────────────────────────────────
                    EL PILOTO absorbe la mayoría     Las SEDES nuevas solo
                    de los costos fijos.             pagan variables + config.
```

### Curva de costo por miembro

```
Costo por miembro
      │
  $$$ │ ●                          ← Piloto: costo alto por miembro
      │    ●                          (pocos miembros absorben toda la inversión)
      │       ●
      │          ●
      │             ●
      │                ● ● ●       ← Expansión: costo baja rápidamente
      │                      ● ●
      │                         ● ● ● ● ●   ← Madurez: costo marginal bajo
   $  │                                   ● ● ● ● ● ● ● ●
      └─────────────────────────────────────────────────────►
       300    900    1,500   3,000   5,000   8,000  miembros
```

### Tabla de costos relativos por fase

| Fase | Sedes | Costo relativo | Costo por miembro relativo |
|------|-------|----------------|---------------------------|
| Piloto | 1 (León) | **1x** (base) | **Alto** |
| Expansión 1 | 3 | ~1.4x | ~0.47x |
| Expansión 2 | 5 | ~1.7x | ~0.34x |
| Red Nacional | 8+ | ~2.2x | ~0.22x |

**Lectura:** Con 8 sedes, el costo total es ~2.2x el piloto, pero el costo **por miembro** es ~0.22x. Es decir: cuesta apenas un poco más del doble operar 8 sedes que operar 1, pero se atiende a 10x más miembros.

---

## 5. Go/No-Go: criterios para expandir

Antes de activar cada nueva sede, se evalúan estos criterios:

### Criterios de negocio

| Criterio | Umbral mínimo | Quién evalúa |
|----------|---------------|-------------|
| Demanda confirmada | ≥30 empresarios interesados | Consejo local + Mario |
| Consejo local activo | Consejo de campus constituido | Tec |
| Admin de sede identificado | Persona operativa confirmada | Consejo + Tec |
| Presupuesto aprobado | Costo de la instancia cubierto | Consejo + Tec |

### Criterios técnicos

| Criterio | Umbral mínimo | Quién evalúa |
|----------|---------------|-------------|
| Plataforma estable | 99.5% uptime en los últimos 3 meses | HA |
| Agentes calibrados | Tasa de matches aceptados ≥40% | HA |
| Datos migrados | 100% de perfiles base transferidos | HA + Admin local |
| Capacitación completada | Admin local entrenado y operativo | HA |

### Criterios de red

| Criterio | Umbral mínimo | Quién evalúa |
|----------|---------------|-------------|
| Sedes existentes funcionando | Métricas de sedes activas en verde | Consejo central |
| Valor de matching inter-sede demostrado | ≥10 matches entre sedes existentes | HA + Consejo |

**Si algún criterio no se cumple:** Se posterga la apertura. No se fuerza. Mejor una sede menos que una sede débil.

---

## 6. Gobernanza a escala

### Cómo cambia la gobernanza con el crecimiento

| Escala | Gobernanza | Decisiones clave |
|--------|-----------|------------------|
| **1 sede (León)** | Consejo León decide todo | Reglas de comunidad, admisión, datos |
| **3 sedes** | Consejo León como "root" + admins locales | León define reglas globales, cada sede opera localmente |
| **5+ sedes** | Consejo Nacional (representantes de cada sede) + Tec + HA | Reglas nacionales vs. locales, pricing, expansión |
| **Red Nacional** | Estructura federada | Autonomía local con estándares globales |

### El modelo federado

```
                ┌───────────────────────────────┐
                │     CONSEJO NACIONAL          │
                │  (representantes por sede)     │
                │                               │
                │  Define:                      │
                │  • Valores y estándares        │
                │  • Política de datos           │
                │  • Expansión estratégica       │
                │  • Pricing nacional            │
                └──────────────┬────────────────┘
                               │
          ┌────────────────────┼────────────────────┐
          │                    │                    │
          ▼                    ▼                    ▼
   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐
   │ CONSEJO     │     │ CONSEJO     │     │ CONSEJO     │
   │ LEÓN        │     │ CHIHUAHUA   │     │ MORELIA     │
   │             │     │             │     │             │
   │ Define:     │     │ Define:     │     │ Define:     │
   │ • Admisión  │     │ • Admisión  │     │ • Admisión  │
   │   local     │     │   local     │     │   local     │
   │ • Eventos   │     │ • Eventos   │     │ • Eventos   │
   │   locales   │     │   locales   │     │   locales   │
   │ • Operación │     │ • Operación │     │ • Operación │
   └─────────────┘     └─────────────┘     └─────────────┘
```

**El principio:** Lo global se estandariza (tecnología, datos, seguridad, valores). Lo local se personaliza (comunidad, contexto, eventos, admisión).

---

## 7. Riesgos y mitigación

| Riesgo | Probabilidad | Impacto | Mitigación |
|--------|-------------|---------|------------|
| Una sede no alcanza masa crítica | Media | Bajo (costo acotado) | Go/no-go criteria rigurosos; no abrir hasta tener ≥30 interesados |
| Diferencias regionales dificultan el matching | Baja | Medio | Los agentes se calibran por contexto local; matching inter-sede es gradual |
| Resistencia de miembros a pagar membresía | Media | Medio | Piloto gratuito demuestra valor primero; membresía se introduce con valor probado |
| Admin de sede no tiene capacidad | Media | Alto | Selección cuidadosa + capacitación antes de lanzar; soporte continuo de HA |
| El Tec centraliza demasiado (pierde lo local) | Baja | Alto | Modelo federado preserva autonomía local; León retiene su identidad |
| Velocidad de expansión supera capacidad operativa | Baja | Alto | Máximo 2 sedes nuevas por año; go/no-go antes de cada una |

---

## 8. Timeline visual

```
2026                    2027                    2028                    2029+
──────────────────      ──────────────────      ──────────────────      ──────────────
│                 │     │                 │     │                 │     │
│  PILOTO LEÓN    │     │  EXPANSIÓN 1    │     │  EXPANSIÓN 2    │     │ RED NACIONAL
│                 │     │                 │     │                 │     │
│  Feb: Aprobación│     │  + Chihuahua    │     │  + Morelia      │     │ + Laguna
│  Mar: Discovery │     │  + Aguascalientes│    │  + Guadalajara  │     │ + Querétaro
│  Abr-Sep: Build │     │                 │     │                 │     │ + CDMX
│  Abr 27: Evento │     │  Matching       │     │  Insights       │     │
│  Oct: Lanzam.   │     │  inter-sede     │     │  comparativos   │     │ Efecto de red
│                 │     │  activado       │     │  entre regiones │     │ completo
│  ~300 miembros  │     │  ~900 miembros  │     │  ~1,500 miemb.  │     │ ~3,000+
│                 │     │                 │     │                 │     │
──────────────────      ──────────────────      ──────────────────      ──────────────
        1x                    9x                      25x                   100x
    valor relativo        valor relativo          valor relativo        valor relativo
```

---

## 9. Resumen para Jorge Blando

| Pregunta | Respuesta |
|----------|-----------|
| ¿Cómo escala? | Arquitectura fractal: la plataforma se construye una vez y se replica. Cada sede nueva hereda todo y solo configura lo local. |
| ¿Cuánto cuesta cada sede nueva? | ~20-25% del costo del piloto. La plataforma ya existe. |
| ¿Cuántas sedes por año? | Recomendamos máximo 2 por año, con criterios de go/no-go antes de cada una. |
| ¿Cómo se gobierna a escala? | Modelo federado: estándares globales + autonomía local. León es el "root", cada sede tiene su Consejo. |
| ¿Cuándo se activa el matching entre sedes? | Con la segunda sede (Expansión 1). Ahí se desbloquea el efecto de red. |
| ¿Cuál es el riesgo principal? | Abrir una sede sin masa crítica. Se mitiga con criterios claros: ≥30 interesados, admin confirmado, presupuesto aprobado. |
| ¿Cuál es la visión a 10 años? | ~8,000 miembros en 8-10 sedes. La comunidad empresarial más sofisticada de México. Modelo replicable a otros programas del Tec. |

---

**Horizons Architecture Systems**
Edgar Barroso
edgar@horizonsarchitecture.ai

Febrero 2026
