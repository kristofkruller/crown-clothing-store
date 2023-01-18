import { useDispatch } from "react-redux"

import { CartItems } from "../cart-type"
import { setCart } from "../cart-action"

function useUpdateCartItems () {

  const dispatch = useDispatch();

  return function updateCartItems ( newCartItems: CartItems[] ) {
    const newCartQty = newCartItems.reduce((total, item) => total + item.quantity, 0);
    const newTotal = newCartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    
    

    dispatch(setCart(
        cartItems: newCartItems,
        totalVal: newTotal,
        quantity: newCartQty
      )
    );
  }
}

export default useUpdateCartItems