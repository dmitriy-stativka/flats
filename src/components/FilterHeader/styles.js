import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    filterHeader: {
        display: "flex",
        background: "#FFFFFF",
        border: "1px solid rgba(30, 30, 30, 0.1)",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.06)",
        borderRadius: "6px",
        transition: "background 0.5s",
        marginBottom: "20px",

        "& > *": {
            flex: 1,
            padding: "23px 30px",
            margin: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            borderRadius: "6px",
            backgroundColor: "transparent",
            border: "1px solid transparent",
            cursor: "pointer",
            transition: "border 0.5s, box-shadow 0.5s, background-color 0.5s",

            "&:after": {
                content: '""',
                position: "absolute",
                right: 0,
                top: 0,
                bottom: 0,
                margin: "auto",
                width: "1px",
                height: "48px",
                backgroundColor: "#e0e0e0",
                transition: "opacity 0.5s",
            },

            "&:hover": {
                background: "#1E1E1E0D",

                transition: "border 0.5s, box-shadow 0.5s, background 0.5s",

                "&:after": {
                    opacity: 0,
                    transition: "opacity 0.5s",
                },
            },

            "&.show": {
                boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
                border: "1px solid rgba(30, 30, 30, 0.1)",
                transition:
                    "border 0.5s, box-shadow 0.5s, backgroundColor 0.5s",

                "&:after": {
                    opacity: 0,
                    transition: "opacity 0.5s",
                },

                "&:hover": {
                    background: "#fff",
                    transition: "background 0.5s",
                },
            },

            "&:last-child": {
                "&:after": {
                    display: "none",
                },
                "& > :last-child": {
                    left: "initial",
                    right: 0,
                },
            },
        },

        "&.show": {
            backgroundColor: "#1E1E1E0D",
            transition: "background 0.5s",

            "& > *": {
                "&:hover": {
                    background: "#1E1E1E0D",
                    transition: "background 0.5s",
                },
            },
        },
    },
    filterItem: {
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
});

export default useStyles;
