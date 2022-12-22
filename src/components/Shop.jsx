import React, {useContext} from 'react'
import styled from 'styled-components'
import { ProductContext } from '../context/ProductContext'
import ProductCard from './ProductCard'

const GridShop = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 15px;
`

const Shop = () => {

  const { products } = useContext(ProductContext)
  
  return (
    <GridShop>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </GridShop>
  )
}

export default Shop