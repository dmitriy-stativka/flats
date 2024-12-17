import React from "react";
import { useStyles } from "./styles";

const FilterActions = ({ onReset, onApply, showActions = true }) => {
    const classes = useStyles();

    if (!showActions) return null;

    return (
        <div className={classes.actions}>
            <button
                className={classes.resetButton}
                onClick={(event) => {
                    event.stopPropagation();
                    onReset();
                }}
            >
                Скинути
            </button>
            <button
                className={classes.applyButton}
                onClick={(event) => {
                    event.stopPropagation();
                    onApply();
                }}
            >
                Застосувати
            </button>
        </div>
    );
};

export default FilterActions;
