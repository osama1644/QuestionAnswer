import { useState } from "react";
import { toast } from "react-toastify";
import type { Question } from "./types";
import { useQuestion } from "./hooks";

function Form() {
  const [questionValue, setQuestionValue] = useState("");
  const [answerValue, setAnswer] = useState("");
   const {addQusetion} =useQuestion()

  const handleAddQuestion = () => {
    if (!questionValue || !answerValue) {
      toast.error("يجب عليك ادخال السؤال والجواب معا");
      return;
    }
    const newQuestion: Question = {
      id: Date.now(),
      question: questionValue,
      answer: answerValue,
    };
    toast.success("تم اضافه السؤال بنجاح");
    console.log(newQuestion);
    addQusetion(newQuestion)
    setAnswer("")
    setQuestionValue("")

  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-gray-50 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="ادخل السؤال"
        value={questionValue}
        onChange={(e) => setQuestionValue(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="text"
        placeholder="ادخل الاجابه"
        value={answerValue}
        onChange={(e) => setAnswer(e.target.value)}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleAddQuestion}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >اضف السؤال</button>
    </div>
  );
}

export default Form;
