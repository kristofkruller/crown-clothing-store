import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import CatWrap from './shop/CatWrap'
import Cat from './shop/Cat'

import { useDispatch } from 'react-redux'
import { rejectFetchCategories, resolveFetchCategories, startFetchCategories } from '../assets/redux/categories/category-action'
import { getCatAndDocs } from '../assets/firebase/firebase'

const Shop = () => {
  
  const fetchCategoryAsync = () => {

    return async (dispatch) => {
  
      dispatch(startFetchCategories());
  
      try {
  
        const data = await getCatAndDocs();
  
        dispatch(resolveFetchCategories(data));
        console.log(data)
  
      } catch (error) {
  
        dispatch(rejectFetchCategories(error));
  
      }
  
    }
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryAsync())
  }, [])

  return (
    <Routes>
      <Route index={true} element={<CatWrap />}/>
      <Route path={":category"} element={<Cat />} />
    </Routes>
  )
}

export default Shop