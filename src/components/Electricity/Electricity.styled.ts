import styled from "styled-components";

export const ElectricitySection = styled.section`
  position: relative;
  margin-top: 36px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 100px;
    text-align: center;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 120px;
  }
`;

export const ElectricityTitleWrap = styled.div`
  text-align: center;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: inline-block;
    width: 368px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 491px;
  }
`;

export const CountWrap = styled.div`
  position: relative;
  margin-top: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 111px;
    gap: 24px;
  }

  &::before {
    content: "";

    position: absolute;
    top: -72px;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 48px;

    background: ${(props) => props.theme.colors.accent};

    @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
      height: 87px;
      top: -111px;
    }
  }
`;

export const Count = styled.p`
  color: ${(props) => props.theme.colors.accent};
  text-align: center;
  font-family: "Oswald";
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 100px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 164px;
  }
`;

export const CountUnit = styled.p`
  text-align: center;
  font-family: "Oswald";
  font-size: 24px;
  line-height: 1;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 28px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 48px;
  }
`;
