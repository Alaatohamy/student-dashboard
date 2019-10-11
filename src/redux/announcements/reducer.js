import { AnnouncementsActionTypes } from "./types";

const INITIAL_STATE = {
  // [TODO] check emoji
  announcementsData: []
};

export const announcementsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AnnouncementsActionTypes.GET_ANNOUNCEMENTS:
      return {
        ...state,
        announcementsData: action.payload
      };
    default:
      return state;
  }
};
