import styled from "styled-components";

export const BannerSection = styled.section`
  position: relative;
  padding-top: 222px;
  & > * {
    margin-bottom: 24px;
  }

  &::after {
    content: " ";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 320px;
    height: 1px;

    border-radius: 100%;
    background: #97d28b;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: flex;
    gap: 65px;

    &::after {
      width: 708px;
    }
  }
`;

export const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: flex;
    gap: 43px;
  }
`;

export const BannerTitle = styled.h2`
  font-family: "Oswald";
  font-size: 36px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;
`;

export const BannerText = styled.p`
  text-align: justify;
  letter-spacing: -0.64px;
`;

export const BannerLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 39px;
  padding: 4px 4px 4px 16px;
  margin-bottom: 24px;

  color: ${(props) => props.theme.colors.main_text};
  line-height: 1.12;
  letter-spacing: -0.64px;

  border-radius: 500px;
  border: 1px solid ${(props) => props.theme.colors.accent};

  &:hover {
    border-color: ${(props) => props.theme.colors.main_text};
    background-color: ${(props) => props.theme.colors.main_text};
    color: ${(props) => props.theme.colors.accent};
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 0;
  }
`;

export const ArrowWrap = styled.div`
  display: flex;
  padding: 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border-radius: 100px;
  background: #97d28b;
`;
