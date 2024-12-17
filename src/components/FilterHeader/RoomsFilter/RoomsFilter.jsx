import React, { useState } from "react";
import { useStyles } from "./styles";
import RoomsFilterPopup from "./RoomsFilterPopup";

const RoomsFilter = ({ setIsPopupOpen, closePopup }) => {
    const classes = useStyles();
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);
    const [selectedRooms, setSelectedRooms] = useState([]);

    const togglePopup = () => {
        const newState = !isPopupOpen;
        setIsLocalPopupOpen(newState);
        setIsPopupOpen(newState);
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
