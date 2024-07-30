import { css } from "styled-components";

function fontStyler(fontSize: string, fontWeight: number, lineHeight: string) {
  return css`
    font-size: ${fontSize};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
  `;
}

export const theme = {
  color: {
    primary: "#7B9ACC",
    secondary: "#d7c49e",

    background: "#FFFFFF",
  },
  onHover: {
    highlight: css`
      transition: color 0.2s ease-in-out;

      &:hover {
        color: #d7c49e;
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
