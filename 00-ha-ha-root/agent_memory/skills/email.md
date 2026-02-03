# Skill: email

**Command:** `\email [Person] [Topic]` or `@draft email to #person about [topic]`

**Purpose:** Draft emails following Edgar's communication style from style-guide.md.

---

## When to Use

- Edgar needs to write an email
- Task marked `[>] @draft email to #person`
- Edgar says "escribe un correo a..." or "draft an email to..."

---

## The Protocol (5 Steps)

### Step 1: IDENTIFY RECIPIENT
```
Parse the person mentioned:
- Look up in context.md Zone B "Key People" section
- Check style-guide.md for prior interactions
- Determine relationship level:
  - Formal/Senior (mentor, client, institution)
  - Professional (colleague, business contact)
  - Cercano/Amigo (friend, close collaborator)
```

### Step 2: DETERMINE CONTEXT
```
Gather:
- Topic/purpose of the email
- Any prior correspondence (if mentioned)
- Relevant project context
- Urgency level
```

### Step 3: SELECT STYLE
```
Based on relationship level (from style-guide.md):

FORMAL/SENIOR:
- Saludo: "Dear [Name]" or "Estimado/a [Name]"
- Tono: Professional, warm, slightly vulnerable
- Cierre: "Abrazo," or "Warm regards,"
- Include: Context acknowledgment, specific asks, alternatives

PROFESSIONAL:
- Saludo: "¿Cómo estás?" or "Hope you're well"
- Tono: Direct but warm, "de maravilla", "tienes chance"
- Cierre: Brief or none for WhatsApp
- Include: Clear purpose, next steps

CERCANO/AMIGO:
- Saludo: "Qué onda," "¿Cómo andas?"
- Tono: Coloquial mexicano, "chingón", "ahí va la cosa"
- Cierre: "te mando un abrazo", "Ya me dirás"
- Include: Personal first, business second, humor
```

### Step 4: DRAFT EMAIL
```
Structure (from style-guide.md):
1. Saludo breve
2. Contexto en 1-2 oraciones
3. Punto principal / solicitud
4. Próximos pasos claros
5. Cierre cordial

Apply Edgar's patterns:
- Ser concreto sobre el impacto personal
- Vulnerabilidad antes de pedir (for senior contacts)
- Profundidad emocional, no frases hechas
- Fechas, lugares, actividades concretas
- Siempre dar opciones
- Reconocer asimetrías con humildad
- Propuestas generosas y concretas
```

### Step 5: PRESENT FOR REVIEW
```
Show the draft with:
- Recipient and subject line
- The email body
- Notes on style choices made
- Ask for approval or adjustments
```

---

## Output Format

```markdown
## @draft Email: [Person] — [Topic]

**Para:** [email if known, or #person]
**Asunto:** [subject line]
**Nivel:** [Formal/Professional/Cercano]

---

[Email body]

---

**Notas de estilo:**
- [why certain choices were made]
- [any assumptions]

**¿Ajustes o lo enviamos?**
```

---

## Style Reference (Quick)

| Nivel | Saludo | Expresiones | Cierre |
|-------|--------|-------------|--------|
| Formal/Senior | "Dear..." | Sin coloquialismos | "Abrazo," |
| Professional | "¿cómo estás?" | "de maravilla", "tienes chance" | Breve o ninguno |
| Cercano/Amigo | "Qué onda", "¿cómo andas?" | "chingón", "ahí va la cosa" | "te mando un abrazo" |

---

## Anti-patterns (Avoid)

From style-guide.md:
- ❌ Lenguaje excesivamente formal o rebuscado
- ❌ Explicaciones innecesariamente largas
- ❌ Jerga corporativa vacía
- ❌ Separar artificialmente lo técnico de lo humano
- ❌ Ignorar el contexto sistémico

---

## Examples

**Input:** `\email Steven Popper thanking for DMDU conference`
**Output:** Formal email with vulnerability, specific impact, concrete proposal

**Input:** `\email Nicho reconectar después de tiempo`
**Output:** Cercano WhatsApp-style, "Qué onda", humor, personal first

**Input:** `\email Oscar sobre propuesta DOCET`
**Output:** Professional, direct, clear next steps
