import { QuizActionTypes } from "./types";
import { CalenderData as quizData } from "./quiz-data";

export const fakeQuizService = () => ({
  type: QuizActionTypes.GET_QUIZ,
  payload: quizData
});
