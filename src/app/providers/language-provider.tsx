import { useEffect, useState } from "react";
import { detectLanguage, LanguageContext } from "../context/language-context";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<string>(detectLanguage);

  useEffect(() => {
    sessionStorage.setItem("language", language);
    document.title =
      language === "ko" ? "윤석민 | 포트폴리오" : "Yoon Seokmin | Portfolio";
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}
