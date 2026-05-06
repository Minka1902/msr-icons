import { BaseIcon } from './BaseIcon';

export function Tree({ fillColor = '#059669', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 22V11" />
            <path d="M12 11 6 5 3 8l3 3H3l3 3H3l9 7 9-7h-3l3-3h-3l3-3-3-3-6 6Z" />
        </BaseIcon>
    );
}

export function Leaf({ fillColor = '#059669', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
        </BaseIcon>
    );
}

export function Flower({ fillColor = '#EC4899', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m3 4.5a4.5 4.5 0 1 0 4.5-4.5M12 16.5V15m2.5-3H15" />
            <circle cx="12" cy="12" r="3" />
            <path d="M12 21v-6" />
        </BaseIcon>
    );
}

export function Mountain({ fillColor = '#6B7280', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m8 3 4 8 5-5 5 15H2L8 3Z" />
        </BaseIcon>
    );
}

export function Wave({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2 2.5 1 3.5 2" />
            <path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 1 3.5 2" />
            <path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2 2.5 1 3.5 2" />
        </BaseIcon>
    );
}

export function Fire({ fillColor = '#F97316', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 3Z" />
        </BaseIcon>
    );
}

export function Snowflake({ fillColor = '#93C5FD', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93 4.93 19.07" />
            <path d="M12 6l-2-2 2-2M12 18l2 2-2 2M6 12l-2 2-2-2M18 12l2-2 2 2" />
        </BaseIcon>
    );
}

export function Recycle({ fillColor = '#059669', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5" />
            <path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12" />
            <path d="m14 16 3 3-3 3" />
            <path d="M8.293 13.596 7.196 9.5 3.1 10.598" />
            <path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843" />
            <path d="m13.378 9.633 4.096 1.098 1.097-4.096" />
        </BaseIcon>
    );
}

export function SolarPanel({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <path d="M2 10h20M2 14h20M12 6v12M7 6v12M17 6v12" />
            <path d="M12 18v3M9 21h6" />
        </BaseIcon>
    );
}

export function WindTurbine({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="1" fill={color} stroke="none" />
            <path d="M12 12 8 4c2.7 0 5 1.3 6.5 3.3" />
            <path d="M12 12l5 7.5c-2.5.8-5.3.2-7-2" />
            <path d="M12 12l-6 3c.5-2.7 2.5-4.8 5-5.3" />
            <path d="M12 22v-10" />
            <path d="M8 22h8" />
        </BaseIcon>
    );
}

export function WaterDrop({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2C6 9 4 13 4 16a8 8 0 0 0 16 0c0-3-2-7-8-14Z" />
        </BaseIcon>
    );
}

export function Paw({ fillColor = '#92400E', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="11" cy="4" r="2" />
            <circle cx="18" cy="8" r="2" />
            <circle cx="20" cy="16" r="2" />
            <path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z" />
        </BaseIcon>
    );
}

export function Bug({ fillColor = '#059669', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m8 2 1.88 1.88M14.12 3.88 16 2" />
            <path d="M9 7.13v-1a3.003 3.003 0 1 1 6 0v1" />
            <path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6Z" />
            <path d="M12 20v-9M6.53 9C4.6 8.8 3 7.1 3 5M6 13H2M3 21c0-3 1.5-6 3-8M20.97 5c0 2.1-1.6 3.8-3.5 4M22 13h-4M18 21c-1.5-2-3-5-3-8" />
        </BaseIcon>
    );
}

export function Seedling({ fillColor = '#059669', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 22 16 8" />
            <path d="M17.5 6.5c3.5 0 6 2.5 6 6s-6 6.5-13 3.5c3-7 4.5-9.5 7-9.5Z" />
        </BaseIcon>
    );
}
