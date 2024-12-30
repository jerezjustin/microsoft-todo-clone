import MagnifyingGlassIcon from "../icons/MagnifyingGlassIcon";

const SearchBar = () => {
    return (
        <div className="flex items-center flex-1 p-2 rounded-[4px] max-w-96 h-8 bg-white cursor-pointer">
            <MagnifyingGlassIcon className="text-primary" size={20} />
        </div>
    );
};

export default SearchBar;
