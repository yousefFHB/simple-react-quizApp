import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  question: [],
  answers: [],
  currentQuestionIndex: 0,
  isQuizCompleted: false,
  score: 0,
  timeLeft: 300,
  isTimerActive: false,
  showExplanation: false,
};

const QuizSlcie = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setQuestions: (state, action) => {
      state.question = action.payload;
    },
    startQuiz: (state) => {
      state.answers = [];
      state.currentQuestionIndex = 0;
      state.score = 0;
      state.isQuizCompleted = false;
      state.isTimerActive = true;
      state.timeLeft = 300;
      state.showExplanation = false;
    },
    decreamentTimer: (state) => {
      if (state.timeLeft > 0 && state.isTimerActive) {
        state.timeLeft -= 1;
      } else if (state.timeLeft === 0) {
        ((state.isQuizCompleted = true), (state.isTimerActive = false));
      }
    },
    answerQuestions: (state, action) => {
      const currentQuestion = state.question[state.currentQuestionIndex];
      if (!currentQuestion) return;
      const isCorrect =
        action.payload.selectedOption === currentQuestion.correctanswer;

      const answer = {
        questionId: currentQuestion.id,
        selectedOption: action.payload.selectedOption,
        isCorrect,
      };
      state.answers.push(answer);
      if (isCorrect) {
        state.score += 1;
      }
      state.showExplanation = true;
    },
    nextQuestion: (state) => {
      if (state.currentQuestionIndex < state.question.length - 1) {
        state.currentQuestionIndex += 1;
        const nextQuestionId = state.question[state.currentQuestionIndex]?.id;
        state.showExplanation = state.answers.some(
          (answer) => answer.questionId === nextQuestionId
        );
      } else {
        state.isQuizCompleted = true;
        state.isTimerActive = false;
        state.showExplanation = false;
      }
    },
    previousQuestion: (state) => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
        const previousQuestionId = state.question[state.currentQuestionIndex]?.id;
        state.showExplanation = state.answers.some(
          (answer) => answer.questionId === previousQuestionId
        );
      }
    },
  },
});

export const {
  setQuestions,
  startQuiz,
  decreamentTimer,
  answerQuestions,
  nextQuestion,
  previousQuestion,
} = QuizSlcie.actions;
export default QuizSlcie.reducer;
