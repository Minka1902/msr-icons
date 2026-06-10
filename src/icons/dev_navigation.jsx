import { BaseIcon } from './BaseIcon';

// Arrows / Navigation / Movement
export function ArrowUpRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 17 17 7M8 7h9v9" />
        </BaseIcon>
    );
}

export function ArrowUpLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 17 7 7M16 7H7v9" />
        </BaseIcon>
    );
}

export function ArrowDownRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 7 17 17M17 8v9H8" />
        </BaseIcon>
    );
}

export function ArrowDownLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 7 7 17M7 8v9h9" />
        </BaseIcon>
    );
}

export function ArrowsUpDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 4v16M4 8l4-4 4 4M16 20V4M20 16l-4 4-4-4" />
        </BaseIcon>
    );
}

export function ArrowsLeftRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8h16M8 4 4 8l4 4M20 16H4M16 12l4 4-4 4" />
        </BaseIcon>
    );
}

export function ArrowUpCircle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 16V8M8 12l4-4 4 4" />
        </BaseIcon>
    );
}

export function ArrowDownCircle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v8M16 12l-4 4-4-4" />
        </BaseIcon>
    );
}

export function ArrowLeftCircle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M16 12H8M12 8l-4 4 4 4" />
        </BaseIcon>
    );
}

export function ArrowRightCircle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12h8M12 8l4 4-4 4" />
        </BaseIcon>
    );
}

export function ChevronUpDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 9l4-4 4 4M8 15l4 4 4-4" />
        </BaseIcon>
    );
}

export function ChevronsUp({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 13l6-6 6 6M6 19l6-6 6 6" />
        </BaseIcon>
    );
}

export function ChevronsDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 5l6 6 6-6M6 11l6 6 6-6" />
        </BaseIcon>
    );
}

export function ChevronsLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M13 6l-6 6 6 6M19 6l-6 6 6 6" />
        </BaseIcon>
    );
}

export function ChevronsRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M11 6l6 6-6 6M5 6l6 6-6 6" />
        </BaseIcon>
    );
}

export function CaretUp({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 14l5-5 5 5" />
        </BaseIcon>
    );
}

export function CaretDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 10l5 5 5-5" />
        </BaseIcon>
    );
}

export function CaretLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 7l-5 5 5 5" />
        </BaseIcon>
    );
}

export function CaretRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10 7l5 5-5 5" />
        </BaseIcon>
    );
}

export function Move({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3v18M3 12h18M9 6l3-3 3 3M9 18l3 3 3-3M6 9l-3 3 3 3M18 9l3 3-3 3" />
        </BaseIcon>
    );
}

export function MoveHorizontal({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h18M6 9l-3 3 3 3M18 9l3 3-3 3" />
        </BaseIcon>
    );
}

export function MoveVertical({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3v18M9 6l3-3 3 3M9 18l3 3 3-3" />
        </BaseIcon>
    );
}

export function MoveDiagonal({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 19 19 5M5 11V5h6M19 13v6h-6" />
        </BaseIcon>
    );
}

export function ExpandArrows({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 4H4v5M20 9V4h-5M15 20h5v-5M4 15v5h5M4 4l6 6M20 4l-6 6M4 20l6-6M20 20l-6-6" />
        </BaseIcon>
    );
}

export function CollapseArrows({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10 4v5H5M19 10h-5V5M14 20v-5h5M5 14h5v5M4 4l6 6M20 4l-6 6M4 20l6-6M20 20l-6-6" />
        </BaseIcon>
    );
}

export function Maximize2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 4h5v5M20 4l-7 7M9 20H4v-5M4 20l7-7" />
        </BaseIcon>
    );
}

export function Minimize2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M19 9h-5V4M14 10l7-7M5 15h5v5M10 14l-7 7" />
        </BaseIcon>
    );
}

export function ArrowUturnLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 14l-5-5 5-5M4 9h10a5 5 0 0 1 5 5v6" />
        </BaseIcon>
    );
}

export function ArrowUturnRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 14l5-5-5-5M20 9H10a5 5 0 0 0-5 5v6" />
        </BaseIcon>
    );
}

export function ArrowUturnUp({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 9 9 4 4 9M9 4v10a5 5 0 0 0 5 5h6" />
        </BaseIcon>
    );
}

export function ArrowUturnDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 15l-5 5-5-5M9 20V10a5 5 0 0 1 5-5h6" />
        </BaseIcon>
    );
}

export function SwapHorizontal({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8h16l-4-4M20 16H4l4 4" />
        </BaseIcon>
    );
}

export function SwapVertical({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 4v16l-4-4M16 20V4l4 4" />
        </BaseIcon>
    );
}

export function Shuffle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h4l10 12h4M17 14l4 4-4 4M3 18h4l3-3.5M14 9.5 17 6h4M17 2l4 4-4 4" />
        </BaseIcon>
    );
}
