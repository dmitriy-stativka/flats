import React from "react";
import clsx from "clsx";

import { useStyles } from "./styles";

const NavigationTabs = ({ activeTab, onTabClick }) => {
    const classes = useStyles();

    return (
        <div className={[classes.headerNav, "headerNavTop"].join(" ")}>
            <nav className={classes.navigation}>
                <button
                    className={clsx(classes.tab, {
                        [classes.active]: activeTab === 0,
                    })}
                    onClick={() => onTabClick(0)}
                >
                    24 проєкти
                </button>
                <button
                    className={clsx(classes.tab, {
                        [classes.active]: activeTab === 1,
                    })}
                    onClick={() => onTabClick(1)}
                >
                    322 юніти
                </button>
            </nav>
        </div>
    );
};

export default NavigationTabs;
