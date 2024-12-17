import React, { useRef, useEffect, useCallback } from "react";
import { useStyles } from "./styles";
import FilterActions from "../FilterActions/FilterActions";

const RoomsFilterPopup = ({
    isPopupOpen,
    setIsPopupOpen,
    selectedRooms,
    setSelectedRooms,
}) => {
    const classes = useStyles();
    const popupRef = useRef(null);

    const handleClickOutside = useCallback(
        (event) => {
            if (popupRef.current && !popupRef.current.contains(event.target)) {
                setIsPopupOpen(false);
            }
        },
        [setIsPopupOpen]
    );

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    const toggleRoomSelection = (room) => {
        setSelectedRooms((prev) =>
            prev.includes(room)
                ? prev.filter((r) => r !== room)
                : [...prev, room]
        );
    };

    const handleReset = () => {
        setSelectedRooms([]);
    };

    const handleApply = () => {
        setIsPopupOpen(false);
    };

    return (
        isPopupOpen && (
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

                <FilterActions onReset={handleReset} onApply={handleApply} />
            </div>
        )
    );
};

export default RoomsFilterPopup;
