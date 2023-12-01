import { Cross } from "../../ui/svgElements/Cross";
import {
  ItemList,
  MobileMenuWrap,
  NavList,
  NetworkWrap,
} from "./BurgerMenu.styled";
import { Arrow } from "../../ui/svgElements/Arrow";
import { Facebook } from "../../ui/svgElements/Facebook";
import { Instagram } from "../../ui/svgElements/Instagram";

type Props = {
  closeModal: () => void;
};

export function BurgerMenu({ closeModal }: Props) {
  return (
    <>
      <MobileMenuWrap onClick={closeModal}>
        <Cross />
        close
      </MobileMenuWrap>
      <nav>
        <NavList>
          <ItemList>
            <p>Main</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList>
            <p>About</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList>
            <p>Cases</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList>
            <p>FAQ</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList>
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
    </>
  );
}
