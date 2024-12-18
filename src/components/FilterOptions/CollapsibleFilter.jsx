import React, { useState } from "react";

const CollapsibleFilter = ({
    title,
    children,
    classes,
    showSwitcher = false,
    currency,
    onCurrencyToggle,
}) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classes.collapsible}>
            <div
                className={`${classes.collapsibleHeader} ${
                    !isOpen ? "hide" : ""
                }`}
                onClick={toggleOpen}
            >
                <h3 className={classes.collapsibleTitle}>
                    {title}
                    {showSwitcher && (
                        <div className={classes.switcher}>
                            <button
                                onClick={() => onCurrencyToggle("UAH")}
                                className={currency === "UAH" ? "active" : ""}
                            >
                                грн
                            </button>
                            <button
                                onClick={() => onCurrencyToggle("USD")}
                                className={currency === "USD" ? "active" : ""}
                            >
                                $
                            </button>
                        </div>
                    )}
                </h3>
            </div>
            <div
                className={`${classes.collapsibleContent} ${
                    !isOpen ? "hide" : ""
                }`}
            >
                {children}
            </div>
        </div>
    );
};

export default CollapsibleFilter;
