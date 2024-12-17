import React, { useRef, useEffect, useCallback } from "react";
import useStyles from "./styles";
import FilterActions from "../FilterActions/FilterActions";

export const LocationFilterPopup = ({
    isPopupOpen,
    setIsPopupOpen,
    activeTab,
    setActiveTab,
    activeButtons,
    setActiveButtons,
    activeStations,
    setActiveStations,
    showActions = true,
    customClass,
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

    const handleReset = () => {
        setActiveTab("city");
        setActiveButtons([]);
        setActiveStations({});
    };

    const handleApply = () => {
        setIsPopupOpen(false);
    };

    return (
        isPopupOpen && (
            <div
                className={`${classes.popup} ${customClass || ""}`}
                ref={popupRef}
                onClick={(e) => e.stopPropagation()}
            >
                <div className={classes.tabs}>
                    <div
                        className={`${classes.tab} ${
                            activeTab === "city" ? classes.activeTab : ""
                        }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("city");
                        }}
                    >
                        Місто
                    </div>
                    <div
                        className={`${classes.tab} ${
                            activeTab === "district" ? classes.activeTab : ""
                        }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("district");
                        }}
                    >
                        Район
                    </div>
                    <div
                        className={`${classes.tab} ${
                            activeTab === "metro" ? classes.activeTab : ""
                        }`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setActiveTab("metro");
                        }}
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
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleButton(city);
                                    }}
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
                                "Оболонський",
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
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        toggleButton(district);
                                    }}
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
                                        onClick={(e) => e.stopPropagation()}
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
                                        "Дарниця",
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
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleStation(
                                                    "redLine",
                                                    station
                                                );
                                            }}
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
                                        onClick={(e) => e.stopPropagation()}
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
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleStation(
                                                    "greenLine",
                                                    station
                                                );
                                            }}
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
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <label htmlFor="blueLine">Синя Гілка</label>
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
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                toggleStation(
                                                    "blueLine",
                                                    station
                                                );
                                            }}
                                        >
                                            {station}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </>
                    )}
                </div>

                <FilterActions
                    onReset={handleReset}
                    onApply={handleApply}
                    showActions={showActions}
                />
            </div>
        )
    );
};

export default LocationFilterPopup;
