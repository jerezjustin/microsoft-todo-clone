import React from "react";
import { lazy } from "react";
import { Route } from "./types";

const Home = lazy(() => import("./views/Home"));
const TaskList = lazy(() => import("./views/TaskList"));

export const routes: Route[] = [
    {
        name: "Home",
        path: "*",
        element: React.createElement(Home),
    },
    {
        name: "TaskList",
        path: "/tasks/:listId",
        element: React.createElement(TaskList),
    },
];
