import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    container: {
        position: "relative",
    },
    title: {
        margin: "0 0 8px 0",
        fontSize: "16px",
        color: "#000",
        fontWeight: "500",
    },
    subtitle: {
        margin: 0,
        fontSize: "16px",
        color: "#757575",
    },
    popupTrigger: {
        fontSize: "16px",
        fontWeight: "400",
        cursor: "pointer",
    },
    popup: {
        position: "absolute",
        top: "calc(100% + 20px)",
        left: 0,
        width: "calc(200% - 60px)",
        background: "white",
        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.12)",
        border: "1px solid rgba(30, 30, 30, 0.1);",
        borderRadius: "6px",
        padding: "30px",
        zIndex: 10,
    },
    tabs: {
        display: "flex",
        backgroundColor: "#1E1E1E0D",
        marginBottom: "20px",
        borderRadius: "50px",
        padding: "4px",
    },
    tab: {
        flex: 1,
        textAlign: "center",
        padding: "15px 0",
        cursor: "pointer",
        fontSize: "16px",
        color: "#1E1E1E",
        borderRadius: "50px",
        border: "1px solid transparent",
        transition: "background 0.3s",

        "&:hover": {
            background: "#1E1E1E0D",
            transition: "background 0.3s",
        },
    },
    activeTab: {
        background: "#fff",
        border: "1px solid #1E1E1E1A",
        transition: "border 0.3s",

        "&:hover": {
            border: "1px solid #1E1E1E73",
            transition: "border 0.3s",
            background: "#fff",
        },
    },
    content: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
    },
    button: {
        padding: "17px 24px",
        borderRadius: "50px",
        border: "1px solid #1E1E1E1A",
        color: "#1E1E1EB2",
        background: "#fff",
        cursor: "pointer",
        fontSize: "14px",
        transition: "all 0.3s",

        "&:hover": {
            background: "#fff",
            border: "1px solid #1E1E1E73",
            color: "#1E1E1EB2",
        },

        "&.active": {
            background: "#fff",
            border: "1px solid #1E1E1E",
            color: "#1E1E1E",

            "&:hover": {
                background: "#1E1E1E0D",
            },
        },
    },
    actions: {
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        paddingTop: "20px",
        borderTop: "1px solid #1E1E1E1A",
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
    applyButton: {
        padding: "17px 27px",
        background: "#ED1C24",
        color: "#fff",
        border: "none",
        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s ease",

        "&:hover": {
            backgroundColor: "#FF0711",
        },
    },
    checkboxGroup: {
        marginBottom: "16px",
    },
    checkboxLabel: {
        fontWeight: "500",
        marginBottom: "8px",
    },
    stationList: {
        listStyle: "none",
        padding: 0,
        display: "flex",
        alignItemsc: "center",
        flexWrap: "wrap",
        gap: "8px",
        marginTop: "12px",
    },

    checkbox: {
        appearance: "none",
        width: "20px",
        height: "20px",
        border: "2px solid #1E1E1E4D",
        borderRadius: "2px",
        margin: 0,
        cursor: "pointer",
        position: "relative",
        background: "#fff",
        transition: "all 0.3s ease",

        "&:checked": {
            backgroundColor: "#ED1C24",
            borderColor: "#ED1C24",
        },

        "&:checked::after": {
            content: '""',
            position: "absolute",
            inset: "-5px 0 0 0",
            margin: "auto",
            width: "5px",
            height: "10px",
            border: "solid white",
            borderWidth: "0 2px 2px 0",
            transform: "rotate(45deg)",
        },

        "& + label": {
            cursor: "pointer",
        },
    },

    checkboxDiv: {
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
});

export default useStyles;