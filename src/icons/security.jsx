import { BaseIcon } from './BaseIcon';

// Security / Privacy
export function LockOpen2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 7.5-2" /><path d="M12 15v2" />
        </BaseIcon>
    );
}

export function LockClosed({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /><path d="M12 15v2" />
        </BaseIcon>
    );
}

export function Unlock2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 7.5-2" />
        </BaseIcon>
    );
}

export function KeyRound2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="8" cy="8" r="4" /><path d="m11 11 8 8-2 2-2-2 1-1-2-2 1-1" />
        </BaseIcon>
    );
}

export function KeyholeIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="2" /><path d="m11 11.5-1 4h4l-1-4" />
        </BaseIcon>
    );
}

export function ShieldLock({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><rect x="9.5" y="11.5" width="5" height="4" rx="0.5" /><path d="M10.5 11.5v-1a1.5 1.5 0 0 1 3 0v1" />
        </BaseIcon>
    );
}

export function ShieldKey({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><circle cx="11" cy="11" r="1.5" /><path d="m12 12 2.5 2.5M14 14l1-1" />
        </BaseIcon>
    );
}

export function ShieldUser({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><circle cx="12" cy="10" r="1.8" /><path d="M9.5 15a2.5 2.5 0 0 1 5 0" />
        </BaseIcon>
    );
}

export function Fingerprint2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 4a8 8 0 0 1 8 8M4 13a8 8 0 0 1 8-8 6 6 0 0 1 6 6v2M8 12a4 4 0 0 1 8 0v3a3 3 0 0 1-1 2M12 12v4M7 17v-4M16 17a8 8 0 0 1-1 3" />
        </BaseIcon>
    );
}

export function FaceId({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" /><path d="M9 10v1M15 10v1M12 10v3h-1M10 15a3 3 0 0 0 4 0" />
        </BaseIcon>
    );
}

export function Scan2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2M3 12h18" />
        </BaseIcon>
    );
}

export function ScanFace({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8V6a2 2 0 0 1 2-2h2M16 4h2a2 2 0 0 1 2 2v2M20 16v2a2 2 0 0 1-2 2h-2M8 20H6a2 2 0 0 1-2-2v-2" /><path d="M9 10v1M15 10v1M10 15a3 3 0 0 0 4 0" />
        </BaseIcon>
    );
}

export function Encryption({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /><path d="M10 15.5h.01M12 15.5h.01M14 15.5h.01" />
        </BaseIcon>
    );
}

export function Decryption({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 7.5-2" /><path d="M9.5 15.5h5" />
        </BaseIcon>
    );
}

export function Password2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="8" width="18" height="9" rx="2" /><path d="M8 12.5v1M8 12.5l-1 .6M8 12.5l1 .6M12 12.5v1M12 12.5l-1 .6M12 12.5l1 .6M16 12.5v1M16 12.5l-1 .6M16 12.5l1 .6" />
        </BaseIcon>
    );
}

export function Otp({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="3.5" height="5" rx="0.7" /><rect x="7.5" y="6" width="3.5" height="5" rx="0.7" /><rect x="12" y="6" width="3.5" height="5" rx="0.7" /><rect x="16.5" y="6" width="3.5" height="5" rx="0.7" /><path d="M5 16h14" />
        </BaseIcon>
    );
}

export function SecurityCamera({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7 18 4l1 4-15 3-1-4Z" /><path d="M5 11v3a2 2 0 0 0 2 2h4M11 16v4M8 20h6M18.5 8l3-1" />
        </BaseIcon>
    );
}

export function Incognito({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 11h16M7 11l1.5-4h7L17 11" /><circle cx="7.5" cy="15" r="3" /><circle cx="16.5" cy="15" r="3" /><path d="M10.5 15a1.5 1.5 0 0 1 3 0" />
        </BaseIcon>
    );
}

export function PrivacyMask({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 9c2-1.5 6-1.5 6 1.5 0 2-2 3-4 2.5M21 9c-2-1.5-6-1.5-6 1.5 0 2 2 3 4 2.5" /><path d="M9 11h6M3 9c0 5 3 8 9 8s9-3 9-8" />
        </BaseIcon>
    );
}

export function Token2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
        </BaseIcon>
    );
}

export function Certificate2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="13" rx="2" /><path d="M7 8h10M7 12h5" /><circle cx="16" cy="16" r="3" /><path d="m14.5 18.5-.5 3 2-1 2 1-.5-3" />
        </BaseIcon>
    );
}

export function Signature2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 17c2-1 3-4 2-5s-2 2-1 4 3-1 4-4 1 3 3 3 2-3 3-3" /><path d="M3 21h18" />
        </BaseIcon>
    );
}

export function Authentication({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="9" cy="9" r="4" /><path d="m12 12 8 8M17 17l2-2M19.5 14.5 21 16" /><path d="m7.2 9 8.6 10.8 10.8 7.2" />
        </BaseIcon>
    );
}

export function Authorization({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="m9.4 11 11.5 13.6 14.6 8.4" />
        </BaseIcon>
    );
}

export function Captcha({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="12" rx="2" /><path d="M7 14 9 9l2 5M7.7 12.5h2.6M14 9v5M14 9c1.5 0 1.5 2.5 0 2.5M17 9v5" stroke-dasharray="1 1" />
        </BaseIcon>
    );
}

export function Honeypot({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 8h14l-1 4H6L5 8Z" /><path d="M6 12h12v6a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-6Z" /><path d="M8 8V6a4 4 0 0 1 8 0v2M9 15h6" />
        </BaseIcon>
    );
}

export function ZeroTrust({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="M9.6 8.6 14.4 13.4M14.4 8.6 9.6 13.4" />
        </BaseIcon>
    );
}

export function ThreatIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 2 20h20L12 3Z" /><path d="M12 9v5M12 17h.01" />
        </BaseIcon>
    );
}

export function VulnerabilityIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="M12 8v4M12 15h.01" />
        </BaseIcon>
    );
}

export function PatchIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="M12 8.6v4.8M9.6 11h4.8" />
        </BaseIcon>
    );
}

export function AuditLog({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h5" /><circle cx="15" cy="15" r="3" /><path d="m17 17 1.5 1.5" />
        </BaseIcon>
    );
}

export function ComplianceIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M14 3v4h4" /><path d="m9.4 13 11.5 15.6 14.6 10.4" />
        </BaseIcon>
    );
}

export function GdprIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="M12 8.5a3 3 0 1 0 3 3h-3v-3Z" />
        </BaseIcon>
    );
}

export function ConsentIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m7 12 2 2 4-4" /><path d="M16 11h2M16 14h2" />
        </BaseIcon>
    );
}

export function DataBreach({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 6c0-1.4 3.6-2.5 8-2.5s8 1.1 8 2.5-3.6 2.5-8 2.5-8-1.1-8-2.5Z" /><path d="M4 6v12c0 1.4 3.6 2.5 8 2.5M20 6v5" /><path d="m16 14 5 5M21 14l-5 5" />
        </BaseIcon>
    );
}

export function MalwareIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="5" /><path d="M12 7V4M9 8 7 6M15 8l2-2M7 12H3M21 12h-4M9 16l-2 2M15 16l2 2M12 17v3" /><path d="M10.4 10.4 13.6 13.6M13.6 10.4 10.4 13.6" />
        </BaseIcon>
    );
}

export function PhishingIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v6a8 8 0 0 0 8 8c3 0 4 1.5 4 3" /><path d="M14 13a3 3 0 1 0 3-3M17 9v1.5h-1.5" /><path d="M2 4h4" />
        </BaseIcon>
    );
}

export function RansomwareIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3" /><path d="M10.5 14.5 12 16l1.5-1.5M12 16v-2.5" /><path d="M21 4 18 7" />
        </BaseIcon>
    );
}

export function DdosIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="2.5" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2 2M16.4 16.4l2 2M18.4 5.6l-2 2M7.6 16.4l-2 2" />
        </BaseIcon>
    );
}

export function PenTest({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m14 3 7 7-3 1-3-3 1-3-2-2Z" /><path d="m12 6-9 9 1 4 4-1 9-9" /><path d="M11 9 7 13" />
        </BaseIcon>
    );
}

export function SecurityScan({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="M8 12h8" /><path d="M8 9.5h8" stroke-dasharray="1.5 1.5" />
        </BaseIcon>
    );
}

export function KeyRotation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3" /><path d="m14 12 5 0M17 12l-2-2M17 12l-2 2" /><path d="M12 4a8 8 0 0 1 7 4M12 20a8 8 0 0 1-7-4M12 4l-2.5 1M12 4l-1 2.5" />
        </BaseIcon>
    );
}

export function SecretVault({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="12" cy="12" r="4" /><path d="M12 12v-2M12 12l1.7 1M16 5v3M16 16v3" />
        </BaseIcon>
    );
}

export function ApiKey({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="7" cy="12" r="3.5" /><path d="M10.5 12H21M18 12v3M21 12v3M14 12v2" />
        </BaseIcon>
    );
}

export function AccessToken({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="7" width="18" height="10" rx="2" /><circle cx="8" cy="12" r="2" /><path d="M12 12h7M16 12v2" />
        </BaseIcon>
    );
}

export function RefreshToken({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="7" width="18" height="10" rx="2" /><path d="M8 10a3 3 0 0 0-1 4M11 14a3 3 0 0 0 1-4M7 9v2h2M12 15v-2h-2" />
        </BaseIcon>
    );
}

export function SessionIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18" /><path d="M7 14a3 3 0 0 1 5 0M9.5 12.5h.01" />
        </BaseIcon>
    );
}

export function CookieIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 4 4 0 0 1-4-4 1 1 0 0 0-1-1Z" /><path d="M9 11h.01M13 14h.01M16 11h.01M8 15h.01" />
        </BaseIcon>
    );
}

export function SameSite({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="8" height="8" rx="1.5" /><rect x="13" y="10" width="8" height="8" rx="1.5" /><path d="M11 10h2" />
        </BaseIcon>
    );
}

export function CorsIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="7" cy="12" r="4" /><circle cx="17" cy="12" r="4" /><path d="M11 12h2" /><path d="m13 10 2 2-2 2" />
        </BaseIcon>
    );
}

export function RateGuard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="M12 8v4l2.5 1.5" />
        </BaseIcon>
    );
}

export function WafIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 5 6v5c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6l-7-3Z" /><path d="M9 9h6M9 12h6M9 15h6" />
        </BaseIcon>
    );
}

export function SandboxIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18" stroke-dasharray="2 2" /><rect x="8" y="11" width="8" height="6" rx="1" />
        </BaseIcon>
    );
}

export function QuarantineIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M12 5 7 18M12 5l5 13M7.5 14h9" />
        </BaseIcon>
    );
}

