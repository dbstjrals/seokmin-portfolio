import * as S from "./profile-section.styled";
import profile from "../../shared/assets/profile.jpg";
import Translation from "../../shared/components/Translation";
import { useRefs } from "../../app/context/ref-context";
import { scrollToSection } from "../../shared/utils/scrollUtils";

export function ProfileSection() {
  const { aboutMeRef } = useRefs();

  return (
    <S.ProfileBG>
      <S.ProfileWrapper>
        <S.ProfileImage src={profile} />
        <S.ProfileDescription>
          <S.MainDescription>
            <Translation id='profileMainDescription' />
          </S.MainDescription>
          <S.SubDescription>
            <Translation id='profileSubDescription' />
          </S.SubDescription>
        </S.ProfileDescription>
        <S.ShowMoreButton onClick={() => scrollToSection(aboutMeRef)}>
          <Translation id='start' />
        </S.ShowMoreButton>
      </S.ProfileWrapper>
    </S.ProfileBG>
  );
}
