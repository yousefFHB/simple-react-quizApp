import { ArrowLeft, ArrowRight, CheckCircle, ChevronDown, ChevronUp, HelpCircle, XCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { answerQuestions, nextQuestion, previousQuestion } from "../../../Store/Slices/QuizSlice";

export default function Questions() {
  const { question, currentQuestionIndex, answers, showExplanation } = useSelector((state) => state.quiz);
  const currentQuestion = question[currentQuestionIndex];
  const currentAnswer = answers.find((answer) => answer.questionId === currentQuestion?.id);
  const dispatch = useDispatch();
  const [isExplanationOpen, setIsExplanationOpen] = useState(false);

  useEffect(() => {
    setIsExplanationOpen(false);
  }, [currentQuestionIndex]);

  const handleNext = () => {
    dispatch(nextQuestion());
  };

  const handlePrevious = () => {
    dispatch(previousQuestion());
  };

  const handleOptionclick = (optionindex) => {
    if (!currentAnswer && currentQuestion) {
      dispatch(answerQuestions({ selectedOption: optionindex + 1 }));
    }
  };

  if (!currentQuestion) return null;

  const answersOption = currentQuestion.options?.map((option, index) => {
    const isSelected = currentAnswer?.selectedOption === index + 1;
    const isCorrect = index + 1 === currentQuestion.correctanswer;
    const isWrong = isSelected && !isCorrect && showExplanation;

    let buttonclass = "w-full p-4 text-left rounded-xl border-2 transition-all duration-200 flex items-center justify-between group ";

    if (showExplanation) {
      if (isCorrect) {
        buttonclass += " border-green-500 bg-green-50 text-green-900 shadow-sm";
      } else if (isWrong) {
        buttonclass += " border-red-500 bg-red-50 text-red-900";
      } else {
        buttonclass += " border-slate-100 bg-slate-50 text-slate-400 opacity-60";
      }
    } else if (isSelected) {
      buttonclass += " border-slate-800 bg-slate-900 text-white shadow-md transform scale-[1.01]";
    } else {
      buttonclass += " border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 hover:shadow-sm";
    }

    return (
      <button key={index} className={buttonclass} onClick={() => handleOptionclick(index)}>
        <span className="text-base font-medium">{option}</span>
        <div className="shrink-0 ml-3">
          {showExplanation && isCorrect && <CheckCircle size={20} className="text-green-600" />}
          {showExplanation && isWrong && <XCircle size={20} className="text-red-600" />}
        </div>
      </button>
    );
  });

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        <div className="p-8 md:p-10">
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-tight">{currentQuestion.question}</h2>
          </div>

          <div className="grid gap-3 mb-8">{answersOption}</div>

          {showExplanation && currentQuestion.explanation && (
            <div className="mb-8">
              <button
                onClick={() => setIsExplanationOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
              >
                <HelpCircle size={16} />
                {isExplanationOpen ? "Hide Explanation" : "Show Explanation"}
                {isExplanationOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isExplanationOpen && (
                <div className="mt-3 bg-slate-50 border-l-4 border-slate-800 p-6 rounded-r-xl">
                  <p className="font-bold text-slate-900 text-sm uppercase tracking-wide mb-1">Explanation</p>
                  <p className="text-slate-600 leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              )}
            </div>
          )}

          <div className="flex justify-between items-center pt-6 border-t border-slate-100">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Previous</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!showExplanation}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white shadow-lg bg-slate-900 hover:bg-slate-800 hover:-translate-y-0.5 disabled:opacity-50 disabled:shadow-none disabled:bg-slate-300 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-200"
            >
              <span>{currentQuestionIndex === question.length - 1 ? "Finish Quiz" : "Next Question"}</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
