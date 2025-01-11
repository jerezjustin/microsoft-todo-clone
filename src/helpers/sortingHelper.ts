import { Task } from "../types";

export const sortTasks = (tasks: Task[], sortBy: string, direction: string) => {
    switch (sortBy) {
        case "importance":
            return tasks.sort((a, b) => sortByImportance(a, b, direction));
        case "dueDate":
            return tasks.sort((a, b) => sortByDueDate(a, b, direction));
        case "createdAt":
            return tasks.sort((a, b) => sortByCreatedAt(a, b, direction));
        case "alphabetically":
            return tasks.sort((a, b) => sortAlphabetically(a, b, direction));
        default:
            return tasks.sort((a, b) => sortByCreatedAt(a, b, direction)); // Default fallback
    }
};

// Sorting by importance
const sortByImportance = (a: Task, b: Task, direction: string) => {
    if (a.important === b.important) return 0;
    return direction === "asc" ? (a.important ? -1 : 1) : a.important ? 1 : -1;
};

// Sorting by dueDate
const sortByDueDate = (a: Task, b: Task, direction: string) => {
    const aDate = a.dueDate ? new Date(a.dueDate).getTime() : 0;
    const bDate = b.dueDate ? new Date(b.dueDate).getTime() : 0;
    return direction === "asc" ? aDate - bDate : bDate - aDate;
};

// Sorting by createdAt
const sortByCreatedAt = (a: Task, b: Task, direction: string) => {
    const aDate = new Date(a.createdAt!).getTime();
    const bDate = new Date(b.createdAt!).getTime();
    return direction === "asc" ? aDate - bDate : bDate - aDate;
};

// Sorting alphabetically by name
const sortAlphabetically = (a: Task, b: Task, direction: string) => {
    return direction === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
};
