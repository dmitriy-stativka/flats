import { makeStyles } from "@mui/styles";

export const useGlobalStyles = makeStyles({
    "@global": {
        button: {
            fontFamily: "inherit",
            background: "transparent",
            border: "none",
            padding: 0,
        },

        ul: {
            padding: 0,
            margin: 0,
        },

        li: {
            listStyle: "none",
        },

        img: {
            display: "block",
        },

        body: {
            margin: 0,
        },

        ".disabled": {
            opacity: 0.5,
            pointerEvents: "none",
        },
    },
});

export default useGlobalStyles;
