import { useStyles } from "./styles";
import React, { useState, useRef, useEffect, useCallback } from "react";

const TypeFilter = ({ setIsPopupOpen }) => {
    const classes = useStyles();
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);
    const [activeButtons, setActiveButtons] = useState([]);
    const popupRef = useRef(null);

    const togglePopup = () => {
        const newState = !isPopupOpen;
        setIsLocalPopupOpen(newState);
        setIsPopupOpen(newState);
    };

    const handleClickOutside = useCallback(
        (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsLocalPopupOpen(false);
                setIsPopupOpen(false);
            }
        },
        [setIsPopupOpen]
    );

    const toggleButton = (buttonLabel) => {
        setActiveButtons((prev) =>
            prev.includes(buttonLabel)
                ? prev.filter((label) => label !== buttonLabel)
                : [...prev, buttonLabel]
        );
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div
            className={`${classes.container} ${isPopupOpen ? "show" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                togglePopup();
            }}
        >
            <h3 className={classes.title}>Тип</h3>
            <p className={classes.subtitle}>Тип нерухомості</p>

            {isPopupOpen && (
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

                    <div className={classes.actions}>
                        <button
                            className={classes.resetButton}
                            onClick={(event) => {
                                event.stopPropagation();
                                setActiveButtons([]);
                            }}
                        >
                            Скинути
                        </button>
                        <button
                            className={classes.applyButton}
                            onClick={(event) => {
                                event.stopPropagation();
                                setIsPopupOpen(false);
                            }}
                        >
                            Застосувати
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TypeFilter;
