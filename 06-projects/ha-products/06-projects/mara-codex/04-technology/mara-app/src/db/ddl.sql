CREATE TABLE IF NOT EXISTS workspaces (
  id TEXT PRIMARY KEY,
  root_path TEXT NOT NULL UNIQUE,
  name TEXT NOT NULL,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS documents (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  path TEXT NOT NULL,
  title TEXT,
  file_type TEXT NOT NULL DEFAULT 'markdown',
  sha256 TEXT,
  modified_at TEXT NOT NULL,
  created_at TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  frontmatter_json TEXT,
  headings_json TEXT,
  tags_json TEXT,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  UNIQUE (workspace_id, path)
);

CREATE TABLE IF NOT EXISTS nodes (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  name TEXT NOT NULL,
  level TEXT NOT NULL,
  path TEXT,
  parent_id TEXT,
  source TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'active',
  health_score REAL,
  drift_score REAL,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (parent_id) REFERENCES nodes(id)
);

CREATE TABLE IF NOT EXISTS node_documents (
  node_id TEXT NOT NULL,
  document_id TEXT NOT NULL,
  role TEXT NOT NULL,
  PRIMARY KEY (node_id, document_id),
  FOREIGN KEY (node_id) REFERENCES nodes(id),
  FOREIGN KEY (document_id) REFERENCES documents(id)
);

CREATE TABLE IF NOT EXISTS tasks (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  node_id TEXT,
  document_id TEXT NOT NULL,
  line_number INTEGER,
  raw_text TEXT NOT NULL,
  normalized_text TEXT NOT NULL,
  task_type TEXT NOT NULL,
  status TEXT NOT NULL,
  due_at TEXT,
  person_ref TEXT,
  created_at TEXT,
  updated_at TEXT,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (node_id) REFERENCES nodes(id),
  FOREIGN KEY (document_id) REFERENCES documents(id)
);

CREATE TABLE IF NOT EXISTS signals (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  source_node_id TEXT,
  target_node_id TEXT,
  signal_type TEXT NOT NULL,
  priority INTEGER NOT NULL DEFAULT 0,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  source_document_id TEXT,
  created_at TEXT NOT NULL,
  resolved_at TEXT,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (source_node_id) REFERENCES nodes(id),
  FOREIGN KEY (target_node_id) REFERENCES nodes(id),
  FOREIGN KEY (source_document_id) REFERENCES documents(id)
);

CREATE TABLE IF NOT EXISTS sessions (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  node_id TEXT,
  document_id TEXT NOT NULL,
  session_date TEXT,
  focus TEXT,
  achievements TEXT,
  decisions TEXT,
  open_threads TEXT,
  next_step TEXT,
  created_at TEXT NOT NULL,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (node_id) REFERENCES nodes(id),
  FOREIGN KEY (document_id) REFERENCES documents(id)
);

CREATE TABLE IF NOT EXISTS people (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  handle TEXT,
  display_name TEXT,
  source_document_id TEXT,
  metadata_json TEXT,
  updated_at TEXT NOT NULL,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (source_document_id) REFERENCES documents(id)
);

CREATE TABLE IF NOT EXISTS links (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  from_document_id TEXT NOT NULL,
  to_document_id TEXT,
  raw_target TEXT NOT NULL,
  link_type TEXT NOT NULL,
  is_resolved INTEGER NOT NULL DEFAULT 0,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (from_document_id) REFERENCES documents(id),
  FOREIGN KEY (to_document_id) REFERENCES documents(id)
);

CREATE TABLE IF NOT EXISTS actions_log (
  id TEXT PRIMARY KEY,
  workspace_id TEXT NOT NULL,
  node_id TEXT,
  action_type TEXT NOT NULL,
  target_document_id TEXT,
  preview_json TEXT,
  committed INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL,
  FOREIGN KEY (workspace_id) REFERENCES workspaces(id),
  FOREIGN KEY (node_id) REFERENCES nodes(id),
  FOREIGN KEY (target_document_id) REFERENCES documents(id)
);

CREATE INDEX IF NOT EXISTS idx_documents_workspace_path ON documents(workspace_id, path);
CREATE INDEX IF NOT EXISTS idx_nodes_workspace_level ON nodes(workspace_id, level);
CREATE INDEX IF NOT EXISTS idx_tasks_workspace_status ON tasks(workspace_id, status);
CREATE INDEX IF NOT EXISTS idx_tasks_node_type ON tasks(node_id, task_type);
CREATE INDEX IF NOT EXISTS idx_signals_target_status ON signals(target_node_id, status);
CREATE INDEX IF NOT EXISTS idx_sessions_node_date ON sessions(node_id, session_date DESC);
CREATE INDEX IF NOT EXISTS idx_links_from_doc ON links(from_document_id);
