import { useDispatch, useSelector } from "react-redux";
import GroupAddIcon from "../icons/GroupAddIcon";
import PlusIcon from "../icons/PlusIcon";
import NavbarIconButton from "./NavbarIconButton";
import { AppDispatch, RootState } from "../../store";
import { List } from "../../types";
import { saveList } from "../../store/lists/listsActions";
import React, { useState } from "react";
import { IconName } from "../../enums";
import { useNavigate } from "react-router";
import {
    generateUniqueName,
    getRandomAlphanumericString,
} from "../../helpers/listsHelper";

const SidebarAddListButton = () => {
    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const [listName, setListName] = useState<string>("");
    const lists = useSelector((state: RootState) => state.lists.lists);

    const handleSubmit = () => {
        const name = generateUniqueName(
            listName.trim() !== "" ? listName.trim() : undefined,
            lists
        );

        const newList: List = {
            id: getRandomAlphanumericString(32),
            name: name,
            icon: IconName.Bars,
            tasks: [],
            type: "dynamic",
        };

        dispatch(saveList(newList));
        setListName("");

        navigate(`/tasks/${newList.id}`);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        const expectedKeyPress = "Enter";
        if (e.key === expectedKeyPress) {
            e.preventDefault();
            handleSubmit();
            (e.target as HTMLInputElement).blur();
        }
    };

    return (
        <div className="flex items-center h-11 w-sidebar lg:w-sidebar-lg">
            {/* Add List Input */}
            <div className="flex w-auto lg:flex-1 items-center hover:bg-gray-100 text-primary h-full pl-6">
                <PlusIcon />
                <input
                    id="list-name"
                    name="list-name"
                    placeholder="New List"
                    value={listName}
                    onChange={(e) => setListName(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="pl-4 w-full bg-transparent text-sm text-black placeholder:text-primary placeholder:focus:text-gray-400 outline-none border-none"
                />
            </div>

            {/* Add Group Button */}
            <NavbarIconButton
                icon={<GroupAddIcon size={20} />}
                className="hover:!bg-gray-100 !w-16 text-primary px-6"
            />
        </div>
    );
};

export default SidebarAddListButton;
