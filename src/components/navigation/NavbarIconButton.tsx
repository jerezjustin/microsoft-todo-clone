import { ReactElement } from "react";

interface NavbarIconProps {
    icon: ReactElement;
    className?: string;
    onClick?: () => void;
}

const NavbarIconButton = ({ icon, className, onClick }: NavbarIconProps) => {
    const mergedClasses = `${className} grid place-content-center w-[35px] sm:w-12 h-full hover:bg-primary-dark`;

    return (
        <button className={mergedClasses} onClick={onClick}>
            {icon}
        </button>
    );
};

export default NavbarIconButton;
