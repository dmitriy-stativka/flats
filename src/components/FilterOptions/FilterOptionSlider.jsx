import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FilterOptionSlider = ({
    options,
    activeOptions,
    onOptionClick,
    classes,
}) => {
    return (
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
                        onClick={() => onOptionClick(index)}
                    >
                        <span className={classes.icon}>{option.icon}</span>
                        {option.label}
                    </button>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FilterOptionSlider;
