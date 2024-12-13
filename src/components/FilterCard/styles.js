import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    imageWrapper: {
        position: "relative",
        width: "100%",
        height: "320px",
        borderRadius: "8px",
        overflow: "hidden",

        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },

    completionDate: {
        display: "block",
        margin: "15px 0",
    },

    price: {
        display: "block",
    },

    priceItem: {
        textAlign: "right",
    },

    area: {
        textAlign: "left",
        color: "#1E1E1E73",
    },

    unitsList: {
        margin: "15px 0",
    },

    type: {
        color: "#ED1C24",
    },

    bottom: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    },

    button: {
        color: "#ED1C24",
        textDecoration: "underline",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",
    },

    unitsListItem: {
        display: "grid",
        gap: "8px",
        gridTemplateColumns: "3fr 2fr 4fr",
        margin: "8px 0",
    },

    list: {
        position: "absolute",
        top: "12px",
        left: "12px",
        display: "flex",
        gap: "6px",
    },

    locationList: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
        marginBottom: "8px",
    },

    locationListItem: {
        display: "flex",
        gap: "4px",
        alignItems: "center",

        "& > img": {
            width: "22px",
            height: "22px",
        },
    },

    name: {
        fontSize: "22px",
        fontWeight: "500",
        margin: "15px 0 8px 0",
    },

    listItem: {
        background: "#fff",
        borderRadius: "50px",
        fontSize: "14px",
        padding: "4px 10px",
        display: "flex",
        alignItems: "center",
        gap: "4px",
    },

    hoverCard: {
        position: "absolute",
        bottom: "0",
        width: "100%",
        background: "#fff",
        transform: "translateY(calc(100% - 100px))",
        transition: "transform 0.5s",

        "&:after": {
            content: '""',
            position: "absolute",
            width: "8px",
            height: "8px",
            backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.9798 0C7.68605 4.15086 4.22562 7.42703 0 7.42703H7.9798V0Z' fill='white'/%3E%3C/svg%3E%0A\")",

            top: "-7px",
            right: "0px",
        },

        "&:before": {
            content: '""',
            position: "absolute",
            width: "8px",
            height: "8px",
            backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='8' height='8' viewBox='0 0 8 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.9798 0C7.68605 4.15086 4.22562 7.42703 0 7.42703H7.9798V0Z' fill='white'/%3E%3C/svg%3E%0A\")",

            top: "-7px",
            left: "0px",
            transform: "scale(-1, 1)",
        },
    },

    card: {
        overflow: "hidden",
        maxHeight: "420px",
        position: "relative",
        paddingBottom: "100px",

        "&:hover": {
            "& $hoverCard": {
                transform: "translateY(0)",
                transition: "transform 0.5s",
            },

            "& $price": {
                display: "none",
            },
        },
    },
});

export default useStyles;
