import { createSelector } from "reselect";
import { InitUser } from "./user-reducer";
import { RootState } from "../store";

export const selectUserReducer = (state: RootState): InitUser => state.user;

export const selectCurrentUser = createSelector(
  selectUserReducer,
  (user) => user.user
);