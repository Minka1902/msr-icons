import { BaseIcon } from './BaseIcon';

// Time / Calendar / Scheduling
export function CalendarDays({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="4" y="5" width="16" height="16" rx="2" /><path data-part="calendar" d="M4 9h16M8 3v4M16 3v4" /><path data-part="days" d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01M16 17h.01" />
        </BaseIcon>
    );
}

export function CalendarCheck2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="4" y="5" width="16" height="16" rx="2" /><path data-part="calendar" d="M4 9h16M8 3v4M16 3v4" /><path data-part="check" d="m9.6 15 11.5 17.4 14.4 12.6" />
        </BaseIcon>
    );
}

export function CalendarX2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="4" y="5" width="16" height="16" rx="2" /><path data-part="calendar" d="M4 9h16M8 3v4M16 3v4" /><path data-part="cross" d="M9.8 12.8 14.2 17.2M14.2 12.8 9.8 17.2" />
        </BaseIcon>
    );
}

export function CalendarPlus2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="4" y="5" width="16" height="16" rx="2" /><path data-part="calendar" d="M4 9h16M8 3v4M16 3v4" /><path data-part="plus" d="M12 12.6v4.8M9.6 15h4.8" />
        </BaseIcon>
    );
}

export function CalendarMinus2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="4" y="5" width="16" height="16" rx="2" /><path data-part="calendar" d="M4 9h16M8 3v4M16 3v4" /><path data-part="minus" d="M9 15h6" />
        </BaseIcon>
    );
}

export function CalendarClock({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="4" y="5" width="16" height="16" rx="2" /><path data-part="calendar" d="M4 9h16M8 3v4M16 3v4" /><circle data-part="clock" cx="16" cy="16" r="4" /><path data-part="clock" d="M16 14.5V16l1 .8" />
        </BaseIcon>
    );
}

export function CalendarHeart({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="4" y="5" width="16" height="16" rx="2" /><path data-part="calendar" d="M4 9h16M8 3v4M16 3v4" /><path data-part="heart" d="M12 18s-2.5-1.5-2.5-3.2a1.3 1.3 0 0 1 2.5-.6 1.3 1.3 0 0 1 2.5.6c0 1.7-2.5 3.2-2.5 3.2Z" />
        </BaseIcon>
    );
}

export function CalendarRange({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="4" y="5" width="16" height="16" rx="2" /><path data-part="calendar" d="M4 9h16M8 3v4M16 3v4" /><path data-part="range" d="M7 13h4M13 17h4" />
        </BaseIcon>
    );
}

export function CalendarEvent({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="4" y="5" width="16" height="16" rx="2" /><path data-part="calendar" d="M4 9h16M8 3v4M16 3v4" /><rect data-part="event" x="8" y="13" width="8" height="5" rx="1" />
        </BaseIcon>
    );
}

export function Clock2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="clock" cx="12" cy="12" r="9" /><path data-part="hands" d="M12 7v5l3.5 2" />
        </BaseIcon>
    );
}

export function ClockAlert({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="clock" cx="11" cy="12" r="8" /><path data-part="hands" d="M11 8v4l3 1.5" /><path data-part="alert" d="M19 8v4M19 16h.01" />
        </BaseIcon>
    );
}

export function Stopwatch2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="dial" cx="12" cy="14" r="7" /><path data-part="hands" d="M12 14v-3M9 3h6M12 3v4M18 9l1.5-1.5M5 9 3.5 7.5" />
        </BaseIcon>
    );
}

export function Timer2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="dial" cx="12" cy="14" r="7" /><path data-part="hands" d="M12 14V9M9 2h6M19 9l-1.5 1.5" />
        </BaseIcon>
    );
}

export function Hourglass2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="hourglass" d="M6 3h12M6 21h12M7 3c0 5 4 6 5 9 1-3 5-4 5-9M7 21c0-5 4-6 5-9 1 3 5 4 5 9" />
        </BaseIcon>
    );
}

export function Alarm2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="clock" cx="12" cy="13" r="7" /><path data-part="hands" d="M12 13V9M5 3 2.5 5.5M19 3l2.5 2.5M5 19l-2 2M19 19l2 2" />
        </BaseIcon>
    );
}

export function AlarmPlus({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="clock" cx="12" cy="13" r="7" /><path data-part="bells" d="M5 3 2.5 5.5M19 3l2.5 2.5" /><path data-part="plus" d="M12 10.6v4.8M9.6 13h4.8" />
        </BaseIcon>
    );
}

export function Schedule({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <rect data-part="calendar" x="3" y="5" width="18" height="16" rx="2" /><path data-part="calendar" d="M3 9h18M8 3v4M16 3v4" /><path data-part="lines" d="M7 13h4M7 17h7" />
        </BaseIcon>
    );
}

export function Deadline({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="clock" cx="12" cy="13" r="7" /><path data-part="hands" d="M12 13V9M12 4V2M9 4h6M18 19l2 2" /><path data-part="hands" d="m16 11 2-2" />
        </BaseIcon>
    );
}

export function Reminder({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="bell" d="M6 9a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6Z" /><path data-part="bell" d="M10 19a2 2 0 0 0 4 0" /><circle data-part="dot" cx="18" cy="5" r="2.5" />
        </BaseIcon>
    );
}

export function Duration({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="start" cx="6" cy="12" r="3" /><circle data-part="end" cx="18" cy="12" r="3" /><path data-part="line" d="M9 12h6" stroke-dasharray="2 2" /><path data-part="line" d="M6 12V9M18 12V9" />
        </BaseIcon>
    );
}

export function Countdown({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="clock" cx="12" cy="12" r="9" /><path data-part="hands" d="M12 12V7" /><path data-part="progress" d="M12 3a9 9 0 0 1 6.4 15.4" stroke-dasharray="3 3" />
        </BaseIcon>
    );
}

export function History2({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <path data-part="arrow" d="M3 12a9 9 0 1 0 3-6.7L3 8" /><path data-part="hands" d="M3 4v4h4M12 8v4l3 2" />
        </BaseIcon>
    );
}

export function TimeMachine({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="clock" cx="12" cy="12" r="9" /><path data-part="hands" d="M12 7v5l4 2" /><path data-part="progress" d="M12 3a9 9 0 0 1 0 18" stroke-dasharray="3 3" /><path data-part="arrow" d="m7 5-1 3 3 1" />
        </BaseIcon>
    );
}

export function Snooze({ fillColor = '#000', isColored = true, ...rest }) {
    return (
        <BaseIcon fillColor={fillColor} isColored={isColored} {...rest}>
            <circle data-part="clock" cx="12" cy="14" r="7" /><path data-part="bells" d="M9 3h6M12 14v-3" /><path data-part="zzz" d="M10 11h3l-3 4h3" />
        </BaseIcon>
    );
}
