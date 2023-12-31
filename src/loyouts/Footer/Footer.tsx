import { scrolledTo } from '../../helpers/scroledTo';
import { ArrowRight } from '../../ui/svgElements/ArrowRight';
import { Ecosolution } from '../../ui/svgElements/Ecosolution';
import { FacebookDark } from '../../ui/svgElements/FacebookDark';
import { InstagramDark } from '../../ui/svgElements/InstagramDark';
import { Logo } from '../../ui/svgElements/Logo';
import { Tagline } from '../../ui/svgElements/Tagline';
import { WrapTitle } from '../Header/Header.styled';
import { FirstLineWrap, FooterContactsWrap, FooterEmailLink, FooterSocialLinksMobileWrap, FooterSocialLinksTableWrap, FooterWrap, LinkTitle, LinkToTop } from './Footer.styled';

export function Footer() {
  return (
    <FooterWrap>
      <FirstLineWrap>
        <WrapTitle>
          <Logo />
          <LinkTitle href="#" aria-label="Link to the go-to main page company">
            <Ecosolution />
          </LinkTitle>
          <Tagline />
        </WrapTitle>
        <FooterSocialLinksTableWrap>
          <FacebookDark />
          <InstagramDark />
        </FooterSocialLinksTableWrap>
        <LinkToTop href="#" onClick={() => scrolledTo('banner-section')} aria-label="Link to the go-to Banner section">
          <ArrowRight />
        </LinkToTop>
      </FirstLineWrap>
      <FooterSocialLinksMobileWrap>
        <a href="#" aria-label="Link to the go-to company Facebook account">
          <FacebookDark />
        </a>
        <a href="#" aria-label="Link to the go-to company Instagram account">
          <InstagramDark />
        </a>
      </FooterSocialLinksMobileWrap>
      <FooterContactsWrap>
        <a href="https://maps.app.goo.gl/2WzseMV8Ymfioi3p7" aria-label="Link for see the location of the office company">
          79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
        </a>
        <FooterEmailLink href="mailto:office@ecosolution.com" aria-label="Link to go to the service to send the email ">
          office@ecosolution.com
        </FooterEmailLink>
        <a>ecosolution © 2023</a>
      </FooterContactsWrap>
    </FooterWrap>
  );
}
