import { BaseIcon } from './BaseIcon';

// Status / Feedback / Alerts

export function CircleCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="m8 12 2.5 2.5L16 9" />
        </BaseIcon>
    );
}

export function CircleX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="m9 9 6 6M15 9l-6 6" />
        </BaseIcon>
    );
}

export function CircleInfo({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 11v5M12 8h.01" />
        </BaseIcon>
    );
}

export function CircleExclamation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v6M12 16h.01" />
        </BaseIcon>
    );
}

export function CircleQuestion({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M9.5 9.5a2.5 2.5 0 1 1 3.4 2.3c-.6.3-.9.8-.9 1.5v.2M12 16.5h.01" />
        </BaseIcon>
    );
}

export function CircleMinus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12h8" />
        </BaseIcon>
    );
}

export function CirclePlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12h8M12 8v8" />
        </BaseIcon>
    );
}

export function CircleDot({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="2.5" />
        </BaseIcon>
    );
}

export function CircleSlash({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="m6 18 12-12" />
        </BaseIcon>
    );
}

export function CircleHalf({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3v18a9 9 0 0 0 0-18Z" />
        </BaseIcon>
    );
}

export function TriangleAlert({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10.3 4.3 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z" />
            <path d="M12 9v4M12 17h.01" />
        </BaseIcon>
    );
}

export function TriangleExclamation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10.3 4.3 2.8 17a2 2 0 0 0 1.7 3h15a2 2 0 0 0 1.7-3L13.7 4.3a2 2 0 0 0-3.4 0Z" />
            <path d="M12 9v4M12 17h.01" />
        </BaseIcon>
    );
}

export function SquareCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="m8 12 2.5 2.5L16 9" />
        </BaseIcon>
    );
}

export function SquareX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="m9 9 6 6M15 9l-6 6" />
        </BaseIcon>
    );
}

export function SquarePlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 12h8M12 8v8" />
        </BaseIcon>
    );
}

export function SquareMinus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M8 12h8" />
        </BaseIcon>
    );
}

export function SquareDot({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <circle cx="12" cy="12" r="2.5" />
        </BaseIcon>
    );
}

export function OctagonAlert({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8.2 3h7.6L21 8.2v7.6L15.8 21H8.2L3 15.8V8.2L8.2 3Z" />
            <path d="M12 8v4M12 16h.01" />
        </BaseIcon>
    );
}

export function ShieldCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z" />
            <path d="m9 11.5 2 2 4-4" />
        </BaseIcon>
    );
}

export function ShieldX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z" />
            <path d="m9.5 9.5 5 5M14.5 9.5l-5 5" />
        </BaseIcon>
    );
}

export function ShieldAlert({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z" />
            <path d="M12 8v3.5M12 15h.01" />
        </BaseIcon>
    );
}

export function ShieldQuestion({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z" />
            <path d="M10 9.5a2 2 0 1 1 2.8 1.8c-.5.3-.8.7-.8 1.3v.2M12 15h.01" />
        </BaseIcon>
    );
}

export function BadgeCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m3.85 8.62 2.06-1.79.5-2.7 2.7-.5L11.38 1.5h1.24l1.87 2.06 2.7.5.5 2.7 2.06 1.86v1.24l-2.06 1.87-.5 2.7-2.7.5L12.62 16.5h-1.24l-1.87-2.06-2.7-.5-.5-2.7-2.06-1.86Z" transform="translate(0 2.5)" />
            <path d="m9 12 2 2 4-4" />
        </BaseIcon>
    );
}

export function BadgeX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m3.85 8.62 2.06-1.79.5-2.7 2.7-.5L11.38 1.5h1.24l1.87 2.06 2.7.5.5 2.7 2.06 1.86v1.24l-2.06 1.87-.5 2.7-2.7.5L12.62 16.5h-1.24l-1.87-2.06-2.7-.5-.5-2.7-2.06-1.86Z" transform="translate(0 2.5)" />
            <path d="m9.5 9.5 5 5M14.5 9.5l-5 5" />
        </BaseIcon>
    );
}

export function BadgeAlert({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m3.85 8.62 2.06-1.79.5-2.7 2.7-.5L11.38 1.5h1.24l1.87 2.06 2.7.5.5 2.7 2.06 1.86v1.24l-2.06 1.87-.5 2.7-2.7.5L12.62 16.5h-1.24l-1.87-2.06-2.7-.5-.5-2.7-2.06-1.86Z" transform="translate(0 2.5)" />
            <path d="M12 8v3.5M12 15h.01" />
        </BaseIcon>
    );
}

export function BadgeInfo({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m3.85 8.62 2.06-1.79.5-2.7 2.7-.5L11.38 1.5h1.24l1.87 2.06 2.7.5.5 2.7 2.06 1.86v1.24l-2.06 1.87-.5 2.7-2.7.5L12.62 16.5h-1.24l-1.87-2.06-2.7-.5-.5-2.7-2.06-1.86Z" transform="translate(0 2.5)" />
            <path d="M12 15v-3.5M12 9h.01" />
        </BaseIcon>
    );
}

export function StatusOnline({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="4" />
        </BaseIcon>
    );
}

export function StatusOffline({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3a9 9 0 1 0 9 9" />
            <path d="M16 3a4 4 0 0 1 4 4M16 7h4M20 3v4" />
        </BaseIcon>
    );
}

export function StatusAway({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7.5v4.5l3 2" />
        </BaseIcon>
    );
}

export function StatusBusy({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M8 12h8" />
        </BaseIcon>
    );
}

export function Unverified({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.8 7 9 4-1.2 7-4.5 7-9V6l-7-3Z" />
            <path d="M9.8 9.3a2.2 2.2 0 1 1 3 2c-.6.3-.9.7-.9 1.4v.2M12 15.5h.01" />
        </BaseIcon>
    );
}

export function Pending({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M8.5 12h.01M12 12h.01M15.5 12h.01" />
        </BaseIcon>
    );
}

export function Approved({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3.5 12.5 6 15c.4.4 1 .4 1.4 0L9 13.4" />
            <path d="m8 12.5 3 3c.4.4 1 .4 1.4 0L20.5 7" />
        </BaseIcon>
    );
}

export function Rejected({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="m5.6 5.6 12.8 12.8" />
        </BaseIcon>
    );
}

export function Flagged({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 21V4M5 4h11l-2.5 4L16 12H5" />
        </BaseIcon>
    );
}

export function Spinner({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3a9 9 0 1 0 9 9" />
        </BaseIcon>
    );
}

export function LoadingDots({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 12h.01M12 12h.01M18 12h.01" />
        </BaseIcon>
    );
}

export function ProgressRing({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M12 3a9 9 0 0 1 9 9" />
        </BaseIcon>
    );
}
