import React from "react";
import { useStyles } from "../styles";

const LevelsPopup = ({ activeLevels, setActiveLevels }) => {
    const classes = useStyles();

    const levels = ["Однорівневі", "Дворівневі"];

    const toggleLevel = (level) => {
        setActiveLevels((prev) =>
            prev.includes(level)
                ? prev.filter((item) => item !== level)
                : [...prev, level]
        );
    };

    return (
        <div className={"lContent"}>
            {levels.map((level) => (
                <button
                    key={level}
                    className={`lBtn ${
                        activeLevels.includes(level) ? classes.active : ""
                    }`}
                    onClick={() => toggleLevel(level)}
                >
                    {level}
                </button>
            ))}
        </div>
    );
};

export default LevelsPopup;
