import { Dispatch, SetStateAction } from "react";
import { useVisible } from "../../hooks/useVisible";
import BellIcon from "../icons/BellIcon";
import ReminderDateContextMenu from "../menus/ReminderDateContextMenu";
import CloseIcon from "../icons/CloseIcon";
import { resolveDateName } from "../../helpers/dateHandling";

interface DetailsSidebarReminderButtonProps {
    reminderDate: Date | null;
    setReminderDate: Dispatch<SetStateAction<Date | null>>;
}

const DetailsSidebarReminderButton = ({
    reminderDate,
    setReminderDate,
}: DetailsSidebarReminderButtonProps) => {
    const {
        visible: isContextMenuVisible,
        show: showContextMenu,
        hide: hideContextMenu,
    } = useVisible();

    return (
        <div className="relative">
            <div
                className={`flex w-full text-sm text-gray-500 items-center hover:bg-gray-100 group ${
                    reminderDate && "text-primary"
                }`}
            >
                <button
                    className="flex flex-1 p-4 pr-0"
                    onClick={showContextMenu}
                >
                    <BellIcon />
                    <span className="mx-4 w-full text-left">
                        {(reminderDate &&
                            resolveDateName(reminderDate, true)) ||
                            "Remind me"}
                    </span>
                </button>

                {reminderDate && (
                    <button
                        className="flex items-center justify-center w-5 h-5 mr-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => setReminderDate(null)}
                    >
                        <CloseIcon size={20} />
                    </button>
                )}
            </div>

            {isContextMenuVisible && (
                <ReminderDateContextMenu
                    label="Reminder"
                    reminderDate={reminderDate}
                    setReminderDate={setReminderDate}
                    position={{ x: "25%", y: "100%" }}
                    onClose={hideContextMenu}
                />
            )}
        </div>
    );
};

export default DetailsSidebarReminderButton;
