import { ReactElement } from "react";

interface SidebarFooterProps {
    children: ReactElement;
}

const SidebarFooterButton = ({ children }: SidebarFooterProps) => {
    return (
        <button className="flex flex-1 items-center justify-center h-12 hover:bg-gray-100">
            {children}
        </button>
    );
};

export default SidebarFooterButton;
