import { IconProps } from "../../types";

export default function GroupAddIcon({
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
            viewBox="0 0 20 20"
            className={className}
        >
            <path
                d="M14.5 3C15.8807 3 17 4.11929 17 5.5V9.59971C16.6832 9.43777 16.3486 9.30564 16 9.20703V5.5C16 4.67157 15.3284 4 14.5 4H5.5C4.67157 4 4 4.67157 4 5.5V14.5C4 15.3284 4.67157 16 5.5 16H9.20703C9.30564 16.3486 9.43777 16.6832 9.59971 17H5.5C4.11929 17 3 15.8807 3 14.5V5.5C3 4.11929 4.11929 3 5.5 3H14.5Z"
                fill={color}
            ></path>
            <path
                d="M6.5 6C6.74546 6 6.94961 6.17688 6.99194 6.41012L7 6.5V13.5C7 13.7761 6.77614 14 6.5 14C6.25454 14 6.05039 13.8231 6.00806 13.5899L6 13.5V6.5C6 6.22386 6.22386 6 6.5 6Z"
                fill={color}
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 14.5C19 16.9853 16.9853 19 14.5 19C12.0147 19 10 16.9853 10 14.5C10 12.0147 12.0147 10 14.5 10C16.9853 10 19 12.0147 19 14.5ZM15 12.5C15 12.2239 14.7761 12 14.5 12C14.2239 12 14 12.2239 14 12.5V14H12.5C12.2239 14 12 14.2239 12 14.5C12 14.7761 12.2239 15 12.5 15H14V16.5C14 16.7761 14.2239 17 14.5 17C14.7761 17 15 16.7761 15 16.5V15H16.5C16.7761 15 17 14.7761 17 14.5C17 14.2239 16.7761 14 16.5 14H15V12.5Z"
                fill={color}
            ></path>
        </svg>
    );
}
