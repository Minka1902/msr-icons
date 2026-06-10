import { BaseIcon } from './BaseIcon';

// Health / Medical
export function Heartbeat2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h4l2-4 3 8 2-6 2 2h5" /><path d="M20 8.5a3 3 0 0 0-5-2.2A3 3 0 0 0 10 8.5" />
        </BaseIcon>
    );
}

export function Pulse2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 12h5l2-7 4 14 2-7h7" />
        </BaseIcon>
    );
}

export function Stethoscope2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 3v5a4 4 0 0 0 8 0V3M5 3H3M5 3h2M11 3h2M9 16a5 5 0 0 0 10 0v-2" /><circle cx="19" cy="11" r="2.5" /><circle cx="9" cy="14" r="1" />
        </BaseIcon>
    );
}

export function Syringe2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m18 3 3 3M16 5l3 3M7 14l3 3M14 7 7 14l-4 1-1 4 4-1 1-4 7-7-4-4Z" /><path d="m11 8 5 5" />
        </BaseIcon>
    );
}

export function Pill2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" /><path d="m9 9 6 6" />
        </BaseIcon>
    );
}

export function Capsule2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="9" width="16" height="6" rx="3" /><path d="M12 9v6" /><path d="M7 11h.01M9 13h.01" />
        </BaseIcon>
    );
}

export function Bandage2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="8" width="18" height="8" rx="4" transform="rotate(-45 12 12)" /><rect x="8" y="8" width="8" height="8" rx="2" transform="rotate(-45 12 12)" /><path d="M11 11h.01M13 13h.01M13 11h.01M11 13h.01" />
        </BaseIcon>
    );
}

export function FirstAid2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="13" rx="2" /><path d="M9 6V4h6v2" /><path d="M12 10v5M9.5 12.5h5" />
        </BaseIcon>
    );
}

export function Ambulance2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 7h11v9H2zM13 10h4l4 4v2h-8" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" /><path d="M6 11v-2M5 10h2M8 4l1-2h3l1 2" />
        </BaseIcon>
    );
}

export function HospitalAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 21V8l8-5 8 5v13" /><path d="M9 21v-5h6v5M12 7v4M10 9h4" />
        </BaseIcon>
    );
}

export function Wheelchair2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="17" r="5" /><path d="M12 3a1.5 1.5 0 1 1 0 .01M12 5v6h5l2 4M9 11h3" /><path d="m17 19 2 3" />
        </BaseIcon>
    );
}

export function Tooth2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c2 0 3 1.5 5 1.5S20 4 20 7c0 4-2 7-2.5 11-.2 1.5-2.3 1.5-2.5 0L14 14c-.2-1-1.8-1-2 0l-1 4c-.2 1.5-2.3 1.5-2.5 0C8 14 6 11 6 7c0-3 1-2.5 2.5-2.5S10 3 12 3Z" />
        </BaseIcon>
    );
}

export function Brain2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 1 5 3 3 0 0 0 3 3 2.5 2.5 0 0 0 2.5-2.5V5.5A1.5 1.5 0 0 0 9 4Z" /><path d="M15 4a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-1 5 3 3 0 0 1-3 3 2.5 2.5 0 0 1-2.5-2.5V5.5A1.5 1.5 0 0 1 15 4Z" />
        </BaseIcon>
    );
}

export function Lungs2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 4v8M9 9c0-1 0-2-1.5-2M15 9c0-1 0-2 1.5-2" /><path d="M9 9c-2 1-4 3-4 7 0 3 1 4 2.5 4S10 19 10 17v-6a2 2 0 0 0-1-2ZM15 9c2 1 4 3 4 7 0 3-1 4-2.5 4S14 19 14 17v-6a2 2 0 0 1 1-2Z" />
        </BaseIcon>
    );
}

export function Bone2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 17a2.5 2.5 0 1 1-1.8-4.2L13 5a2.5 2.5 0 1 1 4 .8 2.5 2.5 0 1 1-.8 4L8 18a2.5 2.5 0 1 1-1-1Z" />
        </BaseIcon>
    );
}

export function Virus2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="5" /><path d="M12 7V3M12 21v-4M7 12H3M21 12h-4M8.5 8.5 6 6M18 18l-2.5-2.5M15.5 8.5 18 6M6 18l2.5-2.5" /><path d="M12 3v.01M12 21v-.01M3 12h.01M21 12h-.01" />
        </BaseIcon>
    );
}

export function Bacteria2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 19c2-2 2-4 1-5M19 5c-2 2-2 4-1 5" /><ellipse cx="12" cy="12" rx="5" ry="3" transform="rotate(-45 12 12)" /><path d="M9 9h.01M12 12h.01M15 15h.01M10 13h.01M14 11h.01" />
        </BaseIcon>
    );
}

export function Vaccine2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m17 3 4 4M15 5l4 4M9 11l4 4M12 8 5 15v3l-2 2M5 15l-2 3 3-2M8 12l5 5" />
        </BaseIcon>
    );
}

export function Dna3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 3c0 6 8 6 8 12M16 3c0 6-8 6-8 12M8 18v3M16 18v3" /><path d="M9 6h6M9.5 9h5M9.5 12h5M9 15h6" />
        </BaseIcon>
    );
}

export function Mask2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8c2-1 5-1 8-1s6 0 8 1c0 6-3 10-8 10S4 14 4 8Z" /><path d="M4 10c-1.5 0-2-1-2-2M20 10c1.5 0 2-1 2-2M9 12a4 4 0 0 0 6 0" />
        </BaseIcon>
    );
}

export function Crutch({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 3h6M12 3v6M12 9 8 19M12 9l4 10M9 13h6M7 21l1.5-2M17 21l-1.5-2" />
        </BaseIcon>
    );
}

