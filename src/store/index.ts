import { configureStore } from "@reduxjs/toolkit";
import { listsReducer } from "./lists/listsSlice";
import sidebarReducer from "./sidebar/sidebarSlice";
import { tasksReducer } from "./tasks/taskSlice";
import { detailsSidebarReducer } from "./detailsSidebar/deatilsSidebarSlice";

export const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        detailsSidebar: detailsSidebarReducer,
        lists: listsReducer,
        tasks: tasksReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
