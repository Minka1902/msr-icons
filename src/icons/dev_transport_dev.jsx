import { BaseIcon } from './BaseIcon';

// Transportation
export function CarAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 11l1.5-4a2 2 0 0 1 1.9-1.3h7.2A2 2 0 0 1 17.5 7L19 11" /><path d="M3 11h18v5h-2M5 16H3v-5M7 16h10" /><circle cx="7" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" />
        </BaseIcon>
    );
}

export function CarSide({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 13l2-5a2 2 0 0 1 1.8-1.2h6l4 3.2 4 1a1 1 0 0 1 1 1V16h-2M3 16v-3h18M5 16h12" /><circle cx="7" cy="17" r="1.8" /><circle cx="16" cy="17" r="1.8" />
        </BaseIcon>
    );
}

export function Taxi2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 11l1.5-4a2 2 0 0 1 1.9-1.3h7.2A2 2 0 0 1 17.5 7L19 11" /><path d="M3 11h18v5h-2M5 16H3v-5M7 16h10" /><circle cx="7" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" /><path d="M9 5V3h6v2" />
        </BaseIcon>
    );
}

export function Bus2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="13" rx="2" /><path d="M4 11h16M8 17v2M16 17v2M4 8h16" /><circle cx="8" cy="14" r="0.5" /><circle cx="16" cy="14" r="0.5" />
        </BaseIcon>
    );
}

export function TruckAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 6h11v11H2zM13 9h4l4 4v4h-8" /><circle cx="7" cy="18" r="1.8" /><circle cx="17" cy="18" r="1.8" />
        </BaseIcon>
    );
}

export function Van2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v9H2V7Z" /><path d="M15 9h3l3 3.5V16h-6V9Z" /><circle cx="6" cy="17" r="1.8" /><circle cx="17" cy="17" r="1.8" />
        </BaseIcon>
    );
}

export function Motorcycle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="5" cy="16" r="3" /><circle cx="19" cy="16" r="3" /><path d="M8 16h6l-3-5h4l2 2h2M11 11 9 8H6M14 11l3-3" />
        </BaseIcon>
    );
}

export function Scooter2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="17" r="2.5" /><circle cx="18" cy="17" r="2.5" /><path d="M8.5 17h7M15.5 17 12 7h-2M10 7h2M16 7l2 8" />
        </BaseIcon>
    );
}

export function BicycleAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="16" r="3.5" /><circle cx="18" cy="16" r="3.5" /><path d="M6 16 10 7h2M9 9h6l3 7M12 16l3-7M14 7h3" />
        </BaseIcon>
    );
}

export function Train2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="3" width="12" height="14" rx="2" /><path d="M6 11h12M9 3v8M15 3v8M8 21l2-4M16 21l-2-4M9 14h.01M15 14h.01" />
        </BaseIcon>
    );
}

export function Tram2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="4" width="14" height="13" rx="2" /><path d="M5 10h14M12 4V2M8 4 6 2M16 4l2-2M8 17l-2 4M16 17l2 4M9 13h.01M15 13h.01" />
        </BaseIcon>
    );
}

export function Airplane2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c1 0 1.5 1 1.5 3v4l7 4v2l-7-2v4l2 1.5v1.5L12 24l-3-1.5V21l2-1.5v-4l-7 2v-2l7-4V6c0-2 .5-3 1-3Z" />
        </BaseIcon>
    );
}

export function Helicopter2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 5h18M12 5v3M6 11h8a4 4 0 0 1 4 4v2H6a3 3 0 0 1-3-3v-3Z" /><path d="M18 14h3M12 17v3M9 20h6M14 11l4-3" />
        </BaseIcon>
    );
}

export function Rocket3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c3 2 5 5 5 9l-2.5 2.5h-5L7 12c0-4 2-7 5-9Z" /><circle cx="12" cy="9" r="1.6" /><path d="M9.5 16.5 7 19m7.5-2.5L17 19" />
        </BaseIcon>
    );
}

export function Ship2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 15h18l-2 5a2 2 0 0 1-2 1H7a2 2 0 0 1-2-1l-2-5Z" /><path d="M5 15V9h14v6M12 4v5M8 9V6h8v3" />
        </BaseIcon>
    );
}

export function Sailboat2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 18h18l-2 3H5l-2-3Z" /><path d="M12 3v12M12 3 4 15h8M14 6l5 9h-5" />
        </BaseIcon>
    );
}

export function Anchor2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="5" r="2" /><path d="M12 7v13M8 11H5a7 7 0 0 0 14 0h-3M8 10h8" />
        </BaseIcon>
    );
}

export function Fuel2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="10" height="18" rx="2" /><path d="M4 9h10M14 7l3 3v6a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-6l-3-3M7 6h4" />
        </BaseIcon>
    );
}

export function ChargingStation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M3 21h13" /><path d="M7 9l-1.5 2.5h3L7 14M14 8l3 3v5a2 2 0 0 0 2 2 2 2 0 0 0 2-2v-5l-3-3" />
        </BaseIcon>
    );
}

export function TrafficLight2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="7" y="2" width="10" height="18" rx="3" /><circle cx="12" cy="7" r="1.8" /><circle cx="12" cy="12" r="1.8" /><circle cx="12" cy="17" r="1.8" /><path d="M12 20v2" />
        </BaseIcon>
    );
}

export function RoadIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 3 4 21M17 3l3 18M12 4v2M12 10v3M12 17v3" />
        </BaseIcon>
    );
}

export function Bridge2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8h18M5 8v12M19 8v12M3 14h18M9 14v6M15 14v6" /><path d="M5 8a14 14 0 0 1 14 0" />
        </BaseIcon>
    );
}

export function ParkingMeter({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 21h6M11 21v-4" /><rect x="7" y="3" width="10" height="9" rx="3" /><path d="M10 8h4M12 12v3" /><path d="M12 6.5h.01" />
        </BaseIcon>
    );
}

