import * as Icons from './icons';
import * as deprecatedIcons from './icons/aliases';

export * from './icons';

// Deprecated names still resolve through './icons', but they are not icons in
// their own right, and neither are the two wrapper components.
const NON_ICON_EXPORTS = new Set(['BaseIcon', 'Icon', ...Object.keys(deprecatedIcons)]);

export const icons = Icons;
export const iconNames = Object.keys(Icons).filter((name) => !NON_ICON_EXPORTS.has(name));
