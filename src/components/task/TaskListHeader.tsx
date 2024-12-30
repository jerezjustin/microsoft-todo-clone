import { useDispatch, useSelector } from "react-redux";
import iconMap from "../../constants/iconMaps";
import { IconName } from "../../enums";
import { List } from "../../types";
import EditableLabel from "../EditableLabel";
import GridIcon from "../icons/GridIcon";
import HorizantalMoreIcon from "../icons/HorizontalMoreIcon";
import OrderIcon from "../icons/OrderIcon";
import SortIcon from "../icons/SortIcon";
import TaskListHeaderButton from "./TaskListHeaderButton";
import { AppDispatch, RootState } from "../../store";
import { updateList } from "../../store/lists/listsActions";
import { useNavigate } from "react-router";
import { generateUniqueName } from "../../helpers/listsHelper";
import { useState } from "react";
import TaskListContextMenu from "../menus/TaskListContextMenu";
import BarsIcon from "../icons/BarsIcon";
import { toggleSidebar } from "../../store/sidebar/sidebarSlice";
import GroupIcon from "../icons/GroupIcon";

interface TaskListHeader {
    list: List;
}

const TaskListHeader = ({ list }: TaskListHeader) => {
    const ICON_SIZE = 24;

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const lists = useSelector((state: RootState) => state.lists.lists);
    const isNavigationSidebarOpen = useSelector(
        (state: RootState) => state.sidebar.isOpen
    );

    const [editingListName, setEditingListName] = useState<boolean>(false);
    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

    const handleOpenMenu = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        if (list.type === "dynamic") {
            setMenuPosition({ x: event.clientX, y: event.clientY });
            setMenuVisible(true);
        }
    };

    const handleCloseMenu = () => {
        setMenuVisible(false);
    };

    const handleRenameFromMenu = () => {
        setEditingListName(true);
    };

    const handleUpdateListName = (newName: string) => {
        if (!newName.trim() || newName === list.name) {
            return;
        }

        const newUniqueName = generateUniqueName(newName.trim(), lists);

        const updatedList = {
            ...list,
            name: newUniqueName,
        };

        dispatch(updateList(updatedList));
        navigate(`/tasks/${list.id}`);
    };

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    };

    return (
        <div className="flex items-center w-full h-12 mx-6 my-4 text-primary">
            <div className="flex items-center ">
                {!isNavigationSidebarOpen && (
                    <button
                        className="text-gray-700"
                        onClick={() => handleToggleSidebar()}
                    >
                        <BarsIcon />
                    </button>
                )}

                {list.type == "dynamic" ? (
                    <EditableLabel
                        containerStyles="flex w-auto py-1.5 px-2 gap-2 items-center font-semibold text-xl"
                        inputStyles="w-full min-w-[200px] max-w-[500px] text-xl font-normal text-gray-600 py-1.5 px-2 outline-none bg-transparent border-[1px] border-gray-300"
                        initialValue={list.name}
                        isEditing={editingListName}
                        setIsEditing={setEditingListName}
                        onUpdate={handleUpdateListName}
                    >
                        {isNavigationSidebarOpen &&
                            iconMap[list.icon as IconName](ICON_SIZE)}
                        {list.name}
                    </EditableLabel>
                ) : (
                    <div className="flex w-auto py-1.5 px-2 gap-2 items-center font-semibold text-xl">
                        {isNavigationSidebarOpen &&
                            iconMap[list.icon as IconName](ICON_SIZE)}
                        {list.name}
                    </div>
                )}

                <button
                    className="text-gray-500 p-2 hover:bg-white"
                    onClick={(e) => handleOpenMenu(e)}
                >
                    <HorizantalMoreIcon size={20} />
                </button>

                <div className="flex ml-2.5">
                    <TaskListHeaderButton icon={<GridIcon />} label="Grid" />
                    <TaskListHeaderButton icon={<OrderIcon />} label="List" />
                </div>
            </div>

            <div className="flex items-center ml-auto">
                <TaskListHeaderButton icon={<SortIcon />} label="Sort" />
                <TaskListHeaderButton icon={<GroupIcon />} label="Group" />
            </div>

            {menuVisible && list && (
                <TaskListContextMenu
                    renamable
                    list={list}
                    position={menuPosition}
                    onClose={handleCloseMenu}
                    handleRename={handleRenameFromMenu}
                />
            )}
        </div>
    );
};

export default TaskListHeader;
