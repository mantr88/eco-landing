import React, { useRef, useState, useEffect } from "react";
import "./QuestionTab.styled.css";
import { Minus } from "../../ui/svgElements/Minus";
import { Plus } from "../../ui/svgElements/Plus";
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
    // Initialize itemRefs with refs for each FAQ item
    itemRefs.current = faqList.map(() => React.createRef<HTMLDivElement>());
  }, [faqList]);

  const clickHandler: Handler = (id) => {
    setOpenId((prevId) => (id === prevId ? null : id));
  };

  return (
    <ul className="accordion">
      {faqList.map((faqItem: faq, id: number): React.ReactNode => {
        return (
          <li key={id} className="accordion-item">
            <div className="accordion-header-wrap">
              <button
                className="accordion-header"
                onClick={() => clickHandler(id)}
              >
                <div className="accordion-header-title">
                  {id === openId ? <Minus /> : <Plus />}
                  <p>{faqItem.q}</p>
                </div>
              </button>
            </div>
            <div
              className={`accordion-collapse ${id === openId ? "open" : ""}`}
              style={{
                height:
                  id === openId
                    ? itemRefs.current[id]?.current?.scrollHeight
                    : 0,
              }}
            >
              <div className="accordion-body" ref={itemRefs.current[id]}>
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
