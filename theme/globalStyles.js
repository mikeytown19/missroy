import { globalCss } from "./stitches.config";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/400.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/800.css";

const globalStyles = globalCss({
  "html,body": {
    margin: "0",
    padding: "0",
    fontFamily: "$body",
  },
  "*": {
    boxSizing: "inherit",
    "&::before,&::after": { boxSizing: "inherit" },
    "&::-moz-focus-inner": { border: "0" },
  },
  "h1, h2, h3, h4, h5, h6, p": {
    color: "$slate12",
    mt: "0",
  },
  h1: {
    fontWeight: "700",
    fontSize: "$10",
    lineHeight: "$10",
    mb: "$4",
    "@bp2": {
      fontWeight: "700",
      fontSize: "$8",
      lineHeight: "$9",
    },
  },
  h2: {
    fontWeight: "700",
    fontSize: "$8",
    lineHeight: "$9",
    mb: "$4",
    "@bp2": {
      fontWeight: "700",
      fontSize: "$7",
      lineHeight: "$8",
    },
  },
  h3: {
    fontWeight: "700",
    fontSize: "$7",
    lineHeight: "$7",
    mb: "$4",
    "@bp2": {
      fontWeight: "700",
      fontSize: "$6",
      lineHeight: "$8",
    },
  },
  h4: {
    fontWeight: "700",
    fontSize: "$5",
    lineHeight: "$7",
    mb: "$3",
    color: "$dark",
  },
  h5: {
    fontWeight: "500",
    fontSize: "$4",
    lineHeight: "$4",
    mb: "$3",
  },
  h6: {
    fontWeight: "500",
    fontSize: "$3",
    lineHeight: "$3",
    mb: "$2",
  },
  p: {
    fontSize: "$2",
    lineHeight: "$5",
    mb: "$2",
    fontWeight: "400",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "input, textarea, button": {
    fontFamily: "DM Sans",
  },
  ul: {
    listStyle: "none",
    padding: "0",
    margin: "0",
  },
  li: {
    padding: "0",
    margin: "0",
  },
  "ul,ol": {
    paddingLeft: "0",
    marginLeft: "0",
  },
  "ul li,ol li": {
    paddingLeft: "0",
    marginLeft: "0",
  },
});

export default globalStyles;
