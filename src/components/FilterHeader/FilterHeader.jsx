import React, { useState } from "react";
import { useStyles } from "./styles";
import LocationFilter from "./LocationFilter/LocationFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import TypeFilter from "./TypeFilter/TypeFilter";
import RoomsFilter from "./RoomsFilter/RoomsFilter";

const FilterHeader = () => {
    const classes = useStyles();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className={`${classes.filterHeader} ${isPopupOpen ? "show" : ""}`}>
            <>
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
            </>
        </div>
    );
};

export default FilterHeader;
