import { Dispatch, SetStateAction } from "react";
import { useVisible } from "../../hooks/useVisible";
import BellIcon from "../icons/BellIcon";
import ReminderDateContextMenu from "../menus/ReminderDateContextMenu";
import { resolveDateName } from "../../helpers/dateHandling";

interface ReminderDateButton {
    reminderDate: Date | null;
    setReminderDate: Dispatch<SetStateAction<Date | null>>;
}

const ReminderDateButton = ({
    reminderDate,
    setReminderDate,
}: ReminderDateButton) => {
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
                    reminderDate &&
                    "bg-white px-2 rounded border border-gray-200"
                }`}
            >
                <BellIcon />
                {reminderDate && resolveDateName(reminderDate, true)}
            </button>
            {isContextMenuVisible && (
                <ReminderDateContextMenu
                    label="Reminder"
                    reminderDate={reminderDate}
                    setReminderDate={setReminderDate}
                    position={{ x: "-50%", y: "100%" }}
                    onClose={hideContextMenu}
                />
            )}
        </div>
    );
};

export default ReminderDateButton;
