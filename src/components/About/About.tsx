import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { Values } from "../../ui/Values/Values";
import { CpuCharge } from "../../ui/svgElements/CpuCharge";
import { GlobalEdit } from "../../ui/svgElements/GlobalEdit";
import { MaximizeCircle } from "../../ui/svgElements/MaximizeCircle";
import { Ranking } from "../../ui/svgElements/Ranking";
import {
  AboutSection,
  AboutText,
  AdressBlock,
  ImageThumb,
  ValuesContainer,
} from "./About.styled";

export function About() {
  return (
    <AboutSection id="about-section">
      <AdressBlock>
        <a href="https://maps.app.goo.gl/2WzseMV8Ymfioi3p7">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
      </AdressBlock>
      <ImageThumb>
        <img
          srcSet="./assets/image/wind-turbine-clean-energy-320.jpg 320w, ./assets/image/wind-turbine-clean-energy-640.jpg 640w, ./assets/image/wind-turbine-clean-energy-960.jpg 960w"
          src="./assets/image/wind-turbine-clean-energy-320.jpg"
          sizes="(min-width: 768px) 50vw, 100vw"
          alt="wind turbine"
        />
      </ImageThumb>
      <SectionTitle>Main values of our company</SectionTitle>
      <AboutText>
        EcoSolution envisions a world where sustainable energy solutions power a
        brighter and cleaner future for all. We aspire to be at the forefront of
        the global shift towards renewable energy, leading the way in innovative
        technologies that harness the power of nature to meet the world's energy
        needs.
      </AboutText>
      <ValuesContainer>
        <Values
          icon={<MaximizeCircle />}
          title="Openness"
          description="to the world, people, new ideas and projects"
        />
        <Values
          icon={<GlobalEdit />}
          title="Responsibility"
          description="we are aware that the results of our work have an impact on our lives and the lives of future generations"
        />
        <Values
          icon={<CpuCharge />}
          title="Innovation"
          description="we use the latest technology to implement non-standard solutions"
        />
        <Values
          icon={<Ranking />}
          title="Quality"
          description="we do not strive to be the first among others, but we want to be the best in our business"
        />
      </ValuesContainer>
    </AboutSection>
  );
}
