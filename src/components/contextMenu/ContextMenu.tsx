import React, { ReactNode, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import ContextMenuDivider from "./ContextMenuDivider";

export interface ContextMenuProps {
    position: { x: number | string; y: number | string };
    onClose: () => void;
    children: ReactNode;
    label?: string;
    className?: string;
    minusTopNavbarHeight?: true;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ ...props }) => {
    const TOP_NAVBAR_HEIGHT = 48;

    const menuRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

    const resolveMenuYPosition = () => {
        let menuYPosition = props.position.y;

        if (typeof menuYPosition === "number" && props.minusTopNavbarHeight) {
            menuYPosition -= TOP_NAVBAR_HEIGHT;
        }

        return menuYPosition;
    };

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleAnimationEnd = () => {
        if (!isVisible) {
            props.onClose();
        }
    };

    useClickOutside(menuRef, handleClose);

    return (
        <div
            ref={menuRef}
            className={`absolute min-w-[200px] w-max bg-white shadow-lg text-sm py-1.5 z-50 ${
                isVisible
                    ? "animate-slide-down opacity-100"
                    : "animate-slide-up opacity-0"
            } ${props.className}`}
            style={{
                top: resolveMenuYPosition(),
                left: props.position.x,
            }}
            onAnimationEnd={handleAnimationEnd}
        >
            {props.label && (
                <>
                    <h4 className="text-center text-md font-semibold p-2 pb-1 cursor-default">
                        {props.label}
                    </h4>
                    <ContextMenuDivider />
                </>
            )}
            {props.children}
        </div>
    );
};

export default ContextMenu;
