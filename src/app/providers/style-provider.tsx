import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";

export function StyleProvider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  );
}
