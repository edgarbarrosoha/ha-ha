import { buildWorkspaceProjection } from "./parser";
import type { WorkspaceProjection, WorkspaceScan } from "./types";

const demoScan: WorkspaceScan = {
  rootPath: "/demo/mara",
  documents: [
    {
      path: "00-mara-root/agent_memory/context.md",
      content: `# Mara Context

## Last Session
- 2026-03-06

### Decisions
- DEC: Focus MVP on markdown-first workspace support.

## Open threads
- [<] Mara scope and design needs owner confirmation
- [!] JIII Paper abstract is still blocked
`,
      modifiedAtMs: Date.now() - 4 * 86_400_000,
      createdAtMs: Date.now() - 10 * 86_400_000,
      sizeBytes: 260,
    },
    {
      path: "06-projects/dashboard.md",
      content: `# Dashboard

- [!] Finish parser v0
- [<] #oscar confirm MVP owner
- [?] Choose internal alpha date
- [>] Draft architecture summary
- [ ] Polish Morning Brief copy

## Active Projects
| Project | Status | Next steps |
| --- | --- | --- |
| **JIII Paper** | [!] | Decide section 5 compression path and land abstract < 200 words |
| **Mara** | [?] | Confirm MVP owner and lock scope for first alpha |
`,
      modifiedAtMs: Date.now() - 2 * 86_400_000,
      createdAtMs: Date.now() - 10 * 86_400_000,
      sizeBytes: 410,
    },
    {
      path: "06-projects/jiii/dashboard.md",
      content: `# JIII Dashboard

- [!] Decide section 5 compression path
- [ ] Draft abstract under 200 words
`,
      modifiedAtMs: Date.now() - 16 * 86_400_000,
      createdAtMs: Date.now() - 20 * 86_400_000,
      sizeBytes: 140,
    },
    {
      path: "06-projects/jiii/working-memory.md",
      content: `# JIII Working Memory

**Focus:** Resume paper after stall
**Next:** Draft section 5 compressed version
DEC: Section 2.5 already closes the literature review
`,
      modifiedAtMs: Date.now() - 16 * 86_400_000,
      createdAtMs: Date.now() - 20 * 86_400_000,
      sizeBytes: 180,
    },
  ],
};

export function buildDemoProjection(): WorkspaceProjection {
  return buildWorkspaceProjection(demoScan);
}
