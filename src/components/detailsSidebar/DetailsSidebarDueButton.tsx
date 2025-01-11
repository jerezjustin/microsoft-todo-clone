import { Dispatch, SetStateAction } from "react";
import { useVisible } from "../../hooks/useVisible";
import DueDateContextMenu from "../menus/DueDateContextMenu";
import CalendarIcon from "../icons/CalendarIcon";
import CloseIcon from "../icons/CloseIcon";
import { resolveDateName } from "../../helpers/dateHandling";

interface DetailsSidebarDueButtonProps {
    dueDate: Date | null;
    setDueDate: Dispatch<SetStateAction<Date | null>>;
}

const DetailsSidebarDueButton = ({
    dueDate,
    setDueDate,
}: DetailsSidebarDueButtonProps) => {
    const {
        visible: isContextMenuVisible,
        show: showContextMenu,
        hide: hideContextMenu,
    } = useVisible();

    return (
        <div className="relative">
            <div
                className={`flex w-full text-sm text-gray-500 items-center hover:bg-gray-100 group ${
                    dueDate && "text-primary"
                }`}
            >
                <button
                    className="flex flex-1 p-4 pr-0"
                    onClick={showContextMenu}
                >
                    <CalendarIcon />
                    <span className="mx-4 w-full text-left">
                        {(dueDate && resolveDateName(dueDate)) ||
                            "Add due date"}
                    </span>
                </button>

                {dueDate && (
                    <button
                        className="flex items-center justify-center w-5 h-5 mr-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => setDueDate(null)}
                    >
                        <CloseIcon size={20} />
                    </button>
                )}
            </div>

            {isContextMenuVisible && (
                <DueDateContextMenu
                    label="Due"
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    position={{ x: "25%", y: "100%" }}
                    onClose={hideContextMenu}
                />
            )}
        </div>
    );
};

export default DetailsSidebarDueButton;
