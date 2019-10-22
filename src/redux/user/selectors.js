import { createSelector } from "reselect";

const selectUser = state => state.user;

export const selectLoggedInState = createSelector(
  selectUser,
  user => user.loggedIn
);
