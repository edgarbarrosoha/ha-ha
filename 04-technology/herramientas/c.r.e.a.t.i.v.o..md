

# **C.R.E.A.T.I.V.O.**

---

- **C - Contexto (Context):**
    
    ### `¿Cuál es el trasfondo o la situación?`
    

---

- **R - Rol (Role):**
    
    ### `¿Quién quieres que sea la IA?`
    

---

- **E - Ejemplo (Example):**
    
    ### `¿Puedes mostrarle un ejemplo de lo que quieres?`
    

---

- **A - Audiencia (Audience):**
    
    ### `¿Para quién es la respuesta?`
    

---

- **T - Tarea (Task):**
    
    ## `¿Cuál es la acción específica que debe realizar?`
    

---

- **I - Instrucciones (Constraints & Format):**
    
    ## `¿Cuáles son las reglas y el formato de salida?`
    
    - **`Restricciones:** Lo que NO debe hacer.`
    - **`Formato de Retorno:** Cómo debe verse la respuesta.`

---

- **V - Voz y Tono (Voice & Tone):**
    
    ### `¿Cómo debe sonar la respuesta?`
    

---

- **O - Objetivo (Goal):**
    
    ### `¿Cuál es el propósito final o el porqué de la tarea?`
    

---

---

`05`

# **2. ¿Por qué es esto tan importante?**

## **La ingeniería de _prompts_**

La ingeniería de _prompts_ es el `arte y la ciencia de proporcionar instrucciones claras a una inteligencia artificial para obtener el resultado que deseas`. Un modelo de lenguaje como Gemini es increíblemente poderoso, pero **no puede leer tu mente 🧠 (todavía)**. Sin instrucciones claras, te dará una respuesta genérica, vaga y, a menudo, inútil.

Una instrucción bien diseñada es la diferencia entre la frustración y la magia. Es la habilidad fundamental para convertir una herramienta interesante en un asistente personal increíblemente competente.

![Screenshot 2025-10-27 at 9.14.03 PM.png](attachment:1b4aeeeb-b63e-4aea-8d01-6b03bce4615d:Screenshot_2025-10-27_at_9.14.03_PM.png)

---

`06`

# **3. Los principios fundamentales y la analogía de la biblioteca**

![ChatGPT Image Nov 3, 2025 at 09_24_58 AM.png](attachment:d0944cb9-f822-4f7a-ac88-9ca60722107b:849d8f8d-f580-4acf-80e9-7b1618da3815.png)

<aside>

### Imagina que entras a la biblioteca más grande del mundo (los datos y el conocimiento de la IA). Detrás del mostrador hay un bibliotecario con una memoria perfecta y una velocidad sobrehumana (el modelo de IA), que ha leído todos los libros. Tu prompt son las palabras que usas para pedirle ayuda.

</aside>

## **Prompt poco eficiente:**

Tú:

### `"Necesito un libro sobre negocios".`

> El bibliotecario te señalará un pasillo con 50,000 libros.

_La respuesta es correcta, pero no te sirve de nada._

---

## **Prompt bien estructurado:**

_Usaremos el framework para mostrar la diferencia._

# **C - Contexto (Context) → "Contextual Priming" o "Background Framing”**

<aside> 💡

**Qué es:**

_Darle el trasfondo de tu petición. Es el "`porqué`" detrás de tu pregunta._

- **Explicación técnica:**
    
    El contexto **activa selectivamente las representaciones latentes en el espacio de embeddings del modelo**, reduciendo la entropía de las distribuciones de probabilidad posteriores. Funciona como un mecanismo de atención que sesga la generación hacia dominios semánticos específicos.
    
- **Analogía de la biblioteca:**
    
    _No solo pides un libro, sino que le dices al bibliotecario:_
    
    ### `"Estoy preparando una presentación para mi jefa sobre estrategias de marketing digital."`
    
    <aside>
    
    Inmediatamente, la persona bibliotecaria descarta el 99% de los libros de "negocios" (contabilidad, logística, etc.) y se enfoca en lo que necesitas.
    
    </aside>
    
- **Ejemplo:**
    
    > CONTEXTO: `Estoy escribiendo un paper para Nature Computational Science sobre la aplicación de teoría de redes complejas para optimizar arquitecturas de transformers. Los revisores del primer round pidieron clarificar la conexión entre small-world networks y attention mechanisms. Necesito reformular el abstract para enfatizar esta relación sin exceder 150 palabras.`
    > 
    > `PREGUNTA: ¿Cómo puedo reescribir mi abstract?`
    
- **Referencias:**
    
    > `Liu, P., Yuan, W., Fu, J., Jiang, Z., Hayashi, H., & Neubig, G. (2023). "Pre-train, prompt, and predict: A systematic survey of prompting methods in natural language processing." *ACM Computing Surveys*, 55(9), 1-35.`
    

</aside>

# **R - Rol (Role) → "Role-Based Prompting" o "Persona-Driven Instruction”**

<aside> 💡

**Qué es:**

_Decirle a la IA qué "sombrero" o profesión debe adoptar. Esto activa el conocimiento y los patrones de lenguaje asociados con ese rol._

- **Explicación técnica:**
    
    La asignación de roles explota la naturaleza composicional de los _transformers_, **activando subredes específicas entrenadas en corpus especializados**. Esto induce un comportamiento consistente con el conocimiento y estilo lingüístico del rol especificado.
    
- **Analogía de la biblioteca:**
    
    _Le dices al bibliotecario:_
    
    ### `"Actúa como un asesor experto en startups de tecnología."`
    
    <aside>
    
    Ahora no solo buscará libros, sino que te los recomendará desde la perspectiva de alguien que entiende el ecosistema tecnológico, dándote consejos que un bibliotecario generalista no podría.
    
    </aside>
    
- **Ejemplo:**
    
    > `Actúa como un hybrid entre Geoffrey Hinton (deep learning pioneer) y Albert-László Barabási (network scientist). Tienes décadas de experiencia publicando en journals Q1 y eres editor asociado de Science Advances. Tu especialidad es identificar conexiones no obvias entre campos aparentemente distantes. Evalúa esta hipótesis: "Los LLMs exhiben propiedades de criticalidad auto-organizada similar a los sistemas complejos biológicos durante el fine-tuning."`
    
- **Referencias:**
    
    > `Bai, Y., Kadavath, S., Kundu, S., et al. (2022). "Constitutional AI: Harmlessness from AI feedback." *arXiv preprint arXiv:2212.08073*.`
    

---

</aside>

# **E - Ejemplo (Example) → "Few-Shot Learning" o "In-Context Learning (ICL)”**

<aside> 💡

**Qué es:**

_Mostrarle a la IA exactamente cómo se ve un buen resultado. Es una forma eficiente de alinear su "creatividad" con tu necesidad._

- **Explicación técnica:**
    
    **Los ejemplos funcionan como** **vectores de demostración que establecen un mapeo implícito entre entradas y salidas** sin actualizar los pesos del modelo. El mecanismo de atención identifica patrones estructurales y los replica mediante inferencia bayesiana aproximada.
    
- **Analogía de la biblioteca:**
    
    _Le enseñas un párrafo de un artículo que te gustó y le dices:_
    
    ### `"**Busco libros que expliquen las cosas con este nivel de detalle y claridad.**"`
    
    <aside>
    
    El bibliotecario ahora entiende perfectamente el estilo que buscas y puede encontrar coincidencias exactas.
    
    </aside>
    
- **Ejemplo:**
    
    > `Necesito generar títulos para papers siguiendo este patrón:`
    > 
    > `Ejemplo 1: "Emergent Hierarchical Structures in Multi-Agent Reinforcement Learning: A Complex Systems Perspective"`
    > 
    > `Ejemplo 2: "Phase Transitions in Neural Architecture Search: Evidence from 10,000 Experiments"`
    > 
    > `Ejemplo 3: "The Topology of Artificial Reasoning: Mapping Logical Structures in Large Language Models"`
    > 
    > `Ahora genera un título para mi paper sobre aplicación de percolation theory a la robustez de modelos de visión computacional.`
    
- **Referencias:**
    
    > `Brown, T., Mann, B., Ryder, N., et al. (2020). "Language models are few-shot learners." _NeurIPS_, 33, 1877-1901.
    
    Xie, S. M., Raghunathan, A., Liang, P., & Ma, T. (2022). "An explanation of in-context learning as implicit Bayesian inference." _ICLR 2022_.
    
    Min, S., Lyu, X., Holtzman, A., et al. (2022). "Rethinking the role of demonstrations: What makes in-context learning work?" _EMNLP 2022_.`
    

</aside>

# **A - Audiencia (Audience) → "Audience Adaptation" o "Register Specification”**

<aside> 💡

**Qué es:**

_Especificar para quién es la respuesta. Esto ajusta la complejidad, el vocabulario y el enfoque del resultado._

- **Explicación técnica:**
    
    **Controla el registro lingüístico** mediante la modulación de distribuciones léxicas y sintácticas. **Ajusta métricas de complejidad** (Flesch-Kincaid, SMOG) **y selección terminológica** basándose en modelos de audiencia objetivo.
    
- **Analogía de la biblioteca:**
    
    _Le dices:_
    
    ### `"**El libro es para un grupo de becarios que no saben nada de marketing.**"`
    
    <aside>
    
    El bibliotecario evitará los textos académicos densos y buscará libros introductorios, claros y con muchos ejemplos prácticos.
    
    </aside>
    
- **Ejemplo**
    
    > `Explica el concepto de "emergence in neural scaling laws" para TRES audiencias:`
    > 
    > 1. `Para revisores de Physical Review Letters (físicos teóricos)`
    > 2. `Para el board de inversores de mi startup (ejecutivos no-técnicos)`
    > 3. `Para estudiantes de doctorado en mi seminario de sistemas complejos`
    > 
    > `Ajusta vocabulario, ejemplos y profundidad matemática para cada audiencia.`
    
- **Referencias**
    
    > `Kang, H., & Hovy, D. (2021). "Style is NOT a single variable: Case studies for cross-stylistic language understanding." _ACL-IJCNLP_, 2353-2365.
    
    Reiter, E., & Dale, R. (2000). _Building Natural Language Generation Systems_. Cambridge University Press.`
    

</aside>

# **T - Tarea (Task) → "Task Decomposition" o "Instruction Tuning”**

<aside> 💡

**Qué es:**

_**El verbo de acción.** La instrucción específica e inequívoca de lo que quieres que haga._

- **Explicación técnica:**
    
    **Define operadores semánticos específicos que guían la función objetivo del modelo**. La descomposición explícita de tareas reduce la ambigüedad y mejora la alineación entre intención y ejecución.
    
- **Analogía de la biblioteca:**
    
    _En lugar de `"necesito información"`, dices_:
    
    ### `"**Crea una lista con viñetas de los 5 libros más influyentes sobre marketing de contenidos publicados en los últimos 2 años.**"`
    
    <aside>
    
    La tarea es clara, específica y medible.
    
    </aside>
    
- **Ejemplo:**
    
    > `Desarrolla una arquitectura de prompts recursivos para analizar papers.`
    > 
    > `Descompón en estas sub-tareas:`
    > 
    > 1. `EXTRAER: Identificar claim principal, metodología y conclusiones`
    > 2. `EVALUAR: Assess validez estadística y reproducibilidad`
    > 3. `CONECTAR: Mapear citas y construir grafo de conocimiento`
    > 4. `SINTETIZAR: Generar meta-análisis estructurado`
    > 5. `PROPONER: Sugerir 3 extensiones experimentales`
    > 
    > `Ejecuta este pipeline con el paper: [DOI: 10.1038/s41586-023-06647-8]`
    
- **Referencias:**
    
    > `Ouyang, L., Wu, J., Jiang, X., et al. (2022). "Training language models to follow instructions with human feedback." _NeurIPS_, 35, 27730-27744.
    
    Wei, J., Wang, X., Schuurmans, D., et al. (2022). "Chain-of-thought prompting elicits reasoning in large language models." _NeurIPS_, 35, 24824-24837.
    
    Khot, T., Trivedi, H., Finlayson, M., et al. (2023). "Decomposed prompting: A modular approach for solving complex tasks." _ICLR 2023_.`
    

</aside>

# **I - Instrucciones (Constraints & Format)**

**Qué es:**

_**Las reglas del juego.** Límites, cosas que debe evitar y, crucialmente, cómo debe estructurar la respuesta._

- **Explicación técnica**
    
    Implementa **restricciones duras y blandas mediante _tokens_ de control y templates estructurados**. Utiliza programación lógica para garantizar conformidad con especificaciones formales.
    
- **Analogía de la biblioteca:**
    
    _Le dices:_
    
    ### `"**La lista no debe incluir libros de más de 300 páginas (Restricción). Por favor, entrégame la lista en una ficha, con el título en negrita, el autor debajo y un resumen de una sola frase (Formato).**"`
    
    <aside>
    
    Ahora no solo obtienes la información correcta, sino que la obtienes exactamente como la necesitas.
    
    </aside>
    
- **Ejemplo:**
    
    > `Genera un research proposal con estas restricciones:`
    > 
    > `RESTRICCIONES DURAS:`
    > 
    > - `Máximo 2 páginas (1000 palabras)`
    > - `Debe incluir ecuaciones en LaTeX`
    > - `Presupuesto < $150,000 USD`
    > - `Timeline: 12 meses`
    > - `Citar mínimo 5 papers de 2024`
    > 
    > `FORMATO OBLIGATORIO:`
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
    > `Tema: Quantum-inspired algorithms for NP-hard optimization in neural architectures`
    
- **Referencias**
    
    > `Zhou, Y., Muresanu, A. I., Han, Z., et al. (2023). "Large language models are human-level prompt engineers." _ICLR 2023_.
    
    Honovich, O., Scialom, T., Levy, O., & Schick, T. (2023). "Unnatural instructions: Tuning language models with (almost) no human labor." _ACL 2023_.`
    

# **V - Voz y Tono (Voice & Tone) → Style Transfer / Prosodic Modulation**

**Qué es:**

_La personalidad de la respuesta. ¿Debe ser formal, inspiradora, divertida, seria, urgente?_

- **Explicación técnica**
    
    Manipula **características estilométricas** mediante control de variables latentes que codifican propiedades prosódicas y afectivas del texto. Utiliza _embeddings_ de estilo para transformación controlada.
    
- **Analogía de la biblioteca:**
    
    _Le pides:_
    
    ### `"**Cuando me resumas los libros, usa un tono entusiasta y convincente.**"`
    
    <aside>
    
    El bibliotecario no solo te describirá los libros, sino que intentará "vendértelos", haciendo que la información sea más atractiva.
    
    </aside>
    
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

**Qué es:**

_El resultado final que esperas lograr con la ayuda de la IA. ¿Qué quieres que suceda después de que obtengas la respuesta?_

- **Explicación técnica:**
    
    **Alinea la función de recompensa implícita del modelo con objetivos explícitos** mediante especificación de estados finales deseados. Se relaciona con planificación jerárquica y optimización de trayectorias en el espacio de acciones lingüísticas.
    
- **Analogía de la biblioteca:**
    
    _Le confiesas al bibliotecario:_
    
    ### `"**El objetivo final es que mi jefe apruebe mi propuesta de presupuesto para una nueva campaña de marketing de contenidos.**"`
    
    <aside>
    
    Entender el objetivo final le permite al bibliotecario ir un paso más allá, quizás sugiriendo un capítulo específico sobre cómo calcular el ROI, algo que no pediste explícitamente pero que es crucial para tu éxito.
    
    </aside>
    
- **Ejemplo:**
    
    > `OBJETIVO FINAL: Conseguir un grant de €1M de European Research Council (ERC) para estudiar "Emergent Computation in Hybrid Quantum-Classical Systems"`
    > 
    > `Con este objetivo en mente:`
    > 
    > 1. `Identifica los 3 gaps más críticos en el campo según papers 2023-2024`
    > 2. `Formula una hipótesis que sea simultáneamente:`
    >     - `Científicamente audaz pero factible`
    >     - `Alineada con Horizon Europe priorities`
    >     - `Diferenciada de grants recientemente aprobados`
    > 3. `Diseña un work package structure que maximice probabilidad de aprobación`
    > 4. `Sugiere 3 colaboradores europeos estratégicos con h-index > 40`
    > 
    > `Optimiza cada elemento para maximizar el score de evaluación ERC.`
    
- **Referencias:**
    
    > `Christiano, P., Leike, J., Brown, T., et al. (2017). "Deep reinforcement learning from human preferences." _NeurIPS_, 30.
    
    Stiennon, N., Ouyang, L., Wu, J., et al. (2020). "Learning to summarize with human feedback." _NeurIPS_, 33, 3008-3021.
    
    Rafailov, R., Sharma, A., Mitchell, E., et al. (2023). "Direct preference optimization: Your language model is secretly a reward model." _NeurIPS 2023_.`
    

</aside>

---

# **FRAMEWORK: CREATIVO**

## **PROMPTS**

Transforma consultas vagas en peticiones precisas con **contexto completo, rol definido y output estructurado**. En lugar de "resume esto", obtienes "como analista senior, extrae 5 KPIs para el CEO en formato ejecutivo".

---

## **INSTRUCCIONES**

Convierte tareas repetitivas en **sistemas reutilizables** que funcionan con inputs mínimos. Configuras CREATIVO una vez y luego solo dices "email: no puedo jueves" para obtener un correo profesional completo automáticamente.

---

## **AGENTES**

Diseña **empleados digitales autónomos** con identidad, misiones y protocolos de decisión claros. CREATIVO define no solo QUÉ hacen, sino QUIÉNES son, CÓMO deciden y CUÁNDO actuar sin supervisión humana.

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
    

# **CASO: CF FUENTES**

## Ejemplos:

### **C - Contexto:**

`Estoy preparando una presentación para mi equipo sobre productividad.`

### **R - Rol:**

`Actúa como un experto en productividad y gestión del tiempo.`

### **E - Estilo:**

`Usa un tono motivacional pero práctico, con ejemplos concretos.`

### **A - Audiencia:**

`Profesionales jóvenes (25-35 años) que trabajan de forma remota.`

### **T - Tarea:**

`Crea 5 consejos para mejorar la productividad trabajando desde casa.`

### **I - Instrucciones:**

- `Cada consejo debe ser accionable`
- `Incluye un ejemplo práctico por consejo`
- `Evita clichés comunes`
- `Enfócate en técnicas modernas`

### **V - Validación:**

`Asegúrate de que los consejos sean realistas y aplicables inmediatamente.`

### **O - Output:**

`Formato: Lista numerada con título, descripción breve (2-3 líneas) y ejemplo por cada consejo.`
