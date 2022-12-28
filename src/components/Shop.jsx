import React from 'react'
import { Routes, Route } from 'react-router-dom'
import CatWrap from './shop/CatWrap'
import Cat from './shop/Cat'

const Shop = () => {
  
  return (
    <Routes>
      <Route index={true} element={<CatWrap />}/>
      <Route path={":category"} element={<Cat />} />
    </Routes>
  )
}

export default Shop