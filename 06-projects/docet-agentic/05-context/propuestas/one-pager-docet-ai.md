---
type: one-pager
created: 2026-02-01
modified: 2026-02-04
status: draft
client: Docet
version: v2.0
related: propuesta-etapa-2-v03.md, anexo-explicacion-escenarios.md
---

# DOCET-AI — Escenarios Comerciales

**Cliente:** Docet (Escuela K-9, ~1,000 estudiantes)
**Fecha:** Febrero 2026
**Contexto:** Etapa 1 (prototipo) en desarrollo → Decisión requerida para Etapa 2

> **Aviso:** Los montos son **rangos referenciales**. Los valores finales se calcularán en la fase de descubrimiento según requerimientos específicos y precios vigentes de modelos de IA.

---

## La visión: Escuela K9 AI-First

La producción se estructura en **tres fases** para escalar gradualmente:

| Fase | Usuarios | Cantidad | Alcance |
|------|----------|----------|---------|
| **2.1** | Directivos | ~15 | Sistema estratégico: agentes dimensionales, KPIs, tableros ejecutivos |
| **2.2** | Maestros/Admin | ~95 total | Planeación didáctica, seguimiento individual, flujos administrativos |
| **2.3** | Estudiantes | ~1,095 total | Tutores personalizados, asistentes de estudio, salvaguardas para menores |

**Esta propuesta se enfoca en Fase 2.1.** Las fases 2.2 y 2.3 se cotizan tras estabilizar 2.1.

---

## Tres caminos para llevar DOCET-AI a producción

| | Escenario 1 | Escenario 2 | Escenario 3 |
|---|---|---|---|
| **Nombre** | Cesión de IP | SaaS | Partnership |
| **En una frase** | "Compras la tecnología" | "Rentas el servicio" | "Venden la tecnología (juntos)" |
| **Analogía** | Construyes tu casa desde cero y te quedas con los planos | Rentas departamento amueblado con servicios incluidos | Franquicia: vendes bajo tu marca, HA mantiene el motor |

---

## Comparativa de inversión (Fase 2.1)

| Concepto | Esc. 1 (Cesión IP) | Esc. 2 (SaaS) | Esc. 3 (Partnership) |
|----------|-------------------|---------------|---------------------|
| **Inversión única** | $4.2–6M MXN | $2.1–3M MXN | $2.5–3.6M MXN |
| **Mensual (operación)** | $29K–32K | $29K–32K | $29K–32K |
| **Mensual (+ licencia/soporte)** | $74K–107K | $74K–102K | $67K–87K |
| **Total Año 1 (con soporte)** | $5.1–7.3M MXN | $3.0–4.2M MXN | $3.3–4.6M MXN |

*Montos + IVA. La operación incluye Azure + consumo de IA (~$29K-32K/mes para 15 usuarios).*

---

## Costos de operación por fase (referencial)

| Fase | Usuarios | Costo mensual (nube + IA) |
|------|----------|---------------------------|
| 2.1 Directivos | 15 | $28,700 – $31,775 MXN |
| 2.2 Maestros/Admin | 95 | $43,050 – $49,200 MXN |
| 2.3 Estudiantes | 1,095 | $174,250 – $198,850 MXN |

*Se recomienda facturación directa a Microsoft Azure para transparencia total.*

---

## ¿Qué obtiene Docet en cada escenario?

### Escenario 1 — Cesión de IP
- Propiedad total del código, arquitectura y documentación
- Libertad absoluta para vender a otros colegios sin restricciones
- Docet es responsable de mantener y operar el sistema
- Incluye **prima por cesión de IP** ($900K–1.1M MXN) porque HA pierde el derecho de reutilizar el código

### Escenario 2 — SaaS (Recomendado para uso interno)
- Sistema funcionando sin preocuparse por infraestructura
- HA opera, mantiene y actualiza continuamente
- Soporte incluido con SLAs garantizados (S1: 1-4h, S2: 4-12h)
- No puede comercializar a terceros
- **Menor riesgo, costos predecibles**

### Escenario 3 — Partnership (Recomendado para comercializar)
- Derechos comerciales (marca blanca) para vender como "DOCET AI"
- HA mantiene la tecnología, Docet vende
- **Revenue share:** 75% Docet / 25% HA
- Exclusividad en K-12 México (mínimo 2 colegios en 24 meses para mantenerla)
- **Potencial de convertir costo en centro de utilidades**

---

## Análisis por criterio

| Criterio | Esc. 1 | Esc. 2 | Esc. 3 |
|----------|--------|--------|--------|
| Inversión inicial | Alta | Media | Media-Alta |
| Costo total Año 1 | Alto | Bajo-Medio | Medio |
| Control sobre tecnología | Total | Bajo | Medio |
| Riesgo operativo | Alto (Docet) | Bajo (HA) | Bajo (HA) |
| Puede comercializar | Sí (libre) | No | Sí (revenue share) |
| Dependencia de HA | Baja (post-entrega) | Alta | Media |
| Actualizaciones incluidas | No | Sí | Sí |
| Escalabilidad a 2.2/2.3 | Equipo interno | Incluida | Incluida |

---

## Ejemplo: Si Docet vende a otros colegios (Esc. 3)

Docet vende a "Colegio Monterrey":
- Fee de implementación: $400,000 MXN
- Mensualidad: $55,000 MXN/mes

| Concepto | Docet recibe | HA recibe |
|----------|--------------|-----------|
| Implementación | $280K–320K | $80K–120K |
| Mensualidad | $41,250 (75%) | $13,750 (25%) |

**Si Docet vende a 5 colegios en 2 años:**
- Ingresos por implementación: ~$1.5M MXN
- Ingresos mensuales recurrentes: ~$206K MXN/mes

---

## Recomendación de HA

| Si la prioridad es... | Recomendamos... |
|-----------------------|-----------------|
| **Operar el sistema para Docet** | **Escenario 2 (SaaS)** — Menor riesgo, costos predecibles, sistema siempre actualizado |
| **Construir negocio de tecnología educativa** | **Escenario 3 (Partnership)** — Potencial de ingresos vendiendo a otros colegios |
| **Control total e independencia** | **Escenario 1 (Cesión IP)** — Solo si hay equipo técnico o voluntad de construirlo |

---

## ¿Por qué los rangos de precios?

Los rangos dependen de factores que se definen en el descubrimiento:

| Factor | Impacto en costo |
|--------|------------------|
| Calidad y dispersión de datos | Datos limpios vs. requieren normalización |
| Sistemas actuales | APIs disponibles vs. sistemas legacy |
| Complejidad de integraciones | Pocas fuentes vs. múltiples sistemas |
| Requerimientos de personalización | Estándar vs. altamente personalizado |

**Proceso:** Propuesta (rangos amplios) → Descubrimiento → Cotización cerrada (±15%)

---

## Decisión requerida

1. **Seleccionar modelo comercial** preferido (o híbrido)
2. **Asignar sponsor ejecutivo** y product owner
3. **Agendar sesión** de descubrimiento (KPIs, fuentes de datos, roles)

**Vigencia:** 30 días naturales

---

## Contacto

**Horizons Architecture Systems**
Edgar Barroso
edgar@horizonsarchitecture.ai

---

*Ver detalle completo en `propuesta-etapa-2-v03.md` y `anexo-explicacion-escenarios.md`*
