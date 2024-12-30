import { configureStore } from "@reduxjs/toolkit";
import { listsReducer } from "./lists/listsSlice";
import sidebarReducer from "./sidebar/sidebarSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        lists: listsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
