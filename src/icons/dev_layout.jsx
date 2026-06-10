import { BaseIcon } from './BaseIcon';

// Layout / UI
export function LayoutGrid({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
        </BaseIcon>
    );
}

export function LayoutList({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="4" rx="1" /><rect x="3" y="10" width="18" height="4" rx="1" /><rect x="3" y="16" width="18" height="4" rx="1" />
        </BaseIcon>
    );
}

export function LayoutColumns({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M15 4v16" />
        </BaseIcon>
    );
}

export function LayoutRows({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 15h18" />
        </BaseIcon>
    );
}

export function LayoutSidebar({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" />
        </BaseIcon>
    );
}

export function LayoutSidebarRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M15 4v16" />
        </BaseIcon>
    );
}

export function LayoutHeader({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" />
        </BaseIcon>
    );
}

export function LayoutFooter({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 15h18" />
        </BaseIcon>
    );
}

export function LayoutDashboard2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="8" height="9" rx="1" /><rect x="13" y="3" width="8" height="5" rx="1" /><rect x="13" y="10" width="8" height="11" rx="1" /><rect x="3" y="14" width="8" height="7" rx="1" />
        </BaseIcon>
    );
}

export function LayoutKanban({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="5" height="16" rx="1" /><rect x="9.5" y="4" width="5" height="11" rx="1" /><rect x="16" y="4" width="5" height="14" rx="1" />
        </BaseIcon>
    );
}

export function LayoutMasonry({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="8" height="7" rx="1" /><rect x="3" y="12" width="8" height="9" rx="1" /><rect x="13" y="3" width="8" height="10" rx="1" /><rect x="13" y="15" width="8" height="6" rx="1" />
        </BaseIcon>
    );
}

export function Sidebar2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M5 8h2M5 11h2" />
        </BaseIcon>
    );
}

export function PanelLeft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16" />
        </BaseIcon>
    );
}

export function PanelRight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M15 4v16" />
        </BaseIcon>
    );
}

export function PanelTop({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18" />
        </BaseIcon>
    );
}

export function PanelBottom({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 15h18" />
        </BaseIcon>
    );
}

export function SplitHorizontal({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 12h18M12 9v6" />
        </BaseIcon>
    );
}

export function SplitVertical({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 4v16M9 12h6" />
        </BaseIcon>
    );
}

export function Columns2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 4v16" />
        </BaseIcon>
    );
}

export function Rows2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 12h18" />
        </BaseIcon>
    );
}

export function GridDots({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 6h.01" /><path d="M12 6h.01" /><path d="M18 6h.01" /><path d="M6 12h.01" /><path d="M12 12h.01" /><path d="M18 12h.01" /><path d="M6 18h.01" /><path d="M12 18h.01" /><path d="M18 18h.01" />
        </BaseIcon>
    );
}

export function GridPlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><path d="M17.5 4.0v5.0M15.0 6.5h5.0" />
        </BaseIcon>
    );
}

export function Table2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 15h18M9 9.5V20M15 9.5V20" />
        </BaseIcon>
    );
}

export function TableColumns({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M15 4v16" />
        </BaseIcon>
    );
}

export function TableRows({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 15h18" />
        </BaseIcon>
    );
}

export function TableCells({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9.5h18M3 15h18M9 4v16M15 4v16" />
        </BaseIcon>
    );
}

export function Card2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M6 13h6" />
        </BaseIcon>
    );
}

export function Cards({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="3" width="14" height="18" rx="2" /><path d="M3 6v13a2 2 0 0 0 2 2h11" />
        </BaseIcon>
    );
}

export function Carousel({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="7" y="6" width="10" height="12" rx="2" /><path d="M4 8v8M20 8v8" />
        </BaseIcon>
    );
}

export function Tabs2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8h6V4h6v4h6" /><rect x="3" y="8" width="18" height="12" rx="1.5" />
        </BaseIcon>
    );
}

export function Popover({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="11" rx="2" /><path d="M9 15l3 4 3-4" />
        </BaseIcon>
    );
}

export function Tooltip2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="9" rx="2" /><path d="M9 14l3 4 3-4" />
        </BaseIcon>
    );
}

export function Slider2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h18" /><circle cx="9" cy="12" r="3" />
        </BaseIcon>
    );
}

export function ToggleOn({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="7" width="20" height="10" rx="5" /><circle cx="16" cy="12" r="3" />
        </BaseIcon>
    );
}

export function ToggleOff({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="7" width="20" height="10" rx="5" /><circle cx="8" cy="12" r="3" />
        </BaseIcon>
    );
}

export function Checkbox2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="3" /><path d="m9 12 11.4 15 15 9" />
        </BaseIcon>
    );
}

export function RadioButton({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" />
        </BaseIcon>
    );
}

export function Dropdown2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="6" rx="1.5" /><path d="m8 9 2 2 2-2" /><path d="M5 15h14M5 18h10" />
        </BaseIcon>
    );
}

export function ColorPicker2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m13 4 7 7-9 9H4v-7l9-9Z" /><path d="m11 6 7 7" /><circle cx="6.5" cy="17.5" r="0.6" />
        </BaseIcon>
    );
}

export function GradientIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M4 12l16-8M4 18l16-8M4 20l14-7" />
        </BaseIcon>
    );
}

export function OpacityIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 6 9a8.5 8.5 0 1 0 12 0l-6-6Z" /><path d="M12 9v9a4.5 4.5 0 0 0 4.2-3" />
        </BaseIcon>
    );
}

export function ContrastIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M12 3v18a9 9 0 0 0 0-18Z" />
        </BaseIcon>
    );
}

export function SaturationIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        </BaseIcon>
    );
}

export function HueIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 0 18M12 7a5 5 0 0 0 0 10" />
        </BaseIcon>
    );
}

export function EyedropperAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m16 3 5 5-2 2-1-1-7 7-3 1-1 3-2-2 3-1 1-3 7-7-1-1 2-2Z" />
        </BaseIcon>
    );
}

export function PaintBucket2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m5 11 7-7 7 7-7 7a2 2 0 0 1-3 0l-4-4a2 2 0 0 1 0-3Z" /><path d="M9 5 7 3M19 16s2 2 2 3.3A2 2 0 0 1 19 21a2 2 0 0 1-2-1.7c0-1.3 2-3.3 2-3.3Z" />
        </BaseIcon>
    );
}

