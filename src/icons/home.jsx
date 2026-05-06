import { BaseIcon } from './BaseIcon';

export function House({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        </BaseIcon>
    );
}

export function Apartment({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 22V2h12v20" />
            <path d="M2 22h20" />
            <path d="M9 6h1M14 6h1M9 10h1M14 10h1M9 14h1M14 14h1" />
            <path d="M10 22v-4h4v4" />
        </BaseIcon>
    );
}

export function Office({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 21h18M9 21V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v16" />
            <path d="M3 10.7h6M15 10.7h6M3 16h6M15 16h6" />
            <path d="M6 21V10.7M18 21V10.7" />
        </BaseIcon>
    );
}

export function Skyscraper({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 22h20" />
            <path d="M7 22V8l5-6 5 6v14" />
            <path d="M2 22V12l3-3" />
            <path d="M22 22V12l-3-3" />
            <path d="M9 12h6M9 16h6" />
        </BaseIcon>
    );
}

export function Garage({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 22V10l10-8 10 8v12" />
            <path d="M2 22h20" />
            <rect x="6" y="14" width="12" height="8" rx="1" />
            <path d="M6 17h12M6 20h12" />
        </BaseIcon>
    );
}

export function Bed({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 4v16M2 8h20v12M2 20h20M22 8V4" />
            <path d="M6 8v4M18 8v4" />
            <rect x="6" y="8" width="12" height="4" rx="2" />
        </BaseIcon>
    );
}

export function Bath({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
            <path d="M9 6c.887.887 1 2 1 3H8c0-1 .113-2.113 1-3ZM2 17h20M10 21v2M14 21v2" />
        </BaseIcon>
    );
}

export function Sofa({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3" />
            <path d="M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z" />
            <path d="M4 18v2M20 18v2M12 4v9" />
        </BaseIcon>
    );
}

export function Window({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="2" width="18" height="20" rx="2" />
            <path d="M3 12h18M12 2v20" />
        </BaseIcon>
    );
}

export function Door({ fillColor = '#000', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M13 4h3a2 2 0 0 1 2 2v14" />
            <path d="M2 20h3M13 20h9M13 4l-5 3v13h5V4Z" />
            <circle cx="11" cy="12" r="1" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function Fence({ fillColor = '#92400E', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 3v13M4 3 2 5l2 2 2-2-2-2ZM20 3v13M20 3l-2 2 2 2 2-2-2-2ZM12 3v13M12 3l-2 2 2 2 2-2-2-2ZM2 16h20M2 12h20" />
        </BaseIcon>
    );
}

export function Pool({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 12a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1" />
            <path d="M2 18a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1" />
            <path d="M4 4h4M4 4v8M8 4v8" />
            <path d="M18 4h-4M18 4v8M14 4v8" />
            <path d="M9 4h6" />
        </BaseIcon>
    );
}
