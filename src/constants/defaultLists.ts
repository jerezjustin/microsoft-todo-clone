import { List } from "../types";
import { IconName } from "../enums";

export const DEFAULT_TASK_LIST = "myday";

export const defaultLists: List[] = [
    {
        id: "tasks",
        icon: IconName.Home,
        name: "Tasks",
        type: "default",
    },
    {
        id: "important",
        icon: IconName.Star,
        name: "Important",
        type: "default",
    },
    {
        id: "completed",
        icon: IconName.CompletedCheckMarkCircle,
        name: "Completed",
        type: "default",
    },
];
