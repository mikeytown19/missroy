import { styled } from "../../theme/stitches.config";

export const Button = styled("button", {
  appearance: "none",
  display: "inline-block",
  lineHeight: "1.4em",
  outline: "none",
  border: "none",
  borderRadius: "8px",
  padding: "15px",
  fontWeight: 600,
  fontSize: "16px",
  background: "$primary",
  cursor: "pointer",
  color: "rgb(255, 255, 255)",
  zIndex: 1,
  opacity: 1,
  px: "$7",
  transition: "background-color .2s ease-out, color .2s ease-out",
  "&:hover": {
    bg: "$primary_dark",
  },

  variants: {
    bg: {
      primary: {
        bg: "$primary",
        "&:hover": { boxShadow: "$md", bg: "$primary_dark" },
      },
      secondary: { bg: "$secondary" },
    },
    size: {
      thin: {
        px: "$8",
        py: "$1",
        fontSize: "$2",
      },
    },
  },
});

export const ButtonWrapper = styled("a", {
  "&:hover": {
    textDecoration: "none",
  },
});
