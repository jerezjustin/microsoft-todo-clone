import { Dispatch, SetStateAction } from "react";
import CalendarIcon from "../icons/CalendarIcon";
import DueDateContextMenu from "../menus/DueDateContextMenu";
import { resolveDateName } from "../../helpers/dateHandling";
import { useVisible } from "../../hooks/useVisible";

interface DueDateButtonProps {
    dueDate: Date | null;
    setDueDate: Dispatch<SetStateAction<Date | null>>;
}

const DueDateButton = ({ dueDate, setDueDate }: DueDateButtonProps) => {
    const {
        visible: isContextMenuVisible,
        show: showContextMenu,
        hide: hideContextMenu,
    } = useVisible();

    return (
        <div className="relative">
            <button
                onClick={showContextMenu}
                className={`flex text-sm items-center gap-1 p-1 hover:bg-white cursor-pointer ${
                    dueDate && "bg-white px-2 rounded border border-gray-200"
                }`}
            >
                <CalendarIcon />
                {dueDate && resolveDateName(dueDate)}
            </button>
            {isContextMenuVisible && (
                <DueDateContextMenu
                    label="Due"
                    dueDate={dueDate}
                    setDueDate={setDueDate}
                    // TODO: Fix context menu positioning
                    position={{ x: "-50%", y: "100%" }}
                    onClose={hideContextMenu}
                />
            )}
        </div>
    );
};

export default DueDateButton;
