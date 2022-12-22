import React, {useContext} from 'react'
import styled from 'styled-components'
import Btn from './Btn'
import { CartStateContext } from '../../context/CartState'


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
    }
`

const CartDropDown = () => {
    
  const { open } = useContext(CartStateContext)

  return (
    <>
    { open ? 
    <DropDown>
        <div className='cart-items' />
        <Btn buttonType="default">Checkout</Btn>
    </DropDown>
    : <></> }
    </>
  )
}

export default CartDropDown