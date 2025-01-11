import { useDispatch } from "react-redux";
import type { Task } from "../../types";
import CircleIcon from "../icons/CircleIcon";
import StarIcon from "../icons/StarIcon";
import { AppDispatch } from "../../store";
import { detailsSidebarActions } from "../../store/detailsSidebar/deatilsSidebarSlice";
import { updateTask } from "../../store/tasks/taskActions";
import CompletedCheckmarkFilledCircleIcon from "../icons/CompletedCheckmarkFilledCircleIcon";
import FilledStarIcon from "../icons/FilledStarIcon ";

interface TaskProps {
    task: Task;
    active?: boolean;
}

const TaskItem = ({ task, active = false }: TaskProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const handleMarkAsComplete = () => {
        dispatch(updateTask({ ...task, completed: !task.completed }));
    };

    const handleMarkAsImportant = () => {
        dispatch(updateTask({ ...task, important: !task.important }));
    };

    const handleOpenDetailsSidebar = () => {
        dispatch(detailsSidebarActions.openDetailsSidebar(task));
    };

    return (
        <div
            className={`flex items-center bg-white px-4 mt-2 shadow-sm rounded ${
                active && "!bg-primary/10"
            }`}
        >
            <button
                className="flex items-center justify-center text-primary h-8 w-8"
                onClick={handleMarkAsComplete}
            >
                {task.completed ? (
                    <CompletedCheckmarkFilledCircleIcon />
                ) : (
                    <CircleIcon />
                )}
            </button>

            <button
                className="flex-1 py-2 px-3.5 leading-9 text-sm text-left"
                onClick={handleOpenDetailsSidebar}
            >
                {task.name}
            </button>

            <button
                className="flex items-center justify-center text-primary h-8 w-8"
                onClick={handleMarkAsImportant}
            >
                {task.important ? <FilledStarIcon /> : <StarIcon />}
            </button>
        </div>
    );
};

export default TaskItem;
