import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import CatWrap from './shop/CatWrap'
import Cat from './shop/Cat'

import { getCatAndDocs } from '../assets/firebase/firebase'
import { setCategoriesMap } from '../assets/redux/categories/category-action'
import { useDispatch } from 'react-redux'

const Shop = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    const catMap = async () => {
      const data = await getCatAndDocs();
      dispatch(setCategoriesMap(data));
    }
    catMap();
  }, [])

  return (
    <Routes>
      <Route index={true} element={<CatWrap />}/>
      <Route path={":category"} element={<Cat />} />
    </Routes>
  )
}

export default Shop