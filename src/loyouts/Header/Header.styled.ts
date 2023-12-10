import styled from "styled-components";

interface ScrollingProps {
  scrolling: boolean;
}

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  margin: 0;
  padding-top: 36px;
  background-color: ${(props) => props.theme.colors.main_bg};
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
    fill: ${(props) =>
      props.scrolling
        ? props.theme.colors.accent
        : props.theme.colors.main_text};
  }

  &:hover {
    path {
      fill: ${(props) => props.theme.colors.accent};
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
  background: ${(props) => props.theme.colors.accent_light};

  &:hover {
    background: ${(props) => props.theme.colors.accent};
  }
`;
