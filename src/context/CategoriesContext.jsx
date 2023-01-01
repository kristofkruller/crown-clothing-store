import { createContext, useState, useEffect } from "react";
import { getCatAndDocs } from "../assets/firebase/firebase.js";

//default value u want to access
export const CategoriesContext = createContext({
    categoriesMap: {},
    setCategoriesMap: () => {}
});

//the actual component
export const CategoriesProvider = ({children}) => {

    const [categoriesMap, setCategoriesMap] = useState({});
    
    useEffect(() => {
      const catMap = async () => {
        const data = await getCatAndDocs();
        setCategoriesMap(data);
      }
      catMap();
    }, [])
    

    //object what passes the accessible values
    const value = { categoriesMap }

    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>

}