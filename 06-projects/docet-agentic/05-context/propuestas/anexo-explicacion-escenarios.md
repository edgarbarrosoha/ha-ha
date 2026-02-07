---
type: anexo
created: 2026-01-01
modified: 2026-02-02
status: internal
client: Docet
related: propuesta-etapa2-v02.md
---
# Escenarios para la etapa 2: DOCET-AI en producción

**Documento interno de trabajo**

**Fecha:** Enero 2026 **Contexto:** Escuela K-9 con aproximadamente 1,000 alumnos **Elaborado por:** Horizons Architecture Systems

---

## Introducción

Este documento presenta tres escenarios posibles para la Etapa 2 del proyecto SIA-DOCET. La Etapa 1 (prototipo/demo) ya fue aprobada y está en desarrollo. Ahora, Poncho necesita entender mejor las opciones y costos para llevar el sistema a producción para toda la escuela K9 AI-First.

Queremos ser completamente transparentes sobre cómo se construyen estos costos. No hay "cajas negras" aquí: explicamos cada componente para que la decisión se tome con información completa.

---

## ¿Qué implica la etapa 2?

Pasar de un prototipo a un sistema en producción, esto implica:

### Lo que ya existe (Etapa 1 - Prototipo)

- Demostración funcional de los 6 agentes de IA para directivos
- Interfaz básica de conversación
- Datos acotados a los perfiles
- Entorno de pruebas (sandbox)

### La visión completa: escuela K9 AI-First

La producción no es solo "poner a funcionar el prototipo". La visión de una escuela AI-First implica dar servicio de IA a **toda la comunidad escolar**, en fases:

|Fase|Usuarios|Cantidad aprox.|Alcance|
|---|---|---|---|
|**Fase 2.1**|Directivos|~10-15 personas|Sistema estratégico: los 6 agentes dimensionales, toma de decisiones, KPIs|
|**Fase 2.2**|Maestros y administrativos|~50-80 personas|Agentes para planeación de clases, seguimiento de alumnos, gestión administrativa|
|**Fase 2.3**|Estudiantes|~1,000 alumnos|Agentes de apoyo al aprendizaje, tutores personalizados, asistentes de estudio|

**Importante:** Los costos en este documento se enfocan principalmente en la **Fase 2.1 (directivos)**, que es la continuación natural del prototipo. Las fases 2.2 y 2.3 requerirían cotizaciones adicionales una vez que la fase 2.1 esté funcionando.

### Lo que falta construir (Fase 2.1 - Directivos en producción)

- **Conexiones reales a datos:** Integrar con los sistemas actuales de Docet (calificaciones, asistencia, CRM de familias, finanzas, etc.)
- **Seguridad empresarial:** Autenticación, roles, encriptación, cumplimiento de privacidad de datos de menores
- **Infraestructura robusta:** Servidores con tolerancia a fallas, backups, monitoreo 24/7
- **Interfaz orientada a usabilidad:** UX/UI intuitiva y consistente para operación diaria por usuarios finales no técnicos, con baja curva de aprendizaje.
- **Entrenamiento de los agentes:** Ajuste fino con datos reales de Docet para que las respuestas sean precisas y útiles

### Visión de fases futuras (referencia, no cotizado aquí)

|Fase|Nuevos agentes/capacidades|Complejidad adicional|
|---|---|---|
|**2.2 Maestros**|Agentes para planeación curricular, seguimiento individualizado de alumnos, generación de reportes pedagógicos, asistente de calificaciones|Más usuarios (~50-80), más datos sensibles, integración con herramientas docentes|
|**2.3 Estudiantes**|Tutores personalizados por materia, asistentes de tareas, preparación para exámenes, detección de dificultades de aprendizaje|Escala masiva (~1,000 usuarios), controles parentales, privacidad de menores, consumo alto de tokens|

_Los costos de las fases 2.2 y 2.3 dependerán de los resultados de la fase 2.1 y se cotizarán por separado._

---

## Desglose de costos base

Antes de ver los escenarios, es importante entender cómo funcionan los costos. **La diferencia fundamental entre escenarios es si se construye desde cero o si se adapta algo que ya existe.**

### A. La analogía de la casa

Imaginemos que el sistema de IA es una **casa**.

### Escenario 1: Construir desde cero (propiedad intelectual propia)

En este escenario, Docet quiere ser dueño de la tecnología. Esto significa:

- **Comprar el terreno:** Definir la arquitectura desde cero
- **Contratar al arquitecto:** Diseñar todo específicamente para Docet
- **Construir la casa completa:** Desarrollo de todos los componentes
- **Quedarse con los planos:** Los diseños, el código, todo es de Docet
- **Hacerse cargo del mantenimiento:** Docet es responsable de que la casa siga funcionando

**El resultado:** Docet es dueño de la casa y de los planos. Puede modificarla, venderla, o construir más casas iguales sin pedir permiso a nadie. Pero también es responsable de mantenerla: si se rompe algo, Docet lo arregla; si hay que actualizar las instalaciones, Docet lo paga; si la tecnología evoluciona, Docet decide si se actualiza o se queda atrás.

**El costo:** Es el más alto, porque todo se hace desde cero, se paga por la propiedad de los planos (la IP), y además Docet asume la responsabilidad (y el costo) del mantenimiento futuro.

### Escenario 2 y 3: Adecuar una casa existente

En estos escenarios, **HA ya tiene casas construidas**. Tenemos una base tecnológica, una arquitectura construida, metodología para la creación de agentes. Lo que hacemos es:

- **Adaptar la casa a las necesidades de Docet:** Conectar sus datos, ajustar los agentes a sus procesos, personalizar la interfaz
- **Hacer las adecuaciones necesarias:** Docet es diferente, hay trabajo de adaptación
- **Entregar las llaves:** Docet puede usar la casa, pero no es dueño de los planos
- **HA se encarga del mantenimiento:** Como en cualquier casa en renta, el dueño (HA) mantiene la propiedad funcionando

**El resultado:** Docet tiene una casa funcional, adaptada a sus necesidades, pero los planos siguen siendo de HA. A cambio, HA se encarga de que todo siga funcionando: si algo se rompe, HA lo arregla; si la tecnología evoluciona, HA actualiza el sistema; si hay mejoras disponibles, Docet las recibe.

**El costo:** Es menor porque no se construye desde cero. Se paga por la adecuación inicial y subsecuentes, y después un costo mensual de soporte y mantenimiento (como la renta de una casa que incluye servicios de mantenimiento).

---

### B. ¿Qué significa esto en términos de inversión?

|Concepto|Escenario 1 (construir desde cero)|Escenarios 2 y 3 (adecuar)|
|---|---|---|
|**Arquitectura base**|Se diseña y construye todo|Ya existe, pero se necesita adaptar|
|**Agentes de IA**|Se desarrollan desde cero|Ya existen, se configuran y personalizan|
|**Integraciones**|Se construyen todas|Base existente, se adaptan a Docet|
|**Propiedad de los planos**|Docet es dueño|HA es dueño|
|**Inversión inicial**|Alta|Moderada|

---

### C. Costos de adecuación (aplica a escenarios 2 y 3)

Aunque HA ya tiene la base construida, adaptar el sistema a Docet requiere trabajo especializado, horas de desarrollo, y expertise en IA:

|Componente|¿Qué incluye?|Inversión estimada|
|---|---|---|
|**Conexión de datos**|Integrar los sistemas actuales de Docet (calificaciones, asistencia, CRM de familias, finanzas) en una nube, limpieza y estructuración de datos|$350,000 - $500,000 MXN|
|**Configuración de agentes**|Ajustar los 6 agentes a los procesos específicos de Docet, entrenarlos con sus datos, escribir y refinar prompts especializados, pruebas de calidad de respuestas|$500,000 - $750,000 MXN|
|**Personalización de interfaz**|Adaptar dashboards, reportes y flujos de trabajo a cómo opera Docet, diseño UX específico|$300,000 - $450,000 MXN|
|**Seguridad y cumplimiento**|Configurar roles, permisos, encriptación, cumplimiento de privacidad de menores, auditoría de seguridad|$250,000 - $400,000 MXN|
|**Pruebas y ajustes**|Validar que todo funcione con datos reales, pruebas de usuario, iteraciones según feedback|$200,000 - $300,000 MXN|
|**Capacitación**|Entrenamiento al equipo directivo, manuales de uso, videos tutoriales, acompañamiento inicial|$150,000 - $200,000 MXN|
|**Gestión de proyecto**|Coordinación, reuniones, comunicación, gestión de riesgos, control de calidad|$350,000 - $400,000 MXN|
|**Subtotal adecuación**||**$2,100,000 - $3,000,000 MXN**|

### ¿Por qué hay un rango?

|Factor|Rango bajo|Rango alto|
|---|---|---|
|**Datos de Docet**|Bien organizados, fáciles de conectar|Dispersos, requieren limpieza|
|**Sistemas actuales**|APIs disponibles, documentación clara|Sistemas legacy, requieren trabajo extra|
|**Requerimientos**|Claros desde el inicio|Evolucionan durante el proyecto|

---

### D. Costos de construcción desde cero (solo escenario 1)

Si Docet quiere ser dueño de todo, el trabajo es significativamente mayor. Se construye todo desde cero, con documentación exhaustiva para transferencia:

|Componente|¿Qué incluye?|Inversión estimada|
|---|---|---|
|**Arquitectura desde cero**|Diseñar toda la estructura del sistema específicamente para Docet, documentación técnica completa|$400,000 - $600,000 MXN|
|**Backend completo**|Servidores, APIs, autenticación, toda la infraestructura de código, seguridad empresarial|$600,000 - $900,000 MXN|
|**Desarrollo de agentes**|Construir los 6 agentes desde cero con toda la lógica, prompts, y entrenamiento|$800,000 - $1,200,000 MXN|
|**Integraciones custom**|Conectar con Azure, Copilot Studio, sistemas escolares, APIs personalizadas|$400,000 - $600,000 MXN|
|**Interfaz de usuario**|Diseño UX/UI completo, dashboards, aplicación web responsiva|$350,000 - $500,000 MXN|
|**Pruebas y calidad**|Testing exhaustivo, seguridad, rendimiento, pruebas de usuario|$250,000 - $400,000 MXN|
|**Documentación técnica**|Documentación completa para que otro equipo pueda mantenerlo y extenderlo|$300,000 - $400,000 MXN|
|**Capacitación y transferencia**|Entrenamiento intensivo, sesiones técnicas, acompañamiento en transición|$200,000 - $300,000 MXN|
|**Subtotal construcción**||**$3,300,000 - $4,900,000 MXN**|
|**Prima por cesión de IP**|Valor de transferir la propiedad intelectual completa|**$900,000 - $1,100,000 MXN**|
|**Total construcción + IP**||**$4,200,000 - $6,000,000 MXN**|

La **prima por cesión de IP** es el valor de que HA pierda el derecho de usar este código para otros clientes. Es como vender no solo la casa, sino también los planos para que nadie más pueda construir una igual. Este es un costo significativo porque HA invierte en conocimiento y metodología que no podrá reutilizar.

---

### E. Infraestructura en la nube (costo mensual recurrente)

El sistema vive en servidores de Microsoft Azure. Estos son costos de operación que alguien tiene que pagar todos los meses.

**Para una escuela de 1,000 alumnos con ~20-30 usuarios del sistema (directivos y coordinadores):**

|Componente|¿Qué es?|Costo mensual estimado|
|---|---|---|
|**Azure OpenAI / Copilot Studio**|El "cerebro" de IA que procesa las conversaciones. Se cobra por uso (tokens).|$4,000 - $12,000 MXN|
|**Servidores de aplicación**|Donde corre el sistema, disponible 24/7|$2,500 - $5,000 MXN|
|**Base de datos**|Donde se almacena toda la información|$1,500 - $3,500 MXN|
|**Almacenamiento y backups**|Archivos, respaldos automáticos|$800 - $1,500 MXN|
|**Monitoreo y seguridad**|Alertas, protección contra ataques|$1,200 - $2,500 MXN|
|**Total infraestructura**||**$10,000 - $24,500 MXN/mes**|

**Nota importante sobre los tokens de IA:** Este es el costo más variable. Depende de cuánto se use el sistema. Una conversación típica con el agente puede costar entre $1 y $5 MXN en tokens. Si el equipo directivo hace 50 consultas diarias, serían ~$3,000-7,500 MXN/mes solo en tokens. Uso más intensivo = más costo.

**Nuestra recomendación:** Que Docet pague la infraestructura directamente a Microsoft Azure. Esto da transparencia total: Docet ve exactamente cuánto consume y no hay intermediarios. HA puede ayudar a configurar y optimizar, pero la factura va directo a Docet.

---

### F. Soporte y mantenimiento (costo mensual recurrente)

Un sistema de IA no es como un software tradicional que "instalas y olvidas". Requiere atención continua:

- **Monitoreo:** Asegurar que todo funcione, detectar problemas antes de que afecten a usuarios
- **Actualizaciones:** Los modelos de IA evolucionan, hay que mantener el sistema al día
- **Ajustes:** Los agentes necesitan "afinación" conforme se usan (mejorar respuestas, corregir errores)
- **Soporte:** Resolver dudas y problemas del equipo de Docet

---

## Los tres escenarios

---

## Escenario 1: Desarrollo a la medida

### ¿Qué significa?

HA desarrolla el sistema completo y al final **transfiere todo a Docet**: código fuente, documentación técnica, arquitectura, todo. Docet se convierte en dueño absoluto de la tecnología. HA entrega y se desvincula (salvo que Docet quiera contratar soporte adicional).

Es como contratar a un arquitecto para que diseñe y construya tu casa. Al final, la casa es tuya y el arquitecto se va.

### ¿Para quién es este escenario?

- Organizaciones que quieren control total sobre su tecnología
- Quienes tienen (o planean tener) equipo técnico interno para mantener el sistema
- Quienes planean vender o licenciar la tecnología a terceros sin restricciones

### Inversión

### Costos únicos

Ver desglose completo en la sección D.

|Concepto|Inversión|Explicación|
|---|---|---|
|Construcción del sistema|$3,300,000 - $4,900,000 MXN|Todo desde cero: arquitectura, backend, agentes, integraciones, interfaz, pruebas, documentación|
|**Prima por cesión de IP**|$900,000 - $1,100,000 MXN|Valor de transferir la propiedad intelectual completa a Docet|
|**Total único**|**$4,200,000 - $6,000,000 MXN**|+ IVA|

### Costos mensuales (post-entrega)

|Concepto|Costo mensual|Notas|
|---|---|---|
|Infraestructura Azure|$10,000 - $25,000 MXN|Docet paga directo a Microsoft|
|Soporte HA (opcional)|$45,000 - $75,000 MXN|Solo si Docet quiere que HA siga involucrado|
|**O** Equipo técnico interno|$80,000 - $150,000 MXN|Si Docet contrata su propio desarrollador/administrador de IA|

**Costo total primer año (con soporte HA opcional):**

- Único: $4,200,000 - $6,000,000 MXN
- Mensual (12 meses): $660,000 - $1,200,000 MXN
- **Total año 1: $4,860,000 - $7,200,000 MXN + IVA**

### Ventajas y desventajas

|✅ Ventajas para Docet|❌ Desventajas para Docet|
|---|---|
|Propiedad total del código y la tecnología|Costo inicial significativamente más alto|
|Libertad absoluta para vender a otros colegios|Responsabilidad total de mantenerlo funcionando|
|No depende de HA a largo plazo|Necesita equipo técnico propio o contratar soporte|
|Control total sobre el roadmap futuro|Riesgo técnico: si algo falla, Docet debe resolverlo|
||Los modelos de IA evolucionan rápido; quedarse atrás es un riesgo real|

### Nuestra opinión honesta

Este escenario tiene sentido si Docet está seguro de que quiere construir capacidad técnica interna o tiene un plan claro para comercializar la tecnología a escala.

**El riesgo principal:** Los sistemas de IA requieren mantenimiento continuo. No es como un software tradicional. Los modelos cambian, las APIs se actualizan, surgen mejores prácticas. Sin un equipo que entienda profundamente el sistema, puede quedar obsoleto en 1-2 años.

---

## Escenario 2: Licenciamiento SaaS (software como servicio)

### ¿Qué significa?

HA desarrolla el sistema y **lo opera como un servicio**. Docet paga una licencia mensual por usarlo. HA se encarga de que funcione, de actualizarlo, de dar soporte, y de mantenerlo seguro.

Es como rentar un departamento amueblado con servicios incluidos: pagas mensualmente, y si algo se descompone, el dueño lo arregla.

### ¿Para quién es este escenario?

- Organizaciones que quieren enfocarse en su negocio, no en tecnología
- Quienes prefieren costos predecibles sobre inversiones grandes
- Quienes valoran tener soporte garantizado y actualizaciones continuas

### Inversión

### Costos únicos (adecuación inicial)

Como se describe en la sección C, la adecuación incluye conectar datos, configurar agentes, personalizar interfaz, seguridad, pruebas, capacitación, etc.

|Concepto|Inversión|Referencia|
|---|---|---|
|**Adecuación del sistema**|$2,100,000 - $3,000,000 MXN|Ver desglose en sección C|
|**Total único**|**$2,100,000 - $3,000,000 MXN**|+ IVA|

### Costos mensuales

|Concepto|Costo mensual|¿Qué incluye?|
|---|---|---|
|**Licencia SaaS**|$45,000 - $70,000 MXN|Sistema funcionando, soporte, actualizaciones, monitoreo|
|Infraestructura Azure|$10,000 - $25,000 MXN|Docet paga directo a Microsoft (transparencia)|
|**Total mensual**|**$55,000 - $95,000 MXN**||

### Opciones de licencia

|Nivel|Precio/mes|Incluye|
|---|---|---|
|**Esencial**|$45,000 MXN|Sistema completo, soporte en horario laboral (L-V 9-18), actualizaciones trimestrales, monitoreo básico|
|**Profesional**|$55,000 MXN|+ Soporte extendido (L-S 8-20), actualizaciones mensuales, reportes de uso, 4 horas de ajustes/mes|
|**Premium**|$70,000 MXN|+ Soporte prioritario, línea directa, 8 horas de desarrollo menor incluidas/mes, revisiones estratégicas trimestrales|

**Costo total primer año (licencia Profesional):**

- Único: $2,100,000 - $3,000,000 MXN
- Mensual (12 meses): $780,000 - $1,140,000 MXN (licencia + infra)
- **Total año 1: $2,880,000 - $4,140,000 MXN + IVA**

**Años siguientes:** Solo el costo mensual, aproximadamente $780,000 - $1,140,000 MXN/año

### ¿Qué pasa si Docet quiere cambios o nuevas funcionalidades?

|Tipo de cambio|Costo adicional|
|---|---|
|Ajuste menor (configuración, textos, reglas simples)|Incluido en licencia Profesional+|
|Feature pequeño (nuevo reporte, integración simple)|$25,000 - $60,000 MXN|
|Feature mediano (nuevo agente, dashboard complejo)|$60,000 - $150,000 MXN|
|Módulo nuevo completo|Cotización especial|

### Ventajas y desventajas

|✅ Ventajas para Docet|❌ Desventajas para Docet|
|---|---|
|Costo inicial más bajo|No es "dueño" de la tecnología|
|No necesita equipo técnico|Depende de HA a largo plazo|
|Sistema siempre actualizado|No puede vender a otros colegios|
|Soporte garantizado incluido|Costo mensual continuo|
|Riesgo técnico lo asume HA||
|Costos predecibles||

### Nuestra opinión honesta

Este es el modelo más común en la industria y el que mejor alinea incentivos: a HA le conviene que el sistema funcione bien porque de eso depende la relación.

**Para Docet tiene sentido si:** El objetivo principal es tener un sistema que funcione bien para su escuela, y la prioridad no es revender tecnología a otros.

**La limitante clara:** En este modelo, Docet no puede comercializar el sistema a otros colegios.

---

## Escenario 3: Partnership comercial

### ¿Qué significa?

Un modelo híbrido donde HA y Docet se vuelven **socios comerciales**. HA desarrolla y mantiene la tecnología. Docet obtiene **exclusividad para vender en el mercado educativo mexicano**. Cuando Docet vende a otros colegios, ambos ganan.

Es como una franquicia: Docet se convierte en el "master franquiciatario" de SIA-DOCET para educación en México. Puede vender con su marca ("DOCET AI"), pero el motor tecnológico lo provee y mantiene HA.

### ¿Para quién es este escenario?

- Quienes ven una oportunidad de negocio en tecnología educativa
- Quienes quieren "ser dueños" de un producto sin asumir el riesgo técnico
- Quienes tienen relaciones y conocimiento del sector educativo para vender

### Estructura del partnership

```
┌─────────────────────────────────────────────────────────────────┐
│                         DOCET                                   │
│  • Marca "DOCET AI"                                            │
│  • Exclusividad en educación K-12 México                       │
│  • Relaciones con colegios                                     │
│  • Ventas y servicio al cliente                                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Revenue Share
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    HORIZONS ARCHITECTURE                        │
│  • Propiedad del código fuente                                 │
│  • Desarrollo y mantenimiento                                  │
│  • Infraestructura y soporte técnico                          │
│  • Actualizaciones y mejoras                                   │
└─────────────────────────────────────────────────────────────────┘

```

### Inversión

### Costos únicos

|Concepto|Inversión|Explicación|
|---|---|---|
|**Adecuación del sistema**|$2,100,000 - $3,000,000 MXN|Ver desglose en sección C|
|Plataforma multi-tenant|$250,000 - $400,000 MXN|Arquitectura para que el sistema pueda servir a múltiples colegios de forma aislada|
|Marca blanca (white-label)|$150,000 - $200,000 MXN|Personalización visual completa para que se vea como "DOCET AI"|
|**Total único**|**$2,500,000 - $3,600,000 MXN**|+ IVA|

### Costos mensuales para Docet (su propia escuela)

|Concepto|Costo mensual|Notas|
|---|---|---|
|Licencia partner|$38,000 - $55,000 MXN|Tarifa reducida por ser partner|
|Infraestructura Azure (su escuela)|$10,000 - $25,000 MXN|Pago directo a Microsoft|
|**Total mensual Docet**|**$48,000 - $80,000 MXN**||

### Modelo económico cuando Docet vende a otros colegios

|Concepto|Cómo funciona|
|---|---|
|**Fee de implementación**|Docet cobra al colegio nuevo lo que considere justo. De ese fee, paga a HA $80,000 - $120,000 MXN (único por colegio) por configuración técnica.|
|**Licencia mensual**|Docet cobra al colegio la mensualidad que quiera. De esa mensualidad, paga a HA el **25%**.|
|**Infraestructura**|Cada colegio paga su propia infraestructura Azure (o Docet la incluye en su precio y la paga).|

**Ejemplo concreto:**

Docet vende a "Colegio Monterrey" con estos términos:

- Fee de implementación: $400,000 MXN
- Mensualidad: $55,000 MXN/mes

**Distribución:**

|Concepto|Docet recibe|HA recibe|
|---|---|---|
|Implementación|$280,000 - $320,000 MXN|$80,000 - $120,000 MXN|
|Mensualidad|$41,250 MXN (75%)|$13,750 MXN (25%)|

**Si Docet vende a 5 colegios en 2 años:**

|Métrica|Valor|
|---|---|
|Ingresos por implementación (Docet)|~$1,500,000 MXN|
|Ingresos mensuales (Docet, 5 colegios)|~$206,000 MXN/mes|
|Pagos a HA (mensual, 5 colegios)|~$69,000 MXN/mes|

### Condiciones del partnership

|Término|Detalle|
|---|---|
|**Exclusividad**|Docet tiene exclusividad para vender en educación K-12 en México|
|**Duración**|3 años iniciales, renovable|
|**Mínimo de actividad**|Docet debe cerrar al menos 2 colegios nuevos en los primeros 24 meses para mantener exclusividad|
|**Marca**|Docet puede usar "DOCET AI" o similar. Puede incluir "Powered by HA" o no, a su elección|
|**Otros mercados**|HA es libre de vender en otros países o en otros sectores (empresas, salud, etc.)|
|**Mejoras**|Las mejoras desarrolladas para cualquier colegio benefician a todos (el sistema mejora para todos)|

### Ventajas y desventajas

|✅ Ventajas para Docet|❌ Desventajas para Docet|
|---|---|
|Puede vender a otros colegios bajo su marca|Debe compartir ingresos con HA (25%)|
|Se siente "dueño" del producto comercialmente|Tiene compromiso de ventas mínimas|
|Costo mensual más bajo que SaaS puro|No tiene el código fuente|
|No asume riesgo técnico (HA mantiene todo)|Depende de HA para el desarrollo|
|Exclusividad en un mercado valioso||
|Potencial de construir un negocio de software||

|✅ Ventajas para HA|❌ Desventajas para HA|
|---|---|
|Entra al mercado educativo sin esfuerzo comercial|Ingresos dependen de que Docet venda|
|Escala de ingresos sin vender directamente|Comparte el éxito (solo recibe 25%)|
|Mantiene propiedad del código|Complejidad contractual y de relación|
|Relación de largo plazo con incentivos alineados||

### Nuestra opinión honesta

Este modelo es el más interesante si Docet realmente quiere construir un negocio de tecnología educativa. Combina lo mejor de ambos mundos: Docet puede "vender su tecnología" sin tener que construirla ni mantenerla, y HA escala sin necesidad de un equipo comercial en el sector educativo.

**El éxito depende de:** La capacidad y voluntad de Docet de vender activamente a otros colegios. Si Docet no vende, este modelo no tiene sentido y sería mejor el Escenario 2.

**La pregunta clave para Poncho:** ¿Está dispuesto a invertir tiempo y recursos en vender SIA-DOCET a otros colegios? Si la respuesta es sí, este modelo puede ser muy rentable para ambos. Si no, el Escenario 2 es más honesto.

---

## Tabla comparativa final

|Aspecto|Escenario 1: A la medida|Escenario 2: SaaS|Escenario 3: Partnership|
|---|---|---|---|
|**En una frase**|"Compras la tecnología"|"Rentas el servicio"|"Venden la tecnología (juntos)"|
|**Inversión inicial**|$4.2 - $6.0M MXN|$2.1 - $3.0M MXN|$2.5 - $3.6M MXN|
|**Costo mensual**|$55K - $100K MXN|$55K - $95K MXN|$48K - $80K MXN|
|**Costo total Año 1**|$4.9 - $7.2M MXN|$2.9 - $4.1M MXN|$3.1 - $4.6M MXN|
|**Costo Año 2+**|$660K - $1.2M MXN/año|$780K - $1.1M MXN/año|$576K - $960K MXN/año + ingresos|
|**¿Quién es dueño de la IP?**|Docet|HA|HA|
|**¿Puede vender a otros?**|✅ Sí, sin restricciones|❌ No|✅ Sí, con revenue share|
|**¿Quién mantiene el sistema?**|Docet (o contrata)|HA|HA|
|**Riesgo técnico**|Docet|HA|HA|
|**Soporte incluido**|No (opcional extra)|Sí|Sí|
|**Actualizaciones**|Responsabilidad de Docet|Incluidas|Incluidas|
|**Flexibilidad futura**|Total (es tuyo)|Limitada al contrato|Media (negociable)|
|**Alineación de incentivos**|Baja (relación termina)|Media (HA quiere retener)|Alta (ambos ganan si escala)|

---

## Recomendación de HA

Siendo completamente honestos sobre nuestros intereses y los de Docet:

### Una nota sobre cómo trabajamos

HA no es una fábrica de software. Somos una empresa de inteligencia aumentada que busca relaciones de largo plazo con clientes que comparten nuestra visión.

Preferimos los escenarios 2 y 3 no solo porque nos generan ingresos recurrentes, sino porque nos permiten invertir continuamente en mejorar el sistema. Cuando nuestra relación es de largo plazo, tenemos incentivos para que el sistema funcione cada vez mejor, para incorporar las últimas innovaciones en IA, y para responder rápido cuando algo no funciona.

En el escenario 1, la relación termina al entregar. No hay incentivo para seguir mejorando, y el conocimiento que acumulamos trabajando con Docet se pierde.

### Si la prioridad es tener el sistema para la escuela de Docet:

**Recomendamos Escenario 2 (SaaS)**.

Representa un ahorro de **$2M - $3M MXN** vs. el escenario 1, el sistema siempre estará actualizado, y Docet puede enfocarse en su misión educativa mientras HA se encarga de la tecnología.

### Si la prioridad es construir un negocio de tecnología educativa:

**Recomendamos Escenario 3 (Partnership)**.

Permite a Docet "tener su producto" comercialmente y generar ingresos vendiéndolo a otros colegios, sin asumir el riesgo técnico de mantenerlo. Si Docet vende activamente, este escenario puede convertirse en un centro de utilidades, no solo un centro de costos.

### Si la prioridad es control total y capacidad técnica interna:

**El Escenario 1 (A la medida)** tiene sentido, pero solo si Docet está dispuesto a invertir en un equipo técnico propio o a contratar soporte externo de forma permanente. Los sistemas de IA requieren atención continua; sin ella, el sistema puede quedar obsoleto rápidamente.

---

## Próximos pasos sugeridos

1. **Definir prioridades:** ¿Qué es más importante para Docet: usar el sistema o venderlo?
2. **Evaluar capacidad comercial:** Si el Escenario 3 es atractivo, ¿cuántos colegios cree Docet poder cerrar en 2 años?
3. **Reunión de clarificación:** Agendar una llamada para resolver dudas y ajustar números según el escenario elegido.

---

_Este documento es un borrador de trabajo para discusión interna. Los números son estimaciones basadas en proyectos similares y condiciones actuales del mercado. Los costos finales dependerán de los requerimientos específicos y la complejidad real de la implementación._

---

**Horizons Architecture Systems** Enero 2026

---

