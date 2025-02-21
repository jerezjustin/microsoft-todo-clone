import { IconProps } from "../../types";

export default function CalendarDayIcon({
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
                d="M14.5 3A2.5 2.5 0 0117 5.5v9a2.5 2.5 0 01-2.5 2.5h-3v-1h3c.83 0 1.5-.67 1.5-1.5V7H4v7.5c0 .83.67 1.5 1.5 1.5h3v1h-3A2.5 2.5 0 013 14.5v-9A2.5 2.5 0 015.5 3h9zm0 1h-9C4.67 4 4 4.67 4 5.5V6h12v-.5c0-.83-.67-1.5-1.5-1.5zM11 9a1 1 0 11-2 0 1 1 0 012 0zm.88 5.07a.5.5 0 01-.7.06l-.68-.56v3.93a.5.5 0 11-1 0v-3.93l-.68.56a.5.5 0 01-.64-.76l1.5-1.25a.5.5 0 01.64 0l1.5 1.25c.21.17.24.49.06.7z"
                fill={color}
            ></path>
        </svg>
    );
}
