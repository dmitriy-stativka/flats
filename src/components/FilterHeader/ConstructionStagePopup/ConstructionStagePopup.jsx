import React from "react";
import { useStyles } from "../styles";

const ConstructionStagePopup = ({ activeStages, setActiveStages }) => {
    const classes = useStyles();

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
                        activeStages.includes(stage) ? classes.active : ""
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
