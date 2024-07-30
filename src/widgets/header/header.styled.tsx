import styled from "styled-components";

export const Header = styled.header<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;

  width: 100%;
  height: 72px;

  background-color: ${({ $isScrolled }) =>
    $isScrolled ? "white" : "transparent"};
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1140px;
  margin: 0 auto;
  padding: 24px;
`;

export const Logo = styled.div`
  color: ${({ theme }) => theme.color.primary};
  font-size: 24px;
  font-weight: 700;

  cursor: pointer;

  ${({ theme }) => theme.onHover.highlight}
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const NavItem = styled.div`
  cursor: pointer;

  color: ${({ theme }) => theme.color.primary};
  font-size: 18px;
  font-weight: 700;

  ${({ theme }) => theme.onHover.highlight}
  ${({ theme }) => theme.onHover.buttonBigger}
`;
