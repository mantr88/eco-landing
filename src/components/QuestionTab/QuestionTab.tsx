import React, { useRef, useState, useEffect } from "react";
import { Minus } from "../../ui/svgElements/Minus";
import { Plus } from "../../ui/svgElements/Plus";
import {
  Accordion,
  AccordionBody,
  AccordionCollapse,
  AccordionHeader,
  AccordionHeaderTitle,
  AccordionHeaderWrap,
  AccordionItem,
} from "./QuestionTab.styled";
type faq = {
  a: string;
  q: string;
};

type Props = {
  faqList: faq[];
};

type Handler = (id: number) => void;

function QuestionTab({ faqList }: Props) {
  const itemRefs = useRef<Array<React.RefObject<HTMLDivElement>>>([]);
  const [openId, setOpenId] = useState<number | null>(0);

  useEffect(() => {
    itemRefs.current = faqList.map(() => React.createRef<HTMLDivElement>());
  }, [faqList]);

  const clickHandler: Handler = (id) => {
    setOpenId((prevId) => (id === prevId ? null : id));
  };

  return (
    <Accordion>
      {faqList.map((faqItem: faq, id: number): React.ReactNode => {
        return (
          <AccordionItem key={id}>
            <AccordionHeaderWrap>
              <AccordionHeader onClick={() => clickHandler(id)}>
                <AccordionHeaderTitle>
                  {id === openId ? <Minus /> : <Plus />}
                  <p>{faqItem.q}</p>
                </AccordionHeaderTitle>
              </AccordionHeader>
            </AccordionHeaderWrap>
            <AccordionCollapse isOpen={id === openId}>
              <AccordionBody ref={itemRefs.current[id]}>
                {faqItem.a}
              </AccordionBody>
            </AccordionCollapse>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default QuestionTab;
