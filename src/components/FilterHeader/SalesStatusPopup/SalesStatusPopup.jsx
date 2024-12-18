import React from "react";
import { useStyles } from "../styles";

const SalesStatusPopup = ({ activeStatus, setActiveStatus }) => {
    const classes = useStyles();

    const statuses = [
        "Скоро у продажу",
        "Передпродаж",
        "Новий запуск",
        "У продажу",
        "Продається швидко",
        "Останні одиниці",
        "Розпродано",
        "Новий етап",
    ];

    const toggleStatus = (status) => {
        setActiveStatus((prev) =>
            prev.includes(status)
                ? prev.filter((item) => item !== status)
                : [...prev, status]
        );
    };

    return (
        <div className={"lContent"}>
            {statuses.map((status) => (
                <button
                    key={status}
                    className={`lBtn ${
                        activeStatus.includes(status) ? classes.active : ""
                    }`}
                    onClick={() => toggleStatus(status)}
                >
                    {status}
                </button>
            ))}
        </div>
    );
};

export default SalesStatusPopup;
