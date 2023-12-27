import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import {
  Count,
  CountUnit,
  CountWrap,
  ElectricitySection,
  ElectricityTitleWrap,
} from "./Electricity.styled";

export function Electricity() {
  return (
    <ElectricitySection>
      <ElectricityTitleWrap>
        <SectionTitle>Electricity we produced for all time</SectionTitle>
      </ElectricityTitleWrap>
      <CountWrap>
        <Count>1.134.147.814</Count>
        <CountUnit>kWh</CountUnit>
      </CountWrap>
    </ElectricitySection>
  );
}
