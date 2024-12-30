import { useParams } from "react-router";
import MainLayout from "../layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { List } from "../types";
import { useEffect } from "react";
import { fetchLists } from "../store/lists/listsActions";
import TaskListHeader from "../components/task/TaskListHeader";

const TaskList = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { listId } = useParams();

    const lists = useSelector((state: RootState) => state.lists.lists);
    const list = lists.find((list: List) => list.id === listId);

    useEffect(() => {
        if (lists.length === 0) {
            dispatch(fetchLists());
        }
    }, [dispatch, lists]);

    return (
        <MainLayout>
            {list ? <TaskListHeader list={list} /> : <div>List not found.</div>}
        </MainLayout>
    );
};

export default TaskList;
