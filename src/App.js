import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Spinner from "./components/Spinner";

const Categories = lazy(() => import("./components/Categories"));
const Shop = lazy(() => import("./components/Shop"));
const SignIn = lazy(() => import("./components/SignIn"));

const App = () => {

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index={true} element={<Categories />}/>
          <Route path="shop" element={<Shop />}/>
          <Route path="sign-in" element={<SignIn />}/>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
