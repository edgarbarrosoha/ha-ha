#!/bin/bash
# HA Calendar Bridge — reads Mac Calendar via icalBuddy
# Usage: ha-calendar today | ha-calendar week
# Compact output: excludes notes and attendees (the biggest bloat sources)

# Load config if available
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ -f "$SCRIPT_DIR/ha-bridges.conf" ]; then
    source "$SCRIPT_DIR/ha-bridges.conf"
fi

# Default calendar filter (all calendars if not configured)
CALENDAR_FILTER="${HA_CALENDAR_FILTER:-}"
CAL_ARGS=()
if [ -n "$CALENDAR_FILTER" ]; then
    CAL_ARGS=(-ic "$CALENDAR_FILTER")
fi

case "${1:-today}" in
    today)
        echo "=== Calendar: Today ==="
        icalBuddy "${CAL_ARGS[@]}" -f -nc -nrd -eep "notes,attendees" eventsToday
        ;;
    week)
        echo "=== Calendar: This Week ==="
        icalBuddy "${CAL_ARGS[@]}" -f -nc -nrd -eep "notes,attendees" eventsToday+7
        ;;
    tomorrow)
        echo "=== Calendar: Tomorrow ==="
        icalBuddy "${CAL_ARGS[@]}" -f -nc -nrd -eep "notes,attendees" eventsFrom:tomorrow to:tomorrow
        ;;
    *)
        echo "Usage: ha-calendar [today|week|tomorrow]"
        exit 1
        ;;
esac
