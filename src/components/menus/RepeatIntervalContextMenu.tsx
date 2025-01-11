import { Dispatch, SetStateAction } from "react";
import ContextMenu, { ContextMenuProps } from "../contextMenu";
import ContextMenuButton from "../contextMenu/ContextMenuButton";
import CalendarYearlyIcon from "../icons/CalendarYearlyIcon";
import CalendarMonthlyIcon from "../icons/CalendarMonthlyIcon";
import CalendarWeekdaysIcon from "../icons/CalendarWeekdaysIcon";
import CalendarWeeklyIcon from "../icons/CalendarWeeklyIcon";
import CalendarDailyIcon from "../icons/CalendarDailyIcon";
import CalendarTimeIcon from "../icons/CalendarTimeIcon";
import ContextMenuDivider from "../contextMenu/ContextMenuDivider";
import { RepeatInterval } from "../../enums";

interface RepeatIntervalContextMenuProps
    extends Omit<ContextMenuProps, "children"> {
    repeatInterval: string | null;
    setRepeatInterval: Dispatch<SetStateAction<string | null>>;
}

const RepeatIntervalContextMenu = ({
    ...props
}: RepeatIntervalContextMenuProps) => {
    const handleSetRepeatInterval = (repeatInterval: RepeatInterval | null) => {
        props.setRepeatInterval(repeatInterval);
        props.onClose();
    };

    return (
        <ContextMenu {...props}>
            <ContextMenuButton
                label="Daily"
                icon={<CalendarDailyIcon />}
                onClick={() => handleSetRepeatInterval(RepeatInterval.Daily)}
            />
            <ContextMenuButton
                label="Weekdays"
                icon={<CalendarWeekdaysIcon />}
                onClick={() => handleSetRepeatInterval(RepeatInterval.Weekdays)}
            />
            <ContextMenuButton
                label="Weekly"
                icon={<CalendarWeeklyIcon />}
                onClick={() => handleSetRepeatInterval(RepeatInterval.Weekly)}
            />
            <ContextMenuButton
                label="Monthly"
                icon={<CalendarMonthlyIcon />}
                onClick={() => handleSetRepeatInterval(RepeatInterval.Monthly)}
            />
            <ContextMenuButton
                label="Yearly"
                icon={<CalendarYearlyIcon />}
                onClick={() => handleSetRepeatInterval(RepeatInterval.Yearly)}
            />
            <ContextMenuDivider />
            <ContextMenuButton
                label="Pick a date"
                icon={<CalendarTimeIcon size={20} />}
                disabled={true}
            />
            {props.repeatInterval && (
                <>
                    <ContextMenuDivider />
                    <ContextMenuButton
                        className="text-red-700"
                        label="Never repeat"
                        icon={<CalendarTimeIcon size={20} />}
                        onClick={() => handleSetRepeatInterval(null)}
                    />
                </>
            )}
        </ContextMenu>
    );
};

export default RepeatIntervalContextMenu;
