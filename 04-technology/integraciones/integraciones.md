# Integraciones HA

## Principios de Integración

1. **APIs primero** — Preferir integraciones programáticas
2. **Datos en origen** — No duplicar, conectar
3. **Tiempo real cuando importa** — Batch cuando no
4. **Trazabilidad** — Logs de toda sincronización

## Integraciones Activas

### Obsidian ↔ GitHub
**Tipo:** Sincronización
**Frecuencia:** Push manual / Automático con plugin
**Uso:** Versionamiento de documentación

```
Obsidian Vault ──▶ Git Plugin ──▶ GitHub Repo
                                      │
                                 Backup + Historial
```

---

### Claude ↔ Obsidian
**Tipo:** Asistencia en edición
**Frecuencia:** On-demand
**Uso:** Generación y edición de contenido

---

## Integraciones por Cliente

### DOCET

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   Knotion   │────▶│  Azure AI   │────▶│ Dashboard   │
│   (LMS)     │     │   Studio    │     │  Directivo  │
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │
       ▼                   ▼
┌─────────────┐     ┌─────────────┐
│   CRM       │     │   Agentes   │
│  Familias   │     │     HA      │
└─────────────┘     └─────────────┘
```

**Datos:**
- Calificaciones y asistencia (LMS)
- Comunicación con familias (CRM)
- Finanzas (ERP)

---

### xignux - Presupuestos

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│    ERP      │────▶│     KB      │────▶│  Agentes    │
│  (POs/BOM)  │     │  Finanzas   │     │Presupuestos │
└─────────────┘     └─────────────┘     └─────────────┘
       │                                       │
       ▼                                       ▼
┌─────────────┐                         ┌─────────────┐
│   Fuentes   │                         │  Versiones  │
│  Externas   │                         │   V0/V1/V2  │
│ (FX, índices)                         └─────────────┘
└─────────────┘
```

---

### xignux - Generadores

```
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│   CAD/PLM   │────▶│     KB      │────▶│  Agentes    │
│ (Parámetros)│     │ Ingeniería  │     │  Diseño     │
└─────────────┘     └─────────────┘     └─────────────┘
       │                   │                   │
       ▼                   ▼                   ▼
┌─────────────┐     ┌─────────────┐     ┌─────────────┐
│    CAE      │     │   LIMS/QA   │     │ Cumplimiento│
│  (Simul.)   │     │  (Pruebas)  │     │  Normativo  │
└─────────────┘     └─────────────┘     └─────────────┘
```

---

## APIs Estándar

### Para Clientes

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/query` | POST | Consulta a agentes |
| `/status` | GET | Estado del sistema |
| `/logs` | GET | Historial de decisiones |
| `/metrics` | GET | KPIs del proyecto |

### Formato de Respuesta

```json
{
  "query_id": "uuid",
  "timestamp": "ISO8601",
  "agent": "legado|comunidad|...",
  "response": "...",
  "confidence": 0.95,
  "sources": ["doc1", "doc2"],
  "next_steps": ["acción1", "acción2"]
}
```

## Seguridad

| Control | Implementación |
|---------|----------------|
| **Autenticación** | OAuth 2.0 / API Keys |
| **Autorización** | RBAC por proyecto |
| **Encriptación** | TLS 1.3 en tránsito |
| **Datos** | En infraestructura del cliente |
| **Logs** | Retención según política cliente |

## Conexiones

- [[04-technology]] — Integraciones son parte del stack
- [[stack-ha]] — Herramientas que se integran
- [[agentes-ha]] — Agentes consumen integraciones

---

*Documento técnico de referencia*
