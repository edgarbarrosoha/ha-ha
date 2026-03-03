---
name: deploy
description: Encrypt protected HTML deliverables with staticrypt and push to GitHub Pages. Handles full cycle from source to live deployment.
disable-model-invocation: true
argument-hint: [project]
---

# Deploy — Encrypt & Push to GitHub Pages

Encrypt `-src.html` files and deploy to GitHub Pages. Usage: `/deploy $ARGUMENTS`

## Projects with Protected Deliverables

| Project | Source Files | Password Location |
|---------|-------------|-------------------|
| `beyond` | `presentacion-ejecutiva-src.html`, `anexos-profesional-src.html` | See project-state.md |

## The Protocol (4 Steps)

### Step 1: IDENTIFY
Read `project-state.md` to get password, source file paths (`-src.html`), public file paths (`.html`).

### Step 2: ENCRYPT
For each source file:
```bash
npx staticrypt "{path-to-src.html}" -p "{password}" --short
```
Output goes to `encrypted/` folder.

### Step 3: REPLACE
```bash
cp encrypted/{filename}.html "{path-to-public.html}"
rm -rf encrypted/
```

### Step 4: COMMIT + PUSH
```bash
git add {public files}
git commit -m "{project}: actualizar deliverables encriptados"
git push
```

## Important Notes
- **NEVER edit `.html` files directly** — always edit `-src.html`
- **NEVER commit `-src.html` with password visible**
- If `npx staticrypt` not cached, downloads automatically (~5s)
- After deploy, GitHub Pages takes 1-2 min. Use `Cmd+Shift+R` or incognito to verify.
