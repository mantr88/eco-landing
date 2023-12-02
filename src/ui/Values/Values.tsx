import {
  TitleWrap,
  ValuesDesc,
  ValuesItem,
  ValuesTitle,
} from "./Values.styled";
type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

export function Values({ icon, title, description }: Props) {
  return (
    <ValuesItem>
      <TitleWrap>
        {icon}
        <ValuesTitle>{title}</ValuesTitle>
      </TitleWrap>
      <ValuesDesc>{description}</ValuesDesc>
    </ValuesItem>
  );
}
