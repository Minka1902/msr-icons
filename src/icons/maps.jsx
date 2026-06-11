import { BaseIcon } from './BaseIcon';

// Maps / Location / Travel
export function MapPin({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 21c4-5 7-8 7-11a7 7 0 0 0-14 0c0 3 3 6 7 11Z" /><circle cx="12" cy="10" r="2.5" />
        </BaseIcon>
    );
}

export function MapPin2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 21c4-5 7-8 7-11a7 7 0 0 0-14 0c0 3 3 6 7 11Z" /><path d="M12 10h.01" />
        </BaseIcon>
    );
}

export function MapPinned({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 21c4-5 7-8 7-11a7 7 0 0 0-14 0c0 3 3 6 7 11Z" /><circle cx="12" cy="10" r="2.5" /><path d="M5 17c-1.5.7-2.5 1.7-2.5 2.8C2.5 21 6.8 22 12 22s9.5-1 9.5-2.2c0-1.1-1-2.1-2.5-2.8" />
        </BaseIcon>
    );
}

export function MapTrifold({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z" /><path d="M9 4v14M15 6v14" />
        </BaseIcon>
    );
}

export function Navigation3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 11 21 4l-7 18-2.5-7.5L3 11Z" />
        </BaseIcon>
    );
}

export function NavigationOff({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 5 21 4l-7 18-2.5-7.5" /><path d="m3 3 18 18" />
        </BaseIcon>
    );
}

export function Route2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="19" r="2.5" /><circle cx="18" cy="5" r="2.5" /><path d="M8.5 19H14a3 3 0 0 0 0-6h-4a3 3 0 0 1 0-6h5.5" />
        </BaseIcon>
    );
}

export function Pin2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 17v5M9 3h6l-1 4 2.5 2.5a1 1 0 0 1-.7 1.7H7.2a1 1 0 0 1-.7-1.7L9 7l1-4Z" />
        </BaseIcon>
    );
}

export function Flag2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 21V4M6 4h11l-2 3.5 2 3.5H6" />
        </BaseIcon>
    );
}

export function FlagCheckered({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 21V4M6 4h13v8H6" /><path d="M6 4h3.25v2H12.5v2H9.25v2H6M12.5 4h3.25v2H19v2h-3.25v2H12.5" />
        </BaseIcon>
    );
}

export function Milestone({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3v3M12 18v3M5 6h12l3 3-3 3H5V6Z" />
        </BaseIcon>
    );
}

export function Crosshair2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="8" /><path d="M12 2v4M12 18v4M2 12h4M18 12h4" /><circle cx="12" cy="12" r="2" />
        </BaseIcon>
    );
}

export function Target2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4.5" /><circle cx="12" cy="12" r="1" />
        </BaseIcon>
    );
}

export function GeoFence({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 8a2 2 0 1 0 0-.01M19 8a2 2 0 1 0 0-.01M5 18a2 2 0 1 0 0-.01M19 18a2 2 0 1 0 0-.01" /><path d="M7 7h10M7 18h10M5 9.5v6.5M19 9.5V16" stroke-dasharray="2 2" />
        </BaseIcon>
    );
}

export function Coordinates({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3v18" /><circle cx="12" cy="12" r="2" />
        </BaseIcon>
    );
}

export function Altitude({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 20h18M5 20l5-9 3 4 2-3 4 8" /><path d="M9 7h2v2M9 7l3 3" />
        </BaseIcon>
    );
}

export function Distance2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7v10M20 7v10M4 12h16" /><path d="m7 9-3 3 3 3M17 9l3 3-3 3" />
        </BaseIcon>
    );
}

export function Layers2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 13 9 5 9-5M3 16l9 5 9-5" />
        </BaseIcon>
    );
}

export function Satellite2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m6 6 3-3 3 3-3 3-3-3Z" /><path d="m9 9 3 3M12 12l3-3 3 3-3 3-3-3Z" /><path d="M11 14a4 4 0 0 1-4 4M14 11a7 7 0 0 1-7 7" />
        </BaseIcon>
    );
}

export function StreetView({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="6" r="2.5" /><path d="M9 13a3 3 0 0 1 6 0v3h-2v5h-2v-5H9v-3Z" /><path d="M4 18a9 9 0 0 0 16 0" stroke-dasharray="2 2" />
        </BaseIcon>
    );
}

export function Airport({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c1 0 1.5 1 1.5 3v4l7 4v2l-7-2v4l2 1.5v1.5L12 24l-3-1.5V21l2-1.5v-4l-7 2v-2l7-4V6c0-2 .5-3 1-3Z" />
        </BaseIcon>
    );
}

export function TrainStation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="4" width="12" height="12" rx="2" /><path d="M6 11h12M9 16l-2 4M15 16l2 4M9.5 8h.01M14.5 8h.01" />
        </BaseIcon>
    );
}

export function BusStop({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="5" width="11" height="11" rx="2" /><path d="M6 11h11M8 16v2M15 16v2M19 4v16" /><circle cx="8.5" cy="8" r="0.5" />
        </BaseIcon>
    );
}

export function Harbor({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="5" r="2" /><path d="M12 7v13M8 10h8M6 14a6 6 0 0 0 12 0M6 14H4M18 14h2" />
        </BaseIcon>
    );
}

