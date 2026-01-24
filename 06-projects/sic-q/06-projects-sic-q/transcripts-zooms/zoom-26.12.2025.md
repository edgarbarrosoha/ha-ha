# Reunión SIC Querétaro - 26 de Diciembre 2025

## Participantes
- **Edgar Barroso** (Matute) - Líder técnico del proyecto
- **Toño Rangel** - Gobierno del Estado
- **Sergio Luis Ibarra Gonzalez** - Instituto del Futuro de Querétaro
- **Edgar Mohar** - Colaborador (se incorpora después)

---
Action Items - Reunión SIC 26.12.2025

  Edgar Barroso (Matute)

  1. Agendar reunión con Sergio - Lunes o martes de la próxima semana para explicar el trabajo hecho en Guanajuato con IPLANEG
  2. Compartir link del Drive/Notion por WhatsApp al grupo
  3. Continuar desarrollo del agente SIC - seguir avanzando con el prototipo

  Sergio Luis Ibarra Gonzalez

  4. Revisar las capas georreferenciadas - La próxima semana revisar todo lo que tienen
  5. Subir capas de infraestructura al sistema
  6. Seleccionar las 10 capas más importantes de las ~200 disponibles para empezar
  7. Coordinar con Joaquín para identificar qué bases de datos de INEGI son prioritarias

  Toño Rangel

  8. Definir caso de uso inicial - Seleccionar si será movilidad, educación, salud u otro tema
  9. Agendar reunión con Edgar Mohar y Edgar Barroso para reflexionar sobre clasificación de información
  10. Revisar documentos/diagramas en el Notion con calma

  Edgar Mohar

  11. Continuar clasificación de documentos junto con Óscar
  12. Validar propuestas de clasificación que envíe Edgar Barroso
  13. Coordinar con Juanalo para conectar la página de trámites de gobierno

  Óscar (ausente pero con tareas asignadas)

  14. Investigar cómo incorporar capas GIS/QGIS al sistema
  15. Continuar trabajo en backend del prototipo
  16. Desarrollar nueva versión del mock navegable

  Equipo en General

  17. Subir documentos por compartimentos/cajoncitos:
    - Instrumentos de planeación (Plan Querétaro 2050)
    - Marco normativo (Ley de planeación, Plan de desarrollo)
    - Estadística (Proyecciones, datos INEGI)
  18. No restringir flujo de información - seguir mandando documentos aunque no estén perfectamente clasificados
  19. Próxima reunión general: Lunes 5 de enero

  ---
  Decisiones Clave Tomadas

  - NO incluir trámites gubernamentales en primera fase
  - Enfocarse en lo estratégico, no en lo operativo/gestión
  - Manejar expectativas - comunicar claramente qué puede y qué no puede hacer el SIC en su primera versión
  - El SIC funcionará como "Lego" - se irán conectando APIs conforme estén disponibles

---

## Transcripción

**Edgar Barroso:** ...un consejo de nosotros, etcétera. Eso también ya tenemos una primera propuesta. Aquí está el panorama general del proyecto, Toño. O sea, este es lo que tenemos en la propuesta. Aquí está ya para que tú le puedas dar seguimiento. Estamos aquí todavía en la validación del prototipo. Y aquí está, digamos, los ahora sí que sus pendientes.

Esos son los que están de su lado, que es mapear, curar e integrar todas las fuentes de datos necesarios para que SIC sea lo más robusto posible. Que es justo lo que nos comentaba ahorita Sergio, que nosotros podemos sugerir algunos documentos, podemos decir "Oigan, sería bueno tener esto, tener lo otro", pero nosotros no tenemos acceso a esos documentos, los podemos buscar si ese es el caso, pero creo que es importante que tanto Sergio como Edgar, como tú, Toño, nos digan lo que no puede faltar, lo que debe ser la base de esta cosa. Por ejemplo, ya tenemos el documento de planeación, Toño, ese no puede faltar, ¿no? Es como la base de todo.

También una de las cosas que platicamos la vez pasada es que el sistema nos dijo "Oigan, no nos vayamos a aventar a hacer esto sin tener un proceso con la comunidad de Querétaro. O sea, necesitamos involucrar a los actores para que no sientan que es una imposición, es una idea de Toño, o es una idea de Edgar o es una idea de quien sea, sino es, oigan, queremos hacer esto. ¿Qué elementos les gustaría que tuviera un sistema de inteligencia colectiva de Querétaro?" Y hacer un taller o varios talleres para que se involucren las personas mínimas o las que ustedes consideren necesarias.

Y también explorar algunas técnicas más sofisticadas, Toño. Por ejemplo, podemos mandar un agente de inteligencia artificial a entrevistar a profundidad a personas y eso nos ayuda porque no nos quita tiempo. Simplemente mandamos los correos, el agente saluda, entrevista, guarda la información, nos la manda, todo automatizado. O también una simple encuesta, ¿no? Eso también es algo que tendríamos que decidir.

Y finalmente, Toño, creo que también está más de tu lado seleccionar un caso de uso. Vamos a enfocarnos en movilidad o vamos a enfocarnos un caso de uso en educación, movilidad, en lo que ustedes gusten, salud, lo que sea, para ya ir armándote un caso de uso con el sistema. Para que no sea como "vamos a armar todo el sistema de inteligencia colectiva", sino más bien podamos hacer una primera iteración con un caso de uso específico, aprender de lo que salió bien, lo que salió mal y ya poder empezar a escalar el sistema. Eso es un poco lo que está de su lado.

**Sergio:** Una pregunta...

**Edgar Barroso:** Dale, dale, Sergio, las que quieras.

**Sergio:** En la sesión anterior que tuvimos con Matute y mi equipo, estuvimos jugando con el modelo ya en el Notion, ¿no?

**Edgar Barroso:** Ah, sí.

**Sergio:** Y digo, a mí me dio gusto porque Edgar no conocía el documento de Querétaro 2050 y cuando empezamos a jugar, por así decirlo, a simular, no sé cuál es el término correcto, con el aparato de la inteligencia artificial, por llamarle alguna cosa, la realidad, Toño, es que empezaron a salir una serie de asuntos impresionantes con la información que ya tiene el plan.

**Edgar Barroso:** Sí.

**Sergio:** Ahora, la otra cosa que yo quería aquí nada más dejar claro es que nuestro plan contiene, y ya subimos también allá al sistema, Edgar, las proyecciones de más de 40 variables con sus series de tiempo.

**Edgar Barroso:** Ah, fantástico.

**Sergio:** Entonces, de las siete dimensiones prospectivas con las que está hecho el documento 2050, que entiendo, Toño, que quizás el alcance de esto no es solamente el 2050 o es alimentar al 2050 o abrirlo a otros temas que puedan surgir. Y era una de las dudas que teníamos, Edgar, de ir a propósito, el diseño de cómo podemos, me voy a permitir decirlo así, categorizar las aportaciones de quien intervenga aquí.

¿Por qué? Porque lo vivimos, aunque no teníamos una inteligencia artificial, lo vivimos para hacer el documento Querétaro 2050. O sea, recibimos muchas propuestas de cosas que eran o intrascendentes o estaban planteadas por encimita o eran cosas que verdaderamente son imposibles. Inverosímiles, completamente inverosímiles.

Entonces, un poco la duda era, bueno, esto a la hora que se abra, lo que entiendo es que lo que se vaya metiendo al sistema de inteligencia artificial es con lo que el que siga, vamos a suponer, cualquier persona se va a topar con lo que puso el otro y el sistema le va a retroalimentar con lo que haya puesto el otro. Entonces, un poco quería yo preguntarles cómo podemos considerar esta categorización de intervenciones. ¿Por qué? Porque si se llena de mugre, pues va a aventar mugre, ¿no?

Ahorita no avienta mugre porque es el plan tal cual. Claro, que Edgar se puso a jugar el otro día, me dijo "Oye, qué bárbaro, el documento está bueno." Gracias, Matute. Digo, "Me da mucho gusto que venga de ti tal reconocimiento."

**Edgar Barroso:** Ah, qué bueno.

**Sergio:** Pero empezamos a reflexionar y decíamos "Híjole, y a la hora que alguien meta un documento que está desenfocado o que está errado, que está mal hecho." Me decía Toño, yo no quiero que me suba nada que no pase por tus manos. Pero mi duda es una vez que esto ya se abra, ¿se pueden poner restricciones? Me imagino, para que no llegue cualquiera y meta una serie de datos que están equivocados o hasta con mala leche.

**Edgar Barroso:** No, sí va a haber, pero lo bueno de los agentes... Eso ya nos ha pasado. A ver, es una excelente pregunta. La voy a tratar de responder lo más rápido posible porque hay mucho que mostrarte, Toño, que es una buena noticia.

El sistema va primero asegurarse de que la propuesta esté bien hecha. Si yo llego y digo "que haya mejor educación", el sistema te va a decir "Ah, mira, qué buena propuesta. A ver, vamos a ser un poco más específicos. ¿A qué te refieres con tener mejor educación?" "Ah, no, mira, es que yo tengo un niño de primaria." "Ah, okay, perfecto. Entonces, te vas a enfocar en primaria."

Y al final el sistema le va a escribir bien en un formato establecido por nosotros que ya está en la plataforma y te dice "¿Estás de acuerdo con que esta es tu propuesta?" en un español perfecto con una sintaxis muy decente, muy razonable. Y entonces el ciudadano dice "Ándale, eso es lo que quiero."

Entonces, primero va a ayudar a redactar las cosas porque si no, imagínense qué tipo de propuestas nos van a llegar. "Dame que compre menos impuestos." Hombre, entonces eso es lo primero que va a hacer el sistema. O sea, no va a pasar ninguna cosa en donde el ciudadano no tenga la paciencia de explicar cuál es su propuesta.

Y una vez que el sistema lo tiene claro y que evalúa que vale la pena pasar a la siguiente etapa, entonces le dice "Esta es tu propuesta" y el ciudadano dice "Sí." Entonces va a la siguiente propuesta. Y esa propuesta se analiza y después se canaliza. Entonces se va poniendo en clusters.

Sergio, por ejemplo, entonces movilidad. Aquí es un puntito nada más y luego va a haber otro puntito y otro puntito. Entonces, va a ser un clúster de las ideas que se van armando. Como un agua de chía. Mira, me estoy tomando una agüita con chía. Entonces, la idea es que podamos ir viendo en dónde convergen muchos ciudadanos y ciudadanas.

Entonces, tú puedes ver cuál es la prioridad de estos ciudadanos y ciudadanas y después también se va a poder dar una respuesta a cada ciudadano. Con el sistema decir "Oye, no pasó porque pues no sé, en Querétaro no hay icebergs, entonces pues aquí no podemos hacer un iceberg." Entonces se le va a poder contestar a cada ciudadano, pero al mismo tiempo vas a poder ir filtrando con las reglas que nosotros pongamos.

Y eso es en lo que hemos estado también trabajando. Pero por un lado no queremos que la gente se frustre de mandar una propuesta y quién sabe qué pasó. O sea, va a tener su respuesta decir "No, mira, es que lo que mandaste pues de momento hay un proyecto similar", pero le va a dar la explicación de por qué no. Incluso le va a decir que le invita a seguir participando, pero con una propuesta modificada o lo que sea.

Se trata de no regañar a los ciudadanos, sino más bien de decirles "Oiga, no podemos, es normal que no podamos atender todas, pero hay dos parámetros importantes. Uno es qué tantas otras personas apoyan tu idea o tienen ideas similares, porque eso indica prioridad."

Por ejemplo, si la gente empieza a decir "Yo quiero costos de educación" y empezamos a ver que el 80% de las peticiones o propuestas son en educación, pues es obvio que es una prioridad para la ciudadanía. Entonces va a ser algo así, Sergio, sin tener todas las respuestas hoy, pero sí va a haber un sistema, ¿no? No vamos a dejar que pase todo así nada más.

**Sergio:** Okay. Okay.

**Edgar Barroso:** No, y lo vamos a ir afinando. Lo vamos a ir afinando para que haya reglas. Ahí está la respuesta.

**Toño:** Yo qué bueno que lo estemos trabajando de esta manera. Sin duda alguna, el orden con el que vayamos alimentando este sistema va a ser fundamental. Yo quiero más hacer una apreciación.

Vámonos de lo menos a lo más. Vámonos con mucha precaución, pero tampoco dejemos de ver que esto no tiene límite, ¿no? Y quiero compartirte, Edgar, que esa es mi visión. O sea, yo no estoy pensando en que este sistema tenga el límite del Instituto del Futuro y única y exclusivamente sirva para el tema del futuro.

Yo lo que quiero y lo que aspiro es que esto pueda convertirse prácticamente en un gestor del gobierno y del estado, ni siquiera del gobierno, del poder ejecutivo, me refiero incluso al poder judicial. O sea, sí creo que esto tiene un potencial tremendo.

Entonces, yo quisiera un poco, ni lo trabajemos así ahorita, pero sí tengamos la visión de que quizá esto pueda migrar, hacerse completamente algo grande que nació en la idea de la planeación, pero que voy a pensar que en unos años sea el proyecto más grande del Estado que acumula la información del Estado.

Incluso, por ejemplo, oye, me quiero meter a saber quiénes son los mediadores dentro del poder judicial. Pues ahí está. ¿Cuál es la idea que he estado un poco pensando, Edgar? Que me estoy metiendo a muchos temas, incluso hasta medio...

**Edgar Barroso:** No te preocupes.

**Toño:** ...filosófico, que es la gente tiene que encontrar en este sistema la satisfacción de una necesidad primaria. Y esa necesidad primaria que yo he identificado tiene que ver con hacer comunidad, ¿no? Hacer el "social network building", ¿no?

Entonces tendrá que encontrar en la herramienta un sentido de satisfacción porque puede hacer comunidad, puede conectarse con otros que están brindando servicios que a él le interesan o bien ellos mismos pueden ofrecer sus servicios para poder ayudar a otros en este social network que es parte de hacer comunidad, parte de hacer ciudadanía, ¿me explico?

**Edgar Barroso:** Sí, totalmente. Es como empoderar al ciudadano de alguna manera, ¿no? Pero bueno, eso ya será muy a lo mejor muy mucho más adelante, es algo mucho más sofisticado.

**Toño:** Claro.

**Edgar Barroso:** Pero la idea general es cómo empoderamos al ciudadano para que aporte una idea, porque a final de cuentas se siente parte de una, ¿no? Y como él recibe esa retroalimentación de decir "¿Sabes qué? Tu idea me interesó, tu idea se canalizó de esta manera, tu idea está siguiendo este tramo. Oye, pero aquí también ya hay una persona que piensa como tú, ¿quieres que te conectemos?" Es decir, empezar a jugar cómo empoderamos a la gente a partir de hacer comunidad.

**Toño:** No me quiero extender, pero sí quiero dejar de manifiesto que este proyecto tiene un alcance tremendo que no tiene que ver nada más con el proyecto que ustedes plantearon. El cielo es el límite y por supuesto no quiero referirme únicamente al tema económico, pero que sepas que mi visión es que esto funcione de tal suerte que se vuelve indispensable para la tarea de gobierno y que reciba un presupuesto importantísimo en los siguientes años, ¿no?

**Edgar Barroso:** No, Toño, pues te agradezco y estamos contigo con esa visión. La verdad es que lo que hemos estado haciendo... No es la llamada porque nos tomaría mucho tiempo mostrarte todo lo que estamos preparando. Es realmente impresionante. Tienes toda razón. O sea, van a poder inferir un montón de cosas, Sergio. Un montón de comportamientos, un montón de peticiones, un montón de las conversaciones que tengamos, que ya lo pusimos en la plataforma.

Y justo eso es un poco lo que te quería mostrar. Toño, ay, Dios mío. Otra vez tengo que hacer la misma historia. No sé qué le pasa a mi meeting, pero ahorita ya supo arreglarlo. Acá y le doy aquí y listo.

Miren, déjame, voy directo, ¿eh? ¿Ahí están viendo, verdad?

**Todos:** Sí.

**Edgar Barroso:** Okay. Mira, Toño, ya pudimos hacer... Tú puedes explorar esto con calma. Aquí te vamos poniendo las fechas en las que vamos subiendo cada uno de los entregables. Entonces, aquí está el primer proceso. Recibimos feedback de ustedes y con eso empezamos a hacer ya el primer prototipo.

Es decir, cómo se puede ver... Esto no es el diseño. No es el diseño. Si no, Javi ahorita me mata, pero ya es más o menos cómo se podría empezar a ver, ¿no? O sea, explicar cómo funciona. Esta es la versión que todavía tiene "votar", pero ya aquí puedes ver, por ejemplo, cómo pueden estar explorando las propuestas, cómo se podrían ver los dashboards, etcétera, ¿no? Cómo funciona, donde tú propones tus ideas y tal.

Creo que esta es la primera versión. Aquí todavía usamos "votar", lo cambiamos por "impulsar" para que sean likes. Eso ya hicimos el cambio, nada más que no tengo la liga ahorita. Aquí lo cambiamos a "transformar" y aquí a "conversar".

Entonces "conversar", porque hablábamos de que el ciudadano también puede ir a decir "Oye, yo soy una señora que vive en tal colonia, que me quedé sin chamba, que no sé qué, dónde puedo pedir ayuda, qué puedo hacer", etcétera. Y un poco ya tenemos aquí cómo sería unirte al SIC, cómo podrías participar o simplemente ir y registrarte con tu correo, con tu teléfono, etcétera, ¿no?

Entonces, ya empezamos a desarrollar un poco. Todavía no están todas las partes del backend, pero Óscar ya empezó a trabajar en ellas. Entonces, creo que esa era una parte muy importante del primer hallazgo.

Después aquí se pusieron las reflexiones sobre la llamada. Esto fue lo que ustedes nos dijeron. Oye, cuidado con esto, cuidado con lo otro, etcétera. Aquí están las tuyas, que por eso estamos grabando todas las sesiones, porque se queda el historial.

Aquí incluimos una parte de literatura por si les interesa leer sobre otros ejemplos que se han hecho en el mundo, sobre papers que se han escrito, etcétera. Ya están los entregables y después se hizo una actualización del diseño del proceso. Es decir, ya se cambió "votar" por "impulsar", "impulsar" por "transformar" y ya se puede ver aquí la experiencia.

Perdón, esto todavía está en ASCII, pero fíjate cómo ya quitamos "votar" y podría ser "proponer", "impulsar", "transformar" y "conversar" con el sistema. Y aquí están los journeys, ¿no?, que es un poco lo mismo, que también responde un poco a tu pregunta, Sergio, de la movilidad, la salud, o sea, que podamos clusterizar los temas, ¿no?

Lo que quiero decirles con esto es que esto ya se actualizó, ya tenemos una versión donde ya se quitó "votar", etcétera, y ya se hizo también todo este ejercicio.

Y finalmente, ya empezamos. Aquí está el código de ética, el primer código de ética del SIC, que por ejemplo ya tiene... ah, tiene errores, estoy viendo de... es que lo hicimos con un modelo que no es bueno para español.

Y luego la nueva versión del diagrama del proceso, que aquí está, digamos, el nuevo diagrama ya con "votar" y tal, y también con las preocupaciones que tenían sobre esto. Ya corregimos también todas las preocupaciones que tenían. Ustedes lo pueden explorar con más calma.

Por eso te decía, Toño, que esta no es la llamada, pero aquí ya involucra. Esto es una parte importantísima de entender, por ejemplo, la integración de los actores, el descubrimiento, el modo de exploración, cuando el usuario participa, con esto empieza a participar, pero ahora ya puede proponer, impulsar, transformar y conversar. Esa es la nueva cosa que le pusimos.

Participación del flujo de proponer, flujo de impulsar, flujo de transformar, flujo de conversar. ¿Cuál es? Esta es la parte de nosotros. Esta es la parte del motor de inteligencia artificial. Aquí da los informes, se va al gobierno, se hace retroalimentación y hay un ciclo que regresa al ciudadano.

Esto no es para verlo hoy. Solo quería decirte, Toño, que tomamos sus comentarios y ya están incluidos en las nuevas versiones del diagrama de flujo y también que ya tenemos, digamos, la primera versión del agente, ¿no?

Este ya es un agente en el que ya puedes hablar con la cosa. Es un chat muy modesto de momento porque pues nada más hemos estado conversando, pero bueno, ya le puedes preguntar. "Tengo una idea para mejorar la movilidad en Querétaro", ¿no? Por ejemplo. Entonces ya está conectado a un sistema, etcétera, pero ya nació. Este es el embrión.

Ahorita todavía no es la parte final ni mucho menos, pero ya nació y ahora este es el bebé que vamos a empezar a cargar con toda la información que justo le estamos pidiendo a Toño y a todos que nos echen la mano, ¿no? Pues eso, esos son los avances hasta ahorita.

**Sergio:** Una pregunta, Edgar. Las que ahorita que estoy viendo ahí el diagrama y este planteamiento, y no sé, Toño, no porque no lo sé si sea conveniente o si es posible. Entiendo que el sistema de esta inteligencia colectiva, como bien decía Toño hace rato, pues tiene que tener un alcance amplio y profundo, ¿no?, para empoderar a la ciudadanía y sobre todo pues poder llegar a la juventud, que yo creo que es ahorita el factor determinante para lo que nos aguarda en el 27 a nosotros acá en Querétaro.

Sí, pero no sé si así está planteado o no. Nosotros tenemos, seguramente Toño ya te lo contó, tenemos que cumplir con un asunto de carácter constitucional de nuestro estado en actualizar el documento que está ahí ya en el sistema. Entonces, como ese documento tiene una estructura metodológica...

**Edgar Barroso:** Claro.

**Sergio:** Entonces tenemos que tener mucho cuidado de no irrumpir en... o sea, la actualización del plan 2050 tiene que ver más con qué le cambiamos a lo que pusimos que queremos hacer o porque le agreguemos, porque le quitemos, porque lo ampliemos, que meternos con el tema metodológico. Si no, entonces el documento casi casi que hay que tirarlo y volver a empezar.

No, pues no, yo no creo que la tarea que tenemos enfrente, como la hemos venido planteando acá sin la inteligencia artificial, pues es realizar talleres con especialistas, realizar talleres con ciudadanos y que los ciudadanos nos ayuden a ir tomando en consideración, como bien señalabas, donde existan las coincidencias, las cosas que estén planteadas y tal. Entonces, esa es una tarea que nos está esperando para tener la lista en septiembre el otro año.

**Edgar Barroso:** Sí.

**Toño:** Sí. Y en enero vamos a empezar. Sergio, Sergio, a ver, déjame hacer una moción porque esta llamada la podemos ser tan amplia como podemos acabar aquí el año que entra.

Entonces, yo lo que te diría es, dejemos eso en corchete. Ahí traemos un dilema, Sergio, y es algo que tenemos que decidir. O sea, eso de que podamos tirar el documento y hagamos uno nuevo, sí es una posibilidad, Sergio. Es que estamos en la etapa de una disrupción total.

Entonces, ahorita no tomemos esa determinación y dejemos para más adelante una reunión contigo y después ya la plantearemos con Edgar para saber exactamente qué queremos y cómo lo vamos a hacer, pero ahorita no entremos a esa discusión, más bien dejemos que nos exponga Edgar esta llamada, eso, por favor.

**Sergio:** Sí, de acuerdo.

**Edgar Barroso:** Pero Sergio, también ten paz que nosotros hicimos el programa de gobierno del estado de Guanajuato, o sea, tenemos experiencia en esto. ¿Qué podemos hacer? O sea, que entendemos la parte metodológica, entendemos también lo que Toño está planteando, pero sí tenemos experiencia en estos procesos metodológicos de los institutos de planeación.

Entonces, seguramente haremos talleres, pero yo creo que lo que podemos plantear, Toño, es qué hacemos con esa información. Creo que Sergio no estuvo en ninguna de las reuniones donde les presenté un poco qué hicimos en Guanajuato, que creo también quizá para otra llamada te puedo mostrar, Sergio. O sea, hicimos talleres, hicimos tareas regionales por grupo poblacional con datos del INEGI, todo eso lo hicimos.

**Sergio:** Claro. Sí, sí, sí, sí.

**Edgar Barroso:** Pero la diferencia es y luego qué, no, luego qué haces con esa información. En lugar de que haya, no sé, una mesa de ocho personas decidiendo cuáles van a ser los objetivos, los ejes estratégicos, etcétera, pues acá hay una cosa que sugiere para que ese consejo pueda tomar decisiones, pero con algo que sí puede tomar en cuenta toda esa información y no tanto los sesgos de cada una de las personas que estén en ese consejo o lo que sea, ¿no?

Entonces, si quieres con más calma podemos tener una reunión nosotros, Sergio, donde nada más te explicamos a ti con calma una hora sobre el trabajo que hicimos con el instituto. Y también, no sé, seguramente conoces a Chela Amaro, que Chela Amaro es la directora de Itplanec en Guanajuato, también le puedes pedir referencias de nosotros y etcétera, ¿no?

**Sergio:** Te lo agradezco y sí me gustaría tener esa llamada.

**Edgar Barroso:** Claro que sí, Sergio. Pero muy bien. Ahí viene ya mi tocayo. Mira, ya se sumó ahí, don Edgar.

**Edgar Mohar:** Hola, Edgar.

**Sergio:** El ingeniero.

**Edgar Barroso:** El ingeniero Mohar.

**Edgar Mohar:** Perdónenme. Muy buenos días.

**Edgar Barroso:** No, tranquilo.

**Toño:** Hola. Me confundí de día tremendamente, caray. Oye, Edgar, a ver, te pongo en contexto. Estamos escuchando de manera ejecutiva un poco los avances de lo que tenemos, independiente de que le damos seguimiento a todo lo que ya tú le has dado seguimiento también, Sergio.

Y hablamos también un poco sobre que este proyecto, si bien inicia en el Instituto del Futuro con una visión de justamente como ahorita lo hemos limitado, que es impulsar, bueno, dar iniciativas, impulsar otras iniciativas, conversar y creo que el otro es transformar. Bueno, también esto no tiene límites, pudiera ser un agente que nos pueda ayudar a todo el estado, ni siquiera al gobierno ejecutivo, sino también a lo legislativo, al judicial más adelante. O sea, esto no tiene techo, ¿no?

Pero vámonos poco a poco, vamos cobrando la información y ahorita a mí lo que me interesaba mucho es ver cómo está funcionando este primer modelo de conversación con el sistema, ¿no?

**Edgar Mohar:** Excelente, excelente. Veo que no está Óscar, ¿verdad?

**Edgar Barroso:** No, Óscar tuvo un suceso familiar y tuvo un fallecimiento en la familia. Se disculpa, pero supe que se juntó contigo, Edgar, y que hablaron un poco de la parte de la información y no sé si quieras comentar algo al respecto.

**Edgar Mohar:** Sí, es que también nos reunimos con Sergio y un poco en el sentido de lo que dice Toño, pues sí había esa inquietud del alcance final de todo este asunto. Y lo estuvimos empaquetando y una parte interesante que platicamos con Óscar era cómo clasificar un poco los paquetes de información que vamos a subir, sobre todo por si la regamos en una parte, pues borrar todo ese conocimiento que sea más fácil y subir el nuevo paquete actualizado.

Y para que la gestión sea más fácil de todos esos documentos, por un poco por lo que dice Toño, pensando cómo acotamos al principio y le va sumando funcionalidades para no volvernos locos, ¿no?

**Edgar Barroso:** Sí. Y también, tocayo, si resulta muy complicado, simplemente mándenos los documentos y nosotros podemos hacer que un agente los clasifique. Eso también, para que después ustedes los validen y digan "Ándale, eso era lo que yo quería", ¿no?

**Edgar Mohar:** De hecho, de hecho, hicimos ese día ahí platicando con Óscar, hicimos una preclasificación y la idea es nosotros no detener, no, sino...

**Edgar Barroso:** Exacto.

**Edgar Mohar:** ...justamente mandar y el que iba a clasificar era Óscar, más bien.

**Toño:** Sí, exacto. Sí, eso podemos ser clasificación, Edgar, ya que te vaya haciendo las propuestas, a ver si sí me la puedes rebotar, porque para mí me interesa mucho tener claridad en cómo estamos clasificando para que sea muy claro.

Y por otro lado, independientemente de que haya clasificación, pues digo, los agentes tendrán que interactuar, ¿no? De tal suerte que a pesar de que estén clasificadas las informaciones y las bases de datos, pues obviamente el trabajo ya es integral, ¿no? De interrelación entre los diferentes temas, ¿no?

**Edgar Barroso:** Exactamente. Exactamente.

**Edgar Mohar:** Y un poco la inquietud salió, tocayo, porque te acuerdas en la última reunión donde estuvimos tú y yo...

**Edgar Barroso:** Sí.

**Edgar Mohar:** ...que estaba el tema de "manden la información, la información" y entonces yo te decía, hijo, es que hay información, por ejemplo, la de transporte público, las rutas de transporte público.

**Edgar Barroso:** Ah, sí, de acuerdo.

**Edgar Mohar:** Algo muy dinámico que va a estar cambiando, que todavía nadie lo tiene muy sistematizado, ¿no? Y tú dijiste "Bueno, empecemos con lo que es la esencia del SIC, ¿no? Y le vamos sumando cosas."

Y entonces en la reunión con Sergio, platicamos con esto que también causó ahí algunas inquietudes y entonces justo por eso fue la reunión con Óscar para tratar de entender qué son los documentos que son la esencia del SIC, ¿no? Porque, digamos, no hay una frontera muy clara entre esas clasificaciones.

Entonces decíamos, a ver, ¿qué está en la esencia del SIC? Como es un instrumento de planeación, pues está justo el plan Querétaro 2050. Ese es, digamos, la semilla, ¿no? La semilla. Y hay otros documentos ahí pegados que tiene que ver parte del marco normativo, que es otra clasificación, el marco normativo que tiene que ver con planeación, que lo comentó Toño ahí en algún mensaje, todo lo que tiene que ver con la ley de planeación del Estado, el plan de desarrollo, que en teoría hacia adelante deben de estar siempre acotados al marco del plan Querétaro 2050.

Y luego estaban ahí todas las... ¿cómo les llamó el ingeniero Ibarra?

**Sergio:** Sí, anda por aquí, ¿verdad? Las...

**Edgar Mohar:** Sí, todas las proyecciones.

**Sergio:** Hola, Ingeniero Ibarra. Todas las proyecciones ya están todas las proyecciones ahí en...

**Edgar Barroso:** Exacto.

**Edgar Mohar:** Perfecto. Fantástico, Sergio. Muchas gracias. Todas las proyecciones que ha hecho la secretaría y ahí le hicimos una modificación para asegurarnos que tuviera fuente.

Entonces, bueno, la idea es que con todo este... esto es lo que entendemos como esencia. Ahora hay muchísima más información y ahí con Óscar decíamos, bueno, hay información que tiene que ver con programas, Toño, ¿no? Información con trámites que esos ya están mapeados, o sea, todos los trámites de gobierno, que estén empaquetados en algún lugar, porque según yo ya hay una responsabilidad de estar actualizando el sitio web de trámites y qué se necesita y qué no se necesita.

Servicios públicos y ahí se separan porque ahí entra agua, transporte, etcétera, etcétera. Y ahí va a ser muy complicado de arranque, o sea, se puede tener algunas cosas, pero siento en mi experiencia que las áreas de gobierno unas más que otras tienen eso sistematizado y estructurado y otras un poco más desperdigado. Y Sergio ahí también nos platicaba que pues luego pasen información tiene su reto, ¿no?

Y digo ya muy rápido, acciones de gobierno que luego no están en los programas, no están en... y ahí pensamos en el programa anual de obra pública, Toño, porque pues están anunciados un montón de obras, no sé si ese sea el instrumento adecuado, pero porque hay muchas cositas que no están en el plan de desarrollo, que no están, sino que salen... hubo inundaciones y el gobernador dice que se construya no sé qué cosa aquí y acá y se hacen obras ahí de emergencia.

**Toño:** A mí me interesa justamente, Edgar, que tengamos, o sea, qué bueno que está saliendo todo esto porque es parte fundamental del diseño de este tema. Si no, lo único que vamos a hacer es una bonita presentación y va a estar padrísimo, pero luego nos vamos a atorar en el camino.

Entonces, yo sí creo que vale la pena, Edgar, que me invites a una reunión pronto para reflexionar sobre este tema.

**Edgar Barroso:** Yo súper de pronto te diría que nosotros tenemos que, o sea, si bien el alcance puede ser amplísimo, tenemos que acotar. Primero tenemos que clasificar y luego tenemos que acotar. Decir "A ver, estos son las clasificaciones, vamos a empezar por esto."

Porque lo que tú estás diciendo, yo así muy de pronto te diría es que hay cosas estratégicas y hay cosas de gestión, de operación. Todo lo de gestión, creo yo, que va en un segundo plano, que va, ¿no? O sea, todo lo que tiene que ver con los trámites, con el día a día, con lo que están haciendo, con incluso con el plan de obra, que además ni siquiera nunca se ha hecho público, o sea, casi casi hoy en día, y lo comparto aquí en confianza, se va palomeando conforme haya lana. O sea, de repente llegamos a esos extremos. Yo no quiero juzgar si está bien o está mal, pero así se hace.

Entonces, no lo vamos a poder meter. ¿Qué sí podemos meter? Todo lo estratégico para que el ciudadano lo podamos empoderar en el sentido de decir "Oigan, es que por qué no le están dando a los alumnos información o educación financiera. Yo tengo una..." Ah, órale.

Entonces, no nos estamos metiendo al diseño de política pública, ¿no? Oye, es que hoy en día, ¿cuál es el catálogo de política pública? Pues no existe, habrá que hacerlo a lo mejor, ¿no?

Oye, que el tema de las rutas, ah, bueno, pues es un tema del día a día. A lo mejor vale la pena para darle más sentido estratégico ese sí, meterlo lo antes posible. Bueno, pues habrá que hablar con Juanalo para que instale una página que mantenga actualizada de manera permanente con eso... nosotros jalamos la información jalando.

**Edgar Mohar:** Hay una página, solo una, que gestiona todos los trámites de gobierno del estado.

**Edgar Barroso:** Ah, es un gran avance.

**Edgar Mohar:** Que bueno, pues esa hay que conectar.

**Edgar Barroso:** La podríamos conectar y entonces poco a poco le podemos ir colgando cosas que están efectivamente funcionando y que son curadas, pero con esa visión de qué es estratégico, qué es del día a día, y lo que no esté, pues a lo mejor tratar de construirlo.

Creo que es fundamental eso. Creo que sí, pues en esta llamada no lo vamos a poder lograr, pero creo que también es importante que ustedes vayan avanzando, como entiendo que ya más, ¿no?

**Toño:** Pero ahí, tocayo, prometo que ya... veo que tienes la mano así.

**Edgar Barroso:** Tranquilo, tranquilo, tranquilo.

**Edgar Mohar:** Agrego esto. Y justo en ese sentido, Toño, un poco la conclusión fue hagamos compartimentos, subamos toda la información. O sea, la idea es no restringamos el flujo de información hacia el equipo del tocayo, ¿no?

**Toño:** Así es.

**Edgar Mohar:** Que vayamos subiendo ahí todo lo que vaya bien, pero vamos a pensar en cajoncitos y vamos a separar los cajoncitos: cuál es la esencia, como le llamó mi tocayo. Y ahí tenemos dos, bueno, tres cajoncitos en realidad: los instrumentos de planeación, el marco normativo y la estadística. Son los tres cajoncitos básicos que dijimos ahí hay que buscar, esos son los primeros que hay que llenar con todo lo que tengamos, ¿no?

La estadística, afortunadamente, salvo las proyecciones de planeación, lo demás es INEGI y ahí nuestro buen amigo... ay, se me olvidó cómo se llama, que está ahí con el Inge Ibarra.

**Edgar Barroso:** Joaquín.

**Edgar Mohar:** Joaquín. No sé si ya subió una relación, pero había una relación ahí, Sergio, de cuáles son las... y sobre todo de INEGI, qué nos interesa.

**Sergio:** Sí, porque también había con EVAL y otras cosas, ¿no?

**Edgar Mohar:** De esas fuentes, ¿cuáles son las bases de datos con las que más se trabajan y que deberían de estar con el robotito actualizándose de manera automática?

Y entonces un poco para resumir, ahí pusimos esos cajones y creemos que son los principales y si se les ocurre ahorita otro, está bien, pero creo que metodológicamente nos ayuda porque entonces podemos ir subiendo, como decía mi tocayo al principio, poquito a poquito, o Toño, ya no sé quién lo dijo, poco a poco más información y abriendo nuevos servicios. Oye, Juan ya resolvió una página, no sé qué. Entonces ahora el SIC también te da información de transporte, ¿no?

**Toño:** Sí. Y lo vamos manejando con esa expectativa.

**Edgar Barroso:** Exacto. Exacto. Es como un Lego, o sea, el SIC es como un Lego y nuestras piezas de Lego son las APIs, ¿no? Nos conectamos a donde haya API.

Ahora creo que lo que dijo Toño es clave, tocayo y Sergio: una cosa es lo estratégico y lo esencial de cómo quieres que piense el SIC, que es tienes que tener una información, eso nosotros lo tenemos, ahorita les muestro un poco lo que hemos avanzado. Tenemos que crear la persona del SIC, o sea, la cosa misma, ¿no? O sea, ¿quién es? ¿Dónde nació? Por ejemplo, su creador pues es Toño. O sea, Antonio Rangel en la no sé qué creó la primera versión del SIC, ¿no? Y entonces vas personalizando la cosa.

Justo lo que les quería mostrar rapidísimo, otra vez nos vamos a meter a... No se preocupen, esto es nada más para que vean todo lo que hemos avanzado porque no les podemos mostrar, porque eso es nuestra chamba, es la parte técnica.

Así es como se ve un sistema de AI, ya no un modelo, sino un sistema de AI. Entonces, primero se define el sistema, o sea, esto se define, luego se van haciendo los agentes. Esta es la primera versión del agente y nosotros tenemos nuestro agente aquí, aquí abajo donde ven que escribo, ahí es donde nosotros nos conectamos a los modelos. Pero esto es como funciona, básicamente.

Eso es todo lo que hemos empezado a hacer. ¿Qué es lo que vamos a medir? ¿Qué es lo que tenemos que aprender? Por ejemplo, ¿no? Dice que tenemos que aprender sobre flujos de decisión hacia consejos temáticos y autoridades. Por ejemplo, que era algo que tú dijiste, Toño, y Edgar, que es que pasa, o creo que Joaquín, creo, o tú, Sergio, no me acuerdo, que dijeron "Bueno, a lo mejor hay que canalizarlos a los 23 consejos ciudadanos."

Entonces, bueno, todas esas cosas ya están dentro del sistema. Nada más quiero que vean más o menos cómo es, porque se les van a ocurrir ideas de decir "Ah, claro, entendí." O sea, lo están contextualizando con todas nuestras conversaciones, con todas las ideas de Toño, con todas las ideas de Edgar, se lleva las preguntas y todo se va documentando.

Entonces, lo que es importante es yo empezaría, Toño, bajo tu mejor juicio con lo estratégico. No nos metamos en trámites, les voy a decir por qué, no porque le tengamos miedo, pero porque no depende de nosotros.

**Toño:** Me dan un segundito, por favor, me dan un segundito. Sigan adelante.

**Edgar Barroso:** Mira, por ejemplo, Sergio y Edgar, otro proyecto que hicimos con la ciudad de León es con SAPAL, la junta de agua potable, ¿no? El proyecto lo hubiéramos podido hacer en un mes y tardamos un año porque no nos daban acceso a los API, querido. Y ahí sí, pues no podemos hacer nada.

O sea, entonces no depende de nosotros y no quisiera que si nos metemos a trámites nos vayamos a atorar porque alguna dependencia de gobierno no sirven sus APIs o no tienen API o lo que tú quieras, hay que hacerlas y todo eso.

Entonces yo lo acotaría ahorita a estratégico y a ciudadanos que propongan, o sea, esta parte de proponer, de empoderar y de estrategia del Estado. Y listo de momento. O sea, creo que ya después, como es un Lego, pues le podemos conectar lo que quieran, pero de momento yo no me distraería con trámites ni y a lo mejor con programas, pero solo programas que estén autorizados por las secretarías.

Por ejemplo, imagínense que tú te encuentras por ahí que la Secretaría de Economía tiene un programa para apoyar emprendedores y entonces tú lo publicas en SIC o te conectas algo y resulta que ya lo cambió, la no se llama "emprendedoras". Ahora se llama "apoyo a lámparas" y entonces se van a enojar con nosotros porque cómo vamos a actualizar esa información.

Entonces, mientras no estén definidos los mecanismos para estar conectados en tiempo real, yo recomendaría que no nos metamos con otras secretarías de momento. Sería mi primer saque, ¿no?

**Edgar Mohar:** Completamente de acuerdo. Pero ahí lo importante porque cuando tú lees el documento del SIC que plantea un horizonte muy ambicioso, justo hay que cuidar la expectativa, ¿no? Porque sí hay información tan básica, o sea, hay que decir para qué es y qué sí te puede contestar, porque si no te puede contestar un trámite gubernamental, en la descripción del SIC se va muy lejos, ¿eh? O sea...

**Edgar Barroso:** Sí, de acuerdo, 100%. Y eso pasó en Guanajuato. Eso es un aprendizaje que cuando presentamos el programa de gobierno, Sergio, la gobernadora se viajó, se viajó, o sea, le encantó el proyecto, pero hagan de cuenta que ella imaginó como el SIC.

Pero pues nosotros no habíamos hecho el SIC, nosotros habíamos hecho el programa de gobierno con inteligencia artificial. Y entonces, ¿qué pasó? Que la gobernadora dijo, o sea, la gente esperaba porque se echó el discurso así de su ronco pecho. Entonces dijo "No, es que Esperanza" —se llamaba el agente de ella— "y de Guanajuato, nos va a ayudar con trámites y con no sé qué y no sé qué." Dije, pues sí se puede, pero ese es otro proyecto.

Y al final la gente se decepcionó porque pues justo lo que acabas de decir, Edgar, la expectativa que puso la gobernadora era altísima, y al final, o sea, nosotros no habíamos hecho eso.

Entonces, sí hay que tener cuidado de que no digamos el SIC que en su primera versión vas a verlo todo de todos, sino que eventualmente va a ir aprendiendo, ¿no? Poco a poco va a ir madurando.

**Edgar Mohar:** Y dos temas claves, uno que se me olvidó: otra clasificación que sí consideramos como de la esencia, pero Óscar se quedó con la tarea ver cómo la podemos hacer. Sergio tiene información del estado georreferenciada.

**Edgar Barroso:** Ah, perfecto. Sí, también.

**Sergio:** Y entonces estamos con la duda. Tenemos como unas 200 capas, Edgar.

**Edgar Mohar:** Exacto. Y entonces tienen ahí, por ejemplo, infraestructura, que sí es importante para la planeación, donde hay escuelas en el estado y tienen muchas capas de información, 200. Entonces esa se quedó Óscar con la tarea de ver pues cómo la íbamos a incorporar, ¿no? Porque es información que viene en estos formatos de para ESRI, para sistemas georreferenciados, ¿no?

**Edgar Barroso:** Sí, por supuesto. Miren, lo que yo diría, Sergio, es que para esos datos, pues tú escojas las primeras 10 capas más importantes y después vamos poniendo la siguiente, sí, ¿no?

**Toño:** Toda la infraestructura, Sergio, que tengamos completamente identificada toda la infraestructura. También hay mucha información, por ejemplo, infraestructura de telecomunicaciones, fibra óptica, etcétera, y habrá que curarla, ¿no? Y habrá que irnos poco a poquito, pero sí hay mucha información que creo que sí es muy importante que lo tenga el agente, pero sí de la manera más adecuada, ¿no?

**Edgar Mohar:** El Inge tiene hasta un atlas de riesgo, pero que ya está medio anciano, ¿no?

**Sergio:** Pues sí, le digo a Edgar que lo hicimos, lo diseñamos él y yo hace quién sabe cuánto tiempo y sigue siendo el mismo. Hace 20 años.

**Edgar Barroso:** Tiene 20 años el Atlas de riesgo. Sé que está en Protección Civil.

**Toño:** Sí. Aunque, por ejemplo, el Marqués tiene un atlas de riesgo vivo que es de todos los días, que eso esa es la evolución a la que tendríamos que llegar.

**Edgar Barroso:** Esta misma versión nos puede ayudar a alimentar un atlas de riesgo eventualmente, ¿no? Que a final de cuentas sea otra de las funcionalidades que tenemos. Es que pues con esto se puede hacer todo y yo esa es la aspiración que tenemos.

Ahora sí, hay un tema complicado, ahorita que te paraste, Toño, estábamos justo acotando eso, ¿no? Porque cuando tú ves el documento descriptivo del proyecto del SIC, tiene un alcance enorme y hay que acotarlo porque si no te va a poder contestar en esta instancia, en este momento sobre un trámite, hay que decir qué sí puede hacer, qué no puede hacer para no defraudar a nadie.

Y fíjense que, o sea, el problema es que al final algunas de estas cosas se vuelven de la parte de planeación, porque si alguien empieza a decir "Oye, yo quiero una ruta de transporte a Menchaca, quiero una ruta de..." Y se juntan varios. "Sí, es que queremos una ruta." Oye, este va a contestar. "Sí, perfecto, te lo junto, vamos a sumarlo." Se hace la propuesta y resulta que hay 10 rutas de transporte a Menchaca, pero pues se le dice, ¿no? Porque no tenemos subidas las rutas de transporte, porque no tenemos los servicios públicos.

¿Sí me explico? O sea, claro que está vinculado aún y cuando no quieras que el SIC conteste sobre información relevante de servicio público para un usuario. No, no, no queremos llegar hasta allá, eso es otra cosa. En planeación de repente va a haber cosas que sí.

Entonces, yo no veo problema. O sea, lo único es que hay que acotar y sobre todo hay que manejar las expectativas del usuario, sí, pero que eso no nos limite y cuando el usuario no tenga alguna respuesta, pues también el SIC tendrá que responder de esa manera. "Oye, en este momento no tengo esa información, sin embargo, esta pregunta está siendo almacenada para ver si podemos cargar información a la ver."

**Toño:** Claro, claro.

**Edgar Barroso:** Exacto. Y si por ejemplo es de movilidad, pues te recomiendo que contactes a la Secretaría de Movilidad, no hay, pero a quien sea y le mande la liga y ya.

**Edgar Mohar:** Sí, esa sí es una pregunta de servicio público, pero si fue una propuesta, pues lo que se dice es "Okay, perfecto, registrada y eventualmente, cuando los contactemos, cuando esa propuesta efectivamente empiece a tomar movimiento, pues ya se le contestará."

**Edgar Barroso:** Oye, correcto. Ya ahí está en cuenta.

**Toño:** Claro, en esta ocasión primero pues va a ser así con ese trámite. Si a final de cuentas luego logramos subir todo, pues la contestación va a ser mucho más automática, ¿no?

**Edgar Barroso:** Claro. Exacto.

**Toño:** De acuerdo. Muy bien.

**Edgar Barroso:** Pues listo. Nosotros seguimos trabajando, Toño.

**Toño:** En lo que queremos hacer es hacer una primera vez, ¿cómo escribiste ahí en el prompter y qué contestó la inteligencia? O sea, eso que dicen, ¿cómo jugamos? ¿Podemos ver eso?

**Edgar Barroso:** Esa parte, claro que sí, déjame buscarlo porque lo cerré, pero está aquí.

**Edgar Mohar:** Yo me metí a jugar y es que sabes qué pensé, mi estimado tocayo, yo sí pensé que aunque sabía que era un mock, ¿no? Pero pensé que sí iba a ir navegando en las distintas pantallas para conocer esto.

**Edgar Barroso:** Sí, todavía no. Es que ahí también ya hay una nueva versión, pero esa la tiene Óscar. Déjame cerrar esto.

**Edgar Mohar:** ¿Y dónde quedó? ¿Estás buscando?

**Edgar Barroso:** Estoy buscando el agente para mostrárselo a Toño. Está en el Notion. Toño, tú también lo puedes jugar con él, ¿eh? Lo que tú quieras.

Ya, mela, es que me manda aquí. Está. Okay. Entonces, ¿ahí todavía no lo ven, verdad? O sí.

**Edgar Mohar:** No, no estás compartiendo.

**Edgar Barroso:** Ay, perdón, discúlpeme. Ya abrí como 20, ya vi cuál es el problema. Es que como no estoy en mi casa, todo se me mueve un poquito, pero mira, aquí está.

A ver, ¿cuál fue? Aquí está. No sé qué le... a ver, qué gusto leer eso. "Justo este tipo de ideas son las que mejoran la ciudad. Me encantaría escuchar tu propuesta para poder comprender mejor en qué consiste tu idea, en qué zona o colonias de Querétaro la ves útil", etcétera, ¿no?

Con esa información, "ayudarte a pulir la propuesta", lo que te decía, la va a ayudar a pulirla, orientarte y dice "Cuéntame con calma tu idea y la vamos trabajando juntos."

**Toño:** Okay. Sí, muy...

**Edgar Barroso:** Entonces...

**Toño:** Ajá.

**Edgar Barroso:** Sí, lo podemos cambiar.

**Toño:** Eso a mí sí me gustó. Ajá. Sí.

**Edgar Barroso:** Y luego ya pues tú le puedes decir "No, quiero una ruta." ¿Dónde dijiste, tocayo?

**Edgar Mohar:** A Menchaca. Una nueva ruta a Menchaca.

**Toño:** El centro.

**Edgar Mohar:** Sí, del centro a Menchaca, por decir algo así.

**Toño:** De transporte público, ¿verdad?

**Edgar Mohar:** Ajá.

**Edgar Barroso:** "Quiero una nueva ruta de transporte público del centro a Menchaca."

Ahora, Toño, esto no es la versión final ni mucho menos. Es nada más para saber que ya existe un ente en algún lugar, un modelo que está pensando en estos términos.

"Es una muy buena idea, sobre todo porque la conexión Centro-Menchaca es clave para estudiar y trabajar y hacer trámites. Te explico y te pongo cómo avanzar. ¿Quién guía el transporte público? El transporte público también lo coordina principalmente el gobierno del estado a través del sistema de transportes de Qrobús, el Instituto Queretano..."

**Toño:** Sí me llama la atención y está chingón eso porque o sea eso de "¿de qué zona del centro te imaginas? Por ejemplo, Alameda, Jardín Zenea..." Por ejemplo, toda esa información de Alameda, Jardín Zenea o Menchaca 1, 2, 3... que me llama la atención que lo traiga y que haga unas preguntas tan interesantes como esas, ¿cómo se las cargaron o de dónde jala esa información? ¿Esto estás jalando ChatGPT, no, tocayo?

**Edgar Barroso:** No, este es otro modelo, pero sí es un LLM.

**Toño:** Es un LLM. Pero, ¿cuál? ¿Qué modelo es?

**Edgar Barroso:** Es Claude 4.5.

**Toño:** Ah, Claude. Okay.

**Edgar Barroso:** Sí. Pero lo podemos cambiar, para nosotros es lo de menos, una inteligencia artificial, digamos que ya está, ¿no? 100%, ¿no?

**Toño:** Exacto.

**Edgar Barroso:** Y podemos hacer una que sea nada más de ustedes que corra en sus servidores. Eso también lo podemos hacer, pero es otra conversación, pero de momento ya esto tiene Claude y podemos cambiar a cualquier modelo que ustedes quieran.

Tocayo, o sea, eso es o incluso la combinación de los distintos modelos, pero esta información está buena porque te acuerdas lo que te mostré, Toño, de o sea, todo ese chorizo de archivos, o sea ya tiene toda esa información y además tiene inferencias geográficas de Querétaro. Entonces ya sabe las colonias, ya se sabe las... O vamos haciendo al bebé.

El bebé primero tienes que decirle pues que es Querétaro, que entonces ya empieza a tener información que jala de internet, información que nosotros le cargamos, etcétera. Pero sí va a ser muy específico.

**Toño:** Sí, porque también parece una novedad, Edgar y Sergio, pero la información en la parte esta que dicen estadística es estadística geográfica, ¿no? Poblacional, o sea, todo lo que tiene que ver como el INEGI lo hace, ¿no? De Querétaro en específico, proyecciones, etcétera.

**Edgar Barroso:** Bien. Entonces mira, por ejemplo, "si me dices desde qué punto del centro, a qué parte exactamente de Menchaca y qué problema tienes hoy con las rutas actuales, yo te dejo redactada tu propuesta."

**Toño:** Okay. Va.

**Edgar Barroso:** Y ahora lo que es importante mostrarles es que ya existe y que de ahí en adelante lo vamos a hacer robusto, adecuado y con diferentes versiones.

Esta es una versión, de hecho, esta va a ser tu versión y después vamos a hacer una versión del SIC para los ciudadanos y después vamos a hacer una versión a lo mejor para Sergio, por ejemplo, para el instituto. Para que tú puedas hacer tu próximo... por ejemplo, imagínate que recopilamos toda la información de todos los ciudadanos de tus talleres y de todo el proceso que va a ser metodológico y tú le puedas preguntar cosas pues tan obvias como "Oye, pero ¿cuáles son las tres preocupaciones más importantes de las personas?" "Ah, pues agua, seguridad y..." Siempre son esas, o muy, o no siempre, pero muchas veces son ellas esas, ¿no?

Okay. Sí, pero en seguridad, dime como en qué tipo de seguridad están enfocándose más las personas. "Ah, mira, no, pues por ejemplo en Guanajuato salió mucho la violencia contra los niños", por ejemplo, ¿no? Que es pues se entiende, ¿no? Porque pues es algo que nadie quiere y era muy importante para la seguridad. Si van a arreglarlo la seguridad, primero arreglen la violencia contra los niños y después pues la trata de personas y otras cosas, ¿no?

Pero en fin, esos han sido nada más como los avances, Toño. A mí como que me da no sé qué mostrarte esto porque sé que va a mejorar un montón, pero ya existe, o sea, ya estamos construyendo sobre algo que ya existe y que va a ir mejorando poco a poco. Y eso era lo que te queríamos mostrar, como decías tú, que estés tranquilo, que hemos estado avanzando, ¿no?

**Toño:** Bien.

**Edgar Barroso:** Y tú ya tienes acceso a la cosa, ¿eh? O sea, tú en esa liga que tienen ustedes, ya actualicé los entregables, tocayo Edgar. Entonces ahí puedes ir viendo las nuevas versiones de todo.

**Edgar Mohar:** Oye, tocayo, ¿pueden poner ahí en el...? ¿Estás en muteo o yo no tengo?

**Sergio:** No, él no... Tú no lo oyes, pero yo sí lo escuché.

**Edgar Barroso:** Yo también escuché a Edgar igual yo.

**Edgar Mohar:** Ah, ¿verdad? Hola, hola, hola.

**Edgar Barroso:** Sí, eres tú. Sin audífonos.

**Edgar Mohar:** ¿Tú me escuchas ahí, Edgar?

**Edgar Barroso:** Sí.

**Edgar Mohar:** Ustedes a mí, pero yo no los oigo a ustedes, ¿verdad?

**Edgar Barroso:** Exactamente.

**Edgar Mohar:** Denme un segundo. Perdón, esta tecnología. Les digo que no estoy en mi casa.

**Sergio:** Así ocurre a veces con el gobierno. Los ciudadanos nos escuchan a los que gobernamos y nosotros no los escuchamos.

**Edgar Barroso:** Ahí, o hacemos como que escuchamos.

*[Pausa técnica mientras Edgar Mohar arregla su audio]*

**Edgar Barroso:** Tocayo, ¿ya nos escuchas? No nos escucha. Tocayo, ¿nos escuchas?

**Edgar Mohar:** No, es que fíjate que sí eran, no eran los AirPods.

**Edgar Barroso:** Ay, qué interesante.

**Toño:** No manches, es que este tipo de llamadas yo me puedo quedar aquí hasta las 6 de la tarde.

**Edgar Barroso:** Bueno, yo tengo tiempo.

**Sergio:** No, yo no.

*[Pausa mientras Edgar Mohar resuelve problemas técnicos]*

**Edgar Mohar:** Aquí está el link.

**Edgar Barroso:** Este librito que dice "The Sign in Your Life". ¿No lo has leído, Edgar?

**Edgar Mohar:** No, pero habla de que ya sabes que los gringos son muy... que además de que te lees el libro, te ponen ahí a chambear y entonces tienes que identificar cuáles son las actividades en las que te ponen en otro mood, ¿no? Así que te ponen en modo creativo y que te vas en flow y esta es una de las que a mí me ponen en otro canal.

**Edgar Barroso:** Ah, mira. ¿Y estás leyendo en este momento o ya lo leíste?

**Edgar Mohar:** No, sí, ya lo leí, pero luego deja mucha tarea. Sí, ya lo leí.

**Edgar Barroso:** Ya estoy, tocayo. ¿Ya nos escuchas?

**Edgar Mohar:** Ya, ahora sí.

**Edgar Barroso:** Perfecto. Decía Toño que hasta pareces de gobierno.

**Edgar Mohar:** Sí, caray. Sí, muy mal, muy mal.

**Edgar Barroso:** Ya no. Solo tu voz se escucha y a nosotros nos dejas así. Exacto.

**Edgar Mohar:** Ya no los escucho a ustedes. No, discúlpenme, man. Es que digo que ando en la casa de mis suegros y todo está medio chueco aquí. ¿Qué pasó?

**Toño:** Oye, tocayo, te iba a decir que si no puedes subir el link al Drive donde están los documentos, al Notion. Según yo no estaba ahí.

**Edgar Barroso:** Claro, claro. Pues por donde nos digan aquí le Toño, si quieres te lo paso por WhatsApp.

**Toño:** Se los paso al grupo por WhatsApp también, por favor.

**Edgar Barroso:** Ajá. Y ahí ustedes pueden ir viendo con calma. Déjenme ver dónde están ustedes. Sí, listo. Entonces, ahí les dejo la liga. Ahí está todo lo que hemos hecho hasta ahora para que lo puedas revisar con calma, te metas a ver los diagramas, todo eso, pero a su tiempo, porque sabemos que es complicado.

Y cuando quieran una pregunta específica, como lo de Sergio de "oye, pero tenemos esta cosa en septiembre", oye, y mi tocayo quiera ver el proceso y decidir eso y todo eso, con gusto lo podemos ver con calma, con más detalles. Y a ti, Toño, lo que yo te decía, o sea, vernos cuando lo necesites, pero bienvenido, la verdad es que son muy buenas las reuniones. La verdad.

**Toño:** Bien, entonces pues si gustan lo dejamos hasta aquí.

**Edgar Barroso:** Edgar, no sé si tú tengas algún otro comentario, Sergio.

**Edgar Mohar:** No, lo único que quedaría con Edgar, bueno, para distinguir a Matute de Edgar, ¿no? Con Edgar es pues lo que me dijiste, ¿no? Que tuviéramos una llamada entre nosotros.

**Edgar Barroso:** Claro que sí. Puede ser lunes o martes de la próxima semana, Sergio. Yo ahorita te contacto por WhatsApp para no molestar, nos ponemos de acuerdo.

**Sergio:** Claro que sí. Y me quedo con el pendiente de la próxima semana revisar todo lo que ya tenemos de las capas y subir las que tenemos de infraestructura.

**Edgar Mohar:** Las capas van a tener lo mismo que ahorita decía Matute de que cómo se actualizan. Tenemos que prever en el modelo cómo vamos actualizando la... sin problemas, en el proceso de funcionamiento del SIC.

**Edgar Barroso:** Sí, va a ser una base de datos, ¿no, Sergio? Al final.

**Sergio:** Sí. Aunque como bien decía Edgar, pues utilizamos un software para hacer la georreferenciación.

**Edgar Barroso:** Pero, ¿qué usas? ¿QGIS o GIS o qué usas?

**Sergio:** El QGIS.

**Edgar Barroso:** El QGIS. Ah, perfecto. Sí, con el QGIS nosotros nos conectamos sin broncas. Es eso, es lo que te pasaría. Un archivo, un conjunto de archivos de QGIS es lo que vamos a subir ahí.

**Sergio:** Sí, perfecto.

**Toño:** Vale, muy bien. Vientos. Muy bien.

**Edgar Mohar:** ¿Cuándo es la siguiente reunión, tocayo?

**Edgar Barroso:** Ah, pues digan, o sea, es que en teoría tendríamos reunión el lunes, pero creo que primero no ahorita no tiene sentido. No vamos a tener mucho avance. Entonces, en teoría es el lunes 5 nuestra siguiente reunión. Pero de todos modos, pues cualquier cosa estamos en el chat y nosotros seguimos avanzando.

**Toño:** Sí. Oye, eso, no sé si me escuchaste lo de ver si podemos poner en el...

**Edgar Mohar:** Estaría muy bien ahí en...

**Edgar Barroso:** Ah, sí, está. Dice "Drive". Sí, sí, está en el creo.

**Edgar Mohar:** Dice sí, dice... Ya ven, ya ven. Mi tocayo piensa en todo.

**Edgar Barroso:** Nosotros vamos, él ya viene de regreso.

**Toño:** Muy bien, pues listo, poco a poco.

**Edgar Barroso:** Venga, muchas gracias, colegas. Que tengan muy buen año.

**Todos:** Descansen. Gracias. Felicidades. Muchas gracias.

**Edgar Barroso:** Gracias, gracias. Chao.

---

## Resumen Ejecutivo

### Participantes
- Edgar Barroso (Matute) - Líder técnico
- Toño Rangel - Gobierno del Estado
- Sergio Luis Ibarra Gonzalez - Instituto del Futuro
- Edgar Mohar - Colaborador

### Temas Principales

1. **Estado del Proyecto SIC**: Se mostró el primer prototipo funcional con las funciones "proponer", "impulsar", "transformar" y "conversar".

2. **Categorización de Información**: Se definieron tres "cajoncitos" esenciales:
   - Instrumentos de planeación (Plan Querétaro 2050)
   - Marco normativo
   - Estadística (proyecciones, datos INEGI)

3. **Visión a Largo Plazo**: Toño expresó que el SIC podría convertirse en un gestor integral del estado, abarcando poder ejecutivo, legislativo y judicial.

4. **Control de Calidad**: El sistema ayudará a los ciudadanos a redactar mejor sus propuestas y las agrupará en clusters temáticos.

5. **Limitaciones Acordadas**: Se decidió no incluir trámites gubernamentales ni información operativa en la primera fase, enfocándose en lo estratégico.

6. **Información Georreferenciada**: Sergio tiene ~200 capas de información en QGIS que se irán integrando gradualmente.

### Próximos Pasos
- Reunión Edgar Barroso - Sergio: lunes o martes próxima semana
- Próxima reunión general: lunes 5 de enero
- Sergio revisará y subirá capas de infraestructura
- Se compartirá link del Drive por WhatsApp

### Modelo de IA
- Se está usando Claude 4.5 como modelo base
- Posibilidad de cambiar a otros modelos o combinaciones
- Opción futura de correr en servidores propios del gobierno
