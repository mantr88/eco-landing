import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import {
  Count,
  CountUnit,
  CountWrap,
  ElectricitySection,
} from "./Electricity.styled";

export function Electricity() {
  return (
    <ElectricitySection>
      <div style={{ display: "inline-block", width: "368px" }}>
        <SectionTitle>Electricity we produced for all time</SectionTitle>
      </div>
      <CountWrap>
        <Count>1.134.147.814</Count>
        <CountUnit>kWh</CountUnit>
      </CountWrap>
    </ElectricitySection>
  );
}
