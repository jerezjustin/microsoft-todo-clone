import { useDispatch } from "react-redux";
import { List } from "../../types";
import ContextMenu, { ContextMenuProps } from "../contextMenu";
import { AppDispatch } from "../../store";
import { deleteList } from "../../store/lists/listsActions";
import TrashBinIcon from "../icons/TrashBinIcon";
import RenameIcon from "../icons/RenameIcon";
import { useNavigate } from "react-router";

interface TaskListContextMenuProps extends Omit<ContextMenuProps, "children"> {
    list: List;
    renamable?: boolean;
    handleRename?: () => void;
}

const TaskListContextMenu = ({ list, ...props }: TaskListContextMenuProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const handleRename = () => {
        if (props.renamable) {
            props.handleRename?.();
            props.onClose();
        }
    };

    const handleDeleteList = () => {
        dispatch(deleteList(list));
        props.onClose();
        navigate("/tasks/tasks");
    };

    return (
        <ContextMenu {...props}>
            {props.renamable && (
                <>
                    <button
                        className="flex text-gray-700 items-center gap-2 w-full h-9 px-4 hover:bg-gray-100"
                        onClick={handleRename}
                    >
                        <RenameIcon />
                        <span className="text-start w-full px-1">
                            Rename list
                        </span>
                    </button>

                    <div className="px-3 my-2">
                        <hr />
                    </div>
                </>
            )}

            <button
                className="flex items-center gap-2 w-full h-9 px-4 text-red-700 hover:bg-gray-100"
                onClick={handleDeleteList}
            >
                <TrashBinIcon />
                <span className="text-start w-full px-1">Delete list</span>
            </button>
        </ContextMenu>
    );
};

export default TaskListContextMenu;
