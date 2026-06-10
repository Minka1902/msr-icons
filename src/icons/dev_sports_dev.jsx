import { BaseIcon } from './BaseIcon';

// Sports / Activity
export function Trophy2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 4h8v5a4 4 0 0 1-8 0V4Z" /><path d="M8 5H5v2a3 3 0 0 0 3 3M16 5h3v2a3 3 0 0 1-3 3M10 13v3M14 13v3M8 20h8M9 16h6v4H9z" />
        </BaseIcon>
    );
}

export function Medal2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="15" r="6" /><path d="M9 3 7 9M15 3l2 6M12 3v4" /><path d="M12 12.5 13 14.5 15 14.5 13.5 16 14 18 12 17 10 18 10.5 16 9 14.5 11 14.5Z" />
        </BaseIcon>
    );
}

export function Award2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="9" r="6" /><path d="m9 14-1 7 4-2 4 2-1-7" /><path d="M12 6v3l2 1" />
        </BaseIcon>
    );
}

export function Ribbon2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="5" /><path d="m8 12-2 9 6-3 6 3-2-9" /><path d="M10 8h4" />
        </BaseIcon>
    );
}

export function Dumbbell2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 9v6M6 7v10M18 7v10M21 9v6M6 12h12" />
        </BaseIcon>
    );
}

export function Barbell({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 10v4M4 8v8M20 8v8M22 10v4M4 12h16" /><circle cx="12" cy="12" r="0" />
        </BaseIcon>
    );
}

export function Treadmill({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 17a3 3 0 0 0 6 0h8M4 17h14" /><path d="M19 6v11M19 6l-3 1M11 13l1-4 4 1M9 7h.01" /><circle cx="9" cy="6" r="1.5" />
        </BaseIcon>
    );
}

export function Running2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="15" cy="5" r="2" /><path d="m13 8-4 3 2 3-1 5M11 11l5 1 2 3M9 11l-3 1M5 19l3-3" />
        </BaseIcon>
    );
}

export function Cycling2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="17" r="3" /><circle cx="18" cy="17" r="3" /><circle cx="13" cy="5" r="1.8" /><path d="m6 17 4-6 3 3 3-3M10 11l-2-3h4M13 8h3" />
        </BaseIcon>
    );
}

export function Swimming2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="8" cy="7" r="2" /><path d="m4 14 4-3 4 2 3-3M2 18c2 0 2-1.5 4-1.5S10 18 12 18s2-1.5 4-1.5 2 1.5 4 1.5" />
        </BaseIcon>
    );
}

export function Basketball2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3v18M5.5 5.5C8 8 8 16 5.5 18.5M18.5 5.5C16 8 16 16 18.5 18.5" />
        </BaseIcon>
    );
}

export function Football3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="12" rx="9" ry="6" /><path d="M7 12h10M9 10v4M12 9.5v5M15 10v4" />
        </BaseIcon>
    );
}

export function Soccer2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="m12 8 3 2-1 3.5h-4L9 10l3-2Z" /><path d="m12 3 .5 5M3.5 9 9 10M5 18l4-2M19 18l-4-2M20.5 9 15 10" />
        </BaseIcon>
    );
}

export function Tennis2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M5 5a12 12 0 0 1 0 14M19 5a12 12 0 0 0 0 14" />
        </BaseIcon>
    );
}

export function Baseball2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M6 5a12 12 0 0 0 0 14M18 5a12 12 0 0 1 0 14" /><path d="M7 8l1 .5M7 16l1-.5M17 8l-1 .5M17 16l-1-.5" />
        </BaseIcon>
    );
}

export function Golf2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M11 3v13M11 3l6 3-6 3" /><path d="M7 20a4 2 0 0 0 8 0" /><circle cx="11" cy="18" r="1" />
        </BaseIcon>
    );
}

export function Bowling2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="10" cy="8" r="1" /><circle cx="14" cy="8" r="1" /><circle cx="12" cy="11" r="1" />
        </BaseIcon>
    );
}

export function Boxing2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 5h7a4 4 0 0 1 4 4v3a3 3 0 0 1-3 3h-2v3a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V5Z" /><path d="M7 9H5a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h2" />
        </BaseIcon>
    );
}

export function Skateboard2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="9" rx="9" ry="3" /><circle cx="7" cy="15" r="2" /><circle cx="17" cy="15" r="2" /><path d="M7 12v1M17 12v1" />
        </BaseIcon>
    );
}

export function Surfboard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 20C4 9 9 4 20 4 20 15 15 20 4 20Z" /><path d="M7 17c4-1 9-6 10-10" />
        </BaseIcon>
    );
}

export function Dartboard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="2" /><path d="M12 1v3M12 20v3M1 12h3M20 12h3" />
        </BaseIcon>
    );
}

export function Whistle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M16 9a5 5 0 1 1-5 5h-2l-6-2 6-2h7M16 9V6h3" /><circle cx="16" cy="14" r="1" />
        </BaseIcon>
    );
}

export function Stopwatch3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="14" r="7" /><path d="M12 14v-3M9 3h6M12 3v4M19 9l1.5-1.5" />
        </BaseIcon>
    );
}

