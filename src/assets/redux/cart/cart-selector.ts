import { createSelector } from "reselect";
import { CartType } from "./cart-reducer";
import { CartItems } from "./cart-type";

const cartReducer = (state): CartItems & CartType => state.cart;

export const openSelector = createSelector(
  [cartReducer], open => open.open
);

export const cartItemsSelector = createSelector(
  [cartReducer], item => item.cartItems
);

export const cartCountSelector = createSelector(
  [cartItemsSelector], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) =>  total + cartItem.quantity, 0
  )
);

export const totalValSelector = createSelector(
  [cartItemsSelector], (cartItems) =>
  cartItems.reduce(
    (total, cartItem) =>  total + (cartItem.quantity * cartItem.price), 0
  )
);

