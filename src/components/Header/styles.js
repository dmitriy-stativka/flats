import { makeStyles } from "@mui/styles";
import GlobalVars from "../App/GlobalVars";

export const useStyles = makeStyles({
    siteHeader: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "32px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            marginBottom: "20px",
        },
    },
    logo: {
        display: "flex",
        alignItems: "center",
        flexBasis: "33.3%",

        "& img": {
            height: "64px",
            objectFit: "cover",
            transition: "opacity 0.3s",

            [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                height: "40px",
            },

            "&:hover": {
                opacity: 0.8,
                transition: "opacity 0.3s",
            },
        },
    },

    headerBtn: {
        display: "flex",
        gap: "20px",
        flexBasis: "33.3%",
        justifyContent: "flex-end",
    },

    navigation: {
        display: "flex",
        background: "rgba(30, 30, 30, 0.05)",
        borderRadius: "100px",
        padding: "4px",

        maxWidth: "392px",
        height: "56px",
        width: "100%",
    },
    tab: {
        fontSize: "22px",
        border: "1px solid transparent",
        borderRadius: "100px",
        width: "50%",
        cursor: "pointer",
        transition: "border 0.5s ease, background 0.5s ease",
        fontWeight: "500",
        color: GlobalVars.colors.primaryColor1,

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
    menuButton: {
        width: "64px",
        height: "64px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        border: "1px solid rgba(30, 30, 30, 0.1)",
        transition: "border 0.3s",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            width: "40px",
            height: "40px",
        },

        "&:hover": {
            border: "1px solid rgba(30, 30, 30, 0.45)",
        },
    },
    menuLine: {
        width: "26px",
        height: "2px",
        display: "block",
        margin: "3px 0",
        background: GlobalVars.colors.primaryColor1,
        opacity: 1,
        visibility: "visible",
        transition: "opacity 0.3s, visibility 0.3s, transform 0.3s",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            width: "20px",
        },

        "&:nth-child(2)": {
            width: "20px",

            [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                width: "16px",
            },
        },
    },
    activeMenu: {
        borderColor: GlobalVars.colors.primaryColor1,
        "& span:nth-child(1)": {
            transform: "translate(0px, 8px) rotate(45deg)",
            transition: "transform 0.3s 0.1s",
        },

        "& span:nth-child(2)": {
            opacity: 0,
            visibility: "hidden",
        },

        "& span:nth-child(3)": {
            transform: "translate(0px, -8px) rotate(-45deg)",
            transition: "transform 0.3s 0.1s",
        },
    },
});
