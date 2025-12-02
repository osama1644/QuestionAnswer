import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import type { Question } from "./types";
import { useQuestion } from "./hooks";

function Accordian({ question }: { question: Question }) {
  const {removeQusetion} =useQuestion()
  return (
    <Accordion allowZeroExpanded>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            <div className="text-right font-semibold px-2 py-1">
              {question.question}
            </div>
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <div className="flex justify-between items-center text-right px-2 py-1">
            <button className="bg-red-500 text-white text-sm px-3 py-1 rounded cursor-pointer hover:bg-red-600 transition" onClick={()=>removeQusetion(question.id)}>
              مسح السؤال
            </button>
            <span>{question.answer}</span>
          </div>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
}

export default Accordian;
