import { IconProps } from "../../types";

export default function OrderIcon({
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
                d="M12.5 15a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H12.5zm5-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-.98l.1-.01H17.5zm-4-6a.5.5 0 01.09 1H2.5a.5.5 0 01-.09-1H13.5z"
                fill={color}
            ></path>
        </svg>
    );
}
