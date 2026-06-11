import { BaseIcon } from './BaseIcon';

// Devices / Hardware
export function Cpu2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" /><rect x="10" y="10" width="4" height="4" rx="0.5" />
        </BaseIcon>
    );
}

export function Gpu({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="7" width="20" height="10" rx="1.5" /><circle cx="8" cy="12" r="2.5" /><circle cx="15" cy="12" r="2.5" /><path d="M5 17v3M19 17v3" />
        </BaseIcon>
    );
}

export function Memory2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="8" width="20" height="8" rx="1" /><path d="M6 8V6M10 8V6M14 8V6M18 8V6M5 16v2M9 16v2M15 16v2M19 16v2" />
        </BaseIcon>
    );
}

export function Motherboard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" /><rect x="6" y="6" width="6" height="6" rx="0.5" /><path d="M15 7h3M15 10h3M7 15h10M9 15v3M13 15v3" />
        </BaseIcon>
    );
}

export function Chip2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M9 3v3M12 3v3M15 3v3M9 18v3M12 18v3M15 18v3M3 9h3M3 12h3M3 15h3M18 9h3M18 12h3M18 15h3" />
        </BaseIcon>
    );
}

export function Microchip({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="6" width="12" height="12" rx="1.5" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /><path d="M9 9h6v6H9z" />
        </BaseIcon>
    );
}

export function CircuitBoard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M7 7h4v4M11 11h6M14 7v4M7 14v3M7 17h7v-3" /><circle cx="7" cy="7" r="1" /><circle cx="17" cy="11" r="1" /><circle cx="14" cy="14" r="1" />
        </BaseIcon>
    );
}

export function HardDrive2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="12" rx="2" /><path d="M3 14h18" /><circle cx="17" cy="16" r="0.5" /><path d="M6 16h6" />
        </BaseIcon>
    );
}

export function SsdDrive({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 10h8M8 13h5" /><circle cx="16" cy="16" r="2" />
        </BaseIcon>
    );
}

export function UsbDrive({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="7" y="9" width="10" height="12" rx="1.5" /><path d="M9 9V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5M10 13h4M10 16h4" />
        </BaseIcon>
    );
}

export function SdCard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 3h7l4 4v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M9 3v3M11.5 3v3M14 3v3" />
        </BaseIcon>
    );
}

export function Router2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="13" width="18" height="6" rx="2" /><path d="M7 16h.01M11 16h6M9 13l3-4M15 13l-1.5-2" /><path d="M16 7a4 4 0 0 0-8 0" stroke-dasharray="1.5 1.5" />
        </BaseIcon>
    );
}

export function Modem({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="11" width="18" height="8" rx="2" /><path d="M7 15h.01M11 15h.01M15 15h2M8 11V8M16 11V8M6 5h12" />
        </BaseIcon>
    );
}

export function NetworkSwitch({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="8" width="20" height="8" rx="1.5" /><path d="M6 16v2M6 8V6M10 16v2M10 8V6M14 16v2M14 8V6M18 16v2M18 8V6" /><circle cx="6" cy="12" r="0.5" /><circle cx="18" cy="12" r="0.5" />
        </BaseIcon>
    );
}

export function Antenna2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 8v13M8 21h8" /><path d="M8 8a4 4 0 0 1 8 0M5.5 8a6.5 6.5 0 0 1 13 0" /><circle cx="12" cy="8" r="1.5" />
        </BaseIcon>
    );
}

export function SatelliteDish2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 19a11 11 0 0 1 11-11" /><path d="M4 14a7 7 0 0 1 4-1.5M19 5a3 3 0 0 0-4 0l5 5a3 3 0 0 0 0-4l-1-1Z" /><circle cx="5" cy="19" r="2" />
        </BaseIcon>
    );
}

export function Webcam2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="10" r="6" /><circle cx="12" cy="10" r="2" /><path d="M7 20h10M9 16l-1 4M15 16l1 4" />
        </BaseIcon>
    );
}

export function Scanner2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="9" width="18" height="6" rx="1.5" /><path d="M3 12h18M6 6h12M7 18h10" />
        </BaseIcon>
    );
}

export function Printer3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="3" width="12" height="6" rx="1" /><path d="M6 18H5a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-1" /><rect x="7" y="15" width="10" height="6" rx="1" /><path d="M17 13h.01" />
        </BaseIcon>
    );
}

export function Projector2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="8" width="20" height="9" rx="2" /><circle cx="9" cy="12.5" r="3" /><path d="M16 11h2M6 17v2M18 17v2" />
        </BaseIcon>
    );
}

export function Monitor3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="12" rx="2" /><path d="M8 20h8M12 16v4" />
        </BaseIcon>
    );
}

export function DualMonitor({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="5" width="9" height="7" rx="1" /><rect x="13" y="5" width="9" height="7" rx="1" /><path d="M6 12v2M17 12v2M4 16h6M14 16h6" />
        </BaseIcon>
    );
}

export function LaptopCode({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v9H4V6Z" /><path d="M2 18h20M9 9 7.5 11 9 13M15 9l1.5 2L15 13" />
        </BaseIcon>
    );
}

export function Keyboard3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 12h.01M18 12h.01M8 15h8" />
        </BaseIcon>
    );
}

export function Mouse3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="7" y="3" width="10" height="18" rx="5" /><path d="M12 7v3" />
        </BaseIcon>
    );
}

export function Trackpad({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M12 14v2M3 14h18" />
        </BaseIcon>
    );
}

export function Gamepad3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="8" width="20" height="9" rx="4.5" /><path d="M7 11v3M5.5 12.5h3M15 12h.01M18 13h.01M16 15h.01" />
        </BaseIcon>
    );
}

export function Joystick2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="6" r="2.5" /><path d="M12 8.5v6" /><path d="M6 21a6 6 0 0 1 12 0H6Z" /><rect x="9" y="14" width="6" height="3" rx="1" />
        </BaseIcon>
    );
}

export function VrHeadset({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="8" width="20" height="9" rx="3" /><path d="M8 17a3 3 0 0 1 4-3 3 3 0 0 1 4 3M5 8V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v2" />
        </BaseIcon>
    );
}

export function Smartwatch2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="7" y="7" width="10" height="10" rx="3" /><path d="M9 7 9.5 3h5L15 7M9 17l.5 4h5l.5-4" /><path d="M12 10v2l1.5 1" />
        </BaseIcon>
    );
}

export function Earbuds({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 4a3 3 0 0 1 3 3v6a3 3 0 0 1-6 0V9M16 4a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V9" /><path d="M8 16v4M16 16v4" />
        </BaseIcon>
    );
}

export function Speaker3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="3" width="14" height="18" rx="2" /><circle cx="12" cy="14" r="4" /><circle cx="12" cy="7" r="1.5" />
        </BaseIcon>
    );
}

export function Battery2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="8" width="17" height="8" rx="2" /><path d="M21 11v2" />
        </BaseIcon>
    );
}

export function BatteryCharging2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="8" width="17" height="8" rx="2" /><path d="M21 11v2" /><path d="M11 9.5 8.5 12.5h3L9 15.5" />
        </BaseIcon>
    );
}

export function BatteryLow2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="8" width="17" height="8" rx="2" /><path d="M21 11v2M5 11v2" />
        </BaseIcon>
    );
}

export function BatteryFull2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="8" width="17" height="8" rx="2" /><path d="M21 11v2M5 11v2M9 11v2M13 11v2" />
        </BaseIcon>
    );
}

export function PlugIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 2v6M15 2v6M7 8h10v2a5 5 0 0 1-10 0V8Z" /><path d="M12 15v7" />
        </BaseIcon>
    );
}

export function SocketIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M9 10v2M15 10v2M11 16h2" />
        </BaseIcon>
    );
}

export function PowerCable({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 3v5h4V3" /><path d="M7 8v3a3 3 0 0 0 3 3h2a3 3 0 0 1 3 3v3" /><circle cx="17" cy="20" r="2" />
        </BaseIcon>
    );
}

