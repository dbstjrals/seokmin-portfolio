import type { RefContextProps } from "../../app/context/ref-context";
import * as S from "./about-me-section.styled";
import Information from "./components/Information";
import Education from "./components/Education";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";
import Prize from "./components/Prize";

export function AboutMeSection({
  forwardRef,
}: {
  forwardRef: RefContextProps;
}) {
  return (
    <S.AboutMeSection ref={forwardRef.aboutMeRef}>
      <S.AboutMeWrapper>
        <SectionTitle />
        <Details />
      </S.AboutMeWrapper>
    </S.AboutMeSection>
  );
}

function SectionTitle() {
  return <S.SectionTitle>About Me</S.SectionTitle>;
}

function Details() {
  return (
    <S.Details>
      <S.DetailLeft>
        <Information />
        <Education />
        <Certificate />
      </S.DetailLeft>
      <S.DetailRight>
        <Skills />
        <Prize />
      </S.DetailRight>
    </S.Details>
  );
}
