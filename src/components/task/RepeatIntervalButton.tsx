import { Dispatch, SetStateAction } from "react";
import RepeatIcon from "../icons/RepeatIcon";
import { useVisible } from "../../hooks/useVisible";
import RepeatIntervalContextMenu from "../menus/RepeatIntervalContextMenu";

interface RepeatIntervalButtonProps {
    repeatInterval: string | null;
    setRepeatInterval: Dispatch<SetStateAction<string | null>>;
}

const RepeatIntervalButton = ({
    repeatInterval,
    setRepeatInterval,
}: RepeatIntervalButtonProps) => {
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
                    repeatInterval &&
                    "bg-white px-2 rounded border border-gray-200"
                }`}
            >
                <RepeatIcon />
                {repeatInterval && (
                    <span className="capitalize">{repeatInterval}</span>
                )}
            </button>
            {isContextMenuVisible && (
                <RepeatIntervalContextMenu
                    label="Repeat"
                    repeatInterval={repeatInterval}
                    setRepeatInterval={setRepeatInterval}
                    position={{ x: "-50%", y: "100%" }}
                    onClose={hideContextMenu}
                />
            )}
        </div>
    );
};

export default RepeatIntervalButton;
