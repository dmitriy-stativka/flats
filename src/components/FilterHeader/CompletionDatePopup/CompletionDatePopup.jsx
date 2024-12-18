import React from "react";

const CompletionDatePopup = ({ activeDates, setActiveDates }) => {
    const dates = [
        "I квартал 2025",
        "II квартал 2025",
        "III квартал 2025",
        "IV квартал 2025",
        "I квартал 2026",
        "II квартал 2026",
        "III квартал 2026",
    ];

    const toggleDate = (date) => {
        setActiveDates((prev) =>
            prev.includes(date)
                ? prev.filter((item) => item !== date)
                : [...prev, date]
        );
    };

    return (
        <div className={"lContent"}>
            {dates.map((date) => (
                <button
                    key={date}
                    className={`lBtn ${
                        activeDates.includes(date) ? "active" : ""
                    }`}
                    onClick={() => toggleDate(date)}
                >
                    {date}
                </button>
            ))}
        </div>
    );
};

export default CompletionDatePopup;
