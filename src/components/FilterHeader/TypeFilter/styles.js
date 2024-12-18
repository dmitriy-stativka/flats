import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    container: {
        position: "relative",
    },
    title: {
        margin: "0 0 8px 0",
        fontSize: "16px",
        color: "#1E1E1E",
        fontWeight: "500",
    },
    subtitle: {
        margin: 0,
        fontSize: "16px",
        color: "#1E1E1EB2",
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
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        border: "1px solid #ddd",
        borderRadius: "6px",
        padding: "30px",
        zIndex: 10,
    },
    content: {
        display: "flex",
        flexWrap: "wrap",
        gap: "10px",
    },
    button: {
        padding: "15px 19px",
        borderRadius: "50px",
        border: "1px solid #1E1E1E1A",
        color: "#1E1E1EB2",
        background: "#fff",
        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s",
        height: "52px",

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
});

export default useStyles;
