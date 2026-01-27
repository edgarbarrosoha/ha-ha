# V.02
# Las 6 dimensiones de HA (versión extendida y conectada)

**LEGADO**  
Es la brújula estratégica: define “qué significa ganar” y en qué horizonte de tiempo. En HA se formaliza como **función objetivo** (multicriterio, con pesos y restricciones) para alinear decisiones humanas y agentes de IA en todos los niveles.  
**Preguntas clave:** ¿cuál es el estado deseado?, ¿qué queremos lograr que trascienda?, ¿qué outcomes medimos y cómo?, ¿qué trade-offs aceptamos?, ¿en qué plazos?  
**Entradas:** visión, estrategia, gobernanza, restricciones regulatorias y operativas.  
**Salidas/artefactos:** función de Legado (descripción del estado deseado, objetivos, pesos, umbrales).  
**Evita:** proyectos aislados sin norte o métricas contradictorias.

**COMUNIDAD**  
Mapa vivo de personas e instituciones (internas y externas), con sus relaciones, incentivos e influencia. No es solo un organigrama; es un **grafo** operativo para coordinar quién decide qué, con quién y cuándo.  
**Preguntas:** ¿a quién necesitamos para lograr el Legado?, ¿a quién afecta/beneficia?, ¿quién valida?, ¿qué redes internas/externas activar?  
**Entradas:** estructuras formales, stakeholders, proveedores, reguladores.  
**Salidas:** análisis de actores, interconexiones y protocolos de coordinación.  
**Evita:** decisiones sin adopción o con fricción política.

**APRENDIZAJE**  
Capacidades, conocimientos y lecciones que permiten lograr el Legado. Incluye activos explícitos (manuales, wikis, datasets) y tácitos (skills del equipo), y habilita que los resultados de proyectos **retroalimenten** métodos, estándares y formación continua.  
**Preguntas:** ¿qué necesitamos saber/entrenar para cumplir las métricas del Legado?  
**Entradas:** resultados de pilotos, auditorías, prácticas expertas.  
**Salidas:** bases de conocimiento, patrones reutilizables, planes de *upskilling/reskilling*, bibliografía especializada.  
**Evita:** depender de “héroes individuales” y no documentar el aprendizaje.

**TECNOLOGÍA**  
Infraestructura y herramientas (datos, integración, IA, simulación) como **sistema socio-técnico**: qué servicios y *tools* usar, cómo integrarlos, con qué protocolos y costos. Aloja bases de datos y de conocimiento, y subagentes (p. ej., optimización de stack) para orquestar recursos, versiones y rendimiento en red.  
**Preguntas:** ¿qué *stack* soporta el Legado?, ¿cómo garantizamos interoperabilidad, seguridad y ética?  
**Entradas:** inventario de sistemas, APIs, investigación tecnológica, políticas de TI.  
**Salidas:** *blueprint* técnico, plan de desarrollo/adopción y gobierno técnico.  
**Evita:** “pilas de herramientas” inconexas o deuda técnica.

**CONTEXTO**  
Condiciones externas (mercado, regulación, macroeconomía, ambiente, geopolítica) que habilitan o restringen. Es **escaneo dinámico**: personas definen variables a monitorear y agentes sugieren señales (normas, mercado, clima económico-político-social cuando sea relevante) e inyectan alertas/escenarios en decisiones.  
**Preguntas:** ¿qué cambia en el entorno que influye en nuestro Legado?, ¿qué deberíamos saber para anticiparnos?, ¿qué datos contextuales son relevantes?  
**Entradas:** indicadores con series de tiempo, leyes/normas, eventos, cambios de mercado.  
**Salidas:** alertas, escenarios y restricciones vigentes por escala.  
**Evita:** miopía estratégica.

**PROYECTOS**  
La **acción**: iniciativas, tareas, recursos, riesgos y entregables que materializan el Legado. Aquí se prioriza portafolio, se ejecuta, se mide y se cierra el ciclo para actualizar las demás dimensiones.  
**Preguntas:** ¿cómo lo vamos a hacer?, ¿qué hacemos primero?, ¿con qué recursos y riesgos?, ¿cómo medimos el impacto?  
**Entradas:** función de Legado, capacidades, contexto, tecnología disponible.  
**Salidas:** gestión de proyectos, pilotos, indicadores, escalamiento y resultados trazables.  
**Evita:** actividad sin impacto, sin aprendizaje o desalineada con el Legado.

> Las dimensiones **operan en paralelo** (complejidad simultánea) y **evolucionan en el tiempo**; comparten una **taxonomía fija** y una **ontología generativa** que permiten crear subagentes cuando surgen nuevas necesidades. Un **agente raíz** coordina a los agentes-dimensión, y estos, a su vez, alimentan la ontología generativa.

---

## Puente directo: cómo cada dimensión entra a los **8 pasos**

- **LEGADO →** lidera el **Paso 2** (función objetivo) y regula **Paso 5** (criterios de éxito), **Paso 7** (ajuste de pesos) y **Paso 8** (norte del agente raíz).  
- **COMUNIDAD →** clave en **Paso 0** (alcance, mapa de interesados) y **Paso 3** (grafo multiusuario), habilita adopción en **Paso 6**.  
- **APRENDIZAJE →** nutre **Paso 3** (base de conocimiento), captura lecciones en **Paso 7** y acelera réplica en **Paso 6**.  
- **TECNOLOGÍA →** diseña el *stack* en **Paso 3**, opera agentes en **Paso 4** y viabiliza **Paso 5**; asegura interoperabilidad/seguridad en **Paso 8**.  
- **CONTEXTO →** alimenta **Paso 1** (diagnóstico) y mantiene escenarios en **Pasos 4–5**.  
- **PROYECTOS →** protagoniza **Paso 5** (pilotos) y **Paso 6** (escala), cerrando el bucle con **Paso 7**.

### Diagrama de puente (Mermaid)
```mermaid
flowchart TB
  %% Nodos de dimensiones
  LEGADO["LEGADO<br/>Driver estratégico"]
  COMUNIDAD["COMUNIDAD<br/>Habilitador social"]
  APRENDIZAJE["APRENDIZAJE<br/>Motor evolutivo"]
  TECNOLOGIA["TECNOLOGÍA<br/>Infraestructura"]
  CONTEXTO["CONTEXTO<br/>Sensibilidad del entorno"]
  PROYECTOS["PROYECTOS<br/>Ejecución"]

  %% Nodos de pasos
  P0["Paso 0: Alcance y mapa de interesados"]
  P1["Paso 1: Diagnóstico"]
  P2["Paso 2: Función objetivo (Legado)"]
  P3["Paso 3: KB y grafo multiusuario"]
  P4["Paso 4: Operación de agentes"]
  P5["Paso 5: Pilotos y criterios de éxito"]
  P6["Paso 6: Adopción y escala"]
  P7["Paso 7: Ajuste de pesos y lecciones"]
  P8["Paso 8: Norte del agente raíz e interoperabilidad"]

  %% Conexiones
  LEGADO -- "Lidera" --> P2
  LEGADO -. "Regula" .-> P5
  LEGADO -. "Regula" .-> P7
  LEGADO -. "Norte" .-> P8

  COMUNIDAD -- "Clave en" --> P0
  COMUNIDAD -- "Clave en" --> P3
  COMUNIDAD -- "Habilita adopción" --> P6

  APRENDIZAJE -- "Nutre" --> P3
  APRENDIZAJE -- "Captura lecciones" --> P7
  APRENDIZAJE -- "Acelera réplica" --> P6

  TECNOLOGIA -- "Diseña stack" --> P3
  TECNOLOGIA -- "Opera" --> P4
  TECNOLOGIA -- "Viabiliza" --> P5
  TECNOLOGIA -- "Interoperabilidad/seguridad" --> P8

  CONTEXTO -- "Alimenta" --> P1
  CONTEXTO -- "Mantiene escenarios" --> P4
  CONTEXTO -- "Mantiene escenarios" --> P5

  PROYECTOS -- "Protagoniza" --> P5
  PROYECTOS -- "Protagoniza" --> P6
  PROYECTOS -- "Cierra bucle" --> P7
Proceso HA
0) Preparación del reto
Propósito: alinear la ambición con el alcance práctico y el tiempo disponible.
Entradas mínimas: sponsor, objetivos preliminares, restricciones, ventanas de decisión.
Acciones clave:

Encuadre de reto (problema, impacto, riesgos, plazos).

Primer mapa de actores relevantes (internos/externos) y de sistemas.

Definición de criterios de éxito iniciales y ritmo de trabajo.
Entregables: contrato del reto, mapa de interesados, calendario, backlog inicial.
Métricas: claridad de alcance, compromiso de roles, riesgos identificados.
Ejemplo – Presupuestos: reducir tiempo de ciclo y/o mejorar precisión (nivel BU/planta y corte temporal).
Ejemplo – Generadores: definir familia de producto, restricciones normativas y de suministro, y ventanas de design gates.

1) Diagnóstico: Estado actual vs. Estado deseado
Propósito: entender el estado actual y el estado deseado en un periodo específico.
Entradas: entrevistas, procesos actuales, datos y documentos disponibles, entorno (mercado/regulación).
Acciones clave:

Mapa “as-is” (personas, procesos, datos, sistemas) vs. “to-be”.

Gap-analysis de datos, capacidades, tecnología y gobierno.

Riesgos y dependencias; hipótesis de valor por brecha.
Entregables: documento de brechas priorizadas y riesgos, hipótesis para alcanzar el estado deseado.
Métricas: % de procesos cubiertos, calidad de datos, severidad/probabilidad de riesgos.

2) Definir el LEGADO como función del sistema
Propósito: convertir el Legado en una función objetivo que gobierna decisiones y agentes.
Entradas: outcomes deseados, restricciones, horizontes temporales.
Acciones clave:

Selección de métricas y trade-offs (con pesos/umbrales).

Redacción de la función objetivo y sus restricciones.

Alineación con compliance y tolerancia al riesgo.
Entregables: función de Legado, tablero de objetivos y trade-offs.
Métricas: cobertura de outcomes, claridad de restricciones, aceptación ejecutiva.
Presupuestos: minimizar tiempo de ciclo y desviación vs. real, maximizando cumplimiento y trazabilidad.
Generadores: maximizar eficiencia y confiabilidad, minimizar LCOE/huella, cumpliendo normas.

3) Construir la BASE DE CONOCIMIENTO
Propósito: crear una base común para humanos y agentes.
Entradas: fuentes humanas, sistemas (ERP, BI, CAD/PLM, IoT), documentos.
Acciones clave:

Inventario de fuentes y evaluación de calidad.

Taxonomía fija (lo estable) + ontología generativa (lo adaptativo).

Modelado en grafo y publicación en la red multiusuario (permisos y trazabilidad).
Entregables: KB operacional (grafo), catálogo de documentos/datos, glosario, políticas de acceso.
Ejemplos:

Presupuestos: unificar BOM/POs/históricos, catálogos de proveedores e índices externos.

Generadores: relacionar requerimientos, simulaciones, resultados de prueba y fallas en campo.

4) Orquestar agentes por dimensión
Propósito: activar IA útil y controlada para acelerar análisis y decisiones.
Entradas: función de Legado, KB, procesos objetivo.
Acciones clave:

Definir agentes por dimensión (Legado, Comunidad, Aprendizaje, Tecnología, Contexto, Proyectos) y auxiliares.

Protocolos de diálogo entre agentes y con humanos (quién propone, quién valida).

Registro de contribuciones y versionado de decisiones.
Entregables: playbook de agentes (p. ej., xignux Budget Adviser, xignux Generator Designer), sistema de prompts/consultas, tablero de next steps.
Métricas: tasa de recomendaciones accionables, tiempo de respuesta, precisión explicable.
Ejemplos:

Presupuestos: Contexto actualiza índices; Proyectos propone cierres; Aprendizaje sugiere estandarización.

Generadores: Normas vigila IEC/IEEE; Diseño propone variantes; Compras estima disponibilidad/costo.

5) Diseño y ejecución de pilotos
Propósito: desplegar los agentes en la infraestructura de xignux y demostrar valor sin romper lo existente.
Entradas: brechas priorizadas, capacidad disponible, riesgos aceptables, golden datasets, responsables por dimensión.
Acciones clave:

Definir hipótesis, alcance, KPIs, criterios de salida y plan de datos. Umbrales de mejora, costo/beneficio, seguridad = 0 incidentes.

Integrar LLMs, simulaciones/CAE, ML y analítica con guardrails (grounding, privacidad, revisión humana).

Ejecutar sprints con gates y trazabilidad end-to-end (DoR/DoD, firmas digitales, observabilidad y cost tracking).
Entregables: PoCs/pilotos con métricas del Legado, tablero de resultados/costo-beneficio, playbook de agentes y paquete de escalamiento.
Métricas: impacto en KPIs del Legado, tiempo de ciclo, retrabajo, adopción (uso/NPS), SLOs de agentes.
Ejemplos:

Presupuestos: piloto “presupuesto paramétrico” + “what-if proveedores”.

Generadores: optimización paramétrica de un submódulo (p. ej., estator/rotor) + banco de pruebas.

6) Escalamiento fractal
Propósito: replicar lo que funciona sin perder orden ni trazabilidad.
Entradas: pilotos exitosos, patrones, límites de capacidad.
Acciones clave:

Definir unidad fractal mínima y niveles (individuo → equipo → área → planta → empresa).

Despliegue por fractales con paquetes reutilizables (datos, KB, agentes taxonómicos/ontológicos, plantillas de prompts).

Gobierno compartido e interoperabilidad entre niveles.
Entregables: roadmap de escalamiento, kits de réplica, acuerdos de gobernanza.
Métricas: tiempo/costo por réplica, consistencia de resultados, reutilización de activos.
Ejemplos: Presupuestos a más BUs; patrones de diseño a otras familias.

7) Medición y aprendizaje
Propósito: cerrar el ciclo y mejorar el sistema.
Entradas: resultados operativos, feedback de usuarios, auditorías.
Acciones clave:

Medir desempeño vs. función de Legado y KPIs de pilotos/escala.

Explicar variaciones; capturar lecciones; actualizar ontología y pesos/umbrales.

Publicar patrones en la KB y actualizar el playbook de agentes.
Entregables: informe de impacto, biblioteca de patrones, backlog de mejoras.
Métricas: mejora sostenida de KPIs, tasa de adopción, calidad de explicaciones, deuda técnica reducida.

8) Gobernanza y continuidad (“Agente xignux”)
Propósito: custodiar el sistema, asegurar ética/seguridad y continuidad operativa.
Entradas: políticas corporativas, riesgos, auditorías, cambios de contexto.
Acciones clave:

Operar un agente raíz que coordina agentes y permisos, con trazabilidad y prueba de contribución.

Gestión de versiones/decisiones y auditoría de cumplimiento.

Vigilancia del entorno y activación de escenarios.
Entregables: marco de gobernanza, bitácora de decisiones, reportes de cumplimiento y riesgo.
Métricas: cumplimiento normativo, SLOs de datos/IA, tiempo de atención de incidentes, satisfacción de usuarios.

Diagrama de relación entre pasos (Mermaid)
mermaid
Copy
Edit
flowchart LR
  A0["0 Preparacion del reto"]
  A1["1 Diagnostico"]
  A2["2 Legado como funcion"]
  A3["3 Base de conocimiento"]
  A4["4 Orquestar agentes"]
  A5["5 Pilotos"]
  A6["6 Escalamiento fractal"]
  A7["7 Medicion y aprendizaje"]
  A8["8 Gobernanza (Agente xignux)"]

  %% Camino principal
  A0 --> A1 --> A2 --> A3 --> A4 --> A5
  A5 --> A6
  A5 --> A7
  A6 --> A7

  %% Retroalimentaciones
  A7 --> A2
  A7 --> A3
  A7 --> A4
  A3 --> A1

  %% Supervision y soporte del agente raiz
  A8 --- A2
  A8 --- A3
  A8 --- A4
  A8 --- A5
  A8 --- A6
  A8 --- A7
Proyecto de Presupuestos
Objetivo: presupuesto driver-based, trazable y rápido, con escenarios “what-if” que integren datos internos (BOM/POs/histórico) y externos (índices, FX, tarifas).

1) Alcance mínimo viable (MVP)
1 BU, 2–3 centros de costo, 1 planta.

Tipos de gasto: materiales (ligados a BOM), compras indirectas clave, energía eléctrica.

Horizonte: 12 meses con revisiones mensuales.

Versionado: V0 (base), V1 (conservador), V2 (optimista).

2) Modelo de datos y taxonomía (esqueleto)
yaml
Copy
Edit
Entidades:
  CostCenter: {id, nombre, planta, responsable}
  Item: {id, sku, descripcion, unidad, categoria, subcategoria}
  BOM: {id_bom, product_id, item_id, qty, merma, fecha}
  Supplier: {id, nombre, rating, lead_time, moneda}
  SupplierCatalog: {supplier_id, item_id, precio, validez_desde, validez_hasta}
  PurchaseOrder: {id_po, fecha, supplier_id, item_id, qty, precio_unit, moneda, incoterm}
  BudgetVersion: {id, nombre, fecha, estatus, creador}
  BudgetLine: {id, version_id, cost_center_id, item_id, qty, precio_unit_base, supuestos_id}
  Assumption: {id, tipo, descripcion, fuente, vigente_desde, vigente_hasta}
  FXRate: {fecha, par, tipo_cambio}
  CommodityIndex: {fecha, indice, valor}
  ElectricTariff: {fecha, zona, tarifa, cargo_fijo, cargo_variable}
  WorkflowApproval: {id, version_id, etapa, aprobador, fecha, decision}
  ContributionLog: {id, version_id, autor, cambio, timestamp}
Relaciones clave:
  BOM -> Item
  SupplierCatalog -> Supplier, Item
  PurchaseOrder -> Supplier, Item
  BudgetLine -> BudgetVersion, Item, CostCenter, Assumption
3) Integraciones y pipelines
ERP/Compras: POs históricos + catálogos (diario).

PLM/BOM: consumos estándar por producto (semanal).

Externas: FX, commodities (aluminio, cobre, acero), tarifas eléctricas (diario).

Calidad de datos: reglas (nulos, monedas, outliers), bitácora de calidad.

4) Agentes por dimensión (ejemplos)
Contexto (señales externas), Tecnología (normalización), Aprendizaje (patrones de error), Proyectos (workflow), Comunidad (cuellos de aprobación), Legado (evaluación de escenarios).

5) Flujo operativo (resumen)
Consolidar KB → calcular costos estándar → armar V0 (drivers) → escenarios V1/V2 (shocks) → workflow con trazabilidad → publicar versión aprobada.

6) KPIs
Tiempo de ciclo, nº de iteraciones, precisión (WAPE/MAPE), trazabilidad y cobertura de supuestos.

7) Consultas típicas (SQL)
sql
Copy
Edit
-- Costo estándar por ítem en una fecha
SELECT i.id, i.sku,
       sc.precio * fx.tipo_cambio AS precio_local,
       et.cargo_variable AS costo_energia
FROM SupplierCatalog sc
JOIN Item i ON i.id = sc.item_id
JOIN FXRate fx ON fx.par = sc.moneda || '->MXN' AND fx.fecha = :fecha
LEFT JOIN ElectricTariff et ON et.zona = :zona AND et.fecha = :fecha
WHERE sc.validez_desde <= :fecha AND sc.validez_hasta >= :fecha;

-- WAPE por centro de costo
SELECT cc.nombre,
       SUM(ABS(real - presupuesto)) / NULLIF(SUM(real),0) AS wape
FROM ( ... ) t
JOIN CostCenter cc ON cc.id = t.cost_center_id
GROUP BY cc.nombre;
8) Gobierno y riesgos
Permisos por versión/centro de costo; firmas digitales; segregación de funciones; cachés diarios e imputación documentada.

9) Cronograma (8–10 semanas)
S1–2: inventario/taxonomía/pipelines → S3–4: V0 + agentes Contexto/Tecnología → S5–6: workflow + KPIs → S7–8: V1/V2 y plan de escala.

Proyecto de Generadores
Objetivo: trazar un “hilo digital” requisitos → diseño → simulación → prueba → campo, con optimización multiobjetivo (eficiencia, costo, confiabilidad) y cumplimiento normativo.

1) Alcance mínimo viable (MVP)
Submódulo inicial (p. ej., estator), normativa base (IEC/IEEE u otras), casos de uso (eficiencia nominal, disipación térmica, vibración).

2) Modelo de datos y taxonomía
yaml
Copy
Edit
Entidades:
  Requirement: {id, fuente, tipo, texto, criticidad, verificacion}
  DesignVariant: {id, modulo, version, params_json, autor, fecha}
  Parameter: {id, nombre, unidad, rango, objetivo}
  SimulationRun: {id, variant_id, tipo, setup, malla, solver, fecha}
  SimulationResult: {run_id, metrica, valor, unidad}
  TestPlan: {id, modulo, protocolo, norma_ref}
  TestRun: {id, plan_id, sample_id, fecha, resultado_json}
  FieldFailure: {id, modulo, modo_falla, severidad, mtbf_estimado, fecha}
  ComplianceReq: {id, norma, clausula, texto}
  ComplianceEvidence: {id, req_id, referencia, run_or_test_id, verdict}
  BOM: {id_bom, modulo, item_id, qty}
  SupplierMaterial: {material_id, proveedor, grado, propiedades}
Relaciones:
  Requirement <-> ComplianceReq <-> ComplianceEvidence
  DesignVariant -> Parameter(s)
  SimulationRun -> DesignVariant
  SimulationResult -> SimulationRun
  TestRun -> TestPlan
  FieldFailure -> DesignVariant (familia)/Modo de falla
3) Integraciones y pipelines
CAD/PLM (parámetros), CAE (FEA/CFD), LIMS/QA (banco de pruebas), Servicio/Campo (FRACAS).

4) Agentes por dimensión (ejemplos)
Legado (puntaje multiobjetivo), Contexto (normativa y mercado), Tecnología (orquestación de runs), Aprendizaje (biblioteca de parámetros), Proyectos (gates), Comunidad (alineación diseño-compras-manufactura-calidad-servicio).

5) Flujo operativo (resumen)
Vincular requisitos↔cláusulas → parametrizar módulo → diseño generativo/DOE + simulación → evaluar y seleccionar → pruebas y evidencia → aprender de campo y realimentar.

6) KPIs
Eficiencia y densidad por variante, % de requisitos con evidencia aprobada, MTBF estimado, tiempo a gate, costo BOM vs. desempeño.

7) Consultas típicas (SQL)
sql
Copy
Edit
-- Matriz requisito -> evidencia
SELECT r.id AS req, r.clausula, e.referencia, e.verdict
FROM ComplianceReq r
LEFT JOIN ComplianceEvidence e ON e.req_id = r.id
ORDER BY r.id;

-- Variantes top por función objetivo (simplificado)
SELECT v.id, 
       0.4*res.eficiencia + 0.3*res.densidad - 0.2*res.lcoe + 0.1*res.mtbf_score AS score
FROM DesignVariant v
JOIN (
  SELECT run.variant_id,
         MAX(CASE WHEN metrica='eficiencia' THEN valor END) AS eficiencia,
         MAX(CASE WHEN metrica='densidad' THEN valor END) AS densidad,
         MIN(CASE WHEN metrica='lcoe' THEN valor END) AS lcoe,
         MAX(CASE WHEN metrica='mtbf_score' THEN valor END) AS mtbf_score
  FROM SimulationResult
  GROUP BY run.variant_id
) res ON res.variant_id = v.id
ORDER BY score DESC
LIMIT 5;
8) Gobierno y riesgos
Control de versiones de parámetros/geometrías/runs; cadena de evidencia para auditoría; validación cruzada simulación-prueba-campo.

9) Cronograma (10–12 semanas)
S1–2: requisitos y matriz; S3–4: DOE y pipeline de simulación; S5–6: pruebas y calibración; S7–8: iteración 2 y shortlist; S9–10: documentación; S11–12: lecciones y paquete de escalamiento.

Diagrama global (Mermaid)
mermaid
Copy
Edit
flowchart LR
  %% Lanes conceptuales
  subgraph HA["Arquitectura de Horizontes"]
    direction TB

    subgraph Pres["Proyecto Presupuestos"]
      P1["Fuentes internas: BOM, POs, catálogos"]
      P2["Fuentes externas: FX, índices, tarifas"]
      P3["KB Finanzas (grafo)"]
      P4["Agentes: Contexto, Tecnología, Aprendizaje, Proyectos, Legado"]
      P5["Versiones V0/V1/V2 + workflow"]
      P6["KPIs: tiempo de ciclo, WAPE, trazabilidad"]
    end

    subgraph Gen["Proyecto Generadores"]
      G1["Requisitos y normas"]
      G2["Parámetros CAD/PLM"]
      G3["Simulaciones CAE y resultados"]
      G4["Pruebas de banco y campo"]
      G5["KB Ingeniería (grafo)"]
      G6["Agentes: Legado, Contexto, Tecnología, Aprendizaje, Proyectos"]
      G7["KPIs: eficiencia, cumplimiento, MTBF, tiempo a gate"]
    end

    ARoot["Agente raíz xignux (gobernanza, permisos, contribución)"]
  end

  %% Conexiones Presupuestos
  P1 --> P3
  P2 --> P3
  P3 --> P4
  P4 --> P5
  P5 --> P6
  P6 --> P3

  %% Conexiones Generadores
  G1 --> G5
  G2 --> G5
  G3 --> G5
  G4 --> G5
  G5 --> G6
  G6 --> G7
  G7 --> G5

  %% Gobierno común
  ARoot --- P3
  ARoot --- G5
  ARoot --- P5
  ARoot --- G7

---

# V.01
# Las 6 dimensiones de HA (versión extendida y conectada)

**LEGADO**  
Es la brújula estratégica: define “qué significa ganar” y en qué horizonte de tiempo. En HA se formaliza como **función objetivo** (multi-criterio, con pesos y restricciones) para alinear decisiones humanas y agentes de IA en todos los niveles.  
**Preguntas clave:** ¿cuál es el estado deseado? ¿qué queremos lograr que trascienda? ¿qué outcomes medimos, y cómo lo medimos?, ¿qué trade-offs aceptamos?, ¿en qué plazos?  
**Entradas:** visión, estrategia, gobernanza, restricciones regulatorias y operativas.  
**Salidas/Artefactos:** función de Legado (la descripción del estado deseado, objetivos, pesos, umbrales).  
**Evita:** proyectos aislados sin norte o métricas contradictorias.

**COMUNIDAD**  
Mapa vivo de personas e instituciones (internas y externas), con sus relaciones, incentivos e influencia. No es solo un organigrama; es un **grafo** operativo para coordinar quién decide qué, con quién y cuándo.  
**Preguntas:** ¿a quién necesitas para lograr el legado? ¿a quién afecta/beneficia el legado?, ¿quién valida?, ¿qué redes institucionales internas y externas activar?  
**Entradas:** estructuras formales, stakeholders, proveedores, reguladores.  
**Salidas:** análisis de actores y comprensión de interconexiones.  
**Evita:** decisiones sin adopción o con fricción política.

**APRENDIZAJE**  
Capacidades, conocimientos y lecciones que permiten lograr el Legado. Incluye activos explícitos (manuales, wikis, datasets) y tácitos (skills del equipo), y habilita que los resultados de proyectos **retroalimenten** métodos, estándares y formación continua.  
**Preguntas:** ¿qué necesitamos saber/entrenar para lograr o cumplir las métricas del Legado?  
**Entradas:** resultados de pilotos, auditorías, prácticas expertas.  
**Salidas:** bases de conocimiento, planes de upskilling/reskilling, literatura especializada.  
**Evita:** documentar procesos de aprendizaje y crear bases de conocimientos conectados a sistemas de IA.

**TECNOLOGÍA**  
Infraestructura y herramientas (datos, integración, IA, simulación) como **sistema en la nube**: qué servicios y *tools* usar, cómo integrarlo, con qué protocolos y costos. También aloja las bases de datos, bases de conocimiento, sub-agentes (p. ej., optimización de stack) para orquestar recursos, versiones y rendimiento en red.  
**Preguntas:** ¿qué stack soporta el Legado?, ¿cómo garantizamos interoperabilidad y ética?  
**Entradas:** inventario de sistemas, APIs, investigación de nuevas tecnologías, políticas de TI.  
**Salidas:** blueprint técnico, plan de desarrollo, adopción y gobierno técnico.  
**Evita:** “pilas de herramientas” inconexas o deuda técnica.

**CONTEXTO**  
Condiciones externas (mercado, regulación, macroeconomía, ambiente, geopolítica) que habilitan o restringen. Esta dimensión es un **escaneo dinámico** con personas que definen variables a monitorear y agentes que sugieren señales (datos, normativas relevantes, mercado, análisis de clima económico, político y social (si es relevante), canales informativos para seguimiento contextual) e inyectan alertas y escenarios en las decisiones.  
**Preguntas:** ¿qué cambia en el contexto que pueda influir en nuestro legado?, ¿qué deberíamos de saber del entorno que pueda beneficiarnos o afectarnos? ¿Qué datos contextuales son relevantes para nosotros?  
**Entradas:** indicadores con series de tiempo, leyes y normas, eventos, cambios en el mercado, etc..  
**Salidas:** alertas, escenarios, restricciones vigentes por escala.  
**Evita:** miopía estratégica.

**PROYECTOS**  
La **acción**: iniciativas, tareas, recursos, riesgos y entregables que materializan el Legado. Aquí se prioriza el portafolio, se ejecuta, se mide y se cierra el ciclo para actualizar las demás dimensiones.  
**Preguntas:** ¿cómo lo vamos a hacer? ¿qué hacemos primero?, ¿con qué recursos contamos y qué riesgos mitigar?, ¿cómo medimos el impacto?  
**Entradas:** función de Legado, capacidades de ejecución, contexto, tecnología disponible.  
**Salidas:** project management, pilotos, indicadores, escalamiento, resultados trazables.  
**Evita:** actividad sin impacto, sin aprendizaje o desalineada con el legado.

> Las dimensiones **operan en paralelo** (complejidad simultánea) y **evolucionan en el tiempo**; comparten una **taxonomía fija** y una **ontología generativa** que permiten crear sub-agentes cuando surgen nuevas necesidades. Un **agente raíz** coordina a los agentes-dimensión, y estos a su vez genera la ontología generativa.

---

## Puente directo: cómo cada dimensión entra a los **8 pasos**

 **LEGADO →** lidera el **Paso 2** (función objetivo) y regula **Paso 5** (criterios de éxito), **Paso 7** (ajuste de pesos) y **Paso 8** (norte del agente raíz).  
- **COMUNIDAD →** clave en **Paso 0** (alcance, mapa de interesados) y **Paso 3** (grafo multiusuario), habilita adopción en **Paso 6**.  
- **APRENDIZAJE →** nutre **Paso 3** (base de conocimiento), captura lecciones en **Paso 7**, y acelera réplica en **Paso 6**.  
- **TECNOLOGÍA →** diseña el stack en **Paso 3**, opera agentes en **Paso 4** y viabiliza **Paso 5**; asegura interoperabilidad/seguridad en **Paso 8**.  
- **CONTEXTO →** alimenta **Paso 1** (diagnóstico) y mantiene escenarios en **Pasos 4–5**.  
- **PROYECTOS →** protagoniza **Paso 5** (pilotos) y **Paso 6** (escala), cerrando el bucle con **Paso 7**.-

'''
---
config:
  layout: elk
---
flowchart TB
    LEGADO["LEGADO<br>Driver Estratégico"] == LIDERA ===> P2["Paso 2<br>Función Objetivo"]
    LEGADO -. regula .-> P5["Paso 5<br>Criterios de Éxito<br>&amp; Pilotos"] & P7["Paso 7<br>Ajuste de Pesos<br>&amp; Lecciones"] & P8["Paso 8<br>Norte del Agente Raíz<br>&amp; Interoperabilidad"]
    COMUNIDAD["COMUNIDAD<br>Habilitador Social"] == CLAVE EN ==> P0["Paso 0<br>Alcance &amp; Mapa de Interesados"] & P3["Paso 3<br>Grafo Multiusuario<br>&amp; Base de Conocimiento"]
    COMUNIDAD -- habilita adopción --> P6["Paso 6<br>Adopción &amp; Escala"]
    APRENDIZAJE["APRENDIZAJE<br>Motor Evolutivo"] -- nutre --> P3
    APRENDIZAJE <-- captura lecciones --> P7
    APRENDIZAJE -- acelera réplica --> P6
    TECNOLOGIA["TECNOLOGÍA<br>Infraestructura"] == DISEÑA STACK ==> P3
    TECNOLOGIA == OPERA ==> P4["Paso 4<br>Operación de Agentes"]
    TECNOLOGIA -- viabiliza --> P5
    TECNOLOGIA -- asegura interop/seg --> P8
    CONTEXTO["CONTEXTO<br>Sensibilidad Ambiental"] == ALIMENTA ==> P1["Paso 1<br>Diagnóstico"]
    CONTEXTO -- mantiene escenarios --> P4 & P5
    PROYECTOS["PROYECTOS<br>Ejecución"] == PROTAGONIZA ==> P5 & P6
    PROYECTOS <-- cierra bucle --> P7
    P0 -.-> P1
    P1 -.-> P2
    P2 -.-> P3
    P3 -.-> P4
    P4 -.-> P5
    P5 -.-> P6
    P6 -.-> P7
    P7 -.-> P8
    P8 -. retroalimentación .-> P0
     LEGADO:::component
     COMUNIDAD:::component
     APRENDIZAJE:::component
     TECNOLOGIA:::component
     CONTEXTO:::component
     PROYECTOS:::component
     P0:::step
     P1:::step
     P2:::step
     P2:::critical
     P3:::step
     P4:::step
     P5:::step
     P5:::critical
     P6:::step
     P7:::step
     P8:::step
     P8:::critical
'''

---
# Proceso HA 

## 0) Preparación del reto
**Propósito:** alinear la ambición con el alcance práctico y el tiempo disponible.  
**Entradas mínimas:** sponsor, objetivos preliminares, restricciones, ventanas de decisión.  
**Acciones clave:** 
- Encuadre de reto complejo (problema, impacto, riesgos, plazos).
- Primer mapa de actores relevantes (internos/externos) y de sistemas.
- Definición de criterios de éxito iniciales y ritmo de trabajo.
**Entregables:** contrato del reto, mapa de interesados, calendario, backlog inicial.  
**Métricas:** claridad de alcance, compromiso de roles, riesgos identificados.  
**Ejemplo – Presupuestos:** acordar si buscamos reducir el tiempo de ciclo o mejorar la precisión (o ambos), a qué nivel (BU/planta) y con qué corte temporal.  
**Ejemplo – Generadores:** definir familia de producto, restricciones normativas y de suministro, y ventanas de “design gates”.

---
## 1) Diagnóstico: Estado actual vs. Estado deseado
**Propósito:** entender el estado actual del sistema y el estado deseado en un periodo de tiempo específico.  
**Entradas:** entrevistas, procesos actuales, datos y documentos disponibles, entorno (mercado/regulación).  
**Acciones clave:**
- Mapa “as-is” (personas, procesos, datos, sistemas) vs. “to-be”.
- Gap-analysis de datos, capacidades, tecnología y gobierno.
- Riesgos y dependencias críticas; hipótesis de valor por brecha.
**Entregables:** documento de brechas priorizadas y riesgos, hipótesis para alcanzar el estado deseado.  
**Métricas:** % de procesos cubiertos, calidad de datos, severidad/probabilidad de riesgos.  
---
## 2) Definir el LEGADO como función del sistema
**Propósito:** convertir *el legado* en una **función objetivo** que gobierna decisiones y agentes.  
**Entradas:** outcomes deseados, restricciones, horizontes temporales.  
**Acciones clave:**
- Selección de métricas y trade-offs (con pesos/umbrales).
- Redacción de la función objetivo y sus restricciones.
- Alineación con compliance y tolerancia al riesgo.
**Entregables:** Legado, tablero de objetivos y trade-offs.  
**Métricas:** cobertura de outcomes, claridad de restricciones, aceptación ejecutiva (xignux).  
Por ejemplo: 
**Presupuestos:** minimizar tiempo de ciclo y desviación vs. real, maximizando cumplimiento y trazabilidad.  
**Generadores:** maximizar eficiencia y confiabilidad, minimizar LCOE/huella, cumpliendo normas.

---

## 3) Construir la BASE DE CONOCIMIENTO
**Propósito:** crear la base de conocimiento en la nube común para humanos y agentes.  
**Entradas:** fuentes humanas, sistemas (ERP, BI, CAD/PLM, IoT), documentos.  
**Acciones clave:**
- Inventario de fuentes y evaluación de calidad.
- **Taxonomía fija de información** (dimensiones como bases de datos).
**Entregables:** KB operacional (grafo), catálogo de documentos, datos, glosario (si es necesario), políticas de acceso.    
Por ejemplo": 
**Proyecto de Presupuestos:** unificar BOM/POs/históricos, catálogos de proveedores e índices externos.  
**Proyecto de Generadores:** relacionar requerimientos, simulaciones, resultados de prueba y fallas en campo.

---

## 4) Orquestar agentes por dimensión
**Propósito:** activar IA útil y controlada para acelerar análisis y decisiones.  
**Entradas:** función de Legado, base de conocimiento general y por dimensión.   
**Acciones clave:**
- Generar agentes por dimensión (Legado, Comunidad, Aprendizaje, Tecnología, Contexto, Proyectos) y auxiliares (.
- Protocolos de diálogo entre agentes y con humanos (quién propone, quién valida).
- Registro de contribuciones y versionado de decisiones.
**Entregables:** playbook de agentes (e.g. xignux Budget Adviser, xignux Transformer Designer), sistema de prompts/consultas, tablero de *next steps* para validación humana.  
**Métricas:** tasa de recomendaciones accionables, tiempo de respuesta, precisión explicable.
Por ejemplo:   
**Presupuestos:** agente de Contexto actualiza índices; agente de Proyectos propone cierres; agente de Aprendizaje sugiere estandarización.  
**Generadores:** agente de Normas vigila IEC/IEEE; agente de Diseño propone variantes; agente de Compras estima disponibilidad/costo.

---

## 5) Diseño y ejecución de pilotos
**Propósito:** Desplegar los agentes IA para su uso operativo en xignux.
**Entradas:** 
- Queries y feedback de usuarios piloto
- Ciclos de iteración de mejora del agente
- Datos históricos de procesos y decisiones empresariales
**Acciones clave:**
- **Comprobar hipótesis, alcance, KPIs, criterios de salida y plan de datos:** Definir métricas de éxito (precisión, tiempo de respuesta, adopción), criterios de escalamiento y protocolo de captura de datos de uso.
- **Integrar agentes de manera ética:** Configurar agentes apropiados para cada caso de uso, asegurar compliance con políticas de privacidad y seguridad.
- **Ejecutar sprints con gates y trazabilidad end-to-end:** Implementación iterativa con revisiones quincenales, documentación completa de queries-respuestas-outcomes, ajustes basados en queries-respuestas-outcomes (qué buscan los usuarios).
**Entregables:** 
- PoCs/pilotos funcionales con métricas de baseline vs. con agentes
- Informe de resultados de adopción y efectividad
- Análisis costo-beneficio por área implementada
- Roadmap de contextualización y entrfenamiento de agentes basado en aprendizajes
**Métricas:** 
- Impacto en KPIs operativos existentes
- Reducción en tiempo de ciclo de decisiones

---

## 6) Escalamiento fractal
**Propósito:** escalar de manera ordenada y trazable a otros a niveles (individuo → equipo → área → planta → empresa) y definir nuevos proyectos (así crece una HA).  
**Entradas:** nuevas oportunidades o necesidades que se conviertan en proyectos que abonen al legado.  
**Acciones clave:**
- Definir **unidad fractal mínima** y niveles (individuo → equipo → área → planta → empresa) e integrar nuevos proyectos.
- Plan de despliegue por fractales, con paquetes reutilizables (datos, bases de conocimiento, información generada, nuevos agentes (taxonómicos y ontológicos), plantillas de prompts).
- Gobierno compartido y acuerdos de interoperabilidad entre niveles.
**Entregables:** roadmap de escalamiento, kits de réplica, acuerdos de gobernanza.  
**Métricas:** tiempo/costo por réplica, consistencia de resultados, reutilización de activos.  
**Presupuestos:** extender a más BUs con la misma estructura HA.  
**Generadores:** replicar patrones de diseño a otras familias con ajustes controlados.

---

## 7) Medición y aprendizaje
**Propósito:** cerrar el ciclo y mejorar el sistema.  
**Entradas:** resultados operativos, feedback de usuarios, auditorías.  
**Acciones clave:**
- Medir desempeño vs. función de Legado y KPIs de pilotos/escala.
- Explicar variaciones; capturar lecciones; actualizar ontología y pesos/umbrales.
- Publicar patrones en la KB y actualizar el playbook de agentes.
**Entregables:** informe de impacto, biblioteca de patrones, backlog de mejoras.  
**Métricas:** mejora sostenida de KPIs, tasa de adopción, calidad de explicaciones, deuda técnica reducida.  
**Presupuestos:** ajustar supuestos de costo y calendarios; mejorar prompts/agentes.  
**Generadores:** calibrar modelos de simulación; actualizar restricciones; promover mejores prácticas.

---

## 8) Gobernanza y continuidad (“Agente xignux”)
**Propósito:** custodiar el sistema, asegurar ética/seguridad y continuidad operativa.  
**Entradas:** políticas corporativas, riesgos, auditorías, cambios de contexto.  
**Acciones clave:**
- Operar un **agente raíz** que coordina a todos los proyectos, los agentes dimensionales, sub-agentes, permisos y trazabilidad.
- Análisis de prueba de contribución, proceso histórico y auditoría.
- Vigilancia del entorno (contexto externo) y activación de escenarios.
**Entregables:** marco de gobernanza, bitácora de decisiones, reportes de cumplimiento y riesgo.  
**Métricas:** cumplimiento normativo, SLOs de datos/IA, tiempo de atención de incidentes, satisfacción de usuarios.  
**Presupuestos:** gobierno de versiones y firmas de aprobación.  
**Generadores:** liberación de diseños con evidencia de cumplimiento y cadena de decisiones.

---

# Diagrama de relación entre pasos (Mermaid)

```mermaid
flowchart LR
  A0["0 Preparacion del reto"]
  A1["1 Diagnostico"]
  A2["2 Legado como funcion"]
  A3["3 Base de conocimiento"]
  A4["4 Orquestar agentes"]
  A5["5 Pilotos"]
  A6["6 Escalamiento fractal"]
  A7["7 Medicion y aprendizaje"]
  A8["8 Gobernanza Agente xignux"]

  %% Camino principal
  A0 --> A1 --> A2 --> A3 --> A4 --> A5
  A5 --> A6
  A5 --> A7
  A6 --> A7

  %% Retroalimentaciones
  A7 --> A2
  A7 --> A3
  A7 --> A4
  A3 --> A1

  %% Supervision y soporte del agente raiz
  A8 --- A2
  A8 --- A3
  A8 --- A4
  A8 --- A5
  A8 --- A6
  A8 --- A7



---

Proyecto de Presupuestos
Objetivo: presupuesto driver-based, trazable y rápido, con escenarios “what-if” que integren datos internos (BOM/POs/histórico) y externos (índices, FX, tarifas).

1) Alcance mínimo viable (MVP)
1 BU, 2–3 centros de costo, 1 planta.

Tipos de gasto: materiales (ligados a BOM), compras indirectas clave, energía eléctrica.

Horizonte: 12 meses con revisiones mensuales.

Versionado: V0 (base), V1 (escenario conservador), V2 (optimista).

2) Modelo de datos y taxonomía (esqueleto)
yaml
Copy
Edit
Entidades:
  CostCenter: {id, nombre, planta, responsable}
  Item: {id, sku, descripcion, unidad, categoria, subcategoria}
  BOM: {id_bom, product_id, item_id, qty, merma, fecha}
  Supplier: {id, nombre, rating, lead_time, moneda}
  SupplierCatalog: {supplier_id, item_id, precio, validez_desde, validez_hasta}
  PurchaseOrder: {id_po, fecha, supplier_id, item_id, qty, precio_unit, moneda, incoterm}
  BudgetVersion: {id, nombre, fecha, estatus, creador}
  BudgetLine: {id, version_id, cost_center_id, item_id, qty, precio_unit_base, supuestos_id}
  Assumption: {id, tipo, descripcion, fuente, vigente_desde, vigente_hasta}
  FXRate: {fecha, par, tipo_cambio}
  CommodityIndex: {fecha, indice, valor}
  ElectricTariff: {fecha, zona, tarifa, cargo_fijo, cargo_variable}
  WorkflowApproval: {id, version_id, etapa, aprobador, fecha, decision}
  ContributionLog: {id, version_id, autor, cambio, timestamp}
Relaciones clave:
  BOM -> Item
  SupplierCatalog -> Supplier, Item
  PurchaseOrder -> Supplier, Item
  BudgetLine -> BudgetVersion, Item, CostCenter, Assumption
3) Integraciones y pipelines
ERP/Compras: POs históricos + catálogos (diario).
PLM/BOM: consumos estándar por producto (semanal).
Fuentes externas: FX, commodities (aluminio, cobre, acero), tarifas eléctricas (diario).
Calidad de datos: reglas de validación (campos nulos, monedas, outliers), bitácora de calidad.
4) Agentes por dimensión (ejemplos)
Contexto: ingiere FX/commodities/tarifas y propone actualización de supuestos.
Tecnología: normaliza POs, empata monedas y unidades, calcula costos estándar por BOM.
Aprendizaje: detecta patrones de error (p. ej., redondeos, cargas tardías), sugiere plantillas.
Proyectos: orquesta el workflow de versiones, cierres y aprobaciones.
Comunidad: identifica cuellos de aprobación, recomienda quién valida en cada gate.
Legado: evalúa escenarios vs. función objetivo (tiempo de ciclo, precisión, cumplimiento).
5) Flujo operativo (resumen)
Consolidar KB con POs, BOM y catálogos; aplicar reglas de calidad.
Calcular costos estándar por item (precio + logística + energía si aplica).
Armar V0 con drivers (volúmenes, eficiencia, scrap, energía).
Escenarios V1/V2 con shocks controlados (±FX, ±commodities, ±tarifas).
Workflow de validación con trazabilidad y “prueba de contribución”.
Publicar versión aprobada y bloquear celdas críticas.

6) KPIs y métricas
Tiempo de ciclo (inicio → aprobación) y nº de iteraciones por versión.
Precisión: WAPE/MAPE entre presupuesto y real por mes y por rubro.
Trazabilidad: % de líneas con fuente/documento; rework por versión.
Cobertura de supuestos: % de líneas vinculadas a FX/índices/tarifas vigentes.

7) Consultas típicas (pseudocódigo SQL)
sql
Copy
Edit
-- Costo estándar por item para una fecha
SELECT i.id, i.sku,
       sc.precio * fx.tipo_cambio AS precio_local,
       et.cargo_variable AS costo_energia
FROM SupplierCatalog sc
JOIN Item i ON i.id = sc.item_id
JOIN FXRate fx ON fx.par = sc.moneda || '->MXN' AND fx.fecha = :fecha
LEFT JOIN ElectricTariff et ON et.zona = :zona AND et.fecha = :fecha
WHERE sc.validez_desde <= :fecha AND sc.validez_hasta >= :fecha;

-- WAPE por centro de costo
SELECT cc.nombre,
       SUM(ABS(real - presupuesto)) / NULLIF(SUM(real),0) AS wape
FROM ( ... ) t
JOIN CostCenter cc ON cc.id = t.cost_center_id
GROUP BY cc.nombre;
8) Gobierno y riesgos
Permisos por versión y centro de costo; firmas digitales en gates.

Segregación de funciones (quien propone ≠ quien aprueba).

Riesgos: fuentes externas inestables, cambios de moneda, datos incompletos → mitigar con cachés diarios, reglas de imputación y bitácora de calidad.

9) Cronograma sugerido (8–10 semanas)
S1–2: inventario de datos, taxonomía y pipelines; primer cálculo de costos estándar.

S3–4: V0 operativa; agentes de Contexto/Tecnología activos; primer what-if.

S5–6: workflow completo y “prueba de contribución”; tablero de KPIs.

S7–8: V1/V2 en producción; lecciones y plan de escalamiento.

Proyecto de Generadores
Objetivo: trazar un “hilo digital” de requisitos → diseño → simulación → prueba → campo, con optimización multiobjetivo (eficiencia, costo, confiabilidad) y cumplimiento normativo.

1) Alcance mínimo viable (MVP)
Submódulo inicial: estator (puedes cambiarlo por rotor, carcasa, etc.).

Normativa base: compendio de requisitos aplicables (IEC/IEEE u otras, según producto/mercado).

Casos de uso: eficiencia nominal, disipación térmica, vibración.

2) Modelo de datos y taxonomía
yaml
Copy
Edit
Entidades:
  Requirement: {id, fuente, tipo, texto, criticidad, verificacion}
  DesignVariant: {id, modulo, version, params_json, autor, fecha}
  Parameter: {id, nombre, unidad, rango, objetivo}
  SimulationRun: {id, variant_id, tipo, setup, malla, solver, fecha}
  SimulationResult: {run_id, metrica, valor, unidad}
  TestPlan: {id, modulo, protocolo, norma_ref}
  TestRun: {id, plan_id, sample_id, fecha, resultado_json}
  FieldFailure: {id, modulo, modo_falla, severidad, mtbf_estimado, fecha}
  ComplianceReq: {id, norma, clausula, texto}
  ComplianceEvidence: {id, req_id, referencia, run_or_test_id, verdict}
  BOM: {id_bom, modulo, item_id, qty}
  SupplierMaterial: {material_id, proveedor, grado, propiedades}
Relaciones:
  Requirement <-> ComplianceReq <-> ComplianceEvidence
  DesignVariant -> Parameter(s)
  SimulationRun -> DesignVariant
  SimulationResult -> SimulationRun
  TestRun -> TestPlan
  FieldFailure -> DesignVariant (familia) / Modo de falla
3) Integraciones y pipelines
CAD/PLM: parámetros del modelo (slots, láminas, calibre, aislamiento, canal de enfriamiento).

CAE: FEA/CFD (plantillas de mallado y solvers).

LIMS/QA: resultados de banco de pruebas.

Servicio/campo: incidentes y tiempos entre fallas.

4) Agentes por dimensión (ejemplos)
Legado: calcula valor de la función multiobjetivo (η, densidad, MTBF, LCOE, CO₂e).

Contexto: vigila cambios normativos/tarifarios/mercado; dispara escenarios.

Tecnología: genera runs de simulación, administra colas y plantillas.

Aprendizaje: captura patrones de éxito/fracaso, actualiza bibliotecas de parámetros.

Proyectos: gobierna gates (conceptual → detallado → prototipo → liberación).

Comunidad: alinea diseño, compras, manufactura, calidad y servicio.

5) Flujo operativo (resumen)
- Vincular requisitos a cláusulas normativas y definir criterios de verificación.
- Parametrizar el módulo (ej., estator: ranuras, calibre, material, aislamiento, geometría de enfriamiento).
- Explorar variantes con diseño generativo/DOE y simular (térmico, electromagnético, mecánico).
- Evaluar resultados vs. función objetivo; seleccionar candidatos.
- Probar candidatos en banco (test plan) y cerrar verificación (evidencia de cumplimiento).
- Aprender de fallas en campo (FRACAS) y realimentar parámetros y límites.

6) KPIs y métricas
- Eficiencia y densidad de potencia por variante.
- Cumplimiento: % de requisitos con evidencia aprobada.
- Confiabilidad: MTBF estimado y modos de falla cerrados.
- Tiempo: de variante → simulación → prueba → liberación.
- Costo: coste BOM vs. performance (frontera Pareto).

7) Consultas típicas (pseudocódigo SQL)
sql
Copy
Edit
-- Matriz de trazabilidad requisito -> evidencia
SELECT r.id AS req, r.clausula, e.referencia, e.verdict
FROM ComplianceReq r
LEFT JOIN ComplianceEvidence e ON e.req_id = r.id
ORDER BY r.id;

-- Top variantes por función objetivo (ejemplo simplificado)
SELECT v.id, 
       0.4*res.eficiencia + 0.3*res.densidad - 0.2*res.lcoe + 0.1*res.mtbf_score AS score
FROM DesignVariant v
JOIN (
  SELECT run.variant_id,
         MAX(CASE WHEN metrica='eficiencia' THEN valor END) AS eficiencia,
         MAX(CASE WHEN metrica='densidad' THEN valor END) AS densidad,
         MIN(CASE WHEN metrica='lcoe' THEN valor END) AS lcoe,
         MAX(CASE WHEN metrica='mtbf_score' THEN valor END) AS mtbf_score
  FROM SimulationResult
  GROUP BY run.variant_id
) res ON res.variant_id = v.id
ORDER BY score DESC
LIMIT 5;
8) Gobierno y riesgos
- Control de versiones de parámetros, geometrías y runs.
- Cadena de evidencia para auditoría de cumplimiento.
- Riesgos: sesgo de simulación, falta de correlación prueba-campo → mitigar con validación cruzada (simulación vs. test) y muestreo escalonado.

9) Cronograma sugerido (10–12 semanas)
- S1–2: requisitos y matriz de cumplimiento; taxonomía de parámetros.
- S3–4: DOE básico y pipeline de simulación; primer conjunto de variantes.
- S5–6: pruebas de banco y calibración de modelos.
- S7–8: iteración 2 con restricciones ajustadas; shortlist para prototipo.
- S9–10: documentación de cumplimiento y plan de pre-serie.
- S11–12: lecciones y paquete de escalamiento a otras familias.
### Cómo conviven ambos proyectos dentro de HA
- Base de conocimiento compartida: ambos usan la misma taxonomía/ontología y trazabilidad; solo cambian los dominios (finanzas vs. ingeniería).
- Agentes reusables: Contexto (índices/FX/normas) y Proyectos (workflow) sirven a los dos; cambian los playbooks.
- Gobierno único: el Agente xignux gestiona permisos, prueba de contribución y auditorías para ambos.
- Diagrama global (Mermaid)
- Muestra cómo fluyen datos, agentes y decisiones en Presupuestos y Generadores dentro del marco HA.

flowchart LR
  %% Lanes conceptuales
  subgraph HA["Arquitectura de Horizontes"]
    direction TB

    subgraph Pres["Proyecto Presupuestos"]
      P1["Fuentes internas: BOM, POs, Catalogos"]
      P2["Fuentes externas: FX, indices, tarifas"]
      P3["KB Finanzas (grafo)"]
      P4["Agentes: Contexto, Tecnologia, Aprendizaje, Proyectos, Legado"]
      P5["Versiones V0/V1/V2 + Workflow"]
      P6["KPIs: tiempo ciclo, WAPE, trazabilidad"]
    end

    subgraph Gen["Proyecto Generadores"]
      G1["Requisitos y normas"]
      G2["Parametros CAD/PLM"]
      G3["Simulaciones CAE y Resultados"]
      G4["Pruebas de banco y Campo"]
      G5["KB Ingenieria (grafo)"]
      G6["Agentes: Legado, Contexto, Tecnologia, Aprendizaje, Proyectos"]
      G7["KPIs: eficiencia, cumplimiento, MTBF, tiempo a gate"]
    end

    ARoot["Agente raiz xignux (gobernanza, permisos, contribucion)"]
  end

  %% Conexiones Presupuestos
  P1 --> P3
  P2 --> P3
  P3 --> P4
  P4 --> P5
  P5 --> P6
  P6 --> P3

  %% Conexiones Generadores
  G1 --> G5
  G2 --> G5
  G3 --> G5
  G4 --> G5
  G5 --> G6
  G6 --> G7
  G7 --> G5

  %% Gobierno comun
  ARoot --- P3
  ARoot --- G5
  ARoot --- P5
  ARoot --- G7
  
## Connections
- [[HA PROJECTS]]
