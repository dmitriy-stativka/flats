import React, { useState } from "react";
import { useStyles } from "./styles";
import LocationFilter from "./LocationFilter/LocationFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import TypeFilter from "./TypeFilter/TypeFilter";
import RoomsFilter from "./RoomsFilter/RoomsFilter";
import PopupProvider from "../../context/PopUpProvider";

const FilterHeader = () => {
    const classes = useStyles();
    const [isPopupOpen, setIsPopupOpen] = useState(null);

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className={`${classes.filterHeader} ${![null, false].includes(isPopupOpen) ? "show" : ""}`}>
            <PopupProvider value={isPopupOpen}>
                <LocationFilter
                    setIsPopupOpen={setIsPopupOpen}
                    closePopup={closePopup}
                />
                <TypeFilter
                    setIsPopupOpen={setIsPopupOpen}
                    closePopup={closePopup}
                />
                <PriceFilter
                    setIsPopupOpen={setIsPopupOpen}
                    closePopup={closePopup}
                />
                <RoomsFilter
                    setIsPopupOpen={setIsPopupOpen}
                    closePopup={closePopup}
                />
            </PopupProvider>
        </div>
    );
};

export default FilterHeader;
