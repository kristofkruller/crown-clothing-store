// open: false,
// cartItems: [],
// qty: 0,
// totalVal: 0

import { createSelector } from "reselect";

const cartReducer = state => state.cart;

export const openSelector = createSelector(
  [cartReducer],
  open => open.open
);

export const cartItemsSelector = createSelector(
  [cartReducer],
  item => item.cartItems
);

export const qtySelector = createSelector(
  [cartReducer],
  quantity => quantity.qty
);

export const totalValSelector = createSelector(
  [cartReducer],
  total => total.totalVal
);
