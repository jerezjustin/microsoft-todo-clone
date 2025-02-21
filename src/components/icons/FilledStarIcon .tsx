import { IconProps } from "../../types";

export default function FilledStarIcon({
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
            viewBox="0 0 24 24"
            className={className}
        >
            <path
                d="M10.79 3.1c.5-1 1.92-1 2.42 0l2.36 4.78 5.27.77c1.1.16 1.55 1.52.75 2.3l-3.82 3.72.9 5.25a1.35 1.35 0 01-1.96 1.42L12 18.86l-4.72 2.48a1.35 1.35 0 01-1.96-1.42l.9-5.25-3.81-3.72c-.8-.78-.36-2.14.75-2.3l5.27-.77 2.36-4.78z"
                fill="currentColor"
            ></path>
        </svg>
    );
}
