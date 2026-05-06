import { BaseIcon } from './BaseIcon';

// Office formats
export function DOCX({ fillColor = '#2B579A', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 12h2l1 4 1-4h2" />
        </BaseIcon>
    );
}

export function PPTX({ fillColor = '#D24726', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 12h3a2 2 0 0 1 0 4H8v-4ZM8 16v2" />
        </BaseIcon>
    );
}

export function XLSX({ fillColor = '#217346', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <path d="M8 12l4 5M12 12l-4 5" />
        </BaseIcon>
    );
}

export function RTF({ fillColor = '#555', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h3a2 2 0 0 1 0 4h-3M11 16l2 2" />
        </BaseIcon>
    );
}

// Adobe / Design
export function PSD({ fillColor = '#31A8FF', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h3a2 2 0 0 1 0 4H8v-4Z" />
        </BaseIcon>
    );
}

export function AI({ fillColor = '#FF9A00', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 17l2-6h2l2 6M9.5 14h3" />
        </BaseIcon>
    );
}

export function EPS({ fillColor = '#FF9A00', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 17v-5h4M8 14h3M8 17h4" />
        </BaseIcon>
    );
}

// Image formats
export function PNG({ fillColor = '#4CAF50', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h1v5M9 12l3 3M12 12v5" />
        </BaseIcon>
    );
}

export function JPG({ fillColor = '#FF9800', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M9 17V12M9 17a1.5 1.5 0 0 1-3 0v-1M13 12h2a2 2 0 0 1 0 4h-2v1" />
        </BaseIcon>
    );
}

export function TIFF({ fillColor = '#607D8B', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h4M10 12v5M15 12v5M15 14h-2" />
        </BaseIcon>
    );
}

export function BMP({ fillColor = '#795548', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h2a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0 3H8v-6Z" />
        </BaseIcon>
    );
}

export function ICO({ fillColor = '#9C27B0', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M9 12v5M11 12a2.5 2.5 0 0 1 0 5M15 12a2.5 2.5 0 0 0 0 5" />
        </BaseIcon>
    );
}

export function AVIF({ fillColor = '#00BCD4', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12l2 5M10 12l-2 5M13 12v5M15 12l2 3-2 2" />
        </BaseIcon>
    );
}

export function HEIC({ fillColor = '#FF5722', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5M8 14h2M10 12v5M13 12v5h2a2 2 0 0 0 0-4" />
        </BaseIcon>
    );
}

// Audio formats
export function MP3({ fillColor = '#E91E63', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h2a1.5 1.5 0 0 1 0 3h-2v-3ZM8 15v2M13 12h1.5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0 3H13" />
        </BaseIcon>
    );
}

export function WAV({ fillColor = '#9C27B0', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M7 17l1-5 1.5 3 1.5-3 1 5M16 12v5" />
        </BaseIcon>
    );
}

export function FLAC({ fillColor = '#3F51B5', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5h3M8 14h2M13 12l.01 5M15 12a2.5 2.5 0 0 1 0 5" />
        </BaseIcon>
    );
}

export function AAC({ fillColor = '#FF9800', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 17l2-5 2 5M9 15h2M14 17l2-5 2 5M15 15h2" />
        </BaseIcon>
    );
}

// Video formats
export function MP4({ fillColor = '#9C27B0', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h1.5a1.5 1.5 0 0 1 0 3H8v-3ZM8 15v2M13 12v3M13 15h2M13 17v-2h2" />
        </BaseIcon>
    );
}

export function MOV({ fillColor = '#795548', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12l1.5 5 1.5-5 1.5 5 1.5-5M16 12a2.5 2.5 0 0 1 0 5" />
        </BaseIcon>
    );
}

export function MKV({ fillColor = '#607D8B', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5M11 12l-3 2.5 3 2.5M14 12l2 5M14 12l2 5M16 12l2 5" />
        </BaseIcon>
    );
}

export function AVI({ fillColor = '#F44336', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 17l2-5 2 5M9 15h2M14 12v5M16 12v5" />
        </BaseIcon>
    );
}

export function WEBM({ fillColor = '#00BCD4', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M7 12l1 5 1.5-3 1.5 3 1-5M14 12h1.5a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0 3H14" />
        </BaseIcon>
    );
}

// eBook
export function EPUB({ fillColor = '#4CAF50', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5h3M8 14h2M13 12v5h3M13 14h2" />
        </BaseIcon>
    );
}

// Code & config files
export function TSFile({ fillColor = '#3178C6', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h4M10 12v5M14 12a2.5 2.5 0 0 1 0 5" />
        </BaseIcon>
    );
}

export function TSXFile({ fillColor = '#3178C6', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M7 12h3M8 12v5M13 12l2 5M13 17l2-5" />
        </BaseIcon>
    );
}

export function JSXFile({ fillColor = '#F7DF1E', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M9 12v3.5a1.5 1.5 0 0 1-3 0v-.5M14 12l2 5M14 17l2-5" />
        </BaseIcon>
    );
}

export function ENVFile({ fillColor = '#ECC94B', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5h3M8 14h2M13 12v5M13 12l3 5M16 12v5" />
        </BaseIcon>
    );
}

export function LogFile({ fillColor = '#9E9E9E', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5h3M13 12a2.5 2.5 0 0 1 0 5" />
        </BaseIcon>
    );
}

export function SHFile({ fillColor = '#4CAF50', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5M8 14h2M10 12v5M13 12a2.5 2.5 0 0 1 2.5 2.5c0 1.38-1.12 2.5-2.5 2.5H13" />
        </BaseIcon>
    );
}

// Executables & Archives
export function EXE({ fillColor = '#0078D4', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5h3M8 14h2M13 12v5h3M13 14h2M13 17h3" />
        </BaseIcon>
    );
}

export function DMG({ fillColor = '#999', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h2a2.5 2.5 0 0 1 0 5H8v-5ZM13 12h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1" />
        </BaseIcon>
    );
}

export function APK({ fillColor = '#3DDC84', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 17l2-5 2 5M9 15h2M14 12v5M14 12h2M16 14h-2M16 12v5" />
        </BaseIcon>
    );
}

export function TAR({ fillColor = '#795548', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h4M10 12v5M14 17l2-5 2 5M15 15h2" />
        </BaseIcon>
    );
}

export function GZ({ fillColor = '#FF5722', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12a2.5 2.5 0 0 0 0 5h2v-2h-1M14 17v-5l3 5v-5" />
        </BaseIcon>
    );
}

// OpenDocument formats
export function ODP({ fillColor = '#D24726', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h1.5a1.5 1.5 0 0 1 0 3H8v-3ZM8 15v2M13 14a2.5 2.5 0 0 1 4 0" />
        </BaseIcon>
    );
}

export function ODS({ fillColor = '#217346', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h3a1 1 0 0 1 0 2H8a1 1 0 0 0 0 2h4M15 12v5" />
        </BaseIcon>
    );
}

export function ODT({ fillColor = '#2B579A', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h4M10 12v5M14 12h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1" />
        </BaseIcon>
    );
}

// Adobe (remaining)
export function INDD({ fillColor = '#FF3366', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5M10 12v5M10 12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2M14 12v5" />
        </BaseIcon>
    );
}

export function XD({ fillColor = '#FF61F6', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12l2 5M10 12l-2 5M14 12h2a1.5 1.5 0 0 1 0 3h-2v-3ZM14 15v2" />
        </BaseIcon>
    );
}

// Image (remaining)
export function RAW({ fillColor = '#607D8B', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h2a1 1 0 0 1 0 2H8v-2ZM10 14l2 3M14 17l2-5 2 5M15 15h2" />
        </BaseIcon>
    );
}

// Audio (remaining)
export function OGG({ fillColor = '#9C27B0', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 14.5a2.5 2.5 0 0 0 2.5 2.5v-2H9M13 14.5a2.5 2.5 0 0 0 2.5 2.5v-2H14" />
        </BaseIcon>
    );
}

export function M4A({ fillColor = '#E91E63', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12l1.5 5 1.5-5 1.5 5 1.5-5M16 12v3M16 15h-2M16 17v-2h-2" />
        </BaseIcon>
    );
}

// Video (remaining)
export function M4V({ fillColor = '#7C3AED', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h1.5a1.5 1.5 0 0 1 0 3H8v-3ZM8 15v2M13 12v3M13 15h2M13 17v-2h2M17 12l2 5" />
        </BaseIcon>
    );
}

export function FLV({ fillColor = '#F44336', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5h3M8 14h2M13 12a2.5 2.5 0 0 1 0 5M17 12l2 5" />
        </BaseIcon>
    );
}

// eBook (remaining)
export function MOBI({ fillColor = '#8D6E63', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12l1 5 2-3 2 3 1-5" />
        </BaseIcon>
    );
}

// Code & Config (remaining)
export function BATFile({ fillColor = '#0078D4', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h2a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0 3H8v-6ZM12 12h4M14 12v5" />
        </BaseIcon>
    );
}

export function INIFile({ fillColor = '#607D8B', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5M11 12v5M11 12l2.5 5M13.5 12v5M16.5 12v5" />
        </BaseIcon>
    );
}

export function LOCKFile({ fillColor = '#F59E0B', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6" />
            <rect x="9" y="11" width="6" height="5" rx="1" />
            <path d="M10 11V9.5a2 2 0 1 1 4 0V11" />
        </BaseIcon>
    );
}

// Executables (remaining)
export function IPAFile({ fillColor = '#555', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12v5M11 12h2a1.5 1.5 0 0 1 0 3h-2v-3ZM15 17l2-5 2 5M16 15h2" />
        </BaseIcon>
    );
}

export function BZIPFile({ fillColor = '#FF5722', ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} {...rest}>
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
            <path d="M14 2v6h6M8 12h2a1.5 1.5 0 0 1 0 3 1.5 1.5 0 0 1 0 3H8v-6ZM12 12v5M14 12v5" />
        </BaseIcon>
    );
}
