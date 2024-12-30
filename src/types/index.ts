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
    dueDate: string;
    important: boolean;
    completed: boolean;
};

export type List = {
    id: string;
    name: string;
    icon: string;
    tasks: Task[];
    type: "default" | "dynamic";
};
