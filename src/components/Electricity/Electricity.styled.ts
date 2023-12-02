import styled from "styled-components";

export const ElectricitySection = styled.section`
  position: relative;
`;

export const Rectangle = styled.div`
  &::after {
    content: "";

    position: absolute;
    top: 92px;
    left: 50%;
    width: 1px;
    height: 48px;

    background: ${(props) => props.theme.colors.accent};
  }
`;
export const CountWrap = styled.div`
  margin-top: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const Count = styled.p`
  color: ${(props) => props.theme.colors.accent};
  text-align: center;
  font-family: "Oswald";
  font-size: 48px;
  font-weight: 700;
  line-height: 1;
  text-transform: uppercase;
`;

export const CountUnit = styled.p`
  text-align: center;
  font-family: "Oswald";
  font-size: 24px;
  line-height: 1;
`;
