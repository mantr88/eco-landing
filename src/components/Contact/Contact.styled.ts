import styled from "styled-components";

export const ContactSection = styled.section`
  margin-top: 36px;

  text-align: "center";

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 100px;
  }
`;
export const ContactSectionContainer = styled.div`
  margin-top: 36px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 244px;
  }
`;

export const AdressBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 12px;
`;

export const AdressBlockTitle = styled.p`
  margin-bottom: -4px;
  text-align: justify;
  letter-spacing: -0.64px;
`;

export const AdressItemWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  &:hover path {
    stroke: #97d28b;
  }
`;

export const AdressItemLink = styled.a`
  text-align: justify;
  font-size: 20px;
  letter-spacing: -0.8px;
`;

export const SocialWrap = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 20px;
`;

export const SocialLink = styled.a`
  &:hover path {
    stroke: #97d28b;
  }
`;
