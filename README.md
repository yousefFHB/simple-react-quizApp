# Quiz App (Roadmap.sh Project)

A React quiz application built for the Roadmap.sh Quiz App project.

Project requirement:
https://roadmap.sh/projects/quiz-app

## Overview

This app includes two learning modules:
- A timed quiz flow with randomized questions, scoring, and explanations
- A simple auth flow practice page using Redux token state and Fake Store API login

## Features

- Randomly picks 10 questions from a local 30-question dataset
- 5-minute countdown timer for each quiz run
- Progress bar (`Question X of Y`) and percentage indicator
- One-click answer selection per question (answer is locked after selection)
- Correct/wrong visual feedback after selecting an option
- Optional explanation panel for each question
- Previous/Next navigation with guarded progression
- Result page with:
  - score and accuracy
  - time used
  - per-question correct/wrong review
  - retake quiz action (new random set)
- Redux Toolkit for quiz and auth state
- Responsive UI with Tailwind CSS
- Route transitions with Framer Motion
- Toast notifications for login status

## Tech Stack

- React 19
- Vite 7
- React Router DOM
- Redux Toolkit + React Redux
- Tailwind CSS 4
- Framer Motion
- Lucide React
- React Hot Toast

## Project Structure

```text
src/
  Components/
    Loading/
    Nav/
  data/
    data.js
  Hooks/
    UseFormFields.jsx
  Pages/
    Auth/
      Login/
      Register/
    Home/
    Quiz/
      ProgressBar/
      Questions/
      QuizStart/
      Result/
      Timer/
    LogedIn.jsx
  Store/
    Slices/
      AuthSlice.js
      QuizSlice.js
    index.js
  Utils/
    Notify.js
  App.jsx
  main.jsx
```

## Routes

- `/` -> Home
- `/auth` -> Auth page (shows logged-in state if token exists)
- `/login` -> Login page
- `/register` -> Register page (UI only)
- `/Quiz` -> Quiz module

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd simple-react-quizApp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run development server

```bash
npm run dev
```

### 4. Build for production

```bash
npm run build
```

## Auth Notes

- Login requests are sent to `https://fakestoreapi.com/auth/login`
- Auth state is stored in Redux (`token`, `user`)
- There is no persistent auth storage (refresh clears Redux state)
- Register page is currently a frontend form only (no API integration)

## Quiz Notes

- Questions are loaded from `src/data/data.js`
- `getRandomQuestions` shuffles and slices questions for each run
- Timer auto-completes quiz when it reaches `00:00`

## License

This project is for learning and portfolio use.
