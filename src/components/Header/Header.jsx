import React, { useState } from "react";
import logo from "../../img/logo.jpg";
import { useStyles } from "./styles";
import clsx from "clsx";
import NavigationTabs from "../NavigationTabs/NavigationTabs";

const Header = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const classes = useStyles();

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={classes.siteHeader}>
            <div className={classes.logo}>
                <img src={logo} alt="Logo" />
            </div>

            <NavigationTabs
                activeTab={activeTab}
                onTabClick={handleTabClick}
                classes={classes}
            />

            <div className={classes.headerBtn}>
                <button
                    className={clsx(classes.menuButton, {
                        [classes.activeMenu]: isMenuOpen,
                    })}
                    onClick={toggleMenu}
                >
                    <span className={classes.menuLine}></span>
                    <span className={classes.menuLine}></span>
                    <span className={classes.menuLine}></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
