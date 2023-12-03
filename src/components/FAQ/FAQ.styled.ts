import styled from "styled-components";

export const FAQSection = styled.section`
  position: relative;
`;

export const ContactLink = styled.a`
  margin-left: 33%;
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  letter-spacing: -0.64px;

  border-radius: 500px;
  background: ${(props) => props.theme.colors.accent};
`;
