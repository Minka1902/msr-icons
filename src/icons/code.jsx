import { BaseIcon } from './BaseIcon';

// Code / Programming / IDE
export function CodeBracket({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 6 3 12l6 6" />
        </BaseIcon>
    );
}

export function CodeBrackets({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
        </BaseIcon>
    );
}

export function CodeCurly({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 4a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2M16 4a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2" />
        </BaseIcon>
    );
}

export function CodeTags({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 7 3 12l5 5M16 7l5 5-5 5M14 4l-4 16" />
        </BaseIcon>
    );
}

export function CodeSquare({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M10 9 7 12l3 3M14 9l3 3-3 3" />
        </BaseIcon>
    );
}

export function Terminal2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M7 9l3 3-3 3M13 15h4" />
        </BaseIcon>
    );
}

export function TerminalSquare({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="3" width="18" height="18" rx="3" />
            <path d="M7 8l3 3-3 3M12 14h5" />
        </BaseIcon>
    );
}

export function Console2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="5" width="20" height="14" rx="2" />
            <path d="M2 9h20M6 14l2 2-2 2" />
        </BaseIcon>
    );
}

export function CommandLine({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7l5 5-5 5M12 17h8" />
        </BaseIcon>
    );
}

export function Cursor({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 3l14 8-6 1.5L9.5 19z" />
        </BaseIcon>
    );
}

export function CursorText({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 5v14M9 5h6M9 19h6" />
        </BaseIcon>
    );
}

export function Indent({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8l4 4-4 4M11 6h10M11 12h10M11 18h10" />
        </BaseIcon>
    );
}

export function Outdent({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 8l-4 4 4 4M11 6h10M11 12h10M11 18h10" />
        </BaseIcon>
    );
}

export function Bug2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="8" y="7" width="8" height="11" rx="4" />
            <path d="M9 4l1.5 2M15 4l-1.5 2M8 10H4M16 10h4M8 14H4M16 14h4M8.5 18l-2 2M15.5 18l2 2" />
        </BaseIcon>
    );
}

export function BugSlash({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="8" y="7" width="8" height="11" rx="4" />
            <path d="M9 4l1.5 2M15 4l-1.5 2M8 11H4M16 11h4M8 15H4M16 15h4M4 4l16 16" />
        </BaseIcon>
    );
}

export function Breakpoint({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="6" />
            <path d="M12 12h.01" />
        </BaseIcon>
    );
}

export function Debugger({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="9" y="6" width="6" height="10" rx="3" />
            <path d="M9 9H5M15 9h4M9 13H5M15 13h4M12 16v4M9.5 16l-2 2M14.5 16l2 2M10 4l1 2M14 4l-1 2" />
        </BaseIcon>
    );
}

export function Variable({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 4a8 14 0 0 0 0 16M18 4a8 14 0 0 1 0 16M9 9l6 6M15 9l-6 6" />
        </BaseIcon>
    );
}

export function FunctionIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M16 4h-2a3 3 0 0 0-3 3v10a3 3 0 0 1-3 3H6M7 11h8" />
        </BaseIcon>
    );
}

export function Method({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7l3 3-3 3M9 13h3M16 5l4 14M20 5l-4 14" />
        </BaseIcon>
    );
}

export function ClassIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="3" width="14" height="18" rx="2" />
            <path d="M5 9h14M9 13h6M9 17h4" />
        </BaseIcon>
    );
}

export function Module2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 4 7v10l8 4 8-4V7zM4 7l8 4 8-4M12 11v10" />
        </BaseIcon>
    );
}

export function Package3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 4 7v10l8 4 8-4V7zM4 7l8 4 8-4M12 11v10M8 5l8 4" />
        </BaseIcon>
    );
}

export function Dependency({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="3" />
            <circle cx="18" cy="18" r="3" />
            <path d="M6 9v4a2 2 0 0 0 2 2h7" />
        </BaseIcon>
    );
}

export function Compile({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 5l5 7-5 7M14 19h5M14 5l5 5M14 5v5h5" />
        </BaseIcon>
    );
}

export function Execute({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <path d="M10 8.5l6 3.5-6 3.5z" />
        </BaseIcon>
    );
}

export function RegexIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M16 4v8M12.5 6l7 4M12.5 10l7-4M5 18h.01" />
        </BaseIcon>
    );
}

export function Snippet({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M7 9 5.5 12 7 15M17 9l1.5 3-1.5 3M13 8l-2 8" />
        </BaseIcon>
    );
}

export function Refactor({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7h10a4 4 0 0 1 4 4v1M18 12l-2.5-2.5M18 12l2.5-2.5M20 17H10a4 4 0 0 1-4-4v-1M6 12l2.5 2.5M6 12l-2.5 2.5" />
        </BaseIcon>
    );
}

export function Lint({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 6h10M4 12h6M4 18h12" />
            <path d="M14 16.5l2 2 4-4.5" />
        </BaseIcon>
    );
}

export function Minify({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 4l-3 4 3 4-3 4 3 4M19 8h-7M19 16h-7M16 12h-4" />
        </BaseIcon>
    );
}

export function Webhook({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 7a3 3 0 1 1 4 2.8L9.5 16M15 12a3 3 0 1 1-2 5.2H7M12 19a3 3 0 1 1-2.5-4.6L13 8" />
        </BaseIcon>
    );
}

export function Endpoint({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="12" r="3" />
            <path d="M9 12h8M14 9l3 3-3 3" />
        </BaseIcon>
    );
}

export function RestApi({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <path d="M3 9h18M6.5 13v4M6.5 13h2a1.5 1.5 0 0 1 0 3h-2M11 16l1.5-3 1.5 3M11.6 15h1.8M17 13v4" />
        </BaseIcon>
    );
}

export function GraphqlIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 4 8v8l8 5 8-5V8zM12 3 4 16M12 3l8 13M4 8h16" />
            <circle cx="12" cy="3" r="1" />
            <circle cx="4" cy="16" r="1" />
            <circle cx="20" cy="16" r="1" />
        </BaseIcon>
    );
}

export function JsonIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 4a2 2 0 0 0-2 2v3a2 2 0 0 1-2 2 2 2 0 0 1 2 2v3a2 2 0 0 0 2 2M16 4a2 2 0 0 1 2 2v3a2 2 0 0 0 2 2 2 2 0 0 0-2 2v3a2 2 0 0 1-2 2M12 11v.01M12 14v.01" />
        </BaseIcon>
    );
}

export function XmlIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 8 3 12l4 4M17 8l4 4-4 4M14 6l-4 12" />
        </BaseIcon>
    );
}

export function YamlIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 5l3 5v4M11 5l-3 5M14 14V7l3 4 3-4v7" />
        </BaseIcon>
    );
}

export function EnvFile({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9zM13 3v6h6" />
            <path d="M8.5 13h3M9 13l-1 4M11 13l-1 4M14 13v4M14 13l2 4 2-4" />
        </BaseIcon>
    );
}

export function ConfigFile({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M13 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9zM13 3v6h6" />
            <circle cx="12" cy="15" r="2" />
            <path d="M12 12v1M12 17v1M9.4 13.5l.9.5M13.7 16l.9.5M9.4 16.5l.9-.5M13.7 14l.9-.5" />
        </BaseIcon>
    );
}

export function Binary({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 5h2v6M7 11h4" />
            <rect x="14" y="5" width="4" height="6" rx="1" />
            <rect x="6" y="14" width="4" height="6" rx="1" />
            <path d="M16 14h2v6M15 20h4" />
        </BaseIcon>
    );
}

export function Hexadecimal({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 4 7.5v9L12 21l8-4.5v-9zM8 10v4M8 12h3M11 10v4M14 10v4h3M17 10v2h-2" />
        </BaseIcon>
    );
}

export function PullDown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 4v12M7 11l5 5 5-5M5 20h14" />
        </BaseIcon>
    );
}
