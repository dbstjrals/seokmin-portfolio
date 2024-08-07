import styled from "styled-components";

const StyledSectionTitle = styled.div<{ $bg?: string }>`
  display: inline-block;
  padding: 12px 20px;
  margin-bottom: 48px;

  background-color: ${({ $bg }) => ($bg ? $bg : "#a2d0ef")};
  border-radius: 8px;

  color: ${({ theme }) => theme.color.white};
  font-size: 36px;
  font-weight: 600;
  line-height: 1.5;
`;

export function SectionTitle({ title, bg }: { title: string; bg?: string }) {
  return <StyledSectionTitle $bg={bg}>{title}</StyledSectionTitle>;
}

export const SectionWrapper = styled.div`
  width: 100%;
  max-width: 1140px;

  margin: 0 auto;
  padding: 48px 12px;
`;
