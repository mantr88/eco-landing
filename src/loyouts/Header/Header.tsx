import { useEffect, useState } from "react";
import { Burger } from "../../ui/svgElements/Burger";
import { Logo } from "../../ui/svgElements/Logo";
import {
  AccentText,
  CompanyTitle,
  HeaderContainer,
  HeaderWrap,
  Tagline,
  BurgerWrap,
} from "./Header.styled";
import PopupWindow from "../../ui/PopupWindow/PopupWindow";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";

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
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const onClose = () => {
    document.body.style.overflow = "visible";
    setActive(false);
  };
  return (
    <HeaderWrap>
      <HeaderContainer>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Logo />
          <CompanyTitle scrolling={scrolling}>ecosolution</CompanyTitle>
          <Tagline>
            <AccentText>GREEN</AccentText>ERGY
            <br /> FOR LIFE
          </Tagline>
        </div>
        <BurgerWrap onClick={() => setActive(true)}>
          <Burger />
        </BurgerWrap>
        {active && (
          <PopupWindow setActive={setActive} active={active}>
            <BurgerMenu closeModal={onClose} />
          </PopupWindow>
        )}
      </HeaderContainer>
    </HeaderWrap>
  );
}
