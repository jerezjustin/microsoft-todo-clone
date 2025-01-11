import { ReactElement } from "react";

interface ContextMenuButtonProps {
    label: string;
    icon: ReactElement;
    desc?: string;
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const ContextMenuButton = ({
    label,
    icon,
    desc,
    className,
    onClick,
    disabled = false,
}: ContextMenuButtonProps) => {
    return (
        <button
            onClick={onClick}
            className={`flex w-full text-gray-700 items-center gap-2 h-9 px-4 hover:bg-gray-100 ${className} ${
                disabled && "cursor-not-allowed"
            }`}
        >
            {icon}
            <span className="text-start px-1">{label}</span>
            {desc && (
                <span className="w-max ml-auto text-gray-500">{desc}</span>
            )}
        </button>
    );
};

export default ContextMenuButton;
