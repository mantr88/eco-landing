import styled from "styled-components";

export const AboutSection = styled.section`
  margin-top: 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 40px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 36px;
  }
`;

export const AdressBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: -0.64px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CopyrightText = styled.p`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: block;
  }
`;

export const ImageThumb = styled.div`
  margin-top: 36px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 40px;
  }
`;

export const TitleValuesWrap = styled.div`
  margin-top: 36px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: 94px;
    margin-top: 100px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 120px;
  }
`;

export const ValuesTitleWrap = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 365px;
  }
`;

export const AboutText = styled.p`
  text-align: justify;
  letter-spacing: -0.64px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    position: relative;
    margin-top: 36px;
    width: 342px;

    &::before {
      content: " ";
      position: absolute;
      top: 4px;
      left: -11px;
      width: 1px;
      height: 110px;
      background: ${(props) => props.theme.colors.accent};
    }
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 630px;
    margin-top: 0;
  }
`;
