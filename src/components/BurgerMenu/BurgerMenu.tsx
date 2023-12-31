import { Cross } from '../../ui/svgElements/Cross';
import { CloseText, ItemList, MobileMenuContainer, MobileMenuWrap, NavList, NetworkWrap } from './BurgerMenu.styled';
import { Arrow } from '../../ui/svgElements/Arrow';
import { Facebook } from '../../ui/svgElements/Facebook';
import { Instagram } from '../../ui/svgElements/Instagram';
import { scrolledTo } from '../../helpers/scroledTo';

type Props = {
  closeModal: () => void;
};

export function BurgerMenu({ closeModal }: Props) {
  return (
    <MobileMenuContainer>
      <MobileMenuWrap onClick={closeModal}>
        <Cross />
        <CloseText>close</CloseText>
      </MobileMenuWrap>
      <nav>
        <NavList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo('banner-section');
            }}
            aria-label="Link to the go-to Banner section"
          >
            <p>Main</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo('about-section');
            }}
            aria-label="Link to the go-to About section"
          >
            <p>About</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo('cases-section');
            }}
            aria-label="Link to the go-to Cases section"
          >
            <p>Cases</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo('faq-section');
            }}
            aria-label="Link to the go-to FAQ section"
          >
            <p>FAQ</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
          <ItemList
            onClick={() => {
              closeModal();
              scrolledTo('contact-us-section');
            }}
            aria-label="Link to the go-to Contact section"
          >
            <p>Contact Us</p>
            <div>
              <Arrow />
            </div>
          </ItemList>
        </NavList>
      </nav>
      <NetworkWrap>
        <a href="#" aria-label="Link to the go-to company Facebook account">
          <Facebook />
        </a>
        <a href="#" aria-label="Link to the go-to company Instagram account">
          <Instagram />
        </a>
      </NetworkWrap>
    </MobileMenuContainer>
  );
}
