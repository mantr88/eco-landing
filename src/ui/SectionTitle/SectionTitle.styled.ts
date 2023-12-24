import styled from "styled-components";

export const Title = styled.h2`
  margin-top: 36px;
  margin-bottom: 24px;
  font-family: "Oswald";
  font-size: 28px;
  font-weight: 400;
  line-height: 1;
  text-transform: uppercase;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    font-size: 36px;
    /* margin-top: 100px; */
  }
`;
