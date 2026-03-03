#!/bin/bash
# HA Mail Bridge — reads Mac Mail via AppleScript
# Usage: ha-mail unread | ha-mail today

case "${1:-unread}" in
    unread)
        echo "=== Mail: Unread Messages ==="
        osascript -e '
        tell application "Mail"
            set unreadMessages to {}
            set allAccounts to every account
            repeat with anAccount in allAccounts
                set allMailboxes to every mailbox of anAccount
                repeat with aMailbox in allMailboxes
                    try
                        set unreadMsgs to (every message of aMailbox whose read status is false)
                        repeat with aMsg in unreadMsgs
                            set msgDate to date received of aMsg
                            set msgFrom to sender of aMsg
                            set msgSubject to subject of aMsg
                            set end of unreadMessages to (msgDate as string) & " | " & msgFrom & " | " & msgSubject
                        end repeat
                    end try
                end repeat
            end repeat
            if (count of unreadMessages) is 0 then
                return "No unread messages."
            else
                set maxItems to 20
                if (count of unreadMessages) < maxItems then
                    set maxItems to (count of unreadMessages)
                end if
                set output to ""
                repeat with i from 1 to maxItems
                    set output to output & item i of unreadMessages & linefeed
                end repeat
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
                set inboxMailbox to inbox of anAccount
                try
                    set todayMsgs to (every message of inboxMailbox whose date received > todayDate)
                    repeat with aMsg in todayMsgs
                        set msgDate to date received of aMsg
                        set msgFrom to sender of aMsg
                        set msgSubject to subject of aMsg
                        set end of todayMessages to (msgDate as string) & " | " & msgFrom & " | " & msgSubject
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
