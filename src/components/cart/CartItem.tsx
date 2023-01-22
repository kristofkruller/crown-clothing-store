import React, { FC } from 'react'

import styled from 'styled-components';
import { CartItems } from '../../assets/redux/cart/cart-type';

const ItemConti = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }

  .item-details {
    width: 70%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }
`

type CartItemProps = {
  item: CartItems;
}

const CartItem: FC<CartItemProps> = ({ item }) => {
 
  const { imageUrl, price, name, quantity } = item;
  
  return (
    <ItemConti className='cart-item-container'>
      <img src={imageUrl} alt={name} />
      <div className='item-details'>
        <span className='name'>{name}</span>
        <span className='price'>{price} x {quantity}</span>
      </div>
    </ItemConti>
  );
};

export default CartItem