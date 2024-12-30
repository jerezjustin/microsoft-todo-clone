import { useDispatch, useSelector } from "react-redux";
import { List } from "../../types";
import BarsIcon from "../icons/BarsIcon";
import SidebarAddListButton from "../navigation/SidebarAddListButton";
import SidebarFooter from "../navigation/SidebarFooter";
import SidebarLink from "../navigation/SidebarLink";
import { AppDispatch, RootState } from "../../store";
import iconMap from "../../constants/iconMaps";
import { IconName } from "../../enums";
import { useEffect, useRef, useState } from "react";
import { fetchLists } from "../../store/lists/listsActions";
import { useParams } from "react-router";
import { toggleSidebar } from "../../store/sidebar/sidebarSlice";
import useClickOutside from "../../hooks/useClickOutside";

const MobileNavigationSidebar = () => {
    const { listId } = useParams();
    const dispatch = useDispatch<AppDispatch>();

    const mobileNavigationRef = useRef<HTMLDivElement>(null);

    const isNavigationSidebarOpen = useSelector(
        (state: RootState) => state.sidebar.isOpen
    );
    const lists: List[] = useSelector((state: RootState) => state.lists.lists);
    const defaultLists = lists.filter((list: List) => list.type === "default");
    const dynamicLists = lists.filter((list: List) => list.type === "dynamic");

    const [, setMobileSidebarVisible] = useState<boolean>(false);

    const handleToggleSidebar = () => {
        const mobileNavigationStyles = window.getComputedStyle(
            mobileNavigationRef.current!
        );

        const isHidden = mobileNavigationStyles.display !== "none";

        if (isHidden) {
            dispatch(toggleSidebar());
        }
    };

    useClickOutside(mobileNavigationRef, handleToggleSidebar);

    useEffect(() => {
        if (lists.length === 0) {
            dispatch(fetchLists());
        }

        setMobileSidebarVisible(isNavigationSidebarOpen);
    }, [lists, dispatch, isNavigationSidebarOpen]);

    return (
        <div className="absolute md:hidden inset-0 z-50 bg-black bg-opacity-50">
            <aside
                id="MobileNavigationSidebar"
                ref={mobileNavigationRef}
                className="flex flex-col md:hidden bg-white w-sidebar h-full absolute inset-0 z-10"
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
                                active={list.id === listId}
                                key={list.id}
                                icon={iconMap[list.icon as IconName]()}
                                to={`/tasks/${list.id}`}
                                onClick={handleToggleSidebar}
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
                            <div key={list.id}>
                                <SidebarLink
                                    active={list.id === listId}
                                    to={`/tasks/${list.id}`}
                                    icon={
                                        iconMap[list.icon as IconName]() ||
                                        list.icon
                                    }
                                    onClick={handleToggleSidebar}
                                >
                                    {list.name}
                                </SidebarLink>
                            </div>
                        ))}
                    </div>
                </div>

                <SidebarAddListButton />
                <SidebarFooter />
            </aside>
        </div>
    );
};

export default MobileNavigationSidebar;
