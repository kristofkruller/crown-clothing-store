import React, { useContext } from 'react'
import styled from 'styled-components'

import { CategoriesContext } from '../../context/CategoriesContext'
import CatPreview from './CatPreview'

const GridShop = styled.section`
  display: grid;
  column-gap: 10px;
  row-gap: 15px;
`

const CatWrap = () => {

  const { categoriesMap } = useContext(CategoriesContext)

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