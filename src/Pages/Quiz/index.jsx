import React, { useEffect } from 'react'
import QuizStart from "./QuizStart"
import { useDispatch, useSelector } from 'react-redux'
import Loading from '../../Components/Loading'
import Result from './Result'
import ProgressBar from './ProgressBar'
import Timer from './Timer'
import Questions from './Questions'
import { setQuestions } from '../../Store/Slices/QuizSlice'
import { getRandomQuestions, sampleQuestions } from "../../data/data"
export default function Quiz() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setQuestions(getRandomQuestions(sampleQuestions, 10)))

    }, [dispatch]);


    const { question, currentQuestionIndex, isQuizCompleted, answers, isTimerActive } = useSelector(state => state.quiz);
    if (question.length == 0) {
        return <Loading />;
    };
    if (isQuizCompleted == true) {
        return <Result />

    }
    if (!isTimerActive && answers.length === 0) {
        return <QuizStart />

    }
    return (
        <div className="min-h-screen  px-4 py-8">
            <div className="max-w-4xl mx-auto space-y-8">

                {/* Top Bar */}
                <div className="
      rounded-2xl
      border border-slate-200
      bg-white
      p-6
      shadow-sm
    ">
                    <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                        {/* Progress */}
                        <div className="flex-1">
                            <ProgressBar current={currentQuestionIndex+1} total={question.length} />
                        </div>

                        {/* Timer */}
                        <div className="
          md:ml-6
          flex items-center justify-center
          rounded-xl
          border border-slate-200
          bg-slate-50
          px-4 py-2
        ">
                            <Timer />
                        </div>
                    </div>
                </div>

                {/* Questions */}
                <div className="
      rounded-2xl
      border border-slate-200
      bg-white
      p-8
      shadow-sm
    ">
                    <Questions />
                </div>

            </div>
        </div>

    )
}
