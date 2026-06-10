import { BaseIcon } from './BaseIcon';

// Weather
export function SunDim({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="4" /><path d="M12 3v1M12 20v1M3 12h1M20 12h1M5.6 5.6l.7.7M17.7 17.7l.7.7M18.4 5.6l-.7.7M6.3 17.7l-.7.7" />
        </BaseIcon>
    );
}

export function SunMedium({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4" />
        </BaseIcon>
    );
}

export function Moon2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M20 13A8 8 0 1 1 11 4a6 6 0 0 0 9 9Z" />
        </BaseIcon>
    );
}

export function MoonStars({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M19 13A7 7 0 1 1 11 5a5.5 5.5 0 0 0 8 8Z" /><path d="M18 4l.5 1.5L20 6l-1.5.5L18 8l-.5-1.5L16 6l1.5-.5L18 4Z" />
        </BaseIcon>
    );
}

export function CloudSun2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="8" cy="7" r="3" /><path d="M8 1v1M2 7h1M3.5 2.5l.7.7M12 3l.7-.7M3.5 11.5l.7-.7" /><path d="M9 19a3.5 3.5 0 0 1-.4-6.96A4.5 4.5 0 0 1 17 14a3 3 0 0 1 0 5H9Z" />
        </BaseIcon>
    );
}

export function CloudMoon2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 7a4 4 0 1 1-4-4 3 3 0 0 0 4 4Z" /><path d="M8 20a3.5 3.5 0 0 1-.4-6.96A4.5 4.5 0 0 1 16 15a3 3 0 0 1 0 5H8Z" />
        </BaseIcon>
    );
}

export function CloudRain2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 17a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 10 3.5 3.5 0 0 1 17 17H7Z" /><path d="M8 19v2M12 19v3M16 19v2" />
        </BaseIcon>
    );
}

export function CloudSnow2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 17a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 10 3.5 3.5 0 0 1 17 17H7Z" /><path d="M8 20h.01M12 20h.01M16 20h.01M10 22h.01M14 22h.01" />
        </BaseIcon>
    );
}

export function CloudLightning2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 17a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 10 3.5 3.5 0 0 1 17 17H7Z" /><path d="M12 17 9 22h4l-2 3" />
        </BaseIcon>
    );
}

export function CloudFog2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 17a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 10 3.5 3.5 0 0 1 17 17H7Z" /><path d="M5 20h14M7 23h10" />
        </BaseIcon>
    );
}

export function CloudDrizzle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 17a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 10 3.5 3.5 0 0 1 17 17H7Z" /><path d="M9 19v1M13 19v1M9 22v1M13 22v1M17 19v1" />
        </BaseIcon>
    );
}

export function Tornado2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 5h16M6 9h12M9 13h7M11 17h4M13 21l-1-4" />
        </BaseIcon>
    );
}

export function Hurricane2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="2" /><path d="M12 10c4-3 8-2 8-2-1 3-4 4-6 4M12 14c-4 3-8 2-8 2 1-3 4-4 6-4" />
        </BaseIcon>
    );
}

export function Rainbow2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 18a9 9 0 0 1 18 0M6 18a6 6 0 0 1 12 0M9 18a3 3 0 0 1 6 0" />
        </BaseIcon>
    );
}

export function Umbrella2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3a9 9 0 0 1 9 9H3a9 9 0 0 1 9-9Z" /><path d="M12 12v7a2 2 0 0 0 4 0" />
        </BaseIcon>
    );
}

export function Windsock({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 4v16M5 5h14l-3 4 3 4H5" /><path d="M9 5v8M13 5v8" />
        </BaseIcon>
    );
}

export function Thermometer4({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 14V5a2 2 0 0 0-4 0v9a4 4 0 1 0 4 0Z" /><path d="M16 6h4M16 10h3M16 14h4" />
        </BaseIcon>
    );
}

export function Humidity({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" /><path d="M9 12h.01M15 12h.01M9 16l6-4" />
        </BaseIcon>
    );
}

export function Pressure({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M12 12 8 8M12 7v.01M17 12h.01M7 12h.01" />
        </BaseIcon>
    );
}

export function Uv({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3" /><path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6 4.2 4.2M19.8 19.8l-1.4-1.4M18.4 5.6l1.4-1.4M4.2 19.8l1.4-1.4" /><path d="M9 21v-2M9 19h2M14 19v2M14 19c1 0 1.5.5 1.5 1" />
        </BaseIcon>
    );
}

