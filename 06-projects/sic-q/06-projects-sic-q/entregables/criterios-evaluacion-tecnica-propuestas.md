---
dimension: projects
project: sic-q
type: deliverable
status: active
parent: "[[entregables]]"
tags:
  - evaluation-criteria
  - proposals
  - technical-assessment
  - sic-q
---

# Criterios de Evaluación Técnica del Proceso de Propuestas — SIC-Q

> Marco metodológico para la evaluación técnica de propuestas ciudadanas en el Sistema de Inteligencia Colectiva de Querétaro.

---

## 1. Introducción

El presente documento establece los criterios de evaluación técnica que regirán el proceso de análisis de propuestas ciudadanas dentro del SIC-Q. Estos criterios aseguran que cada propuesta reciba un tratamiento sistemático, objetivo y trazable, alineado con las mejores prácticas internacionales identificadas en los benchmarks del proyecto.

El objetivo fundamental es eliminar el "agujero negro" de las propuestas ciudadanas: garantizar que ninguna idea desaparezca sin respuesta y que el proceso de evaluación sea transparente, reproducible y justificable.

---

## 2. Principios Rectores

| Principio | Descripción |
|-----------|-------------|
| **Transparencia** | Todo criterio y decisión debe ser auditable y comunicable al ciudadano |
| **Objetividad** | Los criterios deben minimizar sesgos subjetivos mediante métricas cuantificables |
| **Trazabilidad** | Cada propuesta mantiene un historial completo desde su ingesta hasta su resolución |
| **Proporcionalidad** | El nivel de evaluación debe corresponder a la complejidad e impacto potencial de la propuesta |
| **Inclusividad** | Los criterios no deben discriminar por origen demográfico, geográfico o formato de entrada |

---

## 3. Etapas del Proceso de Evaluación

El proceso de evaluación técnica se estructura en cuatro etapas secuenciales:

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   ETAPA 1       │───>│   ETAPA 2       │───>│   ETAPA 3       │───>│   ETAPA 4       │
│   Admisibilidad │    │   Clasificación │    │   Evaluación    │    │   Dictamen      │
│   Formal        │    │   Temática      │    │   Técnica       │    │   Final         │
└─────────────────┘    └─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 4. Etapa 1: Criterios de Admisibilidad Formal

### 4.1 Criterios Automáticos (Procesamiento por IA)

| Criterio | Descripción | Umbral | Acción si no cumple |
|----------|-------------|--------|---------------------|
| **Longitud mínima** | La propuesta debe contener suficiente información | ≥ 50 caracteres | Solicitar ampliación |
| **Idioma detectado** | Español u otros idiomas oficiales reconocidos | Detección automática | Traducción asistida |
| **Contenido apropiado** | Ausencia de lenguaje ofensivo, spam o contenido ilícito | Score moderación ≥ 0.7 | Revisión manual |
| **Coherencia semántica** | El texto debe ser comprensible y coherente | Score coherencia ≥ 0.5 | Solicitar reformulación |
| **Duplicación** | Verificar si la propuesta ya existe en el sistema | Similitud < 0.85 | Fusionar o vincular |

### 4.2 Criterios de Identidad

| Criterio | Modo Explora | Modo Participa |
|----------|--------------|----------------|
| Registro requerido | No | Sí |
| Verificación de identidad | N/A | Email, teléfono o Llave MX |
| Geolocalización | Opcional | Código postal obligatorio |
| Trazabilidad | Anónima | Pseudonimizada |

---

## 5. Etapa 2: Clasificación Temática

### 5.1 Taxonomía de Clasificación

La IA clasifica cada propuesta según:

| Dimensión | Categorías |
|-----------|------------|
| **Sector temático** | Seguridad, Movilidad, Salud, Educación, Medio Ambiente, Economía, Cultura, Infraestructura, Gobierno Digital, Otros |
| **Ámbito geográfico** | Estatal, Municipal, Localidad específica |
| **Horizonte temporal** | Corto plazo (< 1 año), Mediano plazo (1-5 años), Largo plazo (> 5 años) |
| **Tipo de acción** | Nueva iniciativa, Mejora de servicio existente, Denuncia/queja, Solicitud de información |

### 5.2 Clustering Semántico

El Motor de Inteligencia Colectiva agrupa propuestas similares mediante:

- **Vectorización semántica**: Transformación de texto a embeddings numéricos
- **Agrupamiento automático**: Identificación de clústeres temáticos emergentes
- **Detección de consensos**: Identificación de temas con alta convergencia ciudadana
- **Análisis de tendencias**: Evolución temporal de los temas prioritarios

---

## 6. Etapa 3: Evaluación Técnica Multidimensional

### 6.1 Matriz de Evaluación (Framework Horizons Architecture)

Cada propuesta se evalúa en las seis dimensiones del framework HA:

| Dimensión | Criterios de Evaluación | Peso |
|-----------|------------------------|------|
| **Legado** | Alineación con visión de largo plazo, Plan Querétaro 2050, continuidad histórica | 15% |
| **Comunidad** | Impacto social, inclusividad, beneficiarios directos e indirectos | 20% |
| **Aprendizaje** | Generación de conocimiento, replicabilidad, potencial de escalamiento | 10% |
| **Tecnología** | Viabilidad técnica, madurez tecnológica, requerimientos de implementación | 20% |
| **Contexto** | Factibilidad legal, política y presupuestal, alineación con marco regulatorio | 20% |
| **Proyectos** | Definición de ruta de implementación, claridad de entregables | 15% |

### 6.2 Rúbrica de Puntuación por Dimensión

**Escala: 1-5 puntos**

| Puntuación | Descriptor | Criterio General |
|------------|------------|------------------|
| **5** | Excelente | Cumple todos los criterios, alto potencial de impacto |
| **4** | Bueno | Cumple la mayoría de criterios, potencial demostrado |
| **3** | Aceptable | Cumple criterios mínimos, requiere desarrollo adicional |
| **2** | Insuficiente | Cumple parcialmente, requiere reformulación significativa |
| **1** | No viable | No cumple criterios básicos, no procede |

### 6.3 Criterios Específicos por Dimensión

#### 6.3.1 Legado (15%)

| Criterio | Pregunta Orientadora | Evidencia Requerida |
|----------|---------------------|---------------------|
| Visión 2050 | ¿La propuesta contribuye a los objetivos del Plan Querétaro 2050? | Vinculación explícita con ejes estratégicos |
| Sostenibilidad | ¿El impacto perdura más allá de ciclos políticos? | Mecanismos de continuidad identificados |
| Precedente | ¿Existen experiencias previas similares? | Referencias nacionales/internacionales |

#### 6.3.2 Comunidad (20%)

| Criterio | Pregunta Orientadora | Evidencia Requerida |
|----------|---------------------|---------------------|
| Alcance poblacional | ¿Cuántos ciudadanos se benefician directamente? | Estimación cuantitativa |
| Equidad | ¿Atiende a poblaciones vulnerables o subrepresentadas? | Análisis de grupos beneficiarios |
| Apoyo ciudadano | ¿Cuántos "impulsos" (likes) ha recibido la propuesta? | Métricas de la plataforma |
| Co-creación | ¿Ha sido enriquecida por otros ciudadanos? | Comentarios y transformaciones |

#### 6.3.3 Aprendizaje (10%)

| Criterio | Pregunta Orientadora | Evidencia Requerida |
|----------|---------------------|---------------------|
| Innovación | ¿Introduce elementos novedosos? | Descripción del diferenciador |
| Transferibilidad | ¿Puede replicarse en otros contextos? | Condiciones de transferencia |
| Documentación | ¿La propuesta es suficientemente clara? | Nivel de detalle |

#### 6.3.4 Tecnología (20%)

| Criterio | Pregunta Orientadora | Evidencia Requerida |
|----------|---------------------|---------------------|
| Madurez tecnológica | ¿La tecnología requerida está disponible? | Nivel TRL (Technology Readiness Level) |
| Complejidad | ¿Cuál es el nivel de dificultad técnica? | Análisis de requerimientos |
| Integración | ¿Se integra con sistemas gubernamentales existentes? | Mapeo de dependencias |
| Escalabilidad | ¿Puede crecer según demanda? | Arquitectura propuesta |

#### 6.3.5 Contexto (20%)

| Criterio | Pregunta Orientadora | Evidencia Requerida |
|----------|---------------------|---------------------|
| Marco legal | ¿Es compatible con la legislación vigente? | Análisis normativo |
| Viabilidad política | ¿Existe voluntad política para implementarla? | Alineación con prioridades |
| Presupuesto | ¿Existen recursos asignados o asignables? | Estimación de inversión |
| Competencia institucional | ¿Qué dependencia es responsable? | Mapeo institucional |

#### 6.3.6 Proyectos (15%)

| Criterio | Pregunta Orientadora | Evidencia Requerida |
|----------|---------------------|---------------------|
| Claridad | ¿Los objetivos están bien definidos? | Descripción de entregables |
| Ruta crítica | ¿Existe un camino de implementación claro? | Fases o hitos identificados |
| Indicadores | ¿Cómo se medirá el éxito? | KPIs propuestos |
| Responsables | ¿Quién implementaría la propuesta? | Actores identificados |

---

## 7. Etapa 4: Dictamen Final

### 7.1 Categorías de Dictamen

| Dictamen | Descripción | Comunicación al Ciudadano |
|----------|-------------|---------------------------|
| **Aprobada para implementación** | Cumple todos los criterios, se canaliza a la dependencia responsable | Notificación con timeline estimado |
| **En revisión técnica** | Requiere análisis adicional por parte de expertos | Notificación de estatus con plazo |
| **Requiere más apoyo** | La propuesta es viable pero necesita mayor respaldo ciudadano | Invitación a promover la propuesta |
| **Fusionada** | Se integró con propuestas similares para mayor impacto | Notificación con enlace a propuesta consolidada |
| **No viable (con explicación)** | No cumple criterios mínimos | Justificación detallada y alternativas |

### 7.2 Flujo de Retroalimentación

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Dictamen   │────>│   Comité    │────>│  Ciudadano  │
│  IA/Sistema │     │   Revisor   │     │  Notificado │
└─────────────┘     └─────────────┘     └─────────────┘
      │                   │                    │
      │                   │                    │
      v                   v                    v
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│  Score      │     │  Validación │     │  Feedback   │
│  Automatico │     │  Humana     │     │  Bidirecc.  │
└─────────────┘     └─────────────┘     └─────────────┘
```

---

## 8. Métricas de Calidad del Proceso

### 8.1 KPIs del Proceso de Evaluación

| Indicador | Descripción | Meta |
|-----------|-------------|------|
| **Tiempo promedio de evaluación** | Desde ingesta hasta dictamen | ≤ 5 días hábiles |
| **Tasa de respuesta** | Propuestas con retroalimentación vs. total | 100% |
| **Precisión de clasificación** | Concordancia entre IA y revisión humana | ≥ 85% |
| **Satisfacción ciudadana** | NPS de ciudadanos sobre el proceso | ≥ 70 |
| **Tasa de implementación** | Propuestas aprobadas efectivamente implementadas | ≥ 30% |

### 8.2 Auditoría y Mejora Continua

| Actividad | Frecuencia | Responsable |
|-----------|------------|-------------|
| Revisión de sesgos algorítmicos | Trimestral | Equipo técnico SIC-Q |
| Calibración de criterios | Semestral | Comité Técnico + Ciudadanos |
| Análisis de apelaciones | Mensual | Secretaría de Participación |
| Benchmarking internacional | Anual | Instituto del Futuro |

---

## 9. Gobernanza del Proceso

### 9.1 Actores y Responsabilidades

| Actor | Rol en la Evaluación |
|-------|---------------------|
| **Motor de IA** | Evaluación automática Etapas 1-2, asistencia en Etapa 3 |
| **Analistas SIC-Q** | Validación de clasificación, casos ambiguos |
| **Comité Técnico Temático** | Evaluación especializada según sector |
| **Secretaría de Participación Ciudadana** | Supervisión general, escalamiento |
| **Instituto del Futuro** | Propuestas estratégicas de largo plazo |
| **Consejos Ciudadanos** | Validación social, propuestas de alto impacto |

### 9.2 Escalamiento y Apelaciones

| Situación | Canal de Escalamiento |
|-----------|----------------------|
| Desacuerdo con dictamen | Apelación formal vía plataforma |
| Propuesta urgente | Fast-track con justificación |
| Propuesta transversal | Comité interinstitucional |
| Propuesta controvertida | Panel ciudadano deliberativo |

---

## 10. Integración con el Ciclo del Sistema

Este proceso de evaluación técnica se integra con las 12 fases del Citizen Journey del SIC-Q:

| Fase SIC-Q | Relación con Evaluación Técnica |
|------------|--------------------------------|
| Fase 5: Participación | Ingesta de propuestas |
| Fase 6: Almacenamiento | Registro en base de datos |
| Fase 7: Sense-Making | Clustering y análisis colectivo |
| Fase 8: Análisis HA | Aplicación de matriz multidimensional |
| Fase 9: Informes | Generación de dictámenes |
| Fase 10: Gobierno | Canalización a dependencias |
| Fase 11: Feedback | Comunicación de resultados |
| Fase 12: Ciclo Virtuoso | Iteración y mejora continua |

---

## 11. Referencias y Benchmarks

Los criterios aquí establecidos se informan de las siguientes prácticas internacionales:

| Plataforma | Práctica Adoptada |
|------------|-------------------|
| **Consult (UK)** | Proceso de dos pasos: modelado temático + asignación con supervisión humana |
| **CitizenLab (Bélgica)** | Módulo Sensemaking con análisis de sentimientos y agrupación de contenido |
| **DIPAS (Hamburgo)** | Vinculación de propuestas con geolocalización |
| **vTaiwan** | Detección de consensos mediante Pol.is |
| **e-Cidadania (Brasil)** | Etiquetado por IA de preguntas y respuestas |
| **Chatico (Bogotá)** | Integración de WhatsApp para accesibilidad |

---

## 12. Anexos

### Anexo A: Plantilla de Evaluación Técnica

```markdown
## Evaluación de Propuesta #[ID]

**Fecha:** [DD/MM/AAAA]
**Evaluador:** [Nombre/Sistema]

### Datos de la Propuesta
- Título:
- Ciudadano: [Pseudónimo]
- Fecha de ingesta:
- Sector temático:
- Ámbito geográfico:

### Puntuación Multidimensional
| Dimensión | Puntuación (1-5) | Justificación |
|-----------|------------------|---------------|
| Legado | | |
| Comunidad | | |
| Aprendizaje | | |
| Tecnología | | |
| Contexto | | |
| Proyectos | | |

**Puntuación Ponderada:** [X.XX / 5.00]

### Dictamen
- [ ] Aprobada para implementación
- [ ] En revisión técnica
- [ ] Requiere más apoyo
- [ ] Fusionada con #[ID]
- [ ] No viable

### Justificación del Dictamen
[Texto]

### Próximos Pasos
[Texto]
```

### Anexo B: Glosario

| Término | Definición |
|---------|------------|
| **Clustering semántico** | Agrupación automática de propuestas con significado similar |
| **Dictamen** | Resolución formal sobre el estado de una propuesta |
| **Embedding** | Representación numérica de texto para análisis por IA |
| **Human Handoff** | Escalamiento de caso complejo a revisión humana |
| **Impulso** | Voto de apoyo ciudadano a una propuesta (equivalente a "like") |
| **NPS** | Net Promoter Score, métrica de satisfacción |
| **Sense-making** | Proceso de dar sentido a grandes volúmenes de información |
| **TRL** | Technology Readiness Level, escala de madurez tecnológica |

---

*Documento elaborado como parte del desarrollo del Sistema de Inteligencia Colectiva de Querétaro (SIC-Q).*

*Última actualización: Diciembre 2025*
