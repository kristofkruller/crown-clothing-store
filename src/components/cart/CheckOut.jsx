import React from 'react'

import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { cartItemsSelector, totalValSelector } from '../../assets/redux/cart/cart-selector';
import { addToCart, decreaseCartQty, removeCartQty } from '../../assets/redux/cart/cart-action';

import Payment from '../payment/Payment';

const Wrapper = styled.section`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;
  .total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 36px;
  }
`
const CheckOutHeader = styled.section`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  .header-block {
    text-transform: capitalize;
    width: 23%;

    &:last-child {
      width: 8%;
    }
  }
`
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

  const dispatch = useDispatch();
  const cartItems = useSelector(cartItemsSelector);
  const totalVal = useSelector(totalValSelector);

  const infuseItem = (itemToAdd) => dispatch(addToCart(cartItems, itemToAdd))
  
  const defuseItem = (itemToRem) => dispatch(decreaseCartQty(cartItems, itemToRem))
  
  const clearOut = (toClear) => dispatch(removeCartQty(cartItems, toClear))

  return (

    <Wrapper>

      <CheckOutHeader className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </CheckOutHeader>

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
            <div className='remove-button' onClick={() => clearOut(cartItem)}>
              &#10005;
            </div>            
          </CheckOutWrap>

        )
      })}

      <div className='total'>{`Total amount ${totalVal}`}</div>
      <Payment />
    </Wrapper>
  )
}

export default CheckOut