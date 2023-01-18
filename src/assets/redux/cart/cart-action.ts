import { ActionWithPayload, actionHandler, withMatcher } from "../action-handler";

import { CART_ACTION_TYPES, CartItems } from "./cart-type";

export type OpenAction = ActionWithPayload<CART_ACTION_TYPES.SET_OPEN, boolean>;
export type SetterAction = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItems[]>;

export const setOpen = withMatcher((set: boolean):OpenAction => actionHandler(CART_ACTION_TYPES.SET_OPEN, set));

export const setCart = withMatcher((CartItems : CartItems[]):SetterAction => actionHandler(CART_ACTION_TYPES.SET_CART_ITEMS, CartItems));

//"helper" functions

export const addToCart = (cartItems: CartItems[], itemToAdd: CartItems) => {
  //find if dropdown contains already or not
  const existingItem = cartItems.find((element) => element.id === itemToAdd.id);
  //if there is a cartitem what matches with the item what we want to add then check and increase qty:
  if (existingItem) {
      return cartItems.map(cartItem => 
      cartItem.id === itemToAdd.id 
      ? {...cartItem, quantity: cartItem.quantity + 1} 
      : cartItem
      );
  } 
  //if there is not an item in the cart set qty:1
  return [...cartItems, {...itemToAdd, quantity: 1}]
}

export const decreaseCartQty = (cartItems: CartItems[], itemToRem: CartItems) => {

  const existingItem = cartItems.find(element => element.id === itemToRem.id);

  if (existingItem !== undefined && existingItem.quantity === 1) return cartItems.filter((e) => e.id !== itemToRem.id)

  return cartItems.map(cartItem => 
    cartItem.id === itemToRem.id 
    ? {...cartItem, quantity: cartItem.quantity - 1} 
    : cartItem
  );

}

export const removeCartQty = (cartItems: CartItems[], toClear: CartItems) => {

  return (
    cartItems.filter((e) => e.id !== toClear.id).map(cartItem => 
      cartItem.id === toClear.id 
      ? {
        ...cartItem, 
        quantity: (cartItem.quantity - cartItem.quantity)
      } 
      : cartItem
    )    
  )
}