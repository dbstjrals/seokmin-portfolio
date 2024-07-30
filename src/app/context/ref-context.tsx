import { createContext, useContext } from "react";

export interface RefContextProps {
  aboutMeRef: React.RefObject<HTMLElement>;
  // 필요한 다른 ref도 여기에 추가
}

export const RefContext = createContext<RefContextProps | undefined>(undefined);

export const useRefs = () => {
  const context = useContext(RefContext);
  if (!context) {
    throw new Error("useRefs must be used within a RefProvider");
  }
  return context;
};
