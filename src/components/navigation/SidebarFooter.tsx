import React from "react";
import MailIcon from "../icons/MailIcon";
import CalendarIcon from "../icons/CalendarIcon";
import UserGroupIcon from "../icons/UserGroupIcon";
import ClipIcon from "../icons/ClipIcon";
import ToDoIcon from "../icons/ToDoIcon";
import SidebarFooterButton from "./SidebarFooterButton";

type FooterLink = {
    key: string;
    icon: React.ReactElement;
};

const footerLinks: FooterLink[] = [
    { key: "MailIcon", icon: React.createElement(MailIcon) },
    { key: "CalendarIcon", icon: React.createElement(CalendarIcon) },
    { key: "UserGroupIcon", icon: React.createElement(UserGroupIcon) },
    { key: "ClipIcon", icon: React.createElement(ClipIcon) },
    {
        key: "ToDoIcon",
        icon: React.createElement(ToDoIcon, { className: "text-primary" }),
    },
];

const SidebarFooter = () => {
    return (
        <div className="flex mt-auto">
            {footerLinks.map((footerLink) => (
                <SidebarFooterButton key={footerLink.key}>
                    {footerLink.icon}
                </SidebarFooterButton>
            ))}
        </div>
    );
};

export default SidebarFooter;
