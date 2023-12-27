import styled from "styled-components";

export const FAQSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 36px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    gap: 24px;
    margin-top: 100px;
  }

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    margin-top: 120px;
  }
`;

export const FaqTitleWrap = styled.div`
  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    width: 398px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const LinkWrap = styled.div`
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    grid-column-end: 3;
    grid-row-end: 2;
    position: absolute;
    top: 625px;
    left: 376px;
    transform: translateX(0%);

    @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
      top: 576px;
      left: 781px;
    }
  }
`;

export const Question = styled.p`
  font-size: 18px;
  letter-spacing: -0.72px;
  margin-bottom: 12px;
`;
