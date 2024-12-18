import React, { useState } from "react";

const CollapsibleFilter = ({
    title,
    children,
    classes,
    showSwitcher = false,
}) => {
    const [isOpen, setIsOpen] = useState(true);
    const [currency, setCurrency] = useState("UAH"); // Локальное состояние валюты

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleCurrencyClick = (event, newCurrency) => {
        event.stopPropagation(); // Останавливаем всплытие события клика
        setCurrency(newCurrency); // Обновляем локальное состояние
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
                                onClick={(e) => handleCurrencyClick(e, "UAH")}
                                className={currency === "UAH" ? "active" : ""}
                            >
                                грн
                            </button>
                            <button
                                onClick={(e) => handleCurrencyClick(e, "USD")}
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
