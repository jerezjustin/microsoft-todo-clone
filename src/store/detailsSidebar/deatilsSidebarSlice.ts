import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../types";

interface DetailsSidebarState {
    isVisible: boolean;
    selectedTask: Task | null;
    loading: boolean;
}

const initialState: DetailsSidebarState = {
    isVisible: false,
    selectedTask: null,
    loading: false,
};

const detailsSidebarSlice = createSlice({
    name: "detailsSidebar",
    initialState,
    reducers: {
        openDetailsSidebar: (
            state: DetailsSidebarState,
            action: PayloadAction<Task>
        ) => {
            state.isVisible = true;
            state.selectedTask = action.payload;
        },
        closeDetailsSidebar: (state: DetailsSidebarState) => {
            state.isVisible = false;
            state.selectedTask = null;
        },
        startLoading: (state: DetailsSidebarState) => {
            state.loading = true;
        },
        finishLoading: (state: DetailsSidebarState) => {
            state.loading = false;
        },
    },
});

export const detailsSidebarReducer = detailsSidebarSlice.reducer;
export const detailsSidebarActions = detailsSidebarSlice.actions;
