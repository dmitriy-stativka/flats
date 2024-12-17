import React, { useState, useRef } from "react";
import { useStyles } from "./styles";

import { ReactComponent as Business } from "./icons/business.svg";
import { ReactComponent as Comfort } from "./icons/comfort.svg";
import { ReactComponent as Eoselya } from "./icons/eoselya.svg";
import { ReactComponent as Filtre } from "./icons/filtre.svg";
import { ReactComponent as Promotion } from "./icons/promotion.svg";
import { ReactComponent as Ready } from "./icons/ready.svg";
import { ReactComponent as Repair } from "./icons/repair.svg";
import NavigationTabs from "../NavigationTabs/NavigationTabs";
import CollapsibleFilter from "./CollapsibleFilter";
import FilterOptionSlider from "./FilterOptionSlider";
import { LocationFilterPopup } from "../FilterHeader/LocationFilter/LocationFilterPopup";
import { PriceFilterPopup } from "../FilterHeader/PriceFilter/PriceFilterPopup";

const FilterOptions = () => {
    const classes = useStyles();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeOptions, setActiveOptions] = useState([]);
    const [priceRange, setPriceRange] = useState([1090000, 2900980]);

    const [activeTab, setActiveTab] = useState(0);
    const [activeButtons, setActiveButtons] = useState([]);
    const [activeStations, setActiveStations] = useState({});

    const popupOverlayRef = useRef(null);
    const popupContentRef = useRef(null);

    const options = [
        { label: "З ремонтом", icon: <Repair /> },
        { label: "Акція", icon: <Promotion /> },
        { label: "Готово до заселення", icon: <Ready /> },
        { label: "Є-оселя", icon: <Eoselya /> },
        { label: "Бізнес-клас", icon: <Business /> },
        { label: "Комфорт", icon: <Comfort /> },
        { label: "Комфорт 2", icon: <Business /> },
        { label: "Комфорт 3", icon: <Business /> },
        { label: "Комфорт 4", icon: <Business /> },
        { label: "Комфорт 5", icon: <Business /> },
    ];

    const togglePopup = () => setIsPopupOpen(!isPopupOpen);

    const handleOptionClick = (index) => {
        setActiveOptions((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const handleTabClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };

    return (
        <div className={classes.filterOptionsContainer}>
            <FilterOptionSlider
                options={options}
                activeOptions={activeOptions}
                onOptionClick={handleOptionClick}
                classes={classes}
            />

            <div className={classes.allFiltersButtonTitle}>
                Пошук усіх проєктів
            </div>

            <div className={classes.allFiltersTabs}>
                <NavigationTabs
                    activeTab={activeTab}
                    onTabClick={handleTabClick}
                />
            </div>

            <button className={classes.allFiltersButton} onClick={togglePopup}>
                <span className="icon">
                    <Filtre />
                </span>
                <span className={classes.allFiltersButtonDesktop}>
                    Всі фільтри
                </span>
                <span className={classes.allFiltersButtonMobile}>Фільтри</span>
                <span className={classes.allFilters}>88</span>
            </button>

            {isPopupOpen && (
                <div
                    ref={popupOverlayRef}
                    className={classes.popupOverlay}
                    onClick={(e) => {
                        if (e.target === popupOverlayRef.current) {
                            setIsPopupOpen(false);
                        }
                    }}
                >
                    <div
                        ref={popupContentRef}
                        className={classes.popupContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className={classes.popupContentTitle}>
                            Всі фільтри
                        </h2>
                        <div className={classes.popupContentInner}>
                            <CollapsibleFilter
                                title="Локація"
                                classes={classes}
                            >
                                <LocationFilterPopup
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                    activeTab={activeTab}
                                    setActiveTab={setActiveTab}
                                    activeButtons={activeButtons}
                                    setActiveButtons={setActiveButtons}
                                    activeStations={activeStations}
                                    setActiveStations={setActiveStations}
                                    showActions={false}
                                    customClass={classes.customPopup}
                                />
                            </CollapsibleFilter>

                            <CollapsibleFilter
                                title="Вартість, грн"
                                classes={classes}
                            >
                                <PriceFilterPopup
                                    value={priceRange}
                                    setValue={setPriceRange}
                                    isPopupOpen={isPopupOpen}
                                    setIsPopupOpen={setIsPopupOpen}
                                    showActions={false}
                                    customClass={classes.customPopup}
                                />
                            </CollapsibleFilter>

                            <button
                                className={classes.closePopupButton}
                                onClick={togglePopup}
                            >
                                Закрити
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterOptions;
