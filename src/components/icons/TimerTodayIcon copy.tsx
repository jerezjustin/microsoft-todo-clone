import { IconProps } from "../../types";

export default function TimerForwardIcon({
    size = 20,
    color = "currentColor",
    className,
}: IconProps) {
    return (
        <svg
            className={className}
            width={size}
            height={size}
            viewBox="0 0 20 20"
            fill={color}
            xmlns="http://www.w3.org/2000/svg"
            focusable="false"
        >
            <path
                d="M17 10C17 13.7296 14.0832 16.778 10.4062 16.9884C10.2229 17.349 10.0011 17.6867 9.7461 17.996C9.83041 17.9987 9.91505 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.0849 2.00132 10.1696 2.00395 10.2539C2.3133 9.99891 2.65099 9.77706 3.01159 9.5938C3.22197 5.91685 6.27035 3 10 3C13.866 3 17 6.13401 17 10Z"
                fill={color}
            ></path>
            <path
                d="M9.5 5C9.22386 5 9 5.22386 9 5.5V10.5C9 10.7761 9.22386 11 9.5 11H12.5C12.7761 11 13 10.7761 13 10.5C13 10.2239 12.7761 10 12.5 10H10V5.5C10 5.22386 9.77614 5 9.5 5Z"
                fill={color}
            ></path>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.5 19C7.98528 19 10 16.9853 10 14.5C10 12.0147 7.98528 10 5.5 10C3.01472 10 1 12.0147 1 14.5C1 16.9853 3.01472 19 5.5 19ZM6.68198 16.6391L8.44975 14.8713C8.64501 14.6761 8.64501 14.3595 8.44975 14.1642L6.68198 12.3964C6.48672 12.2012 6.17014 12.2012 5.97487 12.3964C5.77961 12.5917 5.77961 12.9083 5.97487 13.1036L7.38909 14.5178L5.97487 15.932C5.77961 16.1272 5.77961 16.4438 5.97487 16.6391C6.17014 16.8343 6.48672 16.8343 6.68198 16.6391ZM4.56066 14.5178L3.14645 13.1036C2.95118 12.9083 2.95118 12.5917 3.14645 12.3964C3.34171 12.2012 3.65829 12.2012 3.85355 12.3964L5.62132 14.1642C5.81658 14.3595 5.81658 14.6761 5.62132 14.8713L3.85355 16.6391C3.65829 16.8343 3.34171 16.8343 3.14645 16.6391C2.95118 16.4438 2.95118 16.1272 3.14645 15.932L4.56066 14.5178Z"
                fill={color}
            ></path>
        </svg>
    );
}
