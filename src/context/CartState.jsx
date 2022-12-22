import { createContext, useState } from "react";

//default value u want to access
export const CartStateContext = createContext({
    open: false,
});

//the actual component
export const CartStateProvider = ({children}) => {

    const [open, setOpen] = useState(false);
 
    //object what passes the accessible values
    const value = { open, setOpen }

    return <CartStateContext.Provider value={value}>{children}</CartStateContext.Provider>

}