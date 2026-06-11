import { BaseIcon } from './BaseIcon';

// E-commerce / Shopping / Payments / Shipping
export function Cart({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 4h2l2.4 12.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 7H6" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
        </BaseIcon>
    );
}

export function CartPlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 4h2l2.4 12.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 7H6" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
            <path d="M13.5 9.5h-3M12 8v3" />
        </BaseIcon>
    );
}

export function CartMinus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 4h2l2.4 12.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 7H6" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
            <path d="M10.5 9.5h3" />
        </BaseIcon>
    );
}

export function CartCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 4h2l2.4 12.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 7H6" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
            <path d="M10 9.6l1.6 1.6 3-3.2" />
        </BaseIcon>
    );
}

export function CartX({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 4h2l2.4 12.2a1 1 0 0 0 1 .8h8.6a1 1 0 0 0 1-.8L21 7H6" />
            <circle cx="9" cy="20" r="1" />
            <circle cx="18" cy="20" r="1" />
            <path d="M10.5 8l3 3M13.5 8l-3 3" />
        </BaseIcon>
    );
}

export function Wishlist({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 21l-7.4-7.6a4.5 4.5 0 0 1 6.4-6.3l1 1 1-1a4.5 4.5 0 0 1 6.4 6.3z" />
        </BaseIcon>
    );
}

export function Coupon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z" />
            <path d="M14 7v10" />
        </BaseIcon>
    );
}

export function PriceTag({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12.5V4a1 1 0 0 1 1-1h8.5l8 8a1.5 1.5 0 0 1 0 2.1L13.1 20a1.5 1.5 0 0 1-2.1 0z" />
            <path d="M7.5 7.5h.01" />
        </BaseIcon>
    );
}

export function ReceiptLong({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 2v20l2-1.5 2 1.5 2-1.5 2 1.5 2-1.5 2 1.5V2l-2 1.5L14 2l-2 1.5L10 2 8 3.5z" />
            <path d="M9 8h6M9 12h6M9 16h3" />
        </BaseIcon>
    );
}

export function WalletAdd({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7a2 2 0 0 1 2-2h12v3" />
            <path d="M3 7v10a2 2 0 0 0 2 2h14a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1H4" />
            <path d="M16 12h.01" />
            <path d="M4 2.5h12" />
        </BaseIcon>
    );
}

export function CreditCardAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18M7 15h4" />
        </BaseIcon>
    );
}

export function Cash({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="2" y="6" width="20" height="12" rx="2" />
            <circle cx="12" cy="12" r="2.5" />
            <path d="M5 9h.01M19 15h.01" />
        </BaseIcon>
    );
}

export function Banknote({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="18" height="12" rx="2" />
            <path d="M12 9.5v5M10.5 11h2.2a1.2 1.2 0 0 1 0 2.4H10.5h2.5" />
        </BaseIcon>
    );
}

export function Refund({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7a8 8 0 1 1-1.5 5" />
            <path d="M3 3v4h4" />
            <path d="M12 9v6M10.5 10.5h2.2a1.2 1.2 0 0 1 0 2.4H10.5h2.5" />
        </BaseIcon>
    );
}

export function Shipping({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M2 5h11v11H2zM13 9h4l3 3v4h-7z" />
            <circle cx="6" cy="18" r="1.5" />
            <circle cx="17" cy="18" r="1.5" />
        </BaseIcon>
    );
}

export function Package2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 4 7v10l8 4 8-4V7z" />
            <path d="M4 7l8 4 8-4M12 11v10" />
        </BaseIcon>
    );
}

export function PackageOpen({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8.5 12 12l9-3.5" />
            <path d="M3 8.5 6 4l9 3M21 8.5 18 4 9 7" />
            <path d="M12 12v9M4 9v8l8 4 8-4V9" />
        </BaseIcon>
    );
}

export function PackageCheck({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 4 7v10l8 4 8-4V7z" />
            <path d="M4 7l8 4 8-4M12 11v5.5" />
            <path d="M9 14.5l2 2 4-4" />
        </BaseIcon>
    );
}

export function Delivery({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h10v9H3zM13 10h4l3 3v2h-7z" />
            <circle cx="7" cy="17" r="1.5" />
            <circle cx="17" cy="17" r="1.5" />
        </BaseIcon>
    );
}

export function Storefront({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 9 4.5 4h15L21 9a3 3 0 0 1-6 0 3 3 0 0 1-6 0 3 3 0 0 1-6 0z" />
            <path d="M4 9.5V20h16V9.5M9 20v-5h6v5" />
        </BaseIcon>
    );
}

export function Store({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 9 5 4h14l2 5a2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0 2.5 2.5 0 0 1-5 0z" />
            <path d="M4 9v11h16V9M9 20v-6h6v6" />
        </BaseIcon>
    );
}

export function ShopBag({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 7h14l-1 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z" />
            <path d="M8.5 9V6a3.5 3.5 0 0 1 7 0v3" />
        </BaseIcon>
    );
}

export function GiftCard({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="M3 10h18M14 10v9" />
            <path d="M14 7.5a1.5 1.5 0 1 0-2-1.4 1.5 1.5 0 1 0-2 1.4" />
        </BaseIcon>
    );
}

export function Barcode2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 5v14M7 5v14M10 5v10M13 5v14M16 5v10M20 5v14" />
        </BaseIcon>
    );
}

export function Pos({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="5" y="3" width="14" height="11" rx="1" />
            <path d="M8 6h8M8 9h5" />
            <path d="M4 18h16l-1.5 3H5.5z" />
        </BaseIcon>
    );
}

export function Cashier({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="10" width="18" height="10" rx="1" />
            <path d="M7 10V6h7l2 4M7 14h4" />
            <path d="M16 5h3v2h-3z" />
        </BaseIcon>
    );
}

export function MoneyBag({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 5h6l-1.5 2.5h-3z" />
            <path d="M13.5 7.5C17 9 19 13 19 16a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5c0-3 2-7 5.5-8.5" />
            <path d="M12 11v6M10.5 12.5h2.2a1.2 1.2 0 0 1 0 2.4H10.5h2.5" />
        </BaseIcon>
    );
}

export function Subscription({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 8a8 8 0 0 1 14-3l2 2" />
            <path d="M20 4v3h-3" />
            <path d="M20 16a8 8 0 0 1-14 3l-2-2" />
            <path d="M4 20v-3h3" />
        </BaseIcon>
    );
}

export function Membership({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <circle cx="8" cy="11" r="2" />
            <path d="M5 16a3 3 0 0 1 6 0M14 10h4M14 13h3" />
        </BaseIcon>
    );
}

export function Loyalty({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 4l2.3 4.7 5.2.8-3.7 3.6.9 5.1-4.7-2.4-4.6 2.4.9-5.1L4.5 9.5l5.2-.8z" />
        </BaseIcon>
    );
}

export function Voucher({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18v4a2 2 0 0 0 0 4v4H3v-4a2 2 0 0 0 0-4z" />
            <path d="M9 10h6M9 14h4" />
        </BaseIcon>
    );
}

export function Sale({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 12 12 4l8 8-8 8z" />
            <path d="M8.5 9l7 7M9 9h.01M15 15h.01" />
        </BaseIcon>
    );
}

export function Bid({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M11 8 8 5l-3 3 3 3z" />
            <path d="M9.5 6.5 16 13M14 11l3 3" />
            <path d="M5 20h8" />
        </BaseIcon>
    );
}

export function Auction({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M14 4l6 6-2.5 2.5-6-6z" />
            <path d="M13 7 6 14M9.5 10.5 16 17" />
            <path d="M3 21h9" />
        </BaseIcon>
    );
}
