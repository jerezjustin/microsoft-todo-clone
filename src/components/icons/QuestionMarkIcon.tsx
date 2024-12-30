import { IconProps } from "../../types";

export default function QuestionMarkIcon({
    size = 20,
    color = "currentColor",
    className,
}: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            fill={color}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M12 4C9.236 4 7 6.236 7 9a.75.75 0 0 0 1.5 0c0-1.936 1.564-3.5 3.5-3.5s3.5 1.564 3.5 3.5c0 .852-.222 1.42-.529 1.86-.324.463-.767.823-1.302 1.232l-.138.105c-1.01.768-2.281 1.734-2.281 3.803v.25a.75.75 0 0 0 1.5 0V16c0-1.317.714-1.863 1.785-2.682l.046-.035c.527-.403 1.147-.887 1.62-1.564.49-.701.799-1.57.799-2.719 0-2.764-2.236-5-5-5ZM12 21a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                fill={color}
            ></path>
        </svg>
    );
}
