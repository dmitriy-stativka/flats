import { makeStyles } from "@mui/styles";
import GlobalVars from "./GlobalVars";

import "../../../src/index.css";

export const useBaseStyles = makeStyles({
    wrapper: {
        padding: "32px",
        maxWidth: GlobalVars.breakpoints.xl,
        margin: "auto",

        [`@media (max-width: ${GlobalVars.breakpoints.xl})`]: {
            padding: "20px",
        },
    },
});

export default useBaseStyles;
