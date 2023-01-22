import { USER_ACTION_TYPES, UserType } from "./user-type";
import { AnyAction } from "redux";
import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
} from './user-action';
import { InitState } from "../categories/category-reducer";

export type InitUser = {
  user: null | UserType;
} & InitState;

export const initialUser: InitUser = {
  user: null,
  isLoading: false,
  error: null
};

export const userReducer = (state = initialUser, action = {} as AnyAction) => {

  if (signInSuccess.match(action)) {
    return { ...state, user: action.payload };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, user: null };
  }

  if (
    signInFailed.match(action) ||
    signUpFailed.match(action) ||
    signOutFailed.match(action)
  ) {
    return { ...state, error: action.payload };
  }

  return state;

}; 
