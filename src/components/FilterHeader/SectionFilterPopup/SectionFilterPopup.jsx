import React from "react";

const SectionFilterPopup = ({ activeSections, setActiveSections }) => {
    const sections = ["А", "Б", "В", "Г", "Д12", "С1"];

    const toggleSection = (section) => {
        setActiveSections((prev) =>
            prev.includes(section)
                ? prev.filter((item) => item !== section)
                : [...prev, section]
        );
    };

    return (
        <div className={"lContent"}>
            {sections.map((section) => (
                <button
                    key={section}
                    className={`lBtn ${
                        activeSections.includes(section) ? "active" : ""
                    }`}
                    onClick={() => toggleSection(section)}
                >
                    {section}
                </button>
            ))}
        </div>
    );
};

export default SectionFilterPopup;
