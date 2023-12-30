import styled from "styled-components";

export const LinkStyled = styled.a`
  padding: 10px 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 12px;

  letter-spacing: -0.64px;

  border-radius: 500px;
  background: ${(props) => props.theme.colors.accent};
  transition: all 0.4s;

  & circle {
    transition: all 0.4s;
  }

  &:hover {
    background: ${(props) => props.theme.colors.main_text};
    color: ${(props) => props.theme.colors.accent};
  }

  &:hover circle {
    fill: ${(props) => props.theme.colors.accent};
  }
`;
