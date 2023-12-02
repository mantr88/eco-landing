import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import {
  Count,
  CountUnit,
  CountWrap,
  ElectricitySection,
  Rectangle,
} from "./Electricity.styled";

export function Electricity() {
  return (
    <ElectricitySection>
      <SectionTitle>Electricity we produced for all time</SectionTitle>
      <Rectangle />
      <CountWrap>
        <Count>1.134.147.814</Count>
        <CountUnit>kWh</CountUnit>
      </CountWrap>
    </ElectricitySection>
  );
}
