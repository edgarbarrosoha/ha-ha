#!/bin/bash
# ha-agentic-conversation.sh — Automated inter-model document review
# Orchestrates turns between 3 models until they reach consensus.
#
# Default panel: Claude Opus 4.6 | Gemini 2.5 Pro | Codex (GPT-5)
#
# Usage:
#   source ha-agentic-conversation.sh <document-path> [--roles "Role1, Role2, Role3"]
#
# Override models via environment:
#   MODEL_A="claude"  MODEL_B="gemini"  MODEL_C="codex"  (CLI names)
#   GEMINI_MODEL="gemini-2.5-pro"  (update when 3.x available)
#   CLAUDE_MODEL="claude-opus-4-6"
#
# Examples:
#   source ha-agentic-conversation.sh paper.md
#   source ha-agentic-conversation.sh paper.md --roles "Reviewer Scopus Q1, Style Editor, Industrial Expert"
#   GEMINI_MODEL="gemini-3.0-pro" source ha-agentic-conversation.sh paper.md

set -euo pipefail

# --- Args ---
DOC="${1:?Usage: source ha-agentic-conversation.sh <document-path> [--roles ...]}"
shift

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROTOCOL="${SCRIPT_DIR}/skills/agentic-conversation.md"

ROLES=""
while [[ $# -gt 0 ]]; do
  case "$1" in
    --roles) ROLES="$2"; shift 2 ;;
    *) shift ;;
  esac
done

# --- Model Config ---
CLAUDE_MODEL="${CLAUDE_MODEL:-claude-opus-4-6}"
GEMINI_MODEL="${GEMINI_MODEL:-gemini-2.5-pro}"

MODEL_NAMES=("Claude Opus 4.6" "Gemini 2.5 Pro" "Codex GPT-5")
MODEL_COUNT=3
MAX_TURNS=$((4 * MODEL_COUNT + 2))  # ~14 turns safety valve

# --- Model Invocation ---
# Each CLI has different syntax. This function normalizes them.
call_model() {
  local model_idx="$1"
  local prompt="$2"
  local tmpfile
  tmpfile="$(mktemp)"
  echo "$prompt" > "$tmpfile"

  case "$model_idx" in
    0) # Claude: reads from stdin with -p flag
      cat "$tmpfile" | claude -p --model "$CLAUDE_MODEL" 2>/dev/null
      ;;
    1) # Gemini: takes prompt as -p argument (truncate if too long for arg)
      # Gemini CLI accepts stdin piped to -p
      gemini -p "$(cat "$tmpfile")" -m "$GEMINI_MODEL" --sandbox false 2>/dev/null
      ;;
    2) # Codex: takes prompt as positional argument to exec
      codex exec "$(cat "$tmpfile")" 2>/dev/null | grep -v "^tokens used$" | grep -v "^[0-9,]*$" | grep -v "^codex$"
      ;;
  esac

  rm -f "$tmpfile"
}

# --- Paths ---
DOC_DIR="$(cd "$(dirname "$DOC")" && pwd)"
DOC_NAME="$(basename "$DOC")"
CONVERSATION_FILE="${DOC_DIR}/conversation.md"

# --- Safety ---
if [[ -f "$CONVERSATION_FILE" ]]; then
  echo "Warning: ${CONVERSATION_FILE} already exists."
  echo "Rename or delete it to start fresh, or press Enter to continue."
  read -r
fi

# --- Read inputs ---
DOC_CONTENT="$(cat "$DOC")"
PROTOCOL_CONTENT="$(cat "$PROTOCOL")"

ROLE_INSTRUCTION=""
if [[ -n "$ROLES" ]]; then
  ROLE_INSTRUCTION="Assigned roles: ${ROLES}."
fi

check_verdict() {
  grep -q "JOINT VERDICT" "$CONVERSATION_FILE" 2>/dev/null
}

get_role_for() {
  local idx="$1"
  if [[ -n "$ROLES" ]]; then
    IFS=',' read -ra ROLE_ARRAY <<< "$ROLES"
    if [[ $idx -lt ${#ROLE_ARRAY[@]} ]]; then
      echo "Your assigned role: $(echo "${ROLE_ARRAY[$idx]}" | xargs)."
      return
    fi
  fi
  echo ""
}

# --- Round 0: First model opens ---
echo "=== Agentic Conversation: ${DOC_NAME} ==="
echo "Panel: ${MODEL_NAMES[*]}"
echo ""

if [[ ! -f "$CONVERSATION_FILE" ]]; then
  echo "--- Round 0: ${MODEL_NAMES[0]} (opening assessment) ---"

  call_model 0 "You are participating in an Agentic Conversation — an inter-model document review protocol.
You are ${MODEL_NAMES[0]}.

PROTOCOL:
${PROTOCOL_CONTENT}

DOCUMENT TO REVIEW (${DOC_NAME}):
${DOC_CONTENT}

${ROLE_INSTRUCTION}
$(get_role_for 0)

Your task: Write your Round 0: Independent Assessment following the protocol format exactly.
Output ONLY the markdown content for the conversation file. Start with:
# Agentic Conversation — ${DOC_NAME}
Then your assessment block. Identify yourself as ${MODEL_NAMES[0]}." > "$CONVERSATION_FILE"

  echo "${MODEL_NAMES[0]} Round 0 written."
  echo ""
fi

# --- Turn loop ---
TURN=1
MODEL_IDX=1  # second model goes next

while [[ $TURN -le $MAX_TURNS ]]; do
  if check_verdict; then
    echo ""
    echo "========================================="
    echo "=== CONSENSUS REACHED ==="
    echo "========================================="
    echo ""
    sed -n '/JOINT VERDICT/,$ p' "$CONVERSATION_FILE"
    break
  fi

  CONVERSATION_SO_FAR="$(cat "$CONVERSATION_FILE")"
  CURRENT_NAME="${MODEL_NAMES[$MODEL_IDX]}"
  CURRENT_ROLE="$(get_role_for $MODEL_IDX)"

  echo "--- Turn ${TURN}: ${CURRENT_NAME} ---"

  RESPONSE="$(call_model "$MODEL_IDX" "You are participating in an Agentic Conversation — an inter-model document review protocol.
You are ${CURRENT_NAME}.

PROTOCOL:
${PROTOCOL_CONTENT}

ORIGINAL DOCUMENT (${DOC_NAME}):
${DOC_CONTENT}

CONVERSATION SO FAR:
${CONVERSATION_SO_FAR}

${ROLE_INSTRUCTION}
${CURRENT_ROLE}

Your task: Read the conversation so far. Determine which round comes next per the protocol. Write your contribution for that round. Identify yourself as ${CURRENT_NAME}.

Rules:
- Follow the protocol format exactly
- Disagreement is required — if you agree with everything, push harder
- If all other models have written Round 2 convergence, write the Round 3 Joint Verdict draft
- If a Joint Verdict draft exists from another model, confirm or amend it to finalize
- Output ONLY the markdown to append to the conversation file
- Do NOT repeat content already in the conversation")"

  echo "" >> "$CONVERSATION_FILE"
  echo "$RESPONSE" >> "$CONVERSATION_FILE"

  echo "${CURRENT_NAME} done."
  echo ""

  MODEL_IDX=$(( (MODEL_IDX + 1) % MODEL_COUNT ))
  TURN=$((TURN + 1))
done

if [[ $TURN -gt $MAX_TURNS ]] && ! check_verdict; then
  echo "=== MAX TURNS (${MAX_TURNS}) REACHED ==="
  echo "Check conversation file for partial consensus."
fi

echo ""
echo "Conversation file: ${CONVERSATION_FILE}"
