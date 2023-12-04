import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { Slider } from "../Slider/Slider";
import { CasesSection } from "./Cases.styled";

export function Cases() {
  return (
    <>
      <CasesSection id="cases-section">
        <SectionTitle>Successful cases of our company</SectionTitle>
        <Slider></Slider>
      </CasesSection>
    </>
  );
}
