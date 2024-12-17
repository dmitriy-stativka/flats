import { makeStyles } from "@mui/styles";
import GlobalVars from "../App/GlobalVars";

export const useStyles = makeStyles({
    filterOptionsContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "15px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            gap: "20px",
        },
        "& .swiper": {
            margin: "0 auto 0 0",

            [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                display: "none",
            },
        },
    },
    filterOptions: {
        "& .swiper-button-prev": {
            "&:before": {
                transform: "scale(-1, 1) translateX(calc(0% + 15px))",
            },
        },

        "& .swiper-button-next": {
            right: "1px",
        },

        "& .swiper-button-next, & .swiper-button-prev": {
            color: "#1E1E1E",
            width: "32px",
            height: "32px",
            margin: "auto",
            top: "0",
            bottom: "0",

            "&:after": {
                fontSize: "15px",
                borderRadius: "50%",
                minWidth: "32px",
                minHeight: "32px",
                border: "1px solid #1E1E1E",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "transparent",
                transition: "background 0.3s",
            },

            "&:before": {
                content: '""',
                width: "120px",
                height: "52px",
                background:
                    "linear-gradient(270deg, #FFFFFF 50%, rgba(255, 255, 255, 0) 100%)",
                position: "absolute",
                zIndex: -1,
                inset: "0",
                margin: "auto",
                transform: "translateX(calc(-100% + 45px))",
            },

            "&.swiper-button-disabled": {
                opacity: 0,
                visibility: "hidden",
            },

            "&:hover": {
                "&:after": {
                    background: "#1E1E1E0D",
                    transition: "background 0.3s",
                },
            },
        },

        "& .swiper-slide": {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
        },
    },

    allFiltersTabs: {
        display: "none",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            display: "block",
            width: "calc(100% - 80px)",

            "& .headerNav": {
                display: "block",
            },
        },
    },

    filterOption: {
        padding: "14px 20px",
        border: "1px solid #1E1E1E1A",
        borderRadius: "50px",
        background: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        whiteSpace: "nowrap",
        color: "#1E1E1EB2",
        display: "flex",
        alignItems: "center",
        gap: "6px",

        "& svg": {
            "& path": {
                transition: "stroke-opacity 0.3s",
            },
        },

        "&:hover": {
            border: "1px solid #1E1E1EB2",
            color: "#1E1E1EB2",

            "& svg": {
                "& path": {
                    strokeOpacity: "1",
                    transition: "stroke-opacity 0.3s",
                },
            },
        },

        "&.active": {
            border: "1px solid #1E1E1E",
            color: "#1E1E1E",

            "& svg": {
                color: "#000",
                transition: "color 0.3s",

                "& path": {
                    strokeOpacity: "1",
                },
            },

            "&:hover": {
                background: "#1E1E1E0D",
            },
        },
    },

    icon: {
        width: "20px",
        height: "20px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        "& svg": {
            width: "100%",
            height: "100%",
            color: "#787878",
        },
    },

    allFilters: {
        fontSize: "12px",
        color: "#fff",
        background: "#1E1E1E",
        borderRadius: "50px",
        position: "absolute",
        right: "-5px",
        top: "5px",
        width: "22px",
        height: "22px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },

    allFiltersButton: {
        padding: "12px 22px",
        border: "1px solid #1E1E1E",
        borderRadius: "50px",
        background: "#fff",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        gap: "6px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        position: "relative",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "14px",
        },

        "& svg": {
            transform: "translateY(3px)",
            width: "20px",
            height: "20px",
        },

        "&:hover": {
            backgroundColor: "#1E1E1E0D",
        },

        "&.hide": {
            fontSize: "0",
            gap: "0",
            padding: "15px 19px",
            transition: "all 0.3s ease",

            "& svg": {
                transform: "translateY(0)",
            },
        },
    },

    allFiltersButtonMobile: {
        display: "none",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            display: "block",
            fontWeight: "500",
        },
    },

    allFiltersButtonDesktop: {
        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            display: "none",
        },
    },

    allFiltersButtonTitle: {
        display: "none",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            display: "block",
            width: "100%",
            fontSize: "20px",
            fontWeight: "500",
        },
    },

    popupContentInner: {
        overflowY: "auto",
        height: "100%",
        paddingRight: "30px",
        marginRight: "5px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            overflowY: "initial",
            paddingRight: "0",
            marginRight: "0",
        },

        "&::-webkit-scrollbar": {
            width: "14px",
        },
        "&::-webkit-scrollbar-track": {
            background: "#fff",
            border: "1px solid rgba(30,30,30,0.2)",
            borderRadius: "50px",
            boxSizing: "border-box",
        },
        "&::-webkit-scrollbar-thumb": {
            background: "rgba(30,30,30,0.3)",
            border: "4px solid transparent",
            backgroundClip: "padding-box",
            borderRadius: "50px",
        },
    },
    popupOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 1000,
        paddingTop: "40px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            paddingTop: "20px",
        },
    },

    collapsibleTitle: {
        fontSize: "22px",
        color: "#1E1E1E",
        fontWeight: "500",
        margin: "0",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "18px",
        },
    },

    collapsible: {
        paddingBottom: "32px",
        marginBottom: "32px",
        borderBottom: "1px solid #1E1E1E1A",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            paddingBottom: "20px",
            marginTop: "20px",
            marginBottom: "0px",
        },
    },

    collapsibleContent: {
        marginTop: "20px",
    },

    collapsibleHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",

        "&:after": {
            content: '""',
            height: "32px",
            width: "32px",
            background:
                "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='9' fill='none'%3E%3Cpath stroke='%231E1E1E' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M17 8 9 1 1 8'/%3E%3C/svg%3E\")",
            display: "block",
            backgroundSize: "50%",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
        },
    },

    popupContentTitle: {
        fontSize: "22px",
        lineHeight: "32px",
        fontWeight: "500",
        margin: "0 40px 32px 0",
        paddingBottom: "32px",
        borderBottom: "1px solid #1E1E1E1A",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "18px",
            paddingBottom: "20px",
            margin: "0 0px 20px 0",
        },
    },

    popupContent: {
        background: "#fff",
        padding: "30px 0px 30px 40px",
        width: "100%",
        height: "100%",
        maxWidth: "816px",
        position: "relative",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            padding: "20px",
            overflowY: "auto",
        },
    },

    customPopup: {
        position: "static",
        width: "100%",
        boxShadow: "none",
        padding: "0",
        border: "none",
    },

    closePopupButton: {
        marginTop: "20px",
        padding: "10px 20px",
        background: "#e53935",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        cursor: "pointer",
        fontSize: "14px",
        "&:hover": {
            backgroundColor: "#d32f2f",
        },
    },
});

export default useStyles;
