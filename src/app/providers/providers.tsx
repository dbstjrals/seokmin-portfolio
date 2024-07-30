import { LanguageProvider } from "./language-provider";
import { BrowserRouter } from "./router-provider";
import { StyleProvider } from "./style-provider";

export function Providers() {
  return (
    <StyleProvider>
      <LanguageProvider>
        <BrowserRouter />
      </LanguageProvider>
    </StyleProvider>
  );
}
