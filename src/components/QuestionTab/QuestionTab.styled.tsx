import styled from "styled-components";

interface CollapseProps {
  isOpen: boolean;
}

export const Accordion = styled.ul`
  grid-column-end: 2;
  grid-row-end: 2;
  margin-top: 27px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
    margin-top: 0;
  }
`;

export const AccordionItem = styled.li`
  padding-top: 16px;
  padding-bottom: 16px;
  position: relative;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    padding-top: 24px;
    padding-bottom: 24px;
  }
`;

export const AccordionHeaderWrap = styled.div`
  display: flex;
  gap: 8px;

  &::before {
    content: " ";
    position: absolute;
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    width: 320px;
    height: 1px;
    background: ${(props) => props.theme.colors.accent};

    @media screen and (min-width: ${(props) => props.theme.breakpoints.m}) {
      width: 342px;
    }

    @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
      width: 596px;
    }
  }
`;

export const AccordionHeader = styled.button`
  text-align: justify;
  font-size: 18px;
  letter-spacing: -0.72px;
  color: ${(props) => props.theme.colors.main_text};
  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 24px;
    letter-spacing: -0.96px;
  }
`;

export const AccordionHeaderTitle = styled.div`
  display: flex;
  gap: 8px;
`;

export const AccordionCollapse = styled.div<CollapseProps>`
  height: ${(props) => (props.isOpen ? "auto" : 0)};
  overflow: hidden;
  transition: height 0.3s;
`;

export const AccordionBody = styled.p`
  padding-left: 24px;
  margin-top: 16px;
  text-align: justify;
  font-size: 14px;
  letter-spacing: -0.56px;

  @media screen and (min-width: ${(props) => props.theme.breakpoints.l}) {
    font-size: 16px;
    letter-spacing: -0.64px;
  }
`;
