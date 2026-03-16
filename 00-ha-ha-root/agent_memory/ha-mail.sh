#!/bin/bash
# HA Mail Bridge — reads Mac Mail via AppleScript
# Usage: ha-mail unread | ha-mail today | ha-mail recent [days] [max]
# v3: Fixed inbox access (mailbox "INBOX"/"Inbox" per account). Added "recent" with body preview.

case "${1:-unread}" in
    unread)
        echo "=== Mail: Unread Messages ==="
        osascript <<'APPLESCRIPT'
on getInbox(anAccount)
    tell application "Mail"
        try
            return mailbox "INBOX" of anAccount
        end try
        try
            return mailbox "Inbox" of anAccount
        end try
    end tell
    error "No inbox found"
end getInbox

tell application "Mail"
    set output to ""
    repeat with anAccount in every account
        try
            set inboxMailbox to my getInbox(anAccount)
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
APPLESCRIPT
        ;;
    today)
        echo "=== Mail: Today's Messages ==="
        osascript <<'APPLESCRIPT'
on getInbox(anAccount)
    tell application "Mail"
        try
            return mailbox "INBOX" of anAccount
        end try
        try
            return mailbox "Inbox" of anAccount
        end try
    end tell
    error "No inbox found"
end getInbox

tell application "Mail"
    set todayMessages to {}
    set todayDate to current date
    set hours of todayDate to 0
    set minutes of todayDate to 0
    set seconds of todayDate to 0
    repeat with anAccount in every account
        try
            set inboxMailbox to my getInbox(anAccount)
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
APPLESCRIPT
        ;;
    recent)
        DAYS="${2:-3}"
        MAX="${3:-30}"
        echo "=== Mail: Recent Messages (last ${DAYS} days) ==="
        osascript <<APPLESCRIPT
on getInbox(anAccount)
    tell application "Mail"
        try
            return mailbox "INBOX" of anAccount
        end try
        try
            return mailbox "Inbox" of anAccount
        end try
    end tell
    error "No inbox found"
end getInbox

tell application "Mail"
    set output to ""
    set cutoffDate to (current date) - (${DAYS} * days)
    set msgIndex to 0
    repeat with anAccount in every account
        try
            set acctName to name of anAccount
            set inboxMailbox to my getInbox(anAccount)
            set recentMsgs to (every message of inboxMailbox whose date received > cutoffDate)
            repeat with aMsg in recentMsgs
                if msgIndex >= ${MAX} then exit repeat
                set msgSubject to subject of aMsg
                set msgFrom to sender of aMsg
                set msgDate to date received of aMsg
                set msgRead to read status of aMsg
                set msgBody to content of aMsg
                if length of msgBody > 800 then
                    set msgBody to text 1 thru 800 of msgBody
                end if
                set tid to AppleScript's text item delimiters
                set AppleScript's text item delimiters to return
                set bodyParts to text items of msgBody
                set AppleScript's text item delimiters to "\\n"
                set msgBody to bodyParts as text
                set AppleScript's text item delimiters to linefeed
                set bodyParts to text items of msgBody
                set AppleScript's text item delimiters to "\\n"
                set msgBody to bodyParts as text
                set AppleScript's text item delimiters to tid
                if msgRead then
                    set readFlag to "read"
                else
                    set readFlag to "UNREAD"
                end if
                set output to output & "---MSG---" & linefeed & "Account: " & acctName & linefeed & "From: " & msgFrom & linefeed & "Subject: " & msgSubject & linefeed & "Date: " & (msgDate as string) & linefeed & "Status: " & readFlag & linefeed & "Body: " & msgBody & linefeed
                set msgIndex to msgIndex + 1
            end repeat
        end try
    end repeat
    if output is "" then
        return "No recent messages."
    else
        return output
    end if
end tell
APPLESCRIPT
        ;;
    *)
        echo "Usage: ha-mail [unread|today|recent [days] [max]]"
        exit 1
        ;;
esac
