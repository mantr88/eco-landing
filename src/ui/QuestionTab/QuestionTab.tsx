import React, { useRef, useState } from "react";
import "./QuestionTab.styled.css";
import { Minus } from "../svgElements/Minus";
import { Plus } from "../svgElements/Plus";
type faq = {
  a: string;
  q: string;
};

type Props = {
  faqList: faq[];
};

type Handler = (id: number) => void;

function QuestionTab({ faqList }: Props) {
  const itemRef = useRef(null);
  const [openId, setOpenId] = useState<number | null>(null);

  const clickHandler: Handler = (id) => {
    id === openId ? setOpenId(null) : setOpenId(id);
  };

  return (
    <ul className="accordion">
      {faqList.map((faqItem: faq, id: number): React.ReactNode => {
        return (
          <li key={id} className="accordion-item">
            <div className="accordion-header-wrap">
              {id === openId ? <Minus /> : <Plus />}
              <button
                className="accordion-header"
                onClick={() => clickHandler(id)}
              >
                {faqItem.q}
              </button>
            </div>
            <div
              className={`accordion-collapse ${id === openId ? "open" : ""}`}
              style={
                id === openId
                  ? { height: itemRef.current.scrollHeight }
                  : { height: "0px" }
              }
            >
              <div className="accordion-body" ref={itemRef}>
                {faqItem.a}
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default QuestionTab;
