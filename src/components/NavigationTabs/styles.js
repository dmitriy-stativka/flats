import { makeStyles } from "@mui/styles";
import GlobalVars from "../App/GlobalVars";

export const useStyles = makeStyles({
    headerNav: {
        display: "flex",
        alignItems: "center",
        flexBasis: "33.3%",
        justifyContent: "center",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            display: "none",
        },
    },
    navigation: {
        display: "flex",
        background: "rgba(30, 30, 30, 0.05)",
        borderRadius: "100px",
        padding: "4px",
        maxWidth: "392px",
        height: "56px",
        width: "100%",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            height: "44px",
        },
    },
    tab: {
        fontSize: "22px",
        border: "1px solid transparent",
        borderRadius: "100px",
        width: "50%",
        cursor: "pointer",
        transition: "border 0.5s ease, background 0.5s ease",
        fontWeight: "500",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "16px",
        },

        "&:hover": {
            background: "rgba(30, 30, 30, 0.05)",
            border: "1px solid transparent",
        },
    },
    active: {
        background: GlobalVars.colors.white,
        border: "1px solid rgba(30, 30, 30, 0.1)",

        "&:hover": {
            border: "1px solid rgba(30, 30, 30, 0.45)",
            background: GlobalVars.colors.white,
        },
    },
});
