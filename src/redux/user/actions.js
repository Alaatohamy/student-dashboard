import { UserActionTypes } from "./types";

export const login = () => ({
  type: UserActionTypes.LOGIN
});

export const logout = () => ({
  type: UserActionTypes.LOGOUT
});
