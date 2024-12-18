import React from "react";

const ConstructionStagePopup = ({ activeStages, setActiveStages }) => {
    const stages = [
        "В проєкті",
        "Будується",
        "Будівництво завершено",
        "Введено в експлуатацію",
        "Готове до заселення",
    ];

    const toggleStage = (stage) => {
        setActiveStages((prev) =>
            prev.includes(stage)
                ? prev.filter((item) => item !== stage)
                : [...prev, stage]
        );
    };

    return (
        <div className={"lContent"}>
            {stages.map((stage) => (
                <button
                    key={stage}
                    className={`lBtn ${
                        activeStages.includes(stage) ? "active" : ""
                    }`}
                    onClick={() => toggleStage(stage)}
                >
                    {stage}
                </button>
            ))}
        </div>
    );
};

export default ConstructionStagePopup;
