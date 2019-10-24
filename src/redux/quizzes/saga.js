import { takeEvery, all, put } from "redux-saga/effects";
import { QuizActionTypes } from "./types";
import { quizServiceSuccess, quizServiceFailure } from "./actions";

function* quizServiceStartAsync() {
  try {
    const quiz = yield fetch("http://test.coligolms.com/api/quiz");
    const jsonQuiz = yield quiz.json();
    yield put(quizServiceSuccess(jsonQuiz));
  } catch (error) {
    yield put(quizServiceFailure(error));
  }
}

function* onQuizServiceStart() {
  yield takeEvery(QuizActionTypes.GET_REAL_QUIZ_START, quizServiceStartAsync);
}

export default function* quizSaga() {
  yield all([onQuizServiceStart()]);
}
