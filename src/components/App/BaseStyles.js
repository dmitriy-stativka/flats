import { makeStyles } from "@mui/styles";
import GlobalVars from "./GlobalVars";

export const useBaseStyles = makeStyles({
    wrapper: {
        padding: "50px 70px",
        maxWidth: GlobalVars.breakpoints.xl,
        margin: "auto",
        fontFamily: "Inter, sans-serif",

        // [`@media (max-width: ${theme.breakpoints.xl})`]: {
        //     background: "red",
        // },

        // hover

        // "&:hover": {
        //     background: "rgba(30, 30, 30, 0.05)",
        // },
    },
});

export default useBaseStyles;
