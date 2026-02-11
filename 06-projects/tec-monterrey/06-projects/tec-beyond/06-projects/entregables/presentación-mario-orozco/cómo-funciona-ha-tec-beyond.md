# Cómo funciona HA para Tec Beyond

## Presentación para Mario Orozco

**De:** Edgar Barroso — Horizons Architecture
**Fecha:** Febrero 2026

---

## Lo que tienes enfrente

Tienes una red de 9 generaciones de empresarios que ya se conocen, ya se aprecian, pero que no están trabajando juntos activamente. Tienes un bot de WhatsApp que ya registró ~75 miembros. Tienes un consejo que quiere ver resultados.

Lo que falta es el sistema que haga que todo eso funcione de manera continua — sin depender de que alguien esté empujando manualmente cada conexión.

Eso es lo que vamos a construir.

---

## Cómo funciona el sistema: las 3 capas

Piensa en el sistema como un edificio de tres pisos. Cada piso tiene una función distinta, pero todos están conectados.

### Piso 1: La Base de Conocimiento

Aquí vive toda la información de la comunidad — pero no como una hoja de Excel. Es una **base de conocimiento** (vectores) que entiende relaciones semánticas.

**Qué significa eso en la práctica:**

| Base de datos tradicional | Base de conocimiento |
|---|---|
| Busca texto exacto: "logística" | Entiende que "cadena de suministro", "distribución" y "almacenaje" son lo mismo |
| Te dice quién puso "logística" en su perfil | Te dice quién realmente trabaja en logística, aunque nunca haya escrito esa palabra |
| Responde preguntas | Encuentra patrones que nadie preguntó |

**Qué entra:** Perfiles de miembros, industrias, intereses, historial del programa, interacciones, LinkedIn público, datos de eventos.

**Dónde vive:** En infraestructura del Tec (Azure). Los datos nunca salen de su control.

---

### Piso 2: Los Agentes de IA

Arriba de la base de conocimiento operan **4 agentes especializados**. No son chatbots — son sistemas que ejecutan procesos, usan herramientas, y generan resultados accionables.

#### Agente Match
**Lo que hace:** Encuentra oportunidades de negocio entre miembros.

```
Entrada:  Perfil de 300 miembros
Proceso:  Cruza industrias, necesidades, capacidades, ubicación
Salida:   "El miembro 217 (manufactura en León) y el miembro 89
           (distribución en Bajío) tienen un match de negocio.
           ¿Quieres que hagamos la conexión?"
```

- El match es **anonimizado** — tú decides si conectas o no.
- Las reglas las configuras tú: por industria, por región, por tipo de necesidad.
- El agente aprende: con el tiempo, las sugerencias son más precisas.

#### Agente Contenidos
**Lo que hace:** Personaliza capacitación por miembro.

No es el mismo curso para todos. Alguien que lleva 2 años con empresa de alimentos recibe contenido diferente al que lleva 15 años con empresa de manufactura.

- Sugiere cursos, artículos, eventos relevantes según perfil.
- Identifica gaps de conocimiento en la comunidad.
- Alimenta la decisión de qué talleres o paneles organizar.

#### Agente Scout
**Lo que hace:** Detecta candidatos para futuras generaciones.

- Analiza redes de los miembros actuales (LinkedIn público).
- Identifica perfiles que hacen match con el ADN de Tec Beyond.
- Te entrega una lista de posibles candidatos con contexto: "Esta persona está en la red de 3 miembros actuales, dirige empresa X, lleva Y años."

#### Agente Insights
**Lo que hace:** Genera inteligencia estratégica para el Consejo.

```
Ejemplo de reporte:

"En la comunidad de León:
 - 47 miembros mencionaron nearshoring en los últimos 3 meses
 - La vocación predominante es manufactura (38%) y comercio (27%)
 - Hay 12 miembros con capacidad de exportación que no se conocen entre sí
 - Recomendación: panel de nearshoring con los 3 miembros más experimentados"
```

- Reportes mensuales automáticos para el Consejo.
- Alertas cuando detecta patrones nuevos.
- Trayectorias por generación: cómo evolucionan los miembros con el tiempo.

---

### Piso 3: La Estructura Fractal (Nodos)

El tercer piso es lo que permite que esto escale de León a todo el país sin reinventar nada.

```
               CONSEJO CENTRAL
              (ve todo, decide todo)
                      │
         ┌────────────┼────────────┐
         │            │            │
       LEÓN        MORELIA     CHIHUAHUA ...
     (su admin)   (su admin)  (su admin)
         │            │            │
      miembros    miembros    miembros
```

**Reglas de juego:**

| Quién | Ve qué | Decide qué |
|---|---|---|
| **Consejo Central** (tú + consejo directivo) | Toda la red, todos los nodos | Reglas globales, expansión, valores |
| **Admin de nodo** (coordinador local) | Solo su nodo | Operación local, eventos locales |
| **Miembro premium local** | Su propio nodo | Su perfil, sus preferencias |
| **Miembro premium nacional** | Cruces entre nodos | Buscar en toda la red |

**Lo fractal:** Cada nodo replica exactamente la misma estructura. Lo que funciona en León, se copia en Morelia tal cual. No hay que diseñar nada nuevo — solo configurar el contexto local.

---

## Las instancias de HA

Horizons Architecture no es un producto que compras y ya. Es un **marco de pensamiento** que se configura para cada proyecto. Para Tec Beyond, HA opera en **6 dimensiones** que se trabajan en paralelo:

| Dimensión | Qué resuelve | Quién lo trabaja |
|---|---|---|
| **Legado** | ¿Qué queremos que sea esta comunidad en 5 años? | Consejo + HA |
| **Comunidad** | ¿Quiénes participan, cómo crecemos, quién falta? | Mario + Consejo |
| **Aprendizaje** | ¿Qué sabe la red, qué le falta, cómo lo compartimos? | Agente Contenidos + Consejo |
| **Tecnología** | ¿Qué agentes necesitamos, cómo se conectan? | HA |
| **Contexto** | ¿Qué pasa afuera que afecta a nuestros miembros? | Agente Insights + Consejo |
| **Proyectos** | ¿Qué acciones concretas lanzamos? | Todos |

**Lo importante:** Las 6 dimensiones se alimentan entre sí. Un insight del contexto genera un proyecto, que usa tecnología, que produce aprendizaje, que fortalece la comunidad, que avanza el legado. Es un ciclo.

### Cómo se aplica en la práctica

Cuando dices "quiero abrir Morelia", no empezamos de cero. Replicamos la instancia:

| Qué se hereda de León | Qué es nuevo en Morelia |
|---|---|
| Los 4 agentes de IA (ya entrenados) | Los miembros locales |
| Las reglas del sistema | El contexto regional (industrias, retos) |
| Los aprendizajes acumulados | El admin local y sus eventos |
| La plataforma completa | La configuración de permisos |

**Resultado:** Abrir una sede nueva toma una fracción del tiempo y costo del piloto original.

---

## Los modelos de negocio

Aquí hay varias opciones. No son excluyentes — se pueden combinar y ajustar según lo que funcione.

### Modelo A: Institucional (el Tec paga)

El Tec contrata el servicio de HA para su comunidad de egresados.

| Concepto | Descripción |
|---|---|
| **Quién paga** | El Tec, como servicio para Tec Beyond |
| **Qué incluye** | Plataforma completa, 4 agentes, soporte |
| **Ventaja** | Rápido de arrancar, sin fricción con miembros |
| **Riesgo** | Depende del presupuesto institucional |

**Mejor para:** El piloto. Arrancas sin pedirle dinero a nadie más que al Tec.

### Modelo B: Membresía (los miembros pagan)

Los miembros pagan una suscripción anual por pertenecer a la comunidad activa.

| Nivel | Qué incluye | Precio referencia |
|---|---|---|
| **Base** | Acceso a la comunidad, perfil en el sistema, contenido personalizado | Bajo |
| **Premium Local** | Todo lo anterior + matching de negocios dentro de tu campus | Medio |
| **Premium Nacional** | Todo lo anterior + matching entre todos los campus del país | Alto |

**Mejor para:** La fase de madurez. Una vez que los miembros ya vieron el valor, pagan por mantenerlo.

### Modelo C: Híbrido (el más probable)

Combina los dos anteriores:

```
FASE 1 — PILOTO (5-8 meses)
  El Tec paga el desarrollo y operación.
  Los miembros acceden gratis.
  Se demuestra valor.

FASE 2 — TRANSICIÓN (6-12 meses)
  El Tec sigue pagando la base.
  Se introduce membresía voluntaria para funciones premium.
  Se mide adopción real.

FASE 3 — SOSTENIBILIDAD
  Las membresías cubren la operación.
  El Tec paga solo por expansión a nuevas sedes.
  La plataforma se paga sola.
```

**La lógica:** No le pides dinero a la gente hasta que ya vio el valor. Primero das, después cobras.

### Modelo D: Participación (el más ambicioso)

Los miembros no solo pagan — **invierten**. Parte de su membresía se convierte en participación. Si la plataforma crece y genera valor, los Beyonders se benefician.

| Ventaja | Por qué importa |
|---|---|
| Alinea intereses | Todos quieren que la comunidad crezca |
| Genera compromiso | No es una cuota, es una inversión |
| Diferencia | Ningún programa de educación ejecutiva ofrece esto |

**Mejor para:** Una vez que el piloto funcione y haya confianza. No es para el día 1.

---

## Fuentes de ingreso (todas las que se pueden activar)

| Fuente | Cuándo se activa | Potencial |
|---|---|---|
| **Membresías** | Fase 2+ | Recurrente, escalable |
| **Matching de negocios** | Fase 1 (piloto) | Alto valor por conexión |
| **Capacitación premium** | Fase 2+ | Cursos especializados |
| **Eventos presenciales** | Fase 1 | Reunión de Generaciones y similares |
| **Licencia por sede** | Expansión | Cada campus nuevo paga su instancia |
| **Detección de candidatos** (Scout) | Fase 2+ | Valor para el programa de reclutamiento |

---

## Los pasos concretos

### Lo que ya está hecho

- [x] Propuesta estratégica completa
- [x] One-pager para Comité de IA
- [x] Arquitectura técnica diseñada
- [x] Bot de WhatsApp operando (~75 miembros)
- [x] Reunión de alineación (4 de febrero)
- [x] Presentación para Víctor Gutiérrez
- [x] Presentación para ti (este documento)

### Lo que sigue

| Paso | Qué | Quién | Cuándo |
|---|---|---|---|
| **1** | Tú presentas al Consejo | Mario | **25 de febrero** |
| **2** | El Comité de IA hace preguntas a HA | Comité + Edgar | Tras presentación |
| **3** | El Comité decide | Comité de IA | Marzo |
| **4** | Sesión de descubrimiento (2-3 hrs) | Mario + HA | Tras aprobación |
| **5** | Cotización cerrada | HA | 1 semana después |
| **6** | Arranca piloto León | Todos | Abril-Mayo |
| **7** | Reunión de Generaciones (presentar visión) | Mario + Edgar | **17 de abril** |

### Qué necesitas para la presentación del 25

1. **Este documento** como referencia tuya (no es para presentar, es para que tú lo tengas claro).
2. **El one-pager** — es lo que va al Comité de IA.
3. **La propuesta completa** — por si quieren profundizar.
4. **Tu narrativa** — la historia que tú quieres contar. HA te da las herramientas, pero la visión de comunidad es tuya.

---

## Lo que necesitas tener claro para presentar

Cuando el Consejo pregunte, estas son las respuestas clave:

**"¿Cuánto cuesta?"**
→ Se define en la sesión de descubrimiento. Lo que sabemos: inversión inicial + operación mensual + costo marginal por sede nueva. El piloto es la inversión mayor; cada sede nueva cuesta una fracción.

**"¿De quién son los datos?"**
→ De Tec Beyond. 100%. HA construye y opera la plataforma, pero no es dueño de nada de lo que fluye por ella. Si cambian de proveedor, los datos y la comunidad quedan intactos.

**"¿Qué pasa con el conflicto de interés de Edgar?"**
→ Edgar se retira del Comité de IA que toma la decisión. No tiene voto. HA ya está autorizada como proveedor del Tec. La decisión la toma el Comité, no el Consejo pleno.

**"¿Por qué HA y no otro proveedor?"**
→ Porque HA conoce el negocio (está dentro del ecosistema), tiene la metodología fractal que permite escalar, y es startup del Tec — su éxito es nuestro éxito.

**"¿Cuánto tarda?"**
→ Piloto en León: 5-8 meses. Cada sede adicional: una fracción de ese tiempo.

**"¿Cómo sabemos que funciona?"**
→ Métricas claras: 70% de miembros activos mensuales, 50+ matches en 6 meses, NPS >40, 90% de renovación.

---

## En resumen

```
AHORA                    MARZO                    ABRIL - NOVIEMBRE
  │                        │                           │
  ▼                        ▼                           ▼
Presentas                Aprobación                Piloto León
al Consejo               + Descubrimiento          ~300 miembros
(25 feb)                 + Cotización cerrada       4 agentes IA

                                                        │
                                                        ▼
                                                    2027+
                                                    Expansión
                                                    sede por sede
                                                    (costo marginal)
```

La red ya existe. La gente ya se conoce. Lo que falta es el sistema que haga que todo eso trabaje activamente para ellos — todos los días, no solo cuando coinciden en un evento.

Eso es lo que vamos a construir juntos.

---

**Horizons Architecture Systems**
Edgar Barroso
edgar@horizonsarchitecture.ai

Febrero 2026
