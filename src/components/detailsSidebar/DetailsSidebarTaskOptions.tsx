import { Dispatch, SetStateAction } from "react";
import DetailsSidebarDueButton from "./DetailsSidebarDueButton";
import DetailsSidebarReminderButton from "./DetailsSidebarReminderButton";
import DetailsSidebarRepeatButton from "./DetailsSidebarRepeatButton";

interface DetailsSidebarTaskOptionsProps {
    reminderDate: Date | null;
    setReminderDate: Dispatch<SetStateAction<Date | null>>;
    dueDate: Date | null;
    setdueDate: Dispatch<SetStateAction<Date | null>>;
    repeatInterval: string | null;
    setRepeatInterval: Dispatch<SetStateAction<string | null>>;
}

const DetailsSidebarTaskOptions = ({
    reminderDate,
    setReminderDate,
    dueDate,
    setdueDate,
    repeatInterval,
    setRepeatInterval,
}: DetailsSidebarTaskOptionsProps) => {
    return (
        <div className="bg-white w-full">
            <DetailsSidebarReminderButton
                reminderDate={reminderDate}
                setReminderDate={setReminderDate}
            />
            <DetailsSidebarDueButton
                dueDate={dueDate}
                setDueDate={setdueDate}
            />
            <DetailsSidebarRepeatButton
                repeatInterval={repeatInterval}
                setRepeatInterval={setRepeatInterval}
            />
        </div>
    );
};

export default DetailsSidebarTaskOptions;
