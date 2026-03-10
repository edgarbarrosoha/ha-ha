---
dimension: projects
project: sic-q
type: deliverable
status: draft
date: 2026-03-06
parent: "[[06-projects-sic-q]]"
frente: caso-toño
---

# Resumen Ejecutivo: Bases de Datos del Sistema del Secretario de Planeacion

**Documento para:** Antonio Rangel, Secretario de Planeacion y Participacion Ciudadana
**Fecha:** Marzo 2026

---

## Concepto

El sistema se alimenta de datos que la Secretaria ya genera o que existen en fuentes federales accesibles. No se requiere crear informacion nueva. El trabajo del sistema es integrar, cruzar y sintetizar lo que hoy esta disperso.

---

## Ocho categorias de datos

| # | Categoria | Que incluye | Que habilita |
|---|-----------|-------------|--------------|
| 1 | **Participacion ciudadana** | Propuestas, quejas, peticiones, actas de foros, talleres SIC-Q (778 ideas, 248 actores) | Convertir voces individuales en patrones accionables por tema, zona y frecuencia |
| 2 | **Consejos tematicos** | Actas, acuerdos y seguimiento de los 23 consejos | Memoria institucional completa: que se acordo, que se cumplio, que sigue pendiente |
| 3 | **Plan Estatal de Desarrollo** | 65 retos, 6 ejes, indicadores, programas sectoriales, Plan QRO 2050 | Medir avance real contra compromisos. Alertar desviaciones |
| 4 | **Coordinacion intersecretarial** | Solicitudes de informacion, reportes trimestrales, acuerdos con fecha limite | Rastrear que debe cada secretaria y cuando. Detectar retrasos |
| 5 | **Indicadores estadisticos** | Series de tiempo de empleo, pobreza, seguridad, salud, educacion, agua, inversion | Monitoreo continuo. Alertas tempranas de tendencias negativas |
| 6 | **Talleres y ejercicios de planeacion** | Resultados de co-diseno, consultas sectoriales, prospectiva, mapas de actores | Conectar lo que dijeron los ciudadanos con lo que proponen los consejos y lo que establece el PED |
| 7 | **Contexto operativo diario** | Agenda, pendientes, compromisos por vencer, alertas de indicadores, prensa relevante | Empezar cada dia sabiendo que es urgente y que requiere atencion |
| 8 | **Vision QRO 2050** | Ejes estrategicos, indicadores de futuro, acuerdos del Consejo QRO 2050 | Anclar decisiones de corto plazo en la vision de largo plazo |

---

## Fuentes de datos

### Datos propios de la Secretaria

Todo lo que la Secretaria ya genera internamente:

- Registros de participacion ciudadana (propuestas, quejas, consultas, foros)
- Actas de los 23 consejos tematicos y estado de cumplimiento de acuerdos
- Plan Estatal de Desarrollo e indicadores de seguimiento
- Programas sectoriales vigentes y planes municipales de desarrollo
- Compromisos de gira y gabinete
- Solicitudes y reportes intersecretariales

### Bases de datos federales

| Fuente | Datos clave |
|--------|-------------|
| **INEGI** | Censo 2020, empleo (ENOE), unidades economicas (DENUE), ingresos (ENIGH), indicadores socioeconomicos |
| **INEGI (antes CONEVAL)** | Medicion de pobreza por municipio, rezago social por colonia, evaluaciones de programas sociales |
| **CONAPO** | Proyecciones de poblacion 2020-2070, indices de marginacion, migracion |
| **CONAGUA** | Niveles de presas, disponibilidad de agua por acuifero |
| **Secretariado Ejecutivo SNSP** | Incidencia delictiva por municipio |
| **SEP** | Matricula, abandono escolar, infraestructura educativa |
| **Secretaria de Salud** | Morbilidad, mortalidad, infraestructura hospitalaria |
| **SICT / IMT** | Aforos vehiculares, infraestructura carretera |

### Datos de otras secretarias estatales (via coordinacion)

El sistema no accede directamente a los sistemas de otras secretarias. Integra lo que cada una entrega a Planeacion como parte de sus obligaciones de reporte.

| Secretaria | Datos clave |
|------------|-------------|
| **Salud** | Abasto de medicamentos, cobertura de vacunacion, mortalidad materna e infantil |
| **Educacion** | Matricula, abandono escolar, resultados de evaluaciones, eficiencia terminal |
| **CEAA (Agua)** | Niveles de presas, calidad del agua, cobertura de drenaje, concesiones industriales |
| **Seguridad Ciudadana** | Incidencia delictiva por zona, percepcion de inseguridad, tiempos de respuesta |
| **Desarrollo Social** | Padron de beneficiarios (agregado), catalogo de programas (SIPROS) |
| **Finanzas** | Presupuesto ejercido por programa y secretaria |
| **Desarrollo Urbano** | Capas georreferenciadas, desarrollos aprobados, obras en ejecucion |
| **Movilidad** | Rutas de transporte, cobertura, aforos, datos Qrobus |
| **Desarrollo Sustentable** | Calidad del aire, manejo de residuos, zonas protegidas |

### Ecosistema estatal

- Portal de Datos Abiertos Queretaro
- El Consejo QRO / Plan QRO 2050
- Camaras empresariales (CANACINTRA, COPARMEX, CANACO)
- Instituciones academicas

---

## Cinco productos desde el dia uno

1. **Briefing diario** — Agenda, compromisos por vencer, solicitudes pendientes, alertas de indicadores
2. **Monitor de consejos tematicos** — Ficha de preparacion antes de cada sesion, registro automatico despues
3. **Sintesis de participacion ciudadana** — Demandas mas frecuentes, municipios mas activos, propuestas mas respaldadas
4. **Tablero de seguimiento del PED** — 65 retos con estado actual, alertas de desviacion
5. **Fichas de contexto para reuniones** — Quien asiste, que se decidio antes, datos relevantes, pendientes

---

*El documento tecnico completo detalla cada fuente de datos con ejemplos de consulta y casos de uso especificos.*
