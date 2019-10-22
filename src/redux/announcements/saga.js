import { takeEvery, all, put } from "redux-saga/effects";
import { AnnouncementsActionTypes } from "./types";
import {
  announcementServiceSuccess,
  announcementServiceFailure
} from "./actions";

function* announcementServiceStartAsync() {
  try {
    const announcements = yield fetch(
      "http://test.coligolms.com/api/announcement"
    );
    const jsonAnnouncements = yield announcements.json();
    yield put(announcementServiceSuccess(jsonAnnouncements));
  } catch (error) {
    yield put(announcementServiceFailure(error));
  }
}

function* onAnnouncementServiceStart() {
  yield takeEvery(
    AnnouncementsActionTypes.GET_REAL_ANNOUNCEMENTS_START,
    announcementServiceStartAsync
  );
}

export default function* announcementsSaga() {
  yield all([onAnnouncementServiceStart()]);
}
