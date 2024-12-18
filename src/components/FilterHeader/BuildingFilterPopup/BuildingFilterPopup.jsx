import React from "react";
import { useStyles } from "./styles";

const BuildingFilterPopup = ({
    activeBuildings,
    setActiveBuildings,
    popupRef,
}) => {
    const classes = useStyles();

    // Генерация зданий (от 1 до 11)
    const buildings = Array.from({ length: 11 }, (_, i) => i + 1);

    const toggleBuilding = (building) => {
        setActiveBuildings((prev) =>
            prev.includes(building)
                ? prev.filter((item) => item !== building)
                : [...prev, building]
        );
    };

    return (
        <div
            className={classes.checkboxItemList}
            ref={popupRef}
            onClick={(e) => e.stopPropagation()}
        >
            {buildings.map((building) => (
                <div key={building} className={classes.checkboxItem}>
                    <input
                        type="checkbox"
                        id={`building-${building}`}
                        className="lCheckbox"
                        checked={activeBuildings.includes(building)}
                        onChange={() => toggleBuilding(building)}
                    />
                    <label htmlFor={`building-${building}`}>{building}</label>
                </div>
            ))}
        </div>
    );
};

export default BuildingFilterPopup;
