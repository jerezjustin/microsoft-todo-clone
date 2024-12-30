import { Link } from "react-router";
import GridDotsIcon from "../icons/GridDotsIcon";
import SearchBar from "../navigation/SearchBar";
import NavbarIconButton from "../navigation/NavbarIconButton";
import SettingsIcon from "../icons/SettingsIcon";
import QuestionMarkIcon from "../icons/QuestionMarkIcon";
import MegaphoneIcon from "../icons/MegaphoneIcon";

const Navbar = () => {
    return (
        <nav className="flex text-white bg-primary items-center h-12">
            <NavbarIconButton icon={<GridDotsIcon size={22} />} />

            <Link to="/" className="leading-12 px-2 font-bold hover:underline">
                To Do
            </Link>

            <div className="flex flex-1 justify-center items-center h-full">
                <SearchBar />
            </div>

            <NavbarIconButton icon={<SettingsIcon size={20} />} />
            <NavbarIconButton icon={<QuestionMarkIcon size={20} />} />
            <NavbarIconButton icon={<MegaphoneIcon size={20} />} />
        </nav>
    );
};

export default Navbar;
