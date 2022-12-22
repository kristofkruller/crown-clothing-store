import React, { useContext } from 'react'
import styled from 'styled-components'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'
import { CartStateContext } from '../../context/CartState'

const IconWrapp = styled.div`
  width: 45px;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  .shopping-icon {
    width: 24px;
    height: 24px;
  }

  .item-count {
    position: absolute;
    font-size: 10px;
    font-weight: bold;
    bottom: 12px;
  }
`

const CartIcon = () => {

  const { open, setOpen } = useContext(CartStateContext)
  const opener = () => setOpen(!open)

  return (
    <IconWrapp onClick={opener}>
        <ShopIcon className="shopping-icon" />
        <span className="item-count">0</span>
    </IconWrapp>
  )
}

export default CartIcon