import { AnnouncementsActionTypes } from "./types";
import { announcementsData } from "./announcement-data";

export const fakeAnnouncementService = () => ({
  type: AnnouncementsActionTypes.GET_FAKE_ANNOUNCEMENTS,
  payload: announcementsData
});

export const announcementServiceStart = () => ({
  type: AnnouncementsActionTypes.GET_REAL_ANNOUNCEMENTS
});

export const announcementServiceSuccess = realAnnouncements => ({
  type: AnnouncementsActionTypes.GET_REAL_ANNOUNCEMENTS,
  payload: realAnnouncements
});

export const announcementServiceFailure = error => ({
  type: AnnouncementsActionTypes.GET_REAL_ANNOUNCEMENTS,
  payload: error
});
