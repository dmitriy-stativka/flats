import React, { useState } from "react";
import LocationFilterPopup from "./LocationFilterPopup";
import useStyles from "./styles";

const LocationFilter = ({ setIsPopupOpen, closePopup }) => {
    const classes = useStyles();
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("city");
    const [activeStations, setActiveStations] = useState({});
    const [activeButtons, setActiveButtons] = useState([]);

    const togglePopup = () => {
        const newState = !isPopupOpen;
        setIsLocalPopupOpen(newState);
        setIsPopupOpen(newState);
    };

    return (
        <div
            className={`${classes.container} ${isPopupOpen ? "show" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                togglePopup();
            }}
        >
            <h3 className={classes.title}>Локація</h3>
            <p className={classes.subtitle}>Оберіть місто, район, метро</p>

            <LocationFilterPopup
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsLocalPopupOpen}
                closePopup={closePopup}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                activeButtons={activeButtons}
                setActiveButtons={setActiveButtons}
                activeStations={activeStations}
                setActiveStations={setActiveStations}
            />
        </div>
    );
};

export default LocationFilter;
