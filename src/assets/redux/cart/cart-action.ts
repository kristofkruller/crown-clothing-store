import { ActionWithPayload, actionHandler, withMatcher } from "../action-handler";
import { CatArrayItem } from "../categories/category-type";

import { CART_ACTION_TYPES, CartItems } from "./cart-type";

//ACTIONS

export type OpenAction = ActionWithPayload<CART_ACTION_TYPES.SET_OPEN, boolean>;
export type SetterAction = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItems[]>;

export const setOpen = withMatcher((bool: boolean):OpenAction => actionHandler(CART_ACTION_TYPES.SET_OPEN, bool));
export const setCart = withMatcher((cartItems: CartItems[]):SetterAction => actionHandler(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

//HELPER functions

const addToCart = (
  cartItems: CartItems[], 
  itemToAdd: CatArrayItem
  ) => 
{
  //find if dropdown contains already or not
  const existingItem = cartItems.find((element) => element.id === itemToAdd.id);
  //if there is a cartitem what matches with the CATEGORYitem what we want to add then check and increase qty:
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

const decreaseCartQty = (
  cartItems: CartItems[], 
  itemToRem: CartItems
  ) => 
{
  // find the cart item to remove
  const existingItem = cartItems.find(element => element.id === itemToRem.id);
  
  // check if quantity is equal to 1, if it is remove that item from the cart
  if (existingItem && existingItem.quantity === 1) return cartItems.filter((e) => e.id !== itemToRem.id)
  
  // return back cartitems with matching cart item with reduced quantity
  return cartItems.map(cartItem => 
    cartItem.id === itemToRem.id 
    ? {...cartItem, quantity: cartItem.quantity - 1} 
    : cartItem
  );

}

const removeCartQty = (
  cartItems: CartItems[], 
  toClear: CartItems
  ) => 
{
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

//CUSTOM ACTIONS

export const addItemToCart = (
  cartItems: CartItems[],
  itemToAdd: CatArrayItem
) => {
  const newCartItems = addToCart(cartItems, itemToAdd);
  return setCart(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItems[],
  cartItemToRemove: CartItems
) => {
  const newCartItems = decreaseCartQty(cartItems, cartItemToRemove);
  return setCart(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItems[],
  cartItemToClear: CartItems
) => {
  const newCartItems = removeCartQty(cartItems, cartItemToClear);
  return setCart(newCartItems);
};