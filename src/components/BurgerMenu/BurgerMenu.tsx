import { Cross } from "../../ui/svgElements/Cross";
import {
  ItemList,
  MobileMenuContainer,
  MobileMenuWrap,
  NavList,
  NetworkWrap,
} from "./BurgerMenu.styled";
import { Arrow } from "../../ui/svgElements/Arrow";
import { Facebook } from "../../ui/svgElements/Facebook";
import { Instagram } from "../../ui/svgElements/Instagram";
import { scrolledTo } from "../../helpers/scroledTo";

type Props = {
  closeModal: () => void;
};

export function BurgerMenu({ closeModal }: Props) {
  return (
    <MobileMenuContainer>
      <MobileMenuWrap onClick={closeModal}>
        <Cross />
        close
      </MobileMenuWrap>
      <nav>
        <NavList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo("banner-section");
            }}
          >
            <p>Main</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo("about-section");
            }}
          >
            <p>About</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo("cases-section");
            }}
          >
            <p>Cases</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo("faq-section");
            }}
          >
            <p>FAQ</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo("contact-us-section");
            }}
          >
            <p>Contact Us</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
        </NavList>
      </nav>
      <NetworkWrap>
        <div>
          <Facebook />
        </div>
        <div>
          <Instagram />
        </div>
      </NetworkWrap>
    </MobileMenuContainer>
  );
}
