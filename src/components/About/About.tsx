import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Values } from '../Values/Values';
import { AboutSection, AboutText, AdressBlock, CopyrightText, ImageThumb, TitleValuesWrap, ValuesTitleWrap } from './About.styled';

function About() {
  return (
    <AboutSection id="about-section">
      <AdressBlock>
        <a href="https://maps.app.goo.gl/2WzseMV8Ymfioi3p7" aria-label="Link for see the location of the office company">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
        <a href="mailto:office@ecosolution.com" aria-label="Link to go to the service to send the email ">
          office@ecosolution.com{' '}
        </a>
        <CopyrightText>ecosolution © 2023</CopyrightText>
      </AdressBlock>
      <ImageThumb>
        <img
          srcSet="./assets/image/wind-turbine-clean-energy-320.jpg 320w, ./assets/image/wind-turbine-clean-energy-640.jpg 640w, ./assets/image/wind-turbine-clean-energy-960.jpg 960w,./assets/image/wind-turbine-clean-energy-1240.jpg 1280w,./assets/image/wind-turbine-clean-energy-2480.jpg 2560w"
          src="./assets/image/wind-turbine-clean-energy-320.jpg"
          sizes="100vw"
          alt="wind turbine"
        />
      </ImageThumb>
      <TitleValuesWrap>
        <ValuesTitleWrap>
          <SectionTitle>Main values of our company</SectionTitle>
        </ValuesTitleWrap>
        <AboutText>
          EcoSolution envisions a world where sustainable energy solutions power a brighter and cleaner future for all. We aspire to be at the forefront of the global shift towards renewable
          energy, leading the way in innovative technologies that harness the power of nature to meet the world's energy needs.
        </AboutText>
      </TitleValuesWrap>
      <Values />
    </AboutSection>
  );
}

export default About;
