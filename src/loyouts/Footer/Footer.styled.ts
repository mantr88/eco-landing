import styled from "styled-components";

export const FooterWrap = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  letter-spacing: -0.64px;
`;

export const FirstLineWrap = styled.div`
  display: flex;
  align-items: center;
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

  &:hover {
    background: ${(props) => props.theme.colors.main_text};
  }

  &:hover path {
    stroke: ${(props) => props.theme.colors.accent};
  }
`;

export const FooterSocialLinksWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  margin-top: 24px;
`;

export const FooterContactsWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;
