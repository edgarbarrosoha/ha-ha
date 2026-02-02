# Skill: version

**Commands:** `\version`, `\v`

**Purpose:** Manage document versioning with consistent naming and YAML metadata.

---

## Commands

| Command | Action |
|---------|--------|
| `\version [file]` | Create new version (v01 → v02) |
| `\version init [file]` | Add YAML metadata to existing file |
| `\version status [folder]` | List all versioned files in folder |
| `\version final [file]` | Mark current version as final |

---

## YAML Metadata Schema

```yaml
---
type: propuesta | anexo | one-pager | documento | reporte
version: v## (two digits: v01, v02, v03...)
created: YYYY-MM-DD
modified: YYYY-MM-DD
status: draft | review | sent | approved | final | archived
client: name (optional)
recipient: person (optional)
related: filename.md (optional)
---
```

### Required Fields
- `type` — Document category
- `version` — Version number (v##)
- `created` — Creation date
- `modified` — Last modification date
- `status` — Current document status

### Optional Fields
- `client` — Client or project name
- `recipient` — Person document is addressed to
- `related` — Related documents

---

## Naming Convention

```
{name}-v##.md           → Versioned document
{name}-final.md         → Approved/sent version (copy, not rename)
```

**Rules:**
- Use two digits: `v01`, `v02`, `v03`... (not v1, v1.3)
- No dates in filename (date lives in metadata)
- Lowercase, hyphens, no spaces
- `-final` is a copy of the approved version, original keeps version number

---

## Protocol: `\version [file]`

Create new version of existing file.

### Steps

1. **READ** current file
2. **EXTRACT** current version from metadata (e.g., `v02`)
3. **INCREMENT** version number (e.g., `v02` → `v03`)
4. **CREATE** new file with incremented version in filename
5. **UPDATE** metadata:
   - `version: v03`
   - `modified: {today}`
   - Keep `created` unchanged
6. **COPY** full content to new file
7. **REPORT** new file created

### Example

```
\version propuesta-etapa2-v02.md

→ Creates: propuesta-etapa2-v03.md
→ Updates metadata: version: v03, modified: 2026-02-02
→ Original v02 unchanged
```

---

## Protocol: `\version init [file]`

Add YAML metadata to file without metadata.

### Steps

1. **READ** file content
2. **DETECT** if YAML frontmatter exists
   - If exists: report "already has metadata"
   - If not: continue
3. **INFER** metadata:
   - `type`: from filename or content
   - `version`: v01 (or extract from filename if present)
   - `created`: file creation date or today
   - `modified`: today
   - `status`: draft
4. **INSERT** YAML frontmatter at top of file
5. **REPORT** metadata added

### Example

```
\version init propuesta-nueva.md

→ Adds:
---
type: propuesta
version: v01
created: 2026-02-02
modified: 2026-02-02
status: draft
---
```

---

## Protocol: `\version status [folder]`

List versioned documents in a folder.

### Steps

1. **SCAN** folder for .md files
2. **READ** YAML metadata from each
3. **REPORT** table:

```
| File | Version | Status | Modified |
|------|---------|--------|----------|
| propuesta-etapa1-v01.md | v01 | sent | 2025-12-03 |
| propuesta-etapa2-v02.md | v02 | draft | 2026-02-02 |
```

---

## Protocol: `\version final [file]`

Mark version as final and create final copy.

### Steps

1. **READ** current file
2. **UPDATE** metadata: `status: final`
3. **CREATE** copy with `-final` suffix (replacing version)
4. **REPORT** both files

### Example

```
\version final propuesta-etapa2-v03.md

→ Updates v03: status: final
→ Creates: propuesta-etapa2-final.md (copy)
```

---

## Status Workflow

```
draft → review → sent → approved → final
                  ↓
               archived
```

| Status | Meaning |
|--------|---------|
| `draft` | Work in progress |
| `review` | Under internal review |
| `sent` | Sent to recipient |
| `approved` | Approved by recipient |
| `final` | Locked, no more changes |
| `archived` | Superseded by newer version |

---

## Document Types

| Type | Use for |
|------|---------|
| `propuesta` | Proposals, quotes, offers |
| `anexo` | Supporting documents, appendices |
| `one-pager` | Executive summaries |
| `documento` | General documents |
| `reporte` | Reports, status updates |
| `contrato` | Contracts, agreements |
| `presentacion` | Presentation scripts/notes |

---

## Error Handling

| Issue | Action |
|-------|--------|
| No version in filename | Assume v01, add to metadata |
| YAML already exists | Skip init, report existing |
| Version mismatch (filename vs metadata) | Use metadata as source of truth, update filename |
| File not found | Report error |

---

## Integration with HA

- Versioned documents follow fractal principle (same system at all levels)
- Path provides context, metadata provides history
- `\version status` enables project-level tracking
- Works in Text Mode: agent outputs commands for user to execute
