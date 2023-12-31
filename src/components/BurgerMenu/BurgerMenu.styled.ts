import styled from 'styled-components';

export const MobileMenuContainer = styled.div`
  height: 100%;
`;

export const MobileMenuWrap = styled.div`
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: start;
  color: ${props => props.theme.colors.mobile_menu_text};
  letter-spacing: -0.64px;
  transition: color 0.4s;

  & svg path {
    transition: stroke 0.4s;
  }

  &:hover svg path {
    stroke: ${props => props.theme.colors.accent};
  }

  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.accent};
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 21.5px;
    width: 272px;
    height: 1px;
    background: ${props => props.theme.colors.mobile_menu_text};
  }
`;

export const CloseText = styled.span`
  margin-bottom: 1px;
`;

export const NavList = styled.ul`
  margin-top: 24px;
  color: ${props => props.theme.colors.mobile_menu_text};
  font-family: 'Fira Sans';
  font-size: 24px;
  letter-spacing: -0.96px;
`;

export const ItemList = styled.li`
  display: flex;
  transition: all 0.4s;

  &:hover,
  &:focus {
    cursor: pointer;
    color: ${props => props.theme.colors.accent};
  }

  & svg path {
    transition: all 0.4s;
  }

  &:hover svg path,
  &:focus svg path {
    cursor: pointer;
    stroke: ${props => props.theme.colors.accent};
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
  margin-top: 395px;
`;
