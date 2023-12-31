import { useEffect, useState } from 'react';
import { Burger } from '../../ui/svgElements/Burger';
import { Logo } from '../../ui/svgElements/Logo';
import { CompanyTitle, HeaderContainer, HeaderWrap, WrapTitle, HeaderLink, Nav, BurgerBtn } from './Header.styled';
import PopupWindow from '../../ui/PopupWindow/PopupWindow';
import { BurgerMenu } from '../../components/BurgerMenu/BurgerMenu';
import { scrolledTo } from '../../helpers/scroledTo';
import { Dot } from '../../ui/svgElements/Dot';
import { Ecosolution } from '../../ui/svgElements/Ecosolution';
import { Tagline } from '../../ui/svgElements/Tagline';

export function Header() {
  const [active, setActive] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const onClose = () => {
    document.body.style.overflow = 'visible';
    setActive(false);
  };
  return (
    <HeaderWrap>
      <HeaderContainer>
        <WrapTitle>
          <Logo />
          <CompanyTitle scrolling={scrolling ? 'true' : null}>
            <a href="#" aria-label="Link to the go-to main page company">
              <Ecosolution />
            </a>
          </CompanyTitle>
          <Tagline />
        </WrapTitle>
        <Nav>
          <BurgerBtn onClick={() => setActive(true)} aria-label="Button for open menu">
            <Burger />
          </BurgerBtn>
          <HeaderLink onClick={() => scrolledTo('contact-us-section')} aria-label="Link to the go-to Contact section">
            Get in touch
            <Dot />
          </HeaderLink>
        </Nav>

        {active && (
          <PopupWindow setActive={setActive} active={active}>
            <BurgerMenu closeModal={onClose} />
          </PopupWindow>
        )}
      </HeaderContainer>
    </HeaderWrap>
  );
}
