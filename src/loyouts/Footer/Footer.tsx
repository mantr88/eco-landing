import { scrolledTo } from "../../helpers/scroledTo";
import { ArrowRight } from "../../ui/svgElements/ArrowRight";
import { Ecosolution } from "../../ui/svgElements/Ecosolution";
import { FacebookDark } from "../../ui/svgElements/FacebookDark";
import { InstagramDark } from "../../ui/svgElements/InstagramDark";
import { Logo } from "../../ui/svgElements/Logo";
import { Tagline } from "../../ui/svgElements/Tagline";
import { WrapTitle } from "../Header/Header.styled";
import {
  FirstLineWrap,
  FooterContactsWrap,
  FooterSocialLinksWrap,
  FooterWrap,
  LinkTitle,
  LinkToTop,
} from "./Footer.styled";

export function Footer() {
  return (
    <FooterWrap>
      <FirstLineWrap>
        <WrapTitle>
          <Logo />
          <LinkTitle href="#">
            <Ecosolution />
          </LinkTitle>
          <Tagline />
        </WrapTitle>
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
