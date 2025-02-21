import { IconProps } from "../../types";

export default function CalendarWeekdaysIcon({
    size = 20,
    color = "currentColor",
    className,
}: IconProps) {
    return (
        <svg
            className={className}
            fill={color}
            aria-hidden="true"
            width={size}
            height={size}
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
        >
            <path
                d="M6.5 6a.5.5 0 00-.5.5v3c0 .28.22.5.5.5h7a.5.5 0 00.5-.5v-3a.5.5 0 00-.5-.5h-7zM7 9V7h6v2H7zm10-3.5A2.5 2.5 0 0014.5 3h-9A2.5 2.5 0 003 5.5v9A2.5 2.5 0 005.5 17h9a2.5 2.5 0 002.5-2.5v-9zM5.5 4h9c.83 0 1.5.67 1.5 1.5v9c0 .83-.67 1.5-1.5 1.5h-9A1.5 1.5 0 014 14.5v-9C4 4.67 4.67 4 5.5 4z"
                fill={color}
            ></path>
        </svg>
    );
}
