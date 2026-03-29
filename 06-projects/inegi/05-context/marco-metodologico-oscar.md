# Marco Metodológico — Evaluación de Programas de Desarrollo Social con Criterios OCDE/CAD

> Documento de Oscar Díaz. Versión 1.0, Marzo 2026. Documento de trabajo.
> Capa tecnológica provista por Horizons Architecture Systems.
> Preparado para: INEGI.

---

## Resumen

Propone un proceso integrado de IA + Panel de Expertos para evaluar programas de desarrollo social usando los 6 criterios OECD/DAC. La capa de IA (HA) automatiza procesamiento de datos, generación de hallazgos y reportes. El panel de expertos valida, interpreta y formula recomendaciones.

## Arquitectura del proceso (5 fases)

| Fase | Nombre | IA (HA) | Panel de expertos |
|------|--------|---------|-------------------|
| F1 | Preparación y alcance | Ingesta, análisis documental, mapeo de actores | Preguntas evaluativas, criterios prioritarios, validación |
| F2 | Recolección y procesamiento | Extracción de datos INEGI, NLP, normalización | Instrumentos cualitativos, control de calidad |
| F3 | Análisis por criterio | Análisis multidimensional por criterio, hallazgos preliminares | Interpretación contextual, triangulación, debate |
| F4 | Síntesis y valoración | Borrador de informe, visualizaciones, análisis comparativo | Validación de conclusiones, recomendaciones |
| F5 | Informe y difusión | Informe final automatizado, fichas ejecutivas, tableros | Revisión editorial, presentación, retroalimentación |

## 6 agentes de IA especializados (uno por criterio OECD/DAC)

1. **Pertinencia:** Cruce necesidades vs objetivos, mapeo población, sensibilidad a desigualdades
2. **Coherencia:** Consistencia interna (lógica intervención) y externa (duplicidades/complementariedades)
3. **Eficacia:** Cumplimiento de metas MIR, tendencias temporales, factores
4. **Eficiencia:** Costo por beneficiario, benchmarking, anomalías en gasto
5. **Impacto:** Análisis estadístico censal, correlaciones, análisis de sentimiento
6. **Sostenibilidad:** Proyección financiera, riesgos fiscales, apropiación comunitaria

Orquestador central coordina los 6 agentes.

## Fuentes de datos

| Fuente | Datos | Acceso |
|--------|-------|--------|
| INEGI | Censos, encuestas, datos georreferenciados | APIs públicas, datos abiertos, DENUE |
| INEGI (ex-CONEVAL) | Pobreza multidimensional, acervo histórico evaluaciones | Portal INEGI, acervo CONEVAL |
| SHCP | Presupuesto, cuenta pública, transparencia | Portal Transparencia, PEF |
| Programas sociales | Reglas de operación, padrones, informes | DOF, portales, solicitudes |

## Panel de expertos (5-9 personas)

Protocolo Delphi modificado:
- Ronda 1 (asíncrona): Dictamen individual
- Ronda 2 (síncrona): Debate grupal
- Ronda 3 (asíncrona): Integración y validación

## Informes automatizados

| Entregable | Descripción | Generado por |
|------------|-------------|-------------|
| Informe completo | 40-80 páginas, 6 criterios | IA (borrador) + Expertos (validación) |
| Ficha ejecutiva | 4 páginas, semáforo | IA (automático) |
| Tablero interactivo | Dashboard con filtros | IA (automático) |
| Base de hallazgos | Repositorio estructurado | IA + Expertos |

## Plan de implementación

| Periodo | Fase | Entregables |
|---------|------|-------------|
| Abril 2026 | Diseño y configuración | Documento de diseño, ambiente IA, panel conformado |
| Mayo 2026 | Piloto: programa 1 | Informe de evaluación piloto, lecciones |
| Junio 2026 | Ajuste y escalamiento | Versión 2.0 de agentes, manual operativo |
| Julio-Agosto 2026 | Producción | Informes de 2-3 programas, tablero agregado, meta-análisis |

## Equipo requerido

| Rol | Provisto por |
|-----|-------------|
| Director/a de evaluación | INEGI |
| Arquitecto/a de IA | Horizons Architecture |
| Ingeniero/a de datos | Horizons Architecture |
| Panel de expertos (5-9) | INEGI + HA |
| Coordinador/a metodológico/a | INEGI |

## Gobernanza y riesgos de IA

| Riesgo | Mitigación |
|--------|-----------|
| Alucinación | Citas verificables, validación experta |
| Sesgo | Análisis de equidad, diversidad panel |
| Opacidad | Explicabilidad obligatoria |
| Sobre-automatización | IA genera borradores, valoraciones son del panel |

---

> **Nota HA-HA:** Este documento sobre-dimensiona el alcance vs lo que INEGI pide en la síntesis del servicio. Valioso como visión de largo plazo. No enviar a INEGI sin recortar. Ver project-state.md para decisión.
