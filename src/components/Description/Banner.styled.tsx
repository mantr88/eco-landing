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
    left: 0;
    bottom: 0;
    width: 320px;
    height: 1px;

    border-radius: 100%;
    background: #97d28b;
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
  font-family: "Fira Sans";
  letter-spacing: -0.64px;
`;

export const BannerLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  height: 39px;
  padding: 4px 4px 4px 16px;
  margin-left: 33%;

  color: ${(props) => props.theme.colors.main_text};
  line-height: 1.12;
  letter-spacing: -0.64px;

  border-radius: 500px;
  border: 1px solid ${(props) => props.theme.colors.accent};
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
