import { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Task } from "../types";
import { updateTask } from "../store/tasks/taskActions";
import { AppDispatch } from "../store";

export const useTaskDetails = (
    selectedTask: Task | null,
    isVisible: boolean,
    loading: boolean
) => {
    const dispatch = useDispatch<AppDispatch>();

    const [taskName, setTaskName] = useState("");
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [taskImportant, setTaskImportant] = useState(false);
    const [taskDueDate, setTaskDueDate] = useState<Date | null>(null);
    const [taskReminderDate, setTaskReminderDate] = useState<Date | null>(null);
    const [taskRepeatInterval, setTaskRepeatInterval] = useState<string | null>(
        null
    );

    const lastTaskId = useRef(selectedTask?.id);
    const isTaskSwitching = useRef(false);

    useEffect(() => {
        if (selectedTask?.id !== lastTaskId.current) {
            isTaskSwitching.current = true;

            setTaskName(selectedTask?.name || "");
            setTaskCompleted(selectedTask?.completed || false);
            setTaskImportant(selectedTask?.important || false);
            setTaskDueDate(
                selectedTask?.dueDate ? new Date(selectedTask.dueDate) : null
            );
            setTaskReminderDate(
                selectedTask?.reminderDate
                    ? new Date(selectedTask.reminderDate)
                    : null
            );
            setTaskRepeatInterval(selectedTask?.repeatInterval || null);

            lastTaskId.current = selectedTask?.id;

            Promise.resolve().then(() => {
                isTaskSwitching.current = false;
            });
        }
    }, [selectedTask]);

    const handleUpdateTask = useCallback(
        (newTaskName?: string) => {
            if (
                !selectedTask ||
                !isVisible ||
                loading ||
                isTaskSwitching.current
            ) {
                return;
            }

            const updatedTaskName = newTaskName || taskName;

            const updatedTask = {
                ...selectedTask,
                name: updatedTaskName.trim(),
                dueDate: taskDueDate?.toISOString() || null,
                reminderDate: taskReminderDate?.toISOString() || null,
                repeatInterval: taskRepeatInterval,
                important: taskImportant,
                completed: taskCompleted,
            };

            dispatch(updateTask(updatedTask));
        },
        [
            selectedTask,
            isVisible,
            loading,
            taskDueDate,
            taskReminderDate,
            taskRepeatInterval,
            taskImportant,
            taskCompleted,
            dispatch,
        ]
    );

    return {
        taskName,
        setTaskName,
        taskCompleted,
        setTaskCompleted,
        taskImportant,
        setTaskImportant,
        taskDueDate,
        setTaskDueDate,
        taskReminderDate,
        setTaskReminderDate,
        taskRepeatInterval,
        setTaskRepeatInterval,
        handleUpdateTask,
        isTaskSwitching,
    };
};
