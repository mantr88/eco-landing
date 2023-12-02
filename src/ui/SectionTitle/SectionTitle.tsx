import { Title } from "./SectionTitle.styled";

type Props = {
  children: string;
};

export function SectionTitle({ children }: Props) {
  return <Title>{children}</Title>;
}
