import { createSelector } from "reselect";
import { InitCookieTypes } from "./cookie-reducer";

const cookieReducer = (state): InitCookieTypes => state.cookies;

export const cookieType = createSelector(
  [cookieReducer],
  cookie => cookie.cookieState
)

export const answered = createSelector(
  [cookieReducer],
  cookie => cookie.answered
)