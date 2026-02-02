# Skill: Hallazgo Extraction

**Trigger:** `\hallazgo [person]` or "extract findings from [person] interview"

## Purpose
Extract key findings (hallazgos) from a single interview transcript, creating a structured summary for narrative integration.

## Protocol

1. **LOCATE TRANSCRIPT**
   - Check `02-community-ncm/entrevistas/` subdirectories
   - Leadership, directors, or students

2. **READ TRANSCRIPT**
   - Read complete transcript
   - Note context (role, date, setting)
   - Identify person's unique perspective

3. **EXTRACT FINDINGS**
   - **Vision quotes** — Statements about future
   - **Pain points** — Problems identified
   - **Success stories** — What works
   - **Recommendations** — What they suggest
   - **Tensions** — Trade-offs they see
   - **Unique angle** — Their distinctive view

4. **CATEGORIZE BY BET**
   - Distrito de Innovación relevance
   - Posgrados Presenciales relevance
   - Selectividad relevance
   - Cross-cutting insights

5. **SAVE OUTPUT**
   - Save to `01-legacy-ncm/hallazgos/hallazgos-[person].md`
   - Follow naming convention

## Output Format

```markdown
# Hallazgos: [Person Name]

**Role:** [Position]
**Interview date:** [Date]
**Interviewer:** [Name]

## Vision Quotes

> "[Quote 1]"

> "[Quote 2]"

## Pain Points Identified

1. [Pain point 1]
2. [Pain point 2]

## Success Stories

- **[Story title]:** [Brief description]

## Recommendations

1. [Recommendation 1]
2. [Recommendation 2]

## By Transformational Bet

### Distrito de Innovación
- [Relevant insight]

### Posgrados Presenciales
- [Relevant insight]

### Selectividad
- [Relevant insight]

## Unique Perspective

[What makes this person's view distinctive]

## Suggested Use in Narrative

[Where/how to incorporate these insights]
```

## Quality Checklist

- [ ] All quotes are verbatim
- [ ] Context is clear
- [ ] Categorization by bet is accurate
- [ ] Unique perspective captured
- [ ] Ready for narrative integration
