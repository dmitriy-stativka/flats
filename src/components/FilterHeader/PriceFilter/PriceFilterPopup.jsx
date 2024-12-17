import React, { useRef } from "react";
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
}) => {
    const classes = useStyles();
    const popupRef = useRef(null);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
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
            <div className={classes.sliderContainer}>
                <Slider
                    value={value}
                    onChange={(event, newValue) =>
                        handleSliderChange(event, newValue)
                    }
                    valueLabelDisplay="auto"
                    min={1090000}
                    max={2900980}
                    className={classes.slider}
                />
            </div>
            <div className={classes.rangeWrapper}>
                <div className={classes.rangeItem}>
                    <label htmlFor="minValue" className={classes.label}>
                        від
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
                </div>
                <div className={classes.rangeItem}>
                    <label htmlFor="maxValue" className={classes.label}>
                        до
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
                </div>
            </div>
            {showActions && (
                <FilterActions
                    onReset={() => setValue([1000000, 3000000])}
                    onApply={() => {
                        setIsPopupOpen(false);
                        if (closePopup) closePopup();
                    }}
                />
            )}
        </div>
    );
};

export default PriceFilterPopup;
