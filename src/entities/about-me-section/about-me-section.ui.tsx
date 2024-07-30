import type { RefContextProps } from "../../app/context/ref-context";
import * as S from "./about-me-section.styled";

export function AboutMeSection({
  forwardRef,
}: {
  forwardRef: RefContextProps;
}) {
  return (
    <S.AboutMeSection ref={forwardRef.aboutMeRef}>
      <S.AboutMeWrapper>
        <S.SectionTitle>About Me</S.SectionTitle>
      </S.AboutMeWrapper>
    </S.AboutMeSection>
  );
}
