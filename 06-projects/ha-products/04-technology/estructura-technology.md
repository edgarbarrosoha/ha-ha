# Estructura de la Dimension Technology

> Extraido de: HA Technology Presentation v2 (Oscar Diaz, CTO — Marzo 2026)

Standards gobierna TODO. Ningun proyecto se crea sin pasar por los templates.

## Carpetas

```
04-technology/
├── foundations/        El libro, manifiesto, V=M×I
├── standards/          CAPA GOBERNANTE — Principios, guidelines, templates, hooks, guardrails
├── research/           Agent systems, expert practices, market analysis, frontera
├── projects/           TaaS, MARA, LMS, Dev-with-AI, Consulting agents
├── shared/             Agentes, data models, utilidades reutilizables
├── architecture/       ADRs, diagramas, decisiones
└── sub-dims/           legacy/ community/ learning/ context/ (fractal)
```

## Principio fractal

La estructura es fractal: Technology tiene sus propias 6 sub-dimensiones. Misma arquitectura a toda escala.

## Proyectos dentro de Technology

| Proyecto | Descripcion |
|---|---|
| **TaaS** | Motor de pensamiento — 6 dimensiones como API |
| **MARA** | Interfaz al motor — para humanos y agentes |
| **LMS** | ha-learning-app — sistema para Leiden y cursos |
| **Dev-with-AI** | Practicas de desarrollo aumentado |
| **Consulting agents** | Agentes especificos por cliente (SIC-Q, Docet, etc.) |
