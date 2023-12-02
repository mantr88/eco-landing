import { useState } from "react";
import { Burger } from "../../ui/svgElements/Burger";
import { Logo } from "../../ui/svgElements/Logo";
import {
  AccentText,
  BurgerWrap,
  CompanyTitle,
  HeaderWrap,
  Tagline,
} from "./Header.styled";
import PopupWindow from "../../ui/PopupWindow/PopupWindow";
import { BurgerMenu } from "../../components/BurgerMenu/BurgerMenu";

export function Header() {
  const [active, setActive] = useState(false);

  const onClose = () => {
    document.body.style.overflow = "visible";
    setActive(false);
  };
  return (
    <HeaderWrap>
      <Logo />
      <CompanyTitle>ecosolution</CompanyTitle>
      <Tagline>
        <AccentText>GREEN</AccentText>ERGY
        <br /> FOR LIFE
      </Tagline>
      <BurgerWrap onClick={() => setActive(true)}>
        <Burger />
      </BurgerWrap>
      {active && (
        <PopupWindow setActive={setActive} active={active}>
          <BurgerMenu closeModal={onClose} />
        </PopupWindow>
      )}
    </HeaderWrap>
  );
}
