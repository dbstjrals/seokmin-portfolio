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
        <S.Image src={profile} alt='프로필 사진' />
        <S.Description>
          <S.Title>
            <Translation id='profileTitle' />
          </S.Title>
          <S.Name>
            <Translation id='name' />
          </S.Name>
          <S.WelcomeMessage>
            <Translation id='welcomeMessage' />
          </S.WelcomeMessage>
        </S.Description>
        <S.ShowMoreButton onClick={() => scrollToSection(aboutMeRef)}>
          <Translation id='start' />
        </S.ShowMoreButton>
      </S.ProfileWrapper>
    </S.ProfileBG>
  );
}
