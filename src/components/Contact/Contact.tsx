import { SectionTitle } from '../../ui/SectionTitle/SectionTitle';
import { Envelope } from '../../ui/svgElements/Envelope';
import { FacebookDark } from '../../ui/svgElements/FacebookDark';
import { Handset } from '../../ui/svgElements/Handset';
import { InstagramDark } from '../../ui/svgElements/InstagramDark';
import { Map } from '../../ui/svgElements/Map';
import { ContactForm } from '../Form/ContactForm';
import { AdressBlockTitle, AdressBlockWrap, AdressItemLink, AdressItemWrap, ContactSection, ContactSectionContainer, ContactsTitleWrap, ContactsWrap, SocialWrap } from './Contact.styled';

export function Contact() {
  return (
    <ContactSection id="contact-us-section">
      <ContactsTitleWrap>
        <SectionTitle>Contact us</SectionTitle>
      </ContactsTitleWrap>
      <ContactSectionContainer>
        <ContactsWrap>
          <AdressBlockWrap>
            <AdressBlockTitle>Phone:</AdressBlockTitle>
            <AdressItemWrap>
              <Handset />
              <AdressItemLink href="tel:+380981234567" aria-label="Link to go to the service to phone call">
                38 (098) 12 34 567
              </AdressItemLink>
            </AdressItemWrap>
            <AdressItemWrap>
              <Handset />
              <AdressItemLink href="tel:+3809313567" aria-label="Link to go to the service to phone call">
                38 (093) 12 34 567
              </AdressItemLink>
            </AdressItemWrap>
          </AdressBlockWrap>
          <AdressBlockWrap>
            <AdressBlockTitle>E-mail:</AdressBlockTitle>
            <AdressItemWrap>
              <Envelope />
              <AdressItemLink href="mailto:office@ecosolution.com" aria-label="Link to go to the service to send the email ">
                office@ecosolution.com
              </AdressItemLink>
            </AdressItemWrap>
          </AdressBlockWrap>
          <AdressBlockWrap>
            <AdressBlockTitle>Address:</AdressBlockTitle>
            <AdressItemWrap>
              <Map />
              <AdressItemLink href="https://maps.app.goo.gl/2WzseMV8Ymfioi3p7" aria-label="Link for see the location of the office company">
                79005, Ukraine, Lvivstreet. Shota Rustaveli, 7
              </AdressItemLink>
            </AdressItemWrap>
          </AdressBlockWrap>
          <AdressBlockWrap>
            <AdressBlockTitle>Social Networks:</AdressBlockTitle>
            <SocialWrap>
              <a href="#" aria-label="Link to the go-to company Facebook account">
                <FacebookDark />
              </a>
              <a href="#" aria-label="Link to the go-to company Instagram account">
                <InstagramDark />
              </a>
            </SocialWrap>
          </AdressBlockWrap>
        </ContactsWrap>
        <ContactForm />
      </ContactSectionContainer>
    </ContactSection>
  );
}
