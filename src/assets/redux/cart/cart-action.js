import { actionHandler } from "../action-handler";
import { CART_ACTION_TYPES } from "./cart-type";

export const setOpen = set => actionHandler(CART_ACTION_TYPES.SET_OPEN, set);

//"helper" functions

export const addToCart = (cartItems, itemToAdd) => {
  //find if dropdown contains already or not
  const existingItem = cartItems.find(element => element.id === itemToAdd.id);
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

export const decreaseCartQty = (cartItems, itemToRem) => {

  const existingItem = cartItems.find(element => element.id === itemToRem.id);

  if (existingItem.quantity === 1) return cartItems.filter((e) => e.id !== itemToRem.id)

  return cartItems.map(cartItem => 
    cartItem.id === itemToRem.id 
    ? {...cartItem, quantity: cartItem.quantity - 1} 
    : cartItem
  );

}

export const removeCartQty = (cartItems, toClear) => {

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