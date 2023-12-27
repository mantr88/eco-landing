import styled from "styled-components";

export const ContactSection = styled.section`
  margin-top: 36px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 100px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 120px;
  }
`;

export const ContactsTitleWrap = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    text-align: center;
  }
`;

export const ContactSectionContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 40px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 120px;
  }
`;

export const ContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 244px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 466px;
    gap: 32px;
  }
`;

export const AdressBlockWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  gap: 12px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 16px;
  }
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

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const SocialWrap = styled.div`
  display: flex;
  gap: 36px;
  margin-top: 20px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    gap: 8px;
  }
`;

export const SocialLink = styled.a`
  &:hover path {
    stroke: #97d28b;
  }
`;
