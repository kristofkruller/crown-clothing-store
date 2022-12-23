import React, { useContext } from 'react'
import { CartStateContext } from '../../context/CartState';

import styled from 'styled-components';

const CheckOutWrap = styled.section`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;

  .image-container {
    width: 23%;
    padding-right: 15px;

    img {
      width: 100%;
      height: 100%;
    }
  }
  .name,
  .quantity,
  .price {
    width: 23%;
  }

  .quantity {
    display: flex;

    .arrow {
      cursor: pointer;
    }

    .value {
      margin: 0 10px;
    }
  }

  .remove-button {
    padding-left: 12px;
    cursor: pointer;
  }
`

const CheckOut = () => {

  const { cartItems, infuseItem, defuseItem } = useContext(CartStateContext)

  return (
    <>
      {cartItems.map(cartItem => {

        const { id, name, imageUrl, price, quantity } = cartItem;
        
        return (
          <CheckOutWrap key={id} className='checkout-item-container'>
            <div className='image-container'>
              <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'> {name} </span>
            <span className='quantity'>
              <div className='arrow left' onClick={() => defuseItem(cartItem)}>
                &#10094;
              </div>
              <span className='value'>{quantity}</span>
              <div className='arrow right' onClick={() => infuseItem(cartItem)}>
                &#10095;
              </div>
            </span>
            <span className='price'> {price}</span>
            <div className='remove-button' >X
            </div>
          </CheckOutWrap>
        )
      })}
    </>
  )
}

export default CheckOut