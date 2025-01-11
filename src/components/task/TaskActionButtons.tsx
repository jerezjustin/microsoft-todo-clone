import { Dispatch, SetStateAction } from "react";
import RepeatIntervalButton from "./RepeatIntervalButton";
import DueDateButton from "./DueDateButton";
import ReminderDateButton from "./ReminderButton";

type TaskActionButtonsProps = {
    dueDate: Date | null;
    setDueDate: Dispatch<SetStateAction<Date | null>>;
    reminderDate: Date | null;
    setReminderDate: Dispatch<SetStateAction<Date | null>>;
    repeatInterval: string | null;
    setRepeatInterval: Dispatch<SetStateAction<string | null>>;
    handleSubmit: () => void;
};

const TaskActionButtons = ({
    dueDate,
    setDueDate,
    reminderDate,
    setReminderDate,
    repeatInterval,
    setRepeatInterval,
    handleSubmit,
}: TaskActionButtonsProps) => {
    return (
        <div className="flex mx-4 h-12 items-center">
            <div className="flex gap-2 text-gray-600">
                <DueDateButton dueDate={dueDate} setDueDate={setDueDate} />
                <ReminderDateButton
                    reminderDate={reminderDate}
                    setReminderDate={setReminderDate}
                />
                <RepeatIntervalButton
                    repeatInterval={repeatInterval}
                    setRepeatInterval={setRepeatInterval}
                />
            </div>
            <button
                onClick={handleSubmit}
                className="bg-white text-xs text-gray-500 border border-gray-200 h-8 px-2 ml-auto"
            >
                Add
            </button>
        </div>
    );
};

export default TaskActionButtons;
