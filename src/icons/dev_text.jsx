import { BaseIcon } from './BaseIcon';

// Text / Editor formatting
export function Heading1({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 5v14M12 5v14M4 12h8" /><path d="M16 9l2.5-1.5V19M16 19h5" />
        </BaseIcon>
    );
}

export function Heading2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 5v14M12 5v14M4 12h8" /><path d="M16 9a2 2 0 1 1 4 0c0 1.5-4 3.5-4 6h4" />
        </BaseIcon>
    );
}

export function Heading3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 5v14M12 5v14M4 12h8" /><path d="M16 8.5a2 2 0 1 1 3.5 1.5A2 2 0 1 1 16 17" />
        </BaseIcon>
    );
}

export function ParagraphIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M13 4v16M17 4v16M13 4h-3a4 4 0 0 0 0 8h3" />
        </BaseIcon>
    );
}

export function TextSize({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7V5h12v2M10 5v14M7 19h6" /><path d="M16 11v-1.5h6V11M19 9.5V19M17 19h4" />
        </BaseIcon>
    );
}

export function TextBold({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM7 12h7a3.5 3.5 0 0 1 0 7H7z" />
        </BaseIcon>
    );
}

export function TextItalic({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M11 5h7M6 19h7M14 5l-4 14" />
        </BaseIcon>
    );
}

export function Highlighter2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m9 14 7-7 4 4-7 7H9v-4Z" /><path d="M9 18H5l2-3M16 7l1-3" />
        </BaseIcon>
    );
}

export function ListOrdered({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 6h12M9 12h12M9 18h12" /><path d="M4 5l1.5-.5V9M3.5 9h2M3.5 15.5a1 1 0 1 1 1.8.6L3.5 18h2.2" />
        </BaseIcon>
    );
}

export function ListUnordered({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 6h12M9 12h12M9 18h12" /><circle cx="4.5" cy="6" r="0.8" /><circle cx="4.5" cy="12" r="0.8" /><circle cx="4.5" cy="18" r="0.8" />
        </BaseIcon>
    );
}

export function ListCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M10 6h11M10 12h11M10 18h11" /><path d="m3 6 1.2 1.2L7 4.5M3 12l1.2 1.2L7 10.5M3 18l1.2 1.2L7 16.5" />
        </BaseIcon>
    );
}

export function ListTodo({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="5" height="5" rx="1" /><rect x="3" y="15" width="5" height="5" rx="1" /><path d="M11 6.5h10M11 17.5h10" /><path d="m4 6 1 1 1.5-1.7" />
        </BaseIcon>
    );
}

export function Quote2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 7H4v5a4 4 0 0 0 3 3.8M17 7h-3v5a4 4 0 0 0 3 3.8" />
        </BaseIcon>
    );
}

export function Blockquote({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 5v14" /><path d="M9 8h11M9 12h11M9 16h7" />
        </BaseIcon>
    );
}

export function LineSpacing({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6l3-3 3 3M3 18l3 3 3-3M6 3v18" /><path d="M13 6h8M13 12h8M13 18h8" />
        </BaseIcon>
    );
}

export function LetterSpacing({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 4v16M21 4v16" /><path d="M7 16 10 7l3 9M8 13.5h4" />
        </BaseIcon>
    );
}

export function Code2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m8 6-5 6 5 6M16 6l5 6-5 6" />
        </BaseIcon>
    );
}

export function InlineCode({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="12" rx="2" /><path d="m9 10-2 2 2 2M15 10l2 2-2 2" />
        </BaseIcon>
    );
}

export function TextWrap({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M3 12h13a3 3 0 0 1 0 6h-3M3 18h4" /><path d="m9 15-3 3 3 3" />
        </BaseIcon>
    );
}

export function TextAlignJustify({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 6h16M4 10h16M4 14h16M4 18h16" />
        </BaseIcon>
    );
}

export function TextNoWrap({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M3 12h18M3 18h18" /><path d="m17 9 3 3-3 3" />
        </BaseIcon>
    );
}

export function SpellCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 16 8 7l3 9M6 13h4" /><path d="M13 16h3.5a2 2 0 0 0 0-4H13v8M16.5 21l2 2 4-4" />
        </BaseIcon>
    );
}

export function WordCount({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7h16M4 12h16M4 17h10" /><circle cx="18" cy="18" r="3" /><path d="m20 20 1.5 1.5" />
        </BaseIcon>
    );
}

export function TextCursor2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 4a3 3 0 0 0-3 3M9 20a3 3 0 0 1-3-3M15 4a3 3 0 0 1 3 3M15 20a3 3 0 0 0 3-3M6 12h12M12 4v16" />
        </BaseIcon>
    );
}

export function TypeIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7V5h16v2M12 5v14M9 19h6" />
        </BaseIcon>
    );
}

export function FontSize({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7V5h10v2M8 5v14M5 19h6" /><path d="M14 13v-1.5h7V13M17.5 11.5V19M15 19h5" />
        </BaseIcon>
    );
}

export function FontFamily({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 18 9 6l4 12M6.5 14h5" /><path d="M16 9c2 0 3 1 3 3v6M19 12c-3 0-4 1-4 2.5S16 17 17.5 17 19 16 19 14.5" />
        </BaseIcon>
    );
}

