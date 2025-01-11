import { Dispatch, SetStateAction } from "react";
import ContextMenu, { ContextMenuProps } from "../contextMenu";
import ContextMenuButton from "../contextMenu/ContextMenuButton";
import CalendarDayIcon from "../icons/CalendarDayIcon";
import CalendarForwardIcon from "../icons/CalendarForwardIcon";
import ContextMenuDivider from "../contextMenu/ContextMenuDivider";
import CalendarTimeIcon from "../icons/CalendarTimeIcon";
import CalendarNextIcon from "../icons/CalendarNextIcon";
import { getWeekDayName } from "../../helpers/dateHandling";

interface DueDateContextMenu extends Omit<ContextMenuProps, "children"> {
    dueDate: Date | null;
    setDueDate: Dispatch<SetStateAction<Date | null>>;
}

const DueDateContextMenu = ({ ...props }: DueDateContextMenu) => {
    const today = new Date();
    today.setHours(23, 59, 59, 999);

    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const nextWeek = new Date(today);
    nextWeek.setDate(today.getDate() + ((1 + 7 - today.getDay()) % 7));

    const todayWeekDayName = getWeekDayName(today);
    const tomorrowWeekDayName = getWeekDayName(tomorrow);
    const nextWeekDayName = getWeekDayName(nextWeek);

    const handleSetDueDate = (date: Date | null) => {
        props.setDueDate(date);
        props.onClose();
    };

    return (
        <ContextMenu {...props}>
            <ContextMenuButton
                label="Today"
                desc={todayWeekDayName}
                icon={<CalendarDayIcon size={20} />}
                onClick={() => handleSetDueDate(today)}
            />
            <ContextMenuButton
                label="Tomorrow"
                desc={tomorrowWeekDayName}
                icon={<CalendarNextIcon size={20} />}
                onClick={() => handleSetDueDate(tomorrow)}
            />
            <ContextMenuButton
                label="Next week"
                desc={nextWeekDayName}
                icon={<CalendarForwardIcon size={20} />}
                onClick={() => handleSetDueDate(nextWeek)}
            />
            <ContextMenuDivider />
            <ContextMenuButton
                label="Pick a date"
                icon={<CalendarTimeIcon size={20} />}
                disabled={true}
            />
            {props.dueDate && (
                <>
                    <ContextMenuDivider />
                    <ContextMenuButton
                        className="text-red-700"
                        label="Remove due date"
                        icon={<CalendarTimeIcon size={20} />}
                        onClick={() => handleSetDueDate(null)}
                    />
                </>
            )}
        </ContextMenu>
    );
};

export default DueDateContextMenu;
