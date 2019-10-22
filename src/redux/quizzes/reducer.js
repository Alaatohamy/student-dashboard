import { QuizActionTypes } from "./types";

const INITIAL_STATE = {
  // [TODO] check emoji
  quizzesList: [],
  loading: false,
  error: ""
};

export const quizReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case QuizActionTypes.GET_QUIZ:
    case QuizActionTypes.GET_REAL_QUIZ_SUCCESS:
      return {
        ...state,
        quizzesList: action.payload,
        loading: false
      };
    case QuizActionTypes.GET_REAL_QUIZ_START:
      return {
        ...state,
        loading: true
      };
    case QuizActionTypes.GET_REAL_QUIZ_FAILURE:
      return {
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
