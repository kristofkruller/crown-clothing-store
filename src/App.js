import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Spinner from "./components/tools/Spinner";

const Navigation = lazy(() => import("./components/Navigation"));
const Categories = lazy(() => import("./components/Categories"));
const Shop = lazy(() => import("./components/Shop"));
const Auth = lazy(() => import("./components/auth/Auth"));
const CheckOut = lazy(() => import("./components/cart/CheckOut"));

const App = () => {

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Categories />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="auth" element={<Auth />}/>
          <Route path="checkout" element={<CheckOut />}/>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
