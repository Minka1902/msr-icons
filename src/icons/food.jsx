import { BaseIcon } from './BaseIcon';

export function Restaurant({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6h3.5a1.5 1.5 0 0 1 0 3H16v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5" />
        </BaseIcon>
    );
}

export function Pizza({ fillColor = '#F97316', isColored = true, ...rest }) {
    const color = isColored ? fillColor : 'currentColor';

    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 2a10 10 0 1 0 10 10" />
            <path d="M12 2a14.5 14.5 0 0 1 4 10l2 2" />
            <path d="M12 2a9 9 0 0 0-5.2 10l2 2" />
            <circle cx="12" cy="12" r="3" />
            <circle cx="8.5" cy="8.5" r="1" fill={color} stroke="none" />
            <circle cx="15.5" cy="9.5" r="1" fill={color} stroke="none" />
        </BaseIcon>
    );
}

export function Burger({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 11a9 9 0 0 1 18 0" />
            <path d="M3 11h18M3 15h18M3 19h18M3 15a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1" />
            <path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2" />
        </BaseIcon>
    );
}

export function Coffee({ fillColor = '#92400E', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z" />
            <path d="M6 2v2M10 2v2M14 2v2" />
        </BaseIcon>
    );
}

export function Tea({ fillColor = '#059669', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 8h1a4 4 0 0 1 0 8h-1" />
            <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8Z" />
            <path d="M8 2a3 3 0 0 0 0 4M12 2a3 3 0 0 0 0 4" />
        </BaseIcon>
    );
}

export function Wine({ fillColor = '#7C3AED', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 22h8M7 10h10M12 15v7" />
            <path d="M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z" />
        </BaseIcon>
    );
}

export function Beer({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M17 11h1a3 3 0 0 1 0 6h-1" />
            <path d="M9 12v6M13 12v6M5 7h12l-1 12H6L5 7Z" />
            <path d="M5 7a4 4 0 0 1 3-4h8a4 4 0 0 1 0 4" />
        </BaseIcon>
    );
}

export function Cocktail({ fillColor = '#EC4899', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 22h8M12 11v11M3 3l7 8h4l7-8H3Z" />
            <path d="M6 6h12M15 8l3-3" />
        </BaseIcon>
    );
}

export function Cake({ fillColor = '#EC4899', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
            <path d="M4 16a1 1 0 0 0-.5.16A2 2 0 0 0 2 18v1a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-1a2 2 0 0 0-1.5-1.94A1 1 0 0 0 20 16" />
            <path d="M2 21v-1a2 2 0 0 1 2-2 2 2 0 0 0 2-2 2 2 0 0 1 2-2 2 2 0 0 0 2-2 2 2 0 0 1 2-2 2 2 0 0 0 2 2 2 2 0 0 1 2 2 2 2 0 0 0 2 2 2 2 0 0 1 2 2v1" />
            <path d="M12 7v4M12 7a2 2 0 0 1 0-4 2 2 0 0 1 0 4Z" />
        </BaseIcon>
    );
}

export function IceCream({ fillColor = '#EC4899', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11" />
            <path d="M17 7A5 5 0 0 0 7 7" />
            <path d="M11 7a1 1 0 0 1 2 0" />
        </BaseIcon>
    );
}

export function Sushi({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 12a10 10 0 1 0 20 0 10 10 0 0 0-20 0Z" />
            <path d="M12 2a10 10 0 0 1 0 20" />
            <path d="M2 12h20" />
            <path d="M12 12a4 4 0 0 1-4-4" />
        </BaseIcon>
    );
}

export function Salad({ fillColor = '#059669', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 21h10M12 21V9.5" />
            <path d="M12 9.5C12 7 11 5 9 4c-2-1-4 0-4 2s2 3.5 4 3.5c1.38 0 2.64-.6 3-1Z" />
            <path d="M12 9.5C12 7 13 5 15 4c2-1 4 0 4 2s-2 3.5-4 3.5c-1.38 0-2.64-.6-3-1Z" />
            <path d="M5 21a7 7 0 0 1 14 0" />
        </BaseIcon>
    );
}

export function FoodDelivery({ fillColor = '#F97316', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
            <path d="M6 8h2M6 12h2M16 8h2M16 12h2" />
        </BaseIcon>
    );
}

export function ChefHat({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6V13.87Z" />
            <path d="M6 17h12" />
        </BaseIcon>
    );
}

export function Grocery({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
            <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
        </BaseIcon>
    );
}

export function Bread({ fillColor = '#F59E0B', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 11a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-2Z" />
            <path d="M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
            <path d="M8 14v4M12 14v4M16 14v4" />
        </BaseIcon>
    );
}

export function Cooking({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M15 11l-1 9" />
            <path d="M19 11l-1 9" />
            <path d="M13 7l-1.5-4" />
            <path d="M17 7l-1.5-4" />
            <path d="M9 11h13l-1 2H10L9 11Z" />
            <path d="M2 22V13a5 5 0 0 1 5-5V4a1 1 0 0 1 1-1h0a1 1 0 0 1 1 1v4a5 5 0 0 1 0 10v4" />
        </BaseIcon>
    );
}

export function Grill({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m5.17 15.17 1.66 2.49A2 2 0 0 0 8.5 18.5h7a2 2 0 0 0 1.67-.84l1.66-2.49" />
            <path d="M3 8h18" />
            <path d="M12 2a3 3 0 0 0-3 3v3h6V5a3 3 0 0 0-3-3Z" />
            <path d="M5 18.5 3.5 22M19 18.5l1.5 3.5M12 18.5V22" />
        </BaseIcon>
    );
}

export function FoodMenu({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            <path d="M9 7h6M9 11h6M9 15h4" />
        </BaseIcon>
    );
}

export function Cutlery({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
            <path d="M7 2v20" />
            <path d="M21 15V2a5 5 0 0 0-5 5v4h3.5a1.5 1.5 0 0 1 0 3H16v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-5" />
        </BaseIcon>
    );
}


// Food / Drink
export function CoffeeAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 8h12v4a6 6 0 0 1-12 0V8Z" /><path d="M17 9h2a2 2 0 0 1 0 4h-2M5 21h12" /><path d="M8 3c0 1 1 1.5 1 2.5M12 3c0 1 1 1.5 1 2.5" />
        </BaseIcon>
    );
}

export function TeaCup({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 9h12v3a6 6 0 0 1-12 0V9Z" /><path d="M16 10h3a2 2 0 0 1 0 4h-3M10 3v3" /><path d="M3 21h14" />
        </BaseIcon>
    );
}

export function Beer2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 8h9v11a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8Z" /><path d="M15 10h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-3" /><path d="M6 8a3 3 0 0 1 .5-5 3 3 0 0 1 5 0 3 3 0 0 1 3.5 5" />
        </BaseIcon>
    );
}

export function Wine2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 3h10l-1 6a4 4 0 0 1-8 0L7 3Z" /><path d="M12 13v6M9 21h6M7.5 6h9" />
        </BaseIcon>
    );
}

export function Cocktail2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 4h18l-9 9-9-9Z" /><path d="M12 13v6M8 21h8M14 8l5-5" /><circle cx="19" cy="3" r="1" />
        </BaseIcon>
    );
}

export function Soda({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 3h10l-1 17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2L7 3Z" /><path d="M7 8h10M11 3v3" /><path d="M14 4l2-2" />
        </BaseIcon>
    );
}

export function Pizza2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 3 19a1 1 0 0 0 1 1.4L20 14 12 3Z" /><path d="M12 3a14 14 0 0 1 8 11" /><path d="M10 10h.01M13 13h.01M8 15h.01" />
        </BaseIcon>
    );
}

export function Burger2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8a8 8 0 0 1 16 0H4Z" /><path d="M3 12h18M4 12a3 3 0 0 0 16 0" /><path d="M5 16h14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" /><path d="M8 6h.01M12 5h.01M16 6h.01" />
        </BaseIcon>
    );
}

export function Sandwich2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8 12 4l9 4-9 4-9-4Z" /><path d="M3 8v3l9 4 9-4V8M5 14l7 3 7-3" /><path d="M6 9.5l2 1M14 11l2-1" />
        </BaseIcon>
    );
}

export function Taco2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 16a9 9 0 0 1 18 0H3Z" /><path d="M3 16a3 3 0 0 0 18 0" /><path d="M8 13l1-2M12 12v-2M16 13l-1-2" />
        </BaseIcon>
    );
}

export function Sushi2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="9" width="18" height="6" rx="3" /><path d="M8 9v6M16 9v6" /><circle cx="12" cy="12" r="1.5" />
        </BaseIcon>
    );
}

export function Noodles({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8h16l-1 3a8 8 0 0 1-14 0L4 8Z" /><path d="M7 8c0-3 1-5 2-5M11 8c0-3 1-5 2-5M15 8c0-3 1-5 2-5" /><path d="M3 19h18" />
        </BaseIcon>
    );
}

export function Salad2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 11h16a8 8 0 0 1-16 0Z" /><path d="M12 11c-2-3-1-6 0-7 1 1 2 4 0 7ZM9 11c-2-1-3-3-3-4 1 0 4 1 4 4M15 11c2-1 3-3 3-4-1 0-4 1-4 4" />
        </BaseIcon>
    );
}

export function IceCream3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M8 9a4 4 0 0 1 8 0" /><path d="M8 9h8l-4 12-4-12Z" /><path d="M9 13h6M10 17h4" />
        </BaseIcon>
    );
}

export function Cake2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 21V11a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10" /><path d="M4 15c1.5 0 1.5 1.5 3 1.5s1.5-1.5 3-1.5 1.5 1.5 3 1.5 1.5-1.5 3-1.5 1.5 1.5 3 1.5M12 9V6M12 4v.01M3 21h18" />
        </BaseIcon>
    );
}

export function Donut2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3" /><path d="M7 7l1 1M16 6l-1 1M18 11l-1 .5M9 17l.5 1" />
        </BaseIcon>
    );
}

export function Cookie3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M9 9h.01M15 8h.01M16 13h.01M9 15h.01M12 12h.01" />
        </BaseIcon>
    );
}

export function Bread2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V10Z" /><path d="M8 9v9M11 9v9" />
        </BaseIcon>
    );
}

export function Egg2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c3.5 0 6 5 6 9a6 6 0 0 1-12 0c0-4 2.5-9 6-9Z" />
        </BaseIcon>
    );
}

export function Cheese2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 18 12 8h9v10H3Z" /><path d="M3 18a3 3 0 0 0 18 0" /><circle cx="9" cy="14" r="1" /><circle cx="15" cy="13" r="1" />
        </BaseIcon>
    );
}

export function Apple2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 7c-2-2-6-1.5-6 3.5 0 4 2.5 8 4 8s1.5-1 2-1 .5 1 2 1 4-4 4-8c0-5-4-5.5-6-3.5Z" /><path d="M12 7c0-2 1-3.5 3-3.5M12 7V5" />
        </BaseIcon>
    );
}

export function Banana2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7c0 8 6 12 14 12 0-1-1-2-3-2-6 0-9-4-9-10 0-1-2-1-2 0Z" /><path d="M15 19c2 0 3-1 3-2" />
        </BaseIcon>
    );
}

export function Carrot2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 19 14 10a4 4 0 0 0-4-4L3 17l2 2Z" /><path d="M14 10c1-1 2-1 3 0M14 7c0-2 1-3 3-3M11 6c0-2 1-3 3-3M8 10l3 3" />
        </BaseIcon>
    );
}

export function ChiliPepper({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 18c8 0 12-5 12-11 0-1 1-1 1 0 0 8-5 14-13 14a1 1 0 0 1 0-3Z" /><path d="M18 7c0-2 1-3 3-3" />
        </BaseIcon>
    );
}

export function Utensils2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 3v7a2 2 0 0 0 4 0V3M7 10v11M16 3c-1.5 0-2.5 2-2.5 4.5S15 12 16 12v9" />
        </BaseIcon>
    );
}

export function ChefHat2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 13a4 4 0 0 1-1-7.8A4 4 0 0 1 12 4a4 4 0 0 1 7 1.2A4 4 0 0 1 18 13H6Z" /><path d="M6 13v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-5" />
        </BaseIcon>
    );
}

export function Menu3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /><circle cx="12" cy="3" r="0" />
        </BaseIcon>
    );
}
