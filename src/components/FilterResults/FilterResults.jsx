import React from "react";
import FilterCard from "../FilterCard/FilterCard";
import { useStyles } from "./styles";

import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";
import image3 from "./img/image3.jpg";

import Metro from "./img/icons/metro.svg";
import Auto from "./img/icons/auto.svg";
import District from "./img/icons/district.svg";
import Walk from "./img/icons/walk.svg";

import { ReactComponent as Promotion } from "../FilterOptions/icons/promotion.svg";

const FilterResults = () => {
    const classes = useStyles();

    const mockData = [
        {
            id: 1,
            name: "ЖК Голосіївський",
            iconLocation: Metro,
            location: "Васильківська",
            iconWay: Auto,
            way: "5 хв",
            priceFrom: "845 000 грн",
            priceTo: "1 535 000 грн",
            images: [image1, image2, image3],
            details: "114 юнітів доступно",

            tags: [
                { label: "Зі знижкою", icon: <Promotion /> },
                { label: "З ремонтом" },
            ],

            units: [
                { type: "Студії", area: "35", price: "425 000 грн" },
                { type: "1-кімнатні", area: "49.2", price: "575 000 грн" },
            ],
            completionDate: "Завершення будівництва I квартал 2026",
        },
        {
            id: 2,
            name: "ЖК Sky Avenue",
            iconLocation: District,
            location: "Васильківська",
            iconWay: Auto,
            way: "3 хв",
            priceFrom: "845 000 грн",
            priceTo: "1 535 000 грн",
            details: "314 юнітів доступно",
            images: [image2, image1, image3],

            units: [
                { type: "Студії", area: "35", price: "425 000 грн" },
                { type: "1-кімнатні", area: "49.2", price: "575 000 грн" },
                { type: "2-кімнатні", area: "62", price: "695 500 грн" },
            ],
            completionDate: "Завершення будівництва II квартал 2027",
        },
        {
            id: 3,
            name: "БФК Intergal City",
            iconLocation: Metro,
            location: "Печерська",
            iconWay: Walk,
            way: "15 хв",
            priceFrom: "845 000 грн",
            priceTo: "1 535 000 грн",
            images: [image3, image2, image1],
            details: "214 юнітів доступно",
            tags: [{ label: "Зі знижкою", icon: <Promotion /> }],
            units: [
                { type: "Студії", area: "35", price: "425 000 грн" },
                { type: "1-кімнатні", area: "49.2", price: "575 000 грн" },
                { type: "2-кімнатні", area: "62", price: "695 500 грн" },
                { type: "3-кімнатні", area: "74.5", price: "785 240 грн" },
            ],
            completionDate: "Завершення будівництва II квартал 2025",
        },
    ];

    return (
        <div className={classes.results}>
            {mockData.map((item) => (
                <FilterCard key={item.id} {...item} />
            ))}
        </div>
    );
};

export default FilterResults;
