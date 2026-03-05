#!/bin/bash
# HA Mail Bridge — reads Mac Mail via AppleScript
# Usage: ha-mail unread | ha-mail today
# v2: "unread" uses fast count (property, not query). "today" fetches details.

case "${1:-unread}" in
    unread)
        echo "=== Mail: Unread Messages ==="
        osascript -e '
        tell application "Mail"
            set output to ""
            repeat with anAccount in every account
                try
                    set inboxMailbox to inbox of anAccount
                    set unreadCount to unread count of inboxMailbox
                    if unreadCount > 0 then
                        set acctName to name of anAccount
                        set output to output & acctName & ": " & unreadCount & " unread" & linefeed
                    end if
                end try
            end repeat
            if output is "" then
                return "No unread messages."
            else
                return output
            end if
        end tell
        ' 2>/dev/null || echo "Mail app not accessible."
        ;;
    today)
        echo "=== Mail: Today's Messages ==="
        osascript -e '
        tell application "Mail"
            set todayMessages to {}
            set todayDate to current date
            set hours of todayDate to 0
            set minutes of todayDate to 0
            set seconds of todayDate to 0
            set allAccounts to every account
            repeat with anAccount in allAccounts
                try
                    set inboxMailbox to inbox of anAccount
                    set acctName to name of anAccount
                    set todayMsgs to (every message of inboxMailbox whose date received > todayDate)
                    set msgCount to count of todayMsgs
                    if msgCount > 10 then set msgCount to 10
                    repeat with i from 1 to msgCount
                        set aMsg to item i of todayMsgs
                        set msgDate to date received of aMsg
                        set msgFrom to sender of aMsg
                        set msgSubject to subject of aMsg
                        set end of todayMessages to acctName & " | " & (msgDate as string) & " | " & msgFrom & " | " & msgSubject
                    end repeat
                end try
            end repeat
            if (count of todayMessages) is 0 then
                return "No messages today."
            else
                set output to ""
                repeat with i from 1 to (count of todayMessages)
                    set output to output & item i of todayMessages & linefeed
                end repeat
                return output
            end if
        end tell
        ' 2>/dev/null || echo "Mail app not accessible."
        ;;
    *)
        echo "Usage: ha-mail [unread|today]"
        exit 1
        ;;
esac
