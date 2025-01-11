import { Dispatch, SetStateAction } from "react";

interface TaskDetailsNameInputProps {
    taskName: string;
    setTaskName: Dispatch<SetStateAction<string>>;
    handleInputBlur: () => void;
}

const TaskDetailsNameInput = ({
    taskName,
    setTaskName,
    handleInputBlur,
}: TaskDetailsNameInputProps) => {
    return (
        <input
            className="flex-1 leading-5 font-medium mx-4 outline-none border-none bg-transparent"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            onBlur={handleInputBlur}
            placeholder="Task name"
        />
    );
};

export default TaskDetailsNameInput;
