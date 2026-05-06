import { BaseIcon } from './BaseIcon';

export function WeatherSunny({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </BaseIcon>
    );
}

export function WeatherCloudy({ fillColor = '#6B7280', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
        </BaseIcon>
    );
}

export function WeatherPartlyCloudy({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2" />
            <circle cx="9" cy="13" r="3" />
            <path d="M16.5 20H9a5 5 0 0 1 0-10 5.5 5.5 0 1 1 7.5 10Z" />
        </BaseIcon>
    );
}

export function WeatherRain({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17.5 17H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            <path d="M8 19v3M12 21v-3M16 19v3" />
        </BaseIcon>
    );
}

export function WeatherDrizzle({ fillColor = '#60A5FA', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17.5 17H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            <path d="M8 19v2M12 19v2M16 19v2M10 21v2M14 21v2" />
        </BaseIcon>
    );
}

export function WeatherStorm({ fillColor = '#7C3AED', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17.5 16H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            <path d="M13 12l-3 5h5l-3 5" />
        </BaseIcon>
    );
}

export function WeatherSnow({ fillColor = '#93C5FD', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17.5 18H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            <path d="M8 21h.01M12 21h.01M16 21h.01M10 23h.01M14 23h.01" />
        </BaseIcon>
    );
}

export function WeatherHail({ fillColor = '#60A5FA', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17.5 18H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
            <circle cx="8" cy="21" r="1" fill={color} stroke="none" />
            <circle cx="12" cy="21" r="1" fill={color} stroke="none" />
            <circle cx="16" cy="21" r="1" fill={color} stroke="none" />
            <circle cx="10" cy="23" r="1" fill={color} stroke="none" />
            <circle cx="14" cy="23" r="1" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function WeatherFog({ fillColor = '#9CA3AF', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 14h16M4 10h16M4 18h10M8 6h8" />
        </BaseIcon>
    );
}

export function WeatherWind({ fillColor = '#6B7280', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2" />
            <path d="M9.6 4.6A2 2 0 1 1 11 8H2" />
            <path d="M12.6 19.4A2 2 0 1 0 14 16H2" />
        </BaseIcon>
    );
}

export function WeatherTornado({ fillColor = '#6B7280', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 4H3M18 8H6M15 12H9M13 16h-2M12 20v.01" />
        </BaseIcon>
    );
}

export function WeatherHurricane({ fillColor = '#7C3AED', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 12a5 5 0 0 1 5 5" />
            <path d="M12 2a10 10 0 0 1 10 10" />
            <path d="M7 12a5 5 0 0 0 5-5" />
            <path d="M12 22A10 10 0 0 1 2 12" />
            <circle cx="12" cy="12" r="2" />
        </BaseIcon>
    );
}

export function WeatherSunrise({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 18a5 5 0 0 0-10 0" />
            <path d="M12 9V2M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M16 5l-4 4-4-4" />
        </BaseIcon>
    );
}

export function WeatherSunset({ fillColor = '#F97316', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 18a5 5 0 0 0-10 0" />
            <path d="M12 9V2M4.22 10.22l1.42 1.42M1 18h2M21 18h2M18.36 11.64l1.42-1.42M23 22H1M8 5l4 4 4-4" />
        </BaseIcon>
    );
}

export function WeatherUV({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
            <path d="M9.5 16l1-3 1.5 2 1.5-2 1 3" strokeWidth="1" />
        </BaseIcon>
    );
}

export function WeatherHumidity({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2C6 9 4 13 4 16a8 8 0 0 0 16 0c0-3-2-7-8-14Z" />
            <path d="M7.8 16a4.2 4.2 0 0 0 4.2 4" />
        </BaseIcon>
    );
}

export function WeatherThermometer({ fillColor = '#EF4444', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0Z" />
        </BaseIcon>
    );
}

export function WeatherSnowflake({ fillColor = '#93C5FD', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
            <path d="M12 6l-2-2 2-2M12 18l2 2-2 2M6 12l-2 2-2-2M18 12l2-2 2 2" />
        </BaseIcon>
    );
}

export function WeatherRainbow({ fillColor = '#EC4899', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M22 17a10 10 0 0 0-20 0" />
            <path d="M6 17a6 6 0 0 1 12 0" />
            <path d="M10 17a2 2 0 0 1 4 0" />
        </BaseIcon>
    );
}

export function WeatherNightClear({ fillColor = '#6366F1', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
            <path d="M20 3v4M22 5h-4" />
        </BaseIcon>
    );
}
