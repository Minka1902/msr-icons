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
