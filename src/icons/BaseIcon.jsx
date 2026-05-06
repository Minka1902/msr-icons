/**
 * BaseIcon — foundational SVG wrapper for all msr-icons.
 *
 * Every icon in this library delegates its SVG container to BaseIcon,
 * ensuring a single source of truth for viewBox, stroke defaults, and
 * the full set of consumer-facing props.
 *
 * Props
 * ─────────────────────────────────────────────────────────────────────
 * fillColor       Color applied to the icon.            default: '#000'
 * isColored       true → uses fillColor.                default: true
 *                 false → falls back to CSS currentColor
 *                 so the icon inherits its parent's text color.
 * strokeWidth     SVG stroke-width.                     default: '1.5'
 * mode            'stroke' (default) – fill:none, stroke:color
 *                 'fill'             – fill:color, no stroke
 * onClick         Click event handler.
 * onHover         mouseenter event handler.
 * backgroundColor CSS background-color on the <svg> element.
 * className       Additional CSS class string.
 * style           Inline style overrides.
 * children        The icon's <path>, <circle>, etc. elements.
 */

// claude --resume 8110c420-17be-4ab5-a707-93b867d516ab
export function BaseIcon({
    fillColor = '#000',
    isColored = true,
    strokeWidth,
    mode = 'stroke',
    viewBox = '0 0 24 24',
    onClick,
    onHover,
    backgroundColor,
    className,
    style,
    children,
}) {
    const color = isColored ? fillColor : 'currentColor';

    const modeProps = mode === 'fill'
        ? { fill: color }
        : {
            fill: 'none',
            stroke: color,
            strokeWidth: strokeWidth || '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
        };

    return (
        <svg
            viewBox={viewBox}
            onClick={onClick}
            onMouseEnter={onHover}
            className={className}
            style={{ backgroundColor, ...style }}
            {...modeProps}
        >
            {children}
        </svg>
    );
}
