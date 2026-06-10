import { BaseIcon } from './BaseIcon';

// UI Controls
export function SearchPlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="M10.5 8.3v4.4M8.3 10.5h4.4" />
        </BaseIcon>
    );
}

export function SearchMinus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="M8 10.5h5" />
        </BaseIcon>
    );
}

export function SearchCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="m8.3 10.5 10.1 12.7 12.7 8.3" />
        </BaseIcon>
    );
}

export function SearchX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="M8.5 8.5 12.5 12.5M12.5 8.5 8.5 12.5" />
        </BaseIcon>
    );
}

export function SearchCode({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="m9 9-1.5 1.5L9 12M12 9l1.5 1.5L12 12" />
        </BaseIcon>
    );
}

export function FilterPlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" /><path d="M18 15v4M16 17h4" />
        </BaseIcon>
    );
}

export function FilterX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" /><path d="M16.2 15.2 19.8 18.8M19.8 15.2 16.2 18.8" />
        </BaseIcon>
    );
}

export function FilterCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" /><path d="m16 17 17.6 19 20 15" />
        </BaseIcon>
    );
}

export function SortAlpha({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 4v14M6 18l-2.5-2.5M6 18l2.5-2.5" /><path d="M12 6h4l-4 4h4M12 14h4l-4 4h4" />
        </BaseIcon>
    );
}

export function SortNumeric({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 4v14M6 18l-2.5-2.5M6 18l2.5-2.5" /><path d="M13 6l1.5-1V10M13 14h2v4h-2zM13 14v0a2 2 0 0 1 2 0" />
        </BaseIcon>
    );
}

export function SortClock({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 4v14M6 18l-2.5-2.5M6 18l2.5-2.5" /><circle cx="15" cy="11" r="5" /><path d="M15 8.5V11l1.7 1" />
        </BaseIcon>
    );
}

export function ZoomIn2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="M10.5 8.1v4.8M8.1 10.5h4.8" />
        </BaseIcon>
    );
}

export function ZoomOut2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="M7.5 10.5h6" />
        </BaseIcon>
    );
}

export function ZoomReset({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="M8 9.5a3 3 0 0 1 5-1M8 9v1.5h1.5M13 12v-1.5h-1.5" />
        </BaseIcon>
    );
}

export function ScanLine({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M5 12h14" />
        </BaseIcon>
    );
}

export function ScrollUp({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="3" width="12" height="18" rx="6" /><path d="M9 9l3-3 3 3M12 6v6" />
        </BaseIcon>
    );
}

export function ScrollDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="3" width="12" height="18" rx="6" /><path d="M9 9l3 3 3-3M12 6v6" />
        </BaseIcon>
    );
}

export function ResizeHandle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M20 8 8 20M20 14l-6 6M20 20h.01" />
        </BaseIcon>
    );
}

export function GripVertical({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 6h.01" /><path d="M15 6h.01" /><path d="M9 12h.01" /><path d="M15 12h.01" /><path d="M9 18h.01" /><path d="M15 18h.01" />
        </BaseIcon>
    );
}

export function GripHorizontal({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 9h.01" /><path d="M12 9h.01" /><path d="M18 9h.01" /><path d="M6 15h.01" /><path d="M12 15h.01" /><path d="M18 15h.01" />
        </BaseIcon>
    );
}

export function DotsGrid({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 6h.01" /><path d="M12 6h.01" /><path d="M18 6h.01" /><path d="M6 12h.01" /><path d="M12 12h.01" /><path d="M18 12h.01" /><path d="M6 18h.01" /><path d="M12 18h.01" /><path d="M18 18h.01" />
        </BaseIcon>
    );
}

export function MoreHorizontal2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 12h.01" /><path d="M12 12h.01" /><path d="M18 12h.01" />
        </BaseIcon>
    );
}

export function MoreVertical2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 6h.01" /><path d="M12 12h.01" /><path d="M12 18h.01" />
        </BaseIcon>
    );
}

export function ExpandIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 3H5a2 2 0 0 0-2 2v3M16 3h3a2 2 0 0 1 2 2v3M21 16v3a2 2 0 0 1-2 2h-3M3 16v3a2 2 0 0 0 2 2h3" /><path d="m9 9 6 6M15 9l-6 6" />
        </BaseIcon>
    );
}

export function CollapseIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8h3a2 2 0 0 0 2-2V3M16 3v3a2 2 0 0 0 2 2h3M21 16h-3a2 2 0 0 0-2 2v3M8 21v-3a2 2 0 0 0-2-2H3" />
        </BaseIcon>
    );
}

export function PinTab({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M12 13v3M10.5 13h3l-.5 1.5h-2L10.5 13Z" />
        </BaseIcon>
    );
}

export function UnpinTab({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18M10 13h4M11 13v3M13 13v3" /><path d="m5 8 14 10" />
        </BaseIcon>
    );
}

export function NewTab({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M12 12.8v4.4M9.8 15h4.4" />
        </BaseIcon>
    );
}

export function CloseTab({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="14" rx="2" /><path d="M3 10h18" /><path d="M10 13 14 17M14 13 10 17" />
        </BaseIcon>
    );
}

export function DuplicateTab({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="8" y="8" width="13" height="12" rx="2" /><path d="M8 12h13" /><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
        </BaseIcon>
    );
}

export function SplitScreen({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 4v16" /><path d="M6 9h3M6 12h3M15 9h3M15 12h3" />
        </BaseIcon>
    );
}

