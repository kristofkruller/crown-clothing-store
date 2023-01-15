import { USER_ACTION_TYPES, UserType } from "./user-type";
import { ActionWithPayload } from "../action-handler";
import { UserAction } from "./user-action";

export type InitUser = {
  user: null | UserType;
}
export const initialUser: InitUser = {
  user: null
};

export const userReducer = (state = initialUser, action = {} as UserAction) => {

  switch ( action.type ) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: action.payload
      };

    default:
      return state;
  }
}; 
