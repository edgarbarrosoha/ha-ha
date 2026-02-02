# Skill: Cluster Analysis

**Trigger:** `\cluster [data]` or "analyze clusters for [topic]"

## Purpose
Analyze and cluster citizen input to identify patterns, themes, and priorities for government action.

## Protocol

1. **RECEIVE INPUT**
   - Identify data source (proposals, feedback, survey responses)
   - Note volume and date range
   - Check for existing clustering in `06-projects-sic-q/`

2. **SEMANTIC ANALYSIS**
   - Group by theme/topic
   - Identify sentiment (positive, negative, neutral)
   - Extract key entities (locations, services, issues)

3. **CLUSTER FORMATION**
   - Target 10-20 clusters per major topic
   - Name each cluster descriptively
   - Calculate cluster size and priority

4. **CROSS-REFERENCE**
   - Link to relevant government data from `05-context-sic-q/`
   - Connect to existing policies or programs
   - Identify gaps in current response

5. **GENERATE OUTPUT**
   - Summary table of clusters
   - Top 5 priority clusters with rationale
   - Recommended actions (with human decision points)

## Output Format

```markdown
# Cluster Analysis: [Topic]
**Date:** [YYYY-MM-DD]
**Input:** [X] proposals from [source]

## Cluster Summary

| # | Cluster Name | Size | Sentiment | Priority |
|---|--------------|------|-----------|----------|
| 1 | [Name] | [N] | [+/-/=] | [High/Med/Low] |
...

## Top Priority Clusters

### 1. [Cluster Name]
- **Volume:** [N] proposals
- **Key themes:** [list]
- **Related data:** [from context]
- **Recommended action:** [with decision point]

...

## Human Decision Points

- [ ] Validate cluster groupings
- [ ] Approve priority ranking
- [ ] Assign to thematic council
- [ ] Set response timeline
```

## Quality Checklist

- [ ] All input data accounted for
- [ ] Clusters are distinct and meaningful
- [ ] Priorities are justified
- [ ] Human decision points clearly marked
- [ ] Connected to existing context data
