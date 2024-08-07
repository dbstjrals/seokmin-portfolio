import { useLanguage } from "../../app/context/language-context";
import { useRefs } from "../../app/context/ref-context";
import Translation from "../../shared/components/Translation";
import useScroll from "../../shared/hooks/useScroll";
import { scrollToSection, scrollToTop } from "../../shared/utils/scrollUtils";
import * as S from "./header.styled";

export function Header() {
  const { aboutMeRef, projectRef } = useRefs();
  const { setLanguage } = useLanguage();
  const isScrolled = useScroll(72);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ko" ? "en" : "ko"));
  };

  return (
    <S.Header $isScrolled={isScrolled}>
      <S.HeaderContent>
        <S.Logo onClick={scrollToTop}>YSM's Portfolio</S.Logo>
        <S.Nav>
          <S.NavItem onClick={toggleLanguage}>
            <Translation id='languageToggle' />
          </S.NavItem>
          <ScrollNavItems name='About Me' forwardRef={aboutMeRef} />
          <ScrollNavItems name='Projects' forwardRef={projectRef} />
        </S.Nav>
      </S.HeaderContent>
    </S.Header>
  );
}

function ScrollNavItems({
  name,
  forwardRef,
}: {
  name: string;
  forwardRef?: React.RefObject<HTMLElement>;
}) {
  return (
    <S.NavItem onClick={() => forwardRef && scrollToSection(forwardRef)}>
      {name}
    </S.NavItem>
  );
}
