import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";
import { Task } from "../../types";

export const selectAllTasks = createSelector(
    [(state: RootState) => state.tasks.tasksByList],
    (tasksByList) => Object.values(tasksByList).flat()
);

export const selectCompletedTasks = createSelector([selectAllTasks], (tasks) =>
    tasks.filter((task) => task.completed)
);

export const selectImportantTasks = createSelector([selectAllTasks], (tasks) =>
    tasks.filter((task) => task.important)
);

export const selectTaskById = createSelector(
    [
        (state: RootState) => state.tasks.tasksByList,
        (_: RootState, listId: string, taskId: string) => ({ listId, taskId }),
    ],
    (tasksByList, { listId, taskId }) => {
        const taskList: Task[] = tasksByList[listId];
        let index = -1;

        if (taskList) {
            index = taskList.findIndex((task: Task) => task.id === taskId);
        }

        return index !== -1 ? taskList[index] : undefined;
    }
);

export const selectTasksByListId = (state: RootState, listId: string): Task[] =>
    state.tasks.tasksByList[listId] || [];

export const selectCompletedTasksByListId = createSelector(
    [selectTasksByListId],
    (tasks) => tasks.filter((task) => task.completed)
);

export const selectNonCompletedTasksByListId = createSelector(
    [selectTasksByListId],
    (tasks) => tasks.filter((task) => !task.completed)
);
