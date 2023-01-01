import { createAction } from "@reduxjs/toolkit";
import { USER_ACTION_TYPES } from "./user-type";


export const setUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_USER, user);