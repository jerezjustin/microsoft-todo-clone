import { ReactElement } from "react";

type TaskListHeaderButtonProps = {
    icon: ReactElement;
    label: string;
};

const TaskListHeaderButton = ({ icon, label }: TaskListHeaderButtonProps) => {
    return (
        <button className="flex gap-2.5 px-3 py-2.5 hover:bg-white">
            {icon}
            <span className="hidden lg:inline-block capitalize">{label}</span>
        </button>
    );
};

export default TaskListHeaderButton;
