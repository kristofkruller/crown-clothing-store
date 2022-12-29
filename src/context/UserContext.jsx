import { createContext, useEffect, useReducer } from "react";
import { authStateObserver, authDocument } from "../assets/firebase/firebase";

//default value u want to access
export const UserContext = createContext({
    user: null,
    setUser: () => null
});

// Reducer

const initialUser = {
  user: null
}
export const USER_ACTION_TYPES = {
  SET_USER: "SET_USER"
}
const userReducer = (state, action) => {

  const { type, payload } = action;

  switch ( type ) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        user: payload
      }

    default:
      throw new Error(`Unhandled action type: ${type}, at userReducer`) 
  }
} 

//the actual component

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(userReducer, initialUser)

    const { user } = state;

    const setUser = set => dispatch({ type: USER_ACTION_TYPES.SET_USER, payload: set }); 

    // const [user, setUser] = useState(null);

    useEffect(() => {

      //The authStateObserver returns the unsubscribe function for the observer.

      const unsubsribeAuth = authStateObserver( user => {
        
        if (user) authDocument(user);

        setUser(user);
      
      });

      return unsubsribeAuth;
      
    }, [])
    

    //object what passes the accessible values
    const value = { user, setUser }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>

}