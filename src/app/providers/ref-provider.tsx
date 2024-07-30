import { useRef } from "react";
import { RefContext } from "../context/ref-context";

export const RefProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const aboutMeRef = useRef<HTMLElement>(null);
  // 필요한 다른 ref도 여기에 추가

  return (
    <RefContext.Provider value={{ aboutMeRef }}>{children}</RefContext.Provider>
  );
};
