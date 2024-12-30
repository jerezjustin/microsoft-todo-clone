import { IconProps } from "../../types";

const MegaphoneIcon = ({
    size = 20,
    color = "currentColor",
    className,
}: IconProps) => {
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
                d="M21.907 5.622c.062.208.093.424.093.641V17.74a2.25 2.25 0 0 1-2.891 2.156l-5.514-1.64a4.002 4.002 0 0 1-7.59-1.556L6 16.5l-.001-.5-2.39-.711A2.25 2.25 0 0 1 2 13.131V10.87a2.25 2.25 0 0 1 1.61-2.156l15.5-4.606a2.25 2.25 0 0 1 2.797 1.515ZM7.499 16.445l.001.054a2.5 2.5 0 0 0 4.624 1.321l-4.625-1.375Zm12.037-10.9-15.5 4.605a.75.75 0 0 0-.536.72v2.261a.75.75 0 0 0 .536.72l15.5 4.607a.75.75 0 0 0 .964-.72V6.264a.75.75 0 0 0-.964-.719Z"
                fill={color}
            ></path>
        </svg>
    );
};

export default MegaphoneIcon;
