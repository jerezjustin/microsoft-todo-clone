import { Task } from "../../types";
import TaskItem from "./TaskItem";

interface TasksSectionProps {
    tasks: Task[];
    title?: string;
    activeTaskId?: string;
}

const TasksSection = ({ tasks, title, activeTaskId }: TasksSectionProps) => {
    return (
        <div>
            {title && <h2>{title}</h2>}

            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    active={task.id === activeTaskId}
                />
            ))}
        </div>
    );
};

export default TasksSection;
