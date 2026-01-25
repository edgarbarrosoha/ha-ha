# Stack Tecnológico HA

## Visión General

```
┌─────────────────────────────────────────────────────┐
│                   INTERFAZ                          │
│         Obsidian │ Chat │ Dashboards               │
└─────────────────────────┬───────────────────────────┘
                          │
┌─────────────────────────┴───────────────────────────┐
│                 ORQUESTACIÓN                        │
│            Agentes HA │ Workflows                  │
└─────────────────────────┬───────────────────────────┘
                          │
┌─────────────────────────┴───────────────────────────┐
│                    MODELOS                          │
│     Claude │ GPT │ Azure OpenAI │ Modelos locales  │
└─────────────────────────┬───────────────────────────┘
                          │
┌─────────────────────────┴───────────────────────────┐
│                     DATOS                           │
│        Grafos │ Vectores │ Documentos              │
└─────────────────────────────────────────────────────┘
```

## Stack Actual

### Interfaz y Productividad

| Herramienta | Uso | Status |
|-------------|-----|--------|
| **Obsidian** | Base de conocimiento, documentación | ✅ Activo |
| **GitHub** | Código, versionamiento | ✅ Activo |
| **Notion** | Gestión de proyectos (algunos) | ⚠️ Migrar |

### Modelos de IA

| Modelo | Uso | Notas |
|--------|-----|-------|
| **Claude (Anthropic)** | Razonamiento, narrativas, código | Principal |
| **GPT-4 (OpenAI)** | Alternativa, comparación | Secundario |
| **Azure OpenAI** | Clientes enterprise (privacidad) | Por proyecto |

### Desarrollo

| Herramienta | Uso |
|-------------|-----|
| **Python** | Scripts, procesamiento |
| **Node.js** | APIs, integraciones |
| **Mermaid** | Diagramas en documentos |

### Comunicación

| Herramienta | Uso |
|-------------|-----|
| **Slack/Discord** | Comunicación interna |
| **Zoom/Meet** | Videollamadas |
| **Email** | Comunicación formal |

## Stack por Cliente

### DOCET (Azure)
- Azure OpenAI (Copilot)
- Azure AI Studio
- Infraestructura privada

### xignux
- ERP/Compras existente
- PLM/CAD
- BI existente
- + Agentes HA

### tec-monterrey
- Infraestructura Tec
- + Lab híbrido

## Roadmap Tecnológico

### Q1 2025
- [ ] Estandarizar playbooks de agentes
- [ ] Implementar trazabilidad de decisiones
- [ ] Documentar arquitectura de referencia

### Q2 2025
- [ ] Plataforma SaaS v1 (si aplica)
- [ ] APIs de integración estándar
- [ ] Dashboard de métricas

## Principios de Selección

1. **Open source cuando sea posible** — Evitar lock-in
2. **Cloud-agnostic** — Funcionar en cualquier nube
3. **Privacidad del cliente** — Sus datos en su infra
4. **Simplicidad operativa** — Mínimo mantenimiento

## Conexiones

- [[04-technology]] — MOC de tecnología
- [[agentes-ha]] — Cómo configuramos agentes
- [[integraciones]] — Cómo conectamos sistemas

---

*Actualizado: Diciembre 2024*
