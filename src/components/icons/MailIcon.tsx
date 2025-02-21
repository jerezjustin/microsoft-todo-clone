import { IconProps } from "../../types";

export default function MailIcon({
    size = 20,
    color = "currentColor",
    className,
}: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            className={className}
        >
            <path
                d="M15.5 4A2.5 2.5 0 0118 6.5v8a2.5 2.5 0 01-2.5 2.5h-11A2.5 2.5 0 012 14.5v-8A2.5 2.5 0 014.5 4h11zM17 7.96l-6.75 3.97a.5.5 0 01-.42.04l-.08-.04L3 7.96v6.54c0 .83.67 1.5 1.5 1.5h11c.83 0 1.5-.67 1.5-1.5V7.96zM15.5 5h-11C3.67 5 3 5.67 3 6.5v.3l7 4.12 7-4.12v-.3c0-.83-.67-1.5-1.5-1.5z"
                fill={color}
            ></path>
        </svg>
    );
}
