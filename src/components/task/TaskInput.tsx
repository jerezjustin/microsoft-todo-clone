import { useParams } from "react-router";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { selectTasksByListId } from "../../store/tasks/tasksSelectors";
import TaskInputField from "./TaskInputField";
import TaskActionButtons from "./TaskActionButtons";
import { useTaskInput } from "../../hooks/useTaskInput";

const TaskInput = () => {
    const { listId } = useParams();

    const tasks = useSelector((state: RootState) =>
        selectTasksByListId(state, listId!)
    );

    const {
        taskName,
        setTaskName,
        dueDate,
        setDueDate,
        reminderDate,
        setReminderDate,
        repeatInterval,
        setRepeatInterval,
        handleSubmit,
    } = useTaskInput(listId, tasks);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    return (
        <div className="shadow-md w-full">
            <div className="bg-white">
                <TaskInputField
                    taskName={taskName}
                    setTaskName={setTaskName}
                    handleKeyDown={handleKeyDown}
                />
            </div>
            <hr />
            <div className="bg-background">
                <TaskActionButtons
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    reminderDate={reminderDate}
                    setReminderDate={setReminderDate}
                    repeatInterval={repeatInterval}
                    setRepeatInterval={setRepeatInterval}
                    handleSubmit={handleSubmit}
                />
            </div>
        </div>
    );
};

export default TaskInput;
