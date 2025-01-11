import { IconProps } from "../../types";

export default function CompletedCheckmarkFilledCircleIcon({
    size = 20,
    color = "currentColor",
    className,
}: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 2a10 10 0 110 20 10 10 0 010-20zm3.22 6.97l-4.47 4.47-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5c.3.3.77.3 1.06 0l5-5a.75.75 0 10-1.06-1.06z"
                fill={color}
            ></path>
        </svg>
    );
}
