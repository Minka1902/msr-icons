import { BaseIcon } from './BaseIcon';

export function Trophy({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16M9 22v-3M15 22v-3M10 15h4a4 4 0 0 0 4-4V4H6v7a4 4 0 0 0 4 4Z" />
        </BaseIcon>
    );
}

export function Medal({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15" />
            <path d="M11 12 5.12 2.2" />
            <path d="m13 12 5.88-9.8" />
            <circle cx="12" cy="17" r="5" />
            <path d="M12 15v3.5L14 20" />
        </BaseIcon>
    );
}

export function Soccer({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2c-1.2 2.4-1.7 5-1 7.5M12 2c1.2 2.4 1.7 5 1 7.5M12 22c1.2-2.4 1.7-5 1-7.5M12 22c-1.2-2.4-1.7-5-1-7.5" />
            <path d="M2 12c2.4-1.2 5-1.7 7.5-1M22 12c-2.4 1.2-5 1.7-7.5 1" />
            <path d="M2 12c2.4 1.2 5 1.7 7.5 1M22 12c-2.4-1.2-5-1.7-7.5-1" />
        </BaseIcon>
    );
}

export function Basketball({ fillColor = '#F97316', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="M4.93 4.93c4.08 4.08 5.91 9.74 5.07 15.07M19.07 4.93c-4.08 4.08-5.91 9.74-5.07 15.07M2 12h20" />
        </BaseIcon>
    );
}

export function Football({ fillColor = '#92400E', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 9c.85.85.85 5.15 0 6M12.9 6.9c2.82.94 5.2 3.2 6.1 6.1M9 9c-.85.85-.85 5.15 0 6M6.9 12.9c.94-2.82 3.2-5.2 6.1-6.1" />
            <path d="M20.2 3.8a10 10 0 0 1 0 14.14A12.3 12.3 0 0 1 12 21.1a12.3 12.3 0 0 1-8.2-3.2A10 10 0 0 1 3.8 3.8a12.3 12.3 0 0 1 8.2-3.2 12.3 12.3 0 0 1 8.2 3.2Z" />
        </BaseIcon>
    );
}

export function Tennis({ fillColor = '#84CC16', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12c2.8 2.8 6.3 4.3 10 4.3s7.2-1.5 10-4.3M2 12c2.8-2.8 6.3-4.3 10-4.3s7.2 1.5 10 4.3" />
        </BaseIcon>
    );
}

export function Baseball({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="10" />
            <path d="M4.18 4.18c1.99 1.99 3.05 4.72 3.05 7.82s-1.06 5.83-3.05 7.82M19.82 4.18c-1.99 1.99-3.05 4.72-3.05 7.82s1.06 5.83 3.05 7.82" />
        </BaseIcon>
    );
}

export function Golf({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 18V2l7 3.5-7 3.5" />
            <circle cx="12" cy="20" r="2" />
            <path d="M6 20c0-1.1.9-2 2-2h8a2 2 0 0 1 0 4H8a2 2 0 0 1-2-2Z" />
        </BaseIcon>
    );
}

export function Swimming({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 20a2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1 2.4 2.4 0 0 0 2 1 2.4 2.4 0 0 0 2-1 2.4 2.4 0 0 1 2-1 2.4 2.4 0 0 1 2 1" />
            <path d="M14 12a2 2 0 0 0-2-2H6l3-4 5 2 2 4Z" />
            <circle cx="18" cy="5" r="2" />
            <path d="M18 7v5" />
        </BaseIcon>
    );
}

export function Running({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="13" cy="4" r="2" />
            <path d="M9 12l-2 5M12 8l-1.5 4 3.5 3-2 5M15 9l3-1.5M14 12l3 1.5" />
        </BaseIcon>
    );
}

export function Cycling({ fillColor = '#000', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="5" cy="17" r="3" />
            <circle cx="19" cy="17" r="3" />
            <path d="M12 17V9l-5 2 3-6h4l3 4-3 2" />
            <circle cx="15" cy="5" r="1" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function Dumbbell({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14.4 14.4 9.6 9.6" />
            <path d="M18.657 11.343 22 8l-3.657-3.657a1 1 0 0 0-1.414 0l-1.272 1.272a1 1 0 0 0 0 1.414L22 8" />
            <path d="m2 16 3.343 3.343a1 1 0 0 0 1.414 0l1.272-1.272a1 1 0 0 0 0-1.414L2 16" />
            <path d="M5.343 5.343 2 8.686l1.272 1.272a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414L9.07 1.615a1 1 0 0 0-1.414 0L5.343 5.343Z" />
            <path d="m18.657 18.657 1.272-1.272a1 1 0 0 0 0-1.414l-5.657-5.657a1 1 0 0 0-1.414 0l-1.272 1.272a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414 0Z" />
        </BaseIcon>
    );
}

export function Yoga({ fillColor = '#8B5CF6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="3" r="1" />
            <path d="M7 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM17 20a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
            <path d="M9.27 7.47A2 2 0 0 0 7.5 7C4 7 2 10 2 13l4.5-1L9 16l3-3 3 3 2.5-4 4.5 1c0-3-2-6-5.5-6a2 2 0 0 0-1.77.47" />
        </BaseIcon>
    );
}

export function Hiking({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="4" r="2" />
            <path d="M14 12l1 6M9 8l-2 4 3 2 2-3.5" />
            <path d="M14.5 10l1.5-2-3-2M7 20l2-6M17 20l-1.5-5" />
        </BaseIcon>
    );
}

export function Skiing({ fillColor = '#3B82F6', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="17" cy="4" r="2" />
            <path d="m2 18 7-11 4 3 3-5" />
            <path d="M6 20h16" />
        </BaseIcon>
    );
}

export function Scoreboard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="4" width="20" height="14" rx="2" />
            <path d="M8 12V8M12 12V8M16 12V8M8 16h.01M12 16h.01M16 16h.01" />
        </BaseIcon>
    );
}
