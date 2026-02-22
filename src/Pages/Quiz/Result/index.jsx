import { Award, Clock, RefreshCcw, Target, Trophy } from "lucide-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setQuestions, startQuiz } from "../../../Store/Slices/QuizSlice";
import { getRandomQuestions, sampleQuestions } from "../../../data/data";

export default function Result() {
  const dispatch = useDispatch();
  const { score, question, answers, timeLeft } = useSelector((state) => state.quiz);

  const totalQuestions = question.length;
  const percentage = totalQuestions ? Math.round((score / totalQuestions) * 100) : 0;
  const timeUsed = 300 - timeLeft;
  const usedMinutes = Math.floor(timeUsed / 60);
  const usedSeconds = timeUsed % 60;

  const performanceMessage =
    percentage >= 80
      ? "Excellent work. Strong fundamentals."
      : percentage >= 60
      ? "Good job. You are getting there."
      : "Keep practicing. You will improve quickly.";

  const handleRetake = () => {
    dispatch(setQuestions(getRandomQuestions(sampleQuestions, 10)));
    dispatch(startQuiz());
  };

  return (
    <div className="min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto rounded-3xl border border-slate-200 bg-white shadow-xl overflow-hidden">
        <div className="bg-linear-to-r from-slate-900 to-slate-700 text-white p-8 md:p-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/15 mb-4">
            <Trophy className="w-8 h-8" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black">Quiz Completed</h1>
          <p className="mt-2 text-slate-200">{performanceMessage}</p>
        </div>

        <div className="p-8 md:p-10">
          <div className="grid gap-4 md:grid-cols-3 mb-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <Target className="w-7 h-7 mx-auto mb-2 text-slate-700" />
              <p className="text-3xl font-black text-slate-900">
                {score}/{totalQuestions}
              </p>
              <p className="text-sm font-semibold text-slate-500 mt-1">Correct Answers</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <Award className="w-7 h-7 mx-auto mb-2 text-slate-700" />
              <p className="text-3xl font-black text-slate-900">{percentage}%</p>
              <p className="text-sm font-semibold text-slate-500 mt-1">Accuracy</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
              <Clock className="w-7 h-7 mx-auto mb-2 text-slate-700" />
              <p className="text-3xl font-black text-slate-900">
                {usedMinutes}:{usedSeconds.toString().padStart(2, "0")}
              </p>
              <p className="text-sm font-semibold text-slate-500 mt-1">Time Used</p>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <h3 className="text-lg font-bold text-slate-900 mb-4">Question Review</h3>
            <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
              {question.map((currentQuestion, index) => {
                const answer = answers.find((a) => a.questionId === currentQuestion.id);
                const isCorrect = answer?.isCorrect ?? false;
                return (
                  <div
                    key={currentQuestion.id}
                    className={`flex items-center justify-between rounded-xl border px-4 py-3 ${
                      isCorrect
                        ? "border-green-200 bg-green-50"
                        : "border-red-200 bg-red-50"
                    }`}
                  >
                    <p className="font-medium text-slate-800">
                      Q{index + 1}. {currentQuestion.question}
                    </p>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold ${
                        isCorrect
                          ? "bg-green-200 text-green-800"
                          : "bg-red-200 text-red-800"
                      }`}
                    >
                      {isCorrect ? "Correct" : "Wrong"}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={handleRetake}
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-8 py-3 text-white font-bold hover:bg-slate-800 transition-colors"
            >
              <RefreshCcw size={18} />
              Take Quiz Again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
