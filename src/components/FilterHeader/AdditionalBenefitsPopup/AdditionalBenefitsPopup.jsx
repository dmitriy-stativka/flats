import React from "react";
import { useStyles } from "../styles";

import { ReactComponent as RepairIcon } from "../../FilterOptions/icons/repair.svg";
import { ReactComponent as PromotionIcon } from "../../FilterOptions/icons/promotion.svg";
import { ReactComponent as ReadyIcon } from "../../FilterOptions/icons/ready.svg";
import { ReactComponent as EoselyaIcon } from "../../FilterOptions/icons/eoselya.svg";
import { ReactComponent as BusinessIcon } from "../../FilterOptions/icons/business.svg";
import { ReactComponent as ComfortIcon } from "../../FilterOptions/icons/comfort.svg";
import { ReactComponent as SaleIcon } from "../../FilterOptions/icons/sale.svg";

const AdditionalBenefitsPopup = ({ activeBenefits, setActiveBenefits }) => {
    const classes = useStyles();

    const benefits = [
        { label: "З ремонтом", icon: <RepairIcon /> },
        { label: "Акція", icon: <PromotionIcon /> },
        { label: "Готово до заселення", icon: <ReadyIcon /> },
        { label: "Є-оселя", icon: <EoselyaIcon /> },
        { label: "Бізнес-клас", icon: <BusinessIcon /> },
        { label: "Комфорт", icon: <ComfortIcon /> },
        { label: "Комфорт+", icon: <ComfortIcon /> },
        { label: "У продажу", icon: <SaleIcon /> },
    ];

    const toggleBenefit = (benefit) => {
        setActiveBenefits((prev) =>
            prev.includes(benefit)
                ? prev.filter((item) => item !== benefit)
                : [...prev, benefit]
        );
    };

    return (
        <div className={"lContent"}>
            {benefits.map(({ label, icon }) => (
                <button
                    key={label}
                    className={`lBtn ${
                        activeBenefits.includes(label) ? classes.active : ""
                    }`}
                    onClick={() => toggleBenefit(label)}
                >
                    {icon}
                    <span>{label}</span>
                </button>
            ))}
        </div>
    );
};

export default AdditionalBenefitsPopup;
