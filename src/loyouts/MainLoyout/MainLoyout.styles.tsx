import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 100%;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.s}) {
    width: 480px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    width: 768px;
    padding-left: 30px;
    padding-right: 30px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 1280px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;
