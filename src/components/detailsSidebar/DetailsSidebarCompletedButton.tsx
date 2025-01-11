import { Dispatch, SetStateAction } from "react";
import CompletedCheckmarkFilledCircleIcon from "../icons/CompletedCheckmarkFilledCircleIcon";
import CircleIcon from "../icons/CircleIcon";

interface DetailsSIdebarCompletedButtonProps {
    isCompleted: boolean;
    setIsCompleted: Dispatch<SetStateAction<boolean>>;
}

const DetailsSIdebarCompletedButton = ({
    isCompleted,
    setIsCompleted,
}: DetailsSIdebarCompletedButtonProps) => {
    return (
        <button
            className="text-primary"
            onClick={() => setIsCompleted(!isCompleted)}
        >
            {isCompleted ? (
                <CompletedCheckmarkFilledCircleIcon />
            ) : (
                <CircleIcon />
            )}
        </button>
    );
};

export default DetailsSIdebarCompletedButton;
