import { createContext, useState, useEffect } from "react";

//default value u want to access
export const CartStateContext = createContext({
    open: false,
    setOpen: () => {},
    cartItems: [],
    infuseItem: () => {},
    qty: 0,
    setQty: () => {}
});

//helper function for infuseItem

const addToCart = (cartItems, itemToAdd) => {
    //find if dropdown contains already or not
    const existingItem = cartItems.find(element => element.id === itemToAdd.id);
    //if there is a cartitem what matches with the item what we want to add then check and increase qty:
    if (existingItem) {
        return cartItems.map((cartItem) => 
        cartItem.id === itemToAdd.id 
        ? {...cartItem, quantity: cartItem.quantity + 1} 
        : cartItem
        );
    } 
    //if there is not an item in the cart set qty:1
    return [...cartItems, {...itemToAdd, quantity: 1}]
}

//the actual component
export const CartStateProvider = ({ children }) => {
    //drop down
    const [open, setOpen] = useState(false);
    //cart content
    const [cartItems, setCartItems] = useState([]);
    // this func will be clicked on the productcart add btn
    const infuseItem = (itemToAdd) => {
      setCartItems(addToCart(cartItems, itemToAdd));
    }
    // qty
    const [qty, setQty] = useState(0)

    useEffect(() => {
        const cartQty = cartItems.reduce((total, item) => total+item.quantity, 0)          
        setQty(cartQty);
    }, [cartItems])
    
    //object what passes the accessible values
    const value = { open, setOpen, cartItems, infuseItem, qty }

    return <CartStateContext.Provider value={value}>{children}</CartStateContext.Provider>

}