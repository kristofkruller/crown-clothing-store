import { createContext, useState, useEffect } from "react";
import { authStateObserver, authDocument } from "../assets/firebase/firebase";

//default value u want to access
export const UserContext = createContext({
    user: null,
    setUser: () => null
});

//the actual component
export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    useEffect(() => {

      //The authStateObserver returns the unsubscribe function for the observer.

      const unsubsribeAuth = authStateObserver(  user => {
        
        if (user) authDocument(user);

        setUser(user);
      
      });

      return unsubsribeAuth;
      
    }, [])
    

    //object what passes the accessible values
    const value = { user, setUser }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}