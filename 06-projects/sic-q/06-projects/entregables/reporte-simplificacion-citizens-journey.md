---
dimension: projects
project: sic-q
type: analysis-report
status: active
date: 2026-02-07
parent: "[[06-projects-sic-q]]"
related:
  - "[[ascii-citizens-journey-v.03]]"
  - "[[mermaid-citizens-journey-v.03]]"
  - "[[posibles-simplificaciones]]"
  - "[[sistema-de-selección-de-propuestas-ciudadanas]]"
  - "[[metodología-proceso-codiseño-sic-q-v.01]]"
---
 # Reporte de Simplificación del Citizens Journey — SIC-Q

> Análisis completo de los cambios necesarios para pasar del diseño v03 a una versión implementable del Sistema de Inteligencia Colectiva de Querétaro.

**Fecha:** 2026-02-07
**Dimensiones HA activadas:** Technology + Community + Projects
**Horizonte temporal:** Presente (rediseño) → Futuro cercano (piloto)
**Documentos analizados:** 7 archivos del citizens journey (v01, v02, v03, simplificaciones, mermaid, sistema de selección, metodología de co-diseño)

---

## 1. Diagnóstico general

El citizens journey v03 fue diseñado para comunicar la visión completa del SIC-Q al gobierno. Cumplió ese propósito. Pero la distancia entre ese documento y un sistema implementable es grande. El diseño actual sufre de tres problemas estructurales:

1. **Confunde la experiencia del ciudadano con la arquitectura técnica.** Las fases 6 a 9 (Base de Conocimiento, Sensemaking, Agente Institucional, Gobierno) no son pasos que el ciudadano vive. Son infraestructura invisible. Presentarlas como "fases del journey" genera un diagrama que parece completo pero que nadie puede construir como producto.

2. **Multiplica distinciones que el ciudadano no necesita.** Cuatro tipos de participación (Proponer, Impulsar, Transformar, Conversar), dos modos de entrada (Explorar vs. Participar), dos bases de datos separadas, once fases secuenciales. Cada distinción agrega fricción cognitiva y complejidad de desarrollo sin agregar valor proporcional.

3. **Exige demasiado antes de dar algo a cambio.** El registro pide 6 datos personales + verificación oficial antes de que el ciudadano pueda hacer cualquier cosa. Para contexto: las plataformas de participación ciudadana más exitosas del mundo (vTaiwan, Decidim Barcelona, Better Reykjavik) permiten participación anónima o con registro mínimo.

---

## 2. Inventario completo de cambios

### 2.1 Cambios en la estructura de fases

#### ELIMINAR: Fase 3B "Invitación"

**Ubicación actual:** Entre Fase 3 (Primer Contacto) y Fase 4 (Orientación)
**Qué hace:** El agente pregunta "¿Te gustaría que tu voz cuente?" después de que el ciudadano explora.

**Por qué eliminar:**
- Un call-to-action no es una fase del sistema. Es un elemento de interfaz que debe estar omnipresente, no encapsulado en un paso discreto.
- Crea un momento artificial de "conversión" que no existe en la experiencia real. Si alguien está leyendo propuestas y quiere votar, el botón de "Apoyar" debería estar ahí. No necesita que un agente interrumpa para preguntar si quiere participar.

**Acción:** Integrar el CTA como elemento persistente en la interfaz de exploración. El botón "Participar" siempre visible, sin fase intermedia.

---

#### ELIMINAR: Fases 6-9 como fases del journey ciudadano

**Fases afectadas:**
- Fase 6: Base de Conocimiento Unificada
- Fase 7: Motor de Inteligencia Colectiva (Sensemaking)
- Fase 8: Agente SIC-Q Institucional
- Fase 9: Gobierno y Canalización

**Por qué eliminar del journey:**
Estas no son experiencias del ciudadano. Son componentes técnicos que procesan datos entre la participación y la respuesta. Incluirlas en el journey del ciudadano es como incluir "el servidor procesa tu pedido" y "la base de datos guarda tu orden" en el journey de un cliente de restaurante.

**Acción:** Mover a un documento separado de arquitectura técnica. El journey ciudadano solo necesita saber: "Tu propuesta está siendo analizada" → "El gobierno respondió". Lo que pasa en medio es infraestructura.

**Documento destino sugerido:** Crear `04-technology/arquitectura-backend-sic-q.md`

---

#### FUSIONAR: Fases 3 (Primer Contacto) + 4 (Orientación) + 5 (Participación)

**Estado actual:** Son tres fases separadas:
1. El ciudadano llega y elige Explorar o Participar
2. El agente pregunta cómo quiere participar
3. Se ejecuta la acción elegida

**Por qué fusionar:**
Desde la perspectiva del ciudadano, esto es un solo momento: "Llego, decido qué hacer, lo hago." La separación en tres fases es útil para documentar internamente, pero la experiencia debe ser fluida. El ciudadano no debe sentir que está atravesando pasos burocráticos digitales.

**Acción:** Una sola fase "Participar" que incluye la bienvenida, la elección y la acción. El agente guía todo esto en una conversación continua, sin transiciones artificiales.

---

#### FUSIONAR: Fases 10 (Feedback) + 11 (Ciclo Virtuoso)

**Por qué:** El "Ciclo Virtuoso" no es una fase que se experimenta. Es una consecuencia sistémica de que el feedback funcione bien. No necesita su propia fase en el journey.

**Acción:** La fase de "Respuesta" incluye el feedback + la invitación natural a seguir participando.

---

#### RESULTADO: De 11 fases a 5

```
ANTES (v03):
1. Diseño Participativo
2. Descubrimiento
3. Primer Contacto → 3B. Invitación
4. Orientación
5. Participación
6. Base de Conocimiento
7. Sensemaking
8. Agente Institucional
9. Gobierno
10. Feedback
11. Ciclo Virtuoso

DESPUÉS (v04):
1. Co-diseño        — Construir el sistema con ciudadanos
2. Descubrimiento   — Ciudadano se entera del SIC-Q
3. Participar       — Llega, elige, actúa (proponer o apoyar)
4. Seguimiento      — Ve el progreso de su propuesta de manera continua
5. Respuesta        — Recibe respuesta del gobierno + invitación a seguir

BACKEND (documento técnico separado):
Almacenamiento → Clustering → Análisis HA → Canalización → Generación de respuesta
```

---

### 2.2 Cambios en los tipos de participación

#### ELIMINAR: Journey "Transformar"

**Estado actual:** Journey 3, donde el ciudadano "adopta" una propuesta como embajador, recibe un enlace de tracking, comparte en redes, y ve cuántos apoyos llegaron gracias a él.

**Por qué eliminar:**
- "Transformar" es "Impulsar" con un paso extra (compartir). No justifica un journey completo.
- El tracking de "cuántos apoyos llegaron gracias a ti" es una feature de gamificación, no una forma de participación. Puede implementarse después como funcionalidad dentro de "Apoyar", no como categoría independiente.
- Agrega complejidad al menú de orientación (4 opciones → parálisis de decisión).

**Acción:** Fusionar con "Apoyar". Cuando alguien vota por una propuesta, se le ofrece opcionalmente compartirla. No necesita un nombre propio ni un flujo separado.

---

#### RECLASIFICAR: Journey "Conversar"

**Estado actual:** Journey 4, flujo dedicado donde el ciudadano tiene diálogo libre con el agente sobre Querétaro (oportunidades de negocio, carreras, datos de su colonia).

**Por qué reclasificar:**
- Conversar no es un tipo de participación ciudadana en la lógica del SIC-Q (no genera propuestas ni apoyos que alimenten el motor de inteligencia colectiva).
- Es una funcionalidad del agente que debería estar disponible en todo momento, no algo a lo que se "entra" como un modo.
- Si alguien está conversando y surge una idea, la transición a "Proponer" debe ser natural, no requerir salir de un modo y entrar a otro.

**Acción:** "Conversar" se convierte en la capacidad base del agente SIC-Q. No se ofrece como opción en un menú junto a Proponer y Apoyar. Simplemente, el agente siempre puede platicar, y si de la conversación surge una idea, guía hacia Proponer.

---

#### RENOMBRAR: "Impulsar" → "Apoyar"

**Por qué:** "Impulsar" suena a marketing. "Apoyar" es lo que el ciudadano realmente hace: da su respaldo a una idea. Es más simple, más directo, más honesto.

---

#### RESULTADO: De 4 journeys a 2 acciones + 1 capacidad transversal

```
ANTES (v03):
1. Proponer      — Crear idea nueva
2. Impulsar      — Dar like
3. Transformar   — Ser embajador
4. Conversar     — Diálogo libre

DESPUÉS (v04):
1. PROPONER      — Crear idea nueva (requiere registro verificado)
2. APOYAR        — Votar + opcionalmente compartir (registro ligero)

TRANSVERSAL:
💬 PLATICAR      — Siempre disponible. No es un "journey", es lo que
                   el agente hace naturalmente. Si surge una idea,
                   transiciona a Proponer.
```

---

### 2.3 Cambios en el registro e identidad

#### CAMBIO PRINCIPAL: Registro progresivo en lugar de registro total upfront

**Estado actual:** Para participar en cualquier modalidad se requiere: email + celular + seudónimo + CURP + código postal + verificación INE o Llave MX.

**Problema documentado (fuente: posibles-simplificaciones.md):**
> "¿Quién decidió que la verificación INE es obligatoria? ¿Hay una ley que lo exija o es 'por seguridad'?"

**Análisis:**
- La Ley de Participación Ciudadana de Querétaro NO exige verificación INE para consultas ciudadanas digitales. La exigencia viene de una postura conservadora del área jurídica, no de un mandato legal.
- Pedir CURP + INE para dar un like equivale a pedir pasaporte para entrar a un foro comunitario. Es desproporcionado.
- Las plataformas de participación que exigen verificación rígida upfront reportan tasas de abandono del 60-80% en el registro (fuente: benchmarks de Decidim, Consul).

**Acción: Implementar tres niveles de acceso**

| Nivel | Puede hacer | Datos requeridos | Fricción |
|-------|------------|-----------------|----------|
| **Visitante** | Explorar propuestas, platicar con el agente, ver estadísticas | Ninguno | Cero |
| **Participante** | Todo lo anterior + apoyar (votar) propuestas | Celular + código postal | Mínima (1 min) |
| **Ciudadano verificado** | Todo lo anterior + crear propuestas | Celular + CURP + código postal | Moderada (3 min) |

**Sobre la verificación INE:**
- Eliminar como requisito de registro.
- Implementar como paso opcional que da un badge de "verificado" al perfil.
- Hacerla obligatoria SOLO si una propuesta cruza el umbral de deliberación institucional (para confirmar la identidad del autor antes de que el gobierno actúe).

**Sobre el email:**
- Hacerlo opcional. WhatsApp es el canal principal. El celular es el identificador natural.

**Sobre el seudónimo:**
- Conservar. Es buena idea para proteger la identidad y fomentar participación sin miedo a represalias.

---

### 2.4 Cambios en el sistema de selección de propuestas

El documento `sistema-de-selección-de-propuestas-ciudadanas.md` describe un sistema sofisticado con 3 vías de selección, 3 ciclos anuales, capacidad de 60 propuestas por ciclo, criterios de desempate, y protección contra manipulación. Es un buen diseño a largo plazo. Pero para un piloto, necesita simplificarse.

#### CAMBIO: Simplificar para el piloto

**Para el piloto (primer año):**

| Aspecto | Diseño actual | Diseño piloto |
|---------|--------------|---------------|
| Ciclos por año | 3 (Feb-Abr, May-Ago, Sep-Nov) | 1 ciclo de 4-6 meses |
| Vías de selección | 3 (apoyo, calidad, territorio) | 1: las más apoyadas (top N) |
| Propuestas a deliberación | 60 por ciclo | 20-30 en el piloto |
| Renovaciones | Hasta 2 (3 ciclos máx) | Sin renovaciones en piloto |
| Desempate | Diversidad geográfica → antigüedad | No necesario con 1 vía |
| Cuota territorial | 15 propuestas distribuidas por zona | Diferir a fase 2 |
| Puntaje de calidad IA | Claridad + Factibilidad + Alineación | Diferir a fase 2 |

**Conservar para el piloto:**
- Transparencia total de rankings (el ciudadano ve su posición)
- Retroalimentación a propuestas que no pasan
- Compromiso de respuesta institucional en plazo definido
- Protección básica contra manipulación (1 voto por cuenta verificada)

**Diferir a fase 2 (post-piloto):**
- Vía 2 (calidad de formulación evaluada por IA)
- Vía 3 (cuota territorial)
- Los 3 ciclos anuales con meses neutros
- El sistema de renovaciones
- Las 3 vistas de plataforma (Activas, Casos de Éxito, Archivo)

**Razón:** Es mejor lanzar un sistema simple que funcione y ganar confianza ciudadana, que lanzar un sistema completo que colapse bajo su propia complejidad o que tarde tanto en desarrollarse que pierda el momento político.

---

### 2.5 Cambios en el co-diseño (Fase 0/1)

**Estado actual (metodología v01):** 4 actividades paralelas en 9 semanas.
1. Talleres de co-diseño (3 talleres × 3 hrs × 30 personas)
2. Entrevistas con agente de IA (500-1000 conversaciones)
3. Encuesta de validación (2000+ respuestas)
4. Mesas técnicas de factibilidad (2 sesiones × 2 hrs)

**Cambios propuestos:**

| Actividad | Cambio | Razón |
|-----------|--------|-------|
| Talleres de co-diseño | **Reducir de 3 a 2.** Taller 1: sectores organizados. Taller 2: ciudadanía + sectores mezclados | El tercer taller "mixto" duplica lo que ya se obtuvo. Dos talleres con composición distinta son suficientes |
| Entrevistas con agente IA | **Conservar pero ajustar meta.** De 500-1000 a 300-500 | Meta más realista para las primeras 2 semanas. La calidad de las conversaciones importa más que el volumen |
| Encuesta de validación | **Eliminar como actividad separada.** Integrar las preguntas clave en la conversación con el agente IA | Redundante. El agente puede recopilar las mismas preferencias durante la conversación. Mantener encuesta solo como respaldo para quienes no quieran conversar con IA |
| Mesas técnicas | **Reducir de 2 a 1 mesa combinada.** Infraestructura + IA en una sesión de 3 hrs | Los temas están relacionados. Una sola sesión con todos los perfiles técnicos presentes genera mejor discusión |

**Resultado:** De 4 actividades en 9 semanas a 3 actividades en 6 semanas.

---

### 2.6 Cambios en la interfaz del agente

#### ELIMINAR: Menú de orientación de 4 opciones

**Estado actual:** Después de registrarse, el agente presenta un menú con 4 cards: Proponer, Impulsar, Transformar, Conversar.

**Problema:** 4 opciones generan parálisis de decisión. Además, "Transformar" y "Conversar" confunden al usuario promedio.

**Acción:** Reducir a 2 opciones + texto libre.

```
AGENTE: ¡Bienvenido! ¿Qué te gustaría hacer?

  [ Tengo una idea ]     [ Quiero ver ideas de otros ]

  O simplemente escríbeme lo que quieras y te guío.
```

Si el ciudadano escribe algo libre, el agente interpreta la intención y guía. No necesita elegir una categoría antes de hablar.

---

#### CAMBIO: Verificación de duplicados como paralela, no bloqueante

**Estado actual:** Paso 4 del Journey Proponer. Después de que el agente estructura la propuesta, muestra duplicados y obliga al ciudadano a elegir "Publicar como nueva" o "Sumar a existente" antes de continuar.

**Problema:** Es un paso que interrumpe el momentum. El ciudadano acaba de articular su idea con esfuerzo y lo primero que ve es "ya existe algo parecido". Psicológicamente es frustrante.

**Acción:** Mostrar propuestas similares como información lateral, no como paso bloqueante. La propuesta se publica inmediatamente. Debajo, se muestra: "Otras personas han propuesto cosas parecidas. ¿Quieres unir fuerzas?" Esto es una invitación, no una barrera.

---

#### ELIMINAR: Sistema de puntos y rachas

**Estado actual:** En el resumen de participación del Journey Impulsar se muestran "+12 puntos de participación", "Racha actual: 3 días seguidos", "Nivel: Ciudadano Activo (234 puntos totales)".

**Por qué eliminar:**
- Gamificación prematura. Antes de implementar sistemas de puntos, el SIC-Q necesita probar que el valor intrínseco de participar (que tu voz cuente) es suficiente motivación.
- Los puntos y rachas trivializan la participación ciudadana. No es un juego; es democracia.
- Agrega complejidad de desarrollo sin evidencia de que mejore la retención.

**Acción:** Eliminar completamente del piloto. Evaluar post-piloto si se necesita gamificación basándose en datos reales de retención.

---

### 2.7 Cambios en la arquitectura de datos

#### FUSIONAR: 2 bases de datos → 1

**Estado actual:** Fase 6 describe dos bases separadas:
1. Base de datos de participación (propuestas, votos, comentarios, clusters, perfiles, historiales)
2. Base de conocimiento contextual (planes estatales, encuestas previas, INEGI, presupuestos)

**Por qué fusionar:**
- Son dos fuentes de datos que alimentan el mismo motor de análisis. Separarlas como "dos bases" sugiere dos sistemas técnicos distintos, lo cual es innecesario.
- Una sola base de datos con diferentes colecciones/esquemas es más simple de mantener, consultar y escalar.

**Acción:** Una base de datos unificada con dos capas lógicas:
- **Capa ciudadana:** Propuestas, votos, conversaciones, perfiles
- **Capa contextual:** Datos de gobierno, INEGI, planes, presupuestos

Misma base, diferentes vistas de acceso. El motor de sensemaking consulta ambas capas.

---

## 3. Journey simplificado propuesto (v04)

### Diagrama de flujo

```
CIUDADANO
    │
    │  Se entera del SIC-Q
    │  (WhatsApp, redes, kiosco, taller, boca a boca)
    │
    ▼
┌──────────────────────────────────────────────────┐
│              AGENTE SIC-Q                        │
│                                                  │
│  "Hola, soy el asistente de Inteligencia        │
│   Colectiva de Querétaro. ¿Qué te gustaría      │
│   hacer?"                                        │
│                                                  │
│   [ Tengo una idea ]   [ Ver ideas de otros ]    │
│                                                  │
│   O escríbeme lo que quieras.                    │
│                                                  │
└───────────────────┬──────────────────────────────┘
                    │
        ┌───────────┼───────────┐
        ▼           ▼           ▼
   ┌─────────┐ ┌─────────┐ ┌─────────┐
   │PROPONER │ │ APOYAR  │ │PLATICAR │
   │         │ │         │ │         │
   │Registro │ │Registro │ │Sin      │
   │verificado│ │ligero  │ │registro │
   │(CURP+cel)│ │(celular)│ │         │
   └────┬────┘ └────┬────┘ └────┬────┘
        │           │           │
        ▼           ▼           │
   Diálogo      Swipe de       │
   guiado →     propuestas →   │
   Propuesta    Votar +        │
   publicada    Compartir      │
        │           │           │
        └─────┬─────┘           │
              │      ◄──────────┘
              │      (si surge una idea,
              │       transiciona a Proponer)
              ▼
   ┌──────────────────────┐
   │   SEGUIMIENTO        │
   │                      │
   │ Notificaciones:      │
   │ • Tu propuesta va    │
   │   en posición #18    │
   │ • Propuesta X que    │
   │   apoyaste subió     │
   │ • Quedan 30 días     │
   │   del ciclo          │
   └──────────┬───────────┘
              │
              ▼
   ┌──────────────────────┐
   │   RESPUESTA          │
   │                      │
   │ "El gobierno revisó  │
   │  tu propuesta.       │
   │  Resultado: ___"     │
   │                      │
   │ + Invitación a       │
   │   seguir participando│
   └──────────────────────┘
```

### Backend (separado del journey)

```
Propuestas y votos
        │
        ▼
┌────────────────┐    ┌────────────────┐
│ Base de datos  │◄──►│ Datos de       │
│ ciudadana      │    │ contexto       │
│ (propuestas,   │    │ (INEGI, planes,│
│  votos, perfiles)│   │  presupuestos) │
└───────┬────────┘    └───────┬────────┘
        │                     │
        └──────────┬──────────┘
                   │
                   ▼
        ┌──────────────────┐
        │ Motor de IC      │
        │ Clustering       │
        │ Priorización     │
        │ Análisis HA      │
        └────────┬─────────┘
                 │
                 ▼
        ┌──────────────────┐
        │ Agente SIC-Q     │
        │ Institucional    │
        │ (consultas por   │
        │  nivel de acceso)│
        └────────┬─────────┘
                 │
                 ▼
        ┌──────────────────┐
        │ Gobierno         │
        │ Secretaría +     │
        │ Instituto del    │
        │ Futuro + Consejos│
        └────────┬─────────┘
                 │
                 ▼
        Respuesta al ciudadano
```

---

## 4. Tabla de prioridad de implementación

Para cada cambio, una clasificación de urgencia y esfuerzo:

| # | Cambio | Prioridad | Esfuerzo | Impacto |
|---|--------|-----------|----------|---------|
| 1 | Reducir 11 fases a 5 (separar backend) | Alta | Bajo (es rediseño documental) | Alto: claridad para todo el equipo |
| 2 | Fusionar 4 journeys en 2 acciones | Alta | Bajo (rediseño documental + UX) | Alto: reduce fricción cognitiva |
| 3 | Registro progresivo (3 niveles) | Alta | Medio (requiere decisión jurídica) | Muy alto: determina tasa de adopción |
| 4 | Eliminar verificación INE obligatoria | Alta | Bajo (decisión política) | Muy alto: barrera #1 de adopción |
| 5 | Simplificar selección para piloto (1 vía) | Alta | Bajo | Alto: permite lanzar más rápido |
| 6 | Eliminar Fase 3B "Invitación" | Alta | Bajo | Medio: reduce un paso innecesario |
| 7 | Duplicados como info lateral, no bloqueante | Media | Bajo | Medio: mejor experiencia de proponer |
| 8 | Eliminar gamificación (puntos/rachas) | Media | Bajo (no construir) | Medio: evita trivialización |
| 9 | Fusionar 2 bases de datos en 1 | Media | Medio (arquitectura técnica) | Medio: simplifica desarrollo |
| 10 | Reducir co-diseño de 4 a 3 actividades | Media | Bajo | Medio: ahorra 3 semanas |
| 11 | Menú de agente de 4 a 2 opciones + libre | Media | Bajo | Alto: reduce parálisis de decisión |
| 12 | Renombrar "Impulsar" → "Apoyar" | Baja | Bajo | Bajo: mejora semántica |

---

## 5. Lo que NO debe cambiar

Estos elementos del diseño v03 están bien concebidos y deben conservarse:

| Elemento | Por qué conservar |
|----------|-------------------|
| **Agente SIC-Q como interfaz conversacional** | Es el diferenciador del proyecto. La IA como mediador entre ciudadano y gobierno es la innovación central |
| **Diálogo guiado para estructurar propuestas** | Que el ciudadano hable en sus palabras y la IA estructure es la forma correcta de reducir la barrera de entrada |
| **Instituto del Futuro** | La garantía transexenal es políticamente necesaria y técnicamente sólida |
| **Clustering semántico** | Agrupar miles de voces en temas coherentes es el valor técnico real del sistema |
| **Feedback al ciudadano** | "Tu voz no cayó en el hoyo negro" es la promesa central del SIC-Q |
| **Transparencia de rankings** | Que el ciudadano vea dónde está su propuesta genera confianza |
| **Seudónimo** | Protege identidad sin eliminar responsabilidad |
| **Canales múltiples** | WhatsApp + web + kioscos garantiza inclusión |
| **Análisis por dimensiones HA** | La taxonomía de Legado, Comunidad, Aprendizaje, Tecnología, Contexto, Proyectos es valiosa para el procesamiento, aunque no necesita ser visible al ciudadano |

---

## 6. Dependencias y decisiones pendientes

Antes de implementar estos cambios, se requieren decisiones que no son técnicas:

| Decisión | Quién decide | Impacto en diseño |
|----------|-------------|-------------------|
| ¿Es legalmente necesaria la verificación INE? | Jurídico de CEPACI | Si sí: registro verificado obligatorio para todos. Si no: registro progresivo viable |
| ¿Cuántas propuestas puede deliberar el gobierno en el piloto? | Secretaría de Planeación | Define el umbral de selección |
| ¿El piloto es solo digital o incluye kioscos? | CEPACI + Presupuesto | Afecta alcance y canales |
| ¿Hay presupuesto para desarrollo de app/web o solo WhatsApp? | CEPACI + Presupuesto | WhatsApp-only simplifica enormemente el MVP |
| ¿El co-diseño se hace antes o en paralelo al desarrollo técnico? | Edgar + Antonio Rangel | Afecta timeline de lanzamiento |

---

## 7. Próximos pasos

1. **Validar con equipo HA** — Revisar este documento internamente antes de presentar a gobierno
2. **Crear citizens-journey-v04** — Nuevo diagrama mermaid y documento de experiencia con los cambios aplicados
3. **Crear documento de arquitectura backend** — Separar las fases técnicas (6-9) en su propio documento
4. **Obtener decisión jurídica** — Sobre verificación INE: ¿ley o costumbre?
5. **Definir alcance de piloto** — Con Antonio Rangel: cuántas propuestas, qué canales, qué timeline
6. **Actualizar propuesta v06** — Incorporar la simplificación en la propuesta formal

---

## Connections
- [[ascii-citizens-journey-v.03]]
- [[posibles-simplificaciones]]
- [[sistema-de-selección-de-propuestas-ciudadanas]]
- [[mermaid-citizens-journey-v.03]]
- [[metodología-proceso-codiseño-sic-q-v.01]]
- [[04-technology-sic-q]]
- [[06-projects-sic-q]]
