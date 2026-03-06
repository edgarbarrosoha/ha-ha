# Skill: legacy-maker

**Command:** `\legacy {project}`, `\legacy review`

**Purpose:** Crear o actualizar el legado (dimensión 01) de cualquier proyecto. El legado es la pregunta más importante de un proyecto: para qué es esto, y seguirá importando cuando terminemos?

---

## When to Use

- Cuando se crea un proyecto nuevo (`\ha-new` debería llamar a `\legacy` como primer paso)
- Cuando un proyecto cambia de dirección y el legado original ya no refleja la realidad
- Cuando Edgar dice `\legacy {project}` explícitamente
- `\legacy review` para auditar legados de todos los proyectos activos

---

## Protocol (5 Steps)

### Step 1: LOAD

Leer todo lo disponible del proyecto:
- `project-state.md`
- `01-legacy/` (si existe — para actualizar, no crear de cero)
- Dashboard entry del proyecto
- Cualquier archivo raíz del proyecto (root, readme, overview)
- `context.md` — threads activos relacionados

### Step 2: EXTRACT

Identificar las señales de legado en lo que existe. Buscar:
- Para qué se creó este proyecto (propósito original)
- Para quién es (quién se beneficia, quién lo paga, quién lo hereda)
- Qué cambia si funciona (impacto a 5, 10, 30 años)
- Qué no se negocia (principios que no se sacrifican por conveniencia)
- Qué evidencia existe de que el propósito es real (entrevistas, datos, validaciones)

Si la información no es suficiente, preguntar a Edgar directamente. No inventar.

### Step 3: DRAFT

Generar el archivo de legado siguiendo la estructura:

```markdown
---
dimension: legacy
project: {project-code}
status: {active|waiting|proposal|closing|paused}
horizon: {N} años
parent: "[[ha-ha]]"
---

# Legacy ({Nombre del Proyecto})

## Purpose
[1-2 párrafos. Para qué es este proyecto. No lo que hace — para qué existe.]

## La visión
[Qué se ve cuando esto funciona. Concreto, sin grandilocuencia.]

## Horizonte de tiempo
[Cuántos años. Qué se logra en cada tramo.]

## No negociables
[Principios que no se sacrifican. Bullets.]

## Evidencias base
[Qué datos, entrevistas, validaciones sustentan el propósito.]

## Links
[Referencias a archivos del proyecto.]

## Connections
- [[ha-ha]]
```

### Step 4: REVIEW

Presentar el draft a Edgar. Esperar feedback. Iterar.

Criterios de calidad:
- **Honesto.** Si el propósito no está claro, decirlo. No fabricar un legado que no existe.
- **Sin grandilocuencia.** Que el rigor hable. Nada de "revolucionar" ni "transformar el mundo".
- **Concreto.** Si no puedes explicar el legado en 3 oraciones a alguien fuera del proyecto, no está listo.
- **Vivo.** El legado no es un documento archivado. Se actualiza cuando la realidad cambia.

### Step 5: SAVE

Guardar en `{project}/01-legacy/01-legacy-{project-code}.md`.
Si la carpeta `01-legacy/` no existe, crearla.
Actualizar `project-state.md` si el legado implica cambios de dirección.

---

## Sub-commands

| Command | Action |
|---------|--------|
| `\legacy sic-q` | Crear o actualizar legado de SIC-Q |
| `\legacy beyond` | Crear o actualizar legado de Tec Beyond |
| `\legacy {project}` | Cualquier proyecto del portfolio |
| `\legacy review` | Auditar todos los legados — cuáles existen, cuáles faltan, cuáles están desactualizados |

---

## Criterio para detectar legado desactualizado

Un legado necesita actualización cuando:
- El proyecto cambió de cliente o beneficiario
- Los no-negociables se han violado o ya no aplican
- El horizonte de tiempo se acortó o extendió significativamente
- El propósito original ya no describe lo que el proyecto realmente hace
- Han pasado >6 meses sin revisión

---

## Philosophy

> El legado es la primera dimensión porque gobierna a las otras cinco.
> Un proyecto sin legado es actividad sin dirección.
> Un legado honesto dice tanto lo que el proyecto es como lo que no es.
> Si el legado no se puede explicar en una conversación, no está listo.
