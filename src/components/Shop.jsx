import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { CategoriesContext } from '../context/CategoriesContext'
import CatPreview from './shop/CatPreview'

const GridShop = styled.section`
  display: grid;
  /* grid-template-columns: repeat(4, 1fr); */
  column-gap: 10px;
  row-gap: 15px;
`

const Shop = () => {

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

export default Shop