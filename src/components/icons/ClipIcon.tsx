import { IconProps } from "../../types";

export default function ClipIcon({
    size = 20,
    color = "currentColor",
    className,
}: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M4.83 10.48l5.65-5.65a3 3 0 014.25 4.24L8 15.8a1.5 1.5 0 01-2.12-2.12l6-6.01a.5.5 0 10-.7-.71l-6 6.01a2.5 2.5 0 003.53 3.54l6.71-6.72a4 4 0 10-5.65-5.66L4.12 9.78a.5.5 0 00.7.7z"
                fill={color}
            ></path>
        </svg>
    );
}
