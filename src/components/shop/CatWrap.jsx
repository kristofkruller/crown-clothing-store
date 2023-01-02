import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import CatPreview from './CatPreview'

const GridShop = styled.section`
  display: grid;
  column-gap: 10px;
  row-gap: 15px;
`

const CatWrap = () => {

  const categoriesMap = useSelector(state => state.categories.categoriesMap)

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