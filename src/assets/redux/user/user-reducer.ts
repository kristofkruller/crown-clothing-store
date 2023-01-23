import { AnyAction } from "redux";
import { USER_ACTION_TYPES, UserType } from "./user-type";

export type InitUser = {
  user: UserType | null,
  isLoading?: boolean,
  error?: Error | null
}

export const initialUser: InitUser = {
  user: null,
  isLoading: false,
  error: null
};

export const userReducer = (state = initialUser, action = {} as AnyAction) => {

  switch (action.type) {
    case USER_ACTION_TYPES.SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};