import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    filterOptionsContainer: {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: "15px",

        "& .swiper": {
            margin: "0 auto 0 0",
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
        width: "22px",
        height: "22px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
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

        "&:hover": {
            backgroundColor: "#1E1E1E0D",
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
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
    },
    popupContent: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        width: "90%",
        maxWidth: "600px",
        position: "relative",
        textAlign: "center",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
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
