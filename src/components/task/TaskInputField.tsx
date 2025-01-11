import React, { Dispatch, SetStateAction } from "react";
import CircleIcon from "../icons/CircleIcon";

interface TaskInputFieldProps {
    taskName: string;
    setTaskName: Dispatch<SetStateAction<string>>;
    handleKeyDown: (e: React.KeyboardEvent) => void;
}

const TaskInputField = ({
    taskName,
    setTaskName,
    handleKeyDown,
}: TaskInputFieldProps) => {
    return (
        <div className="flex items-center mx-4 h-[52px]">
            <span className="cursor-pointer ml-1.5 text-primary">
                <CircleIcon size={20} />
            </span>
            <input
                className="w-full text-sm h-10 px-3.5 text-gray-600 placeholder:text-primary focus:placeholder:text-gray-600 border-none outline-none"
                placeholder="Add a task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
};

export default TaskInputField;
