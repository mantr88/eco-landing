import styled from "styled-components";

export const HeaderWrap = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
`;

export const CompanyTitle = styled.p`
  margin-left: 4px;
  font-family: "FONTSPRING DEMO - All Round Gothic Thick";
  font-size: 38px;
  font-weight: 500;
  letter-spacing: -1.32px;
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
`;
