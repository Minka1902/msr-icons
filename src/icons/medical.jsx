import { BaseIcon } from './BaseIcon';

export function Hospital({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 6v4M10 8h4" />
            <path d="M3 21V8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v13" />
            <path d="M2 21h20M9 21v-5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
        </BaseIcon>
    );
}

export function Stethoscope({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4.8 2.3A.3.3 0 1 0 5 2H4M8 2h.2a.3.3 0 1 1 0 .6" />
            <path d="M6 2v6a6 6 0 0 0 12 0V2" />
            <path d="M18 8a6 6 0 0 0 0 12h1a3 3 0 0 0 0-6h-1" />
        </BaseIcon>
    );
}

export function Pill({ fillColor = '#8B5CF6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="M8.5 8.5l7 7" />
        </BaseIcon>
    );
}

export function Pills({ fillColor = '#8B5CF6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z" />
            <path d="M8.5 8.5l7 7M16 2l6 6M2 16l6 6" />
        </BaseIcon>
    );
}

export function Syringe({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m18 2 4 4M17 7l3-3M8 20l-6 2 2-6 12-12 4 4L8 20Z" />
            <path d="m11 11 2 2M9 13l2 2M7 15l2 2" />
        </BaseIcon>
    );
}

export function Vaccine({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10 2v4M14 2v4" />
            <rect x="8" y="6" width="8" height="12" rx="1" />
            <path d="M8 10h8M8 14h8M12 18v4" />
        </BaseIcon>
    );
}

export function Heartbeat({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </BaseIcon>
    );
}

export function DNA({ fillColor = '#10B981', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 15c6.667-6 13.333 0 20-6" />
            <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
            <path d="M2 9c6.667-6 13.333 0 20-6" />
            <path d="M12.5 3.5c-.294 2-.756 3.997-2.807 5.993" />
            <path d="M5 4.5l5.5 5.5M14 4l5.5 5.5M8.5 14.5 14 20M3 14l5.5 5.5" />
        </BaseIcon>
    );
}

export function Microscope({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 18h8M3 22h18M14 22a7 7 0 1 0 0-14h-1" />
            <path d="M9 14v-3.5M9 10.5V6a2 2 0 0 1 2-2h2a2 2 0 0 1 0 4h-2" />
            <path d="M7 6h2" />
        </BaseIcon>
    );
}

export function Bandage({ fillColor = '#F97316', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m7.21 15 2.04-2.04M11.04 11.29l.97-.97M12.71 9.58l2.04-2.04" />
            <path d="M5 3 3 5l13.5 13.5 2-2L5 3Z" />
            <path d="M14.5 6.5l3 3-1 1-3-3 1-1Z" />
            <path d="m19 21-2-2 3.5-3.5 2 2L19 21Z" />
        </BaseIcon>
    );
}

export function Ambulance({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10 17H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h7" />
            <path d="M5 17v3h14v-3" />
            <path d="M10 6h8l3 5v5h-3" />
            <circle cx="7.5" cy="17.5" r="2.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
            <path d="M13 9v4M11 11h4" />
        </BaseIcon>
    );
}

export function Brain({ fillColor = '#EC4899', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-1.7-3.8 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3Z" />
            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.46 2.5 2.5 0 0 0 1.7-3.8 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3Z" />
        </BaseIcon>
    );
}

export function Tooth({ fillColor = '#60A5FA', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 5.5c-1.5-2-3.5-3-5-2.5S4 6 4 8c0 3 1 5 2 8 .5 2 1 4 2 5.5.5 1 1 1.5 2 1 .7-.3 1-1.5 1-3 0-1.5.5-2.5 1-2.5s1 1 1 2.5c0 1.5.3 2.7 1 3 1 .5 1.5 0 2-1 1-1.5 1.5-3.5 2-5.5 1-3 2-5 2-8 0-2-1-4.5-3-5s-3.5.5-5 2.5Z" />
        </BaseIcon>
    );
}

export function Lungs({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6.081 20C4.225 19.455 3 17.943 3 16.118V9a5 5 0 0 1 9 3v10l-5.919-2Z" />
            <path d="M17.919 20C19.775 19.455 21 17.943 21 16.118V9a5 5 0 0 0-9 3v10l5.919-2Z" />
            <path d="M12 12V3" />
        </BaseIcon>
    );
}

export function BloodDrop({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2C6 9 4 13 4 16a8 8 0 0 0 16 0c0-3-2-7-8-14Z" />
            <path d="M12 12v5M9.5 14.5l2.5 2.5 2.5-2.5" />
        </BaseIcon>
    );
}

export function MedicalCross({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 3h8v4H8zm0 14h8v4H8zM3 8h4v8H3zm14 0h4v8h-4z" />
        </BaseIcon>
    );
}

export function Wheelchair({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="19" cy="19" r="2" />
            <circle cx="9" cy="19" r="2" />
            <path d="M13 19h3.5a.5.5 0 0 0 .5-.5V14" />
            <path d="M9 17V11l2 2h4l1.5-4.5" />
            <circle cx="12" cy="4" r="1" />
            <path d="M9 7l3 2 3-2" />
        </BaseIcon>
    );
}

export function EyeChart({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 7h6M8 11h8M10 15h4M11 19h2" />
        </BaseIcon>
    );
}
