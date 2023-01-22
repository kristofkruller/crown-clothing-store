import { createSelector } from "reselect";
import { RootState } from "../store";
import { InitCookieTypes } from "./cookie-reducer";

const cookieReducer = (state: RootState): InitCookieTypes => state.cookies;

export const cookieType = createSelector(
  [cookieReducer],
  cookie => cookie.cookieState
)

export const answered = createSelector(
  [cookieReducer],
  cookie => cookie.answered
)