import * as S from "./about-me-section.styled";
import { SectionTitle } from "../../shared/components/Section";
import Information from "./components/Information";
import Education from "./components/Education";
import Certificate from "./components/Certificate";
import Skills from "./components/Skills";
import Prize from "./components/Prize";

export function AboutMeSection({
  forwardRef,
}: {
  forwardRef: React.RefObject<HTMLElement>;
}) {
  return (
    <S.AboutMeSection ref={forwardRef}>
      <S.AboutMeWrapper>
        <SectionTitle title='About Me' />
        <Details />
      </S.AboutMeWrapper>
    </S.AboutMeSection>
  );
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
