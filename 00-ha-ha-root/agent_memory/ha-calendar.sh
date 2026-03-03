#!/bin/bash
# HA Calendar Bridge — reads Mac Calendar via icalBuddy
# Usage: ha-calendar today | ha-calendar week

# Load config if available
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
if [ -f "$SCRIPT_DIR/ha-bridges.conf" ]; then
    source "$SCRIPT_DIR/ha-bridges.conf"
fi

# Default calendar filter (all calendars if not configured)
CALENDAR_FILTER="${HA_CALENDAR_FILTER:-}"

build_cal_args() {
    local args=""
    if [ -n "$CALENDAR_FILTER" ]; then
        args="-ic $CALENDAR_FILTER"
    fi
    echo "$args"
}

case "${1:-today}" in
    today)
        echo "=== Calendar: Today ==="
        icalBuddy $(build_cal_args) -f -nc -nrd eventsToday
        ;;
    week)
        echo "=== Calendar: This Week ==="
        icalBuddy $(build_cal_args) -f -nc -nrd eventsToday+7
        ;;
    tomorrow)
        echo "=== Calendar: Tomorrow ==="
        icalBuddy $(build_cal_args) -f -nc -nrd eventsToday+1
        ;;
    *)
        echo "Usage: ha-calendar [today|week|tomorrow]"
        exit 1
        ;;
esac
