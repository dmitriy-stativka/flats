import React, { useState } from "react";
import { useStyles } from "./styles";
import LocationFilter from "./LocationFilter/LocationFilter";
import PriceFilter from "./PriceFilter/PriceFilter";
import TypeFilter from "./TypeFilter/TypeFilter";
import RoomsFilter from "./RoomsFilter/RoomsFilter";

const FilterHeader = () => {
    const classes = useStyles();
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className={`${classes.filterHeader} ${isPopupOpen ? "show" : ""}`}>
            <>
                <LocationFilter setIsPopupOpen={setIsPopupOpen} />
                <TypeFilter setIsPopupOpen={setIsPopupOpen} />
                <PriceFilter setIsPopupOpen={setIsPopupOpen} />
                <RoomsFilter setIsPopupOpen={setIsPopupOpen} />
            </>
        </div>
    );
};

export default FilterHeader;
