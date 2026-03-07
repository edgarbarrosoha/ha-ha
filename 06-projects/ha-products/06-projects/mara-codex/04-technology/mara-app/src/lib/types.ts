export type TaskType =
  | "todo"
  | "done"
  | "agent_action"
  | "waiting"
  | "decision_needed"
  | "urgent";

export type NodeLevel = "root" | "vault" | "project";
export type NodeSource = "inferred" | "synthetic";

export type SignalType =
  | "alert"
  | "decision"
  | "waiting"
  | "insight"
  | "escalation";

export type WritebackTarget = "dashboard" | "working_memory";

export type WritebackOperation =
  | "replace_managed_block"
  | "insert_after_header"
  | "append_block";

export interface WorkspaceDocumentInput {
  path: string;
  content: string;
  modifiedAtMs: number;
  createdAtMs: number;
  sizeBytes: number;
}

export interface WorkspaceScan {
  rootPath: string;
  documents: WorkspaceDocumentInput[];
}

export interface WorkspaceFingerprint {
  revision: string;
  documentCount: number;
}

export interface Heading {
  depth: number;
  text: string;
  lineNumber: number;
}

export interface ParsedDocument {
  id: string;
  path: string;
  title: string;
  headings: Heading[];
  tags: string[];
  links: string[];
  peopleRefs: string[];
  modifiedAtMs: number;
  createdAtMs: number;
  sizeBytes: number;
}

export interface ParsedTask {
  id: string;
  nodeId: string;
  documentId: string;
  documentPath: string;
  lineNumber: number;
  rawText: string;
  normalizedText: string;
  taskType: TaskType;
  status: "open" | "done";
  personRef: string | null;
  dueHint: string | null;
}

export interface ParsedSignal {
  id: string;
  sourceNodeId: string;
  targetNodeId: string;
  signalType: SignalType;
  priority: number;
  message: string;
}

export interface ParsedSession {
  id: string;
  nodeId: string;
  documentId: string;
  sessionDate: string | null;
  focus: string | null;
  decisions: string[];
  openThreads: string[];
  nextStep: string | null;
}

export interface MaraNode {
  id: string;
  name: string;
  level: NodeLevel;
  path: string;
  parentId: string | null;
  source: NodeSource;
  aliases: string[];
  originDocumentPath: string | null;
  healthScore: number;
  driftScore: number;
}

export interface RecommendedMove {
  nodeId: string;
  reason: string;
}

export interface MorningBrief {
  summary: string;
  tensions: string[];
  recommendedMove: RecommendedMove | null;
  openSignals: number;
  waitingCount: number;
  stalledNodeCount: number;
}

export interface SyntheticProjectDiagnostic {
  name: string;
  sourceDocumentPath: string;
  matchedNodeName: string | null;
  createdNodeId: string | null;
}

export interface RoutedTaskDiagnostic {
  text: string;
  fromNodeName: string;
  toNodeName: string;
}

export interface ProjectionDiagnostics {
  linkedWorkspaceCount: number;
  linkedWorkspacePaths: string[];
  syntheticProjectCount: number;
  syntheticTaskCount: number;
  reroutedTaskCount: number;
  reroutedSignalCount: number;
  rootSignalCount: number;
  unresolvedCentralTaskCount: number;
  syntheticProjects: SyntheticProjectDiagnostic[];
  reroutedTasks: RoutedTaskDiagnostic[];
  unroutedCentralTasks: string[];
}

export interface WorkspaceProjection {
  workspaceName: string;
  rootPath: string;
  documents: ParsedDocument[];
  nodes: MaraNode[];
  tasks: ParsedTask[];
  signals: ParsedSignal[];
  sessions: ParsedSession[];
  brief: MorningBrief;
  diagnostics: ProjectionDiagnostics;
}

export interface WritebackRequest {
  rootPath: string;
  workspaceName: string;
  target: WritebackTarget;
  nodeId: string | null;
  nodeName: string | null;
  nodePath: string | null;
  summary: string;
  reason: string | null;
  tensions: string[];
  topTasks: string[];
  waitingCount: number;
  openSignals: number;
  stalledNodeCount: number;
  generatedAt: string;
}

export interface WritebackPreview {
  actionId: string;
  target: WritebackTarget;
  targetPath: string;
  operation: WritebackOperation;
  content: string;
}

export interface WritebackCommitResult {
  actionId: string;
  target: WritebackTarget;
  targetPath: string;
  committedAtMs: number;
}
