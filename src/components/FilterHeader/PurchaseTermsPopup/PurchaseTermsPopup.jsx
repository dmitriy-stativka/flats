import React from "react";
import { useStyles } from "../styles";

import { ReactComponent as CreditIcon } from "./icons/credit.svg";
import { ReactComponent as InstallmentIcon } from "./icons/installment.svg";
import { ReactComponent as PaymentIcon } from "./icons/payment.svg";

const PurchaseTermsPopup = ({ activeTerms, setActiveTerms }) => {
    const classes = useStyles();

    const terms = [
        { label: "Кредит", icon: <CreditIcon /> },
        { label: "Розстрочка", icon: <InstallmentIcon /> },
        { label: "Оплата 100%", icon: <PaymentIcon /> },
    ];

    const toggleTerm = (term) => {
        setActiveTerms((prev) =>
            prev.includes(term)
                ? prev.filter((item) => item !== term)
                : [...prev, term]
        );
    };

    return (
        <div className={"lContent"}>
            {terms.map(({ label, icon }) => (
                <button
                    key={label}
                    className={`lBtn ${
                        activeTerms.includes(label) ? classes.active : ""
                    }`}
                    onClick={() => toggleTerm(label)}
                >
                    {icon}
                    <span>{label}</span>
                </button>
            ))}
        </div>
    );
};

export default PurchaseTermsPopup;
