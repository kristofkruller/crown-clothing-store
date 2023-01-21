import { AnyAction } from "redux";
import { COOKIE_ACTION_TYPES } from "./cookie-type";

export type InitCookieTypes = {
  cookieState: string,
  answered: boolean
}

const initialCookieState: InitCookieTypes = {
  cookieState: "",
  answered: false
}

export const cookieReducer = (state = initialCookieState, action = {} as AnyAction):InitCookieTypes => {

  switch ( action.type ) {
    case COOKIE_ACTION_TYPES.NECESSARY_ONLY:
      return {
        ...state,
        answered: true,
        cookieState: action.payload
      };

    case COOKIE_ACTION_TYPES.ACCEPT_ALL:
      return {
        ...state,
        answered: true,
        cookieState: action.payload
      };
    case COOKIE_ACTION_TYPES.DECLINE_ALL:
      return {
        ...state,
        answered: false
      };
    default:
      return state;
  }

}