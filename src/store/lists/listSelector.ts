import { RootState } from "../index";
import { List } from "../../types";
import { createSelector } from "@reduxjs/toolkit";

export const selectLists = (state: RootState): List[] => state.lists.lists;

export const selectListById = createSelector(
    [selectLists, (_state: RootState, listId: string) => listId],
    (lists, listId) => lists.find((list) => list.id === listId)
);

export const selectListLoadingState = (state: RootState): boolean =>
    state.lists.loading;
