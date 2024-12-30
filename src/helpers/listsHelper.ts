import { List } from "../types";

export const getRandomAlphanumericString = (length: number): string => {
    return Array.from({ length }, () => Math.random().toString(36)[2]).join("");
};

export const generateUniqueName = (
    baseName: string = "Untitled List",
    lists: List[]
): string => {
    let uniqueName = baseName;

    let count = 0;
    while (lists.some((list) => list.name === uniqueName)) {
        count++;
        uniqueName = `${baseName} (${count})`;
    }

    return uniqueName;
};
