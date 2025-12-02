import { useState } from "react";
import { QusetionContext } from "./QuestionContext";
import type { Question } from "../types";
import { toast } from "react-toastify";

function QusetionContextProvider({ children }: { children: React.ReactNode }) {
  const [Questions, setQusetion] = useState<Question[]>(() => {
    const ques = localStorage.getItem("question");
    return ques ? JSON.parse(ques) : [];
  });
  const addQusetion = (que: Question) => {
    setQusetion((prev) => {
      const newQuestions = [...prev, que];
      localStorage.setItem("question", JSON.stringify(newQuestions));
      return newQuestions;
    });
  };
  const removeQusetion = (id: number) => {
    const newQuestions = Questions.filter((q) => q.id !== id);
    setQusetion(newQuestions);
    localStorage.setItem("question", JSON.stringify(newQuestions));
    toast.success("تم مسح العنصر بنجاح")
  };


 const removeAllQuestions = () => {
  setQusetion([]);
  localStorage.setItem("question", JSON.stringify([])); 
  toast.success("تم مسح جميع الأسئلة بنجاح"); 
};



  return (
    <QusetionContext.Provider
      value={{ addQusetion, removeQusetion, Questions,removeAllQuestions }}
    >
      {children}
    </QusetionContext.Provider>
  );
}

export default QusetionContextProvider;
