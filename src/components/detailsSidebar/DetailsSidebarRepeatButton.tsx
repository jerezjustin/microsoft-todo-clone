import { Dispatch, SetStateAction } from "react";
import { useVisible } from "../../hooks/useVisible";
import RepeatIntervalContextMenu from "../menus/RepeatIntervalContextMenu";
import RepeatIcon from "../icons/RepeatIcon";
import CloseIcon from "../icons/CloseIcon";

interface DetailsSidebarRepeatButtonProps {
    repeatInterval: string | null;
    setRepeatInterval: Dispatch<SetStateAction<string | null>>;
}

const DetailsSidebarRepeatButton = ({
    repeatInterval,
    setRepeatInterval,
}: DetailsSidebarRepeatButtonProps) => {
    const {
        visible: isContextMenuVisible,
        show: showContextMenu,
        hide: hideContextMenu,
    } = useVisible();

    return (
        <div className="relative">
            <div
                className={`flex w-full text-sm text-gray-500 items-center hover:bg-gray-100 group ${
                    repeatInterval && "text-primary"
                }`}
            >
                <button
                    className="flex flex-1 p-4 pr-0"
                    onClick={showContextMenu}
                >
                    <RepeatIcon />
                    <span className="mx-4 w-full text-left capitalize">
                        {repeatInterval || "Repeat"}
                    </span>
                </button>

                {repeatInterval && (
                    <button
                        className="flex items-center justify-center w-5 h-5 mr-4 opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => setRepeatInterval(null)}
                    >
                        <CloseIcon size={20} />
                    </button>
                )}
            </div>

            {isContextMenuVisible && (
                <RepeatIntervalContextMenu
                    label="Due"
                    repeatInterval={repeatInterval}
                    setRepeatInterval={setRepeatInterval}
                    position={{ x: "25%", y: "100%" }}
                    onClose={hideContextMenu}
                />
            )}
        </div>
    );
};

export default DetailsSidebarRepeatButton;
