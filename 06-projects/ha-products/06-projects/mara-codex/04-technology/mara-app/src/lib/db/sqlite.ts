import Database from "@tauri-apps/plugin-sql";
import ddlSql from "../../db/ddl.sql?raw";
import { splitSqlStatements } from "../sql";
import type { WorkspaceProjection, WritebackPreview } from "../types";

let databasePromise: Promise<Database> | null = null;

async function getDatabase(): Promise<Database> {
  if (!databasePromise) {
    databasePromise = Database.load("sqlite:mara.db");
  }

  return databasePromise;
}

export async function initializeDatabase(): Promise<void> {
  const db = await getDatabase();
  const statements = splitSqlStatements(ddlSql);

  for (const statement of statements) {
    await db.execute(statement);
  }
}

export async function persistProjection(projection: WorkspaceProjection): Promise<void> {
  const db = await getDatabase();
  const workspaceId = `ws:${projection.rootPath}`;
  const now = new Date().toISOString();
  const roleForPath = (path: string): string => {
    if (/context\.md$/i.test(path)) {
      return "context";
    }
    if (/dashboard\.md$/i.test(path)) {
      return "dashboard";
    }
    if (/working-memory\.md$/i.test(path)) {
      return "working_memory";
    }
    return "support";
  };

  await db.execute(
    `INSERT OR REPLACE INTO workspaces (id, root_path, name, created_at, updated_at)
     VALUES (?, ?, ?, COALESCE((SELECT created_at FROM workspaces WHERE id = ?), ?), ?);`,
    [workspaceId, projection.rootPath, projection.workspaceName, workspaceId, now, now],
  );

  await db.execute("DELETE FROM links WHERE workspace_id = ?", [workspaceId]);
  await db.execute("DELETE FROM people WHERE workspace_id = ?", [workspaceId]);
  await db.execute("DELETE FROM sessions WHERE workspace_id = ?", [workspaceId]);
  await db.execute("DELETE FROM signals WHERE workspace_id = ?", [workspaceId]);
  await db.execute("DELETE FROM tasks WHERE workspace_id = ?", [workspaceId]);
  await db.execute("DELETE FROM node_documents WHERE node_id IN (SELECT id FROM nodes WHERE workspace_id = ?)", [workspaceId]);
  await db.execute("DELETE FROM nodes WHERE workspace_id = ?", [workspaceId]);
  await db.execute("DELETE FROM documents WHERE workspace_id = ?", [workspaceId]);

  for (const document of projection.documents) {
    await db.execute(
      `INSERT INTO documents (id, workspace_id, path, title, file_type, sha256, modified_at, created_at, size_bytes, frontmatter_json, headings_json, tags_json)
       VALUES (?, ?, ?, ?, 'markdown', NULL, ?, ?, ?, NULL, ?, ?);`,
      [
        document.id,
        workspaceId,
        document.path,
        document.title,
        new Date(document.modifiedAtMs || Date.now()).toISOString(),
        new Date(document.createdAtMs || Date.now()).toISOString(),
        document.sizeBytes,
        JSON.stringify(document.headings),
        JSON.stringify(document.tags),
      ],
    );
  }

  for (const node of projection.nodes) {
    await db.execute(
      `INSERT INTO nodes (id, workspace_id, name, level, path, parent_id, source, status, health_score, drift_score, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'active', ?, ?, ?);`,
      [
        node.id,
        workspaceId,
        node.name,
        node.level,
        node.path,
        node.parentId,
        node.source,
        node.healthScore,
        node.driftScore,
        now,
      ],
    );
  }

  for (const document of projection.documents) {
    const matchingNode = projection.nodes
      .filter((node) => document.path === node.path || document.path.startsWith(`${node.path}/`) || node.path === ".")
      .sort((left, right) => right.path.length - left.path.length)[0];

    if (!matchingNode) {
      continue;
    }

    await db.execute(
      `INSERT INTO node_documents (node_id, document_id, role)
       VALUES (?, ?, ?);`,
      [matchingNode.id, document.id, roleForPath(document.path)],
    );
  }

  for (const task of projection.tasks) {
    await db.execute(
      `INSERT INTO tasks (id, workspace_id, node_id, document_id, line_number, raw_text, normalized_text, task_type, status, due_at, person_ref, created_at, updated_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
      [
        task.id,
        workspaceId,
        task.nodeId,
        task.documentId,
        task.lineNumber,
        task.rawText,
        task.normalizedText,
        task.taskType,
        task.status,
        task.dueHint,
        task.personRef,
        now,
        now,
      ],
    );
  }

  for (const document of projection.documents) {
    for (const personRef of document.peopleRefs) {
      await db.execute(
        `INSERT OR REPLACE INTO people (id, workspace_id, handle, display_name, source_document_id, metadata_json, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?);`,
        [
          `person:${personRef}`,
          workspaceId,
          personRef,
          personRef,
          document.id,
          JSON.stringify({ sourcePath: document.path }),
          now,
        ],
      );
    }
  }

  for (const signal of projection.signals) {
    await db.execute(
      `INSERT INTO signals (id, workspace_id, source_node_id, target_node_id, signal_type, priority, message, status, source_document_id, created_at)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'open', NULL, ?);`,
      [
        signal.id,
        workspaceId,
        signal.sourceNodeId,
        signal.targetNodeId,
        signal.signalType,
        signal.priority,
        signal.message,
        now,
      ],
    );
  }

  for (const document of projection.documents) {
    for (const rawTarget of document.links) {
      await db.execute(
        `INSERT INTO links (id, workspace_id, from_document_id, to_document_id, raw_target, link_type, is_resolved)
         VALUES (?, ?, ?, NULL, ?, 'wikilink', 0);`,
        [
          `link:${document.id}:${rawTarget}`,
          workspaceId,
          document.id,
          rawTarget,
        ],
      );
    }
  }

  for (const session of projection.sessions) {
    await db.execute(
      `INSERT INTO sessions (id, workspace_id, node_id, document_id, session_date, focus, achievements, decisions, open_threads, next_step, created_at)
       VALUES (?, ?, ?, ?, ?, ?, '', ?, ?, ?, ?);`,
      [
        session.id,
        workspaceId,
        session.nodeId,
        session.documentId,
        session.sessionDate,
        session.focus,
        session.decisions.join(" | "),
        session.openThreads.join(" | "),
        session.nextStep,
        now,
      ],
    );
  }
}

export async function logWritebackPreview(params: {
  workspaceRootPath: string;
  nodeId: string | null;
  actionType: string;
  actionId: string;
  targetDocumentId: string | null;
  preview: WritebackPreview;
}): Promise<void> {
  const db = await getDatabase();
  const now = new Date().toISOString();
  const workspaceId = `ws:${params.workspaceRootPath}`;

  await db.execute(
    `INSERT OR REPLACE INTO actions_log (id, workspace_id, node_id, action_type, target_document_id, preview_json, committed, created_at)
     VALUES (?, ?, ?, ?, ?, ?, COALESCE((SELECT committed FROM actions_log WHERE id = ?), 0), COALESCE((SELECT created_at FROM actions_log WHERE id = ?), ?));`,
    [
      params.actionId,
      workspaceId,
      params.nodeId,
      params.actionType,
      params.targetDocumentId,
      JSON.stringify(params.preview),
      params.actionId,
      params.actionId,
      now,
    ],
  );
}

export async function markWritebackCommitted(actionId: string): Promise<void> {
  const db = await getDatabase();
  await db.execute(
    `UPDATE actions_log
     SET committed = 1
     WHERE id = ?;`,
    [actionId],
  );
}
