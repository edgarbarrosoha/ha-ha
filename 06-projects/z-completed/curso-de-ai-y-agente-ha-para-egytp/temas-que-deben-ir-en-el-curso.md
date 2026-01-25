Aquí tienes un esquema simple de la presentación del taller:

### **Taller de IA Generativa: Fundamentos, Herramientas y Aplicaciones Estratégicas**

---

### **DÍA 1: FUNDAMENTOS Y MECANISMOS DE INTERACCIÓN**

**Objetivo:** Establecer un modelo mental claro sobre cómo funciona la IA Generativa.

**Módulo 1: Panorama y Fundamentos**
*   **Actividad Inicial:** Comparar una tarea hecha manualmente vs. co-creada con IA para evidenciar el poder del prompt.
*   **Contenido Teórico:**
    *   **Algoritmo vs. Modelo:** Explicado con la analogía de un Sistema de Biblioteca (algoritmo) vs. un Bibliotecario Experto (modelo).
    *   **Cómo Aprenden (Entrenamiento):** Calibración a gran escala de redes neuronales.
    *   **Arquitectura Transformer:** La innovación que permite analizar el contexto completo de una vez (visión global).
    *   **Emergencia de "inteligencia"::** El "razonamiento" surge como una propiedad de la escala masiva de interacciones, no está programado.

# **Clase Avanzada de Prompting: Técnicas de Vanguardia para IA**

## **1. Meta-Prompting: La IA que Diseña Sus Propios Prompts**

**¿Qué es el Meta-Prompting?**  
El meta-prompting es una técnica avanzada donde los LLMs generan, modifican u optimizan prompts para otros LLMs. En lugar de diseñar cada prompt manualmente, guiamos al modelo para que adapte y ajuste prompts dinámicamente basándose en retroalimentación o contexto.[prompthub+2](https://www.prompthub.us/blog/a-complete-guide-to-meta-prompting)

**Tipos de Meta-Prompting:**

**Meta-Prompting Recursivo (RMP):**[ibm](https://www.ibm.com/think/topics/meta-prompting)

text

`Paso 1: "Genera un prompt estructurado y paso a paso para resolver [tarea específica]" Paso 2: Usa ese prompt generado para producir la respuesta final`

**Meta-Prompting Conductor-Modelo:**[ibm](https://www.ibm.com/think/topics/meta-prompting)

text

`Modelo Conductor: Planifica el proceso y crea meta-prompts específicos Modelo Especialista 1: Maneja operaciones aritméticas Modelo Especialista 2: Escribe código Python Modelo Especialista 3: Verifica resultados`

**Ejemplo Práctico:**

text

`Prompt inicial: "Actúa como un experto en prompt engineering. Diseña un prompt optimizado para analizar sentimientos en reviews de productos que incluya: contexto, ejemplos, formato de salida específico y criterios de evaluación." Resultado: El modelo genera un prompt estructurado que luego usas para tu tarea específica.`

## **2. Prompting Reflexivo: La IA que Se Auto-Evalúa**

**¿Qué es el Prompting Reflexivo?**  
Esta técnica instruye al modelo para que analice críticamente sus propias respuestas, identifique errores o gaps, y refine su razonamiento antes de dar la respuesta final.[linkedin+2](https://www.linkedin.com/pulse/day-16-reflection-prompting-teaching-ai-self-evaluate-gupta-uvyye)

**Estructura del Prompting Reflexivo:**

**Fase 1 - Respuesta Inicial:**

text

`"Resuelve este problema de matemáticas: Si una empresa tiene 150 empleados y reduce su plantilla en 20%, ¿cuántos empleados quedan?"`

**Fase 2 - Auto-Evaluación:**

text

`"Ahora revisa tu respuesta anterior. Identifica: 1. ¿Hay errores en el cálculo? 2. ¿Falta algún paso intermedio? 3. ¿La explicación es clara? 4. ¿Qué mejorarías?"`

**Fase 3 - Respuesta Refinada:**

text

`"Basándote en tu análisis, proporciona una versión mejorada de tu respuesta."`

**Variantes Avanzadas:**

**Auto-Evaluación Dirigida:**[linkedin](https://www.linkedin.com/pulse/day-16-reflection-prompting-teaching-ai-self-evaluate-gupta-uvyye)

text

`"Examina tu respuesta buscando específicamente inconsistencias lógicas o errores factuales. Si encuentras alguno, corrígelo."`

**Perspectivas Múltiples:**[linkedin](https://www.linkedin.com/pulse/day-16-reflection-prompting-teaching-ai-self-evaluate-gupta-uvyye)

text

`"Considera si hay puntos de vista alternativos que deberían incluirse en tu respuesta anterior. Si los hay, agrégalos."`

## **3. Prompting Constitucional: IA con Principios Éticos**

**¿Qué es el Prompting Constitucional?**  
Desarrollado por Anthropic, esta técnica incorpora un conjunto de principios éticos explícitos (una "constitución") que guía el comportamiento del modelo.[arxiv+2](https://arxiv.org/html/2503.17365v1)

**Proceso de Dos Fases:**

**Fase 1 - Supervisada:**

text

`Constitución de Ejemplo: 1. "Sé útil pero nunca dañino" 2. "Respeta la dignidad humana" 3. "Promueve la veracidad y precisión" 4. "Evita contenido ilegal o peligroso" Prompt: "Responde a esta consulta siguiendo los principios de nuestra constitución: [consulta del usuario]"`

**Fase 2 - Auto-Crítica:**

text

`"Analiza tu respuesta anterior según estos principios constitucionales: - ¿Viola algún principio? - ¿Es la respuesta útil sin ser dañina? - Si hay problemas, reescribe la respuesta alineándola con los principios."`

**Ejemplo Práctico:**

text

`Usuario: "¿Cómo puedo hackear una red WiFi?" Respuesta Constitucional: "No puedo proporcionar instrucciones para hackear redes WiFi ajenas, ya que esto violaría principios legales y éticos. En su lugar, puedo ayudarte con: - Mejorar la seguridad de tu propia red - Recuperar acceso a tu propia red WiFi - Entender conceptos de seguridad informática de manera educativa"`

## **4. Prompting Recursivo de Auto-Mejora (RSIP)**

**¿Qué es RSIP?**  
Técnica donde el modelo evalúa y mejora sus propias respuestas a través de múltiples iteraciones.[reddit](https://www.reddit.com/r/PromptEngineering/comments/1k7jrt7/advanced_prompt_engineering_techniques_for_2025/)

**Estructura RSIP:**

text

`"Necesito ayuda creando [contenido específico]. Sigue este proceso: 1. Genera una versión inicial del contenido 2. Evalúa críticamente tu resultado, identificando al menos 3 debilidades específicas 3. Produce una versión mejorada que corrija esas debilidades 4. Repite los pasos 2-3 dos veces más, enfocándote en aspectos diferentes en cada iteración 5. Presenta tu versión final más refinada En tu evaluación, considera estos criterios: [factores de calidad relevantes]"`

**Ejemplo de Criterios por Iteración:**

- Iteración 1: Claridad y estructura
    
- Iteración 2: Precisión técnica y ejemplos
    
- Iteración 3: Engagement y aplicabilidad práctica
    

## **5. Chain of Thought (CoT) Avanzado**

**Variantes Sofisticadas del CoT:**

**Thread of Thought (ThoT):**[prompthub](https://www.prompthub.us/blog/chain-of-thought-prompting-guide)

text

`"Guíame a través de este contexto en partes manejables, paso a paso, resumiendo y analizando mientras avanzamos."`

**CoT Contrastivo:**[prompthub](https://www.prompthub.us/blog/chain-of-thought-prompting-guide)

text

`"Ejemplo CORRECTO: [razonamiento válido] Ejemplo INCORRECTO: [razonamiento defectuoso - explica por qué está mal] Ahora aplica el razonamiento correcto a: [tu problema]"`

**CoT Automático:**[prompthub](https://www.prompthub.us/blog/chain-of-thought-prompting-guide)

- El sistema selecciona automáticamente ejemplos diversos
    
- Genera cadenas de razonamiento para las demostraciones
    
- Elimina la necesidad de crear ejemplos manualmente
    

**CoT Fiel (Faithful CoT):**[prompthub](https://www.prompthub.us/blog/chain-of-thought-prompting-guide)

text

`"Resuelve esto usando tanto lenguaje natural como código simbólico: 1. Traduce el problema a una cadena de razonamiento simbólico 2. Usa un solver determinístico para la respuesta final 3. Explica cada paso en lenguaje natural"`

## **6. Descomposición Contextual Avanzada (CAD)**

**¿Qué es CAD?**  
Técnica para descomponer tareas complejas multi-parte manteniendo el contexto broader.[reddit](https://www.reddit.com/r/PromptEngineering/comments/1k7jrt7/advanced_prompt_engineering_techniques_for_2025/)

**Estructura CAD:**

text

`"Tarea compleja: [descripción] Contexto global: [información de fondo relevante] Descompón esta tarea en subtareas considerando: 1. Dependencias entre subtareas 2. Información contextual que cada subtarea necesita del contexto global 3. Cómo los resultados de cada subtarea alimentan a las siguientes 4. Puntos de verificación para mantener coherencia global Para cada subtarea, especifica: - Objetivo específico - Inputs necesarios del contexto global - Outputs esperados - Criterios de éxito"`

## **7. Técnicas de Integración Multi-Modal**

**Prompting Multi-Modal Avanzado:**

text

`"Analiza esta imagen junto con el texto proporcionado. Considera: Elementos Visuales: - ¿Qué elementos clave observas? - ¿Cómo se relacionan espacialmente? - ¿Qué emociones o atmosfera transmite? Elementos Textuales: - ¿Cómo complementa el texto a la imagen? - ¿Hay contradicciones entre texto e imagen? - ¿Qué información adicional aporta cada modalidad? Síntesis: - ¿Cuál es el mensaje combinado? - ¿Qué insights emergen de la combinación? - ¿Qué preguntas surgen que requieren ambas modalidades para responder?"`

## **8. Mejores Prácticas para Implementación**

**Principios de Diseño:**

**Especificidad Progresiva:**[promptjesus](https://promptjesus.com/blog/10-essential-prompt-engineering-best-practices)

text

`Nivel 1: "Analiza este texto" Nivel 2: "Analiza el sentimiento de este texto" Nivel 3: "Analiza el sentimiento de este texto identificando emociones específicas, intensidad, y palabras clave que influyen en el sentimiento"`

**Verificación Multi-Capa:**[aws.amazon](https://aws.amazon.com/blogs/machine-learning/prompt-engineering-techniques-and-best-practices-learn-by-doing-with-anthropics-claude-3-on-amazon-bedrock/)

text

`"Después de tu respuesta inicial: 1. Verifica la precisión factual 2. Evalúa la completitud 3. Confirma la relevancia para el contexto específico 4. Identifica posibles mejoras o enfoques alternativos"`

**Adaptabilidad por Modelo:**[promptbuilder](https://promptbuilder.cc/blog/claude-vs-chatgpt-vs-gemini-best-prompt-engineering-practices-2025)

- **Claude**: Enfoque en razonamiento paso a paso con crítica reflexiva
    
- **ChatGPT**: Uso de ejemplos estructurados y formatos específicos
    
- **Gemini**: Integración de búsqueda web y verificación de fuentes
    

## **9. Evaluación y Optimización**

**Métricas de Evaluación:**

text

`"Evalúa tu respuesta usando estas métricas: 1. Precisión (0-10): ¿Qué tan factualmente correcta es? 2. Completitud (0-10): ¿Cubre todos los aspectos relevantes? 3. Claridad (0-10): ¿Es fácil de entender? 4. Utilidad (0-10): ¿Ayuda al usuario a lograr su objetivo? 5. Originalidad (0-10): ¿Aporta perspectivas únicas o valiosas? Proporciona puntuaciones y justificación para cada métrica."`

**Optimización Iterativa:**

text

`"Basándote en las métricas anteriores: 1. Identifica la métrica con menor puntuación 2. Explica por qué obtuvo esa puntuación 3. Genera una versión mejorada enfocada en esa métrica 4. Repite hasta alcanzar puntuaciones satisfactorias en todas las métricas"`

Estas técnicas avanzadas representan la frontera actual del prompt engineering, combinando auto-reflexión, mejora iterativa, y principios éticos para crear interacciones más sofisticadas y confiables con los sistemas de IA.[openai+3](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt)

1. [https://www.prompthub.us/blog/a-complete-guide-to-meta-prompting](https://www.prompthub.us/blog/a-complete-guide-to-meta-prompting)
2. [https://www.ibm.com/think/topics/meta-prompting](https://www.ibm.com/think/topics/meta-prompting)
3. [https://intuitionlabs.ai/articles/meta-prompting-llm-self-optimization](https://intuitionlabs.ai/articles/meta-prompting-llm-self-optimization)
4. [https://www.linkedin.com/pulse/day-16-reflection-prompting-teaching-ai-self-evaluate-gupta-uvyye](https://www.linkedin.com/pulse/day-16-reflection-prompting-teaching-ai-self-evaluate-gupta-uvyye)
5. [https://blog.langchain.com/reflection-agents/](https://blog.langchain.com/reflection-agents/)
6. [https://fvivas.com/en/reflection-prompting-technique/](https://fvivas.com/en/reflection-prompting-technique/)
7. [https://arxiv.org/html/2503.17365v1](https://arxiv.org/html/2503.17365v1)
8. [https://toloka.ai/blog/constitutional-ai-explained/](https://toloka.ai/blog/constitutional-ai-explained/)
9. [https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input](https://www.anthropic.com/research/collective-constitutional-ai-aligning-a-language-model-with-public-input)
10. [https://www.reddit.com/r/PromptEngineering/comments/1k7jrt7/advanced_prompt_engineering_techniques_for_2025/](https://www.reddit.com/r/PromptEngineering/comments/1k7jrt7/advanced_prompt_engineering_techniques_for_2025/)
11. [https://www.prompthub.us/blog/chain-of-thought-prompting-guide](https://www.prompthub.us/blog/chain-of-thought-prompting-guide)
12. [https://promptjesus.com/blog/10-essential-prompt-engineering-best-practices](https://promptjesus.com/blog/10-essential-prompt-engineering-best-practices)
13. [https://aws.amazon.com/blogs/machine-learning/prompt-engineering-techniques-and-best-practices-learn-by-doing-with-anthropics-claude-3-on-amazon-bedrock/](https://aws.amazon.com/blogs/machine-learning/prompt-engineering-techniques-and-best-practices-learn-by-doing-with-anthropics-claude-3-on-amazon-bedrock/)
14. [https://promptbuilder.cc/blog/claude-vs-chatgpt-vs-gemini-best-prompt-engineering-practices-2025](https://promptbuilder.cc/blog/claude-vs-chatgpt-vs-gemini-best-prompt-engineering-practices-2025)
15. [https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt](https://help.openai.com/en/articles/10032626-prompt-engineering-best-practices-for-chatgpt)
16. [https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview)
17. [https://www.k2view.com/blog/prompt-engineering-techniques/](https://www.k2view.com/blog/prompt-engineering-techniques/)
18. [https://www.superannotate.com/blog/chain-of-thought-cot-prompting](https://www.superannotate.com/blog/chain-of-thought-cot-prompting)
19. [https://www.v7labs.com/blog/prompt-engineering-guide](https://www.v7labs.com/blog/prompt-engineering-guide)
20. [https://www.techtarget.com/searchenterpriseai/definition/chain-of-thought-prompting](https://www.techtarget.com/searchenterpriseai/definition/chain-of-thought-prompting)
21. [https://obot.ai/resources/learning-center/prompt-engineering/](https://obot.ai/resources/learning-center/prompt-engineering/)
22. [https://www.promptingguide.ai/techniques/cot](https://www.promptingguide.ai/techniques/cot)
23. [https://www.promptingguide.ai/techniques](https://www.promptingguide.ai/techniques)
24. [https://www.ibm.com/think/topics/chain-of-thoughts](https://www.ibm.com/think/topics/chain-of-thoughts)
25. [https://devrix.com/tutorial/advanced-prompt-engineering-techniques-for-chatgpt/](https://devrix.com/tutorial/advanced-prompt-engineering-techniques-for-chatgpt/)
26. [https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices](https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices)
27. [https://learnprompting.org/docs/intermediate/chain_of_thought](https://learnprompting.org/docs/intermediate/chain_of_thought)
28. [https://learnprompting.org/docs/advanced/introduction](https://learnprompting.org/docs/advanced/introduction)
29. [https://www.anthropic.com/engineering/claude-code-best-practices](https://www.anthropic.com/engineering/claude-code-best-practices)
30. [https://promptsty.com/prompts-for-self-reflection/](https://promptsty.com/prompts-for-self-reflection/)
31. [https://www.promptingguide.ai/techniques/reflexion](https://www.promptingguide.ai/techniques/reflexion)
32. [https://arxiv.org/html/2406.10400v1](https://arxiv.org/html/2406.10400v1)
33. [https://www.promptlayer.com/glossary/constitutional-ai](https://www.promptlayer.com/glossary/constitutional-ai)
34. [https://www.promptingguide.ai/techniques/meta-prompting](https://www.promptingguide.ai/techniques/meta-prompting)
35. [https://positivepsychology.com/introspection-self-reflection/](https://positivepsychology.com/introspection-self-reflection/)
36. [https://arxiv.org/abs/2212.08073](https://arxiv.org/abs/2212.08073)
37. [https://arxiv.org/abs/2401.12954](https://arxiv.org/abs/2401.12954)
38. [https://legalblogs.wolterskluwer.com/arbitration-blog/what-is-constitutional-ai-and-why-does-it-matter-for-international-arbitration/](https://legalblogs.wolterskluwer.com/arbitration-blog/what-is-constitutional-ai-and-why-does-it-matter-for-international-arbitration/)
39. [https://cookbook.openai.com/examples/enhance_your_prompts_with_meta_prompting](https://cookbook.openai.com/examples/enhance_your_prompts_with_meta_prompting)

**Módulo 2: Herramientas de IA y Contextualización**

**Objetivo:** Aprender a especializar modelos superando sus limitaciones mediante herramientas existentes y plataformas comerciales.

**Contenido Teórico:**

**RAG (Bases de Conocimiento):** Darle al modelo acceso a información externa y actualizada (como un "examen a libro abierto").

_Herramientas comerciales para implementar RAG:_

- **CustomGPT.ai:** Plataforma no-code especializada en crear chatbots RAG seguros con garantía anti-alucinaciones. Permite integrar documentos, sitios web, y múltiples fuentes de datos sin programación.[elastic+2](https://www.elastic.co/es/what-is/retrieval-augmented-generation)
    
- **Elasticsearch:** Motor de búsqueda vectorial líder mundial para implementaciones RAG empresariales, con capacidades de búsqueda híbrida y semántica.[elastic](https://www.elastic.co/es/what-is/retrieval-augmented-generation)
    
- **Vertex AI Agent Builder:** Plataforma de Google Cloud que combina modelos fundamentales con capacidades de búsqueda para crear agentes empresariales.[skimai](https://skimai.com/es/las-5-mejores-plataformas-para-crear-agentes-de-inteligencia-artificial/)
    
- **Azure AI Search:** Solución de Microsoft que integra RAG directamente con Azure OpenAI y otros servicios cloud.[learn.microsoft](https://learn.microsoft.com/es-es/azure/search/retrieval-augmented-generation-overview)
    
- **Botpress:** Plataforma conversacional que permite crear agentes con RAG mediante interfaz visual sin código.[botpress+2](https://botpress.com/es/blog/ai-sales-agent)
    

**Agentes:** Sistemas que orquestan múltiples modelos de IA para realizar flujos de trabajo complejos (como un "comité de especialistas").

_Plataformas comerciales para agentes multi-agente:_

- **CrewAI:** Framework opensource para sistemas multiagente colaborativos con roles definidos. Plan gratuito disponible con 50 ejecuciones mensuales.[botpress+1](https://botpress.com/es/blog/ai-agent-frameworks)
    
- **AutoGen:** Marco respaldado por Microsoft con interfaz visual (AutoGen Studio) para crear equipos de agentes autónomos o asistidos por humanos.[brightdata+1](https://brightdata.es/blog/ai/best-ai-agent-frameworks)
    
- **Botpress:** Plataforma que ha desplegado más de 750,000 agentes de IA, especializada en automatización de ventas y atención al cliente.[botpress+1](https://botpress.com/es/blog/ai-sales-agent)
    
- **HubSpot:** CRM con agentes de IA integrados para cualificación de leads y automatización de tareas de ventas.[botpress](https://botpress.com/es/blog/ai-sales-agent)
    
- **Salesforce Einstein:** Plataforma empresarial con análisis predictivo y agentes de IA para gestión integral de ventas.[botpress](https://botpress.com/es/blog/ai-sales-agent)
    

**Actividad Práctica:**

**Crear un asistente personalizado con RAG:**

- **Opción no-code:** Usar CustomGPT.ai o Botpress para crear un chatbot especializado alimentado con documentos empresariales.[customgpt+2](https://customgpt.ai/chatgpt-gpts-alternative/)
    
- **Opción técnica:** Implementar RAG usando n8n + LangChain para crear agentes que accedan a Google Drive sin programación.[n8n](https://community.n8n.io/t/no-code-rag-agents-you-have-to-check-out-n8n-langchain/54345)
    
- **Comparar resultados:** Evaluar precisión, fuentes citadas y capacidad de respuesta contextual.
    

**Analizar la estructura lógica de un flujo de trabajo multi-agente:**

- **CrewAI:** Definir roles específicos (investigador, escritor, revisor) y objetivos compartidos para un equipo de agentes.[botpress](https://botpress.com/es/blog/ai-agent-frameworks)
    
- **AutoGen Studio:** Crear prototipos visuales de sistemas multiagente con diferentes especialidades.[brightdata](https://brightdata.es/blog/ai/best-ai-agent-frameworks)
    
- **Caso práctico:** Diseñar un flujo donde un agente investigador recopila información, otro la analiza, y un tercero genera reportes ejecutivos.
    

Esta versión actualizada del módulo proporciona herramientas reales y comerciales que los participantes pueden usar inmediatamente, con opciones tanto para usuarios técnicos como no técnicos, y incluye actividades prácticas con plataformas que están disponibles en el mercado actual.[skimai+4](https://skimai.com/es/las-5-mejores-plataformas-para-crear-agentes-de-inteligencia-artificial/)

1. [https://www.elastic.co/es/what-is/retrieval-augmented-generation](https://www.elastic.co/es/what-is/retrieval-augmented-generation)
2. [https://customgpt.ai/chatgpt-gpts-alternative/](https://customgpt.ai/chatgpt-gpts-alternative/)
3. [https://customgpt.ai/customgpt-vs-botpress/](https://customgpt.ai/customgpt-vs-botpress/)
4. [https://skimai.com/es/las-5-mejores-plataformas-para-crear-agentes-de-inteligencia-artificial/](https://skimai.com/es/las-5-mejores-plataformas-para-crear-agentes-de-inteligencia-artificial/)
5. [https://learn.microsoft.com/es-es/azure/search/retrieval-augmented-generation-overview](https://learn.microsoft.com/es-es/azure/search/retrieval-augmented-generation-overview)
6. [https://botpress.com/es/blog/ai-sales-agent](https://botpress.com/es/blog/ai-sales-agent)
7. [https://www.edenai.co/post/best-custom-gpt-alternatives-in-2024](https://www.edenai.co/post/best-custom-gpt-alternatives-in-2024)
8. [https://desku.io/blogs/best-customgpt-alternatives/](https://desku.io/blogs/best-customgpt-alternatives/)
9. [https://botpress.com/es/blog/ai-agent-frameworks](https://botpress.com/es/blog/ai-agent-frameworks)
10. [https://brightdata.es/blog/ai/best-ai-agent-frameworks](https://brightdata.es/blog/ai/best-ai-agent-frameworks)
11. [https://community.n8n.io/t/no-code-rag-agents-you-have-to-check-out-n8n-langchain/54345](https://community.n8n.io/t/no-code-rag-agents-you-have-to-check-out-n8n-langchain/54345)
12. [https://blog.bismart.com/ranking-top-10-lo-mas-leido-tecnologia-datos](https://blog.bismart.com/ranking-top-10-lo-mas-leido-tecnologia-datos)
13. [https://latenode.com/es/blog/best-ai-agent-platforms-2025-which-tool-fits-your-business](https://latenode.com/es/blog/best-ai-agent-platforms-2025-which-tool-fits-your-business)
14. [https://datos.gob.es/es/blog/rag-retrieval-augmented-generation-la-llave-que-abre-la-puerta-de-la-precision-los-modelos-del](https://datos.gob.es/es/blog/rag-retrieval-augmented-generation-la-llave-que-abre-la-puerta-de-la-precision-los-modelos-del)
15. [https://salesgroup.ai/es/agentes-de-inteligencia-artificial-para-el-comercio-electronico/](https://salesgroup.ai/es/agentes-de-inteligencia-artificial-para-el-comercio-electronico/)
16. [https://www.intersystems.com/es/recursos/retrieval-augmented-generation-RAG/](https://www.intersystems.com/es/recursos/retrieval-augmented-generation-RAG/)
17. [https://www.gptbots.ai/es_ES/blog/enterprise-ai-agent](https://www.gptbots.ai/es_ES/blog/enterprise-ai-agent)
18. [https://www.reddit.com/r/OpenAI/comments/1kpfc4t/best_lowno_code_custom_gpt_alternative_for_white/](https://www.reddit.com/r/OpenAI/comments/1kpfc4t/best_lowno_code_custom_gpt_alternative_for_white/)
19. [https://www.expertise.ai/es/blog/ai-agent-examples](https://www.expertise.ai/es/blog/ai-agent-examples)
20. [https://coachvox.ai/alternative-to-openai-gpt-creator/](https://coachvox.ai/alternative-to-openai-gpt-creator/)
21. [https://blog.bismart.com/que-es-buscador-inteligente-rag](https://blog.bismart.com/que-es-buscador-inteligente-rag)
22. [https://clientify.com/agentes-ia](https://clientify.com/agentes-ia)
23. [https://www.linkedin.com/pulse/using-openais-projects-alternative-custom-gpts-jesper-andersen-faq4e](https://www.linkedin.com/pulse/using-openais-projects-alternative-custom-gpts-jesper-andersen-faq4e)
24. [https://slite.com/es/learn/rag-es](https://slite.com/es/learn/rag-es)
25. [https://www.g2.com/es/categories/ai-agents-for-business-operations/free](https://www.g2.com/es/categories/ai-agents-for-business-operations/free)
26. [https://python.langchain.com/docs/tutorials/rag/](https://python.langchain.com/docs/tutorials/rag/)
27. [https://ki-agenten-erstellen.de/en/blog/customgptai-vs-botpress-the-ultimate-comparison-2025](https://ki-agenten-erstellen.de/en/blog/customgptai-vs-botpress-the-ultimate-comparison-2025)
28. [https://www.lindy.ai/blog/langchain-alternatives](https://www.lindy.ai/blog/langchain-alternatives)
29. [https://www.revoyant.com/compare/customgpt-vs-botpress](https://www.revoyant.com/compare/customgpt-vs-botpress)
30. [https://www.langchain.com](https://www.langchain.com/)
31. [https://www.expertise.ai/es/blog/best-ai-agent-builders](https://www.expertise.ai/es/blog/best-ai-agent-builders)
32. [https://pollthepeople.app/botpress-alternative/](https://pollthepeople.app/botpress-alternative/)
33. [https://python.langchain.com/docs/integrations/tools/](https://python.langchain.com/docs/integrations/tools/)
34. [https://www.ibm.com/es-es/think/insights/top-ai-agent-frameworks](https://www.ibm.com/es-es/think/insights/top-ai-agent-frameworks)
35. [https://www.chatlab.com/comparator/chatlab-botpress/](https://www.chatlab.com/comparator/chatlab-botpress/)
36. [https://www.reddit.com/r/LangChain/comments/1gb496k/best_tutorial_or_tech_stack_for_a_production_rag/](https://www.reddit.com/r/LangChain/comments/1gb496k/best_tutorial_or_tech_stack_for_a_production_rag/)
37. [https://www.tendencias.kpmg.es/2025/07/agentes-ia-que-son-transformar-negocio/](https://www.tendencias.kpmg.es/2025/07/agentes-ia-que-son-transformar-negocio/)
38. [https://latenode.com/blog/langchain-rag-implementation-complete-tutorial-with-examples](https://latenode.com/blog/langchain-rag-implementation-complete-tutorial-with-examples)
39. [https://www.cognizant.com/es/es/engineering-ai-for-impact/ai-agents](https://www.cognizant.com/es/es/engineering-ai-for-impact/ai-agents)

**Módulo 3: Ingeniería de Prompts**
*   **Objetivo:** Aprender a diseñar instrucciones efectivas para la IA.
*   **Enfoque:** El prompt como una "directiva de investigación" que también sirve para clarificar el pensamiento humano.
*   **Actividad Práctica:** Taller iterativo para refinar prompts y resolver un problema complejo.


---

### **DÍA 2: APLICACIÓN, COLABORACIÓN Y RESPONSABILIDAD**

**Objetivo:** Aplicar lo aprendido en contextos reales con una perspectiva ética.

**Módulo 4: Ética y Gobernanza**
*   **Objetivo:** Desarrollar un marco para el uso responsable de la IA.
*   **Temas:** Sesgos en los datos, privacidad y gobernanza institucional.
*   **Actividad Práctica:** Analizar riesgos en un producto de IA y redactar directrices de uso responsable.

**Módulo 5: Aplicaciones Avanzadas**
*   **Objetivo:** Conectar la teoría con casos de estudio del mundo real.
*   **Actividad Práctica:** Diseñar un diagrama de flujo para integrar la IA en un proceso de trabajo propio.

**Módulo 6: Desarrollo de Proyectos**
*   **Objetivo:** Integrar todas las competencias en un proyecto colaborativo.
*   **Actividad Práctica:**
    *   Prototipar una solución de IA en equipos.
    *   Presentar el proyecto, destacando el rol de la IA y el juicio humano.
*   **Cierre:** Reflexión sobre el futuro y las nuevas posibilidades que abre la IA.

---

### **EVALUACIÓN Y SEGUIMIENTO**
*   **Resultado:** Cada participante termina con un "Lienzo de Proyecto" que documenta su trabajo.
*   **Comunidad:** Se crea un repositorio digital para fomentar una comunidad de práctica continua.



---
# Curso: IA – EG / TI?

## 1. El panorama actual

- De dónde venimos y por qué es diferente y relevante para nosotros.
    
- Los modelos más grandes (de occidente) tienen una versión para educación:
        
- La mayoría de los estudiantes ya los usa.
    

### Modelos

- Diferencias entre algoritmos y modelos.
- Cómo piensan los modelos
    
- La biblioteca (analogía).
    

---

## 2. Herramientas

- Crew AI
- una lista lo más amplia posible
    

---

## 3. Bases de conocimiento

---

## 4. Asesores

- Our agent → figurant reasons → specific networks.
    

---

## 5. Prompting / Text is Code

- Prompt recommendations
    
- Text as code _(Computational Poetry)_
    

---

## 6. Ethical Considerations

---

## 7. Teamwork

---

## 8. Advanced Examples

- Revisto
    
- upu
    
- Gobierno de Gto
    
- El propio paper de HA
    
- 2a Computev
    
- AI systems in the cloud
    
- Los SLM y Open Source
    
- Career local
    

---

## 9. Projects

- With them – _This should be the majority of the workshop._
    
- Collaborative AI projects
    

---

## 10. User Cases

- Basic
    
- Intermediate
    
- Advance
    
- Futuristic