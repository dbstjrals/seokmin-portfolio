import styled from "styled-components";
import { SectionWrapper } from "../../shared/components/Section";

export const AboutMeSection = styled.section`
  background: linear-gradient(
    to right bottom,
    rgba(120, 198, 232, 0.5),
    rgba(123, 154, 204, 0.7)
  );
`;

export const AboutMeWrapper = styled(SectionWrapper)``;

export const Details = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  padding-left: 12px;
`;

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;
export const DetailLeft = styled(DetailsWrapper)``;
export const DetailRight = styled(DetailsWrapper)``;

const DetailItem = styled.div`
  h3 {
    display: block;
    margin-bottom: 12px;

    color: ${({ theme }) => theme.color.darkBlack};
    font-size: 32px;
    font-weight: 700;
    line-height: 1.5;
  }
`;
export const Information = styled(DetailItem)``;
export const Education = styled(DetailItem)``;
export const Certificate = styled(DetailItem)``;
export const Skills = styled(DetailItem)``;
export const Prize = styled(DetailItem)`
  min-width: 492px;
`;

export const InformationItems = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 6px 0;

  font-size: 20px;
  color: ${({ theme }) => theme.color.gray};
`;

export const SkillsItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;

  font-size: 20px;

  h4 {
    display: block;
    min-width: 180px;
    font-weight: 500;
    color: ${({ theme }) => theme.color.black};
  }

  span {
    color: ${({ theme }) => theme.color.gray};
  }
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  font-size: 20px;
  line-height: 1.6;

  h4 {
    font-weight: 500;
    color: ${({ theme }) => theme.color.black};
  }

  p {
    color: ${({ theme }) => theme.color.gray};
  }
`;
