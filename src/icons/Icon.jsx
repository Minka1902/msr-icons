import { createElement } from 'react';
import * as icons from './index.js';

/**
 * Icon — generic wrapper that resolves an icon component by name.
 *
 * <Icon name="CalendarCheck2" color="black" />
 * <Icon name="CalendarCheck2" color={{ calendar: 'black', check: 'green' }} />
 *
 * `color` maps to the individual components' `fillColor` prop (a string for the
 * whole icon, or an object of per-`data-part` colors). Every other prop —
 * `size`, `onClick`, `className`, `style`, … — is forwarded untouched.
 *
 * Returns `null` for an unknown name so a bad lookup can't crash a render.
 */
export function Icon({ name, color, ...rest }) {
    const Component = name ? icons[name] : undefined;
    if (typeof Component !== 'function') return null;
    return createElement(Component, color !== undefined ? { fillColor: color, ...rest } : rest);
}
