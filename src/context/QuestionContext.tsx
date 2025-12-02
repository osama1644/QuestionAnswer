import { createContext } from "react";
import type { Question } from "../types";
interface QAContext {
  removeQusetion: (id: number) => void;
  addQusetion: (id: Question) => void;
  Questions:Question[],
  removeAllQuestions:()=>void
}
export const QusetionContext = createContext<QAContext | null>(null);
