import React from "react";
import useStyles from "./styles";

const FilterCard = ({
    name,
    image,
    iconLocation,
    location,
    iconWay,
    way,
    priceFrom,
    priceTo,
    tags,
    units,
    completionDate,
    details,
}) => {
    const classes = useStyles();

    // console.log(tags);

    return (
        <div className={classes.card}>
            <ul className={classes.list}>
                {tags?.map((tag, index) => (
                    <li key={index} className={classes.listItem}>
                        {tag.icon && tag.icon}
                        {tag.label}
                    </li>
                ))}
            </ul>

            <div className={classes.imageWrapper}>
                <img src={image} alt={name} className={classes.image} />
            </div>

            <div className={classes.hoverCard}>
                {/* TOP */}

                <h3 className={classes.name}>{name}</h3>

                <ul className={classes.locationList}>
                    <li className={classes.locationListItem}>
                        <img src={iconLocation} alt={location} />
                        {location}
                    </li>
                    <li className={classes.locationListItem}>
                        <img src={iconWay} alt={way} />
                        {way}
                    </li>
                </ul>

                <span className={classes.price}>
                    {priceFrom} - {priceTo}
                </span>
                {/* TOP */}
                <span className={classes.completionDate}>{completionDate}</span>

                <ul className={classes.unitsList}>
                    {units?.map((unit, index) => (
                        <li key={index} className={classes.unitsListItem}>
                            <span className={classes.type}>{unit.type}</span>
                            <span className={classes.area}>
                                від {unit.area}
                            </span>
                            <span className={classes.priceItem}>
                                від {unit.price}{" "}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className={classes.bottom}>
                    <span>{details}</span>
                    <button className={classes.button}>Детальніше</button>
                </div>
            </div>
        </div>
    );
};

export default FilterCard;
