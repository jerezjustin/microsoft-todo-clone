import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ListsState } from "../../interfaces";
import { List } from "../../types";

const initialState: ListsState = {
    loading: false,
    lists: [],
};

const listsSlice = createSlice({
    name: "lists",
    initialState,
    reducers: {
        startLoading(state) {
            state.loading = true;
        },
        finishLoading(state) {
            state.loading = false;
        },
        setLists(state, action: PayloadAction<List[]>) {
            state.lists = action.payload;
        },
        addList(state, action: PayloadAction<List>) {
            state.lists.push(action.payload);
        },
        updateList(state, action: PayloadAction<List>) {
            const index = state.lists.findIndex(
                (list) => list.id === action.payload.id
            );

            if (index !== -1) {
                state.lists[index] = action.payload;
            }
        },
        deleteList(state, action: PayloadAction<List>) {
            state.lists = state.lists.filter(
                (list) => list.id !== action.payload.id
            );
        },
    },
});

export const listsReducer = listsSlice.reducer;
export const listsActions = listsSlice.actions;
