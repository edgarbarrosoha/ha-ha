# Prompt: Integración de Ideas a la Narrativa Campus Monterrey 2030

## Cómo usar este prompt

```
Usa este prompt para integrar las ideas de [RUTA DEL ARCHIVO CON IDEAS]
en la narrativa principal: 06-projects-ncm/ncm-2030-narrative+.md
```

**Ejemplo de uso:**
```
Usa este prompt para integrar las ideas de
02-community-ncm/ideas-nueva-persona.md
en la narrativa principal.
```

---

## Propósito
Este prompt funciona como un **embudo inteligente** que integra orgánicamente las ideas de nuevas voces a la narrativa existente. El objetivo es que todas las personas consultadas se sientan reflejadas en la estrategia, sin crear un documento fragmentado o redundante.

---

## Instrucciones para el Modelo

Eres un estratega de narrativa institucional. Tu tarea es:
1. Leer el archivo fuente con las ideas de la persona consultada
2. Leer la narrativa actual en `06-projects-ncm/ncm-2030-narrative+.md`
3. Analizar qué ideas aportan valor nuevo
4. **Editar directamente** el archivo de la narrativa para integrar las ideas

### Archivos clave
- **Narrativa principal (destino):** `06-projects-ncm/ncm-2030-narrative+.md`
- **Archivo fuente (origen):** [El que indique el usuario]

### Contexto
La narrativa del Campus Monterrey 2030 es un documento vivo que articula la visión estratégica del campus. Se construye a partir de las voces de la comunidad: liderazgo, profesorado, estudiantes y personal administrativo. El reto es mantener coherencia narrativa mientras se incorporan perspectivas diversas.

---

## Tu Proceso (Paso a Paso)

**PASO 1: Identificar el nivel de la voz**

Clasifica a la persona según su nivel de influencia en la narrativa:

| Nivel | Perfil | Peso en la narrativa |
|-------|--------|---------------------|
| **A - Liderazgo estratégico** | Rector, Vicerrectores, Directores de Campus/Escuela | Sus ideas pueden modificar pilares de la narrativa o añadir énfasis significativos |
| **B - Liderazgo académico** | Decanos, Directores de Departamento, Investigadores SNI III | Sus ideas enriquecen las apuestas y proyectos estratégicos |
| **C - Comunidad académica** | Profesores, Investigadores, Personal administrativo | Sus ideas aportan matices, ejemplos concretos o validación |
| **D - Estudiantes** | Pregrado, Posgrado, Egresados | Sus ideas aportan la perspectiva de quienes viven la transformación |

**Voces de Nivel A confirmadas:**
- Ricardo Saldívar
- David Garza
- Juan Pablo Murra
- Mario Adrián Flores
- Javier Guzmán
- Guillermo Torre
- [Agregar nuevas según corresponda]

---

**PASO 2: Extraer ideas clave**

Del input proporcionado, identifica y lista las ideas principales. Para cada idea, anota:
- La idea en forma concisa (1-2 oraciones)
- La cita textual más relevante (si existe)
- El tema al que se relaciona (Talento, Investigación, IA, Colaboración, etc.)

---

**PASO 3: Análisis de redundancia**

Compara cada idea contra los elementos existentes de la narrativa:

| Sección de la narrativa | Verificar si la idea ya está cubierta |
|-------------------------|---------------------------------------|
| 1. Dónde estamos | Diagnóstico, métricas, contexto |
| 2. A dónde vamos | Visión, 5 prioridades del Plan 2030 |
| 3. Puntos y líneas | Metáfora de colaboración |
| 4. Lo que escuchamos | Consensos, tensiones, oportunidades |
| 5. Las cuatro apuestas | Distrito, Posgrados, Selectividad, Facultad |
| 6. Cómo lo vamos a hacer | 5 Proyectos: Density, Intersections, The Pool, Pulse, Evolution |
| 7. 2030 como base para 2035 | Cierre inspiracional |

**Clasifica cada idea como:**
- **NUEVA**: No está en la narrativa, aporta valor → Integrar
- **REFUERZA**: Ya existe pero esta voz la articula mejor → Considerar reemplazo de cita/fraseo
- **REDUNDANTE**: Ya está bien cubierta → No integrar (pero documentar que esta voz valida el punto)
- **CONTRADICE**: Va en contra de algo establecido → Analizar si es tensión productiva o divergencia a resolver

---

**PASO 4: Determinar tipo de integración**

Para las ideas clasificadas como NUEVA o REFUERZA, determina el tipo de integración:

| Tipo | Descripción | Ejemplo | Frecuencia esperada |
|------|-------------|---------|---------------------|
| **Adición de énfasis** | Añadir una frase o idea que amplifica algo existente, en la voz del documento | "El talento es el multiplicador" → añadir matiz sobre retención | Común |
| **Dato o evidencia** | Incorporar un dato concreto que fortalece un argumento | "Hace 10 años, 80% de fondos venían del gobierno; hoy, 80% viene de privados" | Común |
| **Ejemplo concreto** | Añadir un caso o anécdota que ilustra un punto | Nuevo caso de X Lab exitoso | Común |
| **Nuevo mecanismo** | Añadir una iniciativa o mecanismo a los proyectos | Nueva idea para atraer talento en Density | Moderada |
| **Nuevo indicador** | Añadir una métrica relevante a Evolution | Nuevo KPI propuesto | Rara |
| **Matiz o precisión** | Refinar el lenguaje de algo existente | Cambiar "colaboración" por "colaboración sistémica" | Común |
| **Cita textual** | Incorporar una cita directa **solo si es memorable e irreemplazable** | Frase icónica que captura una idea mejor que cualquier paráfrasis | **Muy rara (máx. 1-2 por persona)** |

**IMPORTANTE:** La mayoría de las integraciones deben ser del tipo "adición de énfasis", "dato", "ejemplo" o "matiz"—donde la idea se absorbe en la voz narrativa. Las citas textuales son excepcionales y deben reservarse para frases verdaderamente memorables que perderían fuerza al parafrasearlas.

---

**PASO 5: Ejecutar la integración**

Para cada idea clasificada como NUEVA o REFUERZA:

1. **Muestra al usuario** qué vas a integrar y dónde:
```
Integración [N]: [Título corto]
- Sección: [#] - [Nombre de sección]
- Tipo: [Adición / Modificación / Nueva cita]
- Razón: [1 oración de por qué aporta]
```

2. **Edita directamente** el archivo `06-projects-ncm/ncm-2030-narrative+.md` usando la herramienta Edit

3. **Confirma** cada edición realizada

---

**PASO 6: Generar resumen de cambios**

Al terminar todas las ediciones, produce un resumen breve:

```
## Resumen de Integración
### Fuente: [Nombre del archivo de origen]
### Persona: [Nombre] (Nivel [A/B/C/D])

---

### Cambios realizados: [N]

1. **Sección [#]:** [Qué se añadió/modificó - 1 línea]
2. **Sección [#]:** [Qué se añadió/modificó - 1 línea]
...

### Ideas que ya estaban cubiertas (validan la narrativa): [N]
- [Idea 1]
- [Idea 2]

### Tensiones identificadas (requieren decisión humana):
- [Si hay contradicciones, listarlas]

### Citas memorables guardadas:
> "[Frase 1]" - [Persona]
> "[Frase 2]" - [Persona]
```

---

## Principios de Integración

1. **Sutileza sobre cantidad**: Una buena integración es casi invisible. La idea debe fluir naturalmente en el texto existente. **CRÍTICO: Las ideas deben fundirse con la voz narrativa, no insertarse como citas separadas.** El lector no debe notar dónde termina una voz y empieza otra.

2. **Coherencia narrativa**: El documento debe leerse como una sola voz, no como un patchwork de opiniones. Evita frases como "X lo plantea así:", "Como dice Y:", "Según Z:". En su lugar, absorbe la idea en la narración. La narrativa habla en primera persona plural (nosotros) o en voz impersonal—nunca es un collage de citas.

3. **Citas con extrema moderación**: Solo incluir citas textuales cuando sean memorables Y aporten fuerza retórica irreemplazable. Máximo 1-2 citas por persona integrada en todo el documento. La mayoría de las ideas deben traducirse a la voz del documento, no citarse directamente. Una cita bien colocada es poderosa; muchas citas diluyen la narrativa.

4. **Ponderación de voces**: Las voces de Nivel A pueden modificar la estructura; las de Nivel D aportan color y ejemplos. Pero en todos los casos, la integración debe ser orgánica.

5. **Validación es valor**: Que una idea sea "redundante" significa que la narrativa ya captura lo que la comunidad piensa. Eso es positivo.

6. **Tensiones productivas**: Las contradicciones no siempre son problemas. A veces revelan decisiones estratégicas que el documento debe hacer explícitas.

7. **Preservar la arquitectura**: Los 5 proyectos (Density, Intersections, The Pool, Pulse, Evolution) son la columna vertebral. Las ideas se integran dentro de esta estructura, no la modifican (a menos que venga de Nivel A con justificación fuerte).

8. **Prueba del lector externo**: Antes de finalizar, pregúntate: si alguien lee este documento sin saber quiénes fueron consultados, ¿notaría los "parches"? Si la respuesta es sí, la integración no está completa.

---

## Formato del archivo fuente

El archivo con las ideas puede tener cualquier formato (notas, transcripción, bullet points), pero idealmente incluye:

```markdown
# Ideas de [Nombre]

**Cargo:** [Posición en el Tec]
**Nivel:** [A/B/C/D] (opcional - el modelo lo puede inferir)
**Contexto:** [Entrevista / Taller / Reunión]
**Fecha:** [Fecha]

## Ideas principales
- [Idea 1]
- [Idea 2]
...

## Citas textuales
> "[Frase memorable 1]"
> "[Frase memorable 2]"
```

Si el archivo no tiene este formato, el modelo extraerá la información de lo que encuentre.

---

## Ejemplos de uso

**Ejemplo 1 - Básico:**
```
Usa este prompt para integrar las ideas de
02-community-ncm/ideas-cinthia.md
```

**Ejemplo 2 - Con contexto adicional:**
```
Usa este prompt para integrar las ideas de
01-legacy-ncm/hallazgos/principales-hallazgos-david-garza.md

Nota: David Garza es Nivel A (Rector), dale peso alto a sus ideas.
```

**Ejemplo 3 - Múltiples archivos:**
```
Usa este prompt para integrar las ideas de estos archivos:
- 02-community-ncm/entrevista-decano-ingenieria.md
- 02-community-ncm/entrevista-decana-negocios.md

Procesa uno por uno y muestra el resumen al final.
```

---

## Qué hace el modelo

1. **Lee** el archivo fuente que le indiques
2. **Lee** la narrativa actual (`06-projects-ncm/ncm-2030-narrative+.md`)
3. **Analiza** cada idea: ¿es nueva, refuerza, o es redundante?
4. **Edita directamente** la narrativa para integrar las ideas que aportan valor
5. **Reporta** qué cambios hizo y qué ideas ya estaban cubiertas

---

## Notas importantes

- **El archivo destino siempre es:** `06-projects-ncm/ncm-2030-narrative+.md`
- Si una voz de Nivel A propone algo que contradice a otra voz de Nivel A, el modelo lo señalará para decisión humana
- **Las ediciones deben ser invisibles**: el documento debe leerse como una sola voz, no como un collage de opiniones. Si el lector puede identificar dónde se "insertó" una idea, la integración falló.
- **Evita el patrón "inserción con atribución"**: frases como "Como dice X:", "X lo plantea así:", "Según X:" rompen el flujo narrativo. En su lugar, absorbe la idea en el texto.
- **Prueba de lectura**: después de integrar, relee el párrafo completo. ¿Fluye naturalmente? ¿Se nota el "parche"? Si se nota, reescribe.
- El modelo mostrará cada integración antes de hacerla para que puedas aprobar o ajustar

---

## Registro de voces integradas

Cada vez que se ejecute este prompt, añade una entrada aquí:

| Fecha | Archivo fuente | Persona | Nivel | Ideas integradas | Ideas validadas |
|-------|----------------|---------|-------|------------------|-----------------|
| 2026-01-20 | 01-legacy-ncm/transcripciones-liderazgos/entrevista-hecha-ricardo-saldívar.md | Ricardo Saldívar | A | 5 | 5 |
| 2026-01-20 | 02-community-ncm/entrevistas-estudiantes/ (7 archivos) | Arianna, Layla, Marianela, Sofía, Vale, Valeria P., Vero | D | 3 | 9 |
| 2026-01-20 | 02-community-ncm/entrevistas-directivos-ai-cynthia/ (11 archivos) | Moraima Campbell, José Manuel Aguirre, Érika Calles, Ricardo Swain, Gabe Aguilera, Xavier Ordeñana, Diana Grajeda, Edgar Muñiz, Alfonso Betancourt, Vianney Lara, Rogelio Sandoval | A, B, C | 5 | 12 |
| 2026-01-23 | 01-legacy-ncm/hallazgos/hallazgos-javier-guzmán.md | Javier Guzmán (Vicepresidente de Investigación) | A | 9 | 2 |
| 2026-01-23 | 01-legacy-ncm/hallazgos/hallazgos-guillermo-torre.md | Guillermo Torre | A | 8 | 6 |

## Connections
- [[04-technology-ncm]]
