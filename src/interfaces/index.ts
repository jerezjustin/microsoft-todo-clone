import { List, SortBy, sortDir, Task } from "../types";

export interface ListsState {
    loading: boolean;
    lists: List[];
}

export interface TasksState {
    loading: boolean;
    tasksByList: Record<string, Task[]>;
    sortBy: SortBy;
    direction: sortDir;
}

export interface TaskActionButton {
    value: string;
}
