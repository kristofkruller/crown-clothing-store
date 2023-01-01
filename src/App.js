import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/tools/Spinner";

//user auth
import { authStateObserver, authDocument } from "./assets/firebase/firebase";
import { useEffect } from "react";
import { setUser } from "./assets/redux/user/user-action";
import { useDispatch } from "react-redux";

const Navigation = lazy(() => import("./components/Navigation"));
const Categories = lazy(() => import("./components/Categories"));
const Shop = lazy(() => import("./components/Shop"));
const Auth = lazy(() => import("./components/auth/Auth"));
const CheckOut = lazy(() => import("./components/cart/CheckOut"));

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    //The authStateObserver returns the unsubscribe function for the observer.

    const unsubsribeAuth = authStateObserver((user) => {
      
      if (user) authDocument(user);

      dispatch(setUser(user));
    
    });

    return unsubsribeAuth;
    
  }, [])

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Categories />}/>
          <Route path="shop/*" element={<Shop />}/>
          <Route path="auth" element={<Auth />}/>
          <Route path="checkout" element={<CheckOut />}/>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
