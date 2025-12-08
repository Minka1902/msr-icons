import * as Icons from './SvgComponents';
import './icon.css';

// Generic icon wrapper for npm consumers. Usage:
// <Icon name="SvgFacebook" size={32} color="#333" onClick={...} />
export function Icon({ name, size = 24, color, isColored = true, onClick, className = '', style = {}, ...rest }) {
    const IconComponent = Icons[name];
    if (!IconComponent) return null;

    const wrapperClass = `hicon ${className}`.trim();
    const wrapperStyle = { width: size, height: size, ...style };

    return (
        <span className={wrapperClass} style={wrapperStyle}>
                <IconComponent fillColor={color} isColored={isColored} onClick={onClick} {...rest} />
        </span>
    );
}

export const iconNames = Object.keys(Icons);
export const icons = Icons;
export default Icon;
