import { ReactElement } from "react";
import { GlobalStyle } from "../../styles/GlobalStyle";
import { Header } from "../Header/Header";
import { Container } from "./MainLoyout.styles";

type Props = {
  children: ReactElement;
};
export function MainLoyout({ children }: Props) {
  return (
    <Container>
      <Header />
      {children}
      <GlobalStyle />
    </Container>
  );
}
