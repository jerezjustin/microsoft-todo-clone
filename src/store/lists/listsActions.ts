import { AppDispatch } from "../index";
import { StorageKeys } from "../../enums";
import { List } from "../../types";
import { listsActions } from "./listsSlice";
import {
    getLocalStorage,
    setLocalStorage,
} from "../../helpers/localStorageHelper";
import { defaultLists } from "../../constants/defaultLists";

const STORAGE_KEY = StorageKeys.LISTS;

export const fetchLists = () => async (dispatch: AppDispatch) => {
    dispatch(listsActions.startLoading());

    try {
        let lists = getLocalStorage<List[]>(STORAGE_KEY);

        if (!lists || lists.length === 0) {
            lists = defaultLists;
            setLocalStorage(STORAGE_KEY, lists);
        }

        dispatch(listsActions.setLists(lists));
    } finally {
        dispatch(listsActions.finishLoading());
    }
};

export const saveList = (list: List) => async (dispatch: AppDispatch) => {
    dispatch(listsActions.startLoading());

    try {
        const storedLists: List[] = getLocalStorage(STORAGE_KEY) || [];
        const updatedLists = [...storedLists, list];

        setLocalStorage(STORAGE_KEY, updatedLists);
        dispatch(listsActions.addList(list));
    } finally {
        dispatch(listsActions.finishLoading());
    }
};

export const updateList =
    (updatedList: List) => async (dispatch: AppDispatch) => {
        dispatch(listsActions.startLoading());

        try {
            const storedLists: List[] = getLocalStorage(STORAGE_KEY) || [];

            const updatedLists = storedLists.map((list: List) =>
                list.id === updatedList.id ? updatedList : list
            );

            setLocalStorage(STORAGE_KEY, updatedLists);
            dispatch(listsActions.updateList(updatedList));
        } finally {
            dispatch(listsActions.finishLoading());
        }
    };

export const deleteList = (list: List) => async (dispatch: AppDispatch) => {
    dispatch(listsActions.startLoading());

    try {
        const storedLists: List[] = getLocalStorage(STORAGE_KEY) || [];
        const updatedLists = storedLists.filter(
            (storedList) => storedList.id !== list.id
        );

        setLocalStorage(STORAGE_KEY, updatedLists);
        dispatch(listsActions.deleteList(list));
    } finally {
        dispatch(listsActions.finishLoading());
    }
};
