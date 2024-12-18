import { makeStyles } from "@mui/styles";
import GlobalVars from "../App/GlobalVars";

export const useStyles = makeStyles({
    card: {
        display: "flex",
        flexDirection: "column",
        background: "#fff",
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, box-shadow 0.3s",
        cursor: "pointer",
        "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.15)",
        },
    },
    hover: {
        backgroundColor: "#fff",
    },
    imageWrapper: {
        position: "relative",
        width: "100%",
        height: "180px",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    topBadges: {
        position: "absolute",
        top: "10px",
        left: "10px",
        display: "flex",
        gap: "8px",
    },
    badge: {
        padding: "5px 10px",
        background: "rgba(255, 255, 255, 0.9)",
        borderRadius: "8px",
        fontSize: "12px",
        fontWeight: "bold",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
    },
    badgeShare: {
        padding: "5px",
        background: "rgba(255, 255, 255, 0.9)",
        borderRadius: "50%",
        fontSize: "14px",
        boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cardContent: {
        padding: "15px",
    },
    hoverContent: {
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    name: {
        fontSize: "16px",
        fontWeight: "bold",
        margin: "0 0 8px",
        color: "#333",
    },
    location: {
        fontSize: "14px",
        color: "#666",
        display: "flex",
        alignItems: "center",
        gap: "8px",
    },
    metroIcon: {
        fontSize: "14px",
        color: "red",
    },
    price: {
        marginTop: "10px",
        fontSize: "14px",
        fontWeight: "bold",
        color: "#e53935",
    },
    details: {
        fontSize: "14px",
        color: "#333",
    },
    unitList: {
        listStyle: "none",
        padding: 0,
        margin: 0,
    },
    unitItem: {
        display: "flex",
        justifyContent: "space-between",
        fontSize: "14px",
        color: "#333",
    },
    completionDate: {
        fontSize: "12px",
        color: "#666",
        marginTop: "10px",
    },
    detailsButton: {
        padding: "10px 15px",
        backgroundColor: "#e53935",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer",
        textAlign: "center",
        "&:hover": {
            backgroundColor: "#d32f2f",
        },
    },
    results: {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "32px",
        marginTop: "32px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            marginTop: "20px",
        },
    },
});

export default useStyles;
