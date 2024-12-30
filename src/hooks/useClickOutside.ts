import { RefObject, useEffect } from "react";

const useClickOutside = (
    ref: RefObject<HTMLElement | undefined>,
    callback: () => void
) => {
    const handleClick = (event: MouseEvent) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClick);

        return () => {
            document.removeEventListener("mousedown", handleClick);
        };
    });
};

export default useClickOutside;
