import { combineReducers } from "redux";
import { catReducer } from "./categories/category-reducer";
import { userReducer } from "./user/user-reducer";

export const rootReducer = combineReducers({
  user: userReducer,
  categories: catReducer,
});