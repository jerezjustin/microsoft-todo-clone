import React, { ReactNode, useRef, useState } from "react";
import useClickOutside from "../../hooks/useClickOutside";

export interface ContextMenuProps {
    position: { x: number; y: number };
    onClose: () => void;
    children: ReactNode;
    className?: string;
}

const ContextMenu: React.FC<ContextMenuProps> = ({
    className = "w-[200px] bg-white shadow-lg text-sm py-1.5 z-50",
    ...props
}) => {
    const TOP_NAVBAR_HEIGHT = 48;

    const menuRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(true);

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
            className={`absolute ${
                isVisible
                    ? "animate-slide-down opacity-100"
                    : "animate-slide-up opacity-0"
            } ${className}`}
            style={{
                top: props.position.y - TOP_NAVBAR_HEIGHT,
                left: props.position.x,
            }}
            onAnimationEnd={handleAnimationEnd}
        >
            {props.children}
        </div>
    );
};

export default ContextMenu;
