import { makeStyles } from "@mui/styles";
import GlobalVars from "../App/GlobalVars";

export const useStyles = makeStyles({
    imageWrapper: {
        position: "relative",
        width: "100%",
        height: "320px",
        borderRadius: "8px",
        overflow: "hidden",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            height: "200px",
        },

        "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover",
        },
    },

    completionDate: {
        display: "block",
        margin: "16px 0",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            margin: "6px 0",
            color: "#1E1E1EB2",
            fontSize: "14px",
        },
    },

    price: {
        display: "block",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "14px",
            color: "#1E1E1EB2",
        },
    },

    priceItem: {
        textAlign: "right",
        fontWeight: "400",
    },

    area: {
        textAlign: "left",
        color: "#1E1E1E73",
        fontWeight: "400",
    },

    unitsList: {
        margin: "16px 0",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            display: "none",
        },
    },

    type: {
        color: "#ED1C24",
        fontWeight: "400",
    },

    bottom: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            marginTop: "12px",
        },
    },

    button: {
        color: "#ED1C24",
        borderBottom: "1px solid #ED1C24",
        fontSize: "16px",
        fontWeight: "500",
        cursor: "pointer",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "14px",
        },
    },

    units: {
        fontSize: "16px",
        fontWeight: "500",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "14px",
        },
    },

    unitsListItem: {
        display: "grid",
        gap: "8px",
        gridTemplateColumns: "3fr 2fr 4fr",
        margin: "8px 0",
    },

    list: {
        position: "absolute",
        zIndex: 2,
        top: "12px",
        left: "12px",
        display: "flex",
        gap: "6px",
    },

    locationList: {
        display: "flex",
        gap: "16px",
        alignItems: "center",
        marginBottom: "8px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "14px",
        },
    },

    locationListItem: {
        display: "flex",
        gap: "4px",
        alignItems: "center",

        "& > img": {
            width: "20px",
            height: "20px",
        },
    },

    name: {
        fontSize: "22px",
        fontWeight: "500",
        margin: "16px 0 8px 0",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "20px",
            margin: "12px 0",
        },
    },

    listItem: {
        background: "#fff",
        borderRadius: "50px",
        fontSize: "14px",
        padding: "7.5px 17px",
        display: "flex",
        alignItems: "center",
        gap: "4px",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            fontSize: "12px",
            padding: "6px 8px",
        },

        "& svg": {
            width: "16px",
            height: "16px",

            "& path": {
                strokeOpacity: "1",
            },

            "& circle": {
                strokeOpacity: "1",
            },

            "& line": {
                strokeOpacity: "1",
            },
        },
    },

    hoverCard: {
        position: "absolute",
        bottom: "0",
        width: "100%",
        background: "#fff",
        transform: "translateY(calc(100% - 100px))",
        transition: "transform 0.5s",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            transform: "translateY(0)",
            position: "static",
        },

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

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            paddingBottom: "0",
            maxHeight: "100%",
        },

        "&:hover": {
            "& $hoverCard": {
                transform: "translateY(0)",
                transition: "transform 0.5s",
            },

            "& $price": {
                display: "none",

                [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
                    display: "block",
                },
            },
        },
    },

    desktopView: {
        display: "block",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            display: "none",
        },
    },
    mobileView: {
        display: "none",

        [`@media (max-width: ${GlobalVars.breakpoints.md})`]: {
            display: "block",
            height: "100%",

            "& .swiper": {
                height: "100%",
            },

            "& .swiper-pagination-bullet": {
                backgroundColor: "#fff",
                opacity: 0.6,
                width: "40px",
                height: "2px",
                borderRadius: "0",
            },

            "& .swiper-pagination-bullet-active": {
                backgroundColor: "#fff",
                opacity: 1,
            },
        },
    },

    image: {
        width: "100%",
        height: "auto",
        objectFit: "cover",
    },
});

export default useStyles;
