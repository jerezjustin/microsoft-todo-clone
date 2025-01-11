interface ContextMenuDividerProps {
    className?: string | null;
}

const ContextMenuDivider = ({ className }: ContextMenuDividerProps) => {
    return (
        <div className={`my-2 ${className}`}>
            <hr />
        </div>
    );
};

export default ContextMenuDivider;
