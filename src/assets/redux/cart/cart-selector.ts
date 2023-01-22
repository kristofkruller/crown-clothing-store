import { createSelector } from "reselect";
import { RootState } from "../store";
import { CartType } from "./cart-reducer";

const cartReducer = (state: RootState): CartType => state.cart;

export const openSelector = createSelector(
  [cartReducer], cart => cart.open
);

export const cartItemsSelector = createSelector(
  [cartReducer], item => item.cartItems
);

export const cartCountSelector = createSelector(
  [cartItemsSelector], (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
);

export const totalValSelector = createSelector(
  [cartItemsSelector], (cartItems) => cartItems.reduce((total, cartItem) =>  total + (cartItem.quantity * cartItem.price), 0)
);

