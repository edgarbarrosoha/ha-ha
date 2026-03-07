import type {
  Heading,
  MaraNode,
  MorningBrief,
  ParsedDocument,
  ParsedSession,
  ParsedSignal,
  ParsedTask,
  ProjectionDiagnostics,
  RecommendedMove,
  SignalType,
  SyntheticProjectDiagnostic,
  TaskType,
  RoutedTaskDiagnostic,
  WorkspaceProjection,
  WorkspaceScan,
} from "./types";

const TAG_RE = /(?:^|\s)#([a-zA-Z][\w/-]*)/g;
const WIKILINK_RE = /\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|[^\]]+)?\]\]/g;
const MARKDOWN_LINK_RE = /\[[^\]]+\]\(([^)]+\.md[^)]*)\)/g;
const TASK_RE = /^\s*-\s\[( |x|>|<|\?|\!)\]\s+(.*)$/;
const DATE_RE =
  /\b(\d{4}-\d{2}-\d{2}|\d{1,2}\/\d{1,2}(?:\/\d{2,4})?|(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)[a-z]*\s+\d{1,2},?\s+\d{4})\b/gi;
const VAULT_SEGMENT_RE = /^0[1-6]-/;
const ROOT_SEGMENT_RE = /^00-.*-root$/;
const NOISE_TASK_RE =
  /^(urgent items?|decisions? needed|decision \d+|\[decision \d+\]|next steps?|open threads?)$/i;
const IGNORED_DOCUMENT_RE =
  /(?:^|\/)\.claude\/|(?:^|\/)agent_memory\/skills\/|(?:^|\/)SKILL\.md$|(?:^|\/)MEMORY\.md$/i;
const PROJECT_NAMESPACE_RE = /^[a-z][\w.-]*$/i;
const PROJECT_UTILITY_RE = /(prompts?|templater|templates?|skills?|archive)/i;
const PROJECT_ANCHOR_RE = /^(dashboard|working-memory|context)\.md$/i;
const SIGNAL_ROUTING_STOPWORDS = new Set([
  "ha",
  "project",
  "projects",
  "book",
  "paper",
  "dashboard",
  "context",
  "legacy",
  "community",
  "learning",
  "technology",
]);

interface SyntheticProjectSeed {
  key: string;
  name: string;
  sourceDocumentId: string;
  sourceDocumentPath: string;
  lineNumber: number;
  section: string | null;
  status: string;
  nextSteps: string;
  aliases: string[];
}

interface SyntheticProjectBuildResult {
  nodes: MaraNode[];
  syntheticTasks: ParsedTask[];
  diagnostics: SyntheticProjectDiagnostic[];
}

interface TaskRoutingResult {
  tasks: ParsedTask[];
  reroutedTasks: RoutedTaskDiagnostic[];
  reroutedTaskCount: number;
  reroutedSignalTaskCount: number;
  unresolvedCentralTaskCount: number;
  unroutedCentralTasks: string[];
}

function hash(input: string): string {
  let value = 5381;
  for (let index = 0; index < input.length; index += 1) {
    value = (value * 33) ^ input.charCodeAt(index);
  }
  return `h${(value >>> 0).toString(16)}`;
}

function normalizeWhitespace(value: string): string {
  return value.replace(/\s+/g, " ").trim();
}

function basename(path: string): string {
  const parts = path.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? path;
}

function dirname(path: string): string {
  const parts = path.split("/").filter(Boolean);
  if (parts.length <= 1) {
    return ".";
  }
  return parts.slice(0, -1).join("/");
}

function isIgnoredDocumentPath(path: string): boolean {
  if (IGNORED_DOCUMENT_RE.test(path)) {
    return true;
  }

  if (/\/agent_memory\//i.test(path) && !/(?:^|\/)(?:context|working-memory)\.md$/i.test(path)) {
    return true;
  }

  return false;
}

function toNodeName(path: string): string {
  if (path === ".") {
    return "Workspace Root";
  }
  return basename(path)
    .replace(/^00-/, "")
    .replace(/-root$/, "")
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (match) => match.toUpperCase());
}

function mapTaskType(marker: string): TaskType {
  switch (marker) {
    case "x":
      return "done";
    case ">":
      return "agent_action";
    case "<":
      return "waiting";
    case "?":
      return "decision_needed";
    case "!":
      return "urgent";
    default:
      return "todo";
  }
}

function headingList(content: string): Heading[] {
  const headings: Heading[] = [];
  const lines = content.split("\n");
  lines.forEach((line, index) => {
    const match = line.match(/^(#{1,6})\s+(.+)$/);
    if (!match) {
      return;
    }

    headings.push({
      depth: match[1].length,
      text: normalizeWhitespace(match[2]),
      lineNumber: index + 1,
    });
  });
  return headings;
}

function extractAll(pattern: RegExp, content: string): string[] {
  const values: string[] = [];
  const regex = new RegExp(pattern.source, pattern.flags);
  let match = regex.exec(content);

  while (match) {
    values.push(normalizeWhitespace(match[1]));
    match = regex.exec(content);
  }

  return values;
}

function parseDocument(path: string, content: string, modifiedAtMs: number, createdAtMs: number, sizeBytes: number): ParsedDocument {
  const headings = headingList(content);
  const firstHeading = headings[0]?.text;

  return {
    id: `doc:${hash(path)}`,
    path,
    title: firstHeading ?? basename(path).replace(/\.md$/i, ""),
    headings,
    tags: Array.from(new Set(extractAll(TAG_RE, content))),
    links: Array.from(
      new Set([
        ...extractAll(WIKILINK_RE, content),
        ...extractAll(MARKDOWN_LINK_RE, content),
      ]),
    ),
    peopleRefs: Array.from(new Set(extractAll(/(?:^|\s)#([a-zA-Z][\w-]*)/g, content))),
    modifiedAtMs,
    createdAtMs,
    sizeBytes,
  };
}

function stripMarkdown(value: string): string {
  return normalizeWhitespace(
    value
      .replace(/\[\[([^\]|#]+)(?:#[^\]|]*)?(?:\|([^\]]+))?\]\]/g, (_, target: string, label?: string) => label ?? target)
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
      .replace(/[*_~`>#]/g, " ")
      .replace(/\s+/g, " "),
  );
}

function normalizeAlias(value: string): string {
  return stripMarkdown(value)
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value: string): string {
  return normalizeAlias(value).replace(/\s+/g, "-");
}

function containsAlias(text: string, alias: string): boolean {
  if (!alias) {
    return false;
  }

  const paddedText = ` ${text} `;
  const paddedAlias = ` ${alias} `;
  return paddedText.includes(paddedAlias);
}

function uniqueStrings(values: string[]): string[] {
  return Array.from(new Set(values.filter(Boolean)));
}

function aliasesFromName(name: string): string[] {
  const cleaned = stripMarkdown(name);
  const normalized = normalizeAlias(cleaned);
  const aliases = [normalized];
  const parenthetical = Array.from(cleaned.matchAll(/\(([^)]+)\)/g), (match) => normalizeAlias(match[1]));
  aliases.push(...parenthetical);

  const withoutParenthetical = normalizeAlias(cleaned.replace(/\([^)]+\)/g, " "));
  if (withoutParenthetical) {
    aliases.push(withoutParenthetical);
  }

  cleaned
    .split(/[\/|]/)
    .map((part) => normalizeAlias(part))
    .forEach((part) => aliases.push(part));

  return uniqueStrings(
    aliases.filter((alias) => {
      if (!alias) {
        return false;
      }
      if (alias.includes(" ")) {
        return alias.length >= 4;
      }
      return alias.length >= 3 && !SIGNAL_ROUTING_STOPWORDS.has(alias);
    }),
  );
}

function nodeAliases(name: string, path: string, extraAliases: string[] = []): string[] {
  const pathParts = path
    .split("/")
    .filter(Boolean)
    .filter(
      (segment) =>
        !segment.endsWith(".md") &&
        segment !== "06-projects" &&
        segment !== "@synthetic" &&
        !VAULT_SEGMENT_RE.test(segment) &&
        !ROOT_SEGMENT_RE.test(segment) &&
        !isLinkedWorkspaceAlias(segment),
    )
    .map((segment) => normalizeAlias(segment.replace(/^@synthetic\//, "")));

  return uniqueStrings([...aliasesFromName(name), ...pathParts, ...extraAliases.map((value) => normalizeAlias(value))]);
}

function tableCells(line: string): string[] {
  return line
    .trim()
    .replace(/^\|/, "")
    .replace(/\|$/, "")
    .split("|")
    .map((cell) => normalizeWhitespace(cell));
}

function isPortfolioDashboardPath(path: string): boolean {
  return (
    path === "06-projects/dashboard.md" ||
    /^06-projects\/[^/]+\.link\/06-projects\/dashboard\.md$/i.test(path)
  );
}

function isMeaningfulProjectName(name: string): boolean {
  const normalized = normalizeAlias(name);
  if (!normalized) {
    return false;
  }
  if (/^project \d+$/i.test(normalized) || /^untitled/i.test(normalized)) {
    return false;
  }
  return normalized.length >= 3;
}

function addNode(
  nodeMap: Map<string, { level: MaraNode["level"]; parentPath: string | null }>,
  path: string,
  level: MaraNode["level"],
  parentPath: string | null,
): void {
  const existing = nodeMap.get(path);
  if (!existing || (existing.level === "vault" && level === "project")) {
    nodeMap.set(path, { level, parentPath });
  }
}

function isLinkedWorkspaceAlias(segment: string | undefined): boolean {
  return Boolean(segment && /\.link$/i.test(segment));
}

function isProjectNamespace(segment: string | undefined): boolean {
  return Boolean(segment && PROJECT_NAMESPACE_RE.test(segment));
}

function isProjectSegment(segment: string | undefined): boolean {
  return Boolean(
    segment &&
      !isLinkedWorkspaceAlias(segment) &&
      !VAULT_SEGMENT_RE.test(segment) &&
      !ROOT_SEGMENT_RE.test(segment) &&
      !["agent_memory", "archive"].includes(segment) &&
      !PROJECT_UTILITY_RE.test(segment),
  );
}

function workspaceRelativeParts(path: string): string[] {
  const parts = path.split("/").filter(Boolean);
  if (parts[0] === "06-projects" && isLinkedWorkspaceAlias(parts[1])) {
    return parts.slice(2);
  }
  if (isLinkedWorkspaceAlias(parts[0])) {
    return parts.slice(1);
  }
  return parts;
}

function normalizeLinkedWorkspacePath(path: string): string {
  const parts = workspaceRelativeParts(path);
  if (
    parts.length > 0 &&
    (VAULT_SEGMENT_RE.test(parts[0]) || ROOT_SEGMENT_RE.test(parts[0]) || parts[0] === "06-projects")
  ) {
    return parts.join("/");
  }

  return path;
}

function vaultPathForDocument(path: string): string | null {
  const parts = workspaceRelativeParts(path);
  if (parts.length === 0) {
    return null;
  }

  if (VAULT_SEGMENT_RE.test(parts[0])) {
    return parts[0];
  }

  if (parts[0] === "06-projects") {
    return "06-projects";
  }

  return null;
}

function candidateProjectPath(path: string): string | null {
  const directoryParts = dirname(path).split("/").filter(Boolean);

  for (let index = directoryParts.length - 1; index >= 0; index -= 1) {
    if (directoryParts[index] !== "06-projects") {
      continue;
    }

    const first = directoryParts[index + 1];
    const second = directoryParts[index + 2];

    if (first && isProjectNamespace(first) && second && isProjectSegment(second)) {
      return directoryParts.slice(0, index + 3).join("/");
    }

    if (first && isProjectSegment(first)) {
      return directoryParts.slice(0, index + 2).join("/");
    }
  }

  return null;
}

function isNestedProjectPath(path: string): boolean {
  return path.split("/").filter((segment) => segment === "06-projects").length > 1;
}

function projectParentPath(path: string): string | null {
  const parts = path.split("/").filter(Boolean);
  if (parts.length === 0) {
    return ".";
  }

  if (VAULT_SEGMENT_RE.test(parts[0])) {
    return parts[0];
  }

  if (parts[0] === "06-projects") {
    return "06-projects";
  }

  const normalizedParts = workspaceRelativeParts(path);
  if (normalizedParts[0] && VAULT_SEGMENT_RE.test(normalizedParts[0])) {
    return normalizedParts[0];
  }

  if (normalizedParts[0] === "06-projects") {
    return "06-projects";
  }

  return ".";
}

function inferNodePaths(paths: string[]): Array<{ path: string; level: MaraNode["level"]; parentPath: string | null }> {
  const nodeMap = new Map<string, { level: MaraNode["level"]; parentPath: string | null }>();
  const projectCandidateStats = new Map<string, { count: number; hasAnchor: boolean }>();

  nodeMap.set(".", { level: "root", parentPath: null });

  paths.forEach((path) => {
    const parts = path.split("/").filter(Boolean);
    const vaultPath = vaultPathForDocument(path);

    if (vaultPath) {
      addNode(nodeMap, vaultPath, "vault", ".");
    }

    parts.forEach((_, index) => {
      const currentPath = parts.slice(0, index + 1).join("/");
      if (nodeMap.has(currentPath)) {
        return;
      }

      const segment = parts[index];
      const parentPath = index === 0 ? "." : parts.slice(0, index).join("/");

      if (ROOT_SEGMENT_RE.test(segment)) {
        if (parentPath !== "." && !isLinkedWorkspaceAlias(basename(parentPath))) {
          addNode(nodeMap, parentPath, "project", projectParentPath(parentPath));
        }
        return;
      }

      if (segment === "dashboard.md") {
        const fallbackProjectPath =
          basename(parentPath) === "06-projects"
            ? null
            : VAULT_SEGMENT_RE.test(basename(parentPath))
              ? dirname(parentPath)
              : parentPath;
        const projectPath =
          candidateProjectPath(path) ?? fallbackProjectPath;
        if (projectPath && projectPath !== ".") {
          addNode(nodeMap, projectPath, "project", projectParentPath(projectPath));
        }
      }
    });

    const denseProjectPath = candidateProjectPath(path);
    if (denseProjectPath) {
      const stats = projectCandidateStats.get(denseProjectPath) ?? { count: 0, hasAnchor: false };
      stats.count += 1;
      if (
        PROJECT_ANCHOR_RE.test(basename(path)) ||
        path.split("/").some((segment) => ROOT_SEGMENT_RE.test(segment))
      ) {
        stats.hasAnchor = true;
      }
      projectCandidateStats.set(denseProjectPath, stats);
    }
  });

  projectCandidateStats.forEach((stats, candidatePath) => {
    if (stats.hasAnchor || (!isNestedProjectPath(candidatePath) && stats.count >= 3)) {
      addNode(nodeMap, candidatePath, "project", projectParentPath(candidatePath));
    }
  });

  return Array.from(nodeMap.entries())
    .map(([path, config]) => ({ path, level: config.level, parentPath: config.parentPath }))
    .sort((left, right) => left.path.localeCompare(right.path));
}

function buildNodes(documentPaths: string[]): MaraNode[] {
  return inferNodePaths(documentPaths).map(({ path, level, parentPath }) => ({
    id: `node:${hash(path)}`,
    name: toNodeName(path),
    level,
    path,
    parentId: parentPath ? `node:${hash(parentPath)}` : null,
    source: "inferred",
    aliases: nodeAliases(toNodeName(path), path),
    originDocumentPath: null,
    healthScore: 0,
    driftScore: 0,
  }));
}

function matchNodeId(path: string, nodes: MaraNode[]): string {
  const basePath = dirname(path);
  const candidatePaths = Array.from(
    new Set([basePath, normalizeLinkedWorkspacePath(basePath)]),
  );
  const matches = nodes
    .filter((node) =>
      node.path === "." ||
      candidatePaths.some(
        (candidatePath) =>
          candidatePath === node.path || candidatePath.startsWith(`${node.path}/`),
      ),
    )
    .sort((left, right) => right.path.length - left.path.length);

  return matches[0]?.id ?? nodes[0]?.id ?? `node:${hash(".")}`;
}

function parseTasks(documents: ParsedDocument[], contentByPath: Map<string, string>, nodes: MaraNode[]): ParsedTask[] {
  const tasks: ParsedTask[] = [];

  documents.forEach((document) => {
    const content = contentByPath.get(document.path) ?? "";
    const lines = content.split("\n");

    lines.forEach((line, index) => {
      const match = line.match(TASK_RE);
      if (!match) {
        return;
      }

      const [, marker, rawText] = match;
      const normalizedText = normalizeWhitespace(rawText);
      if (!normalizedText || NOISE_TASK_RE.test(normalizedText)) {
        return;
      }
      const personRef = normalizedText.match(/#([a-zA-Z][\w-]*)/)?.[1] ?? null;
      const dueHint = normalizedText.match(DATE_RE)?.[0] ?? null;
      const taskType = mapTaskType(marker);

      tasks.push({
        id: `task:${hash(`${document.path}:${index}:${normalizedText}`)}`,
        nodeId: matchNodeId(document.path, nodes),
        documentId: document.id,
        documentPath: document.path,
        lineNumber: index + 1,
        rawText,
        normalizedText,
        taskType,
        status: taskType === "done" ? "done" : "open",
        personRef,
        dueHint,
      });
    });
  });

  return tasks;
}

function parseSessions(documents: ParsedDocument[], contentByPath: Map<string, string>, nodes: MaraNode[]): ParsedSession[] {
  const sessions: ParsedSession[] = [];

  documents
    .filter((document) => /working-memory\.md$/i.test(document.path) || /context\.md$/i.test(document.path))
    .forEach((document) => {
      const content = contentByPath.get(document.path) ?? "";
      const date = content.match(/\b\d{4}-\d{2}-\d{2}\b/)?.[0] ?? null;
      const focus = content.match(/(?:\*\*Focus:\*\*|### Focus)\s*(.+)/i)?.[1]?.trim() ?? null;
      const nextStep = content.match(/(?:\*\*Next:\*\*|### Next Session Priorities)\s*(.+)/i)?.[1]?.trim() ?? null;
      const decisions = Array.from(
        content.matchAll(/(?:DEC:|Decision[s]?:)\s*(.+)/gi),
        (match) => normalizeWhitespace(match[1]),
      ).slice(0, 5);
      const openThreads = Array.from(
        content.matchAll(/(?:Open threads:|Active Threads)\s*(.+)/gi),
        (match) => normalizeWhitespace(match[1]),
      ).slice(0, 5);

      if (!date && !focus && decisions.length === 0 && openThreads.length === 0 && !nextStep) {
        return;
      }

      sessions.push({
        id: `session:${hash(document.path)}`,
        nodeId: matchNodeId(document.path, nodes),
        documentId: document.id,
        sessionDate: date,
        focus,
        decisions,
        openThreads,
        nextStep,
      });
    });

  return sessions;
}

function parseDashboardProjectSeeds(
  documents: ParsedDocument[],
  contentByPath: Map<string, string>,
): SyntheticProjectSeed[] {
  const seeds: SyntheticProjectSeed[] = [];

  documents
    .filter((document) => /dashboard\.md$/i.test(document.path) && isPortfolioDashboardPath(document.path))
    .forEach((document) => {
      const content = contentByPath.get(document.path) ?? "";
      const lines = content.split("\n");
      let currentSection: string | null = null;

      for (let index = 0; index < lines.length; index += 1) {
        const headingMatch = lines[index].match(/^#{1,4}\s+(.+)$/);
        if (headingMatch) {
          currentSection = stripMarkdown(headingMatch[1]);
        }

        const headerCells = tableCells(lines[index]);
        const divider = lines[index + 1] ?? "";
        if (
          headerCells.length < 3 ||
          !headerCells.some((cell) => /^project$/i.test(stripMarkdown(cell))) ||
          !headerCells.some((cell) => /^status$/i.test(stripMarkdown(cell))) ||
          !headerCells.some((cell) => /next steps?/i.test(stripMarkdown(cell))) ||
          !/^\s*\|(?:\s*:?-+:?\s*\|)+\s*$/.test(divider)
        ) {
          continue;
        }

        const projectIndex = headerCells.findIndex((cell) => /^project$/i.test(stripMarkdown(cell)));
        const statusIndex = headerCells.findIndex((cell) => /^status$/i.test(stripMarkdown(cell)));
        const nextStepsIndex = headerCells.findIndex((cell) => /next steps?/i.test(stripMarkdown(cell)));

        index += 2;
        while (index < lines.length && /^\s*\|/.test(lines[index])) {
          const cells = tableCells(lines[index]);
          const projectName = stripMarkdown(cells[projectIndex] ?? "");
          const status = stripMarkdown(cells[statusIndex] ?? "");
          const nextSteps = stripMarkdown(cells[nextStepsIndex] ?? "");

          if (projectName && isMeaningfulProjectName(projectName)) {
            seeds.push({
              key: `${document.path}:${index}:${projectName}`,
              name: projectName,
              sourceDocumentId: document.id,
              sourceDocumentPath: document.path,
              lineNumber: index + 1,
              section: currentSection,
              status,
              nextSteps,
              aliases: aliasesFromName(projectName),
            });
          }
          index += 1;
        }

        index -= 1;
      }
    });

  return seeds;
}

function projectMatchScore(text: string, node: MaraNode): number {
  let bestScore = 0;

  node.aliases.forEach((alias) => {
    if (!containsAlias(text, alias)) {
      return;
    }

    const score =
      alias.length * 10 +
      (node.source === "inferred" ? 20 : 0) +
      Math.min(node.path.length, 40);
    if (score > bestScore) {
      bestScore = score;
    }
  });

  return bestScore;
}

function bestProjectNodeMatch(text: string, nodes: MaraNode[]): MaraNode | null {
  const normalizedText = normalizeAlias(text);
  if (!normalizedText) {
    return null;
  }

  const projectNodes = nodes.filter((node) => node.level === "project");
  const ranked = projectNodes
    .map((node) => ({ node, score: projectMatchScore(normalizedText, node) }))
    .filter((entry) => entry.score > 0)
    .sort((left, right) => right.score - left.score);

  return ranked[0]?.node ?? null;
}

function syntheticTaskType(status: string, nextSteps: string): TaskType | null {
  if (/[!]/.test(status)) {
    return "urgent";
  }
  if (/[?]/.test(status)) {
    return "decision_needed";
  }
  if (/[<⏸]/.test(status)) {
    return "waiting";
  }
  if (/✅/.test(status) && !nextSteps) {
    return null;
  }
  return "todo";
}

function buildSyntheticProjects(
  baseNodes: MaraNode[],
  documents: ParsedDocument[],
  contentByPath: Map<string, string>,
): SyntheticProjectBuildResult {
  const nodes = baseNodes.map((node) => ({ ...node, aliases: [...node.aliases] }));
  const syntheticTasks: ParsedTask[] = [];
  const diagnostics: SyntheticProjectDiagnostic[] = [];
  const dashboardSeeds = parseDashboardProjectSeeds(documents, contentByPath);

  dashboardSeeds.forEach((seed) => {
    const existingNode = bestProjectNodeMatch(seed.name, nodes);
    let targetNode: MaraNode;

    if (existingNode) {
      existingNode.aliases = uniqueStrings([...existingNode.aliases, ...seed.aliases]);
      targetNode = existingNode;
    } else {
      const syntheticPath = `06-projects/@synthetic/${slugify(seed.name)}-${hash(seed.key).slice(1, 9)}`;
      targetNode = {
        id: `node:${hash(`synthetic:${seed.key}`)}`,
        name: seed.name,
        level: "project",
        path: syntheticPath,
        parentId: `node:${hash("06-projects")}`,
        source: "synthetic",
        aliases: uniqueStrings(seed.aliases),
        originDocumentPath: seed.sourceDocumentPath,
        healthScore: 0,
        driftScore: 0,
      };
      nodes.push(targetNode);
    }

    diagnostics.push({
      name: seed.name,
      sourceDocumentPath: seed.sourceDocumentPath,
      matchedNodeName: existingNode?.name ?? null,
      createdNodeId: existingNode ? null : targetNode.id,
    });

    const taskType = syntheticTaskType(seed.status, seed.nextSteps);
    if (!taskType) {
      return;
    }

    const normalizedText = normalizeWhitespace(
      `${seed.name} — ${seed.nextSteps || seed.status || seed.section || "Dashboard project row"}`,
    );

    syntheticTasks.push({
      id: `task:${hash(`synthetic-task:${seed.key}`)}`,
      nodeId: targetNode.id,
      documentId: seed.sourceDocumentId,
      documentPath: seed.sourceDocumentPath,
      lineNumber: seed.lineNumber,
      rawText: normalizedText,
      normalizedText,
      taskType,
      status: taskType === "done" ? "done" : "open",
      personRef: normalizedText.match(/#([a-zA-Z][\w-]*)/)?.[1] ?? null,
      dueHint: normalizedText.match(DATE_RE)?.[0] ?? null,
    });
  });

  return {
    nodes,
    syntheticTasks,
    diagnostics,
  };
}

function routeTasksToProjects(tasks: ParsedTask[], nodes: MaraNode[]): TaskRoutingResult {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const reroutedTasks: RoutedTaskDiagnostic[] = [];
  const unroutedCentralTasks: string[] = [];
  let reroutedTaskCount = 0;
  let reroutedSignalTaskCount = 0;
  let unresolvedCentralTaskCount = 0;

  const routedTasks = tasks.map((task) => {
    const currentNode = nodeById.get(task.nodeId);
    if (!currentNode) {
      return task;
    }

    const isCentralScope = currentNode.level === "root" || currentNode.level === "vault";

    if (!isCentralScope) {
      return task;
    }

    const matchedProject = bestProjectNodeMatch(task.normalizedText, nodes);
    if (!matchedProject || matchedProject.id === task.nodeId) {
      unresolvedCentralTaskCount += 1;
      if (currentNode.level !== "project" && unroutedCentralTasks.length < 8) {
        unroutedCentralTasks.push(task.normalizedText);
      }
      return task;
    }

    reroutedTaskCount += 1;
    if (
      task.taskType === "waiting" ||
      task.taskType === "decision_needed" ||
      task.taskType === "urgent"
    ) {
      reroutedSignalTaskCount += 1;
    }
    if (reroutedTasks.length < 10) {
      reroutedTasks.push({
        text: task.normalizedText,
        fromNodeName: currentNode.name,
        toNodeName: matchedProject.name,
      });
    }

    return {
      ...task,
      nodeId: matchedProject.id,
    };
  });

  return {
    tasks: routedTasks,
    reroutedTasks,
    reroutedTaskCount,
    reroutedSignalTaskCount,
    unresolvedCentralTaskCount,
    unroutedCentralTasks,
  };
}

function buildNodeScores(nodes: MaraNode[], documents: ParsedDocument[], tasks: ParsedTask[], sessions: ParsedSession[]): MaraNode[] {
  const now = Date.now();
  const documentsByNode = new Map<string, ParsedDocument[]>();
  const tasksByNode = new Map<string, ParsedTask[]>();
  const sessionsByNode = new Map<string, ParsedSession[]>();

  documents.forEach((document) => {
    const key = matchNodeId(document.path, nodes);
    const existing = documentsByNode.get(key) ?? [];
    existing.push(document);
    documentsByNode.set(key, existing);
  });

  tasks.forEach((task) => {
    const existing = tasksByNode.get(task.nodeId) ?? [];
    existing.push(task);
    tasksByNode.set(task.nodeId, existing);
  });

  sessions.forEach((session) => {
    const existing = sessionsByNode.get(session.nodeId) ?? [];
    existing.push(session);
    sessionsByNode.set(session.nodeId, existing);
  });

  return nodes.map((node) => {
    const nodeDocuments = documentsByNode.get(node.id) ?? [];
    const nodeTasks = tasksByNode.get(node.id) ?? [];
    const nodeSessions = sessionsByNode.get(node.id) ?? [];
    const latestUpdateMs = nodeDocuments.reduce((latest, document) => Math.max(latest, document.modifiedAtMs), 0);
    const ageDays = latestUpdateMs > 0 ? (now - latestUpdateMs) / 86_400_000 : 30;
    const openTasks = nodeTasks.filter((task) => task.status === "open");
    const waiting = openTasks.filter((task) => task.taskType === "waiting").length;
    const urgent = openTasks.filter((task) => task.taskType === "urgent").length;
    const isQuietNode = openTasks.length === 0 && nodeSessions.length === 0;
    const scoreBase = Math.max(
      isQuietNode ? 45 : 0,
      100 - ageDays * (isQuietNode ? 0.45 : 2) - waiting * 2 - urgent * 3 + nodeSessions.length * 4,
    );
    const drift = Math.min(
      isQuietNode ? 24 : 100,
      ageDays * (isQuietNode ? 0.5 : 3) + waiting * 6 + urgent * 8 + (openTasks.length > 12 ? 10 : 0),
    );

    return {
      ...node,
      healthScore: Math.round(Math.max(0, Math.min(100, scoreBase))),
      driftScore: Math.round(Math.max(0, Math.min(100, drift))),
    };
  });
}

function signalTypeForTask(task: ParsedTask): SignalType {
  if (task.taskType === "waiting") {
    return "waiting";
  }
  if (task.taskType === "decision_needed") {
    return "decision";
  }
  if (task.taskType === "urgent") {
    return "alert";
  }
  return "insight";
}

function buildSignals(tasks: ParsedTask[], nodes: MaraNode[]): ParsedSignal[] {
  const rootNode = nodes.find((node) => node.level === "root") ?? nodes[0];

  return tasks
    .filter((task) => task.taskType === "waiting" || task.taskType === "decision_needed" || task.taskType === "urgent")
    .map((task) => ({
      id: `signal:${hash(task.id)}`,
      sourceNodeId: task.nodeId,
      targetNodeId: rootNode.id,
      signalType: signalTypeForTask(task),
      priority:
        task.taskType === "urgent"
          ? 90
          : task.taskType === "decision_needed"
            ? 75
            : 60,
      message: task.normalizedText,
    }));
}

function chooseRecommendedMove(nodes: MaraNode[], tasks: ParsedTask[]): RecommendedMove | null {
  const rankedNodes = nodes
    .filter((node) => node.level !== "root")
    .map((node) => {
      const nodeTasks = tasks.filter((task) => task.nodeId === node.id && task.status === "open");
      const weight =
        node.driftScore +
        (node.level === "project" ? 4 : 0) +
        nodeTasks.filter((task) => task.taskType === "urgent").length * 15 +
        nodeTasks.filter((task) => task.taskType === "decision_needed").length * 10 +
        nodeTasks.filter((task) => task.taskType === "waiting").length * 6;
      return { node, weight };
    })
    .sort((left, right) => right.weight - left.weight);

  const next = rankedNodes[0];
  if (!next) {
    return null;
  }

  return {
    nodeId: next.node.id,
    reason: next.node.driftScore > 40 ? "High drift detected" : "Most strategically loaded open node",
  };
}

function buildBrief(nodes: MaraNode[], tasks: ParsedTask[], signals: ParsedSignal[]): MorningBrief {
  const openTasks = tasks.filter((task) => task.status === "open");
  const waitingCount = openTasks.filter((task) => task.taskType === "waiting").length;
  const stalledNodeCount = nodes.filter((node) => node.level !== "root" && node.driftScore >= 40).length;
  const recommendedMove = chooseRecommendedMove(nodes, tasks);
  const topTensions = Array.from(
    new Set(
      signals
        .sort((left, right) => right.priority - left.priority)
        .slice(0, 6)
        .map((signal) => signal.message),
    ),
  ).slice(0, 3);

  const summary = recommendedMove
    ? `You have ${signals.length} active signals, ${waitingCount} waiting items, and ${stalledNodeCount} drifting nodes. The strongest next move is to zoom into the recommended node.`
    : `Workspace parsed successfully. No dominant next move detected yet.`;

  return {
    summary,
    tensions: topTensions,
    recommendedMove,
    openSignals: signals.length,
    waitingCount,
    stalledNodeCount,
  };
}

function buildDiagnostics(
  documents: ParsedDocument[],
  nodes: MaraNode[],
  signals: ParsedSignal[],
  syntheticProjects: SyntheticProjectDiagnostic[],
  syntheticTaskCount: number,
  routing: TaskRoutingResult,
): ProjectionDiagnostics {
  const nodeById = new Map(nodes.map((node) => [node.id, node]));
  const linkedWorkspacePaths = uniqueStrings(
    documents
      .map((document) => {
        const parts = document.path.split("/").filter(Boolean);
        if (parts[0] === "06-projects" && isLinkedWorkspaceAlias(parts[1])) {
          return parts[1];
        }
        if (isLinkedWorkspaceAlias(parts[0])) {
          return parts[0];
        }
        return "";
      })
      .filter(Boolean),
  );

  const rootSignalCount = signals.filter((signal) => {
    const sourceNode = nodeById.get(signal.sourceNodeId);
    return !sourceNode || sourceNode.level !== "project";
  }).length;

  return {
    linkedWorkspaceCount: linkedWorkspacePaths.length,
    linkedWorkspacePaths,
    syntheticProjectCount: nodes.filter((node) => node.level === "project" && node.source === "synthetic").length,
    syntheticTaskCount,
    reroutedTaskCount: routing.reroutedTaskCount,
    reroutedSignalCount: routing.reroutedSignalTaskCount,
    rootSignalCount,
    unresolvedCentralTaskCount: routing.unresolvedCentralTaskCount,
    syntheticProjects: syntheticProjects.slice(0, 16),
    reroutedTasks: routing.reroutedTasks,
    unroutedCentralTasks: routing.unroutedCentralTasks,
  };
}

export function buildWorkspaceProjection(scan: WorkspaceScan): WorkspaceProjection {
  const contentByPath = new Map<string, string>();
  const filteredInputs = scan.documents.filter((document) => !isIgnoredDocumentPath(document.path));

  filteredInputs.forEach((document) => {
    contentByPath.set(document.path, document.content);
  });

  const documents = filteredInputs.map((document) =>
    parseDocument(
      document.path,
      document.content,
      document.modifiedAtMs,
      document.createdAtMs,
      document.sizeBytes,
    ),
  );
  const inferredNodes = buildNodes(documents.map((document) => document.path));
  const synthetic = buildSyntheticProjects(inferredNodes, documents, contentByPath);
  const parsedTasks = parseTasks(documents, contentByPath, synthetic.nodes);
  const allTasks = [...parsedTasks, ...synthetic.syntheticTasks];
  const routedTasks = routeTasksToProjects(allTasks, synthetic.nodes);
  const sessions = parseSessions(documents, contentByPath, synthetic.nodes);
  const scoredNodes = buildNodeScores(synthetic.nodes, documents, routedTasks.tasks, sessions);
  const signals = buildSignals(routedTasks.tasks, scoredNodes);
  const brief = buildBrief(scoredNodes, routedTasks.tasks, signals);
  const diagnostics = buildDiagnostics(
    documents,
    scoredNodes,
    signals,
    synthetic.diagnostics,
    synthetic.syntheticTasks.length,
    routedTasks,
  );

  return {
    workspaceName: basename(scan.rootPath) || "Workspace",
    rootPath: scan.rootPath,
    documents,
    nodes: scoredNodes,
    tasks: routedTasks.tasks,
    signals,
    sessions,
    brief,
    diagnostics,
  };
}
