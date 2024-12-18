import React from "react";
import { useStyles } from "./styles";

const FilterActions = ({
    onReset,
    onApply,
    applyTitle = "Застосувати",
    showActions = true,
}) => {
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
                {applyTitle}
            </button>
        </div>
    );
};

export default FilterActions;
