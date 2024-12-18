import React from "react";
import { useStyles } from "../styles";

import { ReactComponent as BusinessIcon } from "./icons/business.svg";
import { ReactComponent as ComfortIcon } from "./icons/comfort.svg";
import { ReactComponent as ComfortPlusIcon } from "./icons/comfortPlus.svg";
import { ReactComponent as ClubHouseIcon } from "./icons/clubhouse.svg";
import { ReactComponent as PremiumIcon } from "./icons/premium.svg";

const ClassFilterPopup = ({ activeClasses, setActiveClasses }) => {
    const classes = useStyles();

    const options = [
        { label: "Бізнес-клас", icon: <BusinessIcon /> },
        { label: "Комфорт", icon: <ComfortIcon /> },
        { label: "Комфорт+", icon: <ComfortPlusIcon /> },
        { label: "Клубний дім", icon: <ClubHouseIcon /> },
        { label: "Преміум", icon: <PremiumIcon /> },
    ];

    const toggleOption = (option) => {
        setActiveClasses((prev) =>
            prev.includes(option)
                ? prev.filter((item) => item !== option)
                : [...prev, option]
        );
    };

    return (
        <div className={"lContent"}>
            {options.map(({ label, icon }) => (
                <button
                    key={label}
                    className={`lBtn ${
                        activeClasses.includes(label) ? classes.active : ""
                    }`}
                    onClick={() => toggleOption(label)}
                >
                    {icon}
                    <span>{label}</span>
                </button>
            ))}
        </div>
    );
};

export default ClassFilterPopup;
