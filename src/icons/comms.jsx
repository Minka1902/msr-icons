import { BaseIcon } from './BaseIcon';

// Communication / Social
export function MessageCircle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M21 11.5a8.5 8 0 0 1-12 7L4 20l1.5-4.5A8 8 0 0 1 12 3.5c5 0 9 3.6 9 8Z" />
        </BaseIcon>
    );
}

export function MessageText({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="M7 8h10M7 11h7" />
        </BaseIcon>
    );
}

export function MessageDots({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="M8.5 10h.01" /><path data-part="base3" d="M12 10h.01" /><path data-part="base4" d="M15.5 10h.01" />
        </BaseIcon>
    );
}

export function MessagePlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="M12 7.8v4.4M9.8 10h4.4" />
        </BaseIcon>
    );
}

export function Chat2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M3 6a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H8l-3 3v-3a2 2 0 0 1-2-2V6Z" /><path data-part="base2" d="M16 9h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2v3l-3-3h-3a2 2 0 0 1-1.7-1" />
        </BaseIcon>
    );
}

export function ChatBubble({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
        </BaseIcon>
    );
}

export function Inbox2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M3 13l3-8h12l3 8v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5Z" /><path data-part="base2" d="M3 13h5l1.5 2.5h5L16 13h5" />
        </BaseIcon>
    );
}

export function Outbox({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M3 13l3-8h12l3 8v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-5Z" /><path data-part="base2" d="M3 13h5l1.5 2.5h5L16 13h5M12 11V4M9.5 6.5 12 4l2.5 2.5" />
        </BaseIcon>
    );
}

export function SendMessage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M21 3 3 10.5l7 2.5 2.5 7L21 3Z" /><path data-part="base2" d="m10 13.5 4-4" />
        </BaseIcon>
    );
}

export function Reply2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M9 8 4 13l5 5M4 13h9a6 6 0 0 1 6 6" />
        </BaseIcon>
    );
}

export function Forward2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="m15 8 5 5-5 5M20 13h-9a6 6 0 0 0-6 6" />
        </BaseIcon>
    );
}

export function MailOpen2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M3 9.5 12 4l9 5.5V19a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5Z" /><path data-part="base2" d="m3 9.5 9 6 9-6" />
        </BaseIcon>
    );
}

export function MailCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="base" x="3" y="5" width="18" height="14" rx="2" /><path data-part="base2" d="m3.5 6.5 8.5 7 8.5-7" /><path data-part="base3" d="m16 17 17.6 19 20 15" />
        </BaseIcon>
    );
}

export function MailX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="base" x="3" y="5" width="18" height="14" rx="2" /><path data-part="base2" d="m3.5 6.5 8.5 7 8.5-7" /><path data-part="base3" d="M16.2 15.2 19.8 18.8M19.8 15.2 16.2 18.8" />
        </BaseIcon>
    );
}

export function MailPlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="base" x="3" y="5" width="18" height="14" rx="2" /><path data-part="base2" d="m3.5 6.5 8.5 7 8.5-7" /><path data-part="base3" d="M18 15v4M16 17h4" />
        </BaseIcon>
    );
}

export function MailSearch({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="base" x="3" y="5" width="18" height="14" rx="2" /><path data-part="base2" d="m3.5 6.5 8.5 7 8.5-7" /><circle data-part="base3" cx="17" cy="17" r="2.5" /><path data-part="base4" d="m19 19 1.5 1.5" />
        </BaseIcon>
    );
}

export function AtSign2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="base" cx="12" cy="12" r="4" /><path data-part="base2" d="M16 12v1.5a2.5 2.5 0 0 0 5 0V12a9 9 0 1 0-3.5 7.1" />
        </BaseIcon>
    );
}

export function Megaphone2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M3 11v2a1 1 0 0 0 1 1h2l9 5V5L6 10H4a1 1 0 0 0-1 1Z" /><path data-part="base2" d="M6 14v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-2M18 9a3 3 0 0 1 0 6" />
        </BaseIcon>
    );
}

export function Announcement({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M3 10v4a1 1 0 0 0 1 1h2l10 5V4L6 9H4a1 1 0 0 0-1 1Z" /><path data-part="base2" d="M19 8v8" />
        </BaseIcon>
    );
}

export function Notification2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path data-part="base2" d="M10 19a2 2 0 0 0 4 0" />
        </BaseIcon>
    );
}

export function NotificationOff({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path data-part="base2" d="M10 19a2 2 0 0 0 4 0" /><path data-part="base3" d="m4 4 16 16" />
        </BaseIcon>
    );
}

export function BellRing2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path data-part="base2" d="M10 19a2 2 0 0 0 4 0" /><path data-part="base3" d="M3.5 6a4 4 0 0 1 1.5-3M20.5 6a4 4 0 0 0-1.5-3" />
        </BaseIcon>
    );
}

export function BellPlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M8 9a5 5 0 0 1 9-3M18 9c0 5 2 6 2 6H4s2-1 2-6a6 6 0 0 1 .3-2" /><path data-part="base2" d="M10 19a2 2 0 0 0 4 0" /><path data-part="base3" d="M18 3v4M16 5h4" />
        </BaseIcon>
    );
}

export function ThreadIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="base" cx="6" cy="6" r="2.5" /><circle data-part="base2" cx="6" cy="18" r="2.5" /><path data-part="base3" d="M6 8.5v7M8.5 6h7a3 3 0 0 1 0 6h-7" />
        </BaseIcon>
    );
}

export function Reaction({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="base" cx="12" cy="12" r="9" /><path data-part="base2" d="M9 10h.01M15 10h.01M8.5 14a4 4 0 0 0 7 0" />
        </BaseIcon>
    );
}

export function ThumbsUpAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Z" /><path data-part="base2" d="M7 11l4-7a2 2 0 0 1 2 2v3h5a2 2 0 0 1 2 2.3l-1 6A2 2 0 0 1 18 20H7" />
        </BaseIcon>
    );
}

export function ThumbsDownAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M7 13V4H4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h3Z" /><path data-part="base2" d="M7 13l4 7a2 2 0 0 0 2-2v-3h5a2 2 0 0 0 2-2.3l-1-6A2 2 0 0 0 18 4H7" />
        </BaseIcon>
    );
}

export function PhoneCall2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M6 3.5 9 4l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5.5 3a2 2 0 0 1-2 2C10 19 5 14 4 6a2 2 0 0 1 2-2.5Z" /><path data-part="base2" d="M14 4a4 4 0 0 1 3 3M14 8a1.5 1.5 0 0 1 1.2 1.2" />
        </BaseIcon>
    );
}

export function SlackHash({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M9 3v12a3 3 0 0 1-6 0 3 3 0 0 1 3-3h12a3 3 0 0 1 0 6 3 3 0 0 1-3-3V3a3 3 0 0 0-6 0Z" />
        </BaseIcon>
    );
}

export function DiscordHash({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 6h14M5 12h14M10 4 8 16M16 4l-2 12" />
        </BaseIcon>
    );
}

export function ThreadReply({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M8 5 3 10l5 5M3 10h10a6 6 0 0 1 6 6v3" />
        </BaseIcon>
    );
}

export function PinMessage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="M12 7v3M10.5 10h3l-.5 1.5h-2L10.5 10Z" />
        </BaseIcon>
    );
}

export function UnpinMessage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="M10 8h4M11 8v2M13 8v2M10.5 10h3" /><path data-part="base3" d="m6 6 12 12" />
        </BaseIcon>
    );
}

export function MuteConversation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="m8 8 8 5M8 13l8-5" />
        </BaseIcon>
    );
}

export function ArchiveChat({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3H4V7Z" /><path data-part="base2" d="M5 10v6a2 2 0 0 0 2 2h5l4 3v-3h0a2 2 0 0 0 2-2v-6M10 13h4" />
        </BaseIcon>
    );
}

export function MarkRead({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="m9 10 11.4 13 15 7" />
        </BaseIcon>
    );
}

export function MarkUnread({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="M12 10h.01" /><circle data-part="base3" cx="18" cy="6" r="2.5" />
        </BaseIcon>
    );
}

export function StarMessage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="m12 7 1.2 2.4 2.6.3-1.9 1.8.5 2.6L12 13.6 9.6 15l.5-2.6-1.9-1.8 2.6-.3L12 7Z" />
        </BaseIcon>
    );
}

export function FlagMessage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="M10 7v6M10 7h4l-1 1.5 1 1.5h-4" />
        </BaseIcon>
    );
}

export function TranslateMessage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="M7 8h5M9.5 8c0 2-1 4-2.5 4M8 9.5c.5 1.5 2 2.5 3.5 2.5M13 13l2-4 2 4M13.5 12h3" />
        </BaseIcon>
    );
}

export function ScheduleSend({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="m21 3-9 9M21 3 14 20l-2-8-8-2 17-7Z" /><circle data-part="base2" cx="6" cy="18" r="3" /><path data-part="base3" d="M6 16.5v1.5l1 .7" />
        </BaseIcon>
    );
}

export function DraftMessage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7l-5 4v-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" /><path data-part="base2" d="M9 11h6M9 8h3M14 8l2-2 1.5 1.5L15.5 9.5Z" />
        </BaseIcon>
    );
}

export function ReadReceipt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="m3 12 4 4 7-9M11 16l2 2 8-10" />
        </BaseIcon>
    );
}

export function DeliveredCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="m4 12 5 5L20 6" />
        </BaseIcon>
    );
}

export function EmojiPicker({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="base" cx="12" cy="12" r="9" /><path data-part="base2" d="M8.5 10h.01M15.5 10h.01M8.5 14a4 4 0 0 0 7 0" />
        </BaseIcon>
    );
}

export function GifIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="base" x="3" y="5" width="18" height="14" rx="2" /><path data-part="base2" d="M9 10.5H7.5a1.5 1.5 0 0 0 0 4H9v-1.5M12 9.5v5M15 9.5v5M15 9.5h2.5M15 12h2" />
        </BaseIcon>
    );
}

export function StickerIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M5 4h10l5 5v9a2 2 0 0 1-2 2H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Z" /><path data-part="base2" d="M14 19v-3a2 2 0 0 1 2-2h4" />
        </BaseIcon>
    );
}

export function VoiceMessage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="base" x="9" y="3" width="6" height="11" rx="3" /><path data-part="base2" d="M5 11a7 7 0 0 0 14 0M12 18v3M8 21h8" />
        </BaseIcon>
    );
}

export function ScreenShare2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="base" x="3" y="4" width="18" height="12" rx="2" /><path data-part="base2" d="M8 20h8M12 16v4M12 12V7M9.5 9.5 12 7l2.5 2.5" />
        </BaseIcon>
    );
}

export function RaiseHand({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M8 11V6a1.5 1.5 0 0 1 3 0v4M11 9V5a1.5 1.5 0 0 1 3 0v5M14 8.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6 5 5 0 0 1-4-2l-3-4a1.5 1.5 0 0 1 2.2-2L8 14" />
        </BaseIcon>
    );
}

export function LeaveCall({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M6 3.5 9 4l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5.5 3a2 2 0 0 1-2 2C10 19 5 14 4 6a2 2 0 0 1 2-2.5Z" /><path data-part="base2" d="m2 4 18 16" />
        </BaseIcon>
    );
}

export function JoinCall({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="base" d="M6 3.5 9 4l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5.5 3a2 2 0 0 1-2 2C10 19 5 14 4 6a2 2 0 0 1 2-2.5Z" /><path data-part="base2" d="M18 4v4M16 6h4" />
        </BaseIcon>
    );
}

