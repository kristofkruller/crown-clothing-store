import { AnyAction } from "redux";

import { CartItems } from "./cart-type";
import { setOpen, setCart } from "./cart-action"

export type CartType = {
  open: boolean,
  cartItems: CartItems | null
}

export const initCartStates: CartType = {
  open: false,
  cartItems: null
}

export const cartReducer = ( state = initCartStates, action = {} as AnyAction): CartType => {
  
  if (setOpen.match(action)) return {
    ...state,
    open: action.payload
  }
  if (setCart.match(action)) return {
    ...state,
    cartItems: action.payload
  }

  return state
} 