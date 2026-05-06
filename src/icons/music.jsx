import { BaseIcon } from './BaseIcon';

export function MusicNote({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 18V5l12-2v13" />
            <circle cx="6" cy="18" r="3" />
            <circle cx="18" cy="16" r="3" />
        </BaseIcon>
    );
}

export function MusicNotes({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 18V8l12-2v10" />
            <circle cx="5" cy="18" r="3" />
            <circle cx="17" cy="16" r="3" />
            <path d="M8 8L20 6" />
        </BaseIcon>
    );
}

export function Waveform({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 12h2M6 8v8M10 5v14M14 8v8M18 6v12M22 12h2" />
        </BaseIcon>
    );
}

export function Equalizer({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 20h.01M7 20v-4M12 20V10M17 20V4M22 20h.01" />
        </BaseIcon>
    );
}

export function Guitar({ fillColor = '#92400E', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m10 10-6.157 6.162a2 2 0 0 0 0 2.828l1.967 1.967a2 2 0 0 0 2.828 0L14.5 15" />
            <path d="m15 5 1.5 1.5" />
            <path d="m11.5 8.5 1.5 1.5" />
            <path d="M15 13a4 4 0 1 0-4-4c0 1.1.45 2.1 1.17 2.83" />
        </BaseIcon>
    );
}

export function Piano({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="M6 4v16M10 4v10M14 4v10M18 4v16" />
            <path d="M6 14h4M14 14h4" />
        </BaseIcon>
    );
}

export function Drum({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m2 2 8 8" />
            <path d="m22 2-8 8" />
            <ellipse cx="12" cy="14" rx="10" ry="4" />
            <path d="M2 14v4c0 2.21 4.48 4 10 4s10-1.79 10-4v-4" />
        </BaseIcon>
    );
}

export function Microphone2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
            <path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3M8 22h8" />
        </BaseIcon>
    );
}

export function Vinyl({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2a10 10 0 0 1 7.07 2.93" />
        </BaseIcon>
    );
}

export function Album({ fillColor = '#000', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="1" fill={color} stroke="none" />
            <path d="M12 8v1M12 15v1M8 12h1M15 12h1" />
        </BaseIcon>
    );
}
