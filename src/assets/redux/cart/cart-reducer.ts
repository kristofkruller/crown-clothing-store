import { AnyAction } from "redux";

import { CartItems } from "./cart-type";
import { setOpen, setCart } from "./cart-action"

export type CartType = {
  readonly open: boolean,
  readonly cartItems: CartItems[]
}

export const initCartStates: CartType = {
  open: false,
  cartItems: []
}

export const cartReducer = ( 
  state = initCartStates, 
  action = {} as AnyAction): CartType => 
{  
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