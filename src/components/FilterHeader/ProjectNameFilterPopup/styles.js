import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
    filterOptionsContainer: {
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
    },
    filterButton: {
        padding: "5px 10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
        cursor: "pointer",
    },
    active: {
        backgroundColor: "#f0f0f0",
        fontWeight: "bold",
    },
    popupOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    popupContent: {
        backgroundColor: "#fff",
        borderRadius: "8px",
        padding: "20px",
        maxWidth: "600px",
        width: "100%",
    },
    closePopupButton: {
        marginTop: "10px",
        padding: "5px 10px",
        backgroundColor: "#f44",
        color: "#fff",
        border: "none",
        cursor: "pointer",
    },
}));
