import { QuizActionTypes } from "./types";

const INITIAL_STATE = {
  // [TODO] check emoji
  quizzesList: []
};

export const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizActionTypes.GET_QUIZ:
      return {
        ...state,
        quizzesList: action.payload
      };
    default:
      return state;
  }
};
