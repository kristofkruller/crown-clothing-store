import React, {useContext} from 'react'
import { CartStateContext } from '../../context/CartState'
import styled from 'styled-components'
import Btn from './Btn'

const ShopWrap = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;

  img {
    width: 100%;
    height: 95%;
    object-fit: cover;
    margin-bottom: 5px;
  }

  button {
    width: 80%;
    opacity: 0.7;
    position: absolute;
    top: 255px;
    display: none;
  }

  &:hover {
    img {
      opacity: 0.8;
    }

    button {
      opacity: 0.85;
      display: flex;
    }
  }

  .footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

    .name {
      width: 90%;
      margin-bottom: 15px;
    }

    .price {
      width: 10%;
    }
  }
`
const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { infuseItem } = useContext(CartStateContext)

  const addToCart = () => infuseItem(product)

  return (
   
    <ShopWrap>
      <img src={imageUrl} alt={name}/>
      <div className='footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Btn buttonType="inverted" onClick={addToCart}>Add to cart</Btn>
    </ShopWrap>  
  )
}

export default ProductCard