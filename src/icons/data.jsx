import { BaseIcon } from './BaseIcon';

// Data / Analytics / Charts
export function ChartBar2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="M8 18v-5M12 18V9M16 18v-7" />
        </BaseIcon>
    );
}

export function ChartLine2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="m6 15 4-4 3 2 5-6" />
        </BaseIcon>
    );
}

export function ChartPie2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3a9 9 0 1 0 9 9h-9V3Z" /><path d="M14 3.5A8 8 0 0 1 20.5 10H14V3.5Z" />
        </BaseIcon>
    );
}

export function ChartArea2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="M6 16 9 12l3 2 5-6v8H6v-2Z" />
        </BaseIcon>
    );
}

export function ChartScatter({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="M8 14h.01" /><path d="M11 9h.01" /><path d="M14 15h.01" /><path d="M16 8h.01" /><path d="M10 16h.01" /><path d="M17 12h.01" />
        </BaseIcon>
    );
}

export function ChartBubble({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><circle cx="9" cy="13" r="2" /><circle cx="15" cy="9" r="2.6" /><circle cx="16" cy="16" r="1.4" />
        </BaseIcon>
    );
}

export function ChartCandlestick({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="M8 7v3M8 16v3M16 6v2M16 15v3" /><rect x="6.5" y="10" width="3" height="6" rx="0.5" /><rect x="14.5" y="8" width="3" height="7" rx="0.5" />
        </BaseIcon>
    );
}

export function ChartRadar({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 21 10l-3.5 10h-11L3 10 12 3Z" /><path d="m12 8 4 3-1.5 4.5h-5L8 11l4-3Z" />
        </BaseIcon>
    );
}

export function ChartDonut({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3a9 9 0 0 1 7 14.5" />
        </BaseIcon>
    );
}

export function ChartGantt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="M7 7h6M9 11h7M7 15h5" />
        </BaseIcon>
    );
}

export function Histogram({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="M7 18v-3M10 18v-7M13 18V8M16 18v-5M19 18v-9" />
        </BaseIcon>
    );
}

export function Analytics({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="m6 16 3-4 3 2 5-7" /><circle cx="9" cy="12" r="1" /><circle cx="17" cy="7" r="1" />
        </BaseIcon>
    );
}

export function Dashboard3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="13" r="8" /><path d="M12 13l4-3M4 13h2M18 13h2M12 5v2" />
        </BaseIcon>
    );
}

export function Kpi({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M8 14l2.5-3 2 1.5L16 9" /><path d="M16 9v2.5M16 9h-2.5" />
        </BaseIcon>
    );
}

export function Funnel2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 5h18l-7 8v6l-4-2v-4L3 5Z" />
        </BaseIcon>
    );
}

export function DataTable({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11M15 9v11M3 14.5h18" />
        </BaseIcon>
    );
}

export function PivotTable({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 4v16" /><path d="m13 13 2 2 2-2M15 12v4" />
        </BaseIcon>
    );
}

export function Spreadsheet2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M3 14.5h18M8 4v16M13.5 4v16" />
        </BaseIcon>
    );
}

export function Report2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 3h8l4 4v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z" /><path d="M14 3v4h4" /><path d="M9 17v-3M12 17v-5M15 17v-2" />
        </BaseIcon>
    );
}

export function Insight({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 1 4 10.5c-.6.5-1 1.3-1 2.5H9c0-1.2-.4-2-1-2.5A6 6 0 0 1 12 3Z" />
        </BaseIcon>
    );
}

export function Trend2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="m6 16 4-4 3 2 5-6M14 8h4v4" />
        </BaseIcon>
    );
}

export function Forecast({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="m6 15 3-3 3 2" /><path d="M15 11l5-4" stroke-dasharray="2 2" /><path d="M12 14h.01M15 12h.01M18 10h.01" />
        </BaseIcon>
    );
}

export function Segment({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" /><path d="M12 12 12 3M12 12l7.8 4.5M12 12 4.2 16.5" />
        </BaseIcon>
    );
}

export function Dimension({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 7.5 12 3l9 4.5v9L12 21l-9-4.5v-9Z" /><path d="m3 7.5 9 4.5 9-4.5M12 12v9" />
        </BaseIcon>
    );
}

export function Measure({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8h18v8H3z" /><path d="M7 8v3M11 8v4M15 8v3M19 8v4" />
        </BaseIcon>
    );
}

export function Aggregate({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M5 5h12l-5 7 5 7H5l5-7-5-7Z" />
        </BaseIcon>
    );
}

export function SortAsc({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 4v16M7 4 4 7M7 4l3 3" /><path d="M12 6h9M12 11h6M12 16h3" />
        </BaseIcon>
    );
}

export function SortDesc({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 4v16M7 20l-3-3M7 20l3-3" /><path d="M12 6h3M12 11h6M12 16h9" />
        </BaseIcon>
    );
}

export function GroupBy({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 5h16M4 9h16" /><rect x="6" y="13" width="12" height="7" rx="1.5" /><path d="M9 13v7M15 13v7" />
        </BaseIcon>
    );
}

export function RealtimeData({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 12h3l2-5 3 10 2-6 2 2h6" /><circle cx="20" cy="6" r="1.5" />
        </BaseIcon>
    );
}

export function BatchJob({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="7" height="7" rx="1" /><rect x="14" y="4" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
        </BaseIcon>
    );
}

export function StreamData({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 8c3 0 3 2 6 2s3-2 6-2 3 2 6 2M3 14c3 0 3 2 6 2s3-2 6-2 3 2 6 2" />
        </BaseIcon>
    );
}

export function DataPipeline({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="5" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><rect x="14" y="9" width="7" height="6" rx="1.5" /><path d="M7 6h4a3 3 0 0 1 3 3M7 18h4a3 3 0 0 0 3-3" />
        </BaseIcon>
    );
}

export function DataLake({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 14c2-2 3 0 5 0s3-2 5 0 3 0 5-1" /><path d="M4 18c2-2 3 0 5 0s3-2 5 0 3 0 5-1" /><ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v4M19 6v4" />
        </BaseIcon>
    );
}

export function DataWarehouse({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 9 12 4l9 5v11H3V9Z" /><path d="M3 9h18M8 20v-6h8v6" />
        </BaseIcon>
    );
}

export function EtlIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="9" width="5" height="6" rx="1" /><rect x="16" y="9" width="5" height="6" rx="1" /><path d="M8 12h8M13 9l3 3-3 3" />
        </BaseIcon>
    );
}

export function SchemaIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="9" y="3" width="6" height="5" rx="1" /><rect x="3" y="16" width="6" height="5" rx="1" /><rect x="15" y="16" width="6" height="5" rx="1" /><path d="M12 8v4M12 12H6v4M12 12h6v4" />
        </BaseIcon>
    );
}

export function PrimaryKey({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="8" cy="8" r="3.5" /><path d="m10.5 10.5 8 8M16 16l2-2M18.5 13.5 21 16" /><path d="M8 5.5v.01" />
        </BaseIcon>
    );
}

export function ForeignKey({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="8" cy="16" r="3" /><path d="m10 14 9-9M17 5h2v2" />
        </BaseIcon>
    );
}

export function IndexIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="3" width="16" height="18" rx="2" /><path d="M8 7h8M8 11h8M8 15h5M4 7h.01M4 11h.01M4 15h.01" />
        </BaseIcon>
    );
}

export function QueryIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v8c0 1.4 3 2.5 7 2.5M5 10c0 1.4 3 2.5 7 2.5" /><circle cx="17" cy="17" r="3" /><path d="m19 19 2 2" />
        </BaseIcon>
    );
}

export function JoinTables({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="9" cy="12" r="6" /><circle cx="15" cy="12" r="6" />
        </BaseIcon>
    );
}

export function NormalizeData({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 18h16M4 18 4 6M8 18v-4M12 18V8M16 18v-7M20 18V5" /><path d="M4 11h16" stroke-dasharray="2 2" />
        </BaseIcon>
    );
}

export function DenormalizeData({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="8" height="16" rx="1.5" /><path d="M13 8h8M13 12h8M13 16h8" />
        </BaseIcon>
    );
}

export function DataMigration({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="6" height="12" rx="1.5" /><rect x="15" y="6" width="6" height="12" rx="1.5" /><path d="M9 12h6M12 9l3 3-3 3" />
        </BaseIcon>
    );
}

export function DataExport2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="9" cy="6" rx="6" ry="2.3" /><path d="M3 6v8c0 1.3 2.7 2.3 6 2.3M3 10c0 1.3 2.7 2.3 6 2.3" /><path d="M13 14h8M18 11l3 3-3 3" />
        </BaseIcon>
    );
}

export function DataImport2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="15" cy="6" rx="6" ry="2.3" /><path d="M9 6v8c0 1.3 2.7 2.3 6 2.3M9 10c0 1.3 2.7 2.3 6 2.3" /><path d="M3 14h8M6 11l-3 3 3 3" />
        </BaseIcon>
    );
}

export function DataSync2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v6M19 6v6" /><path d="M7 16a3 3 0 0 1 5-1.2M17 18a3 3 0 0 1-5 1.2M11.5 13.5 12 14.8l1.3-.4M12.5 20l-.5-1.3-1.3.4" />
        </BaseIcon>
    );
}

export function DataClean({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v8c0 1.3 2.5 2.3 6 2.5" /><path d="m16 14 5 5M21 14l-5 5" />
        </BaseIcon>
    );
}

export function Anonymize({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="9" r="4" /><path d="M5 20a7 7 0 0 1 14 0" /><path d="M9 9h6" stroke-dasharray="1.5 1.5" />
        </BaseIcon>
    );
}

export function DataMask({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 9c2-1 5-1 5 1.5S6 13 4 12M21 9c-2-1-5-1-5 1.5s2 2.5 4 1.5" /><path d="M8 11h8M3 9v3a8 8 0 0 0 18 0V9" />
        </BaseIcon>
    );
}

export function RowIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="9" width="18" height="6" rx="1.5" />
        </BaseIcon>
    );
}

export function ColumnIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="9" y="3" width="6" height="18" rx="1.5" />
        </BaseIcon>
    );
}

export function CellIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9h18M3 15h18M9 4v16M15 4v16" /><rect x="9" y="9" width="6" height="6" />
        </BaseIcon>
    );
}

export function DataPoint({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3" /><path d="M12 3v4M12 17v4M3 12h4M17 12h4" />
        </BaseIcon>
    );
}

export function Outlier({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M7 16h.01" /><path d="M10 13h.01" /><path d="M12 15h.01" /><path d="M9 17h.01" /><circle cx="17" cy="7" r="2" />
        </BaseIcon>
    );
}

export function Correlation({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="m5 17 13-9" stroke-dasharray="2 2" /><path d="M7 15h.01" /><path d="M10 12h.01" /><path d="M13 11h.01" /><path d="M16 8h.01" />
        </BaseIcon>
    );
}

export function Regression({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 4v16h16" /><path d="M6 16h.01" /><path d="M9 15h.01" /><path d="M11 12h.01" /><path d="M14 11h.01" /><path d="M17 8h.01" /><path d="M5 17 19 7" />
        </BaseIcon>
    );
}

export function Classification({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="8" cy="9" r="2" /><circle cx="8" cy="15" r="2" /><circle cx="16" cy="9" r="2" /><path d="M12 6v12" stroke-dasharray="2 2" /><path d="m14 14 2 2 3-4" />
        </BaseIcon>
    );
}


export function Filter3({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 6h18M6 12h12M10 18h4" />
        </BaseIcon>
    );
}
