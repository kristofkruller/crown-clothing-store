import { actionHandler } from "../action-handler";
import { USER_ACTION_TYPES } from "./user-type";

export const setUser = (user) => actionHandler(USER_ACTION_TYPES.SET_USER, user);