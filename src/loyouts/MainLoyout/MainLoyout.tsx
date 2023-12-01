import { GlobalStyle } from "../../styles/GlobalStyle";
import { Header } from "../Header/Header";
import { Container } from "./MainLoyout.styles";

export function MainLoyout() {
  return (
    <Container>
      <Header />
      <GlobalStyle />
    </Container>
  );
}
