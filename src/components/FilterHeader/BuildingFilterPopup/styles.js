import { makeStyles } from "@mui/styles";
import GlobalVars from "../../App/GlobalVars";

export const useStyles = makeStyles((theme) => ({
    checkboxItem: {
        display: "flex",
        alignItems: "center",
        gap: "8px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            padding: "10px",
        },
    },

    checkboxItemList: {
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        flexDirection: "column",
        maxHeight: "180px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            gap: "0px",
            maxHeight: "250px",
        },
    },
}));
