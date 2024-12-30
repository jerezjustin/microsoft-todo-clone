import React, { ReactNode, useEffect, useRef, useState } from "react";

interface EditableLabelProps {
    children: ReactNode;
    initialValue: string;
    isEditing?: boolean;
    setIsEditing?: (value: boolean) => void;
    onUpdate: (newValue: string) => void;
    containerStyles?: string;
    inputStyles?: string;
}

const EditableLabel: React.FC<EditableLabelProps> = ({
    children,
    initialValue,
    isEditing = false,
    setIsEditing,
    onUpdate,
    containerStyles,
    inputStyles,
}) => {
    const [editing, setEditing] = useState(isEditing);
    const [value, setValue] = useState(initialValue);
    const inputRef = useRef<HTMLInputElement>(null);

    const handleDoubleClick = () => {
        setEditing(true);
    };

    const handleBlur = () => {
        setEditing(false);
        setIsEditing?.(false);

        if (value.trim() !== initialValue) {
            onUpdate(value.trim());
        } else {
            setValue(initialValue);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const expectedKeyPress = "Enter";
        if (e.key === expectedKeyPress) {
            setEditing(false);
            setIsEditing?.(false);

            if (value.trim() !== initialValue) {
                onUpdate(value.trim());
            }
        }
    };

    useEffect(() => {
        setValue(initialValue);
        setEditing(isEditing);
    }, [initialValue, isEditing]);

    return (
        <div className={containerStyles} onDoubleClick={handleDoubleClick}>
            {editing ? (
                <input
                    className={inputStyles}
                    ref={inputRef}
                    value={value}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    autoFocus
                />
            ) : (
                children
            )}
        </div>
    );
};

export default EditableLabel;
