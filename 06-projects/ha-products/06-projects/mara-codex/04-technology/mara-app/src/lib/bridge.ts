import { invoke } from "@tauri-apps/api/core";
import { open } from "@tauri-apps/plugin-dialog";
import type {
  WorkspaceFingerprint,
  WritebackCommitResult,
  WritebackPreview,
  WritebackRequest,
  WorkspaceScan,
} from "./types";

export function isTauriRuntime(): boolean {
  return typeof window !== "undefined" && "__TAURI_INTERNALS__" in window;
}

export async function openWorkspaceFolder(): Promise<string | null> {
  if (!isTauriRuntime()) {
    return null;
  }

  const selected = await open({
    directory: true,
    multiple: false,
    title: "Open markdown workspace",
  });

  if (typeof selected !== "string") {
    return null;
  }

  return selected;
}

export async function scanWorkspace(rootPath: string): Promise<WorkspaceScan> {
  return invoke<WorkspaceScan>("scan_workspace", { rootPath });
}

export async function getWorkspaceFingerprint(rootPath: string): Promise<WorkspaceFingerprint> {
  return invoke<WorkspaceFingerprint>("workspace_fingerprint", { rootPath });
}

export async function previewWriteback(request: WritebackRequest): Promise<WritebackPreview> {
  return invoke<WritebackPreview>("preview_writeback", { request });
}

export async function commitWriteback(rootPath: string, preview: WritebackPreview): Promise<WritebackCommitResult> {
  return invoke<WritebackCommitResult>("commit_writeback", { rootPath, preview });
}
