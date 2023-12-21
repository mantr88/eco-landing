import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { Envelope } from "../../ui/svgElements/Envelope";
import { FacebookDark } from "../../ui/svgElements/FacebookDark";
import { Handset } from "../../ui/svgElements/Handset";
import { InstagramDark } from "../../ui/svgElements/InstagramDark";
import { Map } from "../../ui/svgElements/Map";
import { ContactForm } from "../Form/ContactForm";
import {
  AdressBlockTitle,
  AdressBlockWrap,
  AdressItemLink,
  AdressItemWrap,
  ContactSectionContainer,
  ContactsWrap,
  SocialLink,
  SocialWrap,
} from "./Contact.styled";

export function Contact() {
  return (
    <section id="contact-us-section" style={{ textAlign: "center" }}>
      <SectionTitle>Contact us</SectionTitle>
      <ContactSectionContainer>
        <ContactsWrap>
          <AdressBlockWrap>
            <AdressBlockTitle>Phone:</AdressBlockTitle>
            <AdressItemWrap>
              <Handset />
              <AdressItemLink href="tel:+380981234567">
                38 (098) 12 34 567
              </AdressItemLink>
            </AdressItemWrap>
            <AdressItemWrap>
              <Handset />
              <AdressItemLink href="tel:+3809313567">
                38 (093) 12 34 567
              </AdressItemLink>
            </AdressItemWrap>
          </AdressBlockWrap>
          <AdressBlockWrap>
            <AdressBlockTitle>E-mail:</AdressBlockTitle>
            <AdressItemWrap>
              <Envelope />
              <AdressItemLink href="mailto:office@ecosolution.com">
                office@ecosolution.com
              </AdressItemLink>
            </AdressItemWrap>
          </AdressBlockWrap>
          <AdressBlockWrap>
            <AdressBlockTitle>Address:</AdressBlockTitle>
            <AdressItemWrap>
              <Map />
              <AdressItemLink href="https://maps.app.goo.gl/2WzseMV8Ymfioi3p7">
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </AdressItemLink>
            </AdressItemWrap>
          </AdressBlockWrap>
          <AdressBlockWrap>
            <AdressBlockTitle>Social Networks:</AdressBlockTitle>
            <SocialWrap>
              <SocialLink href="#">
                <FacebookDark />
              </SocialLink>
              <SocialLink href="#">
                <InstagramDark />
              </SocialLink>
            </SocialWrap>
          </AdressBlockWrap>
        </ContactsWrap>
        <ContactForm />
      </ContactSectionContainer>
    </section>
  );
}