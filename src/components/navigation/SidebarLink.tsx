import { ReactElement } from "react";
import { Link } from "react-router";

interface SidebarLinkProps {
    to: string;
    icon?: ReactElement | string;
    active?: boolean;
    onClick?: () => void;
    children: string;
}

const SidebarLink = ({
    to,
    icon,
    active = false,
    onClick,
    children,
}: SidebarLinkProps) => {
    return (
        <Link
            to={to}
            onClick={onClick}
            className={`flex w-full items-center h-11 px-6 hover:bg-gray-100 ${
                active
                    ? "font-semibold border-l-2 border-primary bg-primary/5"
                    : null
            }`}
        >
            {icon}
            <span className="ml-4 text-sm">{children}</span>
        </Link>
    );
};

export default SidebarLink;
