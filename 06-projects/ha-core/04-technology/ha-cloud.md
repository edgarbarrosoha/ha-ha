
> **Recordatorio HA (base conceptual):** HA organiza _endeavours_ complejos con un **eje de Tiempo** (pasado/presente/futuro) y un **eje de Complejidad Simultánea** (seis dimensiones: Legacy, Community, Learning, Technology, Context, Projects) en estructura **fractal** con **agentes especializados** y **bucles de feedback**.

---

## 0) Principios de diseño (HA → Azure)

- **Invariantes de HA → Invariantes de plataforma:**
    
    - **Dimensiones (6)** = _dominios de gobierno_; **Tiempo** = _clasificación temporal de datos/artefactos y SLAs_.
        
    - **Fractal** = _jerarquía recursiva_ (mgmt groups → subscriptions → resource groups), con **plantillas repetibles** por dimensión/proyecto.
        
    - **Agentes** (generative ontology) = _microservicios/funciones/agents_ por dimensión más sub‑agentes especializados.
        
- **HA ≠ RAG**: la capa RAG puede existir, pero HA es **gobernanza + estructura + tiempo + multiagente + humanos‑en‑el‑loop**.
    

---

## 1) Aterrizaje y jerarquía (CAF Enterprise‑scale)

**Management Groups (MG) y Subscriptions** organizan la fractalidad:

```
Tenant (Microsoft Entra ID)
└── MG: org-root
    ├── MG: platform
    │   ├── Sub: connectivity (hub)
    │   ├── Sub: identity-secops
    │   └── Sub: shared-services
    └── MG: ha
        ├── MG: ha-legacy
        ├── MG: ha-community
        ├── MG: ha-learning
        ├── MG: ha-technology
        ├── MG: ha-context
        └── MG: ha-projects
            └── Sub: [proyectos X] (por célula fractal)
```

- **CAF / Landing Zones** para gobernanza a escala y separación **platform vs application**. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/?utm_source=chatgpt.com "What is an Azure landing zone? - Cloud Adoption Framework"))
    
- Cada **dimensión** tiene **policy packs** y **blueprints de IaC** (Bicep/Terraform) para replicación fractal de RGs por **sub‑proyecto**.
    

---

## 2) Identidad y modelo multi‑organización (fractal de usuarios)

- **Microsoft Entra ID**: PIM, grupos de acceso por dimensión; **Cross‑tenant access** para alianzas.
    
- **Azure Lighthouse**: delegación segura entre **tenants** (p. ej., consorcios) manteniendo trazabilidad y _least privilege_. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/lighthouse/concepts/architecture?utm_source=chatgpt.com "Azure Lighthouse architecture"))
    
- Mapeo **Community** (stakeholders/red) a **gráficos de identidades** y **roles** por dimensión y subproyecto.
    

---

## 3) **Policy‑as‑Code** (HA como _metodología de gobernanza_)

**Azure Policy** impone los invariantes de HA:

- **Etiquetas obligatorias** en _cualquier_ recurso:
    
    - `ha:dimension` ∈ {Legacy, Community, Learning, Technology, Context, Projects}
        
    - `ha:time_class` ∈ {Past, Present, Future}
        
    - `ha:node_id`, `ha:project_id`, `ha:owner`
        
- **Initiatives** por MG de dimensión (p. ej., _ha-technology‑baseline_):
    
    - _deny_ si falta `ha:dimension` o si no coincide con el MG.
        
    - _deny_ endpoints públicos para datos/LLMs; _enforce_ Private Link.
        
    - _audit/deny_ regiones no permitidas (residencia).
        
    - _deployIfNotExists_ para **diagnostics**, **MDC** y **Log Analytics**.
        
- **Catálogo** de políticas por dimensión (ej.):
    
    - _Technology_: cifrado con CMK/Managed HSM, _private endpoints_, inventario de modelos/artefactos.
        
    - _Context_: retención/linaje/catálogo con Purview.
        
    - _Projects_: gates de _release_ y _change windows_.
        

> Azure Policy es la base para **estándares organizacionales** y **evaluación de cumplimiento a escala**. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/governance/policy/?utm_source=chatgpt.com "Azure Policy documentation"))

---

## 4) Red y perímetro (Zero‑Trust por defecto)

- **Topología** Hub‑and‑Spoke con **Azure Firewall**, **vWAN** (si procede) y **Private DNS**.
    
- **Private Link/Private Endpoints** para Storage, SQL, Cosmos, Azure OpenAI, etc.; **bloqueo de IP públicas** en data/AI. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/private-link/private-endpoint-overview?utm_source=chatgpt.com "What is a private endpoint? - Azure Private Link"))
    

---

## 5) Data, Tiempo y Gobierno (Purview + Lakehouse / Fabric)

- **OneLake/Fabric** _o_ **ADLS Gen2 + Delta (Databricks/Synapse)** como **Lakehouse**.
    
- **Eje de Tiempo (PAST/PRESENT/FUTURE)** implementado por **particiones** / **SCD** / **feature stores** y por **metadatos** `ha:time_class` (clasificador inspirado en función _ftime_ de HA).
    
- **Purview** para **data map/linaje/clasificación** y políticas de **acceso por sensibilidad** (MIP). ([Microsoft Learn](https://learn.microsoft.com/en-us/purview/data-governance-overview?utm_source=chatgpt.com "Data governance with Microsoft Purview"))
    

**Estructura del Lake (ejemplo ADLS Gen2):**

```
/ha/<dimension>/<project>/<time_class>/{bronze|silver|gold}/<entity>/
```

**Streaming/Batch**

- Ingesta: **Event Hubs / Data Factory / Fabric Data Pipelines**.
    
- Procesado: **Spark/SQL** (Databricks/Synapse/Fabric).
    
- **Purview scans** y _lineage_ automáticos en cada pipeline. ([Microsoft Learn](https://learn.microsoft.com/en-us/purview/data-governance-overview?utm_source=chatgpt.com "Data governance with Microsoft Purview"))
    

---

## 6) Capa de **Agentes** (Generative Agentic Ontology) en Azure

**Patrón de agentes por dimensión** (núcleo + subagentes):

- **Contenedores/Funciones** por agente (Azure Container Apps / AKS / Azure Functions).
    
- **Orquestación** de _long‑running_ con **Durable Functions** o **Azure Container Apps Jobs**.
    
- **Mensajería**: **Event Grid** (eventos) + **Service Bus** (comandos/colas).
    
- **Modelos y herramientas**:
    
    - **Azure OpenAI** (en **Azure AI Foundry**) para _reasoning_, _tool‑use_, _retrieval_ y **agents**; _networking privado_ y _RAI filters_. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/overview?utm_source=chatgpt.com "What is Azure OpenAI in Azure AI Foundry Models?"))
        
    - **Azure ML / Prompt Flow / evals** para _promptops_, _fine‑tuning_ y _monitoring_.
        
    - **Vector DB** (Azure AI Search, Cosmos DB + vector) por dimensión si se requiere RAG (pero recordando que HA es más que RAG).
        
- **Ciclo de vida** de agentes (crear‑adaptar‑retirar) con **feedback humano** (gateways/aprobaciones) embebido en los flujos de trabajo.
    

---

## 7) **Proof of Contribution** y trazabilidad (auditoría inmutable)

- **SQL Ledger** (Azure SQL / SQL MI) para **tablas inmutables** (append‑only/updatable con historial) + **digest** externo. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-sql/database/ledger-landing?view=azuresql&utm_source=chatgpt.com "Ledger documentation - Azure SQL"))
    
- **Azure Confidential Ledger** para registros **inmutables** de alto valor entre organizaciones (consorcios). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/confidential-ledger/overview?utm_source=chatgpt.com "Microsoft Azure confidential ledger overview"))
    
- Se integra en la dimensión **Projects** (quién hizo qué/cuándo) y alimenta **Legacy** (valor acumulado).
    

---

## 8) Seguridad, Cumplimiento y Observabilidad

- **Defender for Cloud**, _CSPM/CNAPP_ y _Regulatory Compliance_; **Sentinel** (SIEM) y **Defender XDR**.
    
- **Key Vault / Managed HSM** para claves/firmas; **Entra Workload ID** para _federated credentials_.
    
- **Azure Monitor/Log Analytics** + _workbooks_ por dimensión y por _ha:project_id_; alertas por SLO/SLI.
    

---

## 9) Trabajo en fractal: cómo se replica HA en Azure

- **Nodo fractal = Subscription o RG** con **las 6 dimensiones** como **carpetas de datos**, **agents** y **políticas** que reutilizan el mismo _baseline_.
    
- **Subnodos** se crean con **pipelines de IaC** (Bicep/Terraform) que instalan: RGs, Roles, Policies, DCR/Diagnostics, Storage/Key Vault, colas/tópicos y _runtimes_ de agentes para esa célula.
    

---

## 10) Ejemplo de **Policy Initiative** (fragmento conceptual)

> **Objetivo**: hacer cumplir **dimensión** y **clase temporal**; forzar **Private Endpoints** en datos y LLMs.

```json
{
  "name": "ha-governance-baseline",
  "properties": {
    "displayName": "HA Governance Baseline",
    "policyDefinitions": [
      {
        "policyDefinitionReferenceId": "require-ha-dimension",
        "policyDefinitionId": "/providers/Microsoft.Authorization/policyDefinitions/<requireTag>",
        "parameters": { "tagName": { "value": "ha:dimension" } }
      },
      {
        "policyDefinitionReferenceId": "enforce-time-class",
        "policyDefinitionId": "/providers/Microsoft.Authorization/policyDefinitions/<allowedValues>",
        "parameters": {
          "tagName": { "value": "ha:time_class" },
          "listOfAllowedTagValues": { "value": [ "Past", "Present", "Future" ] }
        }
      },
      {
        "policyDefinitionReferenceId": "deny-public-endpoints",
        "policyDefinitionId": "/providers/Microsoft.Authorization/policyDefinitions/<denyPublicNetworkAccess>"
      }
    ]
  }
}
```

> **Azure Policy** soporta _deny/audit/deployIfNotExists/remediate_ y evaluación continua de cumplimiento. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/governance/policy/?utm_source=chatgpt.com "Azure Policy documentation"))

---

## 11) Flujo operativo de **No‑Linear Temporal Coordination** (NLTC)

1. **Past**: histórico consolidado (bronze/silver) + _lessons learned_ en **Learning**.
    
2. **Present**: _dashboards/alertas_ por dimensión; _agent loops_ que proponen acciones.
    
3. **Future**: _what‑ifs/scenarios_ con agentes de **Legacy/Context/Technology**; outputs vuelven a **Projects**.
    
4. Bucle **feedback** humano‑máquina (aprobaciones, escalado, _post mortems_).  
    Este mecanismo conecta decisiones del presente con trayectorias a futuro sobre un sustrato histórico **no lineal**.
    

---

## 12) Red de **colaboración multi‑entidad** (consorcios/gobierno)

- **Lighthouse** + **ACL/SQL Ledger** = colaboración con **verificación de contribución** y **separación de responsabilidades**. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/lighthouse/concepts/architecture?utm_source=chatgpt.com "Azure Lighthouse architecture"))
    
- **Compartición de datos** por _shortcuts_ (Fabric/OneLake) o **cross‑tenant ADLS** con _managed identities_; linaje con **Purview**. ([Microsoft Learn](https://learn.microsoft.com/en-us/purview/data-governance-overview?utm_source=chatgpt.com "Data governance with Microsoft Purview"))
    

---

## 13) Roadmap de implantación (MVI → escala)

**Fase 0–30 días (MVI de HA):** _foundations_

- CAF **landing zone**, MGs de dimensiones, _baseline_ de **Policy** + etiquetas HA.
    
- **Purview** (mínimo: data map) y **Monitor** base.
    
- Primer **agente** (p. ej., _Projects‑Agent_) en **Container Apps** con Azure OpenAI privado. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/?utm_source=chatgpt.com "What is an Azure landing zone? - Cloud Adoption Framework"))
    

**30–90 días (fractal inicial):**

- 1–2 **subnodos** (proyectos) vía IaC; ingestion pipelines (Event Hubs/Data Factory).
    
- **SQL Ledger** para _proof of contribution_ en Projects; **Private Endpoints** generalizados. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-sql/database/ledger-landing?view=azuresql&utm_source=chatgpt.com "Ledger documentation - Azure SQL"))
    

**90–180 días (escala multi‑organización):**

- **Lighthouse** para terceros/partners; **Confidential Ledger** para casos inter‑org críticos.
    
- Más **agentes** por dimensión (Context‑Agent, Learning‑Agent, Technology‑Agent) + _evaluación y monitoreo de prompts/modelos_. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/lighthouse/concepts/architecture?utm_source=chatgpt.com "Azure Lighthouse architecture"))
    

---

## 14) Decisiones clave (guía rápida)

- **Fabric vs. ADLS+Databricks/Synapse**: Fabric simplifica (OneLake/SAAS); ADLS+DBX da control fino; ambos son válidos con **Purview** arriba. ([Microsoft Learn](https://learn.microsoft.com/en-us/purview/data-governance-overview?utm_source=chatgpt.com "Data governance with Microsoft Purview"))
    
- **Container Apps vs. AKS**: empieza con _Container Apps_ (menos fricción); AKS para _throughput_/GPU/escenarios complejos.
    
- **OpenAI**: **Azure OpenAI en AI Foundry** con **red privada**, _RAI filters_ y _agents_ integrables. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/overview?utm_source=chatgpt.com "What is Azure OpenAI in Azure AI Foundry Models?"))
    
- **Ledger**: **SQL Ledger** (inmutable verificable) vs **Confidential Ledger** (enclave/ledger administrado) según requerimientos de auditoría. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-sql/database/ledger-landing?view=azuresql&utm_source=chatgpt.com "Ledger documentation - Azure SQL"))
    

---

## 15) Cómo esta arquitectura materializa HA

- **Eje de complejidad** → **Dimensiones como dominios de gobierno** con _policy baselines_, _data domains_ y **agentes expertos**.
    
- **Eje de tiempo** → **particiones/etiquetas** y NLTC para **past/present/future** operables.
    
- **Fractal** → **plantillas IaC** repetibles en MG/Subscription/RG para subproyectos; **delegación** con Lighthouse para redes multi‑actor. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/lighthouse/concepts/architecture?utm_source=chatgpt.com "Azure Lighthouse architecture"))
    
- **Feedback** humano‑máquina** y **pruebas de contribución** integradas en **Projects** y **Legacy**.
    

---

### Siguiente paso sugerido (muy técnico)

1. Crear **repo IaC** con módulos:
    
    - `mg-dimension/`, `policy-initiative-ha/`, `network-hub/`, `observability/`, `purview/`, `data-landing/`, `agent-runtime/`.
        
2. Desplegar **Enterprise‑scale foundation** + **MG ha‑***; asignar _initiative_ `ha-governance-baseline` a cada MG de dimensión. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/enterprise-scale/implementation?utm_source=chatgpt.com "Cloud Adoption Framework enterprise-scale landing zones ..."))
    
3. Instalar **Purview** + _scan rulesets_; crear **Event Hubs** + **Data Factory**; habilitar **Private Endpoints** obligatorios. ([Microsoft Learn](https://learn.microsoft.com/en-us/purview/data-governance-overview?utm_source=chatgpt.com "Data governance with Microsoft Purview"))
    
4. Publicar primer **agent runtime** con **Container Apps** y **Azure OpenAI** (VNet‑integrado); activar **SQL Ledger** para _proof of contribution_. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/overview?utm_source=chatgpt.com "What is Azure OpenAI in Azure AI Foundry Models?"))
    

---

Si quieres, puedo **bajar esto a Bicep/Terraform concretos** (módulos y _policy definitions_), o preparar un **playbook de 90 días** con _pipelines_ de GitHub/Azure DevOps y _workbooks_ de observabilidad por dimensión.


---

## 0) Mapeo HA → Azure (resumen operativo)

- **Fractalidad HA** → **Árbol de Management Groups (MG)**:  
    `mg-ha-root` con 6 MG hijos: `mg-ha-legacy`, `mg-ha-community`, `mg-ha-learning`, `mg-ha-technology`, `mg-ha-context`, `mg-ha-projects`. Bajo cada MG, puedes anidar MG/RGs por “subproyectos fractales” (p.ej., `mg-ha-projects/proj-<id>`).
    
- **Clasificación Tiempo (Past/Present/Future) + Dimensión** → **Etiquetas de gobierno** obligatorias en **TODO** recurso:  
    `ha.dimension ∈ {Legacy,Community,Learning,Technology,Context,Projects}`; `ha.time ∈ {Past,Present,Future}`; `ha.projectId` (fractal node). Azure Policy **Deny** si faltan/son inválidas.
    
- **Guardrails por dimensión** (ejemplos):
    
    - _Technology_: diagnóstico centralizado (DeployIfNotExists de Diagnostic Settings), bloquear `allowBlobPublicAccess` en Storage.
        
    - _Projects_: convención de nombres de RG `ha-<dim>-<proj>-<env>-rg`.
        
    - _Context_: ubicación/regiones permitidas.
        
    - _Learning_: auditoría de logs de actividad para “lecciones aprendidas”.
        
    - _Community_: restricciones de identidades/roles, tagging de owner/stakeholder.
        
    - _Legacy_: telemetría de objetivos/KPIs (vía etiquetas o Data Collection Rules).  
        (Los ejemplos se apoyan en la noción de **agentes/ontología generativa por dimensión** y bucles de feedback).
        
- **RBAC**: roles personalizados “**HA.DimensionOwner**” y “**HA.ProjectLead**” asignables por MG.
    

---

## 1) Estructura de carpetas sugerida

```
infra/
  bicep/
    main.bicep
    modules/
      mg-ha-tree.bicep
      policies/
        require-ha-tags.bicep
        rg-naming-standard.bicep
        storage-no-public-blob.bicep
        diag-to-law.bicep
        initiative-ha-foundational.bicep
      rbac/
        roles.bicep
      project/
        project-baseline.bicep
  terraform/
    main.tf
    variables.tf
    providers.tf
    modules/
      mg/
        main.tf
      policy/
        require_ha_tags/
          main.tf
        rg_naming/
          main.tf
        storage_no_public_blob/
          main.tf
        diag_to_law/
          main.tf
        initiative_ha_foundational/
          main.tf
      rbac/
        roles/
          main.tf
      project/
        baseline/
          main.tf
```

---

## 2) **Bicep** — Módulos y políticas

### 2.1 Árbol de Management Groups (fractal base)

**`modules/mg-ha-tree.bicep`**

```bicep
targetScope = 'tenant'

@description('ID del MG raíz existente o deseado (sin /providers/...)')
param rootMgId string
@description('Prefijo para MG hijos (ej. "mg-ha")')
param prefix string = 'mg-ha'

resource mgRoot 'Microsoft.Management/managementGroups@2021-04-01' = {
  name: rootMgId
  properties: {
    displayName: 'HA Root'
  }
}

var dims = [
  'legacy'
  'community'
  'learning'
  'technology'
  'context'
  'projects'
]

resource mgDims 'Microsoft.Management/managementGroups@2021-04-01' = [for d in dims: {
  name: '${prefix}-${d}'
  properties: {
    displayName: 'HA ${toUpper(d)}'
    details: {
      parent: {
        id: '/providers/Microsoft.Management/managementGroups/${mgRoot.name}'
      }
    }
  }
}]
```

### 2.2 Policy: **Requerir etiquetas HA** (dimensión/tiempo/proyecto)

**`modules/policies/require-ha-tags.bicep`**

```bicep
targetScope = 'managementGroup'

@description('Prefijo de política')
param prefix string = 'ha'
@description('Dimensiones permitidas')
param allowedDimensions array = [
  'Legacy'
  'Community'
  'Learning'
  'Technology'
  'Context'
  'Projects'
]
@description('Valores de tiempo permitidos')
param allowedTime array = [
  'Past'
  'Present'
  'Future'
]

resource defRequireTags 'Microsoft.Authorization/policyDefinitions@2021-06-01' = {
  name: '${prefix}-require-ha-tags'
  properties: {
    displayName: 'HA: Require core tags (dimension/time/projectId)'
    mode: 'Indexed'
    metadata: {
      category: 'HorizonsArchitecture'
    }
    parameters: {
      allowedDimensions: {
        type: 'Array'
        defaultValue: allowedDimensions
      }
      allowedTime: {
        type: 'Array'
        defaultValue: allowedTime
      }
    }
    policyRule: {
      'if': {
        'anyOf': [
          { 'field': "tags['ha.dimension']", 'exists': false },
          { 'field': "tags['ha.time']", 'exists': false },
          { 'field': "tags['ha.projectId']", 'exists': false },
          {
            'allOf': [
              { 'field': "tags['ha.dimension']", 'notIn': "[parameters('allowedDimensions')]" }
            ]
          },
          {
            'allOf': [
              { 'field': "tags['ha.time']", 'notIn': "[parameters('allowedTime')]" }
            ]
          }
        ]
      }
      'then': { 'effect': 'Deny' }
    }
  }
}

resource assignRequireTags 'Microsoft.Authorization/policyAssignments@2022-06-01' = {
  name: '${prefix}-assign-require-ha-tags'
  properties: {
    displayName: 'Assign: HA Require core tags'
    policyDefinitionId: defRequireTags.id
    enforcementMode: 'Default'
  }
}
```

> **Por qué**: fuerza la _partición por dimensión + clasificación temporal_ (invariante HA) y enlaza cada recurso a un nodo fractal (`ha.projectId`).

### 2.3 Policy: **Naming estándar RG** (simple “like”)

**`modules/policies/rg-naming-standard.bicep`**

```bicep
targetScope = 'managementGroup'

param prefix string = 'ha'
@description('Patrón simple para RG (comodines). Ej: ha-*-rg')
param rgNamePattern string = 'ha-*-rg'

resource defRgName 'Microsoft.Authorization/policyDefinitions@2021-06-01' = {
  name: '${prefix}-rg-naming-like'
  properties: {
    displayName: 'HA: Resource Group naming standard'
    mode: 'All'
    metadata: { category: 'HorizonsArchitecture' }
    policyRule: {
      'if': {
        'allOf': [
          { 'field': 'type', 'equals': 'Microsoft.Resources/subscriptions/resourceGroups' },
          { 'field': 'name', 'notLike': rgNamePattern }
        ]
      }
      'then': { 'effect': 'Deny' }
    }
  }
}

resource assignRgName 'Microsoft.Authorization/policyAssignments@2022-06-01' = {
  name: '${prefix}-assign-rg-naming'
  properties: {
    displayName: 'Assign: HA RG naming'
    policyDefinitionId: defRgName.id
  }
}
```

### 2.4 Policy: **Storage sin acceso público a blobs** (Technology)

**`modules/policies/storage-no-public-blob.bicep`**

```bicep
targetScope = 'managementGroup'

param prefix string = 'ha'

resource defNoPublicBlob 'Microsoft.Authorization/policyDefinitions@2021-06-01' = {
  name: '${prefix}-storage-no-public-blob'
  properties: {
    displayName: 'HA (Technology): Deny public blob access'
    mode: 'Indexed'
    metadata: { category: 'HorizonsArchitecture' }
    policyRule: {
      'if': {
        'allOf': [
          { 'field': 'type', 'equals': 'Microsoft.Storage/storageAccounts' },
          { 'field': 'Microsoft.Storage/storageAccounts/allowBlobPublicAccess', 'notEquals': false }
        ]
      }
      'then': { 'effect': 'Deny' }
    }
  }
}

resource assignNoPublicBlob 'Microsoft.Authorization/policyAssignments@2022-06-01' = {
  name: '${prefix}-assign-storage-no-public-blob'
  properties: {
    policyDefinitionId: defNoPublicBlob.id
    displayName: 'Assign: Deny public blob access'
  }
}
```

### 2.5 Policy (DeployIfNotExists): **Diag a Log Analytics** (Technology/Learning)

**`modules/policies/diag-to-law.bicep`**

```bicep
targetScope = 'managementGroup'

param prefix string = 'ha'
@description('Resource types a monitorear (ej. Microsoft.Storage/storageAccounts)')
param resourceType string = 'Microsoft.Storage/storageAccounts'
@description('ID del Workspace de Log Analytics destino')
param logAnalyticsResourceId string

resource defDiag 'Microsoft.Authorization/policyDefinitions@2021-06-01' = {
  name: '${prefix}-deploy-diag-${uniqueString(resourceType)}'
  properties: {
    displayName: 'HA: Deploy Diagnostic Settings to Log Analytics'
    mode: 'Indexed'
    metadata: { category: 'HorizonsArchitecture' }
    policyRule: {
      'if': {
        'field': 'type',
        'equals': resourceType
      }
      'then': {
        'effect': 'DeployIfNotExists'
        'details': {
          'type': 'Microsoft.Insights/diagnosticSettings'
          'roleDefinitionIds': [
            '/providers/Microsoft.Authorization/roleDefinitions/749f88d5-cbae-40b8-bcfc-e573ddc772fa' // Monitoring Contributor
          ]
          'existenceCondition': {
            'field': 'Microsoft.Insights/diagnosticSettings/workspaceId',
            'equals': logAnalyticsResourceId
          }
          'deployment': {
            'properties': {
              'mode': 'incremental'
              'template': {
                '$schema': 'https://schema.management.azure.com/schemas/2019-04-01/deploymentTemplate.json#',
                'contentVersion': '1.0.0.0',
                'resources': [
                  {
                    'type': 'Microsoft.Insights/diagnosticSettings',
                    'apiVersion': '2021-05-01-preview',
                    'name': 'ha-default-diag',
                    'properties': {
                      'workspaceId': logAnalyticsResourceId,
                      'logs': [
                        { 'category': 'StorageRead',  'enabled': true },
                        { 'category': 'StorageWrite', 'enabled': true },
                        { 'category': 'StorageDelete','enabled': true }
                      ],
                      'metrics': [
                        { 'category': 'AllMetrics', 'enabled': true }
                      ]
                    }
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
}

resource assignDiag 'Microsoft.Authorization/policyAssignments@2022-06-01' = {
  name: '${prefix}-assign-diag-${uniqueString(resourceType)}'
  properties: {
    displayName: 'Assign: Deploy Diag to LA'
    policyDefinitionId: defDiag.id
  }
}
```

> **Por qué**: _Technology_ garantiza observabilidad; _Learning_ recibe trazas para la retroalimentación / “lecciones aprendidas” a través de telemetría sistematizada.

### 2.6 Initiative (Policy Set): “HA Foundational Guardrails”

**`modules/policies/initiative-ha-foundational.bicep`**

```bicep
targetScope = 'managementGroup'
param prefix string = 'ha'
@description('IDs de policyDefinitions a agrupar en el set')
param definitionIds array

resource defSet 'Microsoft.Authorization/policySetDefinitions@2021-06-01' = {
  name: '${prefix}-foundational-guardrails'
  properties: {
    displayName: 'HA: Foundational Guardrails'
    metadata: { category: 'HorizonsArchitecture' }
    policyDefinitions: [for id in definitionIds: {
      policyDefinitionId: id
    }]
  }
}

resource assignSet 'Microsoft.Authorization/policyAssignments@2022-06-01' = {
  name: '${prefix}-assign-foundational-guardrails'
  properties: {
    displayName: 'Assign: HA Foundational Guardrails'
    policyDefinitionId: defSet.id
  }
}
```

### 2.7 RBAC: Roles personalizados para HA

**`modules/rbac/roles.bicep`**

```bicep
targetScope = 'managementGroup'

param mgId string   // /providers/Microsoft.Management/managementGroups/<id>
param prefix string = 'ha'

resource roleDimOwner 'Microsoft.Authorization/roleDefinitions@2022-04-01' = {
  name: guid(mgId, 'HA.DimensionOwner')
  scope: mgId
  properties: {
    roleName: 'HA.DimensionOwner'
    description: 'Owner of a HA dimension scope (manage RGs/resources within the dimension MG).'
    type: 'CustomRole'
    assignableScopes: [ mgId ]
    permissions: [
      {
        actions: [
          'Microsoft.Resources/subscriptions/resourceGroups/*'
          'Microsoft.Resources/deployments/*'
          'Microsoft.Authorization/roleAssignments/read'
          'Microsoft.Insights/*/read'
          'Microsoft.Support/*'
        ]
        notActions: []
      }
    ]
  }
}

resource roleProjectLead 'Microsoft.Authorization/roleDefinitions@2022-04-01' = {
  name: guid(mgId, 'HA.ProjectLead')
  scope: mgId
  properties: {
    roleName: 'HA.ProjectLead'
    description: 'Leads a project fractal node (RW on RG and child resources)'
    type: 'CustomRole'
    assignableScopes: [ mgId ]
    permissions: [
      {
        actions: [
          'Microsoft.Resources/subscriptions/resourceGroups/read'
          'Microsoft.Resources/subscriptions/resourceGroups/write'
          'Microsoft.Resources/deployments/*'
          'Microsoft.Compute/*/read'
          'Microsoft.Network/*/read'
          'Microsoft.Storage/*'
          'Microsoft.KeyVault/*/read'
        ]
        notActions: []
      }
    ]
  }
}
```

### 2.8 “Project baseline” (creates RG y aplica etiquetas HA)

**`modules/project/project-baseline.bicep`**

```bicep
targetScope = 'subscription'

@description('Nombre del RG (debe cumplir naming policy)')
param rgName string
@description('Dimensión HA')
param haDimension string
@description('Tiempo HA')
param haTime string
@description('ID de proyecto/fractal')
param haProjectId string
@description('Ubicación')
param location string = 'eastus'

resource rg 'Microsoft.Resources/resourceGroups@2022-09-01' = {
  name: rgName
  location: location
  tags: {
    'ha.dimension': haDimension
    'ha.time': haTime
    'ha.projectId': haProjectId
  }
}

output resourceGroupId string = rg.id
```

### 2.9 Bicep “main” (orquestación rápida)

**`bicep/main.bicep`**

```bicep
targetScope = 'tenant'

param rootMgId string
param prefix string = 'mg-ha'
param logAnalyticsWorkspaceId string

module mg './modules/mg-ha-tree.bicep' = {
  name: 'mg-ha-tree'
  params: {
    rootMgId: rootMgId
    prefix: prefix
  }
}

// Asignamos políticas en el MG raíz (scope a mgRoot)
module requireTags './modules/policies/require-ha-tags.bicep' = {
  name: 'policy-require-tags'
  scope: resourceId('Microsoft.Management/managementGroups', rootMgId)
  params: {}
}

module rgNaming './modules/policies/rg-naming-standard.bicep' = {
  name: 'policy-rg-naming'
  scope: resourceId('Microsoft.Management/managementGroups', rootMgId)
  params: {}
}

module storageNoPublic './modules/policies/storage-no-public-blob.bicep' = {
  name: 'policy-storage-no-public-blob'
  scope: resourceId('Microsoft.Management/managementGroups', rootMgId)
  params: {}
}

module diagStorage './modules/policies/diag-to-law.bicep' = {
  name: 'policy-diag-storage'
  scope: resourceId('Microsoft.Management/managementGroups', rootMgId)
  params: {
    logAnalyticsResourceId: logAnalyticsWorkspaceId
    resourceType: 'Microsoft.Storage/storageAccounts'
  }
}

// Initiative con el set de definiciones
module set './modules/policies/initiative-ha-foundational.bicep' = {
  name: 'policy-set-ha-foundational'
  scope: resourceId('Microsoft.Management/managementGroups', rootMgId)
  params: {
    definitionIds: [
      extensionResourceId(resourceId('Microsoft.Management/managementGroups', rootMgId), 'Microsoft.Authorization/policyDefinitions', 'ha-require-ha-tags')
      extensionResourceId(resourceId('Microsoft.Management/managementGroups', rootMgId), 'Microsoft.Authorization/policyDefinitions', 'ha-rg-naming-like')
      extensionResourceId(resourceId('Microsoft.Management/managementGroups', rootMgId), 'Microsoft.Authorization/policyDefinitions', 'ha-storage-no-public-blob')
      extensionResourceId(resourceId('Microsoft.Management/managementGroups', rootMgId), 'Microsoft.Authorization/policyDefinitions', 'ha-deploy-diag-' + uniqueString('Microsoft.Storage/storageAccounts'))
    ]
  }
}
```

---

## 3) **Terraform** — Módulos equivalentes

> Requiere `azurerm` provider reciente.

### 3.1 Módulo MG (fractal base)

**`terraform/modules/mg/main.tf`**

```hcl
resource "azurerm_management_group" "root" {
  display_name = var.root_display_name
  name         = var.root_mg_id
}

locals {
  dims = ["legacy","community","learning","technology","context","projects"]
}

resource "azurerm_management_group" "dims" {
  for_each     = toset(local.dims)
  display_name = "HA ${upper(each.key)}"
  name         = "${var.prefix}-${each.key}"
  parent_management_group_id = azurerm_management_group.root.id
}
```

**`variables.tf`**

```hcl
variable "root_mg_id" { type = string }
variable "root_display_name" { type = string }
variable "prefix" { type = string, default = "mg-ha" }
```

### 3.2 Policy: **Requerir etiquetas HA**

**`terraform/modules/policy/require_ha_tags/main.tf`**

```hcl
resource "azurerm_policy_definition" "require_ha_tags" {
  name         = "ha-require-ha-tags"
  display_name = "HA: Require core tags"
  policy_type  = "Custom"
  mode         = "Indexed"

  metadata = jsonencode({ category = "HorizonsArchitecture" })

  parameters = jsonencode({
    allowedDimensions = { type = "Array", default = ["Legacy","Community","Learning","Technology","Context","Projects"] }
    allowedTime       = { type = "Array", default = ["Past","Present","Future"] }
  })

  policy_rule = jsonencode({
    if = {
      anyOf = [
        { field = "tags['ha.dimension']", exists = false },
        { field = "tags['ha.time']",      exists = false },
        { field = "tags['ha.projectId']", exists = false },
        { allOf = [{ field = "tags['ha.dimension']", notIn = "[parameters('allowedDimensions')]" }] },
        { allOf = [{ field = "tags['ha.time']",      notIn = "[parameters('allowedTime')]"       }] }
      ]
    }
    then = { effect = "Deny" }
  })
}

resource "azurerm_policy_assignment" "assign" {
  name                 = "ha-assign-require-ha-tags"
  display_name         = "Assign: HA Require core tags"
  policy_definition_id = azurerm_policy_definition.require_ha_tags.id
  management_group_id  = var.management_group_id
}
```

**`variables.tf`**

```hcl
variable "management_group_id" { type = string }
```

### 3.3 Otras políticas (naming RG, storage sin público, diag)

Estructura equivalente a lo anterior (Bicep), con `azurerm_policy_definition` + `azurerm_policy_assignment`. Ejemplos:

- **RG naming**: `mode="All"`, `policy_rule.if: { allOf: [ { field: "type", equals: "Microsoft.Resources/subscriptions/resourceGroups" }, { field: "name", notLike: "ha-*-rg" } ] }` → `Deny`.
    
- **No public blob**: `if` para `Microsoft.Storage/storageAccounts/allowBlobPublicAccess != false` → `Deny`.
    
- **Diag to LA**: `DeployIfNotExists` con `existenceCondition` y plantilla ARM en `deployment.properties.template`.
    

### 3.4 RBAC (roles HA)

**`terraform/modules/rbac/roles/main.tf`**

```hcl
resource "azurerm_role_definition" "dimension_owner" {
  name        = "HA.DimensionOwner"
  scope       = var.mg_scope_id  # e.g., /providers/Microsoft.Management/managementGroups/mg-ha
  description = "Owner of a HA dimension scope"
  permissions {
    actions = [
      "Microsoft.Resources/subscriptions/resourceGroups/*",
      "Microsoft.Resources/deployments/*",
      "Microsoft.Authorization/roleAssignments/read",
      "Microsoft.Insights/*/read",
      "Microsoft.Support/*"
    ]
    not_actions = []
  }
  assignable_scopes = [var.mg_scope_id]
}

resource "azurerm_role_definition" "project_lead" {
  name        = "HA.ProjectLead"
  scope       = var.mg_scope_id
  description = "Lead for a project fractal node"
  permissions {
    actions = [
      "Microsoft.Resources/subscriptions/resourceGroups/read",
      "Microsoft.Resources/subscriptions/resourceGroups/write",
      "Microsoft.Resources/deployments/*",
      "Microsoft.Compute/*/read",
      "Microsoft.Network/*/read",
      "Microsoft.Storage/*",
      "Microsoft.KeyVault/*/read",
    ]
    not_actions = []
  }
  assignable_scopes = [var.mg_scope_id]
}
```

**`variables.tf`**

```hcl
variable "mg_scope_id" { type = string }
```

### 3.5 “Project baseline” (RG + tags HA)

**`terraform/modules/project/baseline/main.tf`**

```hcl
resource "azurerm_resource_group" "rg" {
  name     = var.rg_name
  location = var.location
  tags = {
    "ha.dimension" = var.ha_dimension
    "ha.time"      = var.ha_time
    "ha.projectId" = var.ha_project_id
  }
}
```

**`variables.tf`**

```hcl
variable "rg_name"       { type = string }
variable "location"      { type = string, default = "eastus" }
variable "ha_dimension"  { type = string }
variable "ha_time"       { type = string }
variable "ha_project_id" { type = string }
```

### 3.6 Terraform “root” (wiring rápido)

**`terraform/main.tf`** (extracto)

```hcl
module "mg" {
  source            = "./modules/mg"
  root_mg_id        = var.root_mg_id
  root_display_name = "HA Root"
  prefix            = "mg-ha"
}

module "policy_require_tags" {
  source              = "./modules/policy/require_ha_tags"
  management_group_id = module.mg.root_mg_id != null ? module.mg.root_mg_id : var.root_mg_id
}
```

---

## 4) Cómo usarlo (flujo mínimo)

1. **Crear/usar MG raíz** y desplegar el **árbol 6D** (Bicep `mg-ha-tree` o módulo TF `mg`).
    
2. Asignar **“HA Foundational Guardrails”** en el MG raíz (_require tags_, _naming_, _no blob público_, _diag_).
    
3. Por cada **subproyecto fractal**, desplegar el **project baseline** (RG + tags). A partir de ahí, cualquier despliegue (PaaS/IaaS/AKS) heredará gobernanza y deberá **cumplir tags HA + naming**.
    
4. Asignar **roles HA** (DimensionOwner / ProjectLead) al MG/RG correspondiente.
    

> Este pipeline materializa la **invariante 6D+Tiempo**, la **auto-semejanza por subproyectos** y los **bucles de retroalimentación** (telemetría diagnóstica), que son el “ADN” de HA en términos operativos de nube.

---

## 5) Notas prácticas y extensiones

- **Scope & versiones**: algunos recursos de Policy/Role pueden requerir API recientes; ajusta `apiVersion`/provider según tu entorno.
    
- **Initiatives por dimensión**: crea _policy sets_ específicos (p.ej., _Technology Baseline_, _Context Guardrails_) y asígnalos al MG de la dimensión.
    
- **Parametrización de Tiempo**: si necesitas granularidad, añade `ha.timeWindowStart`/`ha.timeWindowEnd` (ISO 8601) como etiquetas auditables.
    
- **Pruebas**: usa “What‑If”/`terraform plan` y la _Compliance blade_ de Azure Policy para validar.
    
- **Escalado fractal**: anida MG/RG por _projectId_ para replicar estructura 6D a nuevos nodos, manteniendo _dimension invariance_.
    

---

### Por qué esto está alineado con HA

- **Clasificación obligatoria** de datos/recursos por **dimensión** y **tiempo** (etiquetas + políticas) → reproduce el **eje de complejidad simultánea** y el **eje temporal** de HA.
    
- **Fractalidad** mediante MG/RG anidados por `ha.projectId` → _self-similarity_ operativa.
    
- **Agentes por dimensión** (conceptualmente) → _guardrails_/initiatives por MG de cada dimensión.
    
- **Feedback continuo** vía diagnósticos standarizados (DeployIfNotExists) → base para _learning loops_.
    

---

Si quieres, en el siguiente paso puedo **conectar estos módulos** con tu _landing zone_ actual (nombres de MG/RG, workspaces, regiones, pipelines) y dejar un **plan de despliegue** “copy‑paste” con parámetros reales.

---

1. **Ejes y dimensiones** para ordenar todo (Tiempo y Complejidad Simultánea; 6 dimensiones: Legacy, Community, Learning, Technology, Context, Projects).
    
2. **Ontología Agéntica Generativa (GAO)** para crear/ajustar/retirar subagentes bajo supervisión humana.
    
3. **Coordinación temporal no lineal** (pasado–presente–futuro) enlazada a controles y telemetría.
    

Con eso, mapeamos HA → Azure como “plano de control + plano de ejecución + plano de evidencia”.

---

## 1) Plano de control (governance) en Azure

**1.1. “Guardrails” como código**

- **Azure Policy** para imponer reglas de plataforma (definiciones, iniciativas, asignaciones). Ejemplos: solo regiones permitidas, tipos de recursos permitidos, etiquetado obligatorio, cifrado, endpoints privados por defecto. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/governance/policy/overview?utm_source=chatgpt.com "Overview of Azure Policy"))
    
- **Policy as Code** integrado a CI/CD (Bicep/Terraform) para versionar y auditar cambios de gobernanza. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/governance/policy/concepts/policy-as-code?utm_source=chatgpt.com "Design Azure Policy as Code workflows"))
    
- **Azure Landing Zones (CAF enterprise‑scale)** para estructurar grupos de administración, suscripciones y áreas de diseño (identidad, red, seguridad, gobernanza, operaciones). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/enterprise-scale/?utm_source=chatgpt.com "with Cloud Adoption Framework enterprise-scale landing ..."))
    

**1.2. Identidad y acceso para agentes (personas, servicios y “LLM‑agents”)**

- **Microsoft Entra ID (RBAC)** para acceso fino a recursos; **Managed Identities** para evitar secretos en código; **PIM** para acceso JIT a roles privilegiados. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/role-based-access-control/overview?utm_source=chatgpt.com "What is Azure role-based access control (Azure RBAC)?"))
    
- **Azure Key Vault** para secretos/llaves/certificados que los agentes consumen con identidad administrada. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/key-vault/general/overview?utm_source=chatgpt.com "Azure Key Vault Overview"))
    

**1.3. Gobernanza de datos y cumplimiento**

- **Microsoft Purview** para catálogo, clasificación, linaje, políticas de acceso; condición previa para habilitar datasets a agentes. ([Microsoft Learn](https://learn.microsoft.com/en-us/purview/data-governance-overview?utm_source=chatgpt.com "Data governance with Microsoft Purview"))
    
- **Defender for Cloud** para postura de seguridad CNAPP y cumplimiento regulatorio transversal. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/defender-for-cloud/defender-for-cloud-introduction?utm_source=chatgpt.com "Microsoft Defender for Cloud Overview"))
    

**1.4. Evidencia y prueba de contribución**

- **Azure Confidential Ledger** (inmutable, enclaves CCF) para certificar contribuciones y decisiones clave de agentes/equipos (trazabilidad y auditoría multi‑actor). Esto materializa el “proof of contribution” sugerido por HA. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/confidential-ledger/overview?utm_source=chatgpt.com "Microsoft Azure confidential ledger overview"))
    

> **Encaje con HA**: el “plano de control” corresponde a **Legacy/Technology** (propósito + estándares) y mantiene coherencia a través del tiempo (eje **Tiempo**) y a la vez coordina múltiples dimensiones concurrentes (eje **Complejidad Simultánea**).

---

## 2) Plano de ejecución (agentes, herramientas y flujos)

**2.1. Modelos y seguridad de IA**

- **Azure OpenAI** como motor LLM con **content filtering y abuso/abuse monitoring** administrados; configurable con **VNET + Private Endpoint** para tráfico privado. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/content-filter?utm_source=chatgpt.com "Azure OpenAI in Azure AI Foundry Models content filtering"))
    
- **Azure AI Content Safety** para moderación y “guardrails” multicanal (texto/imagen), integrado en el runtime de agentes. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview?utm_source=chatgpt.com "What is Azure AI Content Safety?"))
    
- **Azure ML Responsible AI** para modelos “clásicos/propios”: dashboard de fairness/explicabilidad/error analysis/contrafactuales y scorecards compartibles. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai-dashboard?view=azureml-api-2&utm_source=chatgpt.com "Assess AI systems by using the Responsible AI dashboard"))
    

**2.2. Orquestación agéntica**

- **Azure Functions (Durable Functions)** para orquestar agentes/skills con workflows stateful (fan‑out/fan‑in, esperas humanas, sagas). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?utm_source=chatgpt.com "Durable Functions Overview - Azure"))
    
- **Azure Event Grid** para eventos entre dimensiones/servicios (disparadores de agentes). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/event-grid/overview?utm_source=chatgpt.com "Introduction to Azure Event Grid"))
    
- **Azure API Management** como “tool registry” y **façade** seguro para tools (APIs internas/terceros) que los agentes pueden invocar con políticas (throttling, auth, transformación). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts?utm_source=chatgpt.com "Azure API Management - Overview and key concepts"))
    
- **Private Link** para consumo PaaS sin salir a Internet (Search, Storage, SQL, OpenAI, etc.). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/private-link/private-link-overview?utm_source=chatgpt.com "What is Azure Private Link?"))
    
- **On‑Your‑Data (Azure OpenAI)** / Retrieval sobre datos curados por Purview (o Azure ML registries para artefactos), con redes privadas y RBAC. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/concepts/use-your-data?utm_source=chatgpt.com "Azure OpenAI On Your Data"))
    

**2.3. Telemetría, coste y operación**

- **Azure Monitor + Log Analytics + App Insights** para trazas de prompts/tool‑calls, latencia, coste/tokens, seguridad, “safety events”; KQL para KPIs de GAO. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview?utm_source=chatgpt.com "Azure Monitor overview"))
    

> **Encaje con HA**: este plano implementa la **Ontología Agéntica Generativa**: generación/adaptación/retiro de subagentes según necesidad, bajo feedback humano (por ejemplo, políticas de APIM + RAI dashboard + señales de Content Safety).

---

## 3) Plano de evidencia y aprendizaje (línea de tiempo HA)

HA pide operar en **Pasado–Presente–Futuro** como bucle de gobierno:

- **Pasado**: registros inmutables de decisiones y outputs críticos en **Confidential Ledger** + linaje Purview + scorecards RAI; alimentan post‑mortems y mejoras. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/confidential-ledger/overview?utm_source=chatgpt.com "Microsoft Azure confidential ledger overview"))
    
- **Presente**: **Azure Policy** evalúa/niega/modifica en tiempo real; Content Safety y APIM gatean cada llamada; Monitor/Defender vigilan postura y señales de riesgo. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/governance/policy/overview?utm_source=chatgpt.com "Overview of Azure Policy"))
    
- **Futuro**: escenarios “what‑if” (RAI dashboard/causal analysis), “shadow deployments” de agentes en entornos de prueba, y **políticas pre‑aprobadas** que se activan por evento (Event Grid). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-responsible-ai-dashboard?view=azureml-api-2&utm_source=chatgpt.com "Use the Responsible AI dashboard in Azure Machine ..."))
    

---

## 4) Matriz HA → Azure (resumen operativo)

|Dimensión HA|Objetivo de gobernanza|Servicios Azure clave|Ejemplos de control|
|---|---|---|---|
|**Legacy**|Alinear todo a resultados y principios|Azure Policy (iniciativas), Landing Zones|Iniciativa “AI‑Guardrails”: regiones, tipos, etiquetas, cifrado, PE obligatorios. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/governance/policy/overview?utm_source=chatgpt.com "Overview of Azure Policy"))|
|**Community**|Quién hace qué (humanos/servicios)|Entra ID (RBAC/PIM), Managed Identities|Acceso JIT a roles de producción, rotación de acceso por campañas, revisión periódica de acceso de agentes. ([Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure?utm_source=chatgpt.com "What is Microsoft Entra Privileged Identity Management?"))|
|**Learning**|Aprendizaje continuo humano‑máquina|Azure ML RAI dashboard & scorecard; Purview|Cada release de agente exige scorecard RAI y datasets clasificados/linaje. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/machine-learning/how-to-responsible-ai-dashboard?view=azureml-api-2&utm_source=chatgpt.com "Use the Responsible AI dashboard in Azure Machine ..."))|
|**Technology**|“Tooling” y plataformas seguras|APIM, Private Link, Key Vault, Defender|Los agentes solo invocan tools publicadas en APIM; secreto cero (MI+KV). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts?utm_source=chatgpt.com "Azure API Management - Overview and key concepts"))|
|**Context**|Señales externas/regulatorias|Purview (datos), Event Grid (eventos)|Cambios regulatorios disparan políticas adaptativas y reevaluación RAI. ([Microsoft Learn](https://learn.microsoft.com/en-us/purview/data-governance-overview?utm_source=chatgpt.com "Data governance with Microsoft Purview"))|
|**Projects**|Entrega, riesgo, costos|Durable Functions, Monitor/Log Analytics|Orquestaciones con circuit‑breakers y alertas de costo/tokens por agente. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?utm_source=chatgpt.com "Durable Functions Overview - Azure"))|

> El **carácter fractal** (mismo esquema 6D en cada equipo/proyecto/unidad) permite instanciar estos controles a distintos niveles (grupos de administración, suscripciones, RGs), manteniendo consistencia y autonomía local.

---

## 5) Controles mínimos (“baseline”) para IA agéntica en Azure

1. **Red y datos**
    
    - Private Endpoints obligatorios para OpenAI, Search, Storage, SQL; “deny” a público por Policy. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-foundry/openai/how-to/network?utm_source=chatgpt.com "Securing Azure OpenAI inside a virtual network with private ..."))
        
    - Datasets **catalogados en Purview** antes de exposición a agentes; clasificación y data owner asignado. ([Microsoft Learn](https://learn.microsoft.com/en-us/purview/data-governance-overview?utm_source=chatgpt.com "Data governance with Microsoft Purview"))
        
2. **Identidad/seguridad**
    
    - Agentes con **Managed Identity** + APIM (tool registry) + scopes RBAC mínimos. ([Microsoft Learn](https://learn.microsoft.com/en-us/entra/identity/managed-identities-azure-resources/overview?utm_source=chatgpt.com "Managed identities for Azure resources"))
        
    - **PIM** para roles privilegiados y aprobaciones “just‑in‑time”. ([Microsoft Learn](https://learn.microsoft.com/en-us/entra/id-governance/privileged-identity-management/pim-configure?utm_source=chatgpt.com "What is Microsoft Entra Privileged Identity Management?"))
        
    - **Key Vault** para secretos/llaves con rotación y logging. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/key-vault/general/overview?utm_source=chatgpt.com "Azure Key Vault Overview"))
        
3. **Safety y cumplimiento**
    
    - **Content Safety** (prompt/output) + **Azure OpenAI filters/abuse monitoring** activados. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview?utm_source=chatgpt.com "What is Azure AI Content Safety?"))
        
    - **Responsible AI dashboard + scorecards** en el pipeline de promoción de agentes/modelos. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/machine-learning/concept-responsible-ai-dashboard?view=azureml-api-2&utm_source=chatgpt.com "Assess AI systems by using the Responsible AI dashboard"))
        
4. **Telemetría, costos y continuidad**
    
    - **App Insights/Log Analytics** con KQL para trazabilidad de herramientas, costes y latencia. **Defender for Cloud** para postura CNAPP. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-analytics-overview?utm_source=chatgpt.com "Overview of Log Analytics in Azure Monitor"))
        
    - **Confidential Ledger** para registrar evidencias de decisiones/acciones de alto impacto (prueba de contribución). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/confidential-ledger/overview?utm_source=chatgpt.com "Microsoft Azure confidential ledger overview"))
        

---

## 6) Cómo se ve el ciclo HA en producción (end‑to‑end)

1. **Definir Legacy y políticas** → Iniciativa de **Azure Policy** “AI‑Guardrails” + landing zone base. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/governance/policy/overview?utm_source=chatgpt.com "Overview of Azure Policy"))
    
2. **Publicar tools** de agentes en **API Management** (con throttling, auth, masking). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/api-management/api-management-key-concepts?utm_source=chatgpt.com "Azure API Management - Overview and key concepts"))
    
3. **Desplegar agentes** en **Durable Functions** / Container Apps, con **Managed Identity** y acceso a tools por RBAC. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-functions/durable/durable-functions-overview?utm_source=chatgpt.com "Durable Functions Overview - Azure"))
    
4. **Conectar datos** solo si están en **Purview** y detrás de **Private Link**; Retrieval con **On‑Your‑Data**. ([Microsoft Learn](https://learn.microsoft.com/en-us/purview/data-governance-overview?utm_source=chatgpt.com "Data governance with Microsoft Purview"))
    
5. **Poner guardrails de safety** (Content Safety + filtros de Azure OpenAI) y **RAI dashboard** en el gate de promoción. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/ai-services/content-safety/overview?utm_source=chatgpt.com "What is Azure AI Content Safety?"))
    
6. **Operar con telemetría** (Monitor/Log Analytics), **post‑mortems** con registros en **Confidential Ledger** y **aprendizaje** compartido (scorecards/linaje). ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/azure-monitor/fundamentals/overview?utm_source=chatgpt.com "Azure Monitor overview"))
    

Este loop expresa la **Coordinación Temporal No Lineal** de HA (pasado→presente→futuro) y la convivencialidad de múltiples dimensiones actuando en paralelo (Complejidad Simultánea).

---

## 7) Notas de diseño alineadas con la “GAO” de HA

- **Generación de subagentes**: cuando Event Grid detecta nueva necesidad (p.ej., cambio regulatorio), se despliega un micro‑agente con identidad administrada, tools en APIM y límites de coste (tokens) supervisados por Policy/Monitor. Al cerrarse el caso, el agente se **retira**, dejando huella en Confidential Ledger. Este ciclo corresponde a la **GAO** (generar–adaptar–retirar) descrita por HA.
    
- **Escalado fractal**: cada equipo/proyecto tiene su mini‑HA (mismos 6 “buckets”), con políticas heredadas a su suscripción; coherencia global, autonomía local.
    

---

## 8) ¿Por qué esto es HA y no “solo RAG con políticas”?

Porque **HA es una metodología de gobernanza** que **estructura** información, roles y herramientas en **seis dimensiones + dos ejes**; orquesta **agentes** con ciclos de vida gobernados, y **coordina temporalmente** decisiones y evidencias. Es un enfoque sistémico y escalable, no un patrón puntual de recuperación de documentos.

> “HA puede actuar como meta‑grafo y habilitar ‘proof of contribution’, consenso entre agentes y auto‑curación de la red”—capacidades que encajan de forma natural al incorporar **Purview**, **Confidential Ledger**, **Event Grid** y **Policy as Code** en Azure.

---

### Conclusión

Con **Azure Policy / Landing Zones** como armazón, **Entra/Key Vault/PIM** para identidad, **Purview/Defender** para datos y seguridad, **OpenAI + Content Safety + RAI** para seguridad/ética de IA, **APIM + Durable Functions + Event Grid** para orquestación, y **Monitor + Confidential Ledger** para evidencia, **HA** se operacionaliza íntegramente como **metodología de gobernanza de IA agéntica** en Azure—alineando propósito, control y ejecución a través del tiempo y a cualquier escala. ([Microsoft Learn](https://learn.microsoft.com/en-us/azure/governance/policy/overview?utm_source=chatgpt.com "Overview of Azure Policy"))

Si quieres, en un siguiente paso te lo bajo a un **paquete de iniciativas de Azure Policy + carpetas de Bicep/Terraform** con “AI‑Guardrails” (privado por defecto, tools/APIs registradas, safety gates, evidencia y KPIs).

---

## Connections
- [[04-technology-ha-core]]
