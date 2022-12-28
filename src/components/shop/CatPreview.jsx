import React from 'react'
import styled from 'styled-components'

import ProductCard from '../tools/ProductCard'

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


const CatPreview = ({ title, products }) => {
  return (
    <CatPrevWrap>
      <h2>
        <span className='title'>{title}</span>
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