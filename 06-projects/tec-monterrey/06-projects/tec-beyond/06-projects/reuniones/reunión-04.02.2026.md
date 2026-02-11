# Reunión Tec Beyond — Plataforma y Comunidad
**Fecha:** 4 de febrero, 2026
**Proyecto:** Tec Beyond (Tec de Monterrey)
**Participantes:** Edgar Barroso, Mario Orozco (director del programa), Irma (se incorpora brevemente).
**Contexto:** Reunión presencial para definir la arquitectura de la plataforma de la comunidad Tec Beyond/Villón y su modelo de operación.

---

## Objetivo de la sesión
Alinear la visión de la plataforma tecnológica para la red de emprendedores Tec Beyond, definir la arquitectura de nodos y permisos, discutir el modelo de negocio y planear próximos eventos.

---

## Estado actual del programa

- Mario compartió el estado operativo: gestión de convocatorias, eventos y relación con empresarios.
- Se está trabajando con un **bot de WhatsApp** que opera dentro de los grupos de la comunidad:
  - Solicita información de registro (nombre, LinkedIn)
  - Permite a los miembros buscar contactos y conexiones dentro de la red
  - ~75 miembros registrados de ~150 objetivo (50% en 2 semanas)
- **Tema de privacidad:** Se discutió la necesidad de un aviso de privacidad antes del registro de cada participante. Algunos miembros han cuestionado el manejo de datos. Se necesita contratar infraestructura propia para asegurar los datos.

---

## Arquitectura propuesta de la plataforma

Edgar presentó una propuesta de arquitectura en tres niveles:

### Nivel 1: Estructura de nodos y permisos

```
        CONSEJO CENTRAL (admin total)
               │
    ┌──────────┼──────────┐
    │          │          │
  NODO A    NODO B    NODO C ...
 (campus)  (campus)  (campus)
    │          │          │
 miembros  miembros  miembros
```

- **Consejo central** = admin con acceso a toda la red (Mario + consejo directivo)
- **Nodos** = campus o capítulos regionales, cada uno con su propio admin
- **Permisos escalonados:** Cada admin solo ve su nodo. Solo el consejo central ve todo.
- **Instancias fractales:** Cada nodo replica la misma estructura. Lo que funciona en uno, se replica en todos.
- Ejemplo: Chihuahua tendría su propio nodo con su propio admin, sin acceso a los datos de Morelia.

### Nivel 2: Clusters temáticos

- Una vez que la información está en una **base de conocimiento** (vectores, no solo datos tabulares), la IA identifica agrupaciones orgánicas:
  - "Toda esta banda se dedica a logística"
  - "La vocación de Morelia es comercial, la de Chihuahua es industrial"
- Los clusters no los define nadie a mano — **emergen de la data**.
- Se pueden cruzar nodos: alguien en Nuevo León puede encontrar un proveedor en Querétaro a través de los clusters.

### Nivel 3: Inteligencia

- El consejo central recibe **hallazgos y reportes** generados por el agente de IA.
- Los reportes informan decisiones: qué eventos hacer, qué cursos ofrecer, qué conexiones facilitar.
- Capacidad predictiva: ver trayectorias de miembros por generación y anticipar necesidades.

---

## Agente vs. Bot

Edgar explicó la diferencia clave:

| | Bot | Agente |
|---|---|---|
| **Qué hace** | Preguntas y respuestas predefinidas | Procesos secuenciales complejos |
| **Acceso** | Consulta un RAG (base de conocimiento) | Tiene acceso a **tools** (herramientas) |
| **Capacidad** | Responde lo que le preguntas | Organiza, analiza, genera reportes, busca en internet |
| **Ejemplo** | "¿Quién es ingeniero en la red?" | "Organízame toda la red por clusters temáticos y dame un reporte de vocación por campus" |

**Propuesta:** Crear un **agente** (no solo un bot) que:
1. Organice la información de todos los miembros en una base de conocimiento
2. Genere reportes por grupos, clusters y temas
3. Haga matching entre miembros basado en reglas configurables
4. Enriquezca perfiles con información pública (web scraping de LinkedIn, etc.)
5. Ofrezca inteligencia personalizada por miembro o por nodo

**Infraestructura recomendada:** Azure Foundry — segura, en infraestructura propia del Tec, sin riesgos de datos.

---

## Matching y conexiones

- Se discutió un sistema de **matching algorítmico** entre miembros:
  - Basado en reglas configurables (industria, intereses, ubicación, necesidades)
  - Anonimizado: "El usuario 433 y el 774 tienen match" → el consejo decide si conecta
  - Diferentes niveles de acceso según membresía (premium local vs. premium nacional)
- Referencia a trabajo previo: Daniel ya había trabajado en algoritmos de matching para el programa
- Concepto "Show me the money": las conexiones valiosas pasan por el admin central

---

## Modelo de negocio

- **Membresía por niveles:**
  - Estudiantes actuales del programa Villón: acceso gratuito durante los 9 meses del programa
  - Al terminar: se convierte en suscripción anual (el "Círculo Villón")
  - **Premium local:** Acceso a tu nodo/campus
  - **Premium nacional:** Acceso a toda la red entre campus
- **Fuentes de valor:**
  - Acceso al network
  - Reportes de inteligencia personalizados
  - Matching con otros miembros
  - Eventos y experiencias presenciales
- **Cobro institucional:** Se le puede cobrar al Tec como servicio para sus egresados, con la intención de que los miembros vean el valor y migren a suscripción propia.

---

## Eventos y experiencia

### Reunión de Generaciones
- **Fecha:** 17 de abril, 2026 (martes)
- Concepto: reunir a **todas las generaciones** del programa en un solo evento
- Nombre propuesto: "Reunión de Generaciones" (en español, no en inglés)

### Diseño de experiencias
- Referencia a Kahneman (*Thinking Fast and Slow*): lo que más recuerda la gente es **cómo termina** una experiencia, no lo significativo del contenido
- Importancia de los **rituales**: campana, apertura, cierre, momentos fabricados
- Las experiencias presenciales son fundamentales — la data debe informar qué tipo de eventos hacer, pero el valor real está en lo presencial
- Se mencionó el programa Tome como referencia de evaluación empresarial y networking estructurado

### Segmentación generacional
- **25-35 años:** Están empezando, buscan abrir puertas y contactos
- **35-45 años:** Están consolidando, buscan escalar negocios
- **45-60 años:** Tienen trayectoria, pueden ser mentores y asesores
- La plataforma puede mostrar trayectorias y crear aspiración: "quiero estar ahí en 10 años"

---

## Próximos pasos

- [ ] **Edgar Barroso:** Desarrollar propuesta técnica de la arquitectura (nodos, permisos, base de conocimiento, agente)
- [ ] **Edgar Barroso:** Explorar Azure Foundry como infraestructura para la base de conocimiento
- [ ] **Mario:** Definir el aviso de privacidad y flujo de consentimiento para el registro de miembros
- [ ] **Mario:** Cerrar el registro del bot de WhatsApp (llegar a 150 miembros)
- [ ] **Mario:** Confirmar fecha del evento "Reunión de Generaciones" (17 de abril)
- [ ] **Mario:** Presentar el concepto de plataforma al consejo directivo
- [ ] **Conjunto:** Depurar narrativa de valor: comunidad + negocio + inteligencia
- [ ] **Conjunto:** Definir MVP técnico (captura → base de conocimiento → agente → matching)
- [ ] **Conjunto:** Diseñar piloto por nodos/campus priorizados con métricas
- [ ] **Equipo:** Reunión de seguimiento en la próxima semana

---

## Notas adicionales

- Mario mencionó que fue invitado a un evento de "ExActo y Conexión" — un formato de networking presencial que le pareció interesante como referencia.
- Se discutió la importancia de no centrarse solo en "innovación" como propuesta de valor — el 80% de los miembros busca hacer negocios y contactos, no necesariamente innovar.
- Edgar enfatizó: "Base de conocimiento, no base de datos" — la diferencia es que una base de conocimiento (vectores) permite que la IA entienda relaciones semánticas, no solo busque texto exacto.
- Se habló de la importancia de que los insights vengan de la data, no de opiniones: "Eso tiene que salir de la data, no de nosotros."

---

## Transcripción coherente (reconstruida)

> Nota: El audio/transcripción original tiene múltiples cortes y fragmentos corruptos. Esta versión reconstruye el contenido útil de forma coherente, respetando los temas y acuerdos principales.

*Participantes: Edgar Barroso, Mario Orozco (director del programa). Se incorpora brevemente Irma por llamada.*
*Menciones en la conversación: Daniel, Pablo Marín.*

> En la transcripción original el software de audio etiquetó a los hablantes como "Edgar" y "Ingeniero". Se conservan esas etiquetas.

### Conversación reconstruida

**Edgar:** Siento que el programa todavía no se entiende del todo. Necesitamos aterrizarlo mejor y hacerlo más claro para la gente.

**Ingeniero:** Coincido. La idea está bien, pero requiere ajustes para que sea comprensible y ejecutable.

**Edgar:** Hoy fui a una reunión a la que me invitaron. Les envié por correo un video de referencia sobre ese modelo de conexión. Quiero que lo tomemos como benchmark.

**Ingeniero:** Perfecto. Ese benchmark puede ayudarnos a ordenar la parte institucional y comercial.

**Edgar:** También me preocupa la operación: convocatorias, seguimiento, sesiones y responsables. Si no está claro, se frena todo.

**Ingeniero:** Hay que estructurarlo por etapas y con responsables por nodo. Si no, se pierde continuidad.

---

**Ingeniero:** Te pregunto directo: ¿qué quieres que sea este programa en su versión madura?

**Edgar:** Quiero una red que conecte personas para colaboración real. No solo discurso de innovación, sino valor práctico, contactos útiles y resultados.

**Ingeniero:** Entonces hay que diseñar una plataforma con enfoque de red, no solo un repositorio.

**Edgar:** Sí. Que funcione por comunidad, por confianza, y con reglas claras de participación.

---

**Ingeniero:** Viendo lo que ya tienen, propongo diferenciar dos capas:
1. Comunidad y experiencia.
2. Inteligencia de datos para activar conexiones.

**Edgar:** Exacto. Porque solo con “innovación” no basta para sostenerlo en el tiempo.

**Ingeniero:** De acuerdo. Debe haber componente de negocio y también de valor social/comunitario.

---

**Ingeniero:** Sobre tecnología: no lo plantearía solo como “bot”.

**Edgar:** ¿Cuál sería la diferencia clave?

**Ingeniero:**
- Un **bot** responde preguntas predefinidas y consulta una base.
- Un **agente** además usa herramientas, ejecuta procesos secuenciales y genera análisis accionable.

**Edgar:** Entonces necesitamos agente.

**Ingeniero:** Sí. Primer paso: construir una **base de conocimiento** (no solo base de datos), con embeddings y clústeres.

**Edgar:** ¿Con qué arquitectura?

**Ingeniero:** Modelo tipo grafo por nodos:
- Nodo central (consejo) con acceso global.
- Nodos locales (capítulos/campus) con permisos limitados.
- Clústeres temáticos transversales (logística, industria, innovación, etc.).

**Edgar:** Eso ayuda a ordenar gobierno de datos y colaboración entre ciudades.

---

**Edgar:** Yo hoy estoy en proyectos en Nuevo León, Querétaro, Guanajuato y CDMX. Me serviría pedir: “Necesito proveedor especializado en X en Nuevo León”.

**Ingeniero:** Sí, ese caso de uso es central. Se puede habilitar con permisos por nodo y búsqueda semántica.

**Edgar:** También quiero niveles de membresía: local y nacional.

**Ingeniero:** Se puede. Ejemplo:
- Premium local (acceso a nodo local).
- Premium nacional (acceso ampliado y cruces entre nodos).

---

**Ingeniero:** Otro punto: hay que convertir la data en reportes útiles.

**Edgar:** ¿Qué tipo de reportes?

**Ingeniero:** Vocación por comunidad y oportunidades:
- Qué perfiles predominan por ciudad.
- Qué conexiones faltan.
- Qué eventos/cursos deberían abrir según patrones reales.

**Edgar:** Eso evita decidir por intuición; decide la data.

---

**Edgar:** En la reunión también salió un modelo externo con sesiones periódicas, capítulo por ciudad, reuniones de seguimiento y encuentro anual.

**Ingeniero:** Sí, y con reglas de participación muy claras. Incluso la parte familiar aparece como elemento de comunidad.

**Edgar:** Ese enfoque puede inspirarnos, pero adaptado al contexto nuestro.

---

**Ingeniero:** Del lado operativo, hay un flujo mínimo que debemos cerrar:
1. Captura estructurada de perfiles.
2. Consentimiento y aviso de privacidad.
3. Segmentación por nodos y clústeres.
4. Motor de recomendaciones/match.
5. Seguimiento de resultados.

**Edgar:** Importante: privacidad. Ya hubo preguntas de participantes sobre cómo se usan sus datos.

**Ingeniero:** Entonces el aviso debe aparecer antes del registro, y conviene infraestructura propia para mayor control.

---

**Edgar:** Sobre captura, se mencionó un bot en WhatsApp que pide nombre, perfil y datos clave para poder hacer consultas de “a quién debo conectar para X”.

**Ingeniero:** Bien, pero que sea puerta de entrada. El valor real está en el agente y en la base de conocimiento.

**Edgar:** Totalmente.

---

**Ingeniero:** También propongo algoritmo de matching por reglas + similitud semántica.

**Edgar:** ¿Para sugerir conexiones automáticamente?

**Ingeniero:** Exacto. Y el consejo puede definir criterios de activación según objetivos (colaboración, negocio, mentoría, etc.).

---

**Edgar:** Me gusta el modelo de dar acceso inicial y luego pasar a suscripción.

**Ingeniero:** Tiene sentido:
- Acceso incluido para generaciones activas.
- Después, continuidad por membresía si perciben valor.

**Edgar:** Sí, así validamos adopción real.

---

**(Llamada breve con Irma, resumida)**

**Edgar:** Estoy en reunión con el ingeniero; mañana te comparto avances y coordinamos.

**Irma:** De acuerdo, revisamos horarios y seguimos.

---

## Connections
- [[06-projects-tec-beyond]]
