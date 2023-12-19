import styled from "styled-components";

export const FAQSection = styled.section`
  position: relative;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 24px;
  }
`;

export const LinkWrap = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    grid-column-end: 3;
    grid-row-end: 2;
    top: 610px;
    left: 376px;
    transform: translateX(0%);
  }
`;

export const Question = styled.p`
  text-align: justify;
  font-size: 18px;
  letter-spacing: -0.72px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-bottom: 12px;
  }
`;
