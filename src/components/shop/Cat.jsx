import React, {useEffect, useState, useContext} from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import { CategoriesContext } from '../../context/CategoriesContext'
import ProductCard from '../tools/ProductCard'

const CatWrap = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 15px;
`

const Cat = () => {

  const { category } = useParams()

  const { categoriesMap } = useContext(CategoriesContext)

  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    
    setProducts(categoriesMap[category])

  }, [category, categoriesMap])
  
  return (
    <CatWrap>
      { products && 
        products.map( product => <ProductCard key={product.id} product={product} />) 
      }
    </CatWrap>
  )
}

export default Cat