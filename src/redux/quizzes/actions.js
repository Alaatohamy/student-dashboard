import { QuizActionTypes } from "./types";
import { CalenderData as quizData } from "./quiz-data";

export const fakeQuizService = () => ({
  type: QuizActionTypes.GET_QUIZ,
  payload: quizData
});

export const quizServiceStart = () => ({
  type: QuizActionTypes.GET_REAL_QUIZ_START
});

export const quizServiceSuccess = realQuizData => ({
  type: QuizActionTypes.GET_REAL_QUIZ_START,
  payload: realQuizData
});

export const quizServiceFailure = error => ({
  type: QuizActionTypes.GET_REAL_QUIZ_START,
  payload: error
});
