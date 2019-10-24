import { UserActionTypes } from "./types";

const INITIAL_STATE = {
  loggedIn: false
};

export const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.LOGIN:
    case UserActionTypes.LOGOUT:
      return {
        ...state,
        loggedIn: !state.loggedIn
      };
    default:
      return state;
  }
};
