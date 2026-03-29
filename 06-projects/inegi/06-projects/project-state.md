# Project State: INEGI

## Meta
- **Full name:** Soluciones de Inteligencia Artificial para el procesamiento de información de la Política de Desarrollo Social
- **Client:** INEGI — DGEMP / DGAEIPDS / Dirección de Desarrollo Conceptual y Normativo
- **Stakeholder directa:** Gaby (apellido por confirmar)
- **Model:** Diseño e implementación de soluciones de IA para evaluación de política social
- **Phase:** Pre-contrato — formato requisitado + definir contratación
- **Revenue:**
  - **Total contrato:** ~$5M MXN
  - **Via:** Tec de Monterrey (overhead 30%, Ileana Rossell decana, solo 1 coordinador de su lado)
  - **Presupuesto HA:** $3.2M MXN
- **Significance:** Primer cliente gobierno federal. Puerta a relación de todo el sexenio.

## Qué es este proyecto (entendimiento actual)

El INEGI recibió la facultad de evaluar la Política de Desarrollo Social (antes CONEVAL). Construyó el MEPS (Modelo de Evaluación Integral de la PDS) que estructura la evaluación en 3 dimensiones a lo largo del sexenio:

| Año | Informe del MEPS |
|-----|------------------|
| 1 | Temático o coyuntural |
| **2** | **Evaluación integral de DISEÑO (pertinencia + coherencia)** |
| 3 | Temático o coyuntural |
| 4 | Evaluación integral de IMPLEMENTACIÓN |
| 5 | Temático o coyuntural |
| 6 | Evaluación integral de RESULTADOS |

**Estamos en Año 1-2.** El primer gran producto del MEPS es la evaluación integral de diseño, que analiza pertinencia y coherencia de la PDS como sistema. Para producir ese informe, el INEGI necesita procesar volúmenes masivos de documentos (PND, programas sectoriales, reglas de operación, INPADS, presupuestos) — y ahí entramos nosotros con IA.

## Los 2 documentos adicionales

INEGI necesita producir 2 documentos de evaluación que son componentes de la evaluación integral de diseño:
- **Pertinencia de la PDS** — la política responde a necesidades reales? Hay alineación entre objetivos declarados y datos de necesidades?
- **Coherencia de la PDS** — los programas, instrumentos y recursos son consistentes entre sí? Hay duplicidades, contradicciones, huecos entre órdenes de gobierno?

**Decisión de HA:** producir estos documentos además de las herramientas de IA, sin presupuesto adicional. Razón: lucirse en el primer proyecto federal y posicionarse como proveedor del INEGI para todo el sexenio (implementación en Año 4, resultados en Año 6).

**Pendiente:** Confirmar con Gaby que efectivamente son pertinencia y coherencia.

## Lo que HA hace en concreto

1. Construir herramientas de IA que procesen el corpus documental de la PDS (NLP, cruce de datos, sistematización)
2. Con esas herramientas, producir los análisis de pertinencia y coherencia que alimentan el informe de evaluación de diseño
3. Transferir herramientas y conocimiento para que INEGI replique en evaluaciones futuras

## Entregables del contrato (mayo–julio 2026)

| # | Producto | Plazo |
|---|----------|-------|
| 1 | Diseño conceptual y técnico de soluciones IA | Mayo 2026 |
| 2 | Soluciones IA — procesamiento/sistematización parte 1 | Mayo 2026 |
| 3 | Resultados implementación parte 1 | Junio 2026 |
| 4 | Soluciones IA — procesamiento/sistematización parte 2 | Junio 2026 |
| 5 | Resultados implementación parte 2 | Julio 2026 |
| 6 | Manuales técnicos/usuario + sesiones capacitación | Julio 2026 |
| 7 | Documento de evaluación: pertinencia de la PDS (por confirmar) | Por definir |
| 8 | Documento de evaluación: coherencia de la PDS (por confirmar) | Por definir |

## Fuentes de datos clave

- **INPADS** — Inventario Nacional de Programas y Acciones de Desarrollo Social (federal, estatal, municipal)
- **INEGI** — Censos, encuestas (ENIGH, ENCIG, ENVIPE), datos georreferenciados, medición de pobreza multidimensional
- **SHCP** — Presupuesto de egresos, cuenta pública, transparencia presupuestaria
- **Documentos normativos** — PND, programas sectoriales, reglas de operación, DOF

## Documentación del proyecto

| Documento | Ubicación | Qué es |
|-----------|-----------|--------|
| Síntesis del servicio (INEGI) | `05-context/sintesis-del-servicio-ia-inegi.md` | TDR del proyecto — lo que INEGI pide |
| Presentación MEPS (INEGI) | `05-context/meps-presentacion-18032026.md` | Modelo de evaluación, timeline sexenal, dimensiones |
| Marco metodológico (Oscar) | `05-context/marco-metodologico-oscar.md` | Propuesta técnica HA — sobredimensionada, no enviar aún |
| Presupuesto HA | `06-projects/presupuesto-ha.md` | $3.2M desglosado por entregable |

## Next Steps
- [ ] **Formato requisitado INEGI** (deadline 30/03 16:30 CDM)
- [ ] **Hablar con Gaby** — confirmar que los 2 documentos son pertinencia + coherencia, entender scope real
- [ ] Responder correo de Rossio (Tec) — adjuntar TDR y presupuesto, pedir reunión con Gaby
- [ ] Reenviar correos de alta del Tec como proveedor
- [ ] Arquitecturizar proyecto — mapear entregables a tareas
- [ ] Definir forma de contratación vía Tec
- [ ] Kick-off con equipo HA (Edgar, Oscar, Carlos, Rossana)

## Key People
- **Gaby** — Stakeholder directa en INEGI. Contacto principal. Apellido por confirmar.
- **Ileana Rossell** — Decana Tec. Aceptó 30% overhead con solo 1 coordinador.
- **Rossio** — Contacto operativo Tec. Pidió TDR, presupuesto y correos de alta.
- **Consultores:** Carlos Anguiano + Rossana Tornel (economistas/investigadores)
- **Tech lead:** Oscar Díaz
- **Data:** Erick Lozano
- **PM:** Sarahí Orduño

## Notes
- El MEPS habla de "sistemas complejos" — eso es core HA. No tenemos que aprender su lenguaje.
- Oscar elaboró un marco metodológico completo (6 agentes por criterio OECD/DAC). Valioso como visión de largo plazo, pero sobredimensionado para el scope de este contrato (solo pertinencia + coherencia).
- Decisión: no enviar documento de Oscar a Gaby hasta confirmar scope. Primero escuchar, después mostrar.
- Timeline agresivo: 6 entregables en 3 meses (mayo-julio). Requiere scope definido en fase 1.
- Verificar requisitos de seguridad gobierno federal (posible restricción a LLMs comerciales).
- **Visión de largo plazo:** Si las herramientas funcionan para Año 2 (diseño), INEGI necesitará a HA para Año 4 (implementación) y Año 6 (resultados). Cliente de todo el sexenio.
- Este proyecto + SIC-Q = dos papers potenciales sobre IA + gobierno + complejidad.
