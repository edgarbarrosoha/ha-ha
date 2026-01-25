# Arquitectura Fractal de HA

## Concepto

La arquitectura de HA es **fractal**: la misma estructura de [[ha-eb/06-projects/ha/00-ha-root/03-learning/metodologias/6-dimensiones]] se replica a diferentes escalas.

```
                    ┌─────────────────┐
                    │    EMPRESA      │
                    │  (6 dimensiones)│
                    └────────┬────────┘
                             │
         ┌───────────────────┼───────────────────┐
         │                   │                   │
    ┌────┴────┐         ┌────┴────┐         ┌────┴────┐
    │  ÁREA A │         │  ÁREA B │         │  ÁREA C │
    │(6 dims) │         │(6 dims) │         │(6 dims) │
    └────┬────┘         └─────────┘         └─────────┘
         │
    ┌────┴────────────────┐
    │                     │
┌───┴───┐            ┌────┴────┐
│EQUIPO1│            │ EQUIPO2 │
│(6dims)│            │ (6dims) │
└───┬───┘            └─────────┘
    │
┌───┴───┐
│PERSONA│
│(6dims)│
└───────┘
```

## Niveles de Escala

| Nivel | Descripción | Ejemplo |
|-------|-------------|---------|
| **Individual** | Una persona con su HA personal | Edgar y sus 6 dimensiones |
| **Equipo** | Un equipo pequeño | Equipo HA core |
| **Área** | Un departamento o unidad | Campus Monterrey |
| **Organización** | Una empresa completa | xignux |
| **Ecosistema** | Red de organizaciones | Tec + partners |

## Principios Fractales

### 1. Auto-similaridad
Cada nivel tiene las mismas 6 dimensiones:
- Legado propio
- Comunidad propia
- Aprendizaje propio
- Tecnología propia
- Contexto propio
- Proyectos propios

### 2. Interconexión
Los niveles se conectan:
- El legado del equipo contribuye al legado del área
- La tecnología del área sirve a los equipos
- El contexto de la empresa informa a todos

### 3. Autonomía con Coherencia
- Cada nivel tiene autonomía en sus decisiones
- El agente raíz de cada nivel asegura coherencia
- Los niveles superiores definen restricciones, no micromanagement

## Cómo Escalar

### De Individual a Equipo
1. Definir legado compartido del equipo
2. Mapear comunidad (quién hace qué)
3. Consolidar aprendizajes
4. Compartir tecnología
5. Alinear contexto
6. Coordinar proyectos

### De Equipo a Área
1. Agregar legados de equipos → legado de área
2. Conectar comunidades de equipos
3. Crear base de conocimiento compartida
4. Estandarizar tecnología
5. Ampliar escaneo de contexto
6. Portafolio de proyectos

### De Área a Organización
1. Función objetivo organizacional
2. Gobierno de comunidades
3. Universidad corporativa
4. Arquitectura empresarial
5. Inteligencia de mercado
6. PMO

## Unidad Fractal Mínima

La unidad mínima que puede operar como HA completa:

```
┌─────────────────────────────────────┐
│           UNIDAD FRACTAL            │
├─────────────────────────────────────┤
│ • 1 Legado definido                 │
│ • 1 Comunidad mapeada               │
│ • 1 Base de conocimiento            │
│ • 1 Stack tecnológico               │
│ • 1 Escaneo de contexto             │
│ • 1+ Proyectos activos              │
│ • 1 Agente raíz coordinando         │
└─────────────────────────────────────┘
```

## Paquetes de Réplica

Para escalar, se crean paquetes reutilizables:

| Paquete | Contenido |
|---------|-----------|
| **Datos** | Esquemas, ETLs, calidad |
| **KB** | Taxonomía, ontología, documentos base |
| **Agentes** | Prompts, configuraciones, playbooks |
| **Plantillas** | Templates de proyectos, reportes |
| **Gobernanza** | Permisos, roles, auditoría |

## Conexiones

- [[ha-eb/06-projects/ha/00-ha-root/03-learning/metodologias/6-dimensiones]] — La estructura que se replica
- [[8-pasos-ha]] — El proceso para implementar cada nivel
- [[06-projects]] — Donde se ejecuta el escalamiento

---

*El poder de HA está en su escalabilidad fractal*
