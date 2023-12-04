import { scrolledTo } from "../../helpers/scroledTo";
import { ArrowRight } from "../../ui/svgElements/ArrowRight";
import { FacebookDark } from "../../ui/svgElements/FacebookDark";
import { InstagramDark } from "../../ui/svgElements/InstagramDark";
import { Logo } from "../../ui/svgElements/Logo";
import { AccentText, CompanyTitle, Tagline } from "../Header/Header.styled";
import {
  FirstLineWrap,
  FooterContactsWrap,
  FooterSocialLinksWrap,
  FooterWrap,
  LinkToTop,
} from "./Footer.styled";

export function Footer() {
  return (
    <FooterWrap>
      <FirstLineWrap>
        <Logo />
        <CompanyTitle>ecosolution</CompanyTitle>
        <Tagline>
          <AccentText>GREEN</AccentText>ERGY
          <br /> FOR LIFE
        </Tagline>
        <LinkToTop href="#" onClick={() => scrolledTo("banner-section")}>
          <ArrowRight />
        </LinkToTop>
      </FirstLineWrap>
      <FooterSocialLinksWrap>
        <FacebookDark />
        <InstagramDark />
      </FooterSocialLinksWrap>
      <FooterContactsWrap>
        <a href="https://maps.app.goo.gl/2WzseMV8Ymfioi3p7">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
        <a href="mailto:office@ecosolution.com">office@ecosolution.com</a>
        <p>ecosolution © 2023</p>
      </FooterContactsWrap>
    </FooterWrap>
  );
}
