import React from 'react'
import { BookOpen, Clock, Play, Trophy } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { startQuiz } from '../../../Store/Slices/QuizSlice'
export default function QuizStart() {
    const dispatch = useDispatch()
    const { question } = useSelector((state) => state.quiz)


    const handleStartQuiz = () => {
        dispatch(startQuiz())
    }
    return (
        <div className='min-h-screen py-12 px-4 sm:px-6'>
            <div className='max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden'>
                <div className='p-8 md:p-12 text-center'>

                    {/* Header Section */}
                    <div className='mb-10'>
                        <div className='inline-flex items-center justify-center w-24 h-24 mb-6 rounded-full bg-slate-200 text-slate-800 ring-8 ring-slate-50'>
                            <BookOpen className='w-10 h-10' />
                        </div>
                        <h1 className='text-3xl md:text-4xl font-black text-slate-900 mb-4 tracking-tight'>
                            React Knowledge Quiz
                        </h1>
                        <p className='text-lg md:text-xl text-slate-500 mb-8 max-w-2xl mx-auto leading-relaxed'>
                            Test your knowledge of React, JS, and Web development. Answer multiple choice questions and see how well you know the fundamentals.
                        </p>
                    </div>

                    {/* Stats Cards */}
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-10'>
                        {/* Card 1 */}
                        <div className='p-6 rounded-2xl bg-slate-200 border border-slate-100 flex flex-col items-center hover:border-slate-300 transition-colors'>
                            <div className='flex items-center justify-center mb-3 text-slate-700 bg-white p-3 rounded-xl shadow-sm'>
                                <BookOpen className='w-6 h-6' />
                            </div>
                            <div className='text-2xl font-bold text-slate-900 mb-1'>{question.length}</div>
                            <div className='text-sm font-semibold text-slate-400 uppercase tracking-wider'>Questions</div>
                        </div>

                        {/* Card 2 */}
                        <div className='p-6 rounded-2xl bg-slate-200 border border-slate-100 flex flex-col items-center hover:border-slate-300 transition-colors'>
                            <div className='flex items-center justify-center mb-3 text-slate-700 bg-white p-3 rounded-xl shadow-sm'>
                                <Clock className='w-6 h-6' />
                            </div>
                            <div className='text-2xl font-bold text-slate-900 mb-1'>5:00</div>
                            <div className='text-sm font-semibold text-slate-400 uppercase tracking-wider'>Minutes</div>
                        </div>

                        {/* Card 3 */}
                        <div className='p-6 rounded-2xl bg-slate-200 border border-slate-100 flex flex-col items-center hover:border-slate-300 transition-colors'>
                            <div className='flex items-center justify-center mb-3 text-slate-700 bg-white p-3 rounded-xl shadow-sm'>
                                <Trophy className='w-6 h-6' />
                            </div>
                            <div className='text-2xl font-bold text-slate-900 mb-1'>100%</div>
                            <div className='text-sm font-semibold text-slate-400 uppercase tracking-wider'>Max score</div>
                        </div>
                    </div>

                    {/* Rules Section */}
                    <div className='mb-10 text-left'>
                        <h3 className='mb-6 font-bold text-xl text-slate-900 text-center'>Quiz Rules</h3>
                        <div className='rounded-2xl max-w-2xl mx-auto bg-slate-50 border border-slate-200 p-6 md:p-8'>
                            <ul className='space-y-4'>
                                {[1, 2, 3, 4].map((num) => (
                                    <li key={num} className='flex items-start'>
                                        <span className='flex items-center justify-center mr-4 mt-0.5 shrink-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold'>
                                            {num}
                                        </span>
                                        <span className='text-slate-600 font-medium'>
                                            Each question has multiple choice answers
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Start Button */}
                    <button
                        onClick={handleStartQuiz}
                        className='
                    inline-flex items-center space-x-3 
                    py-4 px-10 
                    bg-slate-900 hover:bg-slate-800 
                    text-white font-bold text-lg
                    rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1
                    transition-all duration-200 cursor-pointer
                '
                    >
                        <Play size={24} fill="currentColor" />
                        <span>Start Quiz</span>
                    </button>

                </div>
            </div>
        </div>
    )
}
