import { actionHandler, ActionWithPayload } from "../action-handler";
import { USER_ACTION_TYPES, UserType } from "./user-type";

export type UserAction = ActionWithPayload<USER_ACTION_TYPES.SET_USER, UserType>;

export const setUser = (user: UserType): UserAction => actionHandler(USER_ACTION_TYPES.SET_USER, user);