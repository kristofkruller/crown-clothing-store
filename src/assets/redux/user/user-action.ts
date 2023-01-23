import { actionHandler, ActionWithPayload, Action, withMatcher } from "../action-handler";
import { USER_ACTION_TYPES, UserType } from "./user-type";

//TYPES

export type UserAction = ActionWithPayload<USER_ACTION_TYPES.SET_USER, UserType>;
export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

//ACTIONS

export const setUser = withMatcher((user: UserType): UserAction => actionHandler(USER_ACTION_TYPES.SET_USER, user));


export const checkUserSession = withMatcher(
  (): CheckUserSession => actionHandler(USER_ACTION_TYPES.CHECK_USER_SESSION)
);