import { AnnouncementsActionTypes } from "./types";

const INITIAL_STATE = {
  // [TODO] check emoji
  announcementsData: [],
  error: "",
  loading: false
};

export const announcementsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnnouncementsActionTypes.GET_FAKE_ANNOUNCEMENTS:
    case AnnouncementsActionTypes.GET_REAL_ANNOUNCEMENTS_SUCCESS:
      return {
        ...state,
        announcementsData: action.payload,
        loading: false
      };
    case AnnouncementsActionTypes.GET_REAL_ANNOUNCEMENTS_START:
      return {
        ...state,
        loading: true
      };
    case AnnouncementsActionTypes.GET_REAL_ANNOUNCEMENTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
