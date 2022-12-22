import { createContext, useState } from "react";

//default value u want to access
export const CartStateContext = createContext({
    open: false,
    setOpen: () => {},
    cartItem: [],
    infuseItem: () => {},
});
//helper function for infuseItem

const addToCart = (cartItem, itemToAdd) => {
  
  const existingItem = cartItem.find(e => e.id === itemToAdd.id);
  //if there is a cartitem what matches with the item what we want to add then check and increase qty:
  if (existingItem) return cartItem.map((e) => e.id === itemToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : e);
  //if there is not an item in the cart yet qty:1
  return [...cartItem, {...itemToAdd, quantity: 1}]
}

//the actual component
export const CartStateProvider = ({children}) => {
    //drop down
    const [open, setOpen] = useState(false);

    //cart content
    const [cartItem, setCartItem] = useState([]);
 
    const infuseItem = (itemToAdd) => {
      setCartItem(addToCart(cartItem, itemToAdd));
    }

    //object what passes the accessible values
    const value = { open, setOpen, cartItem, infuseItem }

    return <CartStateContext.Provider value={value}>{children}</CartStateContext.Provider>

}