import { AnnouncementsActionTypes } from "./types";
import { announcementsData } from "./announcement-data";

export const fakeAnnouncementService = () => ({
  type: AnnouncementsActionTypes.GET_ANNOUNCEMENTS,
  payload: announcementsData
});
