import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./Slices/AuthSlice"
import QuizSliceReducer from "./Slices/QuizSlice"
const store=configureStore({
    reducer:{
        auth:authSliceReducer,
        quiz:QuizSliceReducer,
    }
})
export default store