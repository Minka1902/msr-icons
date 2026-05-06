import { BaseIcon } from './BaseIcon';

export function Car({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 17H3a2 2 0 0 1-2-2V9l3-5h14l3 5v6a2 2 0 0 1-2 2h-2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
            <path d="M5 9h14" />
        </BaseIcon>
    );
}

export function SUV({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 17H1v-5l2-6h17l1 6v5h-2" />
            <path d="M3 6l2-3h13l2 3" />
            <circle cx="6.5" cy="17" r="2.5" />
            <circle cx="17.5" cy="17" r="2.5" />
        </BaseIcon>
    );
}

export function ElectricCar({ fillColor = '#10B981', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 17H3a2 2 0 0 1-2-2V9l3-5h14l3 5v6a2 2 0 0 1-2 2h-2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
            <path d="M12 5l-2 4h4l-2 4" />
        </BaseIcon>
    );
}

export function Bus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 6v6M15 6v6M2 12h19.6M18 18h2a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2" />
            <circle cx="8" cy="18" r="2" />
            <circle cx="16" cy="18" r="2" />
            <path d="M10 18h4" />
        </BaseIcon>
    );
}

export function Train({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="13" rx="2" />
            <path d="M4 11h16M12 3v8M8 20l-2 2M16 20l2 2M8 20h8" />
            <circle cx="8.5" cy="16.5" r="1.5" />
            <circle cx="15.5" cy="16.5" r="1.5" />
        </BaseIcon>
    );
}

export function Subway({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="13" rx="2" />
            <path d="M4 10h16M12 3v7M9 20l-2 2M15 20l2 2M9 20h6" />
            <circle cx="8" cy="16" r="1.5" />
            <circle cx="16" cy="16" r="1.5" />
            <path d="M4 7h1M19 7h1" />
        </BaseIcon>
    );
}

export function Tram({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="4" width="14" height="12" rx="1" />
            <path d="M5 10h14M9 2h6M8 20l-2 2M16 20l2 2M8 20h8" />
            <circle cx="8.5" cy="17" r="1.5" />
            <circle cx="15.5" cy="17" r="1.5" />
        </BaseIcon>
    );
}

export function Plane({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17.8 19.2 16 11l3.5-3.5C21 6 21 4 19 2c-2-2-4-2-5.5-.5L10 5 1.8 6.2l4 4L4 12l4 4 1.8-1.8 4 4Z" />
        </BaseIcon>
    );
}

export function Helicopter({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2h8M4 2h6M9 2v5" />
            <path d="M3 10a3 3 0 0 1 3-3h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3Z" />
            <path d="M20 9l2 4M8 11v5l3 4M11 20h5" />
        </BaseIcon>
    );
}

export function Bicycle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="5.5" cy="17.5" r="3.5" />
            <circle cx="18.5" cy="17.5" r="3.5" />
            <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-3 11.5L9 7 6 11h5" />
            <path d="M12 17.5l6-5" />
        </BaseIcon>
    );
}

export function Scooter({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 12a4 4 0 0 0-8 0" />
            <circle cx="6" cy="17" r="3" />
            <circle cx="18" cy="17" r="3" />
            <path d="M6 14v-4l4-5h5l3 3h2" />
            <path d="M15 17h-6" />
        </BaseIcon>
    );
}

export function Motorcycle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="5" cy="16" r="3" />
            <circle cx="19" cy="16" r="3" />
            <path d="M12 16H8V9l4 1 4-3h3l1 3h1" />
            <path d="M18 9l1 4" />
        </BaseIcon>
    );
}

export function Boat({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1" />
            <path d="M4 18l-1-5h18l-2 5" />
            <path d="M12 2v11M8 7l4-5 4 5" />
        </BaseIcon>
    );
}

export function Ship({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 21c.6.5 1.2 1 2.5 1C7 22 7 20 9.5 20s2.5 2 5 2 2.5-2 5-2 2.5 2 2.5 2" />
            <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.61 7.76" />
            <path d="M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6" />
            <path d="M12 10v4M8 13v2M16 13v2" />
        </BaseIcon>
    );
}

export function Ferry({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1" />
            <path d="M6 11h12l1 5H5l1-5Z" />
            <path d="M6 11V7h12v4M10 7V4h4v3" />
        </BaseIcon>
    );
}

export function Taxi({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 17H3a2 2 0 0 1-2-2V9l3-5h14l3 5v6a2 2 0 0 1-2 2h-2" />
            <circle cx="7" cy="17" r="2" />
            <circle cx="17" cy="17" r="2" />
            <path d="M9 5l-1 4h8l-1-4M10 2h4" />
        </BaseIcon>
    );
}

export function Parking({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
        </BaseIcon>
    );
}

export function FuelStation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 22V6a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
            <path d="M2 22h13M13 8h1a2 2 0 0 1 2 2v1a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2V6l-2-2" />
            <path d="M14 22v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
            <rect x="6" y="10" width="5" height="4" rx="1" />
        </BaseIcon>
    );
}

export function TrafficLight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="2" width="12" height="19" rx="2" />
            <circle cx="12" cy="7" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="17" r="2" />
            <path d="M10 2V1M14 2V1" />
        </BaseIcon>
    );
}

export function Rocket({ fillColor = '#7C3AED', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09Z" />
            <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2Z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
        </BaseIcon>
    );
}

export function Submarine({ fillColor = '#000', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 14a4 4 0 0 1 4-4h12a4 4 0 0 1 0 8H6a4 4 0 0 1-4-4Z" />
            <path d="M10 10V8a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v2" />
            <circle cx="9" cy="14" r="1" fill={color} stroke="none" />
            <circle cx="13" cy="14" r="1" fill={color} stroke="none" />
            <path d="M20 14h2M20 17l2 2" />
        </BaseIcon>
    );
}

export function Forklift({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 21H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7l2 5v12Z" />
            <path d="M12 10h5l3 5v3h-8M14 21v-5" />
            <circle cx="6" cy="21" r="1" />
            <circle cx="18" cy="21" r="1" />
            <path d="M2 8h10" />
        </BaseIcon>
    );
}
