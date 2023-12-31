import styled from 'styled-components';

interface ScrollingProps {
  scrolling: string;
}

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0;
  padding-top: 36px;
  padding-bottom: 16px;
  background-color: ${props => props.theme.colors.main_bg};
  z-index: 999;
`;

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const CompanyTitle = styled.div<ScrollingProps>`
  path {
    transition: fill 0.4s;
    fill: ${props => (props.scrolling === 'true' ? props.theme.colors.accent : props.theme.colors.main_text)};
  }

  &:hover {
    path {
      fill: ${props => props.theme.colors.accent};
    }
  }
`;

export const BurgerBtn = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 39px;
  padding: 4px 12px;
  border-radius: 500px;
  background: ${props => props.theme.colors.accent_light};
  transition: background-color 0.4s;

  &:hover {
    background: ${props => props.theme.colors.accent};
  }
`;

export const Nav = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 12px;
`;

export const HeaderLink = styled.a`
  display: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    padding: 10px 16px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    letter-spacing: -0.64px;

    border-radius: 500px;
    background-color: ${props => props.theme.colors.accent};

    transition: all 0.4s;

    & circle {
      transition: all 0.4s;
    }
    &:hover {
      background: ${props => props.theme.colors.main_text};
      color: ${props => props.theme.colors.accent};
    }

    &:hover circle {
      fill: ${props => props.theme.colors.accent};
    }
  }
`;
