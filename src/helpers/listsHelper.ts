import { List, Task } from "../types";

export const getRandomAlphanumericString = (length: number = 32): string => {
    return Array.from({ length }, () => Math.random().toString(36)[2]).join("");
};

export const generateUniqueName = (
    baseName: string = "Untitled List",
    existingItems: (List | Task)[]
): string => {
    let uniqueName = baseName;

    let count = 0;
    while (existingItems.some((list) => list.name === uniqueName)) {
        count++;
        uniqueName = `${baseName} (${count})`;
    }

    return uniqueName;
};
