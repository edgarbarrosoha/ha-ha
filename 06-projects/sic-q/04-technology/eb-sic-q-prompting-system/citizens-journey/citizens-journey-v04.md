---
dimension: technology
project: sic-q
type: citizens-journey
version: v04
date: 2026-02-07
parent: "[[04-technology-sic-q]]"
supersedes: "[[ascii-citizens-journey-v.03]]"
related:
  - "[[reporte-simplificacion-citizens-journey]]"
  - "[[mermaid-citizens-journey-v.04]]"
  - "[[sistema-de-selección-de-propuestas-ciudadanas]]"
---

# Citizens Journey v04 — Experiencia Ciudadana Simplificada

> SIC-Q: Sistema de Inteligencia Colectiva de Querétaro
> 5 fases ciudadanas + backend separado

**Cambios aplicados desde v03:** Ver [[reporte-simplificacion-citizens-journey]] para el análisis completo de los 12 cambios.

---

## Resumen de la arquitectura

```
EXPERIENCIA DEL CIUDADANO (5 fases):

  1. Co-diseño  →  2. Descubrimiento  →  3. Participar  →  4. Seguimiento  →  5. Respuesta
                                                                                      │
                                                                                      └──→ Volver

BACKEND (invisible para el ciudadano):

  Base de datos unificada → Motor de IC → Análisis HA → Agente Institucional → Gobierno
```

### Dos acciones + una capacidad transversal

```
ACCIONES:
  PROPONER   — "Tengo una idea" → requiere registro verificado
  APOYAR     — "Me gusta esta idea" → requiere registro ligero

TRANSVERSAL:
  PLATICAR   — Siempre disponible. No es un journey, es lo que el agente hace naturalmente.
               Si surge una idea, transiciona a Proponer.
```

### Tres niveles de acceso (registro progresivo)

```
┌────────────────────┬───────────────────────────────┬──────────────────────────┐
│ NIVEL              │ QUÉ PUEDE HACER               │ QUÉ NECESITA             │
├────────────────────┼───────────────────────────────┼──────────────────────────┤
│ Visitante          │ Explorar, platicar con agente │ Nada                     │
│ Participante       │ + Apoyar (votar) propuestas   │ Celular + código postal  │
│ Ciudadano verificado│ + Crear propuestas            │ Celular + CURP + CP      │
└────────────────────┴───────────────────────────────┴──────────────────────────┘

La verificación INE es opcional (badge "verificado") y solo obligatoria si una
propuesta llega a deliberación institucional.
```

---

## FASE 1: CO-DISEÑO

**Objetivo:** Dar legitimidad al sistema desde su concepción. El SIC-Q se construye CON los ciudadanos, no PARA ellos.

**Pregunta central:** ¿Cómo debería ser el SIC-Q?

**Duración:** 6 semanas

### 3 actividades (simplificado de 4 en v03)

#### Actividad 1: Talleres de Co-Diseño (presencial)

- **2 talleres** (reducido de 3 en v03)
- Taller 1: 32 personas de sectores organizados (gobierno + academia + sociedad civil)
- Taller 2: 20 ciudadanía abierta + 20 sectores mezclados
- Cada taller: 3 horas con 6 mesas temáticas por dimensión HA

**Estructura de cada taller:**
1. Presentación del modelo (30 min)
2. Trabajo en mesas por dimensión HA (90 min)
3. Preguntas guía: ¿Qué falta? ¿Qué puede salir mal? ¿Qué haría que la gente NO use esto?
4. Plenaria de hallazgos (45 min)
5. Cierre y compromisos (15 min)

#### Actividad 2: Conversaciones con Agente IA (digital)

- WhatsApp/web, 15 min por conversación
- Disponible 24/7 durante 2 semanas
- Incluye preguntas de validación (antes separadas en encuesta)
- 6 preguntas por dimensión HA + preferencias de diseño
- Meta: 300-500 conversaciones

*Nota: La encuesta separada se eliminó. Las mismas preguntas se integran en la conversación con IA. Se conserva una encuesta breve (3 min, web) como respaldo para quienes no quieran conversar.*

#### Actividad 3: Mesa de Factibilidad Técnica (presencial)

- **1 sesión combinada de 3 horas** (reducido de 2 sesiones en v03)
- Todos los perfiles técnicos juntos: TI gobierno, desarrolladores, IA, UX, jurídico, seguridad
- Agenda: Infraestructura + IA + Seguridad + Legal en una sola sesión

**Entregable del co-diseño:**
- Modelo SIC-Q validado
- Especificación técnica preliminar
- Lista de riesgos y restricciones
- Registro de aportes con trazabilidad

---

## FASE 2: DESCUBRIMIENTO

**Objetivo:** Que los ciudadanos se enteren del SIC-Q y lleguen al sistema.

### Canales digitales

```
┌─────────────────────┐
│  WhatsApp            │  Canal principal. +52 442 SIC-QQQQ
│  +52 442 SIC-Q       │  El ciudadano manda un mensaje y el agente responde.
└─────────────────────┘
┌─────────────────────┐
│  Sitio web           │  sicq.queretaro.gob.mx
│                      │  Interfaz web con el mismo agente.
└─────────────────────┘
┌─────────────────────┐
│  Redes sociales      │  @SICQ_Queretaro
│                      │  Contenido que lleva a WhatsApp o web.
└─────────────────────┘
```

### Canales presenciales

```
┌─────────────────────┐
│  Talleres            │  En centros comunitarios, escuelas, mercados.
│  comunitarios        │  Facilitador + kiosco digital.
└─────────────────────┘
┌─────────────────────┐
│  Módulos en plazas   │  Kioscos digitales con acceso directo al agente.
│                      │  Para personas sin smartphone.
└─────────────────────┘
┌─────────────────────┐
│  Eventos             │  Charlas y presentaciones del SIC-Q.
│  presenciales        │
└─────────────────────┘
```

Todos los canales llevan al mismo lugar: el Agente SIC-Q.

---

## FASE 3: PARTICIPAR

**Objetivo:** El ciudadano llega, elige qué hacer, y lo hace. Una sola fase fluida.

Esta fase fusiona lo que en v03 eran: Primer Contacto (3), Invitación (3B), Orientación (4) y Participación (5).

### Paso 1: Bienvenida del Agente

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE SIC-Q                                                           │
│                                                                         │
│  "Hola, soy el asistente de Inteligencia Colectiva de Querétaro.       │
│   Aquí los ciudadanos proponen ideas, apoyan las que les importan,     │
│   y el gobierno responde. Todo transparente."                          │
│                                                                         │
│   ¿Qué te gustaría hacer?                                              │
│                                                                         │
│   ┌─────────────────────────┐    ┌─────────────────────────┐           │
│   │  Tengo una idea         │    │  Quiero ver ideas       │           │
│   │  para Querétaro         │    │  de otros               │           │
│   └─────────────────────────┘    └─────────────────────────┘           │
│                                                                         │
│   O escríbeme lo que quieras y te guío.                                │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Nota de diseño:** Solo 2 opciones visibles + texto libre. Si el ciudadano escribe algo libre ("quiero saber sobre empleos en mi zona"), el agente interpreta la intención y responde directamente. No necesita elegir una categoría primero.

### Paso 2A: Flujo PROPONER ("Tengo una idea")

**Requiere:** Registro de Ciudadano verificado (celular + CURP + CP)
**Tiempo:** 3-5 minutos
**Resultado:** Propuesta publicada y lista para recibir apoyos

#### Registro (solo si no tiene cuenta)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: Para publicar tu idea necesito verificar que eres ciudadano   │
│  de Querétaro. Tus datos están protegidos.                             │
│                                                                         │
│  PASO 1: Celular                                                       │
│  ┌──────────────────────────────────────────────┐                      │
│  │ +52 442 123 4567                              │                      │
│  └──────────────────────────────────────────────┘                      │
│                                                                         │
│  PASO 2: CURP                                                          │
│  ┌──────────────────────────────────────────────┐                      │
│  │ XXXX######XXXXXX##                            │                      │
│  └──────────────────────────────────────────────┘                      │
│  Solo para verificar identidad. No se comparte.                        │
│                                                                         │
│  PASO 3: Código postal                                                 │
│  ┌──────────────────────────────────────────────┐                      │
│  │ 76230                                         │                      │
│  └──────────────────────────────────────────────┘                      │
│  Para mostrarte propuestas de tu zona.                                 │
│                                                                         │
│  PASO 4: Seudónimo (nombre público)                                    │
│  ┌──────────────────────────────────────────────┐                      │
│  │ @CiudadanoVerde                               │                      │
│  └──────────────────────────────────────────────┘                      │
│  Este nombre ven otros. Tu nombre real no aparece.                     │
│                                                                         │
│                          [ Crear cuenta ]                               │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Orientación temática

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: ¡Qué bueno que quieres proponer algo!                        │
│          ¿Sobre qué tema es tu idea?                                   │
│                                                                         │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐      │
│  │ Movilidad        │  │ Salud            │  │ Educación        │      │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘      │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐      │
│  │ Medio ambiente   │  │ Seguridad        │  │ Economía y       │      │
│  │                  │  │                  │  │ empleo           │      │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘      │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐      │
│  │ Agua y servicios │  │ Gobierno digital │  │ Otro tema        │      │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Diálogo guiado con IA

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: Perfecto, movilidad. Cuéntame tu idea con tus propias         │
│          palabras. No te preocupes por el formato, yo te ayudo          │
│          a estructurarla después.                                      │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  CIUDADANO: "Pues mira, yo vivo por el Tec y trabajo en el centro,    │
│  y no hay forma segura de ir en bici. Estaría bien que hubiera una    │
│  ciclovía por Universidad porque muchos la usaríamos."                │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  AGENTE: Entiendo. Quieres una ciclovía en Av. Universidad para       │
│          conectar la zona del Tec con el Centro.                       │
│                                                                         │
│          Te hago algunas preguntas para fortalecer tu propuesta:       │
│                                                                         │
│          1. ¿Por qué crees que es importante?                          │
│          2. ¿Aproximadamente qué tramo sugieres?                      │
│          3. ¿A quiénes beneficiaría principalmente?                   │
│                                                                         │
│  (El agente hace las preguntas una por una, conversacionalmente)      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Propuesta estructurada automáticamente

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: Con lo que me contaste, armé tu propuesta así:                │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │                                                                 │   │
│  │  PROPUESTA                                                      │   │
│  │                                                                 │   │
│  │  Título: "Ciclovía protegida en Av. Universidad"               │   │
│  │                                                                 │   │
│  │  Descripción:                                                   │   │
│  │  "Construir 3 km de ciclovía protegida desde el Tec de         │   │
│  │   Monterrey hasta el Centro Histórico, para ofrecer una        │   │
│  │   alternativa segura de movilidad que reduzca tráfico          │   │
│  │   y contaminación."                                            │   │
│  │                                                                 │   │
│  │  Beneficiarios: Estudiantes, trabajadores, ciclistas urbanos   │   │
│  │  Problema: Falta de infraestructura segura para ciclistas      │   │
│  │  Ubicación: Av. Universidad, Tec → Centro Histórico           │   │
│  │  Tema: Movilidad > Infraestructura ciclista                    │   │
│  │                                                                 │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
│  ¿Está bien así o quieres cambiar algo?                                │
│                                                                         │
│  ┌─────────────────────────┐    ┌─────────────────────────┐           │
│  │  Editar                 │    │  Publicar propuesta     │           │
│  └─────────────────────────┘    └─────────────────────────┘           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Propuestas similares (información lateral, NO bloqueante)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: ¡Tu propuesta está publicada!                                 │
│                                                                         │
│  Tema: Movilidad > Infraestructura ciclista                            │
│  Tu propuesta se agrupó con otras 47 propuestas sobre                  │
│  infraestructura ciclista. Esto ayuda a que el gobierno vea            │
│  que hay una demanda consistente.                                      │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  Otras personas han propuesto cosas parecidas:                         │
│                                                                         │
│  • "Más ciclovías en Querétaro" — 234 apoyos (72% similar)            │
│  • "Biciestacionamiento en el centro" — 89 apoyos (45% similar)       │
│                                                                         │
│  ¿Quieres unir fuerzas con alguna?                                     │
│  (Tu propuesta ya está publicada independientemente)                   │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  ¿Qué sigue?                                                          │
│  Tu propuesta ahora puede recibir apoyos de otros ciudadanos.         │
│  Cuando sea seleccionada, el gobierno la revisa y responde.            │
│                                                                         │
│  ┌─────────────────────────┐    ┌─────────────────────────┐           │
│  │  Compartir propuesta    │    │  Ir al inicio           │           │
│  └─────────────────────────┘    └─────────────────────────┘           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Cambio clave vs v03:** Los duplicados se muestran DESPUÉS de publicar, como información útil, no como paso bloqueante antes de publicar. El ciudadano no tiene que elegir "publicar como nueva" vs "sumar a existente" antes de que su propuesta exista.

---

### Paso 2B: Flujo APOYAR ("Quiero ver ideas de otros")

**Requiere:** Registro de Participante (celular + código postal)
**Tiempo:** 2-10 minutos (según exploración)
**Resultado:** Apoyos que señalan prioridades ciudadanas

#### Registro ligero (solo si no tiene cuenta)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: Para apoyar ideas solo necesito tu celular y código postal.   │
│                                                                         │
│  Celular: +52 442 ___________                                          │
│  Código postal: _____                                                  │
│  Seudónimo: ____________ (nombre que verán otros)                      │
│                                                                         │
│                          [ Listo ]                                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Nota:** Sin CURP, sin email, sin verificación INE. Un minuto y ya puede votar.

#### Explorar propuestas

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: ¿Cómo prefieres explorar?                                    │
│                                                                         │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Temas que me interesan        Filtra por categoría             │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Las más populares             Qué está moviendo a Querétaro   │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Cerca de mí                   Propuestas de mi zona           │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│  ┌─────────────────────────────────────────────────────────────────┐   │
│  │  Las más recientes             Ideas nuevas que necesitan apoyo │   │
│  └─────────────────────────────────────────────────────────────────┘   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Votar (interfaz tipo swipe)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  CICLOVÍA PROTEGIDA EN AV. UNIVERSIDAD                                 │
│                                                                         │
│  "Construir 3 km de ciclovía protegida desde el Tec de Monterrey      │
│   hasta el Centro Histórico"                                           │
│                                                                         │
│  @CiudadanoVerde · hace 3 días                                        │
│                                                                         │
│  ██████████████████████████████████████░░░░░░░░░░  847 apoyos         │
│                                                                         │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐     │
│  │  Apoyar          │  │  Pasar           │  │  Saltar          │     │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘

                              │
                              │ [Apoya]
                              ▼

┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  ¡Apoyaste esta propuesta!                                             │
│                                                                         │
│  ¿Quieres compartirla para que más gente la conozca?                  │
│                                                                         │
│  ┌──────────────────┐  ┌──────────────────┐                            │
│  │  Compartir        │  │  Siguiente       │                            │
│  │  (WhatsApp/redes) │  │  propuesta       │                            │
│  └──────────────────┘  └──────────────────┘                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Cambio vs v03:** "Compartir" es una opción dentro de Apoyar, no un journey separado llamado "Transformar". No hay enlace de tracking personal, ni tablas de "transformadores", ni badges. Si el ciudadano comparte, bien. Si no, bien también.

#### Resumen de sesión (sin gamificación)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: ¡Gracias por participar!                                      │
│                                                                         │
│  Hoy apoyaste 8 propuestas.                                           │
│  2 de ellas están cerca de pasar a revisión del gobierno.              │
│                                                                         │
│  Te avisaremos cuando haya novedades sobre las propuestas              │
│  que apoyaste.                                                         │
│                                                                         │
│  ┌──────────────────┐  ┌──────────────────┐                            │
│  │  Ver más          │  │  Ir al inicio    │                            │
│  │  propuestas       │  │                  │                            │
│  └──────────────────┘  └──────────────────┘                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Cambio vs v03:** Sin puntos, sin rachas, sin niveles ("Ciudadano Activo"), sin badges. El valor de participar es que tu voz cuente, no acumular puntos.

---

### Capacidad transversal: PLATICAR

**Requiere:** Nada (disponible para Visitantes)
**Canales:** Web + WhatsApp
**Siempre disponible:** No es un flujo al que se "entra". El agente siempre puede platicar.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  El agente SIC-Q puede responder sobre:                                │
│                                                                         │
│  • Proyectos y obras en tu zona                                        │
│  • Oportunidades de negocio por municipio                              │
│  • Empleos demandados para estudiantes                                 │
│  • Datos sociodemográficos                                             │
│  • Planes de gobierno y su estatus                                     │
│  • Lo que le gusta a la gente de cada colonia                          │
│  • Cualquier pregunta sobre Querétaro                                  │
│                                                                         │
│  El agente también puede hacer preguntas al ciudadano                  │
│  para conocer mejor a la comunidad (escucha activa).                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### Ejemplo: Transición natural de platicar a proponer

```
CIUDADANO: "¿Qué proyectos hay en mi colonia?"

AGENTE: En Jurica (76230) hay 3 proyectos activos:
        1. Rehabilitación de parque vecinal (abril)
        2. Luminarias LED (mayo)
        3. Bacheo Circuito Jurica (junio)
        ¿Quieres más detalles de alguno?

CIUDADANO: "La verdad lo que hace falta es más transporte público,
            no hay una ruta que conecte bien con el centro"

AGENTE: Eso suena como una idea que podrías proponer en el SIC-Q.
        Si quieres, te ayudo a estructurarla y publicarla para
        que otros ciudadanos la apoyen.
        ¿Te gustaría?

        [ Sí, proponer ]   [ No, solo platicaba ]
```

**Cambio vs v03:** En v03 esto era un journey separado con su propio flujo de entrada. Ahora la transición de platicar a proponer es orgánica — el agente detecta la intención y ofrece, sin forzar al ciudadano a "cambiar de modo".

#### WhatsApp

```
┌─────────────────────────────────────────────────────────────────────────┐
│  WhatsApp: +52 442 SIC-QQQQ                                           │
│  ──────────────────────────────────────────────────────────────        │
│                                                                         │
│                              "Hola, quiero saber qué proyectos        │
│                               hay en mi zona"                          │
│                                                                         │
│  SIC-Q Querétaro:                                                      │
│  ¡Hola! Para darte información de tu zona, ¿me compartes              │
│  tu código postal?                                                     │
│                                                                         │
│                              "76230"                                   │
│                                                                         │
│  SIC-Q Querétaro:                                                      │
│  En Jurica (76230) hay 3 proyectos activos:                            │
│  1. Rehabilitación de parque vecinal (abril)                           │
│  2. Luminarias LED (mayo)                                              │
│  3. Bacheo Circuito Jurica (junio)                                     │
│  ¿Quieres más detalles? Solo responde con el número.                  │
│                                                                         │
│  Comandos rápidos:                                                     │
│  PROPONER — Crear una propuesta                                        │
│  TENDENCIAS — Ver las propuestas más populares                         │
│  MIS PROPUESTAS — Ver estatus de tus propuestas                       │
│  AYUDA — Ver todos los comandos                                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## FASE 4: SEGUIMIENTO

**Objetivo:** El ciudadano sabe en todo momento qué pasa con su participación. Sin "hoyo negro".

### Notificaciones al autor de una propuesta

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  NOTIFICACIONES (vía WhatsApp, web, o ambos)                           │
│                                                                         │
│  "Tu propuesta 'Ciclovía en Av. Universidad' recibió 23 apoyos        │
│   nuevos hoy. Va en la posición #18 de 1,243 propuestas activas."     │
│                                                                         │
│  "¡Tu propuesta subió al #12! Quedan 30 días en el ciclo."            │
│                                                                         │
│  "Tu propuesta fue seleccionada para revisión del gobierno."           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Vista de seguimiento de una propuesta

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  TU PROPUESTA                                                          │
│  "Ciclovía protegida en Av. Universidad"                               │
│  Zona: Querétaro capital                                               │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  CICLO ACTUAL: Piloto (Feb - Jul 2026)                                 │
│  Días restantes: 47                                                    │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  APOYOS                                                                │
│  ██████████████████████████████████████████████░░░  923 apoyos        │
│  Posición: #18 de 1,243 propuestas activas                             │
│  Pasan las top 30                                                      │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  ESTATUS: Si el ciclo cerrara hoy, tu propuesta PASARÍA                │
│  a revisión del gobierno.                                              │
│                                                                         │
│  [ Compartir ]    [ Editar propuesta ]                                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Notificaciones al que apoya

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  "La propuesta 'Ciclovía en Av. Universidad' que apoyaste              │
│   fue seleccionada para revisión del gobierno."                        │
│                                                                         │
│  "El gobierno respondió sobre 'Bebederos en parques'.                  │
│   Resultado: Aprobada para implementación."                            │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## FASE 5: RESPUESTA

**Objetivo:** Cerrar el ciclo. Que el ciudadano sepa qué pasó con su voz.

### Selección de propuestas (piloto)

Para el piloto, el sistema de selección es simple:

- **1 ciclo** de 4-6 meses
- **1 vía:** Las propuestas más apoyadas (top 20-30) pasan a revisión del gobierno
- **Transparencia:** Los rankings son públicos en todo momento
- **Compromiso:** Respuesta del gobierno en máximo 60 días después de la selección

*Nota: Las Vías 2 (calidad de formulación) y 3 (cuota territorial) del documento de selección de propuestas se implementan post-piloto.*

### Respuesta institucional

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  RESPUESTA DEL GOBIERNO                                                │
│                                                                         │
│  "Ciclovía protegida en Av. Universidad"                               │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  Revisada por: Secretaría de Movilidad                                 │
│  Fecha de respuesta: 15 de agosto de 2026                              │
│                                                                         │
│  Resultado: APROBADA PARA ESTUDIO DE FACTIBILIDAD                     │
│                                                                         │
│  "La Secretaría de Movilidad ha incorporado esta propuesta            │
│   al estudio de factibilidad de infraestructura ciclista              │
│   para 2027. El tramo Tec-Centro será evaluado junto con              │
│   3 rutas prioritarias identificadas por el Plan QRO2050.             │
│   Tiempo estimado del estudio: 4 meses."                              │
│                                                                         │
│  Responsable: Ing. María López, Dir. de Movilidad                     │
│  Siguiente actualización: Diciembre 2026                               │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  Posibles respuestas:                                                  │
│  • Aprobada para implementación                                        │
│  • Integrada al Plan QRO 2030                                         │
│  • En estudio de factibilidad (con timeline)                           │
│  • No viable (con explicación detallada de razones)                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Retroalimentación a propuestas que no pasan

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: Tu propuesta "Más alumbrado en Colón" terminó el ciclo       │
│  en la posición #45. No alcanzó las top 30 esta vez.                  │
│                                                                         │
│  Tu propuesta recibió 312 apoyos. Eso no es poco.                     │
│                                                                         │
│  Sugerencias para la próxima vez:                                      │
│  • Comparte tu propuesta en redes para que más personas la conozcan   │
│  • Detalla más la ubicación específica donde quieres el alumbrado     │
│                                                                         │
│  ¿Quieres mantener tu propuesta activa para el siguiente ciclo?       │
│                                                                         │
│  [ Sí, mantener ]    [ Archivar ]                                      │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Invitación a seguir participando

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  AGENTE: El gobierno respondió sobre tu propuesta.                     │
│                                                                         │
│  Gracias por participar. Cada propuesta fortalece la inteligencia     │
│  colectiva de Querétaro.                                               │
│                                                                         │
│  ¿Qué quieres hacer ahora?                                            │
│                                                                         │
│  [ Proponer otra idea ]    [ Ver propuestas para apoyar ]              │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## BACKEND: Procesamiento y Gobierno

> Esta sección describe lo que pasa entre la participación del ciudadano y la respuesta del gobierno. El ciudadano no ve estos procesos; solo ve el resultado (Fase 4: Seguimiento y Fase 5: Respuesta).

### Base de datos unificada

```
┌─────────────────────────────────────────────────────────────────────────┐
│                     BASE DE DATOS UNIFICADA                            │
│                                                                         │
│  ┌─────────────────────────────┐  ┌─────────────────────────────┐     │
│  │  CAPA CIUDADANA             │  │  CAPA CONTEXTUAL            │     │
│  │                             │  │                             │     │
│  │  • Propuestas               │  │  • Plan QRO2050             │     │
│  │  • Apoyos (votos)           │  │  • Datos INEGI              │     │
│  │  • Comentarios              │  │  • Encuestas previas        │     │
│  │  • Conversaciones           │  │  • Presupuestos públicos    │     │
│  │  • Perfiles de usuarios     │  │  • Reportes sectoriales     │     │
│  │  • Clusters semánticos      │  │  • Planes municipales       │     │
│  │                             │  │                             │     │
│  └──────────────┬──────────────┘  └──────────────┬──────────────┘     │
│                 │                                 │                     │
│                 └────────────┬────────────────────┘                     │
│                              │                                         │
│                              ▼                                         │
│                    Ambas capas alimentan                                │
│                    el Motor de IC                                       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Motor de Inteligencia Colectiva

```
┌─────────────────────────────────────────────────────────────────────────┐
│                  MOTOR DE INTELIGENCIA COLECTIVA                       │
│                                                                         │
│  PROCESAMIENTO SEMÁNTICO                                               │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐       │
│  │ Clustering       │  │ Detección de    │  │ Síntesis de     │       │
│  │ semántico        │  │ consensos       │  │ propuestas      │       │
│  │                  │  │ emergentes      │  │ similares       │       │
│  │ Agrupa ideas     │  │                 │  │                 │       │
│  │ similares en     │  │ Identifica      │  │ Fusiona         │       │
│  │ clusters         │  │ acuerdos        │  │ duplicados      │       │
│  │ temáticos        │  │ ciudadanos      │  │ automáticamente │       │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘       │
│                                                                         │
│  ANÁLISIS HORIZONS ARCHITECTURE                                        │
│  ┌─────────┐ ┌─────────┐ ┌───────────┐ ┌──────────┐ ┌────────┐ ┌────────┐
│  │ Legado  │ │Comunidad│ │Aprendizaje│ │Tecnología│ │Contexto│ │Proyectos│
│  └─────────┘ └─────────┘ └───────────┘ └──────────┘ └────────┘ └────────┘
│  Cada propuesta evaluada en 6 dimensiones.                             │
│  Proyección temporal: corto, mediano y largo plazo.                    │
│                                                                         │
│  TENDENCIAS                                                            │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐       │
│  │ Prioridades     │  │ Tendencias      │  │ Patrones        │       │
│  │ colectivas      │  │ temporales      │  │ geográficos     │       │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘       │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Agente SIC-Q Institucional

```
┌─────────────────────────────────────────────────────────────────────────┐
│               AGENTE SIC-Q INSTITUCIONAL                               │
│                                                                         │
│  El mismo agente, diferentes niveles de acceso                         │
│                                                                         │
│  NIVEL 1: CIUDADANO                                                    │
│  Propuestas públicas, datos generales, estatus, info de su zona        │
│                                                                         │
│  NIVEL 2: SERVIDOR PÚBLICO                                             │
│  + Métricas de participación, análisis por sector, comparativos       │
│                                                                         │
│  NIVEL 3: TOMADOR DE DECISIONES                                        │
│  Gobernador, Instituto del Futuro, Secretarías, Consejos              │
│  + Reportes de IC, recomendaciones, factibilidad vs planeación        │
│                                                                         │
│  ─────────────────────────────────────────────────────────────         │
│                                                                         │
│  Ejemplo de consulta:                                                  │
│                                                                         │
│  GOBERNADOR: "¿Cuáles son las 5 demandas ciudadanas más urgentes      │
│  que son factibles y están alineadas con el Plan QRO2050?"             │
│                                                                         │
│  AGENTE: Basado en 4,832 propuestas:                                   │
│  #1 Infraestructura ciclista — 47 propuestas, 12,340 apoyos           │
│  #2 Agua y abastecimiento — 89 propuestas, 28,456 apoyos             │
│  ...                                                                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

### Gobierno y Canalización

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    GOBIERNO Y CANALIZACIÓN                             │
│                                                                         │
│  ┌─────────────────────┐                                               │
│  │ SECRETARÍA DE        │  Recibe análisis del agente.                 │
│  │ PLANEACIÓN           │  Evalúa viabilidad técnica.                  │
│  │                      │  Asigna presupuesto.                         │
│  │                      │  Genera respuestas oficiales.                │
│  └──────────┬───────────┘                                              │
│             │                                                           │
│             ▼                                                           │
│  ┌─────────────────────┐                                               │
│  │ INSTITUTO DEL        │  Órgano autónomo transexenal.               │
│  │ FUTURO               │  Integra propuestas a planeación             │
│  │                      │  de largo plazo.                             │
│  │                      │  Garantiza continuidad del sistema.          │
│  └──────────┬───────────┘                                              │
│             │                                                           │
│             ▼                                                           │
│  ┌─────────────────────┐                                               │
│  │ CONSEJOS CIUDADANOS  │  Propuestas canalizadas por tema.            │
│  │ TEMÁTICOS            │  Evaluación ciudadana especializada.         │
│  └─────────────────────┘                                               │
│                                                                         │
│  Las tres instancias se coordinan. La respuesta                        │
│  al ciudadano se genera una vez tomada la decisión.                   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## Resumen de cambios vs v03

| Aspecto | v03 | v04 |
|---------|-----|-----|
| Fases ciudadanas | 11 | 5 |
| Journeys | 4 (Proponer, Impulsar, Transformar, Conversar) | 2 acciones (Proponer, Apoyar) + Platicar transversal |
| Registro | 6 datos + INE obligatoria | Progresivo: 3 niveles (nada / celular+CP / celular+CURP+CP) |
| Bases de datos | 2 separadas | 1 unificada con 2 capas |
| Fase "Invitación" (3B) | Sí | Eliminada |
| Backend | Mezclado en el journey (fases 6-9) | Separado en su propia sección |
| Co-diseño | 4 actividades, 9 semanas | 3 actividades, 6 semanas |
| Gamificación | Puntos, rachas, badges, tabla de transformadores | Eliminada |
| Duplicados | Paso bloqueante antes de publicar | Info lateral después de publicar |
| Menú del agente | 4 opciones (Proponer, Impulsar, Transformar, Conversar) | 2 botones + texto libre |
| Selección (piloto) | 3 vías, 3 ciclos/año, 60 propuestas/ciclo | 1 vía (top N por apoyo), 1 ciclo piloto |
| Verificación INE | Obligatoria en registro | Opcional (badge). Obligatoria solo si propuesta llega a deliberación |

---

## Connections
- [[04-technology-sic-q]]
- [[reporte-simplificacion-citizens-journey]]
- [[mermaid-citizens-journey-v.04]]
- [[ascii-citizens-journey-v.03]]
- [[posibles-simplificaciones]]
- [[sistema-de-selección-de-propuestas-ciudadanas]]
