import { createContext, useState } from "react";
import ShopData from "../assets/shop-data.json"

//default value u want to access
export const ProductContext = createContext({
    products: [],
});

//the actual component
export const ProductProvider = ({children}) => {

    const [products, setProducts] = useState(ShopData); 

    //object what passes the accessible values
    const value = { products, setProducts }

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>

}