import styled from 'styled-components';

export const ValuesContainer = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 36px;

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    grid-template-columns: repeat(4, 1fr);
    margin-top: 100px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    gap: 48px;
  }
`;

export const ValuesItem = styled.li`
  height: 197px;
  padding: 13px 12px 12px 12px;

  background: ${props => props.theme.colors.second_bg};

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    width: 159px;
    padding-top: 12px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    width: 274px;
    height: 339px;
    padding: 48px 24px 48px 24px;
  }
`;

export const Values1 = styled(ValuesItem)``;
export const Values2 = styled(ValuesItem)``;

export const Values3 = styled.div`
  display: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    display: block;
    grid-column: span 2;
    width: 342px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    width: 596px;
  }
`;
export const Values4 = styled.div`
  display: none;

  @media screen and (min-width: ${props => props.theme.breakpoints.m}) {
    display: block;
    grid-column: span 2;
    width: 342px;
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    width: 596px;
  }
`;

export const Values5 = styled(ValuesItem)``;
export const Values6 = styled(ValuesItem)``;

export const TitleWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 8px;
  padding-bottom: 33px;

  &::after {
    content: '';
    position: absolute;
    top: 57px;
    width: 100%;
    height: 1px;
    background: ${props => props.theme.colors.accent};
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    padding-bottom: 0;
    &::after {
      top: 119px;
      width: 226px;
    }
  }
`;

export const ValuesTitle = styled.h4`
  font-family: 'Oswald';
  font-weight: 400;
  line-height: 1.5;
  text-transform: uppercase;

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    font-size: 32px;
  }
`;

export const ValuesDesc = styled.p`
  margin-top: 12px;
  text-align: justify;
  font-size: 14px;
  letter-spacing: -0.56px;

  @media screen and (min-width: ${props => props.theme.breakpoints.l}) {
    margin-top: 119px;
    font-size: 16px;
  }
`;
