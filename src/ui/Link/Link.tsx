import { Dot } from "../svgElements/Dot";
import { LinkStyled } from "./Link.styled";

type Props = {
  children: string;
  onClick: () => void;
};

export function Link({ children, onClick }: Props) {
  return (
    <LinkStyled onClick={onClick}>
      {children}
      <Dot />
    </LinkStyled>
  );
}
