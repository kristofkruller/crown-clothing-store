import React, {useEffect, useState} from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { categoriesLoading, catSelectorMap } from '../../assets/redux/categories/category-selector'

import ProductCard from './ProductCard'
import Spinner from '../tools/Spinner'

const CatWrap = styled.section`
  .title {
    cursor: default;
    font-size: 28px;
    margin-bottom: 25px;
  }

  & > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 10px;
    row-gap: 15px;
  }
`
//HAVE TO CAST PARAMS
type CatRouteParams = {
  category: string;
}

const Cat = () => {

  const { category } = useParams<keyof CatRouteParams>() as CatRouteParams;

  const categoriesMap = useSelector(catSelectorMap)
  const loading = useSelector(categoriesLoading)

  const [products, setProducts] = useState(categoriesMap[category])

  useEffect(() => {
    
    setProducts(categoriesMap[category])

  }, [category, categoriesMap])
  
  return (
    <CatWrap>
      <h2 className='title'>{category.toUpperCase()}</h2>
      { loading ? 
      <Spinner /> :
      (<div>
        { products && 
          products.map( product => <ProductCard key={product.id} product={product} />) 
        }
      </div>)
      }
    </CatWrap>
  )
}

export default Cat