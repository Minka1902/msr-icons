import { BaseIcon } from './BaseIcon';

/**
 * dev_essentials — icons explicitly requested by the consuming app
 * (see MISSINGICONS.md). The remaining names in that table — Cart,
 * CircleCheck, CircleX, UserBlock, MapPin — live in their themed
 * dev_*.jsx files and are exported from there.
 */

// Affiliate / hyperlink
export function Link({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 17H7A5 5 0 0 1 7 7h2M15 7h2a5 5 0 0 1 0 10h-2M8 12h8" />
        </BaseIcon>
    );
}

// Language / translation
export function Language({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 5h10M7 3v2c0 4.4-2.2 8-5 8M4 9c0 2.6 3 4.8 6 5M13 21l5-11 5 11M15.5 16.5h5" />
        </BaseIcon>
    );
}

// Theme / palette
export function Palette({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2.5C6.75 2.5 2.5 6.75 2.5 12s4.25 9.5 9.5 9.5c1.66 0 2-1.5 1.1-2.4-.86-.86-.27-2.1.9-2.1H17a4.5 4.5 0 0 0 4.5-4.5C21.5 6.75 17.25 2.5 12 2.5Z" />
            <path d="M7.5 12.5h.01M9.5 8.5h.01M14.5 8.5h.01M16.5 12.5h.01" />
        </BaseIcon>
    );
}

// Close / dismiss
export function Close({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M18 6 6 18M6 6l12 12" />
        </BaseIcon>
    );
}

// Info / notice
export function Info({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9.5" />
            <path d="M12 16.5v-5M12 7.5h.01" />
        </BaseIcon>
    );
}

// Ban / block
export function Ban({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9.5" />
            <path d="m5.3 5.3 13.4 13.4" />
        </BaseIcon>
    );
}

// Edit / pencil
export function Pencil({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5ZM14.5 5.5l3 3" />
        </BaseIcon>
    );
}
