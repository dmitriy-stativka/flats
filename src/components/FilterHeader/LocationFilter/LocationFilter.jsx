import React, { useState, useRef, useEffect, useCallback } from "react";
import useStyles from "./styles";

const LocationFilter = ({ setIsPopupOpen }) => {
    const classes = useStyles();
    const [isPopupOpen, setIsLocalPopupOpen] = useState(false);
    const [activeTab, setActiveTab] = useState("city");
    const [activeStations, setActiveStations] = useState({});
    const [activeButtons, setActiveButtons] = useState([]);
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

    const toggleButton = (buttonLabel) => {
        setActiveButtons((prev) =>
            prev.includes(buttonLabel)
                ? prev.filter((label) => label !== buttonLabel)
                : [...prev, buttonLabel]
        );
    };

    const toggleStation = (line, station) => {
        setActiveStations((prev) => {
            const currentLine = prev[line] || [];
            const updatedLine = currentLine.includes(station)
                ? currentLine.filter((s) => s !== station)
                : [...currentLine, station];
            return { ...prev, [line]: updatedLine };
        });
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleClickOutside]);

    return (
        <div
            className={`${classes.container} ${isPopupOpen ? "show" : ""}`}
            onClick={(e) => {
                e.stopPropagation();
                togglePopup();
            }}
        >
            <h3 className={classes.title}>Локація</h3>
            <p className={classes.subtitle}>Місто, район, метро</p>

            {isPopupOpen && (
                <div
                    className={classes.popup}
                    ref={popupRef}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className={classes.tabs}>
                        <div
                            className={`${classes.tab} ${
                                activeTab === "city" ? classes.activeTab : ""
                            }`}
                            onClick={() => setActiveTab("city")}
                        >
                            Місто
                        </div>
                        <div
                            className={`${classes.tab} ${
                                activeTab === "district"
                                    ? classes.activeTab
                                    : ""
                            }`}
                            onClick={() => setActiveTab("district")}
                        >
                            Район
                        </div>
                        <div
                            className={`${classes.tab} ${
                                activeTab === "metro" ? classes.activeTab : ""
                            }`}
                            onClick={() => setActiveTab("metro")}
                        >
                            Метро
                        </div>
                    </div>

                    <div className={classes.content}>
                        {activeTab === "city" && (
                            <>
                                {[
                                    "Київ",
                                    "Одеса",
                                    "Дніпро",
                                    "Львів",
                                    "Харків",
                                    "Полтава",
                                    "Івано-Франківськ",
                                ].map((city) => (
                                    <button
                                        key={city}
                                        className={`${classes.button} ${
                                            activeButtons.includes(city)
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => toggleButton(city)}
                                    >
                                        {city}
                                    </button>
                                ))}
                            </>
                        )}
                        {activeTab === "district" && (
                            <>
                                {[
                                    "Дарницький",
                                    "Деснянський",
                                    "Дніпровський",
                                    "Голосіївський",
                                    "Київська область",
                                    "Печерський",
                                    "Подільский",
                                    "Святошинський",
                                ].map((district) => (
                                    <button
                                        key={district}
                                        className={`${classes.button} ${
                                            activeButtons.includes(district)
                                                ? "active"
                                                : ""
                                        }`}
                                        onClick={() => toggleButton(district)}
                                    >
                                        {district}
                                    </button>
                                ))}
                            </>
                        )}
                        {activeTab === "metro" && (
                            <>
                                <div className={classes.checkboxGroup}>
                                    <div className={classes.checkboxDiv}>
                                        <input
                                            type="checkbox"
                                            className={classes.checkbox}
                                            id="redLine"
                                        />
                                        <label htmlFor="redLine">
                                            Червона Гілка
                                        </label>
                                    </div>
                                    <ul className={classes.stationList}>
                                        {[
                                            "Академмістечко",
                                            "Нивки",
                                            "Вокзальна",
                                            "Лівобережна",
                                        ].map((station) => (
                                            <li
                                                key={station}
                                                className={`${classes.button} ${
                                                    activeStations[
                                                        "redLine"
                                                    ]?.includes(station)
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    toggleStation(
                                                        "redLine",
                                                        station
                                                    )
                                                }
                                            >
                                                {station}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={classes.checkboxGroup}>
                                    <div className={classes.checkboxDiv}>
                                        <input
                                            type="checkbox"
                                            className={classes.checkbox}
                                            id="greenLine"
                                        />
                                        <label htmlFor="greenLine">
                                            Зелена Гілка
                                        </label>
                                    </div>

                                    <ul className={classes.stationList}>
                                        {[
                                            "Сирець",
                                            "Лук'янівська",
                                            "Печерська",
                                            "Позняки",
                                        ].map((station) => (
                                            <li
                                                key={station}
                                                className={`${classes.button} ${
                                                    activeStations[
                                                        "greenLine"
                                                    ]?.includes(station)
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    toggleStation(
                                                        "greenLine",
                                                        station
                                                    )
                                                }
                                            >
                                                {station}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className={classes.checkboxGroup}>
                                    <div className={classes.checkboxDiv}>
                                        <input
                                            type="checkbox"
                                            className={classes.checkbox}
                                            id="blueLine"
                                        />
                                        <label htmlFor="blueLine">
                                            Синя Гілка
                                        </label>
                                    </div>

                                    <ul className={classes.stationList}>
                                        {[
                                            'Палац "Україна"',
                                            "Васильківська",
                                            "Теремки",
                                        ].map((station) => (
                                            <li
                                                key={station}
                                                className={`${classes.button} ${
                                                    activeStations[
                                                        "blueLine"
                                                    ]?.includes(station)
                                                        ? "active"
                                                        : ""
                                                }`}
                                                onClick={() =>
                                                    toggleStation(
                                                        "blueLine",
                                                        station
                                                    )
                                                }
                                            >
                                                {station}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </>
                        )}
                    </div>

                    <div className={classes.actions}>
                        <button
                            className={classes.resetButton}
                            onClick={(event) => {
                                event.stopPropagation();
                                setActiveTab("city");
                                setActiveButtons([]);
                                setActiveStations({});
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

export default LocationFilter;
