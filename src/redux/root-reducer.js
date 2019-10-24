import { combineReducers } from "redux";
import { announcementsReducer } from "./announcements/reducer";
import { quizReducer } from "./quizzes/reducer";
import { userReducer } from "./user/reducer";

const rootReducer = combineReducers({
  announcements: announcementsReducer,
  quiz: quizReducer,
  user: userReducer
});

export default rootReducer;
