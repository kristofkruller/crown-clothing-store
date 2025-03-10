import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { CatArrayItem } from '../../assets/redux/categories/category-type'

import ProductCard from './ProductCard'

const CatPrevWrap = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  .title {
    font-size: 28px;
    margin-bottom: 25px;
    cursor: pointer;
  }

  .preview {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 20px;
  }
`

type CatPreviewProps = {
  title: string;
  products: CatArrayItem[];
}

const CatPreview: FC<CatPreviewProps> = ({ title, products }) => {
  return (
    <CatPrevWrap>
      <h2>
        <Link className='title' to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className='preview'>

        {products.slice(0,4).map(product => (
          
          <ProductCard key={product.id} product={product} />

        ))}

      </div>
    </CatPrevWrap>
  )
}

export default CatPreview