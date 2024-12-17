import React, { useRef, useEffect, useCallback } from "react";
import { useStyles } from "./styles";
import FilterActions from "../FilterActions/FilterActions";

const TypeFilterPopup = ({
    isPopupOpen,
    setIsPopupOpen,
    activeButtons,
    setActiveButtons,
}) => {
    const classes = useStyles();
    const popupRef = useRef(null);

    const handleClickOutside = useCallback(
        (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsPopupOpen(false);
            }
        },
        [setIsPopupOpen]
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

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
        setIsPopupOpen(false);
    };

    return (
        isPopupOpen && (
            <div
                className={classes.popup}
                ref={popupRef}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={classes.content}>
                    {[
                        "Квартири",
                        "Апартаменти",
                        "Комерційні приміщення",
                        "Комори",
                    ].map((type) => (
                        <button
                            key={type}
                            className={`${classes.button} ${
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

                <FilterActions onReset={handleReset} onApply={handleApply} />
            </div>
        )
    );
};

export default TypeFilterPopup;
