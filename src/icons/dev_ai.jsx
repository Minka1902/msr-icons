import { BaseIcon } from './BaseIcon';

// AI / Agent / Diagrams
export function AiSparkles({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3c.5 3.5 1.5 4.5 5 5-3.5.5-4.5 1.5-5 5-.5-3.5-1.5-4.5-5-5 3.5-.5 4.5-1.5 5-5Z" /><path d="M18 15c.3 1.5.5 1.7 2 2-1.5.3-1.7.5-2 2-.3-1.5-.5-1.7-2-2 1.5-.3 1.7-.5 2-2Z" />
        </BaseIcon>
    );
}

export function SparklesAlt({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M9 3c.4 3 1 3.6 4 4-3 .4-3.6 1-4 4-.4-3-1-3.6-4-4 3-.4 3.6-1 4-4Z" /><path d="M17 12c.3 2 .6 2.3 2.5 2.6-1.9.3-2.2.6-2.5 2.5-.3-1.9-.6-2.2-2.5-2.5 1.9-.3 2.2-.6 2.5-2.6Z" />
        </BaseIcon>
    );
}

export function RobotFace({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="7" width="16" height="12" rx="3" /><path d="M12 4v3M9 12h.01M15 12h.01M9 16h6M2 11v3M22 11v3" /><circle cx="12" cy="4" r="1.2" />
        </BaseIcon>
    );
}

export function ChatbotIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 4v4M9 13h.01M15 13h.01M9.5 16h5" /><circle cx="12" cy="4" r="1.5" /><path d="M2 12v3M22 12v3" />
        </BaseIcon>
    );
}

export function PromptIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m7 9 2.5 3L7 15M12 15h5" />
        </BaseIcon>
    );
}

export function TokenCount({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="8" cy="8" r="4" /><circle cx="16" cy="8" r="4" /><circle cx="12" cy="16" r="4" /><path d="M8 8h.01M16 8h.01M12 16h.01" />
        </BaseIcon>
    );
}

export function ContextWindow({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 8h18" /><path d="M6 12h8M6 15h6M17 11v6" stroke-dasharray="2 2" />
        </BaseIcon>
    );
}

export function EmbeddingIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="M12 12h.01" /><path d="M8 9h.01" /><path d="M16 9h.01" /><path d="M8 15h.01" /><path d="M16 15h.01" /><path d="M12 12 8 9M12 12l4-3M12 12-4 3M12 12l4 3" />
        </BaseIcon>
    );
}

export function VectorDb({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <ellipse cx="12" cy="6" rx="7" ry="2.5" /><path d="M5 6v12c0 1.4 3 2.5 7 2.5s7-1.1 7-2.5V6" /><path d="m9 13 1.5 1.5L9 16M13 16h2" />
        </BaseIcon>
    );
}

export function NeuralNet({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="5" cy="6" r="1.8" /><circle cx="5" cy="18" r="1.8" /><circle cx="12" cy="8" r="1.8" /><circle cx="12" cy="16" r="1.8" /><circle cx="19" cy="12" r="1.8" /><path d="M6.5 7 10.5 8M6.5 17l4-1M6.5 7l4 8M6.5 17 10.5 8M13.5 9l4 2M13.5 15l4-2" />
        </BaseIcon>
    );
}

export function ModelIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" /><path d="m4 7.5 8 4.5 8-4.5M12 12v9" /><circle cx="12" cy="7.5" r="1.5" />
        </BaseIcon>
    );
}

export function FineTune({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M4 7h6M14 7h6M4 17h10M18 17h2" /><circle cx="12" cy="7" r="2" /><circle cx="16" cy="17" r="2" />
        </BaseIcon>
    );
}

export function InferenceIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="6" width="6" height="12" rx="1.5" /><path d="M9 12h6M12 9l3 3-3 3" /><path d="M17 8a4 4 0 0 1 0 8" />
        </BaseIcon>
    );
}

export function GpuCluster({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="8" height="6" rx="1" /><rect x="13" y="4" width="8" height="6" rx="1" /><rect x="8" y="14" width="8" height="6" rx="1" /><circle cx="5.5" cy="7" r="0.5" /><circle cx="15.5" cy="7" r="0.5" /><path d="M7 10v2h5M17 10v2h-5" />
        </BaseIcon>
    );
}

export function LlmChip({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="7" y="7" width="10" height="10" rx="1.5" /><path d="M10 3v4M14 3v4M10 17v4M14 17v4M3 10h4M3 14h4M17 10h4M17 14h4" /><path d="M12 10c.3 1.5.6 1.8 2 2-1.4.2-1.7.5-2 2-.3-1.5-.6-1.8-2-2 1.4-.2 1.7-.5 2-2Z" />
        </BaseIcon>
    );
}

export function AgentIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="8" r="4" /><path d="M5 21a7 7 0 0 1 14 0" /><circle cx="12" cy="8" r="1.5" /><path d="M12 4V8" />
        </BaseIcon>
    );
}

export function WorkflowIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="6" height="5" rx="1" /><rect x="15" y="4" width="6" height="5" rx="1" /><rect x="9" y="15" width="6" height="5" rx="1" /><path d="M6 9v2h12V9M12 11v4" />
        </BaseIcon>
    );
}

export function StateMachine({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="7" r="3" /><circle cx="18" cy="7" r="3" /><circle cx="12" cy="18" r="3" /><path d="M9 7h6M8 9.5l3 6M16 9.5l-3 6" />
        </BaseIcon>
    );
}

export function DecisionTree({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="9" y="3" width="6" height="4" rx="1" /><rect x="3" y="16" width="6" height="4" rx="1" /><rect x="15" y="16" width="6" height="4" rx="1" /><path d="M12 7v3M12 10H6v6M12 10h6v6" />
        </BaseIcon>
    );
}

export function FlowChart({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="9" y="3" width="6" height="4" rx="1" /><path d="M9 14 12 11l3 3-3 3-3-3Z" /><rect x="9" y="19" width="6" height="0.01" /><path d="M12 7v4M12 17v2M15 14h4v5" /><rect x="16" y="17" width="6" height="4" rx="1" />
        </BaseIcon>
    );
}

export function Sitemap2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="9" y="3" width="6" height="4" rx="1" /><rect x="3" y="16" width="5" height="4" rx="1" /><rect x="9.5" y="16" width="5" height="4" rx="1" /><rect x="16" y="16" width="5" height="4" rx="1" /><path d="M12 7v3M5.5 16v-2h13v2M12 14v2" />
        </BaseIcon>
    );
}

export function MindMap({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3" /><circle cx="4" cy="5" r="2" /><circle cx="20" cy="5" r="2" /><circle cx="4" cy="19" r="2" /><circle cx="20" cy="19" r="2" /><path d="m6 6 4 4M18 6l-4 4M6 18l4-4M18 18l-4-4" />
        </BaseIcon>
    );
}

export function OrgChart({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="9" y="3" width="6" height="4" rx="1" /><rect x="2" y="16" width="6" height="4" rx="1" /><rect x="16" y="16" width="6" height="4" rx="1" /><path d="M12 7v4M5 16v-2h14v2" />
        </BaseIcon>
    );
}

export function NodeGraph({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="2.5" /><circle cx="18" cy="8" r="2.5" /><circle cx="8" cy="18" r="2.5" /><circle cx="17" cy="17" r="2" /><path d="m8 7.5 8 1M7.5 8l1 7.5M10 17.5l5-.5M15 9l1 6" />
        </BaseIcon>
    );
}

export function DiagramIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="7" height="5" rx="1" /><rect x="14" y="4" width="7" height="5" rx="1" /><rect x="8.5" y="15" width="7" height="5" rx="1" /><path d="M6.5 9v3h11V9M12 12v3" />
        </BaseIcon>
    );
}

export function BlueprintIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 9h6v11M9 9V4M15 4v7h6M15 11v9" stroke-dasharray="2 2" />
        </BaseIcon>
    );
}

export function WireframeIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="16" rx="1.5" /><path d="M3 8h18M8 8v12M3 14h5M14 11h7M14 16h7" />
        </BaseIcon>
    );
}

export function MockupIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="6" y="2" width="12" height="20" rx="2" /><path d="M6 6h12M6 18h12M10 4h4" /><rect x="9" y="9" width="6" height="5" rx="1" />
        </BaseIcon>
    );
}

export function PrototypeIcon({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="5" width="7" height="6" rx="1" /><rect x="14" y="13" width="7" height="6" rx="1" /><path d="M10 8h2a2 2 0 0 1 2 2v3M13 12l1 1 1-1" />
        </BaseIcon>
    );
}

export function ComponentTree({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M12 3 9 6l3 3 3-3-3-3Z" /><path d="M5 14l-2 3 2 3 2-3-2-3ZM19 14l-2 3 2 3 2-3-2-3Z" /><path d="M12 9v3M12 12H5v2M12 12h7v2" />
        </BaseIcon>
    );
}

