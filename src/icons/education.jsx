import { BaseIcon } from './BaseIcon';

export function GraduationCap({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c3 3 9 3 12 0v-5" />
        </BaseIcon>
    );
}

export function Diploma({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M9 8h6M8 12h8M11 16h2" />
            <circle cx="19" cy="19" r="3" />
            <path d="m21.7 20.7-1.4-1.4" />
        </BaseIcon>
    );
}

export function OpenBook({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </BaseIcon>
    );
}

export function ClosedBook({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </BaseIcon>
    );
}

export function EducationPencil({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
        </BaseIcon>
    );
}

export function DrawingCompass({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="5" r="2" />
            <path d="M10.41 7.41 4.41 20H8l2-4h4l2 4h3.59l-6-12.59" />
            <path d="M10 16h4" />
        </BaseIcon>
    );
}

export function Beaker({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 3h6M10 3v5l-5.5 9a1 1 0 0 0 .9 1.5h13.2a1 1 0 0 0 .9-1.5L14 8V3" />
            <path d="M7.5 15h9" />
        </BaseIcon>
    );
}

export function Atom({ fillColor = '#6366F1', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="1" fill={color} stroke="none" />
            <path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z" />
            <path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z" />
        </BaseIcon>
    );
}

export function School({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 22v-4a2 2 0 1 0-4 0v4" />
            <path d="m18 10 4 2v8a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-8l4-2" />
            <path d="M18 5v17M6 5v17" />
            <rect x="6" y="2" width="12" height="8" rx="1" />
        </BaseIcon>
    );
}

export function Chalkboard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
        </BaseIcon>
    );
}

export function Calculator({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="2" width="16" height="20" rx="2" />
            <rect x="7" y="5" width="10" height="4" rx="1" />
            <path d="M7 13h.01M12 13h.01M17 13h.01M7 17h.01M12 17h.01M17 17h.01" />
        </BaseIcon>
    );
}

export function Microscope2({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 18h8" />
            <path d="M3 22h18" />
            <path d="M14 22a7 7 0 1 0 0-14h-1" />
            <path d="M9 14v-3.5" />
            <path d="M9 10.5V9a2 2 0 0 1 2-2h2a2 2 0 0 1 0 4h-2" />
            <path d="M7.8 6H9" />
        </BaseIcon>
    );
}
