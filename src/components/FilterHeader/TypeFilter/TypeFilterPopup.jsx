import React, { useRef } from "react";
import { useStyles } from "./styles";
import FilterActions from "../FilterActions/FilterActions";

const TypeFilterPopup = ({
    isPopupOpen,
    setIsPopupOpen,
    activeButtons,
    setActiveButtons,
    closePopup,
    customClass,
    showActions = true,
}) => {
    const classes = useStyles();
    const popupRef = useRef(null);

    const toggleButton = (buttonLabel) => {
        setActiveButtons((prev) =>
            prev.includes(buttonLabel)
                ? prev.filter((label) => label !== buttonLabel)
                : [...prev, buttonLabel]
        );
    };

    const handleReset = () => {
        setActiveButtons([]);
    };

    const handleApply = () => {
        setIsPopupOpen(null);
        if (closePopup) closePopup();
    };

    return (
        isPopupOpen && (
            <div
                className={`${classes.popup} ${customClass || ""}`}
                ref={popupRef}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={"lContent"}>
                    {[
                        "Квартири",
                        "Апартаменти",
                        "Комерційні приміщення",
                        "Комори",
                    ].map((type) => (
                        <button
                            key={type}
                            className={`lBtn ${
                                activeButtons.includes(type) ? "active" : ""
                            }`}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleButton(type);
                            }}
                        >
                            {type}
                        </button>
                    ))}
                </div>

                {showActions && (
                    <FilterActions
                        onReset={handleReset}
                        onApply={handleApply}
                    />
                )}
            </div>
        )
    );
};

export default TypeFilterPopup;
