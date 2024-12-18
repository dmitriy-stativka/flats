import React, { useRef, useState } from "react";
import { useStyles } from "./styles";
import Slider from "@mui/material/Slider";
import FilterActions from "../FilterActions/FilterActions";

export const PriceFilterPopup = ({
    value,
    setValue,
    isPopupOpen,
    setIsPopupOpen,
    showActions = true,
    customClass,
    closePopup,
    min,
    max,
    labelFrom = "від",
    labelTo = "до",
    currencyEnabled = false,
    currencyOptions = ["грн", "$"],
}) => {
    const classes = useStyles();
    const popupRef = useRef(null);
    const [currency, setCurrency] = useState(currencyOptions[0]);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleCurrencyChange = (newCurrency) => {
        setCurrency(newCurrency);
    };

    if (!isPopupOpen) {
        return null;
    }

    return (
        <div
            className={`${classes.popup} ${customClass || ""}`}
            ref={popupRef}
            onClick={(e) => e.stopPropagation()}
        >
            <div className={classes.header}>
                <div className={classes.sliderContainer}>
                    <Slider
                        value={value}
                        onChange={(event, newValue) =>
                            handleSliderChange(event, newValue)
                        }
                        valueLabelDisplay="auto"
                        min={min}
                        max={max}
                        className={classes.slider}
                    />
                </div>

                {/* Добавляем переключатель валют */}
                {currencyEnabled && (
                    <div className={classes.currencyToggle}>
                        {currencyOptions.map((cur) => (
                            <button
                                key={cur}
                                className={`${classes.currencyButton} ${
                                    currency === cur
                                        ? classes.activeCurrency
                                        : ""
                                }`}
                                onClick={() => handleCurrencyChange(cur)}
                            >
                                {cur}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className={classes.rangeWrapper}>
                <div className={classes.rangeItem}>
                    <label htmlFor="minValue" className={classes.label}>
                        {labelFrom}
                    </label>
                    <input
                        id="minValue"
                        type="text"
                        className={classes.input}
                        value={value[0].toLocaleString()}
                        onChange={(event) => {
                            const newValue = [...value];
                            newValue[0] =
                                parseInt(
                                    event.target.value.replace(/\D/g, ""),
                                    10
                                ) || 0;
                            setValue(newValue);
                        }}
                    />
                    {/* <span className={classes.unit}>{currency}</span> */}
                </div>
                <div className={classes.rangeItem}>
                    <label htmlFor="maxValue" className={classes.label}>
                        {labelTo}
                    </label>
                    <input
                        id="maxValue"
                        type="text"
                        className={classes.input}
                        value={value[1].toLocaleString()}
                        onChange={(event) => {
                            const newValue = [...value];
                            newValue[1] =
                                parseInt(
                                    event.target.value.replace(/\D/g, ""),
                                    10
                                ) || 0;
                            setValue(newValue);
                        }}
                    />
                    {/* <span className={classes.unit}>{currency}</span> */}
                </div>
            </div>

            {showActions && (
                <FilterActions
                    onReset={() => setValue([min, max])}
                    onApply={() => {
                        setIsPopupOpen(null);
                        if (closePopup) closePopup();
                    }}
                />
            )}
        </div>
    );
};

export default PriceFilterPopup;
