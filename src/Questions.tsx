import Accordian from "./Accordian";
import { useQuestion } from "./hooks";

function Questions() {
  const { Questions, removeAllQuestions } = useQuestion(); // لو عندك دالة لمسح كل العناصر

  return (
    <div className="bg-gray-100 py-5 mt-5 ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20">
        {Questions.length > 0 ? (
          Questions.map((que) => (
            <div
              key={que.id}
              className="mb-4 bg-white rounded-md shadow-sm p-2 sm:p-4"
            >
              <Accordian question={que} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">لا توجد أسئلة حالياً</p>
        )}

        {Questions.length > 0 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={removeAllQuestions}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
            >
              مسح جميع العناصر
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Questions;
