import { List } from "../types";
import { IconName } from "../enums";

export const DEFAULT_TASK_LIST = "myday";

export const defaultLists: List[] = [
    {
        id: "myday",
        icon: IconName.Sun,
        name: "My Day",
        tasks: [],
        type: "default",
    },
    {
        id: "important",
        icon: IconName.Star,
        name: "Important",
        tasks: [],
        type: "default",
    },
    {
        id: "queued",
        icon: IconName.Stack,
        name: "Queued",
        tasks: [],
        type: "default",
    },
    {
        id: "completed",
        icon: IconName.CompletedCheckMarkCircle,
        name: "Completed",
        tasks: [],
        type: "default",
    },
    {
        id: "tasks",
        icon: IconName.Home,
        name: "Tasks",
        tasks: [],
        type: "default",
    },
];
