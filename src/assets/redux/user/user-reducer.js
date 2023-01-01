import { USER_ACTION_TYPES } from "./user-type";

const initialUser = {
  user: null
}

export const userReducer = (state = initialUser, action) => {

  const { type, payload } = action;

  switch ( type ) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: payload
      }

    default:
      return state;
  }
} 
