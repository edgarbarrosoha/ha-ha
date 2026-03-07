import { useEffect, useMemo, useRef, useState } from "react";
import { watch } from "@tauri-apps/plugin-fs";
import { ScoreStage } from "./components/score-stage";
import {
  commitWriteback,
  getWorkspaceFingerprint,
  isTauriRuntime,
  openWorkspaceFolder,
  previewWriteback,
  scanWorkspace,
} from "./lib/bridge";
import {
  initializeDatabase,
  logWritebackPreview,
  markWritebackCommitted,
  persistProjection,
} from "./lib/db/sqlite";
import { buildDemoProjection } from "./lib/demo";
import { buildWorkspaceProjection } from "./lib/parser";
import type {
  MaraNode,
  ParsedSignal,
  ParsedTask,
  WorkspaceProjection,
  WritebackPreview,
  WritebackRequest,
  WritebackTarget,
} from "./lib/types";

function nodeLabel(node: MaraNode): string {
  return `${node.name} · ${node.level}`;
}

function previewLabel(target: WritebackTarget): string {
  return target === "dashboard" ? "Preview dashboard update" : "Preview memory sync";
}

export default function App() {
  const [projection, setProjection] = useState<WorkspaceProjection | null>(null);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [status, setStatus] = useState("No workspace connected.");
  const [error, setError] = useState<string | null>(null);
  const [pendingPreview, setPendingPreview] = useState<WritebackPreview | null>(null);
  const [actionStatus, setActionStatus] = useState("No action preview generated.");
  const [actionError, setActionError] = useState<string | null>(null);
  const [isPreviewing, setIsPreviewing] = useState(false);
  const [isCommitting, setIsCommitting] = useState(false);
  const fingerprintRef = useRef<string | null>(null);
  const refreshInFlightRef = useRef(false);

  const selectedNode = useMemo(() => {
    if (!projection) {
      return null;
    }

    return (
      projection.nodes.find((node) => node.id === selectedNodeId) ??
      projection.nodes.find((node) => node.level === "root") ??
      projection.nodes[0]
    );
  }, [projection, selectedNodeId]);

  const selectedTasks = useMemo(() => {
    if (!projection || !selectedNode) {
      return [];
    }

    return projection.tasks.filter((task) => task.nodeId === selectedNode.id);
  }, [projection, selectedNode]);

  const selectedOpenTasks = useMemo(
    () => selectedTasks.filter((task) => task.status === "open"),
    [selectedTasks],
  );

  const selectedSignals = useMemo(() => {
    if (!projection || !selectedNode) {
      return [];
    }

    return projection.signals
      .filter(
        (signal) =>
          signal.sourceNodeId === selectedNode.id || signal.targetNodeId === selectedNode.id,
      )
      .sort((left, right) => right.priority - left.priority);
  }, [projection, selectedNode]);

  const desktopWritebackReady =
    Boolean(projection && !projection.rootPath.startsWith("/demo/")) && isTauriRuntime();

  async function hydrateWorkspace(rootPath: string): Promise<WorkspaceProjection> {
    const scan = await scanWorkspace(rootPath);
    const nextProjection = buildWorkspaceProjection(scan);
    const workspaceFingerprint = await getWorkspaceFingerprint(rootPath);

    await initializeDatabase();
    await persistProjection(nextProjection);

    fingerprintRef.current = workspaceFingerprint.revision;
    setProjection(nextProjection);
    setSelectedNodeId((currentValue) => {
      if (currentValue && nextProjection.nodes.some((node) => node.id === currentValue)) {
        return currentValue;
      }

      return nextProjection.brief.recommendedMove?.nodeId ?? nextProjection.nodes[0]?.id ?? null;
    });

    return nextProjection;
  }

  useEffect(() => {
    if (!projection || !isTauriRuntime() || projection.rootPath.startsWith("/demo/")) {
      return undefined;
    }

    const watchedRootPath = projection.rootPath;
    let pollingIntervalId: number | null = null;
    let cleanupWatcher: (() => void) | null = null;
    let isDisposed = false;

    async function refreshProjection(reason: string) {
      if (refreshInFlightRef.current || isDisposed) {
        return;
      }

      try {
        refreshInFlightRef.current = true;
        setPendingPreview(null);
        setActionError(null);
        setStatus("Workspace changed. Refreshing projection...");
        const nextProjection = await hydrateWorkspace(watchedRootPath);
        if (isDisposed) {
          return;
        }
        setStatus(`Workspace refreshed: ${nextProjection.workspaceName}`);
        setActionStatus(reason);
      } catch (caughtError) {
        if (!isDisposed) {
          setActionError(caughtError instanceof Error ? caughtError.message : "Auto-refresh failed.");
        }
      } finally {
        refreshInFlightRef.current = false;
      }
    }

    function startFingerprintPolling() {
      if (pollingIntervalId) {
        return;
      }

      pollingIntervalId = window.setInterval(async () => {
        if (refreshInFlightRef.current || isDisposed) {
          return;
        }

        try {
          const nextFingerprint = await getWorkspaceFingerprint(watchedRootPath);
          if (!fingerprintRef.current) {
            fingerprintRef.current = nextFingerprint.revision;
            return;
          }

          if (nextFingerprint.revision !== fingerprintRef.current) {
            await refreshProjection("Projection refreshed after workspace changes (fingerprint polling).");
          }
        } catch (caughtError) {
          if (!isDisposed) {
            setActionError(caughtError instanceof Error ? caughtError.message : "Fingerprint polling failed.");
          }
        }
      }, 5000);
    }

    void (async () => {
      try {
        cleanupWatcher = await watch(
          watchedRootPath,
          () => {
            void refreshProjection("Projection refreshed after workspace changes (native watch).");
          },
          { recursive: true, delayMs: 750 },
        );
        setActionStatus("Native workspace watch active.");
      } catch (caughtError) {
        startFingerprintPolling();
        setActionStatus(
          caughtError instanceof Error
            ? `Native watch unavailable. Fingerprint polling active.`
            : "Native watch unavailable. Fingerprint polling active.",
        );
      }
    })();

    return () => {
      isDisposed = true;
      cleanupWatcher?.();
      if (pollingIntervalId) {
        window.clearInterval(pollingIntervalId);
      }
    };
  }, [projection?.rootPath]);

  async function connectWorkspace() {
    setError(null);
    setPendingPreview(null);
    setActionError(null);
    setActionStatus("No action preview generated.");
    setStatus("Waiting for workspace selection...");

    try {
      const rootPath = await openWorkspaceFolder();
      if (!rootPath) {
        setStatus("Workspace selection was cancelled.");
        return;
      }

      setStatus("Scanning workspace...");
      const nextProjection = await hydrateWorkspace(rootPath);
      setStatus(`Workspace loaded: ${nextProjection.workspaceName}`);
    } catch (caughtError) {
      setError(caughtError instanceof Error ? caughtError.message : "Unknown workspace error.");
      setStatus("Workspace load failed.");
    }
  }

  function loadDemo() {
    const nextProjection = buildDemoProjection();
    fingerprintRef.current = null;
    setProjection(nextProjection);
    setSelectedNodeId(nextProjection.brief.recommendedMove?.nodeId ?? nextProjection.nodes[0]?.id ?? null);
    setPendingPreview(null);
    setActionError(null);
    setError(null);
    setActionStatus("Demo mode: writeback is disabled outside the desktop runtime.");
    setStatus("Demo workspace loaded.");
  }

  function buildWritebackRequest(target: WritebackTarget): WritebackRequest | null {
    if (!projection) {
      return null;
    }

    const relevantSignals: ParsedSignal[] =
      selectedSignals.length > 0 ? selectedSignals.slice(0, 3) : projection.signals.slice(0, 3);
    const relevantTasks: ParsedTask[] =
      selectedOpenTasks.length > 0 ? selectedOpenTasks.slice(0, 4) : projection.tasks.filter((task) => task.status === "open").slice(0, 4);
    const recommendedMove = projection.brief.recommendedMove;
    let recommendedReason: string | null;

    if (recommendedMove && recommendedMove.nodeId === selectedNode?.id) {
      recommendedReason = recommendedMove.reason;
    } else if (selectedNode) {
      recommendedReason = `Review ${selectedNode.name} and convert the current tension into one bounded move.`;
    } else {
      recommendedReason = recommendedMove?.reason ?? null;
    }

    return {
      rootPath: projection.rootPath,
      workspaceName: projection.workspaceName,
      target,
      nodeId: selectedNode?.id ?? null,
      nodeName: selectedNode?.name ?? null,
      nodePath: selectedNode?.path ?? null,
      summary: projection.brief.summary,
      reason: recommendedReason,
      tensions: relevantSignals.map((signal) => signal.message),
      topTasks: relevantTasks.map((task) => task.normalizedText),
      waitingCount: projection.brief.waitingCount,
      openSignals: projection.brief.openSignals,
      stalledNodeCount: projection.brief.stalledNodeCount,
      generatedAt: new Date().toISOString(),
    };
  }

  async function handlePreview(target: WritebackTarget) {
    setActionError(null);

    if (!desktopWritebackReady || !projection) {
      setActionStatus("Writeback preview requires the Tauri desktop runtime on a real workspace.");
      return;
    }

    const request = buildWritebackRequest(target);
    if (!request) {
      setActionStatus("Load a workspace before previewing writeback.");
      return;
    }

    setIsPreviewing(true);
    setActionStatus(`Generating ${target === "dashboard" ? "dashboard" : "memory"} preview...`);

    try {
      const preview = await previewWriteback(request);
      const targetDocumentId =
        projection.documents.find((document) => document.path === preview.targetPath)?.id ?? null;

      await logWritebackPreview({
        workspaceRootPath: projection.rootPath,
        nodeId: selectedNode?.id ?? null,
        actionType: `writeback_${target}`,
        actionId: preview.actionId,
        targetDocumentId,
        preview,
      });

      setPendingPreview(preview);
      setActionStatus(`Preview ready for ${preview.targetPath}.`);
    } catch (caughtError) {
      setActionError(caughtError instanceof Error ? caughtError.message : "Preview failed.");
      setActionStatus("Preview failed.");
    } finally {
      setIsPreviewing(false);
    }
  }

  async function handleCommitPreview() {
    if (!projection || !pendingPreview) {
      return;
    }

    setIsCommitting(true);
    setActionError(null);
    setActionStatus(`Committing ${pendingPreview.targetPath}...`);

    try {
      const result = await commitWriteback(projection.rootPath, pendingPreview);
      await markWritebackCommitted(result.actionId);
      await hydrateWorkspace(projection.rootPath);
      setPendingPreview(null);
      setActionStatus(`Committed ${result.targetPath}.`);
    } catch (caughtError) {
      setActionError(caughtError instanceof Error ? caughtError.message : "Commit failed.");
      setActionStatus("Commit failed.");
    } finally {
      setIsCommitting(false);
    }
  }

  return (
    <div className="app-shell">
      <aside className="scope-rail">
        <div>
          <p className="eyebrow">Mara</p>
          <h1>Fractal cockpit</h1>
          <p className="muted">
            Markdown-first, local-first, editor-agnostic.
          </p>
        </div>

        <div className="button-stack">
          <button className="primary" onClick={connectWorkspace} type="button">
            Open workspace
          </button>
          <button className="secondary" onClick={loadDemo} type="button">
            Load demo
          </button>
        </div>

        <div className="status-card">
          <span className="status-label">Status</span>
          <p>{status}</p>
          {error ? <p className="error-text">{error}</p> : null}
        </div>

        {projection ? (
          <div className="node-list">
            <span className="status-label">Nodes</span>
            {projection.nodes.map((node) => (
              <button
                key={node.id}
                className={node.id === selectedNode?.id ? "node-pill active" : "node-pill"}
                onClick={() => setSelectedNodeId(node.id)}
                type="button"
              >
                {nodeLabel(node)}
              </button>
            ))}
          </div>
        ) : null}
      </aside>

      <main className="main-stage">
        {!projection ? (
          <section className="empty-state">
            <p className="eyebrow">Morning Brief</p>
            <h2>Point Mara to a markdown workspace.</h2>
            <p>
              The MVP does not require Obsidian. Mara scans a local markdown folder,
              builds a local projection, and surfaces the first useful next move.
            </p>
          </section>
        ) : (
          <>
            <section className="brief-panel">
              <div>
                <p className="eyebrow">Morning Brief</p>
                <h2>{projection.workspaceName}</h2>
              </div>
              <p className="summary">{projection.brief.summary}</p>
              <div className="metric-grid">
                <article>
                  <span>Signals</span>
                  <strong>{projection.brief.openSignals}</strong>
                </article>
                <article>
                  <span>Waiting</span>
                  <strong>{projection.brief.waitingCount}</strong>
                </article>
                <article>
                  <span>Drift</span>
                  <strong>{projection.brief.stalledNodeCount}</strong>
                </article>
              </div>
              <div className="tension-list">
                {projection.brief.tensions.map((tension) => (
                  <div className="tension-item" key={tension}>
                    {tension}
                  </div>
                ))}
              </div>
            </section>

            <ScoreStage
              documentCount={projection.documents.length}
              nodes={projection.nodes}
              onSelectNode={setSelectedNodeId}
              recommendedNodeId={projection.brief.recommendedMove?.nodeId ?? null}
              selectedNodeId={selectedNode?.id ?? null}
              summary={projection.brief.summary}
              tasks={projection.tasks}
              workspaceName={projection.workspaceName}
              signals={projection.signals}
              tensions={projection.brief.tensions}
            />

            <section className="content-grid">
              <article className="focus-panel">
                <div className="panel-header">
                  <p className="eyebrow">Zoom</p>
                  <h3>{selectedNode ? selectedNode.name : "No node selected"}</h3>
                </div>

                {selectedNode ? (
                  <>
                    <div className="node-meta">
                      <span>{selectedNode.level.toUpperCase()}</span>
                      <span>{selectedNode.source.toUpperCase()}</span>
                      <span>Path {selectedNode.path}</span>
                      <span>Health {selectedNode.healthScore}</span>
                      <span>Drift {selectedNode.driftScore}</span>
                    </div>

                    {selectedNode.originDocumentPath ? (
                      <p className="muted">Origin {selectedNode.originDocumentPath}</p>
                    ) : null}

                    <div className="list-block">
                      <h4>Open tasks</h4>
                      {selectedOpenTasks.length > 0 ? (
                        <ul>
                          {selectedOpenTasks.map((task) => (
                            <li key={task.id}>
                              <strong>{task.taskType}</strong> {task.normalizedText}
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p className="muted">No open tasks extracted for this node yet.</p>
                      )}
                    </div>
                  </>
                ) : (
                  <p className="muted">Select a node to inspect scope.</p>
                )}
              </article>

              <article className="signal-panel">
                <div className="panel-header">
                  <p className="eyebrow">Signals</p>
                  <h3>What needs escalation</h3>
                </div>
                {selectedSignals.length > 0 ? (
                  <ul className="signal-list">
                    {selectedSignals.map((signal) => (
                      <li key={signal.id}>
                        <strong>{signal.signalType}</strong>
                        <span>{signal.message}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="muted">No signals for the current scope.</p>
                )}
              </article>

              <article className="action-panel">
                <div className="panel-header">
                  <p className="eyebrow">Action</p>
                  <h3>Preview-first workflow</h3>
                </div>

                <div className="action-buttons">
                  <button
                    className="secondary"
                    disabled={!desktopWritebackReady || isPreviewing || isCommitting}
                    onClick={() => handlePreview("dashboard")}
                    type="button"
                  >
                    {previewLabel("dashboard")}
                  </button>
                  <button
                    className="secondary"
                    disabled={!desktopWritebackReady || isPreviewing || isCommitting}
                    onClick={() => handlePreview("working_memory")}
                    type="button"
                  >
                    {previewLabel("working_memory")}
                  </button>
                </div>

                {!desktopWritebackReady ? (
                  <p className="muted">
                    Writeback preview is available only in the Tauri desktop runtime on a real workspace.
                  </p>
                ) : null}

                {projection.brief.recommendedMove ? (
                  <div className="recommendation">
                    <span>Recommended move</span>
                    <strong>{projection.brief.recommendedMove.reason}</strong>
                  </div>
                ) : null}

                <div className="action-status-card">
                  <span className="status-label">Action status</span>
                  <p>{actionStatus}</p>
                  {actionError ? <p className="error-text">{actionError}</p> : null}
                </div>

                {pendingPreview ? (
                  <div className="preview-card">
                    <div className="preview-meta">
                      <span>{pendingPreview.targetPath}</span>
                      <span>{pendingPreview.operation}</span>
                    </div>
                    <pre className="preview-markdown">{pendingPreview.content}</pre>
                    <div className="action-buttons">
                      <button
                        className="primary"
                        disabled={isCommitting}
                        onClick={handleCommitPreview}
                        type="button"
                      >
                        Commit preview
                      </button>
                      <button
                        className="secondary"
                        disabled={isCommitting}
                        onClick={() => {
                          setPendingPreview(null);
                          setActionStatus("Preview cleared.");
                          setActionError(null);
                        }}
                        type="button"
                      >
                        Clear preview
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="muted">
                    Generate a bounded preview for `dashboard.md` or `working-memory.md`, then confirm before any write happens.
                  </p>
                )}
              </article>
            </section>

            <section className="diagnostics-panel">
              <div className="panel-header">
                <p className="eyebrow">Diagnostics</p>
                <h3>Projection health</h3>
              </div>

              <div className="diagnostics-metrics">
                <article>
                  <span>Linked workspaces</span>
                  <strong>{projection.diagnostics.linkedWorkspaceCount}</strong>
                  <p>{projection.diagnostics.linkedWorkspacePaths.join(", ") || "None"}</p>
                </article>
                <article>
                  <span>Synthetic projects</span>
                  <strong>{projection.diagnostics.syntheticProjectCount}</strong>
                  <p>{projection.diagnostics.syntheticTaskCount} synthetic tasks from dashboard tables</p>
                </article>
                <article>
                  <span>Routing</span>
                  <strong>{projection.diagnostics.reroutedTaskCount}</strong>
                  <p>{projection.diagnostics.reroutedSignalCount} signal-bearing tasks rerouted</p>
                </article>
                <article>
                  <span>Residual root load</span>
                  <strong>{projection.diagnostics.rootSignalCount}</strong>
                  <p>{projection.diagnostics.unresolvedCentralTaskCount} central tasks still unresolved</p>
                </article>
              </div>

              <div className="diagnostics-grid">
                <article>
                  <h4>Synthetic projects</h4>
                  {projection.diagnostics.syntheticProjects.length > 0 ? (
                    <ul className="signal-list">
                      {projection.diagnostics.syntheticProjects.slice(0, 6).map((item) => (
                        <li key={`${item.sourceDocumentPath}:${item.name}`}>
                          <strong>{item.name}</strong>
                          <span>{item.createdNodeId ? "Created synthetic node" : `Matched ${item.matchedNodeName}`}</span>
                          <span>{item.sourceDocumentPath}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="muted">No synthetic project rows were needed.</p>
                  )}
                </article>

                <article>
                  <h4>Task routing</h4>
                  {projection.diagnostics.reroutedTasks.length > 0 ? (
                    <ul className="signal-list">
                      {projection.diagnostics.reroutedTasks.map((item) => (
                        <li key={`${item.fromNodeName}:${item.toNodeName}:${item.text}`}>
                          <strong>{item.toNodeName}</strong>
                          <span>{item.text}</span>
                          <span>{item.fromNodeName} -&gt; {item.toNodeName}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="muted">No central tasks required rerouting.</p>
                  )}
                </article>

                <article>
                  <h4>Still unresolved</h4>
                  {projection.diagnostics.unroutedCentralTasks.length > 0 ? (
                    <ul className="signal-list">
                      {projection.diagnostics.unroutedCentralTasks.map((item) => (
                        <li key={item}>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="muted">No unresolved central tasks sampled.</p>
                  )}
                </article>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}
