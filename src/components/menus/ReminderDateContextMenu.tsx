import { Dispatch, SetStateAction } from "react";
import ContextMenu, { ContextMenuProps } from "../contextMenu";
import ContextMenuButton from "../contextMenu/ContextMenuButton";
import ContextMenuDivider from "../contextMenu/ContextMenuDivider";
import CalendarTimeIcon from "../icons/CalendarTimeIcon";
import TimerTodayIcon from "../icons/TimerTodayIcon";
import TimerTomorrowIcon from "../icons/TimerTomorrowIcon";
import TimerForwardIcon from "../icons/TimerTodayIcon copy";
import { getShortDayAndTime, getShortTime } from "../../helpers/dateHandling";

interface ReminderDateContextMenu extends Omit<ContextMenuProps, "children"> {
    reminderDate: Date | null;
    setReminderDate: Dispatch<SetStateAction<Date | null>>;
}

const ReminderDateContextMenu = ({ ...props }: ReminderDateContextMenu) => {
    const now = new Date();

    const laterToday = new Date(now);
    if (now.getHours() + 4 >= 12) {
        laterToday.setHours(11, 0, 0, 0);
    } else {
        laterToday.setHours(now.getHours() + 4, 0, 0, 0);
    }

    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 1);
    tomorrow.setHours(9, 0, 0, 0);

    const nextWeek = new Date(now);
    nextWeek.setDate(now.getDate() + ((1 + 7 - now.getDay()) % 7));
    nextWeek.setHours(9, 0, 0, 0);

    const handleSetReminderDate = (date: Date | null) => {
        props.setReminderDate(date);
        props.onClose();
    };

    return (
        <ContextMenu {...props}>
            <ContextMenuButton
                label="Later today"
                desc={getShortTime(laterToday)}
                icon={<TimerTodayIcon size={20} />}
                onClick={() => handleSetReminderDate(laterToday)}
            />
            <ContextMenuButton
                label="Tomorrow"
                desc={getShortDayAndTime(tomorrow)}
                icon={<TimerTomorrowIcon size={20} />}
                onClick={() => handleSetReminderDate(tomorrow)}
            />
            <ContextMenuButton
                label="Next week"
                desc={getShortDayAndTime(nextWeek)}
                icon={<TimerForwardIcon size={20} />}
                onClick={() => handleSetReminderDate(nextWeek)}
            />
            <ContextMenuDivider />
            <ContextMenuButton
                label="Pick a date"
                icon={<CalendarTimeIcon size={20} />}
                disabled={true}
            />
            {props.reminderDate && (
                <>
                    <ContextMenuDivider />
                    <ContextMenuButton
                        className="text-red-700"
                        label="Remove due date"
                        icon={<CalendarTimeIcon size={20} />}
                        onClick={() => handleSetReminderDate(null)}
                    />
                </>
            )}
        </ContextMenu>
    );
};

export default ReminderDateContextMenu;
