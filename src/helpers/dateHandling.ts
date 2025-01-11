export const getShortTime = (date: Date) => {
    return date.toLocaleTimeString(undefined, {
        hour: "2-digit",
        minute: "2-digit",
    });
};

export const getWeekDayName = (date: Date) => {
    return date.toLocaleDateString(undefined, { weekday: "short" });
};

export const getShortDayAndTime = (date: Date) => {
    const weekDay = getWeekDayName(date);
    const time = getShortTime(date);
    return `${weekDay}, ${time}`;
};

export const resolveDateName = (date: Date, showTime: boolean = false) => {
    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);

    const time = showTime ? `${getShortTime(date)},` : "";

    if (date.toDateString() === today.toDateString()) {
        return `${time} Today`;
    } else if (date.toDateString() === tomorrow.toDateString()) {
        return `${time} Tomorrow`;
    } else {
        const shortWeekDayName = getWeekDayName(date);
        const month = date.toLocaleString(undefined, { month: "long" });
        const dayNumber = date.getDate();
        return `${time} ${shortWeekDayName}, ${month} ${dayNumber}`;
    }
};

export const resolveCreateOn = (date: Date | string) => {
    if (date instanceof String) {
        date = new Date(date);
    }

    const stringRepresentation = resolveDateName(date as Date);

    if (stringRepresentation.trim() === "Today") {
        return "Created " + stringRepresentation;
    }

    return "Crated on " + stringRepresentation;
};
