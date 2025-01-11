import { useDispatch, useSelector } from "react-redux";
import { List } from "../../types";
import BarsIcon from "../icons/BarsIcon";
import SidebarAddListButton from "../navigation/SidebarAddListButton";
import SidebarFooter from "../navigation/SidebarFooter";
import SidebarLink from "../navigation/SidebarLink";
import { AppDispatch, RootState } from "../../store";
import iconMap from "../../constants/iconMaps";
import { IconName } from "../../enums";
import React, { useEffect, useState } from "react";
import { fetchLists } from "../../store/lists/listsActions";
import TaskListContextMenu from "../menus/TaskListContextMenu";
import { useParams } from "react-router";
import { toggleSidebar } from "../../store/sidebar/sidebarSlice";

const DesktopNavigationSidebar = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { listId } = useParams();

    const lists: List[] = useSelector((state: RootState) => state.lists.lists);
    const defaultLists = lists.filter((list: List) => list.type === "default");
    const dynamicLists = lists.filter((list: List) => list.type === "dynamic");

    const [menuVisible, setMenuVisible] = useState<boolean>(false);
    const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
    const [targetList, setTargetList] = useState<List | null>(null);

    const handleRightClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        list: List
    ) => {
        console.debug({ x: event.clientX, y: event.clientY });
        if (list.type === "dynamic") {
            event.preventDefault();
            setTargetList(list);
            setMenuPosition({ x: event.clientX, y: event.clientY });
            setMenuVisible(true);
        }
    };

    const handleCloseMenu = () => {
        setMenuVisible(false);
        setTargetList(null);
    };

    const handleToggleSidebar = () => {
        dispatch(toggleSidebar());
    };

    useEffect(() => {
        if (lists.length === 0) {
            dispatch(fetchLists());
        }
    }, [lists, dispatch]);

    return (
        <aside
            id="DesktopNavigationSidebar"
            className="hidden relative md:flex flex-col md:w-sidebar lg:w-sidebar-lg shadow-md bg-white"
        >
            <div className="flex items-center w-full h-12 px-6 mt-4">
                <button
                    className="bg-none outline-none"
                    onClick={() => handleToggleSidebar()}
                >
                    <BarsIcon size={20} />
                </button>
            </div>

            <div className="overflow-y-auto">
                {/* Fixed task list links */}
                <div>
                    {defaultLists.map((list: List) => (
                        <SidebarLink
                            key={`desktop-${list.id}`}
                            active={list.id === listId}
                            icon={iconMap[list.icon as IconName]()}
                            to={`/tasks/${list.id}`}
                        >
                            {list.name}
                        </SidebarLink>
                    ))}
                </div>

                <div className="px-3 my-2">
                    <hr />
                </div>

                {/* Dynamic task list links */}
                <div>
                    {dynamicLists.map((list: List) => (
                        <div
                            key={`desktop-${list.id}`}
                            onContextMenu={(e) => handleRightClick(e, list)}
                        >
                            <SidebarLink
                                active={list.id === listId}
                                to={`/tasks/${list.id}`}
                                icon={
                                    iconMap[list.icon as IconName]() ||
                                    list.icon
                                }
                            >
                                {list.name}
                            </SidebarLink>
                        </div>
                    ))}
                </div>

                {/* Custom context menu for dynamic task lists */}
                {menuVisible && targetList && (
                    <TaskListContextMenu
                        list={targetList}
                        position={menuPosition}
                        onClose={handleCloseMenu}
                        minusTopNavbarHeight={true}
                    />
                )}
            </div>

            <SidebarAddListButton />
            <SidebarFooter />
        </aside>
    );
};

export default DesktopNavigationSidebar;
