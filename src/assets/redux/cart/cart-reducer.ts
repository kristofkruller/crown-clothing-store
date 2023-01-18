import { AnyAction } from "redux";

import { CartItems } from "./cart-type";
import { setOpen, setCart } from "./cart-action"

export type CartType = {
  open: boolean,
  cartItems: CartItems[],
}

export const initCartStates: CartType = {
  open: false,
  cartItems: []
}

export const cartReducer = ( state = initCartStates, action = {} as AnyAction): CartType => {
  
  if (setOpen.match(action)) return {
    ...state,
    open: action.payload
  }
  if (setCart.match(action)) return {
    ...state,
    ...action.payload
  }


  return state
  // const { type, payload } = action;

  // switch ( type ) {
  //   case CART_ACTION_TYPES.SET_OPEN:
  //     return {
  //       ...state,
  //       open: payload
  //     };
  //   case CART_ACTION_TYPES.SET_CART_ITEMS:
  //     return {
  //       ...state,
  //       ...payload
  //     };
  //   default:
  //     return state;
  // }
} 