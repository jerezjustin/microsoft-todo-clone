import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { List } from "../types";
import {
    selectCompletedTasksByListId,
    selectNonCompletedTasksByListId,
} from "../store/tasks/tasksSelectors";
import { useEffect } from "react";
import { fetchLists } from "../store/lists/listsActions";
import { fetchTasksForList } from "../store/tasks/taskActions";

const useTaskListData = (listId: string | undefined) => {
    const dispatch = useDispatch<AppDispatch>();
    const { lists, loading } = useSelector((state: RootState) => state.lists);

    const selectedList = lists.find((list: List) => list.id === listId);
    const listCompletedTasks = useSelector((state: RootState) =>
        selectCompletedTasksByListId(state, listId!)
    );
    const listActiveTasks = useSelector((state: RootState) =>
        selectNonCompletedTasksByListId(state, listId!)
    );

    useEffect(() => {
        if (lists.length === 0 && !loading) {
            dispatch(fetchLists());
        }

        if (listId) {
            dispatch(fetchTasksForList(listId));
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [listId]);

    return { selectedList, loading, listCompletedTasks, listActiveTasks };
};

export default useTaskListData;
