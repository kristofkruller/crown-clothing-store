import { createContext, useState } from "react";
import SHOP_DATA from "../assets/shop-data.js"

//default value u want to access
export const ProductContext = createContext({
    products: [],
});

//the actual component
export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState(SHOP_DATA); 

    //object what passes the accessible values
    const value = { products, setProducts }

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

}