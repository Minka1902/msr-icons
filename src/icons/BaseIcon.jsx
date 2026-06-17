import { Children, cloneElement, isValidElement } from 'react';

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
 *                 Accepts either:
 *                   • a string ........ every element uses this color
 *                   • an object ....... per-element colors keyed by the
 *                                       element's `data-part`, e.g.
 *                                       { calendar: 'black', check: 'green' }
 *                                       Use the `base` (or `default`) key to
 *                                       set the color for any untargeted parts.
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
 * children        The icon's <path>, <circle>, etc. elements. Tag each
 *                 element with `data-part="name"` so it can be colored
 *                 individually via an object fillColor.
 */

// Pull the color for a given `base`/`default` fallback out of a color map.
function resolveBaseColor(colorMap) {
    if (colorMap.base != null) return colorMap.base;
    if (colorMap.default != null) return colorMap.default;
    return '#000';
}

// Walk the child tree and paint each element that carries a matching
// `data-part` with its color from the map. Elements without a matching
// part are left untouched and inherit the base color from the <svg>.
function paintParts(children, colorMap, colorAttr) {
    return Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        const part = child.props['data-part'];
        const grandchildren = child.props.children;

        const nextProps = {};
        if (part != null && colorMap[part] != null && typeof child.type === 'string') {
            nextProps[colorAttr] = colorMap[part];
        }

        if (grandchildren != null) {
            return cloneElement(child, nextProps, paintParts(grandchildren, colorMap, colorAttr));
        }
        if (Object.keys(nextProps).length > 0) {
            return cloneElement(child, nextProps);
        }
        return child;
    });
}

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
    const isMap = fillColor != null && typeof fillColor === 'object';
    const baseColor = isColored
        ? (isMap ? resolveBaseColor(fillColor) : fillColor)
        : 'currentColor';

    const colorAttr = mode === 'fill' ? 'fill' : 'stroke';

    const modeProps = mode === 'fill'
        ? { fill: baseColor }
        : {
            fill: 'none',
            stroke: baseColor,
            strokeWidth: strokeWidth || '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
        };

    // Per-element coloring only kicks in when an object color is supplied
    // and the icon is in colored mode; otherwise children render untouched.
    const content = (isMap && isColored)
        ? paintParts(children, fillColor, colorAttr)
        : children;

    return (
        <svg
            viewBox={viewBox}
            onClick={onClick}
            onMouseEnter={onHover}
            className={className}
            style={{ backgroundColor, ...style }}
            {...modeProps}
        >
            {content}
        </svg>
    );
}
