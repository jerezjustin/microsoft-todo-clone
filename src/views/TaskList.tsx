import MainLayout from "../layouts/MainLayout";
import { useParams } from "react-router";
import TasksSection from "../components/task/TasksSection";
import TaskListHeaderSection from "../components/task/TaskListHeaderSection";
import useTaskListData from "../hooks/useTasksList";
import { RootState } from "../store";
import { useSelector } from "react-redux";
import {
    selectAllTasks,
    selectCompletedTasks,
    selectImportantTasks,
    selectTasksByListId,
} from "../store/tasks/tasksSelectors";
import { sortTasks } from "../helpers/sortingHelper";

const TaskList = () => {
    const { listId } = useParams();

    const { selectedList } = useTaskListData(listId);

    const { sortBy, direction } = useSelector(
        (state: RootState) => state.tasks
    );

    const openedTask = useSelector(
        (state: RootState) => state.detailsSidebar.selectedTask
    );

    const tasks = useSelector((state: RootState) => {
        switch (listId) {
            case "completed":
                return selectCompletedTasks(state);
            case "important":
                return selectImportantTasks(state);
            case "tasks":
                return selectAllTasks(state);
            default:
                if (!listId) {
                    return [];
                }

                return selectTasksByListId(state, listId);
        }
    });

    const activeTasks =
        listId !== "completed"
            ? tasks.filter((task) => !task.completed)
            : tasks;

    const completedTasks =
        listId !== "completed" ? tasks.filter((task) => task.completed) : [];

    return (
        <MainLayout>
            {selectedList ? (
                <>
                    <TaskListHeaderSection list={selectedList} />

                    <div className="overflow-y-auto ">
                        <div className="mx-4 sm:mx-6 my-2">
                            {/* Active tasks */}
                            <TasksSection
                                tasks={sortTasks(
                                    activeTasks,
                                    sortBy,
                                    direction
                                )}
                                activeTaskId={openedTask?.id}
                            />

                            {/* Completed tasks */}
                            {completedTasks.length > 0 && (
                                <TasksSection
                                    title="Completed tasks"
                                    tasks={sortTasks(
                                        completedTasks,
                                        sortBy,
                                        direction
                                    )}
                                    activeTaskId={openedTask?.id}
                                />
                            )}
                        </div>
                    </div>
                </>
            ) : (
                <div>List not found.</div>
            )}
        </MainLayout>
    );
};

export default TaskList;
