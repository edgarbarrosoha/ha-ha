---
dimension: projects
project: sic-q
type: deliverable
status: draft
date: 2026-03-06
parent: "[[06-projects-sic-q]]"
frente: caso-gobernador
---

# Resumen Ejecutivo: Bases de Datos del Sistema del Gobernador

**Documento para:** Gobernador Mauricio Kuri / Equipo ejecutivo
**Fecha:** Marzo 2026

---

## Concepto

El sistema integra informacion que el gobierno ya genera. No se requiere crear datos nuevos. El valor esta en conectar lo que hoy esta disperso en diferentes secretarias y fuentes federales, para que llegue procesado y sintetizado al momento de decidir.

---

## Siete categorias de datos

| # | Categoria | Que incluye | Que habilita |
|---|-----------|-------------|--------------|
| 1 | **Vision y planeacion** | Plan QRO 2050, planes sectoriales, metas de gobierno, acuerdos de los 23 consejos tematicos | Contrastar cada decision contra la vision de largo plazo y los compromisos adquiridos |
| 2 | **Territorio e infraestructura** | 200+ capas georreferenciadas: uso de suelo, atlas de riesgos, infraestructura, desarrollos aprobados | Decidir inversion sabiendo exactamente que hay y que falta en cada punto del estado |
| 3 | **Poblacion y demografia** | Proyecciones demograficas, migracion, envejecimiento, distribucion por municipio | Anticipar demanda de servicios a 10, 20 y 30 anos |
| 4 | **Servicios publicos** | Indicadores operativos de salud, educacion, seguridad, agua, movilidad | Monitorear calidad de servicios y detectar deterioro antes de que escale |
| 5 | **Economia e inversion** | Inversion extranjera, nearshoring, empleo, oferta y demanda de talento, exportaciones | Responder con datos a inversionistas y medir impacto de la estrategia economica |
| 6 | **Voz ciudadana** | Propuestas procesadas, quejas por zona, resultados de consultas, senales de talleres y consejos | Saber que pide la gente, donde, y que se ha hecho al respecto |
| 7 | **Contexto diario** | Prensa estatal y nacional, agenda del dia, alertas de indicadores, coyuntura politica | Llegar informado a cada reunion y decision |

---

## Fuentes de datos

### Bases de datos federales

| Fuente | Datos clave |
|--------|-------------|
| **INEGI** | Censo 2020 (2.37M habitantes), empleo (ENOE), unidades economicas (DENUE), ingresos (ENIGH), marco geoestadistico, banco de indicadores |
| **INEGI (antes CONEVAL)** | Pobreza multidimensional por municipio, rezago social por colonia, evaluaciones de programas sociales |
| **CONAPO** | Proyecciones de poblacion 2020-2070, marginacion por localidad, migracion interna |
| **Secretaria de Economia / DataMexico** | Inversion extranjera por sector y pais, exportaciones por producto, flujo de remesas |
| **CONAGUA** | Niveles de presas, concesiones de agua, disponibilidad por acuifero |
| **Secretariado Ejecutivo SNSP** | Incidencia delictiva por municipio y tipo de delito |
| **SEP** | Matricula, abandono escolar, infraestructura escolar |
| **Secretaria de Salud** | Morbilidad, mortalidad, infraestructura hospitalaria |
| **SEMARNAT / SINAICA** | Calidad del aire, monitoreo ambiental |
| **SICT / IMT** | Aforos vehiculares, infraestructura carretera |

### Secretarias y dependencias estatales

| Secretaria | Datos clave |
|------------|-------------|
| **Planeacion y Participacion Ciudadana** | PED (65 retos, 6 ejes), 23 consejos tematicos, participacion ciudadana, indicadores de seguimiento |
| **Finanzas** | Presupuesto por programa y secretaria, infraestructura tecnologica, catalogo de tramites (470+ procedimientos) |
| **Salud** | Abasto de medicamentos, recetas surtidas/no surtidas, tiempos de espera, cobertura de vacunacion, salud mental, embarazo adolescente, personal medico por habitante |
| **Educacion** | Matricula, abandono escolar, evaluaciones (PLANEA/MEJOREDU), eficiencia terminal, becas, educacion especial |
| **Seguridad Ciudadana** | Incidencia delictiva por zona, delitos de alto impacto, percepcion de inseguridad, tiempos de respuesta, reportes C5, estado de fuerza policial |
| **Trabajo** | Empleo formal por sector (IMSS), programas de capacitacion, brechas de talento, empleo informal, salarios por sector |
| **Turismo** | Ocupacion hotelera, derrama economica, visitantes por destino, eventos programados |
| **CEAA (Agua)** | Niveles de presas, calidad del agua, red de distribucion, cobertura de drenaje, plantas de tratamiento, concesiones industriales |
| **Desarrollo Urbano** | 200+ capas georreferenciadas, atlas de riesgo, desarrollos habitacionales, obras en ejecucion |
| **Desarrollo Sustentable** | Calidad del aire, manejo de residuos, zonas naturales protegidas |
| **Desarrollo Social** | Padron de beneficiarios (agregado), apoyos economicos, catalogo de programas (SIPROS) |
| **Movilidad** | Rutas de transporte, cobertura, aforos vehiculares, datos Qrobus |

### Ecosistema estatal

- Portal de Datos Abiertos Queretaro
- El Consejo QRO / Plan QRO 2050
- 18 Planes Municipales de Desarrollo
- Programa Queretaro Digital 2022-2027
- Camaras empresariales (CANACINTRA, COPARMEX, CANACO)
- Instituciones academicas (egresados, investigacion, capacidad instalada)

---

## Cuatro productos desde el dia uno

1. **Briefing matutino** — Que paso ayer, que viene hoy, que indicadores requieren atencion, que salio en prensa
2. **Fichas ejecutivas** — Contexto automatico antes de cada reunion: participantes, antecedentes, datos, pendientes
3. **Preguntas directas** — "Como vamos en seguridad?" con datos actualizados, comparativas y tendencia
4. **Alertas** — Notificacion inmediata cuando un indicador cruza un umbral critico

---

## Relacion entre sistemas

El sistema del Secretario de Planeacion alimenta al del Gobernador. La informacion fluye procesada:

```
Ciudadanos → Sistema del Secretario → Sistema del Gobernador
             (procesa, clasifica,      (consume sintesis en
              cruza con PED y           briefings, fichas y
              consejos tematicos)       alertas ejecutivas)
```

El Gobernador recibe la sintesis. El Secretario de Planeacion es la fuente de verdad para participacion ciudadana y seguimiento del PED.

---

*El documento tecnico completo detalla cada fuente con tablas especificas por secretaria, ejemplos de consulta y casos de uso.*
