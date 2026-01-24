https://www.mermaidchart.com/app/projects/50e0c433-65e4-42a2-838c-152a5b829630/diagrams/873ea6ee-fd9b-4b54-9998-2e015f78af9c/share/invite/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkb2N1bWVudElEIjoiODczZWE2ZWUtZmQ5Yi00YjU0LTk5OTgtMmUwMTVmNzhhZjljIiwiYWNjZXNzIjoiRWRpdCIsImlhdCI6MTc2NzcyNjI4N30.tpLIVBW-_kzMaSjWdyUDIkkSppVr8RkjuvFYhJwJcHw

```mermaid 
---
config:
  layout: dagre
---
flowchart LR
 subgraph FASE1["1. CO-DISEÑO PARTICIPATIVO CON HA"]
    direction TB
        D0["PRINCIPIO RECTOR<br>Las 6 dimensiones de HA guían<br>todas las actividades:<br>Legado, Comunidad, Aprendizaje,<br>Tecnología, Contexto, Proyectos"]
        D1["TALLERES DE CO-DISEÑO<br>2 talleres × 3 hrs × 40 personas<br><br>Taller 1: 32 personas de<br>sectores organizados<br>(público, privado, académico, social)<br><br>Taller 2: 20 ciudadanía +<br>20 sectores<br><br>6 mesas temáticas por dimensión"]
        D2["CONVERSACIONES CON AGENTE IA<br>WhatsApp/web × 15 min<br>2 semanas disponible<br><br>6 preguntas por dimensión:<br>legado, comunidad, aprendizaje,<br>tecnología, contexto, proyectos<br><br>Meta: 500+ conversaciones"]
        D3["ENCUESTA DE VALIDACIÓN<br>Digital × 5 min<br>3 semanas disponible<br><br>1 pregunta por dimensión +<br>pregunta abierta final +<br>datos demográficos<br><br>Meta: 2,000+ respuestas"]
        D4["MESAS DE FACTIBILIDAD<br>2 sesiones × 2 hrs<br><br>Mesa 1: Factibilidad Institucional<br>Jurídico, planeación, academia<br><br>Mesa 2: Factibilidad Técnica<br>TI, desarrollo, IA, UX, seguridad"]
        D5["SÍNTESIS POR DIMENSIÓN<br>Matriz de hallazgos que integra<br>las 4 actividades por cada<br>dimensión de HA<br><br>Modelo SIC-Q validado +<br>especificación técnica +<br>lista de riesgos"]
  end
 subgraph FASE2["2. DESCUBRIMIENTO"]
        DESC1["CANALES DIGITALES<br>WhatsApp, redes sociales,<br>sitio web, publicidad online"]
        DESC2["CANALES PRESENCIALES<br>Talleres comunitarios,<br>módulos en plazas, eventos"]
  end
 subgraph FASE3["3. PRIMER CONTACTO"]
        REG_TITLE["BIENVENIDA AL SIC-Q<br>El ciudadano es recibido por<br>el Agente SIC-Q, un asistente<br>de IA que lo guía en<br>toda su experiencia"]
        REG1["MODO EXPLORA<br>Sin crear cuenta.<br>Navega el mapa de ideas,<br>lee propuestas, conoce tendencias.<br>Interactúa con el Agente<br>en modo solo lectura."]
        REG2["MODO PARTICIPA<br>Registro verificado:<br>Email, celular, seudónimo,<br>CURP, código postal,<br>verificación INE o Llave MX"]
  end
 subgraph FASE3B["3B. INVITACIÓN"]
        SL_CTA["TRANSICIÓN NATURAL<br>Después de explorar, el Agente<br>SIC-Q pregunta:<br>¿Te gustaría que tu voz cuente?<br>Si acepta → pasa a registro"]
  end
 subgraph FASE4["4. ORIENTACIÓN"]
        ORI["AGENTE SIC-Q ORIENTA<br>Pregunta: ¿Cómo te gustaría<br>participar hoy?<br>Guía hacia la acción más<br>adecuada según su intención"]
        ORI1["PROPONER<br>Tiene una idea que quiere<br>compartir. El Agente le ayuda<br>a articularla y estructurarla"]
        ORI2["IMPULSAR<br>Quiere apoyar ideas existentes.<br>Explora propuestas y da<br>su voto de apoyo"]
        ORI3["TRANSFORMAR<br>Adopta una propuesta como<br>embajador. La promueve y<br>mide su impacto personal"]
        ORI4["CONVERSAR<br>Diálogo libre sobre Querétaro:<br>oportunidades de negocio,<br>carreras demandadas por municipio,<br>lo mejor de su colonia.<br>Conversaciones guardadas<br>en historial personal"]
  end
 subgraph FASE5["5. PARTICIPACIÓN ACTIVA"]
        PART1["FLUJO PROPONER<br>Diálogo guiado con el Agente.<br>Estructuración automática.<br>Verificación de duplicados.<br>Publicación de propuesta"]
        PART2["FLUJO IMPULSAR<br>Explorar mapa de ideas.<br>Filtrar por tema o ubicación.<br>Votar para apoyar.<br>Comentar opcionalmente"]
        PART3["FLUJO TRANSFORMAR<br>Adoptar propuesta como propia.<br>Recibir enlace de tracking.<br>Compartir en redes y WhatsApp.<br>Ver impacto: cuántos apoyos<br>llegaron gracias a ti"]
        PART4["FLUJO CONVERSAR<br>Vía web o WhatsApp.<br>Preguntar sobre Querétaro.<br>Recibir información contextual.<br>Guardar conversaciones.<br>Derivar a proponer/impulsar<br>cuando surja una idea"]
  end
 subgraph FASE6["6. BASES DE CONOCIMIENTO"]
        DB["DATOS DE PARTICIPACIÓN<br>Propuestas ciudadanas,<br>votos y comentarios,<br>clusters semánticos,<br>perfiles de usuarios,<br>historiales de conversación"]
        CON["CONOCIMIENTO CONTEXTUAL<br>Planes estatales y municipales,<br>encuestas previas, datos INEGI,<br>información sociodemográfica,<br>reportes históricos,<br>presupuestos públicos"]
  end
 subgraph FASE7["7. MOTOR DE INTELIGENCIA COLECTIVA"]
        SM["SENSEMAKING CON HORIZONS ARCHITECTURE<br><br>Procesamiento:<br>Clustering semántico de propuestas,<br>detección de consensos emergentes,<br>identificación de prioridades colectivas,<br>análisis de tendencias temporales,<br>síntesis de propuestas similares<br><br>Taxonomía Fractal - Tiempo × Complejidad:<br>Legado, Comunidad, Aprendizaje,<br>Tecnología, Contexto, Proyectos<br><br>Ontología agentiva +<br>coordinación temporal no lineal"]
  end
 subgraph FASE8["8. AGENTE SIC-Q INSTITUCIONAL"]
        SICQ["INTERFAZ DE INTELIGENCIA<br>PARA GOBIERNO<br><br>Agente conversacional con<br>niveles de acceso:<br><br>Gobernador: Visión estratégica<br>Secretarías: Análisis sectorial<br>Instituto del Futuro: Prospectiva<br>Consejos Ciudadanos: Por tema<br>Investigadores: Datos anónimos<br><br>Capacidades:<br>Generar reportes ejecutivos,<br>identificar propuestas prioritarias,<br>evaluar factibilidad vs planeación,<br>recomendar acciones específicas,<br>dar contexto para decisiones"]
  end
 subgraph FASE9["9. GOBIERNO Y CONSEJOS"]
        GOB1["SECRETARÍA DE PLANEACIÓN<br>Y PARTICIPACIÓN CIUDADANA<br>Recibe análisis del Agente SIC-Q.<br>Evalúa viabilidad técnica.<br>Asigna presupuesto.<br>Implementa propuestas.<br>Genera respuestas oficiales"]
        GOB2["INSTITUTO DEL FUTURO<br>Órgano autónomo que trasciende<br>administraciones.<br>Integra propuestas a planeación<br>de largo plazo.<br>Garantiza continuidad del sistema"]
        GOB3["CONSEJOS CIUDADANOS TEMÁTICOS<br>Propuestas canalizadas según tema:<br>Consejo de Movilidad,<br>Consejo de Medio Ambiente,<br>Consejo de Desarrollo Urbano,<br>Consejo de Seguridad,<br>Consejo de Economía y Empleo"]
  end
 subgraph FASE10["10. RETROALIMENTACIÓN"]
        FB["CIERRE DEL CICLO<br>El sistema notifica al ciudadano:<br><br>- En revisión técnica<br>- Canalizada a Consejo de tema<br>- Aprobada para implementación<br>- Requiere más apoyo ciudadano<br>- No viable con explicación<br>- Integrada a Plan Estatal 2030"]
  end
 subgraph FASE11["11. CICLO VIRTUOSO"]
        CICLO["CONFIANZA - PARTICIPACIÓN - INTELIGENCIA<br><br>El ciudadano que recibe respuesta<br>desarrolla confianza en el sistema.<br>La confianza genera más participación.<br>Más participación genera mejor<br>inteligencia colectiva.<br>El sistema se fortalece con cada ciclo.<br><br>Querétaro aprende de sí mismo"]
  end
    D0 --> D1 & D2 & D3 & D4
    D1 & D2 & D3 & D4 --> D5
    FASE1 --> FASE2
    DESC1 --> REG_TITLE
    DESC2 --> REG_TITLE
    REG_TITLE --> REG1 & REG2
    REG1 --> SL_CTA
    SL_CTA -. Acepta participar .-> REG2
    REG2 --> ORI
    ORI --> ORI1 & ORI2 & ORI3 & ORI4
    ORI1 --> PART1
    ORI2 --> PART2
    ORI3 --> PART3
    ORI4 --> PART4
    PART1 --> DB
    PART2 --> DB
    PART3 --> DB
    PART4 --> DB
    DB --> SM
    CON --> SM
    SM --> SICQ
    SICQ --> GOB1 & GOB2 & GOB3
    GOB1 <--> GOB2
    GOB2 <--> GOB3
    GOB1 --> FB
    GOB2 --> FB
    GOB3 --> FB
    FB --> CICLO
    CICLO -. Regresa a participar .-> REG_TITLE
```