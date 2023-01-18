import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { setOpen } from '../../assets/redux/cart/cart-action'
import { openSelector, qtySelector } from '../../assets/redux/cart/cart-selector'
import { ReactComponent as ShopIcon } from '../../assets/shopping-bag.svg'

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
  
  const dispatch = useDispatch();
  const open = useSelector(openSelector);
  const quantity = useSelector(qtySelector);

  const opener = () => dispatch(
    setOpen(!open)
  )

  return (
    <IconWrapp onClick={opener}>
        <ShopIcon className="shopping-icon" />
        <span className="item-count">{quantity}</span>
    </IconWrapp>
  )
}

export default CartIcon