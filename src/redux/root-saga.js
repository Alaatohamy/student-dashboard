import { all, call } from "redux-saga/effects";
import announcementsSaga from "./announcements/saga";
import quizSaga from "./quizzes/saga";

export default function* rootSaga() {
  yield all([call(announcementsSaga), call(quizSaga)]);
}
