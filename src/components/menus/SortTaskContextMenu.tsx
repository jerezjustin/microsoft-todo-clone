import { useDispatch, useSelector } from "react-redux";
import ContextMenu, { ContextMenuProps } from "../contextMenu";
import ContextMenuButton from "../contextMenu/ContextMenuButton";
import ContextMenuDivider from "../contextMenu/ContextMenuDivider";
import CalendarIcon from "../icons/CalendarIcon";
import CalendarTimeIcon from "../icons/CalendarTimeIcon";
import SortIcon from "../icons/SortIcon";
import StarIcon from "../icons/StarIcon";
import { AppDispatch, RootState } from "../../store";
import { tasksActions } from "../../store/tasks/taskSlice";
import { SortBy } from "../../types";

type SortTaskContextMenu = Omit<ContextMenuProps, "children">;

const SortTaskContextMenu = ({ ...props }: SortTaskContextMenu) => {
    const dispatch = useDispatch<AppDispatch>();

    const sortDirection = useSelector(
        (state: RootState) => state.tasks.direction
    );

    const handleSetSortBy = (sortBy: SortBy) => {
        dispatch(tasksActions.setSortBy(sortBy));
        props.onClose();
    };

    const handleToggleSortDirection = () => {
        dispatch(tasksActions.toggleSortDirection());
        props.onClose();
    };

    return (
        <ContextMenu {...props}>
            <ContextMenuButton
                label="Alphabetically"
                icon={<SortIcon />}
                onClick={() => handleSetSortBy("name")}
            />
            <ContextMenuButton
                label="Importance"
                icon={<StarIcon />}
                onClick={() => handleSetSortBy("important")}
            />
            <ContextMenuButton
                label="Due date"
                icon={<CalendarIcon />}
                onClick={() => handleSetSortBy("dueDate")}
            />
            <ContextMenuButton
                label="Creation date"
                icon={<CalendarTimeIcon />}
                onClick={() => handleSetSortBy("createAt")}
            />
            <ContextMenuDivider />
            <ContextMenuButton
                label={`Toggle direction (${sortDirection})`}
                icon={<SortIcon />}
                onClick={handleToggleSortDirection}
            />
        </ContextMenu>
    );
};

export default SortTaskContextMenu;
