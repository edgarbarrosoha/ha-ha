# El Cascarón HA (The HA Shell)
**Visualización de la Infraestructura de Memoria Fractal**

## 1. Topología Fractal (Los 3 Niveles de Zoom)
```ascii
      NIVEL 0: ROOT (ha-eb)
      [ Alcance: Vida Completa / Estrategia ]
      │
      ├──> NIVEL 1: VAULT (ha-research)
      │    [ Alcance: Dominio Académico ]
      │    │
      │    └──> NIVEL 2: PROJECT (ha-jiii)
      │         [ Alcance: Tarea Única / Deep Work ]
```

## 2. Anatomía de un Nodo (El "Cascarón")
```ascii
   ┌─────────────────────────────────────────────────────────┐
   │  EL CASCARÓN (Infraestructura Local / Portable)         │
   │  1. SCRIPT DE INYECCIÓN (ha-*-start.sh)                 │
   │     └──> "Soy el portero. Leo la memoria y llamo a la IA"
   │  2. CONTEXT.MD (Memoria Largo Plazo)                    │
   │     └──> "IDENTIDAD: Eres el especialista..."           │
   │  3. DASHBOARD.MD (Memoria Corto Plazo)                  │
   │     └──> "PENDIENTES: [ ] >> Tarea Agéntica"            │
   └───────────────────────────┬─────────────────────────────┘
                               │ (Inyección)
                               ▼
   ┌─────────────────────────────────────────────────────────┐
   │  LA INTELIGENCIA (Gemini / LLM)                         │
   │  * Colapsa su conocimiento general                      │
   │  * Adopta la "Persona" definida en el Cascarón          │
   └───────────────────────────┬─────────────────────────────┘
                               ▼
                    AGENTE ESPECIALISTA ACTIVO
```

## 3. El Flujo de Agencia (El Protocolo ">>")
```ascii
HUMANO (Tú)                 CASCARÓN (Archivos)              AGENTE (Yo)
    │                               │                            │
    ├── Escribe en Dashboard ──────>│                            │
    │   "- [ ] Pagar luz"           │                            │
    │   "- [ ] >> Resumir PDF"      │                            │
    ├── Ejecuta "ha-start" ────────>│                            │
    │                               ├── Lee Dashboard ──────────>│
    │                               │                            ├── Analiza
    │                               │                            │   ├── "[ ] Pagar" -> NO ACTUAR
    │                               │                            │   └── "[ ] >> Resumir" -> EJECUTAR
```

## 4. Portabilidad (Cloud-Native)
```ascii
   COMPUTADORA A (Escritorio)        NUBE (Obsidian Sync)       COMPUTADORA B (Viajes)
   ┌───────────────────────┐        ┌──────────────────┐       ┌───────────────────────┐
   │ .zshrc                │        │ ha-aliases.zsh   │       │ .zshrc                │
   │  └─> source aliases   │<───────┤ context.md       ├──────>│  └─> source aliases   │
   └───────────────────────┘        │ dashboard.md     │       └───────────────────────┘
                                    └──────────────────┘
                                             ▲
                                    "FUENTE DE VERDAD"
```

## Connections
- [[05-context]]
