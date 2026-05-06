import { BaseIcon } from './BaseIcon';

// Text Formatting
export function Bold({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8" />
        </BaseIcon>
    );
}

export function Italic({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M19 4h-9M14 20H5M14.7 4.7 9.2 19.4" />
        </BaseIcon>
    );
}

export function Underline({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 4v6a6 6 0 0 0 12 0V4M4 20h16" />
        </BaseIcon>
    );
}

export function Strikethrough({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M16 4H9a3 3 0 0 0-2.83 4M4 12h16M8 20h8a3 3 0 0 0 0-6H8" />
        </BaseIcon>
    );
}

export function AlignLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M3 12h12M3 18h15" />
        </BaseIcon>
    );
}

export function AlignCenter({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M6 12h12M4.5 18h15" />
        </BaseIcon>
    );
}

export function AlignRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M9 12h12M6 18h15" />
        </BaseIcon>
    );
}

export function AlignJustify({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M3 12h18M3 18h18" />
        </BaseIcon>
    );
}

export function Heading({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 12h12M6 4v16M18 4v16" />
        </BaseIcon>
    );
}

export function BlockQuote({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1zM15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
        </BaseIcon>
    );
}

export function OrderedList({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10 6h11M10 12h11M10 18h11" />
            <path d="M4 6h1v4M4 10h2" />
            <path d="M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
        </BaseIcon>
    );
}

export function UnorderedList({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
        </BaseIcon>
    );
}

export function CodeBlock({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16" />
        </BaseIcon>
    );
}

export function Superscript({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m4 19 8-8M12 19l-8-8" />
            <path d="M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" />
        </BaseIcon>
    );
}

export function Subscript({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m4 5 8 8M12 5l-8 8" />
            <path d="M20 19h-4c0-1.5.442-2 1.5-2.5S20 15.334 20 14.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06" />
        </BaseIcon>
    );
}

export function ClearFormatting({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7V4h16v3M5 20h6M13 4 8 20M3 3l18 18" />
        </BaseIcon>
    );
}

export function IndentIncrease({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M13 12h8M13 18h8M3 18l4-3-4-3" />
        </BaseIcon>
    );
}

export function IndentDecrease({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M9 12h12M9 18h12M7 15l-4 3 4-3V9" />
        </BaseIcon>
    );
}

// Editing & Drawing Tools
export function Undo({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7v6h6" />
            <path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13" />
        </BaseIcon>
    );
}

export function Redo({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 7v6h-6" />
            <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
        </BaseIcon>
    );
}

export function Scissors({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <path d="M20 4 8.12 15.88M14.47 14.48 20 20M8.12 8.12 12 12" />
        </BaseIcon>
    );
}

export function Ruler({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z" />
            <path d="m14 7 3 3M11 10l2 2M8 13l2 2M5 16l2 2" />
        </BaseIcon>
    );
}

export function Magnet({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m6 15-4-4a9 9 0 0 1 12.728-12.728 9 9 0 0 1 0 12.728l-4 4Z" />
            <path d="M2 11l4 4M17.5 6.5l4 4" />
            <path d="M4 20v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V20a2 2 0 1 1-4 0ZM16 20v-3.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V20a2 2 0 1 1-4 0Z" />
        </BaseIcon>
    );
}

export function Eyedropper({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m2 22 1-1h3l9-9" />
            <path d="M3 21v-3l9-9" />
            <path d="m15 6 3.5-3.5a2.12 2.12 0 0 1 3 3L18 9l.5.5a2.12 2.12 0 0 1 0 3l-1 1a2.12 2.12 0 0 1-3 0L9 8a2.12 2.12 0 0 1 0-3l1-1a2.12 2.12 0 0 1 3 0Z" />
        </BaseIcon>
    );
}

export function Paintbrush({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
            <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7M14.5 17.5 4.5 15" />
        </BaseIcon>
    );
}

export function Eraser({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21" />
            <path d="M22 21H7M5 11l8 8" />
        </BaseIcon>
    );
}

export function PaintBucket({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m19 11-8-8-8.5 8.5a5.5 5.5 0 0 0 7.78 7.78L19 11Z" />
            <path d="m3.5 11.5 7 7" />
            <path d="M20 16c0 1.1-.4 2.1-1.2 2.8" />
            <circle cx="20.5" cy="19" r="2" />
        </BaseIcon>
    );
}

export function MagicWand({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72Z" />
            <path d="m14 7 3 3M5 6v4M19 14v4M10 2v2M7 8H3M21 16h-4M11 3H9" />
        </BaseIcon>
    );
}

// Devices
export function Mobile({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="2" width="14" height="20" rx="2" />
            <path d="M12 18h.01" />
        </BaseIcon>
    );
}

export function Tablet({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <path d="M12 18h.01" />
        </BaseIcon>
    );
}

export function Monitor({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
        </BaseIcon>
    );
}

export function Laptop({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
        </BaseIcon>
    );
}

export function TV({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="7" width="20" height="15" rx="2" />
            <path d="m17 2-5 5-5-5" />
        </BaseIcon>
    );
}

export function SmartWatch({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="6" width="12" height="12" rx="2" />
            <path d="M12 10v2l1 1M8 6V4h8v2M8 18v2h8v-2" />
        </BaseIcon>
    );
}

export function Keyboard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M8 14h8M6 14h.01M18 14h.01" />
        </BaseIcon>
    );
}

export function DeviceMouse({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <path d="M12 2v10M5 10h14" />
        </BaseIcon>
    );
}

export function Gamepad({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14.5 8H9.5a7 7 0 0 0-7 7 2.5 2.5 0 0 0 4 2l1.5-1h6l1.5 1a2.5 2.5 0 0 0 4-2 7 7 0 0 0-5-6.96V8Z" />
            <path d="M8 12v4M6 14h4M15 12h.01M17 14h.01" />
        </BaseIcon>
    );
}

export function Webcam({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="10" r="8" />
            <circle cx="12" cy="10" r="3" />
            <path d="M7 22h10M12 18v4" />
        </BaseIcon>
    );
}

export function NetworkRouter({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="9" width="20" height="8" rx="2" />
            <path d="M8 17v4M12 17v4M16 17v4M6 13h.01M10 13h.01" />
            <path d="M5 9a7 7 0 0 1 14 0" />
            <path d="M8 9a4 4 0 0 1 8 0" />
        </BaseIcon>
    );
}

// Layout & UI Patterns
export function Sidebar({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 3v18" />
        </BaseIcon>
    );
}

export function SplitView({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M12 3v18" />
        </BaseIcon>
    );
}

export function GridView({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <rect x="14" y="14" width="7" height="7" rx="1" />
        </BaseIcon>
    );
}

export function ListView({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="4" rx="1" />
            <rect x="3" y="12" width="18" height="4" rx="1" />
            <rect x="3" y="19" width="18" height="2" rx="1" />
        </BaseIcon>
    );
}

export function Columns({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="8" height="18" rx="1" />
            <rect x="13" y="3" width="8" height="18" rx="1" />
        </BaseIcon>
    );
}

export function Rows({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="8" rx="1" />
            <rect x="3" y="13" width="18" height="8" rx="1" />
        </BaseIcon>
    );
}

export function Layers({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z" />
            <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65" />
            <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65" />
        </BaseIcon>
    );
}

export function Breadcrumb({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h4M10 12h4M17 12h4M8 8l4 4-4 4M15 8l4 4-4 4" />
        </BaseIcon>
    );
}

export function Pagination({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 10l-3 3 3 3M17 10l3 3-3 3" />
            <rect x="9" y="9" width="2" height="6" rx="1" />
            <rect x="13" y="9" width="2" height="6" rx="1" />
        </BaseIcon>
    );
}

export function Stepper({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="5" cy="12" r="3" />
            <circle cx="12" cy="12" r="3" />
            <circle cx="19" cy="12" r="3" />
            <path d="M8 12h1M15 12h1" />
        </BaseIcon>
    );
}

export function DragHandle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 6h.01M8 12h.01M8 18h.01M16 6h.01M16 12h.01M16 18h.01" />
        </BaseIcon>
    );
}

export function Kanban({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="5" height="14" rx="1" />
            <rect x="10" y="3" width="5" height="9" rx="1" />
            <rect x="17" y="3" width="5" height="11" rx="1" />
        </BaseIcon>
    );
}

export function TableIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M3 9h18M3 15h18M9 3v18M15 3v18" />
        </BaseIcon>
    );
}

export function CommandMenu({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
        </BaseIcon>
    );
}

// Communication
export function Chat({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </BaseIcon>
    );
}

export function ChatGroup({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
        </BaseIcon>
    );
}

export function VideoCall({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m22 8-6 4 6 4V8z" />
            <rect x="2" y="6" width="14" height="12" rx="2" />
        </BaseIcon>
    );
}

export function PhoneIncoming({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polyline points="16 2 16 8 22 8" />
            <line x1="22" y1="2" x2="16" y2="8" />
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </BaseIcon>
    );
}

export function PhoneMissed({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <line x1="23" y1="1" x2="17" y2="7" />
            <line x1="17" y1="1" x2="23" y2="7" />
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </BaseIcon>
    );
}

export function PhoneOff({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.42 19.42 0 0 1 4.69 12M2 2l20 20" />
            <path d="M3.73 3.73A19.5 19.5 0 0 0 2.5 6.6 2 2 0 0 0 4.27 8.9a12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L3.27 15" />
        </BaseIcon>
    );
}

export function Comment({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M8 10h8M8 14h5" />
        </BaseIcon>
    );
}

export function Reply({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polyline points="9 17 4 12 9 7" />
            <path d="M20 18v-2a4 4 0 0 0-4-4H4" />
        </BaseIcon>
    );
}

export function Mention({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="4" />
            <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8" />
        </BaseIcon>
    );
}

export function Hashtag({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18" />
        </BaseIcon>
    );
}

// Social Reactions
export function ThumbsUp({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 10v12M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
        </BaseIcon>
    );
}

export function ThumbsDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 14V2M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22a3.13 3.13 0 0 1-3-3.88Z" />
        </BaseIcon>
    );
}

export function Repost({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m17 2 4 4-4 4" />
            <path d="M3 11V9a4 4 0 0 1 4-4h14M7 22l-4-4 4-4" />
            <path d="M21 13v2a4 4 0 0 1-4 4H3" />
        </BaseIcon>
    );
}

// Finance
export function Wallet({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
            <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
            <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
        </BaseIcon>
    );
}

export function Coins({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="8" cy="8" r="6" />
            <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
            <path d="M7 6h1v4" />
            <path d="m16.71 13.88.7.71-2.82 2.82" />
        </BaseIcon>
    );
}

export function PiggyBank({ fillColor = '#EC4899', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5Z" />
            <path d="M2 9v1c0 1.1.9 2 2 2h1" />
            <path d="M16 11h.01" />
        </BaseIcon>
    );
}

export function BankNote({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
        </BaseIcon>
    );
}

export function Receipt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
            <path d="M16 8H8M16 12H8M12 16H8" />
        </BaseIcon>
    );
}

export function Invoice({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M9 13h6M9 17h4M9 9h1" />
        </BaseIcon>
    );
}

export function Briefcase({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v.01M2 12h20" />
        </BaseIcon>
    );
}

export function YenSign({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 22V12M6 3l6 9 6-9M3 13h18M3 17h18" />
        </BaseIcon>
    );
}

export function RupeeSign({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 3h12M6 8h12a6 6 0 0 1 0 12H6l7-12" />
        </BaseIcon>
    );
}

// Security
export function TwoFactor({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="m9 12 2 2 4-4" />
        </BaseIcon>
    );
}

export function Passkey({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="8" cy="8" r="5" />
            <path d="M8 16v2M10 18h5M15 18v2M13 11h8v8h-4" />
        </BaseIcon>
    );
}

export function VPN({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="M8 11h8M12 8v6" />
        </BaseIcon>
    );
}

// Misc
export function Pin({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 17v5M9 10.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V7a1 1 0 0 1 1-1 2 2 0 0 0 0-4H8a2 2 0 0 0 0 4 1 1 0 0 1 1 1v3.76Z" />
        </BaseIcon>
    );
}

export function Tag({ fillColor = '#000', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
            <circle cx="7.5" cy="7.5" r="1.5" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function Tags({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 5H2v7l6.29 6.29c.94.94 2.48.94 3.42 0l3.58-3.58c.94-.94.94-2.48 0-3.42L9 5Z" />
            <path d="M6 9.01V9M22 13l-7.5 7.5c-.94.94-2.48.94-3.42 0L11 20.5" />
        </BaseIcon>
    );
}

export function Ticket({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
            <path d="M13 5v2M13 17v2M13 11v2" />
        </BaseIcon>
    );
}

export function Award({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="6" />
            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
        </BaseIcon>
    );
}

export function Verified({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2l2.4 2.4L17 3.5l.6 2.6L20.5 7l-1 2.6L21 12l-1.5 2.4 1 2.6-2.9.9-.6 2.6-2.6-1.1L12 22l-2.4-2.6-2.6 1.1-.6-2.6L3.5 17l1-2.6L3 12l1.5-2.4-1-2.6 2.9-.9L7 3.5l2.6 1.1L12 2Z" />
            <path d="m9 12 2 2 4-4" />
        </BaseIcon>
    );
}

export function Crown({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z" />
            <path d="M5 21h14" />
        </BaseIcon>
    );
}

export function Gift({ fillColor = '#EC4899', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </BaseIcon>
    );
}

export function Lightbulb({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6M10 22h4" />
        </BaseIcon>
    );
}

export function Infinity({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 12c-2-2.5-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.5 6-4Zm0 0c2 2.5 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.5-6 4Z" />
        </BaseIcon>
    );
}

export function Puzzle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 2c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.017Z" />
        </BaseIcon>
    );
}

// Arrows & Directional
export function ArrowLeftRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 3 4 7l4 4M4 7h16M16 21l4-4-4-4M20 17H4" />
        </BaseIcon>
    );
}

export function ArrowUpDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m21 16-4 4-4-4M17 20V4M7 4 3 8l4 4M3 8h14" />
        </BaseIcon>
    );
}

export function CornerUpLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polyline points="9 14 4 9 9 4" />
            <path d="M20 20v-7a4 4 0 0 0-4-4H4" />
        </BaseIcon>
    );
}

export function CornerUpRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polyline points="15 14 20 9 15 4" />
            <path d="M4 20v-7a4 4 0 0 1 4-4h12" />
        </BaseIcon>
    );
}

export function MoveArrows({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
        </BaseIcon>
    );
}

// Charts
export function AreaChart({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 3v18h18" />
            <path d="M7 16c.5-2 1.5-7.5 4-8s2 5.5 4 6 3-3 3-3" />
        </BaseIcon>
    );
}

export function DonutChart({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9Z" />
            <path d="M15.56 6.44a7 7 0 1 0 2 7.56" />
            <circle cx="12" cy="12" r="3" />
        </BaseIcon>
    );
}

export function Gauge({ fillColor = '#000', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m12 14 2-7.5" />
            <path d="M5 21a7 7 0 0 1 14 0" />
            <circle cx="12" cy="14" r="1" fill={color} stroke="none" />
            <path d="M7.2 14.2a6 6 0 0 1 2.6-4.7M16.8 14.2a6 6 0 0 0-2.6-4.7" />
        </BaseIcon>
    );
}

export function FunnelChart({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10 20v-6.5L4 5h16l-6 8.5V20l-4-2Z" />
        </BaseIcon>
    );
}

// Text Formatting (remaining)
export function TextColor({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 20h16" strokeWidth="3" />
            <path d="M6 16l6-12 6 12M8.5 12h7" />
        </BaseIcon>
    );
}

export function Highlight({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m9 11-6 6v3h3l6-6M22 5l-3-3-9.5 9.5 3 3Z" />
            <path d="m16 5 3 3" />
        </BaseIcon>
    );
}

// Drawing Tools (remaining)
export function PenTool({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m12 19 7-7 3 3-7 7-3-3Z" />
            <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
            <path d="m2 2 7.586 7.586" />
            <circle cx="11" cy="11" r="2" />
        </BaseIcon>
    );
}

export function Lasso({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 22a5 5 0 0 1-2-4" />
            <path d="M3.3 14A6.012 6.012 0 0 1 3 13a7 7 0 0 1 7-7 7 7 0 0 1 7 7c0 3-1 5-3 6" />
            <path d="M13 17c0 2.8-2 3-5 3" />
        </BaseIcon>
    );
}

export function Marquee({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="4 2" />
        </BaseIcon>
    );
}

export function ColorSwatch({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="14" width="10" height="8" rx="2" />
            <path d="M6 14V2h4v12" />
            <path d="M14 6h4a2 2 0 0 1 2 2v11a1 1 0 0 1-1.7.7l-4-4a1 1 0 0 1 0-1.4L18 10" />
        </BaseIcon>
    );
}

export function GridLines({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 3h18M3 9h18M3 15h18M3 21h18M3 3v18M9 3v18M15 3v18M21 3v18" />
        </BaseIcon>
    );
}

// Devices (remaining)
export function Headset({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 14h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
            <path d="M20 14h1a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2Z" />
            <path d="M3 16A9 9 0 0 1 21 16" />
        </BaseIcon>
    );
}

export function ServerIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="2" width="20" height="8" rx="2" />
            <rect x="2" y="14" width="20" height="8" rx="2" />
            <path d="M6 6h.01M6 18h.01" />
        </BaseIcon>
    );
}

// Layout & UI Structure (remaining)
export function Accordion({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="5" rx="1" />
            <path d="M21 8v5H3V8" />
            <path d="M9 11l3 3 3-3" />
            <rect x="3" y="16" width="18" height="5" rx="1" />
            <path d="M15 19l-3-3-3 3" />
        </BaseIcon>
    );
}

export function Tooltip({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9" />
            <path d="m8 15 4 4 4-4" />
            <path d="M19 2l-7 5" />
            <circle cx="21" cy="3" r="2" />
        </BaseIcon>
    );
}

export function Modal({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="2" width="20" height="20" rx="2" opacity="0.4" />
            <rect x="5" y="5" width="14" height="14" rx="2" />
            <path d="M9 9h6M9 12h6M9 15h4" />
        </BaseIcon>
    );
}

export function Drawer({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="3" width="20" height="18" rx="2" />
            <path d="M15 3v18M19 8l-2 2 2 2" />
        </BaseIcon>
    );
}

export function Tabs({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 11h5a1 1 0 0 0 1-1V3H2v8ZM8 3h5a1 1 0 0 1 1 1v7H8V3Z" />
            <path d="M14 11h8M2 11h20v10H2z" />
        </BaseIcon>
    );
}

export function TreeView({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
            <path d="M3 6v6M3 12v6" strokeDasharray="2 1" />
        </BaseIcon>
    );
}

export function ContextMenu({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="4 2" />
            <rect x="8" y="8" width="12" height="10" rx="1" />
            <path d="M11 11h6M11 14h4" />
        </BaseIcon>
    );
}

// Media & Player Controls (remaining)
export function VolumeHigh({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </BaseIcon>
    );
}

export function VolumeMedium({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
        </BaseIcon>
    );
}

export function VolumeLow({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
            <path d="M13.73 9a8 8 0 0 1 0 6" />
        </BaseIcon>
    );
}

export function PictureInPicture({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
            <rect x="13" y="14" width="8" height="6" rx="1" />
        </BaseIcon>
    );
}

export function Subtitles({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
        </BaseIcon>
    );
}

export function Playlist({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M3 12h18M3 18h12" />
            <circle cx="19" cy="18" r="2" />
            <path d="M21 10v8" />
        </BaseIcon>
    );
}

export function Screenshot({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 2h2a2 2 0 0 1 2 2v2M22 14v2a2 2 0 0 1-2 2h-2M10 22H8a2 2 0 0 1-2-2v-2M2 10V8a2 2 0 0 1 2-2h2" />
            <rect x="7" y="7" width="10" height="10" rx="1" />
        </BaseIcon>
    );
}

export function Record({ fillColor = '#EF4444', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="8" fill={color} opacity="0.2" />
            <circle cx="12" cy="12" r="3" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function LiveStream({ fillColor = '#EF4444', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="2" fill={color} stroke="none" />
            <path d="M8.56 2.9A10 10 0 0 0 2 12M15.44 2.9A10 10 0 0 1 22 12" />
            <path d="M5.29 6.1a8 8 0 0 0-1 9.3M18.71 6.1a8 8 0 0 1 1 9.3" />
        </BaseIcon>
    );
}

export function Speed({ fillColor = '#000', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5.83 15A7 7 0 1 1 19 15" />
            <path d="M12 8v4l2.5 2.5" />
            <circle cx="12" cy="15" r="1" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function Rewind({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polygon points="11 19 2 12 11 5 11 19" />
            <polygon points="22 19 13 12 22 5 22 19" />
        </BaseIcon>
    );
}

// Navigation & Location (remaining)
export function Compass({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12z" />
        </BaseIcon>
    );
}

export function Navigate({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polygon points="3 11 22 2 13 21 11 13 3 11" />
        </BaseIcon>
    );
}

export function Directions({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2 2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </BaseIcon>
    );
}

export function Route({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="19" r="3" />
            <path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15" />
            <circle cx="18" cy="5" r="3" />
        </BaseIcon>
    );
}

export function Waypoint({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="4" />
            <path d="M12 12v10M8 22h8" />
        </BaseIcon>
    );
}

export function GPSFix({ fillColor = '#10B981', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            <circle cx="12" cy="12" r="1" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function GPSOff({ fillColor = '#9CA3AF', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
            <path d="M8.5 8.5A4 4 0 0 0 12 16a4 4 0 0 0 3.5-2.1" />
            <path d="M3 3l18 18" />
        </BaseIcon>
    );
}

// Finance & Business (remaining)
export function ATM({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M7 15V9M5 9h4M10 9l2 6 2-6M16 9v6M14 9h4M14 12h4" />
        </BaseIcon>
    );
}

export function Safe({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="3" width="20" height="19" rx="2" />
            <circle cx="12" cy="12" r="4" />
            <path d="M12 8v4M12 16v.5M2 7h2M2 12h2M2 17h2" />
        </BaseIcon>
    );
}

export function Exchange({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 3l4 4-4 4M7 21l-4-4 4-4" />
            <path d="M21 7H3M3 17h18" />
        </BaseIcon>
    );
}

export function Handshake({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m11 17 2 2a1 1 0 1 0 3-3" />
            <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4" />
            <path d="m21 3 1 11h-1" />
            <path d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3" />
            <path d="M3 4h8" />
        </BaseIcon>
    );
}

export function Portfolio({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
            <path d="M7 12h10M7 16h6" />
        </BaseIcon>
    );
}

export function Contract({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 13h8M8 17h6M8 9h2" />
            <path d="M14 17.5c.6-.6 1.4-.8 2-.5s1 1 .8 1.7" />
        </BaseIcon>
    );
}

export function WonSign({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 3l3 9 4-6 4 6 3-9M3 13h18M3 17h18" />
        </BaseIcon>
    );
}

export function FrancSign({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 4h10M7 8h8M7 4v16" />
        </BaseIcon>
    );
}

export function RubleSign({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 3h6a4 4 0 0 1 0 8H8M8 11h8M8 3v16" />
        </BaseIcon>
    );
}

// Communication (remaining)
export function PhoneOutgoing({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polyline points="22 8 22 2 16 2" />
            <line x1="16" y1="8" x2="22" y2="2" />
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </BaseIcon>
    );
}

export function ReplyAll({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polyline points="7 17 2 12 7 7" />
            <polyline points="11 17 6 12 11 7" />
            <path d="M22 18v-2a4 4 0 0 0-4-4H6" />
        </BaseIcon>
    );
}

export function Follow({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <line x1="19" y1="8" x2="19" y2="14" />
            <line x1="22" y1="11" x2="16" y2="11" />
        </BaseIcon>
    );
}

export function Clap({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M11 4c-1.1-1.1-2.9-1.1-4 0L5 6l3 3" />
            <path d="M13 2c-1.1-1.1-2.9-1.1-4 0M6 8l-3 3c-1.1 1.1-1.1 2.9 0 4l6 6c1.5 1.5 3.5 2 5.5 2s4-.5 5.5-2l1-1c1.1-1.1 1.1-2.9 0-4L15 10l-2-2" />
            <path d="M9 11l4 4" />
        </BaseIcon>
    );
}

// Security & Auth (remaining)
export function Password({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="9" width="20" height="12" rx="2" />
            <path d="M6 13h.01M10 13h.01M14 13h.01M18 13h.01M6 17h.01M10 17h.01M14 17h.01M18 17h.01" />
        </BaseIcon>
    );
}

export function FaceID({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
            <path d="M9 9h.01M15 9h.01M9.5 15a3.5 3.5 0 0 0 5 0" />
            <path d="M12 6v3" />
        </BaseIcon>
    );
}

export function TouchID({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 10a2 2 0 0 1 2 2c0 1.5-.5 3-1.5 4.5" />
            <path d="M12 10a2 2 0 0 0-2 2c0 1.5.5 3.5 2 5" />
            <path d="M12 7a5 5 0 0 1 5 5c0 2.5-1 5-3 7" />
            <path d="M12 7a5 5 0 0 0-5 5c0 3 1.5 5.5 4 7.5" />
            <path d="M12 4a8 8 0 0 1 8 8c0 3.5-1.5 7-4 9.5" />
            <path d="M12 4a8 8 0 0 0-8 8c0 3.5 1.5 7 4.5 9.5" />
        </BaseIcon>
    );
}

export function Firewall({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
            <path d="M9.5 9c.5-1 1.5-2 2.5-2s2 1 2 2-1 2-2 2-2 1-2 2 1 2 2 2" />
            <path d="M12 17h.01" />
        </BaseIcon>
    );
}

export function Encrypt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 9.9-1" />
            <path d="M12 16v.01" />
        </BaseIcon>
    );
}

// Status & Feedback (remaining)
export function Progress({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0Z" opacity="0.3" />
            <path d="M22 12A10 10 0 0 0 12 2" strokeLinecap="round" />
        </BaseIcon>
    );
}

export function Skeleton({ fillColor = '#D1D5DB', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="3" width="8" height="8" rx="2" />
            <rect x="2" y="13" width="20" height="2" rx="1" />
            <rect x="2" y="17" width="14" height="2" rx="1" />
            <rect x="12" y="3" width="10" height="8" rx="2" />
        </BaseIcon>
    );
}

export function Dot({ fillColor = '#6B7280', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="4" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function Pulse({ fillColor = '#EF4444', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="4" fill={color} stroke="none" />
            <circle cx="12" cy="12" r="8" opacity="0.4" />
        </BaseIcon>
    );
}

export function Success({ fillColor = '#10B981', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="m9 12 2 2 4-4" />
        </BaseIcon>
    );
}

export function Warning({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
            <path d="M12 9v4M12 17h.01" />
        </BaseIcon>
    );
}

export function Danger({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4M12 16h.01" />
        </BaseIcon>
    );
}

export function Empty({ fillColor = '#D1D5DB', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" opacity="0.3" />
            <path d="M9 22V12h6v10M3 9l9-7 9 7" />
            <path d="M9 12h6" opacity="0.5" />
        </BaseIcon>
    );
}

// Arrows & Directional (remaining)
export function ArrowCircleLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="m12 8-4 4 4 4M8 12h8" />
        </BaseIcon>
    );
}

export function ArrowCircleRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="m12 16 4-4-4-4M16 12H8" />
        </BaseIcon>
    );
}

export function ArrowCircleUp({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="m8 12 4-4 4 4M12 16V8" />
        </BaseIcon>
    );
}

export function ArrowCircleDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="m16 12-4 4-4-4M12 8v8" />
        </BaseIcon>
    );
}

export function CornerDownLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polyline points="9 10 4 15 9 20" />
            <path d="M20 4v7a4 4 0 0 1-4 4H4" />
        </BaseIcon>
    );
}

export function CornerDownRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <polyline points="15 10 20 15 15 20" />
            <path d="M4 4v7a4 4 0 0 0 4 4h12" />
        </BaseIcon>
    );
}

export function DiagonalArrows({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 3h6v6M9 21H3v-6M3 3l7.5 7.5M13.5 13.5 21 21" />
        </BaseIcon>
    );
}

// Charts & Data (remaining)
export function ScatterPlot({ fillColor = '#000', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 3v18h18" />
            <circle cx="8" cy="14" r="1.5" fill={color} stroke="none" />
            <circle cx="12" cy="9" r="1.5" fill={color} stroke="none" />
            <circle cx="16" cy="12" r="1.5" fill={color} stroke="none" />
            <circle cx="10" cy="17" r="1.5" fill={color} stroke="none" />
            <circle cx="18" cy="7" r="1.5" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function Heatmap({ fillColor = '#EF4444', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="4" height="4" rx="0.5" fill={color} opacity="0.9" stroke="none" />
            <rect x="9" y="3" width="4" height="4" rx="0.5" fill={color} opacity="0.5" stroke="none" />
            <rect x="15" y="3" width="6" height="4" rx="0.5" fill={color} opacity="0.3" stroke="none" />
            <rect x="3" y="9" width="4" height="4" rx="0.5" fill={color} opacity="0.4" stroke="none" />
            <rect x="9" y="9" width="4" height="4" rx="0.5" fill={color} opacity="1" stroke="none" />
            <rect x="15" y="9" width="6" height="4" rx="0.5" fill={color} opacity="0.6" stroke="none" />
            <rect x="3" y="15" width="4" height="6" rx="0.5" fill={color} opacity="0.2" stroke="none" />
            <rect x="9" y="15" width="4" height="6" rx="0.5" fill={color} opacity="0.7" stroke="none" />
            <rect x="15" y="15" width="6" height="6" rx="0.5" fill={color} opacity="0.5" stroke="none" />
        </BaseIcon>
    );
}

export function Candlestick({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 2v3M6 11v9M18 4v7M18 17v3" />
            <rect x="4" y="5" width="4" height="6" rx="0.5" />
            <rect x="16" y="11" width="4" height="6" rx="0.5" />
            <path d="M12 3v4M12 13v8" />
            <rect x="10" y="7" width="4" height="6" rx="0.5" />
        </BaseIcon>
    );
}

// Miscellaneous UI (remaining)
export function PinOff({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 17v5M3 3l18 18M9 10.76A2 2 0 0 1 9 10.76V7a1 1 0 0 0-1-1M13 3c2 0 3 .9 3 2v3.76a2 2 0 0 0 1.11 1.79l1.78.9A2 2 0 0 1 20 13.24V16a1 1 0 0 1-1 1H7.5" />
        </BaseIcon>
    );
}

export function Badge({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        </BaseIcon>
    );
}

export function Ribbon({ fillColor = '#EC4899', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 8a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
            <path d="m12 8-5 13 5-3 5 3-5-13" />
        </BaseIcon>
    );
}

export function Discount({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
            <path d="M9 9 15 15M9.5 9.5h.01M14.5 14.5h.01" />
        </BaseIcon>
    );
}

export function Anchor({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="5" r="3" />
            <path d="M12 8v14M5 12H2a10 10 0 0 0 20 0h-3" />
        </BaseIcon>
    );
}

export function Aperture({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="m14.31 8 5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16 3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
        </BaseIcon>
    );
}

export function Feather({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
            <path d="M16 8 2 22M17.5 15H9" />
        </BaseIcon>
    );
}

export function Telescope({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.538-2.15a1.07 1.07 0 0 1 .691-1.265l13.26-4.5" />
            <path d="m13.56 11.747 4.332-.924" />
            <path d="m16 21-3.105-6.21" />
            <path d="M16.485 5.94a2 2 0 0 1 1.455-2.425l1.932-.518a1 1 0 0 1 1.212.727l1.272 4.748a1 1 0 0 1-.727 1.213l-1.931.518a2 2 0 0 1-2.425-1.456z" />
            <path d="m17.357 16.114 3.137-7.994" />
            <path d="M8 21l-1.105-6.21" />
            <path d="M9 15h6" />
        </BaseIcon>
    );
}

export function Satellite({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M13 7 9 3 5 7l4 4" />
            <path d="m17 11 4 4-4 4-4-4" />
            <path d="m8 12 4 4 6-6-4-4Z" />
            <path d="m16 8 3-3M9 21a6 6 0 0 0-6-6" />
        </BaseIcon>
    );
}

export function Antenna({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 12 7 2M22 12l-5-10M12 12 7 2M12 12l5-10M12 12v10M8 22h8" />
            <path d="M5 7a7 7 0 0 0 14 0" />
        </BaseIcon>
    );
}

export function Broadcast({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M18.364 5.636a9 9 0 0 1 0 12.728" />
            <path d="M5.636 18.364a9 9 0 0 1 0-12.728" />
            <path d="M15.536 8.464a5 5 0 0 1 0 7.072" />
            <path d="M8.464 15.536a5 5 0 0 1 0-7.072" />
            <circle cx="12" cy="12" r="2" />
        </BaseIcon>
    );
}

export function Certificate({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="4" width="20" height="12" rx="2" />
            <path d="M8 12h8M8 8h4" />
            <path d="M8 20h3M13 16v6l2-1 2 1v-6" />
        </BaseIcon>
    );
}

export function Bulb({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
            <path d="M9 18h6M10 22h4" />
        </BaseIcon>
    );
}
