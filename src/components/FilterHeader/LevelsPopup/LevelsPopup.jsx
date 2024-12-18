import React from "react";

const LevelsPopup = ({ activeLevels, setActiveLevels }) => {
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
                        activeLevels.includes(level) ? "active" : ""
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
