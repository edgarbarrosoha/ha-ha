# Anexo 1: El Modelo — Narrativa Visual

**Para:** Jorge Blando, Víctor Gutiérrez, Mario Orozco
**De:** Edgar Barroso — Horizons Architecture
**Fecha:** Febrero 2026

---

## Cómo leer este documento

Este anexo acompaña los diagramas del modelo Tec Beyond + HA. Cada sección corresponde a un componente del sistema. La narrativa explica no solo *qué* hace cada parte, sino *por qué* existe y *cómo* se conecta con las demás.

El objetivo: que cualquier persona del equipo pueda entender la lógica completa del sistema leyendo este documento junto con los diagramas.

---

## 1. El organismo: 9 generaciones, una red viva

### Lo que vemos en el diagrama

Un núcleo central (el ADN de Tec Beyond) del cual irradian 9 generaciones. Cada generación es un grupo de ~40-50 empresarios más sus familias. Las conexiones entre generaciones son orgánicas, no lineales.

### Lo que significa

Tec Beyond no es un directorio. Es un organismo que lleva creciendo desde 2015. Cada generación que se suma no solo agrega miembros — agrega relaciones, conocimientos, industrias, mercados. La red se vuelve más densa y más valiosa con cada nueva generación.

**La matemática del valor:**

| Escala | Personas | Conexiones posibles | Valor relativo |
|--------|----------|---------------------|----------------|
| León hoy | ~350 | 61,075 | 1x |
| + familias | ~700 | 244,650 | 4x |
| + colaboradores | ~3,000 | 4,498,500 | 73x |

Hoy, la mayoría de esas conexiones potenciales no se activan porque la gente no sabe lo que los demás tienen o necesitan. El sistema que proponemos activa esas conexiones de forma inteligente.

### Por qué importa para la escalabilidad

Cuando sumamos una nueva sede (Chihuahua, Aguascalientes, Morelia), no sumamos una lista — sumamos un nuevo nodo del organismo. Las conexiones no son solo dentro de la sede; cruzan entre sedes. Un empresario de manufactura en León puede encontrar su distribuidor ideal en Chihuahua.

---

## 2. La base de conocimiento: el cerebro del sistema

### Lo que vemos en el diagrama

Un contenedor central (la base de conocimiento) al que llegan datos de todas las generaciones. De ese contenedor salen cuatro agentes de IA que generan valor específico.

### Lo que significa

La base de conocimiento no es una hoja de cálculo. Es un sistema semántico — entiende *relaciones*, no solo texto.

**Diferencia práctica:**

| Pregunta | Base de datos tradicional | Base de conocimiento semántica |
|----------|--------------------------|--------------------------------|
| "¿Quién sabe de logística?" | Busca la palabra "logística" en perfiles | Encuentra a quien dirige una empresa de distribución, a quien hizo su tesis sobre cadena de suministro, a quien exporta productos — aunque ninguno haya escrito "logística" |
| "¿Hay oportunidades cruzadas?" | No puede responder | "Hay 3 empresas de manufactura que necesitan distribución en el Bajío, y 2 empresas de logística que buscan nuevos clientes industriales" |

**Qué alimenta la base:**

- Perfiles profesionales de los miembros
- Industrias y sectores donde operan
- Intereses declarados y detectados
- Historial de interacciones en el programa
- Información pública de LinkedIn
- Datos de eventos y sesiones presenciales
- Conversaciones con los agentes de IA

### La clave: el conocimiento se acumula

Cada interacción enriquece la base. El sistema no pierde información — la integra. Cuando un miembro de la generación 3 interactúa con uno de la generación 8, esa conexión y su contexto quedan registrados. Con el tiempo, el sistema entiende patrones que ningún ser humano podría detectar en una red de cientos de personas.

---

## 3. Los cuatro agentes: inteligencia especializada

### Lo que vemos en el diagrama

Cuatro nodos debajo de la base de conocimiento, cada uno con una función específica. Cada agente genera un tipo distinto de valor.

### Lo que significa cada agente

#### Agente Match — "El conector"

**Función:** Encuentra oportunidades de negocio entre miembros.

**Cómo opera:**
1. Analiza todos los perfiles de la red (industrias, capacidades, necesidades, ubicación)
2. Identifica complementariedades que generen valor mutuo
3. Propone la conexión de forma **anonimizada** — nadie ve datos de nadie
4. Solo si ambas partes aceptan, se hace la introducción

**Por qué es el agente más importante:** El 80% de los miembros de Tec Beyond buscan oportunidades de negocio. Este agente es lo que hace que la membresía valga la pena todos los días, no solo cuando hay un evento presencial.

**Ejemplo concreto:**
> "Un miembro de la generación 5 (manufactura textil, León) y un miembro de la generación 8 (distribución retail, Chihuahua) tienen un match de negocio. Ambos operan en el segmento industrial y tienen capacidades complementarias. ¿Conectar?"

#### Agente Contenidos — "El curador"

**Función:** Personaliza capacitación y contenido para cada miembro.

**Cómo opera:**
- No es el mismo curso para todos
- Alguien con 2 años de empresa recibe contenido distinto al que lleva 20 años
- Identifica gaps de conocimiento en la comunidad
- Sugiere cursos, artículos, eventos relevantes según perfil individual

**Valor para el Tec:** Genera demanda informada de programas de educación continua. Jorge, esto conecta directamente con la operación de tu Vicerrectoría — el agente identifica qué necesitan aprender los empresarios, y eso alimenta la oferta de cursos.

#### Agente Scout — "El cazatalentos"

**Función:** Detecta candidatos para futuras generaciones.

**Cómo opera:**
- Analiza redes profesionales de los miembros actuales (LinkedIn público)
- Identifica perfiles que hacen match con el ADN de Tec Beyond
- Entrega lista de candidatos con contexto: "Esta persona está en la red de 3 miembros actuales, dirige empresa X, industria Y"

**Valor:** Resuelve uno de los retos más importantes del programa — encontrar a los próximos empresarios que deberían estar en Tec Beyond.

#### Agente Insights — "El estratega"

**Función:** Genera inteligencia estratégica para el Consejo.

**Ejemplo de reporte:**
> "En la comunidad de León:
> - 47 miembros mencionaron nearshoring en los últimos 3 meses
> - La vocación predominante es manufactura (38%) y comercio (27%)
> - Hay 12 miembros con capacidad de exportación que no se conocen entre sí
> - Recomendación: panel de nearshoring con los 3 miembros más experimentados"

**Valor:** El Consejo pasa de decidir por intuición a decidir con evidencia. Sabe exactamente qué está pasando en su red.

### Cómo se refuerzan entre sí

Los 4 agentes no operan aislados. Se alimentan mutuamente:

```
   MATCH encuentra una conexión entre dos empresarios
      │
      ▼
   CONTENIDOS detecta que ambos necesitan capacitación en comercio exterior
      │
      ▼
   INSIGHTS reporta al Consejo: "hay un cluster de comercio exterior emergente"
      │
      ▼
   SCOUT identifica 5 candidatos externos que reforzarían ese cluster
      │
      ▼
   El Consejo decide invitar a esos candidatos → nueva generación más fuerte
```

Es un ciclo de inteligencia que se fortalece con cada vuelta.

---

## 4. La gobernanza: tres círculos, roles claros

### Lo que vemos en el diagrama

Tres niveles concéntricos: Círculo 1 (XBAC + Comunidad Beyond + LLL), Círculo 2 (Tec de Monterrey), y debajo las instancias por sede.

### Lo que significa

Cada círculo tiene un rol claro, y ninguno absorbe a otro:

| Círculo | Quién | Función | Ve |
|---------|-------|---------|-----|
| **1** | XBAC + Comunidad Beyond + LLL | Dirección estratégica, reglas de la comunidad, decisiones de admisión | Todo — toda la red, todos los datos, todos los reportes |
| **2** | Tec de Monterrey | Infraestructura, estándares de seguridad, paraguas institucional | Métricas agregadas, cumplimiento de estándares |
| **3** | Horizons Architecture | Operación tecnológica, desarrollo de agentes, soporte técnico | Datos técnicos necesarios para operar (no datos de negocio) |

### El principio rector

**El Consejo es dueño de la comunidad.** El Tec es el paraguas institucional. HA es el habilitador tecnológico. Si en algún momento se cambia de proveedor tecnológico, los datos y la comunidad permanecen intactos.

### Permisos por nivel

```
Círculo 1 (Consejo)     → Acceso total. Toda la red. Todos los reportes. Decisiones.
Admin de sede            → Solo su sede. Sus miembros. Sus eventos. Su data local.
Miembro local            → Su sede. Perfiles anonimizados. Sus matches.
Miembro nacional         → Cruces entre sedes. Matches a nivel país.
No miembro               → Nada.
```

Cada nivel hereda las capacidades del anterior, pero nunca ve más de lo que le corresponde.

---

## 5. El flujo completo: de la experiencia al hallazgo

### Lo que vemos en el diagrama

Todo lo que pasa presencialmente (eventos, reuniones, rituales, viajes) y en línea (plataforma, WhatsApp, agentes, contenidos) converge en la base de conocimiento. De ahí los agentes procesan y generan valor. El resultado final llega al Consejo como inteligencia accionable.

### Lo que significa

El sistema no reemplaza lo presencial. Lo **potencia**.

**Antes del sistema:**
- Un evento presencial genera relaciones... que se quedan en la memoria de los asistentes
- Un viaje a Silicon Valley genera insights... que se pierden cuando todos regresan
- Una célula de innovación produce ideas... que no llegan a quienes podrían ejecutarlas

**Con el sistema:**
- El evento presencial genera relaciones que se registran en la base de conocimiento → el agente Match detecta sinergias → el agente Insights reporta patrones al Consejo
- El viaje genera insights que alimentan el agente Contenidos → se distribuyen personalizados a cada miembro según su industria
- La célula de innovación produce ideas que el agente Scout cruza con candidatos externos → nuevas conexiones de valor

**El flujo:**

```
EXPERIENCIA (presencial + en línea)
    │
    ▼
BASE DE CONOCIMIENTO (integra todo)
    │
    ▼
AGENTES (procesan y cruzan)
    │
    ▼
VALOR (matches, contenido, candidatos, insights)
    │
    ▼
CONSEJO (inteligencia para decidir)
    │
    ▼
DECISIONES (que generan nuevas experiencias)
    │
    └─── ciclo continuo ───┘
```

### El concepto clave para Jorge Blando

Este sistema convierte a Tec Beyond en un programa de **acompañamiento continuo** — no solo durante el programa, sino después. Los miembros nunca "se gradúan" de la comunidad. El valor crece con el tiempo porque la base de conocimiento se enriquece con cada interacción.

Esto es lifelong learning aplicado a una comunidad empresarial: la educación no termina con un certificado, continúa como conexiones de valor, capacitación personalizada, y oportunidades de negocio que llegan porque el sistema conoce a cada miembro.

---

## 6. Cómo se conecta todo: la vista de sistema

```
    ┌─────────────────────────────────────────────────────────────┐
    │                    TEC BEYOND + HA                          │
    │                                                             │
    │   EXPERIENCIAS          BASE DE              VALOR          │
    │   ─────────────         CONOCIMIENTO         ────────       │
    │   Presencial     ──►    Perfiles      ──►    Matches        │
    │   En línea       ──►    Industrias    ──►    Contenido      │
    │   Eventos        ──►    Interacciones ──►    Candidatos     │
    │   Rituales       ──►    Historial     ──►    Insights       │
    │                                                             │
    │                    4 AGENTES DE IA                          │
    │                    Match · Contenidos                       │
    │                    Scout · Insights                         │
    │                                                             │
    │   GOBERNANZA           ESCALABILIDAD                       │
    │   ─────────────        ──────────────                      │
    │   3 círculos           Fractal: misma                      │
    │   Permisos claros      estructura, cada                    │
    │   Datos en el Tec      sede se replica                     │
    │                                                             │
    └─────────────────────────────────────────────────────────────┘
```

Todo conecta. Cada componente tiene un propósito específico y un vínculo con los demás. No hay piezas sueltas.

---

## Nota para la reunión

Este documento es para tener la narrativa clara. En la conversación con Jorge Blando y Mario, el flujo natural sería:

1. **Empezar con el organismo** (lo que ya existe: 9 generaciones, valor latente)
2. **Mostrar la base de conocimiento** (cómo se activa ese valor)
3. **Presentar los 4 agentes** (qué hace cada uno, con ejemplos concretos)
4. **Explicar la gobernanza** (quién controla qué — esto es clave para Jorge)
5. **Cerrar con el flujo completo** (la visión de sistema que integra todo)

Los otros 3 anexos cubren los temas operativos que complementan esta narrativa: datos y privacidad, business case, y escalabilidad.

---

**Horizons Architecture Systems**
Edgar Barroso
edgar@horizonsarchitecture.ai

Febrero 2026
