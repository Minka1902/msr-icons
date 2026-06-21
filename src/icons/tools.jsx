import { BaseIcon } from './BaseIcon';

// Tools / Settings / Misc
export function Settings2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3.2" /><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3" />
        </BaseIcon>
    );
}

export function Settings3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m9 3 1 2.5 2.7-.7.9 2.6 2.7.5-.5 2.7 2 1.9-1.5 2.3 1.5 2.3-2 1.9.5 2.7-2.7.5-.9 2.6L10 21l-1-2.5" /><circle cx="11" cy="12" r="3" />
        </BaseIcon>
    );
}

export function Sliders2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7h8M16 7h4M4 17h4M12 17h8" /><circle cx="14" cy="7" r="2" /><circle cx="8" cy="17" r="2" />
        </BaseIcon>
    );
}

export function Wrench2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 7a4 4 0 0 0-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5l-2.5 2.5-2-2L15 7Z" />
        </BaseIcon>
    );
}

export function Hammer2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 4 9 9l2 2 5-5-2-2Z" /><path d="m11 11-7 7 2 2 7-7M15 5l4 4" />
        </BaseIcon>
    );
}

export function Screwdriver2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m14 3 4 4-3 3-1-1-7 7v3h3l7-7-1-1 3-3-4-4Z" />
        </BaseIcon>
    );
}

export function Toolbox({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="8" width="18" height="11" rx="2" /><path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 13h18M9 13v2M15 13v2" />
        </BaseIcon>
    );
}

export function GearPair({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="9" cy="9" r="2.2" /><path d="M9 5v1.5M9 11.5V13M5 9h1.5M11.5 9H13M6.4 6.4l1 1M11.6 11.6l-1-1M11.6 6.4l-1 1M6.4 11.6l1-1" /><circle cx="16" cy="16" r="1.8" /><path d="M16 13v1M16 18v1M13 16h1M18 16h1" />
        </BaseIcon>
    );
}

export function Tune({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7h10M18 7h2M4 12h2M10 12h10M4 17h7M15 17h5" /><circle cx="16" cy="7" r="2" /><circle cx="8" cy="12" r="2" /><circle cx="13" cy="17" r="2" />
        </BaseIcon>
    );
}

export function Adjust({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 0 0 18Z" />
        </BaseIcon>
    );
}

export function Calibrate({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 16a9 9 0 0 1 18 0" /><path d="M12 16 16 9" /><circle cx="12" cy="16" r="1" /><path d="M6 16h.01M12 8v.01M18 16h.01" />
        </BaseIcon>
    );
}

export function Maintenance({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 7a4 4 0 0 0-5 5l-6 6 2 2 6-6a4 4 0 0 0 5-5l-2.5 2.5-2-2L15 7Z" /><path d="M19 19l2 2" />
        </BaseIcon>
    );
}

export function Build2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 21h18M5 21V10l7-5 7 5v11M9 21v-6h6v6" />
        </BaseIcon>
    );
}

export function Construct({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 20h20M5 20V9l4-2M5 9l4 4M14 20v-8l5-3v11" /><path d="M9 7v13" />
        </BaseIcon>
    );
}

export function Power2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3v9" /><path d="M7 6a8 8 0 1 0 10 0" />
        </BaseIcon>
    );
}

export function PowerOff({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3v6" /><path d="M8 7a7 7 0 1 0 8 0" /><path d="m4 4 16 16" />
        </BaseIcon>
    );
}

export function Reboot({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3v5M12 3 9 6M12 3l3 3" /><path d="M6 8a8 8 0 1 0 12 0" />
        </BaseIcon>
    );
}

export function Reset2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 4v4h4" />
        </BaseIcon>
    );
}

export function Sync2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 11a8 8 0 0 1 14-5l2 2M20 13a8 8 0 0 1-14 5l-2-2" /><path d="M20 4v4h-4M4 20v-4h4" />
        </BaseIcon>
    );
}

export function Refresh3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" />
        </BaseIcon>
    );
}

export function Update2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 12a9 9 0 1 1-3-6.7" /><path d="M21 4v5h-5" /><path d="M12 8v4l3 2" />
        </BaseIcon>
    );
}

export function Upgrade({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 21V8M8 12l4-4 4 4" /><path d="M6 4h12" />
        </BaseIcon>
    );
}

export function Install2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3v11M8 10l4 4 4-4" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        </BaseIcon>
    );
}

export function Uninstall({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 14V3M8 7l4-4 4 4" /><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
        </BaseIcon>
    );
}

export function Plugin2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 3v4M15 3v4M7 7h10v4a5 5 0 0 1-10 0V7Z" /><path d="M12 16v5" />
        </BaseIcon>
    );
}

export function Extension2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 4a2 2 0 0 1 4 0h4v4a2 2 0 0 1 0 4v4h-4a2 2 0 0 1-4 0H4v-4a2 2 0 0 0 0-4V4h4Z" />
        </BaseIcon>
    );
}

export function Addon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M12 9v6M9 12h6" />
        </BaseIcon>
    );
}

export function Integration({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" /><path d="M9 6h4a4 4 0 0 1 4 4v5M8 9v4a4 4 0 0 0 4 4h3" />
        </BaseIcon>
    );
}

export function Automation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3" /><path d="M12 2.5v3M12 18.5v3M21.5 12h-3M5.5 12h-3M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1M18.7 18.7l-2.1-2.1M7.4 7.4 5.3 5.3" /><path d="M12 12 21 3" />
        </BaseIcon>
    );
}


export function Cog2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1Z" />
        </BaseIcon>
    );
}

export function Gear2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9 7 7M17 17l2.1 2.1M19.1 4.9 17 7M7 17l-2.1 2.1" />
        </BaseIcon>
    );
}

export function Restart2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path d="M3 4v4h4" />
        </BaseIcon>
    );
}
