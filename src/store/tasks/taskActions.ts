import { AppDispatch } from "../index";
import { StorageKeys } from "../../enums";
import { listsActions } from "../lists/listsSlice";
import { tasksActions } from "./taskSlice";
import {
    getLocalStorage,
    setLocalStorage,
} from "../../helpers/localStorageHelper";
import { Task, TaskByList } from "../../types";

const TASKS_STORAGE_KEY = StorageKeys.TASKS;

export const fetchTasks = () => async (dispatch: AppDispatch) => {
    dispatch(tasksActions.startLoading());

    try {
        const tasksByList =
            getLocalStorage<TaskByList>(TASKS_STORAGE_KEY) || {};
        dispatch(tasksActions.setTasks(tasksByList));
    } finally {
        dispatch(listsActions.finishLoading());
    }
};

export const fetchTasksForList =
    (listId: string) => async (dispatch: AppDispatch) => {
        dispatch(tasksActions.startLoading());

        try {
            const tasksByList =
                getLocalStorage<TaskByList>(TASKS_STORAGE_KEY) || {};
            const tasks = tasksByList[listId] || [];
            dispatch(tasksActions.setTasksForList({ listId, tasks }));
        } finally {
            dispatch(tasksActions.finishLoading());
        }
    };

export const saveTaskInList =
    (listId: string, task: Task) => (dispatch: AppDispatch) => {
        dispatch(tasksActions.startLoading());

        try {
            const storedTasksByList =
                getLocalStorage<TaskByList>(TASKS_STORAGE_KEY) || {};

            if (!storedTasksByList[listId]) {
                storedTasksByList[listId] = [];
            }

            storedTasksByList[listId].push(task);

            setLocalStorage(TASKS_STORAGE_KEY, storedTasksByList);
            dispatch(tasksActions.addTaskToList({ listId, task }));
        } finally {
            dispatch(tasksActions.finishLoading());
        }
    };

export const updateTask = (updatedTask: Task) => (dispatch: AppDispatch) => {
    dispatch(tasksActions.startLoading());

    try {
        const storedTasksByList =
            getLocalStorage<TaskByList>(TASKS_STORAGE_KEY) || {};

        const taskList = storedTasksByList[updatedTask.listId] || [];
        const updatedTaskList = taskList.map((task: Task) =>
            task.id === updatedTask.id ? updatedTask : task
        );

        storedTasksByList[updatedTask.listId] = updatedTaskList;

        setLocalStorage(TASKS_STORAGE_KEY, storedTasksByList);
        dispatch(tasksActions.updateTask(updatedTask));
    } finally {
        dispatch(tasksActions.finishLoading());
    }
};

export const deleteTask = (deletedTask: Task) => (dispatch: AppDispatch) => {
    dispatch(tasksActions.startLoading());

    try {
        const storedTasksByList =
            getLocalStorage<TaskByList>(TASKS_STORAGE_KEY) || {};

        const taskList = storedTasksByList[deletedTask.listId] || [];

        storedTasksByList[deletedTask.listId] = taskList.filter(
            (task: Task) => task.id !== deletedTask.id
        );

        setLocalStorage(TASKS_STORAGE_KEY, storedTasksByList);
        dispatch(tasksActions.deleteTask(deletedTask));
    } finally {
        dispatch(tasksActions.finishLoading());
    }
};

export const deleteListTasks =
    (deletedListId: string) => (dispatch: AppDispatch) => {
        dispatch(tasksActions.startLoading());

        try {
            const storedTasksByList =
                getLocalStorage<TaskByList>(TASKS_STORAGE_KEY) || {};

            delete storedTasksByList[deletedListId];

            setLocalStorage(TASKS_STORAGE_KEY, storedTasksByList);
            dispatch(tasksActions.deleteListTasks(deletedListId));
        } finally {
            dispatch(tasksActions.finishLoading());
        }
    };
