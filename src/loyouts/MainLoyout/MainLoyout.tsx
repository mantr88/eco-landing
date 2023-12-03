import { ReactNode } from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { Header } from "../Header/Header";
import { Container } from "./MainLoyout.styles";
import { Footer } from "../Footer/Footer";

type Props = {
  children: ReactNode[];
};
export function MainLoyout({ children }: Props) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
      <GlobalStyle />
    </Container>
  );
}
