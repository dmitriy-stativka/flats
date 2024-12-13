import React, { useState, useRef, useEffect, useCallback } from "react";
import { useStyles } from "./styles";

const RoomsFilter = ({ setIsPopupOpen }) => {
    const classes = useStyles();
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);
    const [selectedRooms, setSelectedRooms] = useState([]);
    const popupRef = useRef(null);

    const togglePopup = () => {
        const newState = !isPopupOpen;
        setIsLocalPopupOpen(newState);
        setIsPopupOpen(newState);
    };

    const handleClickOutside = useCallback(
        (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsLocalPopupOpen(false);
                setIsPopupOpen(false);
            }
        },
        [setIsPopupOpen]
    );

    const toggleRoomSelection = (room) => {
        setSelectedRooms((prev) =>
            prev.includes(room)
                ? prev.filter((r) => r !== room)
                : [...prev, room]
        );
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div
            className={`${classes.container} disabled ${
                isPopupOpen ? "show" : ""
            }`}
            onClick={(e) => {
                e.stopPropagation();
                togglePopup();
            }}
        >
            <h3 className={classes.title}>Кімнатність</h3>
            <p className={classes.subtitle}>Вкажіть кількість кімнат</p>

            {isPopupOpen && (
                <div
                    className={classes.popup}
                    ref={popupRef}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={classes.content}>
                        {[
                            "Студія",
                            "1-кімнатна",
                            "2-кімнатна",
                            "3-кімнатна",
                            "4-кімнатна",
                            "5-кімнатна",
                        ].map((room) => (
                            <div key={room} className={classes.checkboxItem}>
                                <input
                                    type="checkbox"
                                    id={room}
                                    className={classes.checkbox}
                                    checked={selectedRooms.includes(room)}
                                    onChange={() => toggleRoomSelection(room)}
                                />
                                <label htmlFor={room}>{room}</label>
                            </div>
                        ))}
                    </div>

                    <div className={classes.actions}>
                        <button
                            className={classes.resetButton}
                            onClick={(event) => {
                                event.stopPropagation();
                                setSelectedRooms([]);
                            }}
                        >
                            Скинути
                        </button>
                        <button
                            className={classes.applyButton}
                            onClick={(event) => {
                                event.stopPropagation();
                                setIsPopupOpen(false);
                            }}
                        >
                            Застосувати
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RoomsFilter;
