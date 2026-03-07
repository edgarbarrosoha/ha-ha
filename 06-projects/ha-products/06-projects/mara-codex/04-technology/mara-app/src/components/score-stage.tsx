import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type WheelEvent as ReactWheelEvent,
} from "react";
import type { MaraNode, ParsedSignal, ParsedTask } from "../lib/types";

const DIMENSIONS = [
  { key: "01", label: "Legacy", path: "01-legacy" },
  { key: "02", label: "Community", path: "02-community" },
  { key: "03", label: "Learning", path: "03-learning" },
  { key: "04", label: "Technology", path: "04-technology" },
  { key: "05", label: "Context", path: "05-context" },
  { key: "06", label: "Projects", path: "06-projects" },
] as const;

const ROOT_X = 240;
const ROOT_Y = 156;
const VAULT_X = 610;
const PROJECT_X_START = 1020;
const PROJECT_GAP = 220;
const LANE_Y_START = 248;
const LANE_STEP = 136;
const LANE_HEIGHT = 108;
const CANVAS_HEIGHT = 1180;
const MIN_SCALE = 0.32;
const MAX_SCALE = 4.2;
const DEFAULT_VISIBLE_PROJECTS = 8;
const MAX_VISIBLE_PROJECTS = 12;

const DIMENSION_SHADE: Record<string, string> = {
  "01": "#111111",
  "02": "#303030",
  "03": "#535353",
  "04": "#707070",
  "05": "#8f8f8f",
  "06": "#adadad",
};

interface ScoreStageProps {
  workspaceName: string;
  summary: string;
  documentCount: number;
  nodes: MaraNode[];
  tasks: ParsedTask[];
  signals: ParsedSignal[];
  selectedNodeId: string | null;
  recommendedNodeId: string | null;
  tensions: string[];
  onSelectNode: (nodeId: string) => void;
}

interface PositionedNode {
  node: MaraNode;
  x: number;
  y: number;
  dimensionKey: string;
  openTaskCount: number;
  signalCount: number;
  priorityScore: number;
}

interface PositionedSignal {
  signal: ParsedSignal;
  x: number;
  y: number;
  source: PositionedNode;
  target: PositionedNode | null;
}

interface TooltipState {
  node: PositionedNode;
  left: number;
  top: number;
}

interface ViewState {
  scale: number;
  tx: number;
  ty: number;
}

interface LayoutModel {
  rootNode: MaraNode | null;
  canvasWidth: number;
  positionedNodes: PositionedNode[];
  positionedSignals: PositionedSignal[];
  selectedNode: PositionedNode | null;
  activeNodeIds: Set<string> | null;
  activeSignalIds: Set<string> | null;
  promotedCount: number;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

function truncate(value: string, maxLength: number): string {
  return value.length <= maxLength ? value : `${value.slice(0, maxLength - 1)}…`;
}

function dimensionKeyForNode(node: MaraNode): string {
  const topLevel = node.path.split("/").filter(Boolean)[0];
  if (topLevel) {
    const found = DIMENSIONS.find((dimension) => dimension.path === topLevel);
    if (found) {
      return found.key;
    }
  }

  if (node.level === "root") {
    return "04";
  }

  return "06";
}

function laneYForDimension(key: string): number {
  const index = DIMENSIONS.findIndex((dimension) => dimension.key === key);
  return LANE_Y_START + Math.max(index, 0) * LANE_STEP;
}

function signalOffset(index: number, total: number): number {
  return (index - (total - 1) / 2) * 36;
}

function projectPriority(
  node: MaraNode,
  openTaskCount: number,
  signalCount: number,
  recommendedNodeId: string | null,
): number {
  return (
    node.driftScore * 1.8 +
    openTaskCount * 14 +
    signalCount * 22 +
    (recommendedNodeId === node.id ? 70 : 0)
  );
}

function nodeMark(entry: PositionedNode): {
  radius: number;
  fill: string;
  stroke: string;
  strokeWidth: number;
} {
  if (entry.node.level === "vault") {
    const shade = DIMENSION_SHADE[entry.dimensionKey] ?? "#666666";
    return {
      radius: 8,
      fill: "#ffffff",
      stroke: shade,
      strokeWidth: 1.5,
    };
  }

  if (entry.priorityScore >= 180) {
    return { radius: 10, fill: "#111111", stroke: "#111111", strokeWidth: 1 };
  }
  if (entry.priorityScore >= 95) {
    return { radius: 8, fill: "#ffffff", stroke: "#111111", strokeWidth: 1.5 };
  }
  return { radius: 6, fill: "#7e7e7e", stroke: "#7e7e7e", strokeWidth: 1 };
}

export function ScoreStage({
  workspaceName,
  summary,
  documentCount,
  nodes,
  tasks,
  signals,
  selectedNodeId,
  recommendedNodeId,
  tensions,
  onSelectNode,
}: ScoreStageProps) {
  const shellRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const dragRef = useRef<{
    startX: number;
    startY: number;
    originTx: number;
    originTy: number;
  } | null>(null);
  const suppressClickRef = useRef(false);
  const [isDragging, setIsDragging] = useState(false);
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);
  const [view, setView] = useState<ViewState>({ scale: 1, tx: 0, ty: 0 });

  const layout = useMemo<LayoutModel>(() => {
    const rootNode = nodes.find((node) => node.level === "root") ?? null;
    const vaultNodes = nodes.filter((node) => node.level === "vault");
    const projectNodes = nodes.filter((node) => node.level === "project");
    const openTaskCounts = new Map<string, number>();
    const signalCounts = new Map<string, number>();

    tasks.forEach((task) => {
      if (task.status !== "open") {
        return;
      }
      openTaskCounts.set(task.nodeId, (openTaskCounts.get(task.nodeId) ?? 0) + 1);
    });

    signals.forEach((signal) => {
      signalCounts.set(signal.sourceNodeId, (signalCounts.get(signal.sourceNodeId) ?? 0) + 1);
      signalCounts.set(signal.targetNodeId, (signalCounts.get(signal.targetNodeId) ?? 0) + 1);
    });

    const rankedProjects = projectNodes
      .map((node) => ({
        node,
        score: projectPriority(
          node,
          openTaskCounts.get(node.id) ?? 0,
          signalCounts.get(node.id) ?? 0,
          recommendedNodeId,
        ),
      }))
      .sort((left, right) => right.score - left.score || left.node.name.localeCompare(right.node.name));

    const visibleProjectIds = new Set(rankedProjects.slice(0, DEFAULT_VISIBLE_PROJECTS).map((entry) => entry.node.id));

    signals
      .slice()
      .sort((left, right) => right.priority - left.priority)
      .forEach((signal) => {
        if (visibleProjectIds.size >= MAX_VISIBLE_PROJECTS) {
          return;
        }

        [signal.sourceNodeId, signal.targetNodeId].forEach((nodeId) => {
          const projectNode = projectNodes.find((node) => node.id === nodeId);
          if (projectNode && visibleProjectIds.size < MAX_VISIBLE_PROJECTS) {
            visibleProjectIds.add(projectNode.id);
          }
        });
      });

    const selectedProject = projectNodes.find((node) => node.id === selectedNodeId);
    if (selectedProject) {
      visibleProjectIds.add(selectedProject.id);
    }

    const visibleProjects = rankedProjects
      .filter((entry) => visibleProjectIds.has(entry.node.id))
      .map((entry) => entry.node);

    const projectsByDimension = new Map<string, MaraNode[]>();
    visibleProjects.forEach((node) => {
      const key = dimensionKeyForNode(node);
      const current = projectsByDimension.get(key) ?? [];
      current.push(node);
      projectsByDimension.set(key, current);
    });

    const maxProjectsPerLane = Math.max(1, ...Array.from(projectsByDimension.values(), (entries) => entries.length));
    const canvasWidth = Math.max(1960, 1500 + Math.max(0, maxProjectsPerLane - 1) * PROJECT_GAP + 360);
    const signalX = canvasWidth - 220;
    const positions = new Map<string, PositionedNode>();

    if (rootNode) {
      positions.set(rootNode.id, {
        node: rootNode,
        x: ROOT_X,
        y: ROOT_Y,
        dimensionKey: dimensionKeyForNode(rootNode),
        openTaskCount: openTaskCounts.get(rootNode.id) ?? 0,
        signalCount: signalCounts.get(rootNode.id) ?? 0,
        priorityScore: 0,
      });
    }

    vaultNodes.forEach((node) => {
      const dimensionKey = dimensionKeyForNode(node);
      positions.set(node.id, {
        node,
        x: VAULT_X,
        y: laneYForDimension(dimensionKey),
        dimensionKey,
        openTaskCount: openTaskCounts.get(node.id) ?? 0,
        signalCount: signalCounts.get(node.id) ?? 0,
        priorityScore: 0,
      });
    });

    projectsByDimension.forEach((projectList, dimensionKey) => {
      projectList
        .slice()
        .sort((left, right) => {
          const leftScore = projectPriority(
            left,
            openTaskCounts.get(left.id) ?? 0,
            signalCounts.get(left.id) ?? 0,
            recommendedNodeId,
          );
          const rightScore = projectPriority(
            right,
            openTaskCounts.get(right.id) ?? 0,
            signalCounts.get(right.id) ?? 0,
            recommendedNodeId,
          );
          return rightScore - leftScore || left.name.localeCompare(right.name);
        })
        .forEach((node, index) => {
          positions.set(node.id, {
            node,
            x: PROJECT_X_START + index * PROJECT_GAP,
            y: laneYForDimension(dimensionKey),
            dimensionKey,
            openTaskCount: openTaskCounts.get(node.id) ?? 0,
            signalCount: signalCounts.get(node.id) ?? 0,
            priorityScore: projectPriority(
              node,
              openTaskCounts.get(node.id) ?? 0,
              signalCounts.get(node.id) ?? 0,
              recommendedNodeId,
            ),
          });
        });
    });

    const positionedSignalsByDimension = new Map<
      string,
      Array<{ signal: ParsedSignal; source: PositionedNode; target: PositionedNode | null }>
    >();

    signals
      .slice()
      .sort((left, right) => right.priority - left.priority)
      .forEach((signal) => {
        const source = positions.get(signal.sourceNodeId) ?? positions.get(signal.targetNodeId);
        const target = positions.get(signal.targetNodeId) ?? null;
        if (!source || source.node.level === "root") {
          return;
        }

        const bucket = positionedSignalsByDimension.get(source.dimensionKey) ?? [];
        if (bucket.length >= 3) {
          return;
        }
        bucket.push({ signal, source, target });
        positionedSignalsByDimension.set(source.dimensionKey, bucket);
      });

    const positionedSignals: PositionedSignal[] = [];
    positionedSignalsByDimension.forEach((bucket, dimensionKey) => {
      bucket.forEach(({ signal, source, target }, index) => {
        positionedSignals.push({
          signal,
          source,
          target,
          x: signalX,
          y: laneYForDimension(dimensionKey) + signalOffset(index, bucket.length),
        });
      });
    });

    const positionedNodes = Array.from(positions.values()).sort((left, right) => {
      if (left.node.level === "root") {
        return -1;
      }
      if (right.node.level === "root") {
        return 1;
      }
      return left.x - right.x;
    });

    const selectedNode = selectedNodeId ? positions.get(selectedNodeId) ?? null : null;

    if (!selectedNode || selectedNode.node.level === "root") {
      return {
        rootNode,
        canvasWidth,
        positionedNodes,
        positionedSignals,
        selectedNode,
        activeNodeIds: null,
        activeSignalIds: null,
        promotedCount: visibleProjects.length,
      };
    }

    const activeNodeIds = new Set<string>([selectedNode.node.id]);
    const activeSignalIds = new Set<string>();

    if (selectedNode.node.parentId) {
      activeNodeIds.add(selectedNode.node.parentId);
    }

    positionedNodes.forEach((entry) => {
      if (entry.node.parentId === selectedNode.node.id) {
        activeNodeIds.add(entry.node.id);
      }
    });

    positionedSignals.forEach((entry) => {
      if (
        entry.signal.sourceNodeId === selectedNode.node.id ||
        entry.signal.targetNodeId === selectedNode.node.id ||
        entry.source.node.id === selectedNode.node.id ||
        entry.target?.node.id === selectedNode.node.id
      ) {
        activeSignalIds.add(entry.signal.id);
        activeNodeIds.add(entry.source.node.id);
        if (entry.target) {
          activeNodeIds.add(entry.target.node.id);
        }
      }
    });

    return {
      rootNode,
      canvasWidth,
      positionedNodes,
      positionedSignals,
      selectedNode,
      activeNodeIds,
      activeSignalIds,
      promotedCount: visibleProjects.length,
    };
  }, [nodes, tasks, signals, selectedNodeId, recommendedNodeId]);

  const fitToStage = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) {
      return;
    }

    const padding = 56;
    const nextScale = Math.min(
      (viewport.clientWidth - padding * 2) / layout.canvasWidth,
      (viewport.clientHeight - padding * 2) / CANVAS_HEIGHT,
    );

    const scale = clamp(Number.isFinite(nextScale) ? nextScale : 1, MIN_SCALE, 1);
    const tx = (viewport.clientWidth - layout.canvasWidth * scale) / 2;
    const ty = (viewport.clientHeight - CANVAS_HEIGHT * scale) / 2;
    setView({ scale, tx, ty });
  }, [layout.canvasWidth]);

  useEffect(() => {
    fitToStage();
  }, [fitToStage, layout.canvasWidth, nodes.length, signals.length]);

  useEffect(() => {
    const handleResize = () => fitToStage();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [fitToStage]);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (!dragRef.current) {
        return;
      }

      const dx = event.clientX - dragRef.current.startX;
      const dy = event.clientY - dragRef.current.startY;
      if (Math.abs(dx) + Math.abs(dy) > 3) {
        suppressClickRef.current = true;
      }

      setView((current) => ({
        ...current,
        tx: (dragRef.current?.originTx ?? current.tx) + dx,
        ty: (dragRef.current?.originTy ?? current.ty) + dy,
      }));
    };

    const handleMouseUp = () => {
      dragRef.current = null;
      setIsDragging(false);
      window.setTimeout(() => {
        suppressClickRef.current = false;
      }, 0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const updateTooltipPosition = useCallback((node: PositionedNode, clientX: number, clientY: number) => {
    const shell = shellRef.current;
    if (!shell) {
      return;
    }

    const rect = shell.getBoundingClientRect();
    const left = clamp(clientX - rect.left + 16, 16, rect.width - 316);
    const top = clamp(clientY - rect.top - 10, 20, rect.height - 180);
    setTooltip({ node, left, top });
  }, []);

  const handleWheel = useCallback(
    (event: ReactWheelEvent<HTMLDivElement>) => {
      event.preventDefault();
      const viewport = viewportRef.current;
      if (!viewport) {
        return;
      }

      const rect = viewport.getBoundingClientRect();
      const mx = event.clientX - rect.left;
      const my = event.clientY - rect.top;
      setView((current) => {
        const nextScale = clamp(current.scale * (event.deltaY > 0 ? 0.92 : 1.08), MIN_SCALE, MAX_SCALE);
        return {
          scale: nextScale,
          tx: mx - ((mx - current.tx) * nextScale) / current.scale,
          ty: my - ((my - current.ty) * nextScale) / current.scale,
        };
      });
    },
    [],
  );

  const handleMouseDown = useCallback((event: ReactMouseEvent<HTMLDivElement>) => {
    if (event.button !== 0) {
      return;
    }

    event.preventDefault();
    dragRef.current = {
      startX: event.clientX,
      startY: event.clientY,
      originTx: view.tx,
      originTy: view.ty,
    };
    setIsDragging(true);
  }, [view.tx, view.ty]);

  const handleNodeClick = useCallback(
    (nodeId: string) => {
      if (suppressClickRef.current) {
        return;
      }
      onSelectNode(nodeId);
    },
    [onSelectNode],
  );

  const stats = `${documentCount} files · ${nodes.length} nodes · ${signals.length} signals · ${layout.promotedCount} promoted fronts`;

  return (
    <section className="score-stage">
      <div className="score-stage-shell" ref={shellRef}>
        <div className="score-header-panel">
          <h3>Mara Score</h3>
          <div className="score-workspace">{workspaceName}</div>
          <div className="score-instructions">Scroll to zoom · Drag to pan · Hover for scope · Click to zoom</div>
          <div className="score-stage-stats">{stats}</div>
        </div>

        <div className="score-controls" aria-label="Canvas controls">
          <button className="score-control" onClick={() => setView((current) => ({ ...current, scale: clamp(current.scale * 1.22, MIN_SCALE, MAX_SCALE) }))} type="button">
            +
          </button>
          <button className="score-control" onClick={() => setView((current) => ({ ...current, scale: clamp(current.scale * 0.82, MIN_SCALE, MAX_SCALE) }))} type="button">
            −
          </button>
          <button className="score-control score-control-fit" onClick={fitToStage} type="button">
            Fit
          </button>
        </div>

        {tooltip ? (
          <div className="score-tooltip" style={{ left: `${tooltip.left}px`, top: `${tooltip.top}px` }}>
            <div className="tt-title">{tooltip.node.node.name}</div>
            <div className="tt-meta">
              {tooltip.node.node.level.toUpperCase()} · Drift {tooltip.node.node.driftScore} · Health {tooltip.node.node.healthScore}
            </div>
            <div className="tt-desc">{truncate(tooltip.node.node.path, 86)}</div>
            <div className="tt-files">
              {tooltip.node.openTaskCount} open tasks · {tooltip.node.signalCount} active signals
            </div>
          </div>
        ) : null}

        <div
          className={`score-viewport${isDragging ? " dragging" : ""}`}
          onMouseDown={handleMouseDown}
          onWheel={handleWheel}
          ref={viewportRef}
        >
          <svg className="score-canvas" role="img" viewBox={`0 0 ${layout.canvasWidth} ${CANVAS_HEIGHT}`}>
            <g transform={`translate(${view.tx} ${view.ty}) scale(${view.scale})`}>
              <rect
                fill="#ffffff"
                height={CANVAS_HEIGHT}
                onClick={() => layout.rootNode && handleNodeClick(layout.rootNode.id)}
                width={layout.canvasWidth}
                x="0"
                y="0"
              />

              {[
                { x1: 110, x2: 410, title: "Root", subtitle: "Morning brief" },
                { x1: 470, x2: 760, title: "Vaults", subtitle: "Six dimensions" },
                { x1: 860, x2: layout.canvasWidth - 360, title: "Projects", subtitle: "Promoted fronts" },
                { x1: layout.canvasWidth - 310, x2: layout.canvasWidth - 90, title: "Signals", subtitle: "Escalations" },
              ].map((band, index) => (
                <g key={band.title}>
                  {index % 2 === 0 ? (
                    <rect
                      fill="#fafafa"
                      height={660}
                      rx={8}
                      width={band.x2 - band.x1}
                      x={band.x1}
                      y={96}
                    />
                  ) : null}
                  <text
                    fill="#111111"
                    fontFamily="Georgia, serif"
                    fontSize="15"
                    fontWeight="700"
                    x={band.x1 + 12}
                    y="62"
                  >
                    {band.title}
                  </text>
                  <text fill="#b0b0b0" fontSize="10" letterSpacing="0.8" x={band.x1 + 12} y="81">
                    {band.subtitle}
                  </text>
                </g>
              ))}

              <text fill="#7d7d7d" fontFamily="Georgia, serif" fontSize="11" fontStyle="italic" x="138" y="1060">
                Brief
              </text>
              <line stroke="#ececec" strokeDasharray="6,8" strokeWidth="1" x1="138" x2={layout.canvasWidth - 90} y1="1078" y2="1078" />
              <text fill="#5b5b5b" fontSize="12" x="138" y="1110">
                {truncate(summary, 180)}
              </text>

              <g>
                <rect
                  fill="#ffffff"
                  height="122"
                  rx="10"
                  stroke={selectedNodeId === layout.rootNode?.id ? "#111111" : "#e6e6e6"}
                  strokeWidth={selectedNodeId === layout.rootNode?.id ? "1.5" : "1"}
                  width="184"
                  x="146"
                  y="118"
                />
                <text fill="#b1b1b1" fontSize="10" letterSpacing="1" x="164" y="145">
                  ROOT
                </text>
                <text fill="#111111" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" x="164" y="174">
                  Mara
                </text>
                <text fill="#4f4f4f" fontSize="11" x="164" y="198">
                  {truncate(workspaceName, 24)}
                </text>
                <text fill="#929292" fontSize="10" x="164" y="220">
                  {truncate(layout.selectedNode?.node.name ?? "Workspace overview", 28)}
                </text>
              </g>

              {DIMENSIONS.map((dimension, index) => {
                const y = laneYForDimension(dimension.key);
                return (
                  <g key={dimension.key}>
                    {index % 2 === 1 ? (
                      <rect
                        fill="#fcfcfc"
                        height={LANE_HEIGHT}
                        width={layout.canvasWidth - 228}
                        x="118"
                        y={y - LANE_HEIGHT / 2}
                      />
                    ) : null}
                    <line stroke="#efefef" strokeWidth="1" x1="130" x2={layout.canvasWidth - 92} y1={y} y2={y} />
                    <text
                      fill="#333333"
                      fontFamily="Georgia, serif"
                      fontSize="12"
                      fontWeight="700"
                      textAnchor="end"
                      x="108"
                      y={y - 7}
                    >
                      {dimension.label}
                    </text>
                    <text fill="#cbcbcb" fontSize="8" textAnchor="end" x="108" y={y + 12}>
                      {dimension.key}
                    </text>
                  </g>
                );
              })}

              {layout.positionedNodes
                .filter((entry) => entry.node.level === "vault")
                .map((entry) => {
                  const fade = Boolean(layout.activeNodeIds && !layout.activeNodeIds.has(entry.node.id));
                  return (
                    <path
                      d={`M ${ROOT_X + 92} ${ROOT_Y + 4} C 410 ${ROOT_Y + 4}, 470 ${entry.y}, ${entry.x - 18} ${entry.y}`}
                      fill="none"
                      key={`root-${entry.node.id}`}
                      opacity={fade ? 0.08 : 1}
                      stroke="#ececec"
                      strokeWidth="1"
                    />
                  );
                })}

              {layout.positionedNodes
                .filter((entry) => entry.node.level === "project")
                .map((entry) => {
                  const fade = Boolean(layout.activeNodeIds && !layout.activeNodeIds.has(entry.node.id));
                  const parent = layout.positionedNodes.find((candidate) => candidate.node.id === entry.node.parentId);
                  if (!parent) {
                    return null;
                  }
                  return (
                    <path
                      d={`M ${parent.x + 12} ${parent.y} Q ${(parent.x + entry.x) / 2} ${entry.y - 24} ${entry.x - 12} ${entry.y}`}
                      fill="none"
                      key={`vault-${entry.node.id}`}
                      opacity={fade ? 0.08 : 1}
                      stroke="#efefef"
                      strokeWidth="0.9"
                    />
                  );
                })}

              {layout.positionedSignals.map((entry) => {
                const isActive = !layout.activeSignalIds || layout.activeSignalIds.has(entry.signal.id);
                return (
                  <g key={entry.signal.id} opacity={isActive ? 1 : 0.08}>
                    <path
                      d={`M ${entry.source.x + 12} ${entry.source.y} C ${entry.source.x + 180} ${entry.source.y}, ${entry.x - 180} ${entry.y}, ${entry.x - 16} ${entry.y}`}
                      fill="none"
                      stroke="#cfcfcf"
                      strokeDasharray="3,3"
                      strokeWidth="0.95"
                    />
                    <rect
                      fill="#ffffff"
                      height="44"
                      rx="8"
                      stroke="#e6e6e6"
                      width="182"
                      x={entry.x - 91}
                      y={entry.y - 22}
                    />
                    <text fill="#a0a0a0" fontSize="9" letterSpacing="0.8" x={entry.x - 77} y={entry.y - 5}>
                      {entry.signal.signalType.toUpperCase()}
                    </text>
                    <text fill="#333333" fontSize="10" x={entry.x - 77} y={entry.y + 12}>
                      {truncate(entry.signal.message, 36)}
                    </text>
                  </g>
                );
              })}

              {layout.positionedNodes
                .filter((entry) => entry.node.level !== "root")
                .map((entry) => {
                  const mark = nodeMark(entry);
                  const isSelected = selectedNodeId === entry.node.id;
                  const isRecommended = recommendedNodeId === entry.node.id;
                  const isActive = !layout.activeNodeIds || layout.activeNodeIds.has(entry.node.id);
                  const labelX = entry.x + mark.radius + 10;

                  return (
                    <g
                      key={entry.node.id}
                      onClick={() => handleNodeClick(entry.node.id)}
                      onMouseEnter={(event) => updateTooltipPosition(entry, event.clientX, event.clientY)}
                      onMouseLeave={() => setTooltip(null)}
                      onMouseMove={(event) => updateTooltipPosition(entry, event.clientX, event.clientY)}
                      opacity={isActive ? 1 : 0.13}
                      style={{ cursor: "pointer" }}
                    >
                      {isSelected || isRecommended ? (
                        <circle
                          cx={entry.x}
                          cy={entry.y}
                          fill="none"
                          r={mark.radius + 7}
                          stroke={isSelected ? "#111111" : "#dddddd"}
                          strokeWidth={isSelected ? 1.3 : 1}
                        />
                      ) : null}
                      <circle
                        cx={entry.x}
                        cy={entry.y}
                        fill={mark.fill}
                        r={mark.radius}
                        stroke={mark.stroke}
                        strokeWidth={mark.strokeWidth}
                      />
                      <text fill="#b8b8b8" fontSize="7.5" letterSpacing="0.7" x={labelX} y={entry.y - 6}>
                        {entry.node.level.toUpperCase()}
                      </text>
                      <text
                        fill={entry.priorityScore >= 180 ? "#111111" : "#4c4c4c"}
                        fontSize={entry.node.level === "vault" ? 11 : 9.5}
                        fontWeight={entry.priorityScore >= 180 || entry.node.level === "vault" ? 700 : 400}
                        x={labelX}
                        y={entry.y + 6}
                      >
                        {truncate(entry.node.name, entry.node.level === "vault" ? 22 : 20)}
                      </text>
                      <text fill="#b2b2b2" fontSize="6.8" x={labelX} y={entry.y + 20}>
                        {entry.openTaskCount > 0 || entry.signalCount > 0
                          ? `${entry.openTaskCount} tasks · ${entry.signalCount} signals`
                          : truncate(entry.node.path, 34)}
                      </text>
                    </g>
                  );
                })}

              <g>
                <text fill="#b5b5b5" fontFamily="Georgia, serif" fontSize="10" fontStyle="italic" x="140" y="972">
                  Reflections
                </text>
                <line stroke="#efefef" strokeDasharray="5,7" strokeWidth="1" x1="140" x2={layout.canvasWidth - 92} y1="990" y2="990" />
                {tensions.slice(0, 3).map((tension, index) => {
                  const x = 320 + index * 380;
                  return (
                    <g key={tension}>
                      <rect fill="#ffffff" height="74" rx="6" stroke="#ededed" width="252" x={x - 126} y="1016" />
                      <text fill="#868686" fontSize="9" fontStyle="italic" textAnchor="middle" x={x} y="1058">
                        {truncate(tension, 72)}
                      </text>
                    </g>
                  );
                })}
              </g>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}
