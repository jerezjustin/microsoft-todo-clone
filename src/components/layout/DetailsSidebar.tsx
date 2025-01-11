import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { deleteTask } from "../../store/tasks/taskActions";
import CloseSidebarIcon from "../icons/CloseSidebarIcon";
import TrashBinIcon from "../icons/TrashBinIcon";
import { resolveCreateOn } from "../../helpers/dateHandling";
import { detailsSidebarActions } from "../../store/detailsSidebar/deatilsSidebarSlice";
import TaskDetailsNameInput from "../detailsSidebar/TaskDetailsNameInput";
import DetailsSidebarCompletedButton from "../detailsSidebar/DetailsSidebarCompletedButton";
import DetailsSidebarImportantButton from "../detailsSidebar/DetailsSidebarImportantButton";
import DetailsSidebarTaskOptions from "../detailsSidebar/DetailsSidebarTaskOptions";
import { useTaskDetails } from "../../hooks/useTaskDetails";
import { useEffect } from "react";

const DetailsSidebar = () => {
    const dispatch = useDispatch<AppDispatch>();

    const { isVisible, selectedTask, loading } = useSelector(
        (state: RootState) => state.detailsSidebar
    );

    const {
        taskName,
        setTaskName,
        taskCompleted,
        setTaskCompleted,
        taskImportant,
        setTaskImportant,
        taskDueDate,
        setTaskDueDate,
        taskReminderDate,
        setTaskReminderDate,
        taskRepeatInterval,
        setTaskRepeatInterval,
        handleUpdateTask,
        isTaskSwitching,
    } = useTaskDetails(selectedTask, isVisible, loading);

    const handleInputBlur = () => {
        if (taskName.trim() === "") {
            setTaskName(selectedTask?.name || "");
        }
        handleUpdateTask(taskName);
    };

    const handleClose = () => {
        dispatch(detailsSidebarActions.closeDetailsSidebar());
    };

    const handleDeleteTask = () => {
        if (!selectedTask) return;
        dispatch(deleteTask(selectedTask));
        handleClose();
    };

    useEffect(() => {
        if (!isTaskSwitching.current) {
            handleUpdateTask();
        }
    }, [handleUpdateTask, isTaskSwitching]);

    if (!isVisible || loading || !selectedTask) return null;

    return (
        <div
            key={selectedTask.id}
            className="relative md:flex flex-col shadow-md pl-6 pr-4 pt-4 h-full"
        >
            <div className="flex flex-col w-80 h-full">
                <div className="flex bg-white w-full p-4 mb-2 hover:bg-gray-100">
                    <DetailsSidebarCompletedButton
                        isCompleted={taskCompleted}
                        setIsCompleted={setTaskCompleted}
                    />

                    <TaskDetailsNameInput
                        taskName={taskName}
                        setTaskName={setTaskName}
                        handleInputBlur={handleInputBlur}
                    />

                    <DetailsSidebarImportantButton
                        isImportant={taskImportant}
                        setIsImportant={setTaskImportant}
                    />
                </div>

                <DetailsSidebarTaskOptions
                    dueDate={taskDueDate}
                    setdueDate={setTaskDueDate}
                    reminderDate={taskReminderDate}
                    setReminderDate={setTaskReminderDate}
                    repeatInterval={taskRepeatInterval}
                    setRepeatInterval={setTaskRepeatInterval}
                />

                <div className="flex justify-between items-center border-t border-t-gray-300 mt-auto py-4">
                    <button onClick={handleClose}>
                        <CloseSidebarIcon />
                    </button>

                    <span className="text-center text-xs text-gray-500">
                        {selectedTask.createdAt &&
                            resolveCreateOn(new Date(selectedTask.createdAt))}
                    </span>

                    <button onClick={handleDeleteTask}>
                        <TrashBinIcon />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default DetailsSidebar;
