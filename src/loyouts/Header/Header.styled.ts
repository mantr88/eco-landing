import styled from "styled-components";

interface ScrollingProps {
  scrolling: boolean;
}

export const HeaderWrap = styled.header`
  position: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  margin: 0;
  padding-top: 36px;
  top: 0;
  min-width: 360px;
  background-color: ${(props) => props.theme.colors.main_bg};
  z-index: 999;
`;

export const CompanyTitle = styled.p<ScrollingProps>`
  margin-left: 4px;
  font-family: "FONTSPRING DEMO - All Round Gothic Thick";
  font-size: 33px;
  font-weight: 500;
  letter-spacing: -1.32px;

  color: ${(props) =>
    props.scrolling ? props.theme.colors.accent : props.theme.colors.main_text};

  transition: color 0.4s;
  &:hover {
    color: ${(props) => props.theme.colors.accent};
  }
`;

export const Tagline = styled.p`
  margin-top: 7px;
  margin-left: 4px;
  font-family: "CA Saygon Text";
  font-size: 10px;
  line-height: 1.1;
  letter-spacing: -0.4px;
`;
export const AccentText = styled.span`
  color: ${(props) => props.theme.colors.accent};
`;

export const BurgerWrap = styled.div`
  margin-left: 11px;
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
