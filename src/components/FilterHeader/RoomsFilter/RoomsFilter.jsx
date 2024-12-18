import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./styles";
import RoomsFilterPopup from "./RoomsFilterPopup";
import PopupStateContext from "../../../context/PopupState";

const RoomsFilter = ({ setIsPopupOpen, closePopup }) => {
    const classes = useStyles();
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const filterType = 'RoomsFilter';

    const openPopupType = useContext(PopupStateContext);

    useEffect(() => {
        if (openPopupType !== filterType && openPopupType !== null) {
            setIsLocalPopupOpen(false);
        }
    }, [openPopupType, setIsLocalPopupOpen]);

    const togglePopup = () => {
        const newState = !isPopupOpen;
        setIsLocalPopupOpen(newState);
        setIsPopupOpen(newState ? 'RoomsFilter': null);
    };

    return (
        <div
            className={`${classes.container}  ${isPopupOpen ? "show" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                togglePopup();
            }}
        >
            <h3 className={classes.title}>Кімнатність</h3>
            <p className={classes.subtitle}>Вкажіть кількість кімнат</p>

            <RoomsFilterPopup
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsLocalPopupOpen}
                selectedRooms={selectedRooms}
                closePopup={closePopup}
                setSelectedRooms={setSelectedRooms}
            />
        </div>
    );
};

export default RoomsFilter;
