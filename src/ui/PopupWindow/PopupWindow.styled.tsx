import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  z-index: 1000;

  background: ${(props) => props.theme.colors.mobile_menu_overlay_bg};

  backdrop-filter: blur(2px);
`;

export const Content = styled.div`
  position: absolute;
  top: 0;
  width: 320px;
  height: 100vh;
  margin-top: 36px;
  margin-bottom: 36px;
  padding: 24px;
  border-radius: 25px;
  background-color: ${(props) => props.theme.colors.mobile_menu_bg};
  backdrop-filter: blur(12.5px);

  @media screen and (min-width: ${(props) => props.theme.breakpoints.s}) {
    right: 4%;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    right: 2.5%;
  }
`;
