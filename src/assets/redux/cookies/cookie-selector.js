import { createSelector } from "reselect";

const cookieReducer = state => state.cookies;

export const cookieType = createSelector(
  [cookieReducer],
  cookie => cookie.cookieState
)

export const answered = createSelector(
  [cookieReducer],
  cookie => cookie.answered
)