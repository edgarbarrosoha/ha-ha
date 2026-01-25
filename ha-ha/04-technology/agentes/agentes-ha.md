# Agentes HA

## Arquitectura de Agentes

### Estructura Básica

```
┌─────────────────────────────────────┐
│           AGENTE RAÍZ               │
│     (Coordina las 6 dimensiones)    │
└─────────────────┬───────────────────┘
                  │
    ┌─────────────┼─────────────┐
    │             │             │
┌───┴───┐    ┌────┴────┐   ┌────┴────┐
│Legado │    │Comunidad│   │Aprend.  │
└───────┘    └─────────┘   └─────────┘
    │             │             │
┌───┴───┐    ┌────┴────┐   ┌────┴────┐
│Tecnol.│    │Contexto │   │Proyect. │
└───────┘    └─────────┘   └─────────┘
```

## Los 6 Agentes Dimensionales

### 1. Agente de Legado
**Rol:** Evalúa si las acciones construyen el legado a largo plazo
**Pregunta clave:** "¿Esto nos acerca al estado deseado?"

**Funciones:**
- Auditar alineación de decisiones con objetivos
- Alertar cuando hay desviación
- Sugerir priorización

---

### 2. Agente de Comunidad
**Rol:** Especialista en capital social
**Pregunta clave:** "¿Quién debe estar involucrado?"

**Funciones:**
- Mapear stakeholders
- Sugerir conexiones
- Identificar cuellos de aprobación

---

### 3. Agente de Aprendizaje
**Rol:** Detecta brechas de capacidad
**Pregunta clave:** "¿Qué necesitamos saber?"

**Funciones:**
- Identificar gaps de conocimiento
- Sugerir recursos de aprendizaje
- Documentar lecciones

---

### 4. Agente de Tecnología
**Rol:** Orquestador de herramientas
**Pregunta clave:** "¿Cómo lo automatizamos?"

**Funciones:**
- Automatizar tareas repetitivas
- Integrar sistemas
- Optimizar flujos

---

### 5. Agente de Contexto
**Rol:** Radar externo
**Pregunta clave:** "¿Qué está cambiando afuera?"

**Funciones:**
- Monitorear señales externas
- Alertar cambios relevantes
- Generar escenarios

---

### 6. Agente de Proyectos
**Rol:** Brazo de accountability
**Pregunta clave:** "¿Qué hacemos, cuándo y quién?"

**Funciones:**
- Bajar estrategia a entregables
- Tracking de tareas
- Alertar riesgos de ejecución

---

## Interacción: Un Chat, Múltiples Agentes

Para el usuario, la experiencia es simple:

```
Usuario ──▶ Chat único ──▶ Agente Raíz
                              │
                    Coordina internamente
                              │
                 ┌────────────┼────────────┐
                 ▼            ▼            ▼
            Agente 1     Agente 2     Agente N
                 │            │            │
                 └────────────┼────────────┘
                              │
                    Respuesta integrada
                              │
                              ▼
                           Usuario
```

**Principio:** Un chat sencillo hacia afuera, una red agéntica poderosa hacia adentro.

## Playbook de Configuración

### Para cada agente:

1. **Identidad**
   - Nombre y rol
   - Dimensión que representa
   - Personalidad/tono

2. **Conocimiento**
   - Documentos base
   - APIs/datos que consulta
   - Restricciones

3. **Comportamiento**
   - Cuándo interviene
   - Cómo escala a humano
   - Cómo colabora con otros agentes

4. **Métricas**
   - Qué mide
   - Cómo reporta
   - Umbrales de alerta

## Ejemplo: DOCET

| Agente | Rol en DOCET |
|--------|--------------|
| Legado | Evalúa si acciones construyen la visión de Poncho |
| Comunidad | Prioriza conexiones humanas, sugiere reuniones presenciales |
| Aprendizaje | Detecta brechas en docentes, sugiere capacitación |
| Tecnología | Automatiza reportes, integra sistemas |
| Contexto | Monitorea cambios regulatorios educativos |
| Proyectos | Tracking de iniciativas, alertas de desviación |

## Conexiones

- [[04-technology]] — Los agentes son tecnología
- [[ha-eb/06-projects/ha/00-ha-root/03-learning/metodologias/6-dimensiones]] — Un agente por dimensión
- [[8-pasos-ha]] — Paso 4 orquesta agentes

---

*Documento de referencia para configuración de agentes*
