import { answered } from "./cookie-selector";
import { COOKIE_ACTION_TYPES } from "./cookie-type";

const initialCookieState = {
  cookieState: "",
  answered: false
}

export const cookieReducer = (state = initialCookieState, action = {}) => {

  const {type, payload} = action;

  switch ( type ) {
    case COOKIE_ACTION_TYPES.NECESSARY_ONLY:
      return {
        ...state,
        answered: true,
        cookieState: payload
      };

    case COOKIE_ACTION_TYPES.ACCEPT_ALL:
      return {
        ...state,
        answered: true,
        cookieState: payload
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