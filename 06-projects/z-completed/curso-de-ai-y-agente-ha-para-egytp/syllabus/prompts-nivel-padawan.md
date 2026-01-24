| Escritura, coding, hobbys |
| ------------------------- |





---
## ¿Por qué es relevante?

### Algoritmo (Algorithm)

[Google Colab](https://colab.research.google.com/github/alvinntnu/python-notes/blob/master/nlp/gpt2.ipynb)

---

---

[Guía de Ingeniería de Prompt – Nextra](https://www.promptingguide.ai/es)

![Screenshot 2025-10-27 at 9.01.07 PM.png](attachment:e8dc6f0b-7a2e-437d-a688-671c74e0c544:Screenshot_2025-10-27_at_9.01.07_PM.png)

---

## Actividad

> Reto: poner a prueba los skills de prompting

[https://artsandculture.google.com/experiment/say-what-you-see/jwG3m7wQShZngw](https://artsandculture.google.com/experiment/say-what-you-see/jwG3m7wQShZngw)

![Screenshot 2025-10-27 at 9.14.03 PM.png](attachment:1b4aeeeb-b63e-4aea-8d01-6b03bce4615d:Screenshot_2025-10-27_at_9.14.03_PM.png)

[Complete AI Bundle](https://www.godofprompt.ai/)

# **C.R.E.A.T.I.V.O.**

---

- **C - Contexto (Context):**
    
    ¿Cuál es el trasfondo o la situación?
    

---

- **R - Rol (Role):**
    
    ¿Quién quieres que sea la IA?
    

---

- **E - Ejemplo (Example):**
    
    ¿Puedes mostrarle un ejemplo de lo que quieres?
    

---

- **A - Audiencia (Audience):**
    
    ¿Para quién es la respuesta?
    

---

- **T - Tarea (Task):**
    
    ¿Cuál es la acción específica que debe realizar?
    

---

- **I - Instrucciones (Constraints & Format):**
    
    ¿Cuáles son las reglas y el formato de salida?
    
    - **Restricciones:** Lo que NO debe hacer.
    - **Formato de Retorno:** Cómo debe verse la respuesta.

---

- **V - Voz y Tono (Voice & Tone):**
    
    ¿Cómo debe sonar la respuesta?
    

---

- **O - Objetivo (Goal):**
    
    ¿Cuál es el propósito final o el porqué de la tarea?
    

---

### **2. ¿Por qué es esto tan importante? La Ingeniería de Prompts**

La ingeniería de prompts es el arte y la ciencia de proporcionar instrucciones claras a una inteligencia artificial para obtener el resultado que deseas. Un modelo de lenguaje como Gemini es increíblemente poderoso, pero **no puede leer tu mente (todavía)**. Sin instrucciones claras, te dará una respuesta genérica, vaga y, a menudo, inútil.

Una instrucción bien diseñada es la diferencia entre la frustración y la magia. Es la habilidad fundamental para convertir una herramienta interesante en un asistente personal increíblemente competente.

---

### **3. Los Principios Fundamentales y la Analogía de la Biblioteca**

Imagina que entras a la biblioteca más grande del mundo (los datos y el conocimiento de la IA). Detrás del mostrador hay un bibliotecario con una memoria perfecta y una velocidad sobrehumana (el modelo de IA), que ha leído todos los libros. Tu prompt son las palabras que usas para pedirle ayuda.

**Prompt poco eficiente:** Tú: "Necesito un libro sobre negocios". El bibliotecario te señalará un pasillo con 50,000 libros. La respuesta es correcta, pero no te sirve de nada.

**Prompt bien estructurado:** Usaremos el framework para mostrar la diferencia.

# **C - Contexto (Context) → "Contextual Priming" o "Background Framing”**

<aside> 💡

- _**Qué es:** Darle el trasfondo de tu petición. Es el "porqué" detrás de tu pregunta._
    - **Explicación técnica:**
        
        El contexto activa selectivamente las representaciones latentes en el espacio de embeddings del modelo, reduciendo la entropía de las distribuciones de probabilidad posteriores. Funciona como un mecanismo de atención que sesga la generación hacia dominios semánticos específicos.
        
    - **Analogía de la Biblioteca:**
        
        No solo pides un libro, sino que le dices al bibliotecario: "**Estoy preparando una presentación para mi jefa sobre estrategias de marketing digital.**" Inmediatamente, la persona bibliotecaria descarta el 99% de los libros de "negocios" (contabilidad, logística, etc.) y se enfoca en lo que necesitas.
        
    - **Ejemplo:**
        
        > CONTEXTO: Estoy escribiendo un paper para Nature Computational Science sobre la aplicación de teoría de redes complejas para optimizar arquitecturas de transformers. Los revisores del primer round pidieron clarificar la conexión entre small-world networks y attention mechanisms. Necesito reformular el abstract para enfatizar esta relación sin exceder 150 palabras.
        > 
        > PREGUNTA: ¿Cómo puedo reescribir mi abstract?
        
    - **Referencias:**
        
        - Liu, P., Yuan, W., Fu, J., Jiang, Z., Hayashi, H., & Neubig, G. (2023). "Pre-train, prompt, and predict: A systematic survey of prompting methods in natural language processing." _ACM Computing Surveys_, 55(9), 1-35. </aside>

---

# **R - Rol (Role) → "Role-Based Prompting" o "Persona-Driven Instruction”**

<aside> 💡

- _**Qué es:** Decirle a la IA qué "sombrero" o profesión debe adoptar. Esto activa el conocimiento y los patrones de lenguaje asociados con ese rol._
    
    - **Explicación técnica:**
        
        **Explicación técnica:** La asignación de roles explota la naturaleza composicional de los transformers, activando subredes específicas entrenadas en corpus especializados. Esto induce un comportamiento consistente con el conocimiento y estilo lingüístico del rol especificado.
        
    - **Analogía de la Biblioteca:**
        
        Le dices al bibliotecario: "**Actúa como un asesor experto en startups de tecnología.**" Ahora no solo buscará libros, sino que te los recomendará desde la perspectiva de alguien que entiende el ecosistema tecnológico, dándote consejos que un bibliotecario generalista no podría.
        
    - **Ejemplo:**
        
        > Actúa como un hybrid entre Geoffrey Hinton (deep learning pioneer) y Albert-László Barabási (network scientist). Tienes décadas de experiencia publicando en journals Q1 y eres editor asociado de Science Advances. Tu especialidad es identificar conexiones no obvias entre campos aparentemente distantes. Evalúa esta hipótesis: "Los LLMs exhiben propiedades de criticalidad auto-organizada similar a los sistemas complejos biológicos durante el fine-tuning."
        
    - **Referencias:**
        
        - Bai, Y., Kadavath, S., Kundu, S., et al. (2022). "Constitutional AI: Harmlessness from AI feedback." _arXiv preprint arXiv:2212.08073_.
    
    ---
    

</aside>

# **E - Ejemplo (Example) → "Few-Shot Learning" o "In-Context Learning (ICL)”**

<aside> 💡

- **Qué es:** Mostrarle a la IA exactamente cómo se ve un buen resultado. Es una forma eficiente de alinear su "creatividad" con tu necesidad.
    - **Explicación técnica:**
        
        Los ejemplos funcionan como vectores de demostración que establecen un mapeo implícito entre entradas y salidas sin actualizar los pesos del modelo. El mecanismo de atención identifica patrones estructurales y los replica mediante inferencia bayesiana aproximada.
        
    - **Analogía de la Biblioteca:**
        
        Le enseñas un párrafo de un artículo que te gustó y le dices: "**Busco libros que expliquen las cosas con este nivel de detalle y claridad.**" El bibliotecario ahora entiende perfectamente el estilo que buscas y puede encontrar coincidencias exactas.
        
    - **Ejemplo:**
        
        > Necesito generar títulos para papers siguiendo este patrón:
        > 
        > Ejemplo 1: "Emergent Hierarchical Structures in Multi-Agent Reinforcement Learning: A Complex Systems Perspective"
        > 
        > Ejemplo 2: "Phase Transitions in Neural Architecture Search: Evidence from 10,000 Experiments"
        > 
        > Ejemplo 3: "The Topology of Artificial Reasoning: Mapping Logical Structures in Large Language Models"
        > 
        > Ahora genera un título para mi paper sobre aplicación de percolation theory a la robustez de modelos de visión computacional.
        
    - **Referencias:**
        
        - Brown, T., Mann, B., Ryder, N., et al. (2020). "Language models are few-shot learners." _NeurIPS_, 33, 1877-1901.
        - Xie, S. M., Raghunathan, A., Liang, P., & Ma, T. (2022). "An explanation of in-context learning as implicit Bayesian inference." _ICLR 2022_.
        - Min, S., Lyu, X., Holtzman, A., et al. (2022). "Rethinking the role of demonstrations: What makes in-context learning work?" _EMNLP 2022_. </aside>

# **A - Audiencia (Audience) → "Audience Adaptation" o "Register Specification”**

<aside> 💡

- _**Qué es:** Especificar para quién es la respuesta. Esto ajusta la complejidad, el vocabulario y el enfoque del resultado._
    - **Explicación técnica:**
        
        Controla el registro lingüístico mediante la modulación de distribuciones léxicas y sintácticas. Ajusta métricas de complejidad (Flesch-Kincaid, SMOG) y selección terminológica basándose en modelos de audiencia objetivo.
        
    - **Analogía de la Biblioteca:**
        
        Le dices: "**El libro es para un grupo de becarios que no saben nada de marketing.**" El bibliotecario evitará los textos académicos densos y buscará libros introductorios, claros y con muchos ejemplos prácticos.
        
    - **Ejemplo**
        
        > Explica el concepto de "emergence in neural scaling laws" para TRES audiencias:
        > 
        > 1. Para revisores de Physical Review Letters (físicos teóricos)
        > 2. Para el board de inversores de mi startup (ejecutivos no-técnicos)
        > 3. Para estudiantes de doctorado en mi seminario de sistemas complejos
        > 
        > Ajusta vocabulario, ejemplos y profundidad matemática para cada audiencia.
        
    - **Referencias**
        
        - Kang, H., & Hovy, D. (2021). "Style is NOT a single variable: Case studies for cross-stylistic language understanding." _ACL-IJCNLP_, 2353-2365.
        - Reiter, E., & Dale, R. (2000). _Building Natural Language Generation Systems_. Cambridge University Press. </aside>

# **T - Tarea (Task) → "Task Decomposition" o "Instruction Tuning”**

<aside> 💡

_**Qué es:** El verbo de acción. La instrucción específica e inequívoca de lo que quieres que haga._

- **Explicación técnica:**
    
    Define operadores semánticos específicos que guían la función objetivo del modelo. La descomposición explícita de tareas reduce la ambigüedad y mejora la alineación entre intención y ejecución.
    
- **Analogía de la Biblioteca:**
    
    En lugar de "necesito información", dices "**Crea una lista con viñetas de los 5 libros más influyentes sobre marketing de contenidos publicados en los últimos 2 años.**" La tarea es clara, específica y medible.
    
- **Ejemplo:**
    
    > Desarrolla una arquitectura de prompts recursivos para analizar papers.
    > 
    > Descompón en estas sub-tareas:
    > 
    > 1. EXTRAER: Identificar claim principal, metodología y conclusiones
    > 2. EVALUAR: Assess validez estadística y reproducibilidad
    > 3. CONECTAR: Mapear citas y construir grafo de conocimiento
    > 4. SINTETIZAR: Generar meta-análisis estructurado
    > 5. PROPONER: Sugerir 3 extensiones experimentales
    > 
    > Ejecuta este pipeline con el paper: [DOI: 10.1038/s41586-023-06647-8]
    
- **Referencias:**
    
    - Ouyang, L., Wu, J., Jiang, X., et al. (2022). "Training language models to follow instructions with human feedback." _NeurIPS_, 35, 27730-27744.
    - Wei, J., Wang, X., Schuurmans, D., et al. (2022). "Chain-of-thought prompting elicits reasoning in large language models." _NeurIPS_, 35, 24824-24837.
    - Khot, T., Trivedi, H., Finlayson, M., et al. (2023). "Decomposed prompting: A modular approach for solving complex tasks." _ICLR 2023_. </aside>

# **I - Instrucciones (Constraints & Format)**

<aside> 💡

_**Qué es:** Las reglas del juego. Límites, cosas que debe evitar y, crucialmente, cómo debe estructurar la respuesta._

- **Explicación técnica**
    
    Implementa restricciones duras y blandas mediante tokens de control y templates estructurados. Utiliza programación lógica para garantizar conformidad con especificaciones formales.
    
- **Analogía de la Biblioteca:**
    
    Le dices: "**La lista no debe incluir libros de más de 300 páginas (Restricción). Por favor, entrégame la lista en una ficha, con el título en negrita, el autor debajo y un resumen de una sola frase (Formato).**" Ahora no solo obtienes la información correcta, sino que la obtienes exactamente como la necesitas.
    
- **Ejemplo:**
    
    > Genera un research proposal con estas restricciones:
    > 
    > RESTRICCIONES DURAS:
    > 
    > - Máximo 2 páginas (1000 palabras)
    > - Debe incluir ecuaciones en LaTeX
    > - Presupuesto < $150,000 USD
    > - Timeline: 12 meses
    > - Citar mínimo 5 papers de 2024
    > 
    > FORMATO OBLIGATORIO:
    > 
    > ```markdown
    > # Título (max 15 palabras)
    > ## PI: [Nombre] | Co-PI: [Nombre]
    > 
    > ### Abstract (100 palabras)
    > ### Hypothesis & Specific Aims (200 palabras)
    > ### Methodology (300 palabras)
    > - Equation 1: $...$
    > - Equation 2: $...$
    > ### Expected Outcomes & Metrics (200 palabras)
    > ### Budget Justification (100 palabras)
    > ### References [Nature format]
    > 
    > ```
    > 
    > Tema: Quantum-inspired algorithms for NP-hard optimization in neural architectures
    
- **Referencias**
    
    - Zhou, Y., Muresanu, A. I., Han, Z., et al. (2023). "Large language models are human-level prompt engineers." _ICLR 2023_.
    - Honovich, O., Scialom, T., Levy, O., & Schick, T. (2023). "Unnatural instructions: Tuning language models with (almost) no human labor." _ACL 2023_. </aside>

# **V - Voz y Tono (Voice & Tone) → Style Transfer / Prosodic Modulation**

<aside> 💡

_**Qué es:** La personalidad de la respuesta. ¿Debe ser formal, inspiradora, divertida, seria, urgente?_

- **Explicación técnica**
    
    Manipula características estilométricas mediante control de variables latentes que codifican propiedades prosódicas y afectivas del texto. Utiliza embeddings de estilo para transformación controlada.
    
- **Analogía de la Biblioteca:**
    
    Le pides: "**Cuando me resumas los libros, usa un tono entusiasta y convincente.**" El bibliotecario no solo te describirá los libros, sino que intentará "vendértelos", haciendo que la información sea más atractiva.
    
- **Ejemplo:**
    
    > Reescribe este párrafo técnico en TRES estilos:
    > 
    > ORIGINAL: "Our results demonstrate statistically significant improvements (p<0.001) in convergence rates when applying adaptive learning rate schedules."
    > 
    > ESTILO 1: Como Paul Graham escribiendo para fundadores de YC ESTILO 2: Como un paper de Bengio et al. para NeurIPS ESTILO 3: Como Feynman explicando a undergrads de Caltech
    > 
    > Mantén la precisión técnica pero adapta voz, cadencia y recursos retóricos.
    
- **Referencias:**
    
    - Jin, Z., Jin, D., Mueller, J., Matthews, N., & Santus, E. (2022). "Deep learning for text style transfer: A survey." _Computational Linguistics_, 48(1), 155-205.
    - Reif, E., Ippolito, D., Yuan, A., et al. (2022). "A recipe for arbitrary text style transfer with large language models." _ACL_, 837-848. </aside>

# **O - Objetivo → Goal-Oriented Prompting / Outcome-Based Instruction**

<aside> 💡

_**Qué es:** El resultado final que esperas lograr con la ayuda de la IA. ¿Qué quieres que suceda después de que obtengas la respuesta?_

- **Explicación técnica:**
    
    Alinea la función de recompensa implícita del modelo con objetivos explícitos mediante especificación de estados finales deseados. Se relaciona con planificación jerárquica y optimización de trayectorias en el espacio de acciones lingüísticas.
    
- **Analogía de la Biblioteca:**
    
    Le confiesas al bibliotecario: "**El objetivo final es que mi jefe apruebe mi propuesta de presupuesto para una nueva campaña de marketing de contenidos.**" Entender el objetivo final le permite al bibliotecario ir un paso más allá, quizás sugiriendo un capítulo específico sobre cómo calcular el ROI, algo que no pediste explícitamente pero que es crucial para tu éxito.
    
- **Ejemplo:**
    
    > OBJETIVO FINAL: Conseguir un grant de €1M de European Research Council (ERC) para estudiar "Emergent Computation in Hybrid Quantum-Classical Systems"
    > 
    > Con este objetivo en mente:
    > 
    > 1. Identifica los 3 gaps más críticos en el campo según papers 2023-2024
    > 2. Formula una hipótesis que sea simultáneamente:
    >     - Científicamente audaz pero factible
    >     - Alineada con Horizon Europe priorities
    >     - Diferenciada de grants recientemente aprobados
    > 3. Diseña un work package structure que maximice probabilidad de aprobación
    > 4. Sugiere 3 colaboradores europeos estratégicos con h-index > 40
    > 
    > Optimiza cada elemento para maximizar el score de evaluación ERC.
    
- **Referencias:**
    
    - Christiano, P., Leike, J., Brown, T., et al. (2017). "Deep reinforcement learning from human preferences." _NeurIPS_, 30.
    - Stiennon, N., Ouyang, L., Wu, J., et al. (2020). "Learning to summarize with human feedback." _NeurIPS_, 33, 3008-3021.
    - Rafailov, R., Sharma, A., Mitchell, E., et al. (2023). "Direct preference optimization: Your language model is secretly a reward model." _NeurIPS 2023_. </aside>

---

# Tres conceptos

## **1. PROMPT**

Una consulta única y específica que le haces a la IA para resolver un problema particular en este momento.

---

## **2. INSTRUCCIONES**

Un conjunto de reglas y comportamientos permanentes que configuras una vez para que la IA los aplique siempre de manera consistente.

---

## **3. AGENTE**

Un sistema autónomo con identidad propia que puede percibir su entorno, tomar decisiones y actuar continuamente sin supervisión humana.

---

# **FRAMEWORK: CREATIVO**

## **MEJORA TUS PROMPTS**

Transforma consultas vagas en peticiones precisas con **contexto completo, rol definido y output estructurado**. En lugar de "resume esto", obtienes "como analista senior, extrae 5 KPIs para el CEO en formato ejecutivo".

---

## **MEJORA TUS INSTRUCCIONES**

Convierte tareas repetitivas en **sistemas reutilizables** que funcionan con inputs mínimos. Configuras CREATIVO una vez y luego solo dices "email: no puedo jueves" para obtener un correo profesional completo automáticamente.

---

## **MEJORA TUS AGENTES**

Diseña **empleados digitales autónomos** con identidad, misiones y protocolos de decisión claros. CREATIVO define no solo QUÉ hacen, sino QUIÉNES son, CÓMO deciden y CUÁNDO actuar sin supervisión humana.

---

# EJEMPLOS:

## **Ana Pamela | Caso: Contestar correos a partir de instrucciones breves**

### **Analogía de la Biblioteca**

Imagina que llegas corriendo a la biblioteca y le dices a la persona encargada: "Dile a Pedro que no puedo mañana". Si no hay contexto, la bibliotecaria solo puede tomar el recado literal. Pero si previamente le explicaste: "Eres mi asistente personal (Rol), trabajo en el Tec y mis

# **PROMPT PERSONALIZADO PARA ANA PAMELA - RESPONDER CORREOS RÁPIDAMENTE**

### Framework CREATIVO para Convertir Instrucciones Breves en Correos Profesionales

---

```markdown
# **INSTRUCCIÓN PERSONALIZADA PARA ANA PAMELA - RESPONDER CORREOS RÁPIDAMENTE**
### Convertir Instrucciones Breves en Correos Profesionales

---

## **[C] CONTEXTO**

Pierdo mucho tiempo diario escribiendo correos completos cuando ya sé exactamente qué necesito comunicar. Quiero dar instrucciones breves y obtener correos profesionales listos para enviar. Trabajo en el tec-monterrey y necesito mantener el tono institucional apropiado.

---

## **[R] ROL**

Actúa como mi **asistente de comunicación ejecutiva** con experiencia en redacción institucional del tec-monterrey. Conoces los protocolos de comunicación académica y puedes convertir instrucciones telegráficas en correos profesionales completos.

---

## **[E] EJEMPLOS**

> **Mi instrucción breve:** "decirle a Juan que no puedo reunión mañana, proponer jueves"
> 
> **Correo generado:**
> Asunto: Reagendamiento de reunión
> 
> Estimado Juan,
> 
> Espero que te encuentres bien. Me pongo en contacto para informarte que, debido a compromisos previamente agendados, no podré asistir a nuestra reunión de mañana.
> 
> ¿Sería posible reagendar para el jueves en el mismo horario? O si prefieres, puedo ajustarme a tu disponibilidad ese día.
> 
> Quedo atenta a tu confirmación.
> 
> Saludos cordiales,
> Ana Pamela

---

## **[A] AUDIENCIA**

Mis correos van dirigidos a: colegas del Tec, profesores, directivos, personal administrativo y ocasionalmente estudiantes o proveedores externos.

---

## **[T] TAREA**

Convierte mi instrucción breve en un correo profesional completo:
1. **Interpreta** la intención de mi instrucción
2. **Redacta** un correo con todos los elementos de cortesía
3. **Ajusta** el tono según el destinatario (formal/semiformal)
4. **Incluye** asunto descriptivo
5. **Agrega** frases de contexto necesarias

---

## **[I] INSTRUCCIONES Y FORMATO**

### **Restricciones:**
- Correos de máximo 120 palabras
- Siempre cordial y profesional
- Si falta información, usar [CONFIRMAR: detalle]
- Evitar redundancias

### **Formato de salida:**

Asunto: [Generado según contenido]

[Saludo apropiado según destinatario]

[Párrafo 1: Contexto/Propósito]

[Párrafo 2: Mensaje principal/Solicitud]

[Cierre con siguiente paso si aplica]

[Despedida formal]

Ana Pamela

---

## **[V] VOZ Y TONO**

**Profesional-institucional del Tec**: cordial pero eficiente, formal sin ser distante, claro y directo respetando protocolos académicos.

---

## **[O] OBJETIVO FINAL**

Reducir el tiempo de redacción de correos de **10 minutos a 30 segundos** por mensaje, manteniendo la calidad profesional que mi puesto requiere y eliminando esta "mala inversión de tiempo" que identifico como problema principal.

---

## **MI INSTRUCCIÓN BREVE**

[Escribe aquí tu instrucción corta, por ejemplo: "recordarle a Edgar que no se ponga punk con el curso de IA"]
```

---

### **1. Framework: CREATIVO**

**Participante:** Sajidth **Caso:** Análisis y Resumen de Información

### **Explicación Técnica**

El framework C.R.E.A.T.I.V.O. obliga al modelo a ir más allá de una simple compresión de texto. Al definir un **Rol** específico (Analista) y una **Tarea** multifacética (Resumir, Extraer, Formular), condicionamos al modelo para que active las redes neuronales asociadas con el análisis estratégico. Los parámetros de **Objetivo** y **Audiencia** afinan el vocabulario y la complejidad del resultado, asegurando que los "tokens" generados no solo sean precisos, sino también relevantes y accionables en un contexto profesional.

### **Analogía de la Biblioteca**

Imagina que le entregas un informe de 100 páginas a la persona encargada de la biblioteca. Si solo pides un "resumen", te devolverá la contraportada del libro. Pero si le dices: "Eres una persona analista de mercado (**Rol**) y tu objetivo es preparar a mi jefa para una junta (**Contexto/Objetivo**). Quiero que leas esto y me entregues una sola página con los 5 riesgos principales y una pregunta clave sobre cada uno (**Tarea/Formato**)", la persona encargada no solo resume, sino que interpreta, prioriza y te entrega inteligencia lista para usar.

### **Prompt CREATIVO**

```markdown

# **PROMPT PERSONALIZADO PARA ANA PAMELA - SISTEMATIZACIÓN DE DATOS**
### Framework CREATIVO para Ordenar Información Desestructurada

---

## **[C] CONTEXTO**

Recibo datos de múltiples departamentos del Tec en formatos diversos (correos, Excel, PDFs, reportes) sin el orden que necesito para hacer inferencias precisas. Pierdo horas tratando de identificar patrones y errores en cómo otras áreas presentan estos datos. Necesito sistematizar esta información caótica rápidamente.

---

## **[R] ROL**

Actúa como un **analista de datos senior** especializado en auditoría y sistematización de información institucional. Tienes 15 años de experiencia detectando inconsistencias en reportes y creando estructuras de datos limpias para análisis ejecutivo.

---

## **[E] EJEMPLOS**

> **Input desordenado:** "En enero hubo 45 alumnos nuevos marketing dijo 52 pero contabilidad reporta 48 inscritos..."
> 
> **Output sistematizado:**
> | Fuente | Mes | Métrica | Valor | Discrepancia |
> |--------|-----|---------|-------|--------------|
> | Marketing | Enero | Alumnos nuevos | 52 | +7 vs promedio |
> | Contabilidad | Enero | Inscritos | 48 | +3 vs promedio |
> | Reporte general | Enero | Alumnos nuevos | 45 | Baseline |
> 
> **Alerta:** Inconsistencia detectada entre departamentos (variación 15.5%)

---

## **[A] AUDIENCIA**

Para mí (Ana Pamela) para poder: (1) identificar rápidamente errores en datos, (2) preparar análisis confiables para directivos, (3) cuestionar con evidencia las derivaciones incorrectas de otras áreas.

---

## **[T] TAREA**

Analiza los datos desordenados que te proporciono y:
1. **Estructura** toda la información en tablas limpias
2. **Identifica** inconsistencias entre fuentes (resáltalas en rojo)
3. **Detecta** valores atípicos o sospechosos
4. **Sugiere** qué datos faltan para un análisis completo
5. **Genera** 3 preguntas de validación para cada departamento

---

## **[I] INSTRUCCIONES Y FORMATO**

### **Restricciones:**
- Todos los números deben estar verificados contra el total
- Marcar con 🔴 discrepancias >10%
- Marcar con 🟡 discrepancias 5-10%
- Incluir fuente y fecha de cada dato

### **Formato de salida obligatorio:**

### 📊 Datos Sistematizados
[Tabla principal con todos los datos ordenados]

### ⚠️ Inconsistencias Detectadas
• [Inconsistencia 1]: [Fuente A] reporta X vs [Fuente B] reporta Y (diferencia: Z%)
• [Inconsistencia 2]: [descripción]

### ❓ Datos Faltantes
• Se requiere: [dato específico] para [análisis]

### ✅ Preguntas de Validación
**Para [Departamento 1]:**
1. ¿[Pregunta específica sobre discrepancia]?

**Para [Departamento 2]:**
1. ¿[Pregunta específica sobre metodología]?

---

## **[V] VOZ Y TONO**

**Analítico-detectivesco**: preciso como un auditor, cuestionador como un investigador, siempre basado en evidencia numérica. No acusatorio pero sí inquisitivo.

---

## **[O] OBJETIVO FINAL**

Convertir datos caóticos en información estructurada en **menos de 5 minutos**, detectando automáticamente errores que me tomaría horas encontrar manualmente, para poder tomar decisiones con datos confiables y cuestionar con fundamentos las inconsistencias de otros departamentos.

---

## **DATOS A ANALIZAR**

[Pega aquí el desorden de datos de diferentes fuentes: correos, fragmentos de Excel, párrafos de reportes, etc.]
```

### **2. Framework: CREATIVO**

**Participante:** A. Camero **Caso:** Identificación de Dudas Recurrentes de Alumnado

### **Explicación Técnica**

Este prompt utiliza las capacidades del modelo para la **Clasificación de Texto Zero-Shot**. Al proporcionar categorías predefinidas en la **Tarea** ("Dudas Administrativas", "Problemas Técnicos"), le damos al modelo un esquema de clasificación claro. El modelo calcula la similitud semántica entre cada correo y la descripción de cada categoría, asignando la más probable. Los pasos finales (Contar, Identificar, Sugerir) son una forma de **Chain-of-Thought**, forzando una secuencia lógica que va del dato crudo al insight accionable.

### **Por qué funciona - Analogía de la Biblioteca**

Tienes una caja con cientos de notas y preguntas de estudiantes. En lugar de leerlas una por una, le das la caja a la persona de la biblioteca y pones enfrente tres canastas etiquetadas: "Horarios y Fechas", "Acceso a Plataforma" y "Contenido del Curso" (**Tarea/Categorías**). Le pides que lea cada nota y la coloque en la canasta correcta. Al final, no solo tienes todo organizado, sino que puedes ver de un vistazo qué canasta está más llena, revelando el problema principal sin haber leído cada nota individualmente.

### **Prompt CREATIVO**

```markdown
# **ANÁLISIS DE DATOS Y NECESIDADES ESTUDIANTILES**
### Framework CREATIVO para Gestión Proactiva de Consultas

---

## **[C] CONTEXTO**

Estoy analizando las dudas recibidas durante el **último mes**. El objetivo es crear un **plan de acción concreto** para reducir el volumen de consultas repetitivas y mejorar la claridad de nuestra comunicación.

---

## **[R] ROL**

Actúa como una persona **especialista en Análisis de Datos y Necesidades Estudiantiles**. Tu poder es transformar datos cualitativos (texto y correos) en **insights cuantitativos y planes de acción claros**.

---

## **[E] EJEMPLOS**

> **Categoría:** Problemas Técnicos con Plataforma  
> **Correo tipo:** "No puedo acceder al módulo 3, me aparece error 404"  
> **Clasificación:** Técnico → Error de acceso → Frecuencia: Alta  
> **Solución:** Video tutorial de 2 minutos sobre navegación en la plataforma

> **Problema Recurrente:** 15 estudiantes no encuentran las fechas de entrega  
> **Solución Proactiva:** Crear calendario visual descargable + recordatorios automatizados

---

## **[A] AUDIENCIA**

El informe es para el **equipo directivo del departamento**; debe ser **estructurado, visual y orientado a soluciones**.

---

## **[T] TAREA**

Analiza la siguiente lista de correos anónimos de estudiantes. Tu misión es:

1. **Categorizar** cada correo en una de las siguientes áreas:
   - "Dudas Administrativas"
   - "Problemas Técnicos con Plataforma"
   - "Consultas sobre Contenido Académico"
   - "Otros"

2. **Cuantificar** el número de correos por cada categoría

3. **Identificar los 3 problemas específicos** más mencionados en todas las categorías

4. **Sugerir una solución proactiva** para cada uno de esos 3 problemas (ej. crear un video tutorial, actualizar la sección de FAQ, enviar un comunicado)

---

## **[I] INSTRUCCIONES Y FORMATO**

### **Restricciones:**
- Categorización estricta en las 4 categorías definidas
- Exactamente **3 problemas principales** (ni más ni menos)
- Una solución **específica y ejecutable** por problema
- Evitar soluciones genéricas tipo "mejorar comunicación"
- Incluir métricas cuando sea posible

### **Formato de salida obligatorio:**

### Análisis Cuantitativo

| Categoría | Frecuencia | Porcentaje |
|-----------|------------|------------|
| Dudas Administrativas | XX | XX% |
| Problemas Técnicos con Plataforma | XX | XX% |
| Consultas sobre Contenido Académico | XX | XX% |
| Otros | XX | XX% |
| **TOTAL** | **XX** | **100%** |

### Top 3 Problemas Recurrentes

1. **[Problema #1]**: [Descripción específica] - Mencionado X veces
2. **[Problema #2]**: [Descripción específica] - Mencionado X veces
3. **[Problema #3]**: [Descripción específica] - Mencionado X veces

### Plan de Acción Proactivo

| Problema Detectado | Solución Sugerida | Timeline | Responsable Sugerido |
|-------------------|-------------------|----------|---------------------|
| [Problema #1] | [Solución específica con detalles de implementación] | [Tiempo estimado] | [Departamento/Rol] |
| [Problema #2] | [Solución específica con detalles de implementación] | [Tiempo estimado] | [Departamento/Rol] |
| [Problema #3] | [Solución específica con detalles de implementación] | [Tiempo estimado] | [Departamento/Rol] |

---

## **[V] VOZ Y TONO**

**Analítico y ejecutivo**, como un consultor de mejora continua. Datos primero, interpretación después. **Sin juicios**, solo hechos y soluciones pragmáticas.

---

## **[O] OBJETIVO FINAL**

Reducir el volumen de consultas repetitivas en **al menos 40%** para el próximo mes, mejorando la satisfacción estudiantil y **liberando tiempo del equipo de soporte** para tareas de mayor valor agregado. El plan debe ser **implementable en 2 semanas**.

---

## **CORREOS A ANALIZAR**
```

[Pega aquí la lista de correos anónimos]

```

---

### **Métricas de Éxito**

Post-implementación, medir:
- **Reducción en volumen de correos** (meta: -40%)
- **Tiempo promedio de resolución** (meta: -50%)
- **Satisfacción estudiantil** (meta: >4.5/5.0)
- **ROI del tiempo ahorrado** (horas liberadas × costo/hora)

---

### **Nota Metodológica**

**Análisis basado en:**
- Frecuencia de términos clave
- Análisis de sentimiento implícito
- Patrones de consulta recurrentes
- Benchmarking con mejores prácticas educativas

---

### **3. Framework: CREATIVO**

**Participante:** Cata **Caso:** Procesar Datos y Generar Ideas Creativas

### **Explicación Técnica**

Este prompt implementa un **Flujo de Trabajo Modular Basado en Roles**. Al dividir la tarea en dos fases distintas con diferentes **Roles** (Investigador/a vs. Estratega), evitamos la "contaminación conceptual". La primera fase prepara al modelo para un razonamiento analítico y extractivo. El resultado de esta fase se convierte en la entrada restringida para la Fase 2, que prepara al modelo para un pensamiento creativo y generativo. Este condicionamiento secuencial asegura que las ideas creativas estén directamente fundamentadas en los hallazgos del análisis.

### **Por qué funciona - Analogía de la Biblioteca**

Quieres escribir una novela sobre la historia de Roma. Primero, llamas a la persona "Historiadora" de la biblioteca (**Rol 1**). Se sumerge en los archivos y te entrega una lista de fechas y eventos clave (**Fase 1: Análisis**). Luego, llamas a la persona "Novelista" de la biblioteca (**Rol 2**). Le entregas la lista de la persona historiadora y dices: "Usando solo estos hechos, escribe un primer capítulo emocionante" (**Fase 2: Creatividad**). Al separar los roles, te aseguras de que la historia sea creativamente atractiva, pero firmemente basada en la investigación.

### **Prompt CREATIVO**

```markdown
# **ANÁLISIS DE FEEDBACK Y ESTRATEGIA DE INNOVACIÓN PARA TALLERES**
### Framework CREATIVO con Metodología Dual-Phase

---

## **[C] CONTEXTO**

Necesitamos transformar el feedback de nuestro **último taller** en un **plan de mejora**. El objetivo es, primero, entender la realidad (el análisis) y, segundo, diseñar un futuro emocionante (la creatividad).

---

## **[R] ROL**

Actúa como un **equipo de dos especialistas** que trabajan en secuencia:

### **Especialista 1: Investigador/a Cualitativo**
- Persona **objetiva, analítica** y experta en encontrar patrones en feedback
- Mentalidad de antropólogo organizacional
- Capacidad de síntesis sin sesgo

### **Especialista 2: Estratega de Innovación**
- Persona **creativa, audaz** y experta en generar ideas disruptivas a partir de datos
- Mentalidad de design thinking y futures thinking
- Capacidad de transformar problemas en oportunidades

---

## **[E] EJEMPLOS**

> **Fase 1 - Ejemplo de Diagnóstico:**
> 
> **Puntos Fuertes ✅**
> • Dinámica de apertura muy energizante (mencionado 8/10 participantes)
> • Materiales visuales de alta calidad
> 
> **Áreas de Oportunidad ❌**
> • Tiempo insuficiente para ejercicios prácticos (6/10 participantes)
> • Instrucciones poco claras en actividad grupal

> **Fase 2 - Ejemplo de Ideas Creativas:**
> 
> **Idea #1: "Sprint Mode"**
> Transformar el taller en formato Pomodoro con bloques de 25 min de teoría + 25 min de práctica intensa, con timer visible y música energizante entre bloques.

---

## **[A] AUDIENCIA**

Los resultados son para el **equipo de diseño del taller**, que necesita tanto un **diagnóstico honesto** como una **dosis de inspiración**.

---

## **[T] TAREA**

Te proporcionaré el feedback de un taller. Tu respuesta debe estar **dividida en dos fases claras**:

### **Fase 1: Diagnóstico Analítico** (Realizado por el/la Investigador/a)
1. Lee todo el feedback de los participantes
2. Identifica patrones y frecuencias
3. Sintetiza la información en dos listas concisas:
   - **"Puntos Fuertes ✅"** (lo que más gustó)
   - **"Áreas de Oportunidad ❌"** (lo que generó fricción o confusión)

### **Fase 2: Brainstorming Creativo** (Realizado por el/la Estratega)
1. Basándote **EXCLUSIVAMENTE** en las "Áreas de Oportunidad" identificadas en Fase 1
2. Genera **3 ideas audaces y accionables** para mejorar radicalmente la próxima edición
3. Cada idea debe ser innovadora pero implementable

---

## **[I] INSTRUCCIONES Y FORMATO**

### **Restricciones:**
- **Fase 1:** Máximo 5 puntos fuertes y 5 áreas de oportunidad
- **Fase 2:** Exactamente 3 ideas (ni más ni menos)
- Las ideas DEBEN derivar directamente de las áreas de oportunidad
- No incluir ideas genéricas o clichés de mejora
- Cada idea debe tener un nombre memorable

### **Formato de salida obligatorio:**

### 🔍 FASE 1: DIAGNÓSTICO ANALÍTICO
*[Voz del Investigador/a Cualitativo]*

**Puntos Fuertes ✅**
- [Fortaleza 1] - (mencionado X veces)
- [Fortaleza 2] - (mencionado X veces)
- [Fortaleza 3] - (mencionado X veces)
- [Fortaleza 4] - (mencionado X veces)
- [Fortaleza 5] - (mencionado X veces)

**Áreas de Oportunidad ❌**
- [Oportunidad 1] - (mencionado X veces)
- [Oportunidad 2] - (mencionado X veces)
- [Oportunidad 3] - (mencionado X veces)
- [Oportunidad 4] - (mencionado X veces)
- [Oportunidad 5] - (mencionado X veces)

**Insight Principal:** [Una oración que capture el patrón más significativo]

---

### 💡 FASE 2: BRAINSTORMING CREATIVO
*[Voz del/la Estratega de Innovación]*

**IDEA #1: "[Nombre Memorable]"**
- **Problema que resuelve:** [Referencia específica a área de oportunidad]
- **Concepto:** [Descripción de la idea en 2-3 oraciones]
- **Implementación rápida:** [Primer paso concreto para ejecutar]
- **Impacto esperado:** [Métrica o resultado tangible]

**IDEA #2: "[Nombre Memorable]"**
- **Problema que resuelve:** [Referencia específica a área de oportunidad]
- **Concepto:** [Descripción de la idea en 2-3 oraciones]
- **Implementación rápida:** [Primer paso concreto para ejecutar]
- **Impacto esperado:** [Métrica o resultado tangible]

**IDEA #3: "[Nombre Memorable]"**
- **Problema que resuelve:** [Referencia específica a área de oportunidad]
- **Concepto:** [Descripción de la idea en 2-3 oraciones]
- **Implementación rápida:** [Primer paso concreto para ejecutar]
- **Impacto esperado:** [Métrica o resultado tangible]

---

## **[V] VOZ Y TONO**

### **Para Fase 1:** 
**Neutral y preciso**, como un investigador presentando hallazgos. Sin juicios de valor, solo datos y patrones observables.

### **Para Fase 2:** 
**Entusiasta y visionario**, como un diseñador de IDEO presentando conceptos. Lenguaje inspirador que genere ganas de implementar.

---

## **[O] OBJETIVO FINAL**

Transformar el próximo taller en una **experiencia 10X mejor**, donde las fricciones identificadas se conviertan en los **momentos más memorables**. El resultado debe inspirar al equipo a **actuar inmediatamente** y generar **entusiasmo** por la próxima edición.

---

## **FEEDBACK A ANALIZAR**
```

### **4. Framework: CREATIVO**

**Participante:** Griss **Caso:** Automatizar Tareas Recurrentes

### **Explicación Técnica**

Este prompt utiliza el LLM como una **Herramienta de Metaprogramación** para generar una plantilla reutilizable. La clave es la definición explícita de un **Formato de Retorno** que incluye marcadores de posición (`[texto a rellenar]`). El modelo reconoce estos marcadores como variables dentro de una estructura fija. La tarea del modelo no es generar contenido, sino generar una _estructura para contenido futuro_. La estricta **Estructura Requerida** actúa como una poderosa restricción en el resultado, asegurando alta fidelidad y usabilidad inmediata.

### **Por qué funciona - Analogía de la Biblioteca**

En lugar de ir a la biblioteca cada semana a pedir que te busquen y organicen la misma información, vas una sola vez y dices: "Eres una persona experta en organización. Por favor, diséñame un formulario en blanco (**Plantilla**) que yo pueda rellenar cada semana. El formulario debe tener secciones claras para 'Logros', 'Planes' y 'Problemas' (**Formato**)". La persona de la biblioteca no te da información, te da una _herramienta_ para organizar tu propia información de manera consistente.

### **Prompt CREATIVO**

```markdown

# **PLANTILLA DE INFORME SEMANAL DE PROYECTO**
### Framework CREATIVO para Automatización de Reportes

---

## **[C] CONTEXTO**

Quiero **automatizar la creación de mis informes semanales** para mi líder de equipo. El objetivo es tener una **plantilla robusta y estandarizada** que garantice consistencia y calidad sin tener que empezar de cero cada vez.

---

## **[R] ROL**

Actúa como una persona **experta en productividad y "Systems Thinking"**. Tu especialidad es diseñar plantillas y flujos de trabajo que son **tan eficientes que eliminan la necesidad de pensar** en tareas repetitivas.

---

## **[E] EJEMPLOS**

> **Ejemplo de placeholder efectivo:**
> "El proyecto [NOMBRE_PROYECTO] está al [XX]% de completitud"
> 
> **Ejemplo de hito bien formulado:**
> "✓ Completado diseño de arquitectura del módulo de pagos (3 días antes del deadline)"
> 
> **Ejemplo de riesgo claro:**
> "🔴 Dependencia externa con proveedor X puede retrasar entrega 5 días"

---

## **[A] AUDIENCIA**

La plantilla será la base para un correo dirigido a **un/a gerente** que valora la **claridad, la estructura** y la capacidad de **entender el estado de un proyecto de un solo vistazo**.

---

## **[T] TAREA**

Crea una **plantilla de correo electrónico completa y reutilizable** para un informe de avance de proyecto semanal. La plantilla debe estar diseñada para que cualquier persona pueda **rellenarla en menos de 5 minutos**.

---

## **[I] INSTRUCCIONES Y FORMATO**

### **Restricciones:**
- Tiempo de completado: **< 5 minutos**
- Todos los placeholders en formato `[TEXTO_A_RELLENAR]`
- Máximo **3 líneas** para el resumen ejecutivo
- Máximo **5 items** por sección de listas
- Incluir indicadores visuales (✓, →, ⚠️, 🔴)
- Extensión total del correo: **< 300 palabras**

### **Estructura requerida:**
1. **Asunto** (con formato específico para filtrado)
2. **Saludo** (personalizable)
3. **Resumen Ejecutivo** (1 frase que resuma el estado general)
4. **Hitos Logrados esta Semana** (lista de viñetas)
5. **Próximos Pasos para la Siguiente Semana** (lista de viñetas)
6. **Bloqueos o Riesgos Actuales** (si no hay, escribir "Ninguno por el momento")
7. **Cierre** (con siguiente punto de contacto)

### **Formato de salida obligatorio:**

ASUNTO: [PROYECTO_NOMBRE] - Informe Semanal #[XX] - [STATUS: En tiempo/Riesgo/Retrasado]

[Saludo]

[Resumen ejecutivo - 1 frase sobre estado general]

**✓ Hitos Logrados (Semana [XX]):**
• [Logro 1 con métrica/impacto]
• [Logro 2 con métrica/impacto]
• [Logro 3 con métrica/impacto]

**→ Próximos Pasos (Semana [XX]):**
• [Acción 1 - fecha compromiso]
• [Acción 2 - fecha compromiso]
• [Acción 3 - fecha compromiso]

**⚠️ Bloqueos/Riesgos:**
[Si hay: describir riesgo y acción requerida]
[Si no hay: "Ninguno por el momento."]

[Cierre con call-to-action si necesario]

[Firma]

---

## **[V] VOZ Y TONO**

**Profesional pero eficiente**, como un project manager senior que respeta el tiempo del lector. **Sin palabras de relleno**, cada frase debe agregar valor. Tono **factual y orientado a resultados**.

---

## **[O] OBJETIVO FINAL**

Que el gerente pueda **tomar decisiones informadas en 30 segundos** de lectura. La plantilla debe ser tan clara que **elimine follow-ups innecesarios** y tan completa que **anticipe las preguntas típicas** del management.

---

## **PLANTILLA FINAL A GENERAR**

La salida debe ser una plantilla de texto lista para copiar y pegar en un correo electrónico, utilizando placeholders claros y consistentes entre corchetes como `[texto a rellenar]` para indicar qué información se debe completar.

---

### **Métricas de Éxito de la Plantilla**

- **Tiempo de llenado:** < 5 minutos
- **Tiempo de lectura:** < 30 segundos
- **Preguntas de follow-up:** 0
- **Tasa de respuesta requerida:** < 20%
- **Claridad del status:** 100% inequívoco

---

### **Tips para Uso Efectivo**

1. **Preparación semanal:** Mantén notas durante la semana para llenar rápidamente
2. **Consistencia:** Envía siempre el mismo día y hora
3. **Métricas:** Usa números específicos, no generalidades
4. **Acción:** Si necesitas algo del gerente, ponlo en el asunto

---

```

### **5. Framework: CREATIVO**

**Participante:** Guadalupe **Caso:** Optimización de Correos de Contacto (Cold Emails)

### **Explicación Técnica**

Este prompt aprovecha la habilidad del modelo para adoptar una **Persona** y generar resultados variados basados en principios psicológicos. Al definir un **Rol** (Copywriter + Psicólogo/a) y una **Tarea** que requiere diferentes "ángulos" (Curiosidad, Beneficio, Prueba Social), esencialmente pedimos al modelo que ejecute múltiples caminos de generación paralelos, cada uno condicionado por una estrategia persuasiva distinta. Las **Restricciones** estrictas (conteo de palabras) fuerzan al modelo a ser conciso e impactante.

### **Por qué funciona - Analogía de la Biblioteca**

Quieres convencer a alguien importante para que lea un libro. Vas con la persona de la biblioteca y en lugar de pedirle "un resumen del libro", dices: "Actúa como una persona experta en marketing de libros (**Rol**). Quiero que escribas tres notas diferentes para poner en la portada, cada una para un tipo de lector distinto. Una debe generar misterio (**Curiosidad**), otra debe destacar lo que aprenderá (**Beneficio**), y la última debe mencionar quién más lo ha leído (**Prueba Social**)". Obtienes tres herramientas de persuasión distintas para la misma tarea.

### **Prompt CREATIVO**

```markdown
# ROL
Actúa como un equipo de redacción publicitaria (Copywriting) de élite, especializado en correos de alto impacto ("cold outreach"). También tienes conocimientos profundos de psicología conductual, entendiendo qué dispara la curiosidad y motiva a una persona ocupada a responder.

# TAREA
Crea un "Paquete de Contacto en Frío" para un potencial candidato a un programa de posgrado. Este paquete debe incluir:
1.  **Tres versiones distintas del primer correo.** Cada versión debe ser radicalmente diferente y probar un ángulo psicológico específico.
2.  **Un guion para un mensaje de seguimiento.** Debe ser corto, amable y no insistente, para enviar 4 días después si no hay respuesta.

# CONTEXTO Y OBJETIVO
Mis correos actuales a candidatos tienen una tasa de respuesta baja. El objetivo es crear mensajes que rompan el ruido de una bandeja de entrada saturada y logren iniciar conversaciones significativas con profesionales de alto potencial.

# AUDIENCIA
El destinatario es una persona profesional, exitosa y escéptica. Valora su tiempo por encima de todo y es inmune a los mensajes de venta genéricos.

# RESTRICCIONES Y FORMATO
-   **Correos iniciales:** Menos de 120 palabras cada uno.
-   **Seguimiento:** Menos de 40 palabras.
-   **Placeholders:** Usa marcadores como `[Nombre del Candidato]`, `[Su Empresa Actual]`, y `[Nombre del Programa]`.
-   **Formato:** Usa Markdown con encabezados claros para cada versión y el seguimiento.

```

# Template C.R.E.A.T.I.V.O.

### [C] CONTEXTO:

[Describe la situación, problema o proyecto. ¿Por qué necesitas esta información?]

---

### [R] ROL:

Actúa como [profesión/experto] con experiencia en [campo específico].

---

### [E] EJEMPLOS:

Aquí hay ejemplos del tipo de respuesta que busco:

- Ejemplo 1: [muestra]
- Ejemplo 2: [muestra]
- …

---

### [A] AUDIENCIA:

La respuesta es para [¿quién la leerá/usará?] con [nivel de conocimiento].

---

### [T] TAREA:

[Verbo de acción específico]: crear/analizar/evaluar/diseñar/comparar [qué].

---

### [I] INSTRUCCIONES Y FORMATO:

Restricciones:

- [limitación 1]
- [limitación 2]
- …

### Formato de salida:

- [estructura deseada]
- [longitud/estilo]
- …

---

### [V] VOZ Y TONO:

Usa un tono [formal/casual/técnico/inspirador/analítico].

---

### [O] OBJETIVO FINAL:

El resultado debe lograr [outcome específico y medible].

---

# **PROMPT vs INSTRUCCIONES: DOS USOS DEL FRAMEWORK CREATIVO**

## **De consultas únicas a sistemas reutilizables**

---

## **DEFINICIONES FUNDAMENTALES**

### **PROMPT: La Consulta Específica**

**Qué es:** Una petición única y completa para resolver un problema particular en un momento determinado.

**Analogía:** Como pedirle a un chef que prepare UN platillo específico con instrucciones detalladas para ESA ocasión.

**Características:**

- **Ciclo de vida:** Nace → Se ejecuta → Muere
- **Contexto:** Específico y temporal
- **Reutilización:** Cero (o copy-paste manual)
- **Esfuerzo:** Alto por cada uso
- **Flexibilidad:** Máxima (cada uno es único)

---

### **INSTRUCCIONES: El Sistema Permanente**

**Qué es:** Un conjunto de reglas y comportamientos predefinidos que la IA "recuerda" y aplica consistentemente.

**Analogía:** Como entrenar a un asistente personal que aprende tus preferencias y las aplica automáticamente sin que tengas que repetirlas.

**Características:**

- **Ciclo de vida:** Se configura una vez → Se usa infinitamente
- **Contexto:** Genérico y permanente
- **Reutilización:** Ilimitada
- **Esfuerzo:** Alto al inicio, mínimo después
- **Flexibilidad:** Estructurada pero adaptable

---

## **🔄 EL MISMO FRAMEWORK, DOS FILOSOFÍAS**

### **CREATIVO COMO PROMPT**

```
Cuando necesitas resolver UN problema ESPECÍFICO:

[C] CONTEXTO: Esta situación particular que estoy enfrentando ahora
[R] ROL: El experto que necesito para este caso específico
[E] EJEMPLOS: Muestras de lo que quiero obtener esta vez
[A] AUDIENCIA: Las personas específicas que recibirán esto
[T] TAREA: La acción concreta que necesito ahora
[I] INSTRUCCIONES: Las reglas para esta entrega particular
[V] VOZ: El tono apropiado para esta situación
[O] OBJETIVO: Lo que quiero lograr con este output específico

```

**Resultado:** UNA solución perfecta para UN momento

---

### **CREATIVO COMO INSTRUCCIONES**

```
Cuando necesitas crear un SISTEMA REUTILIZABLE:

[C] CONTEXTO: El tipo de situaciones que enfrento regularmente
[R] ROL: El asistente permanente que quiero tener
[E] EJEMPLOS: Plantillas y patrones que siempre funcionan
[A] AUDIENCIA: Los tipos de personas con las que interactúo
[T] TAREA: Las acciones que repito constantemente
[I] INSTRUCCIONES: Las reglas que SIEMPRE deben aplicarse
[V] VOZ: Mi estilo de comunicación consistente
[O] OBJETIVO: Los resultados que busco sistemáticamente

```

**Resultado:** UN SISTEMA que genera MÚLTIPLES soluciones

---

## **📊 COMPARACIÓN PRÁCTICA**

|Aspecto|PROMPT (Consulta)|INSTRUCCIONES (Sistema)|
|---|---|---|
|**Frecuencia de uso**|Una vez|Diario/Semanal|
|**Tiempo de setup**|2-3 minutos|15-20 minutos|
|**Tiempo por uso posterior**|2-3 minutos cada vez|10 segundos|
|**Consistencia**|Variable|Garantizada|
|**Personalización**|Total cada vez|Parametrizada|
|**Ideal para**|Problemas únicos|Tareas repetitivas|
|**Curva aprendizaje**|Baja|Media|
|**ROI**|Inmediato|Exponencial|

---

## **🎭 CASOS DE USO TÍPICOS**

### **Cuándo usar PROMPT (Consulta única):**

- Análisis de un documento específico
- Solución a un problema puntual
- Exploración creativa sin estructura
- Situaciones excepcionales
- Experimentación y pruebas

### **Cuándo usar INSTRUCCIONES (Sistema):**

- Reportes semanales/mensuales
- Respuestas a correos rutinarios
- Análisis de datos con formato consistente
- Generación de contenido regular
- Procesos con pasos definidos

---

## **💡 LA EVOLUCIÓN NATURAL**

### **Nivel 1: Usuario Principiante**

```
"Ayúdame a escribir un correo"

```

↓

### **Nivel 2: Usuario con PROMPTS CREATIVO**

```
"[C] Necesito declinar una reunión [R] Como profesional cordial [T] Escribe correo..."

```

↓

### **Nivel 3: Usuario con INSTRUCCIONES CREATIVO**

```
"Ya configuré mi asistente de correos. Solo digo: 'no reunión, proponer martes'"

```

---

## **EL PODER DE LA COMBINACIÓN**

### **Sistema Híbrido Ideal:**

**INSTRUCCIONES BASE** (Configuradas una vez):

- Tu contexto profesional general
- Tu rol y responsabilidades habituales
- Tu estilo de comunicación preferido
- Tus formatos estándar

**PROMPTS ESPECÍFICOS** (Cuando los necesites):

- Detalles del caso particular
- Variaciones excepcionales
- Contexto adicional único
- Ajustes especiales

**Ejemplo de Sinergia:**

```
SISTEMA: "Siempre actúa como mi asistente ejecutivo del Tec"
PROMPT HOY: "Para este correo específico, sé extra formal porque es para rectoría"

```

---

## **📈 MÉTRICAS DE DECISIÓN**

### **¿Prompt o Instrucciones?**

**Usa PROMPT si:**

- ✓ Es la primera/única vez
- ✓ El contexto es muy específico
- ✓ Necesitas control total
- ✓ Estás experimentando

**Usa INSTRUCCIONES si:**

- ✓ Lo haces >3 veces al mes
- ✓ Sigues un patrón reconocible
- ✓ Valoras la consistencia
- ✓ Quieres liberar tiempo mental

---




### **1. Evaluación y Expansión de la Plantilla**

Tu plantilla es casi perfecta y cubre los aspectos más cruciales. Para hacerla aún más completa y fácil de recordar para un principiante, la he organizado y he añadido un componente clave: el **Tono (Tone)**. A menudo, el *cómo* dices algo es tan importante como el *qué* dices.

Aquí está la versión refinada y completa, que usaremos para la explicación:

**C.R.E.A.T.I.V.O.**

*   **C - Contexto (Context):** ¿Cuál es el trasfondo o la situación?
*   **R - Rol (Role):** ¿Quién quieres que sea la IA?
*   **E - Ejemplo (Example):** ¿Puedes mostrarle un ejemplo de lo que quieres?
*   **A - Audiencia (Audience):** ¿Para quién es la respuesta?
*   **T - Tarea (Task):** ¿Cuál es la acción específica que debe realizar?
*   **I - Instrucciones (Constraints & Format):** ¿Cuáles son las reglas y el formato de salida?
    *   **Restricciones:** Lo que NO debe hacer.
    *   **Formato de Retorno:** Cómo debe verse la respuesta.
*   **V - Voz y Tono (Voice & Tone):** ¿Cómo debe sonar la respuesta?
*   **O - Objetivo (Goal):** ¿Cuál es el propósito final o el porqué de la tarea?


---

### **2. ¿Por qué es esto tan importante? La Ingeniería de Prompts Fundacional**

La ingeniería de prompts es el arte y la ciencia de dar instrucciones claras a una inteligencia artificial para obtener el resultado que deseas. Un modelo de lenguaje como Gemini es increíblemente poderoso, pero **no puede leer tu mente**. Sin instrucciones claras, te dará una respuesta genérica, vaga y, a menudo, inútil.

Una instrucción bien diseñada es la diferencia entre la frustración y la magia. Es la habilidad fundamental para convertir una herramienta interesante en un asistente personal increíblemente competente.

---

### **3. Los Principios Fundamentales y la Analogía de la Biblioteca**

Imagina que entras a la biblioteca más grande del mundo (los datos y el conocimiento de la IA). Detrás del mostrador hay un bibliotecario con una memoria perfecta y una velocidad sobrehumana (el modelo de IA), que ha leído todos los libros. Tu prompt son las palabras que usas para pedirle ayuda.

**Prompt Pobre:**
Tú: "Necesito un libro sobre negocios".
El bibliotecario te señalará un pasillo con 50,000 libros. La respuesta es correcta, pero no te sirve de nada.

**Prompt Bien Diseñado):**
Usaremos el framework para mostrar la diferencia.

#### **C - Contexto (Context)**
*   **Qué es:** Darle el trasfondo de tu petición. Es el "porqué" detrás de tu pregunta.
*   **Analogía de la Biblioteca:** No solo pides un libro, sino que le dices al bibliotecario: "**Estoy preparando una presentación para mi jefa sobre estrategias de marketing digital.**" Inmediatamente, el bibliotecario descarta el 99% de los libros de "negocios" (contabilidad, logística, etc.) y se enfoca en lo que necesitas.

#### **R - Rol (Role)**
*   **Qué es:** Decirle a la IA qué "sombrero" o profesión debe adoptar. Esto activa todo el conocimiento y los patrones de lenguaje asociados con ese rol.
*   **Analogía de la Biblioteca:** Le dices al bibliotecario: "**Actúa como un asesor experto en startups de tecnología.**" Ahora no solo buscará libros, sino que te los recomendará desde la perspectiva de alguien que entiende el ecosistema tecnológico, dándote consejos que un bibliotecario generalista no podría.

#### **E - Ejemplo (Example)**
*   **Qué es:** Mostrarle a la IA exactamente cómo se ve un buen resultado. Es la forma más rápida de alinear su "creatividad" con tu necesidad.
*   **Analogía de la Biblioteca:** Le enseñas un párrafo de un artículo que te gustó y le dices: "**Busco libros que expliquen las cosas con este nivel de detalle y claridad.**" El bibliotecario ahora entiende perfectamente el estilo que buscas y puede encontrar coincidencias exactas.

#### **A - Audiencia (Audience)**
*   **Qué es:** Especificar para quién es la respuesta. Esto ajusta la complejidad, el vocabulario y el enfoque del resultado.
*   **Analogía de la Biblioteca:** Le dices: "**El libro es para un grupo de becarios que no saben nada de marketing.**" El bibliotecario evitará los textos académicos densos y buscará libros introductorios, claros y con muchos ejemplos prácticos.

#### **T - Tarea (Task)**
*   **Qué es:** El verbo de acción. La instrucción específica e inequívoca de lo que quieres que haga.
*   **Analogía de la Biblioteca:** En lugar de "necesito información", dices "**Crea una lista con viñetas de los 5 libros más influyentes sobre marketing de contenidos publicados en los últimos 2 años.**" La tarea es clara, específica y medible.

#### **I - Instrucciones (Constraints & Format)**
*   **Qué es:** Las reglas del juego. Límites, cosas que debe evitar y, crucialmente, cómo debe estructurar la respuesta.
*   **Analogía de la Biblioteca:** Le dices: "**La lista no debe incluir libros de más de 300 páginas (Restricción). Por favor, entrégame la lista en una ficha, con el título en negrita, el autor debajo y un resumen de una sola frase (Formato).**" Ahora no solo obtienes la información correcta, sino que la obtienes exactamente como la necesitas.

#### **V - Voz y Tono (Voice & Tone)**
*   **Qué es:** La personalidad de la respuesta. ¿Debe ser formal, inspiradora, divertida, seria, urgente?
*   **Analogía de la Biblioteca:** Le pides: "**Cuando me resumas los libros, usa un tono entusiasta y convincente.**" El bibliotecario no solo te describirá los libros, sino que intentará "vendértelos", haciendo que la información sea más atractiva.

#### **O - Objetivo (Goal)**
*   **Qué es:** El resultado final que esperas lograr con la ayuda de la IA. ¿Qué quieres que suceda después de que obtengas la respuesta?
*   **Analogía de la Biblioteca:** Le confiesas al bibliotecario: "**El objetivo final es que mi jefe apruebe mi propuesta de presupuesto para una nueva campaña de marketing de contenidos.**" Entender el objetivo final le permite al bibliotecario ir un paso más allá, quizás sugiriendo un capítulo específico sobre cómo calcular el ROI, algo que no pediste explícitamente pero que es crucial para tu éxito.

---

### **1. Framework: CREATIVO**

**Participante:** Sajidth
**Caso:** Análisis y Resumen de Información

#### **Explicación Técnica**
El framework C.R.E.A.T.I.V.O. obliga al modelo a ir más allá de una simple compresión de texto. Al definir un **Rol** específico (Analista) y una **Tarea** multifacética (Resumir, Extraer, Formular), condicionamos al modelo para que active las redes neuronales asociadas con el análisis estratégico. Los parámetros de **Objetivo** y **Audiencia** afinan el vocabulario y la complejidad del resultado, asegurando que los "tokens" generados no solo sean precisos, sino también relevantes y accionables en un contexto profesional.

#### **Por qué funciona - Analogía de la Biblioteca**
Imagina que le entregas un informe de 100 páginas a la persona encargada de la biblioteca. Si solo pides un "resumen", te devolverá la contraportada del libro. Pero si le dices: "Eres una persona analista de mercado (**Rol**) y tu objetivo es preparar a mi jefa para una junta (**Contexto/Objetivo**). Quiero que leas esto y me entregues una sola página con los 5 riesgos principales y una pregunta clave sobre cada uno (**Tarea/Formato**)", la persona encargada no solo resume, sino que interpreta, prioriza y te entrega inteligencia lista para usar.

#### **Prompt CREATIVO**
```markdown
# ROL
Actúa como una persona analista de investigación senior, experta en destilar información compleja y densa en insights estratégicos y accionables. Tu habilidad principal es encontrar la "señal" en medio del "ruido".

# TAREA
Lee el siguiente texto que te proporcionaré y realiza tres acciones específicas:
1.  **Resume la idea central** en un párrafo conciso (máximo 150 palabras).
2.  **Extrae los 5 hallazgos o puntos clave** más importantes en una lista con viñetas.
3.  **Formula una "pregunta de reflexión" o "acción posible"** para cada punto clave, diseñada para iniciar una discusión estratégica.

# CONTEXTO Y OBJETIVO
Tengo que discutir este documento en una reunión importante en menos de una hora. Mi objetivo es comprender profundamente sus conclusiones y estar preparada para liderar una conversación sobre sus implicaciones prácticas para nuestro equipo.

# AUDIENCIA
El resultado es para mí. Necesito claridad, brevedad y un enfoque en las conclusiones prácticas, no en la jerga académica o técnica.

# FORMATO DE RETORNO
Usa Markdown y organiza tu respuesta con los siguientes encabezados:
### Resumen Ejecutivo
### Puntos Clave
### Preguntas para Discusión

# EJEMPLO DE SALIDA
- **Punto Clave:** El estudio muestra que los equipos que usan X metodología aumentaron su productividad en un 20%.
- **Pregunta para Discusión:** ¿Qué barreras tendríamos que superar para implementar un piloto de la metodología X en nuestro propio departamento el próximo trimestre?

# TEXTO A ANALIZAR:
[Pega aquí el texto completo del documento o artículo]
```

### **2. Framework: CREATIVO**

**Participante:** A. Camero
**Caso:** Identificación de Dudas Recurrentes de Alumnado

#### **Explicación Técnica**
Este prompt utiliza las capacidades del modelo para la **Clasificación de Texto Zero-Shot**. Al proporcionar categorías predefinidas en la **Tarea** ("Dudas Administrativas", "Problemas Técnicos"), le damos al modelo un esquema de clasificación claro. El modelo calcula la similitud semántica entre cada correo y la descripción de cada categoría, asignando la más probable. Los pasos finales (Contar, Identificar, Sugerir) son una forma de **Chain-of-Thought**, forzando una secuencia lógica que va del dato crudo al insight accionable.

#### **Por qué funciona - Analogía de la Biblioteca**
Tienes una caja con cientos de notas y preguntas de estudiantes. En lugar de leerlas una por una, le das la caja a la persona de la biblioteca y pones enfrente tres canastas etiquetadas: "Horarios y Fechas", "Acceso a Plataforma" y "Contenido del Curso" (**Tarea/Categorías**). Le pides que lea cada nota y la coloque en la canasta correcta. Al final, no solo tienes todo organizado, sino que puedes ver de un vistazo qué canasta está más llena, revelando el problema principal sin haber leído cada nota individualmente.

#### **Prompt CREATIVO**
```markdown
# ROL
Actúa como una persona especialista en Análisis de Datos y Éxito Estudiantil. Tu superpoder es transformar datos cualitativos (texto y correos) en insights cuantitativos y planes de acción claros.

# TAREA
Analiza la siguiente lista de correos anónimos de estudiantes. Tu misión es:
1.  **Categorizar** cada correo en una de las siguientes áreas: "Dudas Administrativas", "Problemas Técnicos con Plataforma", "Consultas sobre Contenido Académico", "Otros".
2.  **Cuantificar** el número de correos por cada categoría.
3.  **Identificar los 3 problemas específicos** más mencionados en todas las categorías.
4.  **Sugerir una solución proactiva** para cada uno de esos 3 problemas (ej. crear un video tutorial, actualizar la sección de FAQ, enviar un comunicado).

# CONTEXTO Y OBJETIVO
Estoy analizando las dudas recibidas durante el último mes. El objetivo es crear un plan de acción concreto para reducir el volumen de consultas repetitivas y mejorar la claridad de nuestra comunicación.

# AUDIENCIA
El informe es para el equipo directivo del departamento; debe ser estructurado, visual y orientado a soluciones.

# FORMATO DE RETORNO
Usa Markdown con estos encabezados:
### Análisis Cuantitativo
(Usa una tabla con columnas para "Categoría" y "Frecuencia")
### Top 3 Problemas Recurrentes
(Usa una lista numerada)
### Plan de Acción Proactivo
(Usa una tabla con columnas para "Problema Detectado" y "Solución Sugerida")

# CORREOS A ANALIZAR:
[Pega aquí la lista de correos anónimos]
```

### **3. Framework: CREATIVO**

**Participante:** Oralia
**Caso:** Procesar Datos y Generar Ideas Creativas

#### **Explicación Técnica**
Este prompt implementa un **Flujo de Trabajo Modular Basado en Roles**. Al dividir la tarea en dos fases distintas con diferentes **Roles** (Investigador/a vs. Estratega), evitamos la "contaminación conceptual". La primera fase prepara al modelo para un razonamiento analítico y extractivo. El resultado de esta fase se convierte en la entrada restringida para la Fase 2, que prepara al modelo para un pensamiento creativo y generativo. Este condicionamiento secuencial asegura que las ideas creativas estén directamente fundamentadas en los hallazgos del análisis.

#### **Por qué funciona - Analogía de la Biblioteca**
Quieres escribir una novela sobre la historia de Roma. Primero, llamas a la persona "Historiadora" de la biblioteca (**Rol 1**). Se sumerge en los archivos y te entrega una lista de fechas y eventos clave (**Fase 1: Análisis**). Luego, llamas a la persona "Novelista" de la biblioteca (**Rol 2**). Le entregas la lista de la persona historiadora y dices: "Usando solo estos hechos, escribe un primer capítulo emocionante" (**Fase 2: Creatividad**). Al separar los roles, te aseguras de que la historia sea creativamente atractiva, pero firmemente basada en la investigación.

#### **Prompt CREATIVO**
```markdown
# ROL
Actúa como un equipo de dos especialistas que trabajan en secuencia.
- **Especialista 1: Investigador/a Cualitativo.** Una persona objetiva, analítica y experta en encontrar patrones en feedback.
- **Especialista 2: Estratega de Innovación.** Una persona creativa, audaz y experta en generar ideas disruptivas a partir de datos.

# TAREA
Te proporcionaré el feedback de un taller. Tu respuesta debe estar dividida en dos fases claras:

## Fase 1: Diagnóstico Analítico (Realizado por el/la Investigador/a)
- Lee todo el feedback de los participantes.
- Sintetiza la información en dos listas concisas: "Puntos Fuertes ✅" (lo que más gustó) y "Áreas de Oportunidad ❌" (lo que generó fricción o confusión).

## Fase 2: Brainstorming Creativo (Realizado por el/la Estratega)
- Basándote EXCLUSIVamente en las "Áreas de Oportunidad" identificadas en la Fase 1, genera 3 ideas audaces y accionables para mejorar radicalmente la próxima edición del taller.

# CONTEXTO Y OBJETIVO
Necesitamos transformar el feedback de nuestro último taller en un plan de mejora. El objetivo es, primero, entender la realidad (el análisis) y, segundo, diseñar un futuro emocionante (la creatividad).

# AUDIENCIA
Los resultados son para el equipo de diseño del taller, que necesita tanto un diagnóstico honesto como una dosis de inspiración.

# FORMATO DE RETORNO
Usa Markdown y separa claramente las dos fases con los encabezados:
### Fase 1: Diagnóstico Analítico
### Fase 2: Brainstorming Creativo

# FEEDBACK A ANALIZAR:
[Pega aquí todo el feedback de los participantes]
```

### **4. Framework: CREATIVO**

**Participante:** Griss
**Caso:** Automatizar Tareas Recurrentes

#### **Explicación Técnica**
Este prompt utiliza el LLM como una **Herramienta de Metaprogramación** para generar una plantilla reutilizable. La clave es la definición explícita de un **Formato de Retorno** que incluye marcadores de posición (`[texto a rellenar]`). El modelo reconoce estos marcadores como variables dentro de una estructura fija. La tarea del modelo no es generar contenido, sino generar una *estructura para contenido futuro*. La estricta **Estructura Requerida** actúa como una poderosa restricción en el resultado, asegurando alta fidelidad y usabilidad inmediata.

#### **Por qué funciona - Analogía de la Biblioteca**
En lugar de ir a la biblioteca cada semana a pedir que te busquen y organicen la misma información, vas una sola vez y dices: "Eres una persona experta en organización. Por favor, diséñame un formulario en blanco (**Plantilla**) que yo pueda rellenar cada semana. El formulario debe tener secciones claras para 'Logros', 'Planes' y 'Problemas' (**Formato**)". La persona de la biblioteca no te da información, te da una *herramienta* para organizar tu propia información de manera consistente.

#### **Prompt CREATIVO**
```markdown
# ROL
Actúa como una persona experta en productividad y "Systems Thinking". Tu especialidad es diseñar plantillas y flujos de trabajo que son tan eficientes que eliminan la necesidad de pensar en tareas repetitivas.

# TAREA
Crea una plantilla de correo electrónico completa y reutilizable para un informe de avance de proyecto semanal. La plantilla debe estar diseñada para que cualquier persona pueda rellenarla en menos de 5 minutos.

# CONTEXTO Y OBJETIVO
Quiero automatizar la creación de mis informes semanales para mi líder de equipo. El objetivo es tener una plantilla robusta y estandarizada que garantice consistencia y calidad sin tener que empezar de cero cada vez.

# AUDIENCIA
La plantilla será la base para un correo dirigido a un/a gerente que valora la claridad, la estructura y la capacidad de entender el estado de un proyecto de un solo vistazo.

# FORMATO DE RETORNO
El resultado debe ser una plantilla de texto lista para copiar y pegar en un correo electrónico. Utiliza placeholders (marcadores de posición) claros y consistentes entre corchetes, como `[texto a rellenar]`, para indicar qué información se debe completar.

# ESTRUCTURA REQUERIDA
La plantilla debe seguir estrictamente esta estructura:
1.  Asunto
2.  Saludo
3.  Resumen Ejecutivo (1 frase que resuma el estado general)
4.  Hitos Logrados esta Semana (lista de viñetas)
5.  Próximos Pasos para la Siguiente Semana (lista de viñetas)
6.  Bloqueos o Riesgos Actuales (si no hay, escribir "Ninguno por el momento.")
7.  Cierre
```

### **5. Framework: CREATIVO**

**Participante:** Guadalupe
**Caso:** Optimización de Correos de Contacto (Cold Emails)

#### **Explicación Técnica**
Este prompt aprovecha la habilidad del modelo para adoptar una **Persona** y generar resultados variados basados en principios psicológicos. Al definir un **Rol** (Copywriter + Psicólogo/a) y una **Tarea** que requiere diferentes "ángulos" (Curiosidad, Beneficio, Prueba Social), esencialmente pedimos al modelo que ejecute múltiples caminos de generación paralelos, cada uno condicionado por una estrategia persuasiva distinta. Las **Restricciones** estrictas (conteo de palabras) fuerzan al modelo a ser conciso e impactante.

#### **Por qué funciona - Analogía de la Biblioteca**
Quieres convencer a alguien importante para que lea un libro. Vas con la persona de la biblioteca y en lugar de pedirle "un resumen del libro", dices: "Actúa como una persona experta en marketing de libros (**Rol**). Quiero que escribas tres notas diferentes para poner en la portada, cada una para un tipo de lector distinto. Una debe generar misterio (**Curiosidad**), otra debe destacar lo que aprenderá (**Beneficio**), y la última debe mencionar quién más lo ha leído (**Prueba Social**)". Obtienes tres herramientas de persuasión distintas para la misma tarea.

#### **Prompt CREATIVO**
```markdown
# ROL
Actúa como un equipo de redacción publicitaria (Copywriting) de élite, especializado en correos de alto impacto ("cold outreach"). También tienes conocimientos profundos de psicología conductual, entendiendo qué dispara la curiosidad y motiva a una persona ocupada a responder.

# TAREA
Crea un "Paquete de Contacto en Frío" para un potencial candidato a un programa de posgrado. Este paquete debe incluir:
1.  **Tres versiones distintas del primer correo.** Cada versión debe ser radicalmente diferente y probar un ángulo psicológico específico.
2.  **Un guion para un mensaje de seguimiento.** Debe ser corto, amable y no insistente, para enviar 4 días después si no hay respuesta.

# CONTEXTO Y OBJETIVO
Mis correos actuales a candidatos tienen una tasa de respuesta baja. El objetivo es crear mensajes que rompan el ruido de una bandeja de entrada saturada y logren iniciar conversaciones significativas con profesionales de alto potencial.

# AUDIENCIA
El destinatario es una persona profesional, exitosa y escéptica. Valora su tiempo por encima de todo y es inmune a los mensajes de venta genéricos.

# RESTRICCIONES Y FORMATO
-   **Correos iniciales:** Menos de 120 palabras cada uno.
-   **Seguimiento:** Menos de 40 palabras.
-   **Placeholders:** Usa marcadores como `[Nombre del Candidato]`, `[Su Empresa Actual]`, y `[Nombre del Programa]`.
-   **Formato:** Usa Markdown con encabezados claros para cada versión y el seguimiento.
```