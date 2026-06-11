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


// Education / Office
export function GraduationCap2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 8 12 4l10 4-10 4L2 8Z" /><path d="M6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5M21 8.5V14" />
        </BaseIcon>
    );
}

export function Certificate3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="13" rx="2" /><path d="M7 8h10M7 11h6" /><circle cx="16" cy="16" r="3" /><path d="m14.5 18.5-.5 3 2-1 2 1-.5-3" />
        </BaseIcon>
    );
}

export function Backpack2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 8a6 6 0 0 1 12 0v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" /><path d="M9 8a3 3 0 0 1 6 0M9 13h6v4H9zM10 8V5a2 2 0 0 1 4 0v3" />
        </BaseIcon>
    );
}

export function Notebook3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="3" width="14" height="18" rx="2" /><path d="M9 3v18M5 8h4M5 12h4M5 16h4M12 8h4M12 12h3" />
        </BaseIcon>
    );
}

export function Notepad2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="5" width="16" height="16" rx="2" /><path d="M8 3v4M12 3v4M16 3v4M8 12h8M8 16h5" />
        </BaseIcon>
    );
}

export function Ruler2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="8" width="18" height="8" rx="1" transform="rotate(-45 12 12)" /><path d="M8 8v2M11 11v2M14 14v2M11 5v2M14 8v2M17 11v2" />
        </BaseIcon>
    );
}

export function Triangle3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 19h16L4 5v14Z" /><path d="M4 13a6 6 0 0 0 6 6" />
        </BaseIcon>
    );
}

export function Compass3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="m16 8-2 6-6 2 2-6 6-2Z" />
        </BaseIcon>
    );
}

export function Calculator3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M7 7h10v3H7z" /><path d="M8 14h.01M12 14h.01M16 14h.01M8 17h.01M12 17h.01M16 17h.01" />
        </BaseIcon>
    );
}

export function Abacus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M3 15h18" /><circle cx="7" cy="6" r="1" /><circle cx="11" cy="6" r="1" /><circle cx="9" cy="12" r="1" /><circle cx="14" cy="12" r="1" /><circle cx="8" cy="18" r="1" /><circle cx="16" cy="18" r="1" />
        </BaseIcon>
    );
}

export function Atlas2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 4a2 2 0 0 1 2-2h12v18H7a2 2 0 0 0-2 2V4Z" /><circle cx="12" cy="9" r="3.5" /><path d="M8.5 9h7M12 5.5a8 8 0 0 1 0 7" />
        </BaseIcon>
    );
}

export function Dictionary({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 4a2 2 0 0 1 2-2h12v18H7a2 2 0 0 0-2 2V4Z" /><path d="M9 7l2 6 2-6M10 11h2M15 7v6M15 7c1.5 0 1.5 3 0 3" />
        </BaseIcon>
    );
}

export function Encyclopedia({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="5" height="18" rx="1" /><rect x="8.5" y="3" width="5" height="18" rx="1" /><path d="M19 5l3 .5-2 15.5-3-.5L19 5Z" /><path d="M5 7h.01M11 7h.01" />
        </BaseIcon>
    );
}

export function Bookmark3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 3h12v18l-6-4-6 4V3Z" />
        </BaseIcon>
    );
}

export function BookOpen3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 5C10 3.5 7 3.5 4 4v14c3-.5 6-.5 8 1 2-1.5 5-1.5 8-1V4c-3-.5-6-.5-8 1Z" /><path d="M12 5v15" />
        </BaseIcon>
    );
}

export function Library2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4h3v16H4zM9 4h3v16H9z" /><path d="M15 4.5 18 4l3 15.5-3 .5L15 4.5Z" />
        </BaseIcon>
    );
}

export function Lecture({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="11" rx="1.5" /><path d="M3 15h18M8 15l-1 5M16 15l1 5M11 9l3 1.5L11 12V9Z" />
        </BaseIcon>
    );
}

export function Whiteboard2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="12" rx="2" /><path d="M12 16v4M8 20h8M7 8l2 4 2-6 2 4" />
        </BaseIcon>
    );
}

export function Presentation2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="12" rx="1.5" /><path d="M12 15v4M8 20l4-3 4 3M7 11l2-2 2 1 3-4" />
        </BaseIcon>
    );
}

export function Easel({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4h16v9H4z" /><path d="M12 13v4M7 21l5-4 5 4M9 8l2 2 4-4" />
        </BaseIcon>
    );
}

export function Microscope3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 21h12M8 21l-1-4h6l-1 4" /><path d="M11 16V6a2 2 0 0 1 4 0M13 4l3 3-3 3M9 12a6 6 0 0 0 8 4" />
        </BaseIcon>
    );
}

export function Flashcard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="6" width="16" height="12" rx="2" transform="rotate(-6 12 12)" /><path d="M9 11h6M9 14h4" />
        </BaseIcon>
    );
}
