import { BaseIcon } from './BaseIcon';

// Users / People / Account
export function UserCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><path d="m16 17 17.6 19 20 15" />
        </BaseIcon>
    );
}

export function UserX2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><path d="M16.2 15.2 19.8 18.8M19.8 15.2 16.2 18.8" />
        </BaseIcon>
    );
}

export function UserPlus2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><path d="M18 15v4M16 17h4" />
        </BaseIcon>
    );
}

export function UserMinus2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><path d="M16 17h4" />
        </BaseIcon>
    );
}

export function UserCog({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><circle cx="18" cy="17" r="1.6" /><path d="M18 14.8v-.6M18 19.2v.6M20 17h.6M15.4 17H16" />
        </BaseIcon>
    );
}

export function UserLock({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><rect x="15" y="16" width="6" height="4.5" rx="0.5" /><path d="M16.2 16v-1a1.8 1.8 0 0 1 3.6 0v1" />
        </BaseIcon>
    );
}

export function UserSearch({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><circle cx="17.5" cy="16.5" r="2.5" /><path d="m19.5 18.5 1.5 1.5" />
        </BaseIcon>
    );
}

export function UserStar({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><path d="m18 14.8 18.9 16.6 20.2 16.8 19.1 17.9 19.3 19.2 18 18.3 16.7 19.2 16.9 17.9 15.8 16.8 17.1 16.6Z" />
        </BaseIcon>
    );
}

export function UserHeart({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><path d="M18 18.1s-2.5600000000000005 -1.4400000000000002 -2.5600000000000005 -3.3600000000000003a1.2800000000000002 1.2800000000000002 0 0 1 2.5600000000000005 -0.8 1.2800000000000002 1.2800000000000002 0 0 1 2.5600000000000005 0.8c0 1.92 -2.5600000000000005 3.3600000000000003 -2.5600000000000005 3.3600000000000003Z" />
        </BaseIcon>
    );
}

export function UserCircle2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18.5a6 6 0 0 1 11 0" />
        </BaseIcon>
    );
}

export function UserSquare({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="12" cy="10" r="3" /><path d="M6.5 18.5a6 6 0 0 1 11 0" />
        </BaseIcon>
    );
}

export function UserGroup2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><circle cx="17" cy="9" r="2.3" /><path d="M16 13.5a5 5 0 0 1 4.5 5" />
        </BaseIcon>
    );
}

export function TeamIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="9" r="2.3" /><circle cx="18" cy="9" r="2.3" /><circle cx="12" cy="7" r="2.6" /><path d="M2.5 19a4 4 0 0 1 7-2M14.5 17a4 4 0 0 1 7 2M8 18a5 5 0 0 1 8 0" />
        </BaseIcon>
    );
}

export function ProfileCard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8" cy="11" r="2.2" /><path d="M5 16a3 3 0 0 1 6 0M14 10h4M14 13h3" />
        </BaseIcon>
    );
}

export function Contact2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="18" rx="2" /><circle cx="12" cy="10" r="2.6" /><path d="M8 17a4 4 0 0 1 8 0M2 8h2M2 12h2M2 16h2" />
        </BaseIcon>
    );
}

export function ContactBook({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="3" width="15" height="18" rx="2" /><path d="M5 8H3M5 12H3M5 16H3" /><circle cx="12" cy="10" r="2.3" /><path d="M9 16a3 3 0 0 1 6 0" />
        </BaseIcon>
    );
}

export function Identity({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8" cy="11" r="2.2" /><path d="M5 16a3 3 0 0 1 6 0M14 9h4M14 12h4M14 15h2" />
        </BaseIcon>
    );
}

export function Persona({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0M9 7a3 3 0 0 0 6 0" />
        </BaseIcon>
    );
}

export function Organization({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="9" y="13" width="6" height="8" rx="1" /><rect x="4" y="3" width="16" height="10" rx="1.5" /><path d="M8 7h2M14 7h2M8 10h2M14 10h2" />
        </BaseIcon>
    );
}

export function Department({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="8.5" y="14" width="7" height="7" rx="1" /><path d="M6.5 10v2h11v-2M12 12v2" />
        </BaseIcon>
    );
}

export function Role({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.5" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" /><path d="M18 6l1.2 2.4 2.6.3-1.9 1.8.5 2.6L18 14l-2.9 1.6.5-2.6-1.9-1.8 2.6-.3L18 6Z" />
        </BaseIcon>
    );
}

export function Permission2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><path d="m15.8 16 17.6 18.2 20.2 13.8" />
        </BaseIcon>
    );
}

export function UserBlock({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><circle cx="18" cy="17" r="3" /><path d="m16 15 4 4" />
        </BaseIcon>
    );
}

export function UserShield({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><path d="M18 13.5 15 15v2c0 1.4 1.3 2.5 3 3 1.7-.5 3-1.6 3-3v-2l-3-1.5Z" />
        </BaseIcon>
    );
}

export function UserVoice({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.5" /><path d="M5.5 20a6.5 6.5 0 0 1 13 0" /><path d="M19 9a3 3 0 0 1 0 6M21.5 7a6 6 0 0 1 0 10" />
        </BaseIcon>
    );
}

export function UserClock({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><circle cx="18" cy="17" r="3" /><path d="M18 15.5V17l1 .8" />
        </BaseIcon>
    );
}

export function UserEdit({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="3.2" /><path d="M6 19a6 6 0 0 1 12 0" /><path d="M15 20h1.5l4-4-1.5-1.5-4 4V20Z" />
        </BaseIcon>
    );
}

export function Followers({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 9l2 2 4-4" />
        </BaseIcon>
    );
}

export function Following({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="9" cy="8" r="3" /><path d="M3.5 19a5.5 5.5 0 0 1 11 0" /><path d="M16 11h6M19 8l3 3-3 3" />
        </BaseIcon>
    );
}

