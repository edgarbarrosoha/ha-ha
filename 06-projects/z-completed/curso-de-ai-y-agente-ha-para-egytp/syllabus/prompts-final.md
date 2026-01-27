# **Técnicas Avanzadas de Prompt Engineering: Fundamentos Técnicos**

## _Una aproximación desde la arquitectura de transformers y la teoría de la información_

---

## **1. CHAIN-OF-THOUGHT (CoT) PROMPTING**

### **Explicación Técnica**

El CoT explota la naturaleza autoregresiva de los transformers, donde cada token generado se convierte en contexto para el siguiente. Al forzar pasos intermedios, aumentamos la probabilidad de activar los "circuitos de razonamiento" en las capas de atención.

### **Por qué funciona - Analogía de la Biblioteca**

Imagina que le pides al bibliotecario (modelo) que encuentre un libro raro. Si solo dice "está en el tercer piso", puede equivocarse. Pero si lo obligas a decir "Primero voy a la sección de historia, luego al siglo XIX, después a historia latinoamericana, finalmente al estante de México", cada paso activa el conocimiento correcto en su memoria (attention heads).

### **Mecanismo en el Transformer**

```
Attention(Q,K,V) = softmax(QK^T/√d_k)V

Cuando generamos pasos intermedios:
- Cada paso genera nuevos Q (queries) más específicos
- Los K,V (keys, values) relevantes tienen scores más altos
- La distribución de atención se vuelve más peaked (menos entropía)
```

### **Ejemplo para Participantes del Tec**

```python
# CASO: Ana Pamela - Sistematización de datos desordenados

# SIN CoT (alta entropía en attention)
prompt_basico = "Organiza estos datos del departamento"

# CON CoT (baja entropía, attention focalizada)
prompt_cot = """
Analiza estos datos paso a paso:
1. Primero, identifica las columnas y su tipo de dato
2. Luego, detecta inconsistencias en formato (fechas, números)
3. Después, busca valores faltantes y su patrón
4. Ahora, propón una estructura normalizada
5. Finalmente, genera el código para transformar

Datos: [insertar aquí]
Muestra tu razonamiento en cada paso.
"""
```

---

## **2. FEW-SHOT LEARNING Y IN-CONTEXT LEARNING**

### **Explicación Técnica**

Los LLMs implementan "meta-learning" implícito. Durante el pre-training, el modelo aprende a reconocer patrones task-agnostic. Los ejemplos en el prompt activan representaciones latentes específicas en el espacio de embeddings de 12,288 dimensiones (GPT-4).

### **Analogía de la Biblioteca**

El bibliotecario tiene millones de fichas bibliográficas en su mente. Cuando le muestras 3 fichas con cierto formato, su cerebro activa automáticamente la "plantilla mental" correcta. No está aprendiendo algo nuevo, está encontrando el patrón correcto entre los miles que ya conoce.

### **Matemática del Proceso**

```
P(y|x, E) = ∑ P(y|z) * P(z|x, E)

Donde:
- E = ejemplos proporcionados
- z = representación latente activada
- x = nueva entrada
- y = salida deseada

Los ejemplos modifican P(z|x,E), aumentando la probabilidad
de activar la representación correcta.
```

### **Implementación para el Tec**

```python
# CASO: Marisol Vázquez - Síntesis de working papers

prompt_few_shot = """
Eres especialista en comunicación académica. Sintetiza papers para PR.

Ejemplo 1:
Paper: "Impact of AI on Higher Education in LATAM" (45 páginas)
Síntesis PR: "Investigadores del Tec demuestran que la IA puede 
reducir 30% la deserción estudiantil mediante tutorías personalizadas.
El estudio, que analizó 10,000 estudiantes, marca un hito en 
educación adaptativa latinoamericana."

Ejemplo 2:
Paper: "Sustainable Cities Framework" (62 páginas)
Síntesis PR: "Modelo del Tec para ciudades sostenibles reduce 40% 
emisiones urbanas. La investigación, aplicada en Monterrey, ofrece 
blueprint replicable para metrópolis latinoamericanas."

Ahora sintetiza:
Paper: [Insertar título y contenido]
"""
```

---

## **3. CONSTITUTIONAL AI Y SELF-CORRECTION**

### **Explicación Técnica**

Aprovecha la capacidad del modelo de evaluar su propia salida mediante un segundo paso de inferencia. Técnicamente, estamos usando el modelo como función de crítica sobre su propia distribución de probabilidades.

### **Analogía de la Biblioteca**

El bibliotecario escribe una respuesta, luego se convierte en su propio editor. Como tiene acceso a todos los libros sobre "criterios de calidad", puede evaluar su trabajo contra esos estándares y mejorarlo.

### **Proceso Computacional**

```
1. Generación inicial: y₁ = argmax P(y|x)
2. Evaluación: score = P(criteria_met|y₁, x)
3. Refinamiento: y₂ = argmax P(y|x, y₁, score)

El modelo usa sus propios attention heads para evaluar
coherencia, factualidad y alineación.
```

### **Aplicación Práctica**

```python
# CASO: Miguel Santos - Traducción y revisión académica

prompt_constitutional = """
Tarea: Traduce al inglés este abstract académico.

Paso 1 - Primera traducción:
[El modelo genera]

Paso 2 - Autoevaluación:
Revisa tu traducción verificando:
- ¿Mantiene rigor terminológico académico?
- ¿Preserva matices técnicos del español académico?
- ¿Sigue convenciones de journals Q1?
- ¿Fluye naturalmente para revisores angloparlantes?

Paso 3 - Versión mejorada:
[Incorpora las correcciones necesarias]

Abstract original: [insertar texto]
"""
```

---

## **4. ROLE PROMPTING Y PERSONA ACTIVATION**

### **Explicación Técnica**

Los modelos codifican "personas" como clusters en el espacio latente. Al especificar un rol, estamos haciendo un "prompt injection" que sesga la distribución de probabilidades hacia tokens asociados con ese cluster específico.

### **Analogía de la Biblioteca**

El bibliotecario tiene diferentes "sombreros mentales". Cuando le dices "actúa como historiador", activa una red específica de conexiones entre libros de historia, metodología histórica, y estilo de escritura académica histórica.

### **Representación Vectorial**

```
embedding("actúa como físico cuántico") ≈ 
    0.3 * v_ciencia + 
    0.3 * v_matemáticas + 
    0.2 * v_precision + 
    0.2 * v_abstracción

Esto modifica todos los logits subsecuentes:
logit_final = logit_base + λ * similarity(token, persona_embedding)
```

### **Caso de Uso Avanzado**

```python
# CASO: Noemi Herrera - Consideraciones éticas en IA

prompt_role = """
Eres un panel de 3 expertos evaluando el uso de IA en educación:

EXPERTO 1 - Ethicist (MIT AI Ethics Lab):
Foco: Sesgos algorítmicos, equidad, transparencia

EXPERTO 2 - Data Protection Officer (GDPR):
Foco: Privacidad, consentimiento, minimización de datos

EXPERTO 3 - Pedagogo Digital (UNESCO):
Foco: Impacto en aprendizaje, autonomía estudiante

Caso a evaluar: [Sistema de evaluación automatizada con IA]

Cada experto debe dar:
1. Preocupación principal (50 palabras)
2. Recomendación específica
3. Métrica de evaluación

Genera respuesta de cada experto por separado.
"""
```

---

## **5. PROMPT CHAINING Y DECOMPOSICIÓN**

### **Explicación Técnica**

Explota la limitación de context window y la degradación de atención en secuencias largas. Al descomponer, cada sub-tarea opera con attention scores óptimos y reduce la complejidad computacional O(n²) del self-attention.

### **Analogía de la Biblioteca**

En lugar de pedirle al bibliotecario que investigue "toda la historia de México", le pides primero "época prehispánica", guarda esas notas, luego "colonia", etc. Cada búsqueda es más precisa porque no está tratando de mantener todo en su memoria de trabajo.

### **Análisis de Complejidad**

```
Tarea compleja: O(n²) donde n = todos los tokens
Tarea descompuesta: k * O(m²) donde m = n/k

Si n = 4000 tokens, k = 4 subtareas:
Original: 16,000,000 operaciones
Descompuesto: 4 * 1,000,000 = 4,000,000 operaciones
Reducción: 75%
```

### **Pipeline para Investigación**

```python
# CASO: Edmundo Molina - Research pipeline complejo

# CHAIN de prompts especializados

prompt_1_literatura = """
Fase 1: LITERATURE REVIEW
Busca papers sobre [tema] en los últimos 5 años.
Output: Lista de 10 papers clave con DOI
"""

prompt_2_sintesis = """
Fase 2: SYNTHESIS
Dados estos papers: {output_1}
Identifica: 3 teorías principales, 5 métodos comunes, 3 gaps
Output: Matriz comparativa
"""

prompt_3_hipotesis = """
Fase 3: HYPOTHESIS GENERATION
Basado en gaps identificados: {output_2}
Genera: 3 hipótesis testables con variables operacionalizadas
Output: H1, H2, H3 con justificación teórica
"""

prompt_4_metodologia = """
Fase 4: METHODOLOGY DESIGN
Para testear: {output_3}
Diseña: Muestra, instrumentos, análisis estadístico
Output: Protocolo de investigación completo
"""
```

---

## **6. TEMPERATURE Y NUCLEUS SAMPLING CONTROL**

### **Explicación Técnica**

Temperature (τ) modifica la distribución softmax: P(x) = exp(logit/τ) / Σexp(logits/τ). Top-p (nucleus) sampling trunca la distribución acumulativa. Ambos controlan el trade-off entre exploitation y exploration en el espacio de tokens.

### **Analogía de la Biblioteca**

- **T=0**: El bibliotecario siempre elige el libro más probable (determinista)
- **T=0.7**: Considera los 5 libros más probables con cierta aleatoriedad
- **T=1.5**: Puede elegir libros poco probables, más creativo pero menos confiable
- **Top-p=0.9**: Solo considera libros hasta cubrir 90% de probabilidad

### **Configuración por Tarea**

```python
# CASO: Diferentes necesidades del Tec

# Cinthia Coca - Análisis preciso
config_analisis = {
    "temperature": 0.1,
    "top_p": 0.95,
    "prompt": "Analiza estos KPIs financieros con precisión..."
}

# Eva Ovando - Ideas creativas de campaña
config_creativo = {
    "temperature": 0.9,
    "top_p": 0.85,
    "prompt": "Genera 10 ideas innovadoras para campaña..."
}

# Fabián Carranza - Documentación técnica
config_documentacion = {
    "temperature": 0.3,
    "top_p": 1.0,
    "frequency_penalty": 0.5,  # Evita repetición
    "prompt": "Documenta este proceso paso a paso..."
}
```

---

## **7. RETRIEVAL-AUGMENTED GENERATION (RAG)**

### **Explicación Técnica**

RAG combina búsqueda vectorial en embedding space con generación. Mitiga alucinaciones al anclar la generación en documentos reales, reduciendo la dependencia de la memoria paramétrica del modelo.

### **Analogía de la Biblioteca**

En lugar de confiar solo en la memoria del bibliotecario, primero le das acceso a buscar en el catálogo actual, traer los libros relevantes a la mesa, y LUEGO responder consultando esas fuentes específicas.

### **Arquitectura del Sistema**

```python
# Pipeline RAG para el Tec

class TecRAGSystem:
    def __init__(self):
        self.embedder = "text-embedding-3-large"  # 3072 dims
        self.vectordb = "pinecone"  # o Weaviate
        self.llm = "gpt-4"
        
    def process_query(self, query, k=5):
        # 1. Embed query
        q_vector = embed(query)  # [1, 3072]
        
        # 2. Similarity search
        docs = self.vectordb.search(q_vector, top_k=k)
        # Cosine similarity: sim(a,b) = a·b / (||a||*||b||)
        
        # 3. Rerank con cross-encoder
        reranked = cross_encoder.rank(query, docs)
        
        # 4. Prompt aumentado
        prompt = f"""
        Contexto verificado:
        {reranked[:3]}
        
        Pregunta: {query}
        
        Responde SOLO con info del contexto.
        Si no está en el contexto, di "No encontrado en documentos".
        """
        
        return llm.generate(prompt, temperature=0.3)

# CASO: Pamela Bermea - Búsqueda de participantes
rag_prompt = """
Documentos encontrados sobre participantes potenciales:
[Automáticamente insertados por RAG]

Tarea: Identifica y prioriza contactos para el curso de {tema}
Criterios: Senioridad, presupuesto, urgencia de capacitación
Output: Lista rankeada con justificación
"""
```

---

## **8. CONSTRAINTED GENERATION Y GRAMMAR ENFORCEMENT**

### **Explicación Técnica**

Modifica la distribución de probabilidades en tiempo de inferencia mediante máscaras sobre el vocabulario, garantizando que solo tokens válidos según la gramática definida puedan ser seleccionados.

### **Implementación Profunda**

```python
# CASO: Mariana Guevar - Fórmulas Excel precisas

class ConstrainedExcelGenerator:
    def __init__(self):
        self.excel_grammar = CFG("""
            formula -> "=" function
            function -> SUM args | AVERAGE args | IF condition
            args -> "(" range ")"
            range -> cell ":" cell
            cell -> LETTER NUMBER
        """)
    
    def generate_next_token(self, context, logits):
        # Obtener tokens válidos según gramática
        valid_tokens = self.excel_grammar.get_valid_next(context)
        
        # Aplicar máscara
        mask = torch.ones_like(logits) * -float('inf')
        mask[valid_tokens] = 0
        
        # Logits modificados
        constrained_logits = logits + mask
        
        return softmax(constrained_logits / temperature)

# Prompt con constraints explícitos
prompt_constrained = """
Genera fórmula Excel para calcular ROI:
- DEBE empezar con =
- SOLO funciones: SUM, AVERAGE, (BENEFITS-COSTS)/COSTS*100
- Rangos: Solo A1:A100, B1:B100
- Output: Fórmula válida sin explicación

Datos: Costos en A1:A50, Beneficios en B1:B50
"""
```

---

## **MÉTRICAS DE EVALUACIÓN DE PROMPTS**

### **Framework Cuantitativo**

```python
def evaluate_prompt_quality(prompt, test_cases):
    metrics = {
        'perplejidad': calculate_perplexity(prompt),  # Lower = better
        'entropia': calculate_entropy(attention_weights),  # Lower = más focused
        'coherencia': embedding_similarity(chunks),  # Higher = better
        'especificidad': 1 / num_valid_completions,  # Higher = más

 constrainted
        'robustez': variance_across_runs,  # Lower = más consistente
    }
    
    return metrics

# Perplejidad: exp(H(p))
# Donde H(p) = -Σ p(x) log p(x)
```

---

## Connections
- [[HA PROJECTS]]
