import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TasksState } from "../../interfaces";
import { SortBy, Task, TaskByList } from "../../types";

const initialState: TasksState = {
    loading: false,
    tasksByList: {},
    sortBy: "dueDate",
    direction: "asc",
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        startLoading(state: TasksState) {
            state.loading = true;
        },
        finishLoading(state: TasksState) {
            state.loading = false;
        },
        setTasks(state: TasksState, action: PayloadAction<TaskByList>) {
            state.tasksByList = action.payload;
        },
        setTasksForList(
            state: TasksState,
            action: PayloadAction<{ listId: string; tasks: Task[] }>
        ) {
            const { listId, tasks } = action.payload;
            state.tasksByList[listId] = tasks;
        },
        addTaskToList(
            state: TasksState,
            action: PayloadAction<{ listId: string; task: Task }>
        ) {
            const { listId, task } = action.payload;

            if (!state.tasksByList[listId]) {
                state.tasksByList[listId] = [];
            }

            state.tasksByList[listId].push(task);
        },
        updateTask(state: TasksState, action: PayloadAction<Task>) {
            const { listId, id } = action.payload;
            const taskList = state.tasksByList[listId];

            if (taskList) {
                const index = taskList.findIndex(
                    (task: Task) => task.id === id
                );

                if (index !== -1) {
                    taskList[index] = action.payload;
                }
            }
        },
        deleteTask(state: TasksState, action: PayloadAction<Task>) {
            const { listId, id } = action.payload;
            const taskList = state.tasksByList[listId];

            if (taskList) {
                const updatedList = taskList.filter(
                    (task: Task) => task.id !== id
                );

                state.tasksByList[listId] = updatedList;
            }
        },
        deleteListTasks(state: TasksState, action: PayloadAction<string>) {
            delete state.tasksByList[action.payload];
        },
        setSortBy(state: TasksState, action: PayloadAction<SortBy>) {
            state.sortBy = action.payload;
        },
        toggleSortDirection(state: TasksState) {
            state.direction = state.direction === "asc" ? "desc" : "asc";
        },
    },
});

export const tasksReducer = tasksSlice.reducer;
export const tasksActions = tasksSlice.actions;
