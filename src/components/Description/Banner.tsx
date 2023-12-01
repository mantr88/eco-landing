import { ArrowRight } from "../../ui/svgElements/ArrowRight";
import {
  ArrowWrap,
  BannerLink,
  BannerSection,
  BannerText,
  BannerTitle,
} from "./Banner.styled";

export function Banner() {
  return (
    <BannerSection>
      <BannerTitle>RENEWABLE ENERGY For any task</BannerTitle>
      <BannerText>
        Development and implementation of renewable non-polluting energy
        sources, generating power generation using energy wind, sun, water,
        biomass
      </BannerText>
      <BannerLink href="#">
        Learn more
        <ArrowWrap>
          <ArrowRight />
        </ArrowWrap>
      </BannerLink>
    </BannerSection>
  );
}
