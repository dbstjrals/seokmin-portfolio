import styled from "styled-components";
import bg1 from "../../shared/assets/bg1.jpg";

export const ProfileBG = styled.div`
  height: 540px;
  width: 100%;

  background: url(${bg1}) 50% no-repeat;
`;

export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 40px;

  width: 100%;
  max-width: 1140px;

  margin: 0 auto;
  padding: 112px 12px 0;
`;

export const Image = styled.img`
  width: 196px;
  min-width: 196px;
  height: 261px;
  border-radius: 8px;
`;

export const Description = styled.div`
  width: 100%;
  height: 261px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.span`
  display: block;
  padding-top: 4px;

  color: ${({ theme }) => `${theme.color.darkBlack}`};
  font-size: 42px;
  font-weight: 500;
`;

export const Name = styled.span`
  color: ${({ theme }) => `${theme.color.darkBlack}`};
  font-size: 54px;
  font-weight: 700;
`;

export const WelcomeMessage = styled.p`
  white-space: pre-wrap;

  color: ${({ theme }) => `${theme.color.primary}`};
  font-size: 28px;
  font-weight: 700;
  line-height: 1.5;
  text-align: right;
`;

export const ShowMoreButton = styled.button`
  position: absolute;
  bottom: -122px;
  left: calc(50% - 98px);

  border: none;
  border-radius: 36px;
  width: 196px;
  height: 64px;

  background-color: ${({ theme }) => `${theme.color.primary}`};

  color: white;
  font-size: 20px;

  ${({ theme }) => theme.onHover.buttonBigger}
`;
