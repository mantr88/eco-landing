import { useEffect, useState } from "react";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import {
  Count,
  CountUnit,
  CountWrap,
  ElectricitySection,
  ElectricityTitleWrap,
} from "./Electricity.styled";
import { formatNumberWithDots } from "../../helpers/formatNumberWithDots";

export function Electricity() {
  const [count, setCount] = useState(1134147814);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((pervState) => pervState + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const formatedCountNumber: string = formatNumberWithDots(count);

  return (
    <ElectricitySection>
      <ElectricityTitleWrap>
        <SectionTitle>Electricity we produced for all time</SectionTitle>
      </ElectricityTitleWrap>
      <CountWrap>
        <Count>{formatedCountNumber}</Count>
        <CountUnit>kWh</CountUnit>
      </CountWrap>
    </ElectricitySection>
  );
}
