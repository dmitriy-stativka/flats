import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    actions: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "20px",
        paddingTop: "20px",
        borderTop: "1px solid #ddd",
    },
    resetButton: {
        fontSize: "16px",
        fontWeight: "500",
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
        fontWeight: "500",

        cursor: "pointer",
        fontSize: "16px",
        transition: "all 0.3s ease",

        "&:hover": {
            backgroundColor: "#FF0711",
        },
    },
});

export default useStyles;
