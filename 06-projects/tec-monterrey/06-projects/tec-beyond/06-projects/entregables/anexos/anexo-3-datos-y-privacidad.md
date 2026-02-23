# Anexo 3: Estructura de datos y privacidad

**Para:** Jorge Blando, Víctor Gutiérrez, Mario Orozco
**De:** Edgar Barroso — Horizons Architecture
**Fecha:** Febrero 2026

---

## Propósito

Este documento responde a la pregunta central de confianza: **¿Dónde viven los datos, quién los controla, y cómo se protegen?**

Es un compromiso de diseño, no un spec técnico final. Los detalles de implementación se definirán en la sesión de descubrimiento, pero los principios y la arquitectura de datos son firmes.

---

## 1. Principio rector

**Los datos son del Tec. Siempre.**

Horizons Architecture construye y opera la plataforma. Pero no es dueña de la información que fluye por ella. Si en cualquier momento se decide cambiar de proveedor, los datos, los insights y la comunidad permanecen intactos.

---

## 2. Mapa de datos: qué se captura y dónde vive

### Datos de los miembros

| Tipo de dato               | Ejemplos                                           | Fuente                      | Sensibilidad |
| -------------------------- | -------------------------------------------------- | --------------------------- | ------------ |
| **Perfil profesional**     | Nombre, empresa, cargo, industria, ubicación       | Registro + LinkedIn público | Media        |
| **Perfil de intereses**    | Sectores de interés, necesidades, capacidades      | Encuestas + interacciones   | Media        |
| **Historial del programa** | Generación, sede, proyectos, células de innovación | Datos existentes Tec Beyond | Baja         |
| **Interacciones**          | Conversaciones con agentes, respuestas a contenido | Plataforma                  | Alta         |
| **Matches**                | Conexiones propuestas y aceptadas/rechazadas       | Agente Match                | Alta         |
| **Preferencias**           | Notificaciones, frecuencia, canales preferidos     | Configuración del miembro   | Baja         |

### Datos del sistema

| Tipo de dato | Qué contiene | Propiedad |
|--------------|-------------|-----------|
| **Base de conocimiento** | Embeddings vectoriales de todos los perfiles e interacciones | Tec Beyond |
| **Modelos entrenados** | Patrones de matching, clustering, detección | Tec Beyond (datos) + HA (algoritmos) |
| **Reportes e insights** | Análisis generados por el Agente Insights | Tec Beyond |
| **Logs de operación** | Registros técnicos de uso de la plataforma | Compartido (HA para operar, Tec para auditar) |

---

## 3. Arquitectura de almacenamiento

### Dónde viven los datos

```
┌─────────────────────────────────────────────────────┐
│                  INFRAESTRUCTURA TEC                 │
│                   (Microsoft Azure)                  │
│                                                     │
│   ┌───────────────────┐   ┌───────────────────────┐ │
│   │  BASE DE DATOS    │   │  BASE DE CONOCIMIENTO │ │
│   │  RELACIONAL       │   │  VECTORIAL            │ │
│   │                   │   │                       │ │
│   │  Perfiles         │   │  Embeddings           │ │
│   │  Membresías       │   │  Relaciones           │ │
│   │  Historial        │   │  semánticas           │ │
│   │  Configuración    │   │  Patrones             │ │
│   └───────────────────┘   └───────────────────────┘ │
│                                                     │
│   ┌───────────────────┐   ┌───────────────────────┐ │
│   │  ALMACENAMIENTO   │   │  LOGS Y AUDITORÍA     │ │
│   │  DE ARCHIVOS      │   │                       │ │
│   │                   │   │  Accesos              │ │
│   │  Documentos       │   │  Operaciones          │ │
│   │  Reportes         │   │  Cambios              │ │
│   │  Exportaciones    │   │  Eventos              │ │
│   └───────────────────┘   └───────────────────────┘ │
│                                                     │
└─────────────────────────────────────────────────────┘
                          │
                    Acceso seguro
                    (API autenticada)
                          │
                          ▼
            ┌─────────────────────────┐
            │   CAPA DE AGENTES IA    │
            │   (Horizons Arch.)      │
            │                         │
            │   Procesamiento         │
            │   Análisis              │
            │   Generación de valor   │
            │                         │
            │   NO almacena datos     │
            │   de miembros           │
            └─────────────────────────┘
```

### El punto clave

Los datos viven en infraestructura del Tec (Azure). La capa de agentes de IA accede a ellos mediante APIs autenticadas para procesarlos, pero **no almacena datos de miembros**. Si se desconecta a HA, los datos permanecen donde están.

---

## 4. Propiedad y derechos

| Componente                         | Propiedad             | Derechos de HA                          | Qué pasa si se termina el contrato                |
| ---------------------------------- | --------------------- | --------------------------------------- | ------------------------------------------------- |
| **Datos de miembros**              | Tec — 100%            | Lectura para operar; no retiene copias  | Se revoca acceso; datos intactos                  |
| **Insights y reportes**            | Tec Beyond — 100%     | Genera; no retiene después de entregar  | Reportes quedan en infraestructura Tec            |
| **Base de conocimiento vectorial** | Tec Beyond — 100%     | Construye y mantiene; no es propietario | Se entrega documentación técnica para migración   |
| **Plataforma y código**            | Horizons Architecture | Licencia de uso a Tec Beyond            | La licencia se termina; Tec Beyond conserva datos |
| **Algoritmos de agentes**          | Horizons Architecture | Propiedad intelectual de HA             | HA se lleva su código; los resultados quedan      |
| **Reglas de la comunidad**         | Consejo León          | HA las implementa; no las define        | Quedan documentadas para cualquier proveedor      |

### Compromiso de portabilidad

Si Tec Beyond decide migrar a otro proveedor:
- HA entrega todos los datos en formato estándar
- HA entrega documentación técnica de la base de conocimiento
- HA proporciona un periodo de transición (por definir en contrato)
- Los miembros no pierden nada — ni su perfil, ni su historial, ni sus conexiones

---

## 5. Privacidad y consentimiento

### Principios de privacidad

1. **Consentimiento informado.** Cada miembro sabe qué datos se capturan y para qué.
2. **Minimización.** Solo se capturan datos necesarios para el funcionamiento del sistema.
3. **Anonimización por diseño.** Los matches entre miembros son anonimizados — nadie ve datos de nadie sin consentimiento mutuo.
4. **Derecho de salida.** Cualquier miembro puede solicitar la eliminación de sus datos.
5. **Transparencia.** Los miembros pueden ver qué información tiene el sistema sobre ellos.

### Flujo de consentimiento

```
REGISTRO
   │
   ▼
Miembro acepta términos de uso
(qué datos se capturan, cómo se usan, quién los ve)
   │
   ▼
Miembro configura preferencias de privacidad
(nivel de visibilidad, contacto, notificaciones)
   │
   ▼
OPERACIÓN NORMAL
   │
   ├── Agente Match propone conexión → AMBOS deben aceptar
   ├── Agente Contenidos sugiere curso → solo el miembro lo ve
   ├── Agente Insights genera reporte → solo Consejo lo ve (datos agregados)
   └── Agente Scout detecta candidato → solo Consejo lo ve
   │
   ▼
EN CUALQUIER MOMENTO
   │
   ├── Miembro puede ver sus datos
   ├── Miembro puede modificar preferencias
   └── Miembro puede solicitar eliminación
```

### Matching anonimizado — cómo funciona la privacidad

El Agente Match es donde la privacidad es más crítica. Así funciona:

1. El agente analiza **todos** los perfiles (tiene acceso a la base de conocimiento)
2. Identifica una complementariedad entre Miembro A y Miembro B
3. A cada uno le envía: "Hay alguien en la red cuyo perfil complementa el tuyo en [área]. ¿Te interesa explorar la conexión?"
4. **Ninguno sabe quién es el otro** hasta que ambos dicen "sí"
5. Si ambos aceptan, el Consejo facilita la introducción
6. Si uno dice "no", no pasa nada — el otro nunca se entera

---

## 6. Seguridad

### Estándares propuestos

| Capa | Medida | Descripción |
|------|--------|-------------|
| **Acceso** | Autenticación multi-factor | Para administradores y operadores |
| **Transmisión** | Encriptación TLS 1.3 | Datos en tránsito siempre encriptados |
| **Almacenamiento** | Encriptación AES-256 | Datos en reposo encriptados |
| **APIs** | Tokens con rotación | Acceso a la base de conocimiento controlado |
| **Logs** | Registro completo | Toda operación queda registrada |
| **Backup** | Respaldo automático | Diario, con retención configurable |

### Roles de acceso al sistema

| Rol | Quién | Qué puede hacer |
|-----|-------|-----------------|
| **Super Admin** | Designado por Consejo + Tec | Configuración global, gestión de roles |
| **Admin Consejo** | Miembros del Consejo | Ver reportes, aprobar matches, gestionar reglas |
| **Admin Sede** | Coordinador local | Gestionar miembros locales, ver datos de su sede |
| **Operador HA** | Equipo Horizons Architecture | Mantenimiento técnico, no acceso a datos de negocio |
| **Miembro** | Empresario registrado | Su perfil, sus matches, su contenido |
| **Auditor** | Designado por Tec | Verificar cumplimiento de políticas |

---

## 7. Cumplimiento regulatorio

### Marco legal aplicable

| Regulación | Aplica | Cómo se cumple |
|------------|--------|----------------|
| **LFPDPPP** (Ley Federal de Protección de Datos Personales en Posesión de los Particulares) | Sí | Aviso de privacidad, consentimiento, derechos ARCO |
| **Políticas del Tec** | Sí | Alineación con estándares institucionales de datos |
| **GDPR** (por si hay miembros en Europa/operaciones internacionales) | Preventivo | Diseño compatible con GDPR desde el inicio |

### Derechos ARCO de los miembros

- **A**cceso: Ver todos sus datos en el sistema
- **R**ectificación: Corregir datos incorrectos
- **C**ancelación: Solicitar eliminación de datos
- **O**posición: Negar el uso de datos para ciertos fines

---

## 8. Auditoría y gobernanza de datos

### Revisiones periódicas

| Frecuencia | Qué se revisa | Quién revisa |
|------------|---------------|-------------|
| **Mensual** | Logs de acceso, operaciones de agentes, matches realizados | Admin Consejo |
| **Trimestral** | Cumplimiento de políticas de privacidad, satisfacción de miembros | Consejo + Tec |
| **Anual** | Auditoría completa de seguridad, revisión de estándares | Auditor designado |

### Proceso ante incidentes

```
DETECCIÓN de posible brecha
    │
    ▼
EVALUACIÓN de alcance (< 24 horas)
    │
    ▼
NOTIFICACIÓN a Consejo y Tec (inmediata)
    │
    ▼
CONTENCIÓN y remediación técnica
    │
    ▼
NOTIFICACIÓN a miembros afectados (si aplica, < 72 horas)
    │
    ▼
POST-MORTEM y mejora de controles
```

---

## 9. Resumen ejecutivo para Jorge Blando

| Pregunta | Respuesta |
|----------|-----------|
| ¿Dónde viven los datos? | En infraestructura del Tec (Azure) |
| ¿Quién es dueño? | Tec Beyond — 100% de los datos. HA solo de su código. |
| ¿HA puede llevarse datos? | No. Si se termina el contrato, datos quedan en el Tec. |
| ¿Los miembros están protegidos? | Sí: consentimiento, anonimización, derechos ARCO, auditoría. |
| ¿Cómo se audita? | Logs completos, revisiones mensuales/trimestrales/anuales. |
| ¿Qué estándares de seguridad? | Encriptación AES-256, TLS 1.3, MFA, backup automático. |
| ¿Cumple con la ley mexicana? | Sí: LFPDPPP, derechos ARCO, aviso de privacidad. |
| ¿Y si un miembro quiere salir? | Puede solicitar eliminación completa de sus datos. |

---

**Horizons Architecture Systems**
Edgar Barroso
edgar@horizonsarchitecture.ai

Febrero 2026
