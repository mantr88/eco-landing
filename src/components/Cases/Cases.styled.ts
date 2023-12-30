import styled from "styled-components";

export const CasesSection = styled.section`
  margin-top: 24px;
  margin-top: 36px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 100px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 120px;
  }
`;
