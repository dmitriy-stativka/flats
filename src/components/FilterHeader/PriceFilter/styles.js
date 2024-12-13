import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    filterItem: {
        position: "relative",
    },
    header: {
        display: "flex",
        gap: "8px",
        alignItems: "flex-start",
        width: "100%",
    },
    title: {
        fontSize: "16px",
        fontWeight: "500",
        margin: "0 0 8px 0",
    },
    popupTrigger: {
        fontSize: "16px",
        fontWeight: "400",
    },
    currencyToggle: {
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        borderRadius: "20px",
        padding: "2px",
        background: "rgb(30 30 30 / 10%)",
    },
    currencyButton: {
        padding: "3px 6px",
        fontSize: "10px",
        background: "transparent",
        border: "none",
        borderRadius: "50px",
        cursor: "pointer",
    },
    activeCurrency: {
        background: "#fff",
        color: "#000",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.15)",
    },
    sliderContainer: {
        width: "calc(100% - 40px)",
        padding: "5px 0",
        margin: "auto",
        display: "block",
    },

    input: {
        borderRadius: "50px",
        border: "1px solid #1E1E1E1A",
        fontSize: "16px",
        padding: "16px 0 !important",
        width: "100%",
        textAlign: "center",
        margin: "0 !important",
        transition: "border 0.3s, background 0.3s",

        "&:hover": {
            borderColor: "#1E1E1E73",
            transition: "border 0.3s",
        },

        "&:focus-visible": {
            borderColor: "#000!important",
            outline: "none",
        },

        "&:focus": {
            borderColor: "#1E1E1E",
            background: "#1E1E1E0D",
            outline: "none",
            transition: "border 0.3s, background 0.3s",
        },
    },

    rangeWrapper: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "space-between",
    },

    rangeItem: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        flexDirection: "column",
    },

    price: {
        fontSize: "16px",
        fontWeight: "400",
        color: "#000",
    },

    from: {
        fontStyle: "normal",
        marginRight: "5px",
    },
    to: {
        fontStyle: "normal",
        marginRight: "5px",
    },

    dash: {
        margin: "0 10px",
        fontSize: "14px",
        color: "#757575",
    },
    slider: {
        "& .MuiSlider-thumb": {
            backgroundColor: "#fff",
            width: "40px",
            height: "40px",
            border: "1px solid rgba(0,0,0, 0.15)",

            "&:hover, &.Mui-focusVisible": {
                boxShadow: "0px 0px 0px 8px rgba(229, 57, 53, 0.16)",
            },
        },

        "& .sliderContainer": {
            display: "none",
        },

        "& .MuiSlider-track": {
            backgroundColor: "#ED1C24",
            border: "none",
            height: "2px",
        },

        "& .MuiSlider-rail": {
            backgroundColor: "#ddd",
        },
    },

    resetButton: {
        fontSize: "16px",
        color: "#1E1E1E",
        cursor: "pointer",
        transition: "all 0.3s ease",
        textDecoration: "underline",

        "&:hover": {
            color: "#1E1E1EB2",
        },
    },

    label: {
        color: "#1E1E1E99",
        marginTop: "20px",
    },

    actions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        marginTop: "20px",
        paddingTop: "20px",
        borderTop: "1px solid #ddd",
    },

    applyButton: {
        padding: "17px 27px",
        background: "#ED1C24",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s ease",

        "&:hover": {
            backgroundColor: "#c70000",
        },
    },

    popup: {
        position: "absolute",
        top: "calc(100% + 20px)",
        left: 0,
        width: "calc(200% - 60px)",
        background: "white",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
        borderRadius: "5px",
        padding: "30px",
        zIndex: 10,
    },
});
