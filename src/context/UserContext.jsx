import { createContext, useState } from "react";

//default value u want to access
export const UserContext = createContext({
    user: null,
    setUser: () => null
});

//the actual component
export const UserProvider = ({children}) => {

    const [user, setUser] = useState(null);

    //object what passes the accessible values
    const value = { user, setUser }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}