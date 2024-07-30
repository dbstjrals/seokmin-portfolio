import { createContext, useContext } from "react";

interface LanguageContextProps {
  language: string;
  setLanguage: React.Dispatch<React.SetStateAction<string>>;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

/**
 * User Language를 검사하는 함수
 *
 * 먼저 Session Storage에 저장된 language를 확인함.
 *
 * 없다면, 브라우저의 언어를 확인하여 "ko" 혹은 "en"을 return
 *
 * @returns {string}
 */
export const detectLanguage = (): string => {
  const storedLanguage = sessionStorage.getItem("language");
  if (storedLanguage) {
    return storedLanguage;
  }

  const browserLanguage = navigator.language;
  return browserLanguage.startsWith("ko") ? "ko" : "en";
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("No Language Context");
  }

  return context;
};
