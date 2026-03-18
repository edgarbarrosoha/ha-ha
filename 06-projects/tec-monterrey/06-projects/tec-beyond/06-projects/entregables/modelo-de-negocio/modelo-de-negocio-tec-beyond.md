# Modelo de Negocio — Comunidad Tec Beyond
**Versión:** 2.2 | **Fecha:** 16 de marzo de 2026
**Autor:** Edgar Barroso / Horizons Architecture
**Para:** Jorge Blando, Mario Orozco, Víctor Gutiérrez

> **Lens:** Este documento describe el modelo de negocio de la Comunidad Beyond — cómo se financia, cómo crece, y cómo se sostiene. La relación comercial con HA (el socio tecnológico) se describe en la Sección 7 y en el Apéndice A.

---

## 1. Resumen ejecutivo

La Comunidad Beyond convierte a los egresados de Tec Beyond en una red de valor continuo, potenciada por inteligencia artificial. El modelo se estructura en dos fases:

1. **Año 1 — Piloto institucional:** El Tec/Consejo invierte $4M MXN. 40 empresarios acceden gratis. Se demuestra valor.
2. **Año 2+ — Comunidad autosustentable:** Los empresarios pagan membresía. HA participa como socio tecnológico con revenue share, no como proveedor con facturas.

**Números clave (escenario base):**

| Métrica | Año 1 | Año 2 | Año 3 | Año 5 |
|---------|-------|-------|-------|-------|
| Sedes activas | 1 | 3 | 5 | 9 |
| Empresarios en la red | 390 | 682 | 875 | 1,387 |
| Miembros pagadores | 0 (piloto gratis) | 281 (eq. anual) | 395 | 610 |
| Ingreso comunidad | $4.0M (institucional) | $9.9M | $13.9M | $22.3M |
| Costo total | $4.0M | $5.4M | $7.6M | $12.1M |
| Excedente | $0 (piloto) | +$4.5M | +$6.3M | +$10.2M |
| León solo cubre costos sin subsidio | — | **Sí** ($6.5M vs $4.7M) | Sí | Sí |

---

## 2. Supuestos — Tabla única de referencia

Todos los números del documento se derivan de esta tabla. Si un supuesto cambia, se recalcula todo.

### Mercado

| # | Variable | Valor | Fuente |
|---|----------|-------|--------|
| M1 | Empresarios acumulados León (hoy) | 359 | Spreadsheet Mario, dato real |
| M2 | Empresarios acumulados total (hoy) | 498 | León 359 + Chih 85 + Mich 54 |
| M3 | Multiplicador de impacto | 19× | 1 empresario + 3 familias + 15 colaboradores |
| M4 | Sedes activas hoy | 3 | León, Chihuahua, Michoacán |
| M5 | Sedes proyectadas 2030 | 9 | Spreadsheet Mario |
| M6 | Empresarios proyectados 2030 | 1,387 | Spreadsheet Mario, todas las sedes |
| M7 | Empresarios nuevos por sede por año | 18-51 | Varía por sede y madurez |

*Nota: documentos anteriores usan "~3,000+ miembros" y "~8,000 miembros en 10 años" como visión aspiracional. Este modelo usa las cifras del spreadsheet de Mario (marzo 2026): 1,387 empresarios acumulados a 2030. Con el multiplicador 19×, el impacto total es ~26,000 personas — consistente con la visión amplia cuando se incluyen familias y colaboradores.*

### Piloto

| # | Variable | Valor | Fuente |
|---|----------|-------|--------|
| P1 | Empresarios piloto | 40 | Mario, 14 mar |
| P2 | Costo piloto (membresía) | $0 — gratis | Recomendación: demostrar valor antes de cobrar |
| P3 | Duración piloto | 12 meses (abr 2026 – mar 2027) | Alineado con evento 28 abril |
| P4 | Membresías inician | Abril 2027 (Año 2) | Después de cerrar piloto con evidencia |
| P5 | Inversión institucional Año 1 | $4,000,000 MXN | A validar con Consejo/Tec |

### Membresías (a partir de Año 2)

| # | Variable | Valor | Notas |
|---|----------|-------|-------|
| R1 | Membresía anual por empresa | $30,000 MXN | ~$2,500/mes. 6-10% de lo que invirtieron en el programa |
| R2 | Unidad de membresía | 1 empresa | Incluye: 1 empresario + hasta 3 familiares + hasta 5 colaboradores = **9 asientos máximo** |
| R3 | Acceso adicional colaboradores (+5) | $3,600 MXN/persona/año | Para empresas con más de 5 colaboradores en células |
| R4 | Tasa de adopción (existentes, primer año) | 50% | Conservador: primer año de cobro |
| R5 | Tasa de adopción (existentes, año 2+) | 60% | Madurez |
| R6 | Tasa de adopción (generación activa) | 85% | Miembros en programa actual |
| R7 | Tasa de renovación anual | 90% | Meta. Benchmark: programas premium |

### Partnership HA

| # | Variable | Valor | Notas |
|---|----------|-------|-------|
| H1 | Fee de desarrollo (one-time) | $2,800,000 + IVA | Plataforma comunitaria + 4 agentes IA base (Match, Contenidos, Scout, Insights) |
| H2 | Revenue share (Año 2+) | 30% de ingresos brutos de la comunidad | Cubre: hosting, IA, ingeniería, soporte, nuevas sedes, nuevas features |
| H3 | Piso mínimo (Años 2-3) | $150,000 MXN/mes | Garantiza que HA cubra costos operativos mientras la comunidad escala |
| H4 | Nuevas sedes | Incluidas en el 30% | HA implementa sin cobro adicional — más miembros = más revenue share |
| H5 | Nuevas funcionalidades | Incluidas en el 30% | Roadmap tecnológico acordado anualmente |

---

## 3. Arquitectura de ingresos de la comunidad

### Año 1 — Piloto institucional (sin membresías)

| Fuente | Monto | Descripción |
|--------|-------|-------------|
| **Inversión institucional** | $4,000,000 | Tec/Consejo invierte. Cubre desarrollo + operación piloto |
| Membresías | $0 | Piloto gratuito para 40 empresarios |
| **Total Año 1** | **$4,000,000** | |

**Lógica:** No cobrar membresía hasta demostrar valor. Los 40 empresarios piloto validan el producto. Al cierre de Año 1, hay datos de uso, matches facilitados, NPS, engagement — evidencia para justificar la membresía.

### Año 2+ — Comunidad autosustentable

| Fuente | Descripción | Año 2 | Año 3 | Año 5 |
|--------|-------------|-------|-------|-------|
| **Membresías** | Empresarios × adopción × $30K | $8,430K | $11,850K | $18,300K |
| **Eventos premium** | Reencuentro anual + temáticos | $1,500K | $2,000K | $4,000K |
| **Total** | | **$9,930K** | **$13,850K** | **$22,300K** |

*Membresías Año 2 — cálculo detallado:*

| Sede | Empresarios | Adopción | Miembros | Meses activos en Año 2 | Equivalente anual |
|------|------------|----------|----------|----------------------|-------------------|
| León | 435 | 50% | 218 | 12 (desde abr 2027) | 218 |
| Chihuahua | 136 | 40% | 54 | 9 (desde Q2 2027) | 41 |
| Michoacán | 111 | 40% | 44 | 6 (desde Q3 2027) | 22 |
| **Total** | | | **316 contratados** | | **281 equivalentes anuales** |

*Ingresos: 281 equivalentes anuales × $30K = **$8,430K**. Esta cifra se usa en todo el modelo.*

*Membresías Año 5: ~610 miembros (renovaciones 90% + nuevos adoptantes en 9 sedes).*

---

## 4. Estructura de costos de la comunidad

| Concepto | Año 1 | Año 2 | Año 3 | Año 5 |
|----------|-------|-------|-------|-------|
| **Socio tecnológico (HA)** | $3,248K | $2,979K | $4,155K | $6,690K |
| Equipo comunidad | $480K | $1,440K | $1,920K | $2,880K |
| Eventos (producción) | $272K | $1,000K | $1,500K | $2,500K |
| **Total costos** | **$4,000K** | **$5,419K** | **$7,575K** | **$12,070K** |

**Detalle del costo "Socio tecnológico":**

| | Año 1 | Año 2+ |
|-|-------|--------|
| Concepto | Fee de desarrollo $2.8M + IVA = $3.248M | 30% del ingreso bruto (mín. $1.8M/año) |
| Incluye | Plataforma comunitaria, 4 agentes IA base, setup | Hosting, IA, ingeniería, soporte, nuevas sedes, nuevas features de la plataforma comunitaria |

*Equipo comunidad: 1 coordinador Año 1 ($40K/mes), crece con sedes.*

---

## 5. P&L de la Comunidad — 5 años (escenario base)

| | Año 1 | Año 2 | Año 3 | Año 4 | Año 5 | **Acumulado** |
|-|-------|-------|-------|-------|-------|---------------|
| **Ingresos** | | | | | | |
| Institucional | $4,000K | — | — | — | — | $4,000K |
| Membresías | — | $8,430K | $11,850K | $15,720K | $18,300K | $54,300K |
| Eventos | — | $1,500K | $2,000K | $3,000K | $4,000K | $10,500K |
| **Total ingresos** | **$4,000K** | **$9,930K** | **$13,850K** | **$18,720K** | **$22,300K** | **$68,800K** |
| | | | | | | |
| **Costos** | | | | | | |
| HA (socio tecnológico) | $3,248K | $2,979K | $4,155K | $5,616K | $6,690K | $22,688K |
| Equipo comunidad | $480K | $1,440K | $1,920K | $2,400K | $2,880K | $9,120K |
| Eventos (producción) | $272K | $1,000K | $1,500K | $2,000K | $2,500K | $7,272K |
| **Total costos** | **$4,000K** | **$5,419K** | **$7,575K** | **$10,016K** | **$12,070K** | **$39,080K** |
| | | | | | | |
| **Excedente** | **$0** | **+$4,511K** | **+$6,275K** | **+$8,704K** | **+$10,230K** | **+$29,720K** |
| **Margen** | 0% | 45% | 45% | 46% | 46% | 43% |

*Año 1 = break-even by design: inversión institucional cubre el piloto.*
*HA Año 2: max(30% × $9,930K, $1,800K) = $2,979K.*

---

## 6. Comparativa de escenarios

| Variable | Conservador | Base | Optimista |
|----------|-------------|------|-----------|
| Membresía anual | $18,000 | $30,000 | $48,000 |
| Adopción existentes | 35% | 50% | 70% |
| Renovación | 80% | 90% | 95% |
| Sedes Año 5 | 5 | 9 | 9 |

| Resultado | Conservador | Base | Optimista |
|-----------|-------------|------|-----------|
| Miembros Año 2 (eq. anual) | 163 | 281 | 381 |
| Miembros Año 5 | 320 | 610 | 890 |
| Ingresos Año 5 (membresías + eventos) | $8.8M | $22.3M | $46.7M |
| Excedente acumulado 5 años | +$3.1M | +$29.5M | +$78.2M |
| Membresías cubren costos sin subsidio | Año 3 | **Año 2** | Año 2 |

Incluso en el escenario conservador, León solo se sostiene desde Año 3 con membresías + eventos. La autosustentabilidad en Año 2 no depende de la expansión a otras sedes — León tiene suficiente masa (435 empresarios × 50% = 218 × $30K = $6.5M) para cubrir costos operativos ($4.7M con HA al 30%). Las sedes adicionales aceleran el excedente, pero no son condición de supervivencia.

---

## 7. HA como socio tecnológico (no proveedor)

### El principio

El modelo preferido (Plan A) alinea a HA como socio, no como proveedor: su ingreso crece proporcionalmente al éxito de la comunidad. Si la comunidad prospera, HA prospera. Si no, HA absorbe el riesgo. Si la estructura de revenue share no es viable para el Tec, el Plan B (retainer + bono) aproxima la misma lógica con una estructura contractual convencional (ver más abajo).

### Estructura de la sociedad

```
┌──────────────────────────────────────────────────────┐
│              COMUNIDAD TEC BEYOND                    │
│         (Consejo + Tec + Empresarios)                │
│                                                      │
│   Dueña de: datos, comunidad, marca, decisiones      │
│   Recibe: 70% de ingresos brutos                     │
└──────────────────────┬───────────────────────────────┘
                       │
                       │ 30% revenue share
                       │
┌──────────────────────▼───────────────────────────────┐
│              HORIZONS ARCHITECTURE                    │
│            (Socio Tecnológico)                        │
│                                                      │
│   Aporta: plataforma, IA, ingeniería continua         │
│   Recibe: 30% de ingresos brutos                     │
│   Cubre: servicios base + roadmap anual acordado      │
└──────────────────────────────────────────────────────┘
```

### Por qué sociedad y no proveedor (Plan A)

| Modelo proveedor | Modelo socio (Plan A) |
|------------------|----------------------|
| HA cobra por sede, por feature, por hora | HA cobra 30% del ingreso total |
| Incentivo de HA: vender más horas/sedes | Incentivo de HA: hacer crecer la comunidad |
| Si la comunidad no crece, HA sigue cobrando | Si la comunidad no crece, HA gana menos |
| Nuevas sedes = negociación de presupuesto | Nuevas sedes = HA las implementa porque más miembros = más ingresos |
| Nuevas features = cotización adicional | Nuevas features = HA las desarrolla porque mejor producto = más miembros |
| Relación transaccional | Relación de largo plazo, alineación natural |

### Lo que incluye el 30% — alcance acotado por roadmap anual

El 30% cubre un **alcance acordado anualmente** entre HA y el Consejo. No es un cheque en blanco, sino un plan de trabajo negociado.

**Servicios base (siempre incluidos):**

| Servicio | SLA / Alcance |
|----------|---------------|
| Hosting e infraestructura | 99.5% uptime, backups diarios |
| Consumo de IA | 4 agentes base activos, uso por miembros acotado a fair-use (throttle si consumo >3× promedio) |
| Soporte técnico | Resolución de incidentes en <24h (críticos <4h) |
| Mantenimiento | Updates de seguridad, patches, optimización de rendimiento |
| Capacitación técnica | 1 sesión por sede nueva + materiales |

**Servicios de evolución (acordados en roadmap anual):**

| Servicio | Alcance por defecto |
|----------|---------------------|
| Implementación de sedes nuevas | Hasta 2 sedes/año incluidas. Sedes adicionales se negocian. |
| Nuevas features | Roadmap de 4 features mayores/año, acordado en Q4 del año anterior |
| Nuevos agentes | Hasta 1 agente nuevo/año. Agentes adicionales se negocian. |

**Si una de las partes quiere algo fuera del roadmap acordado**, se negocia como addendum con costo o se incorpora al roadmap del año siguiente. Esto protege a HA de scope creep y al Consejo de dependencia en promesas vagas.

### Lo que NO incluye el 30%

| Concepto | Quién lo cubre |
|----------|---------------|
| Equipo de comunidad (coordinadores, admin) | Consejo/Tec |
| Producción de eventos | Consejo |
| Marketing y comunicación | Consejo |
| Contenido editorial (no generado por IA) | Consejo |

### Estructura comercial alternativa (Plan B)

Si la estructura de revenue share no es viable para la procuraduría del Tec (restricción legal o administrativa), la misma lógica económica se puede aproximar con un modelo contractual convencional:

| Concepto | Plan A (Revenue Share) | Plan B (Retainer + Bono) |
|----------|----------------------|--------------------------|
| **Año 1** | Fee desarrollo $2.8M + IVA | Igual |
| **Base mensual (Año 2+)** | 30% de ingresos brutos | Retainer fijo $180K/mes ($2.16M/año) |
| **Componente variable** | Implícito en el % | Bono anual: 15% del ingreso bruto que exceda $8M/año |
| **Nuevas sedes** | Incluidas en el 30% | $400K por sede (implementación one-time) |
| **Roadmap features** | Incluido en el 30% | Incluido en retainer hasta 4 features/año |

**Comparativa de lo que HA recibe en cada plan (escenario base):**

| | Plan A | Plan B |
|-|--------|--------|
| Año 2 | $2,898K | $2,160K + bono $249K + 2 sedes $800K = $3,209K |
| Año 5 | $6,690K | $2,160K + bono $2,145K + 1 sede $400K = $4,705K |
| Total 5 años | $22,607K | $19,700K |

*Plan A es mejor para HA a largo plazo (mayor upside). Plan B es más familiar para procurement del Tec y tiene menor riesgo para HA en años tempranos (retainer fijo). El Consejo puede preferir Plan B porque el costo base es predecible.*

**Recomendación:** Negociar Plan A primero. Si no pasa procurement, Plan B logra alineación similar con estructura convencional.

### Protecciones mutuas

| Protección | Para quién | Mecanismo |
|------------|-----------|-----------|
| **Piso mínimo $150K/mes (Años 2-3)** | HA | Garantiza operación aunque la comunidad arranque lento |
| **Datos siempre del Consejo** | Comunidad | Portabilidad total. Si la relación termina, los datos se quedan |
| **Auditoría anual de outcomes** | Comunidad | Verificar: SLA cumplido, roadmap entregado, uptime, seguridad, portabilidad de datos. No audita el margen interno de HA. |
| **Roadmap acordado** | Ambos | Plan anual de features, negociado |
| **Cláusula de salida** | Ambos | 12 meses de aviso. Migración asistida |
| **Revisión del % a 3 años** | Ambos | Ajustar el 30% si las condiciones cambian |

---

## 8. Definición precisa de membresía

### Qué incluye la membresía por empresa ($30,000 MXN/año)

| Concepto | Detalle |
|----------|---------|
| **Asientos incluidos** | 1 empresario + hasta 3 familiares + hasta 5 colaboradores = **9 asientos máximo** |
| **Acceso empresario** | Plataforma completa: matching IA, contenido personalizado, dashboard, comunidad, directorio de red |
| **Acceso familiar** | Comunidad, agenda familiar, contenido personalizado (sin matching de negocios) |
| **Acceso colaborador** | Directorio de comunidad, contenido de aprendizaje, perfil de equipo |
| **Colaboradores adicionales** | $3,600 MXN/persona/año (empresas con células grandes, +5 colaboradores) |
| **No incluye** | Eventos premium (costo adicional), consultoría personalizada |

### Por qué "por empresa" y no "por persona"

- El empresario piensa en equipo + familia como unidad (así funciona Tec Beyond)
- Simplifica la venta: una decisión, un pago
- El cap de 9 asientos previene abuso sin restringir valor percibido
- Empresas con células grandes pagan por asiento adicional — costo marginal real

### Costo por asiento activo para la plataforma

| Miembros | Asientos estimados | Hosting+IA presupuestado (Apéndice A) | Costo por asiento/mes |
|----------|--------------------|----------------------------------------|-----------------------|
| 281 empresas eq. anual (Año 2) | ~1,550 asientos | $960K/año = $80K/mes | **$52 MXN (~$3 USD)** |
| 610 empresas (Año 5) | ~3,400 asientos | $2,400K/año = $200K/mes | **$59 MXN (~$3 USD)** |

*Hosting+IA es solo una fracción de los costos de HA. El grueso es ingeniería (equipo que desarrolla y mantiene). El costo total de HA por asiento incluyendo ingeniería: Año 2 = $3,060K / 1,500 / 12 = $170/asiento/mes. Pero HA cubre esto internamente desde el revenue share — la comunidad solo ve el 30% como línea de costo.*

---

## 9. KPIs de fase-gate

### Gate 1: Piloto → Membresías León (Mes 12 — Marzo 2027)

**KPIs de producto (3 de 4 requeridos):**

| KPI | Meta | Medición |
|-----|------|----------|
| Miembros activos mensuales | ≥70% de los 40 piloto (≥28) | Login + interacción ≥1×/mes |
| Matches facilitados | ≥30 en 8 meses | Introducciones aceptadas por ambas partes |
| NPS | ≥40 | Encuesta al cierre del piloto |
| Contenido consumido | ≥60% de pilotos interactúan con contenido personalizado | Lecturas + interacciones con agente Contenidos |

**KPI comercial (obligatorio para pasar el gate):**

| KPI | Meta | Medición |
|-----|------|----------|
| Cartas de intención o pre-compromisos | ≥100 empresarios de León dispuestos a pagar membresía | LOI firmada o compromiso verbal documentado durante el piloto |

*El KPI comercial convierte el piloto en un funnel de ventas, no solo en un experimento de producto. Si el producto funciona (3 de 4 KPIs) pero nadie quiere pagar (no hay 100 LOIs), no se abren membresías.*

**3 de 4 producto + KPI comercial → abrir membresías León.**
**3 de 4 producto sin KPI comercial → ajustar pricing/propuesta, extender 3 meses.**
**≤2 producto → reevaluar antes de cualquier cobro.**

### Gate 2: León 6 meses → Implementar Sedes 2 y 3 (Mes 18 — Oct 2027)

Evaluado 6 meses después de abrir membresías León (abr → oct 2027). Chihuahua y Michoacán **no se implementan** hasta que este gate se pase.

| KPI | Meta |
|-----|------|
| Miembros pagadores León | ≥150 de 435 elegibles (35%) |
| Ingresos por membresía León (6 meses) | ≥$3.5M MXN |
| Tasa de retención a 6 meses | ≥85% de los primeros pagadores |
| ≥1 match verificado por miembro | ≥50% de miembros |

**3 de 4 → implementar Chihuahua (Q4 2027) y Michoacán (Q1 2028).**
**2 de 4 → implementar solo 1 sede, evaluar la segunda en 6 meses.**
**≤1 → consolidar León antes de expandir.**

---

## 10. Cronograma

| Fecha | Hito | Gate |
|-------|------|------|
| **28 abr 2026** | Reencuentro Empresarial — Preview + onboarding 40 piloto | Aprobación presupuesto |
| **May-Jun 2026** | Desarrollo plataforma MVP | — |
| **Jul 2026** | Beta con 40 empresarios piloto (acceso gratuito) | — |
| **Mar 2027** | Cierre piloto — evaluación completa, evidencia recopilada | Gate 1: KPIs piloto + comerciales |
| **Abr 2027** | **Año 2 inicia:** Membresías activas León (435 elegibles) | — |
| **Oct 2027** | León 6 meses de membresías — evaluación de expansión | Gate 2: ¿Implementar Sedes 2 y 3? |
| **Q4 2027** | Implementación Chihuahua (136 empresarios) — si Gate 2 pasa | — |
| **Q1 2028** | Implementación Michoacán (111 empresarios) — si Gate 2 pasa | — |
| **2028-2030** | Expansión nacional (5→9 sedes) | Gate por sede |

*Año 1 (abr 2026 – mar 2027) = piloto gratuito. Año 2 (abr 2027 – mar 2028) = membresías León, expansión condicionada a Gate 2.*

---

## 11. Decision ask

Para avanzar, se requiere aprobación de:

### 1. Aprobar piloto institucional
- **Inversión:** $4,000,000 MXN
- **Quién aprueba:** Consejo León + Jorge Blando
- **Cubre:** Desarrollo plataforma ($2.8M + IVA → HA) + operación piloto + equipo + evento
- **Año 1 es gratuito para empresarios.** Membresía empieza Año 2.
- **Deadline:** Antes del 28 de abril

### 2. Aprobar estructura comercial con HA
- **Plan A (preferido):** Revenue share 30% a partir de Año 2, piso $150K/mes en Años 2-3
- **Plan B (si procurement lo requiere):** Retainer $180K/mes + bono 15% sobre ingreso >$8M + $400K/sede nueva
- **Quién aprueba:** Consejo + Jorge Blando + Comité de IA
- **Condición:** Sujeto a KPIs del piloto (Gate 1). Estructura definitiva se firma antes del cierre de Año 1.
- **Alcance:** Servicios base + roadmap anual acordado (ver Sección 7)

### 3. Designar responsables
- **Coordinador comunidad:** [Por designar]
- **Socio tecnológico:** Horizons Architecture
- **Sponsors:** Mario Orozco + Víctor Gutiérrez
- **Oversight:** Comité de IA

### 4. Validar KPIs de fase-gate
- Confirmar metas de Gate 1 y Gate 2 como criterios de go/no-go

### 5. Derecho de primera oferta para expansión
- **Qué:** Si el modelo funciona en León, HA tiene derecho de primera oferta para implementar en futuras sedes Tec Beyond y comunidades adyacentes del Tec (alumni, posgrado, ejecutivos)
- **Por qué:** HA invierte margen en Años 1-2 a cambio de upside a largo plazo. Ese upside solo se materializa si la expansión es parte del acuerdo, no negociación sede por sede
- **Mecanismo:** Cláusula ROFO (Right of First Offer) en el contrato — si Tec Beyond decide expandir o crear una comunidad similar, HA presenta propuesta primero

---

## Apéndice A: Economía de HA (referencia interna)

*Esta sección es para uso interno de HA. No forma parte de la presentación al Consejo/Tec.*

### Revenue de HA — 5 años

| | Año 1 | Año 2 | Año 3 | Año 4 | Año 5 | **Total** |
|-|-------|-------|-------|-------|-------|-----------|
| Fee desarrollo | $3,248K | — | — | — | — | $3,248K |
| Revenue share (30%) | — | $2,979K | $4,155K | $5,616K | $6,690K | $19,440K |
| **Total HA** | **$3,248K** | **$2,979K** | **$4,155K** | **$5,616K** | **$6,690K** | **$22,688K** |

*Fee desarrollo: $2.8M + 16% IVA = $3.248M.*

### Costos operativos de HA

| | Año 1 | Año 2 | Año 3 | Año 4 | Año 5 |
|-|-------|-------|-------|-------|-------|
| Ingeniería (equipo) | $1,800K | $1,800K | $2,400K | $2,400K | $3,000K |
| Hosting + IA | $600K | $960K | $1,440K | $1,920K | $2,400K |
| Soporte + admin | $300K | $300K | $360K | $480K | $600K |
| **Total** | **$2,700K** | **$3,060K** | **$4,200K** | **$4,800K** | **$6,000K** |

### Margen de HA

| | Año 1 | Año 2 | Año 3 | Año 4 | Año 5 | **Total** |
|-|-------|-------|-------|-------|-------|-----------|
| Revenue | $3,248K | $2,979K | $4,155K | $5,616K | $6,690K | $22,688K |
| Costos | $2,700K | $3,060K | $4,200K | $4,800K | $6,000K | $20,760K |
| **Margen** | **+$548K** | **-$81K** | **-$45K** | **+$816K** | **+$690K** | **+$1,928K** |

*Años 2-3 son tight — HA opera near break-even. Esto es la inversión del socio: HA apuesta al éxito de la comunidad. El piso de $150K/mes protege contra escenarios peores. A partir de Año 4, margen creciente.*

*Nota: HA puede mejorar estos márgenes de dos formas: (a) módulos adicionales fuera del scope base (ver Apéndice B), (b) eficiencias de ingeniería a medida que la plataforma madura.*

### Post-Año 5

- Si la comunidad crece al ritmo proyectado: revenue share >$10M/año en Año 7-8
- Cada sede nueva es marginal (plataforma ya existe)
- Modelo replicable a otras comunidades (alumni, gobierno, corporativo)

---

## Apéndice B: Oportunidades futuras (fuera del scope de este modelo)

Los siguientes servicios no forman parte de la Comunidad Beyond ni de la plataforma comunitaria. Se mencionan como oportunidades de expansión que se negociarían por separado.

| Oportunidad | Descripción | Cuándo evaluar |
|-------------|-------------|----------------|
| **Módulo de innovación (Ulrick framework)** | Dashboard de evaluación de Células de Innovación, rankings personalizados, Innovation Index | Cuando las células estén integradas a la comunidad — podría ser Año 2+ |
| **Capacitación IA** | Cursos generados por agentes según demanda de la red | Cuando haya suficiente data de necesidades de aprendizaje |
| **Pipeline Scout** | Detección automatizada de candidatos para nuevas generaciones | Cuando la red tenga masa crítica en múltiples sedes |
| **Consultoría de datos** | Insights estratégicos derivados de la red para el Consejo/Tec | Cuando haya 12+ meses de datos de comportamiento |

*Cada uno se evaluaría como addendum o producto independiente, con pricing y scope propio.*

---

**Horizons Architecture Systems**
Edgar Barroso
edgar@horizonsarchitecture.ai

Marzo 2026
