import { Dispatch, SetStateAction } from "react";
import FilledStarIcon from "../icons/FilledStarIcon ";
import StarIcon from "../icons/StarIcon";

interface DetailsSidebarImportantButtonProps {
    isImportant: boolean;
    setIsImportant: Dispatch<SetStateAction<boolean>>;
}

const DetailsSidebarImportantButton = ({
    isImportant,
    setIsImportant,
}: DetailsSidebarImportantButtonProps) => {
    return (
        <button
            className="text-primary"
            onClick={() => setIsImportant(!isImportant)}
        >
            {isImportant ? <FilledStarIcon /> : <StarIcon />}
        </button>
    );
};

export default DetailsSidebarImportantButton;
