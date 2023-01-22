import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { catSelectorMap } from '../../assets/redux/categories/category-selector'

import CatPreview from './CatPreview'

const GridShop = styled.section`
  display: grid;
  column-gap: 10px;
  row-gap: 15px;
`

const CatWrap = () => {

  const categoriesMap = useSelector(catSelectorMap)

  return (

    <GridShop>{
      Object.keys(categoriesMap).map( title => {
        const products = categoriesMap[title]

        return(<CatPreview key={title} title={title} products={products} />);
          
      })    
    }</GridShop>

  )
}

export default CatWrap