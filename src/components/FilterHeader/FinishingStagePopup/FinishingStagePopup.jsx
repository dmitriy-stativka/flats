import React from "react";

const FinishingStagePopup = ({ activeFinishes, setActiveFinishes }) => {
    const finishes = ["Без ремонту", "З ремонтом"];

    const toggleFinish = (finish) => {
        setActiveFinishes((prev) =>
            prev.includes(finish)
                ? prev.filter((item) => item !== finish)
                : [...prev, finish]
        );
    };

    return (
        <div className={"lContent"}>
            {finishes.map((finish) => (
                <button
                    key={finish}
                    className={`lBtn ${
                        activeFinishes.includes(finish) ? "active" : ""
                    }`}
                    onClick={() => toggleFinish(finish)}
                >
                    {finish}
                </button>
            ))}
        </div>
    );
};

export default FinishingStagePopup;
