import React, { useState, useRef, useEffect, useCallback } from "react";
import { useStyles } from "./styles";
import Slider from "@mui/material/Slider";

const PriceFilter = ({ setIsPopupOpen }) => {
    const classes = useStyles();
    const [currency, setCurrency] = useState("грн");
    const [value, setValue] = useState([1000000, 3000000]);
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);
    const popupRef = useRef(null);

    const handleCurrencyChange = (event, newCurrency) => {
        event.stopPropagation();
        setCurrency(newCurrency);
    };

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleInputChange = (event, index) => {
        const newValue = [...value];
        newValue[index] =
            parseInt(event.target.value.replace(/\D/g, ""), 10) || 0;
        setValue(newValue);
    };

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

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div className={`${classes.filterItem} ${isPopupOpen ? "show" : " "}`}>
            <div
                className={classes.header}
                onClick={(event) => event.stopPropagation()}
            >
                <h3 className={classes.title} onClick={togglePopup}>
                    Вартість
                </h3>
                <div className={classes.currencyToggle}>
                    <button
                        className={`${classes.currencyButton} ${
                            currency === "грн" ? classes.activeCurrency : ""
                        }`}
                        onClick={(event) => handleCurrencyChange(event, "грн")}
                    >
                        грн
                    </button>
                    <button
                        className={`${classes.currencyButton} ${
                            currency === "$" ? classes.activeCurrency : ""
                        }`}
                        onClick={(event) => handleCurrencyChange(event, "$")}
                    >
                        $
                    </button>
                </div>
            </div>

            <span className={classes.popupTrigger} onClick={togglePopup}>
                {`від ${value[0].toLocaleString()} — до ${value[1].toLocaleString()}`}
            </span>

            {isPopupOpen && (
                <div className={classes.popup} ref={popupRef}>
                    <div className={classes.sliderContainer}>
                        <Slider
                            value={value}
                            onChange={(event, newValue) =>
                                handleSliderChange(event, newValue)
                            }
                            valueLabelDisplay="auto"
                            min={1000000}
                            max={3000000}
                            className={classes.slider}
                        />
                    </div>

                    <div className={classes.rangeWrapper}>
                        <div
                            className={classes.rangeItem}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <label htmlFor="minValue" className={classes.label}>
                                від
                            </label>
                            <input
                                id="minValue"
                                type="text"
                                className={classes.input}
                                value={value[0].toLocaleString()}
                                onChange={(event) =>
                                    handleInputChange(event, 0)
                                }
                            />
                        </div>
                        <div
                            className={classes.rangeItem}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <label htmlFor="maxValue" className={classes.label}>
                                до
                            </label>
                            <input
                                id="maxValue"
                                type="text"
                                className={classes.input}
                                value={value[1].toLocaleString()}
                                onChange={(event) =>
                                    handleInputChange(event, 1)
                                }
                            />
                        </div>
                    </div>

                    <div className={classes.actions}>
                        <button
                            className={classes.resetButton}
                            onClick={(event) => {
                                event.stopPropagation();
                                setValue([1000000, 3000000]);
                            }}
                        >
                            Скинути
                        </button>
                        <button
                            className={classes.applyButton}
                            onClick={(event) => {
                                event.stopPropagation();
                                togglePopup();
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

export default PriceFilter;
