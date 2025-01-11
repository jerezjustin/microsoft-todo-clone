import { ReactElement } from "react";

interface DetailsSidebarButtonProps {
    icon: ReactElement;
    label: string;
    value?: Date | string | null;
    className?: string;
    onClick?: () => void;
}

const DetailsSidebarButton = ({
    icon,
    label,
    value = null,
    className = "",
    onClick,
}: DetailsSidebarButtonProps) => {
    return (
        <button
            className={`flex w-full text-sm text-gray-500 items-center p-4 hover:bg-gray-100 ${className}`}
            onClick={onClick}
        >
            {icon}
            <span className="mx-4">{label}</span>
        </button>
    );
};

export default DetailsSidebarButton;
