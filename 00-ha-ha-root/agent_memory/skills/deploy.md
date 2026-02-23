# Skill: deploy

**Command:** `\deploy {project}`

**Purpose:** Encrypt protected HTML deliverables and push to GitHub Pages. Handles the full cycle: encrypt source files → replace public files → commit → push.

---

## When to Use

- After editing any `-src.html` file that has a password-protected public version
- When Edgar says "súbelo", "deploy", "push" for a protected project
- After any content change to deliverables that are live on GitHub Pages

---

## Projects with Protected Deliverables

| Project | Source Files | Public Files | Password |
|---------|-------------|--------------|----------|
| `beyond` | `presentacion-ejecutiva-src.html`, `anexos-profesional-src.html` | `presentacion-ejecutiva.html`, `anexos-profesional.html` | See project-state.md |

---

## The Protocol (4 Steps)

### Step 1: IDENTIFY

Read project-state.md to get:
- Password
- Path to source files (`-src.html`)
- Path to public files (`.html`)

### Step 2: ENCRYPT

For each source file:
```bash
npx staticrypt "{path-to-src.html}" -p "{password}" --short
```

Output goes to `encrypted/` folder in repo root.

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

---

## Example: Beyond

```bash
# Encrypt
npx staticrypt "06-projects/tec-monterrey/06-projects/tec-beyond/06-projects/entregables/presentacion-ejecutiva-src.html" -p "Tec-Beyond-2026" --short
npx staticrypt "06-projects/tec-monterrey/06-projects/tec-beyond/06-projects/entregables/anexos/anexos-profesional-src.html" -p "Tec-Beyond-2026" --short

# Replace
cp encrypted/presentacion-ejecutiva-src.html "06-projects/tec-monterrey/06-projects/tec-beyond/06-projects/entregables/presentacion-ejecutiva.html"
cp encrypted/anexos-profesional-src.html "06-projects/tec-monterrey/06-projects/tec-beyond/06-projects/entregables/anexos/anexos-profesional.html"
rm -rf encrypted/

# Push
git add {files} && git commit -m "beyond: actualizar deliverables encriptados" && git push
```

---

## Important Notes

- **NEVER edit the `.html` files directly** — always edit the `-src.html` versions
- **NEVER commit the `-src.html` with the password visible** — passwords live only in project-state.md
- If `npx staticrypt` isn't cached, it downloads automatically (~5s)
- The `encrypted/` folder uses the source filename, so `presentacion-ejecutiva-src.html` becomes `encrypted/presentacion-ejecutiva-src.html`
- After deploying, GitHub Pages may take 1-2 minutes to update. Suggest hard refresh (`Cmd+Shift+R`) or incognito window to verify.
