import { makeStyles } from "@mui/styles";
import GlobalVars from "../App/GlobalVars";

export const useStyles = makeStyles({
    filterOptionsContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "20px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            justifyContent: "flex-start",
        },

        "& .swiper": {
            margin: "0 auto 0 0",

            [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                display: "none",
            },
        },

        "& .allFiltersTabsTop": {
            display: "none",
        },

        "&.tabsShow": {
            flexWrap: "wrap",

            [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                gap: "20px",
            },

            "& .headerNavTop": {
                display: "block",
            },

            "& .allFiltersTabsTop": {
                [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                    display: "block",
                    width: "calc(100% - 80px)",

                    "& .headerNav": {
                        display: "block",
                    },
                },
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
        height: "52px",
        border: "1px solid #1E1E1E",
        borderRadius: "50px",
        color: "#1E1E1E",
        background: "#fff",
        fontWeight: "500",
        fontSize: "16px",
        display: "flex",
        alignItems: "center",
        whiteSpace: "nowrap",
        gap: "8px",
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
            width: "calc(100% - 80px)",
            fontSize: "20px",
            fontWeight: "500",
        },
    },

    popupContentInner: {
        height: "calc(100% - 140px)",
        overflow: "auto",
        marginRight: "5px",
        paddingRight: "30px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            paddingRight: "0",
            marginRight: "0",
            height: "calc(100% - 60px)",
        },

        "&::-webkit-scrollbar": {
            width: "14px",

            [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                display: "none",
            },
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

        "& > *": {
            "&:last-child": {
                padding: "0 0 40px 0",
                border: "none",
            },
        },
    },
    popupOverlay: {
        position: "fixed",
        inset: "0",
        padding: "40px 0 0 0",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        zIndex: 1000,

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            paddingTop: "20px",
        },
    },

    collapsibleTitle: {
        fontSize: "22px",
        color: "#1E1E1E",
        fontWeight: "500",
        margin: "0",

        display: "flex",
        alignItems: "center",
        gap: "24px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "18px",
            gap: "12px",
        },
    },

    collapsible: {
        marginBottom: "32px",
        borderBottom: "1px solid #1E1E1E1A",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            marginBottom: "20px",
        },
    },

    collapsibleContent: {
        marginBottom: "32px",
        height: "100%",
        maxHeight: "1000px",
        transition: "max-height 0.5s, margin 0.5s",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            marginBottom: "20px",
        },

        "&.hide": {
            maxHeight: "0",
            margin: "0",
            overflow: "hidden",
            transition: "max-height 0.5s, margin 0.5s",
        },
    },

    collapsibleHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "relative",
        cursor: "pointer",
        paddingBottom: "20px",
        transition: "padding 0.5s",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            paddingBottom: "16px",
        },

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
            transition: "transform 0.5s",
        },

        "&.hide": {
            paddingBottom: "32px",
            transition: "padding 0.5s",

            [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                paddingBottom: "20px",
            },

            "&:after": {
                transform: "rotate(180deg)",
                transition: "transform 0.5s",
            },
        },
    },

    popupContentTitle: {
        fontSize: "22px",
        lineHeight: "32px",
        fontWeight: "500",
        margin: "30px 40px 32px 0",
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
        padding: "0px 0 0 40px",
        width: "100%",
        height: "100%",
        maxWidth: "816px",
        position: "relative",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "6px ",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            padding: "20px",
            overflowY: "auto",
        },
    },

    popupContentClose: {
        width: "32px",
        height: "32px",
        cursor: "pointer",
        position: "absolute",
        right: "40px",
        top: "30px",
        backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='none'%3E%3Cpath fill='%23fff' d='M0 0h32v32H0z'/%3E%3Cpath stroke='%231E1E1E' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M8 24 24 8M24 24 8 8'/%3E%3C/svg%3E\")",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            right: "20px",
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

    switcher: {
        width: "88px",
        height: "48px",
        borderRadius: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: "#1E1E1E1A",
        padding: "4px",
        boxSizing: "border-box",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            width: "100px",
            height: "36px",
        },

        "& button": {
            width: "40px",
            height: "40px",
            borderRadius: "50px",
            fontSize: "14px",
            fontWeight: "400",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",

            [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                width: "48px",
                height: "32px",
            },

            "&.active": {
                background: "#fff",
                boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
            },
        },
    },
});

export default useStyles;
