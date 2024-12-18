import React from "react";
import Header from "./components/Header/Header";
import FilterHeader from "./components/FilterHeader/FilterHeader";
import FilterOptions from "./components/FilterOptions/FilterOptions";
import FilterResults from "./components/FilterResults/FilterResults";

import useBaseStyles from "./components/App/BaseStyles";
import useGlobalStyles from "./components/App/GlobalStyles";
import { ThemeProvider } from "@mui/material/styles";
import GlobalVars from "./components/App/GlobalVars";

import "./assets/styles/global.css";

const App = () => {
    const classes = useBaseStyles();
    useGlobalStyles();

    return (
        <ThemeProvider theme={GlobalVars}>
            <div className={classes.wrapper}>
                <Header />
                <FilterHeader />
                <FilterOptions />
                <FilterResults />
            </div>
        </ThemeProvider>
    );
};

export default App;
