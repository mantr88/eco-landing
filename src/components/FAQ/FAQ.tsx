import QuestionTab from "../QuestionTab/QuestionTab";
import { SectionTitle } from "../../ui/SectionTitle/SectionTitle";
import { FAQSection } from "./FAQ.styled";
import { scrolledTo } from "../../helpers/scroledTo";
import { Link } from "../../ui/Link/Link";

const faqList = [
  {
    q: "How do wind turbines and solar panels work together in a renewable energy system?",
    a: "1Wind turbines and solar panels generate electricity through different mechanisms. Wind turbines harness the kinetic energy of the wind to turn blades, which then drive a generator. Solar panels convert sunlight into electricity through the photovoltaic effect. When integrated into a renewable energy system, these technologies complement each other by providing a continuous and reliable power supply. Wind power is often more abundant during certain times, while solar power is consistent during daylight hours, resulting in a more stable overall energy output.",
  },
  {
    q: "What sets EcoSolution's renewable energy solutions apart from others on the market?",
    a: "2Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum laudantium reiciendis eaque expedita mollitia vel beatae perspiciatis ab tenetur?",
  },
  {
    q: "What measures does EcoSolution take to ensure the environmental sustainability of its products?",
    a: "3Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum laudantium reiciendis eaque expedita mollitia vel beatae perspiciatis ab tenetur?",
  },
  {
    q: "How does EcoSolution engage with local communities and support a just transition to renewable energy?",
    a: "4Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum laudantium reiciendis eaque expedita mollitia vel beatae perspiciatis ab tenetur?",
  },
  {
    q: "Didn't find the answer to your question?",
    a: "5Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed cum laudantium reiciendis eaque expedita mollitia vel beatae perspiciatis ab tenetur?",
  },
];

export function FAQ() {
  return (
    <FAQSection id="faq-section">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <QuestionTab faqList={faqList} />
      <Link onClick={() => scrolledTo("contact-us-section")}>Contact Us</Link>
    </FAQSection>
  );
}
