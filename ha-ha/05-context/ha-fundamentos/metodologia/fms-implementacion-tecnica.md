# HA Fractal Memory System (FMS): Protocolo Técnico v1.0

## 1. Esquema de Datos (Data Schema)
Para que el sistema sea replicable, cada nodo debe cumplir con el siguiente contrato:
```text
[ROOT_DEL_NODO]/
├── agent_memory/           # Identidad y Estado
│   ├── context.md          # Memoria Largo Plazo
│   └── dashboard.md        # Memoria Corto Plazo
└── ha-{nodo}-start.sh      # Script de Inyección
```

## 2. Portabilidad y Sincronización
El sistema es agnóstico al hardware gracias a:
1. **Centralización:** Aliases en `ha-aliases.zsh` dentro de la nube (Obsidian).
2. **Abstracción:** Uso de `$HOME` en lugar de rutas absolutas.
3. **Inyección Local:** El `.zshrc` local solo hace `source` al archivo maestro.

## 3. Protocolo de Agencia (">")
Para evitar alucinaciones, se implementa un gatillo explícito:
- `[ ] Tarea` -> El agente solo recuerda.
- `[ ] >> Tarea` -> El agente EJECUTA autónomamente.

## 4. Script Maestro de Aliases
```bash
export OBS_EB="$HOME/Documents/obs-eb"
alias ha-eb-start='$OBS_EB/ha-eb/06-projects/__to-do/ha-eb-start.sh'
# ... (resto de aliases)
```

## 5. Implementación de Subproyectos (Nivel N)
Para crear un nivel de zoom más profundo dentro de un proyecto existente:
1. Navega a la subcarpeta: `cd .../ProyectoGrande/ModuloX`
2. Crea la memoria local: `mkdir _agent_memory`
3. Añade `context.md` y `dashboard.md` específicos del Módulo X.
4. Ejecuta `ha-project-start` desde esa carpeta.
El script detectará automáticamente la memoria local y cargará ese contexto específico.
