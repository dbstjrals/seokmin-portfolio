import styled from "styled-components";
import bg1 from "../../shared/assets/bg1.jpg";

export const ProfileBG = styled.div`
  height: 600px;
  width: 100%;

  background: url(${bg1}) 50% no-repeat;
`;

export const ProfileWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 40px;

  width: 100%;
  max-width: 1140px;
  height: 420px;

  margin: 0 auto;
  padding: 160px 12px 0;
`;

export const ProfileImage = styled.img`
  width: 196px;
  min-width: 196px;
  height: 261px;
  border-radius: 8px;
`;

export const ProfileDescription = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MainDescription = styled.p`
  white-space: pre-wrap;
  padding-top: 4px;

  color: ${({ theme }) => `${theme.color.primary}`};
  font-size: 48px;
  font-weight: 700;
  line-height: 1.5;
`;

export const SubDescription = styled.p`
  white-space: pre-wrap;

  color: #78c6e8;
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
