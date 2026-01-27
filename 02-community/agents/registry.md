# HA-HA Agent Registry

*Federated index of all agents for Horizons Architecture business operations.*

---

## Instance Identity

- **HA Instance:** HA-HA (Business)
- **Level:** 1 (Domain)
- **Parent:** HA-EB (Root)
- **Legacy:** Become Latin America's first hybrid intelligence unicorn
- **2026 Targets:** $1.5M revenue, $6M valuation, SaaS beta, TEC Lab

---

## Dimensional Agents (Fixed Taxonomy)

| ID | Agent | Dimension | Purpose | Call With |
|----|-------|-----------|---------|-----------|
| `@root` | HA-HA ROOT | — | Orchestrator of business ops | `@root status` |
| `@legacy` | LEGACY | 01 | Unicorn vision, strategy | `@legacy should we pursue...` |
| `@community` | COMMUNITY | 02 | Team, clients, network | `@community client health...` |
| `@learning` | LEARNING | 03 | Methodology, knowledge | `@learning lessons from...` |
| `@technology` | TECHNOLOGY | 04 | Stack, product, AI | `@technology roadmap...` |
| `@context` | CONTEXT | 05 | Market, competition, regulatory | `@context trends in...` |
| `@projects` | PROJECTS | 06 | Execution, delivery | `@projects status of...` |

---

## Subagents (Persistent)

*Business-specific agents reporting to dimensional agents.*

### Under @community

| ID | Purpose | Call With |
|----|---------|-----------|
| `@sales` | Pipeline, BD, deal closing | `@sales pipeline status` |
| `@client-success` | Retention, satisfaction, upsell | `@client-success health check` |
| `@marketer` | Brand, content, positioning | `@marketer content plan` |

### Under @projects

| ID | Purpose | Call With |
|----|---------|-----------|
| `@cfo` | Cash flow, invoicing, reporting | `@cfo revenue report` |
| `@proposal-writer` | Turn opportunities into wins | `@proposal-writer draft for...` |

### Under @technology

| ID | Purpose | Call With |
|----|---------|-----------|
| `@product-manager` | SaaS roadmap, features | `@product-manager prioritize...` |

### Under @context

| ID | Purpose | Call With |
|----|---------|-----------|
| `@legal-startup` | Contracts, IP, MX/CH/EU law | `@legal-startup review...` |

---

## Subagents (Ephemeral)

*Created on-demand for specific tasks. Destroyed after completion.*

| ID | Parent | Created | Task | Status |
|----|--------|---------|------|--------|
| *none active* | | | | |

---

## Protocol

### To Call an Agent
```
@{agent} {task description}
```

### To Spawn Ephemeral Subagent
```
SPAWN: {subagent-id}
PARENT: {dimensional-agent}
TASK: {specific task}
ON_COMPLETE: destroy
```

### Agent Hierarchy

```
@root (HA-HA ROOT)
├── @legacy
├── @community
│   ├── @sales
│   ├── @client-success
│   └── @marketer
├── @learning
├── @technology
│   └── @product-manager
├── @context
│   └── @legal-startup
└── @projects
    ├── @cfo
    └── @proposal-writer
```

---

## Cross-Instance Connections

HA-HA can access HA-EB agents for shared capabilities:

| HA-EB Agent | Use Case |
|-------------|----------|
| `@ghostwriter` | Client communications in Edgar's voice |
| `@researcher` | Deep market/client research |
| `@strategist` | High-level financial strategy |
| `@counsel` | Broad legal guidance |

---

*Every agent serves the unicorn. The unicorn is the legacy.*

## Connections
- [[02-community]]
