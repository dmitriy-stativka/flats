import React, { useState } from "react";
import logo from "../../img/logo.jpg";
import { useStyles } from "./styles";
import clsx from "clsx";

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

            <div className={classes.headerNav}>
                <nav className={classes.navigation}>
                    <button
                        className={clsx(classes.tab, {
                            [classes.active]: activeTab === 0,
                        })}
                        onClick={() => handleTabClick(0)}
                    >
                        24 проєкти
                    </button>
                    <button
                        className={clsx(classes.tab, {
                            [classes.active]: activeTab === 1,
                        })}
                        onClick={() => handleTabClick(1)}
                    >
                        322 юніти
                    </button>
                </nav>
            </div>

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