# HA Signaling System: The Bottom-Up Intelligence Loop

## 1. Concept: Information Bubbling
In a fractal system, the biggest risk is **Operational Blindness**: the CEO (Level 0) being unaware of critical wins or roadblocks occurring at the specialist level (Level 2).

The HA Signaling System solves this by providing a standardized mechanism for asynchronous reporting through the hierarchy.

## 2. Infrastructure: The Inbox Pattern
Each Parent Node (e.g., Root, Vault) possesses an `inbox.md` in its agent memory. This file serves as a non-intrusive buffer where Child Nodes deposit high-signal updates.

## 3. The Signal Protocol (ha-signal)
The command `ha-signal "[Message]"` automatically identifies the parent-child relationship based on the current directory path and routes the message to the appropriate parent inbox.

### Routing Logic:
- **Level 2 (Project)** -> Bubbles up to -> **Level 1 (Vault)**
- **Level 1 (Vault)** -> Bubbles up to -> **Level 0 (Root)**

## 4. Strategic Benefits
1. **Context Management:** Prevents the Root agent from having to process all low-level logs. It only sees the *Signals*.
2. **Asynchronous Alignment:** The user can review the `inbox.md` during their "CEO Hour" to update the global strategy based on specialist results.
3. **Audit Trail:** Creates a permanent, time-stamped history of critical milestones across the entire confederation.

---
*Documented by ha-eb. January 24, 2026.*
