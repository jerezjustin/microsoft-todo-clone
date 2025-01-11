import { List } from "../../types";
import TaskInput from "./TaskInput";
import TaskListHeader from "./TaskListHeader";

interface TaskListHeaderSectionProps {
    list: List;
}

const TaskListHeaderSection = ({ list }: TaskListHeaderSectionProps) => (
    <>
        <TaskListHeader list={list} />
        <div className="mx-4 sm:mx-6">
            <TaskInput />
        </div>
    </>
);

export default TaskListHeaderSection;
