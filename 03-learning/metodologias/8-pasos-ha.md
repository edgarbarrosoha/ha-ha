# Los 8 Pasos de HA

## Visión General

El proceso HA tiene 8 pasos que conectan las [[ha-eb/06-projects/ha/00-ha-root/03-learning/metodologias/6-dimensiones]] con la ejecución práctica.

```
┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐
│ P0  │──▶│ P1  │──▶│ P2  │──▶│ P3  │
│Prep │   │Diag │   │Legad│   │ KB  │
└─────┘   └─────┘   └─────┘   └─────┘
                                  │
┌─────────────────────────────────┘
│
▼
┌─────┐   ┌─────┐   ┌─────┐   ┌─────┐
│ P4  │──▶│ P5  │──▶│ P6  │──▶│ P7  │
│Agent│   │Pilot│   │Escal│   │Medir│
└─────┘   └─────┘   └─────┘   └─────┘
                                  │
              ┌───────────────────┘
              ▼
          ┌─────┐
          │ P8  │ ◀── Gobernanza continua
          │Gober│
          └─────┘
```

---

## Paso 0: Preparación del Reto

**Propósito:** Alinear la ambición con el alcance práctico y el tiempo disponible.

**Acciones clave:**
- Encuadre de reto (problema, impacto, riesgos, plazos)
- Primer mapa de actores relevantes
- Definición de criterios de éxito iniciales

**Entregables:** Contrato del reto, mapa de interesados, calendario, backlog inicial

**Dimensiones:** [[02-community]] lidera el mapa de actores

---

## Paso 1: Diagnóstico

**Propósito:** Entender el estado actual vs. estado deseado.

**Acciones clave:**
- Mapa "as-is" vs. "to-be" (personas, procesos, datos, sistemas)
- Gap-analysis de datos, capacidades, tecnología
- Riesgos y dependencias críticas

**Entregables:** Documento de brechas priorizadas, hipótesis de valor

**Dimensiones:** [[05-context]] alimenta el diagnóstico

---

## Paso 2: Definir el LEGADO como Función

**Propósito:** Convertir el legado en función objetivo que gobierna decisiones.

**Acciones clave:**
- Selección de métricas y trade-offs (con pesos/umbrales)
- Redacción de la función objetivo
- Alineación con compliance y tolerancia al riesgo

**Entregables:** Función de Legado, tablero de objetivos

**Dimensiones:** [[01-legacy]] lidera este paso

---

## Paso 3: Construir Base de Conocimiento

**Propósito:** Crear la base común para humanos y agentes.

**Acciones clave:**
- Inventario de fuentes y evaluación de calidad
- Taxonomía fija + ontología generativa
- Modelado en grafo y publicación en red multiusuario

**Entregables:** KB operacional, catálogo de datos, glosario

**Dimensiones:** [[03-learning]] nutre la KB, [[04-technology]] la implementa

---

## Paso 4: Orquestar Agentes por Dimensión

**Propósito:** Activar IA útil y controlada para acelerar análisis.

**Acciones clave:**
- Definir agentes por dimensión y auxiliares
- Protocolos de diálogo entre agentes y humanos
- Registro de contribuciones y versionado

**Entregables:** Playbook de agentes, sistema de prompts, tablero de next steps

**Dimensiones:** [[04-technology]] opera los agentes

---

## Paso 5: Diseño y Ejecución de Pilotos

**Propósito:** Desplegar agentes y demostrar valor sin romper lo existente.

**Acciones clave:**
- Definir hipótesis, alcance, KPIs, criterios de salida
- Integrar LLMs con guardrails (grounding, privacidad, revisión humana)
- Ejecutar sprints con gates y trazabilidad

**Entregables:** PoCs/pilotos con métricas, análisis costo-beneficio

**Dimensiones:** [[06-projects]] protagoniza los pilotos

---

## Paso 6: Escalamiento Fractal

**Propósito:** Replicar lo que funciona sin perder orden ni trazabilidad.

**Acciones clave:**
- Definir unidad fractal mínima y niveles
- Despliegue con paquetes reutilizables
- Gobierno compartido entre niveles

**Entregables:** Roadmap de escalamiento, kits de réplica

**Dimensiones:** [[06-projects]] + [[02-community]] habilitan adopción

---

## Paso 7: Medición y Aprendizaje

**Propósito:** Cerrar el ciclo y mejorar el sistema.

**Acciones clave:**
- Medir desempeño vs. función de Legado
- Explicar variaciones; capturar lecciones
- Publicar patrones en la KB

**Entregables:** Informe de impacto, biblioteca de patrones, backlog de mejoras

**Dimensiones:** [[03-learning]] captura lecciones, retroalimenta [[01-legacy]]

---

## Paso 8: Gobernanza y Continuidad

**Propósito:** Custodiar el sistema, asegurar ética/seguridad y continuidad.

**Acciones clave:**
- Operar agente raíz que coordina todo
- Gestión de versiones y auditoría
- Vigilancia del entorno y activación de escenarios

**Entregables:** Marco de gobernanza, bitácora de decisiones, reportes

**Dimensiones:** El agente raíz coordina las 6 dimensiones

---

## Matriz Dimensiones × Pasos

| Paso | Legado | Comunidad | Aprendizaje | Tecnología | Contexto | Proyectos |
|------|--------|-----------|-------------|------------|----------|-----------|
| P0 | - | ★ | - | - | - | - |
| P1 | - | - | - | - | ★ | - |
| P2 | ★ | - | - | - | - | - |
| P3 | - | ○ | ★ | ★ | - | - |
| P4 | - | - | - | ★ | ○ | - |
| P5 | ○ | - | - | ○ | ○ | ★ |
| P6 | - | ○ | ○ | - | - | ★ |
| P7 | ○ | - | ★ | - | - | ○ |
| P8 | ○ | - | - | ○ | - | - |

★ = Lidera | ○ = Contribuye

---

## Conexiones

- [[ha-eb/06-projects/ha/00-ha-root/03-learning/metodologias/6-dimensiones]] — Base conceptual
- [[arquitectura-fractal]] — Cómo escala
- [[06-projects]] — Donde se ejecutan los pasos

---

*Proceso operativo de HA*
