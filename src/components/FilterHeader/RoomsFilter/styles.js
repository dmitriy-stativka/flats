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
    content: {
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
    },
    checkboxItem: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
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
            backgroundColor: "#c70000",
        },
    },
});

export default useStyles;
