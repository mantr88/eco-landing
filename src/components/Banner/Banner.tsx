import { scrolledTo } from "../../helpers/scroledTo";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { ArrowRight } from "../../ui/svgElements/ArrowRight";
import {
  ArrowWrap,
  BannerLink,
  BannerSection,
  BannerText,
  BannerTitleWrap,
  WrapText,
} from "./Banner.styled";

export function Banner() {
  return (
    <BannerSection id="banner-section">
      <BannerTitleWrap>
        <SectionTitle>RENEWABLE ENERGY For any task</SectionTitle>
      </BannerTitleWrap>
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
