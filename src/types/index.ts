import { ReactElement, ReactNode } from "react";

export type Route = {
    name: string;
    path: string;
    element: ReactNode | ReactElement | (() => void);
};

export type IconProps = {
    size?: number;
    color?: string;
    className?: string;
};

export type Task = {
    id: string;
    name: string;
    important: boolean;
    completed: boolean;
    listId: string;
    dueDate?: string | null;
    reminderDate?: string | null;
    repeatInterval?: string | null;
    createdAt?: string | null;
};

export type List = {
    id: string;
    name: string;
    icon: string;
    type: "default" | "dynamic";
};

export type TaskByList = Record<string, Task[]>;

export type SortBy = "name" | "dueDate" | "important" | "createAt";

export type sortDir = "asc" | "desc";
