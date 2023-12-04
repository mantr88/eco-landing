import styled from "styled-components";

export const AboutSection = styled.section`
  margin-top: 24px;
`;

export const AdressBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  letter-spacing: -0.64px;
`;

export const ImageThumb = styled.div`
  margin-top: 36px;
`;

export const AboutText = styled.p`
  text-align: justify;
  letter-spacing: -0.64px;
`;

export const ValuesContainer = styled.ul`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 36px;
`;
