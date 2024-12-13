import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useStyles } from "./styles";

import { ReactComponent as Business } from "./icons/business.svg";
import { ReactComponent as Comfort } from "./icons/comfort.svg";
import { ReactComponent as Eoselya } from "./icons/eoselya.svg";
import { ReactComponent as Filtre } from "./icons/filtre.svg";
import { ReactComponent as Promotion } from "./icons/promotion.svg";
import { ReactComponent as Ready } from "./icons/ready.svg";
import { ReactComponent as Repair } from "./icons/repair.svg";

const FilterOptions = () => {
    const classes = useStyles();
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [activeOptions, setActiveOptions] = useState([]);

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

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const handleOptionClick = (index) => {
        setActiveOptions((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <div className={classes.filterOptionsContainer}>
            <Swiper
                className={classes.filterOptions}
                modules={[Navigation]}
                spaceBetween={10}
                slidesPerView="auto"
                navigation
            >
                {options.map((option, index) => (
                    <SwiperSlide key={index} className={classes.filterSlide}>
                        <button
                            className={`${classes.filterOption} ${
                                activeOptions.includes(index)
                                    ? classes.active || "active"
                                    : ""
                            }`}
                            onClick={() => handleOptionClick(index)}
                        >
                            <span className={classes.icon}>{option.icon}</span>
                            {option.label}
                        </button>
                    </SwiperSlide>
                ))}
            </Swiper>

            <button className={classes.allFiltersButton} onClick={togglePopup}>
                <span className="icon">
                    {" "}
                    <Filtre />
                </span>{" "}
                Всі фільтри
                <span className={classes.allFilters}>88</span>
            </button>

            {isPopupOpen && (
                <div className={classes.popupOverlay} onClick={togglePopup}>
                    <div
                        className={classes.popupContent}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Всі фільтри</h2>
                        <button
                            className={classes.closePopupButton}
                            onClick={togglePopup}
                        >
                            Закрити
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FilterOptions;
