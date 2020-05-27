import { combineReducers } from "redux";
import { postsReducer  } from "./postsReducer";
import {appReduser} from "./appReduser"

export const rootReducer = combineReducers({
  posts: postsReducer,
  app: appReduser
})