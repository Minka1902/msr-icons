import { BaseIcon } from './BaseIcon';

// DevOps / Cloud / Infrastructure
export function Server2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="7" rx="1.5" /><rect x="3" y="13" width="18" height="7" rx="1.5" /><path d="M7 7.5h.01" /><path d="M7 16.5h.01" />
        </BaseIcon>
    );
}

export function ServerStack({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="5.5" rx="1.5" /><rect x="4" y="9.5" width="16" height="5.5" rx="1.5" /><rect x="4" y="16" width="16" height="5.5" rx="1.5" /><path d="M8 5.7h.01" /><path d="M8 12.2h.01" /><path d="M8 18.7h.01" />
        </BaseIcon>
    );
}

export function ServerRack({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="3" width="14" height="18" rx="1.5" /><path d="M5 8h14M5 13h14M5 18h14" /><path d="M8 5.5h.01" /><path d="M8 10.5h.01" /><path d="M8 15.5h.01" />
        </BaseIcon>
    );
}

export function Database2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="5.5" rx="7" ry="2.8" /><path d="M5 5.5v13c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8v-13" /><path d="M5 12c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8" />
        </BaseIcon>
    );
}

export function DatabaseBackup({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="5.5" rx="7" ry="2.8" /><path d="M5 5.5v13c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8v-13" /><path d="M5 12c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8" /><path d="M12 14.5a3 3 0 1 0 3-3M15 11.5v2.2h-2.2" />
        </BaseIcon>
    );
}

export function DatabaseSync({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="5.5" rx="7" ry="2.8" /><path d="M5 5.5v13c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8v-13" /><path d="M5 12c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8" /><path d="M9 15a3 3 0 0 1 5-1.5M15 17a3 3 0 0 1-5 1.5M14 12v1.5h-1.5M10 19v-1.5h1.5" />
        </BaseIcon>
    );
}

export function DatabaseLock({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="5.5" rx="7" ry="2.8" /><path d="M5 5.5v13c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8v-13" /><path d="M5 12c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8" /><rect x="13" y="15" width="7" height="5" rx="1" /><path d="M14.5 15v-1.5a2 2 0 0 1 4 0V15" />
        </BaseIcon>
    );
}

export function DatabaseX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="5.5" rx="7" ry="2.8" /><path d="M5 5.5v13c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8v-13" /><path d="M5 12c0 1.5 3 2.8 7 2.8s7-1.3 7-2.8" /><path d="M11 13 15 17M15 13 11 17" />
        </BaseIcon>
    );
}

export function CloudUpload2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 18a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 11 3.5 3.5 0 0 1 17 18H7Z" /><path d="M12 16v-4M10 13.5l2-2 2 2" />
        </BaseIcon>
    );
}

export function CloudDownload2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 18a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 11 3.5 3.5 0 0 1 17 18H7Z" /><path d="M12 11v4M10 13l2 2 2-2" />
        </BaseIcon>
    );
}

export function CloudSync({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 18a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 11 3.5 3.5 0 0 1 17 18H7Z" /><path d="M9.5 13.5a2.5 2.5 0 0 1 4-1M14.5 15a2.5 2.5 0 0 1-4 1" />
        </BaseIcon>
    );
}

export function CloudCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 18a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 11 3.5 3.5 0 0 1 17 18H7Z" /><path d="m9.8 13 11.6 15.2 14.2 10.8" />
        </BaseIcon>
    );
}

export function CloudX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 18a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 11 3.5 3.5 0 0 1 17 18H7Z" /><path d="M10 11 14 15M14 11 10 15" />
        </BaseIcon>
    );
}

export function CloudCog({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 18a4 4 0 0 1-.5-7.96A5.5 5.5 0 0 1 17.5 11 3.5 3.5 0 0 1 17 18H7Z" /><circle cx="12" cy="13.5" r="1.6" /><path d="M12 11v1M12 15v1M14 13.5h-1M11 13.5h-1" />
        </BaseIcon>
    );
}

export function Container2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" /><path d="m3 7.5 9 4.5 9-4.5M12 12v9" />
        </BaseIcon>
    );
}

export function Docker2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="11" width="3" height="3" /><rect x="8" y="11" width="3" height="3" /><rect x="12" y="11" width="3" height="3" /><rect x="8" y="7" width="3" height="3" /><path d="M3 14h14a4 4 0 0 0 3.5-2.5C19 11 18 12 17 11c0-2-2-3-2-3" />
        </BaseIcon>
    );
}

export function Pipeline({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="5" height="5" rx="1" /><rect x="16" y="13" width="5" height="5" rx="1" /><path d="M8 8.5h4a3 3 0 0 1 3 3v2" />
        </BaseIcon>
    );
}

export function Deploy({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c3 2 5 5 5 9l-2.5 2.5h-5L7 12c0-4 2-7 5-9Z" /><circle cx="12" cy="9" r="1.6" /><path d="M9.5 16.5 7 19m7.5-2.5L17 19M9.5 14 6 15l1.5 3.5" />
        </BaseIcon>
    );
}

export function Rocket2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c3 2 5 5 5 9l-2.5 2.5h-5L7 12c0-4 2-7 5-9Z" /><circle cx="12" cy="9" r="1.6" /><path d="M9.5 16.5 7 19m7.5-2.5L17 19M9.5 14 6 15l1.5 3.5" />
        </BaseIcon>
    );
}

export function LoadBalancer({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="5" r="2.5" /><circle cx="5" cy="19" r="2.5" /><circle cx="19" cy="19" r="2.5" /><path d="M12 7.5v3M12 10.5 6 16.5M12 10.5 18 16.5" />
        </BaseIcon>
    );
}

export function Cdn({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" />
        </BaseIcon>
    );
}

export function Cache({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 6c0-1.5 3.5-2.5 8-2.5s8 1 8 2.5-3.5 2.5-8 2.5S4 7.5 4 6Z" /><path d="M4 6v12c0 1.5 3.5 2.5 8 2.5s8-1 8-2.5V6M4 12c0 1.5 3.5 2.5 8 2.5s8-1 8-2.5" />
        </BaseIcon>
    );
}

export function Queue({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="9" width="4" height="6" rx="1" /><rect x="10" y="9" width="4" height="6" rx="1" /><rect x="17" y="9" width="4" height="6" rx="1" />
        </BaseIcon>
    );
}

export function Cluster({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="6" r="2.5" /><circle cx="6" cy="17" r="2.5" /><circle cx="18" cy="17" r="2.5" /><path d="M11 8 7 15M13 8l4 7M8 17h8" />
        </BaseIcon>
    );
}

export function Node2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3" /><circle cx="5" cy="5" r="2" /><circle cx="19" cy="5" r="2" /><circle cx="5" cy="19" r="2" /><circle cx="19" cy="19" r="2" /><path d="m6.5 6.5 3 3M17.5 6.5l-3 3M6.5 17.5l3-3M17.5 17.5l-3-3" />
        </BaseIcon>
    );
}

export function Microservice({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="8.5" y="14" width="7" height="7" rx="1.5" />
        </BaseIcon>
    );
}

export function Serverless({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M13 3 4 14h6l-1 7 9-11h-6l1-7Z" />
        </BaseIcon>
    );
}

export function VirtualMachine({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="13" rx="2" /><rect x="7" y="7" width="10" height="7" rx="1" /><path d="M8 21h8M12 17v4" />
        </BaseIcon>
    );
}

export function Vpn({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="M9 11.5 11 14l4-4.5" />
        </BaseIcon>
    );
}

export function Proxy({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="5" cy="12" r="2.5" /><rect x="10" y="8" width="9" height="8" rx="1.5" /><path d="M7.5 12H10" />
        </BaseIcon>
    );
}

export function Gateway({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 21V8l8-4 8 4v13" /><path d="M9 21v-7h6v7M4 13h16" />
        </BaseIcon>
    );
}

export function Dns({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
        </BaseIcon>
    );
}

export function Ssl({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /><path d="m10.2 15.5 11.6 17.3 13.8 13.7" />
        </BaseIcon>
    );
}

export function Uptime({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 16l4-5 3 3 5-7 6 8" /><circle cx="6" cy="6" r="1.5" />
        </BaseIcon>
    );
}

export function Monitoring({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="13" rx="2" /><path d="M6 12l3-3 2 2 3-4 4 5M8 21h8M12 17v4" />
        </BaseIcon>
    );
}

export function Logs2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" />
        </BaseIcon>
    );
}

export function Metrics({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 20V4M4 20h16M8 16v-4M12 16V8M16 16v-6M20 16v-8" />
        </BaseIcon>
    );
}

export function Observability({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="10.5" cy="10.5" r="6" /><path d="m15 15 5 5" /><path d="M7 10.5h2l1.5 3 2-5 1.5 2h1" />
        </BaseIcon>
    );
}

export function PipelineRun({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="m10 8 6 4-6 4V8Z" />
        </BaseIcon>
    );
}

export function PipelineFail({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M9 9 15 15M15 9 9 15" />
        </BaseIcon>
    );
}

export function PipelinePass({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="m9 12 11.4 15 15 9" />
        </BaseIcon>
    );
}

export function BuildSuccess({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="2" /><path d="m9 12 11.4 15 15 9" />
        </BaseIcon>
    );
}

export function BuildFail({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M9 9 15 15M15 9 9 15" />
        </BaseIcon>
    );
}

export function BuildPending({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="2" /><path d="M12 8v4l2.5 1.5" />
        </BaseIcon>
    );
}

export function TestPass({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="m9.8 16 11.6 18.2 14.2 13.8" />
        </BaseIcon>
    );
}

export function TestFail({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M10 14 14 18M14 14 10 18" />
        </BaseIcon>
    );
}

export function TestSkip({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 3h6M10 3v5l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /><path d="M10 16l3 0M14 16h.5" />
        </BaseIcon>
    );
}

export function CoverageIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M12 3a9 9 0 0 1 6.4 15.4L12 12V3Z" />
        </BaseIcon>
    );
}

export function ReleaseIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" /><path d="m3 7.5 9 4.5 9-4.5M3 7.5v9L12 21l9-4.5v-9" /><circle cx="12" cy="9" r="1" />
        </BaseIcon>
    );
}

export function RollbackIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 9a8 8 0 1 1-1.5 5" /><path d="M4 4v5h5" />
        </BaseIcon>
    );
}

export function HotfixIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m12 2 2 4h-4l2-4Z" /><circle cx="12" cy="13" r="6" /><path d="M12 7v-1M6 13H4M20 13h-2M12 10v3l2 2" />
        </BaseIcon>
    );
}

export function FeatureFlag({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 21V4M6 4h11l-2 3.5 2 3.5H6" /><path d="M11 7.5h.01" />
        </BaseIcon>
    );
}

export function CanaryDeploy({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="9" cy="11" r="4" /><path d="M13 11h6M19 11l-2-2M19 11l-2 2M7 11h.01" />
        </BaseIcon>
    );
}

export function BlueGreen({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="9" cy="12" r="5" /><circle cx="15" cy="12" r="5" />
        </BaseIcon>
    );
}

export function ScaleUp({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="9" y="9" width="6" height="6" rx="1" /><path d="M5 5h4M5 5v4M19 19h-4M19 19v-4M5 5l4 4M19 19l-4-4" />
        </BaseIcon>
    );
}

export function ScaleDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="5" width="14" height="14" rx="1.5" /><path d="M9 15v-4h4M9 11l5 5" />
        </BaseIcon>
    );
}

export function AutoScale({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="6" height="6" rx="1" /><rect x="15" y="15" width="6" height="6" rx="1" /><path d="M9 6h4a2 2 0 0 1 2 2v7M13 13l2 2 2-2" />
        </BaseIcon>
    );
}

export function HealthCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h4l2-5 3 10 2-5h7" />
        </BaseIcon>
    );
}

export function Heartbeat3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h3l2-4 3 8 2-6 2 2h6" /><path d="M20 7.5a2.5 2.5 0 0 0-4-2 2.5 2.5 0 0 0-4 2" />
        </BaseIcon>
    );
}

export function Latency({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="8.5" /><path d="M12 7v5l3.5 2" /><path d="M3 19h6" />
        </BaseIcon>
    );
}

export function Throughput({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8h14M14 5l3 3-3 3M21 16H7M10 13l-3 3 3 3" />
        </BaseIcon>
    );
}

export function Bandwidth({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 18h16M6 18V9M10 18V5M14 18v-7M18 18V7" />
        </BaseIcon>
    );
}

export function Traffic2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="8" y="2" width="8" height="20" rx="3" /><circle cx="12" cy="7" r="1.6" /><circle cx="12" cy="12" r="1.6" /><circle cx="12" cy="17" r="1.6" />
        </BaseIcon>
    );
}

export function RateLimit({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M12 12 16 8M8 12h.01M12 8v.01" /><path d="M12 3v2M21 12h-2" />
        </BaseIcon>
    );
}

export function Throttle({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="13" r="7" /><path d="M12 13 9 10M12 6V4M5 13H3M21 13h-2" />
        </BaseIcon>
    );
}

export function CircuitBreaker({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h6l2-3M13 9l2 3h6" /><circle cx="12" cy="9" r="1" /><path d="M11 12h2" />
        </BaseIcon>
    );
}

export function Retry2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 12a8 8 0 1 1 2.3 5.6" /><path d="M3 20v-4h4" />
        </BaseIcon>
    );
}

export function Fallback({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M20 12a8 8 0 1 0-2.3 5.6" /><path d="M21 20v-4h-4M8 9l-3 3 3 3M5 12h7" />
        </BaseIcon>
    );
}

