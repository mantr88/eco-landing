import styled from "styled-components";

export const ValuesItem = styled.li`
  height: 197px;

  padding: 13px 12px;

  background: ${(props) => props.theme.colors.second_bg};
`;

export const TitleWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding-bottom: 33px;

  &::after {
    content: "";
    position: absolute;
    top: 57px;
    width: 124px;
    height: 1px;
    background: ${(props) => props.theme.colors.accent};
  }
`;

export const ValuesTitle = styled.h4`
  font-family: "Oswald";
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;
`;

export const ValuesDesc = styled.p`
  margin-top: 12px;
  text-align: justify;
  font-size: 14px;
  letter-spacing: -0.56px;
`;
