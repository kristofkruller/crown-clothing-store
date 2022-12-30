import { createContext, useReducer } from "react";

// REDUCER //

export const initCartStates = {
  open: false,
  cartItems: [],
  qty: 0,
  totalVal: 0
}
export const CART_ACTION_TYPES = {
  SET_OPEN: "SET_OPEN",
  SET_CART_ITEMS: "SET_CART_ITEMS"
}

const cartReducer = ( state, action ) => {
  
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
      }
    default:
      throw new Error(`Unhandled action type: ${type}, at openCartReducer`) 
  }
} 

//"helper" functions

const addToCart = (cartItems, itemToAdd) => {
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

const decreaseCartQty = (cartItems, itemToRem) => {

  const existingItem = cartItems.find(element => element.id === itemToRem.id);

  if (existingItem.quantity === 1) return cartItems.filter((e) => e.id !== itemToRem.id)

  return cartItems.map(cartItem => 
    cartItem.id === itemToRem.id 
    ? {...cartItem, quantity: cartItem.quantity - 1} 
    : cartItem
  );
  
}

const removeCartQty = (cartItems, toClear) => {
  
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
// reducer action helper
export const actionHandler = (type, payload) => ({ type, payload });

// CONTEXT //

//default value u want to access

export const CartStateContext = createContext({
  open: false,
  setOpen: () => {},
  cartItems: [],
  infuseItem: () => {},
  qty: 0,
  setQty: () => {},
  defuseItem: () => {},
  clearOut: () => {},
  totalVal: 0,
  setTotalVal: () => {}
});

//the actual component

export const CartStateProvider = ({ children }) => {
    //destruct states as values
    const [{ open, cartItems, qty, totalVal }, dispatch] = useReducer(cartReducer, initCartStates);

    const setOpen = set => dispatch(actionHandler(CART_ACTION_TYPES.SET_OPEN, set)); 

    const updateCartItemsReducer = ( newCartItems ) => {

      const newTotal = newCartItems.reduce((total, item) => total + (item.quantity * item.price), 0)
    
      const newCartQty = newCartItems.reduce((total, item) => total + item.quantity, 0)
    
      dispatch(actionHandler(CART_ACTION_TYPES.SET_CART_ITEMS, {
          cartItems: newCartItems,
          totalVal: newTotal,
          qty: newCartQty
        })
      )
    }

    // this func will be clicked on the productcart add btn

    const infuseItem = (itemToAdd) => {
      const newCartItems = addToCart(cartItems, itemToAdd);
      updateCartItemsReducer(newCartItems)
    }
    const defuseItem = (itemToRem) => {
      const newCartItems = decreaseCartQty(cartItems, itemToRem);
      updateCartItemsReducer(newCartItems)
    }
    const clearOut = (toClear) => {
      const newCartItems = removeCartQty(cartItems, toClear);
      updateCartItemsReducer(newCartItems)
    }
      
    //object what passes the accessible values
    const value = { open, setOpen, cartItems, infuseItem, qty, defuseItem, clearOut, totalVal }

    return <CartStateContext.Provider value={value}>{children}</CartStateContext.Provider>

}