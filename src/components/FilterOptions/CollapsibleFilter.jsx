import React, { useState } from "react";

const CollapsibleFilter = ({ title, children, classes }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={classes.collapsible}>
            <div className={classes.collapsibleHeader} onClick={toggleOpen}>
                <h3 className={classes.collapsibleTitle}>{title}</h3>
            </div>
            {isOpen && (
                <div className={classes.collapsibleContent}>{children}</div>
            )}
        </div>
    );
};

export default CollapsibleFilter;
