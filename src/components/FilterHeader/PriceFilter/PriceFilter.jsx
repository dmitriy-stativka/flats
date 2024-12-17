import React, { useState } from "react";
import { useStyles } from "./styles";
import PriceFilterPopup from "./PriceFilterPopup";

const PriceFilter = ({ setIsPopupOpen, closePopup }) => {
    const classes = useStyles();
    const [currency, setCurrency] = useState("грн");
    const [value, setValue] = useState([1090000, 2900980]);
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);

    const togglePopup = () => {
        const newState = !isPopupOpen;
        setIsLocalPopupOpen(newState);
        setIsPopupOpen(newState);
    };

    const handleCurrencyChange = (event, newCurrency) => {
        event.stopPropagation();
        setCurrency(newCurrency);
    };

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

            <PriceFilterPopup
                value={value}
                setValue={setValue}
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsLocalPopupOpen}
                closePopup={closePopup}
            />
        </div>
    );
};

export default PriceFilter;
