import React, { useContext, useEffect, useState } from "react";
import { useStyles } from "./styles";
import TypeFilterPopup from "./TypeFilterPopup";
import PopupStateContext from "../../../context/PopupState";

const TypeFilter = ({ setIsPopupOpen, closePopup }) => {
    const classes = useStyles();
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);
    const [activeButtons, setActiveButtons] = useState([]);
    const filterType = 'TypeFilter';

    const openPopupType = useContext(PopupStateContext);

    useEffect(() => {
        if (openPopupType !== filterType && openPopupType !== null) {
            setIsLocalPopupOpen(false);
        }
    }, [openPopupType, setIsLocalPopupOpen]);

    const togglePopup = () => {
        const newState = !isPopupOpen;
        setIsLocalPopupOpen(newState);
        setIsPopupOpen(newState ? 'TypeFilter' : null);
    };

    return (
        <div
            className={`${classes.container} ${isPopupOpen ? "show" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                togglePopup();
            }}
        >
            <h3 className={classes.title}>Тип</h3>
            <p className={classes.subtitle}>Оберіть тип нерухомості</p>

            <TypeFilterPopup
                isPopupOpen={isPopupOpen}
                setIsPopupOpen={setIsLocalPopupOpen}
                activeButtons={activeButtons}
                setActiveButtons={setActiveButtons}
                closePopup={closePopup}
            />
        </div>
    );
};

export default TypeFilter;
