import styled from "styled-components";

export const FooterWrap = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 61px;

  letter-spacing: -0.64px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: row;
    flex-wrap: wrap;

    margin-top: 124px;
  }
`;

export const FirstLineWrap = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    flex: 100%;
    margin-bottom: 16px;
  }

  &::before {
    content: " ";
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: -24px;
    width: 320px;
    height: 1px;

    border-radius: 100%;
    background: ${(props) => props.theme.colors.accent};

    @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
      width: 708px;
    }
  }
`;

export const LinkTitle = styled.a`
  display: block;
  &:hover {
    path {
      transition: fill 0.4s;
      fill: ${(props) => props.theme.colors.accent};
    }
  }
`;

export const LinkToTop = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 8px;
  margin-left: 19px;

  transform: rotate(-90deg);

  border-radius: 100px;
  background: ${(props) => props.theme.colors.accent};

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-left: auto;
  }

  &:hover {
    background: ${(props) => props.theme.colors.main_text};
  }

  &:hover path {
    stroke: ${(props) => props.theme.colors.accent};
  }
`;

export const FooterSocialLinksMobileWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  margin-top: 24px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: none;
  }
`;

export const FooterSocialLinksTableWrap = styled.div`
  display: none;
  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
    margin-top: 24px;
    margin-left: 85px;
  }
`;

export const FooterContactsWrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    flex-direction: row;
    margin-bottom: 40px;
  }
`;
