import { BaseIcon } from './BaseIcon';

// Version Control / Git
export function GitBranch({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <line x1="6" y1="5" x2="6" y2="19" />
            <circle cx="6" cy="5" r="2" />
            <circle cx="6" cy="19" r="2" />
            <circle cx="18" cy="7" r="2" />
            <path d="M18 9v2a4 4 0 0 1-4 4H6" />
        </BaseIcon>
    );
}

export function GitCommit({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="3" />
            <line x1="3" y1="12" x2="9" y2="12" />
            <line x1="15" y1="12" x2="21" y2="12" />
        </BaseIcon>
    );
}

export function GitMerge({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="12" r="2" />
            <line x1="6" y1="8" x2="6" y2="16" />
            <path d="M6 8a8 8 0 0 0 8 4h2" />
        </BaseIcon>
    );
}

export function GitPullRequest({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="18" r="2" />
            <line x1="6" y1="8" x2="6" y2="16" />
            <path d="M18 16V9a3 3 0 0 0-3-3h-3" />
            <path d="M14.5 3.5 11.5 6l3 2.5" />
        </BaseIcon>
    );
}

export function GitPullRequestClosed({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="18" r="2" />
            <line x1="6" y1="8" x2="6" y2="16" />
            <line x1="18" y1="9" x2="18" y2="16" />
            <path d="M15 4l6 4M21 4l-6 4" />
        </BaseIcon>
    );
}

export function GitPullRequestDraft({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="18" r="2" />
            <line x1="6" y1="8" x2="6" y2="16" />
            <path d="M18 6v0M18 10v0M18 14v2" />
        </BaseIcon>
    );
}

export function GitCompare({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="2" />
            <circle cx="18" cy="18" r="2" />
            <path d="M6 8v6a4 4 0 0 0 4 4h6" />
            <path d="M18 16v-6a4 4 0 0 0-4-4H8" />
            <path d="M10.5 3.5 8 6l2.5 2.5" />
            <path d="M13.5 15.5 16 18l-2.5 2.5" />
        </BaseIcon>
    );
}

export function GitFork({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="5" r="2" />
            <circle cx="18" cy="5" r="2" />
            <circle cx="12" cy="19" r="2" />
            <path d="M6 7v3a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7" />
            <line x1="12" y1="13" x2="12" y2="17" />
        </BaseIcon>
    );
}

export function GitGraph({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="12" r="2" />
            <line x1="6" y1="8" x2="6" y2="16" />
            <path d="M6 12a6 6 0 0 1 6-6h0a4 4 0 0 1 4 4v0" />
        </BaseIcon>
    );
}

export function GitTag({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M3 11.5 11.5 3H20a1 1 0 0 1 1 1v8.5L12.5 21a1.5 1.5 0 0 1-2.1 0L3 13.6a1.5 1.5 0 0 1 0-2.1Z" />
            <path d="M16.5 7.5h.01" />
        </BaseIcon>
    );
}

export function GitStash({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="3" y="4" width="18" height="5" rx="1" />
            <path d="M5 9v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
            <line x1="9" y1="13" x2="15" y2="13" />
        </BaseIcon>
    );
}

export function CodeBranch({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="7" cy="6" r="2" />
            <circle cx="7" cy="18" r="2" />
            <circle cx="17" cy="6" r="2" />
            <line x1="7" y1="8" x2="7" y2="16" />
            <path d="M17 8v2a5 5 0 0 1-5 5H7" />
        </BaseIcon>
    );
}

export function Repository({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 3h11a2 2 0 0 1 2 2v15H8a2 2 0 0 1-2-2V3Z" />
            <path d="M6 17a2 2 0 0 0-2 2v0a2 2 0 0 0 2 2h13" />
            <line x1="10" y1="8" x2="15" y2="8" />
        </BaseIcon>
    );
}

export function RepoForked({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="5" r="2" />
            <circle cx="18" cy="5" r="2" />
            <circle cx="12" cy="19" r="2" />
            <path d="M6 7v2a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7" />
            <line x1="12" y1="12" x2="12" y2="17" />
        </BaseIcon>
    );
}

export function DiffAdded({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="12" y1="8" x2="12" y2="16" />
            <line x1="8" y1="12" x2="16" y2="12" />
        </BaseIcon>
    );
}

export function DiffRemoved({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <line x1="8" y1="12" x2="16" y2="12" />
        </BaseIcon>
    );
}

export function DiffModified({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <circle cx="12" cy="12" r="3" />
        </BaseIcon>
    );
}

export function DiffRenamed({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect x="4" y="4" width="16" height="16" rx="2" />
            <path d="M8 12h7M12 9l3 3-3 3" />
        </BaseIcon>
    );
}

export function MergeConflict({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="6" r="2" />
            <circle cx="6" cy="18" r="2" />
            <line x1="6" y1="8" x2="6" y2="16" />
            <path d="M6 8a8 8 0 0 0 6 4" />
            <path d="M17 6v5M17 14v.01" />
        </BaseIcon>
    );
}

export function Rebase({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="6" cy="18" r="2" />
            <circle cx="18" cy="6" r="2" />
            <circle cx="18" cy="14" r="2" />
            <line x1="18" y1="8" x2="18" y2="12" />
            <path d="M6 16V8a6 6 0 0 1 6-6h4" />
            <path d="M13.5 2.5 16 5l-2.5 2.5" />
        </BaseIcon>
    );
}

export function CherryPick({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <line x1="6" y1="4" x2="6" y2="20" />
            <circle cx="6" cy="9" r="2" />
            <circle cx="6" cy="17" r="2" />
            <circle cx="17" cy="13" r="2.5" />
            <path d="M17 10.5V5a2 2 0 0 0-2-2" />
            <path d="M11 3l4 0" />
        </BaseIcon>
    );
}

export function Blame({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle cx="12" cy="12" r="9" />
            <polyline points="12 7 12 12 15 14" />
        </BaseIcon>
    );
}

export function Changelog({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path d="M6 3h9l4 4v14H6Z" />
            <path d="M15 3v4h4" />
            <line x1="9" y1="12" x2="15" y2="12" />
            <line x1="9" y1="16" x2="15" y2="16" />
        </BaseIcon>
    );
}
