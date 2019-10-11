import { combineReducers } from "redux";
import { announcementsReducer } from "./announcements/reducer";
import { quizReducer } from "./quizzes/reducer";

const rootReducer = combineReducers({
  announcements: announcementsReducer,
  quiz: quizReducer
});

export default rootReducer;
