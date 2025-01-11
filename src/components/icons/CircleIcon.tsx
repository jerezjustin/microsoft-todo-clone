import { IconProps } from "../../types";

export default function CircleIcon({
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
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 3.5a8.5 8.5 0 100 17 8.5 8.5 0 000-17zM2 12a10 10 0 1120 0 10 10 0 01-20 0z"
                fill={color}
            ></path>
        </svg>
    );
}
