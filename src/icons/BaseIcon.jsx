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
 *                                       The `base` key colors every element
 *                                       that isn't named explicitly; extra
 *                                       structural parts are `base2`, `base3`…
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
 *                 individually via an object fillColor. Tag filled
 *                 elements inside a stroke icon with `data-fill`.
 */

// Pull the catch-all color out of a color map (`base`, then `default`).
function resolveBaseColor(colorMap) {
    if (colorMap.base != null) return colorMap.base;
    if (colorMap.default != null) return colorMap.default;
    return '#000';
}

// Does any element in the tree carry a `data-part`? Used to avoid touching
// icons that haven't been tagged for per-element coloring yet.
function hasParts(children) {
    let found = false;
    Children.forEach(children, (child) => {
        if (found || !isValidElement(child)) return;
        if (child.props['data-part'] != null) {
            found = true;
            return;
        }
        if (child.props.children != null) found = hasParts(child.props.children);
    });
    return found;
}

// Decide whether a tagged element should be painted via `fill` or `stroke`.
function paintAttr(child, mode) {
    if (child.props['data-fill'] !== undefined) return 'fill';
    const f = child.props.fill;
    if (f != null && f !== 'none' && f !== 'transparent') return 'fill';
    return mode === 'fill' ? 'fill' : 'stroke';
}

// Walk the child tree and paint each tagged element with its part color,
// falling back to `base` and then the icon's base color. Untagged elements
// are left untouched and inherit the base color from the <svg>.
function paintParts(children, colorMap, baseColor, mode) {
    return Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        const part = child.props['data-part'];
        const grandchildren = child.props.children;

        const nextProps = {};
        if (part != null && typeof child.type === 'string') {
            const attr = paintAttr(child, mode);
            // Named part wins; otherwise keep the element's own explicit color
            // (accent colors); otherwise fall back to base / the icon color.
            if (colorMap[part] != null) {
                nextProps[attr] = colorMap[part];
            } else if (child.props[attr] == null) {
                nextProps[attr] = colorMap.base != null ? colorMap.base : baseColor;
            }
        }

        if (grandchildren != null) {
            return cloneElement(child, nextProps, paintParts(grandchildren, colorMap, baseColor, mode));
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

    const modeProps = mode === 'fill'
        ? { fill: baseColor }
        : {
            fill: 'none',
            stroke: baseColor,
            strokeWidth: strokeWidth || '1.5',
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
        };

    // Paint per element when an object color is supplied, or when the icon
    // has been tagged with data-part (so mixed fill/stroke icons render
    // correctly even with a plain string color). Untagged icons are untouched.
    const colorMap = (isMap && isColored) ? fillColor : {};
    const content = (isMap || hasParts(children))
        ? paintParts(children, colorMap, baseColor, mode)
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
