import { BaseIcon } from './BaseIcon';

// Home / Real estate
export function HouseAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 11 12 3l9 8" /><path d="M5 9.5V20h14V9.5M9 20v-6h6v6" />
        </BaseIcon>
    );
}

export function Building3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="3" width="14" height="18" rx="1" /><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
        </BaseIcon>
    );
}

export function Apartment2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="8" width="8" height="13" rx="1" /><rect x="11" y="3" width="10" height="18" rx="1" /><path d="M6 12h2M14 7h2M18 7h2M14 11h2M18 11h2M14 15h2M18 15h2" />
        </BaseIcon>
    );
}

export function Office2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M7 7h3M14 7h3M7 11h3M14 11h3M7 15h3M14 15h3M10 21v-3h4v3" />
        </BaseIcon>
    );
}

export function Factory3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 21V11l5 3V11l5 3V8l3 2V5h2v16H3Z" /><path d="M7 17h2M13 17h2M18 17h.01" />
        </BaseIcon>
    );
}

export function Warehouse2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 21V9l9-5 9 5v12" /><path d="M6 21v-8h12v8M6 14h12M9 21v-4M15 21v-4" />
        </BaseIcon>
    );
}

export function Hotel2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M7 7h2M11 7h2M15 7h2M7 11h2M11 11h2M15 11h2M9 21v-4h6v4" /><path d="M12 3v.01" />
        </BaseIcon>
    );
}

export function Cabin({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 21 12 5l9 16H3Z" /><path d="M7 21v-6h10M5 17h14M9 21v-4h6v4" />
        </BaseIcon>
    );
}

export function Castle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 21V8h2V5h2v3h2V5h4v3h2V5h2v3h2v13H4Z" /><path d="M10 21v-4h4v4M8 12h8" />
        </BaseIcon>
    );
}

export function Lighthouse({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 8h6l1 13H8L9 8Z" /><path d="M9 12h6M8 21h8M9 8 8 5h8l-1 3M12 5V2M5 6l-2-1M19 6l2-1" />
        </BaseIcon>
    );
}

export function Door2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="3" width="14" height="18" rx="1" /><path d="M15 12h.01M5 21h14" />
        </BaseIcon>
    );
}

export function DoorOpen2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M13 4 6 6v15M6 21h12M13 4h5v17M13 21V4" /><path d="M11 12h.01" />
        </BaseIcon>
    );
}

export function Window2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="1" /><path d="M12 4v16M4 12h16" />
        </BaseIcon>
    );
}

export function Stairs2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 20h4v-4h4v-4h4V8h4V4" /><path d="M3 20v-4h4v-4h4v-4h4V4" />
        </BaseIcon>
    );
}

export function Elevator2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="18" rx="1" /><path d="M12 3v18M8 9l-1.5 2h3zM16 9l1.5 2h-3z" />
        </BaseIcon>
    );
}

export function Furniture({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 11V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" /><path d="M3 11a2 2 0 0 1 2 2v3h14v-3a2 2 0 0 1 2-2M5 16v3M19 16v3" />
        </BaseIcon>
    );
}

export function Sofa2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 11V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v3" /><path d="M2 12a2 2 0 0 1 2 2v3h16v-3a2 2 0 0 1 2-2 2 2 0 0 0-2 2H4a2 2 0 0 0-2-2ZM5 17v2M19 17v2M8 11h8" />
        </BaseIcon>
    );
}

export function Bed3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8v12M3 12h18a0 0 0 0 1 0 0v8M3 16h18" /><path d="M6 12v-3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v3" />
        </BaseIcon>
    );
}

export function Bathtub2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z" /><path d="M5 12V6a2 2 0 0 1 4 0M6 19l-1 2M18 19l1 2M9 6h.01" />
        </BaseIcon>
    );
}

export function Shower2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 12V7a3 3 0 0 1 6 0M4 12h16" /><path d="M9 12V5a2 2 0 0 1 4 0v1" /><path d="M8 16v1M12 16v2M16 16v1M10 19v1M14 19v1" />
        </BaseIcon>
    );
}

export function Toilet2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 4h2v5M6 4a2 2 0 0 0-2 2v3a4 4 0 0 0 4 4h4l-1 4h-4M5 21h6l1-4" /><path d="M8 9h6V5a1 1 0 0 0-1-1h-1" />
        </BaseIcon>
    );
}

export function Kitchen({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="18" rx="1" /><path d="M4 9h16M8 5v2M11 5v2M7 13v4" /><circle cx="15" cy="15" r="2" />
        </BaseIcon>
    );
}

export function Fireplace({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="1" /><path d="M6 3v3h12V3M6 21v-7h12v7" /><path d="M12 17c1.5-1 2-2 1-3.5C12.5 15 11 14 12 11c-2 1.5-3 3-2 5 0 .5.5 1 1 1Z" />
        </BaseIcon>
    );
}

export function Garden({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 13c-3 0-5-2-5-5 3 0 5 2 5 5ZM12 13c3 0 5-2 5-5-3 0-5 2-5 5Z" /><path d="M12 9v12M5 21h14M8 17c-1.5 0-2-1-2-2 1.5 0 2 1 2 2ZM16 17c1.5 0 2-1 2-2-1.5 0-2 1-2 2Z" />
        </BaseIcon>
    );
}

