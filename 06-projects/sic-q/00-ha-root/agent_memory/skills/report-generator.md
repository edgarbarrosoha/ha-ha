# Skill: Report Generator

**Trigger:** `\report [type]` or "generate [type] report"

## Purpose
Generate reports for different stakeholders (government, citizens, internal team) based on SIC-Q data and analysis.

## Report Types

### 1. Executive Summary (Government)
- 1-2 pages
- Key metrics and trends
- Top citizen priorities
- Recommended actions
- Political implications

### 2. Citizen Feedback Report (Public)
- Accessible language
- Visual-friendly format
- "You said, we did" structure
- Clear next steps

### 3. Technical Analysis (Internal)
- Detailed methodology
- Data quality notes
- System performance metrics
- Improvement recommendations

### 4. Instituto del Futuro Brief
- Long-term perspective
- Cross-political-cycle analysis
- Strategic recommendations
- Vision alignment check

## Protocol

1. **IDENTIFY AUDIENCE**
   - Government officials → Executive Summary
   - Citizens → Feedback Report
   - Team → Technical Analysis
   - Instituto → Strategic Brief

2. **GATHER DATA**
   - Pull from relevant folders in `06-projects-sic-q/`
   - Cross-reference with `05-context-sic-q/`
   - Check recent cluster analyses

3. **STRUCTURE REPORT**
   - Use appropriate template
   - Match language to audience
   - Include visualizations where helpful

4. **REVIEW & VALIDATE**
   - Check facts against sources
   - Ensure balanced representation
   - Mark any uncertainties

5. **SAVE & DISTRIBUTE**
   - Save to `06-projects-sic-q/entregables/`
   - Name format: `report-[type]-[date].md`

## Output Templates

### Executive Summary Template
```markdown
# Informe Ejecutivo: [Topic]
**Fecha:** [Date] | **Período:** [Range]

## Resumen
[2-3 sentences]

## Métricas Clave
| Indicador | Valor | Tendencia |
|-----------|-------|-----------|

## Prioridades Ciudadanas
1. [Top issue]
2. [Second issue]
3. [Third issue]

## Acciones Recomendadas
- [ ] [Action 1] - [Responsible party]
- [ ] [Action 2] - [Responsible party]

## Consideraciones
[Political/social context]
```

## Quality Checklist

- [ ] Audience-appropriate language
- [ ] Data sources cited
- [ ] Balanced representation
- [ ] Actionable recommendations
- [ ] Clear human decision points
