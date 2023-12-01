import styled from "styled-components";

export const MobileMenuWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  color: ${(props) => props.theme.colors.mobile_menu_text};
  letter-spacing: -0.64px;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 21.5px;
    width: 272px;
    height: 1px;
    background: ${(props) => props.theme.colors.mobile_menu_text};
  }
`;

export const NavList = styled.ul`
  margin-top: 24px;
  color: ${(props) => props.theme.colors.mobile_menu_text};
  font-family: "Fira Sans";
  font-size: 24px;
  letter-spacing: -0.96px;
`;

export const ItemList = styled.li`
  display: flex;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.accent};
  }

  &:hover svg path,
  &:focus svg parh {
    stroke: ${(props) => props.theme.colors.accent};
  }
  & :not(:last-child) {
    margin-bottom: 8px;
  }

  & > p {
    margin-right: 8px;
  }
`;
export const NetworkWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 100%;
  & > div {
    &:hover svg path,
    &:focus svg path {
      stroke: ${(props) => props.theme.colors.accent};
    }
  }
`;

// export const FacebookWrap = styled.div`
//   &:hover path,
//   &:focus path {
//     stroke: ${(props) => props.theme.colors.accent};
//   }
// `;
