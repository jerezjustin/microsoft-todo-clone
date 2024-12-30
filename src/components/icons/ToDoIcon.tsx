import { IconProps } from "../../types";

export default function ToDoIcon({
    size = 20,
    color = "currentColor",
    className,
}: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            fill={color}
        >
            <defs>
                <style>
                    {`.a{fill:none;stroke:${color};stroke-linecap:round;stroke-linejoin:round;stroke-width:2.35;}`}
                </style>
            </defs>
            <path
                className="a"
                d="M12.66,16.49l7.5,7.5L35.38,8.77,43,16.39,20.17,39.23,5,24.06Z"
            />
            <line className="a" x1="12.54" y1="31.61" x2="20.16" y2="23.99" />
        </svg>
    );
}
