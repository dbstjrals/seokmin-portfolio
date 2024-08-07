import { css } from "styled-components";

// function fontStyler(fontSize: string, fontWeight: number, lineHeight: string) {
//   return css`
//     font-size: ${fontSize};
//     font-weight: ${fontWeight};
//     line-height: ${lineHeight};
//   `;
// }

const COLORS = {
  primary: "#7B9ACC",
  primary50: "#78C6E8",
  secondary: "rgba(215, 196, 158, 1)",
  darkBlack: "#263B5D",
  black: "#171717",
  white: "#FFFFFF",
  gray: "rgba(96, 96, 96, 1)",

  background: "#FFFFFF",
};

export const theme = {
  color: {
    primary: `${COLORS.primary}`,
    primary50: `${COLORS.primary50}`,
    secondary: `${COLORS.secondary}`,
    darkBlack: `${COLORS.darkBlack}`,
    black: `${COLORS.black}`,
    gray: `${COLORS.gray}`,
    white: `${COLORS.white}`,

    background: `${COLORS.background}`,
  },
  onHover: {
    highlight: css`
      transition: color 0.2s ease-in-out;

      &:hover {
        color: ${COLORS.secondary};
      }
    `,
    buttonBigger: css`
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.03);
      }
    `,
  },
};
