# 05 Context - Mara Codex

## Why Now

Language models are already capable enough to read, summarize, structure, and surface a meaningful next move from a complex workspace. The bottleneck is not raw model power. It is product shape, memory structure, trust, and sustained use.

## Strategic Role

MARA is the interface layer of HA. `mara-codex` is where that claim gets tested in software.

This subproject should keep one foot in immediate usability and one foot in TaaS alignment. If it ships only abstraction, it stays theoretical. If it ships only a cockpit without architectural discipline, it drifts away from HA's product thesis.

## Constraints

- No Obsidian dependency for MVP
- No hidden writes into the workspace
- No generic dashboard aesthetics
- No abstraction-heavy TaaS language leaking into user-facing flows unless it improves clarity
