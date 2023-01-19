import React from 'react'

import styled from 'styled-components'
import Btn from '../tools/Btn'
import CartItem from './CartItem'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { cartItemsSelector, openSelector } from '../../assets/redux/cart/cart-selector'

const DropDown = styled.div`
    position: absolute;
    width: 240px;
    height: 340px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid black;
    background-color: white;
    top: 90px;
    right: 40px;
    z-index: 5;
  
    .empty-message {
      font-size: 18px;
      margin: 50px auto;
    }
  
    .cart-items {
      height: 240px;
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
      overflow-x: hidden;
    }
  
    button {
      margin-top: auto;
      &:hover * {
        color: black;
      }
      & * {
        color: white;
      }
    }
`

const CartDropDown = () => {
    
  const open = useSelector(openSelector);
  const cartItems = useSelector(cartItemsSelector);

  let nav = useNavigate();

  const bringToCheckout: Function = () => nav("/checkout");

  return (
    <>
    { open && 
    <DropDown>
      {cartItems ? ( 
        <>
          <div className='cart-items'>
            { cartItems.map(item => (
              <CartItem key={item.id} item={item} />
              ))
            }        
          </div>
          <Btn buttonType="default" onClick={bringToCheckout}>Checkout</Btn>
        </>
        ) : <span className='empty-message'>Your cart is empty</span>
      }
    </DropDown> }
    </>
  )
}

export default CartDropDown