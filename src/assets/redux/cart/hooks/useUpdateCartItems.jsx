import { useDispatch } from "react-redux"
import { actionHandler } from "../../action-handler"
import { CART_ACTION_TYPES } from "../cart-type"
  
function useUpdateCartItems () {

  const dispatch = useDispatch();

  return function updateCartItems ( newCartItems ) {
    const newCartQty = newCartItems.reduce((total, item) => total + item.quantity, 0);
    const newTotal = newCartItems.reduce((total, item) => total + (item.quantity * item.price), 0);
    
    dispatch(actionHandler(CART_ACTION_TYPES.SET_CART_ITEMS, {
        cartItems: newCartItems,
        totalVal: newTotal,
        qty: newCartQty
      })
    );
  }
}

export default useUpdateCartItems