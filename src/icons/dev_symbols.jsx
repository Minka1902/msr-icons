import { BaseIcon } from './BaseIcon';

// Accessibility / Symbols
export function Accessibility2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="4.5" r="1.8" /><path d="M12 7v6M7 9l5 1 5-1M9 21l3-8 3 8" />
        </BaseIcon>
    );
}

export function SignLanguage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 11V5a1.5 1.5 0 0 1 3 0v5M10 9V4a1.5 1.5 0 0 1 3 0v6M13 9.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6 5 5 0 0 1-4-2l-3-4a1.5 1.5 0 0 1 2.2-2L7 13" />
        </BaseIcon>
    );
}

export function BrailleIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 6h.01" /><path d="M8 12h.01" /><path d="M8 18h.01" /><path d="M14 6h.01" /><path d="M14 12h.01" /><path d="M16 5h.01"/>
        </BaseIcon>
    );
}

export function HearingAid({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 4a6 6 0 0 1 8 5c0 3-2 4-2 6a3 3 0 0 1-5 2" /><path d="M6 9a4 4 0 0 1 6-3.5M14 16c2 0 3-1 3-3" /><circle cx="8" cy="18" r="2" />
        </BaseIcon>
    );
}

export function EyeglassesAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="15" r="3" /><circle cx="18" cy="15" r="3" /><path d="M9 14c1-1 5-1 6 0M3 14l3-7h2M21 14l-3-7h-2" />
        </BaseIcon>
    );
}

export function WalkingCane({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="13" cy="4.5" r="1.8" /><path d="M13 7v4l3 3M13 11l-3 4-2 6M16 14c2 0 2 4 0 6" />
        </BaseIcon>
    );
}

export function ServiceDog({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8 6 5l2 2h3l2 2v6H6a2 2 0 0 1-2-2V8Z" /><path d="M15 9h3l2 3v3h-2M6 15v4M11 15v4M18 15v4" /><path d="M4 8 3 6" />
        </BaseIcon>
    );
}

export function AudioDescription({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M6 15 8 9l2 6M6.7 13h2.6M13 15V9h2a3 3 0 0 1 0 6h-2Z" />
        </BaseIcon>
    );
}

export function Infinity2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 9a3 3 0 1 0 0 6c2 0 3-1.5 5-3s3-3 5-3a3 3 0 1 1 0 6c-2 0-3-1.5-5-3s-3-3-5-3Z" />
        </BaseIcon>
    );
}

export function Percentage2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="7" cy="7" r="2.5" /><circle cx="17" cy="17" r="2.5" /><path d="m6 18 12-12" />
        </BaseIcon>
    );
}

export function Hashtag2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 4 7 20M17 4l-2 16M4 9h16M3 15h16" />
        </BaseIcon>
    );
}

export function Asterisk2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 4v16M5 8l14 8M19 8 5 16" />
        </BaseIcon>
    );
}

export function AmpersandIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M19 20 7 8a3 3 0 0 1 4-4.5c1.5 1 1.5 3-1 5l-3 2.5a4 4 0 0 0 6 6c2-1.5 3-4 3-7" />
        </BaseIcon>
    );
}

export function CopyrightAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M15 9.5a4 4 0 1 0 0 5" />
        </BaseIcon>
    );
}

export function Trademark2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7h6M6 7v8M12 15V7l3 5 3-5v8" />
        </BaseIcon>
    );
}

export function RegisteredMark({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M9 16V8h3a2.5 2.5 0 0 1 0 5H9M12 13l3 3" />
        </BaseIcon>
    );
}

export function SectionSign({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 7a3 3 0 0 0-5-1c-1.5 1.5 0 3 2 4s3.5 2.5 2 4a3 3 0 0 1-5-1" />
        </BaseIcon>
    );
}

export function ParagraphMark({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M13 4v16M17 4v16M13 4h-3a4 4 0 0 0 0 8h3" />
        </BaseIcon>
    );
}

export function DegreeSign({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="9" cy="7" r="3" /><path d="M14 17a4 4 0 0 0 6 0M14 17a4 4 0 0 1 6 0" />
        </BaseIcon>
    );
}

export function PlusMinus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 4v8M8 8h8M8 18h8" />
        </BaseIcon>
    );
}

export function NotEqual({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 9h12M6 15h12M16 5 8 19" />
        </BaseIcon>
    );
}

export function ApproxEqual({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 8c2-2 4-2 7 0s5 2 7 0M5 15c2-2 4-2 7 0s5 2 7 0" />
        </BaseIcon>
    );
}

export function LessThanEqual({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m17 5-11 6 11 6M6 20h11" />
        </BaseIcon>
    );
}

export function GreaterThanEqual({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m7 5 11 6-11 6M7 20h11" />
        </BaseIcon>
    );
}

export function SquareRoot({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 13l3 7 4-16h10" />
        </BaseIcon>
    );
}

export function Pi2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7h16M8 7v11M16 7v9a2 2 0 0 0 3 1" />
        </BaseIcon>
    );
}

export function Sigma2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 4H6l6 8-6 8h11" />
        </BaseIcon>
    );
}

export function Integral({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 20c0 1.5-3 2-3-1V8c0-3 3-3 3-5M15 4c0-1.5 3-2 3 1v12c0 3-3 3-3 5" />
        </BaseIcon>
    );
}

