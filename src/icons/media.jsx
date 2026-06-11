import { BaseIcon } from './BaseIcon';

// Media / Player
export function PlayCircle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M10 8.5 16 12l-6 3.5v-7Z" />
        </BaseIcon>
    );
}

export function PauseCircle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M10 9v6M14 9v6" />
        </BaseIcon>
    );
}

export function StopCircle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><rect x="9" y="9" width="6" height="6" rx="1" />
        </BaseIcon>
    );
}

export function SkipForward2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 6l9 6-9 6V6Z" /><path d="M19 5v14" />
        </BaseIcon>
    );
}

export function SkipBackward({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M19 6l-9 6 9 6V6Z" /><path d="M5 5v14" />
        </BaseIcon>
    );
}

export function FastForward2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6l8 6-8 6V6Z" /><path d="M13 6l8 6-8 6V6Z" />
        </BaseIcon>
    );
}

export function Rewind2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 6l-8 6 8 6V6Z" /><path d="M11 6l-8 6 8 6V6Z" />
        </BaseIcon>
    );
}

export function Repeat2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 11V9a3 3 0 0 1 3-3h12l-3-3M21 13v2a3 3 0 0 1-3 3H6l3 3" />
        </BaseIcon>
    );
}

export function RepeatOne({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 11V9a3 3 0 0 1 3-3h12l-3-3M21 13v2a3 3 0 0 1-3 3H6l3 3" /><path d="M11.5 11.5 12 11v3" />
        </BaseIcon>
    );
}

export function ShuffleAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7h3l4 5M3 17h3l11-13h4M21 4l-4 0M21 4v4M14 12l3 4h4M21 20l-4 0M21 20v-4" />
        </BaseIcon>
    );
}

export function VolumeHigh2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 9v6h3l5 4V5L7 9H4Z" /><path d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8 8 0 0 1 0 12" />
        </BaseIcon>
    );
}

export function VolumeLow2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 9v6h3l5 4V5L7 9H4Z" /><path d="M15.5 9.5a4 4 0 0 1 0 5" />
        </BaseIcon>
    );
}

export function VolumeMute2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 9v6h3l5 4V5L7 9H4Z" />
        </BaseIcon>
    );
}

export function VolumeX2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 9v6h3l5 4V5L7 9H4Z" /><path d="m16 9 5 6M21 9l-5 6" />
        </BaseIcon>
    );
}

export function Playlist2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h12M3 12h12M3 18h7" /><path d="M16 18V9l5-2v9" /><circle cx="14" cy="18" r="2" /><circle cx="19" cy="16" r="2" />
        </BaseIcon>
    );
}

export function Album2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" />
        </BaseIcon>
    );
}

export function Track({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 18V5l11-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" />
        </BaseIcon>
    );
}

export function Headphones2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 14v-2a8 8 0 0 1 16 0v2" /><rect x="3" y="13" width="4" height="7" rx="1.5" /><rect x="17" y="13" width="4" height="7" rx="1.5" />
        </BaseIcon>
    );
}

export function MicrophoneOff({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 9V6a3 3 0 0 1 5-2.2M15 9v0M5 11a7 7 0 0 0 10.5 6M12 18v3M8 21h8" /><path d="m4 4 16 16" />
        </BaseIcon>
    );
}

export function Podcast2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="9" r="3" /><path d="M7 9a5 5 0 0 1 10 0M5 9a7 7 0 0 1 14 0" /><path d="M10.5 14h3l-.5 7h-2l-.5-7Z" />
        </BaseIcon>
    );
}

export function Radio2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="8" width="18" height="12" rx="2" /><path d="M7 4 17 8" /><circle cx="8" cy="14" r="3" /><path d="M15 12h3M15 16h3" />
        </BaseIcon>
    );
}

export function Cassette({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="12" r="2" /><circle cx="15.5" cy="12" r="2" /><path d="M7 19l1.5-3h7L17 19" />
        </BaseIcon>
    );
}

export function Soundwave({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" />
        </BaseIcon>
    );
}

export function WaveformIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h2l2-5 3 12 3-16 3 14 2-5h3" />
        </BaseIcon>
    );
}

export function ClosedCaption({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M10 10.5a2.5 2.5 0 1 0 0 3M17 10.5a2.5 2.5 0 1 0 0 3" />
        </BaseIcon>
    );
}

export function Fullscreen({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" />
        </BaseIcon>
    );
}

export function ExitFullscreen({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 4v5H4M15 4v5h5M9 20v-5H4M15 20v-5h5" />
        </BaseIcon>
    );
}

export function Live({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="2.5" /><path d="M8 8a5.5 5.5 0 0 0 0 8M16 8a5.5 5.5 0 0 1 0 8M5 5a9.5 9.5 0 0 0 0 14M19 5a9.5 9.5 0 0 1 0 14" />
        </BaseIcon>
    );
}

export function RecordIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" />
        </BaseIcon>
    );
}

