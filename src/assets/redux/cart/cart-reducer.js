import { CART_ACTION_TYPES } from "./cart-type";

export const initCartStates = {
  open: false,
  cartItems: [],
  qty: 0,
  totalVal: 0
}

export const cartReducer = ( state = initCartStates, action = {} ) => {
  
  const { type, payload } = action;

  switch ( type ) {
    case CART_ACTION_TYPES.SET_OPEN:
      return {
        ...state,
        open: payload
      };
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
} 