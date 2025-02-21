import { IconProps } from "../../types";

export default function SortIcon({
    size = 20,
    color = "currentColor",
    className,
}: IconProps) {
    return (
        <svg
            className={className}
            fill={color}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M2.35 7.35L5 4.71V16.5a.5.5 0 001 0V4.7l2.65 2.65a.5.5 0 00.7-.7l-3.49-3.5A.5.5 0 005.5 3a.5.5 0 00-.39.18L1.65 6.65a.5.5 0 10.7.7zm15.3 5.3L15 15.29V3.5a.5.5 0 00-1 0v11.8l-2.65-2.65a.5.5 0 00-.7.7l3.49 3.5a.5.5 0 00.36.15.5.5 0 00.39-.18l3.46-3.47a.5.5 0 10-.7-.7z"
                fill={color}
            ></path>
        </svg>
    );
}
