import styled from "styled-components";

export const LinkStyled = styled.a`
  margin-left: 33%;
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  letter-spacing: -0.64px;

  border-radius: 500px;
  background: ${(props) => props.theme.colors.accent};

  &:hover {
    background: ${(props) => props.theme.colors.main_text};
    color: ${(props) => props.theme.colors.accent};
  }

  &:hover circle {
    fill: ${(props) => props.theme.colors.accent};
  }
`;
