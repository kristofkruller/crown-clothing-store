import { useDispatch } from "react-redux"
import { initCartStates, CartType } from "../cart-reducer";
import { CartItems } from "../cart-type"
import { setCart } from "../cart-action"

function useUpdateCartItems () {

  const dispatch = useDispatch();

  return function updateCartItems ( newCartItems: CartItems[] ) {
    const newCartQty = newCartItems.reduce((total, item) => total + item.quantity, 0);
    const newTotal = newCartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    
    const cart: CartItems = {
      ...initCartStates,
      items: newCartItems,
      totalVal: newTotal,
      quantity: newCartQty
    }

    dispatch(setCart(cart));
  }
}

export default useUpdateCartItems