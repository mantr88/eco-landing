import { scrolledTo } from "../../helpers/scroledTo";
import { ArrowRight } from "../../ui/svgElements/ArrowRight";
import {
  ArrowWrap,
  BannerLink,
  BannerSection,
  BannerText,
  BannerTitle,
  WrapText,
} from "./Banner.styled";

export function Banner() {
  return (
    <BannerSection id="banner-section">
      <BannerTitle>RENEWABLE ENERGY For any task</BannerTitle>
      <WrapText>
        <BannerText>
          Development and implementation of renewable non-polluting energy
          sources, generating power generation using energy wind, sun, water,
          biomass
        </BannerText>
        <BannerLink onClick={() => scrolledTo("cases-section")}>
          Learn more
          <ArrowWrap>
            <ArrowRight />
          </ArrowWrap>
        </BannerLink>
      </WrapText>
    </BannerSection>
  );
}
