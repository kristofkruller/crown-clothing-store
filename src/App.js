import React from "react";
import { Routes, Route } from "react-router-dom";
import Categories from "./components/Categories";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";


const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Categories />}/>
        <Route path="shop" element={<Shop />}/>
      </Route>
    </Routes>
  );
};

export default App;
