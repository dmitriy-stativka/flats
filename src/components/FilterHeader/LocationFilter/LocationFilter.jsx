import React, { useContext, useEffect, useState } from "react";
import LocationFilterPopup from "./LocationFilterPopup";
import useStyles from "./styles";
import PopupStateContext from "../../../context/PopupState";

const LocationFilter = ({ setIsPopupOpen, closePopup }) => {
    const classes = useStyles();
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("city");
    const [activeStations, setActiveStations] = useState({});
    const [activeButtons, setActiveButtons] = useState([]);
    const filterType = 'LocationFilter';

    const openPopupType = useContext(PopupStateContext);

    useEffect(() => {
        if (openPopupType !== filterType && openPopupType !== null) {
            setIsLocalPopupOpen(false);
        }
    }, [openPopupType, setIsLocalPopupOpen]);

    const togglePopup = () => {
        const newState = !isPopupOpen;
        setIsLocalPopupOpen(newState);
        setIsPopupOpen('LocationFilter');
    };

    return (
        <div
            className={ `${ classes.container } ${ isPopupOpen ? "show" : "" }` }
            onClick={ (e) => {
                e.stopPropagation();
                togglePopup();
            } }
        >
            <h3 className={ classes.title }>Локація</h3>
            <p className={ classes.subtitle }>Оберіть місто, район, метро</p>

            <LocationFilterPopup
                isPopupOpen={ isPopupOpen }
                setIsPopupOpen={ setIsLocalPopupOpen }
                closePopup={ closePopup }
                activeTab={ activeTab }
                setActiveTab={ setActiveTab }
                activeButtons={ activeButtons }
                setActiveButtons={ setActiveButtons }
                activeStations={ activeStations }
                setActiveStations={ setActiveStations }
            />
        </div>
    );
};

export default LocationFilter;
