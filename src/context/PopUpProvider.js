import React from "react";
import PopupStateContext from "./PopupState";

const PopupProvider = (data) => {
    console.log("PopupProvider", data);
    return (
        <PopupStateContext.Provider value={data.value}>
            { data.children }
        </PopupStateContext.Provider>
    );
}
export default PopupProvider;
