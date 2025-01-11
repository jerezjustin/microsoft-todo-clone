import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { Task } from "../types";
import {
    generateUniqueName,
    getRandomAlphanumericString,
} from "../helpers/listsHelper";
import { saveTaskInList } from "../store/tasks/taskActions";

export const useTaskInput = (listId: string | undefined, tasks: Task[]) => {
    const dispatch = useDispatch<AppDispatch>();

    const [taskName, setTaskName] = useState<string>("");
    const [dueDate, setDueDate] = useState<Date | null>(null);
    const [reminderDate, setReminderDate] = useState<Date | null>(null);
    const [repeatInterval, setRepeatInterval] = useState<string | null>(null);

    const cleanInput = () => {
        setTaskName("");
        setDueDate(null);
        setReminderDate(null);
        setRepeatInterval(null);
    };

    const resolveStorageList = () => {
        switch (listId) {
            case "completed":
            case "important":
                return "tasks";
            default:
                return listId!;
        }
    };

    const handleSubmit = () => {
        if (!taskName.trim() || !listId) {
            return;
        }

        const uniqueTaskName = generateUniqueName(taskName.trim(), tasks);
        const storeInList = resolveStorageList();

        const task = {
            id: getRandomAlphanumericString(),
            name: uniqueTaskName,
            dueDate: dueDate?.toISOString(),
            reminderDate: reminderDate?.toISOString(),
            repeatInterval: repeatInterval,
            important: listId === "important",
            completed: listId === "completed",
            listId: storeInList,
            createdAt: new Date().toISOString(),
        };

        dispatch(saveTaskInList(storeInList, task));
        cleanInput();
    };

    return {
        taskName,
        setTaskName,
        dueDate,
        setDueDate,
        reminderDate,
        setReminderDate,
        repeatInterval,
        setRepeatInterval,
        handleSubmit,
    };
};
