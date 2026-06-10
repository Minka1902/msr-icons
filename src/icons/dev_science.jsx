import { BaseIcon } from './BaseIcon';

// Nature / Science
export function Atom2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="1.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)" />
        </BaseIcon>
    );
}

export function Molecule({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="8" r="2.5" /><circle cx="9" cy="18" r="2.5" /><circle cx="17" cy="17" r="2" /><path d="M8 7.5 16 7.5M7.5 8l1 7.5M11 17.5l4.5-.5M16 9l1 6" />
        </BaseIcon>
    );
}

export function Dna2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 3c0 5 10 7 10 12M17 3c0 5-10 7-10 12M7 18c0 1 0 2 0 3M17 18c0 1 0 2 0 3" /><path d="M8.5 6h7M9.5 9h5M9.5 12h5M8.5 15h7" />
        </BaseIcon>
    );
}

export function Telescope2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m3 16 6-2 9-9 2 2-7 8-2 6-2-1-1-2-2-1Z" /><path d="m9 14 1 2M11 21l1-3" />
        </BaseIcon>
    );
}

export function Magnet2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 3v8a6 6 0 0 0 12 0V3M6 3h4v8a2 2 0 0 0 4 0V3h4" /><path d="M6 6h4M14 6h4" />
        </BaseIcon>
    );
}

export function Flask2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M7.5 15h9" />
        </BaseIcon>
    );
}

export function TestTube2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 3 6 12a3 3 0 0 0 4.5 4L19.5 7M14 4l4 4M9 12h5" />
        </BaseIcon>
    );
}

export function Beaker2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 3v5l-3 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-3-9V3M7 3h10M6.5 15h11" />
        </BaseIcon>
    );
}

export function Radiation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="2" /><path d="M12 10V4a8 8 0 0 0-4 7l5.5.5M12 12l4.5 6.5A8 8 0 0 0 20 11l-5.5.5M12 12l-4.5 6.5A8 8 0 0 1 4 11" />
        </BaseIcon>
    );
}

export function Biohazard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="2.5" /><path d="M12 9.5C12 6 9 4 9 4a6 6 0 0 0 1.5 7M14 13.5c3 1.5 6 0 6 0a6 6 0 0 0-6-3.5M10 13.5c-3 1.5-6 0-6 0a6 6 0 0 1 6-3.5M12 14.5V21" />
        </BaseIcon>
    );
}

export function Recycle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 9 4 14l2 4h4M17 9l3 5-2 4h-4M12 3 9 8h6l-3-5Z" /><path d="m4 14 2-1M20 14l-2-1M10 22l1-2M14 22l-1-2" />
        </BaseIcon>
    );
}

export function EcoLeaf({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 19c0-8 6-14 14-14 0 8-6 14-14 14Z" /><path d="M5 19c4-6 8-9 12-10" />
        </BaseIcon>
    );
}

export function WaterDrop2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11Z" /><path d="M9 14a3 3 0 0 0 3 3" />
        </BaseIcon>
    );
}

export function FlameAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c1 3 4 4 4 8a4 4 0 0 1-8 0c0-1 .3-1.8 1-2.5C9.5 10 12 7 12 3Z" /><path d="M11 17a2 2 0 0 0 3-1.7" />
        </BaseIcon>
    );
}

export function Snowflake2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2v20M4 7l16 10M20 7 4 17M12 5l-2.5-2M12 5l2.5-2M12 19l-2.5 2M12 19l2.5 2M5 9 3 8.5M5 9l-.5-2.2M19 15l2 .5M19 15l.5 2.2" />
        </BaseIcon>
    );
}

export function Thermometer3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 14V4a2 2 0 0 0-4 0v10a4 4 0 1 0 4 0Z" /><path d="M10 14V8" /><circle cx="10" cy="17.5" r="1.3" />
        </BaseIcon>
    );
}

export function TreeAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 7 10h3l-4 6h12l-4-6h3l-5-7Z" /><path d="M12 16v5M9 21h6" />
        </BaseIcon>
    );
}

export function Cactus2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10 21v-4M10 17V6a2 2 0 0 1 4 0v11M10 11H8a2 2 0 0 1-2-2V8M14 13h2a2 2 0 0 0 2-2v-1" /><path d="M8 21h8" />
        </BaseIcon>
    );
}

export function Mushroom2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 11a8 8 0 0 1 16 0H4Z" /><path d="M10 11v6a2 2 0 0 0 4 0v-6" /><path d="M9 8h.01M13 9h.01M15 7h.01" />
        </BaseIcon>
    );
}

export function Feather2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M20 4a7 7 0 0 0-10 0L4 10v4l-2 6 6-2h4l6-6a7 7 0 0 0 2-8Z" /><path d="M16 8 8 16M14 8h-3M16 11v-3" />
        </BaseIcon>
    );
}

