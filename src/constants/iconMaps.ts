import React from "react";
import BarsIcon from "../components/icons/BarsIcon";
import CompletedCheckmarkCircleIcon from "../components/icons/CompletedCheckmarkCircleIcon";
import HomeIcon from "../components/icons/HomeIcon";
import StackIcon from "../components/icons/StackIcon";
import StarIcon from "../components/icons/StartIcon";
import SunIcon from "../components/icons/SunIcon";
import { IconName } from "../enums";

const iconMap: Record<IconName, (size?: number) => React.ReactElement> = {
    [IconName.Bars]: (size = 20) =>
        React.createElement(BarsIcon, { size: size }),
    [IconName.CompletedCheckMarkCircle]: (size = 20) =>
        React.createElement(CompletedCheckmarkCircleIcon, { size: size }),
    [IconName.Home]: (size = 20) =>
        React.createElement(HomeIcon, { size: size }),
    [IconName.Star]: (size = 20) =>
        React.createElement(StarIcon, { size: size }),
    [IconName.Stack]: (size = 20) =>
        React.createElement(StackIcon, { size: size }),
    [IconName.Sun]: (size = 20) => React.createElement(SunIcon, { size: size }),
};

export default iconMap;
