#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use serde::{Deserialize, Serialize};
use std::collections::hash_map::DefaultHasher;
use std::fs;
use std::hash::{Hash, Hasher};
use std::path::{Path, PathBuf};
use std::time::{SystemTime, UNIX_EPOCH};
use walkdir::{DirEntry, WalkDir};

const IGNORED_DIRS: [&str; 6] = [".git", ".obsidian", "node_modules", "__pycache__", "dist", "target"];
const DASHBOARD_PATH: &str = "06-projects/dashboard.md";
const WORKING_MEMORY_PATH: &str = "00-ha-eb-root/agent_memory/working-memory.md";
const DASHBOARD_START: &str = "<!-- MARA:START dashboard-brief -->";
const DASHBOARD_END: &str = "<!-- MARA:END dashboard-brief -->";
const WORKING_MEMORY_START: &str = "<!-- MARA:START working-memory-sync -->";
const WORKING_MEMORY_END: &str = "<!-- MARA:END working-memory-sync -->";

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct WorkspaceDocument {
    path: String,
    content: String,
    modified_at_ms: u64,
    created_at_ms: u64,
    size_bytes: u64,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct WorkspaceScan {
    root_path: String,
    documents: Vec<WorkspaceDocument>,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct WorkspaceFingerprint {
    revision: String,
    document_count: usize,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct WritebackRequest {
    root_path: String,
    workspace_name: String,
    target: String,
    node_id: Option<String>,
    node_name: Option<String>,
    node_path: Option<String>,
    summary: String,
    reason: Option<String>,
    tensions: Vec<String>,
    top_tasks: Vec<String>,
    waiting_count: usize,
    open_signals: usize,
    stalled_node_count: usize,
    generated_at: String,
}

#[derive(Serialize, Deserialize, Clone)]
#[serde(rename_all = "camelCase")]
struct WritebackPreview {
    action_id: String,
    target: String,
    target_path: String,
    operation: String,
    content: String,
}

#[derive(Serialize)]
#[serde(rename_all = "camelCase")]
struct WritebackCommitResult {
    action_id: String,
    target: String,
    target_path: String,
    committed_at_ms: u64,
}

fn system_time_to_millis(value: Result<SystemTime, std::io::Error>) -> u64 {
    value
        .ok()
        .and_then(|time| time.duration_since(UNIX_EPOCH).ok())
        .map(|duration| duration.as_millis() as u64)
        .unwrap_or_default()
}

fn should_descend(entry: &DirEntry) -> bool {
    if !entry.file_type().is_dir() {
        return true;
    }

    let name = entry.file_name().to_string_lossy();

    if name.starts_with('.') && name != "." {
        return false;
    }

    !IGNORED_DIRS.iter().any(|ignored| *ignored == name)
}

fn relative_path(root: &Path, path: &Path) -> String {
    path.strip_prefix(root)
        .unwrap_or(path)
        .to_string_lossy()
        .replace('\\', "/")
}

fn markdown_entries(root: &Path) -> Result<Vec<(String, u64, u64)>, String> {
    let mut entries: Vec<(String, u64, u64)> = Vec::new();

    for entry in WalkDir::new(root)
        .follow_links(true)
        .into_iter()
        .filter_entry(|entry| should_descend(entry))
    {
        let entry = match entry {
            Ok(entry) => entry,
            Err(error) if error.loop_ancestor().is_some() => continue,
            Err(error) => return Err(error.to_string()),
        };
        if !entry.file_type().is_file() {
            continue;
        }

        let path = entry.path();
        let is_markdown = path
            .extension()
            .and_then(|extension| extension.to_str())
            .map(|extension| extension.eq_ignore_ascii_case("md"))
            .unwrap_or(false);

        if !is_markdown {
            continue;
        }

        let metadata = fs::metadata(path).map_err(|error| error.to_string())?;
        entries.push((
            relative_path(root, path),
            system_time_to_millis(metadata.modified()),
            metadata.len(),
        ));
    }

    entries.sort_by(|left, right| left.0.cmp(&right.0));
    Ok(entries)
}

fn validate_workspace_root(root_path: &str) -> Result<PathBuf, String> {
    let root = PathBuf::from(root_path);
    if !root.exists() {
        return Err(format!("Workspace path does not exist: {}", root_path));
    }

    if !root.is_dir() {
        return Err(format!("Workspace path is not a directory: {}", root_path));
    }

    Ok(root)
}

fn sanitize_inline(value: &str) -> String {
    value
        .split_whitespace()
        .collect::<Vec<_>>()
        .join(" ")
        .trim()
        .to_string()
}

fn bullet_list(items: &[String], fallback: &str) -> String {
    let lines: Vec<String> = items
        .iter()
        .map(|item| sanitize_inline(item))
        .filter(|item| !item.is_empty())
        .take(4)
        .map(|item| format!("- {}", item))
        .collect();

    if lines.is_empty() {
        format!("- {}", fallback)
    } else {
        lines.join("\n")
    }
}

fn relative_target_path(target: &str) -> Result<&'static str, String> {
    match target {
        "dashboard" => Ok(DASHBOARD_PATH),
        "working_memory" => Ok(WORKING_MEMORY_PATH),
        _ => Err(format!("Unsupported writeback target: {}", target)),
    }
}

fn target_contract(target: &str) -> Result<(&'static str, &'static str, Option<&'static str>), String> {
    match target {
        "dashboard" => Ok((DASHBOARD_START, DASHBOARD_END, None)),
        "working_memory" => Ok((WORKING_MEMORY_START, WORKING_MEMORY_END, Some("## Sessions"))),
        _ => Err(format!("Unsupported writeback target: {}", target)),
    }
}

fn focus_label(request: &WritebackRequest) -> String {
    request
        .node_name
        .as_ref()
        .map(|value| sanitize_inline(value))
        .filter(|value| !value.is_empty())
        .unwrap_or_else(|| sanitize_inline(&request.workspace_name))
}

fn scope_label(request: &WritebackRequest) -> String {
    request
        .node_path
        .as_ref()
        .map(|value| sanitize_inline(value))
        .filter(|value| !value.is_empty())
        .unwrap_or_else(|| ".".to_string())
}

fn build_dashboard_block(request: &WritebackRequest) -> String {
    let focus = focus_label(request);
    let reason = request
        .reason
        .as_ref()
        .map(|value| sanitize_inline(value))
        .filter(|value| !value.is_empty())
        .unwrap_or_else(|| "Review the highest-load scope and decide the next bounded move.".to_string());
    let tensions = bullet_list(&request.tensions, "No dominant tension extracted yet.");
    let queue = bullet_list(&request.top_tasks, "No open task extracted for the current focus.");

    format!(
        "{start}\n## Mara Brief\n\n_Updated {generated_at}_\n\n- Recommended focus: **{focus}**\n- Scope: `{scope}`\n- Why now: {reason}\n- Signals: {open_signals}\n- Waiting items: {waiting_count}\n- Drifting nodes: {stalled_node_count}\n\n### Summary\n{summary}\n\n### Tensions\n{tensions}\n\n### Focus Queue\n{queue}\n{end}",
        start = DASHBOARD_START,
        end = DASHBOARD_END,
        generated_at = sanitize_inline(&request.generated_at),
        focus = focus,
        scope = scope_label(request),
        reason = reason,
        open_signals = request.open_signals,
        waiting_count = request.waiting_count,
        stalled_node_count = request.stalled_node_count,
        summary = sanitize_inline(&request.summary),
        tensions = tensions,
        queue = queue,
    )
}

fn build_working_memory_block(request: &WritebackRequest) -> String {
    let focus = focus_label(request);
    let reason = request
        .reason
        .as_ref()
        .map(|value| sanitize_inline(value))
        .filter(|value| !value.is_empty())
        .unwrap_or_else(|| "Resume context and define the next explicit move.".to_string());
    let open_threads = request
        .tensions
        .iter()
        .map(|item| sanitize_inline(item))
        .filter(|item| !item.is_empty())
        .take(3)
        .collect::<Vec<_>>()
        .join(" | ");
    let next_step = request
        .top_tasks
        .iter()
        .map(|item| sanitize_inline(item))
        .find(|item| !item.is_empty())
        .unwrap_or_else(|| "Review the selected scope and define the next bounded action.".to_string());

    format!(
        "{start}\n### Mara Sync | {generated_at}\n- **Focus:** Zoom into {focus}\n- **Scope:** `{scope}`\n- **Reason:** {reason}\n- **Summary:** {summary}\n- **Open threads:** {open_threads}\n- **Next:** {next_step}\n{end}",
        start = WORKING_MEMORY_START,
        end = WORKING_MEMORY_END,
        generated_at = sanitize_inline(&request.generated_at),
        focus = focus,
        scope = scope_label(request),
        reason = reason,
        summary = sanitize_inline(&request.summary),
        open_threads = if open_threads.is_empty() {
            "No dominant thread extracted yet.".to_string()
        } else {
            open_threads
        },
        next_step = next_step,
    )
}

fn find_managed_block(content: &str, start: &str, end: &str) -> Option<(usize, usize)> {
    let start_index = content.find(start)?;
    let end_relative = content[start_index + start.len()..].find(end)?;
    let end_index = start_index + start.len() + end_relative + end.len();
    Some((start_index, end_index))
}

fn insert_after_heading(content: &str, heading: &str, block: &str) -> Option<String> {
    let heading_start = content.find(heading)?;
    let heading_end = content[heading_start..]
        .find('\n')
        .map(|offset| heading_start + offset + 1)
        .unwrap_or(content.len());
    let before = content[..heading_end].trim_end_matches('\n');
    let after = content[heading_end..].trim_start_matches('\n');

    let mut updated = String::new();
    updated.push_str(before);
    updated.push_str("\n\n");
    updated.push_str(block.trim());

    if !after.is_empty() {
        updated.push_str("\n\n");
        updated.push_str(after);
    } else {
        updated.push('\n');
    }

    Some(updated)
}

fn upsert_managed_block(
    existing: &str,
    start: &str,
    end: &str,
    block: &str,
    heading: Option<&str>,
) -> (String, String) {
    if let Some((start_index, end_index)) = find_managed_block(existing, start, end) {
        let mut updated = String::new();
        updated.push_str(&existing[..start_index]);
        updated.push_str(block.trim());
        updated.push_str(&existing[end_index..]);
        return ("replace_managed_block".to_string(), updated);
    }

    if let Some(heading_value) = heading {
        if let Some(updated) = insert_after_heading(existing, heading_value, block) {
            return ("insert_after_header".to_string(), updated);
        }
    }

    let trimmed = existing.trim_end_matches('\n');
    if trimmed.is_empty() {
        return ("append_block".to_string(), format!("{}\n", block.trim()));
    }

    ("append_block".to_string(), format!("{}\n\n{}\n", trimmed, block.trim()))
}

fn build_action_id(request: &WritebackRequest) -> String {
    let seed = format!(
        "{}:{}:{}:{}",
        request.target,
        request.node_id.clone().unwrap_or_else(|| "workspace".to_string()),
        request.node_path.clone().unwrap_or_else(|| ".".to_string()),
        system_time_to_millis(Ok(SystemTime::now()))
    );

    seed.chars()
        .map(|character| if character.is_ascii_alphanumeric() { character } else { '-' })
        .collect()
}

fn build_writeback_block(request: &WritebackRequest) -> Result<String, String> {
    match request.target.as_str() {
        "dashboard" => Ok(build_dashboard_block(request)),
        "working_memory" => Ok(build_working_memory_block(request)),
        _ => Err(format!("Unsupported writeback target: {}", request.target)),
    }
}

#[tauri::command]
fn healthcheck() -> &'static str {
    "mara-backend-ok"
}

#[tauri::command]
fn scan_workspace(root_path: String) -> Result<WorkspaceScan, String> {
    let root = validate_workspace_root(&root_path)?;
    let mut documents: Vec<WorkspaceDocument> = Vec::new();

    for entry in WalkDir::new(&root)
        .follow_links(true)
        .into_iter()
        .filter_entry(|entry| should_descend(entry))
    {
        let entry = match entry {
            Ok(entry) => entry,
            Err(error) if error.loop_ancestor().is_some() => continue,
            Err(error) => return Err(error.to_string()),
        };
        if !entry.file_type().is_file() {
            continue;
        }

        let path = entry.path();
        let is_markdown = path
            .extension()
            .and_then(|extension| extension.to_str())
            .map(|extension| extension.eq_ignore_ascii_case("md"))
            .unwrap_or(false);

        if !is_markdown {
            continue;
        }

        let metadata = fs::metadata(path).map_err(|error| error.to_string())?;
        let content = fs::read_to_string(path).map_err(|error| error.to_string())?;

        documents.push(WorkspaceDocument {
            path: relative_path(&root, path),
            content,
            modified_at_ms: system_time_to_millis(metadata.modified()),
            created_at_ms: system_time_to_millis(metadata.created().or_else(|_| metadata.modified())),
            size_bytes: metadata.len(),
        });
    }

    documents.sort_by(|left, right| left.path.cmp(&right.path));

    Ok(WorkspaceScan {
        root_path,
        documents,
    })
}

#[tauri::command]
fn workspace_fingerprint(root_path: String) -> Result<WorkspaceFingerprint, String> {
    let root = validate_workspace_root(&root_path)?;
    let entries = markdown_entries(&root)?;
    let mut hasher = DefaultHasher::new();

    for (path, modified_at_ms, size_bytes) in &entries {
        path.hash(&mut hasher);
        modified_at_ms.hash(&mut hasher);
        size_bytes.hash(&mut hasher);
    }

    Ok(WorkspaceFingerprint {
        revision: format!("{:x}", hasher.finish()),
        document_count: entries.len(),
    })
}

#[tauri::command]
fn preview_writeback(request: WritebackRequest) -> Result<WritebackPreview, String> {
    let root = validate_workspace_root(&request.root_path)?;
    let target_path = relative_target_path(&request.target)?;
    let target_file = root.join(target_path);
    if !target_file.exists() {
        return Err(format!(
            "Writeback target does not exist: {}",
            target_file.to_string_lossy()
        ));
    }

    let existing = fs::read_to_string(&target_file).map_err(|error| error.to_string())?;
    let (start, end, heading) = target_contract(&request.target)?;
    let block = build_writeback_block(&request)?;
    let (operation, _) = upsert_managed_block(&existing, start, end, &block, heading);

    Ok(WritebackPreview {
        action_id: build_action_id(&request),
        target: request.target,
        target_path: target_path.to_string(),
        operation,
        content: block,
    })
}

#[tauri::command]
fn commit_writeback(root_path: String, preview: WritebackPreview) -> Result<WritebackCommitResult, String> {
    let root = validate_workspace_root(&root_path)?;
    let expected_path = relative_target_path(&preview.target)?;
    if preview.target_path != expected_path {
        return Err("Writeback preview target path mismatch.".to_string());
    }

    let (start, end, heading) = target_contract(&preview.target)?;
    let trimmed_block = preview.content.trim();
    if !trimmed_block.starts_with(start) || !trimmed_block.ends_with(end) {
        return Err("Writeback preview does not match the approved managed block format.".to_string());
    }

    let target_file = root.join(&preview.target_path);
    if !target_file.exists() {
        return Err(format!(
            "Writeback target does not exist: {}",
            target_file.to_string_lossy()
        ));
    }

    let existing = fs::read_to_string(&target_file).map_err(|error| error.to_string())?;
    let (_, updated) = upsert_managed_block(&existing, start, end, trimmed_block, heading);
    fs::write(&target_file, updated).map_err(|error| error.to_string())?;

    Ok(WritebackCommitResult {
        action_id: preview.action_id,
        target: preview.target,
        target_path: preview.target_path,
        committed_at_ms: system_time_to_millis(Ok(SystemTime::now())),
    })
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_sql::Builder::default().build())
        .invoke_handler(tauri::generate_handler![
            healthcheck,
            scan_workspace,
            workspace_fingerprint,
            preview_writeback,
            commit_writeback
        ])
        .run(tauri::generate_context!())
        .expect("error while running Mara");
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn upsert_replaces_existing_dashboard_block() {
        let existing = format!(
            "# Dashboard\n\n{start}\nold block\n{end}\n",
            start = DASHBOARD_START,
            end = DASHBOARD_END
        );
        let replacement = format!(
            "{start}\nnew block\n{end}",
            start = DASHBOARD_START,
            end = DASHBOARD_END
        );

        let (operation, updated) =
            upsert_managed_block(&existing, DASHBOARD_START, DASHBOARD_END, &replacement, None);

        assert_eq!(operation, "replace_managed_block");
        assert!(updated.contains("new block"));
        assert!(!updated.contains("old block"));
    }

    #[test]
    fn upsert_inserts_working_memory_block_after_sessions_heading() {
        let existing = "# HA-EB Working Memory\n\n## Sessions\n\n### 2026-03-06 | Session 55\n";
        let block = format!(
            "{start}\n### Mara Sync | 2026-03-07T00:00:00Z\n{end}",
            start = WORKING_MEMORY_START,
            end = WORKING_MEMORY_END
        );

        let (operation, updated) = upsert_managed_block(
            existing,
            WORKING_MEMORY_START,
            WORKING_MEMORY_END,
            &block,
            Some("## Sessions"),
        );

        let sessions_index = updated.find("## Sessions").unwrap();
        let block_index = updated.find(WORKING_MEMORY_START).unwrap();
        let manual_session_index = updated.find("### 2026-03-06 | Session 55").unwrap();

        assert_eq!(operation, "insert_after_header");
        assert!(sessions_index < block_index);
        assert!(block_index < manual_session_index);
    }

    #[test]
    fn dashboard_preview_and_commit_round_trip() {
        let temp_root = std::env::temp_dir().join(format!(
            "mara-writeback-{}",
            system_time_to_millis(Ok(SystemTime::now()))
        ));
        fs::create_dir_all(temp_root.join("06-projects")).unwrap();
        fs::write(temp_root.join(DASHBOARD_PATH), "# Dashboard\n").unwrap();

        let request = WritebackRequest {
            root_path: temp_root.to_string_lossy().to_string(),
            workspace_name: "ha-eb".to_string(),
            target: "dashboard".to_string(),
            node_id: Some("node:test".to_string()),
            node_name: Some("Test Node".to_string()),
            node_path: Some("06-projects/test-node".to_string()),
            summary: "Example summary".to_string(),
            reason: Some("High drift detected".to_string()),
            tensions: vec!["Thread A".to_string(), "Thread B".to_string()],
            top_tasks: vec!["Task A".to_string(), "Task B".to_string()],
            waiting_count: 2,
            open_signals: 3,
            stalled_node_count: 1,
            generated_at: "2026-03-07T12:00:00Z".to_string(),
        };

        let preview = preview_writeback(request).unwrap();
        let result = commit_writeback(temp_root.to_string_lossy().to_string(), preview.clone()).unwrap();
        let updated = fs::read_to_string(temp_root.join(DASHBOARD_PATH)).unwrap();

        assert_eq!(preview.operation, "append_block");
        assert_eq!(result.target_path, DASHBOARD_PATH);
        assert!(updated.contains(DASHBOARD_START));
        assert!(updated.contains("Recommended focus: **Test Node**"));

        fs::remove_dir_all(temp_root).unwrap();
    }

    #[test]
    fn real_workspace_dashboard_preview_generates_when_env_is_set() {
        let Ok(root_path) = std::env::var("MARA_REAL_WORKSPACE") else {
            return;
        };

        let request = WritebackRequest {
            root_path,
            workspace_name: "ha-eb".to_string(),
            target: "dashboard".to_string(),
            node_id: Some("node:probe".to_string()),
            node_name: Some("Preview Probe".to_string()),
            node_path: Some("06-projects".to_string()),
            summary: "Preview probe against the real workspace.".to_string(),
            reason: Some("Validate writeback preview generation without committing.".to_string()),
            tensions: vec!["Probe tension".to_string()],
            top_tasks: vec!["Probe task".to_string()],
            waiting_count: 1,
            open_signals: 1,
            stalled_node_count: 1,
            generated_at: "2026-03-07T12:00:00Z".to_string(),
        };

        let preview = preview_writeback(request).unwrap();
        assert_eq!(preview.target_path, DASHBOARD_PATH);
        assert!(preview.content.contains("## Mara Brief"));
    }
}
